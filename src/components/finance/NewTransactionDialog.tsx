import { useState, useMemo } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { Label } from '@/components/ui/label';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from '@/components/ui/command';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, ArrowUpCircle, ArrowDownCircle, ChevronsUpDown, Check } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES, TransactionType } from '@/types/finance';

interface NewTx {
  type: TransactionType;
  category: string;
  amount: string;
  description: string;
  date: Date | undefined;
  accountId: string;
}

const EMPTY: NewTx = {
  type: 'expense',
  category: '',
  amount: '',
  description: '',
  date: new Date(),
  accountId: '',
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewTransactionDialog({ open, onOpenChange }: Props) {
  const { addTransaction, data } = useFinance();
  const [form, setForm] = useState<NewTx>(EMPTY);
  const [calOpen, setCalOpen] = useState(false);
  const [descOpen, setDescOpen] = useState(false);

  const sortedTemplates = useMemo(
    () => [...data.billTemplates].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')),
    [data.billTemplates]
  );

  const filteredTemplates = useMemo(
    () => form.category
      ? sortedTemplates.filter(t => t.category === form.category)
      : sortedTemplates,
    [sortedTemplates, form.category]
  );

  function handleSave() {
    if (!form.description || !form.amount || !form.category || !form.date) return;
    addTransaction({
      type: form.type,
      category: form.category as any,
      amount: parseFloat(form.amount.replace(',', '.')),
      description: form.description,
      date: format(form.date, 'yyyy-MM-dd'),
      accountId: form.accountId && form.accountId !== 'none' ? form.accountId : undefined,
    });
    setForm(EMPTY);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Nova Transação</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          {/* Type toggle */}
          <div>
            <Label className="text-sm mb-2 block">Tipo</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={form.type === 'income' ? 'default' : 'outline'}
                className={cn('gap-2', form.type === 'income' && 'bg-primary hover:bg-primary/90 border-primary')}
                onClick={() => setForm(f => ({ ...f, type: 'income', category: '' }))}
              >
                <ArrowUpCircle className="h-4 w-4" /> Receita
              </Button>
              <Button
                type="button"
                variant={form.type === 'expense' ? 'default' : 'outline'}
                className={cn('gap-2', form.type === 'expense' && 'bg-destructive hover:bg-destructive/90 border-destructive')}
                onClick={() => setForm(f => ({ ...f, type: 'expense', category: '' }))}
              >
                <ArrowDownCircle className="h-4 w-4" /> Despesa
              </Button>
            </div>
          </div>

          {/* Category */}
          <div>
            <Label className="text-sm mb-2 block">Categoria</Label>
            <Select value={form.category} onValueChange={v => setForm(f => {
              const newForm = { ...f, category: v };
              // Clear description if current one belongs to a template of a different category
              const matchingTemplate = sortedTemplates.find(t => t.name === f.description);
              if (matchingTemplate && matchingTemplate.category !== v) {
                newForm.description = '';
              }
              return newForm;
            })}>
              <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>
                {(form.type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES).map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div>
            <Label className="text-sm mb-2 block">Valor (R$)</Label>
            <Input
              type="number" min="0" step="0.01" placeholder="0,00"
              value={form.amount}
              onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
            />
          </div>

          {/* Description - Combobox with accounts */}
          <div>
            <Label className="text-sm mb-2 block">Descrição</Label>
            <div className="flex gap-1.5 items-center">
              <Popover open={descOpen} onOpenChange={setDescOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={descOpen}
                    className={cn('flex-1 justify-between font-normal', !form.description && 'text-muted-foreground')}
                  >
                    {form.description || 'Selecione ou digite...'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                  <Command>
                    <CommandInput
                      placeholder="Buscar ou digitar descrição..."
                      value={form.description}
                      onValueChange={v => setForm(f => ({ ...f, description: v }))}
                    />
                    <CommandList>
                      <CommandEmpty>
                        <span className="text-muted-foreground text-xs">
                          {form.description ? `Usar "${form.description}" como descrição` : 'Nenhum item encontrado'}
                        </span>
                      </CommandEmpty>
                      {filteredTemplates.length > 0 && (
                        <CommandGroup heading="Plano de Contas">
                          {filteredTemplates.map(template => (
                            <CommandItem
                              key={template.id}
                              value={template.name}
                              onSelect={() => {
                                setForm(f => ({
                                  ...f,
                                  description: template.name,
                                  category: template.category,
                                }));
                                setDescOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  form.description === template.name ? 'opacity-100' : 'opacity-0'
                                )}
                              />
                              {template.name}
                              <span className="ml-auto text-xs text-muted-foreground">{template.category}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <VoiceInputButton onTranscript={t => setForm(f => ({ ...f, description: f.description ? f.description + ' ' + t : t }))} />
            </div>
          </div>

          {/* Account */}
          <div>
            <Label className="text-sm mb-2 block">Conta (opcional)</Label>
            <Select value={form.accountId} onValueChange={v => setForm(f => ({ ...f, accountId: v }))}>
              <SelectTrigger><SelectValue placeholder="Nenhuma" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Nenhuma</SelectItem>
                {data.accounts.length > 0 ? (
                  data.accounts.map(a => (
                    <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                  ))
                ) : (
                  <SelectItem value="no-accounts" disabled>Cadastre uma conta primeiro</SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div>
            <Label className="text-sm mb-2 block">Data</Label>
            <Popover open={calOpen} onOpenChange={setCalOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn('w-full justify-start text-left font-normal', !form.date && 'text-muted-foreground')}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {form.date
                    ? format(form.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                    : 'Selecione uma data'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single" selected={form.date}
                  onSelect={d => { setForm(f => ({ ...f, date: d })); setCalOpen(false); }}
                  initialFocus className="p-3 pointer-events-auto" locale={ptBR}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => { onOpenChange(false); setForm(EMPTY); }}>Cancelar</Button>
          <Button onClick={handleSave} disabled={!form.description || !form.amount || !form.category || !form.date}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
