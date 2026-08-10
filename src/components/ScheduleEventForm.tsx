import { useState } from 'react';
import { format } from 'date-fns';
import { useStudy } from '@/contexts/StudyContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { Shift, SHIFT_CONFIG, SHIFT_ORDER } from '@/lib/shifts';

interface ScheduleEventFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedDate?: Date;
}

export function ScheduleEventForm({ open, onOpenChange, preselectedDate }: ScheduleEventFormProps) {
  const { data, addScheduleEvent, getLessonsBySubject } = useStudy();
  
  const [date, setDate] = useState<Date | undefined>(preselectedDate);
  const [subjectId, setSubjectId] = useState('');
  const [lessonNumber, setLessonNumber] = useState('');
  const [eventType, setEventType] = useState<'theory' | 'review' | 'questions'>('theory');
  const [description, setDescription] = useState('');
  const [shift, setShift] = useState<Shift | undefined>(undefined);

  const lessons = subjectId ? getLessonsBySubject(subjectId) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !subjectId || !lessonNumber) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    addScheduleEvent({
      id: `event-${Date.now()}`,
      date: format(date, 'yyyy-MM-dd'),
      subjectId,
      lessonNumber: parseInt(lessonNumber),
      type: eventType,
      completed: false,
      description: description || undefined,
      shift: shift || undefined,
    });

    toast.success('Evento adicionado ao cronograma');
    
    // Reset form
    setSubjectId('');
    setLessonNumber('');
    setEventType('theory');
    setDescription('');
    setShift(undefined);
    onOpenChange(false);
  };

  const eventTypeLabels = {
    theory: 'Teoria',
    review: 'Revisão',
    questions: 'Questões',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agendar Estudo</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Data</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Selecione uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Matéria</Label>
            <Select value={subjectId} onValueChange={(v) => { setSubjectId(v); setLessonNumber(''); }}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a matéria" />
              </SelectTrigger>
              <SelectContent>
                {data.subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    <div className="flex items-center gap-2">
                      <div 
                        className="h-2 w-2 rounded-full" 
                        style={{ backgroundColor: subject.color }}
                      />
                      {subject.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Aula/Capítulo</Label>
            <Select value={lessonNumber} onValueChange={setLessonNumber} disabled={!subjectId}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a aula" />
              </SelectTrigger>
              <SelectContent>
                {lessons.map((lesson) => (
                  <SelectItem key={lesson.id} value={lesson.number.toString()}>
                    Aula {lesson.number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Tipo de Atividade</Label>
            <Select value={eventType} onValueChange={(v) => setEventType(v as typeof eventType)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(eventTypeLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Turno <span className="text-muted-foreground font-normal text-xs">(opcional)</span></Label>
            <div className="flex flex-wrap gap-1.5">
              {SHIFT_ORDER.map(s => {
                const cfg = SHIFT_CONFIG[s];
                const active = shift === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setShift(active ? undefined : s)}
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

          <div className="space-y-2">
            <Label>Descrição (opcional)</Label>
            <div className="flex gap-1.5 items-center">
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Foco em exercícios de fixação"
                className="flex-1"
              />
              <VoiceInputButton onTranscript={t => setDescription(v => v ? v + ' ' + t : t)} />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
