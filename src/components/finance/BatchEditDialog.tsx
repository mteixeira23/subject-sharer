import { useState, useMemo } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react';

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BatchEditDialog({ open, onOpenChange }: Props) {
  const { data, updateTransaction } = useFinance();
  const [sourceAccountId, setSourceAccountId] = useState<string>('');
  const [targetAccountId, setTargetAccountId] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [moving, setMoving] = useState(false);

  const filteredTransactions = useMemo(() => {
    if (!sourceAccountId) return [];
    return data.transactions
      .filter(t => (t.accountId ?? 'none') === sourceAccountId)
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [data.transactions, sourceAccountId]);

  const allSelected = filteredTransactions.length > 0 && selectedIds.size === filteredTransactions.length;

  function toggleAll() {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredTransactions.map(t => t.id)));
    }
  }

  function toggleOne(id: string) {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function handleMove() {
    if (!targetAccountId || selectedIds.size === 0) return;
    setMoving(true);
    try {
      const newAccountId = targetAccountId === 'none' ? undefined : targetAccountId;
      await Promise.all(
        Array.from(selectedIds).map(id => updateTransaction(id, { accountId: newAccountId }))
      );
      toast.success(`${selectedIds.size} transação(ões) movida(s) com sucesso!`);
      setSelectedIds(new Set());
      setSourceAccountId('');
      setTargetAccountId('');
      onOpenChange(false);
    } catch {
      toast.error('Erro ao mover transações.');
    } finally {
      setMoving(false);
    }
  }

  function handleClose(val: boolean) {
    if (!val) {
      setSelectedIds(new Set());
      setSourceAccountId('');
      setTargetAccountId('');
    }
    onOpenChange(val);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Alterar Lote</DialogTitle>
          <DialogDescription>
            Selecione a conta de origem, marque as transações e mova para outra conta.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex-1 w-full">
            <label className="text-sm font-medium text-muted-foreground mb-1 block">Conta de Origem</label>
            <Select value={sourceAccountId} onValueChange={v => { setSourceAccountId(v); setSelectedIds(new Set()); }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a conta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Sem conta</SelectItem>
                {data.accounts.map(acc => (
                  <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ArrowRight className="h-5 w-5 text-muted-foreground hidden sm:block mt-6" />

          <div className="flex-1 w-full">
            <label className="text-sm font-medium text-muted-foreground mb-1 block">Conta de Destino</label>
            <Select value={targetAccountId} onValueChange={setTargetAccountId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione a conta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Sem conta</SelectItem>
                {data.accounts.filter(a => a.id !== sourceAccountId).map(acc => (
                  <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {sourceAccountId && (
          <div className="text-sm text-muted-foreground">
            {filteredTransactions.length} transação(ões) encontrada(s)
            {selectedIds.size > 0 && ` · ${selectedIds.size} selecionada(s)`}
          </div>
        )}

        <ScrollArea className="flex-1 min-h-0 max-h-[50vh] border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={toggleAll}
                    disabled={filteredTransactions.length === 0}
                  />
                </TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    {sourceAccountId ? 'Nenhuma transação nesta conta.' : 'Selecione uma conta de origem.'}
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map(t => (
                  <TableRow key={t.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedIds.has(t.id)}
                        onCheckedChange={() => toggleOne(t.id)}
                      />
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm">
                      {format(parseISO(t.date), 'dd/MM/yy', { locale: ptBR })}
                    </TableCell>
                    <TableCell className="text-sm max-w-[200px] truncate">{t.description}</TableCell>
                    <TableCell className="text-sm">{t.category}</TableCell>
                    <TableCell className={`text-right text-sm font-medium ${t.type === 'income' ? 'text-emerald-600' : 'text-red-500'}`}>
                      {t.type === 'income' ? '+' : '-'}{formatBRL(t.amount)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </ScrollArea>

        <Button
          onClick={handleMove}
          disabled={selectedIds.size === 0 || !targetAccountId || (targetAccountId === sourceAccountId) || moving}
          className="w-full"
        >
          {moving ? 'Movendo...' : `Mover ${selectedIds.size} transação(ões)`}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
