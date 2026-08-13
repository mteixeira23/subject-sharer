export interface PlanTask {
  id: string;
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: 'Fase 1: Cobertura de Aulas' | 'Fase 2: Intensivo FGV' | 'Fase 3: Reta Final';
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
  phase: 'Fase 1: Cobertura de Aulas' | 'Fase 2: Intensivo FGV' | 'Fase 3: Reta Final';
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

  // Start date: 10/08/2026
  const startDate = new Date(2026, 7, 10); // Aug 10, 2026

  let seqIdx = 0;

  // ── FASE 1: Days 1 to 98 ──
  for (let d = 1; d <= 98; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const dayOfWeek = currentDate.getDay(); // 0 is Sun
    const weekNum = Math.ceil(d / 7);
    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const isSunday = dayOfWeek === 0;

    const tasks: PlanTask[] = [];

    if (!isSunday && seqIdx < LESSON_SEQUENCE.length) {
      const item1 = LESSON_SEQUENCE[seqIdx++];
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 1: Cobertura de Aulas',
        shift: 'Turno 1',
        subject: item1.subject,
        lesson: item1.lesson,
        title: `${item1.subject} - ${item1.lesson}`,
        description: 'Estudo Teórico + Resolução de 15 a 20 Questões FGV por assunto'
      });

      if (seqIdx < LESSON_SEQUENCE.length) {
        const item2 = LESSON_SEQUENCE[seqIdx++];
        tasks.push({
          id: `day-${d}-t2`,
          dayNumber: d,
          dateStr: dateFormatted,
          weekNumber: weekNum,
          phase: 'Fase 1: Cobertura de Aulas',
          shift: 'Turno 2',
          subject: item2.subject,
          lesson: item2.lesson,
          title: `${item2.subject} - ${item2.lesson}`,
          description: 'Estudo Teórico + Resolução de 15 a 20 Questões FGV por assunto'
        });
      }

      tasks.push({
        id: `day-${d}-t3`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 1: Cobertura de Aulas',
        shift: 'Turno 3',
        title: 'Revisão D-1 & Anotações',
        description: 'Revisão de 24h dos pontos estudados no dia anterior + Alimentação dos Flashcards'
      });
    } else {
      // Sunday in Phase 1
      if (seqIdx < LESSON_SEQUENCE.length) {
        const item1 = LESSON_SEQUENCE[seqIdx++];
        tasks.push({
          id: `day-${d}-t1`,
          dayNumber: d,
          dateStr: dateFormatted,
          weekNumber: weekNum,
          phase: 'Fase 1: Cobertura de Aulas',
          shift: 'Turno 1',
          subject: item1.subject,
          lesson: item1.lesson,
          title: `${item1.subject} - ${item1.lesson}`,
          description: 'Estudo Teórico + 15-20 Questões FGV'
        });
      }
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 1: Cobertura de Aulas',
        shift: 'Turno 2 & 3 (Revisão Semanal)',
        title: 'Revisão Geral Semanal & Caderno de Erros',
        description: 'Revisão completa dos pontos marcados na semana + Resolução do Caderno de Erros'
      });
    }

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 1: Cobertura de Aulas',
      tasks
    });
  }

  // ── FASE 2: Days 99 to 128 (Intensivo FGV) ──
  for (let d = 99; d <= 128; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const dayOfWeek = currentDate.getDay();
    const weekNum = Math.ceil(d / 7);
    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const isSunday = dayOfWeek === 0;
    const tasks: PlanTask[] = [];

    if (isSunday) {
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Intensivo FGV',
        shift: 'Manhã (4h)',
        title: '🏆 SIMULADO COMPLETO FGV (P1 + P2)',
        description: 'Resolução de 100 questões em tempo real de prova sem consultas externas'
      });
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Intensivo FGV',
        shift: 'Tarde/Noite',
        title: 'Correção de Gabarito & Análise do Caderno de Erros',
        description: 'Revisão detalhada de cada questão errada e reforço de artigos da legislação'
      });
    } else {
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Intensivo FGV',
        shift: 'Manhã (60min)',
        title: 'Releitura de Resumos e Esquemas de Alta Incidência',
        description: 'Revisão focada de Contabilidade, Direito Tributário, Auditoria e Legislação'
      });
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Intensivo FGV',
        shift: 'Tarde (120min)',
        title: 'Bateria de 50 Questões FGV por Assunto',
        description: 'Resolução massiva de baterias FGV por assunto com cronômetro ativado'
      });
      tasks.push({
        id: `day-${d}-t3`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Intensivo FGV',
        shift: 'Noite (60min)',
        title: 'Análise de Gabarito & Caderno de Erros',
        description: 'Registro de pegadinhas e conceitos que causaram erros nas baterias do dia'
      });
    }

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 2: Intensivo FGV',
      tasks
    });
  }

  // ── FASE 3: Days 129 to 144 (Reta Final) ──
  for (let d = 129; d <= 144; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const weekNum = Math.ceil(d / 7);
    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const tasks: PlanTask[] = [];

    if (d <= 133) {
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 1 & 2',
        title: 'Leitura Integral da Lei Seca (CTN, LRF, Lei 14.133, Lei 7.716 e BA)',
        description: 'Leitura atenta dos artigos mais cobrados na FGV e destaques da legislação'
      });
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 3',
        title: 'Revisão de Fórmulas e Cálculos Fiscais',
        description: 'Fórmulas de Estatística Descritiva e Matemática Financeira (SAC/Price/VPL/TIR)'
      });
    } else if (d <= 138) {
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 1 & 2',
        title: 'Revisão de Pronunciamentos CPCs e NBCs de Auditoria',
        description: 'Revisão de CPC 00, 01, 03, 16, 25, 27 e NBC TAs de Auditoria Independente'
      });
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 3',
        title: 'Bateria Rápida de 30 Questões de Revisão Geral',
        description: 'Simulado rápido de memorização curta para manter a agilidade mental'
      });
    } else if (d <= 143) {
      tasks.push({
        id: `day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 1 & 2',
        title: 'Decoreba de Prazos, Alíquotas e Exceções Constitucionais',
        description: 'Memorização de prazos de prescrição, decadência, alíquotas do ICMS e exceções'
      });
      tasks.push({
        id: `day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Turno 3',
        title: 'Leitura de Esquemas de Memorização Rápida',
        description: 'Revisão final de tabelas comparativas e mapas mentais do Caderno de Erros'
      });
    } else {
      // Day 144 (Véspera)
      tasks.push({
        id: `day-144-t1`,
        dayNumber: 144,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 3: Reta Final',
        shift: 'Dia Inteiro',
        title: '🏁 VÉSPERA DA PROVA SEFAZ-BA - Descanso e Preparação Mental',
        description: 'Leitura leve apenas de esquemas, separação de documentos, canetas e boa alimentação'
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
