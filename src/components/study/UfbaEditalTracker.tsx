import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  CheckCircle2,
  Clock,
  Search,
  Sparkles,
  Calendar,
  Target,
  BookOpen,
  AlertTriangle,
  Filter,
  CalendarCheck,
  RotateCcw,
  Award,
  TrendingUp,
  CheckSquare,
} from 'lucide-react';
import { buildUfbaSprintPlan, PlanTask } from '@/data/ufbaPlanningData';
import { buildSefazBAPlan } from '@/data/sefazBAPlanningData';
import { getLessonName } from '@/data/sefazBA';
import { UFBA_SPECIALIST_TOPICS, UfbaSpecialistTopic } from '@/data/ufbaSpecialistTopics';
import { UfbaTheoryReaderModal } from '@/components/study/UfbaTheoryReaderModal';
import { useStudy } from '@/contexts/StudyContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const SEFAZ_STORAGE_KEY = 'sefaz_ba_daily_plan_completed_tasks_v2';
const UFBA_STORAGE_KEY = 'ufba_cgu_sprint_plan_completed_tasks_v2';
const QUESTIONS_DONE_STORAGE_KEY = 'study_completed_questions_keys_v2';
const UFBA_CUSTOM_DATES_KEY = 'ufba_edital_custom_dates_v1';

function normalizeSubject(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getCanonicalSubject(name: string): string {
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

export function getLessonKey(subject?: string, lesson?: string): string | null {
  if (!subject || !lesson) return null;
  const cSub = getCanonicalSubject(subject);
  const num = getCanonicalLessonNum(lesson);
  if (num === null) return `${cSub}|${normalizeSubject(lesson)}`;
  return `${cSub}|aula-${num}`;
}

export interface UfbaEditalItem {
  id: string;
  lessonKey: string;
  editalBlock: 'especificos' | 'comuns';
  editalCategory: string;
  editalItemCode: string;
  editalTopicTitle: string;
  habitusSubject: string;
  habitusLesson: string; // e.g., "Aula 05"
  aulaNumberZeroBased: number; // e.g., 5 for Aula 05
  scheduledStudyDate: string; // dd/MM/yyyy
  scheduledDayNumber: number;
  scheduledReviewDates: string[];
  taskIdsInUfbaPlan: string[];
  taskIdsInSefazPlan: string[];
  weightLabel: string;
  specialistTopicId?: string;
}

interface UfbaEditalTrackerProps {
  onOpenSimulado: (subjectId: string, dbLessonNumber: number) => void;
  onOpenStudyPlan: () => void;
}

function mapSubjectToEditalMeta(subject: string, aulaNum: number, desc: string): {
  editalBlock: 'especificos' | 'comuns';
  editalCategory: string;
  editalItemCode: string;
  weightLabel: string;
} {
  const cSub = getCanonicalSubject(subject);
  if (cSub === 'contabilidade geral') {
    if (aulaNum === 6 || aulaNum === 7) {
      return {
        editalBlock: 'especificos',
        editalCategory: '1. Contabilidade Geral & 3. Custos',
        editalItemCode: 'Esp. Item 1 / 3',
        weightLabel: 'Peso 2.0',
      };
    }
    return {
      editalBlock: 'especificos',
      editalCategory: '1. Contabilidade Geral (Societária / CPCs)',
      editalItemCode: 'Esp. Item 1',
      weightLabel: 'Peso 2.0',
    };
  }
  if (cSub === 'casp') {
    if (aulaNum === 10 || aulaNum === 12 || aulaNum === 13) {
      return {
        editalBlock: 'especificos',
        editalCategory: '5. Legislação Aplicada à Contab. Pública',
        editalItemCode: 'Esp. Item 5',
        weightLabel: 'Peso 2.0',
      };
    }
    if (aulaNum === 17) {
      return {
        editalBlock: 'especificos',
        editalCategory: '7. Contabilidade Pública Municipal / Fundos',
        editalItemCode: 'Esp. Item 7',
        weightLabel: 'Peso 2.0',
      };
    }
    return {
      editalBlock: 'especificos',
      editalCategory: '2. Contabilidade Pública (CASP / NBC TSP / DCASP)',
      editalItemCode: 'Esp. Item 2',
      weightLabel: 'Peso 2.0',
    };
  }
  if (cSub === 'afo') {
    return {
      editalBlock: 'especificos',
      editalCategory: '4. Administração Financeira e Orçamentária (AFO)',
      editalItemCode: 'Esp. Item 4',
      weightLabel: 'Peso 2.0',
    };
  }
  if (cSub === 'auditoria') {
    return {
      editalBlock: 'especificos',
      editalCategory: '6. Auditoria, Controle Interno e Perícia',
      editalItemCode: 'Esp. Item 6 / 9',
      weightLabel: 'Peso 2.0',
    };
  }
  if (cSub === 'direito tributario') {
    return {
      editalBlock: 'especificos',
      editalCategory: '8. Noções de Direito Financeiro e Tributário',
      editalItemCode: 'Esp. Item 8',
      weightLabel: 'Peso 2.0',
    };
  }
  if (cSub === 'matematica financeira' || cSub === 'estatistica') {
    return {
      editalBlock: 'especificos',
      editalCategory: '10. Matemática Financeira e Estatística',
      editalItemCode: 'Esp. Item 10',
      weightLabel: 'Peso 2.0',
    };
  }
  if (cSub === 'lingua portuguesa') {
    return {
      editalBlock: 'comuns',
      editalCategory: 'Língua Portuguesa (12 Questões)',
      editalItemCode: 'Comum • Port.',
      weightLabel: 'Peso 1.0',
    };
  }
  if (cSub === 'informatica') {
    return {
      editalBlock: 'comuns',
      editalCategory: 'Informática Básica (6 Questões)',
      editalItemCode: 'Comum • Info.',
      weightLabel: 'Peso 1.0',
    };
  }
  // Direito Administrativo / Constitucional -> Administração Pública (Comuns + Legislação Específica)
  if (aulaNum === 9 || aulaNum === 10 || aulaNum === 11) {
    return {
      editalBlock: 'comuns',
      editalCategory: 'Administração Pública & Lei 14.133/2021',
      editalItemCode: 'Comum & Esp. 5',
      weightLabel: 'Peso 1.0 / 2.0',
    };
  }
  return {
    editalBlock: 'comuns',
    editalCategory: 'Administração Pública e Legislação UFBA (12 Questões)',
    editalItemCode: 'Comum • Adm.',
    weightLabel: 'Peso 1.0',
  };
}

export function UfbaEditalTracker({ onOpenSimulado, onOpenStudyPlan }: UfbaEditalTrackerProps) {
  const { data: studyData, updateLesson } = useStudy();
  const [, setSyncTick] = useState(0);

  const ufbaDays = useMemo(() => buildUfbaSprintPlan(), []);
  const sefazDays = useMemo(() => buildSefazBAPlan(), []);

  // Read completed task states from localStorage (same keys used by StudyPlanModal)
  const [ufbaTaskIds, setUfbaTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(UFBA_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [sefazTaskIds, setSefazTaskIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(SEFAZ_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [questionsDoneKeys, setQuestionsDoneKeys] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(QUESTIONS_DONE_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Custom user-overridden target dates per lessonKey ("yyyy-MM-dd")
  const [customDates, setCustomDates] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(UFBA_CUSTOM_DATES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [editingDateKey, setEditingDateKey] = useState<string | null>(null);
  const [selectedReaderTopic, setSelectedReaderTopic] = useState<UfbaSpecialistTopic | null>(null);

  // Sync with storage events & custom window event so modal updates reflect immediately
  const reloadFromStorage = useCallback(() => {
    try {
      const u = localStorage.getItem(UFBA_STORAGE_KEY);
      if (u !== null) setUfbaTaskIds(JSON.parse(u));
      const s = localStorage.getItem(SEFAZ_STORAGE_KEY);
      if (s !== null) setSefazTaskIds(JSON.parse(s));
      const q = localStorage.getItem(QUESTIONS_DONE_STORAGE_KEY);
      if (q !== null) setQuestionsDoneKeys(JSON.parse(q));
      const c = localStorage.getItem(UFBA_CUSTOM_DATES_KEY);
      if (c !== null) setCustomDates(JSON.parse(c));
      setSyncTick(t => t + 1);
    } catch (e) {}
  }, []);

  useEffect(() => {
    window.addEventListener('storage', reloadFromStorage);
    window.addEventListener('ufba-plan-sync', reloadFromStorage);
    const interval = setInterval(reloadFromStorage, 2500);
    return () => {
      window.removeEventListener('storage', reloadFromStorage);
      window.removeEventListener('ufba-plan-sync', reloadFromStorage);
      clearInterval(interval);
    };
  }, [reloadFromStorage]);

  // Build the unified list of all UFBA Edital topics + scheduled dates from the 60-day plan
  const editalItems = useMemo<UfbaEditalItem[]>(() => {
    const map = new Map<string, UfbaEditalItem>();

    // Map SEFAZ task IDs by lessonKey for cross-sync
    const sefazTasksByLessonKey = new Map<string, string[]>();
    sefazDays.forEach(d => {
      d.tasks.forEach(t => {
        const k = getLessonKey(t.subject, t.lesson);
        if (k) {
          const list = sefazTasksByLessonKey.get(k) || [];
          list.push(t.id);
          sefazTasksByLessonKey.set(k, list);
        }
      });
    });

    ufbaDays.forEach(day => {
      day.tasks.forEach(task => {
        if (!task.subject || !task.lesson) return;
        // Skip exam milestone placeholders on Day 53 and Day 60 if already covered
        if (task.id === 'ufba-day-53-cgu' || task.id === 'ufba-day-60-ufba') return;

        const lKey = getLessonKey(task.subject, task.lesson);
        if (!lKey) return;

        const aulaNum = getCanonicalLessonNum(task.lesson) ?? 0;
        const cleanDesc = task.description.replace(/\s*\(PDF da pasta Sefaz BA\)\s*/i, '').trim();

        const existing = map.get(lKey);
        if (!existing) {
          const meta = mapSubjectToEditalMeta(task.subject, aulaNum, cleanDesc);
          const officialLessonTitle = getLessonName(task.subject, aulaNum);
          map.set(lKey, {
            id: lKey,
            lessonKey: lKey,
            editalBlock: meta.editalBlock,
            editalCategory: meta.editalCategory,
            editalItemCode: meta.editalItemCode,
            editalTopicTitle: cleanDesc || officialLessonTitle,
            habitusSubject: task.subject,
            habitusLesson: `Aula ${String(aulaNum).padStart(2, '0')}`,
            aulaNumberZeroBased: aulaNum,
            scheduledStudyDate: day.dateStr,
            scheduledDayNumber: day.dayNumber,
            scheduledReviewDates: [],
            taskIdsInUfbaPlan: [task.id],
            taskIdsInSefazPlan: sefazTasksByLessonKey.get(lKey) || [],
            weightLabel: meta.weightLabel,
                      });
        } else {
          existing.taskIdsInUfbaPlan.push(task.id);
          if (!existing.scheduledReviewDates.includes(day.dateStr) && day.dateStr !== existing.scheduledStudyDate) {
            existing.scheduledReviewDates.push(day.dateStr);
          }
        }
      });
    });

    // Ensure any remaining high-yield Edital UFBA items (e.g., Português Aula 15, Contab. Geral Aulas 28-30) are included
    const extraItems: { subject: string; aulaNum: number; dateStr: string; dayNumber: number; desc: string; specialistTopicId?: string }[] = [
      { subject: 'Auditoria', aulaNum: 16, dateStr: '14/11/2026', dayNumber: 24, desc: 'Perícia Contábil Judicial e Extrajudicial (NBC TP 01 e NBC PP 01)', specialistTopicId: 'pericia-contabil' },
      { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', aulaNum: 18, dateStr: '18/11/2026', dayNumber: 28, desc: 'Contabilidade Municipal, Fundos e Sistemas Federais (Siconfi, Siope e Siops)', specialistTopicId: 'casp-municipal-siconfi' },
      { subject: 'Direito Administrativo', aulaNum: 24, dateStr: '25/11/2026', dayNumber: 35, desc: 'Estatuto e Regimento Geral da UFBA e Governança das IFES (CONSUNI, CONSEPE, Curadores)', specialistTopicId: 'legislacao-ufba-ifes' },
      { subject: 'Direito Administrativo', aulaNum: 23, dateStr: '28/11/2026', dayNumber: 38, desc: 'Governo Digital (Lei 14.129/21), Riscos/LINDB (Decreto 9.830/19) e Sustentabilidade (A3P)', specialistTopicId: 'governo-digital-governanca' },
      { subject: 'Língua Portuguesa', aulaNum: 15, dateStr: '11/12/2026', dayNumber: 51, desc: 'Figuras de Linguagem, Funções do "Que" e do "Se" e Bateria Comentada' },
      { subject: 'Contabilidade Geral', aulaNum: 28, dateStr: '11/12/2026', dayNumber: 51, desc: 'Arrendamento Mercantil (CPC 06), Subvenção (CPC 07) e Custos de Empréstimos' },
      { subject: 'Contabilidade Geral', aulaNum: 29, dateStr: '12/12/2026', dayNumber: 52, desc: 'Instrumentos Financeiros (CPC 48), Receita de Contrato (CPC 47) e Ajustes de Exercícios' },
    ];

    extraItems.forEach(ex => {
      const lessonStr = `Aula ${String(ex.aulaNum).padStart(2, '0')}`;
      const lKey = getLessonKey(ex.subject, lessonStr);
      if (lKey && !map.has(lKey)) {
        const meta = mapSubjectToEditalMeta(ex.subject, ex.aulaNum, ex.desc);
        map.set(lKey, {
          id: lKey,
          lessonKey: lKey,
          editalBlock: meta.editalBlock,
          editalCategory: meta.editalCategory,
          editalItemCode: meta.editalItemCode,
          editalTopicTitle: ex.desc,
          habitusSubject: ex.subject,
          habitusLesson: lessonStr,
          aulaNumberZeroBased: ex.aulaNum,
          scheduledStudyDate: ex.dateStr,
          scheduledDayNumber: ex.dayNumber,
          scheduledReviewDates: [],
          taskIdsInUfbaPlan: [],
          taskIdsInSefazPlan: sefazTasksByLessonKey.get(lKey) || [],
          weightLabel: meta.weightLabel,
          specialistTopicId: ex.specialistTopicId,
        });
      }
    });

    return Array.from(map.values()).sort((a, b) => a.scheduledDayNumber - b.scheduledDayNumber);
  }, [ufbaDays, sefazDays]);

  // Compute dynamic status for each item (Study status, Questions count, Accuracy %, Date)
  const enrichedItems = useMemo(() => {
    return editalItems.map(item => {
      const cSub = getCanonicalSubject(item.habitusSubject);
      const subjectObj = studyData.subjects.find(s => getCanonicalSubject(s.name) === cSub);
      const dbLessonNumber = item.aulaNumberZeroBased + 1; // Aula 00 -> 1 in studyData

      // Find lesson in studyData
      const lessonObj = subjectObj
        ? studyData.lessons.find(l => l.subjectId === subjectObj.id && l.number === dbLessonNumber)
        : undefined;

      // Check localStorage flag for theory/review as well
      const sNameLower = subjectObj ? subjectObj.name.trim().toLowerCase() : item.habitusSubject.trim().toLowerCase();
      const lsTheory = localStorage.getItem(`lesson_flag_default-user_${sNameLower}_${dbLessonNumber}_theory`) === 'true';
      const lsReview = localStorage.getItem(`lesson_flag_default-user_${sNameLower}_${dbLessonNumber}_review`) === 'true';

      // Check UFBA & SEFAZ plan task completion
      const planCompleted =
        item.taskIdsInUfbaPlan.some(id => Boolean(ufbaTaskIds[id])) ||
        item.taskIdsInSefazPlan.some(id => Boolean(sefazTaskIds[id]));

      const isStudied = Boolean(lessonObj?.theoryCompleted || lsTheory || planCompleted);
      const isReviewed = Boolean(lessonObj?.reviewCompleted || lsReview);

      // Calculate questions & accuracy from studyData.questionSessions and lessonObj
      const matchingSessions = subjectObj
        ? studyData.questionSessions.filter(
            qs => qs.subjectId === subjectObj.id && Number(qs.lessonNumber) === dbLessonNumber
          )
        : [];

      const sessionsQuestions = matchingSessions.reduce((acc, s) => acc + (Number(s.questionsCount) || 0), 0);
      const sessionsCorrect = matchingSessions.reduce((acc, s) => acc + (Number(s.correctAnswers) || 0), 0);

      const totalQuestions = Math.max(sessionsQuestions, lessonObj?.questionsCount || 0);
      const totalCorrect = sessionsQuestions >= (lessonObj?.questionsCount || 0)
        ? sessionsCorrect
        : (lessonObj?.correctAnswers || 0);

      const hasDoneQuestions = totalQuestions > 0 || Boolean(questionsDoneKeys[item.lessonKey]);
      const accuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : null;

      // Latest question session date
      const lastQuestionDate = matchingSessions.length > 0
        ? matchingSessions
            .map(s => s.date)
            .sort()
            .reverse()[0]
        : null;

      // Custom or scheduled date
      const customDateIso = customDates[item.lessonKey]; // yyyy-MM-dd
      let displayStudyDate = item.scheduledStudyDate; // dd/MM/yyyy
      if (customDateIso && /^\d{4}-\d{2}-\d{2}$/.test(customDateIso)) {
        const [yyyy, mm, dd] = customDateIso.split('-');
        displayStudyDate = `${dd}/${mm}/${yyyy}`;
      }

      // Parse displayStudyDate to compare with today
      const [ddStr, mmStr, yyyyStr] = displayStudyDate.split('/');
      const targetDateObj = new Date(Number(yyyyStr), Number(mmStr) - 1, Number(ddStr), 12, 0, 0);
      const todayObj = new Date();
      todayObj.setHours(12, 0, 0, 0);
      const diffDays = Math.round((targetDateObj.getTime() - todayObj.getTime()) / (1000 * 60 * 60 * 24));

      let scheduleStatus: 'done' | 'today' | 'overdue' | 'upcoming' = 'upcoming';
      if (isStudied && hasDoneQuestions) {
        scheduleStatus = 'done';
      } else if (diffDays === 0) {
        scheduleStatus = 'today';
      } else if (diffDays < 0 && !isStudied) {
        scheduleStatus = 'overdue';
      }

      return {
        ...item,
        subjectObj,
        dbLessonNumber,
        lessonObj,
        isStudied,
        isReviewed,
        totalQuestions,
        totalCorrect,
        hasDoneQuestions,
        accuracy,
        lastQuestionDate,
        displayStudyDate,
        customDateIso: customDateIso || `${yyyyStr}-${mmStr}-${ddStr}`,
        diffDays,
        scheduleStatus,
      };
    });
  }, [editalItems, studyData.subjects, studyData.lessons, studyData.questionSessions, ufbaTaskIds, sefazTaskIds, questionsDoneKeys, customDates]);

  // Toggle Study Status (two-way sync with UFBA Plan, SEFAZ Plan, and Lesson Theory)
  const handleToggleStudied = (item: typeof enrichedItems[0]) => {
    const newState = !item.isStudied;

    // 1. Update UFBA Plan Task IDs
    if (item.taskIdsInUfbaPlan.length > 0) {
      setUfbaTaskIds(prev => {
        const next = { ...prev };
        item.taskIdsInUfbaPlan.forEach(id => {
          next[id] = newState;
        });
        try {
          localStorage.setItem(UFBA_STORAGE_KEY, JSON.stringify(next));
        } catch (e) {}
        return next;
      });
    }

    // 2. Update SEFAZ Plan Task IDs
    if (item.taskIdsInSefazPlan.length > 0) {
      setSefazTaskIds(prev => {
        const next = { ...prev };
        item.taskIdsInSefazPlan.forEach(id => {
          next[id] = newState;
        });
        try {
          localStorage.setItem(SEFAZ_STORAGE_KEY, JSON.stringify(next));
        } catch (e) {}
        return next;
      });
    }

    // 3. Update studyData lesson theory flag
    if (item.subjectObj) {
      const sNameLower = item.subjectObj.name.trim().toLowerCase();
      try {
        localStorage.setItem(`lesson_flag_default-user_${sNameLower}_${item.dbLessonNumber}_theory`, String(newState));
      } catch (e) {}
      const lessonId = item.lessonObj?.id || `${item.subjectObj.id}-lesson-${item.dbLessonNumber}`;
      updateLesson(lessonId, { theoryCompleted: newState }, item.subjectObj.id, item.dbLessonNumber);
    }

    window.dispatchEvent(new Event('ufba-plan-sync'));
    setSyncTick(t => t + 1);

    if (newState) {
      toast.success(`Assunto marcado como estudado: ${item.habitusSubject} (${item.habitusLesson})`);
    } else {
      toast.info(`Marcação de estudo removida: ${item.habitusSubject} (${item.habitusLesson})`);
    }
  };

  // Toggle Review Status
  const handleToggleReview = (item: typeof enrichedItems[0]) => {
    const newState = !item.isReviewed;
    if (item.subjectObj) {
      const sNameLower = item.subjectObj.name.trim().toLowerCase();
      try {
        localStorage.setItem(`lesson_flag_default-user_${sNameLower}_${item.dbLessonNumber}_review`, String(newState));
      } catch (e) {}
      const lessonId = item.lessonObj?.id || `${item.subjectObj.id}-lesson-${item.dbLessonNumber}`;
      updateLesson(lessonId, { reviewCompleted: newState }, item.subjectObj.id, item.dbLessonNumber);
    }
    window.dispatchEvent(new Event('ufba-plan-sync'));
    setSyncTick(t => t + 1);
  };

  // Update custom target date for a topic
  const handleDateChange = (lessonKey: string, newIsoDate: string) => {
    setCustomDates(prev => {
      const next = { ...prev, [lessonKey]: newIsoDate };
      try {
        localStorage.setItem(UFBA_CUSTOM_DATES_KEY, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
    setEditingDateKey(null);
    toast.success('Data de estudo e questões atualizada!');
  };

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [blockFilter, setBlockFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'studied' | 'pending_study' | 'questions_done' | 'no_questions' | 'low_accuracy'
  >('all');
  const [sortBy, setSortBy] = useState<'date' | 'subject' | 'accuracy'>('date');

  const filteredItems = useMemo(() => {
    const list = enrichedItems.filter(item => {
      // Block / Subject filter
      if (blockFilter === 'especificos' && item.editalBlock !== 'especificos') return false;
      if (blockFilter === 'comuns' && item.editalBlock !== 'comuns') return false;
      if (
        blockFilter !== 'all' &&
        blockFilter !== 'especificos' &&
        blockFilter !== 'comuns' &&
        getCanonicalSubject(item.habitusSubject) !== blockFilter
      ) {
        return false;
      }

      // Status filter
      if (statusFilter === 'studied' && !item.isStudied) return false;
      if (statusFilter === 'pending_study' && item.isStudied) return false;
      if (statusFilter === 'questions_done' && !item.hasDoneQuestions) return false;
      if (statusFilter === 'no_questions' && item.hasDoneQuestions) return false;
      if (statusFilter === 'low_accuracy' && (item.accuracy === null || item.accuracy >= 70)) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTopic = item.editalTopicTitle.toLowerCase().includes(q);
        const matchSub = item.habitusSubject.toLowerCase().includes(q);
        const matchCat = item.editalCategory.toLowerCase().includes(q);
        const matchLesson = item.habitusLesson.toLowerCase().includes(q);
        const matchDate = item.displayStudyDate.includes(q);
        if (!matchTopic && !matchSub && !matchCat && !matchLesson && !matchDate) return false;
      }

      return true;
    });

    if (sortBy === 'subject') {
      return [...list].sort((a, b) => {
        if (a.editalBlock !== b.editalBlock) return a.editalBlock === 'especificos' ? -1 : 1;
        if (a.habitusSubject !== b.habitusSubject) return a.habitusSubject.localeCompare(b.habitusSubject);
        return a.aulaNumberZeroBased - b.aulaNumberZeroBased;
      });
    }

    if (sortBy === 'accuracy') {
      return [...list].sort((a, b) => {
        const accA = a.accuracy ?? -1;
        const accB = b.accuracy ?? -1;
        return accB - accA;
      });
    }

    return list;
  }, [enrichedItems, blockFilter, statusFilter, searchQuery, sortBy]);

  // Overall Edital UFBA KPIs
  const stats = useMemo(() => {
    const total = enrichedItems.length;
    const studied = enrichedItems.filter(i => i.isStudied).length;
    const reviewed = enrichedItems.filter(i => i.isReviewed).length;
    const withQuestions = enrichedItems.filter(i => i.hasDoneQuestions).length;
    const totalQuestionsCount = enrichedItems.reduce((acc, i) => acc + i.totalQuestions, 0);
    const totalCorrectCount = enrichedItems.reduce((acc, i) => acc + i.totalCorrect, 0);
    const overallAccuracy = totalQuestionsCount > 0 ? (totalCorrectCount / totalQuestionsCount) * 100 : 0;

    const espItems = enrichedItems.filter(i => i.editalBlock === 'especificos');
    const espStudied = espItems.filter(i => i.isStudied).length;
    const espQ = espItems.reduce((acc, i) => acc + i.totalQuestions, 0);
    const espC = espItems.reduce((acc, i) => acc + i.totalCorrect, 0);
    const espAcc = espQ > 0 ? (espC / espQ) * 100 : 0;

    const nextPending = enrichedItems.find(i => !i.isStudied || !i.hasDoneQuestions);

    return {
      total,
      studied,
      studiedPercent: total > 0 ? Math.round((studied / total) * 100) : 0,
      reviewed,
      withQuestions,
      withQuestionsPercent: total > 0 ? Math.round((withQuestions / total) * 100) : 0,
      totalQuestionsCount,
      totalCorrectCount,
      overallAccuracy,
      espTotal: espItems.length,
      espStudied,
      espAcc,
      nextPending,
    };
  }, [enrichedItems]);

  return (
    <Card className="border-emerald-500/30 bg-gradient-to-b from-emerald-950/15 via-card to-card shadow-lg overflow-hidden">
      <CardHeader className="pb-4 border-b border-border/60">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-0.5">
                EDITAL UFBA Nº 007/2026
              </Badge>
              <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10 font-semibold">
                Cargo 405: Contador • Instituto Avalia
              </Badge>
              <Badge variant="outline" className="border-cyan-500/40 text-cyan-400 bg-cyan-500/10">
                Prova: 20/12/2026
              </Badge>
            </div>
            <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2 pt-1">
              <CalendarCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              Controle Verticalizado do Edital UFBA — Assuntos Estudados, Questões, % de Acerto e Datas
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Sincronizado em tempo real com o seu <strong>Plano de Estudo UFBA (60 Dias)</strong> e com o banco de <strong>Simulados de Questões</strong>. Marque o estudo, resolva a bateria da aula ou ajuste a data programada.
            </CardDescription>
          </div>

          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <Button
              size="sm"
              onClick={onOpenStudyPlan}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold gap-1.5 shadow-sm"
            >
              <CalendarCheck className="h-4 w-4" />
              Abrir Plano Diário UFBA
            </Button>
          </div>
        </div>

        {/* Summary KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
          <div className="p-3.5 rounded-xl bg-card/90 border border-emerald-500/25 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                Assuntos Já Estudados
              </span>
              <span className="font-bold text-emerald-400">{stats.studiedPercent}%</span>
            </div>
            <div className="text-xl font-bold">
              {stats.studied} <span className="text-sm font-normal text-muted-foreground">/ {stats.total} tópicos</span>
            </div>
            <Progress value={stats.studiedPercent} className="h-2" />
            <p className="text-[11px] text-muted-foreground">
              Específicos (Peso 2): <strong>{stats.espStudied}/{stats.espTotal}</strong> • Revisados: <strong>{stats.reviewed}</strong>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-card/90 border border-cyan-500/25 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium flex items-center gap-1.5">
                <CheckSquare className="h-3.5 w-3.5 text-cyan-400" />
                Tópicos com Questões Feitas
              </span>
              <span className="font-bold text-cyan-400">{stats.withQuestionsPercent}%</span>
            </div>
            <div className="text-xl font-bold">
              {stats.withQuestions} <span className="text-sm font-normal text-muted-foreground">/ {stats.total} tópicos</span>
            </div>
            <Progress value={stats.withQuestionsPercent} className="h-2" />
            <p className="text-[11px] text-muted-foreground">
              Total resolvido no Edital UFBA: <strong>{stats.totalQuestionsCount} questões</strong>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-card/90 border border-amber-500/25 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-amber-400" />
                Percentual de Acerto (UFBA)
              </span>
              <Badge
                variant="outline"
                className={cn(
                  "text-[10px] py-0 px-1.5",
                  stats.overallAccuracy >= 80
                    ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                    : stats.overallAccuracy >= 70
                    ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
                    : "border-amber-500/40 text-amber-400 bg-amber-500/10"
                )}
              >
                Meta ≥ 80%
              </Badge>
            </div>
            <div className={cn(
              "text-xl font-bold",
              stats.totalQuestionsCount === 0
                ? "text-muted-foreground"
                : stats.overallAccuracy >= 75
                ? "text-emerald-400"
                : stats.overallAccuracy >= 60
                ? "text-amber-400"
                : "text-rose-400"
            )}>
              {stats.totalQuestionsCount > 0 ? `${stats.overallAccuracy.toFixed(1)}%` : '—'}
              {stats.totalQuestionsCount > 0 && (
                <span className="text-xs font-normal text-muted-foreground ml-1.5">
                  ({stats.totalCorrectCount}/{stats.totalQuestionsCount} acertos)
                </span>
              )}
            </div>
            <Progress value={stats.overallAccuracy} className="h-2" />
            <p className="text-[11px] text-muted-foreground">
              Acerto em Específicas (Peso 2): <strong>{stats.espAcc > 0 ? `${stats.espAcc.toFixed(1)}%` : '—'}</strong>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-card/90 border border-purple-500/25 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-purple-400" />
                Próximo Estudo & Questões
              </span>
              {stats.nextPending && (
                <Badge variant="outline" className="text-[10px] py-0 px-1.5 border-purple-500/40 text-purple-300">
                  Dia {stats.nextPending.scheduledDayNumber}
                </Badge>
              )}
            </div>
            {stats.nextPending ? (
              <>
                <div className="text-sm font-bold text-foreground truncate" title={stats.nextPending.editalTopicTitle}>
                  {stats.nextPending.habitusSubject} • {stats.nextPending.habitusLesson}
                </div>
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Data: {stats.nextPending.displayStudyDate}
                </div>
                <p className="text-[11px] text-muted-foreground truncate" title={stats.nextPending.editalTopicTitle}>
                  {stats.nextPending.editalTopicTitle}
                </p>
              </>
            ) : (
              <div className="text-sm font-bold text-emerald-400 py-2">
                🏆 Todos os tópicos do Edital UFBA concluídos!
              </div>
            )}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-2.5 pt-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar assunto do edital, lei (ex: 14.133, LRF, DCASP), matéria ou data..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-xs"
              />
            </div>

            <select
              value={blockFilter}
              onChange={e => setBlockFilter(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">📚 Todos os Blocos do Edital ({enrichedItems.length})</option>
              <option value="especificos">🎯 Conhecimentos Específicos — Contador (Peso 2.0)</option>
              <option value="comuns">🏛️ Conhecimentos Comuns — Nível Superior (Peso 1.0)</option>
              <option value="contabilidade geral">• Contabilidade Geral & Societária</option>
              <option value="casp">• Contabilidade Pública (CASP) & Lei 4.320</option>
              <option value="afo">• AFO, Orçamento Público & LRF</option>
              <option value="direito administrativo">• Administração Pública & Leis Federais/UFBA</option>
              <option value="lingua portuguesa">• Língua Portuguesa</option>
              <option value="auditoria">• Auditoria Governamental & Controle Interno</option>
              <option value="matematica financeira">• Matemática Financeira</option>
              <option value="direito tributario">• Direito Financeiro e Tributário</option>
              <option value="informatica">• Informática Básica</option>
            </select>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="h-9 rounded-md border border-input bg-background px-3 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="date">📅 Ordenar por Data do Cronograma</option>
              <option value="subject">📂 Ordenar por Bloco / Matéria do Edital</option>
              <option value="accuracy">📊 Ordenar por % de Acerto</option>
            </select>
          </div>

          {/* Quick Status Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: 'all', label: `Todos (${enrichedItems.length})` },
              { id: 'studied', label: `✅ Já Estudados (${stats.studied})` },
              { id: 'pending_study', label: `⏳ Pendentes (${stats.total - stats.studied})` },
              { id: 'questions_done', label: `🎯 Com Questões (${stats.withQuestions})` },
              { id: 'no_questions', label: `❗ Sem Questões (${stats.total - stats.withQuestions})` },
              { id: 'low_accuracy', label: `⚠️ Atenção < 70%` },
            ].map(tab => (
              <Button
                key={tab.id}
                size="sm"
                variant={statusFilter === tab.id ? 'default' : 'outline'}
                onClick={() => setStatusFilter(tab.id as any)}
                className={cn(
                  "h-7 text-[11px] px-2.5 font-semibold",
                  statusFilter === tab.id
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white border-none"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto max-h-[640px] overflow-y-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border">
              <TableRow>
                <TableHead className="w-[80px] text-center text-xs font-bold">Já Estudei?</TableHead>
                <TableHead className="min-w-[290px] text-xs font-bold">Assunto do Edital UFBA & Aula Vinculada</TableHead>
                <TableHead className="w-[155px] text-xs font-bold">Já Fiz Questão?</TableHead>
                <TableHead className="w-[140px] text-xs font-bold">% de Acerto</TableHead>
                <TableHead className="w-[200px] text-xs font-bold">Data Programada (Estudo + Questões)</TableHead>
                <TableHead className="w-[135px] text-right text-xs font-bold">Ação Rápida</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                    Nenhum assunto do Edital UFBA encontrado para o filtro selecionado.
                  </TableCell>
                </TableRow>
              ) : (
                filteredItems.map(item => {
                  const perf = item.accuracy;
                  return (
                    <TableRow
                      key={item.id}
                      className={cn(
                        "transition-colors",
                        item.isStudied && item.hasDoneQuestions
                          ? "bg-emerald-950/15 hover:bg-emerald-950/25"
                          : item.isStudied
                          ? "bg-cyan-950/10 hover:bg-cyan-950/20"
                          : "hover:bg-muted/40"
                      )}
                    >
                      {/* Col 1: Já Estudei? (Teoria + Revisão) */}
                      <TableCell className="text-center align-middle">
                        <div className="flex flex-col items-center gap-1.5">
                          <Checkbox
                            checked={item.isStudied}
                            onCheckedChange={() => handleToggleStudied(item)}
                            title="Marcar/desmarcar assunto como estudado (sincroniza com o Plano UFBA e com a Aula)"
                          />
                          <Badge
                            variant="outline"
                            onClick={() => handleToggleStudied(item)}
                            className={cn(
                              "text-[10px] py-0 px-1.5 cursor-pointer select-none",
                              item.isStudied
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold"
                                : "bg-muted/50 text-muted-foreground border-border"
                            )}
                          >
                            {item.isStudied ? 'Estudado ✓' : 'Pendente'}
                          </Badge>
                          <button
                            type="button"
                            onClick={() => handleToggleReview(item)}
                            className={cn(
                              "text-[10px] underline-offset-2 hover:underline",
                              item.isReviewed ? "text-cyan-400 font-semibold" : "text-muted-foreground/70"
                            )}
                            title="Clique para marcar/desmarcar Revisão concluída"
                          >
                            {item.isReviewed ? '🔄 Revisado ✓' : '+ Revisão'}
                          </button>
                        </div>
                      </TableCell>

                      {/* Col 2: Assunto do Edital UFBA & Disciplina/Aula */}
                      <TableCell className="align-middle py-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-[10px] py-0 px-1.5 font-semibold",
                                item.editalBlock === 'especificos'
                                  ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                                  : "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
                              )}
                            >
                              {item.editalBlock === 'especificos' ? '🎯 Específicos (Peso 2)' : '🏛️ Comuns (Peso 1)'}
                            </Badge>
                            <span className="text-[11px] font-semibold text-muted-foreground">
                              {item.editalCategory}
                            </span>
                          </div>

                          <div
                            className={cn(
                              "font-semibold text-xs sm:text-sm leading-snug",
                              item.isStudied ? "text-emerald-300" : "text-foreground"
                            )}
                          >
                            {item.editalTopicTitle}
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                            <span className="font-medium text-foreground/80">
                              📘 {item.habitusSubject} — <strong>{item.habitusLesson}</strong>
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      {/* Col 3: Já Fiz Questão? */}
                      <TableCell className="align-middle">
                        {item.hasDoneQuestions ? (
                          <div className="space-y-1">
                            <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-[11px] gap-1 font-semibold">
                              <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                              Sim ({item.totalQuestions > 0 ? `${item.totalQuestions} q.` : 'Concluído'})
                            </Badge>
                            {item.totalQuestions > 0 && (
                              <div className="text-[11px] text-muted-foreground font-medium">
                                ✅ <strong>{item.totalCorrect}</strong> acertos de <strong>{item.totalQuestions}</strong>
                              </div>
                            )}
                            {item.lastQuestionDate && (
                              <div className="text-[10px] text-muted-foreground/80">
                                Última bateria: {item.lastQuestionDate.split('-').reverse().join('/')}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <Badge variant="outline" className="text-[11px] text-muted-foreground border-border">
                              ⏳ Ainda não fez
                            </Badge>
                            <div className="text-[10px] text-muted-foreground">
                              50 questões disponíveis
                            </div>
                          </div>
                        )}
                      </TableCell>

                      {/* Col 4: Percentual de Acerto (%) */}
                      <TableCell className="align-middle">
                        {perf !== null ? (
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={cn(
                                  "text-sm font-bold",
                                  perf >= 80
                                    ? "text-emerald-400"
                                    : perf >= 70
                                    ? "text-cyan-400"
                                    : perf >= 50
                                    ? "text-amber-400"
                                    : "text-rose-400"
                                )}
                              >
                                {perf.toFixed(1)}%
                              </span>
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-[9px] py-0 px-1",
                                  perf >= 80
                                    ? "border-emerald-500/40 text-emerald-400"
                                    : perf >= 70
                                    ? "border-cyan-500/40 text-cyan-400"
                                    : perf >= 50
                                    ? "border-amber-500/40 text-amber-400"
                                    : "border-rose-500/40 text-rose-400"
                                )}
                              >
                                {perf >= 80 ? 'Ótimo' : perf >= 70 ? 'Bom' : perf >= 50 ? 'Revisar' : 'Crítico'}
                              </Badge>
                            </div>
                            <Progress value={perf} className="h-1.5 w-24" />
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </TableCell>

                      {/* Col 5: Data em que Irei Estudar e Fazer Questão */}
                      <TableCell className="align-middle">
                        <div className="space-y-1">
                          {editingDateKey === item.lessonKey ? (
                            <div className="flex items-center gap-1">
                              <Input
                                type="date"
                                defaultValue={item.customDateIso}
                                onChange={e => {
                                  if (e.target.value) {
                                    handleDateChange(item.lessonKey, e.target.value);
                                  }
                                }}
                                className="h-7 text-xs px-2 w-36"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 px-1.5 text-xs"
                                onClick={() => setEditingDateKey(null)}
                              >
                                ✕
                              </Button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <Badge
                                variant="outline"
                                onClick={() => setEditingDateKey(item.lessonKey)}
                                title="Clique para alterar a data programada de estudo e questões"
                                className={cn(
                                  "text-[11px] font-semibold gap-1 cursor-pointer hover:border-emerald-400",
                                  item.scheduleStatus === 'done'
                                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
                                    : item.scheduleStatus === 'today'
                                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50 animate-pulse"
                                    : item.scheduleStatus === 'overdue'
                                    ? "bg-rose-500/15 text-rose-300 border-rose-500/40"
                                    : "bg-card text-foreground border-border"
                                )}
                              >
                                <Calendar className="h-3 w-3" />
                                {item.displayStudyDate}
                              </Badge>
                              <span className="text-[10px] text-muted-foreground font-medium">
                                (Dia {item.scheduledDayNumber})
                              </span>
                            </div>
                          )}

                          <div className="flex items-center gap-1.5 text-[10px]">
                            {item.scheduleStatus === 'done' && (
                              <span className="text-emerald-400 font-semibold">✅ Estudo + Questões Concluídos</span>
                            )}
                            {item.scheduleStatus === 'today' && (
                              <span className="text-amber-400 font-semibold">🔥 Programado para HOJE!</span>
                            )}
                            {item.scheduleStatus === 'overdue' && (
                              <span className="text-rose-400 font-semibold">⚠️ Data passou — Priorizar!</span>
                            )}
                            {item.scheduleStatus === 'upcoming' && (
                              <span className="text-muted-foreground">
                                📅 Estudo + 50 Questões
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => setEditingDateKey(item.lessonKey)}
                              className="text-cyan-400 hover:underline ml-1"
                              title="Reagendar data"
                            >
                              alterar data
                            </button>
                          </div>

                          {item.scheduledReviewDates.length > 0 && (
                            <div className="text-[10px] text-purple-300/90">
                              🔄 Revisão/Bateria: {item.scheduledReviewDates.join(' • ')}
                            </div>
                          )}
                        </div>
                      </TableCell>

                      {/* Col 6: Ação Rápida (Fazer Questões) */}
                      <TableCell className="text-right align-middle">
                        <div className="flex items-center justify-end gap-1.5 flex-wrap">
                          {item.specialistTopicId && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const topicData = UFBA_SPECIALIST_TOPICS[item.specialistTopicId!];
                                if (topicData) setSelectedReaderTopic(topicData);
                              }}
                              className="h-8 text-xs font-semibold gap-1 border-purple-500/40 text-purple-300 hover:bg-purple-500/10 shadow-sm"
                              title="Ler caderno esquematizado e gerar PDF deste tema"
                            >
                              <BookOpen className="h-3.5 w-3.5 text-purple-400" />
                              <span>Ler Teoria (PDF)</span>
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant={item.hasDoneQuestions ? 'outline' : 'default'}
                            onClick={() => {
                            if (item.subjectObj) {
                              onOpenSimulado(item.subjectObj.id, item.dbLessonNumber);
                            } else {
                              toast.error('Clique em "Restaurar 13 Matérias" no topo para vincular a disciplina.');
                            }
                          }}
                          className={cn(
                            "h-8 text-xs font-semibold gap-1.5",
                            item.hasDoneQuestions
                              ? "border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
                              : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                          )}
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          {item.hasDoneQuestions ? 'Refazer Questões' : 'Fazer Questões'}
                        </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <UfbaTheoryReaderModal
        topic={selectedReaderTopic}
        open={Boolean(selectedReaderTopic)}
        onOpenChange={(op) => !op && setSelectedReaderTopic(null)}
        onOpenExercises={() => {
          if (selectedReaderTopic) {
            const targetItem = enrichedItems.find(i => i.specialistTopicId === selectedReaderTopic.id);
            if (targetItem && targetItem.subjectObj) {
              onOpenSimulado(targetItem.subjectObj.id, targetItem.dbLessonNumber);
              setSelectedReaderTopic(null);
            }
          }
        }}
      />
    </Card>
  );
}
