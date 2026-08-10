import { useState, useEffect } from 'react';
import { useWorkout } from '@/contexts/WorkoutContext';
import { WorkoutExercise, WorkoutType } from '@/types/health';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dumbbell, Check, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

export function TodayWorkout() {
  const { data, today, getTodaySuggestedWorkout, getLogForDate, logWorkout } = useWorkout();

  const suggestedResult = getTodaySuggestedWorkout();
  const suggested = suggestedResult?.type ?? null;
  const suggestedShift = suggestedResult?.shift;
  const existingLog = getLogForDate(today);

  const [selectedType, setSelectedType] = useState<WorkoutType | null>(null);
  const [exercises, setExercises] = useState<WorkoutExercise[]>([]);
  const [editing, setEditing] = useState(false);

  // Initialize from suggested or existing log
  useEffect(() => {
    if (existingLog) {
      const wt = data.workoutTypes.find(t => t.id === existingLog.workoutTypeId);
      setSelectedType(wt ?? null);
      setExercises(existingLog.exercises);
      setEditing(false);
    } else if (suggested) {
      setSelectedType(suggested);
      setExercises(suggested.exercises.map(e => ({ ...e, id: crypto.randomUUID() })));
      setEditing(true);
    } else {
      setSelectedType(null);
      setExercises([]);
      setEditing(false);
    }
  }, [today, existingLog?.id, suggested?.id]);

  function switchType(wt: WorkoutType) {
    setSelectedType(wt);
    setExercises(wt.exercises.map(e => ({ ...e, id: crypto.randomUUID() })));
    setEditing(true);
  }

  function updateExercise(id: string, field: keyof WorkoutExercise, value: string | number) {
    setExercises(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e));
  }

  function addExercise() {
    setExercises(prev => [...prev, { id: crypto.randomUUID(), name: '', sets: 3, reps: 12, weight: 0 }]);
  }

  function removeExercise(id: string) {
    setExercises(prev => prev.filter(e => e.id !== id));
  }

  function saveWorkout() {
    if (!selectedType) return;
    logWorkout({
      date: today,
      workoutTypeId: selectedType.id,
      exercises: exercises.filter(e => e.name.trim()),
      shift: suggestedShift,
    });
    setEditing(false);
    toast({ title: 'Treino registrado! 💪' });
  }

  // Rest day or no config
  if (!suggested && !existingLog && data.workoutTypes.length === 0) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Dumbbell className="h-4 w-4 text-primary" />
            Treino do Dia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-2 py-6 text-muted-foreground">
            <Dumbbell className="h-8 w-8 opacity-30" />
            <p className="text-sm">Configure sua rotina para começar</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const isRestDay = !suggested && !existingLog;

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Dumbbell className="h-4 w-4 text-primary" />
            Treino do Dia
          </CardTitle>
          {existingLog && !editing && (
            <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
              <Check className="h-3.5 w-3.5" /> Registrado
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isRestDay ? (
          <div className="flex flex-col items-center gap-2 py-4 text-muted-foreground">
            <span className="text-2xl">😴</span>
            <p className="text-sm font-medium">Dia de descanso</p>
            {data.workoutTypes.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {data.workoutTypes.map(wt => (
                  <Button key={wt.id} variant="outline" size="sm" className="text-xs h-7" onClick={() => switchType(wt)}>
                    <div className="h-2.5 w-2.5 rounded-full mr-1.5" style={{ backgroundColor: wt.color }} />
                    {wt.name}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Type selector */}
            {editing && data.workoutTypes.length > 1 && (
              <div className="flex flex-wrap gap-1.5">
                {data.workoutTypes.map(wt => (
                  <button
                    key={wt.id}
                    onClick={() => switchType(wt)}
                    className={cn(
                      'flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium transition-all',
                      selectedType?.id === wt.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: wt.color }} />
                    {wt.name}
                  </button>
                ))}
              </div>
            )}

            {selectedType && (
              <div className="flex items-center gap-2 mb-1">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: selectedType.color }} />
                <span className="text-sm font-semibold">{selectedType.name}</span>
              </div>
            )}

            {/* Exercise list */}
            <div className="space-y-1.5">
              {exercises.length > 0 && (
                <div className="flex gap-1.5 text-[10px] text-muted-foreground px-1">
                  <span className="flex-1">Exercício</span>
                  <span className="w-12 text-center">Sér</span>
                  <span className="w-12 text-center">Rep</span>
                  <span className="w-14 text-center">Kg</span>
                  {editing && <span className="w-7" />}
                </div>
              )}
              {exercises.map(ex => (
                <div key={ex.id} className="flex items-center gap-1.5">
                  {editing ? (
                    <>
                      <Input
                        value={ex.name}
                        onChange={e => updateExercise(ex.id, 'name', e.target.value)}
                        className="flex-1 h-8 text-xs"
                        placeholder="Nome"
                      />
                      <Input
                        type="number" value={ex.sets || ''} min={1}
                        onChange={e => updateExercise(ex.id, 'sets', Number(e.target.value))}
                        className="w-12 h-8 text-xs text-center"
                      />
                      <Input
                        type="number" value={ex.reps || ''} min={1}
                        onChange={e => updateExercise(ex.id, 'reps', Number(e.target.value))}
                        className="w-12 h-8 text-xs text-center"
                      />
                      <Input
                        type="number" value={ex.weight || ''} min={0} step={0.5}
                        onChange={e => updateExercise(ex.id, 'weight', Number(e.target.value))}
                        className="w-14 h-8 text-xs text-center"
                      />
                      <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0" onClick={() => removeExercise(ex.id)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-sm">{ex.name}</span>
                      <span className="w-12 text-center text-xs text-muted-foreground">{ex.sets}</span>
                      <span className="w-12 text-center text-xs text-muted-foreground">{ex.reps}</span>
                      <span className="w-14 text-center text-xs font-medium">{ex.weight}kg</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {editing && (
              <div className="flex gap-2 pt-1">
                <Button variant="ghost" size="sm" className="text-xs h-7" onClick={addExercise}>
                  <Plus className="h-3 w-3 mr-1" /> Exercício
                </Button>
                <div className="flex-1" />
                <Button size="sm" className="text-xs h-8" onClick={saveWorkout}>
                  <Check className="h-3.5 w-3.5 mr-1" /> Finalizar Treino
                </Button>
              </div>
            )}

            {!editing && existingLog && (
              <Button variant="outline" size="sm" className="text-xs h-7" onClick={() => setEditing(true)}>
                Editar treino
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
