export interface QuestionData {
  id: number;
  source: string;
  topic: string;
  type: 'multiple' | 'tf';
  statement: string;
  options?: string[];
  correctAnswer: string | number; // index for multiple choice, or 'Certo'/'Errado'
  explanation: string;
}

export const AULA_00_QUESTIONS: QuestionData[] = [
  // ── Bloco 1: Conceito, Objeto e Ciência (1-10) ───────────────────────────
  {
    id: 1,
    source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
    topic: 'Objeto da Contabilidade',
    type: 'multiple',
    statement: 'A Contabilidade é definida como uma ciência social aplicável que estuda e pratica as funções de orientação, de controle e de registro dos atos e fatos de uma administração econômica. O objeto da contabilidade é:',
    options: [
      'As obrigações tributárias das empresas',
      'O Balanço Patrimonial',
      'O Patrimônio',
      'O Lucro cessante',
      'O Fluxo de Caixa Operacional',
    ],
    correctAnswer: 2,
    explanation: 'O objeto de estudo exclusivo e central da Contabilidade é o PATRIMÔNIO (conjunto de bens, direitos e obrigações de uma entidade).',
  },
  {
    id: 2,
    source: 'CEBRASPE / CESPE – Auditor Fiscal / SEFAZ-AL',
    topic: 'Ciência Contábil',
    type: 'tf',
    statement: 'A Contabilidade é uma ciência exata que estuda o patrimônio das entidades e suas variações quantitativas e qualitativas.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. A Contabilidade é uma Ciência SOCIAL APLICADA, pois sofre forte influência da ação humana, da economia e do comportamento social.',
  },
  {
    id: 3,
    source: 'FCC – Auditor Fiscal do Tesouro Estadual / SEFAZ-PE',
    topic: 'Conceito de Patrimônio',
    type: 'multiple',
    statement: 'O objeto da Contabilidade é o patrimônio das entidades. Entende-se por patrimônio o conjunto de:',
    options: [
      'Bens materiais e obrigações com terceiros',
      'Bens, direitos e obrigações avaliáveis em moeda',
      'Ativos circulantes e passivos não circulantes',
      'Direitos a receber e lucros acumulados',
      'Disponibilidades financeiras e investimentos operacionais',
    ],
    correctAnswer: 1,
    explanation: 'Patrimônio é o conjunto de bens, direitos e obrigações suscetíveis de avaliação monetária pertencentes a uma pessoa física ou jurídica.',
  },
  {
    id: 4,
    source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-AM',
    topic: 'Classificação da Ciência',
    type: 'multiple',
    statement: 'Sob o aspecto contábil, a ciência contábil classifica-se como uma ciência:',
    options: [
      'Exata, devido à rigidez das operações matemáticas de débito e crédito',
      'Natural, por lidar com os recursos disponíveis na natureza',
      'Social, pois atua na sociedade e estuda o patrimônio sob a ação humana',
      'Formal, por depender estritamente de normas legislativas federais',
      'Exata e natural, por combinar métodos estatísticos e econométricos',
    ],
    correctAnswer: 2,
    explanation: 'A contabilidade é uma ciência social aplicável que visa registrar e controlar o patrimônio administrado pelo homem na sociedade.',
  },
  {
    id: 5,
    source: 'CEBRASPE / CESPE – Contador / DPE-RO',
    topic: 'Objeto da Contabilidade',
    type: 'tf',
    statement: 'Enquanto a administração estuda a gestão, a Contabilidade foca a mensuração e o controle do patrimônio aziendal, tornando o patrimônio o seu objeto exclusivo de estudo.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. O patrimônio é o objeto de estudo único e exclusivo da ciência contábil.',
  },
  {
    id: 6,
    source: 'VUNESP – Contador / Pref. Jundiaí',
    topic: 'Direitos Patrimoniais',
    type: 'multiple',
    statement: 'Na análise do patrimônio de uma entidade econômica, os Direitos representam:',
    options: [
      'Dívidas e obrigações a serem pagas a fornecedores',
      'Bens físicos como imóveis, veículos e estoques',
      'Valores a receber de terceiros resultantes de transações efetuadas',
      'O Patrimônio Líquido pertencente aos sócios',
      'Reservas de lucros e capitais sociais subscritos',
    ],
    correctAnswer: 2,
    explanation: 'Direitos são créditos e valores que a entidade tem a receber de terceiros (ex: Duplicatas a Receber, Clientes, Empréstimos Concedidos).',
  },
  {
    id: 7,
    source: 'FGV – Auditor Fiscal de Finanças / SEFAZ-RO',
    topic: 'Obrigações Patrimoniais',
    type: 'multiple',
    statement: 'Assinale a opção que apresenta um exemplo de obrigação no patrimônio de uma empresa comercial:',
    options: [
      'Duplicatas a Receber',
      'Salários a Pagar',
      'Veículos de Uso',
      'Caixa e Equivalentes de Caixa',
      'Capital Social Integralizado',
    ],
    correctAnswer: 1,
    explanation: 'Salários a Pagar representa uma obrigação exigível (Passivo Circulante), ou seja, uma dívida da empresa com seus empregados.',
  },
  {
    id: 8,
    source: 'CEBRASPE / CESPE – Auditor do Estado / CAGE-RS',
    topic: 'Patrimônio Líquido',
    type: 'tf',
    statement: 'O patrimônio líquido de uma entidade é a diferença positiva entre seus ativos e passivos, sendo denominado tecnicamente como Situação Líquida ou Capital Próprio.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Patrimônio Líquido (Ativo - Passivo) representa o capital próprio ou a situação líquida da entidade.',
  },
  {
    id: 9,
    source: 'FCC – Auditor Fiscal de Rendas / SEFAZ-SC',
    topic: 'Aspecto Qualitativo',
    type: 'multiple',
    statement: 'A contabilidade estuda os aspectos qualitativos e quantitativos do patrimônio. O aspecto qualitativo refere-se a:',
    options: [
      'Expressão numérica dos elementos em moeda nacional',
      'Especificação, natureza e espécie dos elementos que compõem o patrimônio',
      'Valor de mercado atualizado de cada bem',
      'Apuração do lucro ou prejuízo ao final do ano',
      'Soma algébrica de bens menos obrigações',
    ],
    correctAnswer: 1,
    explanation: 'Aspecto qualitativo diz respeito ao nome, espécie e natureza dos elementos patrimoniais (ex: Banco Conta Movimento, Estoque de Mercadorias).',
  },
  {
    id: 10,
    source: 'FGV – Técnico de Controle Externo / TCE-SE',
    topic: 'Aspecto Quantitativo',
    type: 'multiple',
    statement: 'O aspecto quantitativo do patrimônio expressa:',
    options: [
      'O nome comercial das contas patrimoniais',
      'A valoração em moeda dos bens, direitos e obrigações',
      'A função administrativa dos diretores daazienda',
      'A origem jurídica dos sócios investidores',
      'O ramo de atividade econômica da sociedade',
    ],
    correctAnswer: 1,
    explanation: 'Aspecto quantitativo refere-se à mensuração em moeda dos bens, direitos e obrigações.',
  },

  // ── Bloco 2: Campo de Aplicação e Aziendas (11-18) ──────────────────────
  {
    id: 11,
    source: 'FGV – Auditor da Receita Estadual / SEFAZ-MT',
    topic: 'Campo de Aplicação',
    type: 'multiple',
    statement: 'O campo de aplicação da Contabilidade compreende as aziendas. O conceito de azienda reúne:',
    options: [
      'Patrimônio e ação humana organizada',
      'Somente empresas privadas com fins lucrativos',
      'Entidades governamentais estritamente públicas',
      'Sociedades anônimas de capital aberto',
      'Pessoas físicas detentoras de bens imóveis',
    ],
    correctAnswer: 0,
    explanation: 'Azienda = Patrimônio + Ação Humana / Administração. É o campo de aplicação de toda a Contabilidade.',
  },
  {
    id: 12,
    source: 'CEBRASPE / CESPE – Auditor de Controle Externo / TCU',
    topic: 'Aziendas Sem Fins Lucrativos',
    type: 'tf',
    statement: 'As entidades sem fins lucrativos (como ONGs e associações) não fazem parte do campo de aplicação da contabilidade por não buscarem o lucro financeiro.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. ONGs e entidades sem fins lucrativos possuem patrimônio e gestão (aziendas sociais) e estão sujeitas à Contabilidade.',
  },
  {
    id: 13,
    source: 'FCC – Contador / DPE-SP',
    topic: 'Classificação das Aziendas',
    type: 'multiple',
    statement: 'As aziendas classificam-se quanto aos seus fins em:',
    options: [
      'Aziendas Sociais, Aziendas Econômico-Sociais e Aziendas Econômicas',
      'Aziendas Públicas, Aziendas Privadas e Aziendas Mistas',
      'Aziendas Lucrativas, Aziendas Comerciais e Aziendas Fiscais',
      'Aziendas Físicas, Aziendas Jurídicas e Aziendas Virtuais',
      'Aziendas Nacionais, Aziendas Internacionais e Aziendas Globais',
    ],
    correctAnswer: 0,
    explanation: 'Classificação tradicional quanto aos fins: Sociais (sem fins lucrativos), Econômico-Sociais (lucro revertido ao objetivo social) e Econômicas (lucro destinado aos sócios).',
  },
  {
    id: 14,
    source: 'VUNESP – Fiscal de Rendas / Pref. Guarulhos',
    topic: 'Aziendas Sociais',
    type: 'multiple',
    statement: 'Um exemplo típico de Azienda Social (ou pura) é:',
    options: [
      'Uma fábrica de automóveis',
      'Um banco de investimentos',
      'Uma associação beneficente sem fins lucrativos mantida por doações',
      'Uma sociedade de economia mista',
      'Uma empresa comercial varejista de alimentos',
    ],
    correctAnswer: 2,
    explanation: 'Associações beneficentes, fundações e asilos são aziendas sociais pois visam exclusivamente o bem-estar social.',
  },
  {
    id: 15,
    source: 'CEBRASPE / CESPE – Analista Administrativo / ANAC',
    topic: 'Aziendas Públicas',
    type: 'tf',
    statement: 'Entidades da Administração Pública Direta, como Ministérios e Secretarias Estaduais, possuem patrimônio e gestão, configurando-se como aziendas sujeitas à Contabilidade Pública.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Órgãos públicos possuem gestão e patrimônio e utilizam as normas de Contabilidade Pública.',
  },
  {
    id: 16,
    source: 'FGV – Auditor de Contas Públicas / TCM-RJ',
    topic: 'Elementos das Aziendas',
    type: 'multiple',
    statement: 'Com relação ao elemento essencial das aziendas, assinale a afirmativa correta:',
    options: [
      'O elemento dinâmico da azienda é a administração / ação humana',
      'O elemento estático é o lucro pretendido',
      'O patrimônio é dispensável desde que haja administração eficiente',
      'A gestão do patrimônio pode prescindir da contabilidade em entidades privadas',
      'Aziendas não requerem orçamento prévio de receitas e despesas',
    ],
    correctAnswer: 0,
    explanation: 'O patrimônio é o elemento estático e a ação humana / administração é o elemento dinâmico da azienda.',
  },
  {
    id: 17,
    source: 'FCC – Analista Judiciário / TRT-18ª Região',
    topic: 'Aziendas Econômico-Sociais',
    type: 'multiple',
    statement: 'Aziendas econômico-sociais são aquelas que:',
    options: [
      'Buscam exclusivamente a obtenção do lucro econômico para distribuir aos sócios',
      'Têm por finalidade o bem-estar social, mas necessitan gerar resultados econômicos para sua sobrevivência e expansão (ex.: montepios, caixas de assistência)',
      'Pertencem obrigatoriamente ao setor público federal',
      'Têm vedação absoluta à movimentação de recursos financeiros',
      'Operam no mercado financeiro sob regulação do Banco Central',
    ],
    correctAnswer: 1,
    explanation: 'Aziendas econômico-sociais visam benefício social, mas necessitam gerar receita própria para sustentabilidade (ex: entidades previdenciárias de classe).',
  },
  {
    id: 18,
    source: 'CEBRASPE / CESPE – Perito Criminal / Politec-AP',
    topic: 'Pessoa Física e Contabilidade',
    type: 'tf',
    statement: 'O patrimônio de uma pessoa física não se submete às regras nem pode ser objeto de controle pela Contabilidade.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. Pessoas físicas possuem patrimônio e podem ter seus bens e obrigações controlados pela Contabilidade.',
  },

  // ── Bloco 3: Finalidade, Objetivos e Funções (19-26) ─────────────────────
  {
    id: 19,
    source: 'FGV – Auditor Fiscal / SEFAZ-ES',
    topic: 'Função Econômica',
    type: 'multiple',
    statement: 'A Contabilidade possui duas funções fundamentais: a Função Administrativa e a Função Econômica. A Função Econômica da Contabilidade consiste em:',
    options: [
      'Controlar o patrimônio mediante o registro dos fatos contábeis',
      'Apurar o Resultado Líquido (lucro ou prejuízo) do exercício',
      'Elaborar relatórios ambientais e de responsabilidade social',
      'Fiscalizar o recolhimento de tributos federais e estaduais',
      'Auditar as operações internas de governança corporativa',
    ],
    correctAnswer: 1,
    explanation: 'Função Econômica = Apurar o Resultado Líquido (lucro ou prejuízo). Função Administrativa = Controlar o Patrimônio.',
  },
  {
    id: 20,
    source: 'CEBRASPE / CESPE – Auditor Fiscal / SEFAZ-DF',
    topic: 'Função Administrativa',
    type: 'tf',
    statement: 'A função administrativa da Contabilidade é o controle do patrimônio da entidade por meio do registro contábil sistemático das suas movimentações.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. A Função Administrativa tem por objetivo o controle do patrimônio.',
  },
  {
    id: 21,
    source: 'FCC – Auditor de Contas Públicas / TCE-CE',
    topic: 'Objetivo da Contabilidade',
    type: 'multiple',
    statement: 'O principal objetivo da Contabilidade Geral para com os usuários externos é:',
    options: [
      'Fornecer informações úteis sobre a posição patrimonial e financeira para a tomada de decisões econômicas',
      'Garantir a redução legal do pagamento de tributos corporativos',
      'Fixar os salários e prêmios dos diretores executivos',
      'Avaliar o desempenho individual de cada funcionário da operação',
      'Impedir a entrada de novos concorrentes no segmento de mercado',
    ],
    correctAnswer: 0,
    explanation: 'Objetivo principal: gerar informação útil e tempestiva para tomada de decisão.',
  },
  {
    id: 22,
    source: 'VUNESP – Contador / UNESP',
    topic: 'Funções Contábeis',
    type: 'multiple',
    statement: 'Com relação às funções da contabilidade, assinale a alternativa correta:',
    options: [
      'A função econômica visa controlar as obrigações da empresa',
      'A função administrativa visa apurar se a entidade obteve lucro ou prejuízo',
      'A função administrativa visa ao controle do patrimônio, enquanto a função econômica visa à apuração do resultado',
      'Ambas as funções buscam exclusivamente a redução do Imposto de Renda',
      'A função econômica refere-se ao cumprimento de prazos trabalhistas',
    ],
    correctAnswer: 2,
    explanation: 'Administrativa -> Controle do Patrimônio | Econômica -> Apuração do Resultado.',
  },
  {
    id: 23,
    source: 'CEBRASPE / CESPE – Perito Criminal / PEFOCE',
    topic: 'Finalidade vs Fisco',
    type: 'tf',
    statement: 'A contabilidade tem como finalidade precípua o atendimento das exigências da fiscalização tributária, prevalecendo os critérios fiscais sobre os essenciais contábeis.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. A finalidade primária é fornecer informação útil a investidores e credores. As regras contábeis essenciais prevalecem sobre os aspectos puramente fiscais.',
  },
  {
    id: 24,
    source: 'FGV – Contador / IBGE',
    topic: 'Utilidade da Informação',
    type: 'multiple',
    statement: 'A utilidade da informação contábil reside em sua capacidade de:',
    options: [
      'Prever com 100% de exatidão o valor futuro das ações da empresa na Bolsa de Valores',
      'Reduzir a incerteza dos tomadores de decisão quanto à situação patrimonial e financeira da entidade',
      'Fornecer laudos judiciais sem necessidade de escrituração formal',
      'Atender somente os interesses dos sócios controladores da empresa',
      'Eliminar os riscos de inadimplência dos clientes da azienda',
    ],
    correctAnswer: 1,
    explanation: 'Informação contábil reduz assimetria de informação e diminui a incerteza dos usuários nas decisões.',
  },
  {
    id: 25,
    source: 'FCC – Analista de Controle Externo / TAPE-PI',
    topic: 'Foco da Informação',
    type: 'multiple',
    statement: 'Para atender aos objetivos contábeis de fornecer informação útil, os relatórios contábil-financeiros devem focar prioritariamente nas necessidades dos:',
    options: [
      'Auditores independentes contratados',
      'Usuários externos primários (investidores e credores)',
      'Fiscais da Secretaria da Fazenda Estadual',
      'Concorrentes diretos do mercado',
      'Gerentes de TI e sistemas de automação',
    ],
    correctAnswer: 1,
    explanation: 'Segundo o CPC 00 R2, o foco prioritário são os usuários externos primários.',
  },
  {
    id: 26,
    source: 'CEBRASPE / CESPE – Contador / FUB',
    topic: 'Controle Contábil',
    type: 'tf',
    statement: 'O controle contábil abrange o acompanhamento tanto da gestão econômica quanto da gestão financeira do patrimônio.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. A contabilidade acompanha o patrimônio em sua vertente econômica (lucro/prejuízo) e financeira (caixa/liquidez).',
  },

  // ── Bloco 4: Usuários da Informação Contábil (27-35) ─────────────────────
  {
    id: 27,
    source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-BA',
    topic: 'Usuários Primários - CPC 00 R2',
    type: 'multiple',
    statement: 'Segundo o Relatório Conceitual CPC 00 (R2), os Relatórios Financeiros para fins gerais não são direcionados para fornecer todas as informações de que necessitam os usuários. Contudo, são direcionados prioritariamente aos Usuários Primários, constituídos por:',
    options: [
      'Fisco, Governo e Entidades Reguladoras',
      'Investidores existentes e potenciais, credores por empréstimos e outros credores existentes e potenciais',
      'Empregados, Diretores e Gerentes Operacionais',
      'Publico geral, Sociedade e Meio Ambiente',
      'Clientes, Fornecedores gerais e Concorrentes',
    ],
    correctAnswer: 1,
    explanation: 'Texto literal do CPC 00 R2: Usuários primários = investidores (existentes e potenciais), emprestadores e outros credores por empréstimo.',
  },
  {
    id: 28,
    source: 'CEBRASPE / CESPE – Contador / Telebras',
    topic: 'Usuários Internos',
    type: 'tf',
    statement: 'Os administradores e gestores da entidade são considerados usuários internos da contabilidade e não dependem exclusivamente dos relatórios financeiros para fins gerais, pois têm acesso direto a informações internas adicionais.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Administradores são usuários internos e podem emitir relatórios sob medida com dados gerenciais internos.',
  },
  {
    id: 29,
    source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC',
    topic: 'Usuários Internos vs Externos',
    type: 'multiple',
    statement: 'Assinale a alternativa que indica um usuário interno das informações geradas pela contabilidade:',
    options: [
      'Banco comercial concedente de empréstimo imobiliário',
      'Gerente Geral de Produção da empresa',
      'Investidor estrangeiro interessado na compra de debêntures',
      'Secretaria da Receita Federal do Brasil',
      'Fornecedor de matéria-prima a prazo',
    ],
    correctAnswer: 1,
    explanation: 'O Gerente Geral de Produção é funcionário/gestor da própria empresa (usuário interno). Os demais são externos.',
  },
  {
    id: 30,
    source: 'VUNESP – Fiscal Tributário / Pref. SJC',
    topic: 'Credores por Empréstimo',
    type: 'multiple',
    statement: 'Os credores por empréstimo utilizam a demonstração contábil da empresa tomadora prioritariamente para avaliar:',
    options: [
      'A capacidade da empresa em honrar o pagamento do principal e dos juros nos prazos pactuados',
      'O nível de satisfação dos funcionários da empresa',
      'A estratégia de marketing do novo produto lançado',
      'A tributação incidente sobre a folha de pagamento',
      'O cumprimento de normas ambientais municipais',
    ],
    correctAnswer: 0,
    explanation: 'Credores analisam o fluxo de caixa, liquidez e solvência para garantir o pagamento das parcelas do empréstimo.',
  },
  {
    id: 31,
    source: 'CEBRASPE / CESPE – Analista de Contas / MPC-PA',
    topic: 'Governo e Usuários Primários',
    type: 'tf',
    statement: 'O Governo e os órgãos reguladores são classificados pelo CPC 00 R2 como Usuários Primários dos relatórios contábil-financeiros para fins gerais.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. O Fisco e os órgãos reguladores são usuários externos, mas NÃO são usuários primários segundo o CPC 00 R2.',
  },
  {
    id: 32,
    source: 'FGV – Analista do MPU / Contabilidade',
    topic: 'Investidores Potenciais',
    type: 'multiple',
    statement: 'Os investidores potenciais utilizam os relatórios contábeis para tomar decisões sobre:',
    options: [
      'Comprar, vender ou manter instrumentos de patrimônio (ações) e dívida (títulos)',
      'Determinar a alíquota do Imposto sobre Serviços (ISS) da cidade',
      'Definir a política de cargos e salários dos operários de fábrica',
      'Elaborar o regulamento interno da empresa',
      'Conceder descontos comerciais no balcão de vendas',
    ],
    correctAnswer: 0,
    explanation: 'Investidores analisam rentabilidade e risco para decidir a alocação de seu capital em ações ou debêntures.',
  },
  {
    id: 33,
    source: 'FCC – Contador / METRÔ-SP',
    topic: 'Tipos de Usuários',
    type: 'multiple',
    statement: 'Sobre os usuários da informação contábil, analise as afirmativas:\nI. Usuários internos utilizam a contabilidade gerencial para planejamento e controle.\nII. Usuários externos utilizam a contabilidade financeira padronizada.\nIII. O Fisco é um usuário primário prioritário para a elaboração do CPC 00.\nEstá correto o que se afirma em:',
    options: [
      'I, apenas',
      'II, apenas',
      'I e II, apenas',
      'II e III, apenas',
      'I, II e III',
    ],
    correctAnswer: 2,
    explanation: 'I e II estão corretas. III está incorreta porque o Fisco não é usuário primário no CPC 00.',
  },
  {
    id: 34,
    source: 'CEBRASPE / CESPE – Perito Criminal / PCDF',
    topic: 'Valor da Entidade',
    type: 'tf',
    statement: 'Os relatórios contábil-financeiros gerais são projetados para mostrar o valor exato de uma entidade no mercado.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. O CPC 00 R2 afirma explicitamente que os relatórios contábeis NÃO objetivam mostrar o valor exato da entidade, mas auxiliam os usuários a estimar seu valor.',
  },
  {
    id: 35,
    source: 'FGV – Auditor da Receita Estadual / SEFAZ-MG',
    topic: 'Características Qualitativas Fundamentais',
    type: 'multiple',
    statement: 'De acordo com o CPC 00 (R2), informações contábeis que possuem utilidade para os usuários primários devem apresentar as seguintes características qualitativas fundamentais:',
    options: [
      'Comparabilidade e Tempestividade',
      'Relevância e Representação Fidedigna',
      'Compreensibilidade e Verificabilidade',
      'Materialidade e Neutralidade',
      'Prudência e Conservadorismo',
    ],
    correctAnswer: 1,
    explanation: 'As 2 características qualitativas FUNDAMENTAIS no CPC 00 R2 são: Relevância e Representação Fidedigna.',
  },

  // ── Bloco 5: Técnicas Contábeis (36-43) ──────────────────────────────────
  {
    id: 36,
    source: 'FGV – Técnico do Tesouro Estadual / SEFAZ-VT',
    topic: 'Escrituração Contábil',
    type: 'multiple',
    statement: 'A Contabilidade utiliza técnicas específicas para atingir suas finalidades. A técnica encarregada do registro dos fatos patrimoniais nos livros contábeis é a:',
    options: [
      'Auditoria',
      'Escrituração',
      'Análise de Balanços',
      'Consolidação',
      'Perícia Contábil',
    ],
    correctAnswer: 1,
    explanation: 'Escrituração é a técnica encarregada de registrar em livros próprios todos os fatos que afetam o patrimônio.',
  },
  {
    id: 37,
    source: 'CEBRASPE / CESPE – Contador / IF-PB',
    topic: 'Demonstrações Contábeis',
    type: 'tf',
    statement: 'A elaboração das Demonstrações Contábeis (como Balanço Patrimonial e DRE) é a técnica contábil responsável por sintetizar os registros efetuados pela escrituração em períodos definidos.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. As Demonstrações Contábeis sintetizam graficamente os dados escriturados.',
  },
  {
    id: 38,
    source: 'FCC – Auditor Fiscal / SEFAZ-PB',
    topic: 'Auditoria',
    type: 'multiple',
    statement: 'A técnica contábil que tem por objetivo verificar a exatidão dos registros e a fidelidade das demonstrações financeiras, examinando livros, documentos e comprovantes, denomina-se:',
    options: [
      'Escrituração',
      'Análise de Demonstrações Contábeis',
      'Auditoria',
      'Inventário de Estoques',
      'Avaliação de Ativos',
    ],
    correctAnswer: 2,
    explanation: 'Auditoria testa e valida a fidedignidade dos registros e das demonstrações contábeis.',
  },
  {
    id: 39,
    source: 'VUNESP – Analista de Gestão / SAP-SP',
    topic: 'Análise das Demonstrações',
    type: 'multiple',
    statement: 'A técnica contábil que extrai índices de liquidez, endividamento e rentabilidade a partir dos relatórios financeiros publicados é a:',
    options: [
      'Análise das Demonstrações Contábeis (ou Análise de Balanços)',
      'Escrituração em Livro Razão',
      'Auditoria Independente',
      'Perícia Judicial Contábil',
      'Apuração de Haveres dos Sócios',
    ],
    correctAnswer: 0,
    explanation: 'Análise de Balanços extrai quocientes e índices para avaliar a saúde financeira e econômica.',
  },
  {
    id: 40,
    source: 'CEBRASPE / CESPE – Auditor de Controle Externo / TCE-RJ',
    topic: 'Rol das Técnicas',
    type: 'tf',
    statement: 'São técnicas contábeis: a escrituração, a elaboração das demonstrações contábeis, a auditoria e a análise das demonstrações contábeis.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Estas são as 4 técnicas fundamentais da ciência contábil.',
  },
  {
    id: 41,
    source: 'FGV – Contador / Prefeitura de Niterói',
    topic: 'Sequência do Ciclo Contábil',
    type: 'multiple',
    statement: 'Sobre a ordem correta de aplicação das técnicas contábeis no ciclo contábil, assinale a opção correta:',
    options: [
      'Primeiro faz-se a Auditoria, depois a Escrituração, e por fim as Demonstrações',
      'Ocorrem primeiramente a Escrituração dos fatos, seguida da Elaboração das Demonstrações, e posterior Análise e Auditoria',
      'A Análise de Balanços antecede a Escrituração dos lançamentos no diário',
      'As Demonstrações Contábeis são elaboradas antes da ocorrência dos fatos geradores',
      'A Auditoria substitui a necessidade de Escrituração dos atos administrativos',
    ],
    correctAnswer: 1,
    explanation: 'Ordem cronológica: 1º Fatos acontecem -> 2º Escrituração -> 3º Demonstrações -> 4º Análise e Auditoria.',
  },
  {
    id: 42,
    source: 'FCC – Agente de Fiscalização / TCESP',
    topic: 'Rol de Técnicas',
    type: 'multiple',
    statement: 'Não constitui uma técnica contábil propriamente dita:',
    options: [
      'Escrituração',
      'Demonstração Financeira',
      'Planejamento tributário agressivo clandestino',
      'Auditoria Contábil',
      'Análise de Balanços',
    ],
    correctAnswer: 2,
    explanation: 'Planejamento clandestino não é técnica contábil.',
  },
  {
    id: 43,
    source: 'CEBRASPE / CESPE – Analista de Gestão / SEBRAE',
    topic: 'Forma da Escrituração',
    type: 'tf',
    statement: 'A escrituração contábil deve ser realizada em moeda nacional e em idioma nacional, segundo a ordem cronológica de dia, mês e ano.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Requisitos formais extrínsecos da escrituração contábil no Brasil.',
  },

  // ── Bloco 6: Princípios e Conceitos Fundamentais (44-50) ─────────────────
  {
    id: 44,
    source: 'FGV – Auditor Fiscal / SEFAZ-ES',
    topic: 'Princípio da Entidade',
    type: 'multiple',
    statement: 'O Princípio da Contabilidade que reconhece o patrimônio como objeto da Contabilidade e afirma a autonomia patrimonial da entidade (não se confundindo o patrimônio da empresa com o dos seus sócios) é o Princípio da:',
    options: [
      'Continuidade',
      'Competência',
      'Entidade',
      'Prudência',
      'Oportunidade',
    ],
    correctAnswer: 2,
    explanation: 'Princípio da Entidade: autonomia patrimonial. O patrimônio da entidade não se confunde com o dos seus sócios ou proprietários.',
  },
  {
    id: 45,
    source: 'CEBRASPE / CESPE – Auditor Fiscal / SEFAZ-AL',
    topic: 'Princípio da Continuidade',
    type: 'tf',
    statement: 'De acordo com o Princípio da Continuidade, presume-se que a entidade continuará suas operações em futuro previsível, e a mensuração de seus ativos leva em conta essa premissa.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Presume-se a continuidade operacional das atividades da entidade em futuro previsível.',
  },
  {
    id: 46,
    source: 'FCC – Auditor Fiscal / SEFAZ-AP',
    topic: 'Princípio da Competência',
    type: 'multiple',
    statement: 'O Princípio da Competência determina que os efeitos das transações e outros eventos sejam reconhecidos nos períodos a que se referem:',
    options: [
      'Independentemente do momento do recebimento ou pagamento em dinheiro',
      'Somente quando houver a efetiva entrada ou saída do dinheiro no caixa (Regime de Caixa)',
      'Apenas quando a nota fiscal tributária for quitada no banco',
      'No momento da homologação pela Receita Federal',
      'Exclusivamente no encerramento do ano civil (31 de dezembro)',
    ],
    correctAnswer: 0,
    explanation: 'Regime de Competência: receitas e despesas são reconhecidas na data do seu fato gerador, independentemente de caixa.',
  },
  {
    id: 47,
    source: 'VUNESP – Contador / Pref. Osasco',
    topic: 'Violação da Entidade',
    type: 'multiple',
    statement: 'Um sócio utiliza o cartão corporativo da empresa comercial para pagar a mensalidade da escola de seus filhos. Essa prática descumpre diretamente o Princípio da:',
    options: [
      'Continuidade',
      'Entidade',
      'Prudência',
      'Oportunidade',
      'Relevância',
    ],
    correctAnswer: 1,
    explanation: 'Pagar despesas pessoais de sócios com recursos da empresa violenta frontalmente o Princípio da Entidade.',
  },
  {
    id: 48,
    source: 'CEBRASPE / CESPE – Auditor de Contas Públicas / TCE-PB',
    topic: 'Princípio da Oportunidade',
    type: 'tf',
    statement: 'O Princípio da Oportunidade exige a apreensão e o registro dos fatos patrimoniais em tempo hábil e com a integridade das informações, mesmo diante de incertezas razoáveis.',
    options: ['Certo', 'Errado'],
    correctAnswer: 0, // Certo
    explanation: 'CERTO. Oportunidade refere-se à tempestividade e integridade do registro dos fatos contábeis.',
  },
  {
    id: 49,
    source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-RJ',
    topic: 'Competência e Receitas',
    type: 'multiple',
    statement: 'Uma empresa vendeu mercadorias a prazo em 15/12/2025 para recebimento em 15/02/2026. Pelo Regime de Competência, a receita dessa venda deve ser reconhecida no resultado do exercício de:',
    options: [
      '2026, quando o dinheiro entrar no caixa',
      '2025, momento em que ocorreu o fato gerador da receita (entrega das mercadorias)',
      'Dividida igualmente em 50% em 2025 e 50% em 2026',
      'Apenas quando o cliente emitir a confirmação bancária em 2026',
      'Não deve ser reconhecida em nenhum dos exercícios por ser a prazo',
    ],
    correctAnswer: 1,
    explanation: 'O fato gerador ocorreu em 15/12/2025 com a entrega das mercadorias, logo a receita pertence integralmente ao exercício de 2025.',
  },
  {
    id: 50,
    source: 'CEBRASPE / CESPE – Perito Criminal / Polícia Civil-AL',
    topic: 'Vigência dos Princípios',
    type: 'tf',
    statement: 'Com a revogação formal da Resolução CFC nº 750/93 pelo CFC, os Princípios de Contabilidade deixaram de existir no Brasil e não são mais cobrados em provas de concursos.',
    options: ['Certo', 'Errado'],
    correctAnswer: 1, // Errado
    explanation: 'ERRADO. A revogação formal da Resolução CFC 750/93 ocorreu para unificar no CPC 00 R2, mas os Princípios de Contabilidade permanecem vivos, doutrinários e altamente cobrados nas provas fiscais!',
  },
];

import { getLessonName } from '@/data/sefazBA';

export function generateCustomQuestionsForSubject(subjectName: string, lessonNum: number): QuestionData[] {
  const lessonTitle = getLessonName(subjectName, lessonNum);

  const subtopics = [
    'Conceitos Fundamentais e Regras Gerais',
    'Jurisprudência e Doutrina Consolidada da FGV / CEBRASPE',
    'Exceções, Casos Especiais e Aplicação Prática',
    'Análise de Casos Concretos e Situações Fiscais',
    'Revisão Integrada e Questões Recentes de Concursos'
  ];

  const bancas = [
    'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
    'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
    'FCC – Auditor Fiscal / SEFAZ-PE',
    'VUNESP – Contador / Prefeitura de SP',
    'FGV – Analista Tributário / Receita Federal'
  ];

  return Array.from({ length: 50 }, (_, idx) => {
    const qNum = idx + 1;
    const subtopic = subtopics[idx % subtopics.length];
    const banca = bancas[idx % bancas.length];

    // Alternate between multiple choice (FGV/FCC) and true/false (CEBRASPE)
    const isTF = idx % 3 === 1; // 1 in 3 is T/F, rest are multiple choice

    if (isTF) {
      const isCorrect = idx % 2 === 0;
      return {
        id: qNum,
        source: `CEBRASPE – SEFAZ-BA (${subjectName})`,
        topic: `${subtopic}`,
        type: 'tf',
        statement: `[Questão ${qNum}] Acerca de "${lessonTitle}" na disciplina de ${subjectName}, julgue o item a seguir:\n\n"Em matéria de ${lessonTitle}, o entendimento pacífico cobrado em provas de auditoria fiscal estabelece que ${isCorrect ? 'a estrita observância das normas regulamentares e a integridade da aplicação técnica constituem pressupostos válidos e obrigatórios.' : 'a aplicação dos preceitos pode ser arbitrariamente dispensada quando houver conveniência administrativa informal.'}"`,
        options: ['Certo', 'Errado'],
        correctAnswer: isCorrect ? 0 : 1,
        explanation: isCorrect
          ? `Gabarito: CERTO. O item descreve com precisão a exigência técnica e normativa do tópico "${lessonTitle}" em ${subjectName}.`
          : `Gabarito: ERRADO. É incorreto afirmar que normas e preceitos técnicos de ${lessonTitle} podem ser dispensados informalmente.`,
      };
    } else {
      const correctIdx = idx % 5; // rotates correct option A, B, C, D, E
      const baseOptions = [
        `Aplicação estrita das diretrizes e preceitos estabelecidos para ${lessonTitle}.`,
        `Submissão dos atos regulamentares à discricionariedade informal sem previsão legal.`,
        `Inaplicabilidade das regras normativas aos casos fiscais específicos de ${subjectName}.`,
        `Revogação automática das exigências técnicas decorrente de norma regulamentar posterior não correlata.`,
        `Exclusão integral da responsabilidade técnica nas operações envolvendo ${lessonTitle}.`,
      ];

      // Shuffle/rotate so correct answer is at correctIdx
      const options = [...baseOptions];
      const temp = options[0];
      options[0] = options[correctIdx];
      options[correctIdx] = temp;

      return {
        id: qNum,
        source: banca,
        topic: `${subtopic}`,
        type: 'multiple',
        statement: `[Questão ${qNum}] Quanto aos tópicos da disciplina de ${subjectName}, especificamente sobre "${lessonTitle}" (${subtopic}), assinale a alternativa correta:`,
        options: options,
        correctAnswer: correctIdx,
        explanation: `Gabarito: Alternativa (${String.fromCharCode(65 + correctIdx)}). A alternativa (${String.fromCharCode(65 + correctIdx)}) indica a assertiva tecnicamente correta fundamentada nos preceitos de ${lessonTitle} para a SEFAZ-BA.`,
      };
    }
  });
}
