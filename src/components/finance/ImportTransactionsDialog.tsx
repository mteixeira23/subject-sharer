import { useState, useCallback, useMemo, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Upload, AlertTriangle, Check, Loader2 } from 'lucide-react';
import { useFinance } from '@/contexts/FinanceContext';
import { EXPENSE_CATEGORIES, ExpenseCategory } from '@/types/finance';
import {
  ParsedTransaction,
  parseOFX,
  parseCSV,
  detectCSVSeparator,
  parseCSVLines,
  autoDetectColumns,
  markDuplicates,
  normalizeAITransactions,
} from '@/lib/importParsers';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialAccountId?: string;
}

type Step = 'upload' | 'map-columns' | 'preview';

async function extractTextFromPDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items
      .map((item: any) => item.str)
      .join(' ');
    pages.push(text);
  }

  return pages.join('\n');
}

export function ImportTransactionsDialog({ open, onOpenChange, initialAccountId }: Props) {
  const { data, addTransaction } = useFinance();

  const [step, setStep] = useState<Step>('upload');
  const [fileType, setFileType] = useState<'ofx' | 'csv' | 'pdf' | null>(null);
  const [csvContent, setCsvContent] = useState('');
  const [csvHeaders, setCsvHeaders] = useState<string[]>([]);
  const [dateCol, setDateCol] = useState(0);
  const [descCol, setDescCol] = useState(1);
  const [amountCol, setAmountCol] = useState(2);
  const [parsed, setParsed] = useState<ParsedTransaction[]>([]);
  const [defaultAccountId, setDefaultAccountId] = useState<string>(initialAccountId || (data.accounts[0]?.id ?? ''));

  // Sync defaultAccountId whenever the dialog opens with a new initialAccountId
  useEffect(() => {
    if (open) {
      const effectiveId = initialAccountId || data.accounts[0]?.id || '';
      setDefaultAccountId(effectiveId);
    }
  }, [open, initialAccountId, data.accounts]);
  const [importing, setImporting] = useState(false);
  const [processingPDF, setProcessingPDF] = useState(false);

  const reset = useCallback(() => {
    setStep('upload');
    setFileType(null);
    setCsvContent('');
    setCsvHeaders([]);
    setParsed([]);
    setImporting(false);
    setProcessingPDF(false);
    setDefaultAccountId(initialAccountId || (data.accounts[0]?.id ?? ''));
  }, [initialAccountId, data.accounts]);

  const handleClose = useCallback((o: boolean) => {
    if (!o) reset();
    onOpenChange(o);
  }, [onOpenChange, reset]);

  // Assign default accountId to all parsed transactions
  const applyDefaultAccount = useCallback((txs: ParsedTransaction[]): ParsedTransaction[] => {
    const accId = defaultAccountId || data.accounts[0]?.id || '';
    return txs.map(tx => ({ ...tx, accountId: tx.accountId || accId }));
  }, [defaultAccountId, data.accounts]);

  const handlePDF = useCallback(async (file: File) => {
    setFileType('pdf');
    setProcessingPDF(true);
    try {
      // Always send PDF as base64 for vision processing (more reliable than text extraction)
      const arrayBuffer = await file.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binary = '';
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const body = { pdfBase64: btoa(binary) };

      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData?.session?.access_token || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/parse-bank-statement`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        const errText = await response.text().catch(() => 'Erro desconhecido');
        toast.error('Erro ao processar PDF: ' + errText);
        reset();
        return;
      }

      const fnData = await response.json();

      if (!fnData?.transactions?.length) {
        toast.error('Nenhuma transação encontrada no PDF.');
        reset();
        return;
      }

      const normalized = normalizeAITransactions(fnData.transactions);
      const existingWithAccount = data.transactions.map(t => ({ ...t, accountId: t.accountId || '' }));
      const marked = markDuplicates(normalized, existingWithAccount, defaultAccountId);
      const accId = defaultAccountId || data.accounts[0]?.id || '';
      setParsed(marked.map(tx => ({ ...tx, accountId: accId })));
      setStep('preview');
    } catch (err) {
      console.error('PDF processing error:', err);
      toast.error('Erro ao processar o PDF');
      reset();
    } finally {
      setProcessingPDF(false);
    }
  }, [data.transactions, data.accounts, defaultAccountId, reset]);

  const handleFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split('.').pop()?.toLowerCase();
    const accId = defaultAccountId || data.accounts[0]?.id || '';

    if (ext === 'pdf') {
      await handlePDF(file);
    } else if (ext === 'ofx' || ext === 'qfx') {
      const text = await file.text();
      setFileType('ofx');
      const txs = parseOFX(text);
      const existingWithAccount = data.transactions.map(t => ({ ...t, accountId: t.accountId || '' }));
      const marked = markDuplicates(txs, existingWithAccount, accId);
      setParsed(marked.map(tx => ({ ...tx, accountId: accId })));
      setStep('preview');
    } else {
      const text = await file.text();
      setFileType('csv');
      setCsvContent(text);
      const sep = detectCSVSeparator(text);
      const lines = parseCSVLines(text, sep);
      if (lines.length > 0) {
        setCsvHeaders(lines[0]);
        const auto = autoDetectColumns(lines[0]);
        setDateCol(auto.dateCol);
        setDescCol(auto.descCol);
        setAmountCol(auto.amountCol);
      }
      setStep('map-columns');
    }
    e.target.value = '';
  }, [data.transactions, data.accounts, defaultAccountId, handlePDF]);

  const handleCSVParse = useCallback(() => {
    const txs = parseCSV(csvContent, dateCol, descCol, amountCol);
    const existingWithAccount = data.transactions.map(t => ({ ...t, accountId: t.accountId || '' }));
    const marked = markDuplicates(txs, existingWithAccount, defaultAccountId);
    const accId = defaultAccountId || data.accounts[0]?.id || '';
    setParsed(marked.map(tx => ({ ...tx, accountId: accId })));
    setStep('preview');
  }, [csvContent, dateCol, descCol, amountCol, data.transactions, data.accounts, defaultAccountId]);

  const updateCategory = useCallback((idx: number, cat: ExpenseCategory) => {
    setParsed(prev => prev.map((t, i) => i === idx ? { ...t, category: cat } : t));
  }, []);

  const updateBillTemplate = useCallback((idx: number, templateName: string) => {
    const template = data.billTemplates.find(t => t.name === templateName);
    setParsed(prev => prev.map((t, i) => {
      if (i !== idx) return t;
      if (template) {
        return { ...t, billTemplateName: templateName, category: (template.category || 'Outros') as ExpenseCategory };
      }
      return { ...t, billTemplateName: undefined };
    }));
  }, [data.billTemplates]);

  const updateAccountId = useCallback((idx: number, accId: string) => {
    setParsed(prev => prev.map((t, i) => i === idx ? { ...t, accountId: accId } : t));
  }, []);

  const handleDefaultAccountChange = useCallback((newAccId: string) => {
    const oldAccId = defaultAccountId;
    setDefaultAccountId(newAccId);
    // Update all transactions that still have the old default
    setParsed(prev => prev.map(t => t.accountId === oldAccId ? { ...t, accountId: newAccId } : t));
  }, [defaultAccountId]);

  const nonDuplicates = useMemo(() => parsed.filter(t => !t.isDuplicate), [parsed]);
  const duplicates = useMemo(() => parsed.filter(t => t.isDuplicate), [parsed]);

  const handleImport = useCallback(async () => {
    const hasNoAccount = nonDuplicates.some(tx => !tx.accountId);
    if (hasNoAccount) {
      toast.error('Todas as transações precisam ter uma conta selecionada');
      return;
    }
    setImporting(true);
    try {
      for (const tx of nonDuplicates) {
        await addTransaction({
          date: tx.date,
          description: tx.description,
          amount: tx.amount,
          type: tx.type,
          category: tx.category,
          accountId: tx.accountId!,
        });
      }
      toast.success(`${nonDuplicates.length} transações importadas com sucesso!`);
      handleClose(false);
    } catch {
      toast.error('Erro ao importar transações');
    } finally {
      setImporting(false);
    }
  }, [nonDuplicates, addTransaction, handleClose]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Importar Extrato</DialogTitle>
          <DialogDescription>
            Importe transações de um arquivo OFX, CSV ou PDF do seu internet banking.
          </DialogDescription>
        </DialogHeader>

        {/* Step: Upload */}
        {step === 'upload' && (
          <div className="flex flex-col items-center gap-4 py-8">
            {processingPDF ? (
              <>
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                <p className="text-sm text-muted-foreground">Processando extrato com IA...</p>
                <p className="text-xs text-muted-foreground">Isso pode levar alguns segundos</p>
              </>
            ) : (
              <>
                <Upload className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Selecione um arquivo .ofx, .csv ou .pdf</p>
                <Label htmlFor="import-file" className="cursor-pointer">
                  <Button asChild variant="outline">
                    <span>Escolher Arquivo</span>
                  </Button>
                </Label>
                <input
                  id="import-file"
                  type="file"
                  accept=".ofx,.qfx,.csv,.pdf"
                  className="hidden"
                  onChange={handleFile}
                />
              </>
            )}
          </div>
        )}

        {/* Step: Map CSV columns */}
        {step === 'map-columns' && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Mapeie as colunas do CSV. Header detectado:
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label className="text-xs">Data</Label>
                <Select value={String(dateCol)} onValueChange={v => setDateCol(Number(v))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {csvHeaders.map((h, i) => (
                      <SelectItem key={i} value={String(i)}>{h || `Coluna ${i + 1}`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Descrição</Label>
                <Select value={String(descCol)} onValueChange={v => setDescCol(Number(v))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {csvHeaders.map((h, i) => (
                      <SelectItem key={i} value={String(i)}>{h || `Coluna ${i + 1}`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Valor</Label>
                <Select value={String(amountCol)} onValueChange={v => setAmountCol(Number(v))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {csvHeaders.map((h, i) => (
                      <SelectItem key={i} value={String(i)}>{h || `Coluna ${i + 1}`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setStep('upload')}>Voltar</Button>
              <Button onClick={handleCSVParse}>Continuar</Button>
            </DialogFooter>
          </div>
        )}

        {/* Step: Preview */}
        {step === 'preview' && (
          <div className="flex flex-col gap-4 min-h-0 flex-1">
            <div className="flex items-center gap-3">
              <Label className="text-sm whitespace-nowrap">Conta Bancária:</Label>
              <Select value={defaultAccountId} onValueChange={handleDefaultAccountChange}>
                <SelectTrigger className="w-[200px]"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  {data.accounts.map(acc => (
                    <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 text-sm">
              <Badge variant="secondary">
                <Check className="h-3 w-3 mr-1" />
                {nonDuplicates.length} novas
              </Badge>
              {duplicates.length > 0 && (
                <Badge variant="outline" className="text-amber-600 border-amber-300">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  {duplicates.length} duplicatas (ignoradas)
                </Badge>
              )}
            </div>

            <div className="overflow-y-auto border rounded-md" style={{ maxHeight: '50vh' }}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[90px]">Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="w-[90px]">Valor</TableHead>
                    <TableHead className="w-[130px]">Categoria</TableHead>
                    <TableHead className="w-[150px]">Plano de Contas</TableHead>
                    <TableHead className="w-[50px]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parsed.map((tx, idx) => (
                    <TableRow key={idx} className={tx.isDuplicate ? 'opacity-40' : ''}>
                      <TableCell className="text-xs">{tx.date}</TableCell>
                      <TableCell className="text-xs max-w-[180px] truncate">{tx.description}</TableCell>
                      <TableCell className={`text-xs font-medium ${tx.type === 'income' ? 'text-emerald-600' : 'text-red-500'}`}>
                        {tx.type === 'income' ? '+' : '-'}R$ {tx.amount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {tx.isDuplicate ? (
                          <span className="text-xs text-muted-foreground">{tx.category}</span>
                        ) : (
                          <Select value={tx.category} onValueChange={(v) => updateCategory(idx, v as ExpenseCategory)}>
                            <SelectTrigger className="h-7 text-xs"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              {EXPENSE_CATEGORIES.map(c => (
                                <SelectItem key={c} value={c}>{c}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </TableCell>
                      <TableCell>
                        {tx.isDuplicate ? (
                          <span className="text-xs text-muted-foreground">—</span>
                        ) : (
                          <Select value={tx.billTemplateName || 'none'} onValueChange={(v) => updateBillTemplate(idx, v === 'none' ? '' : v)}>
                            <SelectTrigger className="h-7 text-xs"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Nenhuma</SelectItem>
                              {data.billTemplates.map(bt => (
                                <SelectItem key={bt.id} value={bt.name}>{bt.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </TableCell>
                      <TableCell>
                        {tx.isDuplicate ? (
                          <AlertTriangle className="h-4 w-4 text-amber-500" />
                        ) : (
                          <Check className="h-4 w-4 text-emerald-500" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={reset}>Voltar</Button>
              <Button onClick={handleImport} disabled={importing || nonDuplicates.length === 0}>
                {importing ? 'Importando...' : `Importar ${nonDuplicates.length} transações`}
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
