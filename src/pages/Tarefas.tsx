import { useState } from 'react';
import { ModuleGoals } from '@/components/ModuleGoals';
import { useTasks } from '@/contexts/TaskContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  CheckSquare,
  Plus,
  Pencil,
  Trash2,
  CalendarIcon,
  CheckCircle2,
  Circle,
  AlertCircle,
  Clock,
  RefreshCw,
} from 'lucide-react';
import { format, isPast, parseISO, isToday, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Task, TaskPriority, RecurrenceMode } from '@/types/tasks';
import { isRecurringTaskDoneOn, isTaskActiveOnDate } from '@/hooks/useTaskData';
import { Shift, SHIFT_CONFIG, SHIFT_ORDER } from '@/lib/shifts';

type FilterTab = 'today' | 'week' | 'all' | 'done';

const PRIORITY_CONFIG: Record<TaskPriority, { label: string; badgeClass: string; dotClass: string }> = {
  Alta:  { label: 'Alta',  badgeClass: 'bg-destructive/15 text-destructive border-destructive/30',         dotClass: 'bg-destructive' },
  Média: { label: 'Média', badgeClass: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30', dotClass: 'bg-yellow-500' },
  Baixa: { label: 'Baixa', badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30', dotClass: 'bg-emerald-500' },
};

const FILTER_LABELS: Record<FilterTab, string> = {
  today: 'Hoje',
  week:  'Esta semana',
  all:   'Todas',
  done:  'Concluídas',
};

// Portuguese day abbreviations Sun→Sat
const DAY_LABELS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const DAY_FULL   = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

interface TaskForm {
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate: Date | undefined;
  recurrenceMode: RecurrenceMode;
  recurrenceDays: number[];
  shift: Shift | undefined;
}

const EMPTY_FORM: TaskForm = {
  title: '',
  description: '',
  priority: 'Média',
  dueDate: undefined,
  recurrenceMode: 'once',
  recurrenceDays: [],
  shift: undefined,
};

export default function Tarefas() {
  const { data, addTask, updateTask, deleteTask, toggleComplete, getPendingCount, getFilteredTasks } = useTasks();

  const [tab, setTab] = useState<FilterTab>('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [form, setForm] = useState<TaskForm>(EMPTY_FORM);
  const [calOpen, setCalOpen] = useState(false);

  const pendingCount = getPendingCount();
  const rawTasks = getFilteredTasks(tab);

  // Counts for badge tabs
  const todayCount  = getFilteredTasks('today').length;
  const allCount    = getFilteredTasks('all').length;
  const doneCount   = getFilteredTasks('done').length;

  // Expand recurring tasks into one row per active day for the week view
  const weekDays = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 0 }),
    end: endOfWeek(new Date(), { weekStartsOn: 0 }),
  });

  type WeekRow = { task: Task; rowDate: string | null };
  const tasks: WeekRow[] = tab === 'week'
    ? rawTasks.flatMap(task => {
        const mode = task.recurrenceMode ?? 'once';
        if (mode === 'once') return [{ task, rowDate: null }];
        return weekDays
          .filter(d => isTaskActiveOnDate(task, format(d, 'yyyy-MM-dd')))
          .map(d => ({ task, rowDate: format(d, 'yyyy-MM-dd') }));
      })
    : rawTasks.map(task => ({ task, rowDate: null }));

  const weekCount = tab === 'week' ? tasks.length : (() => {
    const wt = getFilteredTasks('week');
    return wt.reduce((acc, task) => {
      const mode = task.recurrenceMode ?? 'once';
      if (mode === 'once') return acc + 1;
      return acc + weekDays.filter(d => isTaskActiveOnDate(task, format(d, 'yyyy-MM-dd'))).length;
    }, 0);
  })();

  function openCreate() {
    setEditingTask(null);
    setForm(EMPTY_FORM);
    setDialogOpen(true);
  }

  function openEdit(task: Task) {
    setEditingTask(task);
    setForm({
      title: task.title,
      description: task.description ?? '',
      priority: task.priority,
      dueDate: task.dueDate ? new Date(task.dueDate + 'T12:00:00') : undefined,
      recurrenceMode: task.recurrenceMode ?? 'once',
      recurrenceDays: task.recurrenceDays ?? [],
      shift: task.shift,
    });
    setDialogOpen(true);
  }

  function handleSave() {
    if (!form.title.trim()) return;
    const payload = {
      title: form.title.trim(),
      description: form.description.trim() || undefined,
      priority: form.priority,
      dueDate: form.dueDate ? format(form.dueDate, 'yyyy-MM-dd') : undefined,
      recurrenceMode: form.recurrenceMode,
      recurrenceDays: form.recurrenceMode === 'weekly' ? form.recurrenceDays : undefined,
      shift: form.shift,
    };
    if (editingTask) {
      updateTask(editingTask.id, payload);
    } else {
      addTask(payload);
    }
    setDialogOpen(false);
    setForm(EMPTY_FORM);
    setEditingTask(null);
  }

  function handleDelete() {
    if (deleteId) { deleteTask(deleteId); setDeleteId(null); }
  }

  function isDueDateOverdue(dueDate?: string) {
    if (!dueDate) return false;
    const d = parseISO(dueDate);
    return !isToday(d) && isPast(d);
  }

  function toggleDay(day: number) {
    setForm(f => ({
      ...f,
      recurrenceDays: f.recurrenceDays.includes(day)
        ? f.recurrenceDays.filter(d => d !== day)
        : [...f.recurrenceDays, day],
    }));
  }

  function getRecurrenceBadge(task: Task) {
    const mode = task.recurrenceMode ?? 'once';
    if (mode === 'daily') return '🔁 Diária';
    if (mode === 'weekly') {
      const days = (task.recurrenceDays ?? []).sort().map(d => DAY_FULL[d]).join(', ');
      return `🔁 ${days || 'Sem dias'}`;
    }
    return null;
  }

  const today = format(new Date(), 'yyyy-MM-dd');

  function isTaskDoneToday(task: Task) {
    const mode = task.recurrenceMode ?? 'once';
    if (mode !== 'once') return isRecurringTaskDoneOn(task, today);
    return task.completed;
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="border-b bg-background px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="hidden md:inline-flex" />
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
              <CheckSquare className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">
                Tarefas
                {pendingCount > 0 && (
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    ({pendingCount} pendente{pendingCount > 1 ? 's' : ''})
                  </span>
                )}
              </h1>
              <p className="text-xs text-muted-foreground">
                {format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" onClick={openCreate}>
            <Plus className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Nova Tarefa</span>
            <span className="sm:hidden">Nova</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 space-y-4">
        <ModuleGoals categories={['tasks']} />
        {/* ── Filter tabs ───────────────────────────────────────────────── */}
        <Tabs value={tab} onValueChange={v => setTab(v as FilterTab)}>
          <TabsList className="h-auto gap-1 p-1">
            {(['today', 'week', 'all', 'done'] as FilterTab[]).map(f => {
              const count = { today: todayCount, week: weekCount, all: allCount, done: doneCount }[f];
              return (
                <TabsTrigger key={f} value={f} className="gap-1.5 px-3">
                  {FILTER_LABELS[f]}
                  {count > 0 && (
                    <span className={cn(
                      'inline-flex h-4 min-w-4 px-1 items-center justify-center rounded-full text-[10px] font-bold',
                      tab === f ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted-foreground/20 text-muted-foreground',
                    )}>
                      {count}
                    </span>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* ── Task list ─────────────────────────────────────────────────── */}
        {tasks.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center gap-3 py-14 text-muted-foreground">
              <CheckCircle2 className="h-12 w-12 opacity-20" />
              <p className="text-sm font-medium">
                {tab === 'done' ? 'Nenhuma tarefa concluída ainda' :
                 tab === 'today' ? 'Nenhuma tarefa para hoje 🎉' :
                 tab === 'week' ? 'Nenhuma tarefa para esta semana' :
                 'Nenhuma tarefa pendente 🎉'}
              </p>
              {tab !== 'done' && (
                <Button variant="outline" size="sm" onClick={openCreate}>
                  <Plus className="h-4 w-4 mr-1" /> Criar tarefa
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            {tasks.map(({ task, rowDate }, idx) => {
              const pConfig = PRIORITY_CONFIG[task.priority];
              const mode = task.recurrenceMode ?? 'once';
              const effectiveDate = rowDate ?? (format(new Date(), 'yyyy-MM-dd'));
              const isDoneOnDate = mode !== 'once'
                ? isRecurringTaskDoneOn(task, effectiveDate)
                : task.completed;
              const overdue = mode === 'once' && !task.completed && isDueDateOverdue(task.dueDate);
              const dueToday = mode === 'once' && task.dueDate && isToday(parseISO(task.dueDate));
              const recurrenceBadge = getRecurrenceBadge(task);
              // For week view rows: show the specific day label; hide recurrence badge (row per day is self-explanatory)
              const isWeekExpanded = tab === 'week' && mode !== 'once' && rowDate !== null;

              return (
                <div
                  key={`${task.id}-${rowDate ?? 'once'}-${idx}`}
                  className={cn(
                    'group flex items-start gap-3 rounded-xl border bg-card px-4 py-3 transition-all hover:shadow-sm',
                    isDoneOnDate && 'opacity-60',
                    overdue && 'border-destructive/40 bg-destructive/5',
                  )}
                >
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleComplete(task.id, rowDate ?? undefined)}
                    className={cn(
                      'mt-0.5 flex-shrink-0 transition-colors',
                      isDoneOnDate ? 'text-emerald-500' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {isDoneOnDate
                      ? <CheckCircle2 className="h-5 w-5" />
                      : <Circle className="h-5 w-5" />}
                  </button>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className={cn(
                        'font-medium text-sm',
                        isDoneOnDate && 'line-through text-muted-foreground',
                      )}>
                        {task.title}
                      </p>
                      {/* Priority badge */}
                      <Badge
                        variant="outline"
                        className={cn('h-5 px-1.5 text-[10px] font-semibold border', pConfig.badgeClass)}
                      >
                        <span className={cn('mr-1 h-1.5 w-1.5 rounded-full inline-block', pConfig.dotClass)} />
                        {pConfig.label}
                      </Badge>
                      {/* Recurrence badge (only for non-expanded rows) */}
                      {recurrenceBadge && !isWeekExpanded && (
                        <Badge
                          variant="outline"
                          className="h-5 px-1.5 text-[10px] font-medium border-primary/30 bg-primary/5 text-primary"
                        >
                          {recurrenceBadge}
                        </Badge>
                      )}
                      {/* Shift badge */}
                      {task.shift && (
                        <Badge
                          variant="outline"
                          className="h-5 px-1.5 text-[10px] font-medium border-muted-foreground/30 bg-muted/50 text-muted-foreground"
                        >
                          {SHIFT_CONFIG[task.shift].icon} {SHIFT_CONFIG[task.shift].label}
                        </Badge>
                      )}
                    </div>

                    {task.description && (
                      <p className="text-xs text-muted-foreground truncate">{task.description}</p>
                    )}

                    {/* Week-expanded row: show specific day label */}
                    {isWeekExpanded && rowDate && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <RefreshCw className="h-3 w-3" />
                        {format(parseISO(rowDate), "EEE '·' dd/MM", { locale: ptBR })}
                      </div>
                    )}

                    {/* Due date (one-time) */}
                    {mode === 'once' && task.dueDate && (
                      <div className={cn(
                        'flex items-center gap-1 text-xs',
                        overdue ? 'text-destructive font-medium' :
                        dueToday ? 'text-yellow-600 dark:text-yellow-400 font-medium' :
                        'text-muted-foreground',
                      )}>
                        {overdue
                          ? <AlertCircle className="h-3 w-3" />
                          : <Clock className="h-3 w-3" />}
                        {overdue ? 'Venceu em ' : dueToday ? 'Vence hoje · ' : ''}
                        {format(parseISO(task.dueDate), "dd 'de' MMM", { locale: ptBR })}
                        {overdue && ' · Atrasada'}
                      </div>
                    )}

                    {/* End date for recurring (non-expanded rows only) */}
                    {mode !== 'once' && task.dueDate && !isWeekExpanded && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        Até {format(parseISO(task.dueDate), "dd 'de' MMM", { locale: ptBR })}
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5">
                    {!isDoneOnDate && !isWeekExpanded && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground hover:text-foreground"
                        onClick={() => openEdit(task)}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive"
                      onClick={() => setDeleteId(task.id)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Create / Edit Dialog ─────────────────────────────────────────── */}
      <Dialog open={dialogOpen} onOpenChange={open => { setDialogOpen(open); if (!open) { setForm(EMPTY_FORM); setEditingTask(null); } }}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-1">
            {/* Title */}
            <div>
              <Label className="text-sm mb-2 block">Título <span className="text-destructive">*</span></Label>
              <div className="flex gap-1.5 items-center">
                <Input
                  placeholder="O que precisa ser feito?"
                  value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  autoFocus
                  className="flex-1"
                />
                <VoiceInputButton onTranscript={t => setForm(f => ({ ...f, title: f.title ? f.title + ' ' + t : t }))} />
              </div>
            </div>

            {/* Description */}
            <div>
              <Label className="text-sm mb-2 block">Descrição <span className="text-muted-foreground font-normal">(opcional)</span></Label>
              <div className="flex gap-1.5 items-start">
                <Textarea
                  placeholder="Detalhes adicionais..."
                  rows={2}
                  value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  className="resize-none flex-1"
                />
                <VoiceInputButton onTranscript={t => setForm(f => ({ ...f, description: (f.description || '') ? f.description + ' ' + t : t }))} className="mt-2" />
              </div>
            </div>

            {/* Priority */}
            <div>
              <Label className="text-sm mb-2 block">Prioridade</Label>
              <Select
                value={form.priority}
                onValueChange={v => setForm(f => ({ ...f, priority: v as TaskPriority }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(['Alta', 'Média', 'Baixa'] as TaskPriority[]).map(p => (
                    <SelectItem key={p} value={p}>
                      <div className="flex items-center gap-2">
                        <span className={cn('h-2 w-2 rounded-full', PRIORITY_CONFIG[p].dotClass)} />
                        {p}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* ── Recurrence ──────────────────────────────────────────────── */}
            <div>
              <Label className="text-sm mb-2 block flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5" /> Recorrência
              </Label>

              {/* Segmented control */}
              <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-muted">
                {([
                  { value: 'once',   label: 'Uma vez' },
                  { value: 'weekly', label: 'Dias da semana' },
                  { value: 'daily',  label: 'Todo dia' },
                ] as { value: RecurrenceMode; label: string }[]).map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, recurrenceMode: opt.value }))}
                    className={cn(
                      'rounded-md px-2 py-1.5 text-xs font-medium transition-all',
                      form.recurrenceMode === opt.value
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Day picker for 'weekly' */}
              {form.recurrenceMode === 'weekly' && (
                <div className="mt-3">
                  <p className="text-xs text-muted-foreground mb-2">Selecione os dias da semana:</p>
                  <div className="flex gap-1.5">
                    {DAY_LABELS.map((label, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleDay(idx)}
                        className={cn(
                          'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold border-2 transition-all',
                          form.recurrenceDays.includes(idx)
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground',
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  {form.recurrenceDays.length === 0 && (
                    <p className="text-xs text-destructive mt-1.5">Selecione pelo menos um dia</p>
                  )}
                </div>
              )}
            </div>

            {/* ── Turno ─────────────────────────────────────────────────── */}
            <div>
              <Label className="text-sm mb-2 block">Turno <span className="text-muted-foreground font-normal">(opcional)</span></Label>
              <div className="flex flex-wrap gap-1.5">
                {SHIFT_ORDER.map(s => {
                  const cfg = SHIFT_CONFIG[s];
                  const active = form.shift === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, shift: active ? undefined : s }))}
                      className={cn(
                        'flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-all',
                        active
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background text-muted-foreground hover:border-muted-foreground hover:text-foreground',
                      )}
                    >
                      <span>{cfg.icon}</span> {cfg.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Due date / End date */}
            <div>
              <Label className="text-sm mb-2 block">
                {form.recurrenceMode === 'once' ? 'Data limite' : 'Data de encerramento'}
                {' '}
                <span className="text-muted-foreground font-normal">(opcional)</span>
              </Label>
              <Popover open={calOpen} onOpenChange={setCalOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !form.dueDate && 'text-muted-foreground',
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {form.dueDate
                      ? format(form.dueDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                      : form.recurrenceMode === 'once' ? 'Sem data limite' : 'Sem encerramento'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={form.dueDate}
                    onSelect={d => { setForm(f => ({ ...f, dueDate: d })); setCalOpen(false); }}
                    initialFocus
                    className="p-3 pointer-events-auto"
                    locale={ptBR}
                  />
                  {form.dueDate && (
                    <div className="border-t p-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-muted-foreground"
                        onClick={() => { setForm(f => ({ ...f, dueDate: undefined })); setCalOpen(false); }}
                      >
                        Remover data
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => { setDialogOpen(false); setForm(EMPTY_FORM); setEditingTask(null); }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              disabled={
                !form.title.trim() ||
                (form.recurrenceMode === 'weekly' && form.recurrenceDays.length === 0)
              }
            >
              {editingTask ? 'Salvar alterações' : 'Criar tarefa'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete confirmation ───────────────────────────────────────────── */}
      <AlertDialog open={!!deleteId} onOpenChange={open => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir tarefa?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. A tarefa será removida permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDelete}
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
