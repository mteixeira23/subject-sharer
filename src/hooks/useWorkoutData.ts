import { useCallback, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { WorkoutData, WorkoutType, WorkoutExercise, WorkoutLog, WeeklyRoutine, RoutineDayConfig } from '@/types/health';
import { Shift } from '@/lib/shifts';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, startOfMonth, endOfMonth, getDay } from 'date-fns';
import { useAuth } from '@/contexts/AuthContext';

const DEFAULT_ROUTINE: WeeklyRoutine = { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null };

// ── Row mappers ──────────────────────────────────────────────────────────────

function rowToWorkoutType(r: any): WorkoutType {
  return {
    id: r.id,
    name: r.name,
    color: r.color,
    exercises: (r.exercises ?? []) as WorkoutExercise[],
  };
}

function rowToLog(r: any): WorkoutLog {
  return {
    id: r.id,
    date: r.date,
    workoutTypeId: r.workout_type_id,
    exercises: (r.exercises ?? []) as WorkoutExercise[],
    notes: r.notes ?? undefined,
    shift: r.shift as Shift | undefined,
  };
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useWorkoutData() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const uid = user?.id;
  const today = format(new Date(), 'yyyy-MM-dd');

  // ── Queries ────────────────────────────────────────────────────────────────

  const typesQ = useQuery({
    queryKey: ['workout_types', uid],
    queryFn: async () => {
      const { data, error } = await supabase.from('workout_types').select('*').order('created_at');
      if (error) throw error;
      return (data ?? []).map(rowToWorkoutType);
    },
    enabled: !!uid,
  });

  const settingsQ = useQuery({
    queryKey: ['workout_settings', uid],
    queryFn: async () => {
      const { data, error } = await supabase.from('workout_settings').select('*').eq('user_id', uid!).maybeSingle();
      if (error) throw error;
      if (!data) return { weeklyRoutine: DEFAULT_ROUTINE, weeklyGoal: 5 };
      return {
        weeklyRoutine: (data.weekly_routine ?? DEFAULT_ROUTINE) as unknown as WeeklyRoutine,
        weeklyGoal: data.weekly_goal ?? 5,
      };
    },
    enabled: !!uid,
  });

  const logsQ = useQuery({
    queryKey: ['workout_logs', uid],
    queryFn: async () => {
      const { data, error } = await supabase.from('workout_logs').select('*').order('date', { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToLog);
    },
    enabled: !!uid,
  });

  const workoutTypes = typesQ.data ?? [];
  const weeklyRoutine = settingsQ.data?.weeklyRoutine ?? DEFAULT_ROUTINE;
  const weeklyGoal = settingsQ.data?.weeklyGoal ?? 5;
  const logs = logsQ.data ?? [];

  const data: WorkoutData = useMemo(
    () => ({ workoutTypes, weeklyRoutine, weeklyGoal, logs }),
    [workoutTypes, weeklyRoutine, weeklyGoal, logs],
  );

  // ── Helpers ────────────────────────────────────────────────────────────────

  async function upsertSettings(updates: { weekly_routine?: unknown; weekly_goal?: number }) {
    const payload = {
      user_id: uid!,
      weekly_routine: (updates.weekly_routine ?? weeklyRoutine) as any,
      weekly_goal: updates.weekly_goal ?? weeklyGoal,
    };
    const { error } = await supabase.from('workout_settings').upsert(
      payload as any,
      { onConflict: 'user_id' },
    );
    if (error) throw error;
  }

  // ── Mutations ──────────────────────────────────────────────────────────────

  const addTypeMut = useMutation({
    mutationFn: async (wt: Omit<WorkoutType, 'id'>) => {
      const { error } = await supabase.from('workout_types').insert({
        user_id: uid!,
        name: wt.name,
        color: wt.color,
        exercises: wt.exercises as any,
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workout_types', uid] }),
  });

  const updateTypeMut = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Omit<WorkoutType, 'id'>> }) => {
      const payload: any = {};
      if (updates.name !== undefined) payload.name = updates.name;
      if (updates.color !== undefined) payload.color = updates.color;
      if (updates.exercises !== undefined) payload.exercises = updates.exercises;
      const { error } = await supabase.from('workout_types').update(payload).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workout_types', uid] }),
  });

  const deleteTypeMut = useMutation({
    mutationFn: async (id: string) => {
      // Clean routine references
      const newRoutine = { ...weeklyRoutine };
      for (let d = 0; d < 7; d++) {
        const cfg = newRoutine[d];
        if (cfg && cfg.typeId === id) newRoutine[d] = null;
      }
      await upsertSettings({ weekly_routine: newRoutine });
      const { error } = await supabase.from('workout_types').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['workout_types', uid] });
      qc.invalidateQueries({ queryKey: ['workout_settings', uid] });
      qc.invalidateQueries({ queryKey: ['workout_logs', uid] });
    },
  });

  const setRoutineMut = useMutation({
    mutationFn: async (routine: WeeklyRoutine) => upsertSettings({ weekly_routine: routine }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workout_settings', uid] }),
  });

  const setGoalMut = useMutation({
    mutationFn: async (goal: number) => upsertSettings({ weekly_goal: goal }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workout_settings', uid] }),
  });

  const logWorkoutMut = useMutation({
    mutationFn: async (log: Omit<WorkoutLog, 'id'>) => {
      // Delete existing log for date, then insert
      await supabase.from('workout_logs').delete().eq('user_id', uid!).eq('date', log.date);
      const { error } = await supabase.from('workout_logs').insert({
        user_id: uid!,
        date: log.date,
        workout_type_id: log.workoutTypeId,
        exercises: log.exercises as any,
        notes: log.notes ?? null,
        shift: log.shift ?? null,
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workout_logs', uid] }),
  });

  const deleteLogMut = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('workout_logs').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['workout_logs', uid] }),
  });

  // ── Public API ─────────────────────────────────────────────────────────────

  const addWorkoutType = useCallback((wt: Omit<WorkoutType, 'id'>) => addTypeMut.mutate(wt), [addTypeMut]);
  const updateWorkoutType = useCallback((id: string, updates: Partial<Omit<WorkoutType, 'id'>>) => updateTypeMut.mutate({ id, updates }), [updateTypeMut]);
  const deleteWorkoutType = useCallback((id: string) => deleteTypeMut.mutate(id), [deleteTypeMut]);
  const setWeeklyRoutine = useCallback((routine: WeeklyRoutine) => setRoutineMut.mutate(routine), [setRoutineMut]);
  const setWeeklyGoal = useCallback((goal: number) => setGoalMut.mutate(goal), [setGoalMut]);
  const logWorkout = useCallback((log: Omit<WorkoutLog, 'id'>) => logWorkoutMut.mutate(log), [logWorkoutMut]);
  const deleteLog = useCallback((id: string) => deleteLogMut.mutate(id), [deleteLogMut]);

  const getLogForDate = useCallback((date: string) => logs.find(l => l.date === date) ?? null, [logs]);

  const getTodaySuggestedWorkout = useCallback((): { type: WorkoutType; shift?: Shift } | null => {
    const dow = getDay(new Date());
    const cfg = weeklyRoutine[dow];
    if (!cfg) return null;
    const wt = workoutTypes.find(t => t.id === cfg.typeId);
    if (!wt) return null;
    return { type: wt, shift: cfg.shift };
  }, [weeklyRoutine, workoutTypes]);

  const getWeekFrequency = useCallback((): number => {
    const now = new Date();
    const start = startOfWeek(now, { weekStartsOn: 1 });
    const end = endOfWeek(now, { weekStartsOn: 1 });
    const days = eachDayOfInterval({ start, end }).map(d => format(d, 'yyyy-MM-dd'));
    return logs.filter(l => days.includes(l.date)).length;
  }, [logs]);

  const getMonthLogs = useCallback((year: number, month: number) => {
    const start = startOfMonth(new Date(year, month));
    const end = endOfMonth(start);
    const days = eachDayOfInterval({ start, end }).map(d => format(d, 'yyyy-MM-dd'));
    return logs.filter(l => days.includes(l.date));
  }, [logs]);

  return {
    data,
    today,
    addWorkoutType,
    updateWorkoutType,
    deleteWorkoutType,
    setWeeklyRoutine,
    setWeeklyGoal,
    logWorkout,
    deleteLog,
    getLogForDate,
    getTodaySuggestedWorkout,
    getWeekFrequency,
    getMonthLogs,
  };
}
