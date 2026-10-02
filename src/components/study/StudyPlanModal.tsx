import React, { useState, useMemo, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
  CalendarCheck,
  Search,
  CheckCircle2,
  Circle,
  Clock,
  Sparkles,
  Filter,
  CheckSquare,
  BookOpen,
  Trophy,
  Zap,
  RotateCcw
} from 'lucide-react';
import { buildSefazBAPlan, DayPlan, PlanTask } from '@/data/sefazBAPlanningData';
import { useStudy } from '@/contexts/StudyContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface StudyPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STORAGE_KEY = 'sefaz_ba_daily_plan_completed_tasks_v1';

export function StudyPlanModal({ open, onOpenChange }: StudyPlanModalProps) {
  const { data: studyData, updateLesson } = useStudy();

  const allDays = useMemo(() => buildSefazBAPlan(), []);

  // Map of completed task IDs -> boolean
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'phase1' | 'phase2' | 'phase3'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'completed'>('all');

  // Save to localstorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedTaskIds));
    } catch (e) {
      console.error('Failed to save study plan progress', e);
    }
  }, [completedTaskIds]);

  // Aggregate Statistics
  const totalTasksCount = useMemo(() => {
    return allDays.reduce((acc, d) => acc + d.tasks.length, 0);
  }, [allDays]);

  const completedTasksCount = useMemo(() => {
    return Object.values(completedTaskIds).filter(Boolean).length;
  }, [completedTaskIds]);

  const overallPercent = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  const completedDaysCount = useMemo(() => {
    return allDays.filter(d => d.tasks.every(t => completedTaskIds[t.id])).length;
  }, [allDays, completedTaskIds]);

  // Toggle single task
  const toggleTask = (task: PlanTask) => {
    const isCompleted = !completedTaskIds[task.id];
    setCompletedTaskIds(prev => ({
      ...prev,
      [task.id]: isCompleted
    }));

    if (isCompleted) {
      toast.success(`Tarefa marcada: ${task.title}`);
    }

    // Optional sync: If task is a specific lesson in Phase 1, auto mark theoryCompleted
    if (isCompleted && task.subject && task.lesson) {
      try {
        const sub = studyData.subjects.find(
          s => s.name.trim().toLowerCase() === task.subject?.trim().toLowerCase()
        );
        if (sub) {
          const matchLessonNum = task.lesson.match(/\d+/);
          if (matchLessonNum) {
            const lessonNumber = parseInt(matchLessonNum[0]);
            updateLesson(sub.id, { theoryCompleted: true }, sub.id, lessonNumber);
          }
        }
      } catch (e) {
        // Silent catch if studyData isn't ready
      }
    }
  };

  // Toggle whole day
  const toggleDay = (day: DayPlan) => {
    const allCompleted = day.tasks.every(t => completedTaskIds[t.id]);
    const newState = !allCompleted;

    setCompletedTaskIds(prev => {
      const next = { ...prev };
      day.tasks.forEach(t => {
        next[t.id] = newState;
      });
      return next;
    });

    if (newState) {
      toast.success(`Todas as tarefas do Dia ${day.dayNumber} concluídas! 🎉`);
    }
  };

  // Filter logic
  const filteredDays = useMemo(() => {
    return allDays.filter(day => {
      // Phase filter
      if (selectedPhase === 'phase1' && day.phase !== 'Fase 1: Cobertura de Aulas') return false;
      if (selectedPhase === 'phase2' && day.phase !== 'Fase 2: Intensivo Cesgranrio') return false;
      if (selectedPhase === 'phase3' && day.phase !== 'Fase 3: Reta Final') return false;

      // Status filter
      const dayTasksCompleted = day.tasks.filter(t => completedTaskIds[t.id]).length;
      if (selectedStatus === 'completed' && dayTasksCompleted < day.tasks.length) return false;
      if (selectedStatus === 'pending' && dayTasksCompleted === day.tasks.length) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesDay = `dia ${day.dayNumber}`.includes(q) || day.dateStr.includes(q);
        const matchesTasks = day.tasks.some(
          t => t.title.toLowerCase().includes(q) ||
               t.description.toLowerCase().includes(q) ||
               (t.subject && t.subject.toLowerCase().includes(q))
        );
        if (!matchesDay && !matchesTasks) return false;
      }

      return true;
    });
  }, [allDays, selectedPhase, selectedStatus, searchQuery, completedTaskIds]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 gap-0 bg-background text-foreground overflow-hidden border-border">
        
        {/* Modal Header */}
        <DialogHeader className="p-6 pb-4 border-b border-border bg-card/50">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  Plano de Estudo Diário - SEFAZ-BA
                  <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                    144 Dias
                  </Badge>
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                  Planejamento estratégico dia a dia: 235 Aulas + Treinamento FGV + Reta Final
                </DialogDescription>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-4 bg-muted/50 p-2.5 px-4 rounded-xl border border-border">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Progresso Geral</div>
                <div className="text-base font-bold text-cyan-400">
                  {completedTasksCount} / {totalTasksCount} ({overallPercent}%)
                </div>
              </div>
              <div className="w-16">
                <Progress value={overallPercent} className="h-2 bg-muted" />
              </div>
            </div>
          </div>

          {/* Overall Progress & Phase Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
              <BookOpen className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Fase 1: Aulas Teóricas</div>
                <div className="text-sm font-semibold text-foreground">Dias 1 a 98 (235 Aulas)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
              <Zap className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Fase 2: Intensivo Cesgranrio</div>
                <div className="text-sm font-semibold text-foreground">Dias 99 a 128 (Simulados)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
              <Trophy className="h-5 w-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Fase 3: Reta Final</div>
                <div className="text-sm font-semibold text-foreground">Dias 129 a 144 (Memorização)</div>
              </div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-4 pt-2">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por dia, matéria ou assunto..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-xs"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {/* Phase Filter Tabs */}
              <Tabs value={selectedPhase} onValueChange={(v: any) => setSelectedPhase(v)}>
                <TabsList className="h-9 p-1 bg-muted/60">
                  <TabsTrigger value="all" className="text-xs px-2.5">Todas Fases</TabsTrigger>
                  <TabsTrigger value="phase1" className="text-xs px-2.5">Fase 1</TabsTrigger>
                  <TabsTrigger value="phase2" className="text-xs px-2.5">Fase 2</TabsTrigger>
                  <TabsTrigger value="phase3" className="text-xs px-2.5">Fase 3</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Status Filter Tabs */}
              <Tabs value={selectedStatus} onValueChange={(v: any) => setSelectedStatus(v)}>
                <TabsList className="h-9 p-1 bg-muted/60">
                  <TabsTrigger value="all" className="text-xs px-2">Todos</TabsTrigger>
                  <TabsTrigger value="pending" className="text-xs px-2">Pendentes</TabsTrigger>
                  <TabsTrigger value="completed" className="text-xs px-2">Concluídos</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </DialogHeader>

        {/* Modal Body - Days List */}
        <ScrollArea className="flex-1 p-6">
          {filteredDays.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarCheck className="h-12 w-12 mx-auto mb-3 opacity-30 text-cyan-400" />
              <p className="font-medium text-foreground">Nenhum dia encontrado para os filtros selecionados.</p>
              <p className="text-xs mt-1">Tente ajustar sua busca ou limpar os filtros de fase/status.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredDays.map(day => {
                const dayCompletedTasks = day.tasks.filter(t => completedTaskIds[t.id]).length;
                const isDayFullyCompleted = dayCompletedTasks === day.tasks.length;

                return (
                  <Card
                    key={day.dayNumber}
                    className={cn(
                      "transition-all border border-border/80 overflow-hidden",
                      isDayFullyCompleted ? "bg-emerald-950/20 border-emerald-500/30" : "bg-card/40"
                    )}
                  >
                    {/* Day Header */}
                    <div className="flex items-center justify-between p-4 bg-muted/30 border-b border-border/60 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={cn(
                            "font-bold px-2.5 py-1 text-xs",
                            isDayFullyCompleted
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                              : "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                          )}
                        >
                          Dia {day.dayNumber}
                        </Badge>

                        <div>
                          <h3 className="font-semibold text-sm flex items-center gap-2">
                            {day.dateStr}
                            <span className="text-xs font-normal text-muted-foreground">
                              (Semana {day.weekNumber})
                            </span>
                          </h3>
                        </div>

                        <Badge
                          variant="secondary"
                          className={cn(
                            "text-[10px] hidden sm:inline-flex",
                            day.phase.includes('Fase 1') && "bg-emerald-500/10 text-emerald-400",
                            day.phase.includes('Fase 2') && "bg-amber-500/10 text-amber-400",
                            day.phase.includes('Fase 3') && "bg-cyan-500/10 text-cyan-400"
                          )}
                        >
                          {day.phase}
                        </Badge>
                      </div>

                      {/* Day Completion Actions */}
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground font-medium">
                          {dayCompletedTasks} / {day.tasks.length} concluídas
                        </span>

                        <Button
                          size="sm"
                          variant={isDayFullyCompleted ? "outline" : "secondary"}
                          onClick={() => toggleDay(day)}
                          className={cn(
                            "h-7 text-xs font-medium gap-1.5",
                            isDayFullyCompleted && "border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/40"
                          )}
                        >
                          {isDayFullyCompleted ? (
                            <>
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                              Concluído
                            </>
                          ) : (
                            <>
                              <CheckSquare className="h-3.5 w-3.5" />
                              Concluir Dia
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Day Tasks List */}
                    <CardContent className="p-4 space-y-3">
                      {day.tasks.map(task => {
                        const isTaskDone = Boolean(completedTaskIds[task.id]);

                        return (
                          <div
                            key={task.id}
                            onClick={() => toggleTask(task)}
                            className={cn(
                              "flex items-start gap-3.5 p-3 rounded-lg border transition-all cursor-pointer group",
                              isTaskDone
                                ? "bg-emerald-950/20 border-emerald-500/30 opacity-75"
                                : "bg-card hover:bg-muted/50 border-border/60 hover:border-cyan-500/40"
                            )}
                          >
                            <Checkbox
                              checked={isTaskDone}
                              onCheckedChange={() => toggleTask(task)}
                              className="mt-0.5"
                            />

                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge variant="outline" className="text-[10px] py-0 px-1.5 border-muted-foreground/30">
                                    {task.shift}
                                  </Badge>

                                  {task.subject && (
                                    <Badge variant="secondary" className="text-[10px] py-0 px-1.5 bg-cyan-500/10 text-cyan-400">
                                      {task.subject}
                                    </Badge>
                                  )}

                                  <h4 className={cn(
                                    "font-medium text-xs sm:text-sm transition-all",
                                    isTaskDone ? "line-through text-muted-foreground" : "text-foreground group-hover:text-cyan-300"
                                  )}>
                                    {task.title}
                                  </h4>
                                </div>
                              </div>

                              <p className={cn(
                                "text-xs leading-relaxed",
                                isTaskDone ? "text-muted-foreground/70" : "text-muted-foreground"
                              )}>
                                {task.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
