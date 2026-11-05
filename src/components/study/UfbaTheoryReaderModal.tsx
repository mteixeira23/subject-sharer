import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Printer, BookOpen, ShieldCheck, CheckCircle2, Sparkles, HelpCircle, FileText } from 'lucide-react';
import { UFBA_SPECIALIST_TOPICS, UfbaSpecialistTopic } from '@/data/ufbaSpecialistTopics';
import { UFBA_SPECIALIST_QUESTIONS } from '@/data/ufbaSpecialistQuestions';
import { buildUfbaSprintPlan } from '@/data/ufbaPlanningData';
import { buildSefazBAPlan } from '@/data/sefazBAPlanningData';
import {
  readLocalStudyPlanState,
  getLessonKey,
  getCanonicalSubject,
} from '@/lib/studyPlanCloudSync';
import { printAgendaHTML } from '@/lib/exportUtils';
import ReactMarkdown from 'react-markdown';

interface UfbaTheoryReaderModalProps {
  topic: UfbaSpecialistTopic | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenExercises?: () => void;
}

function formatMarkdownToHtml(md: string): string {
  return md
    .split('\n\n')
    .map(block => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('### ')) {
        return `<h3 style="color:#065f46;font-size:15px;margin:18px 0 6px;border-bottom:1px solid #d1fae5;padding-bottom:4px;">${trimmed.replace('### ', '')}</h3>`;
      }
      if (trimmed.startsWith('## ')) {
        return `<h2 style="color:#064e3b;font-size:16px;margin:20px 0 8px;">${trimmed.replace('## ', '')}</h2>`;
      }
      const lines = trimmed.split('\n');
      if (lines.every(l => l.trim().startsWith('- ') || l.trim().startsWith('* ') || /^\d+\.\s/.test(l.trim()))) {
        const items = lines
          .map(l => l.trim().replace(/^(-|\*|\d+\.)\s+/, ''))
          .map(item => `<li style="margin-bottom:5px;">${item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`)
          .join('');
        return `<ul style="margin:8px 0 12px 20px;font-size:12.5px;color:#1e293b;line-height:1.55;">${items}</ul>`;
      }
      const formatted = trimmed
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br/>');
      return `<p style="margin:8px 0;font-size:12.5px;color:#1e293b;line-height:1.6;text-align:justify;">${formatted}</p>`;
    })
    .join('');
}

function buildTopicSectionHtml(topic: UfbaSpecialistTopic, indexNum?: number): string {
  const questions = UFBA_SPECIALIST_QUESTIONS[topic.id] || [];

  let tableHtml = '';
  if (topic.comparativeTable) {
    tableHtml = `
      <h3 style="margin-top: 20px; color: #065f46; font-size: 15px;">Quadro Comparativo Estratégico</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 10px 0 18px;">
        <thead>
          <tr style="background: #ecfdf5;">
            ${topic.comparativeTable.headers.map(h => `<th style="border: 1px solid #cbd5e1; padding: 7px 9px; text-align: left; font-size: 11.5px; color: #064e3b;">${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${topic.comparativeTable.rows.map(row => `
            <tr>
              ${row.map((cell, ci) => `<td style="border: 1px solid #cbd5e1; padding: 7px 9px; font-size: 11.5px; vertical-align: top; ${ci === 0 ? 'font-weight:bold;color:#065f46;background:#f8fafc;' : ''}">${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  const keyPointsHtml = topic.keyPoints.map((kp, idx) => `
    <div style="margin-bottom: 12px; padding: 10px 12px; border-left: 4px solid #10b981; background: #f8fafc; border-radius: 4px; page-break-inside: avoid;">
      <h4 style="margin: 0 0 4px; font-size: 13px; color: #0f172a;">${idx + 1}. ${kp.title}</h4>
      <p style="margin: 0 0 5px; font-size: 12px; line-height: 1.5; color: #334155;">${kp.explanation}</p>
      ${kp.mnemonicOrTrap ? `<div style="font-size: 11.5px; font-weight: 600; color: #b45309; margin-top: 4px;">${kp.mnemonicOrTrap}</div>` : ''}
    </div>
  `).join('');

  const questionsHtml = questions.length > 0 ? `
    <h3 style="color: #065f46; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-top: 22px; font-size: 15px;">
      Questões de Concursos Pesquisadas e Comentadas (${questions.length} Questões)
    </h3>
    ${questions.map((q, qIdx) => {
      const optionsBlock = q.type === 'multiple' && q.options
        ? `<div style="margin: 6px 0 8px 10px; font-size: 12px; color: #1e293b;">
            ${q.options.map((opt, oi) => `<div style="margin-bottom: 3px;"><strong>${String.fromCharCode(65 + oi)})</strong> ${opt}</div>`).join('')}
           </div>`
        : `<div style="margin: 4px 0 6px 10px; font-size: 12px; color: #475569;"><em>Julgue o item em CERTO ou ERRADO.</em></div>`;

      return `
        <div style="margin-bottom: 14px; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; background: #ffffff; page-break-inside: avoid;">
          <div style="font-size: 11px; font-weight: bold; color: #047857; margin-bottom: 4px;">
            Questão ${qIdx + 1} • ${q.source} • [${q.topic}]
          </div>
          <div style="font-size: 12.5px; color: #0f172a; line-height: 1.5; margin-bottom: 6px; white-space: pre-line;">${q.statement}</div>
          ${optionsBlock}
          <div style="margin-top: 6px; padding: 7px 10px; background: #f0fdf4; border-left: 3px solid #16a34a; font-size: 11.5px; color: #14532d; line-height: 1.45;">
            <strong>Gabarito Comentado:</strong> ${q.explanation}
          </div>
        </div>
      `;
    }).join('')}
  ` : '';

  const blockLabel =
    topic.block === 'assistente'
      ? 'EXCLUSIVO ASSISTENTE EM ADMINISTRAÇÃO (CÓD. 301 - MANHÃ)'
      : topic.block === 'especificos'
      ? 'ESPECÍFICO CONTADOR (CÓD. 405 - TARDE)'
      : 'TRONCO COMUM (CONTADOR + ASSISTENTE EM ADMINISTRAÇÃO)';

  return `
    <div style="${indexNum && indexNum > 1 ? 'page-break-before: always;' : ''} margin-bottom: 32px;">
      <div style="background: ${topic.block === 'assistente' ? '#1e3a8a' : '#064e3b'}; color: #ffffff; padding: 14px 18px; border-radius: 8px; margin-bottom: 16px;">
        <div style="font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.8px; color: #a7f3d0; font-weight: bold;">
          ${indexNum ? `MÓDULO ${indexNum} • ` : ''}${blockLabel} • ${topic.code}
        </div>
        <h2 style="margin: 5px 0 3px; font-size: 18px; color: #ffffff;">${topic.title}</h2>
        <div style="font-size: 11.5px; color: #e2e8f0;">
          ${topic.category} | ${topic.weightLabel} | Aula no Habitus: <strong>${topic.habitusSubject} (${topic.habitusLesson})</strong>
        </div>
      </div>

      <div style="padding: 10px 14px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; margin-bottom: 16px;">
        <strong style="color: #065f46; font-size: 12px;">📜 Base Normativa e Bibliográfica:</strong>
        <span style="font-size: 12px; color: #047857;"> ${topic.sourceLegislation}</span>
      </div>

      <h3 style="color: #065f46; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-top: 16px; font-size: 15px;">
        1. Síntese Estratégica do Assunto
      </h3>
      <p style="font-size: 12.5px; line-height: 1.6; color: #334155; text-align: justify;">${topic.summary}</p>

      <h3 style="color: #065f46; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-top: 20px; font-size: 15px;">
        2. Pontos-Chave, Mnemônicos e Pegadinhas de Prova (Instituto Avalia / Cebraspe / FGV)
      </h3>
      ${keyPointsHtml}

      ${tableHtml}

      <h3 style="color: #065f46; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-top: 20px; font-size: 15px;">
        3. Fundamentação Teórica Completa
      </h3>
      ${formatMarkdownToHtml(topic.fullTheoryMarkdown)}

      ${questionsHtml}
    </div>
  `;
}

export function printCompleteUfbaApostilaPdf(mode: 'all' | 'assistente' = 'all') {
  const allTopics = Object.values(UFBA_SPECIALIST_TOPICS);
  const selectedTopics =
    mode === 'assistente'
      ? allTopics.filter(t => t.block === 'assistente' || t.block === 'comuns')
      : allTopics;

  const localState = readLocalStudyPlanState();
  const ufbaDays = buildUfbaSprintPlan();
  const sefazDays = buildSefazBAPlan();

  const studiedLessonKeys = new Set<string>();
  const studiedDetailsMap = new Map<
    string,
    { subject: string; lesson: string; title: string; b1: boolean; b2: boolean }
  >();

  const registerTaskIfDone = (subject?: string, lesson?: string, title?: string) => {
    const lKey = getLessonKey(subject, lesson);
    if (!lKey || !subject || !lesson) return;
    studiedLessonKeys.add(lKey);
    const b1 = Boolean(localState.questionsDoneKeys[`${lKey}|b1`] || localState.questionsDoneKeys[lKey]);
    const b2 = Boolean(localState.questionsDoneKeys[`${lKey}|b2`]);
    if (!studiedDetailsMap.has(lKey)) {
      studiedDetailsMap.set(lKey, {
        subject,
        lesson,
        title: title || `${subject} - ${lesson}`,
        b1,
        b2,
      });
    }
  };

  ufbaDays.forEach(d => {
    d.tasks.forEach(t => {
      if (localState.ufbaTaskIds[t.id]) {
        registerTaskIfDone(t.subject, t.lesson, t.title);
      }
    });
  });

  sefazDays.forEach(d => {
    d.tasks.forEach(t => {
      if (localState.sefazTaskIds[t.id]) {
        registerTaskIfDone(t.subject, t.lesson, t.title);
      }
    });
  });

  const studiedList = Array.from(studiedDetailsMap.values());

  const title =
    mode === 'assistente'
      ? 'Apostila Completa UFBA 2026 - Assistente em Administração + Tronco Comum + Progresso Atualizado'
      : 'Apostila Completa UFBA 2026 - Contador & Assistente em Administração (Atualizada com o Estudo de Hoje)';

  const studiedTableRows =
    studiedList.length > 0
      ? studiedList
          .map(
            (item, idx) => `
          <tr>
            <td style="padding: 4px 7px; border: 1px solid #cbd5e1; font-weight: bold;">${idx + 1}</td>
            <td style="padding: 4px 7px; border: 1px solid #cbd5e1; font-weight: 600;">${item.subject}</td>
            <td style="padding: 4px 7px; border: 1px solid #cbd5e1;">${item.lesson}</td>
            <td style="padding: 4px 7px; border: 1px solid #cbd5e1;">${item.title}</td>
            <td style="padding: 4px 7px; border: 1px solid #cbd5e1; color: #047857; font-weight: bold;">✅ Teoria OK</td>
            <td style="padding: 4px 7px; border: 1px solid #cbd5e1; font-weight: 600; color: ${item.b1 ? '#0369a1' : '#64748b'};">
              ${item.b1 ? (item.b2 ? '⚡ B1 + 🎯 B2' : '⚡ B1 Concluída') : '⏳ Pendente'}
            </td>
          </tr>
        `
          )
          .join('')
      : '';

  const todayStudySectionHtml = `
    <div style="border: 2px solid #0284c7; border-radius: 10px; padding: 16px 18px; margin-bottom: 24px; background: #f0f9ff; page-break-inside: avoid;">
      <div style="font-size: 11px; font-weight: bold; color: #0369a1; text-transform: uppercase; letter-spacing: 0.8px;">
        📌 ATUALIZAÇÃO DIÁRIA DO ALUNO NO HABITUS • SINCRONIZADO EM NUVEM
      </div>
      <h2 style="font-size: 17px; color: #0f172a; margin: 5px 0 6px;">
        Caderno de Atualização do Estudo de Hoje: Língua Portuguesa — Aula 00 (Compreensão e Interpretação de Textos) & Progresso Acumulado (${studiedList.length} Aulas Concluídas)
      </h2>
      <p style="font-size: 12px; color: #1e293b; margin: 0 0 10px; line-height: 1.5;">
        <strong>Assunto concluído hoje no Habitus:</strong> <em>Língua Portuguesa — Aula 00 (Compreensão e Interpretação de Textos de Gêneros Variados, Tipologia Textual, Implícitos, Pressupostos e Subentendidos)</em> — marcado como estudado no Plano UFBA (<code>Dia 05 - Turno 2</code> e <code>Dia 50 - Turno 3</code>) e no Plano SEFAZ (<code>Dia 01 - Turno 4</code>), somando-se às últimas aulas e baterias concluídas (<code>CASP - Aula 09 [19/21 • 90,5%]</code>, <code>Contabilidade Geral - Aula 09 [14/16 • 87,5%]</code>, <code>AFO - Aula 05: Receita Pública [19/21 • 90,5%]</code> e <code>CASP - Aula 19: Módulo Especialista UFBA</code>).
      </p>
      <div style="padding: 10px 12px; background: #ffffff; border-left: 4px solid #0284c7; border-radius: 4px; font-size: 11.5px; color: #1e293b; line-height: 1.5;">
        <strong>🎯 Síntese de Ouro do Estudo de Hoje (Língua Portuguesa — Aula 00 para o Instituto Avalia):</strong><br/>
        • <strong>Compreensão vs. Interpretação:</strong> <em>Compreender</em> (intratextual) é extrair o que está explícito na superfície do texto ("segundo o texto", "o autor afirma que"). <em>Interpretar</em> (extratextual controlada) é deduzir conclusões lógicas a partir das premissas ("infere-se", "depreende-se", "conclui-se"), sem extrapolar além do texto.<br/>
        • <strong>Pressuposto vs. Subentendido:</strong> O <em>Pressuposto</em> é marcado por um <strong>gatilho linguístico</strong> irrefutável (ex.: "Pedro <u>parou</u> de fumar" pressupõe que fumava antes; verbos de mudança de estado, advérbios como <em>ainda, já, até</em>, orações adjetivas restritivas vs. explicativas). O <em>Subentendido</em> é uma insinuação contextual pragmática sem marca formal explícita, de responsabilidade do ouvinte/leitor.<br/>
        • <strong>Tipologia vs. Gênero Textual:</strong> <em>Tipos textuais</em> (sequências estruturais limitadas: Narração, Descrição, Dissertação Argumentativa/Expositiva e Injunção) vs. <em>Gêneros textuais</em> (realizações sociocomunicativas concretas e infinitas: ofício, editorial, crônica, notícia, parecer, ata).
      </div>
      ${
        studiedTableRows
          ? `
        <h3 style="font-size: 13.5px; color: #0369a1; margin: 14px 0 6px;">
          Relatório Geral das Aulas Já Estudadas pelo Aluno no Habitus (${studiedList.length} Aulas Concluídas)
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; background: #ffffff;">
          <thead>
            <tr style="background: #0369a1; color: #ffffff;">
              <th style="padding: 5px 7px; text-align: left; border: 1px solid #cbd5e1;">#</th>
              <th style="padding: 5px 7px; text-align: left; border: 1px solid #cbd5e1;">Disciplina</th>
              <th style="padding: 5px 7px; text-align: left; border: 1px solid #cbd5e1;">Aula</th>
              <th style="padding: 5px 7px; text-align: left; border: 1px solid #cbd5e1;">Tópico no Plano</th>
              <th style="padding: 5px 7px; text-align: left; border: 1px solid #cbd5e1;">Status Teoria</th>
              <th style="padding: 5px 7px; text-align: left; border: 1px solid #cbd5e1;">Baterias (B1 / B2)</th>
            </tr>
          </thead>
          <tbody>
            ${studiedTableRows}
          </tbody>
        </table>
      `
          : ''
      }
    </div>
  `;

  const coverHtml = `
    <div style="border: 2px solid #064e3b; border-radius: 10px; padding: 20px; margin-bottom: 22px; background: #f8fafc;">
      <div style="font-size: 11px; font-weight: bold; color: #047857; text-transform: uppercase; letter-spacing: 1px;">
        UNIVERSIDADE FEDERAL DA BAHIA • EDITAL UFBA Nº 007/2026 • INSTITUTO AVALIA
      </div>
      <h1 style="font-size: 22px; color: #0f172a; margin: 8px 0 6px;">
        ${title}
      </h1>
      <p style="font-size: 12.5px; color: #334155; margin: 0 0 12px; line-height: 1.55;">
        Material teórico completo e esquematizado cobrindo <strong>100% dos tópicos que não constavam na pasta SEFAZ-BA</strong> (Tronco Comum, Específicos de Contador e Bloco Final Exclusivo de Assistente em Administração), acompanhado de <strong>questões reais de concursos comentadas</strong> e do <strong>controle atualizado do que você já estudou até hoje</strong>.
      </p>
      <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; margin-top: 10px;">
        <thead>
          <tr style="background: #064e3b; color: #ffffff;">
            <th style="padding: 6px 8px; text-align: left; border: 1px solid #cbd5e1;">#</th>
            <th style="padding: 6px 8px; text-align: left; border: 1px solid #cbd5e1;">Bloco no Plano</th>
            <th style="padding: 6px 8px; text-align: left; border: 1px solid #cbd5e1;">Tópico / Módulo</th>
            <th style="padding: 6px 8px; text-align: left; border: 1px solid #cbd5e1;">Vínculo no Habitus</th>
            <th style="padding: 6px 8px; text-align: left; border: 1px solid #cbd5e1;">Seu Status Atual</th>
          </tr>
        </thead>
        <tbody>
          ${selectedTopics.map((t, i) => {
            const lKey = getLessonKey(t.habitusSubject, t.habitusLesson);
            const isDone = lKey ? studiedLessonKeys.has(lKey) : false;
            return `
            <tr>
              <td style="padding: 5px 8px; border: 1px solid #cbd5e1; font-weight: bold;">${i + 1}</td>
              <td style="padding: 5px 8px; border: 1px solid #cbd5e1;">${t.block === 'assistente' ? '📋 Final (Só Assistente)' : t.block === 'comuns' ? '🏛️ Tronco Comum (Ambos)' : '🎯 Específico Contador'}</td>
              <td style="padding: 5px 8px; border: 1px solid #cbd5e1; font-weight: 600;">${t.title}</td>
              <td style="padding: 5px 8px; border: 1px solid #cbd5e1;">${t.habitusSubject} • ${t.habitusLesson}</td>
              <td style="padding: 5px 8px; border: 1px solid #cbd5e1; font-weight: bold; color: ${isDone ? '#047857' : '#b45309'};">${isDone ? '✅ Estudado' : '⏳ A Estudar'}</td>
            </tr>
          `;
          }).join('')}
        </tbody>
      </table>
    </div>
    ${todayStudySectionHtml}
  `;

  const bodyHtml = selectedTopics.map((t, idx) => buildTopicSectionHtml(t, idx + 1)).join('');

  const fullDocumentHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.55;">
      ${coverHtml}
      ${bodyHtml}
    </div>
  `;

  printAgendaHTML(title, fullDocumentHtml);
}

export function UfbaTheoryReaderModal({
  topic,
  open,
  onOpenChange,
  onOpenExercises,
}: UfbaTheoryReaderModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  if (!topic) return null;

  const topicQuestions = UFBA_SPECIALIST_QUESTIONS[topic.id] || [];

  const handlePrintPdf = () => {
    const title = `${topic.code} - ${topic.title} | Caderno de Estudo e Questões UFBA 2026`;
    const fullHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        ${buildTopicSectionHtml(topic)}
        <div style="margin-top: 30px; padding-top: 12px; border-top: 1px solid #cbd5e1; font-size: 11px; color: #64748b; text-align: center;">
          Caderno de Estudos & Questões Comentadas • Habitus Singularicon • Preparatório UFBA 2026 (Contador & Assistente em Administração)
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
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={topic.block === 'assistente' ? "bg-blue-600 text-white font-bold" : "bg-emerald-600 text-white font-bold"}>
                {topic.code}
              </Badge>
              <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10">
                {topic.weightLabel}
              </Badge>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                {topic.category}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Button
                size="sm"
                variant="outline"
                onClick={handlePrintPdf}
                className="h-8 text-xs font-semibold gap-1.5 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Imprimir Este Tema (PDF)</span>
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={() => printCompleteUfbaApostilaPdf('all')}
                className="h-8 text-xs font-semibold gap-1.5 border-purple-500/40 text-purple-300 hover:bg-purple-500/10"
                title="Gerar PDF único com todos os 13 módulos teóricos + questões comentadas"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Apostila Completa (13 Temas PDF)</span>
              </Button>

              {onOpenExercises && (
                <Button
                  size="sm"
                  onClick={onOpenExercises}
                  className="h-8 text-xs font-semibold gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Resolver Simulado (100 Q)</span>
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
            <span>Módulo desenvolvido por: <strong>{topic.specialistRole}</strong> • Vínculo: <strong>{topic.habitusSubject} ({topic.habitusLesson})</strong></span>
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

            {/* Researched Questions Preview inside the Reader */}
            {topicQuestions.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-cyan-400" />
                    Questões de Concursos Pesquisadas e Comentadas ({topicQuestions.length} Questões)
                  </h3>
                  {onOpenExercises && (
                    <Button
                      size="sm"
                      onClick={onOpenExercises}
                      className="h-7 text-xs font-semibold gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      Praticar no Simulado Interativo (B1 + B2 = 100 Q)
                    </Button>
                  )}
                </div>

                <div className="space-y-3">
                  {topicQuestions.map((q, qIdx) => (
                    <Card key={q.id} className="border-border/80 bg-card/70">
                      <CardContent className="p-3.5 space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-[10px] font-mono">
                            Questão {qIdx + 1}
                          </Badge>
                          <Badge className="bg-cyan-500/15 text-cyan-300 border-cyan-500/30 text-[10px]">
                            {q.source}
                          </Badge>
                          <span className="text-[11px] text-muted-foreground font-medium">
                            {q.topic}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-foreground font-medium whitespace-pre-line leading-relaxed">
                          {q.statement}
                        </p>

                        {q.type === 'multiple' && q.options && (
                          <div className="space-y-1 pl-2 pt-1 text-xs text-muted-foreground">
                            {q.options.map((opt, oi) => (
                              <div
                                key={oi}
                                className={oi === q.correctAnswer ? "text-emerald-400 font-semibold" : ""}
                              >
                                {String.fromCharCode(65 + oi)}) {opt}
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="p-2.5 rounded-lg bg-emerald-950/25 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
                          <strong className="text-emerald-400">Gabarito Comentado: </strong>
                          {q.explanation}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 pb-6 flex-wrap">
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
                variant="outline"
                onClick={() => printCompleteUfbaApostilaPdf('all')}
                className="text-xs gap-1.5 border-purple-500/40 text-purple-300 hover:bg-purple-500/10 font-semibold"
              >
                <FileText className="h-3.5 w-3.5" />
                Baixar Apostila Completa (Todos os 13 Temas)
              </Button>
              <Button
                size="sm"
                onClick={handlePrintPdf}
                className="text-xs gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              >
                <Download className="h-3.5 w-3.5" />
                Baixar / Imprimir PDF Deste Tema
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
