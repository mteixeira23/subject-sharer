import { useCallback, useMemo } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import {
  FinanceData,
  Transaction,
  Account,
  AccountBalance,
  Bill,
  BillTemplate,
  TransactionType,
  ExpenseCategory,
  TransactionCategory,
  AccountType,
} from '@/types/finance';

// ── Row mappers ──────────────────────────────────────────────────────────────

function rowToAccount(r: any): Account {
  return { id: r.id, name: r.name, type: r.type as AccountType };
}

function rowToBalance(r: any): AccountBalance {
  return { id: r.id, accountId: r.account_id, date: r.date, balance: Number(r.balance) };
}

function rowToTransaction(r: any): Transaction {
  return {
    id: r.id,
    type: r.type as TransactionType,
    category: r.category as ExpenseCategory,
    amount: Number(r.amount),
    description: r.description,
    date: r.date,
    accountId: r.account_id ?? undefined,
  };
}

function rowToBill(r: any): Bill {
  return {
    id: r.id,
    type: r.type as 'payable' | 'receivable',
    description: r.description,
    amount: Number(r.amount),
    dueDate: r.due_date,
    category: r.category as ExpenseCategory,
    accountId: r.account_id ?? undefined,
    paid: r.paid,
    recurrenceMode: r.recurrence_mode ?? 'once',
    recurrenceDay: r.recurrence_day ?? undefined,
  };
}

function rowToTemplate(r: any): BillTemplate {
  return { id: r.id, name: r.name, category: r.category as TransactionCategory };
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useFinanceData() {
  const { user } = useAuth();
  const uid = user?.id;
  const qc = useQueryClient();

  const invalidate = useCallback(
    (keys: string[]) => keys.forEach(k => qc.invalidateQueries({ queryKey: [k] })),
    [qc],
  );

  // ── Queries ─────────────────────────────────────────────────────────────

  const { data: accounts = [] } = useQuery({
    queryKey: ['finance_accounts', uid],
    queryFn: async () => {
      if (!uid) return [];
      const { data, error } = await supabase.from('finance_accounts').select('*').order('created_at');
      if (error) throw error;
      return (data ?? []).map(rowToAccount);
    },
    enabled: !!uid,
  });

  const { data: balances = [] } = useQuery({
    queryKey: ['finance_balances', uid],
    queryFn: async () => {
      if (!uid) return [];
      const { data, error } = await supabase.from('finance_balances').select('*').order('date');
      if (error) throw error;
      return (data ?? []).map(rowToBalance);
    },
    enabled: !!uid,
  });

  const { data: transactions = [] } = useQuery({
    queryKey: ['finance_transactions', uid],
    queryFn: async () => {
      if (!uid) return [];
      const { data, error } = await supabase.from('finance_transactions').select('*').order('date', { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToTransaction);
    },
    enabled: !!uid,
  });

  const { data: bills = [] } = useQuery({
    queryKey: ['finance_bills', uid],
    queryFn: async () => {
      if (!uid) return [];
      const { data, error } = await supabase.from('finance_bills').select('*').order('due_date');
      if (error) throw error;
      return (data ?? []).map(rowToBill);
    },
    enabled: !!uid,
  });

  const { data: billTemplates = [] } = useQuery({
    queryKey: ['finance_bill_templates', uid],
    queryFn: async () => {
      if (!uid) return [];
      const { data, error } = await supabase.from('finance_bill_templates').select('*').order('name');
      if (error) throw error;
      return (data ?? []).map(rowToTemplate);
    },
    enabled: !!uid,
  });

  const data: FinanceData = useMemo(
    () => ({ transactions, accounts, balances, bills, billTemplates }),
    [transactions, accounts, balances, bills, billTemplates],
  );

  // ── Mutations: Transactions ────────────────────────────────────────────

  const addTransaction = useCallback(
    async (tx: Omit<Transaction, 'id'>) => {
      if (!uid) return;
      const { error } = await supabase.from('finance_transactions').insert({
        user_id: uid,
        type: tx.type,
        category: tx.category,
        amount: tx.amount,
        description: tx.description,
        date: tx.date,
        account_id: tx.accountId ?? null,
      });
      if (error) throw error;
      invalidate(['finance_transactions']);
    },
    [uid, invalidate],
  );

  const updateTransaction = useCallback(
    async (id: string, changes: Partial<Pick<Transaction, 'date' | 'description' | 'amount' | 'category' | 'type' | 'accountId'>>) => {
      const row: Record<string, any> = {};
      if (changes.date !== undefined) row.date = changes.date;
      if (changes.description !== undefined) row.description = changes.description;
      if (changes.amount !== undefined) row.amount = changes.amount;
      if (changes.category !== undefined) row.category = changes.category;
      if (changes.type !== undefined) row.type = changes.type;
      if (changes.accountId !== undefined) row.account_id = changes.accountId ?? null;
      const { error } = await supabase.from('finance_transactions').update(row).eq('id', id);
      if (error) throw error;
      invalidate(['finance_transactions']);
    },
    [invalidate],
  );

  const deleteTransaction = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('finance_transactions').delete().eq('id', id);
      if (error) throw error;
      invalidate(['finance_transactions']);
    },
    [invalidate],
  );

  // ── Mutations: Accounts ────────────────────────────────────────────────

  const addAccount = useCallback(
    async (account: Omit<Account, 'id'>) => {
      if (!uid) return;
      const { error } = await supabase.from('finance_accounts').insert({
        user_id: uid,
        name: account.name,
        type: account.type,
      });
      if (error) throw error;
      invalidate(['finance_accounts']);
    },
    [uid, invalidate],
  );

  const deleteAccount = useCallback(
    async (id: string) => {
      // Set account_id to null on related transactions/bills first
      await supabase.from('finance_transactions').update({ account_id: null } as any).eq('account_id', id);
      await supabase.from('finance_bills').update({ account_id: null } as any).eq('account_id', id);
      const { error } = await supabase.from('finance_accounts').delete().eq('id', id);
      if (error) throw error;
      invalidate(['finance_accounts', 'finance_balances', 'finance_transactions', 'finance_bills']);
    },
    [invalidate],
  );

  // ── Mutations: Balances ────────────────────────────────────────────────

  const addBalance = useCallback(
    async (balance: Omit<AccountBalance, 'id'>) => {
      if (!uid) return;
      const { error } = await supabase.from('finance_balances').insert({
        user_id: uid,
        account_id: balance.accountId,
        date: balance.date,
        balance: balance.balance,
      });
      if (error) throw error;
      invalidate(['finance_balances']);
    },
    [uid, invalidate],
  );

  const deleteBalance = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('finance_balances').delete().eq('id', id);
      if (error) throw error;
      invalidate(['finance_balances']);
    },
    [invalidate],
  );

  // ── Mutations: Bills ──────────────────────────────────────────────────

  const addBill = useCallback(
    async (bill: Omit<Bill, 'id'>) => {
      if (!uid) return;
      const { error } = await supabase.from('finance_bills').insert({
        user_id: uid,
        type: bill.type,
        description: bill.description,
        amount: bill.amount,
        due_date: bill.dueDate,
        category: bill.category,
        account_id: bill.accountId ?? null,
        paid: bill.paid,
        recurrence_mode: bill.recurrenceMode ?? 'once',
        recurrence_day: bill.recurrenceDay ?? null,
      });
      if (error) throw error;
      invalidate(['finance_bills']);
    },
    [uid, invalidate],
  );

  const addBills = useCallback(
    async (newBills: Omit<Bill, 'id'>[]) => {
      if (!uid || newBills.length === 0) return;
      const rows = newBills.map(b => ({
        user_id: uid,
        type: b.type,
        description: b.description,
        amount: b.amount,
        due_date: b.dueDate,
        category: b.category,
        account_id: b.accountId ?? null,
        paid: b.paid,
        recurrence_mode: b.recurrenceMode ?? 'once',
        recurrence_day: b.recurrenceDay ?? null,
      }));
      const { error } = await supabase.from('finance_bills').insert(rows);
      if (error) throw error;
      invalidate(['finance_bills']);
    },
    [uid, invalidate],
  );

  const deleteBill = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('finance_bills').delete().eq('id', id);
      if (error) throw error;
      invalidate(['finance_bills']);
    },
    [invalidate],
  );

  const updateBill = useCallback(
    async (id: string, changes: Partial<Pick<Bill, 'dueDate' | 'description' | 'amount' | 'category' | 'type' | 'paid'>>) => {
      const row: Record<string, any> = {};
      if (changes.dueDate !== undefined) row.due_date = changes.dueDate;
      if (changes.description !== undefined) row.description = changes.description;
      if (changes.amount !== undefined) row.amount = changes.amount;
      if (changes.category !== undefined) row.category = changes.category;
      if (changes.type !== undefined) row.type = changes.type;
      if (changes.paid !== undefined) row.paid = changes.paid;
      const { error } = await supabase.from('finance_bills').update(row).eq('id', id);
      if (error) throw error;
      invalidate(['finance_bills']);
    },
    [invalidate],
  );

  const toggleBillPaid = useCallback(
    async (id: string) => {
      const bill = bills.find(b => b.id === id);
      if (!bill) return;
      const { error } = await supabase.from('finance_bills').update({ paid: !bill.paid }).eq('id', id);
      if (error) throw error;
      invalidate(['finance_bills']);
    },
    [bills, invalidate],
  );

  // ── Mutations: Bill Templates ─────────────────────────────────────────

  const addBillTemplate = useCallback(
    async (template: Omit<BillTemplate, 'id'>) => {
      if (!uid) return;
      const { error } = await supabase.from('finance_bill_templates').insert({
        user_id: uid,
        name: template.name,
        category: template.category,
      });
      if (error) throw error;
      invalidate(['finance_bill_templates']);
    },
    [uid, invalidate],
  );

  const deleteBillTemplate = useCallback(
    async (id: string) => {
      const { error } = await supabase.from('finance_bill_templates').delete().eq('id', id);
      if (error) throw error;
      invalidate(['finance_bill_templates']);
    },
    [invalidate],
  );

  // ── Derived stats (computed from cached query data) ────────────────────

  const getMonthlyStats = useCallback(
    (year: number, month: number, accountId?: string) => {
      const txs = transactions.filter(t => {
        const d = new Date(t.date);
        const dateMatch = d.getFullYear() === year && d.getMonth() + 1 === month;
        const accountMatch = !accountId || t.accountId === accountId;
        return dateMatch && accountMatch;
      });
      const income = txs.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
      const expense = txs.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
      return { income, expense, balance: income - expense, transactions: txs };
    },
    [transactions],
  );

  const getCategoryBreakdown = useCallback(
    (year: number, month: number, accountId?: string) => {
      const { transactions: txs } = getMonthlyStats(year, month, accountId);
      const expenses = txs.filter(t => t.type === 'expense');
      const map: Record<string, number> = {};
      expenses.forEach(t => {
        map[t.category] = (map[t.category] ?? 0) + t.amount;
      });
      return Object.entries(map).map(([name, value]) => ({ name, value }));
    },
    [getMonthlyStats],
  );

  const getAccountBalanceAtDate = useCallback(
    (accountId: string, upToDate: string) => {
      const relevantBalances = balances
        .filter(b => b.accountId === accountId && b.date <= upToDate)
        .sort((a, b) => b.date.localeCompare(a.date));

      const lastBalance = relevantBalances[0];
      if (!lastBalance) return null;

      const txsAfter = transactions.filter(t => {
        return t.accountId === accountId && t.date > lastBalance.date && t.date <= upToDate;
      });
      const income = txsAfter.filter(t => t.type === 'income').reduce((a, t) => a + t.amount, 0);
      const expense = txsAfter.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);

      return {
        baseBalance: lastBalance.balance,
        baseDate: lastBalance.date,
        currentBalance: lastBalance.balance + income - expense,
      };
    },
    [balances, transactions],
  );

  const getAccountBalance = useCallback(
    (accountId: string, year: number, month: number) => {
      const endOfMonth = `${year}-${String(month).padStart(2, '0')}-31`;
      return getAccountBalanceAtDate(accountId, endOfMonth);
    },
    [getAccountBalanceAtDate],
  );

  const getConsolidatedBalanceAtDate = useCallback(
    (upToDate: string) => {
      if (accounts.length === 0) return null;
      let total = 0;
      let hasAny = false;
      accounts.forEach(acc => {
        const bal = getAccountBalanceAtDate(acc.id, upToDate);
        if (bal) {
          total += bal.currentBalance;
          hasAny = true;
        }
      });
      return hasAny ? total : null;
    },
    [accounts, getAccountBalanceAtDate],
  );

  const getConsolidatedBalance = useCallback(
    (year: number, month: number) => {
      const endOfMonth = `${year}-${String(month).padStart(2, '0')}-31`;
      return getConsolidatedBalanceAtDate(endOfMonth);
    },
    [getConsolidatedBalanceAtDate],
  );

  const getConsolidatedMonthStartBalance = useCallback(
    (year: number, month: number) => {
      const startOfMonth = `${year}-${String(month).padStart(2, '0')}-01`;
      return getConsolidatedBalanceAtDate(startOfMonth);
    },
    [getConsolidatedBalanceAtDate],
  );

  const getConsolidatedMonthlyStats = useCallback(
    (year: number, month: number) => {
      // Get account IDs that have at least one balance registered
      const accountsWithBalance = new Set(balances.map(b => b.accountId));
      // Filter transactions for this month that belong to accounts with balances
      const txs = transactions.filter(t => {
        const d = new Date(t.date);
        return d.getFullYear() === year && d.getMonth() + 1 === month && t.accountId && accountsWithBalance.has(t.accountId);
      });
      const income = txs.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
      const expense = txs.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
      return { income, expense, balance: income - expense, transactions: txs };
    },
    [transactions, balances],
  );

  const getYearlyProjection = useCallback(
    (year: number, accountId?: string) => {
      const now = new Date();
      const currentMonth = now.getFullYear() === year ? now.getMonth() + 1 : (year < now.getFullYear() ? 12 : 0);

      let initialBalance = 0;
      if (accountId) {
        const bal = getAccountBalance(accountId, year - 1, 12)
                  ?? getAccountBalance(accountId, year, currentMonth);
        if (bal) initialBalance = bal.currentBalance;
      } else {
        const consolidated = getConsolidatedBalance(year - 1, 12)
                           ?? getConsolidatedBalance(year, currentMonth);
        if (consolidated !== null) initialBalance = consolidated;
      }

      let payableAccum = 0;
      let receivableAccum = 0;

      return Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const isProjection = month > currentMonth;

        if (!isProjection) {
          const txs = transactions.filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === year && d.getMonth() + 1 === month && (!accountId || t.accountId === accountId);
          });
          payableAccum += txs.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);
          receivableAccum += txs.filter(t => t.type === 'income').reduce((a, t) => a + t.amount, 0);
        } else {
          const monthBills = bills.filter(b => {
            const d = new Date(b.dueDate);
            return d.getFullYear() === year && d.getMonth() + 1 === month && (!accountId || b.accountId === accountId) && !b.paid;
          });
          payableAccum += monthBills.filter(b => b.type === 'payable').reduce((a, b) => a + b.amount, 0);
          receivableAccum += monthBills.filter(b => b.type === 'receivable').reduce((a, b) => a + b.amount, 0);
        }

        return { month, payableAccum, receivableAccum, balanceAccum: initialBalance + receivableAccum - payableAccum, isProjection };
      });
    },
    [transactions, bills, getAccountBalance, getConsolidatedBalance],
  );

  return {
    data,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    addAccount,
    deleteAccount,
    addBalance,
    deleteBalance,
    addBill,
    addBills,
    deleteBill,
    updateBill,
    toggleBillPaid,
    addBillTemplate,
    deleteBillTemplate,
    getMonthlyStats,
    getCategoryBreakdown,
    getAccountBalance,
    getConsolidatedBalance,
    getConsolidatedMonthStartBalance,
    getConsolidatedMonthlyStats,
    getYearlyProjection,
  };
}
