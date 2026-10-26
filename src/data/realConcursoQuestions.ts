import { QuestionData } from './aula00Questions';

export const REAL_CONCURSO_QUESTIONS: Record<string, QuestionData[]> = {
  tributario: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Conceito de Tributo',
      type: 'multiple',
      statement: 'De acordo com o Artigo 4º do Código Tributário Nacional (CTN), a natureza jurídica específica do tributo é determinada pelo(a):',
      options: [
        'Fato gerador da obrigação principal.',
        'Denominação e demais características formais adotadas pela lei.',
        'Destinação legal do produto da sua arrecadação.',
        'Órgão estatal responsável pela sua cobrança e fiscalização.',
        'Capacidade contributiva presumida do sujeito passivo.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 4º do CTN: A natureza jurídica específica do tributo é determinada pelo fato gerador da obrigação.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Isenção e Anistia',
      type: 'tf',
      statement: 'A concessão de isenção ou anistia tributária pode ser outorgada por decreto do Poder Executivo em caso de urgência fiscal.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'ERRADO. Art. 150, § 6º da CF/88 e Art. 176 do CTN exigem LEI ESPECÍFICA para concessão de isenção ou anistia.'
    },
    {
      id: 3,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Suspensão do Crédito Tributário',
      type: 'multiple',
      statement: 'Assinale a opção que indica uma hipótese de SUSPENSÃO da exigibilidade do crédito tributário prevista no Artigo 151 do CTN:',
      options: [
        'A concessão de medida liminar em mandado de segurança.',
        'A remissão concedida por despacho fundamentado.',
        'A dação em pagamento de bens imóveis na forma da lei.',
        'A transação celebrada entre o sujeito ativo e o sujeito passivo.',
        'A compensação com créditos líquidos e certos.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 151, IV do CTN: A concessão de medida liminar em mandado de segurança suspende a exigibilidade do crédito tributário.'
    }
  ],
  matematica_financeira: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Tributos Estaduais / SEFAZ-AM (2022)',
      topic: 'Juros Compostos e Taxas Equivalentes',
      type: 'multiple',
      statement: 'Um capital de R$ 10.000,00 foi aplicado à taxa de juros compostos de 10% ao ano, com capitalização anual, durante 2 anos. O montante final ao término do período é de:',
      options: [
        'R$ 12.100,00',
        'R$ 12.000,00',
        'R$ 11.000,00',
        'R$ 12.200,00',
        'R$ 12.500,00'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. M = C * (1 + i)^n = 10.000 * (1,10)^2 = 10.000 * 1,21 = R$ 12.100,00.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Sistemas de Amortização (SAC vs Price)',
      type: 'tf',
      statement: 'No Sistema de Amortização Constante (SAC), a quota de amortização do saldo devedor permanece constante durante todo o prazo do contrato, o que resulta em prestações periódicas decrescentes ao longo do tempo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. No SAC, a amortização é fixa (A = SD / n). Como o saldo devedor cai, a parcela de juros diminui a cada período, gerando prestações decrescentes.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)',
      topic: 'Desconto Racional Simples (Por Dentro)',
      type: 'multiple',
      statement: 'Um título de valor nominal R$ 11.000,00 é resgatado 2 meses antes do seu vencimento à taxa de desconto racional simples de 5% ao mês. O valor presente (atual) recebido é:',
      options: [
        'R$ 10.000,00',
        'R$ 9.900,00',
        'R$ 10.450,00',
        'R$ 10.500,00',
        'R$ 9.800,00'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. N = A * (1 + i*n) => 11.000 = A * (1 + 0,05*2) => 11.000 = A * 1,10 => A = R$ 10.000,00.'
    },
    {
      id: 4,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)',
      topic: 'Taxa Nominal vs Taxa Efetiva',
      type: 'tf',
      statement: 'A taxa nominal de 12% ao ano com capitalização mensal corresponde a uma taxa efetiva anual superior a 12% ao ano.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. A taxa efetiva mensal é de 1% ao mês. A taxa efetiva anual é (1,01)^12 - 1 = 12,68% ao ano, superior aos 12% nominais.'
    }
  ],
  estatistica: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)',
      topic: 'Medidas de Tendência Central',
      type: 'multiple',
      statement: 'Em estatística descritiva, a medida de tendência central definida como o valor que ocupa a posição central de um conjunto de dados ordenados, dividindo-o em duas partes iguais de 50%, é a:',
      options: [
        'Mediana.',
        'Média aritmética simples.',
        'Moda amostral.',
        'Variância.',
        'Desvio padrão.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A mediana é a medida ordinal central que divide o conjunto de dados em exatamente duas metades de 50%.'
    },
    {
      id: 2,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Sensibilidade a Outliers',
      type: 'tf',
      statement: 'A mediana é uma medida de tendência central insensível à presença de valores discrepantes (outliers) no conjunto de dados, ao contrário da média aritmética.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. A mediana depende apenas da ordem dos elementos centrais, enquanto a média aritmética é fortemente afetada por valores extremos.'
    },
    {
      id: 3,
      source: 'FGV – Auditor Fiscal de Tributos Estaduais / SEFAZ-AM (2022)',
      topic: 'Coeficiente de Variação',
      type: 'multiple',
      statement: 'Uma distribuição estatística apresenta média igual a 50 e desvio padrão igual a 5. O Coeficiente de Variação (CV) dessa distribuição é:',
      options: [
        '10%',
        '5%',
        '20%',
        '2,5%',
        '15%'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. CV = (Desvio Padrão / Média) * 100 = (5 / 50) * 100 = 10%.'
    }
  ],
  contabilidade_geral: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Conceito de Ativo (CPC 00 R2)',
      type: 'tf',
      statement: 'De acordo com a Estrutura Conceitual para Relatório Financeiro (CPC 00 R2), ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. CPC 00 (R2), item 4.3: Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Fatos Contábeis Permutativos',
      type: 'multiple',
      statement: 'Assinale a alternativa que apresenta um fato contábil estritamente PERMUTATIVO:',
      options: [
        'Aquisição de mercadorias para estoque a prazo.',
        'Pagamento de despesa de salários do mês.',
        'Recebimento de receita de serviços em dinheiro.',
        'Reconhecimento de depreciação acumulada.',
        'Venda de estoque com lucro bruto.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A compra de estoque a prazo envolve Débito em Estoque (+Ativo) e Crédito em Fornecedores (+Passivo), permutando elementos patrimoniais sem alterar o PL.'
    }
  ],
  casp: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor de Finanças e Controle / SEFAZ-AL (2020)',
      topic: 'Demonstrações Contábeis Aplicadas ao Setor Público',
      type: 'tf',
      statement: 'No Balanço Orçamentário elaborado segundo as normas do MCASP, a economia de despesa é dada pela diferença positiva entre a despesa fixada e a despesa executada.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. No Balanço Orçamentário, a economia de despesa reflete o montante de dotação autorizada que não foi empenhado/executado.'
    },
    {
      id: 2,
      source: 'FGV – Auditor do Estado / CGE-SC (2023)',
      topic: 'Classes do PCASP',
      type: 'multiple',
      statement: 'No Plano de Contas Aplicado ao Setor Público (PCASP), as contas que registram os atos potenciais do setor público (garantias e contratos) pertencem ao subsistema de natureza:',
      options: [
        'De Controle (Classes 7 e 8).',
        'Patrimonial (Classes 1, 2, 3 e 4).',
        'Orçamentária (Classes 5 e 6).',
        'Financeira exclusiva.',
        'Auxiliar de encerramento.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. O PCASP reserva as Classes 7 e 8 para os atos potenciais e controles contratuais.'
    }
  ],
  administrativo: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Autotutela Administrativa',
      type: 'tf',
      statement: 'Pelo princípio da autotutela, a Administração Pública pode anular seus próprios atos quando eivados de vícios que os tornem ilegais, ou revogá-los por motivo de conveniência ou oportunidade.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Súmula 473 do STF.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Nova Lei de Licitações (Lei 14.133/2021)',
      type: 'multiple',
      statement: 'Conforme a Lei nº 14.133/2021, a contratação de profissional do setor artístico consagrado pela crítica especializada é hipótese de:',
      options: [
        'Inexigibilidade de licitação.',
        'Dispensa de licitação por valor.',
        'Licitação dispensada.',
        'Concurso público compulsório.',
        'Pregão presencial.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 74, II da Lei 14.133/2021.'
    }
  ],
  constitucional: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Inviolabilidade do Domicílio',
      type: 'tf',
      statement: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Artigo 5º, XI da CF/88.'
    }
  ],
  auditoria: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Circularização (NBC TA 505)',
      type: 'tf',
      statement: 'A confirmação externa (circularização) consiste na obtenção pelo auditor de resposta direta escrita por terceiro (parte confirmante) em formato impresso ou eletrônico.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. NBC TA 505, item 6(a).'
    }
  ],
  portugues: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Crase',
      type: 'multiple',
      statement: 'Assinale a alternativa em que a crase está empregada em estrita conformidade com a norma-padrão:',
      options: [
        'O fiscal dirigiu-se à diretoria tributária para protocolo.',
        'Entregou o relatório à ele pessoalmente.',
        'Fez referência à pessoas altamente qualificadas.',
        'Passou à escrever a minuta da autuação fiscal.',
        'Atendeu à qualquer solicitação da empresa.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Fusão da preposição a + artigo feminino a de diretoria.'
    }
  ],
  economia: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Regra de Ouro (CF/88)',
      type: 'tf',
      statement: 'A Regra de Ouro (Art. 167, III da CF/88) veda a realização de operações de crédito que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares por maioria absoluta do Poder Legislativo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Art. 167, III da CF/88.'
    }
  ],
  administracao_financas: [
    {
      id: 1,
      source: 'CEBRASPE – Analista de Planejamento e Orçamento / SEFAZ-AL (2020)',
      topic: 'Estágios da Despesa Pública',
      type: 'tf',
      statement: 'A liquidação da despesa pública consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprovantes do crédito e do serviço prestado ou bem entregue.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Artigo 63 da Lei nº 4.320/1964.'
    }
  ],
  informatica: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Criptografia Assimétrica',
      type: 'tf',
      statement: 'A criptografia assimétrica utiliza duas chaves distintas (uma pública e uma privada) matematicamente correlacionadas.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Par de chaves pública e privada.'
    }
  ],
  igualdade_racial: [
    {
      id: 1,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Ações Afirmativas',
      type: 'tf',
      statement: 'Consideram-se ações afirmativas as políticas públicas e programas especiais adotados pelo Estado para a reparação das desigualdades raciais (Lei 12.288/2010).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Artigo 4º, VII da Lei nº 12.288/2010.'
    }
  ]
};
