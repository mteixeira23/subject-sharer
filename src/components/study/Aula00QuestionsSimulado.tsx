import React, { useState } from 'react';
import { AULA_00_QUESTIONS, QuestionData } from '@/data/aula00Questions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, XCircle, HelpCircle, Save, RotateCcw, Check, Sparkles, BookOpen } from 'lucide-react';
import { useStudy } from '@/contexts/StudyContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export function Aula00QuestionsSimulado() {
  const { data: studyData, addQuestionSession } = useStudy();

  const contabilidadeSubj = studyData.subjects.find(
    s => s.name.trim().toLowerCase() === 'contabilidade geral'
  );

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(contabilidadeSubj?.id || studyData.subjects[0]?.id || '');
  const [selectedLessonNumber, setSelectedLessonNumber] = useState<string>('0');

  // Stores user answers: questionId -> chosen answer index or string ('Certo'/'Errado' or number index)
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  // Stores revealed status: questionId -> boolean
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [filterBlock, setFilterBlock] = useState<number | 'all'>('all');

  const totalQuestions = AULA_00_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  // Calculate score
  let correctCount = 0;
  Object.entries(answers).forEach(([qIdStr, userAns]) => {
    const qId = Number(qIdStr);
    const q = AULA_00_QUESTIONS.find(item => item.id === qId);
    if (q) {
      if (q.type === 'tf') {
        const correctStr = q.correctAnswer === 0 ? 'Certo' : 'Errado';
        if (userAns === correctStr) correctCount++;
      } else {
        if (userAns === q.correctAnswer) correctCount++;
      }
    }
  });

  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const accuracyPercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const handleSelectAnswer = (qId: number, answerVal: number | string) => {
    setAnswers(prev => ({ ...prev, [qId]: answerVal }));
    setRevealed(prev => ({ ...prev, [qId]: true }));
  };

  const handleResetAll = () => {
    setAnswers({});
    setRevealed({});
    toast.info('Simulado reiniciado!');
  };

  const handleSaveToSystem = async () => {
    if (answeredCount === 0) {
      toast.warning('Responda a pelo menos uma questão antes de salvar.');
      return;
    }
    const currentSubj = studyData.subjects.find(s => s.id === selectedSubjectId) || contabilidadeSubj;
    if (!currentSubj) {
      toast.error('Selecione uma disciplina válida.');
      return;
    }

    try {
      await addQuestionSession({
        subjectId: currentSubj.id,
        date: new Date().toISOString().split('T')[0],
        totalQuestions: answeredCount,
        correctAnswers: correctCount,
        banca: 'FGV / CEBRASPE',
        notes: `Simulado Aula ${selectedLessonNumber} - ${currentSubj.name}`,
      });
      toast.success(`🎉 Sessão salva no sistema! ${correctCount}/${answeredCount} acertos (${accuracyPercent}%).`);
    } catch (err) {
      toast.error('Erro ao registrar sessão no sistema.');
    }
  };

  const filteredQuestions = AULA_00_QUESTIONS.filter(q => {
    if (filterBlock === 'all') return true;
    const blockStart = (filterBlock - 1) * 10 + 1;
    const blockEnd = filterBlock * 10;
    return q.id >= blockStart && q.id <= blockEnd;
  });

  return (
    <div className="space-y-6 my-2">
      {/* Subject & Lesson Selection Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/40 p-3.5 rounded-lg border">
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold flex items-center gap-1.5 text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 text-primary" /> Selecione a Matéria:
          </Label>
          <Select value={selectedSubjectId} onValueChange={setSelectedSubjectId}>
            <SelectTrigger className="w-full h-9 text-xs bg-background font-medium">
              <SelectValue placeholder="Selecione a Matéria" />
            </SelectTrigger>
            <SelectContent>
              {studyData.subjects.map(s => (
                <SelectItem key={s.id} value={s.id} className="text-xs">
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold flex items-center gap-1.5 text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Selecione a Aula:
          </Label>
          <Select value={selectedLessonNumber} onValueChange={setSelectedLessonNumber}>
            <SelectTrigger className="w-full h-9 text-xs bg-background font-medium">
              <SelectValue placeholder="Selecione a Aula" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0" className="text-xs font-semibold">
                Aula 00 – Conceito, Objeto, Finalidades e Usuários
              </SelectItem>
              <SelectItem value="1" className="text-xs">
                Aula 01 – Ativo, Passivo e Patrimônio Líquido
              </SelectItem>
              <SelectItem value="2" className="text-xs">
                Aula 02 – Lançamentos Contábeis e Razoetes
              </SelectItem>
              <SelectItem value="3" className="text-xs">
                Aula 03 – Balancete de Verificação
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Top Banner & Stats */}
      <Card className="border-primary/40 bg-gradient-to-r from-primary/10 via-background to-primary/5 shadow-md">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                Simulado Interativo: Aula 00 – Contabilidade Geral (50 Questões)
              </CardTitle>
              <CardDescription>
                Responda cada questão diretamente abaixo. O gabarito e a explicação detalhada aparecem imediatamente!
              </CardDescription>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleResetAll} className="gap-1 text-xs">
                <RotateCcw className="h-3.5 w-3.5" /> Limpar Respostas
              </Button>
              <Button size="sm" onClick={handleSaveToSystem} className="gap-1.5 text-xs font-semibold bg-primary text-primary-foreground">
                <Save className="h-4 w-4" /> Salvar Desempenho no Sistema
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Progress Bar & Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card/60 p-3 rounded-lg border">
            <div>
              <p className="text-xs text-muted-foreground font-medium">Respondidas</p>
              <p className="text-lg font-bold">{answeredCount} / {totalQuestions}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Acertos</p>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{correctCount}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Taxa de Acerto</p>
              <p className="text-lg font-bold text-primary">{accuracyPercent}%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Progresso</p>
              <div className="flex items-center gap-2 mt-1">
                <Progress value={progressPercent} className="h-2 flex-1" />
                <span className="text-xs font-bold">{progressPercent}%</span>
              </div>
            </div>
          </div>

          {/* Block Filters */}
          <div className="flex items-center gap-1.5 flex-wrap pt-2">
            <span className="text-xs text-muted-foreground font-semibold mr-1">Filtrar por Bloco:</span>
            <Button
              size="sm"
              variant={filterBlock === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterBlock('all')}
              className="text-xs h-7 px-2.5"
            >
              Todas (50)
            </Button>
            {[1, 2, 3, 4, 5].map(num => (
              <Button
                key={num}
                size="sm"
                variant={filterBlock === num ? 'default' : 'outline'}
                onClick={() => setFilterBlock(num)}
                className="text-xs h-7 px-2.5"
              >
                Bloco {num} (Q{(num - 1) * 10 + 1}-{num * 10})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const isAnswered = answers[q.id] !== undefined;
          const isRevealed = revealed[q.id];

          let isCorrect = false;
          if (isAnswered) {
            if (q.type === 'tf') {
              const correctStr = q.correctAnswer === 0 ? 'Certo' : 'Errado';
              isCorrect = answers[q.id] === correctStr;
            } else {
              isCorrect = answers[q.id] === q.correctAnswer;
            }
          }

          return (
            <Card
              key={q.id}
              className={cn(
                'transition-all border-l-4',
                isAnswered
                  ? isCorrect
                    ? 'border-l-emerald-500 bg-emerald-500/5 dark:bg-emerald-950/10'
                    : 'border-l-rose-500 bg-rose-500/5 dark:bg-rose-950/10'
                  : 'border-l-primary/40 hover:border-l-primary'
              )}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="font-mono text-xs font-semibold bg-muted">
                        Questão {String(q.id).padStart(2, '0')}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">
                        {q.source}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {q.topic}
                      </Badge>
                    </div>
                  </div>

                  {isAnswered && (
                    <Badge
                      className={cn(
                        'gap-1 text-xs px-2.5 py-1 font-bold',
                        isCorrect
                          ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                          : 'bg-rose-600 text-white dark:bg-rose-500'
                      )}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5" /> Resposta Correta
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3.5 w-3.5" /> Incorreta
                        </>
                      )}
                    </Badge>
                  )}
                </div>

                <p className="text-sm md:text-base font-medium mt-3 leading-relaxed whitespace-pre-line text-foreground">
                  {q.statement}
                </p>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                {/* Options Space */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Selecione sua resposta abaixo:
                  </p>

                  {q.type === 'tf' ? (
                    <div className="flex gap-3">
                      {['Certo', 'Errado'].map((optionStr, optIdx) => {
                        const isSelected = answers[q.id] === optionStr;
                        const correctStr = q.correctAnswer === 0 ? 'Certo' : 'Errado';
                        const isThisCorrect = optionStr === correctStr;

                        let btnCls = 'flex-1 py-3 text-sm font-semibold rounded-lg border transition-all ';
                        if (isRevealed) {
                          if (isThisCorrect) {
                            btnCls += 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500 font-bold';
                          } else if (isSelected && !isThisCorrect) {
                            btnCls += 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500 line-through';
                          } else {
                            btnCls += 'bg-muted/40 text-muted-foreground border-transparent opacity-60';
                          }
                        } else {
                          btnCls += isSelected
                            ? 'bg-primary text-primary-foreground border-primary shadow'
                            : 'bg-card text-card-foreground border-border hover:bg-muted hover:border-primary/50';
                        }

                        return (
                          <button
                            key={optionStr}
                            onClick={() => handleSelectAnswer(q.id, optionStr)}
                            className={btnCls}
                          >
                            <div className="flex items-center justify-center gap-2">
                              <span>{optionStr}</span>
                              {isRevealed && isThisCorrect && <Check className="h-4 w-4 text-emerald-600" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {q.options?.map((optText, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx); // A, B, C, D, E
                        const isSelected = answers[q.id] === optIdx;
                        const isThisCorrect = optIdx === q.correctAnswer;

                        let rowCls = 'w-full text-left p-3 rounded-lg border text-sm transition-all flex items-start gap-3 ';
                        if (isRevealed) {
                          if (isThisCorrect) {
                            rowCls += 'bg-emerald-500/15 text-emerald-950 dark:text-emerald-200 border-emerald-500 font-medium ring-1 ring-emerald-500/50';
                          } else if (isSelected && !isThisCorrect) {
                            rowCls += 'bg-rose-500/15 text-rose-950 dark:text-rose-200 border-rose-500 line-through';
                          } else {
                            rowCls += 'bg-card text-muted-foreground border-border opacity-70';
                          }
                        } else {
                          rowCls += isSelected
                            ? 'bg-primary/10 text-primary border-primary font-semibold shadow-sm'
                            : 'bg-card text-foreground border-border hover:bg-muted/60 hover:border-primary/40';
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectAnswer(q.id, optIdx)}
                            className={rowCls}
                          >
                            <span
                              className={cn(
                                'h-6 w-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 border mt-0.5',
                                isRevealed
                                  ? isThisCorrect
                                    ? 'bg-emerald-600 text-white border-emerald-600'
                                    : isSelected
                                    ? 'bg-rose-600 text-white border-rose-600'
                                    : 'bg-muted text-muted-foreground'
                                  : isSelected
                                  ? 'bg-primary text-primary-foreground border-primary'
                                  : 'bg-muted/60 text-muted-foreground'
                              )}
                            >
                              {letter}
                            </span>
                            <span className="flex-1 leading-relaxed">{optText}</span>
                            {isRevealed && isThisCorrect && (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Explanation Box when revealed */}
                {isRevealed && (
                  <div className="mt-4 p-3.5 rounded-lg bg-muted/60 border border-border text-xs md:text-sm space-y-1.5">
                    <p className="font-bold flex items-center gap-1.5 text-primary">
                      <HelpCircle className="h-4 w-4" /> Gabarito Comentado:
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
