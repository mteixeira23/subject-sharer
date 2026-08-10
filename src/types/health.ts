export type HabitRecurrenceMode = 'once' | 'weekly' | 'daily';

export interface Habit {
  id: string;
  name: string;
  icon: string;
  createdAt: string;
  shift?: import('@/lib/shifts').Shift;
  recurrenceMode: HabitRecurrenceMode;
  recurrenceDays?: number[]; // 0=Dom … 6=Sáb (only when 'weekly')
}

export interface HabitCompletion {
  habitId: string;
  date: string; // YYYY-MM-DD
}

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export interface MoodEntry {
  date: string; // YYYY-MM-DD
  level: MoodLevel;
  note?: string;
}

export interface HealthData {
  habits: Habit[];
  completions: HabitCompletion[];
  moods: MoodEntry[];
}

export const MOOD_EMOJIS: Record<MoodLevel, string> = {
  1: '😞',
  2: '😕',
  3: '😐',
  4: '😊',
  5: '😄',
};

export const MOOD_LABELS: Record<MoodLevel, string> = {
  1: 'Péssimo',
  2: 'Ruim',
  3: 'Ok',
  4: 'Bom',
  5: 'Ótimo',
};

export const DEFAULT_HABITS: Omit<Habit, 'id' | 'createdAt'>[] = [
  { name: 'Beber 2L de água', icon: '💧', recurrenceMode: 'daily' },
  { name: 'Caminhar 30min', icon: '🚶', recurrenceMode: 'daily' },
  { name: 'Dormir 8h', icon: '😴', recurrenceMode: 'daily' },
];

// ── Workout types ────────────────────────────────────────────────────────────

export interface WorkoutExercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number; // kg
}

export interface WorkoutType {
  id: string;
  name: string;
  color: string;
  exercises: WorkoutExercise[];
}

export interface RoutineDayConfig {
  typeId: string;
  shift?: import('@/lib/shifts').Shift;
}

export interface WeeklyRoutine {
  [day: number]: RoutineDayConfig | null; // 0=Dom … 6=Sáb
}

export interface WorkoutLog {
  id: string;
  date: string; // YYYY-MM-DD
  workoutTypeId: string;
  exercises: WorkoutExercise[];
  notes?: string;
  shift?: import('@/lib/shifts').Shift;
}

export interface WorkoutData {
  workoutTypes: WorkoutType[];
  weeklyRoutine: WeeklyRoutine;
  weeklyGoal: number;
  logs: WorkoutLog[];
}

export const WORKOUT_COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
];
