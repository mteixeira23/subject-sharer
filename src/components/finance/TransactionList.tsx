import { useState } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, ArrowUpCircle, ArrowDownCircle, List, ArrowRightLeft } from 'lucide-react';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

interface Props {
  year: number;
  month: number;
  accountId?: string;
  onAdd: () => void;
}

function FilterButtons({ filter, setFilter }: { filter: string; setFilter: (f: 'all' | 'income' | 'expense') => void }) {
  return (
    <div className="flex items-center gap-1">
      {(['all', 'income', 'expense'] as const).map(f => (
        <Button
          key={f}
          variant={filter === f ? 'default' : 'ghost'}
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={() => setFilter(f)}
        >
          {f === 'all' ? 'Todas' : f === 'income' ? 'Receitas' : 'Despesas'}
        </Button>
      ))}
    </div>
  );
}

export function TransactionList({ year, month, accountId, onAdd }: Props) {
  const { getMonthlyStats, deleteTransaction, updateTransaction, data } = useFinance();
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [dialogFilter, setDialogFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [targetAccountId, setTargetAccountId] = useState('');
  const [isMoving, setIsMoving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const isBusy = isMoving || isDeleting;

  const stats = getMonthlyStats(year, month, accountId);
  const filteredTxs = stats.transactions
    .filter(t => filter === 'all' || t.type === filter)
    .sort((a, b) => b.date.localeCompare(a.date));

  const dialogTxs = stats.transactions
    .filter(t => dialogFilter === 'all' || t.type === dialogFilter)
    .sort((a, b) => b.date.localeCompare(a.date));

  const MONTHS_PT = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
  ];

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Transações</CardTitle>
            <div className="flex items-center gap-1">
              <FilterButtons filter={filter} setFilter={setFilter} />
              <Button variant="outline" size="sm" className="h-7 w-7 p-0 ml-1" onClick={onAdd}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4">
          {filteredTxs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
              <p className="text-sm">Nenhuma transação neste período</p>
              <Button variant="outline" size="sm" className="mt-3" onClick={onAdd}>
                <Plus className="h-4 w-4 mr-1" />
                Adicionar
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-1 md:max-h-[260px] md:overflow-y-auto pr-1">
                {filteredTxs.map(tx => (
                  <div
                    key={tx.id}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-muted/50 group"
                  >
                    <div className={cn(
                      'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm',
                      tx.type === 'income' ? 'bg-emerald-500/10' : 'bg-destructive/10',
                    )}>
                      {tx.type === 'income'
                        ? <ArrowUpCircle className="h-4 w-4 text-emerald-500" />
                        : <ArrowDownCircle className="h-4 w-4 text-destructive" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{tx.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {format(parseISO(tx.date), 'dd/MM', { locale: ptBR })}
                        </span>
                        <Badge variant="outline" className="h-4 px-1 text-[10px]">
                          {tx.category}
                        </Badge>
                      </div>
                    </div>
                    <span className={cn(
                      'font-semibold text-sm flex-shrink-0',
                      tx.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive',
                    )}>
                      {tx.type === 'income' ? '+' : '-'}{formatBRL(tx.amount)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                      onClick={() => deleteTransaction(tx.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
              {stats.transactions.length > 5 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-2 text-xs text-muted-foreground"
                  onClick={() => { setDialogFilter(filter); setDialogOpen(true); }}
                >
                  <List className="h-3.5 w-3.5 mr-1" />
                  Ver todas ({stats.transactions.length})
                </Button>
              )}
            </>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) { setSelectedIds(new Set()); setTargetAccountId(''); } }}>
        <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Transações — {MONTHS_PT[month - 1]} {year}</DialogTitle>
            <DialogDescription>{dialogTxs.length} transações</DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <FilterButtons filter={dialogFilter} setFilter={setDialogFilter} />
            {selectedIds.size > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-muted-foreground">{selectedIds.size} selecionadas</span>
                <Select value={targetAccountId} onValueChange={setTargetAccountId}>
                  <SelectTrigger className="h-8 w-[160px] text-xs">
                    <SelectValue placeholder="Mover para..." />
                  </SelectTrigger>
                  <SelectContent>
                    {data.accounts.map(acc => (
                      <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  size="sm"
                  className="h-8 text-xs"
                  disabled={!targetAccountId || isBusy}
                  onClick={async () => {
                    setIsMoving(true);
                    try {
                      await Promise.all(
                        Array.from(selectedIds).map(id => updateTransaction(id, { accountId: targetAccountId }))
                      );
                      const accName = data.accounts.find(a => a.id === targetAccountId)?.name;
                      toast.success(`${selectedIds.size} transações movidas para ${accName}`);
                      setSelectedIds(new Set());
                      setTargetAccountId('');
                    } catch {
                      toast.error('Erro ao mover transações');
                    } finally {
                      setIsMoving(false);
                    }
                  }}
                >
                  <ArrowRightLeft className="h-3.5 w-3.5 mr-1" />
                  Mover
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-8 text-xs"
                  disabled={isBusy}
                  onClick={() => setDeleteConfirmOpen(true)}
                >
                  <Trash2 className="h-3.5 w-3.5 mr-1" />
                  Excluir
                </Button>
              </div>
            )}
          </div>

          {/* Mobile: card list */}
          <ScrollArea className="flex-1 -mx-6 px-6 md:hidden">
            <div className="space-y-2">
              <div className="flex items-center gap-2 py-1">
                <Checkbox
                  checked={dialogTxs.length > 0 && selectedIds.size === dialogTxs.length}
                  onCheckedChange={(checked) => {
                    setSelectedIds(checked ? new Set(dialogTxs.map(t => t.id)) : new Set());
                  }}
                />
                <span className="text-xs text-muted-foreground">Selecionar todas</span>
              </div>
              {dialogTxs.map(tx => (
                <div key={tx.id} className={cn(
                  "flex items-start gap-3 rounded-lg border p-3",
                  selectedIds.has(tx.id) && "bg-muted/50 border-primary/30"
                )}>
                  <Checkbox
                    className="mt-1"
                    checked={selectedIds.has(tx.id)}
                    onCheckedChange={(checked) => {
                      const next = new Set(selectedIds);
                      checked ? next.add(tx.id) : next.delete(tx.id);
                      setSelectedIds(next);
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2">{tx.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {format(parseISO(tx.date), 'dd/MM/yy', { locale: ptBR })}
                      </span>
                      <Badge variant="outline" className="text-[10px]">{tx.category}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={cn(
                      'font-semibold text-sm',
                      tx.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive',
                    )}>
                      {tx.type === 'income' ? '+' : '-'}{formatBRL(tx.amount)}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive"
                      onClick={() => deleteTransaction(tx.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Desktop: table */}
          <ScrollArea className="flex-1 -mx-6 px-6 hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox
                      checked={dialogTxs.length > 0 && selectedIds.size === dialogTxs.length}
                      onCheckedChange={(checked) => {
                        setSelectedIds(checked ? new Set(dialogTxs.map(t => t.id)) : new Set());
                      }}
                    />
                  </TableHead>
                  <TableHead className="w-[80px]">Data</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                  <TableHead className="w-[40px]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {dialogTxs.map(tx => (
                  <TableRow key={tx.id} data-state={selectedIds.has(tx.id) ? 'selected' : undefined}>
                    <TableCell>
                      <Checkbox
                        checked={selectedIds.has(tx.id)}
                        onCheckedChange={(checked) => {
                          const next = new Set(selectedIds);
                          checked ? next.add(tx.id) : next.delete(tx.id);
                          setSelectedIds(next);
                        }}
                      />
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                      {format(parseISO(tx.date), 'dd/MM/yy', { locale: ptBR })}
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">
                      {tx.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px]">{tx.category}</Badge>
                    </TableCell>
                    <TableCell className={cn(
                      'text-right font-semibold whitespace-nowrap',
                      tx.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive',
                    )}>
                      {tx.type === 'income' ? '+' : '-'}{formatBRL(tx.amount)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground hover:text-destructive"
                        onClick={() => deleteTransaction(tx.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir transações</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir {selectedIds.size} transação(ões)? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={isDeleting}
              onClick={async (e) => {
                e.preventDefault();
                setIsDeleting(true);
                try {
                  await Promise.all(Array.from(selectedIds).map(id => deleteTransaction(id)));
                  toast.success(`${selectedIds.size} transação(ões) excluída(s)`);
                  setSelectedIds(new Set());
                  setDeleteConfirmOpen(false);
                } catch {
                  toast.error('Erro ao excluir transações');
                } finally {
                  setIsDeleting(false);
                }
              }}
            >
              {isDeleting ? 'Excluindo...' : 'Excluir'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
