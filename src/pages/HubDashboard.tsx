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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RotateCcw, Loader2, Sparkles } from 'lucide-react';
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
  const [simuladoOpen, setSimuladoOpen] = useState(false);

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
            size="sm"
            onClick={() => setSimuladoOpen(true)}
            className="gap-2 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fazer Simulado</span>
          </Button>
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

        <SectionDivider label="Agenda" />
        <AgendaSection
          getEventsByDate={getEventsByDate}
          toggleEvent={toggleEvent}
          moveEvent={moveEvent}
          moveEventToShift={moveEventToShift}
          isMobile={isMobile}
        />
      </div>

      </div>

      {/* Simulado Modal */}
      <Dialog open={simuladoOpen} onOpenChange={setSimuladoOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500" />
              Simulado por Matéria e Aula
            </DialogTitle>
          </DialogHeader>
          <Aula00QuestionsSimulado />
        </DialogContent>
      </Dialog>
    </div>
  );
}
