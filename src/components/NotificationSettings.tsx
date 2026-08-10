import { useNotifications } from '@/hooks/useNotifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Bell, BellOff, BellRing, Heart, CheckSquare, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationSettingsProps {
  compact?: boolean;
}

export function NotificationSettings({ compact = false }: NotificationSettingsProps) {
  const { settings, permission, isSupported, requestPermission, updateSettings } = useNotifications();

  if (!isSupported) {
    return compact ? null : (
      <Card>
        <CardContent className="py-6 text-center text-sm text-muted-foreground">
          <BellOff className="h-8 w-8 mx-auto mb-2 opacity-30" />
          Notificações não são suportadas neste navegador.
        </CardContent>
      </Card>
    );
  }

  if (permission === 'denied') {
    return compact ? null : (
      <Card>
        <CardContent className="py-6 text-center text-sm text-muted-foreground">
          <BellOff className="h-8 w-8 mx-auto mb-2 opacity-30" />
          <p>Notificações foram bloqueadas.</p>
          <p className="text-xs mt-1">Altere nas configurações do navegador.</p>
        </CardContent>
      </Card>
    );
  }

  if (permission !== 'granted') {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notificações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Ative as notificações para receber lembretes de hábitos, tarefas e sessões de estudo.
          </p>
          <Button onClick={requestPermission} className="w-full">
            <BellRing className="h-4 w-4 mr-2" />
            Ativar Notificações
          </Button>
        </CardContent>
      </Card>
    );
  }

  const reminderItems = [
    {
      key: 'habitReminder' as const,
      timeKey: 'habitReminderTime' as const,
      label: 'Hábitos',
      desc: 'Lembrete para completar hábitos',
      icon: <Heart className="h-4 w-4 text-rose-500" />,
    },
    {
      key: 'taskReminder' as const,
      timeKey: 'taskReminderTime' as const,
      label: 'Tarefas',
      desc: 'Lembrete de tarefas do dia',
      icon: <CheckSquare className="h-4 w-4 text-violet-500" />,
    },
    {
      key: 'studyReminder' as const,
      timeKey: 'studyReminderTime' as const,
      label: 'Estudos',
      desc: 'Lembrete para sessão de estudo',
      icon: <BookOpen className="h-4 w-4 text-primary" />,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center justify-between">
          <span className="flex items-center gap-2">
            <BellRing className="h-4 w-4 text-primary" />
            Notificações
          </span>
          <div className="flex items-center gap-2">
            <Label htmlFor="notifications-master" className="text-xs text-muted-foreground font-normal">
              {settings.enabled ? 'Ativas' : 'Desativadas'}
            </Label>
            <Switch
              id="notifications-master"
              checked={settings.enabled}
              onCheckedChange={v => updateSettings({ enabled: v })}
            />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cn('space-y-3 transition-opacity', !settings.enabled && 'opacity-40 pointer-events-none')}>
          {reminderItems.map(item => (
            <div key={item.key} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Input
                type="time"
                value={settings[item.timeKey]}
                onChange={e => updateSettings({ [item.timeKey]: e.target.value })}
                className="w-24 h-8 text-xs"
                disabled={!settings[item.key]}
              />
              <Switch
                checked={settings[item.key]}
                onCheckedChange={v => updateSettings({ [item.key]: v })}
              />
            </div>
          ))}
        </div>

        {settings.enabled && (
          <div className="mt-3 pt-3 border-t">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              onClick={() => {
                new Notification('🔔 Teste de Notificação', {
                  body: 'As notificações estão funcionando!',
                  icon: '/favicon.ico',
                });
              }}
            >
              Enviar notificação de teste
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
