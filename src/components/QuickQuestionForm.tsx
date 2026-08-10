import { useState } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { Button } from '@/components/ui/button';
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
import { toast } from 'sonner';
import { getLocalDateString } from '@/lib/dates';
import { Check, X, Flag } from 'lucide-react';

interface QuickQuestionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedSubjectId?: string;
  preselectedLessonNumber?: number;
}

type Phase = 'setup' | 'quiz' | 'summary';

export function QuickQuestionForm({ 
  open, 
  onOpenChange, 
  preselectedSubjectId,
  preselectedLessonNumber 
}: QuickQuestionFormProps) {
  const { data, addQuestionSession, getLessonsBySubject } = useStudy();
  
  const [subjectId, setSubjectId] = useState(preselectedSubjectId || '');
  const [lessonNumber, setLessonNumber] = useState<string>(
    preselectedLessonNumber?.toString() || ''
  );
  const [phase, setPhase] = useState<Phase>('setup');
  const [answers, setAnswers] = useState<boolean[]>([]);

  const lessons = subjectId ? getLessonsBySubject(subjectId) : [];
  const subject = data.subjects.find(s => s.id === subjectId);

  const correctCount = answers.filter(a => a).length;
  const wrongCount = answers.filter(a => !a).length;
  const total = answers.length;
  const percentage = total > 0 ? ((correctCount / total) * 100).toFixed(1) : '0';

  const handleStartQuiz = () => {
    if (!subjectId || !lessonNumber) {
      toast.error('Selecione matéria e aula');
      return;
    }
    setAnswers([]);
    setPhase('quiz');
  };

  const handleAnswer = (correct: boolean) => {
    setAnswers(prev => [...prev, correct]);
  };

  const handleFinish = () => {
    if (answers.length === 0) {
      toast.error('Responda pelo menos uma questão');
      return;
    }
    setPhase('summary');
  };

  const [saving, setSaving] = useState(false);
  const handleSave = async () => {
    if (saving) return;
    setSaving(true);
    try {
      await addQuestionSession({
        id: `session-${Date.now()}`,
        subjectId,
        lessonNumber: parseInt(lessonNumber),
        questionsCount: total,
        correctAnswers: correctCount,
        date: getLocalDateString(),
      });
      toast.success(`Registrado! Desempenho: ${percentage}%`);
      handleClose();
    } catch (e: any) {
      toast.error(`Erro ao salvar: ${e?.message ?? 'tente novamente'}`);
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    setPhase('setup');
    setAnswers([]);
    setSubjectId(preselectedSubjectId || '');
    setLessonNumber(preselectedLessonNumber?.toString() || '');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {phase === 'setup' && 'Registrar Questões'}
            {phase === 'quiz' && 'Quiz em Andamento'}
            {phase === 'summary' && 'Resultado'}
          </DialogTitle>
        </DialogHeader>

        {phase === 'setup' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Matéria</Label>
              <Select value={subjectId} onValueChange={(v) => { setSubjectId(v); setLessonNumber(''); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a matéria" />
                </SelectTrigger>
                <SelectContent>
                  {data.subjects.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                        {s.name}
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

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleStartQuiz}>Iniciar Quiz</Button>
            </div>
          </div>
        )}

        {phase === 'quiz' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <p className="text-sm text-muted-foreground">
                {subject?.name} — Aula {lessonNumber}
              </p>
              <p className="text-4xl font-bold">Questão {total + 1}</p>
            </div>

            {answers.length > 0 && (
              <div className="flex flex-wrap gap-1.5 justify-center">
                {answers.map((correct, i) => (
                  <div
                    key={i}
                    className={`h-3 w-3 rounded-full ${correct ? 'bg-green-500' : 'bg-red-500'}`}
                  />
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Button
                size="lg"
                className="h-20 text-lg bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleAnswer(true)}
              >
                <Check className="h-6 w-6 mr-2" />
                Acertei
              </Button>
              <Button
                size="lg"
                className="h-20 text-lg bg-red-600 hover:bg-red-700 text-white"
                onClick={() => handleAnswer(false)}
              >
                <X className="h-6 w-6 mr-2" />
                Errei
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              {correctCount} acertos · {wrongCount} erros
            </div>

            <Button variant="outline" className="w-full" onClick={handleFinish}>
              <Flag className="h-4 w-4 mr-2" />
              Finalizar
            </Button>
          </div>
        )}

        {phase === 'summary' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <p className="text-sm text-muted-foreground">
                {subject?.name} — Aula {lessonNumber}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-3xl font-bold">{total}</p>
                <p className="text-xs text-muted-foreground">Questões</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-green-500">{correctCount}</p>
                <p className="text-xs text-muted-foreground">Acertos</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-red-500">{wrongCount}</p>
                <p className="text-xs text-muted-foreground">Erros</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold">{percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">Aproveitamento</p>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-center">
              {answers.map((correct, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${correct ? 'bg-green-500' : 'bg-red-500'}`}
                />
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setPhase('quiz')}>Voltar</Button>
              <Button onClick={handleSave} disabled={saving}>{saving ? 'Salvando...' : 'Salvar'}</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
