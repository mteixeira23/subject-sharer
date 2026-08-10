import { useState } from 'react';
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
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, RefreshCw, Calendar as CalendarIconSolid } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { EXPENSE_CATEGORIES } from '@/types/finance';

interface FormData {
  type: 'payable' | 'receivable';
  description: string;
  amount: string;
  dueDate: Date | undefined;
  category: string;
  accountId: string;
  recurrenceMode: 'once' | 'monthly';
  recurrenceDay: string;
}

const EMPTY: FormData = {
  type: 'payable',
  description: '',
  amount: '',
  dueDate: new Date(),
  category: '',
  accountId: '',
  recurrenceMode: 'once',
  recurrenceDay: '1',
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewBillDialog({ open, onOpenChange }: Props) {
  const { addBill, addBills, data } = useFinance();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [calOpen, setCalOpen] = useState(false);

  function handleSave() {
    if (!form.description || !form.amount || !form.category) return;

    const baseFields = {
      type: form.type as 'payable' | 'receivable',
      description: form.description,
      amount: parseFloat(form.amount.replace(',', '.')),
      category: form.category as any,
      accountId: form.accountId && form.accountId !== 'none' ? form.accountId : undefined,
      paid: false,
    };

    if (form.recurrenceMode === 'once') {
      if (!form.dueDate) return;
      addBill({
        ...baseFields,
        dueDate: format(form.dueDate, 'yyyy-MM-dd'),
        recurrenceMode: 'once',
      });
    } else {
      // Monthly: create one bill per remaining month of the year
      const now = new Date();
      const currentMonth = now.getMonth(); // 0-indexed
      const currentYear = now.getFullYear();
      const day = parseInt(form.recurrenceDay, 10);
      if (isNaN(day) || day < 1 || day > 31) return;

      const bills = [];
      for (let m = currentMonth; m < 12; m++) {
        // Clamp day to last day of month
        const lastDay = new Date(currentYear, m + 1, 0).getDate();
        const clampedDay = Math.min(day, lastDay);
        const dueDate = `${currentYear}-${String(m + 1).padStart(2, '0')}-${String(clampedDay).padStart(2, '0')}`;
        bills.push({
          ...baseFields,
          dueDate,
          recurrenceMode: 'monthly' as const,
          recurrenceDay: day,
        });
      }
      addBills(bills);
    }

    setForm(EMPTY);
    onOpenChange(false);
  }

  const isValid = form.description && form.amount && form.category &&
    (form.recurrenceMode === 'once' ? !!form.dueDate : !!form.recurrenceDay);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nova Conta a Pagar/Receber</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-1">
          {data.billTemplates.length > 0 && (
            <div>
              <Label className="text-sm mb-2 block">Conta cadastrada (opcional)</Label>
              <Select
                value=""
                onValueChange={v => {
                  const tpl = data.billTemplates.find(t => t.id === v);
                  if (tpl) setForm(f => ({ ...f, description: tpl.name, category: tpl.category }));
                }}
              >
                <SelectTrigger><SelectValue placeholder="Selecione uma conta" /></SelectTrigger>
                <SelectContent>
                  {data.billTemplates.map(t => (
                    <SelectItem key={t.id} value={t.id}>{t.name} ({t.category})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label className="text-sm mb-2 block">Tipo</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={form.type === 'payable' ? 'default' : 'outline'}
                className={cn('gap-2', form.type === 'payable' && 'bg-destructive hover:bg-destructive/90')}
                onClick={() => setForm(f => ({ ...f, type: 'payable' }))}
              >
                A Pagar
              </Button>
              <Button
                type="button"
                variant={form.type === 'receivable' ? 'default' : 'outline'}
                className={cn('gap-2', form.type === 'receivable' && 'bg-primary hover:bg-primary/90')}
                onClick={() => setForm(f => ({ ...f, type: 'receivable' }))}
              >
                A Receber
              </Button>
            </div>
          </div>

          <div>
            <Label className="text-sm mb-2 block">Descrição</Label>
            <div className="flex gap-1.5 items-center">
              <Input
                placeholder="Ex: Aluguel"
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                className="flex-1"
              />
              <VoiceInputButton onTranscript={t => setForm(f => ({ ...f, description: f.description ? f.description + ' ' + t : t }))} />
            </div>
          </div>

          <div>
            <Label className="text-sm mb-2 block">Valor (R$)</Label>
            <Input
              type="number" min="0" step="0.01" placeholder="0,00"
              value={form.amount}
              onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
            />
          </div>

          <div>
            <Label className="text-sm mb-2 block">Categoria</Label>
            <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v }))}>
              <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>
                {EXPENSE_CATEGORIES.map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {data.accounts.length > 0 && (
            <div>
              <Label className="text-sm mb-2 block">Conta (opcional)</Label>
              <Select value={form.accountId} onValueChange={v => setForm(f => ({ ...f, accountId: v }))}>
                <SelectTrigger><SelectValue placeholder="Nenhuma" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Nenhuma</SelectItem>
                  {data.accounts.map(a => (
                    <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Recurrence */}
          <div>
            <Label className="text-sm mb-2 block">Recorrência</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={form.recurrenceMode === 'once' ? 'default' : 'outline'}
                className="gap-2"
                onClick={() => setForm(f => ({ ...f, recurrenceMode: 'once' }))}
              >
                <CalendarIconSolid className="h-4 w-4" />
                Uma vez
              </Button>
              <Button
                type="button"
                variant={form.recurrenceMode === 'monthly' ? 'default' : 'outline'}
                className="gap-2"
                onClick={() => setForm(f => ({ ...f, recurrenceMode: 'monthly' }))}
              >
                <RefreshCw className="h-4 w-4" />
                Mensal
              </Button>
            </div>
          </div>

          {form.recurrenceMode === 'once' ? (
            <div>
              <Label className="text-sm mb-2 block">Vencimento</Label>
              <Popover open={calOpen} onOpenChange={setCalOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn('w-full justify-start text-left font-normal', !form.dueDate && 'text-muted-foreground')}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {form.dueDate
                      ? format(form.dueDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                      : 'Selecione uma data'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single" selected={form.dueDate}
                    onSelect={d => { setForm(f => ({ ...f, dueDate: d })); setCalOpen(false); }}
                    initialFocus className="p-3 pointer-events-auto" locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div>
              <Label className="text-sm mb-2 block">Dia do vencimento (todo mês)</Label>
              <Select value={form.recurrenceDay} onValueChange={v => setForm(f => ({ ...f, recurrenceDay: v }))}>
                <SelectTrigger><SelectValue placeholder="Dia" /></SelectTrigger>
                <SelectContent>
                  {days.map(d => (
                    <SelectItem key={d} value={String(d)}>Dia {d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1.5">
                Será criada uma conta para cada mês restante do ano ({new Date().getFullYear()})
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => { onOpenChange(false); setForm(EMPTY); }}>Cancelar</Button>
          <Button onClick={handleSave} disabled={!isValid}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
