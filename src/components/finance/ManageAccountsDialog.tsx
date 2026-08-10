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
import { ACCOUNT_TYPES, AccountType } from '@/types/finance';

const TYPE_LABELS: Record<AccountType, string> = {
  bank: 'Bancária',
  cash: 'Caixa',
  investment: 'Investimento',
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ManageAccountsDialog({ open, onOpenChange }: Props) {
  const { data, addAccount, deleteAccount } = useFinance();
  const [name, setName] = useState('');
  const [type, setType] = useState<AccountType>('bank');

  function handleAdd() {
    if (!name.trim()) return;
    addAccount({ name: name.trim(), type });
    setName('');
    setType('bank');
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Gerenciar Contas</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="flex gap-2">
            <div className="flex gap-1.5 items-center flex-1">
              <Input
                placeholder="Nome da conta"
                value={name}
                onChange={e => setName(e.target.value)}
                className="flex-1"
              />
              <VoiceInputButton onTranscript={t => setName(v => v ? v + ' ' + t : t)} />
            </div>
            <Select value={type} onValueChange={v => setType(v as AccountType)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ACCOUNT_TYPES.map(at => (
                  <SelectItem key={at.value} value={at.value}>{at.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button size="icon" onClick={handleAdd} disabled={!name.trim()}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {data.accounts.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Nenhuma conta cadastrada
            </p>
          ) : (
            <div className="space-y-2">
              {data.accounts.map(acc => (
                <div key={acc.id} className="flex items-center justify-between rounded-lg border px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{acc.name}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {TYPE_LABELS[acc.type]}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost" size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                    onClick={() => deleteAccount(acc.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
