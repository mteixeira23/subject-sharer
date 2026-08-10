export type TaskPriority = 'Alta' | 'Média' | 'Baixa';
export type RecurrenceMode = 'once' | 'weekly' | 'daily';
export type { Shift } from '@/lib/shifts';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  dueDate?: string; // YYYY-MM-DD — for 'once': deadline; for recurring: optional end date
  completed: boolean;
  createdAt: string;
  completedAt?: string;
  // Recurrence
  recurrenceMode: RecurrenceMode;   // default: 'once'
  recurrenceDays?: number[];        // 0=Sun … 6=Sat (used when mode='weekly')
  completions?: string[];           // YYYY-MM-DD dates when recurring task was done
  // Shift
  shift?: import('@/lib/shifts').Shift;
}

export interface TaskData {
  tasks: Task[];
}

export const PRIORITY_ORDER: Record<TaskPriority, number> = {
  Alta: 0,
  Média: 1,
  Baixa: 2,
};
