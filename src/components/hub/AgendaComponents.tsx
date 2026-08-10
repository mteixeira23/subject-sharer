import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, CheckSquare, BookOpen, Banknote } from 'lucide-react';
import { UnifiedEvent, UnifiedModule, MODULE_CONFIG } from '@/types/unified';
import { Shift, SHIFT_CONFIG, SHIFT_ORDER } from '@/lib/shifts';

// ─── Shift color pills ────────────────────────────────────────────────────────
const shiftPillCls: Record<Shift, string> = {
  allday:    'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  morning:   'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  afternoon: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  evening:   'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
};

// ─── Combined filter helper ──────────────────────────────────────────────────
export function filterEvents(events: UnifiedEvent[], shift: Shift | null, moduleFilter: UnifiedModule | null): UnifiedEvent[] {
  let filtered = events;
  if (shift) filtered = filtered.filter(e => !e.shift || e.shift === shift);
  if (moduleFilter) filtered = filtered.filter(e => e.module === moduleFilter);
  return filtered;
}

// ─── Module filter bar ────────────────────────────────────────────────────────
export function ModuleFilterBar({
  active,
  onChange,
}: {
  active: UnifiedModule | null;
  onChange: (m: UnifiedModule | null) => void;
}) {
  const modules = Object.entries(MODULE_CONFIG) as [UnifiedModule, typeof MODULE_CONFIG[UnifiedModule]][];
  const btnBase = 'px-2.5 py-1 rounded-md text-xs font-medium transition-all border flex items-center gap-1.5';
  const btnActive = 'bg-primary text-primary-foreground border-primary shadow-sm';
  const btnInactive = 'bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground';
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={cn(btnBase, active === null ? btnActive : btnInactive)}
      >
        Todos
      </button>
      {modules.map(([key, cfg]) => (
        <button
          key={key}
          onClick={() => onChange(active === key ? null : key)}
          className={cn(btnBase, active === key ? btnActive : btnInactive)}
        >
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: cfg.color }} />
          <span>{cfg.label}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Shift selector buttons ───────────────────────────────────────────────────
export function ShiftFilterBar({
  active,
  onChange,
}: {
  active: Shift | null;
  onChange: (s: Shift | null) => void;
}) {
  const btnBase = 'px-2.5 py-1 rounded-md text-xs font-medium transition-all border flex items-center gap-1.5';
  const btnActive = 'bg-primary text-primary-foreground border-primary shadow-sm';
  const btnInactive = 'bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground';
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={cn(btnBase, active === null ? btnActive : btnInactive)}
      >
        Todos
      </button>
      {SHIFT_ORDER.map(s => {
        const cfg = SHIFT_CONFIG[s];
        return (
          <button
            key={s}
            onClick={() => onChange(active === s ? null : s)}
            className={cn(btnBase, active === s ? btnActive : btnInactive)}
          >
            <span className="text-sm leading-none">{cfg.icon}</span>
            <span>{cfg.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Event Item ───────────────────────────────────────────────────────────────
// Helper: is event draggable?
export function isEventDraggable(event: UnifiedEvent): boolean {
  if (event.module === 'health') return false; // habits & workouts
  if (event.module === 'task') return true; // once and weekly tasks
  return true; // study schedule, finance transactions, bills
}

export function EventItem({ event, onToggle }: { event: UnifiedEvent; onToggle: (e: UnifiedEvent) => void }) {
  const config = MODULE_CONFIG[event.module];
  const canToggle = !(event.module === 'finance' && event.type === 'transaction');
  const draggable = isEventDraggable(event);

  const moduleIcon: Record<string, React.ReactNode> = {
    study: <BookOpen className="h-3.5 w-3.5" />,
    finance: <Banknote className="h-3.5 w-3.5" />,
    health: <span className="text-sm leading-none">{event.habitIcon ?? '❤️'}</span>,
    task: <CheckSquare className="h-3.5 w-3.5" />,
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (!draggable) { e.preventDefault(); return; }
    e.dataTransfer.setData('application/json', JSON.stringify(event));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable={draggable}
      onDragStart={handleDragStart}
      className={cn(
        'group flex items-start gap-2 rounded-lg border-l-2 bg-card px-2.5 py-2 shadow-sm text-xs transition-all hover:shadow-md hover:bg-accent/30',
        event.completed && 'opacity-50',
        draggable && 'cursor-grab active:cursor-grabbing',
      )}
      style={{ borderLeftColor: config.color }}
    >
      {canToggle ? (
        <button
          onClick={() => onToggle(event)}
          className="mt-0.5 flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          {event.completed
            ? <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            : <Circle className="h-3.5 w-3.5" />}
        </button>
      ) : (
        <span className={cn('mt-0.5 flex-shrink-0', config.textClass)}>
          {moduleIcon[event.module]}
        </span>
      )}

      <div className="flex-1 min-w-0">
        <p className={cn('font-medium leading-tight whitespace-normal break-words', event.completed && 'line-through text-muted-foreground')}>
          {event.title}
        </p>
        <div className="flex items-center gap-1 mt-0.5 flex-wrap">
          {event.subtitle && (
            <span className="text-muted-foreground truncate">{event.subtitle}</span>
          )}
          {event.priority && (
            <Badge
              className={cn(
                'h-4 px-1 text-[10px]',
                event.priority === 'Alta' && 'bg-destructive/20 text-destructive border-0',
                event.priority === 'Média' && 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-0',
                event.priority === 'Baixa' && 'bg-green-500/20 text-green-700 dark:text-green-400 border-0',
              )}
            >
              {event.priority}
            </Badge>
          )}
          {event.amount !== undefined && (
            <span
              className={cn(
                'font-semibold',
                event.transactionType === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive',
              )}
            >
              {event.transactionType === 'income' ? '+' : '-'}R${event.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          )}
        </div>
      </div>

      <span
        className="text-[10px] font-semibold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 leading-none"
        style={{ backgroundColor: `${config.color}25`, color: config.color }}
      >
        {config.label}
      </span>
    </div>
  );
}

// ─── Shift Section ────────────────────────────────────────────────────────────
function ShiftSection({
  shift,
  events,
  onToggle,
  onMoveToShift,
  targetDate,
  onMoveEvent,
}: {
  shift: Shift;
  events: UnifiedEvent[];
  onToggle: (e: UnifiedEvent) => void;
  onMoveToShift?: (event: UnifiedEvent, targetShift: Shift) => void;
  targetDate?: string;
  onMoveEvent?: (event: UnifiedEvent, newDate: string, newShift?: Shift) => void;
}) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const cfg = SHIFT_CONFIG[shift];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.stopPropagation();
    setIsDragOver(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    try {
      const data = e.dataTransfer.getData('application/json');
      if (data) {
        const event = JSON.parse(data) as UnifiedEvent;
        const dateChanged = targetDate && event.date !== targetDate;
        const shiftChanged = event.shift !== shift;

        if (dateChanged && onMoveEvent) {
          // Unified call: move date + shift together
          onMoveEvent(event, targetDate!, shiftChanged ? shift : undefined);
        } else if (shiftChanged && onMoveToShift) {
          // Same day, only shift changed
          onMoveToShift(event, shift);
        }
      }
    } catch {}
  };

  return (
    <div
      className={cn('space-y-1.5 rounded-md p-1 transition-all', isDragOver && 'ring-2 ring-primary/50 bg-primary/5')}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={cn('flex items-center gap-1.5 px-2 py-1 rounded-md w-fit', shiftPillCls[shift])}>
        <span className="text-sm leading-none">{cfg.icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">{cfg.label}</span>
      </div>
      {events.length === 0 ? (
        <p className="text-[10px] text-muted-foreground/40 pl-2 pb-1">—</p>
      ) : (
        <div className="space-y-1">
          {events.map(ev => <EventItem key={ev.id} event={ev} onToggle={onToggle} />)}
        </div>
      )}
    </div>
  );
}

// ─── Day events grouped by shift ─────────────────────────────────────────────
export function DayEventsGrouped({
  events,
  onToggle,
  shiftFilter,
  moduleFilter,
  onMoveToShift,
  targetDate,
  onMoveEvent,
}: {
  events: UnifiedEvent[];
  onToggle: (e: UnifiedEvent) => void;
  shiftFilter?: Shift | null;
  moduleFilter?: UnifiedModule | null;
  onMoveToShift?: (event: UnifiedEvent, targetShift: Shift) => void;
  targetDate?: string;
  onMoveEvent?: (event: UnifiedEvent, newDate: string, newShift?: Shift) => void;
}) {
  const filtered = filterEvents(events, shiftFilter ?? null, moduleFilter ?? null);

  const byShift: Record<Shift, UnifiedEvent[]> = {
    allday: [],
    morning: [],
    afternoon: [],
    evening: [],
  };
  filtered.forEach(e => {
    if (e.shift) {
      byShift[e.shift].push(e);
    } else {
      byShift.allday.push(e);
    }
  });

  // When a shift filter is active, only show that shift; otherwise show all
  const visibleShifts = shiftFilter ? SHIFT_ORDER.filter(s => s === shiftFilter) : SHIFT_ORDER;

  const hasAny = visibleShifts.some(s => byShift[s].length > 0);

  if (visibleShifts.length === 0) {
    return <p className="text-xs text-muted-foreground/60 py-2 text-center">Nenhum evento</p>;
  }

  return (
    <div className="space-y-2">
      {visibleShifts.map((s, idx) => {
        const isLast = idx === visibleShifts.length - 1;
        return (
          <div key={s}>
            <div className={cn('rounded-lg p-1.5', s === 'allday' && 'bg-muted/40 mb-0.5')}>
              <ShiftSection shift={s} events={byShift[s]} onToggle={onToggle} onMoveToShift={onMoveToShift} targetDate={targetDate} onMoveEvent={onMoveEvent} />
            </div>
            {!isLast && <div className="h-px bg-border/50 mx-1 my-0.5" />}
          </div>
        );
      })}
    </div>
  );
}
