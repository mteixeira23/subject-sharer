import { useState, useCallback } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { usePomodoroTimer } from '@/hooks/usePomodoroTimer';
import { PomodoroSession } from '@/types/pomodoro';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, Pause, Square, RotateCcw, Timer } from 'lucide-react';
import { toast } from 'sonner';

import { getLocalDateString } from '@/lib/dates';

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
}

interface PomodoroTimerProps {
  compact?: boolean;
}

export function PomodoroTimer({ compact = false }: PomodoroTimerProps) {
  const { data, addPomodoroSession } = useStudy();
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [selectedLesson, setSelectedLesson] = useState('');

  const handleSessionComplete = useCallback((duration: number) => {
    if (!selectedSubjectId) return;
    const session: PomodoroSession = {
      id: `pomo-${Date.now()}`,
      subjectId: selectedSubjectId,
      lessonNumber: selectedLesson ? parseInt(selectedLesson) : 1,
      startedAt: new Date().toISOString(),
      duration,
      completed: true,
      date: getLocalDateString(),
    };
    addPomodoroSession(session);
    const mins = Math.floor(duration / 60);
    const secs = duration % 60;
    toast.success(`Sessão salva: ${mins > 0 ? `${mins}min ` : ''}${secs}s`);
  }, [selectedSubjectId, selectedLesson, addPomodoroSession]);

  const { isRunning, elapsedSeconds, start, pause, finish, reset } = usePomodoroTimer({
    onSessionComplete: handleSessionComplete,
  });

  const subjectLessons = selectedSubjectId
    ? data.lessons.filter(l => l.subjectId === selectedSubjectId).sort((a, b) => a.number - b.number)
    : [];

  if (compact) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" className="gap-2">
            <Timer className="h-4 w-4" />
            {isRunning || elapsedSeconds > 0 ? formatTime(elapsedSeconds) : 'Cronômetro de Aula'}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cronômetro de Aula</DialogTitle>
          </DialogHeader>
          <TimerContent
            data={data}
            isRunning={isRunning}
            elapsedSeconds={elapsedSeconds}
            selectedSubjectId={selectedSubjectId}
            setSelectedSubjectId={setSelectedSubjectId}
            selectedLesson={selectedLesson}
            setSelectedLesson={setSelectedLesson}
            subjectLessons={subjectLessons}
            start={start}
            pause={pause}
            finish={finish}
            reset={reset}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Timer className="h-5 w-5 text-primary" />
          Cronômetro de Aula
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TimerContent
          data={data}
          isRunning={isRunning}
          elapsedSeconds={elapsedSeconds}
          selectedSubjectId={selectedSubjectId}
          setSelectedSubjectId={setSelectedSubjectId}
          selectedLesson={selectedLesson}
          setSelectedLesson={setSelectedLesson}
          subjectLessons={subjectLessons}
          start={start}
          pause={pause}
          finish={finish}
          reset={reset}
        />
      </CardContent>
    </Card>
  );
}

interface TimerContentProps {
  data: ReturnType<typeof useStudy>['data'];
  isRunning: boolean;
  elapsedSeconds: number;
  selectedSubjectId: string;
  setSelectedSubjectId: (v: string) => void;
  selectedLesson: string;
  setSelectedLesson: (v: string) => void;
  subjectLessons: { number: number; name?: string }[];
  start: () => void;
  pause: () => void;
  finish: () => number;
  reset: () => void;
}

function TimerContent({
  data, isRunning, elapsedSeconds,
  selectedSubjectId, setSelectedSubjectId, selectedLesson, setSelectedLesson, subjectLessons,
  start, pause, finish, reset,
}: TimerContentProps) {
  const hasStarted = isRunning || elapsedSeconds > 0;

  return (
    <div className="space-y-4">
      {/* Subject/Lesson selector */}
      <div className="grid grid-cols-2 gap-2">
        <Select value={selectedSubjectId} onValueChange={(v) => { setSelectedSubjectId(v); setSelectedLesson(''); }} disabled={hasStarted}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="Matéria" />
          </SelectTrigger>
          <SelectContent>
            {data.subjects.map(s => (
              <SelectItem key={s.id} value={s.id}>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedLesson} onValueChange={setSelectedLesson} disabled={!selectedSubjectId || hasStarted}>
          <SelectTrigger className="text-sm">
            <SelectValue placeholder="Aula" />
          </SelectTrigger>
          <SelectContent>
            {subjectLessons.map(l => (
              <SelectItem key={l.number} value={l.number.toString()}>
                Aula {l.number}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Timer display */}
      <div className={`rounded-xl p-6 text-center ${isRunning ? 'bg-primary/10' : 'bg-muted'}`}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Timer className={`h-5 w-5 ${isRunning ? 'text-primary' : 'text-muted-foreground'}`} />
          <span className={`text-sm font-medium ${isRunning ? 'text-primary' : 'text-muted-foreground'}`}>
            {isRunning ? 'Estudando...' : hasStarted ? 'Pausado' : 'Pronto para começar'}
          </span>
        </div>
        <div className={`text-5xl font-mono font-bold tabular-nums ${isRunning ? 'text-primary' : 'text-foreground'}`}>
          {formatTime(elapsedSeconds)}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <Button variant="outline" size="icon" onClick={reset} className="h-10 w-10" disabled={!hasStarted}>
          <RotateCcw className="h-4 w-4" />
        </Button>
        {isRunning ? (
          <Button onClick={pause} size="lg" className="h-12 w-12 rounded-full">
            <Pause className="h-5 w-5" />
          </Button>
        ) : (
          <Button onClick={start} size="lg" className="h-12 w-12 rounded-full" disabled={!selectedSubjectId}>
            <Play className="h-5 w-5 ml-0.5" />
          </Button>
        )}
        <Button
          variant="destructive"
          size="icon"
          onClick={finish}
          className="h-10 w-10"
          disabled={!hasStarted}
        >
          <Square className="h-4 w-4" />
        </Button>
      </div>

      {/* Label */}
      <p className="text-center text-xs text-muted-foreground">
        {hasStarted ? 'Clique ■ para finalizar e salvar a sessão' : 'Selecione matéria e clique ▶ para iniciar'}
      </p>
    </div>
  );
}
