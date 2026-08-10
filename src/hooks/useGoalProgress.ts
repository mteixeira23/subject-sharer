import { useMemo, useCallback } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { useFinance } from '@/contexts/FinanceContext';
import { useHealth } from '@/contexts/HealthContext';
import { useTasks } from '@/contexts/TaskContext';
import { useWorkout } from '@/contexts/WorkoutContext';
import { GoalCategory } from '@/types/goals';
import { isHabitActiveOnDate } from '@/hooks/useHealthData';
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  eachDayOfInterval,
} from 'date-fns';

export function useGoalProgress() {
  const study = useStudy();
  const finance = useFinance();
  const health = useHealth();
  const tasks = useTasks();
  const workout = useWorkout();

  const now = new Date();

  const getProgress = useCallback(
    (category: GoalCategory, period: 'weekly' | 'monthly' | 'yearly'): number => {
      const rangeStart = period === 'weekly'
        ? startOfWeek(now, { weekStartsOn: 0 })
        : period === 'monthly'
        ? startOfMonth(now)
        : startOfYear(now);
      const rangeEnd = period === 'weekly'
        ? endOfWeek(now, { weekStartsOn: 0 })
        : period === 'monthly'
        ? endOfMonth(now)
        : endOfYear(now);

      const startStr = format(rangeStart, 'yyyy-MM-dd');
      const endStr = format(rangeEnd, 'yyyy-MM-dd');

      switch (category) {
        case 'questions': {
          // Count question sessions in the period
          return (study.data.questionSessions || [])
            .filter(s => s.date >= startStr && s.date <= endStr)
            .reduce((acc, s) => acc + s.questionsCount, 0);
        }

        case 'finance_save': {
          // Balance (income - expense) in the period
          const txs = finance.data.transactions.filter(t => t.date >= startStr && t.date <= endStr);
          const income = txs.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
          const expense = txs.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
          return income - expense;
        }

        case 'habits': {
          // Days in the period where ALL active habits were completed
          const days = eachDayOfInterval({ start: rangeStart, end: now > rangeEnd ? rangeEnd : now });
          let fullDays = 0;
          for (const day of days) {
            const dateStr = format(day, 'yyyy-MM-dd');
            const activeHabits = health.data.habits.filter(h => isHabitActiveOnDate(h, dateStr));
            if (activeHabits.length === 0) continue;
            const allDone = activeHabits.every(h =>
              health.data.completions.some(c => c.habitId === h.id && c.date === dateStr),
            );
            if (allDone) fullDays++;
          }
          return fullDays;
        }

        case 'study_time': {
          // Pomodoro minutes in the period
          return Math.round(
            (study.data.pomodoroSessions || [])
              .filter(s => s.date >= startStr && s.date <= endStr && s.completed)
              .reduce((acc, s) => acc + s.duration, 0) / 60
          );
        }

        case 'tasks': {
          // Completed tasks in the period
          const days = eachDayOfInterval({ start: rangeStart, end: now > rangeEnd ? rangeEnd : now });
          let count = 0;
          // One-time tasks completed in range
          count += tasks.data.tasks.filter(t => {
            if ((t.recurrenceMode ?? 'once') !== 'once') return false;
            if (!t.completedAt) return false;
            const completedDate = format(new Date(t.completedAt), 'yyyy-MM-dd');
            return completedDate >= startStr && completedDate <= endStr;
          }).length;
          // Recurring task completions in range
          for (const t of tasks.data.tasks) {
            if ((t.recurrenceMode ?? 'once') === 'once') continue;
            count += (t.completions ?? []).filter(d => d >= startStr && d <= endStr).length;
          }
          return count;
        }

        case 'workout': {
          return (workout.data.logs || [])
            .filter(l => l.date >= startStr && l.date <= endStr)
            .length;
        }

        default:
          return 0;
      }
    },
    [study.data, finance.data, health.data, tasks.data, workout.data, now],
  );

  return { getProgress };
}
