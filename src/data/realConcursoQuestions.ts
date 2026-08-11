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
      explanation: 'Gabarito: A. Art. 4º do CTN: A natureza jurídica específica do tributo é determinada pelo fato gerador da obrigação, sendo irrelevantes para qualificá-la a denominação e a destinação legal do produto da sua arrecadação.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Isenção e Anistia',
      type: 'tf',
      statement: 'A concessão de isenção ou anistia tributária pode ser outorgada por decreto do Poder Executivo em caso de urgência fiscal.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'ERRADO. Art. 150, § 6º da CF/88 e Art. 176 do CTN exigem LEI ESPECÍFICA federal, estadual ou municipal para concessão de isenção ou anistia.'
    },
    {
      id: 3,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Suspensão do Crédito Tributário',
      type: 'multiple',
      statement: 'Assinale a opção que indica uma hipótese de SUSPENSÃO da exigibilidade do crédito tributário expressamente prevista no Artigo 151 do CTN:',
      options: [
        'A concessão de medida liminar em mandado de segurança.',
        'A remissão concedida por despacho fundamentado da autoridade administrativa.',
        'A dação em pagamento de bens imóveis na forma da lei.',
        'A transação celebrada entre o sujeito ativo e o sujeito passivo.',
        'A compensação com créditos líquidos e certos do contribuinte.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 151, IV do CTN: A concessão de medida liminar em mandado de segurança suspende a exigibilidade do crédito tributário. Remissão, dação, transação e compensação são hipóteses de EXTINÇÃO (Art. 156 do CTN).'
    },
    {
      id: 4,
      source: 'FCC – Auditor Fiscal do Tesouro / SEFAZ-PE',
      topic: 'Decadência Tributária',
      type: 'multiple',
      statement: 'O direito de a Fazenda Pública constituir o crédito tributário extingue-se após 5 (cinco) anos contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado. Esse instituto jurídico denomina-se:',
      options: [
        'Decadência.',
        'Prescrição.',
        'Preclusão administrativa.',
        'Remissão.',
        'Transação.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 173, I do CTN: O direito de a Fazenda Pública constituir o crédito tributário extingue-se após 5 anos (Decadência).'
    },
    {
      id: 5,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Lançamento por Homologação',
      type: 'tf',
      statement: 'O lançamento por homologação ocorre quanto aos tributos cuja legislação atribua ao sujeito passivo o dever de antecipar o pagamento sem prévio exame da autoridade administrativa.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Art. 150 do CTN: O lançamento por homologação ocorre quando a lei atribui ao sujeito passivo o dever de apurar e pagar o tributo antes de qualquer exame pela autoridade fiscal (ex: ICMS, Imposto de Renda).'
    },
    {
      id: 6,
      source: 'FGV – Analista Tributário / Receita Federal',
      topic: 'Imunidades Tributárias',
      type: 'multiple',
      statement: 'Com relação às limitações constitucionais ao poder de tributar, a imunidade tributária recíproca (Art. 150, VI, "a" da CF/88) veda a instituição de:',
      options: [
        'Impostos sobre patrimônio, renda ou serviços uns dos outros (União, Estados, DF e Municípios).',
        'Taxas e contribuições de melhoria entre os entes federativos.',
        'Contribuições sociais para a seguridade social.',
        'Impostos e taxas incidentes sobre serviços públicos concedidos.',
        'Qualquer modalidade de tributo sobre empresas públicas exploradoras de atividade econômica.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 150, VI, "a" da CF/88: A imunidade recíproca proíbe expressamente a cobrança de IMPOSTOS (e não de taxas ou contribuições) entre a União, Estados, DF e Municípios.'
    },
    {
      id: 7,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-RS',
      topic: 'Não Cumulatividade do ICMS',
      type: 'tf',
      statement: 'No tocante ao ICMS, o princípio da não cumulatividade compensa o que for devido em cada operação com o montante cobrado nas anteriores.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Art. 155, § 2º, I da CF/88: O ICMS será não cumulativo, compensando-se o que for devido em cada operação com o montante cobrado nas anteriores.'
    },
    {
      id: 8,
      source: 'FCC – Auditor Fiscal / SEFAZ-PB',
      topic: 'Responsabilidade dos Sócios',
      type: 'multiple',
      statement: 'Segundo o CTN (Art. 135), os diretores e gerentes de pessoas jurídicas de direito privado são pessoalmente responsáveis pelos créditos tributários resultantes de atos praticados com:',
      options: [
        'Excesso de poderes ou infração de lei, contrato social ou estatutos.',
        'Mera inadimplência injustificada do imposto devido no vencimento.',
        'Falência decretada pelo Poder Judiciário.',
        'Prejuízo fiscal acumulado ao final do exercício financeiro.',
        'Alteração do endereço da sede sem comunicação prévia à Junta Comercial.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 135, III do CTN: São pessoalmente responsáveis os diretores e gerentes pelos atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos. Súmula 430 STJ: o mero inadimplemento não gera responsabilidade pessoal.'
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
      explanation: 'CERTO. Súmula 473 do STF: A administração pode anular seus próprios atos quando eivados de vícios que os tornem ilegais, ou revogá-los por motivo de conveniência ou oportunidade.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Nova Lei de Licitações (Lei 14.133/2021)',
      type: 'multiple',
      statement: 'Em conformidade com a Nova Lei de Licitações (Lei nº 14.133/2021), a contratação de profissional do setor artístico, diretamente ou por meio de empresário exclusivo, consagrado pela crítica especializada, é hipótese de:',
      options: [
        'Inexigibilidade de licitação.',
        'Dispensa de licitação por valor.',
        'Licitação dispensada.',
        'Pregão presencial obrigatório.',
        'Concurso público artístico.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 74, II da Lei nº 14.133/2021: É inexigível a licitação quando inviável a competição para contratação de profissional do setor artístico consagrado.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Atributos dos Atos Administrativos',
      type: 'multiple',
      statement: 'No âmbito dos atributos do ato administrativo, a autoexecutoriedade consiste na faculdade que tem a Administração Pública de:',
      options: [
        'Executar diretamente suas decisões e medidas materiais sem necessidade de prévia autorização do Poder Judiciário.',
        'Impor obrigações a terceiros independentemente da concordância destes em contratos administrativos.',
        'Presumir que todos os seus atos foram editados em conformidade com a lei até prova em contrário.',
        'Criar atos administrativos sem previsão explícita em lei anterior.',
        'Revogar atos vinculados praticados por agentes subordinados.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A autoexecutoriedade permite à Administração executar diretamente suas próprias decisões materiais sem prévia autorização judicial.'
    },
    {
      id: 4,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Responsabilidade Civil do Estado',
      type: 'tf',
      statement: 'Conforme o artigo 37, § 6º da Constituição Federal de 1988, a responsabilidade civil do Estado por danos causados por seus agentes a terceiros é objetiva, fundamentada na Teoria do Risco Administrativo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Art. 37, § 6º da CF/88: As pessoas jurídicas de direito público responderão pelos danos que seus agentes causarem a terceiros, assegurado o direito de regresso contra o responsável em caso de dolo ou culpa.'
    },
    {
      id: 5,
      source: 'FGV – Analista Tributário / Receita Federal',
      topic: 'Improbidade Administrativa (Lei 8.429/92)',
      type: 'multiple',
      statement: 'De acordo com a Lei de Improbidade Administrativa (Lei nº 8.429/1992, com redação dada pela Lei nº 14.230/2021), a caracterização de qualquer ato de improbidade exige obrigatoriamente a demonstração de:',
      options: [
        'Dolo manifesto do agente público.',
        'Culpa grave ou imperícia comprovada.',
        'Enriquecimento ilícito pessoal de valor superior a 100 salários mínimos.',
        'Prejuízo efetivo ao erário público estadual ou federal.',
        'Condenação criminal prévia transitada em julgado.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 1º, § 1º da Lei 8.429/92 (com alterações da Lei 14.230/2021): Consideram-se atos de improbidade apenas as condutas DOLOSAS tipificadas em lei.'
    }
  ],
  constitucional: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Inviolabilidade de Domicílio',
      type: 'tf',
      statement: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Artigo 5º, inciso XI da Constituição Federal de 1988.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Criação de Municípios',
      type: 'multiple',
      statement: 'Nos termos da Constituição Federal de 1988, a criação, a incorporação, a fusão e o desmembramento de Municípios far-se-ão por:',
      options: [
        'Lei estadual, dentro do período determinado por Lei Complementar Federal, e dependerão de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos.',
        'Decreto do Governador do Estado aprovado por maioria simples da Assembleia Legislativa.',
        'Lei Ordinária Federal promulgada pelo Presidente da República.',
        'Resolução conjunta das Câmaras Municipais envolvidas aprovada por dois terços dos vereadores.',
        'Emenda à Constituição Estadual aprovada em dois turnos de votação.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Artigo 18, § 4º da CF/88: A criação e desmembramento de Municípios far-se-ão por lei estadual, no período determinado por Lei Complementar Federal, dependendo de plebiscito.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Mandado de Injunção',
      type: 'multiple',
      statement: 'Conceder-se-á Mandado de Injunção sempre que:',
      options: [
        'A falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.',
        'Alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção por ilegalidade ou abuso de poder.',
        'For necessário assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de bancos de dados governamentais.',
        'Houver violação de direito líquido e certo não amparado por habeas corpus praticada por autoridade pública.',
        'Qualquer cidadão pretender anular ato lesivo ao patrimônio público ou ao meio ambiente.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Artigo 5º, LXXI da CF/88: Mandado de Injunção é o remédio cabível diante da omissão legislativa que inviabilize direito constitucional.'
    }
  ],
  auditoria: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Circularização (NBC TA 505)',
      type: 'tf',
      statement: 'A confirmação externa (circularização) consiste na evidência de auditoria obtida pelo auditor como uma resposta direta por escrito de um terceiro (a parte que confirma) ao auditor, em papel, mídia eletrônica ou outra mídia.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. NBC TA 505 (Confirmação Externa), item 6(a).'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Relatório do Auditor (NBC TA 705)',
      type: 'multiple',
      statement: 'De acordo com a NBC TA 705 (Modificações na Opinião do Auditor Independente), quando o auditor conclui que as distorções são RELEVANTES, mas NÃO GENERALIZADAS nas demonstrações contábeis, deve emitir uma opinião:',
      options: [
        'Com ressalva.',
        'Adversa.',
        'Com abstenção de opinião.',
        'Sem ressalva com parágrafo de ênfase.',
        'Incondicional limpa.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. NBC TA 705, item 7(a): Distorções relevantes mas não generalizadas ensejam opinião com ressalva.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Risco de Auditoria (NBC TA 200)',
      type: 'multiple',
      statement: 'O risco de o auditor emitir uma opinião inadequada quando as demonstrações contábeis contiverem distorção relevante é denominado:',
      options: [
        'Risco de auditoria.',
        'Risco inerente exclusivo.',
        'Risco de controle interno.',
        'Risco de amostragem não estatística.',
        'Risco de negócio da entidade.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. NBC TA 200 (R1), item 13(c): Risco de auditoria é o risco de expressar opinião inadequada quando as demonstrações contiverem distorção relevante.'
    }
  ],
  portugues: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Sintaxe e Regência',
      type: 'tf',
      statement: 'Na frase "Trata-se de processos fiscais complexos", o verbo "tratar" permanece obrigatoriamente na terceira pessoa do singular devido à presença da preposição "de" associada à partícula "se", caracterizando sujeito indeterminado.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Verbo transitivo indireto acompanhado de "se" possui sujeito indeterminado e permanece no singular.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Emprego do Sinal Indicativo de Crase',
      type: 'multiple',
      statement: 'Assinale a opção em que o sinal indicativo de crase está empregado em estrita observância à norma-padrão da Língua Portuguesa:',
      options: [
        'O fiscal dirigiu-se à diretoria de tributação para protocolar o auto de infração.',
        'O parecer foi entregue à ele durante a reunião do Conselho de Fazenda.',
        'Refiro-me à pessoas dedicadas ao estudo do Direito Tributário.',
        'A empresa começou à recolher o imposto devido com atraso.',
        'O fiscal atendeu à qualquer contribuinte que solicitou informação.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Há crase válida pela fusão da preposição "a" exigida por "dirigiu-se a" com o artigo definido "a" da palavra "diretoria".'
    }
  ],
  economia: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Regra de Ouro (LRF / CF88)',
      type: 'tf',
      statement: 'A Regra de Ouro prevista na Constituição Federal (Art. 167, III) veda a realização de operações de crédito que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Artigo 167, III da CF/88 proíbe operações de crédito maiores que as despesas de capital.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Elasticidade-Preço da Demanda',
      type: 'multiple',
      statement: 'Em microeconomia, quando a elasticidade-preço da demanda de um bem em módulo é maior do que 1 (|Epd| > 1), afirma-se que:',
      options: [
        'A demanda é elástica, e uma redução no preço do bem provocará um aumento na receita total dos produtores.',
        'A demanda é inelástica, e um aumento no preço aumentará a receita total.',
        'A demanda tem elasticidade unitária, mantendo a receita inalterada.',
        'O bem é obrigatoriamente um bem de Giffen.',
        'A curva de demanda é perfeitamente inelástica.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Na demanda elástica, a queda no preço é compensada por um aumento proporcionalmente maior no volume de vendas, elevando a receita total.'
    }
  ],
  estatistica: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Sistemas de Amortização (SAC)',
      type: 'tf',
      statement: 'No Sistema de Amortização Constante (SAC), o valor das amotizações permanece constante durante todo o período do financiamento, enquanto o valor das prestações periódicas e dos juros é decrescente.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. No SAC, amortização é constante e juros caem, gerando prestações decrescentes.'
    },
    {
      id: 2,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
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
      explanation: 'Gabarito: A. A mediana divide a distribuição exatamente ao meio (50% acima e 50% abaixo).'
    }
  ],
  informatica: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Criptografia Assimétrica',
      type: 'tf',
      statement: 'A criptografia assimétrica (ou de chave pública) utiliza duas chaves distintas porém matematicamente relacionadas: uma chave pública para criptografar os dados e uma chave privada correspondente para decriptografá-los.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Criptografia assimétrica emprega par de chaves pública e privada.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA',
      topic: 'Excel (PROCV)',
      type: 'multiple',
      statement: 'No Microsoft Excel em português, a função utilizada para pesquisar um valor na primeira coluna à esquerda de uma tabela e retornar um valor na mesma linha de uma coluna especificada é a:',
      options: [
        'PROCV',
        'CORRESP',
        'INDEXAR',
        'CONT.SE',
        'PROCH'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A função PROCV (Procura Vertical) realiza busca na primeira coluna de uma tabela.'
    }
  ],
  igualdade_racial: [
    {
      id: 1,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Ações Afirmativas (Lei 12.288/2010)',
      type: 'tf',
      statement: 'De acordo com a Lei nº 12.288/2010 (Estatuto da Igualdade Racial) e a Lei Estadual da Bahia nº 13.182/2014, consideram-se ações afirmativas as medidas, programas e políticas especiais adotadas pelo Estado e por entidades privadas para a correção das desigualdades raciais e a promoção da igualdade de oportunidades.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'CERTO. Artigo 4º, VII da Lei Federal nº 12.288/2010 e Art. 3º da Lei Estadual da Bahia nº 13.182/2014.'
    },
    {
      id: 2,
      source: 'FGV – Defensoria Pública da Bahia / DPE-BA',
      topic: 'Discriminação Étnico-Racial',
      type: 'multiple',
      statement: 'Segundo a Lei Federal nº 12.288/2010 (Estatuto da Igualdade Racial), a divisão social pautada em critérios de raça que resulta em prejuízo no acesso a direitos, serviços e bens públicos é conceituada como:',
      options: [
        'Discriminação racial ou étnico-racial.',
        'Ação afirmativa compensatória.',
        'Desigualdade puramente econômica.',
        'Segregação urbana opcional.',
        'Reparação histórica involuntária.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Artigo 1º, parágrafo único, I da Lei 12.288/2010 define discriminação racial como qualquer distinção ou restrição baseada em raça ou cor.'
    }
  ]
};
