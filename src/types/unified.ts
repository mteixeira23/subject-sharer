import type { Shift } from '@/lib/shifts';

export type UnifiedModule = 'study' | 'finance' | 'health' | 'task';

export interface UnifiedEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  subtitle?: string;
  description?: string;

  module: UnifiedModule;
  type: string; // 'schedule' | 'transaction' | 'habit' | 'task'
  completed: boolean;
  originalId: string;
  priority?: 'Alta' | 'Média' | 'Baixa';
  // Finance specific
  amount?: number;
  transactionType?: 'income' | 'expense';
  // Health specific
  habitIcon?: string;
  // Study specific
  studyType?: 'theory' | 'review' | 'questions';
  // Bill specific
  billType?: 'payable' | 'receivable';
  // Shift (turno)
  shift?: Shift;
}

export const MODULE_CONFIG: Record<UnifiedModule, { label: string; color: string; bgClass: string; textClass: string; borderClass: string }> = {
  study: {
    label: 'Estudos',
    color: 'hsl(217, 91%, 60%)',
    bgClass: 'bg-blue-500/10',
    textClass: 'text-blue-600 dark:text-blue-400',
    borderClass: 'border-blue-200 dark:border-blue-800',
  },
  finance: {
    label: 'Finanças',
    color: 'hsl(142, 71%, 45%)',
    bgClass: 'bg-emerald-500/10',
    textClass: 'text-emerald-600 dark:text-emerald-400',
    borderClass: 'border-emerald-200 dark:border-emerald-800',
  },
  health: {
    label: 'Saúde',
    color: 'hsl(350, 89%, 60%)',
    bgClass: 'bg-rose-500/10',
    textClass: 'text-rose-600 dark:text-rose-400',
    borderClass: 'border-rose-200 dark:border-rose-800',
  },
  task: {
    label: 'Tarefas',
    color: 'hsl(262, 83%, 58%)',
    bgClass: 'bg-violet-500/10',
    textClass: 'text-violet-600 dark:text-violet-400',
    borderClass: 'border-violet-200 dark:border-violet-800',
  },
};
