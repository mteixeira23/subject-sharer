import React, { createContext, useContext, ReactNode } from 'react';
import { useFinanceData } from '@/hooks/useFinanceData';

type FinanceContextType = ReturnType<typeof useFinanceData>;
const FinanceContext = createContext<FinanceContextType | null>(null);

export function FinanceProvider({ children }: { children: ReactNode }) {
  const financeData = useFinanceData();
  return <FinanceContext.Provider value={financeData}>{children}</FinanceContext.Provider>;
}

export function useFinance() {
  const ctx = useContext(FinanceContext);
  if (!ctx) throw new Error('useFinance must be used within a FinanceProvider');
  return ctx;
}
