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
  BookOpen,
  Trophy,
  Zap,
  CheckSquare,
  ShieldCheck,
  Target
} from 'lucide-react';
import { buildSefazBAPlan, DayPlan, PlanTask } from '@/data/sefazBAPlanningData';
import { buildUfbaSprintPlan } from '@/data/ufbaPlanningData';
import { useStudy } from '@/contexts/StudyContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface StudyPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SEFAZ_STORAGE_KEY = 'sefaz_ba_daily_plan_completed_tasks_v1';
const UFBA_STORAGE_KEY = 'ufba_cgu_sprint_plan_completed_tasks_v1';

export function StudyPlanModal({ open, onOpenChange }: StudyPlanModalProps) {
  const { data: studyData, updateLesson } = useStudy();

  // Switch between UFBA Priority Sprint and SEFAZ-BA Original Plan
  const [activePlanType, setActivePlanType] = useState<'ufba' | 'sefaz'>('ufba');

  // Days memoized for both plans
  const sefazDays = useMemo(() => buildSefazBAPlan(), []);
  const ufbaDays = useMemo(() => buildUfbaSprintPlan(), []);

  const allDays = activePlanType === 'ufba' ? ufbaDays : sefazDays;
  const currentStorageKey = activePlanType === 'ufba' ? UFBA_STORAGE_KEY : SEFAZ_STORAGE_KEY;

  // Map of completed task IDs -> boolean for the active plan
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(UFBA_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Reload tasks when switching plan type so nothing is lost or crossed
  useEffect(() => {
    try {
      const saved = localStorage.getItem(currentStorageKey);
      setCompletedTaskIds(saved ? JSON.parse(saved) : {});
    } catch {
      setCompletedTaskIds({});
    }
  }, [currentStorageKey]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'phase1' | 'phase2' | 'phase3' | 'phase4'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'completed'>('all');

  // Save to localstorage on change for the active plan only
  useEffect(() => {
    try {
      localStorage.setItem(currentStorageKey, JSON.stringify(completedTaskIds));
    } catch (e) {
      console.error('Failed to save study plan progress', e);
    }
  }, [completedTaskIds, currentStorageKey]);

  // Aggregate Statistics
  const totalTasksCount = useMemo(() => {
    return allDays.reduce((acc, d) => acc + d.tasks.length, 0);
  }, [allDays]);

  const completedTasksCount = useMemo(() => {
    return Object.values(completedTaskIds).filter(Boolean).length;
  }, [completedTaskIds]);

  const overallPercent = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

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

    // Optional sync: If task is a specific lesson, auto mark theoryCompleted in studyData
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
        // Silent catch
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
      toast.success(`Todas as tarefas do Dia ${day.dayNumber} concluídas! 🚀`);
      
      // Auto-sync all lessons in this day to global studyData
      day.tasks.forEach(task => {
        if (task.subject && task.lesson) {
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
          } catch (e) {}
        }
      });
    }
  };

  // Filter logic
  const filteredDays = useMemo(() => {
    return allDays.filter(day => {
      // Phase filter
      if (selectedPhase === 'phase1' && !day.phase.includes('Fase 1')) return false;
      if (selectedPhase === 'phase2' && !day.phase.includes('Fase 2')) return false;
      if (selectedPhase === 'phase3' && !day.phase.includes('Fase 3') && !day.phase.includes('CGU')) return false;
      if (selectedPhase === 'phase4' && !day.phase.includes('Fase 4') && !day.phase.includes('UFBA')) return false;

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
      <DialogContent className="max-w-4xl h-[92vh] flex flex-col p-0 gap-0 bg-background text-foreground overflow-hidden border-border">
        
        {/* Modal Header */}
        <DialogHeader className="p-6 pb-4 border-b border-border bg-card/60">
          
          {/* Top Plan Mode Switcher */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3 pb-3 border-b border-border/60">
            <div className="flex items-center gap-1.5 p-1 bg-muted/80 rounded-xl border border-border">
              <Button
                size="sm"
                variant={activePlanType === 'ufba' ? 'default' : 'ghost'}
                onClick={() => {
                  setActivePlanType('ufba');
                  setSelectedPhase('all');
                }}
                className={cn(
                  "h-8 text-xs font-semibold gap-1.5 transition-all",
                  activePlanType === 'ufba'
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Target className="h-3.5 w-3.5 text-white" />
                <span>🎯 Sprint Prioritário UFBA + CGU (60 Dias)</span>
              </Button>

              <Button
                size="sm"
                variant={activePlanType === 'sefaz' ? 'default' : 'ghost'}
                onClick={() => {
                  setActivePlanType('sefaz');
                  setSelectedPhase('all');
                }}
                className={cn(
                  "h-8 text-xs font-semibold gap-1.5 transition-all",
                  activePlanType === 'sefaz'
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>🏛️ Plano Geral SEFAZ-BA (88 Dias)</span>
              </Button>
            </div>

            <div className="text-[11px] text-muted-foreground font-medium flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Dados e histórico preservados no Habitus
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2.5 rounded-xl border",
                activePlanType === 'ufba'
                  ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                  : "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
              )}>
                <CalendarCheck className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  {activePlanType === 'ufba' ? (
                    <>
                      <span>Sprint Prioritário UFBA (Contador)</span>
                      <Badge className="bg-emerald-600 text-white border-none font-bold">
                        Prova 20/Dez
                      </Badge>
                      <Badge variant="outline" className="text-xs border-amber-500/40 text-amber-400 bg-amber-500/10">
                        💉 Vacina CGU 13/Dez
                      </Badge>
                    </>
                  ) : (
                    <>
                      <span>Plano de Estudo Diário - SEFAZ-BA</span>
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        88 Dias
                      </Badge>
                    </>
                  )}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                  {activePlanType === 'ufba'
                    ? 'Preparação máxima de 60 dias para o cargo de Contador da UFBA (Salvador) com vacina de Auditoria para a CGU.'
                    : 'Planejamento estratégico dia a dia: 235 Aulas + Treinamento Cesgranrio + Reta Final'}
                </DialogDescription>
              </div>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-4 bg-muted/50 p-2.5 px-4 rounded-xl border border-border">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Progresso do Plano</div>
                <div className={cn(
                  "text-base font-bold",
                  activePlanType === 'ufba' ? "text-emerald-400" : "text-cyan-400"
                )}>
                  {completedTasksCount} / {totalTasksCount} ({overallPercent}%)
                </div>
              </div>
              <div className="w-16">
                <Progress value={overallPercent} className="h-2 bg-muted" />
              </div>
            </div>
          </div>

          {/* Overall Progress & Phase Indicators */}
          {activePlanType === 'ufba' ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 mt-3.5">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-card border border-border">
                <BookOpen className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-muted-foreground font-medium">Fase 1: Núcleo de Ouro</div>
                  <div className="text-xs font-bold text-foreground">Contab. Geral, CASP e AFO</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-card border border-border">
                <ShieldCheck className="h-4 w-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-muted-foreground font-medium">Fase 2: Vacina CGU</div>
                  <div className="text-xs font-bold text-foreground">Auditoria & Leis (Finais de Semana)</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-card border border-border">
                <Zap className="h-4 w-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-muted-foreground font-medium">13/Dez: Prova CGU</div>
                  <div className="text-xs font-bold text-foreground">Auditor Federal (Salvador)</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-card border border-border">
                <Trophy className="h-4 w-4 text-yellow-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-muted-foreground font-medium">20/Dez: Prova UFBA</div>
                  <div className="text-xs font-bold text-foreground">Contador (Vaga em Salvador!)</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <BookOpen className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">Fase 1: Aulas Teóricas</div>
                  <div className="text-sm font-semibold text-foreground">Dias 1 a 60 (235 Aulas)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <Zap className="h-5 w-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">Fase 2: Intensivo Cesgranrio</div>
                  <div className="text-sm font-semibold text-foreground">Dias 61 a 78 (Simulados)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <Trophy className="h-5 w-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground">Fase 3: Reta Final</div>
                  <div className="text-sm font-semibold text-foreground">Dias 79 a 88 (Memorização)</div>
                </div>
              </div>
            </div>
          )}

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-3.5 pt-2">
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
                  {activePlanType === 'ufba' ? (
                    <TabsTrigger value="phase4" className="text-xs px-2.5">Reta Final UFBA</TabsTrigger>
                  ) : (
                    <TabsTrigger value="phase3" className="text-xs px-2.5">Fase 3</TabsTrigger>
                  )}
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
              <CalendarCheck className="h-12 w-12 mx-auto mb-3 opacity-30 text-emerald-400" />
              <p className="font-medium text-foreground">Nenhum dia encontrado para os filtros selecionados.</p>
              <p className="text-xs mt-1">Tente ajustar sua busca ou limpar os filtros de fase/status.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredDays.map(day => {
                const dayCompletedTasks = day.tasks.filter(t => completedTaskIds[t.id]).length;
                const isDayFullyCompleted = dayCompletedTasks === day.tasks.length;
                const isSpecialDay = day.phase.includes('CGU') || day.phase.includes('UFBA') || day.tasks.some(t => t.isVaccine);

                return (
                  <Card
                    key={day.dayNumber}
                    className={cn(
                      "transition-all border overflow-hidden",
                      isDayFullyCompleted
                        ? "bg-emerald-950/20 border-emerald-500/40"
                        : isSpecialDay
                        ? "bg-card/70 border-amber-500/30"
                        : "bg-card/40 border-border/80"
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
                              : day.phase.includes('UFBA')
                              ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/40"
                              : day.phase.includes('CGU')
                              ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
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
                            "text-[10px] hidden sm:inline-flex font-medium",
                            day.phase.includes('Fase 1') && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                            day.phase.includes('Vacina') && "bg-amber-500/10 text-amber-300 border border-amber-500/30",
                            day.phase.includes('Fase 4') && "bg-purple-500/10 text-purple-300 border border-purple-500/30",
                            day.phase.includes('CGU') && "bg-amber-600 text-white font-bold",
                            day.phase.includes('UFBA') && "bg-emerald-600 text-white font-bold"
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
                                : task.isVaccine
                                ? "bg-amber-950/10 border-amber-500/40 hover:bg-amber-950/20"
                                : "bg-card hover:bg-muted/50 border-border/60 hover:border-emerald-500/40"
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

                                  {task.isVaccine && (
                                    <Badge variant="secondary" className="text-[10px] py-0 px-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                      💉 Vacina CGU (10%)
                                    </Badge>
                                  )}

                                  <h4 className={cn(
                                    "font-medium text-xs sm:text-sm transition-all",
                                    isTaskDone ? "line-through text-muted-foreground" : "text-foreground group-hover:text-emerald-300"
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
