import React, { useState, useMemo } from 'react';
import { AULA_00_QUESTIONS, QuestionData, generateCustomQuestionsForSubject } from '@/data/aula00Questions';
import { SEFAZ_BA_SUBJECTS, getLessonName } from '@/data/sefazBA';
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

interface Aula00QuestionsSimuladoProps {
  onSaveSession?: () => void;
  initialSubjectId?: string;
  initialLessonNumber?: string;
  isModalView?: boolean;
}

export function Aula00QuestionsSimulado({
  initialSubjectId,
  initialLessonNumber,
  onSaveSession,
  isModalView = false,
}: Aula00QuestionsSimuladoProps = {}) {
  const [showSelectors, setShowSelectors] = useState<boolean>(!initialSubjectId && !isModalView);
  const { data: studyData, addQuestionSession } = useStudy();

  // Filter studyData.subjects to ONLY SEFAZ-BA 13 subjects
  const sefazNames = useMemo(() => new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase())), []);
  const availableSubjects = useMemo(() => {
    const subs = studyData.subjects.filter(s => sefazNames.has(s.name.trim().toLowerCase()));
    if (subs.length > 0) return subs;
    // Fallback mapping if database hasn't synced
    return SEFAZ_BA_SUBJECTS.map((s, idx) => ({
      id: `sefaz-sub-${idx}`,
      contestId: s.contestId,
      name: s.name,
      totalLessons: s.totalLessons,
      color: s.color,
    }));
  }, [studyData.subjects, sefazNames]);

  const contabilidadeSubj = availableSubjects.find(
    s => s.name.trim().toLowerCase() === 'contabilidade geral'
  );

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    initialSubjectId || contabilidadeSubj?.id || availableSubjects[0]?.id || ''
  );
  const [selectedLessonNumber, setSelectedLessonNumber] = useState<string>(
    initialLessonNumber !== undefined ? initialLessonNumber : '0'
  );

  React.useEffect(() => {
    if (initialSubjectId) setSelectedSubjectId(initialSubjectId);
    if (initialLessonNumber !== undefined) setSelectedLessonNumber(initialLessonNumber);
    setAnswers({});
    setRevealed({});
    setFilterBlock('all');
  }, [initialSubjectId, initialLessonNumber]);

  const activeSubjectObj = availableSubjects.find(s => s.id === selectedSubjectId) || availableSubjects[0];
  const activeSubjectName = activeSubjectObj ? activeSubjectObj.name : 'Contabilidade Geral';

  const sefazDef = SEFAZ_BA_SUBJECTS.find(s => s.name.trim().toLowerCase() === activeSubjectName.trim().toLowerCase());
  const totalLessonsForActiveSubj = sefazDef ? sefazDef.totalLessons : 10;

  const dynamicLessonOptions = useMemo(() => {
    return Array.from({ length: totalLessonsForActiveSubj }, (_, i) => ({
      number: String(i),
      title: getLessonName(activeSubjectName, i),
    }));
  }, [activeSubjectName, totalLessonsForActiveSubj]);

  const activeQuestions = useMemo(() => {
    if (activeSubjectName.trim().toLowerCase() === 'contabilidade geral' && selectedLessonNumber === '0') {
      return AULA_00_QUESTIONS;
    }
    return generateCustomQuestionsForSubject(activeSubjectName, Number(selectedLessonNumber));
  }, [activeSubjectName, selectedLessonNumber]);

  // Stores user answers: questionId -> chosen answer index or string ('Certo'/'Errado' or number index)
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  // Stores revealed status: questionId -> boolean
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [filterBlock, setFilterBlock] = useState<number | 'all'>('all');

  const handleSubjectChange = (newSubjId: string) => {
    setSelectedSubjectId(newSubjId);
    setSelectedLessonNumber('0');
    setAnswers({});
    setRevealed({});
  };

  const handleLessonChange = (newLessonNum: string) => {
    setSelectedLessonNumber(newLessonNum);
    setAnswers({});
    setRevealed({});
  };

  const totalQuestions = activeQuestions.length;
  const answeredCount = Object.keys(answers).length;

  // Calculate score
  let correctCount = 0;
  Object.entries(answers).forEach(([qIdStr, userAns]) => {
    const qId = Number(qIdStr);
    const q = activeQuestions.find(item => item.id === qId);
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
        id: `session-${Date.now()}`,
        subjectId: currentSubj.id,
        lessonNumber: Number(selectedLessonNumber) + 1,
        date: new Date().toISOString().split('T')[0],
        questionsCount: answeredCount,
        correctAnswers: correctCount,
      });

      toast.success(`🎉 Sessão salva no sistema! ${correctCount}/${answeredCount} acertos (${accuracyPercent}%).`);
      if (onSaveSession) onSaveSession();
    } catch (err) {
      toast.error('Erro ao registrar sessão no sistema.');
    }
  };

  const filteredQuestions = activeQuestions.filter(q => {
    if (filterBlock === 'all') return true;
    const blockStart = (filterBlock - 1) * 10 + 1;
    const blockEnd = filterBlock * 10;
    return q.id >= blockStart && q.id <= blockEnd;
  });

  const activeLessonTitle = getLessonName(activeSubjectName, Number(selectedLessonNumber));

  return (
    <div className="space-y-4 sm:space-y-6 my-1 sm:my-2">
      {/* Subject & Lesson Selection */}
      {showSelectors ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 bg-muted/40 p-2.5 sm:p-3.5 rounded-lg border">
          <div className="space-y-1">
            <Label className="text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 text-primary shrink-0" /> Selecione a Matéria:
            </Label>
            <Select value={selectedSubjectId} onValueChange={handleSubjectChange}>
              <SelectTrigger className="w-full h-8 sm:h-9 text-xs bg-background font-medium truncate">
                <SelectValue placeholder="Selecione a Matéria" className="truncate" />
              </SelectTrigger>
              <SelectContent>
                {availableSubjects.map(s => (
                  <SelectItem key={s.id} value={s.id} className="text-xs">
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label className="text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" /> Aula:
              </Label>
              {isModalView && (
                <Button variant="ghost" size="sm" onClick={() => setShowSelectors(false)} className="h-5 text-[10px] text-muted-foreground hover:text-foreground p-0">
                  Fechar seleção
                </Button>
              )}
            </div>
            <Select value={selectedLessonNumber} onValueChange={handleLessonChange}>
              <SelectTrigger className="w-full h-8 sm:h-9 text-xs bg-background font-medium truncate">
                <SelectValue placeholder="Selecione a Aula" className="truncate" />
              </SelectTrigger>
              <SelectContent>
                {dynamicLessonOptions.map(lOpt => (
                  <SelectItem key={lOpt.number} value={lOpt.number} className="text-xs">
                    {lOpt.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-card/60 px-3 py-1.5 rounded-lg border text-xs gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <Badge variant="outline" className="text-[11px] font-bold text-primary border-primary/30 shrink-0">
              {activeSubjectName}
            </Badge>
            <span className="truncate text-muted-foreground font-medium text-[11px] sm:text-xs">
              {activeLessonTitle}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSelectors(true)}
            className="h-6 text-[11px] text-muted-foreground hover:text-foreground gap-1 px-1.5 shrink-0"
          >
            <RotateCcw className="h-3 w-3" /> Trocar
          </Button>
        </div>
      )}

      {/* Mobile Compact Stats Bar */}
      <div className="sm:hidden space-y-2 bg-card/90 p-2.5 rounded-lg border border-primary/20 shadow-sm">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-muted-foreground text-[11px]">Progresso:</span>
            <span className="font-bold text-foreground text-xs">{answeredCount}/{totalQuestions}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-xs">✓ {correctCount}</span>
            <span className="text-primary font-bold text-xs">({accuracyPercent}%)</span>
          </div>
        </div>
        <Progress value={progressPercent} className="h-1.5" />

        {/* Block Filters */}
        <div className="flex items-center gap-1 overflow-x-auto pb-0.5 no-scrollbar pt-1">
          <span className="text-[10px] text-muted-foreground font-semibold shrink-0">Filtrar:</span>
          <Button
            size="sm"
            variant={filterBlock === 'all' ? 'default' : 'outline'}
            onClick={() => setFilterBlock('all')}
            className="text-[10px] h-6 px-2 shrink-0"
          >
            Todas (50)
          </Button>
          {[1, 2, 3, 4, 5].map(num => (
            <Button
              key={num}
              size="sm"
              variant={filterBlock === num ? 'default' : 'outline'}
              onClick={() => setFilterBlock(num)}
              className="text-[10px] h-6 px-2 shrink-0"
            >
              B{num} ({num * 10 - 9}-{num * 10})
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop Rich Stats Banner */}
      <Card className="hidden sm:block border-primary/40 bg-gradient-to-r from-primary/10 via-background to-primary/5 shadow-md">
        <CardHeader className="p-4 pb-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <CardTitle className="text-lg font-bold flex items-center gap-2 leading-tight">
                <Sparkles className="h-5 w-5 text-primary animate-pulse shrink-0" />
                Simulado: {activeSubjectName} – {activeLessonTitle} ({totalQuestions} Questões)
              </CardTitle>
              <CardDescription className="text-xs mt-1">
                Responda cada questão diretamente abaixo. O gabarito e a explicação detalhada aparecem imediatamente!
              </CardDescription>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleResetAll} className="gap-1 text-xs h-8">
                <RotateCcw className="h-3.5 w-3.5" /> Limpar Respostas
              </Button>
              <Button size="sm" onClick={handleSaveToSystem} className="gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white h-8">
                <Save className="h-4 w-4" /> Salvar no Sistema
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-0 space-y-3">
          {/* Progress Bar & Indicators */}
          <div className="grid grid-cols-4 gap-3 bg-card/60 p-3 rounded-lg border text-left">
            <div>
              <p className="text-xs text-muted-foreground font-medium">Respondidas</p>
              <p className="text-base font-bold">{answeredCount} / {totalQuestions}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Acertos</p>
              <p className="text-base font-bold text-emerald-500">{correctCount}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Taxa de Acerto</p>
              <p className="text-base font-bold text-primary">{accuracyPercent}%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Progresso</p>
              <div className="flex items-center gap-1.5 mt-1">
                <Progress value={progressPercent} className="h-2 flex-1" />
                <span className="text-xs font-bold">{progressPercent}%</span>
              </div>
            </div>
          </div>

          {/* Block Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar flex-wrap pt-1">
            <span className="text-xs text-muted-foreground font-semibold mr-1 shrink-0">Blocos:</span>
            <Button
              size="sm"
              variant={filterBlock === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterBlock('all')}
              className="text-xs h-7 px-2.5 shrink-0"
            >
              Todas (50)
            </Button>
            {[1, 2, 3, 4, 5].map(num => (
              <Button
                key={num}
                size="sm"
                variant={filterBlock === num ? 'default' : 'outline'}
                onClick={() => setFilterBlock(num)}
                className="text-xs h-7 px-2.5 shrink-0"
              >
                Bloco {num} (Q{(num - 1) * 10 + 1}-{num * 10})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Questions List */}
      <div className="space-y-3 sm:space-y-6 pb-24 sm:pb-6">
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
              <CardHeader className="p-3 sm:p-6 pb-2 sm:pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <Badge variant="outline" className="font-mono text-[10px] sm:text-xs font-semibold bg-muted">
                        Q{String(q.id).padStart(2, '0')}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/30 text-[10px] sm:text-xs">
                        {q.source}
                      </Badge>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs truncate max-w-[200px] sm:max-w-none">
                        {q.topic}
                      </Badge>
                    </div>
                  </div>

                  {isAnswered && (
                    <Badge
                      className={cn(
                        'gap-1 text-[10px] sm:text-xs px-2 py-0.5 font-bold shrink-0',
                        isCorrect
                          ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                          : 'bg-rose-600 text-white dark:bg-rose-500'
                      )}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" /> Correta
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3 w-3" /> Incorreta
                        </>
                      )}
                    </Badge>
                  )}
                </div>

                <p className="text-xs sm:text-base font-medium mt-2 sm:mt-3 leading-relaxed whitespace-pre-line text-foreground break-words">
                  {q.statement}
                </p>
              </CardHeader>

              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0 space-y-3">
                {/* Options Space */}
                <div className="space-y-2 pt-1">
                  <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Selecione sua resposta:
                  </p>

                  {q.type === 'tf' ? (
                    <div className="flex gap-2 sm:gap-3">
                      {['Certo', 'Errado'].map((optionStr, optIdx) => {
                        const isSelected = answers[q.id] === optionStr;
                        const correctStr = q.correctAnswer === 0 ? 'Certo' : 'Errado';
                        const isThisCorrect = optionStr === correctStr;

                        let btnCls = 'flex-1 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg border transition-all ';
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
                            <div className="flex items-center justify-center gap-1.5">
                              <span>{optionStr}</span>
                              {isRevealed && isThisCorrect && <Check className="h-4 w-4 text-emerald-600" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-1.5 sm:space-y-2">
                      {q.options?.map((optText, optIdx) => {
                        const letter = String.fromCharCode(65 + optIdx); // A, B, C, D, E
                        const isSelected = answers[q.id] === optIdx;
                        const isThisCorrect = optIdx === q.correctAnswer;

                        let rowCls = 'w-full text-left p-2.5 sm:p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5 sm:gap-3 break-words ';
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
                                'h-5 w-5 sm:h-6 sm:w-6 rounded-full text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0 border mt-0.5',
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
                            <span className="flex-1 leading-snug sm:leading-relaxed break-words text-xs sm:text-sm">{optText}</span>
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
                  <div className="mt-3 p-2.5 sm:p-3.5 rounded-lg bg-muted/60 border border-border text-xs sm:text-sm space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-primary">
                      <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Gabarito Comentado:
                    </p>
                    <p className="text-foreground leading-relaxed break-words text-xs sm:text-sm">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    
      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[120] bg-background/95 backdrop-blur-md border-t border-border p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <Button variant="outline" size="sm" onClick={handleResetAll} className="h-9 text-xs gap-1 px-3 shrink-0">
          <RotateCcw className="h-3.5 w-3.5" /> Limpar
        </Button>
        <Button size="sm" onClick={handleSaveToSystem} className="h-9 text-xs font-bold gap-1.5 flex-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow">
          <Save className="h-4 w-4" /> Salvar Sessão ({correctCount}/{answeredCount})
        </Button>
      </div>
    </div>
  );
}