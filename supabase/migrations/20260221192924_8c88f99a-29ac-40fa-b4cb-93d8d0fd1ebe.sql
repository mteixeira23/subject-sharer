
-- 1. DELETE policy for profiles
CREATE POLICY "Users can delete their own profile"
ON public.profiles
FOR DELETE
USING (auth.uid() = id);

-- 2. DELETE policy for workout_settings
CREATE POLICY "Users can delete own workout_settings"
ON public.workout_settings
FOR DELETE
USING (auth.uid() = user_id);

-- 3. UPDATE policy for habit_completions
CREATE POLICY "Users can update own habit_completions"
ON public.habit_completions
FOR UPDATE
USING (auth.uid() = user_id);
