import React, { createContext, useContext, ReactNode } from 'react';
import { useGoalsData } from '@/hooks/useGoalsData';

type GoalsContextType = ReturnType<typeof useGoalsData>;
const GoalsContext = createContext<GoalsContextType | null>(null);

export function GoalsProvider({ children }: { children: ReactNode }) {
  const goalsData = useGoalsData();
  return <GoalsContext.Provider value={goalsData}>{children}</GoalsContext.Provider>;
}

export function useGoals() {
  const ctx = useContext(GoalsContext);
  if (!ctx) throw new Error('useGoals must be used within a GoalsProvider');
  return ctx;
}
