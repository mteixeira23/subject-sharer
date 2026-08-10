import React, { createContext, useContext, ReactNode } from 'react';
import { useTaskData } from '@/hooks/useTaskData';

type TaskContextType = ReturnType<typeof useTaskData>;
const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const taskData = useTaskData();
  return <TaskContext.Provider value={taskData}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTasks must be used within a TaskProvider');
  return ctx;
}
