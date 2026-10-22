import { QuestionData } from '../aula00Questions';

export const CONTABILIDADE_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 01: Balanço Patrimonial - Estrutura e Ativo Não Circulante ────────
  1: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Classificação no Ativo Não Circulante (Lei 6.404/76 e CPC 00)',
      type: 'multiple',
      statement: 'De acordo com a Lei das Sociedades por Ações (Lei nº 6.404/76) e as normas emitidas pelo Comitê de Pronunciamentos Contábeis (CPC), o Ativo Não Circulante é composto pelos seguintes subgrupos:',
      options: [
        'Ativo Realizável a Longo Prazo, Investimentos, Imobilizado e Intangível.',
        'Ativo Circulante, Ativo Permanente e Despesas Diferidas.',
        'Disponibilidades, Direitos a Receber e Estoques.',
        'Investimentos Temporários, Bens em Garantia e Ajustes Patrimoniais.',
        'Passivo Exigível a Longo Prazo e Patrimônio Líquido.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Conforme o Artigo 178, § 1º, "b" da Lei 6.404/76, o Ativo Não Circulante subdivide-se em quatro subgrupos: 1) Realizável a Longo Prazo (ARLP); 2) Investimentos; 3) Imobilizado; e 4) Intangível.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Critérios de Avaliação do Imobilizado (CPC 27)',
      type: 'tf',
      statement: 'O custo de um item do ativo imobilizado compreende seu preço de aquisição, acrescido de impostos de importação e tributos não recuperáveis, bem como quaisquer custos diretamente atribuíveis para colocar o ativo no local e em condição de funcionamento pretendida pela administração.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Literalidade do item 16 do CPC 27 (Ativo Imobilizado).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Depreciação Contábil - Valor Residual e Vida Útil',
      type: 'multiple',
      statement: 'Uma sociedade empresária adquiriu um equipamento industrial por R$ 120.000,00 à vista. A administração estimou uma vida útil econômica de 10 anos e um valor residual de R$ 20.000,00 ao final desse período. Adotando-se o método linear (cotas constantes) de depreciação, o valor contábil líquido do equipamento após 3 anos de uso ininterrupto será de:',
      options: [
        'R$ 84.000,00',
        'R$ 90.000,00',
        'R$ 70.000,00',
        'R$ 96.000,00',
        'R$ 100.000,00'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Valor Depreciável = Custo - Valor Residual = 120.000 - 20.000 = R$ 100.000,00. Depreciação anual = 100.000 / 10 = R$ 10.000,00/ano. Depreciação acumulada em 3 anos = 3 x 10.000 = R$ 30.000,00. Valor Contábil Líquido = Custo Histórico (120.000) - Depreciação Acumulada (30.000) = R$ 90.000,00.'
    }
  ],

  // ── Aula 02: Demonstração do Resultado do Exercício (DRE) ──────────────────
  2: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Estrutura da DRE (Art. 187 da Lei 6.404/76 e CPC 26)',
      type: 'multiple',
      statement: 'Na Demonstração do Resultado do Exercício (DRE), o Lucro Bruto é obtido mediante a subtração:',
      options: [
        'Das Despesas Operacionais em relação à Receita Bruta de Vendas.',
        'Do Custo das Mercadorias Vendidas e Serviços Prestados (CMV/CSP) em relação à Receita Líquida de Vendas.',
        'Das Despesas Financeiras Líquidas em relação ao Lucro Operacional.',
        'Dos Tributos sobre o Lucro (IRPJ e CSLL) em relação ao LAIR.',
        'Das Participações Estatutárias em relação ao Lucro Antes dos Impostos.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Estrutura legal da DRE: Receita Bruta (-) Deduções/Abatimentos/Tributos sobre Vendas = Receita Líquida de Vendas. Receita Líquida (-) Custo das Mercadorias Vendidas (CMV) = LUCRO BRUTO (Resultado Bruto).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Regime de Competência vs Regime de Caixa',
      type: 'tf',
      statement: 'Pelo regime de competência, as receitas e as despesas devem ser incluídas na apuração do resultado do período em que ocorrerem seus respectivos fatos geradores, independentemente do efetivo recebimento ou pagamento financeiro.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. CPC 00 (R2) e Lei 6.404/76, art. 177: O regime de competência reconhece os efeitos das transações e outros eventos quando eles ocorrem, e não quando o caixa é recebido ou pago.'
    }
  ],

  // ── Aula 03: Demonstração dos Fluxos de Caixa (DFC - CPC 03) ───────────────
  3: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-MG',
      topic: 'Atividades Operacionais, de Investimento e de Financiamento',
      type: 'multiple',
      statement: 'Segundo a NBC TG 03 (R3) – Demonstração dos Fluxos de Caixa, os fluxos de caixa devem ser segregados em três atividades fundamentais. Assinale a alternativa que exemplifica exclusivamente um fluxo de caixa das Atividades de FINANCIAMENTO:',
      options: [
        'Recebimento de caixa decorrente da venda de produtos ou prestação de serviços.',
        'Pagamentos em caixa para aquisição de ativos imobilizados ou intangíveis.',
        'Entradas de caixa resultantes da emissão de ações ou outros instrumentos patrimoniais e obtenção de empréstimos bancários.',
        'Pagamento de fornecedores decorrente da compra de matérias-primas a prazo.',
        'Recebimento de juros sobre capital próprio de controladas.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. Atividades de Financiamento são aquelas que resultam em mudanças no tamanho e na composição do capital próprio (patrimônio líquido) e no endividamento da entidade (empréstimos e financiamentos de longo prazo tomados).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-CE',
      topic: 'Método Direto vs Método Indireto na DFC',
      type: 'tf',
      statement: 'Na Demonstração dos Fluxos de Caixa (DFC), a diferença entre o Método Direto e o Método Indireto reside exclusivamente na apresentação do Fluxo de Caixa das Atividades Operacionais, sendo as atividades de investimento e de financiamento apresentadas de forma idêntica em ambos os métodos.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. CPC 03 (R3): A única diferença entre o método direto e o indireto está na forma como é demonstrado o Fluxo de Caixa Operacional (FCO). Os fluxos de investimento e financiamento são rigorosamente iguais em ambos os métodos.'
    }
  ],

  // ── Aula 05: Provisões, Passivos Contingentes e Ativos Contingentes (CPC 25) ─
  5: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Critérios para Reconhecimento de Provisão (CPC 25)',
      type: 'multiple',
      statement: 'De acordo com o Pronunciamento Técnico CPC 25 – Provisões, Passivos Contingentes e Ativos Contingentes, uma provisão deve ser reconhecida no Balanço Patrimonial quando, e apenas quando, forem atendidos cumulativamente três critérios. Assinale a opção que os indica:',
      options: [
        'A entidade tem uma obrigação presente decorrente de evento passado; é provável uma saída de recursos que incorporam benefícios econômicos; e pode ser feita uma estimativa confiável do valor da obrigação.',
        'A entidade tem uma obrigação futura incerta; a saída de recursos é possível; e o valor for superior à materialidade de auditoria.',
        'A entidade tem um direito presente; a entrada de recursos é praticamente certa; e há autorização judicial transitada em julgado.',
        'A saída de caixa é remota; o passivo foi auditado; e a diretoria emitiu declaração formal.',
        'Existe mera intenção da administração de liquidar dívida futura não contraída.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. CPC 25, item 14: Os 3 requisitos cumulativos para reconhecimento de provisão contábil são: 1) Obrigação presente resultante de eventos passados; 2) Saída provável de recursos (probabilidade > 50%); e 3) Estimativa confiável do valor.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-DF',
      topic: 'Tratamento de Passivo Contingente com Probabilidade Possível',
      type: 'tf',
      statement: 'Um passivo contingente cuja probabilidade de saída de recursos seja avaliada pelos assessores jurídicos como possível (nem provável, nem remota) não deve ser provisionado no balanço patrimonial, mas deve ser divulgado em notas explicativas.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Regra de ouro do CPC 25: Provável (>50%) = Reconhece provisão no Balanço + Divulga; Possível (entre 10% e 50%) = NÃO reconhece no Balanço, APENAS DIVULGA em notas explicativas; Remota (<10%) = Nada faz (nem provisiona, nem divulga).'
    }
  ]
};
