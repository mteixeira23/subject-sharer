import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { getLocalDateString } from '@/lib/dates';

export interface NotificationSettings {
  enabled: boolean;
  habitReminder: boolean;
  habitReminderTime: string;
  taskReminder: boolean;
  taskReminderTime: string;
  studyReminder: boolean;
  studyReminderTime: string;
}

const DEFAULT_SETTINGS: NotificationSettings = {
  enabled: false,
  habitReminder: true,
  habitReminderTime: '20:00',
  taskReminder: true,
  taskReminderTime: '09:00',
  studyReminder: true,
  studyReminderTime: '08:00',
};

function toDbRow(s: NotificationSettings, userId: string) {
  return {
    user_id: userId,
    enabled: s.enabled,
    habit_reminder: s.habitReminder,
    habit_reminder_time: s.habitReminderTime,
    task_reminder: s.taskReminder,
    task_reminder_time: s.taskReminderTime,
    study_reminder: s.studyReminder,
    study_reminder_time: s.studyReminderTime,
  };
}

function fromDbRow(row: any): NotificationSettings {
  return {
    enabled: row.enabled,
    habitReminder: row.habit_reminder,
    habitReminderTime: row.habit_reminder_time,
    taskReminder: row.task_reminder,
    taskReminderTime: row.task_reminder_time,
    studyReminder: row.study_reminder,
    studyReminderTime: row.study_reminder_time,
  };
}

export function useNotifications() {
  const { user } = useAuth();
  const [settings, setSettings] = useState<NotificationSettings>(DEFAULT_SETTINGS);
  const [loaded, setLoaded] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied',
  );
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSupported = typeof Notification !== 'undefined';

  // Load settings from DB
  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('notification_settings')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        setSettings(fromDbRow(data));
      } else {
        // Migrate from localStorage if exists
        try {
          const raw = localStorage.getItem('notification-settings');
          if (raw) {
            const parsed = { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
            setSettings(parsed);
            await supabase.from('notification_settings').insert(toDbRow(parsed, user.id));
            localStorage.removeItem('notification-settings');
          }
        } catch { /* ignore */ }
      }
      setLoaded(true);
    };
    load();
  }, [user]);

  const requestPermission = useCallback(async () => {
    if (!isSupported) return false;
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === 'granted') {
      updateSettings({ enabled: true });
      return true;
    }
    return false;
  }, [isSupported]);

  const persistToDb = useCallback((next: NotificationSettings) => {
    if (!user) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(async () => {
      const { data } = await supabase
        .from('notification_settings')
        .select('id')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        await supabase
          .from('notification_settings')
          .update(toDbRow(next, user.id))
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('notification_settings')
          .insert(toDbRow(next, user.id));
      }
    }, 500);
  }, [user]);

  const updateSettings = useCallback((updates: Partial<NotificationSettings>) => {
    setSettings(prev => {
      const next = { ...prev, ...updates };
      persistToDb(next);
      return next;
    });
  }, [persistToDb]);

  const sendNotification = useCallback((title: string, body: string, icon?: string) => {
    if (!isSupported || permission !== 'granted') return;
    try {
      new Notification(title, {
        body,
        icon: icon || '/favicon.ico',
        badge: '/favicon.ico',
      });
    } catch {
      // Silent fail
    }
  }, [isSupported, permission]);

  // Check reminders every 30s
  useEffect(() => {
    if (!settings.enabled || permission !== 'granted') return;

    const firedToday = new Set<string>();

    const check = () => {
      const now = new Date();
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      const todayKey = getLocalDateString(now);

      if (settings.habitReminder && currentTime === settings.habitReminderTime) {
        const key = `habit-${todayKey}`;
        if (!firedToday.has(key)) {
          firedToday.add(key);
          sendNotification('❤️ Lembrete de Hábitos', 'Não esqueça de completar seus hábitos de hoje!');
        }
      }

      if (settings.taskReminder && currentTime === settings.taskReminderTime) {
        const key = `task-${todayKey}`;
        if (!firedToday.has(key)) {
          firedToday.add(key);
          sendNotification('✅ Lembrete de Tarefas', 'Confira suas tarefas do dia!');
        }
      }

      if (settings.studyReminder && currentTime === settings.studyReminderTime) {
        const key = `study-${todayKey}`;
        if (!firedToday.has(key)) {
          firedToday.add(key);
          sendNotification('📚 Hora de Estudar', 'Você tem sessões de estudo agendadas. Bora!');
        }
      }
    };

    const interval = setInterval(check, 30_000);
    return () => clearInterval(interval);
  }, [settings, permission, sendNotification]);

  return {
    settings,
    permission,
    isSupported,
    loaded,
    requestPermission,
    updateSettings,
    sendNotification,
  };
}
