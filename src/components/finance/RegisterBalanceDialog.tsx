import { useState } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { CalendarIcon, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface FormData {
  accountId: string;
  date: Date | undefined;
  balance: string;
}

const EMPTY: FormData = {
  accountId: '',
  date: new Date(),
  balance: '',
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegisterBalanceDialog({ open, onOpenChange }: Props) {
  const { data, addBalance, deleteBalance } = useFinance();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [calOpen, setCalOpen] = useState(false);

  function handleSave() {
    if (!form.accountId || !form.balance || !form.date) return;
    addBalance({
      accountId: form.accountId,
      date: format(form.date, 'yyyy-MM-dd'),
      balance: parseFloat(form.balance.replace(',', '.')),
    });
    setForm(EMPTY);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Registrar Saldo</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div>
            <Label className="text-sm mb-2 block">Conta</Label>
            <Select value={form.accountId} onValueChange={v => setForm(f => ({ ...f, accountId: v }))}>
              <SelectTrigger><SelectValue placeholder="Selecione uma conta" /></SelectTrigger>
              <SelectContent>
                {data.accounts.map(a => (
                  <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {data.accounts.length === 0 && (
              <p className="text-xs text-muted-foreground mt-1">Cadastre uma conta primeiro</p>
            )}
          </div>

          <div>
            <Label className="text-sm mb-2 block">Saldo (R$)</Label>
            <Input
              type="number" step="0.01" placeholder="0,00"
              value={form.balance}
              onChange={e => setForm(f => ({ ...f, balance: e.target.value }))}
            />
          </div>

          <div>
            <Label className="text-sm mb-2 block">Data do Saldo</Label>
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

        {data.balances.length > 0 && (
          <>
            <Separator />
            <div>
              <Label className="text-sm mb-2 block">Saldos Registrados</Label>
              <div className="max-h-[200px] overflow-y-auto space-y-1">
                {data.balances
                  .filter(b => !form.accountId || b.accountId === form.accountId)
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map(b => {
                    const acc = data.accounts.find(a => a.id === b.accountId);
                    return (
                      <div key={b.id} className="flex items-center justify-between text-sm py-1.5 px-2 rounded-md hover:bg-muted/50">
                        <span className="text-muted-foreground truncate">
                          {acc?.name ?? 'Conta removida'} — {format(new Date(b.date + 'T12:00:00'), 'dd/MM/yyyy')} — R$ {b.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                        <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0 text-destructive hover:text-destructive" onClick={() => deleteBalance(b.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => { onOpenChange(false); setForm(EMPTY); }}>Cancelar</Button>
          <Button onClick={handleSave} disabled={!form.accountId || !form.balance || !form.date || data.accounts.length === 0}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
