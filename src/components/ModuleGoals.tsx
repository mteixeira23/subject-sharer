import { useGoals } from '@/contexts/GoalsContext';
import { useGoalProgress } from '@/hooks/useGoalProgress';
import { GoalCategory, GOAL_CATEGORY_CONFIG } from '@/types/goals';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface ModuleGoalsProps {
  categories: GoalCategory[];
}

export function ModuleGoals({ categories }: ModuleGoalsProps) {
  const { data } = useGoals();
  const { getProgress } = useGoalProgress();

  const relevantGoals = data.goals.filter(
    g => g.active && categories.includes(g.category as GoalCategory),
  );

  if (relevantGoals.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {relevantGoals.map(goal => {
        const config = GOAL_CATEGORY_CONFIG[goal.category];
        const current = getProgress(goal.category, goal.period);
        const pct = Math.min(Math.round((current / goal.target) * 100), 100);
        const achieved = current >= goal.target;

        return (
          <Card key={goal.id} className="border-dashed">
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{config.icon}</span>
                  <span className="text-sm font-medium truncate">{goal.title}</span>
                </div>
                {achieved && <Trophy className="h-4 w-4 text-yellow-500 flex-shrink-0" />}
              </div>
              <Progress value={pct} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {config.unit === 'R$'
                    ? `R$ ${current.toFixed(2)} / R$ ${goal.target.toFixed(2)}`
                    : `${current} / ${goal.target} ${config.unit}`}
                </span>
                <span className={achieved ? 'text-emerald-600 font-semibold' : ''}>
                  {pct}%
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground/60">
                {goal.period === 'weekly' ? 'Semanal' : 'Mensal'}
              </span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
