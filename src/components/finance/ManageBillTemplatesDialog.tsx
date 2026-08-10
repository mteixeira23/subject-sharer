import { useState } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VoiceInputButton } from '@/components/ui/voice-input-button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from '@/components/ui/dialog';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES, TransactionCategory } from '@/types/finance';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ManageBillTemplatesDialog({ open, onOpenChange }: Props) {
  const { data, addBillTemplate, deleteBillTemplate } = useFinance();
  const [name, setName] = useState('');
  const [category, setCategory] = useState<string>('');

  function handleAdd() {
    if (!name.trim() || !category) return;
    addBillTemplate({ name: name.trim(), category: category as TransactionCategory });
    setName('');
    setCategory('');
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastrar Contas</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex gap-2">
            <div className="flex-1">
              <Label className="text-sm mb-1 block">Nome</Label>
              <div className="flex gap-1.5 items-center">
                <Input
                  placeholder="Ex: Aluguel"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="flex-1"
                />
                <VoiceInputButton onTranscript={t => setName(v => v ? v + ' ' + t : t)} />
              </div>
            </div>
            <div className="flex-1">
              <Label className="text-sm mb-1 block">Categoria</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Despesas</div>
                  {EXPENSE_CATEGORIES.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground mt-1">Receitas</div>
                  {INCOME_CATEGORIES.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button size="icon" onClick={handleAdd} disabled={!name.trim() || !category}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-1 max-h-[300px] overflow-y-auto">
            {data.billTemplates.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">
                Nenhuma conta cadastrada
              </p>
            ) : (
              data.billTemplates.map(t => (
                <div
                  key={t.id}
                  className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-muted/50 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{t.name}</span>
                    <Badge variant="outline" className="text-[10px] h-4 px-1">
                      {t.category}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                    onClick={() => deleteBillTemplate(t.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
