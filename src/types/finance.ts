export type TransactionType = 'income' | 'expense';

export type AccountType = 'bank' | 'cash' | 'investment';

export type ExpenseCategory =
  | 'Alimentação'
  | 'Moradia'
  | 'Transporte'
  | 'Lazer'
  | 'Saúde'
  | 'Educação'
  | 'Outros';

export type IncomeCategory =
  | 'Salários'
  | 'Freelance'
  | 'Rendimentos'
  | 'Outros';

export type TransactionCategory = ExpenseCategory | IncomeCategory;

export interface Account {
  id: string;
  name: string;
  type: AccountType;
}

export interface AccountBalance {
  id: string;
  accountId: string;
  date: string; // YYYY-MM-DD
  balance: number;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  category: TransactionCategory;
  amount: number;
  description: string;
  date: string; // YYYY-MM-DD
  accountId?: string;
}

export interface Bill {
  id: string;
  type: 'payable' | 'receivable';
  description: string;
  amount: number;
  dueDate: string; // YYYY-MM-DD
  category: ExpenseCategory;
  accountId?: string;
  paid: boolean;
  recurrenceMode?: 'once' | 'monthly';
  recurrenceDay?: number;
}

export interface BillTemplate {
  id: string;
  name: string;
  category: TransactionCategory;
}

export interface FinanceData {
  transactions: Transaction[];
  accounts: Account[];
  balances: AccountBalance[];
  bills: Bill[];
  billTemplates: BillTemplate[];
}

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  'Alimentação',
  'Moradia',
  'Transporte',
  'Lazer',
  'Saúde',
  'Educação',
  'Outros',
];

export const INCOME_CATEGORIES: IncomeCategory[] = [
  'Salários',
  'Freelance',
  'Rendimentos',
  'Outros',
];

export const ACCOUNT_TYPES: { value: AccountType; label: string }[] = [
  { value: 'bank', label: 'Conta Bancária' },
  { value: 'cash', label: 'Caixa' },
  { value: 'investment', label: 'Investimento' },
];
