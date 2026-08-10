import { Contest, Subject, Lesson, SUBJECT_COLORS } from '@/types/study';

export const SEFAZ_BA_CONTEST: Contest = {
  id: 'sefaz-ba-2025',
  name: 'SEFAZ-BA 2025',
  createdAt: new Date().toISOString(),
  currentCycle: 1,
};

export const SEFAZ_BA_SUBJECTS: Omit<Subject, 'id'>[] = [
  { contestId: 'sefaz-ba-2025', name: 'Língua Portuguesa', totalLessons: 20, color: SUBJECT_COLORS[0] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Constitucional', totalLessons: 14, color: SUBJECT_COLORS[1] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Administrativo', totalLessons: 25, color: SUBJECT_COLORS[2] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Tributário', totalLessons: 25, color: SUBJECT_COLORS[3] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Geral', totalLessons: 31, color: SUBJECT_COLORS[4] },
  { contestId: 'sefaz-ba-2025', name: 'Estatística', totalLessons: 15, color: SUBJECT_COLORS[5] },
  { contestId: 'sefaz-ba-2025', name: 'Noções de Igualdade Racial', totalLessons: 10, color: SUBJECT_COLORS[6] },
  { contestId: 'sefaz-ba-2025', name: 'Administração, Economia e Finanças Públicas', totalLessons: 23, color: SUBJECT_COLORS[7] },
  { contestId: 'sefaz-ba-2025', name: 'Matemática Financeira', totalLessons: 16, color: SUBJECT_COLORS[8] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Aplicada ao Setor Público (CASP)', totalLessons: 19, color: SUBJECT_COLORS[9] },
  { contestId: 'sefaz-ba-2025', name: 'Informática Básica', totalLessons: 12, color: SUBJECT_COLORS[10] },
];

export const IGUALDADE_RACIAL_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Direitos Humanos na CF/88 & Teoria Geral dos Direitos Fundamentais',
  2: 'Aula 01 - Convenção de Eliminação da Discriminação Racial e CEDAW',
  3: 'Aula 02 - Estatuto da Igualdade Racial Nacional (Lei nº 12.288/2010)',
  4: 'Aula 03 - Estatuto da Igualdade Racial da Bahia (Lei nº 13.182/2014)',
  5: 'Aula 04 - Crimes de Preconceito de Raça ou Cor (Lei nº 7.716/1989 e Caó)',
  6: 'Aula 05 - Ações Afirmativas e Sistema de Cotas em Concursos e Universidades',
  7: 'Aula 06 - Legislação Específica da Bahia (Lei Estadual nº 10.549/06 e Sepromi)',
  8: 'Aula 07 - Proteção às Comunidades Tradicionais e Quilombolas',
  9: 'Aula 08 - Legislação Específica e Convenções Internacionais de Direitos Humanos',
  10: 'Aula 09 - Revisão Geral e Bateria de Questões Comentadas FGV',
};

export const CONTABILIDADE_GERAL_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Aspectos Introdutórios da Contabilidade (Prof. Gilmar Possati)',
  2: 'Aula 01 - Patrimônio: Ativo, Passivo e Patrimônio Líquido',
  3: 'Aula 02 - Atos e Fatos Contábeis e Lançamentos',
  4: 'Aula 03 - Contas e Plano de Contas',
  5: 'Aula 04 - Balancete de Verificação',
  6: 'Aula 05 - Estrutura Conceitual Contábil (CPC 00 R2)',
  7: 'Aula 06 - Operações com Mercadorias e Estoques (CPC 16)',
  8: 'Aula 07 - Tributos Sobre Compras e Vendas',
  9: 'Aula 08 - Duplicatas Descontadas e PCLD',
  10: 'Aula 09 - Ativo Imobilizado (CPC 27)',
  11: 'Aula 10 - Depreciação, Amortização e Exaustão',
  12: 'Aula 11 - Ativo Intangível (CPC 04)',
  13: 'Aula 12 - Redução ao Valor Recuperável - Impairment (CPC 01)',
  14: 'Aula 13 - Passivo Exigível, Provisões e Contingências (CPC 25)',
  15: 'Aula 14 - Patrimônio Líquido: Capital Social e Reservas',
  16: 'Aula 15 - Ações em Tesouraria e Distribuição de Lucros',
  17: 'Aula 16 - Apuração do Resultado do Exercício (ARE)',
  18: 'Aula 17 - Balanço Patrimonial (Estrutura Completa)',
  19: 'Aula 18 - Demonstração do Resultado do Exercício (DRE)',
  20: 'Aula 19 - Demonstração dos Fluxos de Caixa (DFC - CPC 03)',
  21: 'Aula 20 - Demonstração das Mutações do PL (DMPL) e DLPA',
  22: 'Aula 21 - Demonstração do Valor Adicionado (DVA - CPC 09)',
  23: 'Aula 22 - Avaliação de Investimentos em Coligadas/Controladas (MEP)',
  24: 'Aula 23 - Combinação de Negócios (CPC 15)',
  25: 'Aula 24 - Consolidação das Demonstrações Contábeis',
  26: 'Aula 25 - Análise de Balanços: Índices de Liquidez e Solvência',
  27: 'Aula 26 - Análise de Balanços: Endividamento e Rentabilidade',
  28: 'Aula 27 - Prazos Médios, Ciclo Operacional e Ciclo Financeiro',
  29: 'Aula 28 - Contabilidade Geral: Tópicos Especiais I (Prof. Cadu Carrilho)',
  30: 'Aula 29 - Contabilidade Geral: Tópicos Especiais II e Pronunciamentos',
  31: 'Aula 30 - Contabilidade Geral: Revisão Geral e Bateria FGV',
};

export const CASP_LESSON_NAMES: Record<number, string> = {
  1: 'Aspectos Introdutórios e Conceito da CASP',
  2: 'Despesa Pública no Setor Público',
  3: 'MCASP: Procedimentos Contábeis Patrimoniais II',
  4: 'MCASP: Procedimentos Contábeis Patrimoniais III',
  5: 'Plano de Contas Aplicado ao Setor Público (PCASP)',
  6: 'Balanço Orçamentário',
  7: 'Balanço Financeiro',
  8: 'Balanço Patrimonial Público',
  9: 'Demonstração das Variações Patrimoniais (DVP)',
  10: 'DFC, DMPL e Notas Explicativas no Setor Público',
  11: 'Título IX da Lei nº 4.320/64',
  12: 'NBC TSP R - Estrutura Conceitual',
  13: 'Tópicos Selecionados da LRF I',
  14: 'Tópicos Selecionados da LRF II',
  15: 'Princípios do Setor Público',
  16: 'Composição do Patrimônio Público',
  17: 'Estoques no Setor Público',
  18: 'Fundeb (Fundo de Manutenção da Educação)',
  19: 'Princípios Aplicados à Contabilidade Pública',
};

export const DIREITO_ADMINISTRATIVO_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Princípios do Direito Administrativo',
  2: 'Aula 01 - Conceito e Introdução ao Direito Administrativo',
  3: 'Aula 02 - Poderes Administrativos',
  4: 'Aula 03 - Atos Administrativos (Parte 1)',
  5: 'Aula 04 - Atos Administrativos (Parte 2)',
  6: 'Aula 05 - Organização Administrativa e Descentralização',
  7: 'Aula 06 - Lei das Estatais (Lei nº 13.303/2016)',
  8: 'Aula 07 - Entidades Paraestatais e Terceiro Setor',
  9: 'Aula 08 - Agentes Públicos e Estatuto dos Servidores',
  10: 'Aula 09 - Licitações Públicas (Lei nº 14.133/2021 - Parte 1)',
  11: 'Aula 10 - Licitações Públicas (Lei nº 14.133/2021 - Parte 2)',
  12: 'Aula 11 - Contratos Administrativos (Lei nº 14.133/2021)',
  13: 'Aula 12 - Serviços Públicos e Concessões',
  14: 'Aula 13 - Parcerias Público-Privadas (PPPs - Lei nº 11.079/2004)',
  15: 'Aula 14 - Responsabilidade Civil do Estado',
  16: 'Aula 15 - Controle da Administração Pública',
  17: 'Aula 16 - Improbidade Administrativa (Lei nº 8.429/1992)',
  18: 'Aula 17 - Bens Públicos',
  19: 'Aula 18 - Intervenção do Estado na Propriedade',
  20: 'Aula 19 - Convênios e Contratos de Repasse',
  21: 'Aula 20 - Resumo Geral de Direito Administrativo',
  22: 'Aula 21 - Processo Administrativo',
  23: 'Aula 22 - Constituição do Estado da Bahia (CE-BA)',
  24: 'Aula 23 - Lei Estadual da Bahia nº 14.634/2023 (Licitações)',
  25: 'Aula 24 - Lei Estadual da Bahia nº 9.290/2004',
};

export function generateInitialData(): {
  contests: Contest[];
  subjects: Subject[];
  lessons: Lesson[];
} {
  const subjects: Subject[] = SEFAZ_BA_SUBJECTS.map((subject, index) => ({
    ...subject,
    id: `subject-${index + 1}`,
  }));

  const lessons: Lesson[] = [];
  subjects.forEach((subject) => {
    for (let i = 1; i <= subject.totalLessons; i++) {
      let name = '';
      if (subject.name === 'Noções de Igualdade Racial' && IGUALDADE_RACIAL_LESSON_NAMES[i]) {
        name = IGUALDADE_RACIAL_LESSON_NAMES[i];
      } else if (subject.name === 'Contabilidade Geral' && CONTABILIDADE_GERAL_LESSON_NAMES[i]) {
        name = CONTABILIDADE_GERAL_LESSON_NAMES[i];
      } else if (subject.name.includes('CASP') && CASP_LESSON_NAMES[i]) {
        name = CASP_LESSON_NAMES[i];
      } else if (subject.name === 'Direito Administrativo' && DIREITO_ADMINISTRATIVO_LESSON_NAMES[i]) {
        name = DIREITO_ADMINISTRATIVO_LESSON_NAMES[i];
      }
      lessons.push({
        id: `${subject.id}-lesson-${i}`,
        subjectId: subject.id,
        number: i,
        name,
        theoryCompleted: false,
        reviewCompleted: false,
        questionsCount: 0,
        correctAnswers: 0,
        cycle: 1,
      });
    }
  });

  return {
    contests: [SEFAZ_BA_CONTEST],
    subjects,
    lessons,
  };
}
