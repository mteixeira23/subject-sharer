import { useState } from 'react';
import { useGoals } from '@/contexts/GoalsContext';
import { useGoalProgress } from '@/hooks/useGoalProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Target, Plus, Trash2, Pause, Play, Trophy } from 'lucide-react';
import { GoalCategory, GoalPeriod, GOAL_CATEGORY_CONFIG, CATEGORY_GROUPS, CategoryGroupKey } from '@/types/goals';
import { cn } from '@/lib/utils';

const SECTION_ORDER = [
  { label: 'Tarefas',   categories: ['tasks'] },
  { label: 'Estudos',   categories: ['questions', 'study_time'] },
  { label: 'Finanças',  categories: ['finance_save'] },
  { label: 'Saúde',     categories: ['habits', 'workout'] },
];

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="w-8 h-0.5 bg-primary rounded-full" />
      <span className="text-sm font-semibold text-primary whitespace-nowrap">{label}</span>
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full" />
    </div>
  );
}

export default function Metas() {
  const { data, addGoal, deleteGoal, toggleGoalActive } = useGoals();
  const { getProgress } = useGoalProgress();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newGroup, setNewGroup] = useState<CategoryGroupKey>('tasks');
  const [newCategory, setNewCategory] = useState<GoalCategory>('tasks');
  const [newPeriod, setNewPeriod] = useState<GoalPeriod>('weekly');
  const [newTarget, setNewTarget] = useState('');

  const selectedGroup = CATEGORY_GROUPS.find(g => g.key === newGroup)!;
  const showSubcategory = selectedGroup.categories.length > 1;

  function handleGroupChange(groupKey: string) {
    const group = CATEGORY_GROUPS.find(g => g.key === groupKey)!;
    setNewGroup(groupKey as CategoryGroupKey);
    setNewCategory(group.categories[0]);
  }

  const activeGoals = data.goals.filter(g => g.active);
  const inactiveGoals = data.goals.filter(g => !g.active);

  function handleAdd() {
    if (!newTitle.trim() || !newTarget) return;
    addGoal({
      title: newTitle.trim(),
      category: newCategory,
      period: newPeriod,
      target: parseFloat(newTarget),
    });
    setNewTitle('');
    setNewTarget('');
    setDialogOpen(false);
  }

  function getProgressPercent(category: GoalCategory, period: GoalPeriod, target: number) {
    const current = getProgress(category, period);
    return { current, percent: Math.min(100, target > 0 ? (current / target) * 100 : 0) };
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b bg-background px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="hidden md:inline-flex" />
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">Metas</h1>
              <p className="text-xs text-muted-foreground">Defina e acompanhe seus objetivos</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" onClick={() => setDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Nova Meta</span>
            <span className="sm:hidden">Nova</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 space-y-6">
        {/* Active Goals */}
        {activeGoals.length === 0 && inactiveGoals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <Target className="h-16 w-16 opacity-20 mb-4" />
            <p className="text-lg font-medium">Nenhuma meta definida</p>
            <p className="text-sm mb-4">Crie metas para acompanhar seu progresso</p>
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-1" />
              Criar Primeira Meta
            </Button>
          </div>
        ) : (
          <>
            {activeGoals.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Metas Ativas ({activeGoals.length})
                </h2>
                {SECTION_ORDER.map(section => {
                  const sectionGoals = activeGoals.filter(g =>
                    section.categories.includes(g.category),
                  );
                  if (sectionGoals.length === 0) return null;
                  return (
                    <div key={section.label}>
                      <SectionDivider label={section.label} />
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {sectionGoals.map(goal => {
                          const config = GOAL_CATEGORY_CONFIG[goal.category];
                          const { current, percent } = getProgressPercent(goal.category, goal.period, goal.target);
                          const achieved = percent >= 100;

                          return (
                            <Card key={goal.id} className={cn(
                              'relative overflow-hidden transition-all',
                              achieved && 'ring-2 ring-amber-500/50',
                            )}>
                              {achieved && (
                                <div className="absolute top-2 right-2">
                                  <Trophy className="h-5 w-5 text-amber-500" />
                                </div>
                              )}
                              <CardHeader className="pb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl">{config.icon}</span>
                                  <div className="flex-1 min-w-0">
                                    <CardTitle className="text-sm font-semibold truncate">{goal.title}</CardTitle>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <span
                                        className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                                        style={{ backgroundColor: `${config.color}20`, color: config.color }}
                                      >
                                        {config.label}
                                      </span>
                                      <span className="text-[10px] text-muted-foreground font-medium">
                                      {goal.period === 'weekly' ? 'Semanal' : goal.period === 'monthly' ? 'Mensal' : 'Anual'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <div className="flex items-end justify-between mb-1.5">
                                    <span className={cn(
                                      'text-2xl font-bold',
                                      achieved ? 'text-amber-500' : '',
                                    )}>
                                      {goal.category === 'finance_save'
                                        ? `R$ ${current.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`
                                        : current.toLocaleString('pt-BR')}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                      / {goal.category === 'finance_save' ? `R$ ${goal.target}` : goal.target} {goal.category !== 'finance_save' ? config.unit : ''}
                                    </span>
                                  </div>
                                  <Progress value={percent} className="h-2.5" />
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {achieved ? '🎉 Meta atingida!' : `${percent.toFixed(0)}% concluído`}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1 pt-1 border-t">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 text-xs text-muted-foreground"
                                    onClick={() => toggleGoalActive(goal.id)}
                                  >
                                    <Pause className="h-3 w-3 mr-1" />
                                    Pausar
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 text-xs text-destructive hover:text-destructive"
                                    onClick={() => deleteGoal(goal.id)}
                                  >
                                    <Trash2 className="h-3 w-3 mr-1" />
                                    Excluir
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {inactiveGoals.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Pausadas ({inactiveGoals.length})
                </h2>
                <div className="space-y-2">
                  {inactiveGoals.map(goal => {
                    const config = GOAL_CATEGORY_CONFIG[goal.category];
                    return (
                      <div key={goal.id} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
                        <span className="text-lg">{config.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{goal.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {config.label} • {goal.period === 'weekly' ? 'Semanal' : goal.period === 'monthly' ? 'Mensal' : 'Anual'} • Meta: {goal.target} {config.unit}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => toggleGoalActive(goal.id)}>
                          <Play className="h-3 w-3 mr-1" />
                          Reativar
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 text-xs text-destructive hover:text-destructive" onClick={() => deleteGoal(goal.id)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Add Goal Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nova Meta</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Título</Label>
              <Input
                placeholder="Ex: Resolver 200 questões esta semana"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select value={newGroup} onValueChange={handleGroupChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORY_GROUPS.map(g => (
                      <SelectItem key={g.key} value={g.key}>
                        <span className="flex items-center gap-2">
                          <span>{g.icon}</span> {g.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Período</Label>
                <Select value={newPeriod} onValueChange={v => setNewPeriod(v as GoalPeriod)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensal</SelectItem>
                    <SelectItem value="yearly">Anual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {showSubcategory && (
              <div className="space-y-2">
                <Label>Subcategoria</Label>
                <Select value={newCategory} onValueChange={v => setNewCategory(v as GoalCategory)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedGroup.categories.map(cat => {
                      const cfg = GOAL_CATEGORY_CONFIG[cat];
                      return (
                        <SelectItem key={cat} value={cat}>
                          <span className="flex items-center gap-2">
                            <span>{cfg.icon}</span> {cfg.label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="space-y-2">
              <Label>Meta ({GOAL_CATEGORY_CONFIG[newCategory].unit})</Label>
              <Input
                type="number"
                placeholder={GOAL_CATEGORY_CONFIG[newCategory].placeholder}
                value={newTarget}
                onChange={e => setNewTarget(e.target.value)}
                min="1"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleAdd} disabled={!newTitle.trim() || !newTarget}>
              Criar Meta
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
