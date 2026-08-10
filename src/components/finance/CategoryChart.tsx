import { useFinance } from '@/contexts/FinanceContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CATEGORY_COLORS = [
  'hsl(217, 91%, 60%)',
  'hsl(142, 71%, 45%)',
  'hsl(38, 92%, 50%)',
  'hsl(0, 84%, 60%)',
  'hsl(262, 83%, 58%)',
  'hsl(187, 85%, 43%)',
  'hsl(330, 81%, 60%)',
];

const MONTHS_PT = [
  'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',
];

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

interface Props {
  year: number;
  month: number;
  accountId?: string;
}

export function CategoryChart({ year, month, accountId }: Props) {
  const { getCategoryBreakdown } = useFinance();
  const breakdown = getCategoryBreakdown(year, month, accountId);
  const chartHeight = Math.max(200, breakdown.length * 40 + 40);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        {breakdown.length > 0 ? (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={breakdown} layout="vertical" margin={{ left: 10, right: 20, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => formatBRL(v)} tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(value: number) => formatBRL(value)} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                {breakdown.map((_, i) => (
                  <Cell key={i} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-[140px] md:h-[200px] text-muted-foreground">
            <Wallet className="h-10 w-10 mb-2 opacity-30" />
            <p className="text-sm">Nenhum gasto em {MONTHS_PT[month - 1]}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}