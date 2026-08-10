import { HubCard } from '@/components/HubCard';
import { GraduationCap, Wallet, Heart, CheckSquare, TrendingUp, TrendingDown, Flame } from 'lucide-react';

interface SummaryCardsProps {
  studyProgress: { progress: number; completedLessons: number; totalLessons: number; performance: number; totalQuestions: number };
  monthStats: { balance: number; income: number; expense: number };
  startOfMonthBalance: number | null;
  currentBalance: number | null;
  habitsToday: number;
  doneToday: number;
  weekFreq: number;
  weeklyGoal: number;
  pendingTasks: number;
  todayTasks: number;
}

export function SummaryCards({
  studyProgress,
  monthStats,
  startOfMonthBalance,
  currentBalance,
  habitsToday,
  doneToday,
  weekFreq,
  weeklyGoal,
  pendingTasks,
  todayTasks,
}: SummaryCardsProps) {
  const fmtBRL = (v: number | null) => v !== null ? `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : '—';
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <HubCard
        title="Estudos"
        icon={GraduationCap}
        href="/estudos"
        accentClass="border-blue-500"
        iconBgClass="bg-blue-500/10"
        iconTextClass="text-blue-600 dark:text-blue-400"
        metrics={[
          { label: 'Progresso geral', value: `${studyProgress.progress.toFixed(0)}%`, highlight: true },
          { label: 'Aulas concluídas', value: `${studyProgress.completedLessons}/${studyProgress.totalLessons}` },
          { label: 'Desempenho', value: studyProgress.totalQuestions > 0 ? `${studyProgress.performance.toFixed(1)}%` : '—' },
        ]}
      />

      <HubCard
        title="Finanças"
        icon={Wallet}
        href="/financas"
        accentClass="border-emerald-500"
        iconBgClass="bg-emerald-500/10"
        iconTextClass="text-emerald-600 dark:text-emerald-400"
        metrics={[
          { label: 'Saldo início do mês', value: fmtBRL(startOfMonthBalance) },
          { label: 'Receitas', value: `R$ ${monthStats.income.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` },
          { label: 'Despesas', value: `R$ ${monthStats.expense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` },
          { label: 'Saldo atual', value: fmtBRL(currentBalance), highlight: true },
        ]}
        badge={monthStats.balance >= 0 ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : <TrendingDown className="h-4 w-4 text-destructive" />}
      />

      <HubCard
        title="Saúde"
        icon={Heart}
        href="/saude"
        accentClass="border-rose-500"
        iconBgClass="bg-rose-500/10"
        iconTextClass="text-rose-600 dark:text-rose-400"
        metrics={[
          { label: 'Hábitos hoje', value: habitsToday > 0 ? `${doneToday}/${habitsToday}` : '—', highlight: true },
          { label: 'Atividade física', value: `${weekFreq}/${weeklyGoal} dias`, highlight: weekFreq >= weeklyGoal },
        ]}
        badge={habitsToday > 0 && doneToday === habitsToday ? <Flame className="h-4 w-4 text-orange-500" /> : undefined}
      />

      <HubCard
        title="Tarefas"
        icon={CheckSquare}
        href="/tarefas"
        accentClass="border-violet-500"
        iconBgClass="bg-violet-500/10"
        iconTextClass="text-violet-600 dark:text-violet-400"
        metrics={[
          { label: 'Pendentes hoje', value: todayTasks, highlight: true },
          { label: 'Total pendentes', value: pendingTasks },
          { label: 'Status', value: pendingTasks === 0 ? '✅ Em dia' : `${pendingTasks} a fazer` },
        ]}
      />
    </div>
  );
}
