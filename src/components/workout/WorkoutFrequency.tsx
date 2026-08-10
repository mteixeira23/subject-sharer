import { useWorkout } from '@/contexts/WorkoutContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WorkoutFrequency() {
  const { data, getWeekFrequency } = useWorkout();
  const freq = getWeekFrequency();
  const goal = data.weeklyGoal;
  const pct = Math.min((freq / goal) * 100, 100);
  const done = freq >= goal;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Target className="h-4 w-4 text-primary" />
          Frequência Semanal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <svg className="h-20 w-20 -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                className="stroke-muted"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                className={cn(done ? 'stroke-emerald-500' : 'stroke-primary')}
                strokeWidth="3"
                strokeDasharray={`${pct}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-lg font-bold">{freq}/{goal}</span>
          </div>
          <div>
            <p className="text-sm font-medium">
              {done ? 'Meta atingida! 🎉' : `Faltam ${goal - freq} treino${goal - freq !== 1 ? 's' : ''}`}
            </p>
            <p className="text-xs text-muted-foreground">
              {freq} de {goal} dias esta semana
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
