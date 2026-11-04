import { LessonProposition, SubjectLessonMatrix } from './types';

// ============================================================================
// BATERIA 2 - PROPOSIÇÕES APROFUNDADAS, INÉDITAS E COM FOCO EM NOVOS TÓPICOS
// Cada aula aborda temas, jurisprudência e detalhes técnicos que complementam
// a Bateria 1, garantindo 100% de variedade e zero repetição.
// ============================================================================

export const AFO_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  // Aula 00: Teoria Geral do Orçamento, Public Choice e Emendas Impositivas
  0: [
    {
      sub: 'Teoria da Escolha Pública (Public Choice) e Falhas de Governo',
      ref: 'Teoria de James Buchanan e Gordon Tullock',
      t: 'A Teoria da Escolha Pública analisa as decisões orçamentárias sob a premissa de que os agentes políticos e burocratas atuam maximizando suas próprias utilidades (rent-seeking e busca de votos), justificando regras fiscais restritivas para conter a expansão excessiva do gasto público.',
      f: 'A Teoria da Escolha Pública assume que os governantes são agentes perfeitamente benevolentes que buscam com exclusividade o bem-estar social neutro sem qualquer interferência de grupos de interesse.',
      exp: 'James Buchanan (Prêmio Nobel) demonstrou que políticos e burocratas respondem a incentivos próprios (busca por reeleição, poder e orçamento), gerando déficits estruturais se não houver amarras constitucionais.'
    },
    {
      sub: 'Orçamento Participativo e Audiências Públicas',
      ref: 'Art. 48, parágrafo único, I da LRF e Estatuto da Cidade',
      t: 'O orçamento participativo é um mecanismo de democracia deliberativa em que a sociedade civil participa diretamente da definição de prioridades de investimentos locais, sendo reforçado pela LRF mediante a exigência de incentivo à participação popular e realização de audiências públicas.',
      f: 'A realização de audiências públicas na discussão dos planos e orçamentos é facultativa e fica a critério discricionário exclusivo do Poder Executivo em cidades com menos de 100 mil habitantes.',
      exp: 'Art. 48, parágrafo único, I da LRF: é obrigatório incentivar a participação popular e a realização de audiências públicas durante os processos de elaboração e discussão do PPA, LDO e LOA.'
    },
    {
      sub: 'Emendas Parlamentares Impositivas Individuais e de Bancada',
      ref: 'Art. 166, §§ 9º a 19 da CF/88 (EC nº 86/2015, EC nº 100/2019 e EC nº 126/2022)',
      t: 'As emendas individuais impositivas ao projeto de LOA possuem execução orçamentária e financeira obrigatória, limitando-se ao percentual de 2% da receita corrente líquida do exercício anterior para a União, sendo que metade desse montante deve ser destinada a ações e serviços públicos de saúde.',
      f: 'A execução das emendas parlamentares individuais de execução obrigatória é absoluta e não pode sofrer limitação de empenho e movimentação financeira em nenhuma hipótese de frustração de receitas.',
      exp: 'Art. 166, § 11 da CF/88: caso a estimativa de receita demonstre risco de não cumprimento da meta fiscal, as dotações de emendas impositivas poderão sofrer limitação proporcional ao contingenciamento das demais despesas discricionárias.'
    },
    {
      sub: 'Rigidez Orçamentária e Despesas Obrigatórias',
      ref: 'Finanças Públicas e Doutrina Orçamentária',
      t: 'A rigidez orçamentária no Brasil decorre da elevada vinculação constitucional de receitas e da obrigatoriedade legal de execução da grande maioria das despesas (pessoal, previdência e vinculações de saúde/educação), restando uma margem mínima para despesas discricionárias de investimento.',
      f: 'No orçamento público federal, mais de 80% dos recursos são discricionários e de livre remanejamento pelo Chefe do Poder Executivo sem necessidade de autorização legislativa.',
      exp: 'No Brasil, mais de 90% do orçamento da União é engessado por despesas de natureza obrigatória e vinculações constitucionais/legais.'
    },
    {
      sub: 'Orçamento Base-Zero (OBZ) vs. Orçamento Incremental',
      ref: 'Peter Pyhrr e Técnicas Orçamentárias',
      t: 'O Orçamento Base-Zero rompe com a inércia do incrementalismo orçamentário ao exigir que cada unidade orçamentária justifique todas as suas despesas a cada ciclo como se nenhum programa anterior existisse, mediante a elaboração de pacotes de decisão e ordenação por prioridades.',
      f: 'O Orçamento Base-Zero utiliza as despesas fixadas no exercício imediatamente anterior como base fixa inquestionável, aplicando apenas um reajuste pela taxa de inflação.',
      exp: 'Essa é a definição de Orçamento Incremental. O Orçamento Base-Zero (OBZ) rejeita a base histórica e reavalia a necessidade e custo de cada atividade do zero.'
    }
  ],

  // Aula 01: Princípios Orçamentários Avançados
  1: [
    {
      sub: 'Regra de Ouro Orçamentária (Equilíbrio das Operações de Crédito)',
      ref: 'Art. 167, III da CF/88',
      t: 'A Constituição Federal veda a realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta.',
      f: 'A regra de ouro constitucional autoriza livremente que os entes contraiam empréstimos financeiros para cobrir despesas correntes de pessoal e encargos sem necessidade de aprovação legislativa qualificada.',
      exp: 'Art. 167, III da CF/88: A Regra de Ouro proíbe o endividamento estatal para custear despesas de consumo corrente, permitindo operações de crédito apenas até o montante das despesas de capital (investimentos/amortização da dívida), salvo com aprovação por maioria absoluta.'
    },
    {
      sub: 'Princípio da Transparência Fiscal Ativa e Passiva',
      ref: 'Art. 48 e Art. 48-A da LRF (LC nº 101/2000 e LC nº 131/2009)',
      t: 'O princípio da transparência fiscal impõe a disponibilização, em tempo real, em meios eletrônicos de acesso público, de informações pormenorizadas sobre a execução orçamentária e financeira, incluindo atos praticados pelas unidades gestoras na liquidação e no pagamento das despesas.',
      f: 'A exigência de transparência fiscal em tempo real na internet aplica-se apenas aos Municípios com população superior a quinhentos mil habitantes, estando os demais dispensados de publicar suas contas na web.',
      exp: 'A LC 131/2009 estendeu a obrigatoriedade de divulgação em tempo real a todos os entes da Federação, preservando apenas prazos diferenciados de transição que já se esgotaram.'
    },
    {
      sub: 'Princípio da Clareza (Inteligibilidade Orçamentária)',
      ref: 'Doutrina de Direito Financeiro e Orçamento',
      t: 'O princípio da clareza determina que o orçamento deve ser expresso em linguagem clara, inteligível e acessível a qualquer cidadão, permitindo que a sociedade compreenda de onde vêm os recursos e para onde são direcionados os gastos públicos.',
      f: 'O princípio da clareza exige que todas as informações orçamentárias sejam codificadas em fórmulas matemáticas complexas compreendidas unicamente por técnicos fazendários.',
      exp: 'O princípio da clareza é vetor de cidadania e controle social, vedando jargões herméticos e termos ambíguos na LOA.'
    },
    {
      sub: 'Exceções Constitucionais ao Princípio da Não Afetação de Impostos',
      ref: 'Art. 167, IV da CF/88',
      t: 'Ressalvam-se da vedação de vinculação da receita de impostos: a destinação de recursos para as ações e serviços públicos de saúde, manutenção e desenvolvimento do ensino, administração tributária, prestação de garantias às operações de crédito por antecipação de receita e garantias à União.',
      f: 'O princípio da não afetação veda qualquer tipo de vinculação para toda e qualquer espécie tributária, inclusive taxas judiciárias e contribuições de melhoria.',
      exp: 'O art. 167, IV veda exclusivamente a vinculação da receita de IMPOSTOS (e não das demais espécies tributárias) e ainda prevê exceções expressas (saúde, educação, admin. tributária, garantias e repartições constitucionais).'
    },
    {
      sub: 'Princípio da Uniformidade (Consistência Contábil)',
      ref: 'MCASP e Princípios Orçamentários',
      t: 'O princípio da uniformidade exige que o orçamento mantenha critérios contábeis e classificatórios consistentes ao longo dos exercícios financeiros, permitindo a comparabilidade histórica das receitas arrecadadas e despesas executadas.',
      f: 'A legislação orçamentária obriga o ente a alterar anualmente todas as nomenclaturas de contas e classificadores contábeis para impedir a consolidação de séries temporais.',
      exp: 'A comparabilidade dos dados ao longo do tempo depende da consistência dos métodos contábeis e orçamentários.'
    }
  ],

  // Aula 02: Créditos Adicionais Avançados
  2: [
    {
      sub: 'Créditos Extraordinários: Rigor de Urgência e Imprevisibilidade (STF - ADI 4.048)',
      ref: 'Art. 167, § 3º da CF/88 e Jurisprudência do STF',
      t: 'Segundo assentado pelo STF no julgamento da ADI 4.048, a abertura de créditos extraordinários por Medida Provisória exige o atendimento cumulativo e rigoroso dos pressupostos de urgência e imprevisibilidade, sendo inconstitucional sua utilização para financiar despesas corriqueiras e previsíveis de custeio administrativo.',
      f: 'O Poder Executivo pode abrir créditos extraordinários para despesas orçamentárias de investimento rotineiro planejadas desde o exercício anterior, desde que o Chefe do Executivo considere a obra socialmente relevante.',
      exp: 'A CF/88 e o STF exigem simultaneamente: urgência E imprevisibilidade (como comoção interna, guerra ou calamidade pública). Despesas previsíveis devem ser cobertas por créditos suplementares ou especiais.'
    },
    {
      sub: 'Reserva de Contingência como Fonte para Abertura de Créditos',
      ref: 'Art. 5º, III da LRF e Portaria MOG nº 42/1999',
      t: 'A reserva de contingência constitui dotação global sem destinação específica a órgão ou programa, destinada ao atendimento de passivos contingentes e outros riscos fiscais imprevistos, podendo ser utilizada legalmente como fonte para abertura de créditos suplementares ou especiais.',
      f: 'A reserva de contingência deve ser executada e empenhada diretamente como despesa orçamentária própria sem necessidade de remanejamento para créditos adicionais.',
      exp: 'A reserva de contingência não é despesa em si; ela não pode ser empenhada diretamente, funcionando como fonte de anulação de dotação para abertura de créditos adicionais.'
    },
    {
      sub: 'Reabertura de Créditos Adicionais e Impacto no Novo Exercício',
      ref: 'Art. 167, § 2º da CF/88',
      t: 'Os créditos especiais e extraordinários abertos nos últimos quatro meses do exercício financeiro podem ser reabertos nos limites dos seus saldos no exercício financeiro seguinte, sendo incorporados ao orçamento do novo ano.',
      f: 'Os créditos suplementares abertos nos últimos quatro meses do exercício podem ser reabertos no exercício seguinte até o encerramento do novo mandato.',
      exp: 'Art. 167, § 2º da CF: APENAS créditos especiais e extraordinários podem ser reabertos (créditos SUPLEMENTARES não podem ser reabertos jamais; extinguem-se em 31 de dezembro).'
    },
    {
      sub: 'Cômputo do Excesso de Arrecadação: Deduções Obrigatórias',
      ref: 'Art. 43, § 3º da Lei nº 4.320/1964',
      t: 'Para fins de abertura de créditos suplementares e especiais, o excesso de arrecadação corresponde ao saldo positivo das diferenças acumuladas mês a mês entre a arrecadação prevista e a realizada, considerando-se ainda a tendência do exercício e deduzindo-se a importância dos créditos extraordinários abertos no exercício.',
      f: 'No cálculo do excesso de arrecadação disponível, não se deduzem os créditos adicionais já autorizados no ano, bastando somar as receitas que entraram no caixa sem qualquer ajuste.',
      exp: 'Art. 43, § 3º da Lei 4.320/64: devem ser obrigatoriamente deduzidos os créditos adicionais já abertos com base nessa mesma fonte de excesso de arrecadação.'
    }
  ],

  // Aula 03: Processo Legislativo Orçamentário e Execução
  3: [
    {
      sub: 'Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO)',
      ref: 'Art. 166, § 1º da CF/88',
      t: 'Os projetos de lei relativos ao PPA, às LDO, à LOA e aos créditos adicionais são examinados obrigatoriamente pela Comissão Mista Permanente de Deputados e Senadores (CMO), à qual cabe emitir parecer sobre eles e sobre as contas apresentadas anualmente pelo Presidente da República.',
      f: 'A análise dos projetos de lei orçamentária é realizada separadamente pela Câmara dos Deputados e pelo Senado Federal em comissões isoladas, sem qualquer atuação conjunta de comissão mista.',
      exp: 'Art. 166, § 1º da CF/88: cabe a uma comissão mista permanente de Senadores e Deputados (CMO) examinar e emitir parecer prévio sobre os projetos orçamentários.'
    },
    {
      sub: 'Veto Presidencial à Lei Orçamentária Anual',
      ref: 'Art. 66 da CF/88 e Jurisprudência Orçamentária',
      t: 'O Chefe do Poder Executivo pode vetar dotações orçamentárias constantes do projeto de LOA aprovado pelo Legislativo, de forma total ou parcial, sendo que o veto parcial deve abranger o texto integral de artigo, parágrafo, inciso ou alínea, ou a totalidade da dotação da ação orçamentária.',
      f: 'O Presidente da República tem o poder de alterar diretamente o valor monetário de uma dotação orçamentária aprovada pelo Congresso, reduzindo pela metade a quantia sem vetar o dispositivo correspondente.',
      exp: 'O veto não permite modificar texto ou quantias; é proibido o "veto de palavras ou frações de dotação" (vedação ao veto de palavras soltas ou números isolados).'
    },
    {
      sub: 'Reestimativa de Receitas pelo Poder Legislativo',
      ref: 'Art. 166, § 8º da CF/88 e Art. 12 da LRF',
      t: 'As emendas ao projeto de lei do orçamento anual ou aos projetos que o modifiquem somente podem ser aprovadas caso indiquem os recursos necessários, não se admitindo a reestimativa de receita pelo Legislativo, salvo para comprovar erro ou omissão de ordem técnica ou legal.',
      f: 'Os parlamentares podem reestimar livremente para cima a receita orçamentária sem qualquer demonstração técnica com o único objetivo de criar espaço fiscal para novas emendas.',
      exp: 'Art. 166, § 8º da CF: a reestimativa de receitas no projeto de lei orçamentária pelo Congresso somente é admitida se comprovado erro ou omissão de ordem técnica ou legal.'
    },
    {
      sub: 'Cronograma Mensal de Desembolso e Programação Financeira',
      ref: 'Art. 8º da LRF',
      t: 'Até trinta dias após a publicação dos orçamentos, o Poder Executivo estabelecerá a programação financeira e o cronograma de execução mensal de desembolso para manter o equilíbrio entre receitas e despesas ao longo do exercício.',
      f: 'O cronograma mensal de desembolso financeiro deve ser publicado em até cento e oitenta dias após o encerramento do primeiro semestre do exercício financeiro.',
      exp: 'Art. 8º da LRF: o prazo legal é estrito de até 30 (trinta) dias após a publicação dos orçamentos.'
    }
  ],

  // Aula 04: PPA, LDO e LOA - Instrumentos de Gestão Integrados
  4: [
    {
      sub: 'Anexo de Metas Fiscais (AMF) da LDO',
      ref: 'Art. 4º, § 1º e § 2º da LRF',
      t: 'O Anexo de Metas Fiscais integrará o projeto de LDO e estabelecerá metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública, para o exercício a que se referir e para os dois seguintes.',
      f: 'O Anexo de Metas Fiscais da LDO define metas exclusivamente para o ano corrente da publicação, sem qualquer projeção plurianual de exercícios subsequentes.',
      exp: 'Art. 4º, § 1º da LRF: as metas fiscais devem cobrir o exercício a que se referir e os 2 (dois) exercícios seguintes (triênio).'
    },
    {
      sub: 'Anexo de Riscos Fiscais (ARF) da LDO',
      ref: 'Art. 4º, § 3º da LRF',
      t: 'O Anexo de Riscos Fiscais avalia os passivos contingentes e outros riscos capazes de afetar as contas públicas, informando as providências a serem tomadas caso venham a se concretizar (demandas judiciais, frustração de arrecadação, quebra de safras, etc.).',
      f: 'O Anexo de Riscos Fiscais lista exclusivamente os nomes dos servidores públicos exonerados por infração disciplinar.',
      exp: 'Art. 4º, § 3º da LRF: o ARF mapeia riscos orçamentários e fiscais imprevistos e passivos contingentes (ações judiciais trabalhistas/fiscais, garantias prestadas e eventos extraordinários).'
    },
    {
      sub: 'Orçamento de Investimento das Empresas Estatais na LOA',
      ref: 'Art. 165, § 5º, II da CF/88',
      t: 'O Orçamento de Investimento das Empresas em que a União, direta ou indiretamente, detenha a maioria do capital social com direito a voto abrange os dispêndios destinados a obras, aquisição de equipamentos e instalações das estatais não dependentes.',
      f: 'As empresas públicas estatais independentes (que não dependem de recursos do Tesouro para custeio) têm suas folhas de salários e despesas de consumo executadas integralmente dentro do Orçamento Fiscal da LOA.',
      exp: 'Estatais não dependentes integram apenas o Orçamento de Investimento (não têm suas receitas de mercado e folha executadas no Orçamento Fiscal ou da Seguridade Social).'
    }
  ],

  // ==========================================================================
  // Aula 05: RECEITA PÚBLICA - BATERIA 2 (100% INÉDITA E COM NOVOS TÓPICOS)
  // Estágios da Receita, 8 Dígitos do MCASP, Dívida Ativa, Taxa vs Tarifa,
  // Vinculações, DRU, Resultado Primário, Renúncia de Receitas e Restituições!
  // ==========================================================================
  5: [
    {
      sub: 'Estágios da Receita Pública: Previsão e Fixação de Metas',
      ref: 'Art. 12 da LRF e Art. 51 da Lei nº 4.320/1964',
      t: 'A previsão é a etapa de planejamento da receita que antecede a LOA, devendo obedecer às disposições da LRF, estimando-se a arrecadação com base na evolução histórica dos últimos três anos, reajustes monetários e efeitos de alterações na legislação tributária.',
      f: 'A previsão da receita orçamentária na LOA constitui teto limitador intransponível que impede os órgãos fazendários de arrecadarem recursos acima do montante projetado.',
      exp: 'Ao contrário da despesa pública (cujas dotações são limites máximos autorizados), a previsão de receita é mera estimativa: se a economia aquecer, o Estado pode e deve arrecadar além do previsto (excesso de arrecadação).'
    },
    {
      sub: 'Estágios da Receita: Lançamento Tributário e suas Três Modalidades (CTN)',
      ref: 'Arts. 147 a 150 do Código Tributário Nacional (CTN) e Art. 53 da Lei nº 4.320/1964',
      t: 'O lançamento é o ato privativo da autoridade administrativa que constitui o crédito tributário, dividindo-se em: Lançamento Direto/De Ofício (ex: IPTU e IPVA), Lançamento por Declaração/Misto (ex: ITBI e taxas com base em dados do contribuinte) e Lançamento por Homologação/Autolançamento (ex: ICMS, ISS e IR).',
      f: 'No lançamento por homologação, o pagamento do tributo só pode ser realizado após a autoridade fazendária lavrar notificação formal prévia e notificar pessoalmente o contribuinte.',
      exp: 'Art. 150 do CTN: no lançamento por homologação, o contribuinte antecipa o pagamento do imposto sem prévio exame da autoridade, operando-se a homologação posterior tácita ou expressa.'
    },
    {
      sub: 'Estágios da Receita: Arrecadação por Agentes Bancários Credenciados',
      ref: 'Art. 54 da Lei nº 4.320/1964 e MCASP',
      t: 'A arrecadação é o momento em que os contribuintes ou devedores entregam os recursos devidos ao Estado perante os agentes credenciados (rede bancária, caixas do Tesouro e postos fiscais), extinguindo-se a obrigação do cidadão.',
      f: 'A etapa da arrecadação ocorre quando o dinheiro é depositado na conta única do Tesouro Nacional no Banco Central, encerrando definitivamente o ciclo financeiro público.',
      exp: 'A entrega do dinheiro pelo cidadão ao banco é a ARRECADAÇÃO. A transferência posterior do banco arrecadador para a conta única do Tesouro constitui o estágio do RECOLHIMENTO.'
    },
    {
      sub: 'Estágios da Receita: Recolhimento, Unidade de Caixa e Conta Única',
      ref: 'Art. 56 da Lei nº 4.320/1964 e Art. 164, § 3º da CF/88',
      t: 'O recolhimento é a entrega diária dos valores arrecadados pelos bancos ou agentes arrecadadores à Conta Única do Tesouro, concretizando o princípio da unidade de caixa e garantindo a gestão centralizada das disponibilidades financeiras do ente público.',
      f: 'O princípio da unidade de caixa permite que cada secretaria e autarquia municipal mantenha suas próprias contas correntes dispersas em bancos privados sem centralização pelo Tesouro.',
      exp: 'Art. 56 da Lei 4.320/64 e Art. 164, § 3º da CF/88: o recolhimento centraliza-se na conta única do Tesouro (instituição oficial), vedando a dispersão de disponibilidades em contas descentralizadas.'
    },
    {
      sub: 'Classificação por Natureza da Receita: Estrutura Codificada de 8 Dígitos do MCASP',
      ref: 'Portaria Interministerial STN/SOF e Manual de Contabilidade Aplicada ao Setor Público (MCASP)',
      t: 'A classificação por natureza da receita orçamentária é codificada em 8 dígitos estruturados em: Categoria Econômica (1º dígito), Origem (2º dígito), Espécie (3º dígito), Rubrica (4º dígito), Alínea (5º dígito), Subalínea (6º e 7º dígitos) e Tipo (8º dígito).',
      f: 'A classificação da receita pública no Brasil adota uma sequência numérica aleatória de 3 dígitos sem correspondência com categoria econômica ou espécie contábil.',
      exp: 'O padrão nacional do MCASP define exatamente o esquema C.O.E.R.A.S.T com 8 níveis classificatórios para padronizar as contas públicas em todas as esferas federativas.'
    },
    {
      sub: 'O 8º Dígito (Tipo de Receita) no Padrão STN/MCASP',
      ref: 'Portaria STN/SOF nº 163/2001 e MCASP',
      t: 'O 8º dígito da classificação por natureza representa o Tipo de Receita, identificando a natureza jurídica do fluxo: 0 (não se aplica), 1 (receita principal), 2 (multas e juros de mora da receita), 3 (dívida ativa da receita) e 4 (multas e juros de mora da dívida ativa).',
      f: 'No 8º dígito da natureza da receita, o código 1 indica obrigatoriamente que a receita foi inscrita em dívida ativa há mais de cinco anos.',
      exp: 'O código 1 designa a RECEITA PRINCIPAL arrecadada espontaneamente ou via lançamento. A Dívida Ativa é representada pelos códigos 3 e 4.'
    },
    {
      sub: 'Classificação quanto à Regularidade: Receitas Ordinárias vs. Extraordinárias',
      ref: 'Doutrina de Finanças Públicas (Aliomar Baleeiro e MCASP)',
      t: 'Receitas Ordinárias são aquelas arrecadadas com regularidade, constância e periodicidade ao longo dos exercícios financeiros (como tributos contínuos e tarifas), enquanto Receitas Extraordinárias decorrem de circunstâncias anômalas, imprevisíveis e transitórias (como impostos extraordinários de guerra e doações acidentais).',
      f: 'Os tributos federais recorrentes como o Imposto de Renda e o IPI são classificados como receitas extraordinárias por oscilarem de acordo com as vendas mensais das indústrias.',
      exp: 'Receitas ordinárias são contínuas e integram o fluxo orçamentário estável normal do Estado. O Imposto Extraordinário de Guerra (art. 154, II da CF) é o modelo arquetípico de receita extraordinária.'
    },
    {
      sub: 'Coercibilidade e Regime Jurídico: Taxa vs. Preço Público (Tarifa)',
      ref: 'Súmula nº 545 do STF e Art. 77 do CTN',
      t: 'A Taxa é tributo vinculado, regido pelo direito público e de cobrança compulsória decorrente do exercício regular do poder de polícia ou utilização de serviço público específico e divisível, ao passo que o Preço Público (Tarifa) possui natureza contratual, facultativa e de direito privado (Súmula 545 do STF).',
      f: 'A contraprestação pelo serviço postal e pelo fornecimento de água e energia elétrica constitui taxa tributária de cobrança compulsória e execução privativa pela Fazenda Pública.',
      exp: 'Súmula 545 do STF: "Preços de serviços públicos e taxas não se confundem, porque estas, diferentemente daqueles, são compulsórias e têm sua cobrança condicionada a prévia autorização orçamentária em relação à lei que as instituiu". Serviços facultativos e comerciais são remunerados por tarifa/preço público.'
    },
    {
      sub: 'Classificação por Destinação / Fontes de Recursos: Livres vs. Vinculados',
      ref: 'Portaria SOF/STN nº 1/2001 e Portaria STN nº 710/2021',
      t: 'A classificação por fontes e destinação de recursos vincula a arrecadação da receita à realização de despesas específicas, segregando-se em Recursos Livres/Ordinários (sem vinculação legal, aplicáveis em qualquer despesa pública) e Recursos Vinculados (atrelados por lei ou norma constitucional a determinada finalidade, como o Fundeb, Saúde e Educação).',
      f: 'Os recursos arrecadados pelo Estado com vinculação legal específica a fundos de saúde podem ser livremente utilizados para pagamento de diárias e publicidade de outros órgãos sem cometer desvio de finalidade.',
      exp: 'O recurso com vinculação deve ser mantido e executado estritamente na finalidade prevista na legislação instituidora (art. 8º, parágrafo único da LRF).'
    },
    {
      sub: 'Desvinculação de Receitas Orçamentárias: DRU, DRE e DRM',
      ref: 'Arts. 76, 76-A e 76-B do Ato das Disposições Constitucionais Transitórias (ADCT)',
      t: 'A Desvinculação de Receitas permite a desvinculação de até 30% das receitas de impostos, taxas e multas de entes da Federação, sendo taxativamente vedada a desvinculação de recursos destinados a ações e serviços públicos de saúde, manutenção e desenvolvimento do ensino e transferências constitucionais obrigatórias.',
      f: 'A Desvinculação de Receitas dos Estados (DRE) e Municípios (DRM) permite ao Governador e Prefeito retirar 100% dos recursos destinados aos hospitais e escolas públicas para bancar despesas financeiras gerais.',
      exp: 'A CF veda expressamente a desvinculação das receitas voltadas à educação básica e à saúde pública, preservando os pisos constitucionais mínimos.'
    },
    {
      sub: 'Indicador de Resultado Primário: Receitas Primárias (Fiscais) vs. Financeiras',
      ref: 'Manual de Demonstrativos Fiscais (MDF/STN) e LRF',
      t: 'Receitas Primárias (Fiscais) são aquelas que decorrem da atividade arrecadatória estatal direta (tributos, contribuições, patrimoniais líquidas e serviços) e impactam o cálculo do resultado primário, enquanto Receitas Financeiras decorrem de operações de crédito, emissão de títulos, rendimentos de aplicações financeiras e privatizações.',
      f: 'A captação de empréstimos bancários externos e a rolagem de títulos públicos da dívida federal são classificadas como Receitas Primárias por aumentarem o saldo da conta corrente do Tesouro.',
      exp: 'Operações de crédito são Receitas Financeiras (não primárias), pois geram endividamento e não melhoram a posição líquida da dívida pública.'
    },
    {
      sub: 'Dívida Ativa da Fazenda Pública: Dívida Tributária vs. Não Tributária',
      ref: 'Art. 39 da Lei nº 4.320/1964 e Lei nº 6.830/1980 (LEF)',
      t: 'A Dívida Ativa da Fazenda Pública compreende os créditos líquidos e certos exigíveis não pagos no prazo regulamentar, dividindo-se em Dívida Ativa Tributária (impostos, taxas, contribuições e multas tributárias) e Dívida Ativa Não Tributária (multas administrativas, foros, aluguéis, indenizações e créditos contratuais).',
      f: 'Apenas os tributos não pagos podem ser inscritos em Dívida Ativa, sendo vedada a inscrição de créditos estatais decorrentes de contratos administrativos ou multas ambientais.',
      exp: 'Art. 39, § 2º da Lei 4.320/64: A Dívida Ativa abrange tanto os créditos tributários quanto os créditos NÃO tributários (indenizações, reposições, custas e aluguéis inadimplidos).'
    },
    {
      sub: 'Impacto Contábil e Orçamentário da Arrecadação de Dívida Ativa',
      ref: 'MCASP (STN)',
      t: 'Sob a ótica orçamentária, o recebimento de principal da dívida ativa é classificado como Receita Corrente (na origem correspondente ou em Outras Receitas Correntes); sob a ótica patrimonial, trata-se de fato permutativo (baixa de contas a receber do ativo e entrada em disponibilidades), não gerando VPA no momento do recebimento.',
      f: 'O recebimento financeiro da dívida ativa de IPTU em dinheiro gera obrigatoriamente uma Variação Patrimonial Aumentativa (VPA) de valor idêntico no momento em que cai na conta do Tesouro.',
      exp: 'A VPA (reconhecimento do direito) ocorreu no momento do fato gerador/inscrição; o recebimento bancário posterior apenas permuta créditos a receber por caixa (fato permutativo no MCASP).'
    },
    {
      sub: 'Renúncia de Receita Pública e Exigências Legais do Art. 14 da LRF',
      ref: 'Art. 14 da Lei Complementar nº 101/2000 (LRF)',
      t: 'A concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deve estar acompanhada de estimativa do impacto orçamentário-financeiro no exercício e nos dois seguintes, e demonstrar que a renúncia foi considerada na estimativa de receita da LOA ou estar acompanhada de medidas de compensação (aumento de outros tributos).',
      f: 'O Chefe do Poder Executivo pode conceder isenções fiscais individuais a grandes empresários sem necessidade de lei autorizativa, estimativa de impacto fiscal ou medidas de compensação.',
      exp: 'Art. 14 da LRF: qualquer renúncia (anistia, remissão, subsídio, isenção heterônoma/não geral) sem estimativa de impacto trienal e compensação é ato nulo e infração fiscal grave.'
    },
    {
      sub: 'Restituição e Anulação de Receitas Orçamentárias',
      ref: 'Art. 57 da Lei nº 4.320/1964 e MCASP',
      t: 'A restituição de receita recolhida a maior ou indevidamente dentro do próprio exercício financeiro é contabilizada mediante dedução da respectiva receita orçamentária; já a restituição realizada em exercícios posteriores ao do recolhimento deve ser executada como despesa orçamentária no elemento correspondente.',
      f: 'Todas as devoluções de tributos cobrados a mais de contribuintes devem ser executadas como despesa pública nova com empenho e liquidação, mesmo que ocorram no dia seguinte ao recolhimento indevido.',
      exp: 'Art. 57 da Lei 4.320/64: as restituições de receitas recolhidas a maior no exercício serão deduzidas da receita orçamentária (estorno de receita); apenas quando o exercício já encerrou é que viram despesa orçamentária.'
    }
  ],

  // Aula 06: Despesa Pública: Estágios Operacionais e Suprimento de Fundos
  6: [
    {
      sub: 'Estágios da Despesa: Fixação e Descentralização (Destaque vs. Provisão)',
      ref: 'Decreto nº 93.872/1986 e MCASP',
      t: 'A descentralização de créditos orçamentários ocorre mediante Destaque (quando a transferência de dotações orçamentárias se dá entre órgãos ou ministérios distintos) ou Provisão (quando a descentralização de créditos ocorre entre unidades gestoras de uma mesma estrutura ministerial/órgão).',
      f: 'A transferência de crédito orçamentário do Ministério da Saúde para o Ministério da Educação é formalizada contabilmente mediante uma Provisão orçamentária interna.',
      exp: 'Entre órgãos/ministérios diferentes = DESTAQUE. Entre unidades do mesmo órgão = PROVISÃO.'
    },
    {
      sub: 'Modalidades de Empenho da Despesa Pública',
      ref: 'Art. 60 da Lei nº 4.320/1964',
      t: 'O empenho da despesa subdivide-se em: Ordinário (destinado a despesas com montante previamente conhecido e pagamento em parcela única), Estimativo (destinado a despesas cujo montante total não se pode fixar previamente, como consumo de água e energia) e Global (destinado a despesas contratuais com valor determinado sujeitas a parcelamento, como locação de imóveis e serviços contínuos).',
      f: 'A legislação orçamentária proíbe expressamente a utilização do empenho estimativo, exigindo que até mesmo as contas mensais de iluminação pública tenham seu valor em centavos fixado em janeiro sem qualquer variação.',
      exp: 'Art. 60, § 2º da Lei 4.320/64: o empenho por estimativa é expressamente autorizado para serviços cujo montante exato não se possa determinar antecipadamente.'
    },
    {
      sub: 'Estágio da Liquidação da Despesa Pública',
      ref: 'Art. 63 da Lei nº 4.320/1964',
      t: 'A liquidação da despesa consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do crédito (notas fiscais, termos de recebimento e contratos), apurando-se a origem e o objeto do que se deve pagar, a importância exata e a quem se deve pagar.',
      f: 'A liquidação da despesa orçamentária consiste na transferência de dinheiro para a conta bancária do fornecedor antes da entrega do material contratado.',
      exp: 'A entrega do dinheiro é o PAGAMENTO. A liquidação é o estágio prévio de atestação e conferência do cumprimento da obrigação.'
    },
    {
      sub: 'Suprimento de Fundos (Regime de Adiantamento)',
      ref: 'Art. 68 da Lei nº 4.320/1964 e Decreto nº 93.872/1986',
      t: 'O suprimento de fundos é uma autorização de pagamento excepcional concedida a servidor público para a realização de despesas que, por sua natureza ou urgência, não possam subordinar-se ao processo normal de aplicação (despesas miúdas de pronto pagamento, viagens e caráter sigiloso), exigindo prévio empenho e posterior prestação de contas.',
      f: 'O suprimento de fundos dispensa prévio empenho orçamentário e pode ser concedido livremente a servidor que esteja respondendo a inquérito administrativo com prestação de contas anterior em atraso.',
      exp: 'O suprimento de fundos JAMAIS dispensa prévio empenho e não pode ser repassado a servidor omisso ou com contas pendentes de aprovação.'
    }
  ],

  // Aula 07: Classificação Econômica da Despesa: GND e Elemento
  7: [
    {
      sub: 'Grupos de Natureza de Despesa (GND) no MCASP',
      ref: 'Portaria Interministerial STN/SOF nº 163/2001 e MCASP',
      t: 'As despesas públicas desdobram-se em 6 Grupos de Natureza de Despesa (GND): GND 1 (Pessoal e Encargos Sociais), GND 2 (Juros e Encargos da Dívida), GND 3 (Outras Despesas Correntes), GND 4 (Investimentos), GND 5 (Inversões Financeiras) e GND 6 (Amortização da Dívida).',
      f: 'A aquisição de material de consumo hospitalar e a compra de combustível são despesas classificadas no GND 4 - Investimentos.',
      exp: 'Material de consumo, combustível e diárias são classificadas no GND 3 - Outras Despesas Correntes.'
    },
    {
      sub: 'Distinção Crucial: Investimentos (GND 4) vs. Inversões Financeiras (GND 5)',
      ref: 'Art. 12, §§ 4º e 5º da Lei nº 4.320/1964',
      t: 'Classificam-se como Investimentos (GND 4) as despesas de capital destinadas a obras públicas e aquisição de instalações ou equipamentos novos que resultem em aumento do patrimônio físico do ente; classificam-se como Inversões Financeiras (GND 5) as aquisições de imóveis ou de bens já em utilização, aquisição de títulos de capital já integralizado e concessão de empréstimos.',
      f: 'A compra de um edifício comercial já construído e que vinha sendo utilizado há anos pela iniciativa privada é classificada legalmente como Investimento em infraestrutura nova.',
      exp: 'Bens já em utilização, terrenos prontos e compra de participações societárias pré-existentes são INVERSÕES FINANCEIRAS (não criam novo capital físico na economia).'
    },
    {
      sub: 'Elemento de Despesa e Subelemento',
      ref: 'Portaria STN/SOF nº 163/2001',
      t: 'O elemento de despesa identifica o objeto de gasto específico (como diárias, material de consumo, serviços de terceiros e obras), enquanto o subelemento contábil detalha as especificidades locais desse objeto para controle patrimonial analítico.',
      f: 'O elemento de despesa define exclusivamente se o gasto público pertence ao Poder Executivo ou ao Poder Judiciário.',
      exp: 'Quem gasta é a classificação INSTITUCIONAL. O elemento de despesa identifica "em que" o recurso foi aplicado (o objeto do gasto).'
    }
  ],

  // Aula 08: Restos a Pagar e Despesas de Exercícios Anteriores Avançado
  8: [
    {
      sub: 'Prescrição Quinquenal de Restos a Pagar',
      ref: 'Decreto nº 20.910/1932 e Decreto nº 93.872/1986',
      t: 'As dívidas passivas da Fazenda Pública relativas a Restos a Pagar prescrevem em 5 (cinco) anos contados da data do ato ou fato do qual se originaram, extinguindo-se o direito de cobrança pelo credor se não interrompida a prescrição por ato formal.',
      f: 'Os créditos contra a Fazenda Pública oriundos de restos a pagar são imprescritíveis e podem ser cobrados judicialmente a qualquer tempo, mesmo após trinta anos.',
      exp: 'Decreto 20.910/32: o prazo prescricional contra a Fazenda Pública (federal, estadual ou municipal) é de 5 anos.'
    },
    {
      sub: 'Cancelamento de RP e Restabelecimento por Despesas de Exercícios Anteriores (DEA)',
      ref: 'Art. 37 da Lei nº 4.320/1964 e MCASP',
      t: 'O cancelamento contábil de Restos a Pagar por encerramento de prazo prescricional ou administrativo não extingue o direito do credor; caso o credor comprove o cumprimento da prestação antes da prescrição, o valor poderá ser reconhecido e pago à conta de Despesas de Exercícios Anteriores (DEA) na dotação do novo orçamento.',
      f: 'Uma vez cancelado o registro de Restos a Pagar no sistema contábil, é crime inafiançável efetuar qualquer pagamento futuro ao fornecedor, mesmo que ele comprove a entrega regular dos materiais.',
      exp: 'O art. 37 da Lei 4.320/64 prevê expressamente o pagamento de Restos a Pagar cancelados mediante dotação própria para Despesas de Exercícios Anteriores (DEA).'
    },
    {
      sub: 'Hipóteses Taxativas de Despesas de Exercícios Anteriores (DEA)',
      ref: 'Art. 37 da Lei nº 4.320/1964',
      t: 'As Despesas de Exercícios Anteriores abrangem: despesas de exercícios encerrados para as quais o orçamento respectivo consignava dotação orçamentária própria com saldo suficiente para atendê-las; Restos a Pagar com prescrição interrompida; e compromissos reconhecidos após o encerramento do exercício correspondente.',
      f: 'Qualquer despesa nova contratada no ano atual sem previsão de orçamento pode ser registrada como DEA para fugir do limite de empenho da LOA vigente.',
      exp: 'DEA é instrumento estrito de regularização de compromissos gerados no passado nas 3 hipóteses do art. 37 da Lei 4.320/64.'
    }
  ],

  // Aula 09: LRF: Responsabilidade Fiscal, Fim de Mandato e Art. 42
  9: [
    {
      sub: 'Vedação do Art. 42 da LRF (Dois Últimos Quadrimestres de Mandato)',
      ref: 'Art. 42 da Lei Complementar nº 101/2000',
      t: 'É expressamente vedado ao titular de Poder ou órgão nos últimos dois quadrimestres do seu mandato contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte sem que haja suficiente disponibilidade de caixa para este efeito.',
      f: 'O Governador ou Prefeito no último mês de mandato pode assinar livremente contratos de obras milionárias para início imediato sem deixar um centavo de saldo em caixa para o seu sucessor.',
      exp: 'Art. 42 da LRF: a contração de despesas nos últimos 8 meses de mandato exige suficiente disponibilidade de caixa para saldar os compromissos, sob pena de crime de responsabilidade e enquadramento penal (art. 359-C do Código Penal).'
    },
    {
      sub: 'Vedação a Aumento de Despesa com Pessoal no Fim do Mandato',
      ref: 'Art. 21, II e parágrafo único da LRF (LC nº 101/2000)',
      t: 'É nulo de pleno direito o ato de que resulte aumento da despesa com pessoal expedido nos cento e oitenta dias anteriores ao final do mandato do titular do respectivo Poder ou órgão.',
      f: 'Nos últimos trinta dias de governo, o Chefe do Executivo pode conceder reajuste salarial de 50% ao funcionalismo, com validade imediata e definitiva.',
      exp: 'Art. 21, II da LRF: atos que aumentem despesa de pessoal nos últimos 180 dias são expressamente NULOS de pleno direito.'
    },
    {
      sub: 'Disponibilidade de Caixa Líquida e Regras de Transição Republicana',
      ref: 'MCASP e LRF',
      t: 'Para apuração da disponibilidade de caixa nos termos do art. 42 da LRF, deduzem-se dos recursos financeiros depositados em bancos os compromissos já liquidados e as despesas empenhadas pendentes de pagamento, apurando-se a disponibilidade líquida real a ser repassada ao sucessor.',
      f: 'A disponibilidade de caixa da LRF é apurada somando-se as promessas informais de transferências futuras prometidas pela União sem dedução de nenhuma dívida em aberto.',
      exp: 'A disponibilidade deve ser líquida: desconta-se a totalidade dos Restos a Pagar empenhados e compromissos exigíveis.'
    }
  ],

  // Aula 10: LRF: Limites e Medidas Drásticas de Despesa com Pessoal
  10: [
    {
      sub: 'Escalonamento Constitucional para Redução de Pessoal (Art. 169 da CF)',
      ref: 'Art. 169, §§ 3º e 4º da CF/88 e Art. 23 da LRF',
      t: 'Para o cumprimento dos limites de pessoal, o ente deve adotar sucessivamente: 1º) redução de pelo menos 20% das despesas com cargos em comissão e funções de confiança; 2º) exoneração dos servidores não estáveis; 3º) se ainda assim não alcançar o limite, exoneração de servidores estáveis mediante indenização de um mês por ano de serviço.',
      f: 'Ao atingir o limite prudencial de despesas com pessoal, o Governador é obrigado a demitir imediatamente os servidores concursados estáveis antes de exonerar comissionados.',
      exp: 'A CF/88 estabelece uma ordem rigorosa de preferência protetiva: primeiro corta-se 20% dos comissionados; depois demite-se não estáveis; a demissão de concursados estáveis é a última e drástica medida.'
    },
    {
      sub: 'Sanções pelo Não Restabelecimento do Limite de Pessoal',
      ref: 'Art. 23, § 3º da LRF',
      t: 'Não alcançada a redução no prazo de dois quadrimestres, e enquanto perdurar o excesso, o ente não poderá receber transferências voluntárias, obter garantia de outro ente e contratar operações de crédito, ressalvadas as destinadas ao refinanciamento da dívida mobiliária.',
      f: 'O ente da Federação que ultrapassar o teto máximo de pessoal não sofre qualquer penalidade, podendo continuar contratando empréstimos e recebendo verbas discricionárias da União.',
      exp: 'A LRF impõe duras sanções institucionais de bloqueio de transferências voluntárias, garantias e novos financiamentos.'
    }
  ],

  // Aula 11: LRF: Dívida Consolidada e ARO Avançado
  11: [
    {
      sub: 'Operações de Crédito por Antecipação de Receita Orçamentária (ARO)',
      ref: 'Art. 38 da LRF (LC nº 101/2000)',
      t: 'As operações de crédito por antecipação de receita orçamentária (ARO) destinam-se exclusivamente a atender insuficiências transitórias de caixa, devem ser liquidadas com juros e encargos até 10 de dezembro do mesmo exercício e são expressamente proibidas no último ano de mandato.',
      f: 'As operações de ARO podem ser contratadas no último mês de mandato do Prefeito e quitadas pelo novo gestor em até dez anos.',
      exp: 'Art. 38, IV da LRF: a ARO deve estar totalmente liquidada até o dia 10 de dezembro de cada ano e é vedada no último ano de mandato.'
    },
    {
      sub: 'Equiparação a Operação de Crédito e Vedações Rígidas',
      ref: 'Art. 37 da LRF',
      t: 'Equiparam-se a operações de crédito e são proibidas: a assunção direta de compromisso perante fornecedores para pagamento a prazo de bens sem prévia dotação, a assunção de obrigação sem autorização legislativa e a apropriação indevida de disponibilidades de empresas estatais dependentes.',
      f: 'O ente público pode confessar dívidas com fornecedores e parcelar pagamentos por dez anos fora da LOA sem caracterizar operação de endividamento público.',
      exp: 'Art. 37 da LRF: equipara qualquer compromisso a prazo à operação de crédito para submetê-lo a rigoroso controle legislativo e do Senado.'
    }
  ],

  // Aula 12: LRF: Fiscalização e Atuação dos Tribunais de Contas
  12: [
    {
      sub: 'Alertas dos Tribunais de Contas na Fiscalização da LRF',
      ref: 'Art. 59, § 1º da LRF',
      t: 'Os Tribunais de Contas alertarão os Poderes quando constatarem que o montante da despesa com pessoal ultrapassou 90% do limite (limite de alerta), quando as receitas ficarem abaixo do previsto com risco de descumprimento de metas, ou quando as disponibilidades de caixa forem insuficientes para o fim de mandato.',
      f: 'Os Tribunais de Contas só podem examinar as contas dos governantes dez anos após o término do mandato, não podendo emitir avisos ou alertas prévios durante a execução orçamentária.',
      exp: 'Art. 59 da LRF: o controle e alerta dos Tribunais de Contas é concomitante à gestão orçamentária.'
    },
    {
      sub: 'Sanções por Atraso na Publicação do Relatório de Gestão Fiscal (RGF)',
      ref: 'Art. 51, § 2º da LRF e Lei nº 10.028/2000',
      t: 'O descumprimento dos prazos de publicação do Relatório de Gestão Fiscal (RGF) acarreta, até que a situação seja regularizada, a proibição de o ente receber transferências voluntárias da União e contratar operações de crédito, sujeitando o gestor a multa pessoal.',
      f: 'O atraso na publicação do RGF não tem consequências práticas e não impede o recebimento de verbas federais.',
      exp: 'A Lei 10.028/2000 e a LRF punem o atraso no RGF com suspensão de repasses voluntários e multa de 30% dos vencimentos anuais do governante.'
    }
  ]
};


// ============================================================================
// CASP - BATERIA 2: PCASP, SUBSISTEMAS, DFC MÉTODO DIRETO, DVP, RETENÇÕES
// ============================================================================
export const CASP_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'PCASP: Classes e Natureza das Informações',
      ref: 'Manual de Contabilidade Aplicada ao Setor Público (MCASP) - PCASP',
      t: 'O Plano de Contas Aplicado ao Setor Público (PCASP) organiza-se em 8 classes estruturadas em três naturezas de informação: Patrimonial (Classes 1 a 4), Orçamentária (Classes 5 e 6) e de Controle (Classes 7 e 8), permitindo o registro simultâneo e segregado dos atos e fatos da administração.',
      f: 'No PCASP, as classes 5 e 6 registram a variação dos ativos imobilizados e estoques da entidade governamental.',
      exp: 'Classes 5 (Orçamento Aprovado) e 6 (Execução do Orçamento) pertencem exclusivamente à Natureza da Informação Orçamentária.'
    },
    {
      sub: 'Mecanismo de Partidas Dobradas por Subsistema no PCASP',
      ref: 'MCASP (Parte IV - PCASP)',
      t: 'No PCASP, cada ato ou fato contábil deve ser escriturado mantendo o equilíbrio das partidas dobradas dentro de cada subsistema de informação envolvido, sem que uma conta de natureza orçamentária faça contrapartida direta com uma conta de natureza patrimonial.',
      f: 'É permitida no PCASP a realização de lançamentos contábeis cruzando diretamente a débito uma conta de despesa empenhada (classe 6) e a crédito uma conta de caixa/bancos (classe 1) sem registros compensatórios.',
      exp: 'Os subsistemas são estanques e balanceados: débitos e créditos orçamentários fecham entre si (classes 5 e 6), e débitos e créditos patrimoniais fecham entre si (classes 1, 2, 3 e 4).'
    },
    {
      sub: 'Demonstração dos Fluxos de Caixa (DFC) no Setor Público: Método Direto',
      ref: 'NBC TSP 12 e MCASP',
      t: 'A Demonstração dos Fluxos de Caixa (DFC) no setor público deve ser apresentada obrigatoriamente pelo Método Direto, segregando as movimentações financeiras em três fluxos: Fluxos das Atividades Operacionais, Fluxos das Atividades de Investimento e Fluxos das Atividades de Financiamento.',
      f: 'No setor público brasileiro, o MCASP veda terminantemente o uso do Método Direto na DFC, tornando obrigatório o Método Indireto a partir do lucro contábil.',
      exp: 'O MCASP e a NBC TSP 12 estabelecem a obrigatoriedade da apresentação da DFC pelo MÉTODO DIRETO no setor público.'
    },
    {
      sub: 'Balanço Financeiro: Quadro Principal e Saldos para o Exercício Seguinte',
      ref: 'Art. 103 da Lei nº 4.320/1964 e MCASP',
      t: 'O Balanço Financeiro evidencia as receitas e despesas orçamentárias bem como os recebimentos e pagamentos de natureza extraorçamentária, conjugados com os saldos em espécie provenientes do exercício anterior e os que se transferem para o exercício seguinte.',
      f: 'O Balanço Financeiro demonstra exclusivamente o patrimônio líquido e o inventário físico dos prédios públicos do ente estatal.',
      exp: 'Art. 103 da Lei 4.320/64: O Balanço Financeiro é estritamente financeiro (caixa), demonstrando ingressos, dispêndios e saldos em espécie.'
    },
    {
      sub: 'Provisões e Passivos Contingentes no Setor Público (NBC TSP 03)',
      ref: 'NBC TSP 03 - Provisões, Passivos Contingentes e Ativos Contingentes',
      t: 'Uma Provisão é um passivo de prazo ou de valor incertos que deve ser reconhecida no balanço quando há uma obrigação presente decorrente de evento passado, cuja liquidação seja provável e cujo valor possa ser estimado com confiabilidade; já o passivo contingente é apenas divulgado em notas explicativas.',
      f: 'Ações judiciais com risco de perda provável movidas contra o Estado não devem gerar nenhum lançamento no passivo, devendo ser ocultadas do balanço público.',
      exp: 'NBC TSP 03: Probabilidade de saída futura de recursos + estimativa confiável = reconhecimento obrigatório de PROVISÃO no Passivo Não Circulante/Circulante.'
    }
  ],
  5: [
    {
      sub: 'Balanço Orçamentário: Quadro da Execução de Restos a Pagar',
      ref: 'MCASP (Parte V - Demonstrações Contábeis)',
      t: 'O Balanço Orçamentário é composto pelo Quadro Principal e por quadros demonstrativos anexos da execução dos Restos a Pagar Não Processados e Restos a Pagar Processados, evidenciando as inscrições, pagamentos e cancelamentos de exercícios anteriores.',
      f: 'Os Restos a Pagar cancelados por prescrição administrativa são registrados no Balanço Orçamentário como despesa de investimento realizada no ano.',
      exp: 'Restos a Pagar cancelados reduzem os compromissos exigíveis e constam das colunas de cancelamento dos anexos do Balanço Orçamentário.'
    },
    {
      sub: 'Demonstração das Variações Patrimoniais (DVP): Resultado Patrimonial',
      ref: 'Art. 104 da Lei nº 4.320/1964 e MCASP',
      t: 'A Demonstração das Variações Patrimoniais (DVP) evidencia as Variações Patrimoniais Aumentativas (VPA) e Diminutivas (VPD) pelo regime de competência, e o confronto entre ambas apura o Resultado Patrimonial do Exercício (superávit ou déficit patrimonial).',
      f: 'A DVP é elaborada pelo regime de caixa estrito, não reconhecendo despesas com depreciação ou amortização do ativo imobilizado.',
      exp: 'A DVP segue estritamente o REGIME DE COMPETÊNCIA contábil (independe de pagamento ou recebimento financeiro).'
    }
  ]
};

// ============================================================================
// CONTABILIDADE GERAL - BATERIA 2: FÓRMULAS DE LANÇAMENTO, TEORIA DAS CONTAS
// RETIFICAÇÃO DE LANÇAMENTOS, ERROS DO BALANCETE E CPC 00
// ============================================================================
export const CONTABILIDADE_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'Fórmulas de Lançamento Contábil no Método das Partidas Dobradas',
      ref: 'Escrituração Contábil e ITG 2000 (CFC)',
      t: 'Na escrituração contábil clássica, os lançamentos classificam-se em: 1ª fórmula (um débito e um crédito - 1D/1C); 2ª fórmula (um débito e vários créditos - 1D/vários C); 3ª fórmula (vários débitos e um crédito - vários D/1C); e 4ª fórmula (vários débitos e vários créditos - vários D/vários C).',
      f: 'Um lançamento contábil que contenha dois débitos e três créditos é denominado lançamento de 1ª fórmula simples.',
      exp: 'Dois ou mais débitos e dois ou mais créditos configuram lançamento de 4ª FÓRMULA (complexa).'
    },
    {
      sub: 'Teoria das Contas: Materialista, Personalista e Patrimonialista',
      ref: 'Teoria Geral da Contabilidade',
      t: 'Pela Teoria Patrimonialista (adotada no Brasil), as contas dividem-se em Contas Patrimoniais (Ativo, Passivo e Patrimônio Líquido) e Contas de Resultado (Receitas e Despesas); já pela Teoria Personalista, as contas dividem-se em Contas dos Proprietários, Contas dos Correspondentes e Contas dos Agentes Consignatários.',
      f: 'Pela Teoria Patrimonialista, as contas de receitas e despesas são consideradas patrimoniais permanentes que jamais sofrem encerramento no final do exercício.',
      exp: 'Contas de resultado (receitas e despesas) são temporárias: encerram-se ao fim de cada exercício em Apuração do Resultado do Exercício (ARE).'
    },
    {
      sub: 'Retificação de Lançamentos Contábeis (ITG 2000 do CFC)',
      ref: 'ITG 2000 (R1) - Escrituração Contábil',
      t: 'São formas de retificação de lançamentos contábeis admitidas pela ITG 2000: o Estorno (anulação total do lançamento incorreto), a Complementação (aumento ou redução do valor lançado) e a Transferência/Lançamento Retificador (regularização de conta indevidamente debitada ou creditada).',
      f: 'Ao constatar um erro na escrituração do Livro Diário, o contador deve rasurar ou apagar com corretivo químico o registro anterior para evitar notas explicativas.',
      exp: 'A ITG 2000 proíbe terminantemente rasuras, borrões ou raspagens na escrituração contábil, exigindo estorno, complementação ou retificação formal.'
    },
    {
      sub: 'Balancete de Verificação: Limitações e Erros Não Detectáveis',
      ref: 'Normas Brasileiras de Contabilidade e Auditoria',
      t: 'O Balancete de Verificação comprova a igualdade matemática entre o total de débitos e créditos, mas NÃO detecta erros substantivos como a omissão total de uma transação, o lançamento de uma transação com valor correto em contas trocadas da mesma natureza ou lançamentos invertidos de débito e crédito.',
      f: 'O balancete de verificação garante com 100% de certeza absoluta que não há nenhuma fraude ou erro nas contas da empresa, bastando que o total de débitos seja igual ao de créditos.',
      exp: 'Erros de imputação de contas (ex: debitar Veículos em vez de Móveis) ou transações esquecidas não alteram a igualdade matemática da soma de débitos e créditos.'
    },
    {
      sub: 'Características Qualitativas da Informação Contábil (CPC 00 R2)',
      ref: 'CPC 00 (R2) - Pronunciamento Técnico do Comitê de Pronunciamentos Contábeis',
      t: 'Segundo o CPC 00 (R2), as Características Qualitativas Fundamentais da informação contábil são a Relevância e a Representação Fidedigna (que deve ser completa, neutra e isenta de erros), enquanto Comparabilidade, Verificabilidade, Tempestividade e Compreensibilidade são Características Qualitativas de Melhoria.',
      f: 'A tempestividade e a compreensibilidade são classificadas pelo CPC 00 (R2) como características qualitativas fundamentais, cuja ausência anula a validade das demonstrações financeiras.',
      exp: 'As fundamentais são APENAS Relevância e Representação Fidedigna. As outras 4 são de MELHORIA.'
    }
  ]
};

// ============================================================================
// AUDITORIA - BATERIA 2: RISCO DE AUDITORIA, AMOSTRAGEM, CIRCULARIZAÇÃO E PAAS
// ============================================================================
export const AUDITORIA_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'Componentes do Risco de Auditoria (NBC TA 200 e NBC TA 315)',
      ref: 'NBC TA 200 - Objetivos Gerais do Auditor Independente',
      t: 'O Risco de Auditoria é composto pelo Risco de Distorção Relevante (inerente à entidade, subdividido em Risco Inerente e Risco de Controle) e pelo Risco de Detecção (risco de que os procedimentos executados pelo auditor não detectem uma distorção relevante existente).',
      f: 'O auditor independente tem o poder de alterar e controlar diretamente o risco inerente das transações do cliente modificando seus próprios papéis de trabalho.',
      exp: 'Risco Inerente e Risco de Controle pertencem à entidade auditada (não são controláveis pelo auditor). O auditor apenas controla o RISCO DE DETECÇÃO ajustando a natureza, época e extensão de seus testes.'
    },
    {
      sub: 'Testes de Observância (Controle) vs. Procedimentos Substantivos',
      ref: 'NBC TA 330 - Respostas do Auditor aos Riscos Avaliados',
      t: 'Os Testes de Controle (Observância) visam obter evidência sobre a eficácia operacional dos controles internos da entidade na prevenção ou detecção de distorções, enquanto os Procedimentos Substantivos (testes de detalhes e procedimentos analíticos) destinam-se a detectar distorções relevantes no nível de afirmações.',
      f: 'Se o auditor constatar que os controles internos da empresa são excelentes e imunes a falhas, ele está dispensado por norma de realizar qualquer procedimento substantivo.',
      exp: 'NBC TA 330: Independentemente dos riscos avaliados de controle, o auditor DEVE planejar e executar procedimentos substantivos para cada classe relevante de transações, saldos e divulgações.'
    },
    {
      sub: 'Amostragem em Auditoria e Risco de Não Amostragem (NBC TA 530)',
      ref: 'NBC TA 530 - Amostragem em Auditoria',
      t: 'Na amostragem em auditoria, o Risco de Amostragem decorre da possibilidade de que a conclusão do auditor com base na amostra seja diferente da conclusão se toda a população fosse submetida ao mesmo procedimento, enquanto o Risco de Não Amostragem decorre de fatores humanos como interpretação errada de documentos ou uso de procedimentos inadequados.',
      f: 'A amostragem estatística elimina integralmente o risco de amostragem ao analisar 100% dos itens da entidade sem qualquer margem de erro.',
      exp: 'Amostragem não analisa 100% dos itens; se analisasse 100%, não seria amostragem, mas exame censitário total.'
    },
    {
      sub: 'Confirmação Externa / Circularização (NBC TA 505)',
      ref: 'NBC TA 505 - Confirmações Externas',
      t: 'Na solicitação de confirmação externa (circularização), a Confirmação Positiva exige que a parte confirmante responda diretamente ao auditor indicando se concorda ou fornecendo as informações solicitadas (mesmo quando o saldo está em branco), enquanto a Confirmação Negativa solicita resposta apenas se a parte discordar da informação.',
      f: 'A confirmação externa negativa fornece evidência de auditoria mais persuasiva e confiável do que a confirmação externa positiva.',
      exp: 'A confirmação negativa é considerada menos persuasiva, pois a falta de resposta pode decorrer de mero extravio ou desatenção do terceiro.'
    },
    {
      sub: 'Tipos de Modificação no Relatório do Auditor (NBC TA 705)',
      ref: 'NBC TA 705 - Modificações na Opinião do Auditor Independente',
      t: 'O auditor deve emitir Opinião com Ressalva quando obtiver evidência de que distorções são relevantes, mas NÃO generalizadas; emitir Opinião Adversa quando as distorções forem relevantes E generalizadas; e Abster-se de Opinião quando não conseguir obter evidência apropriada e os possíveis efeitos forem relevantes E generalizados.',
      f: 'Quando o auditor se depara com fraudes generalizadas que distorcem todas as demonstrações financeiras da empresa, ele deve emitir um relatório limpo sem ressalvas com uma nota de rodapé.',
      exp: 'Distorções relevantes e generalizadas exigem emissão de OPINIÃO ADVERSA (NBC TA 705).'
    }
  ]
};

// ============================================================================
// DIREITO ADMINISTRATIVO - BATERIA 2: PODERES, ATRIBUTOS DO ATO E LEI 14.133
// ============================================================================
export const ADMINISTRATIVO_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'Poder de Polícia: Atributos e Ciclo de Polícia',
      ref: 'Art. 78 do CTN e Doutrina de Direito Administrativo',
      t: 'O Poder de Polícia administrativa possui como atributos a discricionariedade, a autoexecutoriedade (capacidade de executar diretamente seus atos sem prévia autorização judicial) e a coercibilidade, estruturando-se no ciclo de 4 fases: ordem de polícia, consentimento, fiscalização e sanção.',
      f: 'A aplicação de multa de trânsito pela autoridade pública possui o atributo da autoexecutoriedade imediata, permitindo a penhora de bens do motorista sem processo de execução fiscal.',
      exp: 'A cobrança forçada de MULTA pecuniária não é autoexecutória: exige inscrição em dívida ativa e execução judicial pela Lei 6.830/80.'
    },
    {
      sub: 'Atributos dos Atos Administrativos (PAIT)',
      ref: 'Doutrina de Direito Administrativo (Hely Lopes Meirelles e Maria Sylvia Di Pietro)',
      t: 'Os atributos dos atos administrativos compreendem a Presunção de Legitimidade e Veracidade (presente em todos os atos), a Autoexecutoriedade (que permite a execução direta pelo Estado sem intervenção judicial prévia), a Imperatividade (poder de impor obrigações unilaterais a terceiros) e a Tipicidade.',
      f: 'Todos os atos administrativos sem exceção possuem o atributo da imperatividade, inclusive as certidões de nascimento, pareceres opinativos e declarações de comparecimento.',
      exp: 'Atos negociais (licenças, autorizações) e atos enunciativos (certidões, pareceres, atestados) NÃO possuem imperatividade, pois não impõem deveres coercitivos a ninguém.'
    },
    {
      sub: 'Convalidação vs. Anulação vs. Revogação de Atos',
      ref: 'Art. 53 e 55 da Lei nº 9.784/1999 e Súmulas 346 e 473 do STF',
      t: 'A Anulação incide sobre atos ilegais com efeitos retroativos (ex tunc); a Revogação incide sobre atos legais discricionários por razões de conveniência e oportunidade com efeitos prospectivos (ex nunc); e a Convalidação supre defeitos sanáveis (competência não exclusiva e forma não essencial) sem lesão ao interesse público nem prejuízo a terceiros.',
      f: 'A Administração Pública pode revogar seus próprios atos discricionários com efeitos retroativos ao momento de sua criação (ex tunc), desfazendo direitos adquiridos consumados.',
      exp: 'Revogação gera efeitos estritamente EX NUNC (para o futuro), respeitando os direitos já consumados sob sua vigência anterior.'
    },
    {
      sub: 'Modalidades de Licitação na Nova Lei de Licitações (Lei nº 14.133/2021)',
      ref: 'Art. 28 da Lei nº 14.133/2021',
      t: 'São modalidades de licitação previstas taxativamente na Lei nº 14.133/2021: o Pregão, a Concorrência, o Concurso, o Leilão e o Diálogo Competitivo, restando expressamente extintas do ordenamento jurídico as modalidades Tomada de Preços e Convite.',
      f: 'A Lei nº 14.133/2021 manteve expressamente em vigor a modalidade Convite para contratações de até cem mil reais em pequenos municípios.',
      exp: 'Tomada de Preços e Convite foram totalmente EXTINTAS na Lei 14.133/2021.'
    },
    {
      sub: 'Contratação Direta: Inexigibilidade vs. Dispensa de Licitação',
      ref: 'Arts. 74 e 75 da Lei nº 14.133/2021',
      t: 'A Inexigibilidade de licitação (art. 74) caracteriza-se pela inviabilidade fática ou jurídica de competição (rol exemplificativo: fornecedor exclusivo, serviços técnicos de notória especialização e profissional do setor artístico consagrado), enquanto a Dispensa (art. 75) ocorre quando a competição é viável, mas a lei autoriza ou impõe a contratação direta (rol taxativo: valor reduzido, emergência e calamidade).',
      f: 'A contratação direta por pequeno valor dispensável (até R$ 50 mil ou R$ 100 mil atualizados) é considerada caso clássico de Inexigibilidade por inviabilidade de fornecedores.',
      exp: 'Pequeno valor é caso clássico de DISPENSA DE LICITAÇÃO (art. 75, I e II), pois há vários fornecedores aptos a competir.'
    }
  ]
};

// ============================================================================
// DIREITO CONSTITUCIONAL - BATERIA 2: COMPETÊNCIAS, PROCESSO LEGISLATIVO E CONTROLE
// ============================================================================
export const CONSTITUCIONAL_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'Competências Constitucionais: Privativa vs. Concorrente',
      ref: 'Arts. 22 e 24 da CF/88',
      t: 'Compete privativamente à União legislar sobre direito civil, comercial, penal, processual, eleitoral, do trabalho e desapropriação (art. 22), enquanto compete concorrentemente à União, aos Estados e ao DF legislar sobre direito tributário, financeiro, penitenciário, econômico e urbanístico (art. 24).',
      f: 'Os Estados e Municípios têm competência privativa expressa para legislar sobre direito penal e processual penal no âmbito de seus territórios.',
      exp: 'Direito penal e processual é monopólio legislativo privativo da UNIÃO (art. 22, I da CF/88).'
    },
    {
      sub: 'Limites Circunstanciais e Materiais às Emendas Constitucionais',
      ref: 'Art. 60 da CF/88',
      t: 'A Constituição Federal não pode ser emendada na vigência de intervenção federal, de estado de defesa ou de estado de sítio (limitações circunstanciais), e não será objeto de deliberação a proposta de emenda tendente a abolir a forma federativa de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais (cláusulas pétreas).',
      f: 'A forma republicana de governo e o sistema presidencialista constituem cláusulas pétreas expressas no art. 60, § 4º da Constituição Federal.',
      exp: 'A forma federativa é cláusula pétrea (art. 60, § 4º, I); a forma republicana NÃO é cláusula pétrea expressa (é princípio constitucional sensível).'
    },
    {
      sub: 'Controle Concentrado de Constitucionalidade no STF',
      ref: 'Art. 102, I, a e Art. 103 da CF/88',
      t: 'O controle concentrado de constitucionalidade perante o STF realiza-se por meio de ADI, ADC, ADO e ADPF, possuindo legitimação ativa privativa restrita aos entes e autoridades do art. 103 da CF/88, sendo que a decisão de mérito produz eficácia contra todos (erga omnes) e efeito vinculante relativamente aos demais órgãos do Poder Judiciário e à administração pública direta e indireta.',
      f: 'Qualquer cidadão brasileiro individualmente tem legitimidade ativa para ajuizar Ação Direta de Inconstitucionalidade (ADI) no Supremo Tribunal Federal sem representação por advogado.',
      exp: 'Apenas os 9 legitimados do art. 103 da CF/88 podem propor ADI/ADC perante o STF (Presidente, Mesas do Congresso, Governadores, PGR, OAB, partidos com representação e confederações/entidades de classe de âmbito nacional).'
    }
  ]
};

// ============================================================================
// DIREITO TRIBUTÁRIO - BATERIA 2: ANTERIORIDADE, CRÉDITO, SUSPENSÃO E EXTINÇÃO
// ============================================================================
export const TRIBUTARIO_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'Princípio da Anterioridade Anual e Nonagesimal e Exceções',
      ref: 'Art. 150, III, b e c e § 1º da CF/88',
      t: 'O princípio da anterioridade nonagesimal (noventena) veda a cobrança de tributos antes de decorridos noventa dias da data em que haja sido publicada a lei que os instituiu ou aumentou; contudo, o II, o IE, o IOF e o imposto extraordinário de guerra constituem exceções imediatas a ambas as anterioridades (anual e nonagesimal).',
      f: 'O ICMS pode ter suas alíquotas aumentadas pelo Governador e cobradas no dia seguinte à publicação do decreto sem observar anterioridade anual nem noventena.',
      exp: 'O ICMS geral submete-se cumulativamente à anterioridade anual e nonagesimal (apenas a alteração do ICMS-Combustíveis monofásico possui mitigação de anterioridade).'
    },
    {
      sub: 'Hipóteses de Suspensão da Exigibilidade do Crédito Tributário',
      ref: 'Art. 151 do Código Tributário Nacional (CTN)',
      t: 'Suspendem a exigibilidade do crédito tributário (rol taxativo do art. 151 do CTN - MODEPARCO): a moratória; o depósito do seu montante integral; as reclamações e os recursos nos processos administrativos tributários; a concessão de liminar em mandado de segurança; a concessão de medida liminar ou tutela antecipada em outras ações judiciais; e o parcelamento.',
      f: 'A dação em pagamento de bens imóveis e o pagamento parcelado informal com cheque pré-datado suspendem a exigibilidade do crédito tributário nos termos do art. 151 do CTN.',
      exp: 'A dação em pagamento EXTIGUE o crédito (art. 156, XI). As hipóteses de suspensão são estritamente as do art. 151 (MODEPARCO).'
    },
    {
      sub: 'Extinção do Crédito Tributário: Decadência vs. Prescrição',
      ref: 'Art. 156, V e Arts. 173 e 174 do CTN',
      t: 'A Decadência extingue o direito de a Fazenda Pública constituir o crédito tributário pelo lançamento (prazo de 5 anos contado do primeiro dia do exercício seguinte ou do fato gerador), enquanto a Prescrição extingue o direito de ajuizar a execução fiscal para cobrar o crédito tributário já regularmente constituído (prazo de 5 anos contado da data de sua constituição definitiva).',
      f: 'A Fazenda Pública tem prazo imprescritível de trinta anos para executar judicialmente o devedor após a notificação final do lançamento tributário.',
      exp: 'Art. 174 do CTN: a ação para a cobrança do crédito tributário prescreve em 5 (cinco) anos contados da sua constituição definitiva.'
    }
  ]
};

// ============================================================================
// LÍNGUA PORTUGUESA - BATERIA 2: CRASE, CONCORDÂNCIA E PONTUAÇÃO
// ============================================================================
export const PORTUGUES_LESSON_MATRIX_B2: SubjectLessonMatrix = {
  0: [
    {
      sub: 'Emprego do Sinal Indicativo de Crase: Casos Proibitivos e Facultativos',
      ref: 'Gramática Normativa da Língua Portuguesa',
      t: 'É terminantemente proibido o emprego da crase: antes de palavras masculinas, antes de verbos no infinitivo, antes de pronomes pessoais e pronomes de tratamento em geral (exceto senhora, senhorita e dona); por outro lado, a crase é facultativa antes de nomes próprios femininos, antes de pronomes possessivos femininos no singular e depois da preposição até.',
      f: 'O uso do acento grave indicativo de crase é rigorosamente obrigatório na frase: "O auditor estava disposto à andar a pé após a reunião."',
      exp: 'É terminantemente PROIBIDO crase antes de verbo no infinitivo ("à andar" é erro crasso de regência).'
    },
    {
      sub: 'Concordância Verbal com a Partícula "SE"',
      ref: 'Norma Culta e Sintaxe de Concordância',
      t: 'Quando a partícula "SE" atua como Pronome Apassivador (associada a verbo transitivo direto com sujeito paciente), o verbo deve concordar obrigatoriamente com o sujeito em número (ex: "Alugam-se salas"); já quando atua como Índice de Indeterminação do Sujeito (com VTI, VI ou VL), o verbo permanece fixo na 3ª pessoa do singular (ex: "Precisa-se de funcionários").',
      f: 'Na frase "Precisam-se de novos auditores concursados", a concordância verbal está correta de acordo com a norma-padrão da língua portuguesa.',
      exp: 'O verbo "precisar" é transitivo indireto ("de algo"). Logo, o "SE" é índice de indeterminação do sujeito, exigindo verbo obrigatoriamente no singular: "Precisa-se de novos auditores".'
    },
    {
      sub: 'Pontuação: Emprego da Vírgula entre Termos da Oração',
      ref: 'Manual de Redação da Presidência da República e Norma Culta',
      t: 'É regra fundamental e inegociável da pontuação em língua portuguesa a proibição de separar o sujeito de seu respectivo predicado por meio de vírgula, bem como o verbo transitivo de seu complemento direto ou indireto imediato.',
      f: 'É obrigatório colocar vírgula entre o sujeito simples e o verbo principal em orações com mais de dez palavras para permitir a respiração do leitor.',
      exp: 'A vírgula gramatical não obedece à respiração física; é erro gravíssimo separar sujeito de predicado por vírgula.'
    }
  ]
};

// ============================================================================
// MAPA UNIFICADO DE RESOLUÇÃO DE BATERIA 2
// ============================================================================
export function getBattery2Matrix(subjectName: string): SubjectLessonMatrix | undefined {
  const s = subjectName.trim().toLowerCase();
  if (
    s.includes('finanças') ||
    s.includes('financas') ||
    s.includes('afo') ||
    s.includes('orçamento') ||
    s.includes('orcamento') ||
    s.includes('administração, economia') ||
    (s.includes('administração') && s.includes('finanças'))
  ) {
    return AFO_LESSON_MATRIX_B2;
  }
  if (s.includes('casp') || s.includes('setor público') || s.includes('setor publico')) {
    return CASP_LESSON_MATRIX_B2;
  }
  if (s.includes('contabil')) {
    return CONTABILIDADE_LESSON_MATRIX_B2;
  }
  if (s.includes('auditoria')) {
    return AUDITORIA_LESSON_MATRIX_B2;
  }
  if (s.includes('administrativ') && !s.includes('finan') && !s.includes('econom')) {
    return ADMINISTRATIVO_LESSON_MATRIX_B2;
  }
  if (s.includes('constituc')) {
    return CONSTITUCIONAL_LESSON_MATRIX_B2;
  }
  if (s.includes('tribut')) {
    return TRIBUTARIO_LESSON_MATRIX_B2;
  }
  if (s.includes('portug')) {
    return PORTUGUES_LESSON_MATRIX_B2;
  }
  return undefined;
}
