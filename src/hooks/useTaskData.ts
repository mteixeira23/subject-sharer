import { useCallback, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Task, TaskData, TaskPriority, PRIORITY_ORDER, RecurrenceMode } from '@/types/tasks';
import { format, isToday, isThisWeek, parseISO, getDay, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

const todayStr = () => format(new Date(), 'yyyy-MM-dd');

export function isTaskActiveOnDate(task: Task, dateStr: string): boolean {
  const mode = task.recurrenceMode ?? 'once';
  if (mode !== 'once' && task.dueDate && dateStr > task.dueDate) return false;
  if (mode === 'daily') return true;
  if (mode === 'weekly') {
    const dayOfWeek = getDay(parseISO(dateStr));
    return (task.recurrenceDays ?? []).includes(dayOfWeek);
  }
  return task.dueDate === dateStr;
}

export function isRecurringTaskDoneOn(task: Task, dateStr: string): boolean {
  return (task.completions ?? []).includes(dateStr);
}

function rowToTask(row: any): Task {
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? undefined,
    priority: (row.priority ?? 'Média') as TaskPriority,
    dueDate: row.due_date ?? undefined,
    completed: row.completed ?? false,
    createdAt: row.created_at,
    completedAt: row.completed_at ?? undefined,
    recurrenceMode: (row.recurrence_mode ?? 'once') as RecurrenceMode,
    recurrenceDays: row.recurrence_days ?? undefined,
    completions: row.completions ?? undefined,
    shift: row.shift ?? undefined,
  };
}

export function useTaskData() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const userId = user?.id;

  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ['tasks', userId],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToTask);
    },
    enabled: !!userId,
  });

  const data: TaskData = useMemo(() => ({ tasks }), [tasks]);

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['tasks', userId] });

  const addTask = useCallback(
    async (task: Omit<Task, 'id' | 'createdAt' | 'completed'>) => {
      if (!userId) return;
      const { error } = await supabase.from('tasks').insert({
        user_id: userId,
        title: task.title,
        description: task.description ?? null,
        priority: task.priority,
        due_date: task.dueDate ?? null,
        completed: false,
        recurrence_mode: task.recurrenceMode ?? 'once',
        recurrence_days: task.recurrenceDays ?? null,
        completions: null,
        shift: task.shift ?? null,
      });
      if (error) throw error;
      invalidate();
    },
    [userId],
  );

  const updateTask = useCallback(
    async (id: string, changes: Partial<Omit<Task, 'id' | 'createdAt'>>) => {
      // Optimistic update
      queryClient.setQueryData(['tasks', userId], (old: Task[] | undefined) => {
        if (!old) return old;
        return old.map(t => t.id === id ? { ...t, ...changes } : t);
      });

      const row: Record<string, any> = {};
      if (changes.title !== undefined) row.title = changes.title;
      if (changes.description !== undefined) row.description = changes.description;
      if (changes.priority !== undefined) row.priority = changes.priority;
      if (changes.dueDate !== undefined) row.due_date = changes.dueDate;
      if (changes.completed !== undefined) row.completed = changes.completed;
      if (changes.completedAt !== undefined) row.completed_at = changes.completedAt;
      if (changes.recurrenceMode !== undefined) row.recurrence_mode = changes.recurrenceMode;
      if (changes.recurrenceDays !== undefined) row.recurrence_days = changes.recurrenceDays;
      if (changes.completions !== undefined) row.completions = changes.completions;
      if (changes.shift !== undefined) row.shift = changes.shift;
      const { error } = await supabase.from('tasks').update(row).eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [userId],
  );

  const deleteTask = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('tasks').delete().eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [userId],
  );

  const toggleComplete = useCallback(
    async (id: string, dateStr?: string) => {
      const target = dateStr ?? todayStr();
      const task = tasks.find(t => t.id === id);
      if (!task) return;
      const mode = task.recurrenceMode ?? 'once';
      if (mode !== 'once') {
        const completions = task.completions ?? [];
        const alreadyDone = completions.includes(target);
        const newCompletions = alreadyDone
          ? completions.filter(d => d !== target)
          : [...completions, target];
        await updateTask(id, { completions: newCompletions } as any);
      } else {
        await updateTask(id, {
          completed: !task.completed,
          completedAt: !task.completed ? new Date().toISOString() : undefined,
        });
      }
    },
    [tasks, updateTask],
  );

  const getPendingCount = useCallback(() => {
    const today = todayStr();
    const todayDow = getDay(new Date());
    return tasks.filter(t => {
      const mode = t.recurrenceMode ?? 'once';
      if (mode === 'daily') return !isRecurringTaskDoneOn(t, today);
      if (mode === 'weekly') {
        return (t.recurrenceDays ?? []).includes(todayDow) && !isRecurringTaskDoneOn(t, today);
      }
      return !t.completed;
    }).length;
  }, [tasks]);

  const getFilteredTasks = useCallback(
    (filter: 'today' | 'week' | 'all' | 'done') => {
      const today = todayStr();
      const todayDow = getDay(new Date());
      const weekStart = startOfWeek(new Date(), { weekStartsOn: 0 });
      const weekEnd = endOfWeek(new Date(), { weekStartsOn: 0 });
      const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd }).map(d => getDay(d));

      const sorted = [...tasks].sort(
        (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority],
      );

      switch (filter) {
        case 'today':
          return sorted.filter(t => {
            const mode = t.recurrenceMode ?? 'once';
            if (mode === 'daily') return !isRecurringTaskDoneOn(t, today);
            if (mode === 'weekly') {
              return (t.recurrenceDays ?? []).includes(todayDow) && !isRecurringTaskDoneOn(t, today);
            }
            return !t.completed && t.dueDate != null && isToday(parseISO(t.dueDate));
          });
        case 'week':
          return sorted.filter(t => {
            const mode = t.recurrenceMode ?? 'once';
            if (mode === 'daily') return true;
            if (mode === 'weekly') {
              return (t.recurrenceDays ?? []).some(d => weekDays.includes(d));
            }
            return !t.completed && t.dueDate != null && isThisWeek(parseISO(t.dueDate), { weekStartsOn: 0 });
          });
        case 'done':
          return sorted.filter(t => {
            const mode = t.recurrenceMode ?? 'once';
            if (mode !== 'once') return isRecurringTaskDoneOn(t, today);
            return t.completed;
          });
        default:
          return sorted.filter(t => {
            const mode = t.recurrenceMode ?? 'once';
            if (mode !== 'once') return true;
            return !t.completed;
          });
      }
    },
    [tasks],
  );

  return {
    data,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getPendingCount,
    getFilteredTasks,
    isTaskActiveOnDate,
    isRecurringTaskDoneOn,
  };
}
