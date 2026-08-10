import { useMemo, useCallback, useRef } from 'react';
import { Shift } from '@/lib/shifts';
import { toast } from 'sonner';
import { useStudy } from '@/contexts/StudyContext';
import { useFinance } from '@/contexts/FinanceContext';
import { useHealth } from '@/contexts/HealthContext';
import { useTasks } from '@/contexts/TaskContext';
import { useWorkout } from '@/contexts/WorkoutContext';
import { UnifiedEvent } from '@/types/unified';
import { format, addDays, startOfDay, getDay } from 'date-fns';
import { isTaskActiveOnDate, isRecurringTaskDoneOn } from '@/hooks/useTaskData';
import { isHabitActiveOnDate } from '@/hooks/useHealthData';

export function useUnifiedEvents() {
  const study = useStudy();
  const finance = useFinance();
  const health = useHealth();
  const tasks = useTasks();
  const workout = useWorkout();
  const isProcessing = useRef(false);

  const today = format(new Date(), 'yyyy-MM-dd');

  // Build the next 7 days (including today) for recurring task expansion
  const next7Days = useMemo(() => {
    const days: string[] = [];
    for (let i = 0; i < 7; i++) {
      days.push(format(addDays(startOfDay(new Date()), i), 'yyyy-MM-dd'));
    }
    return days;
  }, []);

  const allEvents = useMemo<UnifiedEvent[]>(() => {
    const events: UnifiedEvent[] = [];

    // Study schedule events
    study.data.scheduleEvents.forEach(ev => {
      const subject = study.data.subjects.find(s => s.id === ev.subjectId);
      events.push({
        id: `study-${ev.id}`,
        date: ev.date,
        title: subject?.name ?? 'Aula',
        subtitle: ev.type === 'theory' ? 'Teoria' : ev.type === 'review' ? 'Revisão' : 'Questões',
        module: 'study',
        type: 'schedule',
        completed: ev.completed,
        originalId: ev.id,
        studyType: ev.type,
        shift: ev.shift,
      });
    });


    // Finance bills (contas a pagar/receber)
    (finance.data.bills ?? []).forEach(bill => {
      events.push({
        id: `finance-bill-${bill.id}`,
        date: bill.dueDate,
        title: bill.description,
        subtitle: `${bill.type === 'payable' ? 'A pagar' : 'A receber'} ${bill.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
        module: 'finance',
        type: 'bill',
        completed: bill.paid,
        originalId: bill.id,
        amount: bill.amount,
        billType: bill.type,
      });
    });

    // Health habits — projected over next 7 days (like recurring tasks)
    next7Days.forEach(dateStr => {
      health.data.habits
        .filter(h => isHabitActiveOnDate(h, dateStr))
        .forEach(habit => {
          const isCompleted = health.isHabitCompletedOn(habit.id, dateStr);
          events.push({
            id: `health-${habit.id}-${dateStr}`,
            date: dateStr,
            title: habit.name,
            subtitle: 'Hábito',
            module: 'health',
            type: 'habit',
            completed: isCompleted,
            originalId: habit.id,
            habitIcon: habit.icon,
            shift: habit.shift,
          });
        });
    });

    // Tasks: one-time tasks with due dates + recurring tasks projected over next 7 days
    tasks.data.tasks.forEach(task => {
      const mode = task.recurrenceMode ?? 'once';

      if (mode === 'once') {
        // Original behaviour: show only if has a dueDate
        if (task.dueDate) {
          events.push({
            id: `task-${task.id}`,
            date: task.dueDate,
            title: task.title,
            subtitle: task.description,
            module: 'task',
            type: 'task',
            completed: task.completed,
            originalId: task.id,
            priority: task.priority,
            shift: task.shift,
          });
        }
      } else {
        // Recurring: expand to each day in the next 7 days where it's active
        next7Days.forEach(dateStr => {
          if (isTaskActiveOnDate(task, dateStr)) {
            const doneOnDay = isRecurringTaskDoneOn(task, dateStr);
            events.push({
              id: `task-${task.id}-${dateStr}`,
              date: dateStr,
              title: task.title,
              subtitle: task.description,
              module: 'task',
              type: 'task',
              completed: doneOnDay,
              originalId: task.id,
              priority: task.priority,
              shift: task.shift,
            });
          }
        });
      }
    });

    // Workout routine — projected over next 7 days
    next7Days.forEach(dateStr => {
      const dow = getDay(new Date(dateStr + 'T12:00:00'));
      const cfg = workout.data.weeklyRoutine[dow];
      if (!cfg) return;
      const wt = workout.data.workoutTypes.find(t => t.id === cfg.typeId);
      if (!wt) return;
      const hasLog = workout.data.logs.some(l => l.date === dateStr);
      events.push({
        id: `workout-${dateStr}`,
        date: dateStr,
        title: wt.name,
        subtitle: 'Treino',
        module: 'health',
        type: 'workout',
        completed: hasLog,
        originalId: wt.id,
        shift: cfg.shift,
      });
    });

    return events;
  }, [study.data, finance.data, health.data, tasks.data, workout.data, today, health.isHabitCompletedOn, next7Days]);

  const getEventsByDate = useCallback(
    (date: string) => allEvents.filter(e => e.date === date),
    [allEvents],
  );

  const getEventsByRange = useCallback(
    (start: string, end: string) => allEvents.filter(e => e.date >= start && e.date <= end),
    [allEvents],
  );

  // Toggle completion for any event type
  const toggleEvent = useCallback(
    (event: UnifiedEvent) => {
      if (event.module === 'study') {
        study.updateScheduleEvent(event.originalId, { completed: !event.completed });
      } else if (event.module === 'health') {
        health.toggleHabitCompletion(event.originalId, event.date);
      } else if (event.module === 'task') {
        tasks.toggleComplete(event.originalId, event.date);
      } else if (event.module === 'finance' && event.type === 'bill') {
        finance.toggleBillPaid(event.originalId);
      }
    },
    [study, health, tasks, finance],
  );

  // Move event to a new date (drag-and-drop)
  const moveEvent = useCallback(
    async (event: UnifiedEvent, newDate: string, newShift?: Shift) => {
      const dateChanged = event.date !== newDate;
      const shiftChanged = newShift && event.shift !== newShift;
      if ((!dateChanged && !shiftChanged) || isProcessing.current) return;
      isProcessing.current = true;
      try {
        if (event.module === 'study' && event.type === 'schedule') {
          await study.updateScheduleEvent(event.originalId, {
            ...(dateChanged && { date: newDate }),
            ...(shiftChanged && { shift: newShift }),
          });
        } else if (event.module === 'task' && event.type === 'task') {
          const task = tasks.data.tasks.find(t => t.id === event.originalId);
          if (!task || (task.recurrenceMode ?? 'once') !== 'once') { isProcessing.current = false; return; }
          await tasks.updateTask(event.originalId, {
            ...(dateChanged && { dueDate: newDate }),
            ...(shiftChanged && { shift: newShift as any }),
          });
        } else if (event.module === 'finance' && event.type === 'transaction') {
          if (dateChanged) await finance.updateTransaction(event.originalId, { date: newDate });
        } else if (event.module === 'finance' && event.type === 'bill') {
          if (dateChanged) await finance.updateBill(event.originalId, { dueDate: newDate });
        } else {
          isProcessing.current = false;
          return;
        }
        toast.success('Evento movido com sucesso');
      } catch {
        toast.error('Erro ao mover evento');
      } finally {
        isProcessing.current = false;
      }
    },
    [study, tasks, finance],
  );

  // Move event to a different shift
  const moveEventToShift = useCallback(
    async (event: UnifiedEvent, newShift: Shift) => {
      if (event.shift === newShift || isProcessing.current) return;
      isProcessing.current = true;
      try {
        if (event.module === 'study' && event.type === 'schedule') {
          await study.updateScheduleEvent(event.originalId, { shift: newShift });
        } else if (event.module === 'task') {
          await tasks.updateTask(event.originalId, { shift: newShift as any });
        } else {
          isProcessing.current = false;
          return;
        }
        toast.success('Turno atualizado com sucesso');
      } catch {
        toast.error('Erro ao mover evento');
      } finally {
        isProcessing.current = false;
      }
    },
    [study, tasks],
  );

  return { allEvents, getEventsByDate, getEventsByRange, toggleEvent, moveEvent, moveEventToShift };
}
