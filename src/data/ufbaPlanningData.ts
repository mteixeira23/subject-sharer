export interface PlanTask {
  id: string;
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: string;
  shift: string;
  subject?: string;
  lesson?: string;
  title: string;
  description: string;
  isVaccine?: boolean;
}

export interface DayPlan {
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: string;
  tasks: PlanTask[];
}

export function buildUfbaSprintPlan(): DayPlan[] {
  const days: DayPlan[] = [];

  // Data de Início: 22/10/2026 (Hoje)
  const startDate = new Date(2026, 9, 22);

  // Sequência de matérias prioritárias UFBA (Contabilidade Geral, CASP, AFO, Dir. Administrativo, Português)
  const UFBA_WEEKDAY_SEQUENCE: { subject: string; lesson: string; title: string; desc: string }[] = [
    // Semana 1: Fundação Específicas
    { subject: 'Contabilidade Geral', lesson: 'Aula 00', title: 'Contabilidade Geral - Aula 00', desc: 'Aspectos Introdutórios e Conceitos Básicos' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 00', title: 'CASP - Aula 00', desc: 'Aspectos Introdutórios e Conceito da CASP' },
    { subject: 'Direito Administrativo', lesson: 'Aula 00', title: 'Direito Administrativo - Aula 00', desc: 'Introdução e Regime Jurídico Administrativo' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 00', title: 'Português - Aula 00', desc: 'Ortografia, Acentuação e Morfologia Básica' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 01', title: 'Contabilidade Geral - Aula 01', desc: 'Patrimônio: Ativo, Passivo e PL' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 01', title: 'CASP - Aula 01', desc: 'Despesa Pública no Setor Público' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 00', title: 'AFO / Finanças - Aula 00', desc: 'Conceito e Funções do Orçamento Público' },
    { subject: 'Direito Administrativo', lesson: 'Aula 01', title: 'Direito Administrativo - Aula 01', desc: 'Organização da Administração Pública' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 02', title: 'Contabilidade Geral - Aula 02', desc: 'Atos e Fatos Contábeis e Lançamentos' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 02', title: 'CASP - Aula 02', desc: 'MCASP - Procedimentos Contábeis Patrimoniais II' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 01', title: 'AFO / Finanças - Aula 01', desc: 'Princípios Orçamentários' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 01', title: 'Português - Aula 01', desc: 'Compreensão e Interpretação de Texto' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 03', title: 'Contabilidade Geral - Aula 03', desc: 'Contas e Plano de Contas' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 03', title: 'CASP - Aula 03', desc: 'MCASP - Procedimentos Contábeis Patrimoniais III' },
    { subject: 'Direito Administrativo', lesson: 'Aula 02', title: 'Direito Administrativo - Aula 02', desc: 'Poderes e Deveres da Administração' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 02', title: 'Português - Aula 02', desc: 'Tipologia e Gêneros Textuais' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 04', title: 'Contabilidade Geral - Aula 04', desc: 'Balancete de Verificação' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 04', title: 'CASP - Aula 04', desc: 'Plano de Contas Aplicado ao Setor Público (PCASP)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 02', title: 'AFO / Finanças - Aula 02', desc: 'Créditos Adicionais' },
    { subject: 'Direito Administrativo', lesson: 'Aula 03', title: 'Direito Administrativo - Aula 03', desc: 'Atos Administrativos (Requisitos e Espécies)' },

    // Semana 2 e 3: Balanços e CPCs
    { subject: 'Contabilidade Geral', lesson: 'Aula 05', title: 'Contabilidade Geral - Aula 05', desc: 'Estrutura Conceitual Contábil (CPC 00 R2)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 05', title: 'CASP - Aula 05', desc: 'Balanço Orçamentário (Elaboração e Análise)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 03', title: 'AFO / Finanças - Aula 03', desc: 'Ciclo e Processo Orçamentário' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 03', title: 'Português - Aula 03', desc: 'Semântica e Significação das Palavras' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 06', title: 'Contabilidade Geral - Aula 06', desc: 'Operações com Mercadorias e Estoques (CPC 16)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 06', title: 'CASP - Aula 06', desc: 'Balanço Financeiro (Fluxos Orçamentários/Extra)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 04', title: 'Direito Administrativo - Aula 04', desc: 'Regime Jurídico Único (Lei 8.112/90 Parte 1)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 06', title: 'Português - Aula 06', desc: 'Classes de Palavras (Substantivos, Adjetivos, Artigos)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 07', title: 'Contabilidade Geral - Aula 07', desc: 'Tributos Sobre Compras e Vendas' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 07', title: 'CASP - Aula 07', desc: 'Balanço Patrimonial Público' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 04', title: 'AFO / Finanças - Aula 04', desc: 'PPA, LDO e LOA na CF/88' },
    { subject: 'Direito Administrativo', lesson: 'Aula 05', title: 'Direito Administrativo - Aula 05', desc: 'Regime Jurídico Único (Lei 8.112/90 Parte 2)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 08', title: 'Contabilidade Geral - Aula 08', desc: 'Ativo Imobilizado (CPC 27) e Depreciação' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 08', title: 'CASP - Aula 08', desc: 'Demonstração das Variações Patrimoniais (DVP)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 05', title: 'AFO / Finanças - Aula 05', desc: 'Receita Pública (Conceito e Estágios)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 07', title: 'Português - Aula 07', desc: 'Pronomes e Colocação Pronominal' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 09', title: 'Contabilidade Geral - Aula 09', desc: 'Ativo Intangível (CPC 04)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 09', title: 'CASP - Aula 09', desc: 'DFC, DMPL e Notas Explicativas no Setor Público' },
    { subject: 'Direito Administrativo', lesson: 'Aula 06', title: 'Direito Administrativo - Aula 06', desc: 'Nova Lei de Licitações (Lei 14.133/21 Parte 1)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 08', title: 'Português - Aula 08', desc: 'Verbos: Tempos, Modos e Vozes' },

    // Semanas 4 a 6: Aprofundamento e Demonstrações
    { subject: 'Contabilidade Geral', lesson: 'Aula 10', title: 'Contabilidade Geral - Aula 10', desc: 'Provisões, Passivos e Ativos Contingentes (CPC 25)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 10', title: 'CASP - Aula 10', desc: 'Suprimento de Fundos e Restos a Pagar' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 06', title: 'AFO / Finanças - Aula 06', desc: 'Despesa Pública: Conceito e Estrutura' },
    { subject: 'Direito Administrativo', lesson: 'Aula 07', title: 'Direito Administrativo - Aula 07', desc: 'Nova Lei de Licitações (Lei 14.133/21 Parte 2)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 11', title: 'Contabilidade Geral - Aula 11', desc: 'Demonstração do Resultado do Exercício (DRE)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 11', title: 'CASP - Aula 11', desc: 'SIAFI e Execução Contábil Federal' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 07', title: 'AFO / Finanças - Aula 07', desc: 'Classificação Orçamentária da Despesa' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 09', title: 'Português - Aula 09', desc: 'Sintaxe da Oração: Termos Essenciais e Integrantes' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 12', title: 'Contabilidade Geral - Aula 12', desc: 'Demonstração dos Fluxos de Caixa (DFC - CPC 03)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 12', title: 'CASP - Aula 12', desc: 'Consolidação das Contas Públicas e Siconfi' },
    { subject: 'Direito Administrativo', lesson: 'Aula 08', title: 'Direito Administrativo - Aula 08', desc: 'Contratos Administrativos (Lei 14.133/21)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 10', title: 'Português - Aula 10', desc: 'Sintaxe do Período Composto (Coordenação e Subordinação)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 13', title: 'Contabilidade Geral - Aula 13', desc: 'Demonstração das Mutações do Patrimônio Líquido (DMPL)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 08', title: 'AFO / Finanças - Aula 08', desc: 'Estágios da Receita e Despesa' },
    { subject: 'Direito Administrativo', lesson: 'Aula 09', title: 'Direito Administrativo - Aula 09', desc: 'Serviços Públicos e Concessões' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 11', title: 'Português - Aula 11', desc: 'Concordância Verbal e Nominal' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 14', title: 'Contabilidade Geral - Aula 14', desc: 'Demonstração do Valor Adicionado (DVA - CPC 09)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 09', title: 'AFO / Finanças - Aula 09', desc: 'Lei de Responsabilidade Fiscal (LRF Parte 1)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 10', title: 'Direito Administrativo - Aula 10', desc: 'Improbidade Administrativa (Lei 8.429/92 atualizada)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 12', title: 'Português - Aula 12', desc: 'Regência e Emprego do Sinal da Crase' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 15', title: 'Contabilidade Geral - Aula 15', desc: 'Análise de Balanços e Índices de Liquidez' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 10', title: 'AFO / Finanças - Aula 10', desc: 'Lei de Responsabilidade Fiscal (LRF Parte 2)' },
    { subject: 'Informática Básica', lesson: 'Aula 00', title: 'Informática - Aula 00', desc: 'Hardware, Software e Segurança' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 13', title: 'Português - Aula 13', desc: 'Pontuação: Vírgula, Ponto e Vírgula e Dois Pontos' },
  ];

  // Tarefas da Vacina CGU para os fins de semana
  const CGU_VACCINE_TASKS = [
    { subject: 'Auditoria', lesson: 'Aula 00', title: '💉 Vacina CGU: Auditoria - Aula 00 (NBC TA 200)', desc: 'Conceito, Objetivos e Conduta Ética na Auditoria Independente' },
    { subject: 'Direito Administrativo', lesson: 'Aula 10', title: '💉 Vacina CGU: Lei Anticorrupção (Lei 12.846/13)', desc: 'Leitura seca dos dispositivos essenciais de responsabilização de pessoas jurídicas' },
    { subject: 'Auditoria', lesson: 'Aula 01', title: '💉 Vacina CGU: Auditoria - Aula 01 (NBC TI 01)', desc: 'Auditoria Interna: Normas e Práticas de Controle no Setor Público' },
    { subject: 'Direito Administrativo', lesson: 'Aula 09', title: '💉 Vacina CGU: Lei de Acesso à Informação (Lei 12.527/11)', desc: 'Regras de transparência ativa, passiva e sigilo documental' },
    { subject: 'Auditoria', lesson: 'Aula 02', title: '💉 Vacina CGU: Auditoria - Aula 02 (NBC TA 300)', desc: 'Planejamento de Auditoria e Estratégia Global' },
    { subject: 'Auditoria', lesson: 'Aula 07', title: '💉 Vacina CGU: Auditoria - Aula 07 (Controle Interno e COSO)', desc: 'Avaliação de Riscos e Componentes do COSO I e II' },
    { subject: 'Auditoria', lesson: 'Simulado Cebraspe', title: '💉 Vacina CGU: Simulado Rápido de Controle & Auditoria', desc: 'Resolução de 30 questões comentadas Cebraspe' },
    { subject: 'Auditoria', lesson: 'Peça Técnica Cebraspe', title: '💉 Vacina CGU: Peça Técnica / Estudo de Caso Cebraspe', desc: 'Leitura de modelos de notas técnicas e estudos de caso de auditoria governamental' },
  ];

  let weekdayIdx = 0;
  let vaccineIdx = 0;

  for (let d = 1; d <= 60; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const dayOfWeek = currentDate.getDay(); // 0 = Domingo, 6 = Sábado
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const weekNum = Math.ceil(d / 7);

    const tasks: PlanTask[] = [];

    // Marcos Especiais
    if (d === 53) {
      // 13/12/2026: PROVA DA CGU
      tasks.push({
        id: `ufba-day-53-cgu`,
        dayNumber: 53,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🎯 DIA DE PROVA: CGU',
        shift: 'Dia Inteiro',
        title: '🌟 PROVA DA CGU EM SALVADOR (Auditor Federal)',
        description: 'Aplicação da prova Cebraspe. Foco na pontuação líquida: deixe em branco o que não domina!'
      });
      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🎯 DIA DE PROVA: CGU',
        tasks
      });
      continue;
    }

    if (d === 60) {
      // 20/12/2026: PROVA DA UFBA
      tasks.push({
        id: `ufba-day-60-ufba`,
        dayNumber: 60,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🏆 DIA DE PROVA: UFBA',
        shift: 'Dia Inteiro',
        title: '🏆 PROVA DA UFBA EM SALVADOR (Contador - Código 405)',
        description: '60 Questões (Específicas Peso 2) + Redação. Chute tudo o que tiver dúvida (não anula)! Sua vaga em Salvador.'
      });
      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🏆 DIA DE PROVA: UFBA',
        tasks
      });
      continue;
    }

    if (d >= 54 && d <= 59) {
      // Semana entre CGU e UFBA: RETA FINAL EXCLUSIVA UFBA
      tasks.push({
        id: `ufba-day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        shift: 'Turno 1',
        title: 'Estatuto e Regimento Geral da UFBA',
        description: 'Leitura seca das normas regimentais e funcionamento dos conselhos universitários da UFBA'
      });
      tasks.push({
        id: `ufba-day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        shift: 'Turno 2',
        title: 'Revisão Relâmpago: Balanços Públicos e PCASP',
        description: 'Memorização de contas de controle e demonstrações contábeis aplicadas ao setor público'
      });
      tasks.push({
        id: `ufba-day-${d}-t3`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        shift: 'Turno 3',
        title: 'Treino de Redação: Gestão Universitária e Ética',
        description: 'Elaboração de texto dissertativo de 25 linhas com introdução, desenvolvimento e proposta de intervenção'
      });

      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        tasks
      });
      continue;
    }

    // Finais de Semana: Vacina CGU + Redação UFBA
    if (isWeekend) {
      const vTask = CGU_VACCINE_TASKS[vaccineIdx % CGU_VACCINE_TASKS.length];
      vaccineIdx++;

      tasks.push({
        id: `ufba-day-${d}-vac`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        shift: 'Turno 1 (Manhã)',
        subject: vTask.subject,
        lesson: vTask.lesson,
        title: vTask.title,
        description: vTask.desc,
        isVaccine: true
      });

      tasks.push({
        id: `ufba-day-${d}-red`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        shift: 'Turno 2 (Tarde)',
        title: '✍️ Treino de Redação Semanal (Padrão UFBA 60 pts)',
        description: 'Produzir 1 texto dissertativo completo de 20 a 30 linhas sobre Eficiência Pública ou Ética'
      });

      tasks.push({
        id: `ufba-day-${d}-rev`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        shift: 'Turno 3 (Noite)',
        title: 'Revisão Ativa e Bateria de Questões da Semana',
        description: 'Revisar os erros dos cadernos de Contabilidade e AFO da semana'
      });

      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        tasks
      });
      continue;
    }

    // Dias de Semana Normais: 3 a 4 aulas do Núcleo de Ouro UFBA
    for (let t = 1; t <= 3; t++) {
      if (weekdayIdx < UFBA_WEEKDAY_SEQUENCE.length) {
        const item = UFBA_WEEKDAY_SEQUENCE[weekdayIdx++];
        tasks.push({
          id: `ufba-day-${d}-t${t}`,
          dayNumber: d,
          dateStr: dateFormatted,
          weekNumber: weekNum,
          phase: 'Fase 1: Núcleo de Ouro UFBA',
          shift: `Turno ${t}`,
          subject: item.subject,
          lesson: item.lesson,
          title: item.title,
          description: `${item.desc} (PDF da pasta Sefaz BA)`
        });
      }
    }

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 1: Núcleo de Ouro UFBA',
      tasks
    });
  }

  return days;
}
