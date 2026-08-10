import { useState } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Wallet,
  Settings,
  Landmark,
  Upload,
  ArrowRightLeft,
} from 'lucide-react';
import { FinanceOverview } from '@/components/finance/FinanceOverview';
import { TransactionList } from '@/components/finance/TransactionList';
import { CategoryChart } from '@/components/finance/CategoryChart';
import { BillsSection } from '@/components/finance/BillsSection';
import { NewTransactionDialog } from '@/components/finance/NewTransactionDialog';
import { NewBillDialog } from '@/components/finance/NewBillDialog';
import { ManageAccountsDialog } from '@/components/finance/ManageAccountsDialog';
import { ManageBillTemplatesDialog } from '@/components/finance/ManageBillTemplatesDialog';
import { RegisterBalanceDialog } from '@/components/finance/RegisterBalanceDialog';
import { AccumulatedTrendsChart } from '@/components/finance/AccumulatedTrendsChart';
import { ImportTransactionsDialog } from '@/components/finance/ImportTransactionsDialog';
import { BatchEditDialog } from '@/components/finance/BatchEditDialog';
import { ModuleGoals } from '@/components/ModuleGoals';
import { downloadCSV, printElement } from '@/lib/exportUtils';
import { Download, Printer } from 'lucide-react';

const MONTHS_PT = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
];

export default function Financas() {
  const { data, getMonthlyStats } = useFinance();

  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('consolidated');
  const [txDialogOpen, setTxDialogOpen] = useState(false);
  const [billDialogOpen, setBillDialogOpen] = useState(false);
  const [accountsDialogOpen, setAccountsDialogOpen] = useState(false);
  const [balanceDialogOpen, setBalanceDialogOpen] = useState(false);
  const [templatesDialogOpen, setTemplatesDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [batchEditDialogOpen, setBatchEditDialogOpen] = useState(false);
  const accountFilter = selectedAccountId === 'consolidated' ? undefined : selectedAccountId;

  function prevMonth() {
    if (month === 1) { setMonth(12); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  }
  function nextMonth() {
    if (month === 12) { setMonth(1); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  }

  function exportTransactionsCSV() {
    const stats = getMonthlyStats(year, month, accountFilter);
    const headers = ['Data', 'Tipo', 'Categoria', 'Descrição', 'Valor (R$)'];
    const rows = stats.transactions.map(t => [
      t.date,
      t.type === 'income' ? 'Receita' : 'Despesa',
      t.category,
      t.description,
      t.amount.toFixed(2),
    ]);
    downloadCSV(`financas-${MONTHS_PT[month - 1].toLowerCase()}-${year}.csv`, headers, rows);
  }

  function exportFinancePDF() {
    printElement('finance-report-printable', `Finanças — ${MONTHS_PT[month - 1]} ${year}`);
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b bg-background px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <SidebarTrigger className="hidden md:inline-flex" />
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
              <Wallet className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-lg md:text-xl font-bold">Finanças</h1>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          <ThemeToggle />
          <Button size="sm" onClick={() => setImportDialogOpen(true)} className="hidden sm:inline-flex">
            <Upload className="h-4 w-4 mr-1" />
            Importar Extrato
          </Button>
          <Button size="icon" onClick={() => setImportDialogOpen(true)} className="sm:hidden h-8 w-8">
            <Upload className="h-4 w-4" />
          </Button>
          <Button size="sm" onClick={exportTransactionsCSV} className="hidden sm:inline-flex">
            <Download className="h-4 w-4 mr-1" />
            CSV
          </Button>
          <Button size="sm" onClick={exportFinancePDF} className="hidden sm:inline-flex">
            <Printer className="h-4 w-4 mr-1" />
            PDF
          </Button>
          <Button size="icon" onClick={exportTransactionsCSV} className="sm:hidden h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
          <Button size="sm" onClick={() => setAccountsDialogOpen(true)} className="hidden sm:inline-flex">
            <Settings className="h-4 w-4 mr-1" />
            Contas
          </Button>
          <Button size="sm" onClick={() => setBalanceDialogOpen(true)} className="hidden sm:inline-flex">
            <Landmark className="h-4 w-4 mr-1" />
            Saldo
          </Button>
          <Button size="icon" onClick={() => setAccountsDialogOpen(true)} className="sm:hidden h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="icon" onClick={() => setBalanceDialogOpen(true)} className="sm:hidden h-8 w-8">
            <Landmark className="h-4 w-4" />
          </Button>
          <Button size="sm" onClick={() => setBatchEditDialogOpen(true)} className="hidden sm:inline-flex">
            <ArrowRightLeft className="h-4 w-4 mr-1" />
            Alterar Lote
          </Button>
          <Button size="icon" onClick={() => setBatchEditDialogOpen(true)} className="sm:hidden h-8 w-8">
            <ArrowRightLeft className="h-4 w-4" />
          </Button>
          <Button onClick={() => setTxDialogOpen(true)} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Transação</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Month selector + account filter */}
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-semibold text-lg text-center">
            {MONTHS_PT[month - 1]} {year}
          </span>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Select value={selectedAccountId} onValueChange={setSelectedAccountId}>
            <SelectTrigger className="w-full max-w-[200px]">
              <SelectValue placeholder="Conta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="consolidated">Consolidado</SelectItem>
              {data.accounts.map(acc => (
                <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <ModuleGoals categories={['finance_save']} />

        {/* Summary cards */}
        <FinanceOverview year={year} month={month} accountId={accountFilter} />

        {/* Tabs */}
        <Tabs defaultValue="transactions">
          <TabsList>
            <TabsTrigger value="transactions">Transações</TabsTrigger>
            <TabsTrigger value="bills">Contas a Pagar/Receber</TabsTrigger>
            <TabsTrigger value="projection">Projeção</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="mt-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <CategoryChart year={year} month={month} accountId={accountFilter} />
              </div>
              <div className="order-1 lg:order-2">
                <TransactionList
                  year={year}
                  month={month}
                  accountId={accountFilter}
                  onAdd={() => setTxDialogOpen(true)}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bills" className="mt-4">
            <BillsSection onAdd={() => setBillDialogOpen(true)} onManageTemplates={() => setTemplatesDialogOpen(true)} />
          </TabsContent>

          <TabsContent value="projection" className="mt-4">
            <AccumulatedTrendsChart year={year} accountId={accountFilter} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Hidden printable content */}
      <div id="finance-report-printable" className="hidden">
        {(() => {
          const stats = getMonthlyStats(year, month, accountFilter);
          return (
            <>
              <h2>Resumo — {MONTHS_PT[month - 1]} {year}</h2>
              <table>
                <tbody>
                  <tr><td><strong>Receitas</strong></td><td>R$ {stats.income.toFixed(2)}</td></tr>
                  <tr><td><strong>Despesas</strong></td><td>R$ {stats.expense.toFixed(2)}</td></tr>
                  <tr><td><strong>Saldo</strong></td><td>R$ {stats.balance.toFixed(2)}</td></tr>
                </tbody>
              </table>
              <h2>Transações</h2>
              <table>
                <thead>
                  <tr><th>Data</th><th>Tipo</th><th>Categoria</th><th>Descrição</th><th>Valor</th></tr>
                </thead>
                <tbody>
                  {stats.transactions.map(t => (
                    <tr key={t.id}>
                      <td>{t.date}</td>
                      <td>{t.type === 'income' ? 'Receita' : 'Despesa'}</td>
                      <td>{t.category}</td>
                      <td>{t.description}</td>
                      <td>R$ {t.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );
        })()}
      </div>

      {/* Dialogs */}
      <NewTransactionDialog open={txDialogOpen} onOpenChange={setTxDialogOpen} />
      <NewBillDialog open={billDialogOpen} onOpenChange={setBillDialogOpen} />
      <ManageAccountsDialog open={accountsDialogOpen} onOpenChange={setAccountsDialogOpen} />
      <ManageBillTemplatesDialog open={templatesDialogOpen} onOpenChange={setTemplatesDialogOpen} />
      <RegisterBalanceDialog open={balanceDialogOpen} onOpenChange={setBalanceDialogOpen} />
      <ImportTransactionsDialog open={importDialogOpen} onOpenChange={setImportDialogOpen} initialAccountId={selectedAccountId === 'consolidated' ? data.accounts[0]?.id : selectedAccountId} />
      <BatchEditDialog open={batchEditDialogOpen} onOpenChange={setBatchEditDialogOpen} />
    </div>
  );
}
