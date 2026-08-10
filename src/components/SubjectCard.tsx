import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Subject } from '@/types/study';
import { useStudy } from '@/contexts/StudyContext';
import { cn } from '@/lib/utils';

interface SubjectCardProps {
  subject: Subject;
  onClick?: () => void;
}

function formatStudyTime(seconds: number): string {
  if (seconds <= 0) return '-';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours >= 1) return `${hours}h ${minutes > 0 ? `${minutes}min` : ''}`.trim();
  return `${minutes}min`;
}

export function SubjectCard({ subject, onClick }: SubjectCardProps) {
  const { getSubjectProgress, getStudyTimeBySubject } = useStudy();
  const progress = getSubjectProgress(subject.id);
  const studyTime = getStudyTimeBySubject(subject.id);

  const getPerformanceColor = (perf: number) => {
    if (perf >= 80) return 'text-success';
    if (perf >= 60) return 'text-warning';
    if (perf > 0) return 'text-danger';
    return 'text-muted-foreground';
  };

  return (
    <Card 
      className={cn(
        'cursor-pointer transition-all hover:shadow-md hover:border-primary/50',
        onClick && 'hover:scale-[1.02]'
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div 
            className="h-3 w-3 rounded-full" 
            style={{ backgroundColor: subject.color }}
          />
          <CardTitle className="text-base font-medium line-clamp-1">
            {subject.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Teoria */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Teoria</span>
            <span className="font-medium">{progress.theoryCompleted}/{progress.totalLessons} aulas</span>
          </div>
          <Progress value={progress.theoryProgress} className="h-2" />
        </div>
        {/* Revisão */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Revisão</span>
            <span className="font-medium">{progress.reviewCompleted}/{progress.totalLessons} aulas</span>
          </div>
          <Progress value={progress.reviewProgress} className="h-2 [&>div]:bg-warning" />
        </div>
        {/* Aulas com questões */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Questões</span>
            <span className="font-medium">{progress.lessonsWithQuestions}/{progress.totalLessons} aulas</span>
          </div>
          <Progress value={progress.questionsLessonsProgress} className="h-2 [&>div]:bg-primary" />
        </div>
        {/* Completo */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Completo</span>
            <span className="font-medium">{progress.fullyCompleted}/{progress.totalLessons} aulas</span>
          </div>
          <Progress value={progress.completeProgress} className="h-2 [&>div]:bg-success" />
        </div>
        <div className="flex justify-between text-sm pt-1">
          <span className="text-muted-foreground">Total Questões</span>
          <span className="font-medium">{progress.totalQuestions}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Desempenho</span>
          <span className={cn('font-medium', getPerformanceColor(progress.performance))}>
            {progress.totalQuestions > 0 ? `${progress.performance.toFixed(1)}%` : '-'}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tempo Estudado</span>
          <span className="font-medium">{formatStudyTime(studyTime)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
