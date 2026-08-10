import { useFinance } from '@/contexts/FinanceContext';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpCircle, ArrowDownCircle, TrendingUp, TrendingDown, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

interface Props {
  year: number;
  month: number;
  accountId?: string;
}

export function FinanceOverview({ year, month, accountId }: Props) {
  const { getMonthlyStats, getAccountBalance, getConsolidatedBalance } = useFinance();
  const stats = getMonthlyStats(year, month, accountId);

  const accountBal = accountId
    ? getAccountBalance(accountId, year, month)
    : null;
  const consolidatedBal = !accountId ? getConsolidatedBalance(year, month) : null;

  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <Card className="border-l-4 border-emerald-500">
        <CardContent className="pt-5 pb-4 px-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-medium">Receitas</span>
            <ArrowUpCircle className="h-5 w-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {formatBRL(stats.income)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {stats.transactions.filter(t => t.type === 'income').length} entradas
          </p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-destructive">
        <CardContent className="pt-5 pb-4 px-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-medium">Despesas</span>
            <ArrowDownCircle className="h-5 w-5 text-destructive" />
          </div>
          <p className="text-2xl font-bold text-destructive">
            {formatBRL(stats.expense)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {stats.transactions.filter(t => t.type === 'expense').length} saídas
          </p>
        </CardContent>
      </Card>

      <Card className={cn('border-l-4', stats.balance >= 0 ? 'border-primary' : 'border-destructive')}>
        <CardContent className="pt-5 pb-4 px-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-medium">Resultado Mensal</span>
            {stats.balance >= 0
              ? <TrendingUp className="h-5 w-5 text-primary" />
              : <TrendingDown className="h-5 w-5 text-destructive" />}
          </div>
          <p className={cn('text-2xl font-bold', stats.balance >= 0 ? 'text-primary' : 'text-destructive')}>
            {formatBRL(stats.balance)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {stats.balance >= 0 ? 'Positivo 🎉' : 'Negativo ⚠️'}
          </p>
        </CardContent>
      </Card>

      {/* Account balance card */}
      <Card className="border-l-4 border-violet-500">
        <CardContent className="pt-5 pb-4 px-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground font-medium">Saldo da Conta</span>
            <Landmark className="h-5 w-5 text-violet-500" />
          </div>
          {accountId && accountBal ? (
            <>
              <p className={cn('text-2xl font-bold', accountBal.currentBalance >= 0 ? 'text-violet-600 dark:text-violet-400' : 'text-destructive')}>
                {formatBRL(accountBal.currentBalance)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Base: {formatBRL(accountBal.baseBalance)} em {accountBal.baseDate}
              </p>
            </>
          ) : consolidatedBal !== null ? (
            <>
              <p className={cn('text-2xl font-bold', consolidatedBal >= 0 ? 'text-violet-600 dark:text-violet-400' : 'text-destructive')}>
                {formatBRL(consolidatedBal)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Todas as contas</p>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-muted-foreground">—</p>
              <p className="text-xs text-muted-foreground mt-1">Registre um saldo</p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
