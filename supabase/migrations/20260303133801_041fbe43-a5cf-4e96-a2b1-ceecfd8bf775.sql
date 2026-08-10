
CREATE TABLE public.premium_overrides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  granted_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.premium_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage premium_overrides"
  ON public.premium_overrides FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can view own override"
  ON public.premium_overrides FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
