import { QuestionData } from '../aula00Questions';

export const CONTABILIDADE_QUESTIONS_LESSONS_5_TO_8: Record<number, QuestionData[]> = {
  // ── Aula 05: Estrutura Conceitual Básica (CPC 00 R2) ──
  5: [
    {
      id: 1,
      source: "FGV – Auditor-Fiscal da Receita Federal / RFB (2023)",
      topic: "CPC 00 (R2) – Características Qualitativas Fundamentais",
      type: "multiple",
      statement: "Segundo a Estrutura Conceitual para Relatório Financeiro (CPC 00 R2), para que a informação financeira seja útil, ela deve ser relevante e representar com fidedignidade o que se propõe a representar. Sobre essas características, assinale a afirmativa correta:",
      options: [
        "A relevância e a representação fidedigna são as duas únicas características qualitativas fundamentais.",
        "A comparabilidade e a tempestividade são classificadas como características fundamentais.",
        "A representação fidedigna exige que a informação seja imutável e aprovada por auditoria externa independente.",
        "A materialidade é uma característica qualitativa de melhoria que independe da entidade.",
        "A verificação substitui a representação fidedigna sempre que houver custo econômico excessivo."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Pelo CPC 00 (R2), as características fundamentais são apenas duas: Relevância e Representação Fidedigna. Comparabilidade, verificabilidade, tempestividade e compreensibilidade são características de melhoria."
    },
    {
      id: 2,
      source: "CEBRASPE – Auditor Federal de Controle Externo / TCU (2022)",
      topic: "CPC 00 (R2) – Prudência e Neutralidade",
      type: "tf",
      statement: "No CPC 00 (R2), o exercício da prudência apoia a neutralidade e consiste no exercício de cautela ao fazer julgamentos sob condições de incerteza, não permitindo, contudo, a superavaliação deliberada de passivos ou a subavaliação sistemática de ativos.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A prudência apoia a neutralidade e não autoriza assimetria deliberada ou criação de reservas ocultas."
    },
    {
      id: 3,
      source: "FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)",
      topic: "CPC 00 (R2) – Definição de Ativo",
      type: "multiple",
      statement: "Nos termos do CPC 00 (R2), um ativo é definido formalmente como:",
      options: [
        "Um bem corpóreo registrado na junta comercial com titularidade jurídica comprovada.",
        "Um recurso econômico presente controlado pela entidade como resultado de eventos passados.",
        "Um fluxo financeiro futuro com certeza absoluta de entrada de caixa nos próximos 12 meses.",
        "O saldo positivo resultante da soma aritmética dos direitos menos as obrigações tributárias.",
        "Qualquer desembolso autorizado pela administração para investimentos operacionais de longo prazo."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Definição do item 4.3 do CPC 00 (R2): Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados."
    },
    {
      id: 4,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "CPC 00 (R2) – Definição de Passivo",
      type: "tf",
      statement: "Para que uma entidade reconheça um passivo conforme a Estrutura Conceitual (CPC 00 R2), é indispensável que a obrigação seja presente, decorra de eventos passados e envolva a obrigação de transferir um recurso econômico.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Os 3 requisitos do passivo no CPC 00 (R2): obrigação presente, de transferir recurso econômico, resultante de evento passado."
    },
    {
      id: 5,
      source: "FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)",
      topic: "CPC 00 (R2) – Características de Melhoria",
      type: "multiple",
      statement: "Identifique a opção que reúne exclusivamente características qualitativas de melhoria segundo o CPC 00 (R2):",
      options: [
        "Relevância, Materialidade e Tempestividade.",
        "Representação Fidedigna, Neutralidade e Prudência.",
        "Comparabilidade, Verificabilidade, Tempestividade e Compreensibilidade.",
        "Essência sobre a Forma, Historicidade e Conservadorismo.",
        "Continuidade, Competência, Oportunidade e Confiabilidade."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Características de melhoria (CVTC): Comparabilidade, Verificabilidade, Tempestividade e Compreensibilidade."
    },
    {
      id: 6,
      source: "CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL (2020)",
      topic: "CPC 00 (R2) – Usuários Primários",
      type: "tf",
      statement: "Investidores existentes e potenciais, credores por empréstimos e outros credores constituem os usuários primários aos quais se destinam os relatórios financeiros para fins gerais segundo o CPC 00 (R2).",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. CPC 00, item 1.2: investidores, financiadores e outros credores externos que não podem exigir informações diretamente."
    },
    {
      id: 7,
      source: "VUNESP – Contador / Prefeitura de São Paulo (2023)",
      topic: "CPC 00 (R2) – Bases de Mensuração",
      type: "multiple",
      statement: "As bases de mensuração previstas na Estrutura Conceitual (CPC 00 R2) dividem-se em duas categorias principais: valor histórico e valor corrente. Classificam-se como bases de valor corrente:",
      options: [
        "Custo histórico amortizado e provisão para contingências.",
        "Valor justo, valor em uso (para ativos) / valor de cumprimento (para passivos) e custo corrente.",
        "Valor nominal de emissão e valor patrimonial contábil.",
        "Preço de liquidação forçada e margem líquida de lucro esperada.",
        "Custo padrão histórico e receita bruta estimada de venda."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Bases de valor corrente no CPC 00: Valor Justo, Valor em Uso/Valor de Cumprimento e Custo Corrente."
    },
    {
      id: 8,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)",
      topic: "CPC 00 (R2) – Desreconhecimento de Ativos",
      type: "tf",
      statement: "O desreconhecimento de um ativo ocorre quando a entidade perde o controle da totalidade ou de parte do ativo reconhecido, como na alienação de um bem ou na expiração dos direitos contratuais.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Desreconhecimento ocorre quando o item deixa de atender à definição de ativo (perda de controle) ou de passivo (obrigação extinta)."
    },
    {
      id: 9,
      source: "FGV – Auditor do Estado / CGE-SC (2023)",
      topic: "CPC 00 (R2) – Regime de Competência",
      type: "multiple",
      statement: "Segundo o regime de competência preconizado pela estrutura contábil:",
      options: [
        "As receitas são reconhecidas apenas no momento da liquidação financeira em conta corrente.",
        "Os efeitos de transações e outros eventos são reconhecidos quando ocorrem, e não quando caixa ou equivalentes de caixa são recebidos ou pagos.",
        "As despesas são contabilizadas no exercício social em que o orçamento público autorizar a emissão do empenho.",
        "O reconhecimento contábil do lucro subordina-se à concordância expressa de todos os credores fiduciários.",
        "Apenas os desembolsos de capital para aquisição de imobilizado seguem a competência, sendo os demais custos pelo regime de caixa."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Regime de competência: receitas e despesas são reconhecidas no período a que competem seus fatos geradores, independentemente do pagamento ou recebimento."
    },
    {
      id: 10,
      source: "CEBRASPE – Contador / DPE-RO (2021)",
      topic: "CPC 00 (R2) – Definição de Patrimônio Líquido",
      type: "tf",
      statement: "Patrimônio Líquido é a participação residual nos ativos da entidade após a dedução de todos os seus passivos.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. CPC 00, item 4.63: PL = Ativo - Passivo (participação residual nos ativos)."
    },
    {
      id: 11,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "CPC 00 (R2) – Receitas e Despesas",
      type: "multiple",
      statement: "A Estrutura Conceitual (CPC 00 R2) define receitas e despesas em termos de variações nos elementos patrimoniais. Nesse sentido, receitas são:",
      options: [
        "Entradas brutas de caixa resultantes de empréstimos e aportes de capital dos sócios.",
        "Aumentos nos ativos ou reduções nos passivos que resultam em aumentos no patrimônio líquido, exceto aqueles referentes a contribuições de detentores de direitos sobre o patrimônio.",
        "Valores faturados decorrentes da emissão de ações em tesouraria com ágio.",
        "Ganhos econômicos decorrentes de incentivos fiscais creditados diretamente em reservas de capital.",
        "Variações monetárias passivas compensadas por créditos de longo prazo."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Receitas são aumentos de ativos ou diminuições de passivos que resultam em aumento do PL, EXCETO contribuições dos proprietários (sócios)."
    },
    {
      id: 12,
      source: "FCC – Auditor Fiscal Tributário / ISS-Salvador (2020)",
      topic: "CPC 00 (R2) – Materialidade",
      type: "tf",
      statement: "A informação é material se a sua omissão, distorção ou obscuridade puder influenciar, razoavelmente, as decisões que os usuários primários tomam com base nas demonstrações contábeis fornecidas.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A materialidade é um aspecto da relevância específico da entidade, mensurado em função da natureza ou magnitude da informação."
    },
    {
      id: 13,
      source: "FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)",
      topic: "CPC 00 (R2) – Essência sobre a Forma",
      type: "multiple",
      statement: "O princípio de que as informações financeiras devem representar a substância do fenômeno econômico e não meramente a sua forma jurídica legal denomina-se:",
      options: [
        "Conservadorismo mitigado.",
        "Essência sobre a forma.",
        "Materialidade relativa.",
        "Legalidade estrita formal.",
        "Verificabilidade documental."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Essência sobre a forma é componente indissociável da representação fidedigna no CPC 00."
    },
    {
      id: 14,
      source: "CEBRASPE – Auditor do Estado / CAGE-RS (2019)",
      topic: "CPC 00 (R2) – Representação Fidedigna",
      type: "tf",
      statement: "Para ser uma representação perfeitamente fidedigna, a informação deve possuir três atributos fundamentais: ser completa, neutra e livre de erros.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Três atributos da representação fidedigna (CPC 00): completa, neutra e isenta de erros."
    },
    {
      id: 15,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC (2018)",
      topic: "CPC 00 (R2) – Tempestividade",
      type: "multiple",
      statement: "Sobre a tempestividade como característica qualitativa de melhoria, é correto afirmar:",
      options: [
        "Significa ter informação disponível para os tomadores de decisão a tempo de poder influenciar suas decisões.",
        "Exige que todos os balanços sejam publicados diariamente antes da abertura do mercado de capitais.",
        "Subordina a exatidão dos dados contábeis à entrega imediata sem necessidade de conferência.",
        "Autoriza a dispensa do reconhecimento de provisões quando houver litígio judicial não julgado.",
        "Aplica-se unicamente às demonstrações financeiras das companhias de capital fechado."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Tempestividade significa disponibilizar a informação aos tomadores de decisão a tempo de poder influenciar suas deliberações."
    },
    {
      id: 16,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "CPC 00 (R2) – Continuidade",
      type: "tf",
      statement: "As demonstrações contábeis são normalmente preparadas sob a premissa de que a entidade está em continuidade operacional e continuará em operação no futuro previsível.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A continuidade é a premissa subjacente à elaboração das demonstrações contábeis."
    },
    {
      id: 17,
      source: "FGV – Analista / SEFAZ-AM (2022)",
      topic: "CPC 00 (R2) – Verificabilidade",
      type: "multiple",
      statement: "A verificabilidade ajuda a assegurar aos usuários que a informação representa fidedignamente os fenômenos econômicos que pretende representar. A esse respeito:",
      options: [
        "A verificabilidade significa que observadores conhecedores e independentes podem chegar a um consenso de que a representação é fidedigna.",
        "A verificabilidade exige que todos os observadores cheguem a um valor matemático exatamente idêntico.",
        "A verificação direta pode ser feita apenas por meio de auditoria externa contratada pela CVM.",
        "A verificabilidade não se aplica a informações prospectivas ou estimativas contábeis.",
        "A verificabilidade substitui a necessidade de manter livros diário e razão."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Verificabilidade significa que diferentes observadores esclarecidos e independentes podem chegar a um consenso (embora não necessariamente a um acordo completo)."
    },
    {
      id: 18,
      source: "CEBRASPE – Auditor Federal de Finanças e Controle / CGU (2022)",
      topic: "CPC 00 (R2) – Custo Histórico",
      type: "tf",
      statement: "O custo histórico de um ativo quando adquirido ou criado é o valor dos custos incorridos na sua aquisição ou criação, compreendendo a contraprestação entregue mais os custos de transação.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Custo histórico reflete o valor econômico dos recursos entregues na data da aquisição."
    },
    {
      id: 19,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-AP (2022)",
      topic: "CPC 00 (R2) – Valor Justo",
      type: "multiple",
      statement: "O valor justo é definido na Estrutura Conceitual como:",
      options: [
        "O preço que seria recebido pela venda de um ativo ou pago pela transferência de um passivo em uma transação não forçada entre participantes do mercado na data de mensuração.",
        "O valor presente dos fluxos de caixa futuros que a entidade espera obter com o uso contínuo do ativo.",
        "O valor desembolsado pelo comprador original indexado pela taxa Selic acumulada.",
        "O valor residual de liquidação forçada homologado pelo juízo falimentar.",
        "O custo corrente de reposição física imediata do ativo por outro idêntico."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Valor justo: preço de saída em transação não forçada entre participantes do mercado na data de mensuração."
    },
    {
      id: 20,
      source: "VUNESP – Contador / EBSERH (2020)",
      topic: "CPC 00 (R2) – Critério de Reconhecimento",
      type: "tf",
      statement: "Um item só é reconhecido nas demonstrações contábeis se atender à definição de um dos elementos (ativo, passivo, patrimônio líquido, receita ou despesa) e se o seu reconhecimento proporcionar informação relevante e representação fidedigna.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Critérios de reconhecimento do CPC 00: atender à definição do elemento + relevância + representação fidedigna."
    }
  ],

  // ── Aula 06: Operações com Mercadorias e Estoques (CPC 16 R1) ──
  6: [
    {
      id: 1,
      source: "FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)",
      topic: "CPC 16 (R1) – Custo de Aquisição dos Estoques",
      type: "multiple",
      statement: "Uma sociedade empresária comercial adquiriu mercadorias para revenda à vista pelo valor de nota fiscal de R$ 100.000,00. Na operação, incorreu nos seguintes gastos adicionais:\n- Frete pago pela compradora até seu depósito: R$ 5.000,00;\n- Seguro no transporte até o estabelecimento comprador: R$ 2.000,00;\n- Tributos não recuperáveis inclusos no preço: R$ 12.000,00;\n- Despesas comerciais com publicidade para divulgar as mercadorias: R$ 4.000,00.\nConsiderando as normas do CPC 16 (R1), o valor a ser reconhecido no Ativo Estoques na entrada das mercadorias é de:",
      options: [
        "R$ 100.000,00.",
        "R$ 107.000,00.",
        "R$ 111.000,00.",
        "R$ 95.000,00.",
        "R$ 121.000,00."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Custos no estoque: Preço de compra (já incluindo tributos não recuperáveis: R$ 100.000) + Frete sobre compras (R$ 5.000) + Seguro s/ compras (R$ 2.000) = R$ 107.000,00. Despesas com publicidade são despesas comerciais na DRE."
    },
    {
      id: 2,
      source: "CEBRASPE – Auditor Federal de Controle Externo / TCU (2022)",
      topic: "CPC 16 (R1) – Regra Geral de Mensuração",
      type: "tf",
      statement: "Nos termos do CPC 16 (R1), os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o menor.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Regra basilar do CPC 16, item 9: os estoques são mensurados pelo menor valor entre o Custo e o Valor Realizável Líquido."
    },
    {
      id: 3,
      source: "FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)",
      topic: "Métodos de Valoração de Estoques e Efeitos Inflacionários",
      type: "multiple",
      statement: "Em um cenário econômico caracterizado por contínua elevação nos preços de aquisição de mercadorias (inflação), a utilização do método PEPS (Primeiro a Entrar, Primeiro a Sair) em comparação com o método da Média Ponderada Móvel proporciona:",
      options: [
        "Menor valor do Estoque Final e maior Custo das Mercadorias Vendidas (CMV).",
        "Maior valor do Estoque Final, menor Custo das Mercadorias Vendidas (CMV) e maior Lucro Bruto.",
        "Menor Lucro Bruto e menor recolhimento de imposto de renda no período.",
        "O mesmo valor de CMV e lucro bruto que o método UEPS proporcionaria.",
        "Nula variação patrimonial pelo princípio da prudência."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Em inflação: PEPS baixa os itens mais antigos (mais baratos) no CMV, gerando menor CMV, maior estoque final (avaliado pelos preços recentes mais caros) e maior Lucro Bruto."
    },
    {
      id: 4,
      source: "FGV – Auditor-Fiscal da Receita Federal / RFB (2023)",
      topic: "CPC 16 (R1) – Vedação ao Método UEPS",
      type: "tf",
      statement: "Tanto a legislação tributária brasileira (Regulamento do Imposto de Renda) quanto as normas societárias (CPC 16) vedam a utilização do método UEPS (Último a Entrar, Primeiro a Sair) para a valoração dos estoques.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. O método UEPS é expressamente proibido pelo CPC 16 e não é admitido pelo Fisco (RIR) por subavaliar o lucro tributável em períodos inflacionários."
    },
    {
      id: 5,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "Fórmula do CMV e Inventário Periódico",
      type: "multiple",
      statement: "Uma empresa comercial utiliza o sistema de inventário periódico. No encerramento do exercício, levantou os seguintes dados contábeis:\n- Estoque Inicial: R$ 40.000,00;\n- Compras Brutas de Mercadorias: R$ 180.000,00;\n- Fretes sobre compras pagos pela empresa: R$ 10.000,00;\n- Devoluções de Compras: R$ 15.000,00;\n- Abatimentos sobre compras: R$ 5.000,00;\n- Estoque Final apurado em inventário físico: R$ 50.000,00.\nO Custo das Mercadorias Vendidas (CMV) do período foi de:",
      options: [
        "R$ 160.000,00.",
        "R$ 170.000,00.",
        "R$ 180.000,00.",
        "R$ 190.000,00.",
        "R$ 210.000,00."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Compras Líquidas = Compras Brutas (180.000) + Frete s/ compras (10.000) - Devoluções (15.000) - Abatimentos (5.000) = R$ 170.000. CMV = EI (40.000) + Compras Líquidas (170.000) - EF (50.000) = R$ 160.000,00."
    },
    {
      id: 6,
      source: "CEBRASPE – Auditor Fiscal / SEFAZ-AL (2020)",
      topic: "CPC 16 (R1) – Gastos Anormais e Armazenamento",
      type: "tf",
      statement: "Valores anormais de desperdício de materiais, mão de obra ou outros custos de produção, bem como custos de armazenamento de produtos acabados, não integram o custo dos estoques, devendo ser reconhecidos diretamente como despesa do período em que ocorrerem.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. CPC 16, item 16: perdas anormais e armazenagem de produto pronto são despesas do período na DRE."
    },
    {
      id: 7,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)",
      topic: "CPC 16 (R1) – Valor Realizável Líquido e Ajuste",
      type: "multiple",
      statement: "Uma empresa comercial possui em seu estoque 1.000 unidades de uma mercadoria adquiridas ao custo unitário de R$ 80,00 (custo total de R$ 80.000,00). Na data do balanço, o preço estimado de venda no mercado é de R$ 75,00 por unidade e as despesas estimadas de venda somam R$ 5,00 por unidade. Conforme o CPC 16, a empresa deve:",
      options: [
        "Manter o estoque pelo custo histórico de R$ 80.000,00 pelo princípio da continuidade.",
        "Reconhecer uma perda por desvalorização de estoques de R$ 10.000,00, mensurando o estoque a R$ 70.000,00.",
        "Elevar o valor do estoque para R$ 75.000,00 em contrapartida ao patrimônio líquido.",
        "Reconhecer um ganho operacional de R$ 5.000,00 na DRE.",
        "Aguardar a efetiva venda para registrar qualquer impacto no resultado."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Valor Realizável Líquido unitário = Preço de Venda (75) - Despesas de Venda (5) = R$ 70,00. Como VRL (70) < Custo (80), ajusta-se para o menor: Perda unitária = R$ 10 x 1.000 = R$ 10.000,00 de perda na DRE contra conta retificadora do Ativo."
    },
    {
      id: 8,
      source: "VUNESP – Contador / Prefeitura de São Paulo (2023)",
      topic: "CPC 16 (R1) – Reversão de Perda ao VRL",
      type: "tf",
      statement: "Caso as circunstâncias econômicas que justificaram a redução do estoque ao valor realizável líquido deixem de existir em período subsequente, o valor da baixa deve ser revertido na DRE, limitando-se ao montante do custo de aquisição original.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. CPC 16, item 33: a reversão de perda de estoque é permitida, mas o novo valor contábil nunca pode ultrapassar o custo de aquisição histórico."
    },
    {
      id: 9,
      source: "FGV – Auditor do Estado / CGE-SC (2023)",
      topic: "Descontos Comerciais vs. Descontos Financeiros",
      type: "multiple",
      statement: "Os descontos incondicionais (comerciais) obtidos na aquisição de mercadorias e os descontos condicionais (financeiros) obtidos na quitação antecipada de duplicatas a fornecedores recebem, respectivamente, o seguinte tratamento contábil pela adquirente:",
      options: [
        "Ambos são receitas financeiras na Demonstração do Resultado do Exercício.",
        "Redução do custo de aquisição das mercadorias e receita financeira na DRE.",
        "Dedução da receita bruta e despesa operacional.",
        "Receita operacional bruta e crédito direto no Patrimônio Líquido.",
        "Ambos deduzem o saldo de Estoques no Balanço Patrimonial."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Desconto incondicional (comercial, na nota) reduz o custo do estoque. Desconto condicional (financeiro, por antecipação de pagamento) é Receita Financeira."
    },
    {
      id: 10,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "CPC 16 (R1) – Bonificação em Mercadorias",
      type: "tf",
      statement: "As mercadorias recebidas gratuitamente a título de bonificação vinculada à compra de lote de produtos reduzem o custo unitário médio do estoque da compradora, não gerando reconhecimento de receita operacional imediata.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Bonificação em mercadoria agrega mais unidades ao lote sem custo financeiro adicional, diluindo e reduzindo o custo médio por unidade."
    },
    {
      id: 11,
      source: "FCC – Auditor Fiscal Tributário / ISS-Salvador (2020)",
      topic: "CPC 16 (R1) – Estoques de Prestadores de Serviços",
      type: "multiple",
      statement: "De acordo com o CPC 16 (R1), os estoques de prestadores de serviços são mensurados:",
      options: [
        "Pelo preço contratado com o cliente deduzida a margem de lucro projetada.",
        "Pelos custos de mão de obra e outros custos com pessoal diretamente envolvido na prestação do serviço, incluindo pessoal de supervisão e gastos gerais atribuíveis.",
        "Exclusivamente pelos custos de transporte e alimentação dos prestadores de serviço.",
        "Pelo valor de mercado dos serviços congêneres praticado na mesma praça.",
        "Não se admite contabilmente estoque de serviços na legislação societária brasileira."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. CPC 16, item 19: o estoque de serviços compreende custos de mão de obra direta e encargos dos executores e supervisores, excluindo despesas administrativas e margem de lucro."
    },
    {
      id: 12,
      source: "CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-CE (2021)",
      topic: "Inventário Permanente vs. Periódico",
      type: "tf",
      statement: "No sistema de inventário permanente, a baixa dos estoques e o reconhecimento do Custo das Mercadorias Vendidas (D – CMV / C – Estoques) são efetuados continuamente a cada operação de venda.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. No inventário permanente o controle é contínuo com baixa a cada venda, ao passo que no inventário periódico o CMV é apurado ao final do período."
    },
    {
      id: 13,
      source: "FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)",
      topic: "Fretes sobre Compras vs. Fretes sobre Vendas",
      type: "multiple",
      statement: "Em relação ao tratamento contábil dos gastos com frete no comércio de mercadorias, assinale a opção correta:",
      options: [
        "O frete pago pela empresa compradora para transporte das mercadorias até seu depósito é despesa com vendas.",
        "O frete pago pela empresa vendedora para entrega das mercadorias ao cliente consumidor é despesa operacional de vendas (comercial) na DRE.",
        "O frete sobre vendas integra o Custo das Mercadorias Vendidas (CMV) deduzindo o lucro bruto.",
        "O frete sobre compras constitui sempre despesa financeira na data de quitação do conhecimento de transporte.",
        "Ambos os fretes (compra e venda) são somados obrigatoriamente na conta Estoques do Ativo Circulante."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Frete sobre compras (suportado pela compradora) entra no custo do estoque. Frete sobre vendas (suportado pela vendedora) é Despesa com Vendas na DRE."
    },
    {
      id: 14,
      source: "CEBRASPE – Contador / DPE-RO (2021)",
      topic: "CPC 16 (R1) – Custo Específico",
      type: "tf",
      statement: "O custo específico deve ser obrigatoriamente atribuído aos itens de estoque que não são normalmente intercambiáveis e aos bens ou serviços produzidos e segregados para projetos específicos.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. CPC 16, item 23: bens não intercambiáveis (ex: obras de arte, navios sob encomenda, joias raras) exigem valoração por custo específico."
    },
    {
      id: 15,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC (2018)",
      topic: "Critério da Média Ponderada Móvel",
      type: "multiple",
      statement: "No método da Média Ponderada Móvel, o custo médio unitário de cada item estocado é recalculado:",
      options: [
        "Apenas no final do exercício social após o inventário físico.",
        "A cada nova aquisição ou entrada de mercadorias no estoque.",
        "A cada saída ou venda realizada no caixa.",
        "Semanalmente com base na variação do índice geral de preços.",
        "Quando da apuração do balancete mensal pré-fechamento."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na média ponderada móvel, o custo médio é recalculado a cada nova compra/entrada de estoque."
    }
  ],

  // ── Aula 07: Tributos Sobre Compras e Vendas ──
  7: [
    {
      id: 1,
      source: "FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)",
      topic: "ICMS por Dentro e Custo de Aquisição",
      type: "multiple",
      statement: "Uma empresa comercial contribuinte do ICMS adquiriu mercadorias para revenda por R$ 50.000,00, valor já com ICMS de 18% incluso. O frete no valor de R$ 2.000,00 foi pago pela compradora (com ICMS de 12% incluso a ser recuperado). Sabendo que a empresa comercial revende com tributação normal, o valor registrado na conta Estoques de Mercadorias é de:",
      options: [
        "R$ 52.000,00.",
        "R$ 42.760,00.",
        "R$ 41.000,00.",
        "R$ 43.000,00.",
        "R$ 50.000,00."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Mercadoria líquida de ICMS = 50.000 - (18% de 50.000 = 9.000) = R$ 41.000. Frete líquido de ICMS = 2.000 - (12% de 2.000 = 240) = R$ 1.760. Custo total do estoque = 41.000 + 1.760 = R$ 42.760,00."
    },
    {
      id: 2,
      source: "FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)",
      topic: "IPI na Compra por Empresa Comercial",
      type: "tf",
      statement: "Quando uma empresa exclusivamente comercial (não contribuinte do IPI) adquire produtos industrializados para revenda, o IPI destacado na nota fiscal de compra não é recuperável e, portanto, deve integrar o custo de aquisição dos estoques.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Comerciante não é contribuinte de IPI, não se creditando desse tributo. Logo, o IPI integra o custo do estoque (tributo não recuperável)."
    },
    {
      id: 3,
      source: "CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL (2020)",
      topic: "Não Cumulatividade do ICMS",
      type: "multiple",
      statement: "Pelo princípio constitucional da não cumulatividade do ICMS:",
      options: [
        "O tributo recolhido na etapa anterior é abatido como crédito contra o imposto devido nas operações subsequentes de saída.",
        "A empresa é isenta de recolhimento sempre que tiver saldo credor de PIS e COFINS.",
        "O valor do tributo é adicionado por fora ao valor da mercadoria na emissão do cupom fiscal.",
        "Os créditos fiscais prescrevem no prazo improrrogável de trinta dias após a entrada da mercadoria.",
        "O ICMS destacado na nota de venda integra a receita líquida de vendas na DRE."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Art. 155, § 2º, I da CF/88: o ICMS é não cumulativo, compensando-se o que for devido em cada operação com o montante cobrado nas anteriores."
    },
    {
      id: 4,
      source: "FGV – Auditor-Fiscal da Receita Federal / RFB (2023)",
      topic: "PIS e COFINS Não Cumulativos sobre Compras",
      type: "tf",
      statement: "No regime não cumulativo da Contribuição para o PIS (1,65%) e da COFINS (7,6%), os créditos fiscais decorrentes da aquisição de mercadorias para revenda reduzem o custo contábil de aquisição dos estoques da empresa adquirente.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Leis 10.637/02 e 10.833/03 e CPC 16: tributos recuperáveis não integram o custo do estoque, sendo registrados no Ativo Circulante (Tributos a Recuperar)."
    },
    {
      id: 5,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "Apuração Periódica do ICMS (Recolher vs. Recuperar)",
      type: "multiple",
      statement: "Em 31 de março, o Razão de uma sociedade comercial apresentava os seguintes saldos:\n- ICMS a Recuperar: R$ 28.000,00 (saldo devedor no Ativo);\n- ICMS a Recolher: R$ 42.000,00 (saldo credor no Passivo).\nAo realizar o lançamento de apuração e confronto mensal do imposto, o contador efetuará:",
      options: [
        "Débito em Despesa com ICMS e Crédito em Caixa por R$ 70.000,00.",
        "Débito em ICMS a Recolher e Crédito em ICMS a Recuperar no valor de R$ 28.000,00, remanescendo saldo passivo a recolher de R$ 14.000,00.",
        "Crédito em ICMS a Recuperar por R$ 42.000,00 e Débito no Patrimônio Líquido.",
        "Nenhum lançamento, mantendo as duas contas com seus saldos abertos indefinidamente.",
        "Débito em Estoques e Crédito em ICMS a Recolher por R$ 14.000,00."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Apuração confronta a menor conta contra a maior: D - ICMS a Recolher (42k - 28k = 14k restantes a pagar) / C - ICMS a Recuperar (zera os 28k). Saldo final: R$ 14.000,00 no Passivo."
    },
    {
      id: 6,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)",
      topic: "ICMS-ST (Substituição Tributária) para o Substituto",
      type: "tf",
      statement: "O valor do ICMS retido por Substituição Tributária (ICMS-ST) cobrado pela indústria fabricante do comerciante adquirente não constitui receita da indústria nem despesa sua, mas sim obrigação tributária a recolher perante o Estado.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. CPC 47: valores coletados em nome de terceiros (como ICMS-ST e IPI) não geram receita para o substituto tributário."
    },
    {
      id: 7,
      source: "VUNESP – Auditor Fiscal Tributário / ISS-SP (2023)",
      topic: "Deduções da Receita Bruta na DRE",
      type: "multiple",
      statement: "Na Demonstração do Resultado do Exercício (DRE), são deduções diretas da Receita Bruta para apuração da Receita Líquida de Vendas:",
      options: [
        "Despesas financeiras, comissões de vendedores e aluguéis passivos.",
        "Devoluções de vendas, abatimentos sobre vendas, descontos incondicionais e tributos sobre vendas (ICMS, PIS, COFINS e ISS).",
        "Custo das Mercadorias Vendidas (CMV) e depreciação do maquinário de fábrica.",
        "Despesas com frete sobre vendas (CIF) e provisão para créditos de liquidação duvidosa (PCLD).",
        "Participações de debêntures e imposto de renda da pessoa jurídica."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Deduções da Receita Bruta: Devoluções/Vendas Canceladas, Abatimentos, Descontos Incondicionais (comerciais) e Impostos sobre Vendas (ICMS, ISS, PIS, COFINS)."
    },
    {
      id: 8,
      source: "CEBRASPE – Auditor Fiscal / SEFAZ-SE (2022)",
      topic: "IPI por Fora em Empresas Industriais",
      type: "tf",
      statement: "Na aquisição de matérias-primas por empresa industrial contribuinte do IPI, o imposto incide 'por fora', sendo adicionado ao valor dos produtos e registrado a débito de IPI a Recuperar no Ativo Circulante, não compondo o custo da matéria-prima.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Na indústria, o IPI sobre matéria-prima é recuperável (D - IPI a Recuperar) e não entra no custo dos estoques de matérias-primas."
    },
    {
      id: 9,
      source: "FGV – Auditor Fiscal dos Tributos Estaduais / SEFAZ-AM (2022)",
      topic: "Devolução de Vendas e Estorno de Tributos",
      type: "multiple",
      statement: "Quando um cliente devolve mercadorias vendidas no mesmo exercício social, a sociedade vendedora deve efetuar:",
      options: [
        "Apenas um lançamento de baixa em contas a pagar sem alterar o estoque.",
        "O reconhecimento da Devolução de Vendas (dedutora da receita bruta), o estorno dos tributos sobre vendas proporcionais e o retorno das mercadorias ao estoque com estorno proporcional do CMV.",
        "Um crédito direto em lucros acumulados e débito no passivo tributário.",
        "O lançamento de todo o valor como despesa não operacional de exercícios anteriores.",
        "A baixa definitiva da duplicata sem qualquer lançamento nos impostos faturados."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Devolução de vendas desfaz a operação: reconhece Devoluções de Vendas, recupera os tributos sobre vendas destacados e devolve as mercadorias ao estoque estornando o CMV."
    },
    {
      id: 10,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "ICMS por Dentro e Cálculo de Preço",
      type: "tf",
      statement: "O cálculo 'por dentro' do ICMS significa que o próprio montante do imposto integra sua respectiva base de cálculo, compondo o preço bruto cobrado do adquirente.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Art. 13, § 1º, I da LC 87/96: o montante do ICMS integra sua própria base de cálculo (cálculo por dentro)."
    },
    {
      id: 11,
      source: "FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2022)",
      topic: "Descontos Incondicionais vs. Condicionais na Venda",
      type: "multiple",
      statement: "Uma empresa comercial efetuou uma venda com desconto incondicional destacado na nota fiscal e, posteriormente, concedeu um desconto financeiro pela quitação antecipada da duplicata. Na vendedora, tais descontos são classificados, respectivamente, como:",
      options: [
        "Despesa financeira e dedução da receita bruta.",
        "Dedução da receita bruta e despesa financeira na DRE.",
        "Ambos como despesas comerciais na DRE.",
        "Ambos como deduções diretas da receita líquida.",
        "Redução do estoque de mercadorias e receita não operacional."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na vendedora: desconto incondicional (comercial, na NF) é Dedução da Receita Bruta. Desconto condicional (financeiro, por pontualidade) é Despesa Financeira."
    },
    {
      id: 12,
      source: "CEBRASPE – Auditor Federal de Controle Externo / TCU (2022)",
      topic: "Exclusão do ICMS da Base do PIS/COFINS (Tema 69 STF)",
      type: "tf",
      statement: "Conforme decisão vinculante do Supremo Tribunal Federal (Tema 69 da Repercussão Geral), o ICMS destacado na nota fiscal de saída não integra a base de cálculo da contribuição para o PIS e da COFINS.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Tema 69/STF: 'O ICMS não compõe a base de cálculo para a incidência do PIS e da COFINS'."
    },
    {
      id: 13,
      source: "FGV – Auditor Fiscal da Receita Estadual / SEFAZ-PR (2024)",
      topic: "PIS e COFINS no Regime Cumulativo",
      type: "multiple",
      statement: "No regime de tributação pelo lucro presumido, em regra sujeito ao regime CUMULATIVO de PIS (0,65%) e COFINS (3%):",
      options: [
        "A empresa apropria créditos tributários sobre as compras de mercadorias para revenda.",
        "A empresa apura os tributos com base na receita bruta auferida, inexistindo direito à apropriação de créditos sobre as compras de insumos e mercadorias.",
        "As alíquotas aplicadas na saída são majoradas para 9,25%.",
        "O tributo recolhido é classificado no Ativo Não Circulante Realizável a Longo Prazo.",
        "Os impostos de importação são compensados diretamente contra o faturamento mensal."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. No regime cumulativo (Lei 9.718/98), não há direito a crédito na entrada; o imposto incide diretamente sobre o faturamento às alíquotas de 0,65% (PIS) e 3% (COFINS)."
    },
    {
      id: 14,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC (2018)",
      topic: "Abatimento sobre Compras",
      type: "tf",
      statement: "O abatimento obtido pelo comprador em razão de pequenas avarias ou defeitos constatados nas mercadorias recebidas, quando formalizado por nota fiscal própria sem devolução física dos itens, reduz o custo das mercadorias adquiridas.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. O abatimento sobre compras não envolve devolução física, mas reduz o valor a pagar ao fornecedor e o custo de aquisição daquele lote."
    },
    {
      id: 15,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "ICMS sobre Frete na Compra FOB",
      type: "multiple",
      statement: "Em uma operação de compra de mercadorias com cláusula FOB (frete por conta do comprador), o frete rodoviário intermunicipal foi pago pelo comprador com ICMS destacado no DACTE. Sabendo que o comprador é contribuinte e revenderá com débito de ICMS, o valor do frete e do seu ICMS:",
      options: [
        "O frete total compõe despesa administrativa sem direito a crédito fiscal.",
        "O frete líquido do ICMS integra o custo das mercadorias e o ICMS sobre frete é lançado a débito de ICMS a Recuperar no Ativo.",
        "O frete é lançado no Passivo Não Circulante como empréstimo da transportadora.",
        "O ICMS sobre o frete é recolhido pelo comprador na condição de responsável solidário irretratável.",
        "O frete não pode ser contabilizado antes da venda final das mercadorias aos consumidores."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na compra FOB com aproveitamento de crédito: o ICMS do frete vai para ICMS a Recuperar (Ativo) e o valor líquido do frete é agregado ao custo do estoque."
    }
  ],

  // ── Aula 08: Duplicatas Descontadas e PCLD (CPC 48) ──
  8: [
    {
      id: 1,
      source: "FGV – Auditor-Fiscal da Receita Federal / RFB (2023)",
      topic: "Classificação Contábil de Duplicatas Descontadas",
      type: "multiple",
      statement: "Uma sociedade empresária descontou em instituição bancária duplicatas de sua emissão no valor nominal de R$ 200.000,00, mantendo a responsabilidade regressiva (coobrigação) caso os clientes não quitem os títulos no vencimento. O banco creditou na conta corrente da empresa o valor de R$ 185.000,00, retendo R$ 15.000,00 a título de juros e tarifas. Em conformidade com o CPC 48 e a Lei nº 6.404/76, a operação de desconto deve ser escriturada mediante:",
      options: [
        "Crédito na conta Duplicatas a Receber (Ativo) por R$ 200.000,00.",
        "Crédito na conta Duplicatas Descontadas no Passivo Exigível (Empréstimos Bancários) por R$ 200.000,00, Débito em Bancos por R$ 185.000,00 e Débito em Encargos Financeiros a Transcorrer (retificadora do Passivo) por R$ 15.000,00.",
        "Crédito em conta retificadora do Patrimônio Líquido por R$ 200.000,00.",
        "Débito imediato de Despesa Financeira na DRE por R$ 200.000,00.",
        "Crédito em Receita Financeira Diferida por R$ 185.000,00."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Pelo CPC 48, se há coobrigação (direito de regresso), o risco do crédito não foi transferido. Logo, a conta Duplicatas Descontadas fica no Passivo Exigível (empréstimo), com encargos a transcorrer retificando o passivo."
    },
    {
      id: 2,
      source: "CEBRASPE – Auditor Federal de Controle Externo / TCU (2022)",
      topic: "Regime de Competência nos Encargos de Desconto",
      type: "tf",
      statement: "Os encargos financeiros cobrados antecipadamente pelo banco na operação de desconto de duplicatas devem ser registrados em conta retificadora do passivo (Encargos Financeiros a Transcorrer) e apropriados ao resultado (DRE) pelo regime de competência, pro rata temporis, ao longo do prazo da operação.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Pelo regime de competência, juros bancários pagos/descontados antecipadamente viram despesa financeira mês a mês (pro rata temporis)."
    },
    {
      id: 3,
      source: "FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)",
      topic: "Liquidação de Duplicata Descontada pelo Cliente",
      type: "multiple",
      statement: "Quando o cliente devedor liquida a duplicata descontada diretamente junto ao banco no dia do vencimento, a empresa emitente deve efetuar o seguinte lançamento contábil:",
      options: [
        "Débito em Caixa e Crédito em Duplicatas Descontadas.",
        "Débito em Duplicatas Descontadas (Passivo) e Crédito em Duplicatas a Receber/Clientes (Ativo).",
        "Débito em Despesa com Devedores Duvidosos e Crédito em Bancos.",
        "Débito em Bancos e Crédito em Receita de Serviços Financeiros.",
        "Nenhum lançamento é efetuado, pois a operação foi liquidada pelo banco."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Com a quitação pelo cliente, a empresa extingue a dívida com o banco e dá baixa no título do cliente: D - Duplicatas Descontadas (Passivo) / C - Clientes/Duplicatas a Receber (Ativo). Não afeta o resultado nem o caixa."
    },
    {
      id: 4,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "Constituição de PCLD (Perdas Estimadas)",
      type: "tf",
      statement: "A conta Perdas Estimadas em Créditos de Liquidação Duvidosa (PCLD) possui natureza credora e é apresentada no Balanço Patrimonial como conta retificadora do Ativo Circulante (deduzindo Contas a Receber), sendo sua constituição reconhecida como despesa operacional na DRE.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. PCLD: conta retificadora do Ativo (saldo credor), constituída mediante D - Despesa com PCLD (DRE) / C - PCLD (Ativo)."
    },
    {
      id: 5,
      source: "FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)",
      topic: "Baixa de Título Incobrável contra PCLD",
      type: "multiple",
      statement: "Uma empresa comercial possui R$ 50.000,00 na conta Clientes e saldo de R$ 6.000,00 na conta PCLD. Após esgotadas todas as vias de cobrança, um crédito de R$ 4.000,00 foi considerado definitivamente incobrável. O lançamento contábil para a baixa do crédito incobrável acarreta:",
      options: [
        "Débito em Despesa Operacional de R$ 4.000,00 e crédito em Clientes.",
        "Débito em PCLD e crédito em Clientes no valor de R$ 4.000,00, sem alteração no resultado do período e sem alteração no valor do Ativo Líquido.",
        "Redução imediata do Patrimônio Líquido em R$ 4.000,00.",
        "Débito em Caixa e crédito em Provisões Judiciais por R$ 4.000,00.",
        "Aumento do Passivo Exigível pelo valor da dívida perdoada."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. A baixa de crédito incobrável anteriormente provisionado é: D - PCLD (Retificadora) / C - Clientes (Ativo). Como ambas as contas pertencem ao Ativo com naturezas opostas, a operação é fato permutativo no Ativo, sem impacto no resultado nem no Ativo Líquido."
    },
    {
      id: 6,
      source: "CEBRASPE – Auditor Fiscal / SEFAZ-AL (2020)",
      topic: "Recuperação de Crédito Baixado como Incobrável",
      type: "tf",
      statement: "Se um crédito que havia sido baixado definitivamente como incobrável for posteriormente quitado pelo cliente em dinheiro em exercício seguinte, o valor recebido deve ser registrado a débito de Caixa/Bancos e a crédito de conta de Receita Operacional (Recuperação de Créditos Baixados) na DRE.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. D - Caixa / C - Recuperação de Créditos (Receita na DRE). O crédito já havia sido baixado do Ativo, logo o ingresso representa ganho/receita do período."
    },
    {
      id: 7,
      source: "FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)",
      topic: "Inadimplência de Duplicata Descontada com Direito de Regresso",
      type: "multiple",
      statement: "Na data do vencimento de uma duplicata descontada no valor de R$ 30.000,00, o cliente não efetuou o pagamento ao banco. Tendo em vista o direito de regresso, a instituição financeira debitou o valor integral de R$ 30.000,00 na conta corrente da empresa emitente. A escrituração contábil desse fato pela empresa emitente corresponde a:",
      options: [
        "Débito em Despesa Financeira e Crédito em Caixa por R$ 30.000,00.",
        "Débito em Duplicatas Descontadas (Passivo) e Crédito em Bancos Conta Movimento (Ativo) no valor de R$ 30.000,00, mantendo-se a conta Clientes com o título em aberto.",
        "Débito em PCLD e Crédito em Duplicatas Descontadas por R$ 30.000,00.",
        "Débito em Duplicatas a Receber e Crédito em Receita Diferida por R$ 30.000,00.",
        "Nenhum lançamento, pois a obrigação passa para a esfera judicial."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Quando o banco cobra da empresa cedente pelo inadimplemento: D - Duplicatas Descontadas (baixa o passivo com o banco) / C - Bancos (saída de dinheiro da conta corrente). O cliente continua devedor na conta Clientes (para cobrança judicial/administrativa)."
    },
    {
      id: 8,
      source: "Instituto Avalia – Contador / Concurso UFBA (2024)",
      topic: "CPC 48 – Modelo de Perda de Crédito Esperada",
      type: "tf",
      statement: "Pelo CPC 48 (Instrumentos Financeiros), o modelo de mensuração de perdas em contas a receber de clientes baseia-se em perdas de crédito esperadas (incluindo projeções prospectivas e dados macroeconômicos), abandonando o antigo modelo de perdas incorridas.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. O CPC 48 introduziu o modelo de Perda de Crédito Esperada (Expected Credit Loss - ECL), que é proativo e baseado em dados históricos e prospectivos (forward-looking)."
    },
    {
      id: 9,
      source: "VUNESP – Contador / Prefeitura de São Paulo (2023)",
      topic: "Ajuste do Saldo da PCLD ao Fim do Exercício",
      type: "multiple",
      statement: "No encerramento do exercício de 2023, o saldo da conta Clientes é de R$ 800.000,00 e o saldo remanescente na conta PCLD é de R$ 12.000,00 (credor). O departamento de crédito estimou que a perda esperada para o exercício de 2024 é de 3% sobre a carteira de clientes (R$ 24.000,00). O valor a ser lançado como despesa de PCLD na DRE de 2023 é de:",
      options: [
        "R$ 24.000,00.",
        "R$ 12.000,00.",
        "R$ 36.000,00.",
        "R$ 8.000,00.",
        "R$ 20.000,00."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Saldo necessário da PCLD = 3% de 800.000 = R$ 24.000,00. Como a conta PCLD já possui saldo de R$ 12.000,00, a complementação a lançar como despesa é de apenas R$ 12.000,00 (24.000 - 12.000)."
    },
    {
      id: 10,
      source: "CEBRASPE – Auditor Federal de Finanças e Controle / CGU (2022)",
      topic: "Reversão de Saldo Excessivo de PCLD",
      type: "tf",
      statement: "Caso a estimativa de perda de crédito esperada para o exercício seguinte seja inferior ao saldo já existente na conta PCLD, a empresa deve efetuar um lançamento de reversão da PCLD a crédito de conta de Receita/Reversão de Provisões na DRE.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. D - PCLD (reduz a provisão no ativo) / C - Reversão de PCLD (Receita Operacional na DRE)."
    }
  ]
};
