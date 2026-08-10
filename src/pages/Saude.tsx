import { useState } from 'react';
import { useHealth } from '@/contexts/HealthContext';
import { useWorkout } from '@/contexts/WorkoutContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Heart, Plus, Trash2, Settings, CheckCircle2, Circle, Dumbbell, Edit2 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { StreakBadge } from '@/components/StreakBadge';
import { WorkoutSetup } from '@/components/workout/WorkoutSetup';
import { TodayWorkout } from '@/components/workout/TodayWorkout';

import { WorkoutFrequency } from '@/components/workout/WorkoutFrequency';
import { ModuleGoals } from '@/components/ModuleGoals';
import { format, subDays, startOfDay, eachDayOfInterval, startOfMonth, endOfMonth, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { MoodLevel, MOOD_EMOJIS, MOOD_LABELS, HabitRecurrenceMode, WeeklyRoutine, WorkoutLog } from '@/types/health';
import { Shift, SHIFT_CONFIG, SHIFT_ORDER } from '@/lib/shifts';
import { isHabitActiveOnDate } from '@/hooks/useHealthData';

const MOOD_COLORS: Record<MoodLevel, string> = {
  1: 'border-destructive bg-destructive/10 text-destructive',
  2: 'border-orange-500 bg-orange-500/10 text-orange-600 dark:text-orange-400',
  3: 'border-yellow-500 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
  4: 'border-primary bg-primary/10 text-primary',
  5: 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
};

const MONTH_LABELS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const EMOJI_SUGGESTIONS = ['💧', '🚶', '😴', '🏋️', '🥗', '📚', '🧘', '🏃', '🚴', '💊', '🌿', '☀️'];

const DAY_LABELS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const DAY_FULL = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

function getMonthlyHabitStats(year: number, month: number, habit: import('@/types/health').Habit, completions: import('@/types/health').HabitCompletion[]) {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(start);
  const today = new Date();
  if (start > today) return { active: 0, completed: 0, rate: null as number | null };
  const days = eachDayOfInterval({ start, end: end > today ? today : end });

  let active = 0;
  let completed = 0;

  days.forEach(day => {
    const dateStr = format(day, 'yyyy-MM-dd');
    if (isHabitActiveOnDate(habit, dateStr)) {
      active++;
      if (completions.some(c => c.habitId === habit.id && c.date === dateStr)) {
        completed++;
      }
    }
  });

  return { active, completed, rate: active > 0 ? completed / active : null };
}

function getMonthlyWorkoutStats(year: number, month: number, workoutTypeId: string, routine: WeeklyRoutine, logs: WorkoutLog[]) {
  const start = startOfMonth(new Date(year, month));
  const end = endOfMonth(start);
  const today = new Date();
  if (start > today) return { scheduled: 0, completed: 0, rate: null as number | null };
  const days = eachDayOfInterval({ start, end: end > today ? today : end });

  let scheduled = 0;
  let completed = 0;

  days.forEach(day => {
    const dow = getDay(day);
    const cfg = routine[dow];
    if (cfg?.typeId === workoutTypeId) {
      scheduled++;
      const dateStr = format(day, 'yyyy-MM-dd');
      if (logs.some(l => l.date === dateStr && l.workoutTypeId === workoutTypeId)) {
        completed++;
      }
    }
  });

  return { scheduled, completed, rate: scheduled > 0 ? completed / scheduled : null };
}

function RateCell({ rate, isCurrentMonth }: { rate: number | null; isCurrentMonth: boolean }) {
  if (rate === null) {
    return <span className="text-xs text-muted-foreground/40">—</span>;
  }
  const pct = Math.round(rate * 100);
  const color = pct >= 80
    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
    : pct >= 50
    ? 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400'
    : 'bg-destructive/15 text-red-500 dark:text-red-400';
  return (
    <span className={cn(
      'inline-block text-[11px] font-semibold rounded-md px-1.5 py-0.5',
      color,
      isCurrentMonth && 'ring-1 ring-primary/30',
    )}>
      {pct}%
    </span>
  );
}

// Last 7 days in order (oldest → today)
function getLast7Days() {
  return Array.from({ length: 7 }, (_, i) =>
    format(subDays(startOfDay(new Date()), 6 - i), 'yyyy-MM-dd'),
  );
}

function getRecurrenceBadge(mode: HabitRecurrenceMode, days?: number[]) {
  if (mode === 'daily') return '🔁 Diária';
  if (mode === 'once') return '1x';
  if (mode === 'weekly' && days && days.length > 0) {
    return `🔁 ${days.sort((a, b) => a - b).map(d => DAY_FULL[d]).join(', ')}`;
  }
  return '🔁 Semanal';
}

export default function Saude() {
  const workout = useWorkout();
  const {
    data,
    today,
    addHabit,
    updateHabit,
    deleteHabit,
    toggleHabitCompletion,
    isHabitCompletedOn,
    getHabitStreak,
    setMood,
    getMoodForDate,
    getTodayCompletionCount,
  } = useHealth();

  const [manageOpen, setManageOpen] = useState(false);
  const [editingHabitId, setEditingHabitId] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [newIcon, setNewIcon] = useState('✅');
  const [newShift, setNewShift] = useState<Shift | undefined>(undefined);
  const [newRecurrenceMode, setNewRecurrenceMode] = useState<HabitRecurrenceMode>('daily');
  const [newRecurrenceDays, setNewRecurrenceDays] = useState<number[]>([]);
  const [workoutSetupOpen, setWorkoutSetupOpen] = useState(false);

  const todayMood = getMoodForDate(today);
  const doneToday = getTodayCompletionCount();
  const todayHabits = data.habits.filter(h => isHabitActiveOnDate(h, today));
  const totalHabits = todayHabits.length;
  const last7 = getLast7Days();

  function toggleRecurrenceDay(day: number) {
    setNewRecurrenceDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day],
    );
  }

  function resetHabitForm() {
    setEditingHabitId(null);
    setNewName('');
    setNewIcon('✅');
    setNewShift(undefined);
    setNewRecurrenceMode('daily');
    setNewRecurrenceDays([]);
  }

  function startEditHabit(habit: import('@/types/health').Habit) {
    setEditingHabitId(habit.id);
    setNewName(habit.name);
    setNewIcon(habit.icon);
    setNewShift(habit.shift);
    setNewRecurrenceMode(habit.recurrenceMode ?? 'daily');
    setNewRecurrenceDays(habit.recurrenceDays ?? []);
  }

  function handleSaveHabit() {
    if (!newName.trim()) return;
    if (editingHabitId) {
      updateHabit(editingHabitId, {
        name: newName.trim(),
        icon: newIcon,
        shift: newShift,
        recurrenceMode: newRecurrenceMode,
        recurrenceDays: newRecurrenceMode === 'weekly' ? newRecurrenceDays : undefined,
      });
    } else {
      addHabit({
        name: newName.trim(),
        icon: newIcon,
        shift: newShift,
        recurrenceMode: newRecurrenceMode,
        recurrenceDays: newRecurrenceMode === 'weekly' ? newRecurrenceDays : undefined,
      });
    }
    resetHabitForm();
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b bg-background px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="hidden md:inline-flex" />
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/10">
              <Heart className="h-5 w-5 text-rose-500" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">Saúde</h1>
              <p className="text-xs text-muted-foreground capitalize">
                {format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6">
        <ModuleGoals categories={['habits', 'workout']} />

        {/* ── Today's summary strip ───────────────────────────────────────── */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-2xl">
            {doneToday === totalHabits && totalHabits > 0 ? '🏆' : '❤️'}
          </div>
          <div className="flex-1">
            <p className="font-semibold">
              {totalHabits === 0
                ? 'Nenhum hábito para hoje'
                : doneToday === totalHabits
                ? 'Todos os hábitos concluídos! Parabéns! 🎉'
                : `${doneToday} de ${totalHabits} hábitos concluídos hoje`}
            </p>
            <p className="text-sm text-muted-foreground">
              {totalHabits > 0
                ? `${Math.round((doneToday / totalHabits) * 100)}% do dia concluído`
                : 'Adicione hábitos para começar a rastrear'}
            </p>
          </div>
          {/* Progress bar */}
          {totalHabits > 0 && (
            <div className="hidden sm:flex flex-col items-end gap-1 min-w-[100px]">
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all"
                  style={{ width: `${(doneToday / totalHabits) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{Math.round((doneToday / totalHabits) * 100)}%</span>
            </div>
          )}
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────── */}
        <Tabs defaultValue="habitos" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="habitos" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Hábitos
            </TabsTrigger>
            <TabsTrigger value="atividade-fisica" className="flex items-center gap-2">
              <Dumbbell className="h-4 w-4" />
              Atividade Física
            </TabsTrigger>
          </TabsList>

          {/* ── Tab: Hábitos ──────────────────────────────────────────── */}
          <TabsContent value="habitos" className="space-y-6">
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={() => setManageOpen(true)}>
                <Settings className="h-4 w-4 mr-1" />
                Gerenciar Hábitos
              </Button>
            </div>

            {/* Streak highlights */}
            {(() => {
              const activeStreaks = data.habits
                .map(h => ({ habit: h, streak: getHabitStreak(h.id) }))
                .filter(s => s.streak > 0)
                .sort((a, b) => b.streak - a.streak);
              
              if (activeStreaks.length === 0) return null;
              
              return (
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-medium text-muted-foreground">Streaks ativos:</span>
                  {activeStreaks.map(({ habit, streak }) => (
                    <div key={habit.id} className="flex items-center gap-1.5">
                      <span className="text-base leading-none">{habit.icon}</span>
                      <StreakBadge streak={streak} />
                    </div>
                  ))}
                </div>
              );
            })()}

            <div>
              {/* Habit checklist */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-rose-500" />
                    Hábitos de Hoje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {todayHabits.length === 0 ? (
                    <div className="flex flex-col items-center gap-3 py-8 text-muted-foreground">
                      <Heart className="h-10 w-10 opacity-30" />
                      <p className="text-sm">Nenhum hábito para hoje</p>
                      <Button size="sm" variant="outline" onClick={() => setManageOpen(true)}>
                        <Plus className="h-4 w-4 mr-1" />
                        Adicionar hábito
                      </Button>
                    </div>
                  ) : (
                    todayHabits.map(habit => {
                      const done = isHabitCompletedOn(habit.id, today);
                      const streak = getHabitStreak(habit.id);
                      return (
                        <button
                          key={habit.id}
                          onClick={() => toggleHabitCompletion(habit.id, today)}
                          className={cn(
                            'w-full flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all',
                            done
                              ? 'bg-emerald-500/10 border-emerald-500/40'
                              : 'bg-card hover:bg-muted/50 border-border',
                          )}
                        >
                          <span className={cn('flex-shrink-0', done ? 'text-emerald-500' : 'text-muted-foreground')}>
                            {done ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                          </span>
                          <span className="text-xl leading-none flex-shrink-0">{habit.icon}</span>
                          <span className={cn('flex-1 font-medium text-sm', done && 'line-through text-muted-foreground')}>
                            {habit.name}
                          </span>
                          {streak > 0 && (
                            <StreakBadge streak={streak} compact />
                          )}
                        </button>
                      );
                    })
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Weekly progress grid */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Progresso Semanal — últimos 7 dias</CardTitle>
              </CardHeader>
              <CardContent>
                {data.habits.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">
                    Adicione hábitos para ver o progresso semanal
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4 min-w-[140px]">
                            Hábito
                          </th>
                          {last7.map(d => (
                            <th key={d} className="text-center text-xs text-muted-foreground font-medium pb-3 px-1 min-w-[40px]">
                              <div className={cn(
                                'flex flex-col items-center gap-0.5',
                                d === today && 'text-primary font-semibold',
                              )}>
                                <span className="capitalize">
                                  {format(new Date(d + 'T12:00:00'), 'EEE', { locale: ptBR })}
                                </span>
                                <span>{format(new Date(d + 'T12:00:00'), 'dd')}</span>
                              </div>
                            </th>
                          ))}
                          <th className="text-center text-xs text-muted-foreground font-medium pb-3 pl-3 min-w-[50px]">
                            Streak
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {data.habits.map(habit => {
                          const streak = getHabitStreak(habit.id);
                          const activeDays = last7.filter(d => isHabitActiveOnDate(habit, d));
                          const weekDone = activeDays.filter(d => isHabitCompletedOn(habit.id, d)).length;
                          return (
                            <tr key={habit.id}>
                              <td className="py-2 pr-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-base leading-none">{habit.icon}</span>
                                  <span className="text-sm font-medium truncate max-w-[100px]">{habit.name}</span>
                                </div>
                              </td>
                              {last7.map(d => {
                                const active = isHabitActiveOnDate(habit, d);
                                const done = isHabitCompletedOn(habit.id, d);
                                const isToday = d === today;
                                return (
                                  <td key={d} className="py-2 px-1 text-center">
                                    {active ? (
                                      <button
                                        onClick={() => toggleHabitCompletion(habit.id, d)}
                                        className={cn(
                                          'h-7 w-7 rounded-full mx-auto flex items-center justify-center transition-all hover:scale-110',
                                          done
                                            ? 'bg-emerald-500 text-white shadow-sm'
                                            : isToday
                                            ? 'bg-muted border-2 border-dashed border-muted-foreground/40'
                                            : 'bg-muted/50',
                                        )}
                                        title={done ? 'Concluído — clique para desmarcar' : 'Clique para marcar'}
                                      >
                                        {done && <span className="text-xs">✓</span>}
                                      </button>
                                    ) : (
                                      <span className="text-xs text-muted-foreground/40 mx-auto block text-center">—</span>
                                    )}
                                  </td>
                                );
                              })}
                              <td className="py-2 pl-3 text-center">
                                <div className="flex flex-col items-center gap-0.5">
                                  {streak > 0 ? (
                                    <StreakBadge streak={streak} compact />
                                  ) : (
                                    <span className="text-xs text-muted-foreground">{weekDone}/{activeDays.length}</span>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    {/* Legend */}
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-emerald-500" />
                        <span>Concluído</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-muted border-2 border-dashed border-muted-foreground/40" />
                        <span>Hoje (pendente)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-muted/50" />
                        <span>Não concluído</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Monthly progress table - Habits */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Progresso Mensal — {new Date().getFullYear()}</CardTitle>
              </CardHeader>
              <CardContent>
                {data.habits.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">
                    Adicione hábitos para ver o progresso mensal
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4 min-w-[140px]">
                            Hábito
                          </th>
                          {MONTH_LABELS.map((m, i) => (
                            <th key={m} className={cn(
                              'text-center text-xs text-muted-foreground font-medium pb-3 px-1 min-w-[42px]',
                              i === new Date().getMonth() && 'text-primary font-semibold',
                            )}>
                              {m}
                            </th>
                          ))}
                          <th className="text-center text-xs text-muted-foreground font-medium pb-3 pl-3 min-w-[50px]">
                            Ano
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {data.habits.map(habit => {
                          const year = new Date().getFullYear();
                          const currentMonth = new Date().getMonth();
                          const createdMonth = new Date(habit.createdAt).getFullYear() === year
                            ? new Date(habit.createdAt).getMonth()
                            : 0;
                          let yearActive = 0;
                          let yearCompleted = 0;

                          const monthStats = MONTH_LABELS.map((_, i) => {
                            if (i > currentMonth || (new Date(habit.createdAt).getFullYear() === year && i < createdMonth)) {
                              return null;
                            }
                            if (new Date(habit.createdAt).getFullYear() > year) return null;
                            const stats = getMonthlyHabitStats(year, i, habit, data.completions);
                            yearActive += stats.active;
                            yearCompleted += stats.completed;
                            return stats;
                          });

                          const yearRate = yearActive > 0 ? yearCompleted / yearActive : null;

                          return (
                            <tr key={habit.id}>
                              <td className="py-2 pr-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-base leading-none">{habit.icon}</span>
                                  <span className="text-sm font-medium truncate max-w-[100px]">{habit.name}</span>
                                </div>
                              </td>
                              {monthStats.map((stats, i) => (
                                <td key={i} className="py-2 px-1 text-center">
                                  <RateCell rate={stats?.rate ?? null} isCurrentMonth={i === currentMonth} />
                                </td>
                              ))}
                              <td className="py-2 pl-3 text-center">
                                <RateCell rate={yearRate} isCurrentMonth={false} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Tab: Atividade Física ─────────────────────────────────── */}
          <TabsContent value="atividade-fisica" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" />
                Atividade Física
              </h2>
              <Button variant="outline" size="sm" onClick={() => setWorkoutSetupOpen(true)}>
                <Settings className="h-4 w-4 mr-1" />
                Configurar Rotina
              </Button>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <TodayWorkout />
              <WorkoutFrequency />
            </div>

            {/* Weekly progress table */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Progresso Semanal — últimos 7 dias</CardTitle>
              </CardHeader>
              <CardContent>
                {workout.data.workoutTypes.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">
                    Adicione tipos de treino para ver o progresso semanal
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4 min-w-[140px]">
                            Treino
                          </th>
                          {last7.map(d => (
                            <th key={d} className="text-center text-xs text-muted-foreground font-medium pb-3 px-1 min-w-[40px]">
                              <div className={cn(
                                'flex flex-col items-center gap-0.5',
                                d === today && 'text-primary font-semibold',
                              )}>
                                <span className="capitalize">
                                  {format(new Date(d + 'T12:00:00'), 'EEE', { locale: ptBR })}
                                </span>
                                <span>{format(new Date(d + 'T12:00:00'), 'dd')}</span>
                              </div>
                            </th>
                          ))}
                          <th className="text-center text-xs text-muted-foreground font-medium pb-3 pl-3 min-w-[50px]">
                            Semana
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {workout.data.workoutTypes.map(wt => {
                          // For each of the last 7 days, check if this type is scheduled and if there's a log
                          const dayCells = last7.map(d => {
                            const date = new Date(d + 'T12:00:00');
                            const dow = date.getDay();
                            const routineCfg = workout.data.weeklyRoutine[dow];
                            const isScheduled = routineCfg?.typeId === wt.id;
                            const hasLog = workout.data.logs.some(l => l.date === d && l.workoutTypeId === wt.id);
                            const isToday = d === today;
                            return { d, isScheduled, hasLog, isToday };
                          });
                          const scheduledCount = dayCells.filter(c => c.isScheduled).length;
                          const doneCount = dayCells.filter(c => c.isScheduled && c.hasLog).length;

                          return (
                            <tr key={wt.id}>
                              <td className="py-2 pr-4">
                                <div className="flex items-center gap-2">
                                  <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: wt.color }} />
                                  <span className="text-sm font-medium truncate max-w-[100px]">{wt.name}</span>
                                </div>
                              </td>
                              {dayCells.map(({ d, isScheduled, hasLog, isToday }) => (
                                <td key={d} className="py-2 px-1 text-center">
                                  {isScheduled ? (
                                    <div
                                      className={cn(
                                        'h-7 w-7 rounded-full mx-auto flex items-center justify-center',
                                        hasLog
                                          ? 'bg-emerald-500 text-white shadow-sm'
                                          : isToday
                                          ? 'bg-muted border-2 border-dashed border-muted-foreground/40'
                                          : 'bg-muted/50',
                                      )}
                                    >
                                      {hasLog && <span className="text-xs">✓</span>}
                                    </div>
                                  ) : (
                                    <span className="text-xs text-muted-foreground/40 mx-auto block text-center">—</span>
                                  )}
                                </td>
                              ))}
                              <td className="py-2 pl-3 text-center">
                                <span className="text-xs text-muted-foreground">{doneCount}/{scheduledCount}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    {/* Legend */}
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-emerald-500" />
                        <span>Concluído</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-muted border-2 border-dashed border-muted-foreground/40" />
                        <span>Hoje (pendente)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 rounded-full bg-muted/50" />
                        <span>Não concluído</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Monthly progress table - Workouts */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Progresso Mensal — {new Date().getFullYear()}</CardTitle>
              </CardHeader>
              <CardContent>
                {workout.data.workoutTypes.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground py-4">
                    Adicione tipos de treino para ver o progresso mensal
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs text-muted-foreground font-medium pb-3 pr-4 min-w-[140px]">
                            Treino
                          </th>
                          {MONTH_LABELS.map((m, i) => (
                            <th key={m} className={cn(
                              'text-center text-xs text-muted-foreground font-medium pb-3 px-1 min-w-[42px]',
                              i === new Date().getMonth() && 'text-primary font-semibold',
                            )}>
                              {m}
                            </th>
                          ))}
                          <th className="text-center text-xs text-muted-foreground font-medium pb-3 pl-3 min-w-[50px]">
                            Ano
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {workout.data.workoutTypes.map(wt => {
                          const year = new Date().getFullYear();
                          const currentMonth = new Date().getMonth();
                          let yearScheduled = 0;
                          let yearCompleted = 0;

                          const monthStats = MONTH_LABELS.map((_, i) => {
                            if (i > currentMonth) return null;
                            const stats = getMonthlyWorkoutStats(year, i, wt.id, workout.data.weeklyRoutine, workout.data.logs);
                            yearScheduled += stats.scheduled;
                            yearCompleted += stats.completed;
                            return stats;
                          });

                          const yearRate = yearScheduled > 0 ? yearCompleted / yearScheduled : null;

                          return (
                            <tr key={wt.id}>
                              <td className="py-2 pr-4">
                                <div className="flex items-center gap-2">
                                  <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: wt.color }} />
                                  <span className="text-sm font-medium truncate max-w-[100px]">{wt.name}</span>
                                </div>
                              </td>
                              {monthStats.map((stats, i) => (
                                <td key={i} className="py-2 px-1 text-center">
                                  <RateCell rate={stats?.rate ?? null} isCurrentMonth={i === currentMonth} />
                                </td>
                              ))}
                              <td className="py-2 pl-3 text-center">
                                <RateCell rate={yearRate} isCurrentMonth={false} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>

            
          </TabsContent>
        </Tabs>
      </div>

      <WorkoutSetup open={workoutSetupOpen} onOpenChange={setWorkoutSetupOpen} />

      {/* ── Manage Habits Dialog ─────────────────────────────────────────── */}
      <Dialog open={manageOpen} onOpenChange={setManageOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Gerenciar Hábitos</DialogTitle>
          </DialogHeader>

          {/* Add / Edit habit */}
          <div className="space-y-3 py-1">
            <Label className="text-sm">
              {editingHabitId ? 'Editar hábito' : 'Novo hábito'}
            </Label>
            <div className="flex gap-2">
              <div className="relative">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-md border text-xl hover:bg-muted transition-colors flex-shrink-0"
                  title="Escolher ícone"
                >
                  {newIcon}
                </button>
              </div>
              <div className="flex gap-1.5 items-center flex-1">
                <Input
                  placeholder="Nome do hábito..."
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSaveHabit()}
                  className="flex-1"
                />
                <VoiceInputButton onTranscript={t => setNewName(v => v ? v + ' ' + t : t)} />
              </div>
              <Button size="icon" onClick={handleSaveHabit} disabled={!newName.trim()}>
                {editingHabitId ? <CheckCircle2 className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </Button>
            </div>
            {editingHabitId && (
              <Button variant="ghost" size="sm" className="text-xs" onClick={resetHabitForm}>
                Cancelar edição
              </Button>
            )}

            {/* Emoji suggestions */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Escolha um ícone:</p>
              <div className="flex flex-wrap gap-1.5">
                {EMOJI_SUGGESTIONS.map(emoji => (
                  <button
                    key={emoji}
                    onClick={() => setNewIcon(emoji)}
                    className={cn(
                      'h-8 w-8 rounded-md border text-lg flex items-center justify-center transition-all hover:scale-110',
                      newIcon === emoji ? 'border-primary bg-primary/10' : 'border-border hover:border-muted-foreground',
                    )}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Recurrence mode */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Recorrência:</p>
              <div className="flex gap-1.5">
                {(['once', 'weekly', 'daily'] as HabitRecurrenceMode[]).map(mode => {
                  const labels: Record<HabitRecurrenceMode, string> = {
                    once: 'Uma vez',
                    weekly: 'Dias da semana',
                    daily: 'Todo dia',
                  };
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setNewRecurrenceMode(mode)}
                      className={cn(
                        'flex-1 px-2 py-1.5 rounded-md border text-xs font-medium transition-all',
                        newRecurrenceMode === mode
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background text-muted-foreground hover:border-muted-foreground hover:text-foreground',
                      )}
                    >
                      {labels[mode]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Day-of-week picker (only when weekly) */}
            {newRecurrenceMode === 'weekly' && (
              <div>
                <p className="text-xs text-muted-foreground mb-2">Dias da semana:</p>
                <div className="flex gap-1.5">
                  {DAY_LABELS.map((label, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleRecurrenceDay(idx)}
                      className={cn(
                        'flex-1 h-8 rounded-md border text-xs font-semibold transition-all',
                        newRecurrenceDays.includes(idx)
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-muted-foreground hover:border-muted-foreground hover:text-foreground',
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Shift for habit */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Turno do hábito <span className="italic">(opcional)</span>:</p>
              <div className="flex flex-wrap gap-1.5">
                {SHIFT_ORDER.map(s => {
                  const cfg = SHIFT_CONFIG[s];
                  const active = newShift === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewShift(active ? undefined : s)}
                      className={cn(
                        'flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium transition-all',
                        active
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background text-muted-foreground hover:border-muted-foreground hover:text-foreground',
                      )}
                    >
                      <span>{cfg.icon}</span> {cfg.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Existing habits */}
          <div className="space-y-1 max-h-[220px] overflow-y-auto">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Hábitos cadastrados ({data.habits.length})
            </p>
            {data.habits.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">Nenhum hábito ainda</p>
            ) : (
              data.habits.map(habit => (
                <div
                  key={habit.id}
                  className="flex items-center gap-3 rounded-lg border px-3 py-2 group"
                >
                  <span className="text-xl leading-none">{habit.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium block truncate">{habit.name}</span>
                    <span className="text-[10px] text-muted-foreground">
                      {getRecurrenceBadge(habit.recurrenceMode ?? 'daily', habit.recurrenceDays)}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                    onClick={() => startEditHabit(habit)}
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                    onClick={() => deleteHabit(habit.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))
            )}
          </div>

          <DialogFooter>
            <Button onClick={() => setManageOpen(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
