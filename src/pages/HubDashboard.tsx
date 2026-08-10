import { useIsMobile } from '@/hooks/use-mobile';
import { useStudy } from '@/contexts/StudyContext';
import { useFinance } from '@/contexts/FinanceContext';
import { useHealth } from '@/contexts/HealthContext';
import { useTasks } from '@/contexts/TaskContext';
import { useWorkout } from '@/contexts/WorkoutContext';
import { useUnifiedEvents } from '@/hooks/useUnifiedEvents';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { SummaryCards } from '@/components/hub/SummaryCards';
import { AgendaSection } from '@/components/hub/AgendaViews';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="w-8 h-0.5 bg-primary rounded-full" />
      <span className="text-sm font-semibold text-primary whitespace-nowrap">{label}</span>
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full" />
    </div>
  );
}

export default function HubDashboard() {
  const isMobile = useIsMobile();
  const study = useStudy();
  const finance = useFinance();
  const health = useHealth();
  const tasks = useTasks();
  const { getWeekFrequency, data: workoutData } = useWorkout();
  const { getEventsByDate, toggleEvent, moveEvent, moveEventToShift } = useUnifiedEvents();

  const now = new Date();
  const overall = study.getOverallProgress();
  const monthStats = finance.getConsolidatedMonthlyStats(now.getFullYear(), now.getMonth() + 1);
  const startOfMonthBalance = finance.getConsolidatedMonthStartBalance(now.getFullYear(), now.getMonth() + 1);
  const currentBalance = finance.getConsolidatedBalance(now.getFullYear(), now.getMonth() + 1);

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b bg-background px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="hidden md:inline-flex" />
          <div>
            <h1 className="text-lg md:text-xl font-bold">Dashboard</h1>
            <p className="text-xs text-muted-foreground">
              {format(now, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex-1 p-4 md:p-6 pb-20 md:pb-6 space-y-2">
        <SectionDivider label="Agenda" />
        <AgendaSection
          getEventsByDate={getEventsByDate}
          toggleEvent={toggleEvent}
          moveEvent={moveEvent}
          moveEventToShift={moveEventToShift}
          isMobile={isMobile}
        />

        <SectionDivider label="Resumo" />
        <SummaryCards
          studyProgress={overall}
          monthStats={monthStats}
          startOfMonthBalance={startOfMonthBalance}
          currentBalance={currentBalance}
          habitsToday={health.data.habits.length}
          doneToday={health.getTodayCompletionCount()}
          weekFreq={getWeekFrequency()}
          weeklyGoal={workoutData.weeklyGoal}
          pendingTasks={tasks.getPendingCount()}
          todayTasks={tasks.getFilteredTasks('today').length}
        />
      </div>
    </div>
  );
}
