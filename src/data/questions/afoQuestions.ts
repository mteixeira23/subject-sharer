import { QuestionData } from '../aula00Questions';

export const AFO_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Conceito e Funções do Orçamento Público ────────────────────────
  0: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-BA',
      topic: 'Funções Clássicas do Estado de Musgrave',
      type: 'multiple',
      statement: 'Segundo a teoria das finanças públicas formulada por Richard Musgrave, a intervenção do Estado na economia justifica-se pelo cumprimento de três funções econômicas básicas. A função que visa ajustar a distribuição de renda e riqueza na sociedade, por meio de transferências e tributação progressiva, é a função:',
      options: [
        'Alocativa.',
        'Distributiva.',
        'Estabilizadora.',
        'Regulatória.',
        'Monetária.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. A função DISTRIBUTIVA tem por objetivo diminuir a desigualdade social, corrigindo falhas na repartição inicial de renda e riqueza, através de instrumentos como impostos progressivos e transferências de renda (ex: programas assistenciais).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Federal de Controle Externo / TCU',
      topic: 'Função Alocativa do Orçamento',
      type: 'tf',
      statement: 'A função alocativa do orçamento público manifesta-se quando o governo fornece bens públicos e semipúblicos que o mercado privado não fornece em quantidade socialmente eficiente.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. A função ALOCATIVA atua no fornecimento de bens públicos puros (como segurança nacional e iluminação pública) e correção de externalidades onde o livre mercado falha.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Função Estabilizadora',
      type: 'multiple',
      statement: 'O papel do Estado voltado à manutenção de altos níveis de emprego, estabilidade do nível geral de preços e equilíbrio na balança de pagamentos expressa a realização da função orçamentária:',
      options: [
        'Estabilizadora.',
        'Alocativa.',
        'Distributiva.',
        'Fiscalizatória.',
        'Sancionadora.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A função ESTABILIZADORA busca controlar a inflação, combater recessões e promover o pleno emprego da mão de obra.'
    },
    {
      id: 4,
      source: 'FGV – Auditor de Controle Externo / TCE-TO',
      topic: 'Evolução do Orçamento - Orçamento Tradicional vs Programa',
      type: 'multiple',
      statement: 'Na evolução histórica dos modelos orçamentários, o Orçamento-Programa distingue-se fundamentalmente do Orçamento Tradicional (Clássico) porque:',
      options: [
        'Prioriza o objeto do gasto (o que comprar) em detrimento dos fins e resultados.',
        'Vincula diretamente as dotações orçamentárias a programas de trabalho e objetivos concretos do governo.',
        'Elimina a prestação de contas dos gestores públicos ao Poder Legislativo.',
        'Proíbe a fixação de metas físicas e qualitativas nos planos governamentais.',
        'Restringe a atuação do orçamento a um simples documento de autorização de gastos contábeis.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O Orçamento-Programa vincula o planejamento à execução orçamentária, focando nos resultados (o que realizar, metas e produtos) e não na mera compra de insumos.'
    },
    {
      id: 5,
      source: 'CEBRASPE – Analista de Finanças e Controle / CGU',
      topic: 'Natureza Jurídica do Orçamento no Brasil',
      type: 'tf',
      statement: 'No ordenamento constitucional brasileiro, a lei orçamentária anual possui, como regra geral, natureza jurídica de lei em sentido puramente formal, de caráter eminentemente autorizativo, não gerando direito subjetivo à realização das dotações nela previstas.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Conforme jurisprudência do STF, a lei orçamentária anual é lei formal de conteúdo autorizativo (embora as emendas impositivas e a EC 100/105 tenham trazido aspectos de impositividade parcial).'
    }
  ],

  // ── Aula 01: Princípios Orçamentários ───────────────────────────────────────
  1: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA',
      topic: 'Princípio da Exclusividade',
      type: 'multiple',
      statement: 'O Artigo 165, § 8º da Constituição Federal de 1988 estabelece que a lei orçamentária anual não conterá dispositivo estranho à previsão da receita e à fixação da despesa. Esse mandamento constitucional traduz o princípio orçamentário da:',
      options: [
        'Exclusividade.',
        'Universalidade.',
        'Unidade.',
        'Anualidade.',
        'Não Afetação.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Princípio da Exclusividade: a LOA não pode conter matéria estranha (as chamadas "caudas orçamentárias"). Admitem-se apenas duas exceções expressas: autorização para abertura de créditos suplementares e contratação de operações de crédito.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor / TCU',
      topic: 'Princípio da Universalidade',
      type: 'tf',
      statement: 'Conforme o princípio da universalidade, a lei orçamentária anual deve conter todas as receitas e todas as despesas de todos os poderes, órgãos, entidades, fundos e fundações instituídas e mantidas pelo poder público.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 2º da Lei 4.320/64 e Art. 165, § 5º da CF/88: nenhuma receita ou despesa pode ser executada fora do orçamento anual.'
    }
  ]
};
