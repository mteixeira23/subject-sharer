
-- Workout types
CREATE TABLE public.workout_types (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#3b82f6',
  exercises JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.workout_types ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own workout_types" ON public.workout_types FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own workout_types" ON public.workout_types FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own workout_types" ON public.workout_types FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own workout_types" ON public.workout_types FOR DELETE USING (auth.uid() = user_id);

-- Workout settings (routine + goal per user)
CREATE TABLE public.workout_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  weekly_routine JSONB NOT NULL DEFAULT '{"0":null,"1":null,"2":null,"3":null,"4":null,"5":null,"6":null}'::jsonb,
  weekly_goal INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.workout_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own workout_settings" ON public.workout_settings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own workout_settings" ON public.workout_settings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own workout_settings" ON public.workout_settings FOR UPDATE USING (auth.uid() = user_id);

-- Workout logs
CREATE TABLE public.workout_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  date TEXT NOT NULL,
  workout_type_id UUID NOT NULL REFERENCES public.workout_types(id) ON DELETE CASCADE,
  exercises JSONB NOT NULL DEFAULT '[]'::jsonb,
  notes TEXT DEFAULT NULL,
  shift TEXT DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, date)
);

ALTER TABLE public.workout_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own workout_logs" ON public.workout_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own workout_logs" ON public.workout_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own workout_logs" ON public.workout_logs FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own workout_logs" ON public.workout_logs FOR DELETE USING (auth.uid() = user_id);
