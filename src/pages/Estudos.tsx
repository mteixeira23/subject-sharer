import { useState } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { StatsCard } from '@/components/StatsCard';
import { ProgressRing } from '@/components/ProgressRing';
import { SubjectCard } from '@/components/SubjectCard';
import { QuickQuestionForm } from '@/components/QuickQuestionForm';
import { QuickLessonForm } from '@/components/QuickLessonForm';
import { ModuleGoals } from '@/components/ModuleGoals';
import { PomodoroTimer } from '@/components/PomodoroTimer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Target, TrendingUp, AlertTriangle, Plus, Clock, ArrowLeft, Pencil, Trash2, RotateCcw, History, Sparkles, CalendarCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';
import { Subject, Lesson, QuestionSession, SUBJECT_COLORS } from '@/types/study';
import { getLessonName } from '@/data/sefazBA';
import { Aula00QuestionsSimulado } from '@/components/study/Aula00QuestionsSimulado';
import { StudyPlanModal } from '@/components/study/StudyPlanModal';
import { cn } from '@/lib/utils';

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="w-8 h-0.5 bg-primary rounded-full" />
      <span className="text-sm font-semibold text-primary whitespace-nowrap">{label}</span>
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full" />
    </div>
  );
}

export default function Estudos() {
  const [, setTick] = useState(0);
  const {
    data, getOverallProgress, getSubjectProgress, getWeakSubjects, getTodayStudyTime,
    addSubject, updateSubject, deleteSubject, getLessonsBySubject, addLesson, updateLesson, deleteLesson,
    updateQuestionSession, deleteQuestionSession, getStudyTimeBySubject, deletePomodoroSession,
    startNewCycle, getCycleHistory,
  } = useStudy();

  function formatStudyTime(seconds: number): string {
    if (seconds <= 0) return '-';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours >= 1) return `${hours}h ${minutes > 0 ? `${minutes}min` : ''}`.trim();
    return `${minutes}min`;
  }

  // StudyTimeBySubjectCard for Dashboard section (aggregated)
  const StudyTimeBySubjectCard = () => {
    const totalTime = data.subjects.reduce((acc, s) => acc + getStudyTimeBySubject(s.id), 0);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Tempo de Estudo por Matéria</CardTitle>
        </CardHeader>
        <CardContent>
          {data.subjects.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Matéria</TableHead>
                    <TableHead className="text-right">Tempo Estudado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.subjects.map((subject) => {
                    const time = getStudyTimeBySubject(subject.id);
                    return (
                      <TableRow key={subject.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: subject.color }} />
                            {subject.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">{formatStudyTime(time)}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="font-semibold">Total</TableCell>
                    <TableCell className="text-right font-semibold">{formatStudyTime(totalTime)}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-4">Nenhuma matéria cadastrada</p>
          )}
        </CardContent>
      </Card>
    );
  };

  // Pomodoro sessions history (detailed, like question sessions)
  const pomodoroSessionsSorted = [...data.pomodoroSessions]
    .filter(s => s.completed)
    .sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());

  const { toast: uiToast } = useToast();
  const [questionFormOpen, setQuestionFormOpen] = useState(false);
  const [lessonFormOpen, setLessonFormOpen] = useState(false);

  // ── Matérias state ──
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectLessons, setNewSubjectLessons] = useState('');
  const [editSubjectDialogOpen, setEditSubjectDialogOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [editSubjectName, setEditSubjectName] = useState('');
  const [editSubjectColor, setEditSubjectColor] = useState('');
  const [deleteSubjectDialogOpen, setDeleteSubjectDialogOpen] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null);
  const [addLessonDialogOpen, setAddLessonDialogOpen] = useState(false);
  const [newLessonName, setNewLessonName] = useState('');
  const [editLessonDialogOpen, setEditLessonDialogOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [editLessonName, setEditLessonName] = useState('');
  const [deleteLessonDialogOpen, setDeleteLessonDialogOpen] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState<Lesson | null>(null);

  // ── Questões state ──
  const [editSession, setEditSession] = useState<QuestionSession | null>(null);
  const [editQuestionsCount, setEditQuestionsCount] = useState('');
  const [editCorrectAnswers, setEditCorrectAnswers] = useState('');
  const [deleteSessionId, setDeleteSessionId] = useState<string | null>(null);
  const [deletePomodoroId, setDeletePomodoroId] = useState<string | null>(null);
  const [newCycleDialogOpen, setNewCycleDialogOpen] = useState(false);
  const [simuladoDialogOpen, setSimuladoDialogOpen] = useState(false);
  const [simuladoSubjectId, setSimuladoSubjectId] = useState<string | undefined>(undefined);
  const [simuladoLessonNumber, setSimuladoLessonNumber] = useState<string | undefined>(undefined);
  const [studyPlanDialogOpen, setStudyPlanDialogOpen] = useState(false);

  const handleOpenSimuladoForLesson = (subjectId: string, lessonNumber: number) => {
    setSimuladoSubjectId(subjectId);
    setSimuladoLessonNumber(String(lessonNumber - 1));
    setSimuladoDialogOpen(true);
  };

  // ── Derived data ──
  const overall = getOverallProgress();
  const weakSubjects = getWeakSubjects(3);
  const todayStudyMinutes = Math.round(getTodayStudyTime() / 60);
  const currentContest = data.contests[0];
  const currentCycle = currentContest?.currentCycle ?? 1;
  const cycleHistory = currentContest ? getCycleHistory(currentContest.id) : [];

  const handleStartNewCycle = async () => {
    if (!currentContest) return;
    try {
      await startNewCycle(currentContest.id);
      toast.success(`Ciclo ${currentCycle + 1} iniciado!`);
      setNewCycleDialogOpen(false);
    } catch (err) {
      toast.error('Erro ao iniciar novo ciclo');
    }
  };

  const chartData = data.subjects.map(subject => {
    const progress = getSubjectProgress(subject.id);
    return {
      name: subject.name.length > 12 ? subject.name.slice(0, 12) + '...' : subject.name,
      performance: progress.performance,
      color: subject.color,
    };
  }).filter(d => d.performance > 0);

  // ── Matérias handlers ──
  const handleAddSubject = () => {
    if (!newSubjectName || !newSubjectLessons) { toast.error('Preencha todos os campos'); return; }
    const colorIndex = data.subjects.length % SUBJECT_COLORS.length;
    addSubject({ id: `subject-${Date.now()}`, contestId: data.contests[0]?.id || 'default', name: newSubjectName, totalLessons: parseInt(newSubjectLessons), color: SUBJECT_COLORS[colorIndex] }, parseInt(newSubjectLessons));
    toast.success('Matéria adicionada');
    setNewSubjectName(''); setNewSubjectLessons(''); setAddDialogOpen(false);
  };

  const handleEditSubject = (subject: Subject, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingSubject(subject); setEditSubjectName(subject.name); setEditSubjectColor(subject.color); setEditSubjectDialogOpen(true);
  };

  const handleSaveSubject = () => {
    if (!editingSubject || !editSubjectName) return;
    updateSubject(editingSubject.id, { name: editSubjectName, color: editSubjectColor });
    toast.success('Matéria atualizada'); setEditSubjectDialogOpen(false); setEditingSubject(null);
    if (selectedSubject?.id === editingSubject.id) setSelectedSubject({ ...selectedSubject, name: editSubjectName, color: editSubjectColor });
  };

  const handleDeleteSubjectClick = (subject: Subject, e: React.MouseEvent) => {
    e.stopPropagation(); setSubjectToDelete(subject); setDeleteSubjectDialogOpen(true);
  };

  const handleConfirmDeleteSubject = () => {
    if (!subjectToDelete) return;
    deleteSubject(subjectToDelete.id); toast.success('Matéria excluída'); setDeleteSubjectDialogOpen(false); setSubjectToDelete(null);
    if (selectedSubject?.id === subjectToDelete.id) setSelectedSubject(null);
  };

  const handleAddLesson = () => {
    if (!selectedSubject) return;
    addLesson(selectedSubject.id, newLessonName); toast.success('Aula adicionada'); setNewLessonName(''); setAddLessonDialogOpen(false);
  };

  const handleEditLessonClick = (lesson: Lesson) => { setEditingLesson(lesson); setEditLessonName(lesson.name || ''); setEditLessonDialogOpen(true); };
  const handleSaveLesson = () => { if (!editingLesson) return; updateLesson(editingLesson.id, { name: editLessonName }); toast.success('Aula atualizada'); setEditLessonDialogOpen(false); setEditingLesson(null); };
  const handleDeleteLessonClick = (lesson: Lesson) => { setLessonToDelete(lesson); setDeleteLessonDialogOpen(true); };
  const handleConfirmDeleteLesson = () => { if (!lessonToDelete) return; deleteLesson(lessonToDelete.id); toast.success('Aula excluída'); setDeleteLessonDialogOpen(false); setLessonToDelete(null); };

  // ── Questões handlers ──
  const sessions = [...data.questionSessions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const getSubjectById = (id: string) => data.subjects.find(s => s.id === id);

  const handleEditSessionOpen = (session: QuestionSession) => {
    setEditSession(session); setEditQuestionsCount(session.questionsCount.toString()); setEditCorrectAnswers(session.correctAnswers.toString());
  };

  const handleEditSessionSave = () => {
    if (!editSession) return;
    const qc = parseInt(editQuestionsCount); const ca = parseInt(editCorrectAnswers);
    if (isNaN(qc) || qc < 1) { uiToast({ title: 'Erro', description: 'Quantidade de questões deve ser pelo menos 1', variant: 'destructive' }); return; }
    if (isNaN(ca) || ca < 0) { uiToast({ title: 'Erro', description: 'Acertos deve ser pelo menos 0', variant: 'destructive' }); return; }
    if (ca > qc) { uiToast({ title: 'Erro', description: 'Acertos não pode ser maior que questões', variant: 'destructive' }); return; }
    updateQuestionSession(editSession.id, { questionsCount: qc, correctAnswers: ca });
    uiToast({ title: 'Sucesso', description: 'Sessão atualizada com sucesso' }); setEditSession(null);
  };

  const handleDeleteSessionConfirm = () => {
    if (!deleteSessionId) return;
    deleteQuestionSession(deleteSessionId); uiToast({ title: 'Sucesso', description: 'Sessão excluída com sucesso' }); setDeleteSessionId(null);
  };


  // ── Matérias: subject detail view ──
  const activeSubject = selectedSubject
    ? (data.subjects.find(s => s.id === selectedSubject.id || s.name.trim().toLowerCase() === selectedSubject.name.trim().toLowerCase()) || selectedSubject)
    : null;
  const lessons = activeSubject ? getLessonsBySubject(activeSubject.id) : [];
  const subjectProgress = activeSubject ? getSubjectProgress(activeSubject.id) : null;

  return (
    <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
       <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="hidden md:inline-flex" />
          <h1 className="text-xl md:text-2xl font-bold">Estudos</h1>
          <Badge variant="secondary" className="text-xs">Ciclo {currentCycle}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PomodoroTimer compact />
          <Button
            size="sm"
            onClick={() => setStudyPlanDialogOpen(true)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold gap-1.5 shadow-sm"
          >
            <CalendarCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Plano de Estudo</span>
            <span className="sm:hidden">Plano</span>
          </Button>
          <Button
            size="sm"
            onClick={() => setSimuladoDialogOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold gap-1.5 shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">Fazer Simulado</span>
            <span className="sm:hidden">Simulado</span>
          </Button>
          <Button size="sm" onClick={() => setNewCycleDialogOpen(true)}>
            <RotateCcw className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Novo Ciclo</span>
          </Button>
          <Button size="sm" onClick={() => setLessonFormOpen(true)}>
            <Plus className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Registrar Aulas</span>
            <span className="sm:hidden">Aulas</span>
          </Button>
          <Button size="sm" onClick={() => setQuestionFormOpen(true)}>
            <Plus className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Registrar Questões</span>
            <span className="sm:hidden">Questões</span>
          </Button>
        </div>
      </div>

      {/* ═══════ DASHBOARD ═══════ */}
      <SectionDivider label="Dashboard" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatsCard title="Tempo Hoje" value={`${todayStudyMinutes}min`} icon={Clock} subtitle="de estudo focado" />
        <StatsCard title="Total de Aulas" value={overall.totalLessons} icon={BookOpen} subtitle={`${overall.completedLessons} concluídas`} />
        <StatsCard title="Questões Feitas" value={overall.totalQuestions} icon={Target} subtitle={`${overall.totalCorrect} acertos`} />
        <StatsCard title="Desempenho Geral" value={`${overall.performance.toFixed(1)}%`} icon={TrendingUp} trend={overall.performance >= 70 ? 'up' : 'down'} />
        <StatsCard title="Matérias" value={data.subjects.length} icon={BookOpen} subtitle="cadastradas" />
      </div>

      <ModuleGoals categories={['questions', 'study_time']} />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader><CardTitle className="text-lg">Progresso Geral</CardTitle></CardHeader>
          <CardContent className="flex flex-col items-center">
            <ProgressRing progress={overall.progress} size={140} />
            <p className="mt-4 text-sm text-muted-foreground">Aulas concluídas (T+R)</p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-lg">Desempenho por Matéria</CardTitle></CardHeader>
          <CardContent>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
                  <Bar dataKey="performance" radius={[0, 4, 4, 0]}>
                    {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : <p className="text-center text-muted-foreground py-8">Registre questões para ver o gráfico</p>}
          </CardContent>
        </Card>
      </div>

      {weakSubjects.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Pontos de Atenção
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weakSubjects.map(({ subject, performance, totalQuestions }) => (
                <div key={subject.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: subject.color }} />
                    <span className="font-medium">{subject.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-danger font-medium">{performance.toFixed(1)}%</span>
                    <p className="text-xs text-muted-foreground">{totalQuestions} questões</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <StudyTimeBySubjectCard />

      {/* ═══════ HISTÓRICO DE CICLOS ═══════ */}
      {cycleHistory.length > 0 && (
        <>
          <SectionDivider label="Histórico de Ciclos" />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <History className="h-5 w-5" />
                Ciclos Anteriores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {cycleHistory.map((cycle) => (
                  <AccordionItem key={cycle.cycle} value={`cycle-${cycle.cycle}`}>
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">Ciclo {cycle.cycle}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {cycle.totalLessons} aulas • Teoria {cycle.theoryProgress.toFixed(0)}% • Revisão {cycle.reviewProgress.toFixed(0)}%
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Teoria</span>
                            <span>{cycle.theoryCompleted}/{cycle.totalLessons}</span>
                          </div>
                          <Progress value={cycle.theoryProgress} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Revisão</span>
                            <span>{cycle.reviewCompleted}/{cycle.totalLessons}</span>
                          </div>
                          <Progress value={cycle.reviewProgress} className="h-2" />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </>
      )}

      {/* ═══════ MATÉRIAS ═══════ */}
      <SectionDivider label="Matérias" />

      {activeSubject && subjectProgress ? (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setSelectedSubject(null)}><ArrowLeft className="h-5 w-5" /></Button>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: activeSubject.color }} />
                <h2 className="text-xl font-bold">{activeSubject.name}</h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={(e) => handleEditSubject(activeSubject, e)}><Pencil className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" onClick={(e) => handleDeleteSubjectClick(activeSubject, e)}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <Card><CardContent className="pt-6"><div className="text-2xl font-bold">{subjectProgress.completedLessons}/{subjectProgress.totalLessons}</div><p className="text-sm text-muted-foreground">Aulas concluídas</p></CardContent></Card>
            <Card><CardContent className="pt-6"><div className="text-2xl font-bold">{subjectProgress.totalQuestions}</div><p className="text-sm text-muted-foreground">Questões feitas</p></CardContent></Card>
            <Card><CardContent className="pt-6"><div className="text-2xl font-bold">{subjectProgress.totalCorrect}</div><p className="text-sm text-muted-foreground">Acertos</p></CardContent></Card>
            <Card><CardContent className="pt-6"><div className={cn("text-2xl font-bold", subjectProgress.performance >= 70 ? 'text-success' : subjectProgress.performance >= 50 ? 'text-warning' : 'text-danger')}>{subjectProgress.performance.toFixed(1)}%</div><p className="text-sm text-muted-foreground">Desempenho</p></CardContent></Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Aulas</CardTitle>
              <Button size="sm" onClick={() => setAddLessonDialogOpen(true)}><Plus className="h-4 w-4 mr-2" />Nova Aula</Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Nº</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead className="w-24">Teoria</TableHead>
                      <TableHead className="w-24">Revisão</TableHead>
                      <TableHead className="w-24">Questões</TableHead>
                      <TableHead className="w-24">Acertos</TableHead>
                      <TableHead className="w-28">Desempenho</TableHead>
                      <TableHead className="w-24">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lessons.map((lesson) => {
                      const perf = lesson.questionsCount > 0 ? (lesson.correctAnswers / lesson.questionsCount) * 100 : 0;
                      const displayName = lesson.name && lesson.name.trim() !== ''
                        ? lesson.name
                        : (activeSubject ? getLessonName(activeSubject.name, lesson.number) : `Aula ${String(lesson.number - 1).padStart(2, '0')}`);
                      return (
                        <TableRow key={lesson.id}>
                          <TableCell className="font-medium">{lesson.number}</TableCell>
                          <TableCell>
                            <span 
                              className="font-medium cursor-pointer hover:underline hover:text-emerald-500 transition-colors"
                              onClick={() => activeSubject && handleOpenSimuladoForLesson(activeSubject.id, lesson.number)}
                              title="Clique para fazer o simulado de 50 questões desta aula"
                            >
                              {displayName}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Checkbox 
                              checked={Boolean(lesson.theoryCompleted)} 
                              onCheckedChange={(c) => {
                                if (activeSubject) {
                                  updateLesson(lesson.id, { theoryCompleted: !!c }, activeSubject.id, lesson.number);
                                  setTick(t => t + 1);
                                }
                              }} 
                            />
                          </TableCell>
                          <TableCell>
                            <Checkbox 
                              checked={Boolean(lesson.reviewCompleted)} 
                              onCheckedChange={(c) => {
                                if (activeSubject) {
                                  updateLesson(lesson.id, { reviewCompleted: !!c }, activeSubject.id, lesson.number);
                                  setTick(t => t + 1);
                                }
                              }} 
                            />
                          </TableCell>
                          <TableCell>{lesson.questionsCount}</TableCell>
                          <TableCell>{lesson.correctAnswers}</TableCell>
                          <TableCell><span className={cn(perf >= 70 ? 'text-success' : perf >= 50 ? 'text-warning' : perf > 0 ? 'text-danger' : 'text-muted-foreground')}>{lesson.questionsCount > 0 ? `${perf.toFixed(1)}%` : '-'}</span></TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="h-7 px-2 text-xs gap-1 text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/10 font-semibold"
                                onClick={() => activeSubject && handleOpenSimuladoForLesson(activeSubject.id, lesson.number)}
                                title="Fazer simulado de 50 questões desta aula"
                              >
                                <Sparkles className="h-3.5 w-3.5" />
                                <span className="hidden sm:inline">Simulado</span>
                              </Button>
                              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleEditLessonClick(lesson)}><Pencil className="h-3.5 w-3.5" /></Button>
                              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleDeleteLessonClick(lesson)} disabled={lessons.length <= 1}><Trash2 className="h-3.5 w-3.5" /></Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <div className="flex justify-end">
            <Button size="sm" onClick={() => setAddDialogOpen(true)}><Plus className="h-4 w-4 mr-1" />Nova Matéria</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.subjects.map((subject) => (
              <div key={subject.id} className="relative group">
                <SubjectCard subject={subject} onClick={() => setSelectedSubject(subject)} />
                <div className="absolute top-2 right-2 flex gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" size="icon" className="h-7 w-7" onClick={(e) => handleEditSubject(subject, e)}><Pencil className="h-3 w-3" /></Button>
                  <Button variant="secondary" size="icon" className="h-7 w-7" onClick={(e) => handleDeleteSubjectClick(subject, e)}><Trash2 className="h-3 w-3" /></Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ═══════ QUESTÕES ═══════ */}
      <SectionDivider label="Questões" />

      <Card>
        <CardHeader><CardTitle>Histórico de Questões</CardTitle></CardHeader>
        <CardContent>
          {sessions.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Matéria</TableHead>
                    <TableHead>Aula</TableHead>
                    <TableHead>Questões</TableHead>
                    <TableHead>Acertos</TableHead>
                    <TableHead>Desempenho</TableHead>
                    <TableHead className="w-[80px]">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sessions.map((session) => {
                    const subject = getSubjectById(session.subjectId);
                    const perf = (session.correctAnswers / session.questionsCount) * 100;
                    return (
                      <TableRow key={session.id}>
                        <TableCell>{format(new Date(session.date), 'dd/MM/yyyy HH:mm', { locale: ptBR })}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: subject?.color }} />
                            {subject?.name}
                          </div>
                        </TableCell>
                        <TableCell>Aula {session.lessonNumber}</TableCell>
                        <TableCell>{session.questionsCount}</TableCell>
                        <TableCell>{session.correctAnswers}</TableCell>
                        <TableCell><span className={cn(perf >= 70 ? 'text-success' : perf >= 50 ? 'text-warning' : 'text-danger')}>{perf.toFixed(1)}%</span></TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleEditSessionOpen(session)}><Pencil className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => setDeleteSessionId(session.id)}><Trash2 className="h-4 w-4" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : <p className="text-center text-muted-foreground py-8">Nenhuma questão registrada ainda</p>}
        </CardContent>
      </Card>

      <SectionDivider label="Tempo de Estudo" />
      <Card>
        <CardHeader><CardTitle>Histórico de Tempo de Estudo</CardTitle></CardHeader>
        <CardContent>
          {pomodoroSessionsSorted.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Matéria</TableHead>
                    <TableHead>Aula</TableHead>
                    <TableHead>Tempo</TableHead>
                    <TableHead className="w-[80px]">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pomodoroSessionsSorted.map((session) => {
                    const subject = getSubjectById(session.subjectId);
                    return (
                      <TableRow key={session.id}>
                        <TableCell>{format(new Date(session.startedAt), 'dd/MM/yyyy HH:mm', { locale: ptBR })}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: subject?.color }} />
                            {subject?.name}
                          </div>
                        </TableCell>
                        <TableCell>Aula {session.lessonNumber}</TableCell>
                        <TableCell>{formatStudyTime(session.duration)}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => setDeletePomodoroId(session.id)}><Trash2 className="h-4 w-4" /></Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : <p className="text-center text-muted-foreground py-8">Nenhuma sessão de estudo registrada ainda</p>}
        </CardContent>
      </Card>

      {/* ═══════ ALL DIALOGS ═══════ */}
      
      {/* New Cycle Confirmation */}
      <AlertDialog open={newCycleDialogOpen} onOpenChange={setNewCycleDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Iniciar Novo Ciclo de Estudo</AlertDialogTitle>
            <AlertDialogDescription>
              Ao iniciar o Ciclo {currentCycle + 1}, os indicadores de teoria e revisão de todas as aulas serão resetados para uma nova rodada de estudos.
              {'\n\n'}O histórico de questões e tempo de estudo será preservado permanentemente.
              {'\n\n'}O progresso do Ciclo {currentCycle} ficará salvo no histórico.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleStartNewCycle}>Iniciar Ciclo {currentCycle + 1}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <QuickQuestionForm open={questionFormOpen} onOpenChange={setQuestionFormOpen} />
      <QuickLessonForm open={lessonFormOpen} onOpenChange={setLessonFormOpen} />

      {/* Add Subject */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Nova Matéria</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div><Label>Nome</Label><Input value={newSubjectName} onChange={(e) => setNewSubjectName(e.target.value)} placeholder="Ex: Direito Tributário" /></div>
            <div><Label>Quantidade de Aulas</Label><Input type="number" min="1" value={newSubjectLessons} onChange={(e) => setNewSubjectLessons(e.target.value)} placeholder="Ex: 20" /></div>
            <div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setAddDialogOpen(false)}>Cancelar</Button><Button onClick={handleAddSubject}>Adicionar</Button></div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Subject */}
      <Dialog open={editSubjectDialogOpen} onOpenChange={setEditSubjectDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Editar Matéria</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div><Label>Nome</Label><Input value={editSubjectName} onChange={(e) => setEditSubjectName(e.target.value)} placeholder="Nome da matéria" /></div>
            <div>
              <Label>Cor</Label>
              <div className="flex gap-2 mt-2 flex-wrap">
                {SUBJECT_COLORS.map((color) => (
                  <button key={color} type="button" className={cn("h-8 w-8 rounded-full transition-all", editSubjectColor === color ? "ring-2 ring-offset-2 ring-primary" : "hover:scale-110")} style={{ backgroundColor: color }} onClick={() => setEditSubjectColor(color)} />
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setEditSubjectDialogOpen(false)}>Cancelar</Button><Button onClick={handleSaveSubject}>Salvar</Button></div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Subject */}
      <AlertDialog open={deleteSubjectDialogOpen} onOpenChange={setDeleteSubjectDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Excluir Matéria</AlertDialogTitle><AlertDialogDescription>Tem certeza que deseja excluir "{subjectToDelete?.name}"? Todas as aulas e eventos relacionados serão removidos.</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={handleConfirmDeleteSubject}>Excluir</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Lesson */}
      <Dialog open={editLessonDialogOpen} onOpenChange={setEditLessonDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Editar Aula {editingLesson?.number}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div><Label>Nome da Aula</Label><Input value={editLessonName} onChange={(e) => setEditLessonName(e.target.value)} placeholder="Ex: Interpretação de Texto" /></div>
            <div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setEditLessonDialogOpen(false)}>Cancelar</Button><Button onClick={handleSaveLesson}>Salvar</Button></div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Lesson */}
      <Dialog open={addLessonDialogOpen} onOpenChange={setAddLessonDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Nova Aula</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div><Label>Nome da Aula (opcional)</Label><Input value={newLessonName} onChange={(e) => setNewLessonName(e.target.value)} placeholder="Ex: Interpretação de Texto" /></div>
            <div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setAddLessonDialogOpen(false)}>Cancelar</Button><Button onClick={handleAddLesson}>Adicionar</Button></div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Lesson */}
      <AlertDialog open={deleteLessonDialogOpen} onOpenChange={setDeleteLessonDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Excluir Aula</AlertDialogTitle><AlertDialogDescription>Tem certeza que deseja excluir a aula {lessonToDelete?.number}{lessonToDelete?.name ? ` (${lessonToDelete.name})` : ''}?</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={handleConfirmDeleteLesson}>Excluir</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Question Session */}
      <Dialog open={!!editSession} onOpenChange={(open) => !open && setEditSession(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Editar Sessão de Questões</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2"><Label>Quantidade de Questões</Label><Input type="number" min="1" value={editQuestionsCount} onChange={(e) => setEditQuestionsCount(e.target.value)} /></div>
            <div className="space-y-2"><Label>Acertos</Label><Input type="number" min="0" value={editCorrectAnswers} onChange={(e) => setEditCorrectAnswers(e.target.value)} /></div>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setEditSession(null)}>Cancelar</Button><Button onClick={handleEditSessionSave}>Salvar</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Question Session */}
      <AlertDialog open={!!deleteSessionId} onOpenChange={(open) => !open && setDeleteSessionId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Excluir Sessão</AlertDialogTitle><AlertDialogDescription>Tem certeza que deseja excluir esta sessão de questões?</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={handleDeleteSessionConfirm}>Excluir</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Pomodoro Session */}
      <AlertDialog open={!!deletePomodoroId} onOpenChange={(open) => !open && setDeletePomodoroId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Excluir Sessão</AlertDialogTitle><AlertDialogDescription>Tem certeza que deseja excluir esta sessão de estudo?</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter><AlertDialogCancel>Cancelar</AlertDialogCancel><AlertDialogAction onClick={() => { if (deletePomodoroId) { deletePomodoroSession(deletePomodoroId); toast.success('Sessão excluída'); setDeletePomodoroId(null); } }}>Excluir</AlertDialogAction></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Simulado Modal */}
      <Dialog open={simuladoDialogOpen} onOpenChange={setSimuladoDialogOpen}>
        <DialogContent className="w-[96vw] sm:w-full max-w-4xl max-h-[92vh] overflow-y-auto p-3 sm:p-6 rounded-xl">
          <DialogHeader className="pb-2 border-b">
            <DialogTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500 shrink-0" />
              Simulado por Matéria e Aula
            </DialogTitle>
          </DialogHeader>
          <Aula00QuestionsSimulado 
            initialSubjectId={simuladoSubjectId} 
            initialLessonNumber={simuladoLessonNumber} 
          />
        </DialogContent>
      </Dialog>

      {/* Plano de Estudo Diário Modal */}
      <StudyPlanModal open={studyPlanDialogOpen} onOpenChange={setStudyPlanDialogOpen} />
    </div>
  );
}
