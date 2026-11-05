import { QuestionData } from './aula00Questions';

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
      explanation: "Gabarito: B. Vistoria é a constatação in loco da situação, estado ou fato, de forma circunstanciada, relativa a coisas, bens ou situações. Exame recai sobre livros e documentos."
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
      source: "INSTITUTO AVALIA – Perito Contábil / Concurso UFBA (2024)",
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
    },
    {
      id: 1006,
      source: "FCC – Analista Judiciário / Contabilidade / TRT-4 (2023)",
      topic: "Perícia Contábil - Arbitramento e Avaliação",
      type: "multiple",
      statement: "De acordo com a NBC TP 01 (R1), a determinação de valores ou a solução de controvérsia por critério técnico-científico, quando não houver documentos precisos e for necessário valer-se de estimativas fundamentadas, denomina-se:",
      options: [
        "Certificação.",
        "Mensuração.",
        "Arbitramento.",
        "Indagação.",
        "Vistoria."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Arbitramento é a determinação de valores, quantidades ou a solução de controvérsia por critério técnico-científico."
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
      source: "INSTITUTO AVALIA – Contador / Concurso UFBA (2024)",
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
    },
    {
      id: 2005,
      source: "FGV – Auditor de Controle Externo / TCE-TO (2022)",
      topic: "SIAFIC - Decreto nº 10.540/2020",
      type: "multiple",
      statement: "De acordo com o Decreto Federal nº 10.540/2020, que dispõe sobre o padrão mínimo de qualidade do Sistema Único e Integrado de Execução Orçamentária, Administração Financeira e Controle (SIAFIC), cada ente federativo deve:",
      options: [
        "manter sistemas separados e independentes para a Prefeitura e para a Câmara Municipal.",
        "utilizar um único SIAFIC para todos os Poderes e órgãos do ente federativo, vedada a existência de bancos de dados paralelos.",
        "permitir lançamentos contábeis retroativos sem identificação do usuário responsável.",
        "terceirizar a titularidade da base de dados contábil para empresas privadas de software.",
        "adotar regime de caixa para o registro das variações patrimoniais aumentativas e diminutivas."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. O SIAFIC deve ser ÚNICO por ente federativo, abrangendo todos os Poderes (Executivo e Legislativo municipal, incluídas autarquias e fundos), com base de dados compartilhada."
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
    },
    {
      id: 3004,
      source: "INSTITUTO AOCP – Assistente em Administração / UFRB (2023)",
      topic: "Carreira TAE - Lei nº 11.091/2005",
      type: "multiple",
      statement: "Nos termos da Lei nº 11.091/2005, que dispõe sobre a estruturação do Plano de Carreira dos Cargos Técnico-Administrativos em Educação (PCCTAE), a mudança para o padrão de vencimento imediatamente subsequente, a cada 18 meses de efetivo exercício, desde que o servidor apresente resultado fixado em programa de avaliação de desempenho, denomina-se:",
      options: [
        "Incentivo à Qualificação.",
        "Progressão por Capacitação Profissional.",
        "Progressão por Mérito Profissional.",
        "Ascensão Funcional Transversal.",
        "Readaptação de Nível de Classificação."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Progressão por Mérito Profissional é a mudança para o padrão de vencimento imediatamente subsequente a cada 18 meses de efetivo exercício mediante avaliação de desempenho."
    },
    {
      id: 3005,
      source: "INSTITUTO AVALIA – Assistente em Administração / UFBA (2026)",
      topic: "Unidades Universitárias da UFBA",
      type: "multiple",
      statement: "De acordo com o Estatuto da Universidade Federal da Bahia (UFBA), no âmbito de cada Unidade Universitária (Faculdade, Escola ou Instituto), o órgão deliberativo máximo é a:",
      options: [
        "Congregação.",
        "Diretoria Executiva.",
        "Reitoria Setorial.",
        "Procuradoria Educacional.",
        "Assembleia Geral de Estudantes."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. Em cada Unidade Universitária da UFBA, a Congregação é o órgão deliberativo máximo, enquanto a Diretoria é o órgão executivo."
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
    },
    {
      id: 4004,
      source: "CEBRASPE – Auditor Federal de Finanças e Controle / CGU (2022)",
      topic: "Governança Pública - Decreto nº 9.203/2017",
      type: "multiple",
      statement: "Segundo o Decreto nº 9.203/2017, que dispõe sobre a política de governança da administração pública federal direta, autárquica e fundacional, os três mecanismos para o exercício da governança pública são:",
      options: [
        "Planejamento, Orçamento e Finanças.",
        "Liderança, Estratégia e Controle.",
        "Eficiência, Eficácia e Efetividade.",
        "Burocracia, Hierarquia e Padronização.",
        "Auditoria, Correição e Ouvidoria."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Conforme o art. 5º do Decreto 9.203/2017, são mecanismos para o exercício da governança pública: I - Liderança; II - Estratégia; e III - Controle."
    }
  ],

  'redacao-oficial-variacao': [
    {
      id: 5001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2024)",
      topic: "Redação Oficial - Padrão Ofício e Fechos",
      type: "multiple",
      statement: "De acordo com a 3ª edição do Manual de Redação da Presidência da República (MRPR), no que tange aos fechos para comunicações oficiais e à padronização de expedientes, assinale a alternativa correta:",
      options: [
        "O memorando continua sendo o expediente exclusivo para comunicações internas entre departamentos de uma mesma autarquia.",
        "Existem apenas dois fechos oficiais: 'Respeitosamente,' para autoridades superiores e 'Atenciosamente,' para autoridades de mesma hierarquia, de hierarquia inferior ou demais casos.",
        "Para autoridades de hierarquia superior, deve-se empregar o fecho 'Cordialmente e respeitosamente,'.",
        "O aviso é o documento utilizado pelos Pró-Reitores para comunicação com estudantes.",
        "Os pronomes de tratamento Vossa Excelência e Vossa Senhoria exigem concordância verbal na segunda pessoa do plural (vós)."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. A 3ª edição do MRPR extinguiu o memorando e o aviso (adotando o Padrão Ofício unificado) e manteve apenas dois fechos: 'Respeitosamente,' (para autoridades superiores) e 'Atenciosamente,' (para autoridades de mesma hierarquia, inferior ou particulares)."
    },
    {
      id: 5002,
      source: "FGV – Analista Legislativo / Câmara dos Deputados (2023)",
      topic: "Redação Oficial - Concordância com Pronomes de Tratamento",
      type: "multiple",
      statement: "Assinale a opção em que a frase redigida em um expediente oficial dirigido a um Reitor de Universidade Federal respeita integralmente as normas de concordância dos pronomes de tratamento previstas no Manual de Redação da Presidência da República:",
      options: [
        "Solicitamos que Vossa Magnificência encaminheis o vosso parecer ao Conselho Universitário.",
        "Informamos a Vossa Excelência que vossos assessores já protocolaram os documentos.",
        "Comunicamos a Vossa Senhoria que sua solicitação foi devidamente analisada e deferida por esta Pró-Reitoria.",
        "Pedimos a Vossa Senhoria que tragas os relatórios financeiros para a reunião.",
        "Reiteramos a Vossa Excelência que vossa decisão será cumprida imediatamente."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Os pronomes de tratamento (mesmo iniciados por 'Vossa') exigem verbos e pronomes possessivos obrigatoriamente na 3ª pessoa gramatical (sua, seu, foi, encaminhe) — jamais 'vosso/vossa' ou 2ª pessoa."
    },
    {
      id: 5003,
      source: "CEBRASPE – Analista Administrativo / IBAMA (2022)",
      topic: "Funções do Que e do Se",
      type: "tf",
      statement: "[Questão 3 - Funções Morfossintáticas do SE]\n\nNo período 'Precisa-se de novos assistentes em administração nos setores acadêmicos da universidade', a partícula 'se' classifica-se como índice de indeterminação do sujeito, razão pela qual o verbo permanece obrigatoriamente na terceira pessoa do singular.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. O verbo 'precisar' (com preposição 'de') é transitivo indireto (VTI). Logo, o 'se' é Índice de Indeterminação do Sujeito (IIS) e o verbo fica obrigatoriamente na 3ª pessoa do singular."
    },
    {
      id: 5004,
      source: "INSTITUTO AVALIA – Contador / Concurso Público (2024)",
      topic: "Variação Linguística",
      type: "multiple",
      statement: "Quando um servidor público adapta sua linguagem técnica, evitando jargões contábeis ou jurídicos excessivos ao atender um cidadão leigo no balcão da instituição, mas utiliza registro formal estrito ao redigir um ofício ao Tribunal de Contas, verifica-se o domínio da variação linguística:",
      options: [
        "diacrônica (histórica).",
        "diatópica (geográfica ou regional).",
        "diafásica (situacional ou de registro).",
        "arcaizante (etimológica).",
        "fonológica regionalista."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. A variação diafásica (situacional) refere-se à adequação do registro linguístico (mais formal ou mais acessível) de acordo com o contexto comunicativo e o interlocutor."
    },
    {
      id: 5005,
      source: "FCC – Analista Judiciário / TRT-5 Bahia (2022)",
      topic: "Funções do QUE - Pronome Relativo vs. Conjunção Integrante",
      type: "multiple",
      statement: "No trecho 'A auditoria determinou QUE os relatórios fossem revisados e encaminhados aos setores QUE os solicitaram', os vocábulos destacados em maiúsculas classificam-se, respectivamente, como:",
      options: [
        "pronome relativo e pronome relativo.",
        "conjunção integrante e pronome relativo.",
        "pronome relativo e conjunção integrante.",
        "conjunção integrante e conjunção explicativa.",
        "preposição acidental e pronome demonstrativo."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. O primeiro 'que' introduz oração subordinada substantiva objetiva direta ('A auditoria determinou ISTO' = conjunção integrante). O segundo 'que' retoma o antecedente 'setores' ('setores os quais os solicitaram' = pronome relativo)."
    }
  ],

  'etica-lai-lgpd': [
    {
      id: 6001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2024)",
      topic: "Código de Ética - Decreto nº 1.171/1994",
      type: "multiple",
      statement: "De acordo com o Decreto nº 1.171/1994 (Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal), a única penalidade passível de ser aplicada diretamente pela Comissão de Ética ao servidor faltoso é a de:",
      options: [
        "Advertência por escrito.",
        "Suspensão de até 15 dias sem remuneração.",
        "Censura, fundamentada em parecer assinado por todos os seus integrantes, com ciência do faltoso.",
        "Multa de 50% sobre o vencimento básico.",
        "Demissão a bem do serviço público."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Nos termos do inciso XXII do Decreto nº 1.171/1994, a pena aplicável ao servidor público pela Comissão de Ética é exclusivamente a de CENSURA, e sua fundamentação constará do respectivo parecer, assinado por todos os seus integrantes, com ciência do faltoso."
    },
    {
      id: 6002,
      source: "CEBRASPE – Analista Administrativo / ANTT (2024)",
      topic: "Lei de Acesso à Informação - Lei nº 12.527/2011",
      type: "tf",
      statement: "[Questão 2 - Prazos e Regras da LAI]\n\nNos termos da Lei nº 12.527/2011 (LAI), qualquer interessado poderá apresentar pedido de acesso a informações aos órgãos públicos, sendo expressamente vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Literalidade do art. 10, § 3º da Lei nº 12.527/2011: são vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público."
    },
    {
      id: 6003,
      source: "FGV – Analista Administrativo / CGU (2022)",
      topic: "LAI - Prazos de Sigilo e Informações Pessoais",
      type: "multiple",
      statement: "Segundo a Lei de Acesso à Informação (Lei nº 12.527/2011), os prazos máximos de restrição de acesso à informação classificada como reservada, secreta e ultrassecreta, bem como o prazo de proteção das informações pessoais relativas à intimidade, vida privada, honra e imagem, são, respectivamente:",
      options: [
        "2 anos, 10 anos, 20 anos e 50 anos.",
        "5 anos, 10 anos, 25 anos e 50 anos.",
        "5 anos, 15 anos, 25 anos e 100 anos.",
        "10 anos, 15 anos, 30 anos e 100 anos.",
        "5 anos, 20 anos, 50 anos e 100 anos."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Pela Lei 12.527/2011 (arts. 24 e 31): Reservada = 5 anos; Secreta = 15 anos; Ultrassecreta = 25 anos; Informações pessoais (intimidade, vida privada, honra e imagem) = até 100 anos."
    },
    {
      id: 6004,
      source: "INSTITUTO AOCP – Assistente em Administração / IFES (2023)",
      topic: "LGPD - Lei nº 13.709/2018",
      type: "multiple",
      statement: "Nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), a pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD) denomina-se:",
      options: [
        "Auditor de Conformidade.",
        "Encarregado (Data Protection Officer - DPO).",
        "Custodiante de Rede.",
        "Corregedor Setorial.",
        "Operador Subordinado."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. O art. 5º, VIII da LGPD define o Encarregado como a pessoa indicada para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD."
    },
    {
      id: 6005,
      source: "CEBRASPE – Técnico Administrativo / ANM (2022)",
      topic: "LAI - Prazo de Resposta",
      type: "tf",
      statement: "[Questão 5 - Prazo de Atendimento na LAI]\n\nNão sendo possível conceder o acesso imediato à informação disponível, o órgão ou entidade pública deverá atendê-lo em prazo não superior a 20 dias, o qual poderá ser prorrogado por mais 10 dias, mediante justificativa expressa da qual será cientificado o requerente.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Art. 11, §§ 1º e 2º da Lei nº 12.527/2011: prazo de até 20 dias, prorrogável por mais 10 dias mediante justificativa expressa."
    }
  ],

  'contabilidade-custos-siafi': [
    {
      id: 7001,
      source: "FGV – Contador / Receita Federal (2023)",
      topic: "Contabilidade de Custos - Ponto de Equilíbrio",
      type: "multiple",
      statement: "Uma entidade industrial apresenta preço de venda unitário de R$ 100,00, custos variáveis unitários de R$ 45,00, despesas variáveis unitárias de R$ 15,00, custos fixos totais de R$ 120.000,00 no período (dos quais R$ 20.000,00 referem-se à depreciação de máquinas) e despesas fixas de R$ 40.000,00. Com base nesses dados, o Ponto de Equilíbrio Contábil (PEC) e o Ponto de Equilíbrio Financeiro (PEF), em unidades, correspondem respectivamente a:",
      options: [
        "3.000 unidades e 2.500 unidades.",
        "4.000 unidades e 3.500 unidades.",
        "3.500 unidades e 3.000 unidades.",
        "4.000 unidades e 4.500 unidades.",
        "2.667 unidades e 2.000 unidades."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. MCu = 100 - (45 + 15) = R$ 40,00/un. PEC = (CF + DF) / MCu = (120.000 + 40.000) / 40 = 160.000 / 40 = 4.000 unidades. PEF = (160.000 - 20.000 de depreciação) / 40 = 140.000 / 40 = 3.500 unidades."
    },
    {
      id: 7002,
      source: "CEBRASPE – Contador / Petrobras (2023)",
      topic: "Custeio por Absorção vs. Custeio Variável",
      type: "tf",
      statement: "[Questão 2 - Sistemas de Custeio]\n\nNo custeio por absorção, todos os custos de produção, sejam eles fixos ou variáveis, diretos ou indiretos, são alocados aos produtos elaborados, ao passo que as despesas administrativas e comerciais são lançadas diretamente ao resultado do período.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. No Custeio por Absorção (único aceito pelo CPC 16 e pela legislação societária/fiscal), todos os custos de produção (fixos e variáveis) são absorvidos pelo estoque de produtos, enquanto as despesas vão para a DRE."
    },
    {
      id: 7003,
      source: "INSTITUTO AVALIA – Contador / Concurso UFBA (2024)",
      topic: "Sistema SIAFI - Documentos Contábeis",
      type: "multiple",
      statement: "No Sistema Integrado de Administração Financeira do Governo Federal (SIAFI), o documento contábil utilizado especificamente para registrar a descentralização de créditos orçamentários entre Unidades Gestoras (Provisão ou Destaque) é a:",
      options: [
        "Nota de Dotação (ND).",
        "Nota de Movimentação de Crédito (NC).",
        "Nota de Empenho (NE).",
        "Ordem Bancária (OB).",
        "Guia de Recolhimento da União (GRU)."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. A Nota de Movimentação de Crédito (NC) é o documento do SIAFI destinado ao registro de descentralizações de créditos orçamentários (Provisão interna ou Destaque externo)."
    },
    {
      id: 7004,
      source: "CEBRASPE – Auditor Federal de Finanças e Controle / STN (2024)",
      topic: "Custos no Setor Público - NBC TSP 34",
      type: "tf",
      statement: "[Questão 4 - NBC TSP 34]\n\nDe acordo com a NBC TSP 34 (Custos no Setor Público), as entidades do setor público estão obrigadas a utilizar exclusivamente o método de custeio baseado em atividades (ABC), sendo vedada a adoção do custeio direto ou por absorção.",
      options: ["Certo", "Errado"],
      correctAnswer: 1,
      explanation: "Gabarito: ERRADO. A NBC TSP 34 confere flexibilidade metodológica: não impõe um método único, permitindo o uso do custeio por absorção, direto, ABC ou outros que atendam à finalidade gerencial da entidade pública."
    }
  ],

  'assistente-tga-estruturas-podc': [
    {
      id: 8001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2025)",
      topic: "Processo Organizacional - PODC",
      type: "multiple",
      statement: "No estudo do processo administrativo neoclássico (Planejar, Organizar, Dirigir e Controlar - PODC), a função administrativa responsável por dividir o trabalho, agrupar as atividades em uma estrutura lógica (departamentalização), designar pessoas e alocar os recursos organizacionais é denominada:",
      options: [
        "Planejamento.",
        "Organização.",
        "Direção.",
        "Controle.",
        "Auditoria."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. A função ORGANIZAÇÃO consiste em dividir o trabalho, estruturar órgãos (departamentalização), definir níveis de autoridade e distribuir recursos para viabilizar o que foi planejado."
    },
    {
      id: 8002,
      source: "FGV – Assistente Administrativo / Assembleia Legislativa (2023)",
      topic: "Estruturas Organizacionais - Estrutura Matricial",
      type: "multiple",
      statement: "Determinada instituição pública decidiu criar grupos multidisciplinares temporários para desenvolver projetos de modernização, alocando servidores que permanecem vinculados simultaneamente aos seus departamentos de origem (Finanças, RH, TI) e ao coordenador do respectivo projeto. Essa configuração caracteriza a estrutura organizacional:",
      options: [
        "Linear ou Militar.",
        "Funcional pura.",
        "Matricial.",
        "Divisional geográfica.",
        "Comissionada simples."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. A estrutura MATRICIAL é híbrida/dual, combinando dois tipos de departamentalização (geralmente Funcional + por Projetos), gerando dupla subordinação e flexibilizando o princípio da unidade de comando."
    },
    {
      id: 8003,
      source: "CEBRASPE – Assistente em Administração / FUB-UnB (2023)",
      topic: "Eficiência, Eficácia e Efetividade",
      type: "tf",
      statement: "[Questão 3 - Os 3 Es da Administração]\n\nEnquanto a eficiência diz respeito ao alcance dos resultados e metas finais sem considerar os custos envolvidos, a eficácia refere-se exclusivamente à utilização econômica dos recursos e ao cumprimento rigoroso dos métodos operacionais.",
      options: ["Certo", "Errado"],
      correctAnswer: 1,
      explanation: "Gabarito: ERRADO. Os conceitos foram invertidos! EFICIÊNCIA refere-se aos meios, métodos e uso racional/econômico dos recursos; EFICÁCIA refere-se ao alcance dos objetivos e resultados finais."
    },
    {
      id: 8004,
      source: "INSTITUTO AOCP – Assistente em Administração / UFRB (2023)",
      topic: "Níveis de Planejamento",
      type: "multiple",
      statement: "Acerca dos três níveis de planejamento organizacional (Estratégico, Tático e Operacional), assinale a afirmativa correta:",
      options: [
        "O planejamento operacional é elaborado pela cúpula diretiva, abrange toda a organização e projeta-se para o longo prazo.",
        "O planejamento estratégico foca exclusivamente nas tarefas rotineiras de cada seção e possui horizonte de curto prazo.",
        "O planejamento tático atua no nível intermediário (departamental/gerencial), desdobrando os objetivos estratégicos em planos de médio prazo para cada unidade.",
        "O planejamento tático precede hierarquicamente o planejamento estratégico.",
        "A definição da Missão e da Visão de futuro da instituição é atribuição exclusiva do planejamento operacional."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. O planejamento tático é elaborado no nível intermediário (gerências/departamentos/pró-reitorias), tem foco no médio prazo e traduz a estratégia global para cada unidade."
    },
    {
      id: 8005,
      source: "VUNESP – Assistente Administrativo / UNESP (2024)",
      topic: "Função Controle - Etapas",
      type: "multiple",
      statement: "O controle é a função administrativa que monitora e avalia as atividades e resultados alcançados para assegurar que o planejamento seja cumprido. As quatro etapas sequenciais do processo de controle são:",
      options: [
        "Recrutamento, treinamento, remuneração e demissão.",
        "Estabelecimento de padrões, mensuração do desempenho atual, comparação do desempenho com os padrões e ação corretiva.",
        "Definição da missão, análise SWOT, departamentalização e liderança.",
        "Centralização, amplitude administrativa, cadeia de comando e delegação.",
        "Brainstorming, fluxograma, folha de verificação e tombamento."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. As 4 etapas clássicas do Controle são: 1) Estabelecer padrões/critérios; 2) Medir/observar o desempenho; 3) Comparar o desempenho atual com o padrão; e 4) Tomar ação corretiva."
    }
  ],

  'assistente-processos-qualidade': [
    {
      id: 9001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2024)",
      topic: "Gestão da Qualidade - Ciclo PDCA",
      type: "multiple",
      statement: "O Ciclo PDCA (Plan, Do, Check, Act) é uma ferramenta gerencial amplamente utilizada para o controle e a melhoria contínua de processos e produtos. Na etapa 'Check' (Verificar), o gestor ou assistente deve:",
      options: [
        "definir as metas prioritárias e elaborar o plano de ação inicial.",
        "treinar os servidores e executar as tarefas previstas no plano.",
        "monitorar e comparar os resultados obtidos na execução com as metas planejadas, identificando eventuais desvios.",
        "descartar todos os documentos antigos do setor de protocolo.",
        "definir a estrutura salarial dos cargos comissionados."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. No PDCA: Plan = definir metas e métodos; Do = capacitar e executar; Check = verificar/comparar os dados obtidos com a meta planejada; Act = padronizar o acerto ou agir corretivamente sobre desvios."
    },
    {
      id: 9002,
      source: "FGV – Técnico Administrativo / MPU (2023)",
      topic: "Ferramentas da Qualidade - Pareto vs. Ishikawa",
      type: "multiple",
      statement: "Um Assistente em Administração da UFBA deseja analisar as reclamações registradas na Ouvidoria e priorizar a solução daquelas poucas causas críticas que respondem pela imensa maioria das ocorrências (princípio 80/20). Para essa priorização gráfica em barras ordenadas com linha acumulada, ele deve utilizar:",
      options: [
        "o Diagrama de Pareto.",
        "o Diagrama de Dispersão.",
        "o Organograma Linear.",
        "o Programa 5S.",
        "a Matriz de Responsabilidade RACI."
      ],
      correctAnswer: 0,
      explanation: "Gabarito: A. O Diagrama de Pareto é um gráfico de barras verticais que ordena as frequências das ocorrências da maior para a menor, aplicando a relação 80/20 (poucos problemas vitais geram a maioria das falhas)."
    },
    {
      id: 9003,
      source: "CEBRASPE – Assistente em Administração / EBSERH (2023)",
      topic: "Gestão por Processos - Tipos de Processos",
      type: "tf",
      statement: "[Questão 3 - Processos Finalísticos vs. Processos de Suporte]\n\nNa gestão por processos (BPM), os processos de suporte (ou de apoio), tais como gestão de pessoas, compras e tecnologia da informação, caracterizam-se por entregar valor diretamente ao cidadão ou cliente externo final, confundindo-se com os processos primários ou finalísticos.",
      options: ["Certo", "Errado"],
      correctAnswer: 1,
      explanation: "Gabarito: ERRADO. Quem entrega valor diretamente ao cliente/cidadão externo são os processos PRIMÁRIOS (Finalísticos). Os processos de SUPORTE (Apoio) atendem aos clientes internos e sustentam os processos primários."
    },
    {
      id: 9004,
      source: "INSTITUTO AOCP – Assistente em Administração / IF-BA (2023)",
      topic: "Programa 5S",
      type: "multiple",
      statement: "O Programa 5S visa promover a qualidade, a organização e a produtividade no ambiente de trabalho por meio de cinco sensos japoneses. O senso 'Seiri' e o senso 'Shitsuke' correspondem, respectivamente, aos sensos de:",
      options: [
        "Limpeza e Ordenação.",
        "Utilização (Descarte) e Autodisciplina.",
        "Padronização e Limpeza.",
        "Ordenação e Saúde.",
        "Autodisciplina e Utilização."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Seiri = Senso de Utilização/Descarte (separar o útil do inútil); Seiton = Ordenação; Seiso = Limpeza; Seiketsu = Padronização/Saúde; Shitsuke = Autodisciplina."
    },
    {
      id: 9005,
      source: "FCC – Técnico Judiciário / Área Administrativa / TRT (2024)",
      topic: "Gestão de Projetos - Conceito de Projeto (PMBOK)",
      type: "multiple",
      statement: "Segundo as boas práticas de gerenciamento de projetos (Guia PMBOK), a principal característica que distingue um Projeto das operações rotineiras (processos contínuos) de uma organização é o fato de o projeto ser:",
      options: [
        "uma atividade repetitiva, permanente e sem data prevista para término.",
        "um esforço temporário empreendido para criar um produto, serviço ou resultado único (exclusivo).",
        "executado exclusivamente por consultorias terceirizadas sem participação de servidores efetivos.",
        "isento de restrições de escopo, tempo e orçamento.",
        "restrito ao setor de tecnologia da informação."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Projeto é um esforço TEMPORÁRIO (possui início e fim definidos) empreendido para criar um produto, serviço ou resultado ÚNICO."
    }
  ],

  'assistente-gestao-pessoas-comportamento': [
    {
      id: 10001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2025)",
      topic: "Motivação - Teoria dos Dois Fatores de Herzberg",
      type: "multiple",
      statement: "De acordo com a Teoria dos Dois Fatores proposta por Frederick Herzberg sobre a motivação no trabalho, assinale a alternativa correta:",
      options: [
        "O salário, os benefícios sociais e as condições físicas de trabalho são fatores motivacionais intrínsecos que geram satisfação duradoura.",
        "Os fatores higiênicos são intrínsecos ao conteúdo do cargo e compreendem o reconhecimento e a autorrealização.",
        "Os fatores higiênicos (extrínsecos, como salário e condições ambientais), quando ótimos, apenas evitam a insatisfação dos trabalhadores, mas não são capazes de elevar a motivação de forma sustentada.",
        "Os fatores motivacionais estão relacionados exclusivamente ao ambiente físico externo e à estabilidade no emprego.",
        "Satisfação e insatisfação são polos opostos de uma mesma dimensão contínua determinada apenas pela remuneração."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Para Herzberg, Fatores Higiênicos (extrínsecos: salário, condições físicas, chefia, benefícios) apenas evitam a insatisfação. A motivação real vem dos Fatores Motivacionais (intrínsecos ao cargo: responsabilidade, reconhecimento, progresso e o trabalho em si)."
    },
    {
      id: 10002,
      source: "FGV – Técnico Administrativo / Câmara Municipal (2023)",
      topic: "Gestão de Pessoas - Os 6 Processos de Chiavenato",
      type: "multiple",
      statement: "Segundo Idalberto Chiavenato, a moderna Gestão de Pessoas estrutura-se em seis processos básicos: Agregar, Aplicar, Recompensar, Desenvolver, Manter e Monitorar pessoas. As atividades de 'Desenho de Cargos' e 'Avaliação de Desempenho' inserem-se especificamente no processo de:",
      options: [
        "Agregar pessoas.",
        "Aplicar pessoas.",
        "Recompensar pessoas.",
        "Manter pessoas.",
        "Monitorar pessoas."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. O processo de APLICAR pessoas inclui integração/orientação, modelagem/desenho de cargos e avaliação de desempenho. (Agregar = recrutamento e seleção; Desenvolver = treinamento)."
    },
    {
      id: 10003,
      source: "CEBRASPE – Assistente em Administração / UFPE (2023)",
      topic: "Clima Organizacional vs. Cultura Organizacional",
      type: "tf",
      statement: "[Questão 3 - Clima vs. Cultura Organizacional]\n\nO clima organizacional refere-se à atmosfera psicológica momentânea percebida pelos membros da organização, sendo mais superficial e suscetível a mudanças no curto prazo do que a cultura organizacional, a qual representa valores e pressupostos enraizados historicamente.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Clima é um retrato temporal da percepção e satisfação dos colaboradores (curto prazo). Cultura é o conjunto profundo de valores, crenças e rituais construído ao longo do tempo."
    },
    {
      id: 10004,
      source: "INSTITUTO AOCP – Assistente em Administração / UFS (2023)",
      topic: "Liderança e Comportamento - Grupo vs. Equipe",
      type: "multiple",
      statement: "No estudo do comportamento organizacional e do trabalho coletivo, a distinção fundamental entre um 'Grupo de Trabalho' e uma 'Equipe de Trabalho' reside no fato de que, na Equipe de Trabalho:",
      options: [
        "o esforço é estritamente individual, não havendo responsabilidade compartilhada pelo resultado global.",
        "a sinergia é positiva, as habilidades são complementares e a responsabilidade pelos resultados é ao mesmo tempo individual e mútua (coletiva).",
        "existe um líder autocrático que impede a comunicação horizontal entre os membros.",
        "as metas servem apenas para compartilhar informações, gerando sinergia neutra ou negativa.",
        "todos os integrantes possuem exatamente a mesma formação acadêmica e executam tarefas isoladas."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na Equipe de Trabalho há sinergia positiva (o todo é maior que a soma das partes), habilidades complementares e responsabilidade individual e mútua."
    },
    {
      id: 10005,
      source: "VUNESP – Assistente em Administração / UFABC (2024)",
      topic: "Teoria da Hierarquia das Necessidades de Maslow",
      type: "multiple",
      statement: "Na Pirâmide das Necessidades Humanas de Abraham Maslow, as necessidades dividem-se em primárias (fisiológicas e de segurança) e secundárias (sociais, de estima e de autorrealização). Quando um servidor público busca fazer parte de um grupo harmonioso, ter amizades no setor e sentir-se aceito pelos colegas, ele está buscando satisfazer necessidades:",
      options: [
        "fisiológicas.",
        "de segurança.",
        "sociais (ou de associação/afeto).",
        "de autorrealização plena.",
        "higiênicas salariais."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. As necessidades sociais (3º nível da pirâmide de Maslow) envolvem afeto, aceitação pelo grupo, amizade e pertencimento social."
    }
  ],

  'assistente-recursos-materiais-estoques': [
    {
      id: 11001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2025)",
      topic: "Gestão de Estoques - Cálculo do Ponto de Pedido",
      type: "multiple",
      statement: "O almoxarifado central da UFBA consome, em média, 40 caixas de papel A4 por dia útil. Sabendo-se que o tempo de reposição (lead time) do fornecedor contratado é de 8 dias úteis e que o setor mantém um estoque mínimo (ou de segurança) de 100 caixas, o Ponto de Pedido (PP) desse item será atingido quando o saldo em estoque chegar a:",
      options: [
        "320 caixas.",
        "420 caixas.",
        "220 caixas.",
        "500 caixas.",
        "148 caixas."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Fórmula do Ponto de Pedido: PP = (Consumo Médio × Tempo de Reposição) + Estoque Mínimo -> PP = (40 × 8) + 100 = 320 + 100 = 420 caixas."
    },
    {
      id: 11002,
      source: "FGV – Assistente Administrativo / TJ-RO (2022)",
      topic: "Classificação de Materiais - Curva ABC vs. Criticidade XYZ",
      type: "multiple",
      statement: "Na administração de recursos materiais, utilizam-se diferentes critérios para classificar os itens de estoque. Ao passo que a classificação ABC ordena os itens com base no valor financeiro de consumo acumulado, a classificação XYZ avalia o grau de criticidade operacional do material. Nesse sentido, um item classificado como 'Classe Z' caracteriza-se por:",
      options: [
        "apresentar baixa importância operacional e possuir diversos materiais substitutos no almoxarifado.",
        "ser um material de máxima criticidade (imprescindível), cuja falta acarreta a paralisação de atividades essenciais da instituição e que não possui substituto imediato.",
        "representar 80% do valor financeiro do estoque, mas ser descartável para a operação.",
        "ser obrigatoriamente um bem imóvel de uso especial da autarquia.",
        "ter criticidade intermediária e facilidade de aquisição imediata no comércio local."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na classificação XYZ (criticidade operacional): X = baixa criticidade; Y = média criticidade; Z = ALTA criticidade / imprescindível (sua falta paralisa as operações essenciais)."
    },
    {
      id: 11003,
      source: "CEBRASPE – Assistente em Administração / UnB (2022)",
      topic: "Classificação de Materiais - Atributos e Etapas",
      type: "tf",
      statement: "[Questão 3 - Atributos da Classificação de Materiais]\n\nUm sistema eficiente de classificação de materiais deve reunir três atributos fundamentais: abrangência (tratar de uma gama completa de características), flexibilidade (permitir adaptações e inclusão de novos itens) e praticidade (ser simples, direto e sem complexidades desnecessárias).",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Os três atributos clássicos da classificação de materiais (Viana / Dias) são Abrangência, Flexibilidade e Praticidade."
    },
    {
      id: 11004,
      source: "INSTITUTO AOCP – Assistente em Administração / UFOB (2023)",
      topic: "Etapas da Classificação - Simplificação vs. Especificação",
      type: "multiple",
      statement: "Dentre as etapas da classificação de materiais, aquela que consiste na redução da grande variedade de itens utilizados para uma mesma finalidade (por exemplo, manter em catálogo apenas dois modelos de grampeador em vez de dez modelos similares) denomina-se:",
      options: [
        "Catalogação.",
        "Simplificação.",
        "Tombamento.",
        "Alienação.",
        "Inventário rotativo."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Simplificação é a etapa que reduz a diversidade/variedade de itens que se destinam a um mesmo fim técnico, facilitando compras e armazenagem."
    },
    {
      id: 11005,
      source: "FCC – Técnico Administrativo / TRT-5 Bahia (2023)",
      topic: "Almoxarifado - Recebimento e Conferência Cega",
      type: "multiple",
      statement: "No recebimento de materiais no almoxarifado de uma autarquia federal, utiliza-se frequentemente a técnica denominada 'conferência cega' (blind check) durante a etapa de conferência quantitativa. Essa técnica consiste em:",
      options: [
        "aceitar a mercadoria sem abrir as caixas, confiando exclusivamente no peso informado pela transportadora.",
        "disponibilizar ao conferente uma guia de recebimento com a descrição dos itens, porém omitindo as quantidades constantes na nota fiscal, para forçá-lo a contar fisicamente todo o lote recebido.",
        "dispensar a conferência qualitativa para produtos químicos e hospitalares.",
        "realizar o pagamento antecipado ao fornecedor antes da entrega provisória.",
        "delegar ao motorista da transportadora o registro da nota de empenho no sistema."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na conferência cega (blind check), omite-se do conferente a quantidade faturada na Nota Fiscal, garantindo que ele realize a contagem física real e imparcial dos itens."
    }
  ],

  'assistente-arquivologia-completa': [
    {
      id: 12001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2025)",
      topic: "Arquivologia - Princípio da Proveniência",
      type: "multiple",
      statement: "O princípio fundamental da Arquivologia segundo o qual o arquivo produzido por uma entidade coletiva, pessoa ou família (fundo de arquivo) não deve ser misturado aos de outras entidades produtoras, mantendo-se agrupado e individualizado segundo sua origem, é denominado Princípio da:",
      options: [
        "Temporalidade precaucional.",
        "Proveniência (ou Respeito aos Fundos).",
        "Divisibilidade temática.",
        "Alienação documental.",
        "Microfilmagem substitutiva."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. O Princípio da Proveniência (ou Respeito aos Fundos) é o pilar máximo da Arquivologia: proíbe mesclar documentos de fundos/origens distintos."
    },
    {
      id: 12002,
      source: "CEBRASPE – Assistente em Administração / FUB-UnB (2023)",
      topic: "Teoria das Três Idades e Destinação",
      type: "tf",
      statement: "[Questão 2 - Ciclo Vital dos Documentos]\n\nOs documentos localizados nos arquivos correntes e intermediários possuem valor primário e podem ser eliminados após o cumprimento dos prazos previstos na Tabela de Temporalidade; já os documentos recolhidos ao arquivo permanente possuem valor secundário (histórico, probatório e informativo) e são inalienáveis e imprescritíveis, jamais podendo ser eliminados.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. Corrente e Intermediário detêm valor primário (administrativo/legal/fiscal). Permanente detém valor secundário (histórico/cultural) e sua guarda é definitiva (Lei 8.159/91, art. 10)."
    },
    {
      id: 12003,
      source: "FGV – Técnico Administrativo / TJ-DFT (2023)",
      topic: "Transferência vs. Recolhimento",
      type: "multiple",
      statement: "Na gestão do ciclo vital dos documentos arquivísticos, a passagem de documentos do arquivo corrente para o arquivo intermediário e a passagem de documentos para o arquivo permanente denominam-se, respectivamente:",
      options: [
        "recolhimento e transferência.",
        "transferência e recolhimento.",
        "descarte e tombamento.",
        "protocolo e expedição.",
        "empréstimo e consulta."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Passagem para o arquivo intermediário = TRANSFERÊNCIA. Entrada no arquivo permanente = RECOLHIMENTO."
    },
    {
      id: 12004,
      source: "INSTITUTO AOCP – Assistente em Administração / UFRB (2023)",
      topic: "Métodos de Arquivamento - Regras de Alfabetação",
      type: "multiple",
      statement: "Um Assistente em Administração precisa arquivar pelo método alfabético (nominal), seguindo as regras oficiais de alfabetação, as pastas funcionais dos servidores: (1) Antônio de Oliveira Neto; (2) Humberto Castelo Branco; e (3) Maria das Graças Silva. A correta entrada (transposição) desses três nomes nas respectivas pastas é:",
      options: [
        "NETO, Antônio de Oliveira / BRANCO, Humberto Castelo / SILVA, Maria das Graças.",
        "OLIVEIRA NETO, Antônio de / CASTELO BRANCO, Humberto / SILVA, Maria das Graças.",
        "DE OLIVEIRA NETO, Antônio / CASTELO, Humberto Branco / DAS GRAÇAS SILVA, Maria.",
        "ANTÔNIO, Oliveira Neto de / HUMBERTO, Castelo Branco / MARIA, Silva das Graças.",
        "NETO, Oliveira Antônio / BRANCO, Castelo Humberto / GRAÇAS, Maria Silva."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Regras de alfabetação: 1) Graus de parentesco (Filho, Neto, Sobrinho, Júnior) acompanham o penúltimo sobrenome (OLIVEIRA NETO, Antônio de); 2) Sobrenomes compostos de substantivo + adjetivo não se separam (CASTELO BRANCO, Humberto); 3) Partículas 'de, da, das' não contam na ordenação (SILVA, Maria das Graças)."
    },
    {
      id: 12005,
      source: "VUNESP – Arquivista / Prefeitura de Campinas (2023)",
      topic: "Protocolo, Conservação e Microfilmagem",
      type: "multiple",
      statement: "Sobre as rotinas de Protocolo, Conservação Preventiva e Microfilmagem de documentos públicos, assinale a alternativa correta:",
      options: [
        "Ao receber uma correspondência classificada como sigilosa/confidencial ou particular, o setor de protocolo deve abri-la imediatamente para ler seu conteúdo.",
        "A higienização mecânica de documentos em suporte papel deve ser feita com panos úmidos e alvejante químico.",
        "Documentos de valor permanente não podem ser destruídos (eliminados) mesmo após terem sido microfilmados ou digitalizados.",
        "O uso de clipes metálicos oxidáveis e fitas adesivas comuns é recomendado na conservação de documentos históricos.",
        "O método numérico dígito-terminal dispensa o uso de índice, sendo classificado como sistema direto."
      ],
      correctAnswer: 2,
      explanation: "Gabarito: C. Pela Lei 5.433/68 e Lei 8.159/91, os documentos de valor histórico/permanente jamais podem ser eliminados, mesmo após microfilmagem ou digitalização."
    }
  ],

  'assistente-atendimento-publico': [
    {
      id: 13001,
      source: "INSTITUTO AVALIA – Assistente em Administração / Concurso Público (2025)",
      topic: "Carta de Serviços ao Usuário - Lei nº 13.460/2017",
      type: "multiple",
      statement: "Nos termos da Lei nº 13.460/2017, que dispõe sobre a participação, proteção e defesa dos direitos do usuário dos serviços públicos da administração pública, os órgãos e entidades (incluindo as universidades federais) devem divulgar a Carta de Serviços ao Usuário, cujo objetivo é:",
      options: [
        "substituir o estatuto disciplinar dos servidores públicos federais.",
        "informar o usuário sobre os serviços prestados pelo órgão ou entidade, as formas de acesso a esses serviços e seus compromissos e padrões de qualidade de atendimento ao público.",
        "cobrar taxas administrativas pela emissão de certidões pessoais.",
        "restringir o acesso aos canais de ouvidoria apenas a cidadãos assistidos por advogado.",
        "manter sob sigilo os prazos máximos para a prestação dos serviços públicos."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Conforme o art. 7º da Lei nº 13.460/2017, a Carta de Serviços ao Usuário tem por objetivo informar o usuário sobre os serviços prestados, formas de acesso, requisitos, documentos, etapas e prazos máximos."
    },
    {
      id: 13002,
      source: "FGV – Técnico Administrativo / Receita Federal (2023)",
      topic: "Simplificação do Atendimento - Decreto nº 9.094/2017 e Lei nº 13.726/2018",
      type: "multiple",
      statement: "Um estudante compareceu ao setor de atendimento da UFBA portando seu documento original de identidade e uma cópia simples do histórico escolar para instruir um requerimento administrativo. De acordo com o Decreto nº 9.094/2017 e a Lei nº 13.726/2018 (Racionalização de Atos Administrativos), o Assistente em Administração deve:",
      options: [
        "recusar o protocolo e exigir que o estudante reconheça firma e autentique a cópia em cartório extrajudicial.",
        "confrontar a cópia com o documento original apresentado no balcão e atestar ele próprio a autenticidade da cópia, sendo vedado exigir reconhecimento de firma ou autenticação cartorária sem previsão legal.",
        "reter o documento original do estudante por 90 dias úteis.",
        "exigir declaração de pobreza reconhecida por duas testemunhas.",
        "cobrar emolumentos internos para conferir o documento."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. Na relação dos órgãos públicos com os usuários, é dispensado o reconhecimento de firma e a autenticação de cópia em cartório, cabendo ao próprio agente administrativo confrontar a assinatura ou autenticar a cópia à vista do original."
    },
    {
      id: 13003,
      source: "CEBRASPE – Assistente em Administração / MGI (2024)",
      topic: "Comunicação Interpessoal - Barreiras à Comunicação",
      type: "tf",
      statement: "[Questão 3 - Barreiras Semânticas no Atendimento]\n\nQuando um servidor público utiliza, durante o atendimento presencial ao cidadão, vocabulário excessivamente rebuscado, siglas burocráticas internas e jargões técnicos incompreensíveis para o usuário, configura-se uma barreira semântica à comunicação eficaz.",
      options: ["Certo", "Errado"],
      correctAnswer: 0,
      explanation: "Gabarito: CERTO. A barreira semântica decorre de limitações ou distorções nos símbolos/palavras utilizados (jargões técnicos, siglas desconhecidas, ambiguidade lexical)."
    },
    {
      id: 13004,
      source: "INSTITUTO AOCP – Assistente em Administração / IF-BA (2023)",
      topic: "Ouvidoria - Prazo da Lei nº 13.460/2017",
      type: "multiple",
      statement: "De acordo com o art. 16 da Lei nº 13.460/2017, a ouvidoria do órgão ou entidade pública deverá elaborar e apresentar resposta conclusiva às manifestações recebidas dos usuários no prazo máximo de:",
      options: [
        "5 dias, improrrogáveis.",
        "10 dias, prorrogáveis por mais 5 dias.",
        "20 dias, prorrogáveis por mais 10 dias.",
        "30 dias, prorrogáveis de forma justificada uma única vez, por igual período.",
        "60 dias úteis, sem possibilidade de prorrogação."
      ],
      correctAnswer: 3,
      explanation: "Gabarito: D. Nos termos do art. 16 da Lei 13.460/2017, o prazo da Ouvidoria para decisão administrativa final é de até 30 dias, prorrogável de forma justificada uma única vez por igual período (+30 dias)."
    },
    {
      id: 13005,
      source: "FCC – Técnico Judiciário / TRT (2023)",
      topic: "Atendimento Prioritário - Lei nº 10.048/2000 e Estatuto do Idoso",
      type: "multiple",
      statement: "A respeito das normas federais sobre atendimento prioritário em repartições públicas (Lei nº 10.048/2000 e Lei nº 10.741/2003), assinale a afirmativa correta:",
      options: [
        "O direito ao atendimento prioritário restringe-se exclusivamente a gestantes e idosos acima de 70 anos.",
        "Pessoas com transtorno do espectro autista (TEA), pessoas com deficiência, gestantes, lactantes, pessoas com crianças de colo, obesos e idosos (60 anos ou mais) têm direito a atendimento prioritário, gozando os maiores de 80 anos de prioridade especial sobre os demais idosos.",
        "Doadores de sangue e pessoas com mobilidade reduzida não possuem direito a atendimento prioritário.",
        "A prioridade no atendimento aplica-se apenas a bancos privados, não alcançando autarquias federais.",
        "Os idosos a partir de 65 anos têm prioridade sobre as pessoas com deficiência grave."
      ],
      correctAnswer: 1,
      explanation: "Gabarito: B. A Lei 10.048/2000 garante atendimento prioritário a PcD, TEA, idosos (60+), gestantes, lactantes, pessoas com criança de colo, obesos, mobilidade reduzida e doadores de sangue; e o Estatuto da Pessoa Idosa garante superprioridade aos maiores de 80 anos dentre os idosos."
    }
  ]
};

export function getUfbaSpecialistQuestionsForLesson(subjectName: string, lessonNum: number): QuestionData[] | undefined {
  const s = (subjectName || '').trim().toLowerCase();
  if (s.includes('auditoria') && lessonNum === 17) return UFBA_SPECIALIST_QUESTIONS['pericia-contabil'];
  if ((s.includes('casp') || s.includes('setor público') || s.includes('setor publico')) && lessonNum === 19) return UFBA_SPECIALIST_QUESTIONS['casp-municipal-siconfi'];
  if (s.includes('contabil') && !s.includes('casp') && lessonNum === 31) return UFBA_SPECIALIST_QUESTIONS['contabilidade-custos-siafi'];
  if ((s.includes('portug') || s.includes('língua') || s.includes('lingua')) && lessonNum === 16) return UFBA_SPECIALIST_QUESTIONS['redacao-oficial-variacao'];
  if (s.includes('administrativ')) {
    if (lessonNum === 25) return UFBA_SPECIALIST_QUESTIONS['legislacao-ufba-ifes'];
    if (lessonNum === 26) return UFBA_SPECIALIST_QUESTIONS['governo-digital-governanca'];
    if (lessonNum === 27) return UFBA_SPECIALIST_QUESTIONS['etica-lai-lgpd'];
    if (lessonNum === 28) return UFBA_SPECIALIST_QUESTIONS['assistente-tga-estruturas-podc'];
    if (lessonNum === 29) return UFBA_SPECIALIST_QUESTIONS['assistente-processos-qualidade'];
    if (lessonNum === 30) return UFBA_SPECIALIST_QUESTIONS['assistente-gestao-pessoas-comportamento'];
    if (lessonNum === 31) return UFBA_SPECIALIST_QUESTIONS['assistente-recursos-materiais-estoques'];
    if (lessonNum === 32) return UFBA_SPECIALIST_QUESTIONS['assistente-arquivologia-completa'];
    if (lessonNum === 33) return UFBA_SPECIALIST_QUESTIONS['assistente-atendimento-publico'];
  }
  return undefined;
}
