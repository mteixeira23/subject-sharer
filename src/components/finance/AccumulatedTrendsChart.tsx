import { useMemo } from 'react';
import { useFinance } from '@/contexts/FinanceContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine,
} from 'recharts';

const MONTHS_SHORT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

interface Props {
  year: number;
  accountId?: string;
}

export function AccumulatedTrendsChart({ year, accountId }: Props) {
  const { getYearlyProjection } = useFinance();

  const projectionData = useMemo(
    () => getYearlyProjection(year, accountId),
    [getYearlyProjection, year, accountId],
  );

  const now = new Date();
  const currentMonthIndex = now.getFullYear() === year ? now.getMonth() : (year < now.getFullYear() ? 11 : -1);

  const chartData = projectionData.map((d, i) => {
    const isTransition = i === currentMonthIndex;
    return {
      name: MONTHS_SHORT[i],
      aPagarReal: !d.isProjection ? d.payableAccum : undefined,
      aReceberReal: !d.isProjection ? d.receivableAccum : undefined,
      saldoReal: !d.isProjection ? d.balanceAccum : undefined,
      aPagarProj: d.isProjection || isTransition ? d.payableAccum : undefined,
      aReceberProj: d.isProjection || isTransition ? d.receivableAccum : undefined,
      saldoProj: d.isProjection || isTransition ? d.balanceAccum : undefined,
    };
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-md text-sm">
        <p className="font-semibold mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.dataKey} style={{ color: p.color }}>
            {p.name}: {formatBRL(p.value ?? 0)}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Projeção Financeira — {year}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={360}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-xs fill-muted-foreground" />
              <YAxis
                tickFormatter={(v: number) => `R$${(v / 1000).toFixed(0)}k`}
                className="text-xs fill-muted-foreground"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              {currentMonthIndex >= 0 && (
                <ReferenceLine
                  x={MONTHS_SHORT[currentMonthIndex]}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="4 4"
                  label={{ value: 'Atual', position: 'top', className: 'fill-muted-foreground text-xs' }}
                />
              )}
              {/* Real lines (solid) */}
              <Line dataKey="aPagarReal" name="A Pagar" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} connectNulls={false} />
              <Line dataKey="aReceberReal" name="A Receber" stroke="hsl(210 100% 50%)" strokeWidth={2} dot={false} connectNulls={false} />
              <Line dataKey="saldoReal" name="Saldo" stroke="hsl(142 71% 45%)" strokeWidth={2} dot={false} connectNulls={false} />
              {/* Projection lines (dashed) */}
              <Line dataKey="aPagarProj" name="A Pagar (Proj.)" stroke="hsl(var(--destructive))" strokeWidth={2} strokeDasharray="6 3" dot={false} connectNulls legendType="none" />
              <Line dataKey="aReceberProj" name="A Receber (Proj.)" stroke="hsl(210 100% 50%)" strokeWidth={2} strokeDasharray="6 3" dot={false} connectNulls legendType="none" />
              <Line dataKey="saldoProj" name="Saldo (Proj.)" stroke="hsl(142 71% 45%)" strokeWidth={2} strokeDasharray="6 3" dot={false} connectNulls legendType="none" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Summary table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumo Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mês</TableHead>
                <TableHead className="text-right">A Receber</TableHead>
                <TableHead className="text-right">A Pagar</TableHead>
                <TableHead className="text-right">Saldo</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectionData.map((d, i) => (
                <TableRow key={i} className={d.isProjection ? 'opacity-60' : ''}>
                  <TableCell className="font-medium">{MONTHS_SHORT[i]}</TableCell>
                  <TableCell className="text-right text-blue-600 dark:text-blue-400">
                    {formatBRL(d.receivableAccum)}
                  </TableCell>
                  <TableCell className="text-right text-destructive">
                    {formatBRL(d.payableAccum)}
                  </TableCell>
                  <TableCell className={`text-right font-semibold ${d.balanceAccum >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-destructive'}`}>
                    {formatBRL(d.balanceAccum)}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {d.isProjection ? 'Projeção' : 'Real'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
