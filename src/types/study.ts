export interface Contest {
  id: string;
  name: string;
  createdAt: string;
  currentCycle: number;
}

export interface Subject {
  id: string;
  contestId: string;
  name: string;
  totalLessons: number;
  color: string;
}

export interface Lesson {
  id: string;
  subjectId: string;
  number: number;
  name?: string;
  theoryCompleted: boolean;
  reviewCompleted: boolean;
  questionsCount: number;
  correctAnswers: number;
  cycle: number;
}

export interface ScheduleEvent {
  id: string;
  date: string; // YYYY-MM-DD
  subjectId: string;
  lessonNumber: number;
  type: 'theory' | 'review' | 'questions';
  completed: boolean;
  description?: string;
  shift?: import('@/lib/shifts').Shift;
}

export interface QuestionSession {
  id: string;
  subjectId: string;
  lessonNumber: number;
  questionsCount: number;
  correctAnswers: number;
  date: string;
}

export interface StudyData {
  version?: number;
  contests: Contest[];
  subjects: Subject[];
  lessons: Lesson[];
  scheduleEvents: ScheduleEvent[];
  questionSessions: QuestionSession[];
  pomodoroSessions: import('@/types/pomodoro').PomodoroSession[];
}

export const SUBJECT_COLORS = [
  'hsl(210, 79%, 46%)',   // Blue
  'hsl(142, 71%, 45%)',   // Green
  'hsl(0, 84%, 60%)',     // Red
  'hsl(38, 92%, 50%)',    // Orange
  'hsl(262, 83%, 58%)',   // Purple
  'hsl(187, 85%, 43%)',   // Cyan
  'hsl(330, 81%, 60%)',   // Pink
  'hsl(45, 93%, 47%)',    // Yellow
  'hsl(199, 89%, 48%)',   // Sky
  'hsl(24, 95%, 53%)',    // Amber
  'hsl(280, 65%, 60%)',   // Violet
  'hsl(160, 84%, 39%)',   // Emerald
  'hsl(350, 89%, 60%)',   // Rose
  'hsl(220, 70%, 50%)',   // Indigo
  'hsl(80, 61%, 50%)',    // Lime
];
