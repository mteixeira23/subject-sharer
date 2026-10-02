export interface PlanTask {
  id: string;
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: 'Fase 1: Cobertura de Aulas' | 'Fase 2: Intensivo Cesgranrio' | 'Fase 3: Reta Final';
  shift: string;
  subject?: string;
  lesson?: string;
  title: string;
  description: string;
}

export interface DayPlan {
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: 'Fase 1: Cobertura de Aulas' | 'Fase 2: Intensivo Cesgranrio' | 'Fase 3: Reta Final';
  tasks: PlanTask[];
}

// 235 lessons order for Phase 1
const LESSON_SEQUENCE: { subject: string; lesson: string }[] = [
  // Day 1
  { subject: 'Contabilidade Geral', lesson: 'Aula 00' },
  { subject: 'Direito Tributário', lesson: 'Aula 00' },
  // Day 2
  { subject: 'Direito Administrativo', lesson: 'Aula 00' },
  { subject: 'Língua Portuguesa', lesson: 'Aula 00' },
  // Day 3
  { subject: 'Direito Constitucional', lesson: 'Aula 00' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 01' },
  // Day 4
  { subject: 'Auditoria', lesson: 'Aula 00' },
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 00' },
  // Day 5
  { subject: 'Direito Tributário', lesson: 'Aula 01' },
  { subject: 'Estatística', lesson: 'Aula 00' },
  // Day 6
  { subject: 'Economia', lesson: 'Aula 00' },
  { subject: 'Direito Administrativo', lesson: 'Aula 01' },
  // Day 7
  { subject: 'Matemática Financeira', lesson: 'Aula 00' },

  // Day 8
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 00' },
  { subject: 'Direito Constitucional', lesson: 'Aula 01' },
  // Day 9
  { subject: 'Informática Básica', lesson: 'Aula 00' },
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 00' },
  // Day 10
  { subject: 'Contabilidade Geral', lesson: 'Aula 02' },
  { subject: 'Direito Tributário', lesson: 'Aula 02' },
  // Day 11
  { subject: 'Direito Administrativo', lesson: 'Aula 02' },
  { subject: 'Língua Portuguesa', lesson: 'Aula 01' },
  // Day 12
  { subject: 'Direito Constitucional', lesson: 'Aula 02' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 03' },
  // Day 13
  { subject: 'Auditoria', lesson: 'Aula 01' },
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 01' },
  // Day 14
  { subject: 'Direito Tributário', lesson: 'Aula 03' },

  // Day 15
  { subject: 'Estatística', lesson: 'Aula 01' },
  { subject: 'Economia', lesson: 'Aula 01' },
  // Day 16
  { subject: 'Direito Administrativo', lesson: 'Aula 03' },
  { subject: 'Matemática Financeira', lesson: 'Aula 01' },
  // Day 17
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 01' },
  { subject: 'Direito Constitucional', lesson: 'Aula 03' },
  // Day 18
  { subject: 'Informática Básica', lesson: 'Aula 01' },
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 01' },
  // Day 19
  { subject: 'Contabilidade Geral', lesson: 'Aula 04' },
  { subject: 'Direito Tributário', lesson: 'Aula 04' },
  // Day 20
  { subject: 'Direito Administrativo', lesson: 'Aula 04' },
  { subject: 'Língua Portuguesa', lesson: 'Aula 02' },
  // Day 21
  { subject: 'Direito Constitucional', lesson: 'Aula 04' },

  // Day 22
  { subject: 'Contabilidade Geral', lesson: 'Aula 05' },
  { subject: 'Auditoria', lesson: 'Aula 02' },
  // Day 23
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 02' },
  { subject: 'Direito Tributário', lesson: 'Aula 05' },
  // Day 24
  { subject: 'Estatística', lesson: 'Aula 02' },
  { subject: 'Economia', lesson: 'Aula 02' },
  // Day 25
  { subject: 'Direito Administrativo', lesson: 'Aula 05' },
  { subject: 'Matemática Financeira', lesson: 'Aula 02' },
  // Day 26
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 02' },
  { subject: 'Direito Constitucional', lesson: 'Aula 05' },
  // Day 27
  { subject: 'Informática Básica', lesson: 'Aula 02' },
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 02' },
  // Day 28
  { subject: 'Contabilidade Geral', lesson: 'Aula 06' },

  // Day 29
  { subject: 'Direito Tributário', lesson: 'Aula 06' },
  { subject: 'Direito Administrativo', lesson: 'Aula 06' },
  // Day 30
  { subject: 'Língua Portuguesa', lesson: 'Aula 03' },
  { subject: 'Direito Constitucional', lesson: 'Aula 06' },
  // Day 31
  { subject: 'Contabilidade Geral', lesson: 'Aula 07' },
  { subject: 'Auditoria', lesson: 'Aula 03' },
  // Day 32
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 03' },
  { subject: 'Direito Tributário', lesson: 'Aula 07' },
  // Day 33
  { subject: 'Estatística', lesson: 'Aula 03' },
  { subject: 'Economia', lesson: 'Aula 03' },
  // Day 34
  { subject: 'Direito Administrativo', lesson: 'Aula 07' },
  { subject: 'Matemática Financeira', lesson: 'Aula 03' },
  // Day 35
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 03' },

  // Day 36
  { subject: 'Direito Constitucional', lesson: 'Aula 07' },
  { subject: 'Informática Básica', lesson: 'Aula 03' },
  // Day 37
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 03' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 08' },
  // Day 38
  { subject: 'Direito Tributário', lesson: 'Aula 08' },
  { subject: 'Direito Administrativo', lesson: 'Aula 08' },
  // Day 39
  { subject: 'Língua Portuguesa', lesson: 'Aula 04' },
  { subject: 'Direito Constitucional', lesson: 'Aula 08' },
  // Day 40
  { subject: 'Contabilidade Geral', lesson: 'Aula 09' },
  { subject: 'Auditoria', lesson: 'Aula 04' },
  // Day 41
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 04' },
  { subject: 'Direito Tributário', lesson: 'Aula 09' },
  // Day 42
  { subject: 'Estatística', lesson: 'Aula 04' },

  // Day 43
  { subject: 'Economia', lesson: 'Aula 04' },
  { subject: 'Direito Administrativo', lesson: 'Aula 09' },
  // Day 44
  { subject: 'Matemática Financeira', lesson: 'Aula 04' },
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 04' },
  // Day 45
  { subject: 'Direito Constitucional', lesson: 'Aula 09' },
  { subject: 'Informática Básica', lesson: 'Aula 04' },
  // Day 46
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 04' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 10' },
  // Day 47
  { subject: 'Direito Tributário', lesson: 'Aula 10' },
  { subject: 'Direito Administrativo', lesson: 'Aula 10' },
  // Day 48
  { subject: 'Língua Portuguesa', lesson: 'Aula 05' },
  { subject: 'Direito Constitucional', lesson: 'Aula 10' },
  // Day 49
  { subject: 'Contabilidade Geral', lesson: 'Aula 11' },

  // Day 50
  { subject: 'Auditoria', lesson: 'Aula 05' },
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 05' },
  // Day 51
  { subject: 'Direito Tributário', lesson: 'Aula 11' },
  { subject: 'Estatística', lesson: 'Aula 05' },
  // Day 52
  { subject: 'Economia', lesson: 'Aula 05' },
  { subject: 'Direito Administrativo', lesson: 'Aula 11' },
  // Day 53
  { subject: 'Matemática Financeira', lesson: 'Aula 05' },
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 05' },
  // Day 54
  { subject: 'Direito Constitucional', lesson: 'Aula 11' },
  { subject: 'Informática Básica', lesson: 'Aula 05' },
  // Day 55
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 05' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 12' },
  // Day 56
  { subject: 'Direito Tributário', lesson: 'Aula 12' },

  // Day 57
  { subject: 'Direito Administrativo', lesson: 'Aula 12' },
  { subject: 'Língua Portuguesa', lesson: 'Aula 06' },
  // Day 58
  { subject: 'Direito Constitucional', lesson: 'Aula 12' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 13' },
  // Day 59
  { subject: 'Auditoria', lesson: 'Aula 06' },
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 06' },
  // Day 60
  { subject: 'Direito Tributário', lesson: 'Aula 13' },
  { subject: 'Estatística', lesson: 'Aula 06' },
  // Day 61
  { subject: 'Economia', lesson: 'Aula 06' },
  { subject: 'Direito Administrativo', lesson: 'Aula 13' },
  // Day 62
  { subject: 'Matemática Financeira', lesson: 'Aula 06' },
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 06' },
  // Day 63
  { subject: 'Direito Constitucional', lesson: 'Aula 13' },

  // Day 64
  { subject: 'Informática Básica', lesson: 'Aula 06' },
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 06' },
  // Day 65
  { subject: 'Contabilidade Geral', lesson: 'Aula 14' },
  { subject: 'Direito Tributário', lesson: 'Aula 14' },
  // Day 66
  { subject: 'Direito Administrativo', lesson: 'Aula 14' },
  { subject: 'Língua Portuguesa', lesson: 'Aula 07' },
  // Day 67
  { subject: 'Direito Constitucional', lesson: 'Aula 14' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 15' },
  // Day 68
  { subject: 'Auditoria', lesson: 'Aula 07' },
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 07' },
  // Day 69
  { subject: 'Direito Tributário', lesson: 'Aula 15' },
  { subject: 'Estatística', lesson: 'Aula 07' },
  // Day 70
  { subject: 'Economia', lesson: 'Aula 07' },

  // Day 71
  { subject: 'Direito Administrativo', lesson: 'Aula 15' },
  { subject: 'Matemática Financeira', lesson: 'Aula 07' },
  // Day 72
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 07' },
  { subject: 'Direito Constitucional', lesson: 'Aula 15' },
  // Day 73
  { subject: 'Informática Básica', lesson: 'Aula 07' },
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 07' },
  // Day 74
  { subject: 'Contabilidade Geral', lesson: 'Aula 16' },
  { subject: 'Direito Tributário', lesson: 'Aula 16' },
  // Day 75
  { subject: 'Direito Administrativo', lesson: 'Aula 16' },
  { subject: 'Língua Portuguesa', lesson: 'Aula 08' },
  // Day 76
  { subject: 'Direito Constitucional', lesson: 'Aula 16' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 17' },
  // Day 77
  { subject: 'Auditoria', lesson: 'Aula 08' },

  // Day 78
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 08' },
  { subject: 'Direito Tributário', lesson: 'Aula 17' },
  // Day 79
  { subject: 'Estatística', lesson: 'Aula 08' },
  { subject: 'Economia', lesson: 'Aula 08' },
  // Day 80
  { subject: 'Direito Administrativo', lesson: 'Aula 17' },
  { subject: 'Matemática Financeira', lesson: 'Aula 08' },
  // Day 81
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 08' },
  { subject: 'Direito Constitucional', lesson: 'Aula 17' },
  // Day 82
  { subject: 'Informática Básica', lesson: 'Aula 08' },
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 08' },
  // Day 83
  { subject: 'Contabilidade Geral', lesson: 'Aula 18' },
  { subject: 'Direito Tributário', lesson: 'Aula 18' },
  // Day 84
  { subject: 'Direito Administrativo', lesson: 'Aula 18' },

  // Day 85
  { subject: 'Língua Portuguesa', lesson: 'Aula 09' },
  { subject: 'Direito Constitucional', lesson: 'Aula 18' },
  // Day 86
  { subject: 'Contabilidade Geral', lesson: 'Aula 19' },
  { subject: 'Auditoria', lesson: 'Aula 09' },
  // Day 87
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 09' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 20' },
  // Day 88
  { subject: 'Estatística', lesson: 'Aula 09' },
  { subject: 'Economia', lesson: 'Aula 09' },
  // Day 89
  { subject: 'Direito Administrativo', lesson: 'Aula 19' },
  { subject: 'Matemática Financeira', lesson: 'Aula 09' },
  // Day 90
  { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 09' },
  { subject: 'Direito Constitucional', lesson: 'Aula 19' },
  // Day 91
  { subject: 'Informática Básica', lesson: 'Aula 09' },

  // Day 92
  { subject: 'Noções de Igualdade Racial', lesson: 'Aula 09' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 21' },
  // Day 93
  { subject: 'Contabilidade Geral', lesson: 'Aula 22' },
  { subject: 'Direito Administrativo', lesson: 'Aula 20' },
  // Day 94
  { subject: 'Língua Portuguesa', lesson: 'Aula 10' },
  { subject: 'Direito Constitucional', lesson: 'Aula 20' },
  // Day 95
  { subject: 'Contabilidade Geral', lesson: 'Aula 23' },
  { subject: 'Auditoria', lesson: 'Aula 10' },
  // Day 96
  { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 10' },
  { subject: 'Contabilidade Geral', lesson: 'Aula 24' },
  // Day 97
  { subject: 'Estatística', lesson: 'Aula 10' },
  { subject: 'Economia', lesson: 'Aula 10' },
  // Day 98
  { subject: 'Direito Administrativo', lesson: 'Aula 21' }
];

export function buildSefazBAPlan(): DayPlan[] {
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
