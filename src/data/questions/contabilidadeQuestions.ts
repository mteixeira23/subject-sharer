import { QuestionData } from '../aula00Questions';

export const CONTABILIDADE_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 01: Patrimônio - Ativo, Passivo e Patrimônio Líquido ───────────────
  1: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Conceito de Patrimônio e Equação Patrimonial',
      type: 'multiple',
      statement: 'Em relação aos conceitos fundamentais de patrimônio na Contabilidade Geral, assinale a afirmativa correta:',
      options: [
        'O Patrimônio Líquido representa uma obrigação exigível da entidade para com os sócios ou acionistas no curto prazo.',
        'Os Ativos representam as aplicações de recursos que geram benefícios econômicos futuros, e o Passivo Exigível representa as origens de recursos de terceiros.',
        'A situação líquida patrimonial é dita deficitária quando o total do Ativo é estritamente superior ao total do Passivo Exigível.',
        'Os Direitos correspondem a obrigações contraídas pela entidade perante fornecedores de matéria-prima.',
        'O Patrimônio Líquido não pode, sob nenhuma hipótese legal ou contábil, assumir valor negativo (passivo a descoberto).'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Os Ativos representam as aplicações de recursos econômicos da entidade (bens e direitos sob controle que gerarão benefícios econômicos futuros). O Passivo Exigível representa as obrigações presentes perante terceiros (origens de recursos de terceiros).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL (2020)',
      topic: 'Situações Líquidas Patrimoniais',
      type: 'tf',
      statement: 'Diz-se que a entidade apresenta "Passivo a Descoberto" quando a soma do Ativo e do Patrimônio Líquido supera o total das obrigações com terceiros.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. O "Passivo a Descoberto" (situação líquida negativa ou deficitária) ocorre quando o total das obrigações exigíveis (Passivo) é MAIOR do que o total dos bens e direitos (Ativo), resultando em Patrimônio Líquido negativo (Ativo < Passivo).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)',
      topic: 'Equação Fundamental do Patrimônio',
      type: 'multiple',
      statement: 'Uma sociedade empresária possuía um Ativo total de R$ 500.000,00 e um Passivo Exigível de R$ 320.000,00. Após apurar as contas de encerramento, seu Patrimônio Líquido é de:',
      options: [
        'R$ 820.000,00',
        'R$ 500.000,00',
        'R$ 180.000,00',
        'R$ 320.000,00',
        'R$ -180.000,00'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. Pela equação fundamental do patrimônio: Ativo = Passivo Exigível + Patrimônio Líquido. Logo: PL = Ativo - Passivo = 500.000 - 320.000 = R$ 180.000,00 (situação líquida positiva/superavitária).'
    },
    {
      id: 4,
      source: 'FGV – Contador / DPE-RJ (2023)',
      topic: 'Ativo - Definição Conceitual',
      type: 'multiple',
      statement: 'Segundo a teoria contábil e a definição societária, para que um item seja reconhecido no Ativo, é essencial que:',
      options: [
        'A entidade detenha a propriedade jurídica formal e irrevogável do bem registrado.',
        'Seja um recurso econômico presente controlado pela entidade como resultado de eventos passados e com potencial de produzir benefícios econômicos.',
        'Tenha sido adquirido exclusivamente por meio de pagamento à vista em moeda corrente.',
        'Possua obrigatoriamente substância física palpável (bem tangível corpóreo).',
        'Seja mensurável apenas pelo critério do valor residual de liquidação imediata.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Conforme a Estrutura Conceitual, Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados, com potencial de produzir benefícios econômicos futuros. O controle e o benefício prevalecem sobre a posse física ou propriedade estritamente jurídica.'
    },
    {
      id: 5,
      source: 'CEBRASPE – Analista Contábil / MPU (2018)',
      topic: 'Aspectos Qualitativo e Quantitativo do Patrimônio',
      type: 'tf',
      statement: 'O aspecto qualitativo do patrimônio consiste na discriminação detalhada da natureza e espécie de cada bem, direito e obrigação, enquanto o aspecto quantitativo atribui-lhes os respectivos valores monetários.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Aspecto qualitativo = qualificar a espécie de cada elemento (ex: Caixa, Veículos, Fornecedores). Aspecto quantitativo = quantificar e mensurar em moeda nacional (ex: R$ 50.000,00).'
    }
  ],

  // ── Aula 02: Atos e Fatos Contábeis e Lançamentos ────────────────────────────
  2: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2022)',
      topic: 'Classificação dos Fatos Contábeis',
      type: 'multiple',
      statement: 'O pagamento de uma duplicata com desconto financeiro obtido constitui exemplo de fato contábil:',
      options: [
        'Permutativo entre elementos do ativo e do passivo.',
        'Modificativo aumentativo puro.',
        'Misto (ou composto) aumentativo.',
        'Misto (ou composto) diminutivo.',
        'Modificativo diminutivo puro.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. O pagamento de duplicata com desconto envolve: 1) Redução de obrigação (Passivo - Débito); 2) Saída de dinheiro (Ativo - Crédito, em valor menor); 3) Reconhecimento de receita financeira (Desconto Obtido - Crédito, aumentando o PL). Trata-se de FATO MISTO AUMENTATIVO.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Contador / Polícia Federal (2018)',
      topic: 'Atos Administrativos vs Fatos Contábeis',
      type: 'tf',
      statement: 'A assinatura de um contrato de seguro contra incêndio com vigência para o ano subsequente, sem qualquer desembolso financeiro imediato, constitui fato contábil modificativo que exige lançamento imediato de despesa.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. A simples assinatura de contrato sem pagamento ou entrega de bem constitui mero ATO ADMINISTRATIVO (não altera o patrimônio de imediato), não gerando fato modificativo no ato da assinatura.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC (2018)',
      topic: 'Fórmulas de Lançamento',
      type: 'multiple',
      statement: 'A aquisição de mercadorias para revenda por R$ 100.000,00, sendo 40% pagos à vista em dinheiro e o saldo restante financiado a prazo mediante aceite de duplicatas, classifica-se tecnicamente como um lançamento de:',
      options: [
        'Primeira fórmula (1 débito e 1 crédito).',
        'Segunda fórmula (1 débito e 2 créditos).',
        'Terceira fórmula (2 débitos e 1 crédito).',
        'Quarta fórmula (2 débitos e 2 créditos).',
        'Fórmula simples de estorno direto.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Lançamento: D - Estoques (R$ 100.000,00) / C - Caixa (R$ 40.000,00) e C - Fornecedores (R$ 60.000,00). Temos 1 débito e 2 créditos = LANÇAMENTO DE SEGUNDA FÓRMULA (1 para 2).'
    },
    {
      id: 4,
      source: 'FGV – Técnico de Controle Externo / TCE-SE (2021)',
      topic: 'Fatos Permutativos',
      type: 'multiple',
      statement: 'Assinale a operação que NÃO altera o valor total do Patrimônio Líquido, configurando um fato permutativo:',
      options: [
        'Reconhecimento de despesa de salários do mês corrente.',
        'Recebimento de duplicatas de clientes com juros de mora.',
        'Compra de veículos à vista com pagamento em cheque bancário.',
        'Venda de mercadorias com margem de lucro de 25%.',
        'Perdão de dívida concedido por um fornecedor.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. A compra de veículo à vista com pagamento em cheque permuta Ativo Imobilizado (Veículos) por Ativo Circulante (Banco/Caixa). É fato permutativo entre contas do Ativo que preserva o valor global do PL inalterado.'
    },
    {
      id: 5,
      source: 'CEBRASPE – Auditor Federal de Controle Externo / TCU (2022)',
      topic: 'Fato Modificativo Diminutivo',
      type: 'tf',
      statement: 'O pagamento de despesas de aluguel do mês corrente, mediante débito em conta corrente bancária, é exemplo clássico de fato contábil modificativo diminutivo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. A despesa reduz diretamente o Patrimônio Líquido e reduz o Ativo (Bancos), configurando fato contábil modificativo diminutivo.'
    }
  ],

  // ── Aula 03: Contas e Plano de Contas ────────────────────────────────────────
  3: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-ES (2021)',
      topic: 'Natureza dos Saldos das Contas',
      type: 'multiple',
      statement: 'Em conformidade com a teoria contábil das contas, assinale a opção que indica contas que possuem, respectivamente, natureza DEVEDORA e natureza CREDORA:',
      options: [
        'Duplicatas a Receber e Fornecedores Nacionais.',
        'Capital Social e Caixa.',
        'Contas a Pagar e Despesas de Juros.',
        'Receita de Serviços e Veículos.',
        'Adiantamento a Fornecedores e Clientes.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Contas de Ativo (como Duplicatas a Receber) e despesas possuem natureza DEVEDORA (aumentam por débito). Contas de Passivo (como Fornecedores), PL e receitas possuem natureza CREDORA (aumentam por crédito).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Analista Judiciário / STJ (2018)',
      topic: 'Contas Retificadoras',
      type: 'tf',
      statement: 'As contas retificadoras do Ativo (como Depreciação Acumulada e Perdas Estimadas com Créditos de Liquidação Duvidosa) possuem saldo de natureza credora e figuram no Balanço Patrimonial diminuindo o grupo do Ativo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Contas retificadoras possuem natureza contrária à do grupo a que pertencem. Logo, contas retificadoras do Ativo têm natureza credora e reduzem o valor contábil do Ativo.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Função e Estrutura do Plano de Contas',
      type: 'multiple',
      statement: 'O documento contábil que contém a estrutura das contas e estabelece as diretrizes e normas para a realização dos lançamentos, com a descrição detalhada do funcionamento de cada conta, denomina-se:',
      options: [
        'Manual de Procedimentos Internos.',
        'Manual ou Manual de Contas com Elenco de Contas.',
        'Balancete Sintético Trimestral.',
        'Livro Diário Geral.',
        'Quadro Demonstrativo de Saldos.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O Plano de Contas completo compreende o Elenco de Contas acompanhado do Manual de Contas (função e funcionamento detalhado de cada conta).'
    }
  ]
};
