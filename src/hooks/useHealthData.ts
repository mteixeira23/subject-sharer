import { useCallback, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Habit, HabitCompletion, MoodEntry, MoodLevel, HabitRecurrenceMode } from '@/types/health';
import { format, getDay, parseISO } from 'date-fns';
import { useAuth } from '@/contexts/AuthContext';
import { Shift } from '@/lib/shifts';

// ── Helpers ──────────────────────────────────────────────────────────────────

export function isHabitActiveOnDate(habit: Habit, dateStr: string): boolean {
  const mode = habit.recurrenceMode ?? 'daily';
  if (mode === 'daily') return true;
  if (mode === 'weekly') {
    return (habit.recurrenceDays ?? []).includes(getDay(parseISO(dateStr)));
  }
  return true;
}

// ── Row mappers ──────────────────────────────────────────────────────────────

function rowToHabit(r: any): Habit {
  return {
    id: r.id,
    name: r.name,
    icon: r.icon,
    createdAt: r.created_at,
    shift: r.shift as Shift | undefined,
    recurrenceMode: (r.recurrence_mode ?? 'daily') as HabitRecurrenceMode,
    recurrenceDays: r.recurrence_days ?? undefined,
  };
}

function rowToCompletion(r: any): HabitCompletion {
  return { habitId: r.habit_id, date: r.date };
}

function rowToMood(r: any): MoodEntry {
  return { date: r.date, level: r.level as MoodLevel, note: r.note ?? undefined };
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useHealthData() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const uid = user?.id;
  const today = format(new Date(), 'yyyy-MM-dd');

  // ── Queries ────────────────────────────────────────────────────────────────

  const habitsQ = useQuery({
    queryKey: ['habits', uid],
    queryFn: async () => {
      const { data, error } = await supabase.from('habits').select('*').order('created_at');
      if (error) throw error;
      return (data ?? []).map(rowToHabit);
    },
    enabled: !!uid,
  });

  const completionsQ = useQuery({
    queryKey: ['habit_completions', uid],
    queryFn: async () => {
      const { data, error } = await supabase.from('habit_completions').select('*');
      if (error) throw error;
      return (data ?? []).map(rowToCompletion);
    },
    enabled: !!uid,
  });

  const moodsQ = useQuery({
    queryKey: ['mood_entries', uid],
    queryFn: async () => {
      const { data, error } = await supabase.from('mood_entries').select('*').order('date', { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToMood);
    },
    enabled: !!uid,
  });

  const habits: Habit[] = habitsQ.data ?? [];
  const completions: HabitCompletion[] = completionsQ.data ?? [];
  const moods: MoodEntry[] = moodsQ.data ?? [];

  const data = useMemo(() => ({ habits, completions, moods }), [habits, completions, moods]);

  function invalidateAll() {
    qc.invalidateQueries({ queryKey: ['habits', uid] });
    qc.invalidateQueries({ queryKey: ['habit_completions', uid] });
    qc.invalidateQueries({ queryKey: ['mood_entries', uid] });
  }

  // ── Mutations ──────────────────────────────────────────────────────────────

  const addHabitMut = useMutation({
    mutationFn: async (habit: Omit<Habit, 'id' | 'createdAt'>) => {
      const { error } = await supabase.from('habits').insert({
        user_id: uid!,
        name: habit.name,
        icon: habit.icon,
        recurrence_mode: habit.recurrenceMode,
        recurrence_days: habit.recurrenceDays ?? null,
        shift: habit.shift ?? null,
      });
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['habits', uid] }),
  });

  const updateHabitMut = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Omit<Habit, 'id' | 'createdAt'>> }) => {
      const payload: any = {};
      if (updates.name !== undefined) payload.name = updates.name;
      if (updates.icon !== undefined) payload.icon = updates.icon;
      if (updates.recurrenceMode !== undefined) payload.recurrence_mode = updates.recurrenceMode;
      if (updates.recurrenceDays !== undefined) payload.recurrence_days = updates.recurrenceDays ?? null;
      if (updates.shift !== undefined) payload.shift = updates.shift ?? null;
      const { error } = await supabase.from('habits').update(payload).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['habits', uid] }),
  });

  const deleteHabitMut = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('habits').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => invalidateAll(),
  });

  const toggleCompletionMut = useMutation({
    mutationFn: async ({ habitId, date }: { habitId: string; date: string }) => {
      const exists = completions.find(c => c.habitId === habitId && c.date === date);
      if (exists) {
        const { error } = await supabase
          .from('habit_completions')
          .delete()
          .eq('habit_id', habitId)
          .eq('date', date);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('habit_completions').insert({
          user_id: uid!,
          habit_id: habitId,
          date,
        });
        if (error) throw error;
      }
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['habit_completions', uid] }),
  });

  const setMoodMut = useMutation({
    mutationFn: async ({ level, note, date }: { level: MoodLevel; note?: string; date: string }) => {
      const { error } = await supabase.from('mood_entries').upsert(
        { user_id: uid!, date, level, note: note ?? null },
        { onConflict: 'user_id,date' },
      );
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['mood_entries', uid] }),
  });

  // ── Public API (same surface as before) ────────────────────────────────────

  const addHabit = useCallback(
    (habit: Omit<Habit, 'id' | 'createdAt'>) => addHabitMut.mutate(habit),
    [addHabitMut],
  );

  const updateHabit = useCallback(
    (id: string, updates: Partial<Omit<Habit, 'id' | 'createdAt'>>) => updateHabitMut.mutate({ id, updates }),
    [updateHabitMut],
  );

  const deleteHabit = useCallback(
    (id: string) => deleteHabitMut.mutate(id),
    [deleteHabitMut],
  );

  const toggleHabitCompletion = useCallback(
    (habitId: string, date: string = today) => toggleCompletionMut.mutate({ habitId, date }),
    [toggleCompletionMut, today],
  );

  const isHabitCompletedOn = useCallback(
    (habitId: string, date: string = today) =>
      completions.some(c => c.habitId === habitId && c.date === date),
    [completions, today],
  );

  const getHabitStreak = useCallback(
    (habitId: string): number => {
      let streak = 0;
      const d = new Date();
      const habit = habits.find(h => h.id === habitId);
      if (!habit) return 0;
      while (true) {
        const dateStr = format(d, 'yyyy-MM-dd');
        if (!isHabitActiveOnDate(habit, dateStr)) {
          d.setDate(d.getDate() - 1);
          continue;
        }
        if (!completions.some(c => c.habitId === habitId && c.date === dateStr)) break;
        streak++;
        d.setDate(d.getDate() - 1);
        if (streak > 365) break;
      }
      return streak;
    },
    [habits, completions],
  );

  const setMood = useCallback(
    (level: MoodLevel, note?: string, date: string = today) =>
      setMoodMut.mutate({ level, note, date }),
    [setMoodMut, today],
  );

  const getMoodForDate = useCallback(
    (date: string = today) => moods.find(m => m.date === date),
    [moods, today],
  );

  const getTodayCompletionCount = useCallback(() => {
    const todayActiveHabits = habits.filter(h => isHabitActiveOnDate(h, today));
    return completions.filter(
      c => c.date === today && todayActiveHabits.some(h => h.id === c.habitId),
    ).length;
  }, [habits, completions, today]);

  const getBestStreak = useCallback(() => {
    let best = { habitId: '', habitName: '', habitIcon: '', streak: 0 };
    for (const habit of habits) {
      const streak = getHabitStreak(habit.id);
      if (streak > best.streak) {
        best = { habitId: habit.id, habitName: habit.name, habitIcon: habit.icon, streak };
      }
    }
    return best;
  }, [habits, getHabitStreak]);

  return {
    data,
    today,
    addHabit,
    updateHabit,
    deleteHabit,
    toggleHabitCompletion,
    isHabitCompletedOn,
    getHabitStreak,
    getBestStreak,
    setMood,
    getMoodForDate,
    getTodayCompletionCount,
  };
}
