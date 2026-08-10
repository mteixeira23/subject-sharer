
-- Create notification_settings table
CREATE TABLE public.notification_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL UNIQUE,
  enabled boolean NOT NULL DEFAULT false,
  habit_reminder boolean NOT NULL DEFAULT true,
  habit_reminder_time text NOT NULL DEFAULT '20:00',
  task_reminder boolean NOT NULL DEFAULT true,
  task_reminder_time text NOT NULL DEFAULT '09:00',
  study_reminder boolean NOT NULL DEFAULT true,
  study_reminder_time text NOT NULL DEFAULT '08:00',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.notification_settings ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Users can view own notification_settings"
ON public.notification_settings FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own notification_settings"
ON public.notification_settings FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own notification_settings"
ON public.notification_settings FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own notification_settings"
ON public.notification_settings FOR DELETE
USING (auth.uid() = user_id);
