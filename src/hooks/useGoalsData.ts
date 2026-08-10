import { useCallback, useMemo } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Goal, GoalData, GoalCategory, GoalPeriod } from '@/types/goals';

function rowToGoal(row: any): Goal {
  return {
    id: row.id,
    title: row.title,
    category: row.category as GoalCategory,
    period: row.period as GoalPeriod,
    target: Number(row.target),
    createdAt: row.created_at,
    active: row.active ?? true,
  };
}

export function useGoalsData() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const userId = user?.id;

  const { data: goals = [] } = useQuery({
    queryKey: ['goals', userId],
    queryFn: async () => {
      if (!userId) return [];
      const { data, error } = await supabase
        .from('goals')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToGoal);
    },
    enabled: !!userId,
  });

  const data: GoalData = useMemo(() => ({ goals }), [goals]);

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['goals', userId] });

  const addGoal = useCallback(
    async (goal: Omit<Goal, 'id' | 'createdAt' | 'active'>) => {
      if (!userId) return;
      const { error } = await supabase.from('goals').insert({
        user_id: userId,
        title: goal.title,
        category: goal.category,
        period: goal.period,
        target: goal.target,
        active: true,
      });
      if (error) throw error;
      invalidate();
    },
    [userId],
  );

  const updateGoal = useCallback(
    async (id: string, updates: Partial<Goal>) => {
      const row: Record<string, any> = {};
      if (updates.title !== undefined) row.title = updates.title;
      if (updates.category !== undefined) row.category = updates.category;
      if (updates.period !== undefined) row.period = updates.period;
      if (updates.target !== undefined) row.target = updates.target;
      if (updates.active !== undefined) row.active = updates.active;
      const { error } = await supabase.from('goals').update(row).eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [userId],
  );

  const deleteGoal = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('goals').delete().eq('id', id);
      if (error) throw error;
      invalidate();
    },
    [userId],
  );

  const toggleGoalActive = useCallback(
    async (id: string) => {
      const goal = goals.find(g => g.id === id);
      if (!goal) return;
      await updateGoal(id, { active: !goal.active });
    },
    [goals, updateGoal],
  );

  const getActiveGoals = useCallback(() => {
    return goals.filter(g => g.active);
  }, [goals]);

  return {
    data,
    addGoal,
    updateGoal,
    deleteGoal,
    toggleGoalActive,
    getActiveGoals,
  };
}
