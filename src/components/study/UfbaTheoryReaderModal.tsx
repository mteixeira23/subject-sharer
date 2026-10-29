import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Printer, BookOpen, ShieldCheck, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import { UfbaSpecialistTopic } from '@/data/ufbaSpecialistTopics';
import { printAgendaHTML } from '@/lib/exportUtils';
import ReactMarkdown from 'react-markdown';

interface UfbaTheoryReaderModalProps {
  topic: UfbaSpecialistTopic | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenExercises?: () => void;
}

export function UfbaTheoryReaderModal({
  topic,
  open,
  onOpenChange,
  onOpenExercises,
}: UfbaTheoryReaderModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  if (!topic) return null;

  const handlePrintPdf = () => {
    const title = `${topic.code} - ${topic.title} | Caderno de Estudo UFBA 2026`;
    
    // Generate clean printable HTML
    let tableHtml = '';
    if (topic.comparativeTable) {
      tableHtml = `
        <h3 style="margin-top: 24px; color: #065f46; font-size: 16px;">Tabela Comparativa / Esquema Síntese</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
          <thead>
            <tr style="background: #f0fdf4;">
              ${topic.comparativeTable.headers.map(h => `<th style="border: 1px solid #cbd5e1; padding: 8px 10px; text-align: left; font-size: 12px;">${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${topic.comparativeTable.rows.map(row => `
              <tr>
                ${row.map(cell => `<td style="border: 1px solid #cbd5e1; padding: 8px 10px; font-size: 12px; vertical-align: top;">${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    const keyPointsHtml = topic.keyPoints.map((kp, idx) => `
      <div style="margin-bottom: 16px; padding: 12px; border-left: 4px solid #10b981; background: #f8fafc; border-radius: 4px;">
        <h4 style="margin: 0 0 6px; font-size: 14px; color: #0f172a;">${idx + 1}. ${kp.title}</h4>
        <p style="margin: 0 0 6px; font-size: 13px; line-height: 1.5; color: #334155;">${kp.explanation}</p>
        ${kp.mnemonicOrTrap ? `<div style="font-size: 12px; font-weight: 600; color: #b45309; margin-top: 4px;">${kp.mnemonicOrTrap}</div>` : ''}
      </div>
    `).join('');

    const fullHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <div style="background: #064e3b; color: #ffffff; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #a7f3d0; font-weight: bold;">
            Edital UFBA nº 007/2026 • Cargo 405: Contador • Instituto Avalia
          </div>
          <h1 style="margin: 6px 0 2px; font-size: 20px; color: #ffffff;">${topic.title}</h1>
          <div style="font-size: 12px; color: #d1fae5;">
            ${topic.category} | ${topic.weightLabel} | Elaborado por: <strong>${topic.specialistRole}</strong>
          </div>
        </div>

        <div style="padding: 12px 16px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; margin-bottom: 20px;">
          <strong style="color: #065f46; font-size: 13px;">Legislação e Normas Aplicáveis:</strong>
          <span style="font-size: 13px; color: #047857;"> ${topic.sourceLegislation}</span>
        </div>

        <h3 style="color: #065f46; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 20px; font-size: 16px;">
          1. Síntese Geral do Assunto
        </h3>
        <p style="font-size: 13px; line-height: 1.6; color: #334155; text-align: justify;">${topic.summary}</p>

        <h3 style="color: #065f46; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px; font-size: 16px;">
          2. Pontos-Chave e Pegadinhas da Banca (Instituto Avalia / Cebraspe)
        </h3>
        ${keyPointsHtml}

        ${tableHtml}

        <div style="margin-top: 30px; padding-top: 12px; border-top: 1px solid #cbd5e1; font-size: 11px; color: #64748b; text-align: center;">
          Caderno de Estudos Hermes Central • Habitus Singularicon • Preparatório Contador UFBA 2026
        </div>
      </div>
    `;

    printAgendaHTML(title, fullHtml);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 w-full h-[100dvh] max-w-none rounded-none sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:h-[92vh] sm:max-w-4xl sm:rounded-xl flex flex-col p-0 gap-0 bg-background text-foreground overflow-hidden border-border z-50">
        
        {/* Header */}
        <DialogHeader className="p-4 sm:p-6 pb-3 border-b border-border bg-card/90 shrink-0">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-600 text-white font-bold">{topic.code}</Badge>
              <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10">
                {topic.weightLabel}
              </Badge>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {topic.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrintPdf}
                className="h-8 text-xs font-semibold gap-1.5 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Imprimir / Gerar PDF</span>
              </Button>

              {onOpenExercises && (
                <Button
                  size="sm"
                  onClick={onOpenExercises}
                  className="h-8 text-xs font-semibold gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Fazer Questões Deste Tema</span>
                </Button>
              )}
            </div>
          </div>

          <DialogTitle className="text-lg sm:text-xl font-bold flex items-center gap-2 mt-2">
            <BookOpen className="h-5 w-5 text-emerald-400 shrink-0" />
            <span>{topic.title}</span>
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span>Módulo desenvolvido por: <strong>{topic.specialistRole}</strong></span>
          </DialogDescription>
        </DialogHeader>

        {/* Content Body */}
        <ScrollArea className="flex-1 p-4 sm:p-6">
          <div ref={contentRef} className="space-y-6 max-w-3xl mx-auto">
            {/* Legislation Alert */}
            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300">
              <span className="font-bold text-foreground">📜 Base Normativa do Edital: </span>
              {topic.sourceLegislation}
            </div>

            {/* Summary */}
            <Card className="border-border/70 bg-card/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base font-bold text-emerald-400">
                  Resumo Geral do Assunto
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {topic.summary}
              </CardContent>
            </Card>

            {/* Key Points */}
            <div className="space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Pontos Mais Cobrados e Pegadinhas da Banca
              </h3>
              <div className="grid gap-3">
                {topic.keyPoints.map((kp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-card border border-border/80 space-y-1.5"
                  >
                    <div className="font-semibold text-xs sm:text-sm text-foreground">
                      {idx + 1}. {kp.title}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {kp.explanation}
                    </p>
                    {kp.mnemonicOrTrap && (
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] font-medium text-amber-300">
                        {kp.mnemonicOrTrap}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparative Table */}
            {topic.comparativeTable && (
              <Card className="border-border/70 overflow-hidden">
                <CardHeader className="pb-2 bg-muted/30">
                  <CardTitle className="text-xs sm:text-sm font-bold text-foreground">
                    Quadro Comparativo Estratégico
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/40">
                          {topic.comparativeTable.headers.map((h, i) => (
                            <TableHead key={i} className="text-xs font-bold text-foreground">
                              {h}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {topic.comparativeTable.rows.map((r, ri) => (
                          <TableRow key={ri} className="text-xs">
                            {r.map((c, ci) => (
                              <TableCell key={ci} className={ci === 0 ? "font-semibold text-emerald-400" : "text-muted-foreground"}>
                                {c}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Full Theory Markdown */}
            <Card className="border-border/70 bg-card/40">
              <CardHeader className="pb-2 border-b border-border/40">
                <CardTitle className="text-xs sm:text-sm font-bold text-foreground">
                  Texto Completo de Fundamentação Teórica
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-xs sm:text-sm prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                <ReactMarkdown>{topic.fullTheoryMarkdown}</ReactMarkdown>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-2 pt-2 pb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onOpenChange(false)}
                className="text-xs"
              >
                Fechar
              </Button>
              <Button
                size="sm"
                onClick={handlePrintPdf}
                className="text-xs gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              >
                <Download className="h-3.5 w-3.5" />
                Baixar / Imprimir PDF
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
