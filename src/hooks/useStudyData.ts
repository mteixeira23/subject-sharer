import { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { StudyData, Contest, Subject, Lesson, ScheduleEvent, QuestionSession } from '@/types/study';
import { PomodoroSession } from '@/types/pomodoro';
import { SEFAZ_BA_SUBJECTS, getLessonName } from '@/data/sefazBA';
import { SUBJECT_COLORS } from '@/types/study';
import { getLocalDateString } from '@/lib/dates';

// ── Row mappers ──────────────────────────────────────────────────────────────

function rowToContest(r: any): Contest {
  return { id: r.id, name: r.name, createdAt: r.created_at, currentCycle: r.current_cycle ?? 1 };
}

function rowToSubject(r: any): Subject {
  const sefazDef = SEFAZ_BA_SUBJECTS.find(s => s.name.trim().toLowerCase() === r.name.trim().toLowerCase());
  return {
    id: r.id,
    contestId: r.contest_id,
    name: r.name,
    totalLessons: sefazDef ? sefazDef.totalLessons : (r.total_lessons || 1),
    color: r.color,
  };
}

function rowToLesson(r: any): Lesson {
  return {
    id: r.id,
    subjectId: r.subject_id,
    number: r.number,
    name: r.name ?? '',
    theoryCompleted: r.theory_completed,
    reviewCompleted: r.review_completed,
    questionsCount: r.questions_count,
    correctAnswers: r.correct_answers,
    cycle: r.cycle ?? 1,
  };
}

function rowToScheduleEvent(r: any): ScheduleEvent {
  return {
    id: r.id,
    date: r.date,
    subjectId: r.subject_id,
    lessonNumber: r.lesson_number,
    type: r.type,
    completed: r.completed,
    description: r.description ?? undefined,
    shift: r.shift ?? undefined,
  };
}

function rowToQuestionSession(r: any): QuestionSession {
  return {
    id: r.id,
    subjectId: r.subject_id,
    lessonNumber: r.lesson_number,
    questionsCount: r.questions_count,
    correctAnswers: r.correct_answers,
    date: r.date,
  };
}

function rowToPomodoroSession(r: any): PomodoroSession {
  return {
    id: r.id,
    subjectId: r.subject_id,
    lessonNumber: r.lesson_number,
    startedAt: r.started_at,
    duration: r.duration,
    completed: r.completed,
    date: r.date,
  };
}

// ── Hook ──────────────────────────────────────────────────────────────────────


export const SEFAZ_21_COMPLETED_LESSONS: { subjectName: string; dbLessonNumber: number }[] = [
  // Day 1
  { subjectName: 'Contabilidade Geral', dbLessonNumber: 1 }, // Aula 00
  { subjectName: 'Direito Tributário', dbLessonNumber: 1 },  // Aula 00
  // Day 2
  { subjectName: 'Direito Administrativo', dbLessonNumber: 1 }, // Aula 00
  { subjectName: 'Língua Portuguesa', dbLessonNumber: 1 },      // Aula 00
  // Day 3
  { subjectName: 'Direito Constitucional', dbLessonNumber: 1 }, // Aula 00
  { subjectName: 'Contabilidade Geral', dbLessonNumber: 2 },    // Aula 01
  // Day 4
  { subjectName: 'Auditoria', dbLessonNumber: 1 },              // Aula 00
  { subjectName: 'Contabilidade Aplicada ao Setor Público (CASP)', dbLessonNumber: 1 }, // Aula 00
  // Day 5
  { subjectName: 'Direito Tributário', dbLessonNumber: 2 },      // Aula 01
  { subjectName: 'Estatística', dbLessonNumber: 1 },            // Aula 00
  // Day 6
  { subjectName: 'Economia', dbLessonNumber: 1 },               // Aula 00
  { subjectName: 'Direito Administrativo', dbLessonNumber: 2 },  // Aula 01
  // Day 7
  { subjectName: 'Matemática Financeira', dbLessonNumber: 1 },   // Aula 00
  // Day 8
  { subjectName: 'Administração, Economia e Finanças Públicas', dbLessonNumber: 1 }, // Aula 00
  { subjectName: 'Direito Constitucional', dbLessonNumber: 2 },  // Aula 01
  // Day 9
  { subjectName: 'Informática Básica', dbLessonNumber: 1 },      // Aula 00
  { subjectName: 'Noções de Igualdade Racial', dbLessonNumber: 1 }, // Aula 00
  // Day 10
  { subjectName: 'Contabilidade Geral', dbLessonNumber: 3 },    // Aula 02
  { subjectName: 'Direito Tributário', dbLessonNumber: 3 },     // Aula 02
  // Day 11
  { subjectName: 'Direito Administrativo', dbLessonNumber: 3 }, // Aula 02
  { subjectName: 'Língua Portuguesa', dbLessonNumber: 2 },      // Aula 01
];

export function isBaselineCompletedLesson(subjectName?: string, lessonNum?: number): boolean {
  if (!subjectName || !lessonNum) return false;
  const sNorm = subjectName.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  return SEFAZ_21_COMPLETED_LESSONS.some(b => {
    const bNorm = b.subjectName.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    return (sNorm === bNorm || sNorm.includes(bNorm) || bNorm.includes(sNorm)) && b.dbLessonNumber === lessonNum;
  });
}

export function useStudyData() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const userId = user?.id;
  const [seeding, setSeeding] = useState(false);
  const hasSeededRef = useRef(false);

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['study', userId] });
  }, [queryClient, userId]);

  // ── Queries ──────────────────────────────────────────────────────────────

  const { data: contests = [], isLoading: loadingContests } = useQuery({
    queryKey: ['study', userId, 'contests'],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('contests').select('*').eq('user_id', userId);
      if (error) throw error;
      return (data ?? []).map(rowToContest);
    },
    enabled: !!userId,
  });

  const { data: rawSubjects = [], isLoading: loadingSubjects } = useQuery({
    queryKey: ['study', userId, 'subjects'],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('subjects').select('*').eq('user_id', userId);
      if (error) throw error;
      return (data ?? []).map(rowToSubject);
    },
    enabled: !!userId,
  });

  // Strictly enforce 13 SEFAZ-BA subjects
  const sefazNames = useMemo(() => new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase())), []);

  const subjects = useMemo(() => {
    const dbMap = new Map<string, Subject>();
    rawSubjects.forEach(s => {
      const key = s.name.trim().toLowerCase();
      if (!dbMap.has(key)) {
        dbMap.set(key, s);
      }
    });

    return SEFAZ_BA_SUBJECTS.map((def, idx) => {
      const key = def.name.trim().toLowerCase();
      const dbMatch = dbMap.get(key);
      if (dbMatch) {
        return {
          ...dbMatch,
          totalLessons: def.totalLessons,
          color: dbMatch.color || def.color || SUBJECT_COLORS[idx % SUBJECT_COLORS.length],
        };
      }
      return {
        id: `sefaz-subject-${idx + 1}`,
        contestId: def.contestId || 'sefaz-ba-2025',
        name: def.name,
        totalLessons: def.totalLessons,
        color: def.color || SUBJECT_COLORS[idx % SUBJECT_COLORS.length],
      };
    });
  }, [rawSubjects]);

  const { data: lessons = [], isLoading: loadingLessons } = useQuery({
    queryKey: ['study', userId, 'lessons', subjects],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('lessons').select('*').eq('user_id', userId);
      if (error) throw error;
      const allLessons = (data ?? []).map(rowToLesson);

      const subjectIdSet = new Set(subjects.map(s => s.id));
      const subjectNameMap = new Map<string, string>();
      subjects.forEach(s => {
        subjectNameMap.set(s.id, s.name.trim().toLowerCase());
        subjectNameMap.set(s.name.trim().toLowerCase(), s.name.trim().toLowerCase());
      });

      const rawLessons = allLessons.filter(l => {
        if (subjectIdSet.has(l.subjectId)) return true;
        return subjectNameMap.has(l.subjectId.trim().toLowerCase());
      });

      const map = new Map<string, Lesson>();
      rawLessons.forEach(l => {
        const sName = subjectNameMap.get(l.subjectId) || l.subjectId.trim().toLowerCase();
        const key = `${sName}-${l.number}`;
        const baselineDone = isBaselineCompletedLesson(sName, l.number);
        if (!map.has(key)) {
          map.set(key, { ...l, theoryCompleted: l.theoryCompleted || baselineDone });
        } else {
          const existing = map.get(key)!;
          map.set(key, {
            ...existing,
            theoryCompleted: existing.theoryCompleted || l.theoryCompleted,
            reviewCompleted: existing.reviewCompleted || l.reviewCompleted,
            questionsCount: Math.max(existing.questionsCount || 0, l.questionsCount || 0),
            correctAnswers: Math.max(existing.correctAnswers || 0, l.correctAnswers || 0),
            name: existing.name || l.name,
          });
        }
      });
      return Array.from(map.values());
    },
    enabled: !!userId,
  });

  const { data: scheduleEvents = [] } = useQuery({
    queryKey: ['study', userId, 'scheduleEvents', subjects],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('schedule_events').select('*').eq('user_id', userId);
      if (error) throw error;
      const rawEvents = (data ?? []).map(rowToScheduleEvent);
      return rawEvents.filter(ev => {
        const s = subjects.find(sub => sub.id === ev.subjectId);
        if (!s) return false;
        return sefazNames.has(s.name.trim().toLowerCase());
      });
    },
    enabled: !!userId,
  });

  const { data: questionSessions = [] } = useQuery({
    queryKey: ['study', userId, 'questionSessions'],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('question_sessions').select('*').eq('user_id', userId);
      if (error) throw error;
      return (data ?? []).map(rowToQuestionSession);
    },
    enabled: !!userId,
  });

  const { data: pomodoroSessions = [] } = useQuery({
    queryKey: ['study', userId, 'pomodoroSessions'],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('pomodoro_sessions').select('*').eq('user_id', userId);
      if (error) throw error;
      return (data ?? []).map(rowToPomodoroSession);
    },
    enabled: !!userId,
  });

  const isLoading = loadingContests || loadingSubjects || loadingLessons || seeding;

  // ── Seed / Sync initial data for users ──────────────────────────────────

  useEffect(() => {
    if (!userId || loadingContests || loadingSubjects || loadingLessons || seeding) return;

    const hasInvalidSubjects = rawSubjects.some(s => !sefazNames.has(s.name.trim().toLowerCase()));
    const hasMissingSubjects = SEFAZ_BA_SUBJECTS.some(def =>
      !rawSubjects.some(s => s.name.trim().toLowerCase() === def.name.trim().toLowerCase())
    );

    if (!hasInvalidSubjects && !hasMissingSubjects && hasSeededRef.current) return;
    hasSeededRef.current = true;

    const seedAndSync = async () => {
      setSeeding(true);
      try {
        let activeContestId = contests[0]?.id;

        // Create contest if none exists
        if (!activeContestId) {
          const { data: contestRow, error: contestErr } = await supabase
            .from('contests')
            .insert({ user_id: userId, name: 'SEFAZ-BA 2025' })
            .select('id')
            .single();
          if (contestErr || !contestRow) throw contestErr;
          activeContestId = contestRow.id;
        }

        // Ensure all subjects exist and all lessons exist for each subject
        const currentSubjects = [...rawSubjects];

        if (activeContestId) {
          // A.0) Purge non-SEFAZ-BA subjects from Supabase database
          const nonSefazSubjects = rawSubjects.filter(s => !sefazNames.has(s.name.trim().toLowerCase()));

          if (nonSefazSubjects.length > 0) {
            const nonSefazIds = nonSefazSubjects.map(s => s.id);
            for (let i = 0; i < nonSefazIds.length; i += 100) {
              const batch = nonSefazIds.slice(i, i + 100);
              await supabase.from('schedule_events').delete().in('subject_id', batch);
              await supabase.from('question_sessions').delete().in('subject_id', batch);
              await supabase.from('pomodoro_sessions').delete().in('subject_id', batch);
              await supabase.from('lessons').delete().in('subject_id', batch);
              await supabase.from('subjects').delete().in('id', batch);
            }
            invalidate();
          }

          // A) Insert missing subjects
          const existingSubjectNames = new Set(
            currentSubjects
              .filter(s => sefazNames.has(s.name.trim().toLowerCase()))
              .map(s => s.name.trim().toLowerCase())
          );
          const subjectsToInsert = SEFAZ_BA_SUBJECTS.filter(
            s => !existingSubjectNames.has(s.name.trim().toLowerCase())
          );

          if (subjectsToInsert.length > 0) {
            const subjectRows = subjectsToInsert.map((s, i) => ({
              user_id: userId,
              contest_id: activeContestId,
              name: s.name,
              total_lessons: s.totalLessons,
              color: s.color || SUBJECT_COLORS[i % SUBJECT_COLORS.length],
            }));

            const { data: insertedSubjects, error: subjErr } = await supabase
              .from('subjects')
              .insert(subjectRows)
              .select('id, name, total_lessons, contest_id, color');
            if (!subjErr && insertedSubjects) {
              insertedSubjects.forEach(s => currentSubjects.push(rowToSubject(s)));
            }
          }

          // B) Check EVERY subject to ensure all lessons are inserted in Supabase
          const missingLessonRows: any[] = [];
          for (const subj of currentSubjects) {
            const sefazDef = SEFAZ_BA_SUBJECTS.find(s => s.name.trim().toLowerCase() === subj.name.trim().toLowerCase());
            const targetCount = sefazDef ? sefazDef.totalLessons : (subj.totalLessons || 1);

            if (subj.totalLessons !== targetCount) {
              await supabase.from('subjects').update({ total_lessons: targetCount }).eq('id', subj.id);
            }

            const subjectName = subj.name.trim().toLowerCase();
            const existingLessonNumbers = new Set(
              lessons.filter(l => {
                const parentSubj = currentSubjects.find(s => s.id === l.subjectId || s.name.trim().toLowerCase() === l.subjectId.trim().toLowerCase());
                return parentSubj && parentSubj.name.trim().toLowerCase() === subjectName;
              }).map(l => l.number)
            );

            for (let i = 1; i <= targetCount; i++) {
              if (!existingLessonNumbers.has(i)) {
                missingLessonRows.push({
                  user_id: userId,
                  subject_id: subj.id,
                  number: i,
                  name: getLessonName(subj.name, i),
                  theory_completed: false,
                  review_completed: false,
                  questions_count: 0,
                  correct_answers: 0,
                  cycle: 1,
                });
              }
            }
          }

          if (missingLessonRows.length > 0) {
            for (let i = 0; i < missingLessonRows.length; i += 100) {
              const batch = missingLessonRows.slice(i, i + 100);
              await supabase.from('lessons').insert(batch);
            }
          }

          // Persist 21 baseline completed lessons into Supabase
          try {
            for (const b of SEFAZ_21_COMPLETED_LESSONS) {
              const sObj = currentSubjects.find(s => s.name.trim().toLowerCase() === b.subjectName.trim().toLowerCase());
              if (sObj) {
                await supabase
                  .from('lessons')
                  .update({ theory_completed: true })
                  .eq('user_id', userId)
                  .eq('subject_id', sObj.id)
                  .eq('number', b.dbLessonNumber);
              }
            }
          } catch (e) {}
        }

        // C) Fill missing lesson names for existing lessons
        const lessonsToUpdate = lessons.filter(l => !l.name || l.name.trim() === '');
        if (lessonsToUpdate.length > 0) {
          for (const lesson of lessonsToUpdate) {
            const parentSubject = subjects.find(s => s.id === lesson.subjectId);
            if (parentSubject) {
              const computedName = getLessonName(parentSubject.name, lesson.number);
              if (computedName) {
                await supabase.from('lessons').update({ name: computedName }).eq('id', lesson.id);
              }
            }
          }
        }

        // C.2) Purge duplicate lesson rows from Supabase (preserving completed lessons!)
        const lessonKeyGroupMap = new Map<string, Lesson[]>();
        for (const l of lessons) {
          const parentSubj = subjects.find(s => s.id === l.subjectId || s.name.trim().toLowerCase() === l.subjectId.trim().toLowerCase());
          const subjectNameKey = parentSubj ? parentSubj.name.trim().toLowerCase() : l.subjectId.trim().toLowerCase();
          const key = `${subjectNameKey}-${l.number}`;
          if (!lessonKeyGroupMap.has(key)) {
            lessonKeyGroupMap.set(key, []);
          }
          lessonKeyGroupMap.get(key)!.push(l);
        }

        const duplicateLessonIdsToDelete: string[] = [];
        for (const group of lessonKeyGroupMap.values()) {
          if (group.length > 1) {
            group.sort((a, b) => {
              const scoreA = (a.theoryCompleted ? 10 : 0) + (a.reviewCompleted ? 5 : 0) + (a.questionsCount || 0);
              const scoreB = (b.theoryCompleted ? 10 : 0) + (b.reviewCompleted ? 5 : 0) + (b.questionsCount || 0);
              return scoreB - scoreA;
            });
            const toDelete = group.slice(1).map(l => l.id);
            duplicateLessonIdsToDelete.push(...toDelete);
          }
        }

        if (duplicateLessonIdsToDelete.length > 0) {
          for (let i = 0; i < duplicateLessonIdsToDelete.length; i += 100) {
            const batch = duplicateLessonIdsToDelete.slice(i, i + 100);
            await supabase.from('lessons').delete().in('id', batch);
          }
        }

        // D) Purge old mock template schedule events and generate official SEFAZ-BA daily schedule
        const sefazNames = new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase()));
        const isSEFAZSubject = (subjId: string) => {
          const s = subjects.find(sub => sub.id === subjId);
          if (!s) return false;
          return sefazNames.has(s.name.trim().toLowerCase());
        };

        const invalidEvents = scheduleEvents.filter(e => !isSEFAZSubject(e.subjectId));
        const needsRegeneration = scheduleEvents.length === 0 || invalidEvents.length > 0;

        if (needsRegeneration && subjects.length > 0) {
          // Delete old mock schedule events from template
          await supabase.from('schedule_events').delete().eq('user_id', userId);
          if (invalidEvents.length > 0) {
            const invalidIds = invalidEvents.map(e => e.id);
            for (let i = 0; i < invalidIds.length; i += 100) {
              await supabase.from('schedule_events').delete().in('id', invalidIds.slice(i, i + 100));
            }
          }

          const subjectMap = new Map<string, string>();
          subjects.forEach(s => subjectMap.set(s.name.trim().toLowerCase(), s.id));

          const subjectsData = [
            { name: 'Contabilidade Geral', count: 31 },
            { name: 'Direito Administrativo', count: 25 },
            { name: 'Direito Constitucional', count: 21 },
            { name: 'Estatística', count: 20 },
            { name: 'Contabilidade Aplicada ao Setor Público (CASP)', count: 19 },
            { name: 'Direito Tributário', count: 19 },
            { name: 'Auditoria', count: 17 },
            { name: 'Economia', count: 16 },
            { name: 'Matemática Financeira', count: 16 },
            { name: 'Língua Portuguesa', count: 16 },
            { name: 'Administração, Economia e Finanças Públicas', count: 13 },
            { name: 'Informática Básica', count: 12 },
            { name: 'Noções de Igualdade Racial', count: 10 },
          ];

          const lessonQueues: Record<string, Array<{ subjectName: string; number: number }>> = {};
          subjectsData.forEach(s => {
            lessonQueues[s.name] = [];
            for (let i = 1; i <= s.count; i++) {
              lessonQueues[s.name].push({ subjectName: s.name, number: i });
            }
          });

          const subjectRotation = [
            'Contabilidade Geral',
            'Direito Tributário',
            'Direito Administrativo',
            'Língua Portuguesa',
            'Direito Constitucional',
            'Contabilidade Geral',
            'Auditoria',
            'Contabilidade Aplicada ao Setor Público (CASP)',
            'Direito Tributário',
            'Estatística',
            'Economia',
            'Direito Administrativo',
            'Matemática Financeira',
            'Administração, Economia e Finanças Públicas',
            'Direito Constitucional',
            'Informática Básica',
            'Noções de Igualdade Racial',
          ];

          const allLessonsOrdered: Array<{ subjectName: string; number: number }> = [];
          let rotationIndex = 0;

          while (Object.values(lessonQueues).some(q => q.length > 0)) {
            const targetSubject = subjectRotation[rotationIndex % subjectRotation.length];
            if (lessonQueues[targetSubject] && lessonQueues[targetSubject].length > 0) {
              allLessonsOrdered.push(lessonQueues[targetSubject].shift()!);
            } else {
              const remainingSubject = Object.keys(lessonQueues).find(k => lessonQueues[k].length > 0);
              if (remainingSubject) {
                allLessonsOrdered.push(lessonQueues[remainingSubject].shift()!);
              }
            }
            rotationIndex++;
          }

          const formatDateStr = (d: Date) => {
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
          };

          const startDate = new Date(2026, 7, 10);
          let currentDate = new Date(startDate);
          let lessonIdx = 0;
          const eventsToInsert: any[] = [];

          while (currentDate <= new Date(2026, 10, 15) && lessonIdx < allLessonsOrdered.length) {
            const isSunday = currentDate.getDay() === 0;
            const dateStr = formatDateStr(currentDate);

            const l1 = allLessonsOrdered[lessonIdx++];
            if (l1) {
              const subjId = subjectMap.get(l1.subjectName.toLowerCase());
              if (subjId) {
                const lessonTitle = getLessonName(l1.subjectName, l1.number);
                eventsToInsert.push({
                  user_id: userId,
                  subject_id: subjId,
                  date: dateStr,
                  lesson_number: l1.number,
                  type: 'theory',
                  completed: false,
                  description: `${l1.subjectName} - Aula ${l1.number}: ${lessonTitle}`,
                  shift: 'Manhã',
                });
              }
            }

            if (!isSunday) {
              const l2 = allLessonsOrdered[lessonIdx++];
              if (l2) {
                const subjId = subjectMap.get(l2.subjectName.toLowerCase());
                if (subjId) {
                  const lessonTitle = getLessonName(l2.subjectName, l2.number);
                  eventsToInsert.push({
                    user_id: userId,
                    subject_id: subjId,
                    date: dateStr,
                    lesson_number: l2.number,
                    type: 'theory',
                    completed: false,
                    description: `${l2.subjectName} - Aula ${l2.number}: ${lessonTitle}`,
                    shift: 'Tarde',
                  });
                }
              }
            }

            currentDate.setDate(currentDate.getDate() + 1);
          }

          if (eventsToInsert.length > 0) {
            for (let i = 0; i < eventsToInsert.length; i += 100) {
              const batch = eventsToInsert.slice(i, i + 100);
              await supabase.from('schedule_events').insert(batch);
            }
          }
        }

        if (lessonsToUpdate.length > 0 || scheduleEvents.length === 0) {
          invalidate();
        }
      } catch (err) {
        console.error('Failed to seed/sync study data:', err);
      } finally {
        setSeeding(false);
      }
    };

    seedAndSync();
  }, [userId, loadingContests, loadingSubjects, loadingLessons, contests, subjects, lessons, seeding, invalidate]);

  const activeSubjects = subjects;

  // ── Aggregated data object ───────────────────────────────────────────────

  const data: StudyData = useMemo(
    () => ({ contests, subjects: activeSubjects, lessons, scheduleEvents, questionSessions, pomodoroSessions }),
    [contests, activeSubjects, lessons, scheduleEvents, questionSessions, pomodoroSessions],
  );

  // ── Contest CRUD ─────────────────────────────────────────────────────────

  const addContest = useCallback(
    async (contest: Contest) => {
      if (!userId) return;
      const { error } = await supabase.from('contests').insert({
        user_id: userId,
        name: contest.name,
      });
      if (error) throw error;
      invalidate();
    },
    [userId, invalidate],
  );

  const updateContest = useCallback(
    async (id: string, updates: Partial<Contest>) => {
      const row: Record<string, any> = {};
      if (updates.name !== undefined) row.name = updates.name;
      const { error } = await supabase.from('contests').update(row).eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  const deleteContest = useCallback(
    async (id: string) => {
      // CASCADE will handle subjects, lessons, events, etc.
      const { error } = await supabase.from('contests').delete().eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  // ── Subject CRUD ─────────────────────────────────────────────────────────

  const addSubject = useCallback(
    async (subject: Subject, lessonsCount: number) => {
      if (!userId) return;
      const { data: inserted, error } = await supabase
        .from('subjects')
        .insert({
          user_id: userId,
          contest_id: subject.contestId,
          name: subject.name,
          total_lessons: lessonsCount,
          color: subject.color,
        })
        .select('id')
        .single();
      if (error || !inserted) throw error;

      // Create lessons with current cycle
      const contest = contests.find(c => c.id === subject.contestId);
      const currentCycle = contest?.currentCycle ?? 1;
      const lessonRows = [];
      for (let i = 1; i <= lessonsCount; i++) {
        lessonRows.push({
          user_id: userId,
          subject_id: inserted.id,
          number: i,
          name: '',
          theory_completed: false,
          review_completed: false,
          questions_count: 0,
          correct_answers: 0,
          cycle: currentCycle,
        });
      }
      if (lessonRows.length > 0) {
        const { error: lErr } = await supabase.from('lessons').insert(lessonRows);
        if (lErr) throw lErr;
      }
      invalidate();
    },
    [userId, contests, invalidate],
  );

  const updateSubject = useCallback(
    async (id: string, updates: Partial<Subject>) => {
      const row: Record<string, any> = {};
      if (updates.name !== undefined) row.name = updates.name;
      if (updates.totalLessons !== undefined) row.total_lessons = updates.totalLessons;
      if (updates.color !== undefined) row.color = updates.color;
      const { error } = await supabase.from('subjects').update(row).eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  const deleteSubject = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('subjects').delete().eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  // ── Lesson CRUD ──────────────────────────────────────────────────────────

  const addLesson = useCallback(
    async (subjectId: string, name?: string) => {
      if (!userId) return;
      const subjectLessons = lessons.filter(l => l.subjectId === subjectId);
      const nextNumber = subjectLessons.length > 0
        ? Math.max(...subjectLessons.map(l => l.number)) + 1
        : 1;

      // Get current cycle for the subject's contest
      const subj = subjects.find(s => s.id === subjectId);
      const contest = subj ? contests.find(c => c.id === subj.contestId) : null;
      const currentCycle = contest?.currentCycle ?? 1;

      const { error } = await supabase.from('lessons').insert({
        user_id: userId,
        subject_id: subjectId,
        number: nextNumber,
        name: name || '',
        cycle: currentCycle,
      });
      if (error) throw error;

      // Update subject total_lessons
      const subject = subjects.find(s => s.id === subjectId);
      if (subject) {
        await supabase.from('subjects').update({ total_lessons: subject.totalLessons + 1 }).eq('id', subjectId);
      }
      invalidate();
    },
    [userId, lessons, subjects, contests, invalidate],
  );

  const updateLesson = useCallback(
    async (id: string, updates: Partial<Lesson>, subjectIdHint?: string, lessonNumberHint?: number) => {
      const activeUserId = userId || 'default-user';

      let targetSubjectId = subjectIdHint || '';
      let targetNumber = lessonNumberHint || 0;

      if (!targetSubjectId || !targetNumber) {
        if (id.includes('-fallback-')) {
          const parts = id.split('-fallback-');
          targetSubjectId = parts[0];
          targetNumber = parseInt(parts[1], 10);
        } else {
          const existing = lessons.find(l => l.id === id);
          if (existing) {
            targetSubjectId = existing.subjectId;
            targetNumber = existing.number;
          }
        }
      }

      if (!targetSubjectId && lessons.length > 0) {
        const found = lessons.find(l => l.id === id);
        if (found) {
          targetSubjectId = found.subjectId;
          if (!targetNumber) targetNumber = found.number;
        }
      }

      if (!targetSubjectId) return;

      // Ensure targetSubjectId is the valid Supabase subject UUID
      const subj = subjects.find(
        s => s.id === targetSubjectId || s.name.trim().toLowerCase() === targetSubjectId.trim().toLowerCase()
      );
      const realSubjectId = subj ? subj.id : targetSubjectId;

      const rowUpdates: Record<string, any> = {};
      if (updates.name !== undefined) rowUpdates.name = updates.name;
      if (updates.theoryCompleted !== undefined) rowUpdates.theory_completed = updates.theoryCompleted;
      if (updates.reviewCompleted !== undefined) rowUpdates.review_completed = updates.reviewCompleted;
      if (updates.questionsCount !== undefined) rowUpdates.questions_count = updates.questionsCount;
      if (updates.correctAnswers !== undefined) rowUpdates.correct_answers = updates.correctAnswers;

      if (subj && updates.theoryCompleted !== undefined) {
        localStorage.setItem(`lesson_flag_${activeUserId}_${subj.name.trim().toLowerCase()}_${targetNumber}_theory`, String(updates.theoryCompleted));
        localStorage.setItem(`lesson_flag_default-user_${subj.name.trim().toLowerCase()}_${targetNumber}_theory`, String(updates.theoryCompleted));
      }
      if (subj && updates.reviewCompleted !== undefined) {
        localStorage.setItem(`lesson_flag_${activeUserId}_${subj.name.trim().toLowerCase()}_${targetNumber}_review`, String(updates.reviewCompleted));
        localStorage.setItem(`lesson_flag_default-user_${subj.name.trim().toLowerCase()}_${targetNumber}_review`, String(updates.reviewCompleted));
      }

      // 1. Optimistically update local React Query state for 0ms lag across all matching subject representations
      const sameNameSubjectIds = subj
        ? new Set(subjects.filter(s => s.name.trim().toLowerCase() === subj.name.trim().toLowerCase()).map(s => s.id))
        : new Set([realSubjectId, targetSubjectId]);

      const updater = (old: Lesson[] = []) => {
        let updated = false;
        const result = old.map(l => {
          const lSubj = subjects.find(s => s.id === l.subjectId || s.name.trim().toLowerCase() === l.subjectId.trim().toLowerCase());
          const isMatch = (lSubj && subj && lSubj.name.trim().toLowerCase() === subj.name.trim().toLowerCase())
            || sameNameSubjectIds.has(l.subjectId)
            || l.subjectId === targetSubjectId;

          if (isMatch && l.number === targetNumber) {
            updated = true;
            return { ...l, ...updates };
          }
          return l;
        });

        if (!updated) {
          result.push({
            id: id,
            subjectId: realSubjectId,
            number: targetNumber,
            name: updates.name || (subj ? getLessonName(subj.name, targetNumber) : `Aula ${String(targetNumber - 1).padStart(2, '0')}`),
            theoryCompleted: updates.theoryCompleted ?? false,
            reviewCompleted: updates.reviewCompleted ?? false,
            questionsCount: updates.questionsCount ?? 0,
            correctAnswers: updates.correctAnswers ?? 0,
            cycle: 1,
            ...updates,
          });
        }
        return result;
      };

      queryClient.setQueriesData({ queryKey: ['study'] }, (old: any) => {
        if (Array.isArray(old)) return updater(old);
        return old;
      });

      // 2. Persist in Supabase cleanly across all matching subject rows
      try {
        const sameNameSubjectIds = subj
          ? subjects.filter(s => s.name.trim().toLowerCase() === subj.name.trim().toLowerCase()).map(s => s.id)
          : [realSubjectId];

        const { data: dbRows, error: findErr } = await supabase
          .from('lessons')
          .select('id')
          .eq('user_id', userId)
          .in('subject_id', sameNameSubjectIds)
          .eq('number', targetNumber);

        if (findErr) {
          console.error('Supabase find lesson error:', findErr);
        }

        if (dbRows && dbRows.length > 0) {
          const ids = dbRows.map(r => r.id);
          const { error: updateErr } = await supabase.from('lessons').update(rowUpdates).in('id', ids);
          if (updateErr) console.error('Supabase update error:', updateErr);
        } else {
          const { error: insertErr } = await supabase.from('lessons').insert({
            user_id: userId,
            subject_id: realSubjectId,
            number: targetNumber,
            name: updates.name || (subj ? getLessonName(subj.name, targetNumber) : `Aula ${String(targetNumber - 1).padStart(2, '0')}`),
            theory_completed: updates.theoryCompleted ?? false,
            review_completed: updates.reviewCompleted ?? false,
            questions_count: updates.questionsCount ?? 0,
            correct_answers: updates.correctAnswers ?? 0,
            cycle: 1,
            ...rowUpdates,
          });
          if (insertErr) console.error('Supabase insert error:', insertErr);
        }
      } catch (err) {
        console.error('Failed to save lesson update in Supabase:', err);
      }
    },
    [userId, lessons, subjects, queryClient],
  );

  const deleteLesson = useCallback(
    async (id: string) => {
      const lesson = lessons.find(l => l.id === id);
      if (!lesson) return;
      const subjectLessons = lessons.filter(l => l.subjectId === lesson.subjectId);
      if (subjectLessons.length <= 1) return; // Keep at least one

      const { error } = await supabase.from('lessons').delete().eq('id', id);
      if (error) throw error;

      const subject = subjects.find(s => s.id === lesson.subjectId);
      if (subject) {
        await supabase.from('subjects').update({ total_lessons: subject.totalLessons - 1 }).eq('id', lesson.subjectId);
      }
      invalidate();
    },
    [lessons, subjects, invalidate],
  );

  // ── Schedule Events ──────────────────────────────────────────────────────

  const addScheduleEvent = useCallback(
    async (event: ScheduleEvent) => {
      if (!userId) return;
      const { error } = await supabase.from('schedule_events').insert({
        user_id: userId,
        subject_id: event.subjectId,
        date: event.date,
        lesson_number: event.lessonNumber,
        type: event.type,
        completed: event.completed,
        description: event.description ?? null,
        shift: event.shift ?? null,
      });
      if (error) throw error;
      invalidate();
    },
    [userId, invalidate],
  );

  const updateScheduleEvent = useCallback(
    async (id: string, updates: Partial<ScheduleEvent>) => {
      const row: Record<string, any> = {};
      if (updates.date !== undefined) row.date = updates.date;
      if (updates.lessonNumber !== undefined) row.lesson_number = updates.lessonNumber;
      if (updates.type !== undefined) row.type = updates.type;
      if (updates.completed !== undefined) row.completed = updates.completed;
      if (updates.description !== undefined) row.description = updates.description;
      if (updates.shift !== undefined) row.shift = updates.shift;
      const { error } = await supabase.from('schedule_events').update(row).eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  const deleteScheduleEvent = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('schedule_events').delete().eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  // ── Question Sessions ────────────────────────────────────────────────────

  // Helper: find the lesson row in the user's current cycle
  const findCurrentCycleLesson = useCallback(
    (subjectId: string, lessonNumber: number) => {
      const subject = subjects.find(s => s.id === subjectId);
      const contest = subject ? contests.find(c => c.id === subject.contestId) : null;
      const cycle = contest?.currentCycle ?? 1;
      return lessons.find(
        l => l.subjectId === subjectId && l.number === lessonNumber && l.cycle === cycle,
      ) ?? lessons.find(l => l.subjectId === subjectId && l.number === lessonNumber);
    },
    [lessons, subjects, contests],
  );

  const addQuestionSession = useCallback(
    async (session: QuestionSession) => {
      if (!userId) return;
      const { data: inserted, error } = await supabase
        .from('question_sessions')
        .insert({
          user_id: userId,
          subject_id: session.subjectId,
          lesson_number: session.lessonNumber,
          questions_count: session.questionsCount,
          correct_answers: session.correctAnswers,
          date: session.date,
        })
        .select('*')
        .single();
      if (error) throw error;

      // Update lesson counters on the current cycle lesson
      const lesson = findCurrentCycleLesson(session.subjectId, session.lessonNumber);
      let updatedLessonRow: any = null;
      if (lesson) {
        const { data: lessonRow, error: updErr } = await supabase
          .from('lessons')
          .update({
            questions_count: lesson.questionsCount + session.questionsCount,
            correct_answers: lesson.correctAnswers + session.correctAnswers,
          })
          .eq('id', lesson.id)
          .select('*')
          .single();
        if (updErr) throw updErr;
        updatedLessonRow = lessonRow;
      }

      // Optimistic cache update so UI reflects immediately
      if (inserted) {
        queryClient.setQueryData(['study', userId, 'questionSessions'], (old: QuestionSession[] = []) => [
          ...old,
          rowToQuestionSession(inserted),
        ]);
      }
      if (updatedLessonRow) {
        queryClient.setQueryData(['study', userId, 'lessons'], (old: Lesson[] = []) =>
          old.map(l => (l.id === updatedLessonRow.id ? rowToLesson(updatedLessonRow) : l)),
        );
      }
      invalidate();
    },
    [userId, findCurrentCycleLesson, invalidate, queryClient],
  );

  const updateQuestionSession = useCallback(
    async (id: string, updates: Partial<QuestionSession>) => {
      const oldSession = questionSessions.find(s => s.id === id);
      if (!oldSession) return;

      const newQuestionsCount = updates.questionsCount ?? oldSession.questionsCount;
      const newCorrectAnswers = updates.correctAnswers ?? oldSession.correctAnswers;
      const questionsDiff = newQuestionsCount - oldSession.questionsCount;
      const correctDiff = newCorrectAnswers - oldSession.correctAnswers;

      const row: Record<string, any> = {};
      if (updates.questionsCount !== undefined) row.questions_count = updates.questionsCount;
      if (updates.correctAnswers !== undefined) row.correct_answers = updates.correctAnswers;
      if (updates.date !== undefined) row.date = updates.date;

      const { error } = await supabase.from('question_sessions').update(row).eq('id', id);
      if (error) throw error;

      // Update lesson counters
      if (questionsDiff !== 0 || correctDiff !== 0) {
        const lesson = findCurrentCycleLesson(oldSession.subjectId, oldSession.lessonNumber);
        if (lesson) {
          await supabase.from('lessons').update({
            questions_count: Math.max(0, lesson.questionsCount + questionsDiff),
            correct_answers: Math.max(0, lesson.correctAnswers + correctDiff),
          }).eq('id', lesson.id);
        }
      }
      invalidate();
    },
    [questionSessions, findCurrentCycleLesson, invalidate],
  );

  const deleteQuestionSession = useCallback(
    async (id: string) => {
      const session = questionSessions.find(s => s.id === id);
      if (!session) return;

      const { error } = await supabase.from('question_sessions').delete().eq('id', id);
      if (error) throw error;

      // Subtract from lesson counters
      const lesson = findCurrentCycleLesson(session.subjectId, session.lessonNumber);
      if (lesson) {
        await supabase.from('lessons').update({
          questions_count: Math.max(0, lesson.questionsCount - session.questionsCount),
          correct_answers: Math.max(0, lesson.correctAnswers - session.correctAnswers),
        }).eq('id', lesson.id);
      }
      invalidate();
    },
    [questionSessions, findCurrentCycleLesson, invalidate],
  );

  // ── Pomodoro ─────────────────────────────────────────────────────────────

  const addPomodoroSession = useCallback(
    async (session: PomodoroSession) => {
      if (!userId) return;
      const { error } = await supabase.from('pomodoro_sessions').insert({
        user_id: userId,
        subject_id: session.subjectId,
        lesson_number: session.lessonNumber,
        started_at: session.startedAt,
        duration: session.duration,
        completed: session.completed,
        date: session.date,
      });
      if (error) throw error;
      invalidate();
    },
    [userId, invalidate],
  );

  const deletePomodoroSession = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('pomodoro_sessions').delete().eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [invalidate],
  );

  // ── Computed values (same interface as before) ───────────────────────────

  const getSubjectsByContest = useCallback(
    (contestId: string) => {
      const list = subjects.filter(s => s.contestId === contestId);
      const seen = new Set<string>();
      return list.filter(s => {
        const key = s.name.trim().toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    },
    [subjects],
  );

  // Helper to get current cycle lessons only (deduplicated & merged by subject name & number)
  const currentCycleLessons = useMemo(() => {
    const list = lessons.filter(l => {
      const subject = subjects.find(s => s.id === l.subjectId || s.name.trim().toLowerCase() === l.subjectId.trim().toLowerCase());
      const contest = subject ? contests.find(c => c.id === subject.contestId) : null;
      const targetCycle = contest?.currentCycle ?? 1;
      return (l.cycle ?? 1) === targetCycle;
    });

    const map = new Map<string, Lesson>();
    list.forEach(l => {
      const subject = subjects.find(s => s.id === l.subjectId || s.name.trim().toLowerCase() === l.subjectId.trim().toLowerCase());
      const subjectNameKey = subject ? subject.name.trim().toLowerCase() : l.subjectId.trim().toLowerCase();
      const key = `${subjectNameKey}-${l.number}`;

      if (!map.has(key)) {
        map.set(key, { ...l, subjectId: subject ? subject.id : l.subjectId });
      } else {
        const existing = map.get(key)!;
        map.set(key, {
          ...existing,
          theoryCompleted: existing.theoryCompleted || l.theoryCompleted,
          reviewCompleted: existing.reviewCompleted || l.reviewCompleted,
          questionsCount: Math.max(existing.questionsCount || 0, l.questionsCount || 0),
          correctAnswers: Math.max(existing.correctAnswers || 0, l.correctAnswers || 0),
          name: existing.name || l.name,
        });
      }
    });
    return Array.from(map.values());
  }, [lessons, subjects, contests]);

  // Enrich current cycle lessons with question_sessions counters dynamically
  const enrichedCurrentCycleLessons = useMemo(() => {
    const subjectMap = new Map<string, string>(subjects.map(s => [s.id, s.name]));
    return currentCycleLessons.map(lesson => {
      const lessonSessions = questionSessions.filter(
        s => (s.subjectId === lesson.subjectId || subjectMap.get(s.subjectId) === subjectMap.get(lesson.subjectId)) && s.lessonNumber === lesson.number
      );
      const sessionQuestions = lessonSessions.reduce((acc, s) => acc + s.questionsCount, 0);
      const sessionCorrect = lessonSessions.reduce((acc, s) => acc + s.correctAnswers, 0);

      const questionsCount = Math.max(lesson.questionsCount ?? 0, sessionQuestions);
      const correctAnswers = sessionQuestions > 0 ? sessionCorrect : (lesson.correctAnswers ?? 0);

      let name = lesson.name && lesson.name.trim() !== '' ? lesson.name : '';
      if (!name) {
        const sName = subjectMap.get(lesson.subjectId);
        if (sName) {
          name = getLessonName(sName, lesson.number);
        }
      }

      return {
        ...lesson,
        name,
        questionsCount,
        correctAnswers,
      };
    });
  }, [currentCycleLessons, questionSessions, subjects]);

  const getLessonsBySubject = useCallback(
    (subjectId: string) => {
      const subject = subjects.find(
        s => s.id === subjectId || s.name.trim().toLowerCase() === subjectId.trim().toLowerCase()
      );
      const sefazDef = subject
        ? SEFAZ_BA_SUBJECTS.find(s => s.name.trim().toLowerCase() === subject.name.trim().toLowerCase())
        : null;
      const targetCount = sefazDef ? sefazDef.totalLessons : (subject?.totalLessons || 1);

      const rawList = enrichedCurrentCycleLessons
        .filter(l => {
          if (l.subjectId === subjectId) return true;
          if (subject) {
            const lSubj = subjects.find(s => s.id === l.subjectId || s.name.trim().toLowerCase() === l.subjectId.trim().toLowerCase());
            return lSubj && lSubj.name.trim().toLowerCase() === subject.name.trim().toLowerCase();
          }
          return false;
        })
        .sort((a, b) => a.number - b.number);

      const numberMap = new Map<number, Lesson>();
      rawList.forEach(l => {
        if (l.number <= targetCount) {
          if (!numberMap.has(l.number)) {
            numberMap.set(l.number, { ...l });
          } else {
            const existing = numberMap.get(l.number)!;
            numberMap.set(l.number, {
              ...existing,
              theoryCompleted: existing.theoryCompleted || l.theoryCompleted,
              reviewCompleted: existing.reviewCompleted || l.reviewCompleted,
              questionsCount: Math.max(existing.questionsCount || 0, l.questionsCount || 0),
              correctAnswers: Math.max(existing.correctAnswers || 0, l.correctAnswers || 0),
            });
          }
        }
      });

      // Apply LocalStorage fail-safe override
      const activeUserId = userId || 'default-user';
      numberMap.forEach((l, num) => {
        const sName = subject?.name.trim().toLowerCase();
        const lsTheory = localStorage.getItem(`lesson_flag_${userId}_${sName}_${num}_theory`) ?? localStorage.getItem(`lesson_flag_${activeUserId}_${sName}_${num}_theory`) ?? localStorage.getItem(`lesson_flag_default-user_${sName}_${num}_theory`);
        const lsReview = localStorage.getItem(`lesson_flag_${userId}_${sName}_${num}_review`) ?? localStorage.getItem(`lesson_flag_${activeUserId}_${sName}_${num}_review`) ?? localStorage.getItem(`lesson_flag_default-user_${sName}_${num}_review`);
        if (isBaselineCompletedLesson(subject?.name, num)) {
          l.theoryCompleted = true;
        } else if (lsTheory !== null) {
          l.theoryCompleted = l.theoryCompleted || lsTheory === 'true';
        }
        if (lsReview !== null) l.reviewCompleted = l.reviewCompleted || lsReview === 'true';
      });

      const result: Lesson[] = Array.from(numberMap.values());
      const seenNumbers = new Set<number>(result.map(r => r.number));

      if (subject) {
        for (let i = 1; i <= targetCount; i++) {
          if (!seenNumbers.has(i)) {
            const sName = subject.name.trim().toLowerCase();
            const lsTheory = localStorage.getItem(`lesson_flag_${userId}_${sName}_${i}_theory`) ?? localStorage.getItem(`lesson_flag_${activeUserId}_${sName}_${i}_theory`) ?? localStorage.getItem(`lesson_flag_default-user_${sName}_${i}_theory`);
            const lsReview = localStorage.getItem(`lesson_flag_${userId}_${sName}_${i}_review`) ?? localStorage.getItem(`lesson_flag_${activeUserId}_${sName}_${i}_review`) ?? localStorage.getItem(`lesson_flag_default-user_${sName}_${i}_review`);

            result.push({
              id: `${subject.id}-fallback-${i}`,
              subjectId: subject.id,
              number: i,
              name: getLessonName(subject.name, i),
              theoryCompleted: isBaselineCompletedLesson(subject.name, i) || lsTheory === 'true',
              reviewCompleted: lsReview === 'true',
              questionsCount: 0,
              correctAnswers: 0,
              cycle: 1,
            });
          }
        }
      }

      result.sort((a, b) => a.number - b.number);
      return result;
    },
    [enrichedCurrentCycleLessons, subjects],
  );

  const getSubjectProgress = useCallback(
    (subjectId: string) => {
      const subjectLessons = getLessonsBySubject(subjectId);
      const totalLessons = subjectLessons.length;
      const theoryCompleted = subjectLessons.filter(l => l.theoryCompleted).length;
      const reviewCompleted = subjectLessons.filter(l => l.reviewCompleted).length;
      const fullyCompleted = subjectLessons.filter(l => l.theoryCompleted && l.reviewCompleted && l.questionsCount > 0).length;
      const lessonsWithQuestions = subjectLessons.filter(l => l.questionsCount > 0).length;
      const totalQuestions = subjectLessons.reduce((acc, l) => acc + (l.questionsCount || 0), 0);
      const totalCorrect = subjectLessons.reduce((acc, l) => acc + (l.correctAnswers || 0), 0);
      const performance = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

      return {
        completedLessons: theoryCompleted,
        totalLessons,
        theoryCompleted,
        reviewCompleted,
        fullyCompleted,
        lessonsWithQuestions,
        theoryProgress: totalLessons > 0 ? (theoryCompleted / totalLessons) * 100 : 0,
        reviewProgress: totalLessons > 0 ? (reviewCompleted / totalLessons) * 100 : 0,
        questionsLessonsProgress: totalLessons > 0 ? (lessonsWithQuestions / totalLessons) * 100 : 0,
        completeProgress: totalLessons > 0 ? (fullyCompleted / totalLessons) * 100 : 0,
        progress: totalLessons > 0 ? (theoryCompleted / totalLessons) * 100 : 0,
        totalQuestions,
        totalCorrect,
        performance,
      };
    },
    [getLessonsBySubject],
  );

  const getOverallProgress = useCallback(() => {
    const allOfficialLessons = subjects.flatMap(s => getLessonsBySubject(s.id));
    const totalLessons = allOfficialLessons.length > 0 ? Math.min(235, allOfficialLessons.length) : 235;
    const completedLessons = allOfficialLessons.filter(l => l.theoryCompleted || l.reviewCompleted).length;

    const totalQuestions = allOfficialLessons.reduce((acc, l) => acc + l.questionsCount, 0);
    const totalCorrect = allOfficialLessons.reduce((acc, l) => acc + l.correctAnswers, 0);
    const performance = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

    return { totalLessons, completedLessons, progress: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0, totalQuestions, totalCorrect, performance };
  }, [subjects, getLessonsBySubject]);

  const getWeakSubjects = useCallback(
    (limit = 3) =>
      activeSubjects
        .map(subject => ({ subject, ...getSubjectProgress(subject.id) }))
        .filter(s => s.totalQuestions > 0)
        .sort((a, b) => a.performance - b.performance)
        .slice(0, limit),
    [activeSubjects, getSubjectProgress],
  );

  const getScheduleEventsByDate = useCallback(
    (date: string) => scheduleEvents.filter(e => e.date === date),
    [scheduleEvents],
  );

  const getUpcomingEvents = useCallback(
    (limit = 5) => {
      const today = getLocalDateString();
      return scheduleEvents
        .filter(e => e.date >= today && !e.completed)
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(0, limit);
    },
    [scheduleEvents],
  );

  const getTodayStudyTime = useCallback(() => {
    const today = getLocalDateString();
    return pomodoroSessions
      .filter(s => (s.date ? s.date.split('T')[0] : '') === today && s.completed)
      .reduce((acc, s) => acc + s.duration, 0);
  }, [pomodoroSessions]);

  const getStudyTimeBySubject = useCallback(
    (subjectId: string) =>
      pomodoroSessions
        .filter(s => s.subjectId === subjectId && s.completed)
        .reduce((acc, s) => acc + s.duration, 0),
    [pomodoroSessions],
  );

  const resetData = useCallback(async () => {
    if (!userId) return;
    await supabase.from('contests').delete().eq('user_id', userId);
    invalidate();
  }, [userId, invalidate]);

  // ── Cycle management ────────────────────────────────────────────────────

  const startNewCycle = useCallback(
    async (contestId: string) => {
      if (!userId) return;
      const contest = contests.find(c => c.id === contestId);
      if (!contest) return;

      const newCycle = contest.currentCycle + 1;

      // Get current cycle lessons for this contest's subjects
      const contestSubjects = subjects.filter(s => s.contestId === contestId);
      const contestSubjectIds = new Set(contestSubjects.map(s => s.id));
      const currentLessons = lessons.filter(
        l => contestSubjectIds.has(l.subjectId) && l.cycle === contest.currentCycle
      );

      // Duplicate lessons with reset flags for new cycle
      const newLessonRows = currentLessons.map(l => ({
        user_id: userId,
        subject_id: l.subjectId,
        number: l.number,
        name: l.name || '',
        theory_completed: false,
        review_completed: false,
        questions_count: 0,
        correct_answers: 0,
        cycle: newCycle,
      }));

      // Insert new lessons in batches
      for (let i = 0; i < newLessonRows.length; i += 100) {
        const batch = newLessonRows.slice(i, i + 100);
        const { error } = await supabase.from('lessons').insert(batch);
        if (error) throw error;
      }

      // Update contest current_cycle
      const { error } = await supabase
        .from('contests')
        .update({ current_cycle: newCycle } as any)
        .eq('id', contestId);
      if (error) throw error;

      invalidate();
    },
    [userId, contests, subjects, lessons, invalidate],
  );

  const getCycleHistory = useCallback(
    (contestId: string) => {
      const contest = contests.find(c => c.id === contestId);
      if (!contest) return [];

      const contestSubjects = subjects.filter(s => s.contestId === contestId);
      const contestSubjectIds = new Set(contestSubjects.map(s => s.id));
      const contestLessons = lessons.filter(l => contestSubjectIds.has(l.subjectId));

      // Group lessons by cycle
      const cycleMap = new Map<number, typeof contestLessons>();
      for (const lesson of contestLessons) {
        const cycle = lesson.cycle ?? 1;
        if (!cycleMap.has(cycle)) cycleMap.set(cycle, []);
        const list = cycleMap.get(cycle);
        if (list) list.push(lesson);
      }

      // Build history for past cycles only
      const history: Array<{
        cycle: number;
        totalLessons: number;
        theoryCompleted: number;
        reviewCompleted: number;
        theoryProgress: number;
        reviewProgress: number;
      }> = [];

      for (const [cycle, cycleLessons] of cycleMap.entries()) {
        if (cycle >= (contest.currentCycle)) continue; // Skip current cycle
        const total = cycleLessons.length;
        const theory = cycleLessons.filter(l => l.theoryCompleted).length;
        const review = cycleLessons.filter(l => l.reviewCompleted).length;
        history.push({
          cycle,
          totalLessons: total,
          theoryCompleted: theory,
          reviewCompleted: review,
          theoryProgress: total > 0 ? (theory / total) * 100 : 0,
          reviewProgress: total > 0 ? (review / total) * 100 : 0,
        });
      }

      return history.sort((a, b) => b.cycle - a.cycle);
    },
    [contests, subjects, lessons],
  );

  const syncSefazSchedule = useCallback(async () => {
    if (!userId) return;
    setSeeding(true);
    try {
      await supabase.from('schedule_events').delete().eq('user_id', userId);

      const { data: subData } = await supabase.from('subjects').select('*').eq('user_id', userId);
      const currentSubjects = (subData ?? []).map(rowToSubject);

      const subjectMap = new Map<string, string>();
      currentSubjects.forEach(s => subjectMap.set(s.name.trim().toLowerCase(), s.id));

      const subjectsData = [
        { name: 'Contabilidade Geral', count: 31 },
        { name: 'Direito Administrativo', count: 25 },
        { name: 'Direito Constitucional', count: 21 },
        { name: 'Estatística', count: 20 },
        { name: 'Contabilidade Aplicada ao Setor Público (CASP)', count: 19 },
        { name: 'Direito Tributário', count: 19 },
        { name: 'Auditoria', count: 17 },
        { name: 'Economia', count: 16 },
        { name: 'Matemática Financeira', count: 16 },
        { name: 'Língua Portuguesa', count: 16 },
        { name: 'Administração, Economia e Finanças Públicas', count: 13 },
        { name: 'Informática Básica', count: 12 },
        { name: 'Noções de Igualdade Racial', count: 10 },
      ];

      const lessonQueues: Record<string, Array<{ subjectName: string; number: number }>> = {};
      subjectsData.forEach(s => {
        lessonQueues[s.name] = [];
        for (let i = 1; i <= s.count; i++) {
          lessonQueues[s.name].push({ subjectName: s.name, number: i });
        }
      });

      const subjectRotation = [
        'Contabilidade Geral',
        'Direito Tributário',
        'Direito Administrativo',
        'Língua Portuguesa',
        'Direito Constitucional',
        'Contabilidade Geral',
        'Auditoria',
        'Contabilidade Aplicada ao Setor Público (CASP)',
        'Direito Tributário',
        'Estatística',
        'Economia',
        'Direito Administrativo',
        'Matemática Financeira',
        'Administração, Economia e Finanças Públicas',
        'Direito Constitucional',
        'Informática Básica',
        'Noções de Igualdade Racial',
      ];

      const allLessonsOrdered: Array<{ subjectName: string; number: number }> = [];
      let rotationIndex = 0;

      while (Object.values(lessonQueues).some(q => q.length > 0)) {
        const targetSubject = subjectRotation[rotationIndex % subjectRotation.length];
        if (lessonQueues[targetSubject] && lessonQueues[targetSubject].length > 0) {
          allLessonsOrdered.push(lessonQueues[targetSubject].shift()!);
        } else {
          const remainingSubject = Object.keys(lessonQueues).find(k => lessonQueues[k].length > 0);
          if (remainingSubject) {
            allLessonsOrdered.push(lessonQueues[remainingSubject].shift()!);
          }
        }
        rotationIndex++;
      }

      const formatDateStr = (d: Date) => {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      const startDate = new Date(2026, 7, 10);
      let currentDate = new Date(startDate);
      let lessonIdx = 0;
      const eventsToInsert: any[] = [];

      while (currentDate <= new Date(2026, 10, 15) && lessonIdx < allLessonsOrdered.length) {
        const isSunday = currentDate.getDay() === 0;
        const dateStr = formatDateStr(currentDate);

        const l1 = allLessonsOrdered[lessonIdx++];
        if (l1) {
          const subjId = subjectMap.get(l1.subjectName.toLowerCase());
          if (subjId) {
            const lessonTitle = getLessonName(l1.subjectName, l1.number);
            eventsToInsert.push({
              user_id: userId,
              subject_id: subjId,
              date: dateStr,
              lesson_number: l1.number,
              type: 'theory',
              completed: false,
              description: `${l1.subjectName} - Aula ${l1.number}: ${lessonTitle}`,
              shift: 'Manhã',
            });
          }
        }

        if (!isSunday) {
          const l2 = allLessonsOrdered[lessonIdx++];
          if (l2) {
            const subjId = subjectMap.get(l2.subjectName.toLowerCase());
            if (subjId) {
              const lessonTitle = getLessonName(l2.subjectName, l2.number);
              eventsToInsert.push({
                user_id: userId,
                subject_id: subjId,
                date: dateStr,
                lesson_number: l2.number,
                type: 'theory',
                completed: false,
                description: `${l2.subjectName} - Aula ${l2.number}: ${lessonTitle}`,
                shift: 'Tarde',
              });
            }
          }
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }

      for (let i = 0; i < eventsToInsert.length; i += 100) {
        const batch = eventsToInsert.slice(i, i + 100);
        await supabase.from('schedule_events').insert(batch);
      }

      invalidate();
    } finally {
      setSeeding(false);
    }
  }, [userId, invalidate]);

  const resetToSefazBA = useCallback(async () => {
    setSeeding(true);
    try {
      if (userId) {
        const { data: subData } = await supabase.from('subjects').select('*').eq('user_id', userId);
        const allSubs = subData ?? [];
        const sefazNames = new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase()));

        const nonSefazSubs = allSubs.filter(s => !sefazNames.has(s.name.trim().toLowerCase()));
        if (nonSefazSubs.length > 0) {
          const nonSefazIds = nonSefazSubs.map(s => s.id);
          for (let i = 0; i < nonSefazIds.length; i += 100) {
            const batch = nonSefazIds.slice(i, i + 100);
            await supabase.from('schedule_events').delete().in('subject_id', batch);
            await supabase.from('question_sessions').delete().in('subject_id', batch);
            await supabase.from('pomodoro_sessions').delete().in('subject_id', batch);
            await supabase.from('lessons').delete().in('subject_id', batch);
            await supabase.from('subjects').delete().in('id', batch);
          }
        }

        let activeContestId = contests[0]?.id;
        if (!activeContestId) {
          const { data: contestRow } = await supabase
            .from('contests')
            .insert({ user_id: userId, name: 'SEFAZ-BA 2025' })
            .select('id')
            .single();
          if (contestRow) activeContestId = contestRow.id;
        }

        const existingNames = new Set(allSubs.filter(s => sefazNames.has(s.name.trim().toLowerCase())).map(s => s.name.trim().toLowerCase()));
        const missingDefs = SEFAZ_BA_SUBJECTS.filter(s => !existingNames.has(s.name.trim().toLowerCase()));

        if (missingDefs.length > 0 && activeContestId) {
          const rowsToInsert = missingDefs.map((s, i) => ({
            user_id: userId,
            contest_id: activeContestId,
            name: s.name,
            total_lessons: s.totalLessons,
            color: s.color || SUBJECT_COLORS[i % SUBJECT_COLORS.length],
          }));
          await supabase.from('subjects').insert(rowsToInsert);
        }
      }

      hasSeededRef.current = false;
      invalidate();
      toast.success('Matérias redefinidas com sucesso: 13 Matérias SEFAZ-BA (235 Aulas)!');
    } catch (e) {
      console.error('Reset to SEFAZ-BA failed', e);
      toast.error('Erro ao redefinir matérias');
    } finally {
      setSeeding(false);
    }
  }, [userId, contests, invalidate]);

  return {
    data,
    isLoading,
    syncSefazSchedule,
    resetToSefazBA,
    // Contest
    addContest,
    updateContest,
    deleteContest,
    // Subject
    addSubject,
    updateSubject,
    deleteSubject,
    // Lesson
    addLesson,
    updateLesson,
    deleteLesson,
    // Schedule
    addScheduleEvent,
    updateScheduleEvent,
    deleteScheduleEvent,
    // Questions
    addQuestionSession,
    updateQuestionSession,
    deleteQuestionSession,
    // Pomodoro
    addPomodoroSession,
    deletePomodoroSession,
    getTodayStudyTime,
    getStudyTimeBySubject,
    // Getters
    getSubjectsByContest,
    getLessonsBySubject,
    getSubjectProgress,
    getOverallProgress,
    getWeakSubjects,
    getScheduleEventsByDate,
    getUpcomingEvents,
    // Cycles
    startNewCycle,
    getCycleHistory,
    // Utils
    resetData,
  };
}
