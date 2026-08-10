import React, { createContext, useContext, ReactNode } from 'react';
import { useWorkoutData } from '@/hooks/useWorkoutData';

type WorkoutContextType = ReturnType<typeof useWorkoutData>;
const WorkoutContext = createContext<WorkoutContextType | null>(null);

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const workoutData = useWorkoutData();
  return <WorkoutContext.Provider value={workoutData}>{children}</WorkoutContext.Provider>;
}

export function useWorkout() {
  const ctx = useContext(WorkoutContext);
  if (!ctx) throw new Error('useWorkout must be used within a WorkoutProvider');
  return ctx;
}
