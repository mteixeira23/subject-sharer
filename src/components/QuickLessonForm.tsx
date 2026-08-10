import { useState } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
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

interface QuickLessonFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuickLessonForm({ open, onOpenChange }: QuickLessonFormProps) {
  const { data, updateLesson, getLessonsBySubject } = useStudy();

  const [subjectId, setSubjectId] = useState('');
  const [lessonNumber, setLessonNumber] = useState('');
  const [markTheoryCompleted, setMarkTheoryCompleted] = useState(false);
  const [markReviewCompleted, setMarkReviewCompleted] = useState(false);

  const lessons = subjectId ? getLessonsBySubject(subjectId) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!subjectId || !lessonNumber) {
      toast.error('Selecione a matéria e a aula');
      return;
    }

    if (!markTheoryCompleted && !markReviewCompleted) {
      toast.error('Marque pelo menos uma opção (teoria ou revisão)');
      return;
    }

    const lesson = lessons.find(l => l.number === parseInt(lessonNumber));
    if (!lesson) return;

    updateLesson(lesson.id, {
      ...(markTheoryCompleted && { theoryCompleted: true }),
      ...(markReviewCompleted && { reviewCompleted: true }),
    });

    const parts = [];
    if (markTheoryCompleted) parts.push('teoria');
    if (markReviewCompleted) parts.push('revisão');
    toast.success(`Aula ${lesson.number} - ${parts.join(' e ')} marcada(s) como concluída(s)`);

    setLessonNumber('');
    setMarkTheoryCompleted(false);
    setMarkReviewCompleted(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Registrar Aulas</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: subject.color }} />
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

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="theory"
                checked={markTheoryCompleted}
                onCheckedChange={(checked) => setMarkTheoryCompleted(checked as boolean)}
              />
              <Label htmlFor="theory" className="text-sm font-normal">
                Marcar teoria como concluída
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="review"
                checked={markReviewCompleted}
                onCheckedChange={(checked) => setMarkReviewCompleted(checked as boolean)}
              />
              <Label htmlFor="review" className="text-sm font-normal">
                Marcar revisão como concluída
              </Label>
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
