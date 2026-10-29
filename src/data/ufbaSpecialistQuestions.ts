import { QuestionData } from '../aula00Questions';

export const UFBA_SPECIALIST_QUESTIONS: Record<string, QuestionData[]> = {
  'pericia-contabil': [
    {
      id: 1001,
      source: "CEBRASPE – Analista Judiciário / Contabilidade / TJ-CE (2024)",
      topic: "Perícia Contábil - NBC TP 01 e NBC PP 01",
      type: "tf",
      statement: "[Questão 1 - Perícia Contábil]\n\nDe acordo com a NBC TP 01 (R1), o laudo pericial contábil e o parecer pericial contábil são documentos distintos: o primeiro é elaborado pelo perito nomeado pelo juiz, enquanto o segundo é de responsabilidade do perito assistente técnico indicado pelas partes.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Exata previsão da NBC TP 01: o laudo é o documento técnico produzido pelo perito do juízo; o parecer pericial contábil é elaborado pelo assistente técnico indicado pela parte."
    },
    {
      id: 1002,
      source: "FGV – Auditor Federal de Controle Externo / TCU (2022)",
      topic: "Perícia Contábil - Procedimentos",
      type: "multiple",
      statement: "Durante os trabalhos periciais contábeis em uma ação judicial, o perito oficial realizou a verificação in loco do estado de conservação das máquinas e instalações industriais da empresa periciada. Nos termos da NBC TP 01, esse procedimento técnico classifica-se como:",
      options: [
        "Exame.",
        "Vistoria.",
        "Indagação.",
        "Investigação.",
        "Arbitramento."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: Vistoria (letra B). Vistoria é a constatação in loco da situação, estado ou fato, de forma circunstanciada, relativa a coisas, bens ou situações. Exame recai sobre livros e documentos."
    },
    {
      id: 1003,
      source: "CEBRASPE – Perito Criminal Federal / Ciências Contábeis (2021)",
      topic: "Perícia Contábil - Impedimento e Suspeição",
      type: "tf",
      statement: "[Questão 3 - Perícia Contábil]\n\nNos termos da NBC PP 01, o perito do juízo é considerado suspeito para atuar no processo quando for amigo íntimo ou inimigo capital de qualquer das partes ou de seus advogados.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A amizade íntima ou inimizade capital com qualquer das partes ou patronos configura hipótese de suspeição (caráter subjetivo)."
    },
    {
      id: 1004,
      source: "INSTITUTO AVALIA – Perito Contábil / Simulado Especializado UFBA (2026)",
      topic: "Perícia Contábil - Quesitos",
      type: "multiple",
      statement: "A respeito dos quesitos na perícia contábil judicial regida pelo Código de Processo Civil e pela NBC TP 01, assinale a afirmativa correta:",
      options: [
        "O perito está dispensado de responder aos quesitos que considerar impertinentes sem necessidade de justificativa.",
        "Quesitos suplementares podem ser formulados pelas partes durante a diligência pericial, cabendo ao perito do juízo respondê-los no próprio laudo.",
        "O assistente técnico deve responder exclusivamente aos quesitos formulados pela parte adversa.",
        "Os honorários periciais devem ser custeados integralmente pela parte autora, ainda que a perícia seja solicitada pelo réu.",
        "O laudo pericial substitui a sentença do magistrado, vinculando compulsoriamente a decisão judicial."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. As partes podem formular quesitos suplementares durante a diligência pericial (art. 469 do CPC), devendo o perito oficial responder a todos fundamentadamente."
    },
    {
      id: 1005,
      source: "CEBRASPE – Analista Contábil / DPE-RO (2023)",
      topic: "Perícia Contábil - Termo de Diligência",
      type: "tf",
      statement: "[Questão 5 - Perícia Contábil]\n\nO termo de diligência é o instrumento pelo qual o perito solicita formalmente a uma das partes, ou a terceiro, a exibição de livros, documentos e informações indispensáveis à elaboração da perícia.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A NBC TP 01 define o termo de diligência como o documento formal emitido pelo perito para requisitar livros, documentos e esclarecimentos necessários aos trabalhos."
    }
  ],

  'casp-municipal-siconfi': [
    {
      id: 2001,
      source: "FGV – Contador / SEFAZ-AM (2022)",
      topic: "Contabilidade Municipal - Siconfi",
      type: "multiple",
      statement: "A Matriz de Saldos Contábeis (MSC) enviada mensalmente pelos entes federativos ao Sistema de Informações Contábeis e Fiscais do Setor Público Brasileiro (Siconfi) caracteriza-se por:",
      options: [
        "conter apenas saldos anuais consolidados do Poder Executivo.",
        "apresentar informações das contas de controle sem detalhamento de fonte de recursos.",
        "conter os saldos mensais de todas as contas contábeis do PCASP com seus respectivos atributos e detalhamentos de poder e órgão.",
        "substituir a obrigatoriedade de publicação do Relatório de Gestão Fiscal (RGF).",
        "ser de preenchimento facultativo para municípios com menos de 50.000 habitantes."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. A MSC é uma estrutura de dados com informações das contas contábeis e seus respectivos atributos da Federação (mensal e detalhada por poder/órgão)."
    },
    {
      id: 2002,
      source: "CEBRASPE – Auditor de Controle Externo / TCE-RJ (2021)",
      topic: "Sistemas Federais - Siope e Siops",
      type: "tf",
      statement: "[Questão 2 - Finanças Municipais]\n\nO SIOPE é o sistema responsável por monitorar a destinação do percentual mínimo constitucional de 25% das receitas de impostos municipais em Manutenção e Desenvolvimento do Ensino (MDE), ao passo que o SIOPS acompanha a aplicação mínima de 15% em Ações e Serviços Públicos de Saúde (ASPS).",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Exata correlação: SIOPE = Educação (25% nos municípios - Art. 212 CF); SIOPS = Saúde (15% nos municípios - Art. 198, §2º, III CF)."
    },
    {
      id: 2003,
      source: "CEBRASPE – Analista de Controle Externo / TCE-SC (2022)",
      topic: "Contabilidade Municipal - Fundos Públicos",
      type: "tf",
      statement: "[Questão 3 - Fundos Municipais]\n\nOs fundos especiais municipais possuem personalidade jurídica de direito público própria, o que lhes outorga autonomia patrimonial dissociada do orçamento geral do Município.",
      options: ["Certo", "Errado"],
      correctAnswer: 1,
      explanation: "Gabarito: ERRADO. Fundos especiais municipais NÃO possuem personalidade jurídica própria; são desdobramentos orçamentários com destinação vinculada integrantes do orçamento do ente público."
    },
    {
      id: 2004,
      source: "INSTITUTO AVALIA – Contador / Simulado Especializado UFBA (2026)",
      topic: "Tributos Municipais - Enfoque Patrimonial",
      type: "multiple",
      statement: "No âmbito da Contabilidade Aplicada ao Setor Público Municipal, o lançamento do IPTU referente ao exercício financeiro corrente gera, no momento do fato gerador (sob a ótica patrimonial da NBC TSP):",
      options: [
        "Variação Patrimonial Diminutiva e registro de despesa orçamentária.",
        "Crédito no Ativo Circulante e receita orçamentária arrecadada no banco.",
        "Variação Patrimonial Aumentativa (VPA) concomitante com o reconhecimento de direito a receber no Ativo Circulante.",
        "Apenas registro em contas de compensação sem reflexo patrimonial imediato.",
        "Aumento no Passivo Financeiro e redução no Patrimônio Líquido."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Sob a ótica patrimonial (competência), o fato gerador do imposto reconhece de imediato a Variação Patrimonial Aumentativa (VPA) contra Crédito Tributário a Receber no Ativo Circulante."
    }
  ],

  'legislacao-ufba-ifes': [
    {
      id: 3001,
      source: "INSTITUTO AVALIA – Técnico Administrativo / UFBA (2026)",
      topic: "Estatuto e Regimento da UFBA - Conselhos Superiores",
      type: "multiple",
      statement: "Na estrutura organizacional da Universidade Federal da Bahia (UFBA), o órgão colegiado superior encarregado privativamente de deliberar e aprovar diretrizes estritamente acadêmicas, relativas a ensino, pesquisa e extensão universitária, é o:",
      options: [
        "Conselho Universitário (CONSUNI).",
        "Conselho de Ensino, Pesquisa e Extensão (CONSEPE).",
        "Conselho de Curadores.",
        "Colégio Eleitoral Especial.",
        "Gabinete da Reitoria."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. CONSEPE é o órgão de deliberação superior em matérias acadêmicas (ensino, pesquisa e extensão). O CONSUNI trata de diretrizes gerais e administração global."
    },
    {
      id: 3002,
      source: "INSTITUTO AVALIA – Contador / UFBA (2026)",
      topic: "Estatuto da UFBA - Conselho de Curadores",
      type: "tf",
      statement: "[Questão 2 - Governança UFBA]\n\nCompete ao Conselho de Curadores da UFBA fiscalizar a execução orçamentária e a gestão econômico-financeira da Universidade, cabendo-lhe emitir parecer formal conclusivo sobre a prestação de contas anual do Reitor antes do envio aos órgãos de controle externo.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A função do Conselho de Curadores no Estatuto da UFBA é especificamente fiscalizatória e deliberativa em matéria de economia, patrimônio e contas."
    },
    {
      id: 3003,
      source: "CEBRASPE – Técnico em Assuntos Educacionais / UnB (2022)",
      topic: "Autonomia Universitária - Art. 207 da CF/88",
      type: "tf",
      statement: "[Questão 3 - IFES]\n\nA autonomia universitária assegurada pelo artigo 207 da Constituição Federal confere às universidades federais soberania administrativa absoluta, desobrigando-as de cumprir as regras gerais federais sobre licitações e contratações públicas.",
      options: ["Certo", "Errado"],
      correctAnswer: 1,
      explanation: "Gabarito: ERRADO. Autonomia não é soberania. A UFBA e as IFES submetem-se estritamente à Constituição Federal, à Lei Geral de Licitações (Lei nº 14.133/2021) e ao controle externo do TCU/CGU."
    }
  ],

  'governo-digital-governanca': [
    {
      id: 4001,
      source: "CEBRASPE – Analista de Gestão Pública / MGI (2024)",
      topic: "Governo Digital - Lei 14.129/2021",
      type: "multiple",
      statement: "Nos termos da Lei nº 14.129/2021 (Lei do Governo Digital), é vedado aos órgãos públicos federais exigir do cidadão:",
      options: [
        "informações indispensáveis para a comprovação de identidade.",
        "comprovantes ou certidões de dados que já constem em bases oficiais do próprio poder público federal.",
        "endereço eletrônico institucional para envio de notificações.",
        "utilização do padrão gov.br para autenticação.",
        "apresentação de requerimentos por via digital."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Princípio da não duplicidade de exigências: é proibido exigir documento ou certidão que já integre bases públicas federais interoperáveis."
    },
    {
      id: 4002,
      source: "FGV – Auditor Governamental / CGE-SC (2023)",
      topic: "Governança e Integridade - Decreto 9.830/2019",
      type: "tf",
      statement: "[Questão 2 - LINDB e Responsabilização]\n\nSegundo o Decreto Federal nº 9.830/2019, o agente público federal somente responderá pessoalmente por suas decisões ou opiniões técnicas em caso de dolo ou erro grosseiro, devendo o órgão de controle considerar os obstáculos reais do gestor no momento da prática do ato.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Literalidade do art. 28 da LINDB regulamentado pelo Decreto nº 9.830/2019."
    },
    {
      id: 4003,
      source: "INSTITUTO AVALIA – Assistente em Administração / Simulado UFBA (2026)",
      topic: "Agenda Ambiental A3P",
      type: "multiple",
      statement: "A Agenda Ambiental na Administração Pública (A3P) é um programa voltado à sustentabilidade socioambiental no serviço público. Entre seus eixos temáticos prioritários NÃO se inclui:",
      options: [
        "Uso racional dos recursos naturais e bens públicos.",
        "Gestão adequada dos resíduos gerados.",
        "Compras públicas sustentáveis.",
        "Substituição obrigatória de todos os servidores concursados por terceirizados.",
        "Qualidade de vida no ambiente de trabalho."
      ],
      correctAnswer: 3,
      explanation: "Gabarito: D. A3P trata estritamente de responsabilidade socioambiental, ecoeficiência, compras sustentáveis e qualidade no trabalho; não trata de substituição funcional de servidores."
    }
  ]
};
