export interface PomodoroSettings {
  focusDuration: number;      // minutes (default 25)
  shortBreakDuration: number; // minutes (default 5)
  longBreakDuration: number;  // minutes (default 15)
  sessionsUntilLongBreak: number; // default 4
}

export interface PomodoroSession {
  id: string;
  subjectId: string;
  lessonNumber: number;
  startedAt: string;        // ISO date-time
  duration: number;          // seconds actually focused
  completed: boolean;
  date: string;              // YYYY-MM-DD
}

export type PomodoroPhase = 'focus' | 'shortBreak' | 'longBreak' | 'idle';

export const DEFAULT_POMODORO_SETTINGS: PomodoroSettings = {
  focusDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsUntilLongBreak: 4,
};
