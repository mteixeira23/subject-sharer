import re

with open('src/data/sefazBAPlanningData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace types
content = content.replace("'Fase 2: Intensivo FGV'", "'Fase 2: Intensivo Cesgranrio'")

# Let's extract the array LESSON_SEQUENCE
fn_start = content.find('export function buildSefazBAPlan(): DayPlan[] {')

new_fn = """export function buildSefazBAPlan(): DayPlan[] {
  const days: DayPlan[] = [];

  // Start date: 05/10/2026
  const startDate = new Date(2026, 9, 5); // Oct 5, 2026 (Month is 0-indexed)

  let seqIdx = 0;

  // 🎯 FASE 1: Cobertura Acelerada (Dias 1 a 60)
  for (let d = 1; d <= 60; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const weekNum = Math.ceil(d / 7);
    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const tasks: PlanTask[] = [];
    
    // We want to process 4 lessons a day to finish 235 in 60 days
    for(let i=1; i<=4; i++) {
        if (seqIdx < LESSON_SEQUENCE.length) {
            const item = LESSON_SEQUENCE[seqIdx++];
            tasks.push({
                id: `day-${d}-t${i}`,
                dayNumber: d,
                dateStr: dateFormatted,
                weekNumber: weekNum,
                phase: 'Fase 1: Cobertura de Aulas',
                shift: `Turno ${i}`,
                subject: item.subject,
                lesson: item.lesson,
                title: `${item.subject} - ${item.lesson}`,
                description: 'Estudo Híbrido: Resumos + Bateria Cesgranrio'
            });
        }
    }

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 1: Cobertura de Aulas',
      tasks
    });
  }

  // 🎯 FASE 2: Intensivo Cesgranrio (Dias 61 a 78) - 18 dias
  for (let d = 61; d <= 78; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const weekNum = Math.ceil(d / 7);
    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const tasks: PlanTask[] = [];

    tasks.push({
      id: `day-${d}-t1`,
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 2: Intensivo Cesgranrio',
      shift: 'Turno 1 & 2',
      title: 'Simulado Completo / Provas Anteriores Cesgranrio',
      description: 'Resolução de prova completa na íntegra com cronômetro'
    });
    tasks.push({
      id: `day-${d}-t2`,
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 2: Intensivo Cesgranrio',
      shift: 'Turno 3',
      title: 'Análise de Erros e Correção de Lacunas',
      description: 'Revisão profunda das questões erradas no simulado'
    });

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 2: Intensivo Cesgranrio',
      tasks
    });
  }

  // 🎯 FASE 3: Reta Final (Dias 79 a 88) - 10 dias
  for (let d = 79; d <= 88; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const weekNum = Math.ceil(d / 7);
    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const tasks: PlanTask[] = [];

    if (d === 88) {
      tasks.push({
        id: `day-88-t1`,
        dayNumber: 88,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Dia Inteiro',
        title: '🌟 VÉSPERA DA PROVA SEFAZ-BA - Descanso e Preparação Mental',
        description: 'Leitura leve de esquemas, separação de documentos, canetas e boa alimentação'
      });
    } else {
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 1 & 2',
        title: 'Decoreba Cesgranrio: Prazos, Alíquotas e Exceções',
        description: 'Memorização de prazos de prescrição, alíquotas do ICMS e literalidade da Lei'
      });
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 3',
        title: 'Leitura Focada na Lei Seca',
        description: 'Revisão final de tabelas comparativas e Lei Complementar 87/96 (Kandir)'
      });
    }

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 3: Reta Final',
      tasks
    });
  }

  return days;
}
"""

with open('src/data/sefazBAPlanningData.ts', 'w', encoding='utf-8') as f:
    f.write(content[:fn_start] + new_fn)
