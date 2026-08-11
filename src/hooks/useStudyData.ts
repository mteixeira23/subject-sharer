import { useCallback, useMemo, useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
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

export function useStudyData() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const userId = user?.id;
  const [seeding, setSeeding] = useState(false);

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

  const { data: subjects = [], isLoading: loadingSubjects } = useQuery({
    queryKey: ['study', userId, 'subjects'],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('subjects').select('*').eq('user_id', userId);
      if (error) throw error;
      return (data ?? []).map(rowToSubject);
    },
    enabled: !!userId,
  });

  const { data: lessons = [], isLoading: loadingLessons } = useQuery({
    queryKey: ['study', userId, 'lessons'],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase.from('lessons').select('*').eq('user_id', userId);
      if (error) throw error;
      return (data ?? []).map(rowToLesson);
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
      const sefazNames = new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase()));
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
        const currentSubjects = [...subjects];

        if (activeContestId) {
          // A.0) Purge non-SEFAZ-BA subjects from Supabase database
          const sefazNames = new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase()));
          const nonSefazSubjects = currentSubjects.filter(s => !sefazNames.has(s.name.trim().toLowerCase()));

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
          const missingSubjects = SEFAZ_BA_SUBJECTS.filter(
            s => !existingSubjectNames.has(s.name.trim().toLowerCase())
          );

          if (missingSubjects.length > 0) {
            const subjectRows = missingSubjects.map((s, i) => ({
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

            const existingLessonNumbers = new Set(
              lessons.filter(l => l.subjectId === subj.id).map(l => l.number)
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

        // C.2) Purge duplicate lesson rows from Supabase
        const lessonKeyMap = new Map<string, string[]>();
        for (const l of lessons) {
          const key = `${l.subjectId}-${l.number}`;
          if (!lessonKeyMap.has(key)) {
            lessonKeyMap.set(key, []);
          }
          lessonKeyMap.get(key)!.push(l.id);
        }

        const duplicateLessonIds: string[] = [];
        for (const ids of lessonKeyMap.values()) {
          if (ids.length > 1) {
            duplicateLessonIds.push(...ids.slice(1));
          }
        }

        if (duplicateLessonIds.length > 0) {
          for (let i = 0; i < duplicateLessonIds.length; i += 100) {
            const batch = duplicateLessonIds.slice(i, i + 100);
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

  // ── Active subjects (Strictly 13 SEFAZ-BA subjects) ───────────────────
  const activeSubjects = useMemo(() => {
    const sefazNames = new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase()));
    const list = subjects.filter(s => sefazNames.has(s.name.trim().toLowerCase()));
    const seen = new Set<string>();
    return list.filter(s => {
      const key = s.name.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [subjects]);

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
    async (id: string, updates: Partial<Lesson>) => {
      if (!userId) return;

      const row: Record<string, any> = {};
      if (updates.name !== undefined) row.name = updates.name;
      if (updates.theoryCompleted !== undefined) row.theory_completed = updates.theoryCompleted;
      if (updates.reviewCompleted !== undefined) row.review_completed = updates.reviewCompleted;
      if (updates.questionsCount !== undefined) row.questions_count = updates.questionsCount;
      if (updates.correctAnswers !== undefined) row.correct_answers = updates.correctAnswers;

      if (id.includes('-fallback-')) {
        const parts = id.split('-fallback-');
        const subjectId = parts[0];
        const number = parseInt(parts[1], 10);
        const subj = subjects.find(s => s.id === subjectId);

        const { error } = await supabase.from('lessons').upsert(
          {
            user_id: userId,
            subject_id: subjectId,
            number: number,
            name: updates.name || (subj ? getLessonName(subj.name, number) : `Aula ${String(number - 1).padStart(2, '0')}`),
            theory_completed: updates.theoryCompleted ?? false,
            review_completed: updates.reviewCompleted ?? false,
            questions_count: updates.questionsCount ?? 0,
            correct_answers: updates.correctAnswers ?? 0,
            cycle: 1,
          },
          { onConflict: 'user_id,subject_id,number' }
        );
        if (error) {
          await supabase.from('lessons').insert({
            user_id: userId,
            subject_id: subjectId,
            number: number,
            name: updates.name || (subj ? getLessonName(subj.name, number) : `Aula ${String(number - 1).padStart(2, '0')}`),
            theory_completed: updates.theoryCompleted ?? false,
            review_completed: updates.reviewCompleted ?? false,
            questions_count: updates.questionsCount ?? 0,
            correct_answers: updates.correctAnswers ?? 0,
            cycle: 1,
          });
        }
      } else {
        const { error } = await supabase.from('lessons').update(row).eq('id', id);
        if (error) throw error;
      }
      invalidate();
    },
    [userId, subjects, invalidate],
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

  // Helper to get current cycle lessons only (deduplicated by subjectId & number)
  const currentCycleLessons = useMemo(() => {
    const list = lessons.filter(l => {
      const subject = subjects.find(s => s.id === l.subjectId);
      const contest = subject ? contests.find(c => c.id === subject.contestId) : null;
      const targetCycle = contest?.currentCycle ?? 1;
      return (l.cycle ?? 1) === targetCycle;
    });

    const seen = new Set<string>();
    return list.filter(l => {
      const key = `${l.subjectId}-${l.number}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [lessons, subjects, contests]);

  // Enrich current cycle lessons with question_sessions counters dynamically
  const enrichedCurrentCycleLessons = useMemo(() => {
    const subjectMap = new Map<string, string>(subjects.map(s => [s.id, s.name]));
    return currentCycleLessons.map(lesson => {
      const lessonSessions = questionSessions.filter(
        s => s.subjectId === lesson.subjectId && s.lessonNumber === lesson.number
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
      const subject = subjects.find(s => s.id === subjectId);
      const sefazDef = subject
        ? SEFAZ_BA_SUBJECTS.find(s => s.name.trim().toLowerCase() === subject.name.trim().toLowerCase())
        : null;
      const targetCount = sefazDef ? sefazDef.totalLessons : (subject?.totalLessons || 1);

      const rawList = enrichedCurrentCycleLessons
        .filter(l => l.subjectId === subjectId)
        .sort((a, b) => a.number - b.number);

      const seenNumbers = new Set<number>();
      const result: Lesson[] = [];

      rawList.forEach(l => {
        if (l.number <= targetCount && !seenNumbers.has(l.number)) {
          seenNumbers.add(l.number);
          result.push(l);
        }
      });

      if (subject) {
        for (let i = 1; i <= targetCount; i++) {
          if (!seenNumbers.has(i)) {
            result.push({
              id: `${subjectId}-fallback-${i}`,
              subjectId: subjectId,
              number: i,
              name: getLessonName(subject.name, i),
              theoryCompleted: false,
              reviewCompleted: false,
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
      const totalQuestions = subjectLessons.reduce((acc, l) => acc + l.questionsCount, 0);
      const totalCorrect = subjectLessons.reduce((acc, l) => acc + l.correctAnswers, 0);
      const performance = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

      return {
        totalLessons,
        theoryCompleted,
        reviewCompleted,
        fullyCompleted,
        lessonsWithQuestions,
        theoryProgress: totalLessons > 0 ? (theoryCompleted / totalLessons) * 100 : 0,
        reviewProgress: totalLessons > 0 ? (reviewCompleted / totalLessons) * 100 : 0,
        questionsLessonsProgress: totalLessons > 0 ? (lessonsWithQuestions / totalLessons) * 100 : 0,
        completeProgress: totalLessons > 0 ? (fullyCompleted / totalLessons) * 100 : 0,
        completedLessons: fullyCompleted,
        progress: totalLessons > 0 ? (fullyCompleted / totalLessons) * 100 : 0,
        totalQuestions,
        totalCorrect,
        performance,
      };
    },
    [getLessonsBySubject],
  );

  const getOverallProgress = useCallback(() => {
    const allOfficialLessons = activeSubjects.flatMap(s => getLessonsBySubject(s.id));
    const totalLessons = allOfficialLessons.length;
    const completedLessons = allOfficialLessons.filter(l => l.theoryCompleted && l.reviewCompleted).length;

    const totalQuestions = allOfficialLessons.reduce((acc, l) => acc + l.questionsCount, 0);
    const totalCorrect = allOfficialLessons.reduce((acc, l) => acc + l.correctAnswers, 0);
    const performance = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

    return { totalLessons, completedLessons, progress: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0, totalQuestions, totalCorrect, performance };
  }, [activeSubjects, getLessonsBySubject]);

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

  return {
    data,
    isLoading,
    syncSefazSchedule,
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
