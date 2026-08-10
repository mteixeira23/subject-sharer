import { ExpenseCategory, IncomeCategory, TransactionCategory, EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '@/types/finance';

export interface ParsedTransaction {
  date: string; // YYYY-MM-DD
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: TransactionCategory;
  accountId?: string;
  isDuplicate?: boolean;
  billTemplateName?: string;
}

// ── Auto-categorization by keywords ──────────────────────────────────────

const CATEGORY_KEYWORDS: Record<ExpenseCategory, string[]> = {
  'Alimentação': ['mercado', 'supermercado', 'padaria', 'restaurante', 'ifood', 'burger', 'pizza', 'lanche', 'açougue', 'hortifruti', 'alimenta'],
  'Moradia': ['aluguel', 'condomínio', 'condominio', 'iptu', 'luz', 'energia', 'água', 'agua', 'gás', 'gas', 'internet', 'celesc', 'copel', 'cemig', 'enel'],
  'Transporte': ['uber', '99', 'combustível', 'combustivel', 'gasolina', 'etanol', 'estacionamento', 'pedagio', 'pedágio', 'posto', 'shell', 'ipiranga'],
  'Lazer': ['netflix', 'spotify', 'cinema', 'teatro', 'show', 'ingresso', 'steam', 'playstation', 'xbox', 'disney', 'amazon prime', 'hbo'],
  'Saúde': ['farmácia', 'farmacia', 'drogaria', 'hospital', 'clínica', 'clinica', 'médico', 'medico', 'dentista', 'plano de saúde', 'unimed', 'amil'],
  'Educação': ['escola', 'faculdade', 'curso', 'livro', 'livraria', 'udemy', 'alura', 'mensalidade'],
  'Outros': [],
};

export function categorizeByDescription(desc: string): ExpenseCategory {
  const lower = desc.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (cat === 'Outros') continue;
    if (keywords.some(kw => lower.includes(kw))) return cat as ExpenseCategory;
  }
  return 'Outros';
}

// ── OFX Parser ───────────────────────────────────────────────────────────

function parseOFXDate(raw: string): string {
  // YYYYMMDD or YYYYMMDDHHMMSS or YYYYMMDDHHMMSS[offset]
  const y = raw.substring(0, 4);
  const m = raw.substring(4, 6);
  const d = raw.substring(6, 8);
  return `${y}-${m}-${d}`;
}

export function parseOFX(content: string): ParsedTransaction[] {
  const transactions: ParsedTransaction[] = [];
  // Split by STMTTRN blocks
  const blocks = content.split(/<STMTTRN>/i).slice(1);

  for (const block of blocks) {
    const end = block.indexOf('</STMTTRN>');
    const section = end >= 0 ? block.substring(0, end) : block;

    const getTag = (tag: string): string => {
      // OFX can be SGML (no closing tags) or XML
      const xmlMatch = section.match(new RegExp(`<${tag}>([^<]+)</${tag}>`, 'i'));
      if (xmlMatch) return xmlMatch[1].trim();
      const sgmlMatch = section.match(new RegExp(`<${tag}>(.+)`, 'im'));
      if (sgmlMatch) return sgmlMatch[1].trim().split('\n')[0].trim();
      return '';
    };

    const dateRaw = getTag('DTPOSTED');
    const amountRaw = getTag('TRNAMT');
    const memo = getTag('MEMO') || getTag('NAME') || '';

    if (!dateRaw || !amountRaw) continue;

    const amount = parseFloat(amountRaw.replace(',', '.'));
    if (isNaN(amount)) continue;

    const date = parseOFXDate(dateRaw);
    const type = amount >= 0 ? 'income' : 'expense';
    const absAmount = Math.abs(amount);
    const description = memo;
    const category = categorizeByDescription(description);

    transactions.push({ date, description, amount: absAmount, type, category });
  }

  return transactions;
}

// ── CSV Parser ───────────────────────────────────────────────────────────

export function detectCSVSeparator(content: string): ',' | ';' {
  const firstLine = content.split('\n')[0] || '';
  return (firstLine.split(';').length > firstLine.split(',').length) ? ';' : ',';
}

export function parseCSVLines(content: string, separator: ',' | ';'): string[][] {
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(separator).map(cell => cell.trim().replace(/^"|"$/g, '')));
}

const DATE_LIKE = /data|date|dia/i;
const DESC_LIKE = /desc|memo|hist|nome|name|detalhe/i;
const AMOUNT_LIKE = /valor|amount|value|quantia|total/i;

export function autoDetectColumns(header: string[]): { dateCol: number; descCol: number; amountCol: number } {
  let dateCol = header.findIndex(h => DATE_LIKE.test(h));
  let descCol = header.findIndex(h => DESC_LIKE.test(h));
  let amountCol = header.findIndex(h => AMOUNT_LIKE.test(h));

  // Fallback: assume order date, desc, amount
  if (dateCol < 0) dateCol = 0;
  if (descCol < 0) descCol = Math.min(1, header.length - 1);
  if (amountCol < 0) amountCol = Math.min(2, header.length - 1);

  return { dateCol, descCol, amountCol };
}

function parseDate(raw: string): string | null {
  // Try DD/MM/YYYY or DD-MM-YYYY
  const brMatch = raw.match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/);
  if (brMatch) return `${brMatch[3]}-${brMatch[2]}-${brMatch[1]}`;
  // Try YYYY-MM-DD
  const isoMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) return raw;
  // Try MM/DD/YYYY
  const usMatch = raw.match(/^(\d{2})[\/\-](\d{2})[\/\-](\d{4})$/);
  if (usMatch) return `${usMatch[3]}-${usMatch[1]}-${usMatch[2]}`;
  return null;
}

function parseAmount(raw: string): number | null {
  // Handle Brazilian format: 1.234,56 → 1234.56
  let cleaned = raw.replace(/\s/g, '').replace(/[R$]/g, '');
  if (cleaned.includes(',') && cleaned.includes('.')) {
    // 1.234,56
    cleaned = cleaned.replace(/\./g, '').replace(',', '.');
  } else if (cleaned.includes(',')) {
    cleaned = cleaned.replace(',', '.');
  }
  const n = parseFloat(cleaned);
  return isNaN(n) ? null : n;
}

export function parseCSV(
  content: string,
  dateCol: number,
  descCol: number,
  amountCol: number,
): ParsedTransaction[] {
  const separator = detectCSVSeparator(content);
  const lines = parseCSVLines(content, separator);
  if (lines.length < 2) return [];

  const dataLines = lines.slice(1); // skip header
  const transactions: ParsedTransaction[] = [];

  for (const cells of dataLines) {
    const dateRaw = cells[dateCol];
    const descRaw = cells[descCol] || '';
    const amountRaw = cells[amountCol];

    if (!dateRaw || !amountRaw) continue;

    const date = parseDate(dateRaw);
    const amount = parseAmount(amountRaw);
    if (!date || amount === null) continue;

    const type = amount >= 0 ? 'income' : 'expense';
    const category = categorizeByDescription(descRaw);

    transactions.push({
      date,
      description: descRaw,
      amount: Math.abs(amount),
      type,
      category,
    });
  }

  return transactions;
}

// ── PDF AI response normalizer ───────────────────────────────────────────

interface AITransaction {
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export function normalizeAITransactions(aiTxs: AITransaction[]): ParsedTransaction[] {
  const mapped = aiTxs
    .filter(tx => tx.date && tx.description && typeof tx.amount === 'number')
    .map(tx => ({
      date: tx.date,
      description: tx.description,
      amount: Math.abs(tx.amount),
      type: (tx.type === 'income' ? 'income' : 'expense') as 'income' | 'expense',
      category: categorizeByDescription(tx.description),
    }));

  // Trust the AI's deduplication (prompt instructs to not duplicate pages)
  // Real duplicate detection happens later in markDuplicates() against existing DB records
  return mapped;
}

// ── Duplicate detection ──────────────────────────────────────────────────

interface ExistingTx {
  date: string;
  amount: number;
  description: string;
  accountId?: string;
}

export function markDuplicates(
  parsed: ParsedTransaction[],
  existing: ExistingTx[],
  targetAccountId?: string,
): ParsedTransaction[] {
  const relevantExisting = targetAccountId
    ? existing.filter(e => e.accountId === targetAccountId)
    : existing;

  return parsed.map(tx => {
    const isDuplicate = relevantExisting.some(
      e =>
        e.date === tx.date &&
        Math.abs(e.amount - tx.amount) < 0.01 &&
        e.description.toLowerCase() === tx.description.toLowerCase(),
    );
    return { ...tx, isDuplicate };
  });
}
