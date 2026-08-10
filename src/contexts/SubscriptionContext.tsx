import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface SubscriptionContextType {
  isPremium: boolean;
  subscriptionEnd: string | null;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  isPremium: false,
  subscriptionEnd: null,
  loading: true,
  refresh: async () => {},
});

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth();
  const [isPremium, setIsPremium] = useState(false);
  const [subscriptionEnd, setSubscriptionEnd] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSubscription = useCallback(async () => {
    if (!session?.access_token) {
      setIsPremium(false);
      setSubscriptionEnd(null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      // Handle both SDK error and edge function returning error in data
      if (error || (data && data.error)) {
        console.warn('Subscription check failed:', error?.message || data?.error);
        setIsPremium(false);
        setSubscriptionEnd(null);
      } else {
        setIsPremium(data?.subscribed ?? false);
        setSubscriptionEnd(data?.subscription_end ?? null);
      }
    } catch (err) {
      console.warn('Error checking subscription:', err);
      setIsPremium(false);
      setSubscriptionEnd(null);
    } finally {
      setLoading(false);
    }
  }, [session?.access_token]);

  useEffect(() => {
    checkSubscription();
    const interval = setInterval(checkSubscription, 60_000);
    return () => clearInterval(interval);
  }, [checkSubscription]);

  return (
    <SubscriptionContext.Provider value={{ isPremium, subscriptionEnd, loading, refresh: checkSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}
