import React, { createContext, useContext, ReactNode } from 'react';
import { useHealthData } from '@/hooks/useHealthData';

type HealthContextType = ReturnType<typeof useHealthData>;
const HealthContext = createContext<HealthContextType | null>(null);

export function HealthProvider({ children }: { children: ReactNode }) {
  const healthData = useHealthData();
  return <HealthContext.Provider value={healthData}>{children}</HealthContext.Provider>;
}

export function useHealth() {
  const ctx = useContext(HealthContext);
  if (!ctx) throw new Error('useHealth must be used within a HealthProvider');
  return ctx;
}
