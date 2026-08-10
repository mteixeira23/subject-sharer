
-- ============================================================
-- FASE 2 — Módulo de Estudos: migração para a nuvem
-- ============================================================

-- 1. Concursos
CREATE TABLE public.contests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.contests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own contests" ON public.contests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own contests" ON public.contests FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own contests" ON public.contests FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own contests" ON public.contests FOR DELETE USING (auth.uid() = user_id);

-- 2. Matérias
CREATE TABLE public.subjects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  contest_id UUID NOT NULL REFERENCES public.contests(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  total_lessons INTEGER NOT NULL DEFAULT 0,
  color TEXT NOT NULL DEFAULT 'hsl(210, 79%, 46%)',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own subjects" ON public.subjects FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own subjects" ON public.subjects FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own subjects" ON public.subjects FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own subjects" ON public.subjects FOR DELETE USING (auth.uid() = user_id);

-- 3. Aulas/Capítulos
CREATE TABLE public.lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  number INTEGER NOT NULL,
  name TEXT DEFAULT '',
  theory_completed BOOLEAN NOT NULL DEFAULT false,
  review_completed BOOLEAN NOT NULL DEFAULT false,
  questions_count INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own lessons" ON public.lessons FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own lessons" ON public.lessons FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own lessons" ON public.lessons FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own lessons" ON public.lessons FOR DELETE USING (auth.uid() = user_id);

-- 4. Eventos do Cronograma
CREATE TABLE public.schedule_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  date TEXT NOT NULL,
  lesson_number INTEGER NOT NULL,
  type TEXT NOT NULL DEFAULT 'theory',
  completed BOOLEAN NOT NULL DEFAULT false,
  description TEXT,
  shift TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.schedule_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own schedule_events" ON public.schedule_events FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own schedule_events" ON public.schedule_events FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own schedule_events" ON public.schedule_events FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own schedule_events" ON public.schedule_events FOR DELETE USING (auth.uid() = user_id);

-- 5. Sessões de Questões
CREATE TABLE public.question_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  lesson_number INTEGER NOT NULL,
  questions_count INTEGER NOT NULL DEFAULT 0,
  correct_answers INTEGER NOT NULL DEFAULT 0,
  date TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.question_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own question_sessions" ON public.question_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own question_sessions" ON public.question_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own question_sessions" ON public.question_sessions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own question_sessions" ON public.question_sessions FOR DELETE USING (auth.uid() = user_id);

-- 6. Sessões de Pomodoro
CREATE TABLE public.pomodoro_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject_id UUID NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  lesson_number INTEGER NOT NULL,
  started_at TEXT NOT NULL,
  duration INTEGER NOT NULL DEFAULT 0,
  completed BOOLEAN NOT NULL DEFAULT false,
  date TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.pomodoro_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own pomodoro_sessions" ON public.pomodoro_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own pomodoro_sessions" ON public.pomodoro_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own pomodoro_sessions" ON public.pomodoro_sessions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own pomodoro_sessions" ON public.pomodoro_sessions FOR DELETE USING (auth.uid() = user_id);
