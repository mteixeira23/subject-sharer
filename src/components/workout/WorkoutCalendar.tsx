import { useState } from 'react';
import { useWorkout } from '@/contexts/WorkoutContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';

export function WorkoutCalendar() {
  const { data, getMonthLogs } = useWorkout();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const logs = getMonthLogs(year, month);

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });
  const startDow = getDay(start); // 0=Sun

  // Build lookup: date -> log
  const logMap = new Map(logs.map(l => [l.date, l]));
  // Build type lookup
  const typeMap = new Map(data.workoutTypes.map(wt => [wt.id, wt]));

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            Calendário de Treinos
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[120px] text-center capitalize">
              {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
            </span>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
            <div key={i} className="text-center text-[10px] font-medium text-muted-foreground py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-0.5">
          {/* Empty cells for offset */}
          {Array.from({ length: startDow }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}
          {days.map(day => {
            const dateStr = format(day, 'yyyy-MM-dd');
            const log = logMap.get(dateStr);
            const wt = log ? typeMap.get(log.workoutTypeId) : null;
            const isToday = dateStr === format(new Date(), 'yyyy-MM-dd');

            return (
              <div
                key={dateStr}
                className={cn(
                  'aspect-square flex flex-col items-center justify-center rounded-md text-xs relative',
                  isToday && 'ring-1 ring-primary',
                  log ? 'font-medium' : 'text-muted-foreground',
                )}
                title={wt ? wt.name : undefined}
              >
                <span className="text-[11px]">{format(day, 'd')}</span>
                {log && wt && (
                  <div
                    className="h-1.5 w-1.5 rounded-full mt-0.5"
                    style={{ backgroundColor: wt.color }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        {data.workoutTypes.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3 pt-2 border-t">
            {data.workoutTypes.map(wt => (
              <div key={wt.id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: wt.color }} />
                {wt.name}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
