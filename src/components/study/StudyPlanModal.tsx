import React, { useState, useMemo, useEffect, useCallback } from 'react';
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
  Target,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Aula00QuestionsSimulado } from '@/components/study/Aula00QuestionsSimulado';
import { buildSefazBAPlan, DayPlan, PlanTask } from '@/data/sefazBAPlanningData';
import { buildUfbaSprintPlan } from '@/data/ufbaPlanningData';
import { useStudy } from '@/contexts/StudyContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface StudyPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SEFAZ_STORAGE_KEY = 'sefaz_ba_daily_plan_completed_tasks_v2';
const UFBA_STORAGE_KEY = 'ufba_cgu_sprint_plan_completed_tasks_v2';

function normalizeSubject(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getCanonicalSubject(name: string): string {
  const n = normalizeSubject(name);
  if (n.includes('casp') || n.includes('setor publico')) return 'casp';
  if (n.includes('contabilid')) return 'contabilidade geral';
  if (n.includes('portug') || n.includes('lingua')) return 'lingua portuguesa';
  if (n.includes('constitucional')) return 'direito constitucional';
  if (n.includes('administrativo')) return 'direito administrativo';
  if (n.includes('tribut')) return 'direito tributario';
  if (n.includes('auditoria')) return 'auditoria';
  if (n.includes('estat')) return 'estatistica';
  if (n.includes('economia')) return 'economia';
  if (n.includes('financas') || n.includes('afo') || n.includes('orcamento') || n.includes('administracao')) return 'afo';
  if (n.includes('racial')) return 'igualdade racial';
  if (n.includes('matem')) return 'matematica financeira';
  if (n.includes('inform') || n.includes('tecnologia')) return 'informatica';
  return n;
}

function getCanonicalLessonNum(lessonStr?: string): number | null {
  if (!lessonStr) return null;
  const match = lessonStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

function getLessonKey(subject?: string, lesson?: string): string | null {
  if (!subject || !lesson) return null;
  const cSub = getCanonicalSubject(subject);
  const num = getCanonicalLessonNum(lesson);
  if (num === null) return `${cSub}|${normalizeSubject(lesson)}`;
  return `${cSub}|aula-${num}`;
}

export function StudyPlanModal({ open, onOpenChange }: StudyPlanModalProps) {
  const { data: studyData, updateLesson } = useStudy();

  // Active plan switcher: 'ufba' | 'sefaz'
  const [activePlanType, setActivePlanType] = useState<'ufba' | 'sefaz'>('ufba');

  // Both plans memoized
  const sefazDays = useMemo(() => buildSefazBAPlan(), []);
  const ufbaDays = useMemo(() => buildUfbaSprintPlan(), []);

  const allDays = activePlanType === 'ufba' ? ufbaDays : sefazDays;

  // Stored task IDs for both plans (Clean start, user has 100% control)
  const [sefazTaskIds, setSefazTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(SEFAZ_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [ufbaTaskIds, setUfbaTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(UFBA_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Cross-plan completed lesson keys: "canonical_subject|aula-X"
  const [crossPlanCompletedKeys, setCrossPlanCompletedKeys] = useState<Set<string>>(() => new Set());

  // Build the cross-plan map only from what the user explicitly marks
  useEffect(() => {
    const keys = new Set<string>();

    // 1. From SEFAZ tasks
    sefazDays.forEach(day => {
      day.tasks.forEach(task => {
        if (sefazTaskIds[task.id] && task.subject && task.lesson) {
          const k = getLessonKey(task.subject, task.lesson);
          if (k) keys.add(k);
        }
      });
    });

    // 2. From UFBA tasks
    ufbaDays.forEach(day => {
      day.tasks.forEach(task => {
        if (ufbaTaskIds[task.id] && task.subject && task.lesson) {
          const k = getLessonKey(task.subject, task.lesson);
          if (k) keys.add(k);
        }
      });
    });

    setCrossPlanCompletedKeys(keys);
  }, [sefazDays, ufbaDays, sefazTaskIds, ufbaTaskIds]);

  // Save SEFAZ tasks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SEFAZ_STORAGE_KEY, JSON.stringify(sefazTaskIds));
    } catch (e) {}
  }, [sefazTaskIds]);

  // Save UFBA tasks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(UFBA_STORAGE_KEY, JSON.stringify(ufbaTaskIds));
    } catch (e) {}
  }, [ufbaTaskIds]);

  // Check if a task is completed (looks at plan ID or cross-plan equivalent lesson)
  const isTaskCompleted = useCallback((task: PlanTask): boolean => {
    // 1. Direct task ID match
    if (activePlanType === 'ufba') {
      if (ufbaTaskIds[task.id]) return true;
    } else {
      if (sefazTaskIds[task.id]) return true;
    }

    // 2. Lesson match across plans
    const lessonKey = getLessonKey(task.subject, task.lesson);
    if (lessonKey && crossPlanCompletedKeys.has(lessonKey)) return true;

    return false;
  }, [activePlanType, ufbaTaskIds, sefazTaskIds, crossPlanCompletedKeys]);

  // Reset function to clear all marks and start completely fresh
  const handleResetAllTasks = () => {
    if (window.confirm('Deseja realmente zerar todas as marcações do plano de estudos para começar suas marcações do zero?')) {
      setSefazTaskIds({});
      setUfbaTaskIds({});
      setCrossPlanCompletedKeys(new Set());
      try {
        localStorage.removeItem(SEFAZ_STORAGE_KEY);
        localStorage.removeItem(UFBA_STORAGE_KEY);
        localStorage.removeItem('sefaz_ba_daily_plan_completed_tasks_v1');
        localStorage.removeItem('ufba_cgu_sprint_plan_completed_tasks_v1');
        Object.keys(localStorage).forEach(k => {
          if (k.startsWith('lesson_flag_')) {
            localStorage.removeItem(k);
          }
        });
      } catch (e) {}
      toast.success('Todas as marcações foram zeradas! Você pode marcar seu progresso do zero.');
    }
  };

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'phase1' | 'phase2' | 'phase3' | 'phase4'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'completed'>('all');

  // Active Simulado / Bateria Modal State
  const [simuladoModalInfo, setSimuladoModalInfo] = useState<{
    subjectId: string;
    subjectName: string;
    lessonNumber: string;
    taskTitle: string;
    taskId: string;
  } | null>(null);

  // Helper to detect exercise / questions info for any task
  const getTaskExerciseInfo = useCallback((task: PlanTask) => {
    const fullText = `${task.title || ''} ${task.description || ''}`.toLowerCase();
    
    const isExplicitBattery = (
      fullText.includes('bateria') ||
      fullText.includes('questões') ||
      fullText.includes('questoes') ||
      fullText.includes('exercícios') ||
      fullText.includes('exercicios') ||
      fullText.includes('simulado') ||
      fullText.includes('revisão ativa')
    );

    let subjectName = task.subject || '';
    let lessonNum = '0';

    if (!subjectName) {
      if (fullText.includes('contabilid') && !fullText.includes('casp')) subjectName = 'Contabilidade Geral';
      else if (fullText.includes('casp') || fullText.includes('setor público')) subjectName = 'Contabilidade Aplicada ao Setor Público (CASP)';
      else if (fullText.includes('afo') || fullText.includes('finanças') || fullText.includes('orçamento')) subjectName = 'Administração, Economia e Finanças Públicas';
      else if (fullText.includes('auditoria') || fullText.includes('cgu') || fullText.includes('controle')) subjectName = 'Auditoria';
      else if (fullText.includes('tribut')) subjectName = 'Direito Tributário';
      else if (fullText.includes('constituc')) subjectName = 'Direito Constitucional';
      else if (fullText.includes('administrat') || fullText.includes('anticorrupção') || fullText.includes('informação')) subjectName = 'Direito Administrativo';
      else if (fullText.includes('portug')) subjectName = 'Língua Portuguesa';
      else if (fullText.includes('estat')) subjectName = 'Estatística';
      else if (fullText.includes('matem')) subjectName = 'Matemática Financeira';
      else if (fullText.includes('econom')) subjectName = 'Economia';
      else if (fullText.includes('informát')) subjectName = 'Informática Básica';
      else if (fullText.includes('racial') || fullText.includes('igualdade')) subjectName = 'Noções de Igualdade Racial';
      else if (task.isVaccine) subjectName = 'Auditoria';
      else subjectName = 'Contabilidade Geral';
    }

    if (task.lesson) {
      const m = task.lesson.match(/\d+/);
      if (m) lessonNum = m[0];
    } else {
      const m = fullText.match(/aula\s*(\d+)/i);
      if (m) lessonNum = m[1];
    }

    const cSub = getCanonicalSubject(subjectName);
    const subObj = studyData?.subjects?.find(s => getCanonicalSubject(s.name) === cSub);
    const subjectId = subObj ? subObj.id : '';

    return {
      hasExercises: Boolean(subjectName || isExplicitBattery),
      isExplicitBattery,
      subjectId,
      subjectName: subObj ? subObj.name : subjectName,
      lessonNumber: lessonNum,
    };
  }, [studyData?.subjects]);

  // Statistics
  const totalTasksCount = useMemo(() => {
    return allDays.reduce((acc, d) => acc + d.tasks.length, 0);
  }, [allDays]);

  const completedTasksCount = useMemo(() => {
    return allDays.reduce((acc, d) => {
      return acc + d.tasks.filter(t => isTaskCompleted(t)).length;
    }, 0);
  }, [allDays, isTaskCompleted]);

  const overallPercent = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  // Toggle single task with two-way cross-sync
  const toggleTask = (task: PlanTask) => {
    const wasCompleted = isTaskCompleted(task);
    const newState = !wasCompleted;

    // 1. Update the active plan's task IDs
    if (activePlanType === 'ufba') {
      setUfbaTaskIds(prev => ({ ...prev, [task.id]: newState }));
    } else {
      setSefazTaskIds(prev => ({ ...prev, [task.id]: newState }));
    }

    // 2. Cross-sync using canonical lesson key
    const lessonKey = getLessonKey(task.subject, task.lesson);
    if (lessonKey) {
      setCrossPlanCompletedKeys(prev => {
        const next = new Set(prev);
        if (newState) next.add(lessonKey);
        else next.delete(lessonKey);
        return next;
      });

      // Cross-sync matching task IDs in the OTHER plan
      if (activePlanType === 'ufba') {
        const matchingSefazTasks = sefazDays.flatMap(d => d.tasks).filter(
          t => getLessonKey(t.subject, t.lesson) === lessonKey
        );
        if (matchingSefazTasks.length > 0) {
          setSefazTaskIds(prev => {
            const next = { ...prev };
            matchingSefazTasks.forEach(st => { next[st.id] = newState; });
            return next;
          });
        }
      } else {
        const matchingUfbaTasks = ufbaDays.flatMap(d => d.tasks).filter(
          t => getLessonKey(t.subject, t.lesson) === lessonKey
        );
        if (matchingUfbaTasks.length > 0) {
          setUfbaTaskIds(prev => {
            const next = { ...prev };
            matchingUfbaTasks.forEach(ut => { next[ut.id] = newState; });
            return next;
          });
        }
      }

      // Sync to Supabase & localStorage lesson flags for the main study table
      if (task.subject && task.lesson) {
        try {
          const cSub = getCanonicalSubject(task.subject);
          const sub = studyData?.subjects?.find(
            s => getCanonicalSubject(s.name) === cSub
          );
          const num = getCanonicalLessonNum(task.lesson);

          if (sub && num !== null) {
            const dbNumber = num + 1; // Aula 00 -> 1, Aula 01 -> 2
            const sName = sub.name.trim().toLowerCase();
            localStorage.setItem(`lesson_flag_default-user_${sName}_${dbNumber}_theory`, String(newState));
            updateLesson(sub.id, { theoryCompleted: newState }, sub.id, dbNumber);
          }
        } catch (e) {}
      }
    }

    if (newState) {
      toast.success(`Concluído: ${task.title}`);
    }
  };

  // Toggle whole day
  const toggleDay = (day: DayPlan) => {
    const allCompleted = day.tasks.every(t => isTaskCompleted(t));
    const newState = !allCompleted;

    day.tasks.forEach(t => {
      if (isTaskCompleted(t) !== newState) {
        toggleTask(t);
      }
    });

    if (newState) {
      toast.success(`Todas as tarefas do Dia ${day.dayNumber} concluídas! 🚀`);
    }
  };

  // Filtered days list
  const filteredDays = useMemo(() => {
    return allDays.filter(day => {
      // Phase filter
      if (selectedPhase === 'phase1' && !day.phase.includes('Fase 1')) return false;
      if (selectedPhase === 'phase2' && !day.phase.includes('Fase 2')) return false;
      if (selectedPhase === 'phase3' && !day.phase.includes('Fase 3') && !day.phase.includes('CGU')) return false;
      if (selectedPhase === 'phase4' && !day.phase.includes('Fase 4') && !day.phase.includes('UFBA')) return false;

      // Status filter
      const dayTasksCompleted = day.tasks.filter(t => isTaskCompleted(t)).length;
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
  }, [allDays, selectedPhase, selectedStatus, searchQuery, isTaskCompleted]);

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

            <div className="flex items-center gap-2.5">
              <Button
                size="sm"
                variant="outline"
                onClick={handleResetAllTasks}
                className="h-8 text-xs font-semibold gap-1.5 text-muted-foreground hover:text-destructive hover:border-destructive/40 transition-colors"
                title="Zerar todas as marcações para começar as marcações do zero"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Zerar Marcações</span>
              </Button>

              <div className="text-[11px] text-muted-foreground font-medium hidden sm:flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Sincronização mútua ativada
              </div>
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
                const dayCompletedTasks = day.tasks.filter(t => isTaskCompleted(t)).length;
                const isDayFullyCompleted = dayCompletedTasks === day.tasks.length && day.tasks.length > 0;
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
                        const isTaskDone = isTaskCompleted(task);

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
                            <div onClick={(e) => e.stopPropagation()}>
                              <Checkbox
                                checked={isTaskDone}
                                onCheckedChange={() => toggleTask(task)}
                                className="mt-0.5"
                              />
                            </div>

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

                              {(() => {
                                const ex = getTaskExerciseInfo(task);
                                if (!ex.hasExercises) return null;
                                return (
                                  <div className="pt-2 flex items-center justify-between flex-wrap gap-2 border-t border-border/40 mt-1">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSimuladoModalInfo({
                                          subjectId: ex.subjectId,
                                          subjectName: ex.subjectName,
                                          lessonNumber: ex.lessonNumber,
                                          taskTitle: task.title,
                                          taskId: task.id,
                                        });
                                      }}
                                      className={cn(
                                        "h-7 text-xs font-semibold gap-1.5 transition-all shadow-sm",
                                        ex.isExplicitBattery
                                          ? "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border-amber-500/50 hover:border-amber-400 font-bold"
                                          : "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border-emerald-500/30 hover:border-emerald-400"
                                      )}
                                    >
                                      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                                      <span>
                                        {ex.isExplicitBattery
                                          ? `⚡ Resolver Bateria: ${ex.subjectName}`
                                          : `🎯 Fazer Questões: ${ex.subjectName} (${task.lesson || 'Aula ' + ex.lessonNumber})`}
                                      </span>
                                    </Button>

                                    <span className="text-[11px] text-muted-foreground/70 hidden sm:inline">
                                      50 Questões comentadas (FGV / Cebraspe / FCC)
                                    </span>
                                  </div>
                                );
                              })()}
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

        {/* Simulado Modal directly inside StudyPlan */}
        <Dialog open={!!simuladoModalInfo} onOpenChange={(open) => !open && setSimuladoModalInfo(null)}>
          <DialogContent className="w-[96vw] sm:w-full max-w-4xl max-h-[92vh] overflow-y-auto p-3 sm:p-6 rounded-xl bg-background border-border">
            <DialogHeader className="pb-3 border-b border-border/80">
              <DialogTitle className="text-lg sm:text-xl font-bold flex items-center gap-2 text-foreground">
                <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Bateria de Questões Comentadas: {simuladoModalInfo?.taskTitle}</span>
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Questões reais dos PDFs e das bancas do seu concurso (FGV, Cebraspe, FCC). Ao salvar, sua sessão é salva no sistema e a tarefa é marcada como concluída!
              </DialogDescription>
            </DialogHeader>

            {simuladoModalInfo && (
              <Aula00QuestionsSimulado
                initialSubjectId={simuladoModalInfo.subjectId}
                initialLessonNumber={simuladoModalInfo.lessonNumber}
                onSaveSession={() => {
                  const targetTask = allDays.flatMap(d => d.tasks).find(t => t.id === simuladoModalInfo.taskId);
                  if (targetTask && !isTaskCompleted(targetTask)) {
                    toggleTask(targetTask);
                  }
                  setSimuladoModalInfo(null);
                  toast.success('Tarefa marcada como concluída e sessão salva com sucesso! 🚀');
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}
