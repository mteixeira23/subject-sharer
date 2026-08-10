import { useState } from 'react';
import { useWorkout } from '@/contexts/WorkoutContext';
import { WorkoutExercise, WorkoutType, WORKOUT_COLORS, RoutineDayConfig } from '@/types/health';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Edit2, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { Shift, SHIFT_CONFIG, SHIFT_ORDER } from '@/lib/shifts';

const DAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export function WorkoutSetup({ open, onOpenChange }: Props) {
  const {
    data, addWorkoutType, updateWorkoutType, deleteWorkoutType,
    setWeeklyRoutine, setWeeklyGoal,
  } = useWorkout();

  const [tab, setTab] = useState<'types' | 'routine'>('types');

  // New/Edit type form
  const [editingId, setEditingId] = useState<string | null>(null);
  const [typeName, setTypeName] = useState('');
  const [typeColor, setTypeColor] = useState(WORKOUT_COLORS[0]);
  const [typeExercises, setTypeExercises] = useState<WorkoutExercise[]>([]);

  function resetForm() {
    setEditingId(null);
    setTypeName('');
    setTypeColor(WORKOUT_COLORS[0]);
    setTypeExercises([]);
  }

  function startEdit(wt: WorkoutType) {
    setEditingId(wt.id);
    setTypeName(wt.name);
    setTypeColor(wt.color);
    setTypeExercises([...wt.exercises]);
  }

  function addExercise() {
    setTypeExercises(prev => [
      ...prev,
      { id: crypto.randomUUID(), name: '', sets: 3, reps: 12, weight: 0 },
    ]);
  }

  function updateExercise(id: string, field: keyof WorkoutExercise, value: string | number) {
    setTypeExercises(prev =>
      prev.map(e => e.id === id ? { ...e, [field]: value } : e),
    );
  }

  function removeExercise(id: string) {
    setTypeExercises(prev => prev.filter(e => e.id !== id));
  }

  function saveType() {
    if (!typeName.trim()) return;
    const payload = {
      name: typeName.trim(),
      color: typeColor,
      exercises: typeExercises.filter(e => e.name.trim()),
    };
    if (editingId) {
      updateWorkoutType(editingId, payload);
    } else {
      addWorkoutType(payload);
    }
    resetForm();
  }

  // Routine
  const routine = data.weeklyRoutine;

  function setRoutineDay(day: number, typeId: string | null) {
    const current = routine[day];
    if (!typeId) {
      setWeeklyRoutine({ ...routine, [day]: null });
    } else {
      setWeeklyRoutine({ ...routine, [day]: { typeId, shift: current?.shift } });
    }
  }

  function setRoutineDayShift(day: number, shift: Shift | undefined) {
    const current = routine[day];
    if (!current) return;
    setWeeklyRoutine({ ...routine, [day]: { ...current, shift } });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5" />
            Configurar Rotina
          </DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex gap-1 border rounded-lg p-1">
          {(['types', 'routine'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'flex-1 py-1.5 text-xs font-medium rounded-md transition-all',
                tab === t ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {t === 'types' ? 'Tipos de Treino' : 'Rotina Semanal'}
            </button>
          ))}
        </div>

        {tab === 'types' && (
          <div className="space-y-4">
            {/* Form */}
            <div className="space-y-3 p-3 border rounded-lg bg-muted/30">
              <Label className="text-sm font-medium">
                {editingId ? 'Editar Treino' : 'Novo Tipo de Treino'}
              </Label>
              <div className="flex gap-1.5 items-center">
                <Input
                  placeholder="Ex: Treino A - Peito/Tríceps"
                  value={typeName}
                  onChange={e => setTypeName(e.target.value)}
                  className="flex-1"
                />
                <VoiceInputButton onTranscript={t => setTypeName(v => v ? v + ' ' + t : t)} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1.5">Cor:</p>
                <div className="flex gap-1.5">
                  {WORKOUT_COLORS.map(c => (
                    <button
                      key={c}
                      onClick={() => setTypeColor(c)}
                      className={cn(
                        'h-7 w-7 rounded-full border-2 transition-all',
                        typeColor === c ? 'border-foreground scale-110' : 'border-transparent',
                      )}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              {/* Exercises */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs text-muted-foreground">Exercícios:</p>
                  <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={addExercise}>
                    <Plus className="h-3 w-3 mr-1" /> Exercício
                  </Button>
                </div>
                <div className="space-y-2">
                  {typeExercises.map(ex => (
                    <div key={ex.id} className="flex items-center gap-1.5">
                      <div className="flex gap-1 items-center flex-1">
                        <Input
                          placeholder="Nome"
                          value={ex.name}
                          onChange={e => updateExercise(ex.id, 'name', e.target.value)}
                          className="flex-1 h-8 text-xs"
                        />
                        <VoiceInputButton onTranscript={t => updateExercise(ex.id, 'name', ex.name ? ex.name + ' ' + t : t)} className="p-1" />
                      </div>
                      <Input
                        type="number"
                        placeholder="Sér"
                        value={ex.sets || ''}
                        onChange={e => updateExercise(ex.id, 'sets', Number(e.target.value))}
                        className="w-14 h-8 text-xs text-center"
                        min={1}
                      />
                      <Input
                        type="number"
                        placeholder="Rep"
                        value={ex.reps || ''}
                        onChange={e => updateExercise(ex.id, 'reps', Number(e.target.value))}
                        className="w-14 h-8 text-xs text-center"
                        min={1}
                      />
                      <Input
                        type="number"
                        placeholder="Kg"
                        value={ex.weight || ''}
                        onChange={e => updateExercise(ex.id, 'weight', Number(e.target.value))}
                        className="w-14 h-8 text-xs text-center"
                        min={0}
                        step={0.5}
                      />
                      <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0" onClick={() => removeExercise(ex.id)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                  {typeExercises.length > 0 && (
                    <div className="flex gap-1.5 text-[10px] text-muted-foreground pl-1">
                      <span className="flex-1">Nome</span>
                      <span className="w-14 text-center">Séries</span>
                      <span className="w-14 text-center">Reps</span>
                      <span className="w-14 text-center">Carga</span>
                      <span className="w-7" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" onClick={saveType} disabled={!typeName.trim()}>
                  {editingId ? 'Salvar' : 'Criar Treino'}
                </Button>
                {editingId && (
                  <Button size="sm" variant="ghost" onClick={resetForm}>Cancelar</Button>
                )}
              </div>
            </div>

            {/* Existing types */}
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-muted-foreground">
                Treinos cadastrados ({data.workoutTypes.length})
              </p>
              {data.workoutTypes.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">Nenhum treino configurado</p>
              ) : (
                data.workoutTypes.map(wt => (
                  <div key={wt.id} className="flex items-center gap-3 rounded-lg border px-3 py-2 group">
                    <div className="h-4 w-4 rounded-full flex-shrink-0" style={{ backgroundColor: wt.color }} />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium block truncate">{wt.name}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {wt.exercises.length} exercício{wt.exercises.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100" onClick={() => startEdit(wt)}>
                      <Edit2 className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive" onClick={() => deleteWorkoutType(wt.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {tab === 'routine' && (
          <div className="space-y-4">
            {/* Weekly routine assignment */}
            <div className="space-y-3">
              <Label className="text-sm">Rotina Semanal</Label>
              {DAY_LABELS.map((label, day) => {
                const cfg = routine[day];
                return (
                  <div key={day} className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium w-10">{label}</span>
                      <select
                        className="flex-1 h-9 rounded-md border bg-background px-3 text-sm"
                        value={cfg?.typeId ?? ''}
                        onChange={e => setRoutineDay(day, e.target.value || null)}
                      >
                        <option value="">Descanso</option>
                        {data.workoutTypes.map(wt => (
                          <option key={wt.id} value={wt.id}>{wt.name}</option>
                        ))}
                      </select>
                    </div>
                    {cfg && (
                      <div className="flex flex-wrap gap-1 ml-[52px]">
                        {SHIFT_ORDER.map(s => {
                          const sc = SHIFT_CONFIG[s];
                          const active = cfg.shift === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setRoutineDayShift(day, active ? undefined : s)}
                              className={cn(
                                'flex items-center gap-1 px-2 py-1 rounded-md border text-[10px] font-medium transition-all',
                                active
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-border bg-background text-muted-foreground hover:border-muted-foreground hover:text-foreground',
                              )}
                            >
                              <span>{sc.icon}</span> {sc.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Weekly goal */}
            <div className="space-y-2">
              <Label className="text-sm">Meta semanal (dias)</Label>
              <Input
                type="number"
                min={1}
                max={7}
                value={data.weeklyGoal}
                onChange={e => setWeeklyGoal(Number(e.target.value))}
                className="w-24"
              />
            </div>
          </div>
        )}

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
