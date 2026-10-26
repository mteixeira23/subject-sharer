import { QuestionData } from '../aula00Questions';

export const TRIBUTARIO_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Conceito de Tributo e Espécies Tributárias ─────────────────────
  0: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Conceito de Tributo (Art. 3º do CTN)',
      type: 'multiple',
      statement: 'Nos termos do Art. 3º do Código Tributário Nacional, tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada. A partir dessa definição legal, assinale a afirmativa correta:',
      options: [
        'A multa decorrente de infração de trânsito possui natureza de tributo em razão de sua compulsoriedade.',
        'O tributo pode ser instituído validamente por mero decreto regulamentar do Poder Executivo em caso de urgência.',
        'A vedação de que o tributo constitua sanção de ato ilícito distingue ontologicamente a obrigação tributária da penalidade pecuniária (multa).',
        'A atividade administrativa de cobrança do tributo possui caráter discricionário quanto à oportunidade e conveniência do lançamento.',
        'O pagamento de tributos em espécie de bens móveis ou serviços é amplamente admitido em qualquer hipótese pelo CTN.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. A expressão "que não constitua sanção de ato ilícito" consagra a distinção jurídica fundamental entre tributo (prestação devida em razão de fato lícito) e multa/penalidade (prestação devida em razão do cometimento de ato ilícito/infração).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL (2020)',
      topic: 'Natureza Jurídica Específica do Tributo',
      type: 'tf',
      statement: 'De acordo com o CTN, a natureza jurídica específica do tributo é determinada pelo fato gerador da respectiva obrigação, sendo irrelevantes para qualificá-la a denominação e demais características formais adotadas pela lei, bem como a destinação legal do produto da sua arrecadação.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Aplicação literal do Artigo 4º do CTN. Para qualificar um tributo (se é imposto, taxa ou contribuição de melhoria), analisa-se o fato gerador, sendo irrelevante a destinação da receita ou o nome dado pela lei.'
    },
    {
      id: 3,
      source: 'FGV – Auditor Fiscal de Receitas Estaduais / SEFAZ-MG (2023)',
      topic: 'Teoria Pentapartida das Espécies Tributárias',
      type: 'multiple',
      statement: 'O Supremo Tribunal Federal (STF) pacificou a adoção da Teoria Pentapartida (quinquipartida) para a classificação dos tributos no ordenamento constitucional brasileiro de 1988. Segundo essa teoria, são espécies tributárias:',
      options: [
        'Impostos, taxas e tarifas públicas.',
        'Impostos, taxas e contribuições de melhoria apenas.',
        'Impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.',
        'Impostos, preços públicos, taxas de polícia e contribuições sindicais.',
        'Impostos diretos, impostos indiretos, taxas de serviço e multas moratórias.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. A jurisprudência consolidada do STF (RE 146.733) reconhece 5 espécies tributárias autônomas sob a égide da CF/88: 1) Impostos; 2) Taxas; 3) Contribuições de Melhoria; 4) Empréstimos Compulsórios (art. 148); e 5) Contribuições Especiais (art. 149).'
    },
    {
      id: 4,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-CE (2021)',
      topic: 'Taxas de Polícia vs Preços Públicos',
      type: 'tf',
      statement: 'As taxas cobradas em razão do poder de polícia exigem a comprovação de fiscalização presencial prévia individualizada sobre cada estabelecimento autuado, sendo vedada a utilização de estrutura administrativa permanente como fundamento de sua cobrança.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. Súmula 73 do STF e tese do Tema 217 da repercussão geral: É legítima a cobrança de taxa de fiscalização do poder de polícia com base na existência de órgão administrativo estruturado e em efetivo funcionamento, dispensando-se a fiscalização presencial de rotina em cada contribuinte individual.'
    },
    {
      id: 5,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC (2018)',
      topic: 'Contribuição de Melhoria',
      type: 'multiple',
      statement: 'A respeito da Contribuição de Melhoria, prevista no Art. 145, III da CF/88 e disciplinada pelo Decreto-Lei nº 195/1967 e pelo CTN, assinale a opção correta:',
      options: [
        'Pode ser cobrada pela simples realização de obra pública, mesmo que dela não resulte valorização imobiliária para o imóvel do contribuinte.',
        'Possui como limite total o custo da obra e como limite individual o acréscimo de valor que da obra resultar para cada imóvel beneficiado.',
        'Pode ter sua base de cálculo fixada com base no valor venal total do imóvel, idêntica à do IPTU ou ITR.',
        'Pode ser instituída sem a prévia publicação de edital contendo memorial descritivo e orçamento da obra.',
        'É tributo de competência privativa dos Estados e do Distrito Federal.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. A Contribuição de Melhoria tem duplo limite: Limite Total = custo global da obra realizada; Limite Individual = efetiva valorização imobiliária (plus patrimonial) absorvida pelo imóvel do contribuinte (Art. 81 do CTN e DL 195/67).'
    }
  ],

  // ── Aula 01: Competência Tributária e Capacidade Tributária ────────────────
  1: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Características da Competência Tributária',
      type: 'multiple',
      statement: 'A competência tributária, outorgada diretamente pela Constituição Federal aos entes políticos (União, Estados, DF e Municípios), possui características jurídicas próprias. Sobre essas características, assinale a afirmativa correta:',
      options: [
        'A competência tributária é delegável mediante convênio firmado entre o Estado e a União.',
        'O não exercício da competência tributária pelo ente titular autoriza outro ente federado a exercê-la subsidiariamente.',
        'A competência tributária é indelegável, intransferível, inalterável por lei ordinária e imprescritível (a caducidade não a atinge).',
        'A competência para instituir impostos pode ser transferida a pessoas jurídicas de direito privado concessionárias de serviço público.',
        'A capacidade tributária ativa é indelegável, enquanto a competência legislativa pode ser compartilhada.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. A competência tributária é outorgada pelo constituinte, sendo indelegável, intransferível, irrenunciável e imprescritível (Art. 7º do CTN). O que pode ser delegado a outra pessoa jurídica de direito público é a CAPACIDADE TRIBUTÁRIA ATIVA (arrecadar e fiscalizar).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita do DF / SEFAZ-DF (2020)',
      topic: 'Competência Residual da União',
      type: 'tf',
      statement: 'A União poderá instituir, mediante lei complementar, impostos não previstos na Constituição, desde que sejam não cumulativos e não tenham fato gerador ou base de cálculo próprios dos discriminados na CF/88.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 154, I da CF/88: A competência residual para novos impostos pertence exclusivamente à União e exige: 1) Lei Complementar; 2) Não cumulatividade; 3) Fato gerador e base de cálculo inéditos.'
    },
    {
      id: 3,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Capacidade Tributária Ativa e Parafiscalidade',
      type: 'multiple',
      statement: 'Quando um ente político institui um tributo em lei e transfere as funções de arrecadar e fiscalizar para uma autarquia pública, ocorre o fenômeno denominado:',
      options: [
        'Bitributação federativa.',
        'Parafiscalidade com atribuição de capacidade tributária ativa.',
        'Delegação ilegítima de competência tributária.',
        'Competência tributária concorrente cumulativa.',
        'Extrafiscalidade sancionatória.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Parafiscalidade ocorre quando a lei delega a arrecadação e a fiscalização de um tributo a uma entidade (como autarquias, conselhos de classe ou fundações públicas), atribuindo-lhe a capacidade tributária ativa nos termos do Art. 7º do CTN.'
    }
  ],

  // ── Aula 02: Limitações Ao Poder de Tributar: Princípios I ──────────────────
  2: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Tributos Estaduais / SEFAZ-AM (2022)',
      topic: 'Princípio da Legalidade e Exceções',
      type: 'multiple',
      statement: 'Em conformidade com a Constituição Federal de 1988, o Princípio da Estrita Legalidade Tributária (Art. 150, I) veda exigir ou aumentar tributo sem lei que o estabeleça. No entanto, o Poder Executivo pode alterar as alíquotas de determinados tributos mediante ato infralegal (decreto), observadas as condições e limites estabelecidos em lei. Essa exceção mitiga a legalidade estrita para:',
      options: [
        'IR, ITR, IPVA e ITCMD.',
        'II, IE, IPI e IOF.',
        'ICMS, ISS, IRPJ e CSLL.',
        'CIDE-Combustíveis, ITBI, IPTU e Taxas.',
        'Empréstimos Compulsórios e Contribuições de Melhoria.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Os impostos com função predominantemente extrafiscal cujas alíquotas podem ser alteradas por decreto do Poder Executivo (Art. 153, § 1º da CF/88) são: II (Importação), IE (Exportação), IPI (Produtos Industrializados) e IOF (Operações Financeiras).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Princípio da Irretroatividade Tributária',
      type: 'tf',
      statement: 'A lei tributária que institui ou majora tributo aplica-se a fatos geradores pretéritos já consumados, desde que não tenha havido lançamento formal homologado pelo fisco.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. Art. 150, III, "a" da CF/88: É vedado cobrar tributos em relação a fatos geradores ocorridos antes do início da vigência da lei que os houver instituído ou aumentado (Princípio da Irretroatividade).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)',
      topic: 'Princípio da Anterioridade Anual e Nonagesimal',
      type: 'multiple',
      statement: 'Determinada lei estadual publicada em 15 de novembro de 2025 majorou as alíquotas do Imposto sobre a Propriedade de Veículos Automotores (IPVA). De acordo com o regramento constitucional das anterioridades (Art. 150, III, b e c da CF/88), a referida majoração poderá ser exigida a partir de:',
      options: [
        '1º de janeiro de 2026, pois o IPVA submete-se exclusivamente à anterioridade anual, dispensando a noventena.',
        '15 de fevereiro de 2026, em respeito exclusivo à anterioridade nonagesimal (90 dias).',
        '1º de janeiro de 2027, em decorrência da dupla contagem sucessiva.',
        '15 de novembro de 2025, de imediato, por ser tributo real.',
        '13 de fevereiro de 2026 (90 dias contados da publicação), pois o IPVA submete-se à anterioridade anual e nonagesimal cumulativamente.'
      ],
      correctAnswer: 4,
      explanation: 'Gabarito: E. A majoração de alíquota do IPVA sujeita-se tanto à Anterioridade de Exercício quanto à Anterioridade Nonagesimal (Art. 150, § 1º da CF/88). Como 90 dias contados de 15/11/2025 recaem em 13/02/2026, a nova alíquota só pode ser cobrada a partir dessa data!'
    }
  ],

  // ── Aula 04: Imunidades Tributárias (Art. 150, VI da CF/88) ────────────────
  4: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Imunidade Recíproca e Empresas Estatais',
      type: 'multiple',
      statement: 'Acerca da Imunidade Tributária Recíproca (Art. 150, VI, "a" da CF/88) e da jurisprudência consolidada do STF, assinale a afirmativa correta:',
      options: [
        'Aplica-se irrestritamente a qualquer sociedade de economia mista, ainda que atue em regime de livre concorrência visando à distribuição de lucros a acionistas privados.',
        'Estende-se às empresas públicas prestadoras de serviços públicos próprios do Estado de prestação obrigatória e exclusiva em regime não concorrencial, como a Empresa Brasileira de Correios e Telégrafos (ECT).',
        'Alcança a cobrança de taxas de serviços divisíveis e contribuições de melhoria devidas entre entes federados.',
        'Impede que a União tribute a renda auferida por particulares em aplicações financeiras em títulos públicos estaduais.',
        'Veda que o Município cobre IPTU do locatário particular que ocupa imóvel de propriedade da União.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O STF pacificou que a imunidade recíproca alcança empresas públicas e sociedades de economia mista que prestem serviço público de prestação obrigatória pelo Estado, de forma exclusiva e sem intuito de distribuição de lucros aos acionistas concorrenciais (RE 407.688 - ECT).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-CE (2021)',
      topic: 'Imunidade Musical e Cultural (Art. 150, VI, e)',
      type: 'tf',
      statement: 'A imunidade tributária concedida aos fonogramas e videofonogramas musicais produzidos no Brasil contendo obras de autores brasileiros alcança todos os tributos da cadeia produtiva, inclusive o Imposto sobre a Renda dos artistas e as contribuições sociais sobre a folha de salários.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. O Art. 150, VI da CF/88 estabelece imunidade exclusivamente para IMPOSTOS. Não alcança taxas nem contribuições sociais. Além disso, recai sobre a mídia/obra física ou digital, e não sobre o IRPF dos músicos ou contribuições previdenciárias.'
    },
    {
      id: 3,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)',
      topic: 'Imunidade de Livros, Jornais e Periódicos (Art. 150, VI, d)',
      type: 'multiple',
      statement: 'O Supremo Tribunal Federal, ao julgar o Tema 593 da Repercussão Geral (Súmula Vinculante nº 57), decidiu que a imunidade tributária do Art. 150, VI, "d" da CF/88:',
      options: [
        'Aplica-se exclusivamente aos livros impressos em papel fabricado em território nacional.',
        'Abrange os livros eletrônicos (e-books) e os aparelhos leitores de livros digitais (e-readers) exclusivamente dedicados a essa função.',
        'Estende-se aos serviços de veiculação publicitária contratados em sítios eletrônicos de notícias na internet.',
        'Não alcança os periódicos e revistas científicas distribuídos exclusivamente em formato PDF.',
        'Permite a incidência de ISS sobre a cessão de direitos autorais de obras literárias.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Súmula Vinculante 57 do STF: "A imunidade tributária constante do art. 150, VI, d, da CF/88 aplica-se ao livro eletrônico (e-book) e aos suportes exclusivamente utilizados para fixá-lo, como leitores de livros digitais (e-readers)".'
    }
  ],

  // ── Aula 08: Lançamento Tributário e Crédito Tributário ─────────────────────
  8: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Modalidades de Lançamento (Art. 147 a 150 do CTN)',
      type: 'multiple',
      statement: 'No Direito Tributário brasileiro, o lançamento por homologação (ou autolançamento) caracteriza-se por ocorrer quanto aos tributos cuja legislação atribua ao sujeito passivo o dever de antecipar o pagamento sem prévio exame da autoridade administrativa. São exemplos típicos de tributos lançados por homologação:',
      options: [
        'IPTU, IPVA e taxas de fiscalização urbana.',
        'ICMS, IPI, PIS, COFINS e Imposto de Renda.',
        'ITCMD, Contribuição de Melhoria e IPTU.',
        'Imposto de Importação e Imposto de Exportação.',
        'Taxas judiciárias e custas processuais cartorárias.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O ICMS, IPI, PIS, COFINS e IR são os maiores exemplos de tributos sujeitos a lançamento por homologação (Art. 150 do CTN): o contribuinte apura, declara e paga antecipadamente, cabendo ao Fisco homologar expressa ou tacitamente no prazo decadencial de 5 anos.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL (2020)',
      topic: 'Lançamento de Ofício (Art. 149 do CTN)',
      type: 'tf',
      statement: 'A autoridade administrativa deve efetuar o lançamento de ofício quando o sujeito passivo, embora obrigado a prestar declaração prévia, deixar de fazê-lo no prazo estabelecido na legislação tributária.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 149, II do CTN: O lançamento é efetuado e revisto de ofício pela autoridade administrativa quando a declaração não seja prestada por quem de direito, no prazo e na forma da legislação tributária.'
    }
  ],

  // ── Aula 09: Suspensão da Exigibilidade do Crédito Tributário ───────────────
  9: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Causas de Suspensão (Art. 151 do CTN)',
      type: 'multiple',
      statement: 'O Artigo 151 do Código Tributário Nacional elenca de forma taxativa as hipóteses que suspendem a exigibilidade do crédito tributário. Assinale a opção que indica EXCLUSIVAMENTE causas de suspensão:',
      options: [
        'Moratória, depósito do seu montante integral e parcelamento.',
        'Compensação, transação e remissão.',
        'Prescrição, decadência e pagamento antecipado.',
        'Isenção, anistia e conversão de depósito em renda.',
        'Dação em pagamento de bens imóveis, consignação em pagamento e liminar em mandado de segurança.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 151 do CTN (Mnemônico MODELOPA): MO (moratória), DE (depósito integral), RE/IM (reclamações e recursos administrativos), LI (liminar em mandado de segurança), TU (tutela de urgência) e PA (parcelamento).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'Depósito do Montante Integral',
      type: 'tf',
      statement: 'Para que ocorra a suspensão da exigibilidade do crédito tributário pela via do depósito, este deve ser realizado em dinheiro e pelo montante integral do crédito exigido pelo Fisco, não se admitindo a penhora de bens ou fiança bancária como equivalente para esse fim específico no CTN.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Súmula 112 do STJ: "O depósito somente suspende a exigibilidade do crédito tributário se for em dinheiro e integral". Fiança bancária ou seguro-garantia garantem a execução, mas não suspendem a exigibilidade na esfera administrativa pelo Art. 151, II.'
    }
  ],

  // ── Aula 15: Impostos Estaduais: ICMS (LC 87/96 e CF/88) ────────────────────
  15: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'ICMS - Não Cumulatividade e Diferencial de Alíquota (DIFAL)',
      type: 'multiple',
      statement: 'Nas operações interestaduais que destinem bens e serviços a consumidor final não contribuinte do ICMS localizado no Estado da Bahia, a cobrança do Diferencial de Alíquotas (DIFAL), após a edição da Emenda Constitucional nº 87/2015 e da Lei Complementar nº 190/2022, cabe:',
      options: [
        'Integralmente ao Estado de origem remetente da mercadoria.',
        'Ao Estado da Bahia (Estado de destino), que receberá a diferença entre a alíquota interna baiana e a alíquota interestadual.',
        'Partilhado em 50% para o Estado remetente e 50% para a Bahia em caráter perpétuo.',
        'Exclusivamente à União mediante recolhimento de Fundo de Participação.',
        'Ao Município baiano onde reside o destinatário não contribuinte.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Conforme o Art. 155, § 2º, VII e VIII da CF/88 (redação da EC 87/2015) e a LC 190/2022, na operação interestadual para consumidor final (contribuinte ou não), o imposto correspondente à diferença entre a alíquota interna do Estado destinatário e a alíquota interestadual cabe ao Estado onde estiver localizado o destinatário do bem/serviço (Estado da Bahia).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA (2019)',
      topic: 'ICMS - Princípio da Não Cumulatividade (LC 87/96)',
      type: 'tf',
      statement: 'O ICMS é não cumulativo, compensando-se o que for devido em cada operação relativa à circulação de mercadorias ou prestação de serviços com o montante cobrado nas anteriores pelo mesmo ou outro Estado ou pelo Distrito Federal.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 155, § 2º, I da CF/88 e Art. 19 da LC 87/1996 (Lei Kandir).'
    }
  ]
};
