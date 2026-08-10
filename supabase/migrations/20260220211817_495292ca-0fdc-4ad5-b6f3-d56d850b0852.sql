
-- Accounts
CREATE TABLE public.finance_accounts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'bank',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.finance_accounts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own finance_accounts" ON public.finance_accounts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own finance_accounts" ON public.finance_accounts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own finance_accounts" ON public.finance_accounts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own finance_accounts" ON public.finance_accounts FOR DELETE USING (auth.uid() = user_id);

-- Account Balances
CREATE TABLE public.finance_balances (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  account_id UUID NOT NULL REFERENCES public.finance_accounts(id) ON DELETE CASCADE,
  date TEXT NOT NULL,
  balance NUMERIC NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.finance_balances ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own finance_balances" ON public.finance_balances FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own finance_balances" ON public.finance_balances FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own finance_balances" ON public.finance_balances FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own finance_balances" ON public.finance_balances FOR DELETE USING (auth.uid() = user_id);

-- Transactions
CREATE TABLE public.finance_transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  type TEXT NOT NULL DEFAULT 'expense',
  category TEXT NOT NULL DEFAULT 'Outros',
  amount NUMERIC NOT NULL DEFAULT 0,
  description TEXT NOT NULL DEFAULT '',
  date TEXT NOT NULL,
  account_id UUID REFERENCES public.finance_accounts(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.finance_transactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own finance_transactions" ON public.finance_transactions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own finance_transactions" ON public.finance_transactions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own finance_transactions" ON public.finance_transactions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own finance_transactions" ON public.finance_transactions FOR DELETE USING (auth.uid() = user_id);

-- Bills
CREATE TABLE public.finance_bills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  type TEXT NOT NULL DEFAULT 'payable',
  description TEXT NOT NULL DEFAULT '',
  amount NUMERIC NOT NULL DEFAULT 0,
  due_date TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Outros',
  account_id UUID REFERENCES public.finance_accounts(id) ON DELETE SET NULL,
  paid BOOLEAN NOT NULL DEFAULT false,
  recurrence_mode TEXT DEFAULT 'once',
  recurrence_day INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.finance_bills ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own finance_bills" ON public.finance_bills FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own finance_bills" ON public.finance_bills FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own finance_bills" ON public.finance_bills FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own finance_bills" ON public.finance_bills FOR DELETE USING (auth.uid() = user_id);

-- Bill Templates
CREATE TABLE public.finance_bill_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Outros',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.finance_bill_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own finance_bill_templates" ON public.finance_bill_templates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own finance_bill_templates" ON public.finance_bill_templates FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own finance_bill_templates" ON public.finance_bill_templates FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own finance_bill_templates" ON public.finance_bill_templates FOR DELETE USING (auth.uid() = user_id);
