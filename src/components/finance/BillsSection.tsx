import { useState } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Check, Clock, RefreshCw } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="w-8 h-0.5 bg-primary rounded-full" />
      <span className="text-sm font-semibold text-primary whitespace-nowrap capitalize">{label}</span>
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full" />
    </div>
  );
}

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function MonthSubtotal({ bills }: { bills: { type: string; amount: number }[] }) {
  const payable = bills.filter(b => b.type === 'payable').reduce((s, b) => s + b.amount, 0);
  const receivable = bills.filter(b => b.type === 'receivable').reduce((s, b) => s + b.amount, 0);
  const net = receivable - payable;

  return (
    <div className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2 mt-1 mb-3 text-xs font-semibold">
      <span className="text-muted-foreground">Subtotal do mês</span>
      <div className="flex items-center gap-4">
        <span className="text-destructive">Pagar: {formatBRL(payable)}</span>
        <span className="text-emerald-600 dark:text-emerald-400">Receber: {formatBRL(receivable)}</span>
        <span className={cn(net >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive')}>
          Saldo: {formatBRL(net)}
        </span>
      </div>
    </div>
  );
}

interface Props {
  onAdd: () => void;
  onManageTemplates: () => void;
}

export function BillsSection({ onAdd, onManageTemplates }: Props) {
  const { data, toggleBillPaid, deleteBill } = useFinance();
  const [filter, setFilter] = useState<'all' | 'payable' | 'receivable'>('all');

  const bills = data.bills
    .filter(b => filter === 'all' || b.type === filter)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  // Yearly totals
  const totalPayable = bills.filter(b => b.type === 'payable').reduce((s, b) => s + b.amount, 0);
  const totalReceivable = bills.filter(b => b.type === 'receivable').reduce((s, b) => s + b.amount, 0);
  const totalNet = totalReceivable - totalPayable;

  // Group by month
  const grouped: Record<string, typeof bills> = {};
  bills.forEach(bill => {
    const key = format(parseISO(bill.dueDate), "MMMM yyyy", { locale: ptBR });
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(bill);
  });

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-base">
            {filter === 'payable' ? 'Contas a Pagar' : filter === 'receivable' ? 'Contas a Receber' : 'Contas a Pagar / Receber'}
          </CardTitle>
          <div className="flex gap-1 flex-wrap">
            {(['all', 'payable', 'receivable'] as const).map(f => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'ghost'}
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'Todas' : f === 'payable' ? 'A Pagar' : 'A Receber'}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="h-7 px-2 text-xs ml-2" onClick={onManageTemplates}>
              <Plus className="h-3.5 w-3.5 mr-1" />
              Cadastrar Conta
            </Button>
            <Button size="sm" className="h-7 px-2 text-xs ml-2" onClick={onAdd}>
              <Plus className="h-3.5 w-3.5 mr-1" />
              Nova
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        {bills.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
            <p className="text-sm">Nenhuma conta cadastrada</p>
            <Button variant="outline" size="sm" className="mt-3" onClick={onAdd}>
              <Plus className="h-4 w-4 mr-1" />
              Adicionar
            </Button>
          </div>
        ) : (
          <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
            {Object.entries(grouped).map(([monthLabel, monthBills]) => (
              <div key={monthLabel}>
                <SectionDivider label={monthLabel} />
                {monthBills.map(bill => (
                  <div
                    key={bill.id}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-muted/50 group"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        'h-8 w-8 flex-shrink-0 rounded-full',
                        bill.paid ? 'text-emerald-500' : 'text-muted-foreground',
                      )}
                      onClick={() => toggleBillPaid(bill.id)}
                    >
                      {bill.paid ? <Check className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                    </Button>
                    <div className="flex-1 min-w-0">
                      <p className={cn('text-sm font-medium truncate', bill.paid && 'line-through text-muted-foreground')}>
                        {bill.description}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground">
                          Vence: {format(parseISO(bill.dueDate), 'dd/MM/yyyy', { locale: ptBR })}
                        </span>
                        <Badge
                          variant="outline"
                          className={cn(
                            'h-4 px-1 text-[10px]',
                            bill.type === 'payable' ? 'border-destructive/50 text-destructive' : 'border-emerald-500/50 text-emerald-600 dark:text-emerald-400',
                          )}
                        >
                          {bill.type === 'payable' ? 'A Pagar' : 'A Receber'}
                        </Badge>
                        <Badge variant="outline" className="h-4 px-1 text-[10px]">
                          {bill.category}
                        </Badge>
                        {bill.recurrenceMode === 'monthly' && (
                          <Badge variant="secondary" className="h-4 px-1 text-[10px] gap-0.5">
                            <RefreshCw className="h-2.5 w-2.5" />
                            Mensal
                          </Badge>
                        )}
                      </div>
                    </div>
                    <span className={cn(
                      'font-semibold text-sm flex-shrink-0',
                      bill.type === 'receivable' ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive',
                    )}>
                      {formatBRL(bill.amount)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                      onClick={() => deleteBill(bill.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
                <MonthSubtotal bills={monthBills} />
              </div>
            ))}

            {/* Yearly total */}
            <div className="flex items-center justify-between rounded-lg bg-muted/50 border border-border px-3 py-3 mt-4 text-sm font-bold">
              <span>Total Anual</span>
              <div className="flex items-center gap-4">
                <span className="text-destructive">Pagar: {formatBRL(totalPayable)}</span>
                <span className="text-emerald-600 dark:text-emerald-400">Receber: {formatBRL(totalReceivable)}</span>
                <span className={cn(totalNet >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive')}>
                  Saldo: {formatBRL(totalNet)}
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
