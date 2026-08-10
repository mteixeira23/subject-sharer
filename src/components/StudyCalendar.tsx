import { useMemo, useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStudy } from '@/contexts/StudyContext';
import { cn } from '@/lib/utils';
import { ScheduleEvent } from '@/types/study';

interface StudyCalendarProps {
  onDayClick?: (date: Date, events: ScheduleEvent[]) => void;
  onAddEvent?: (date: Date) => void;
}

export function StudyCalendar({ onDayClick, onAddEvent }: StudyCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { data, getScheduleEventsByDate } = useStudy();

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { locale: ptBR });
    const end = endOfWeek(endOfMonth(currentMonth), { locale: ptBR });
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getEventsForDay = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return data.scheduleEvents.filter(e => e.date === dateStr);
  };

  const getSubjectColor = (subjectId: string) => {
    const subject = data.subjects.find(s => s.id === subjectId);
    return subject?.color || 'hsl(var(--primary))';
  };

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-semibold capitalize">
          {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const events = getEventsForDay(day);
          const isToday = isSameDay(day, new Date());
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <div
              key={day.toISOString()}
              className={cn(
                'min-h-[80px] p-1 border rounded-md cursor-pointer transition-colors hover:bg-accent',
                !isCurrentMonth && 'opacity-40',
                isToday && 'border-primary bg-primary/5'
              )}
              onClick={() => onDayClick?.(day, events)}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'text-sm',
                    isToday && 'font-bold text-primary'
                  )}
                >
                  {format(day, 'd')}
                </span>
                {onAddEvent && isCurrentMonth && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 opacity-0 group-hover:opacity-100 hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddEvent(day);
                    }}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                )}
              </div>
              <div className="mt-1 space-y-1">
                {events.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className={cn(
                      'text-xs px-1 py-0.5 rounded truncate',
                      event.completed && 'opacity-50 line-through'
                    )}
                    style={{
                      backgroundColor: getSubjectColor(event.subjectId),
                      color: 'white',
                    }}
                  >
                    {data.subjects.find(s => s.id === event.subjectId)?.name?.slice(0, 10)}
                  </div>
                ))}
                {events.length > 3 && (
                  <div className="text-xs text-muted-foreground">
                    +{events.length - 3} mais
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
