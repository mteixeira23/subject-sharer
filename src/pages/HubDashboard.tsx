import { useState } from 'react';
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
import { Aula00QuestionsSimulado } from '@/components/study/Aula00QuestionsSimulado';
import { Button } from '@/components/ui/button';
import { RotateCcw, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
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

  const [isSyncing, setIsSyncing] = useState(false);

  const handleSyncSchedule = async () => {
    setIsSyncing(true);
    try {
      await study.syncSefazSchedule();
      toast.success('Agenda SEFAZ-BA 2026 sincronizada com sucesso!');
    } catch (err) {
      toast.error('Erro ao sincronizar agenda.');
    } finally {
      setIsSyncing(false);
    }
  };

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
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSyncSchedule}
            disabled={isSyncing}
            className="gap-2 text-xs border-primary/40 hover:bg-primary/10"
          >
            {isSyncing ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <RotateCcw className="h-3.5 w-3.5 text-primary" />
            )}
            <span className="hidden sm:inline">Sincronizar Trilha SEFAZ-BA</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 pb-20 md:pb-6 space-y-2">
        <SectionDivider label="Simulado Especial: Aula 00 – Contabilidade Geral (50 Questões)" />
        <Aula00QuestionsSimulado />

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
