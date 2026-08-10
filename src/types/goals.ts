export type GoalCategory = 'questions' | 'finance_save' | 'habits' | 'study_time' | 'tasks' | 'workout';
export type GoalPeriod = 'weekly' | 'monthly' | 'yearly';

export type CategoryGroupKey = 'tasks' | 'study' | 'finance' | 'health';

export const CATEGORY_GROUPS: { key: CategoryGroupKey; label: string; icon: string; categories: GoalCategory[] }[] = [
  { key: 'tasks',    label: 'Tarefas',   icon: '✅', categories: ['tasks'] },
  { key: 'study',    label: 'Estudos',   icon: '📚', categories: ['questions', 'study_time'] },
  { key: 'finance',  label: 'Finanças',  icon: '💰', categories: ['finance_save'] },
  { key: 'health',   label: 'Saúde',     icon: '❤️', categories: ['habits', 'workout'] },
];

export interface Goal {
  id: string;
  title: string;
  category: GoalCategory;
  period: GoalPeriod;
  target: number;
  createdAt: string;
  active: boolean;
}

export interface GoalData {
  goals: Goal[];
}

export const GOAL_CATEGORY_CONFIG: Record<GoalCategory, {
  label: string;
  unit: string;
  icon: string;
  color: string;
  placeholder: string;
}> = {
  questions: {
    label: 'Questões',
    unit: 'questões',
    icon: '🎯',
    color: 'hsl(217, 91%, 60%)',
    placeholder: 'Ex: Resolver 200 questões',
  },
  finance_save: {
    label: 'Economia',
    unit: 'R$',
    icon: '💰',
    color: 'hsl(142, 71%, 45%)',
    placeholder: 'Ex: Economizar R$500',
  },
  habits: {
    label: 'Hábitos',
    unit: 'dias',
    icon: '❤️',
    color: 'hsl(350, 89%, 60%)',
    placeholder: 'Ex: Completar hábitos 6 dias',
  },
  study_time: {
    label: 'Tempo de Estudo',
    unit: 'minutos',
    icon: '⏱️',
    color: 'hsl(262, 83%, 58%)',
    placeholder: 'Ex: Estudar 600 minutos',
  },
  tasks: {
    label: 'Tarefas',
    unit: 'tarefas',
    icon: '✅',
    color: 'hsl(280, 65%, 60%)',
    placeholder: 'Ex: Concluir 15 tarefas',
  },
  workout: {
    label: 'Treinos',
    unit: 'treinos',
    icon: '🏋️',
    color: 'hsl(25, 95%, 53%)',
    placeholder: 'Ex: Treinar 20 vezes no mês',
  },
};
