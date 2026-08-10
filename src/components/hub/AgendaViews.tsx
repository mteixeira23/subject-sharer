import { useState, useMemo, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Printer } from 'lucide-react';
import { format, addDays, subDays, isToday, startOfMonth, endOfMonth, startOfWeek, eachDayOfInterval, isSameMonth, addMonths, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { UnifiedEvent, UnifiedModule, MODULE_CONFIG } from '@/types/unified';
import { Shift, SHIFT_CONFIG, SHIFT_ORDER } from '@/lib/shifts';
import { DayEventsGrouped, filterEvents, ShiftFilterBar, ModuleFilterBar } from './AgendaComponents';
import { printAgendaHTML } from '@/lib/exportUtils';
import React from 'react';

type AgendaView = 'month' | 'week' | 'day';

// ─── Day Column (Week View) ──────────────────────────────────────────────────
function DayColumn({
  date, events, onToggle, shiftFilter, moduleFilter, onMoveEvent, onMoveToShift, isDragOver, onDragOver, onDragLeave,
}: {
  date: Date; events: UnifiedEvent[]; onToggle: (e: UnifiedEvent) => void; shiftFilter: Shift | null; moduleFilter: UnifiedModule | null;
  onMoveEvent: (event: UnifiedEvent, newDate: string, newShift?: Shift) => void; onMoveToShift?: (event: UnifiedEvent, targetShift: Shift) => void; isDragOver: boolean; onDragOver: (e: React.DragEvent) => void; onDragLeave: () => void;
}) {
  const isCurrentDay = isToday(date);
  const dayLabel = format(date, 'EEE', { locale: ptBR });
  const filtered = filterEvents(events, shiftFilter, moduleFilter);
  const pending = filtered.filter(e => !e.completed).length;
  const done = filtered.filter(e => e.completed).length;
  const dateStr = format(date, 'yyyy-MM-dd');

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    try {
      const data = e.dataTransfer.getData('application/json');
      if (data) {
        const event = JSON.parse(data) as UnifiedEvent;
        onMoveEvent(event, dateStr);
      }
    } catch {}
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={handleDrop}
      className={cn(
        'flex-shrink-0 w-72 rounded-xl border bg-card flex flex-col shadow-sm transition-all',
        isCurrentDay && 'ring-2 ring-primary/50',
        isDragOver && 'ring-2 ring-primary bg-primary/5',
      )}
    >
      <div className={cn('px-3 pt-3 pb-2.5 rounded-t-xl border-b', isCurrentDay ? 'bg-primary/10' : 'bg-muted/30')}>
        <div className="flex items-center justify-between">
          <div>
            <p className={cn('text-[11px] font-bold uppercase tracking-widest', isCurrentDay ? 'text-primary' : 'text-muted-foreground')}>{dayLabel}</p>
            <p className={cn('text-xl font-extrabold leading-tight', isCurrentDay ? 'text-primary' : 'text-foreground')}>{format(date, 'dd')}</p>
            <p className="text-[10px] text-muted-foreground">{format(date, 'MMM', { locale: ptBR })}</p>
          </div>
          {filtered.length > 0 && (
            <div className="flex flex-col items-end gap-1">
              {pending > 0 && <Badge className="h-5 min-w-5 px-1.5 text-[10px] bg-muted/80 text-muted-foreground border-0 font-semibold">{pending}</Badge>}
              {done > 0 && <Badge className="h-5 min-w-5 px-1.5 text-[10px] bg-green-500/15 text-green-700 dark:text-green-400 border-0 font-semibold">✓{done}</Badge>}
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 p-2.5 min-h-[80px] overflow-y-auto max-h-[440px]">
        <DayEventsGrouped events={events} onToggle={onToggle} shiftFilter={shiftFilter} moduleFilter={moduleFilter} onMoveToShift={onMoveToShift} targetDate={dateStr} onMoveEvent={onMoveEvent} />
      </div>
    </div>
  );
}

// ─── Month View ───────────────────────────────────────────────────────────────
function MonthView({
  month, onMonthChange, onDayClick, getEventsByDate, shiftFilter, moduleFilter, onToggle,
}: {
  month: Date; onMonthChange: (d: Date) => void; onDayClick: (d: Date) => void; getEventsByDate: (date: string) => UnifiedEvent[];
  shiftFilter: Shift | null; moduleFilter: UnifiedModule | null; onToggle: (e: UnifiedEvent) => void;
}) {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const calStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const calEnd = startOfWeek(monthEnd, { weekStartsOn: 0 });
  const calDays = eachDayOfInterval({ start: calStart, end: addDays(calEnd, 6) });
  const weekLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className="space-y-0">
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => onMonthChange(subMonths(month, 1))} className="h-8 w-8 flex items-center justify-center rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
        <span className="text-sm font-semibold capitalize">{format(month, "MMMM 'de' yyyy", { locale: ptBR })}</span>
        <button onClick={() => onMonthChange(addMonths(month, 1))} className="h-8 w-8 flex items-center justify-center rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors"><ChevronRight className="h-4 w-4" /></button>
      </div>
      <div className="grid grid-cols-7 border-t border-l rounded-t-lg overflow-hidden">
        {weekLabels.map(d => (
          <div key={d} className="text-center text-[10px] font-bold text-muted-foreground py-1.5 bg-muted/50 border-r border-b uppercase tracking-wide">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 border-l rounded-b-lg overflow-hidden">
        {calDays.map(day => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const allEvents = getEventsByDate(dateStr);
          const filtered = filterEvents(allEvents, shiftFilter, moduleFilter);
          const isCurrentMonth = isSameMonth(day, month);
          const today = isToday(day);
          const visibleEvents = filtered.slice(0, 3);
          const extraCount = filtered.length - visibleEvents.length;

          return (
            <div
              key={dateStr}
              className={cn(
                'relative flex flex-col border-r border-b min-h-[60px] md:min-h-[90px] p-1 transition-all cursor-pointer hover:bg-muted/40',
                !isCurrentMonth && 'opacity-30 bg-muted/10',
                today && 'ring-2 ring-inset ring-primary/60 bg-primary/5',
              )}
              onClick={() => onDayClick(day)}
            >
              <span className={cn('text-[11px] font-semibold leading-tight mb-0.5', today ? 'text-primary font-bold' : 'text-foreground')}>{format(day, 'd')}</span>
              <div className="flex flex-col gap-0.5 flex-1 overflow-hidden">
                {visibleEvents.map(ev => {
                  const cfg = MODULE_CONFIG[ev.module];
                  return (
                    <button
                      key={ev.id}
                      onClick={(e) => { e.stopPropagation(); onToggle(ev); }}
                      className={cn(
                        'w-full text-left text-[9px] md:text-[10px] leading-tight px-1 py-0.5 rounded truncate font-medium transition-all',
                        ev.completed && 'line-through opacity-50',
                      )}
                      style={{ backgroundColor: `${cfg.color}20`, color: cfg.color }}
                      title={ev.title}
                    >
                      {ev.title}
                    </button>
                  );
                })}
                {extraCount > 0 && (
                  <span className="text-[9px] text-muted-foreground font-semibold px-1">+{extraCount}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Day View ─────────────────────────────────────────────────────────────────
function DayView({
  day, onDayChange, getEventsByDate, onToggle, shiftFilter, moduleFilter, onMoveEvent, onMoveToShift, isDragOver, onDragOver, onDragLeave,
}: {
  day: Date; onDayChange: (d: Date) => void; getEventsByDate: (date: string) => UnifiedEvent[]; onToggle: (e: UnifiedEvent) => void; shiftFilter: Shift | null; moduleFilter: UnifiedModule | null;
  onMoveEvent: (event: UnifiedEvent, newDate: string, newShift?: Shift) => void; onMoveToShift?: (event: UnifiedEvent, targetShift: Shift) => void; isDragOver: boolean; onDragOver: (e: React.DragEvent) => void; onDragLeave: () => void;
}) {
  const dateStr = format(day, 'yyyy-MM-dd');
  const events = getEventsByDate(dateStr);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    try {
      const data = e.dataTransfer.getData('application/json');
      if (data) {
        const event = JSON.parse(data) as UnifiedEvent;
        onMoveEvent(event, dateStr);
      }
    } catch {}
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <button onClick={() => onDayChange(subDays(day, 1))} className="h-8 w-8 flex items-center justify-center rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
        <div className="text-center">
          <p className="text-sm font-semibold capitalize">{format(day, "EEEE, dd 'de' MMMM", { locale: ptBR })}</p>
          {isToday(day) && <Badge className="h-4 px-1.5 text-[10px] bg-primary/10 text-primary border-primary/20 mt-0.5">Hoje</Badge>}
        </div>
        <button onClick={() => onDayChange(addDays(day, 1))} className="h-8 w-8 flex items-center justify-center rounded-md border border-primary/50 text-primary hover:bg-primary/10 transition-colors"><ChevronRight className="h-4 w-4" /></button>
      </div>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={handleDrop}
        className={cn(
          'rounded-xl border bg-muted/30 p-3 transition-all',
          isToday(day) && 'ring-2 ring-primary/40 bg-primary/5',
          isDragOver && 'ring-2 ring-primary bg-primary/5',
        )}
      >
        <DayEventsGrouped events={events} onToggle={onToggle} shiftFilter={shiftFilter} moduleFilter={moduleFilter} onMoveToShift={onMoveToShift} targetDate={dateStr} onMoveEvent={onMoveEvent} />
      </div>
    </div>
  );
}

// ─── Main Agenda Section ──────────────────────────────────────────────────────
export function AgendaSection({
  getEventsByDate, toggleEvent, moveEvent, moveEventToShift, isMobile,
}: {
  getEventsByDate: (date: string) => UnifiedEvent[]; toggleEvent: (e: UnifiedEvent) => void; moveEvent: (event: UnifiedEvent, newDate: string, newShift?: Shift) => void; moveEventToShift?: (event: UnifiedEvent, targetShift: Shift) => void; isMobile: boolean;
}) {
  const [agendaView, setAgendaView] = useState<AgendaView>(isMobile ? 'day' : 'week');
  const [shiftFilter, setShiftFilter] = useState<Shift | null>(null);
  const [moduleFilter, setModuleFilter] = useState<UnifiedModule | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [calMonth, setCalMonth] = useState<Date>(new Date());
  const [dragOverDate, setDragOverDate] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastDragDate = useRef<string | null>(null);

  // ── Pan-to-scroll refs ──
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPanning = useRef(false);
  const panStartX = useRef(0);
  const panScrollLeft = useRef(0);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Only use manual pan for mouse; touch uses native overflow scroll
    if (e.pointerType !== 'mouse') return;
    // Don't pan if clicking on a draggable event card
    if ((e.target as HTMLElement).closest('[draggable="true"]')) return;
    const el = scrollRef.current;
    if (!el) return;
    isPanning.current = true;
    panStartX.current = e.clientX;
    panScrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current || !scrollRef.current) return;
    const dx = e.clientX - panStartX.current;
    scrollRef.current.scrollLeft = panScrollLeft.current - dx;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isPanning.current) return;
    isPanning.current = false;
    scrollRef.current?.releasePointerCapture(e.pointerId);
  }, []);

  // Wheel-to-horizontal-scroll via non-passive listener
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth > el.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const now = new Date();
  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(new Date(now.getFullYear(), now.getMonth(), now.getDate()), i)), []);

  const handleDragOver = useCallback((dateStr: string) => (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (lastDragDate.current === dateStr) return;
    lastDragDate.current = dateStr;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setDragOverDate(dateStr));
  }, []);

  const handleDragLeave = useCallback(() => {
    lastDragDate.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setDragOverDate(null));
  }, []);

  const viewLabels: Record<AgendaView, string> = { month: 'Mensal', week: 'Semanal', day: 'Diário' };

  // ── Print helpers ──
  const renderEventHTML = (ev: UnifiedEvent) => {
    const cfg = MODULE_CONFIG[ev.module];
    const status = ev.completed ? '✓' : '○';
    let extra = '';
    if (ev.priority) extra += `<span class="priority">${ev.priority}</span> `;
    if (ev.amount != null) {
      const cls = ev.transactionType === 'income' ? 'income' : 'expense';
      extra += `<span class="amount ${cls}">R$ ${ev.amount.toFixed(2)}</span>`;
    }
    return `<div class="event"><span class="status">${status}</span><span class="badge" style="background:${cfg.color}20;color:${cfg.color}">${cfg.label}</span><span${ev.completed ? ' style="text-decoration:line-through;opacity:.5"' : ''}>${ev.title}</span>${ev.subtitle ? `<span style="color:#888;font-size:11px">${ev.subtitle}</span>` : ''}${extra}</div>`;
  };

  const renderShiftGroup = (events: UnifiedEvent[]) => {
    const filtered = filterEvents(events, shiftFilter, moduleFilter);
    if (!filtered.length) return '<div style="color:#aaa;font-size:11px;padding:4px 0">Sem eventos</div>';
    const grouped: Record<string, UnifiedEvent[]> = {};
    for (const ev of filtered) {
      const rawShift = (ev.shift || '').toLowerCase();
      const s = rawShift === 'manha' || rawShift === 'morning' ? 'morning' :
                rawShift === 'tarde' || rawShift === 'afternoon' ? 'afternoon' :
                rawShift === 'noite' || rawShift === 'evening' ? 'evening' : 'allday';
      (grouped[s] ??= []).push(ev);
    }
    return SHIFT_ORDER
      .filter(s => grouped[s]?.length)
      .map(s => `<div class="shift-label">${SHIFT_CONFIG[s].icon} ${SHIFT_CONFIG[s].label}</div>${grouped[s].map(renderEventHTML).join('')}`)
      .join('');
  };

  const buildPrintHTML = (): { title: string; html: string } => {
    if (agendaView === 'day') {
      const dateStr = format(selectedDay, 'yyyy-MM-dd');
      const events = getEventsByDate(dateStr);
      const title = `Agenda — ${format(selectedDay, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}`;
      return { title, html: `<div>${renderShiftGroup(events)}</div>` };
    }
    if (agendaView === 'week') {
      const title = `Agenda Semanal — ${format(weekDays[0], "dd/MM", { locale: ptBR })} a ${format(weekDays[6], "dd/MM/yyyy", { locale: ptBR })}`;
      const cols = weekDays.map(d => {
        const dateStr = format(d, 'yyyy-MM-dd');
        const dayLabel = format(d, 'EEE dd/MM', { locale: ptBR });
        const events = getEventsByDate(dateStr);
        return `<td class="day-cell"><strong>${dayLabel}</strong>${renderShiftGroup(events)}</td>`;
      }).join('');
      return { title, html: `<table><tr>${cols}</tr></table>` };
    }
    // month
    const title = `Agenda — ${format(calMonth, "MMMM 'de' yyyy", { locale: ptBR })}`;
    const monthStart = startOfMonth(calMonth);
    const monthEnd = endOfMonth(calMonth);
    const calStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const calEnd = startOfWeek(monthEnd, { weekStartsOn: 0 });
    const calDays = eachDayOfInterval({ start: calStart, end: addDays(calEnd, 6) });
    const weekHeaders = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => `<div class="weekday-header">${d}</div>`).join('');
    const cells = calDays.map(day => {
      const dateStr = format(day, 'yyyy-MM-dd');
      const events = filterEvents(getEventsByDate(dateStr), shiftFilter, moduleFilter);
      const outside = !isSameMonth(day, calMonth);
      const evHtml = events.slice(0, 5).map(ev => {
        const cfg = MODULE_CONFIG[ev.module];
        return `<div style="font-size:10px;color:${cfg.color};${ev.completed ? 'text-decoration:line-through;opacity:.5;' : ''}">${ev.completed ? '✓' : '○'} ${ev.title}</div>`;
      }).join('') + (events.length > 5 ? `<div style="font-size:9px;color:#888">+${events.length - 5}</div>` : '');
      return `<div class="month-cell${outside ? ' outside' : ''}"><div class="day-num">${format(day, 'd')}</div>${evHtml}</div>`;
    }).join('');
    return { title, html: `<div class="month-grid">${weekHeaders}${cells}</div>` };
  };

  const handlePrint = () => {
    const { title, html } = buildPrintHTML();
    printAgendaHTML(title, html);
  };

  return (
    <div className="pt-2">
      <div className="mb-3 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-primary w-14 shrink-0">Período</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {(['month', 'week', 'day'] as AgendaView[]).map(v => (
              <button
                key={v}
                onClick={() => setAgendaView(v)}
                className={cn('px-2.5 py-1 rounded-md text-xs font-medium transition-all border', agendaView === v ? 'bg-primary text-primary-foreground border-primary shadow-sm' : 'bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground')}
              >
                {viewLabels[v]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-primary w-14 shrink-0">Módulos</span>
          <ModuleFilterBar active={moduleFilter} onChange={setModuleFilter} />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-primary w-14 shrink-0">Turno</span>
          <ShiftFilterBar active={shiftFilter} onChange={setShiftFilter} />
        </div>
        <div>
          <Button variant="outline" size="sm" className="gap-2" onClick={handlePrint}>
            <Printer className="h-4 w-4" />
            Imprimir Agenda
          </Button>
        </div>
      </div>

      {agendaView === 'month' && (
        <div className="rounded-xl border bg-card p-4">
          <MonthView month={calMonth} onMonthChange={setCalMonth} onDayClick={(d) => { setSelectedDay(d); setAgendaView('day'); }} getEventsByDate={getEventsByDate} shiftFilter={shiftFilter} moduleFilter={moduleFilter} onToggle={toggleEvent} />
        </div>
      )}

      {agendaView === 'week' && (
        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ touchAction: 'pan-x pan-y' }}
          className="w-full overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
        >
          <div className="flex gap-3 pb-4 w-max">
            {weekDays.map(day => {
              const dateStr = format(day, 'yyyy-MM-dd');
              return <DayColumn key={dateStr} date={day} events={getEventsByDate(dateStr)} onToggle={toggleEvent} shiftFilter={shiftFilter} moduleFilter={moduleFilter} onMoveEvent={moveEvent} onMoveToShift={moveEventToShift} isDragOver={dragOverDate === dateStr} onDragOver={handleDragOver(dateStr)} onDragLeave={handleDragLeave} />;
            })}
          </div>
        </div>
      )}

      {agendaView === 'day' && (
        <div className="max-w-lg">
          <DayView day={selectedDay} onDayChange={setSelectedDay} getEventsByDate={getEventsByDate} onToggle={toggleEvent} shiftFilter={shiftFilter} moduleFilter={moduleFilter} onMoveEvent={moveEvent} onMoveToShift={moveEventToShift} isDragOver={dragOverDate === format(selectedDay, 'yyyy-MM-dd')} onDragOver={handleDragOver(format(selectedDay, 'yyyy-MM-dd'))} onDragLeave={handleDragLeave} />
        </div>
      )}
    </div>
  );
}
