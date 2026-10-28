import { SubjectLessonMatrix } from './types';

// Administração, Economia e Finanças Públicas (AFO) - 13 Aulas (0..12)
export const AFO_LESSON_MATRIX: SubjectLessonMatrix = {
  // Aula 00 - Conceito e Funções do Orçamento Público
  0: [
    {
      sub: 'Função Alocativa de Richard Musgrave',
      ref: 'Teoria das Finanças Públicas de Musgrave',
      t: 'A função alocativa do orçamento público destina-se a promover ajustamentos na alocação de recursos para fornecer bens públicos puros e meritórios que o mecanismo de mercado privado não provê de forma eficiente.',
      f: 'A função alocativa tem como escopo exclusivo o controle da inflação e da taxa básica de juros mediante operações de mercado aberto conduzidas pela autoridade monetária.',
      exp: 'A função alocativa corrige falhas de mercado ofertando bens públicos (não rivais e não excludentes, como segurança e iluminação) e semipúblicos.'
    },
    {
      sub: 'Função Distributiva do Orçamento',
      ref: 'Finanças Públicas e Equidade Fiscal',
      t: 'A função distributiva visa corrigir desigualdades na repartição da renda e da riqueza nacional, utilizando instrumentos como a tributação progressiva e as transferências governamentais assistenciais.',
      f: 'A função distributiva opera prioritariamente por meio de impostos indiretos regressivos sobre o consumo combinados com cortes lineares em transferências sociais.',
      exp: 'Na função distributiva, o Estado arrecada de quem possui maior capacidade contributiva (progressividade) e transfere renda ou serviços às camadas vulneráveis.'
    },
    {
      sub: 'Função Estabilizadora Macroeconômica',
      ref: 'Política Fiscal e Estabilização',
      t: 'A função estabilizadora emprega a política fiscal e orçamentária para manter elevado nível de emprego, estabilidade dos preços e equilíbrio no balanço de pagamentos.',
      f: 'A função estabilizadora restringe-se ao registro contábil passivo das dotações de custeio administrativo sem qualquer impacto sobre a demanda agregada da economia.',
      exp: 'A função estabilizadora atua sobre a demanda agregada para suavizar ciclos econômicos, combatendo o desemprego em recessões e a inflação em períodos de superaquecimento.'
    },
    {
      sub: 'Evolução Histórica: Orçamento Tradicional vs. Orçamento-Programa',
      ref: 'Decreto-Lei nº 200/1967 e Lei nº 4.320/1964',
      t: 'Enquanto o orçamento tradicional (clássico) enfatizava o objeto do gasto ("o que o governo compra") com foco no controle político-legislativo, o orçamento-programa vincula os recursos aos objetivos, metas e resultados ("o que o governo realiza").',
      f: 'O orçamento-programa desvincula a peça orçamentária do planejamento governamental, suprimindo a mensuração física de produtos e metas.',
      exp: 'O orçamento-programa é o elo entre o planejamento (PPA) e as finanças públicas, estruturando a despesa por programas, ações, metas físicas e indicadores.'
    },
    {
      sub: 'Orçamento Base-Zero e Orçamento de Desempenho',
      ref: 'Técnicas Orçamentárias Modernas',
      t: 'No orçamento base-zero (OBZ), todas as despesas e programas devem ser integralmente reavaliados e justificados a cada novo ciclo orçamentário a partir da estaca zero, afastando o direito adquirido a dotações históricas incrementais.',
      f: 'O orçamento base-zero consiste na mera correção monetária automática das dotações do exercício anterior pelo índice oficial de inflação.',
      exp: 'O OBZ combate o incrementalismo inercial exigindo pacote de decisão e justificativa de custo-benefício desde a base zero a cada elaboração.'
    },
    {
      sub: 'Natureza Jurídica do Orçamento Público Brasileiro',
      ref: 'Art. 165 da CF/88 e EC nº 86/2015, EC nº 100/2019 e EC nº 126/2022',
      t: 'A Lei Orçamentária Anual (LOA) possui natureza de lei formal, mantendo feição predominantemente autorizativa, mitigada pelas hipóteses constitucionais de execução obrigatória das emendas parlamentares individuais e de bancada.',
      f: 'O orçamento brasileiro tornou-se integralmente impositivo para todas as despesas discricionárias do Poder Executivo, sendo crime de responsabilidade qualquer contingenciamento.',
      exp: 'O modelo brasileiro é misto (impositivo mitigado): a regra permanece autorizativa, mas emendas individuais (até 2% da RCL) e de bancada (até 1% da RCL) têm execução obrigatória, salvo impedimento técnico ou contingenciamento proporcional.'
    }
  ],

  // Aula 01 - Princípios Orçamentários
  1: [
    {
      sub: 'Princípio da Exclusividade Orçamentária',
      ref: 'Art. 165, § 8º da CF/88',
      t: 'Pelo princípio da exclusividade, a LOA não conterá dispositivo estranho à previsão da receita e à fixação da despesa, ressalvadas a autorização para abertura de créditos suplementares e a contratação de operações de crédito, ainda que por antecipação de receita (ARO).',
      f: 'O princípio da exclusividade permite a inclusão na LOA de normas de direito civil e penal ("caudas orçamentárias"), bem como autorização prévia para créditos extraordinários.',
      exp: 'O Art. 165, § 8º da CF/88 veda os "orçamentos rabilongos", admitindo apenas duas exceções expressas: créditos suplementares e operações de crédito (inclusive ARO).'
    },
    {
      sub: 'Princípios da Unidade (Totalidade) e da Universalidade',
      ref: 'Art. 2º da Lei nº 4.320/1964 e Art. 165, § 5º da CF/88',
      t: 'O princípio da universalidade determina que a LOA compreenda todas as receitas e todas as despesas dos Poderes, fundos, órgãos e entidades da administração direta e indireta, enquanto a unidade (totalidade) exige que os suborçamentos (Fiscal, Seguridade e Investimento) componham uma peça única e harmônica.',
      f: 'O princípio da universalidade exige que a lei orçamentária inclua em seu texto a criação e a majoração de todos os tributos que serão cobrados no exercício seguinte.',
      exp: 'A regra de prévia inclusão do tributo no orçamento (anualidade tributária) não foi recepcionada pela CF/88 (Súmula 66 do STF revogada). A universalidade exige o registro de todas as receitas e despesas na LOA.'
    },
    {
      sub: 'Princípio do Orçamento Bruto',
      ref: 'Art. 6º da Lei nº 4.320/1964',
      t: 'Todas as receitas e despesas constarão da Lei de Orçamento pelos seus totais, vedadas quaisquer deduções, assegurando o controle parlamentar integral sobre os valores brutos arrecadados e gastos.',
      f: 'O princípio do orçamento bruto autoriza que o imposto de renda retido na fonte pelos Estados seja deduzido da dotação de pessoal, registrando-se apenas a despesa líquida.',
      exp: 'O Art. 6º da Lei 4.320/64 proíbe compensações ou deduções prévias: receitas e despesas entram na LOA pelos seus montantes brutos.'
    },
    {
      sub: 'Princípio da Não Afetação (Não Vinculação) da Receita de Impostos',
      ref: 'Art. 167, IV da CF/88',
      t: 'É vedada a vinculação de receita de impostos a órgão, fundo ou despesa, ressalvadas as exceções constitucionais como a repartição tributária, ações de saúde e ensino, atividades da administração tributária e prestação de garantias às operações de crédito por ARO.',
      f: 'O princípio da não afetação proíbe a vinculação de qualquer espécie tributária, impedindo que taxas de polícia e contribuições especiais sejam destinadas a fundos específicos.',
      exp: 'O Art. 167, IV da CF/88 restringe a vedação de vinculação exclusivamente aos IMPOSTOS (tributos não vinculados). Taxas e contribuições já nascem constitucionalmente vinculadas.'
    },
    {
      sub: 'Princípio da Anualidade (Periodicidade)',
      ref: 'Art. 34 da Lei nº 4.320/1964',
      t: 'O orçamento público deve ser elaborado e autorizado para um período determinado de tempo denominado exercício financeiro, que no Brasil coincide com o ano civil (1º de janeiro a 31 de dezembro).',
      f: 'No Estado da Bahia e na União, o exercício financeiro orçamentário inicia-se em 1º de julho e encerra-se em 30 de junho do ano subsequente.',
      exp: 'Nos termos do Art. 34 da Lei 4.320/64, o exercício financeiro coincide obrigatoriamente com o ano civil.'
    },
    {
      sub: 'Princípio da Especificação (Especialização ou Discriminação)',
      ref: 'Art. 5º e Art. 15 da Lei nº 4.320/1964',
      t: 'A Lei de Orçamento não consignará dotações globais destinadas a atender indiferentemente a despesas de pessoal, material, serviços de terceiros, transferências ou quaisquer outras, ressalvados os programas especiais de trabalho e a reserva de contingência.',
      f: 'O princípio da especificação obriga o Poder Executivo a aprovar todo o orçamento em dotação global única para livre remanejamento administrativo.',
      exp: 'A especificação veda dotações globais genéricas, exigindo discriminação no mínimo por elementos/natureza da despesa para viabilizar o controle.'
    }
  ],

  // Aula 02 - Créditos Adicionais (Suplementares, Especiais e Extraordinários)
  2: [
    {
      sub: 'Conceito e Classificação dos Créditos Adicionais',
      ref: 'Arts. 40 e 41 da Lei nº 4.320/1964',
      t: 'São créditos adicionais as autorizações de despesa não computadas ou insuficientemente dotadas na Lei de Orçamento, classificando-se em suplementares (reforço de dotação existente), especiais (despesas sem dotação específica) e extraordinários (despesas urgentes e imprevistas).',
      f: 'Os créditos especiais destinam-se ao reforço de dotações já existentes na LOA, enquanto os suplementares atendem exclusivamente a casos de guerra e calamidade pública.',
      exp: 'Art. 41 da Lei 4.320/64: Suplementares reforçam dotação existente; Especiais criam dotação nova para despesa sem categoria; Extraordinários atendem despesas imprevisíveis e urgentes.'
    },
    {
      sub: 'Autorização Legislativa e Forma de Abertura',
      ref: 'Art. 167, V da CF/88 e Arts. 42 e 44 da Lei nº 4.320/1964',
      t: 'Os créditos suplementares e especiais dependem de prévia autorização legislativa e indicação dos recursos correspondentes, sendo abertos por decreto do Poder Executivo, ao passo que os créditos extraordinários independem de autorização prévia e são abertos por medida provisória ou decreto executivo.',
      f: 'Os créditos suplementares podem ser abertos sem autorização legislativa prévia nem indicação de fonte de recursos, bastando portaria do ordenador de despesa.',
      exp: 'Art. 167, V da CF/88: suplementares (autorização na própria LOA ou lei específica) e especiais (lei específica) exigem autorização prévia e fonte de custeio.'
    },
    {
      sub: 'Fontes de Recursos para Créditos Suplementares e Especiais',
      ref: 'Art. 43, § 1º da Lei nº 4.320/1964 e Art. 166, § 8º da CF/88',
      t: 'Constituem fontes hábeis para abertura de créditos suplementares e especiais: o superávit financeiro apurado em balanço patrimonial do exercício anterior, o excesso de arrecadação, a anulação parcial ou total de dotações, o produto de operações de crédito autorizadas e os recursos sem despesas correspondentes (veto/emenda).',
      f: 'O superávit orçamentário do exercício corrente e o patrimônio líquido contábil constituem as únicas fontes legais para abertura de créditos suplementares.',
      exp: 'Art. 43, § 1º da Lei 4.320/64 elenca superávit financeiro (Ativo Financeiro - Passivo Financeiro), excesso de arrecadação, anulação de dotações e operações de crédito.'
    },
    {
      sub: 'Cálculo do Superávit Financeiro e do Excesso de Arrecadação',
      ref: 'Art. 43, §§ 2º, 3º e 4º da Lei nº 4.320/1964',
      t: 'No cálculo do superávit financeiro do exercício anterior, deve-se deduzir o valor dos créditos especiais e extraordinários reabertos no exercício atual; já na apuração do excesso de arrecadação, deduz-se a importância dos créditos extraordinários abertos no exercício.',
      f: 'Na apuração do excesso de arrecadação, soma-se o saldo de restos a pagar não processados cancelados há mais de cinco anos.',
      exp: 'Para evitar dupla contagem de recursos, a Lei 4.320/64 exige abater do superávit financeiro os créditos reabertos (§ 2º) e abater do excesso de arrecadação os créditos extraordinários abertos no ano (§ 3º).'
    },
    {
      sub: 'Vigência e Reabertura de Créditos Especiais e Extraordinários',
      ref: 'Art. 167, § 2º da CF/88',
      t: 'Os créditos especiais e extraordinários terão vigência no exercício financeiro em que forem autorizados, salvo se o ato de autorização for promulgado nos últimos quatro meses daquele exercício (setembro a dezembro), caso em que, reabertos nos limites de seus saldos, serão incorporados ao orçamento do exercício subsequente.',
      f: 'Os créditos suplementares promulgados no último quadrimestre do ano podem ser reabertos pelos seus saldos para o exercício financeiro seguinte.',
      exp: 'Art. 167, § 2º da CF/88: APENAS créditos especiais e extraordinários autorizados nos últimos 4 meses do ano (01/set a 31/dez) admitem reabertura para o ano seguinte. Créditos suplementares NUNCA têm vigência plurianual.'
    },
    {
      sub: 'Requisitos Constitucionais dos Créditos Extraordinários',
      ref: 'Art. 167, § 3º da CF/88 e Jurisprudência do STF (ADI 4.048)',
      t: 'A abertura de crédito extraordinário somente será admitida para atender a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública, sendo passível de controle jurisdicional abstrato pelo STF a verificação desses pressupostos constitucionais.',
      f: 'O crédito extraordinário exige obrigatoriamente a anulação prévia de dotações de investimento e não se submete a qualquer controle de constitucionalidade pelo STF.',
      exp: 'O STF (ADI 4.048) firmou que os requisitos de imprevisibilidade e urgência do Art. 167, § 3º da CF/88 estão sujeitos a controle de constitucionalidade, e o crédito extraordinário independe de prévia indicação de fonte de recursos.'
    }
  ],

  // Aula 03 - Ciclo Orçamentário e Processo Orçamentário
  3: [
    {
      sub: 'Fases do Ciclo Orçamentário Ampliado',
      ref: 'Doutrina de AFO e Manual Técnico de Orçamento (MTO)',
      t: 'O ciclo orçamentário é um processo contínuo, dinâmico e flexível que ultrapassa o ano civil e compreende quatro fases clássicas (elaboração, discussão/aprovação, execução e controle/avaliação) ou oito fases no modelo ampliado.',
      f: 'O ciclo orçamentário coincide rigorosamente com o exercício financeiro de 1º de janeiro a 31 de dezembro, encerrando-se com a sanção presidencial da LOA.',
      exp: 'O ciclo orçamentário abrange desde a formulação do PPA e LDO até o julgamento das contas pelo Legislativo anos após o encerramento do exercício financeiro.'
    },
    {
      sub: 'Iniciativa e Propostas Orçamentárias dos Poderes e Órgãos Autônomos',
      ref: 'Art. 165, caput e Art. 99, §§ 1º a 4º da CF/88',
      t: 'As leis orçamentárias (PPA, LDO e LOA) são de iniciativa privativa do Chefe do Poder Executivo, cabendo ao Judiciário, ao Legislativo, ao Ministério Público e à Defensoria Pública elaborar suas propostas parciais dentro dos limites estipulados conjuntamente na LDO.',
      f: 'O Poder Judiciário e o Ministério Público encaminham suas propostas orçamentárias diretamente ao Congresso Nacional de forma autônoma, sem consolidação pelo Executivo.',
      exp: 'Os órgãos com autonomia financeira elaboram suas propostas nos limites da LDO e as enviam ao Executivo para consolidação; se enviadas fora dos limites, o Executivo procede aos ajustes necessários (Art. 99, § 4º, CF).'
    },
    {
      sub: 'Prazos Constitucionais de Envio e Devolução (ADCT)',
      ref: 'Art. 35, § 2º do ADCT da CF/88',
      t: 'Até a edição da lei complementar prevista no art. 165, § 9º da CF/88, na esfera federal o PPA e a LOA devem ser encaminhados até 31 de agosto (4 meses antes do fim do exercício) e devolvidos até 22 de dezembro; já a LDO deve ser enviada até 15 de abril e devolvida até 17 de julho.',
      f: 'O Congresso Nacional pode entrar em recesso parlamentar em 17 de julho mesmo que ainda não tenha aprovado o projeto da Lei de Diretrizes Orçamentárias (PLDO).',
      exp: 'Nos termos do Art. 57, § 2º da CF/88, a sessão legislativa NÃO será interrompida sem a aprovação do projeto de Lei de Diretrizes Orçamentárias (LDO).'
    },
    {
      sub: 'Processo Legislativo Orçamentário e Regras para Emendas à LOA',
      ref: 'Art. 166, §§ 1º a 4º da CF/88',
      t: 'As emendas ao projeto de LOA são apreciadas na Comissão Mista de Planos, Orçamentos Públicos e Fiscalização (CMO) e somente podem ser aprovadas caso sejam compatíveis com o PPA e a LDO e indiquem os recursos necessários, admitidos apenas os provenientes de anulação de despesa, excluídas as que incidam sobre pessoal e seus encargos, serviço da dívida e transferências tributárias constitucionais.',
      f: 'Os parlamentares podem apresentar emendas à LOA anulando dotações destinadas ao pagamento do serviço da dívida pública e de salários de servidores ativos.',
      exp: 'Art. 166, § 3º, II da CF/88 protege três despesas intocáveis contra anulação por emendas parlamentares: 1) pessoal e encargos; 2) serviço da dívida; 3) transferências tributárias constitucionais.'
    },
    {
      sub: 'Modificação da Proposta Orçamentária pelo Executivo',
      ref: 'Art. 166, § 5º da CF/88',
      t: 'O Chefe do Poder Executivo poderá enviar mensagem ao Poder Legislativo para propor modificação nos projetos de leis orçamentárias enquanto não iniciada a votação, na Comissão Mista (CMO), da parte cuja alteração é proposta.',
      f: 'Uma vez protocolado o projeto de LOA no Poder Legislativo, o Chefe do Executivo fica absolutamente impedido de propor qualquer retificação em seu texto.',
      exp: 'Art. 166, § 5º da CF/88: A mensagem modificativa do Executivo é cabível enquanto não iniciada a votação, na comissão mista, da parte específica que se pretende alterar.'
    },
    {
      sub: 'Rejeição ou Veto Integral ao Projeto de LOA',
      ref: 'Art. 166, § 8º da CF/88 e Art. 32 da Lei nº 4.320/1964',
      t: 'Os recursos que, em decorrência de veto, emenda ou rejeição do projeto de lei orçamentária anual, ficarem sem despesas correspondentes poderão ser utilizados, conforme o caso, mediante créditos especiais ou suplementares, com prévia e específica autorização legislativa.',
      f: 'É vedada no direito constitucional brasileiro a rejeição integral do projeto de Lei Orçamentária Anual pelo Poder Legislativo.',
      exp: 'O Art. 166, § 8º da CF/88 prevê expressamente a possibilidade de rejeição do PLOA, bem como o uso de recursos decorrentes de veto, emenda ou rejeição mediante créditos suplementares ou especiais com autorização legislativa.'
    }
  ],

  // Aula 04 - Instrumentos de Planejamento na CF/88 (PPA, LDO e LOA)
  4: [
    {
      sub: 'Plano Plurianual (PPA): Conteúdo e Vigência',
      ref: 'Art. 165, § 1º da CF/88 e Art. 35, § 2º, I do ADCT',
      t: 'A lei que instituir o Plano Plurianual (PPA) estabelecerá, de forma regionalizada, as diretrizes, objetivos e metas da administração pública para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada, tendo vigência de quatro anos não coincidente com o mandato do Chefe do Executivo.',
      f: 'O PPA tem vigência de quatro anos perfeitamente coincidente com o mandato presidencial, iniciando-se no primeiro dia de posse do governante eleito.',
      exp: 'A vigência do PPA vai do início do segundo ano do mandato do Chefe do Executivo até o término do primeiro ano do mandato subsequente, garantindo continuidade administrativa.'
    },
    {
      sub: 'Investimentos Plurianuais e Crime de Responsabilidade',
      ref: 'Art. 167, § 1º da CF/88',
      t: 'Nenhum investimento cuja execução ultrapasse um exercício financeiro poderá ser iniciado sem prévia inclusão no Plano Plurianual, ou sem lei que autorize a inclusão, sob pena de crime de responsabilidade.',
      f: 'Investimentos cuja execução dure três exercícios financeiros podem ser iniciados apenas com previsão na LDO, dispensando-se inclusão no PPA.',
      exp: 'Art. 167, § 1º da CF/88 veda expressamente o início de investimento plurianual (> 1 exercício) fora do PPA, tipificando a conduta como crime de responsabilidade.'
    },
    {
      sub: 'Lei de Diretrizes Orçamentárias (LDO): Funções Constitucionais',
      ref: 'Art. 165, § 2º e Art. 169, § 1º da CF/88',
      t: 'A LDO compreende as metas e prioridades da administração pública, orienta a elaboração da LOA, dispõe sobre alterações na legislação tributária, estabelece a política de aplicação das agências financeiras oficiais de fomento e autoriza a concessão de vantagem, aumento de remuneração ou criação de cargos.',
      f: 'A LDO tem como função exclusiva fixar o teto da dívida consolidada mobiliária dos Estados e Municípios sem relação com despesas de pessoal.',
      exp: 'Além das atribuições do Art. 165, § 2º, o Art. 169, § 1º, II exige autorização específica na LDO para qualquer aumento de remuneração, criação de cargos ou admissão de pessoal (salvo empresas estatais não dependentes).'
    },
    {
      sub: 'Composição Tríplice da Lei Orçamentária Anual (LOA)',
      ref: 'Art. 165, § 5º, I, II e III da CF/88',
      t: 'A LOA compreende três suborçamentos: o Orçamento Fiscal, o Orçamento da Seguridade Social (saúde, previdência e assistência social) e o Orçamento de Investimento das empresas estatais em que o ente detenha, direta ou indiretamente, a maioria do capital social com direito a voto.',
      f: 'As despesas de custeio de pessoal e manutenção das empresas estatais não dependentes integram obrigatoriamente o Orçamento Fiscal da União e dos Estados.',
      exp: 'Para empresas estatais não dependentes, apenas seus investimentos constam do Orçamento de Investimento (Art. 165, § 5º, II), salvo suas despesas com saúde, previdência e assistência, que integram o Orçamento da Seguridade Social.'
    },
    {
      sub: 'Demonstrativo Regionalizado de Benefícios Tributários',
      ref: 'Art. 165, § 6º da CF/88',
      t: 'O projeto de Lei Orçamentária Anual será acompanhado de demonstrativo regionalizado do efeito, sobre as receitas e despesas, decorrente de isenções, anistias, remissões, subsídios e benefícios de natureza financeira, tributária e creditícia.',
      f: 'O demonstrativo de gastos tributários e renúncias de receita é documento sigiloso de uso exclusivo da Receita Estadual, vedada sua remessa ao Poder Legislativo.',
      exp: 'Art. 165, § 6º da CF/88 consagra a transparência fiscal dos gastos tributários (tax expenditures), exigindo que o demonstrativo acompanhe o PLOA.'
    },
    {
      sub: 'Regionalização e Redução das Desigualdades Inter-Regionais',
      ref: 'Art. 165, § 7º da CF/88',
      t: 'Os orçamentos Fiscal e de Investimento das empresas estatais, compatibilizados com o Plano Plurianual, terão entre suas funções a de reduzir desigualdades inter-regionais, segundo critério populacional.',
      f: 'O Orçamento da Seguridade Social é o único suborçamento da LOA encarregado constitucionalmente de reduzir as desigualdades inter-regionais segundo critério populacional.',
      exp: 'Pegadinha clássica de prova (Art. 165, § 7º da CF/88): a função de reduzir desigualdades inter-regionais segundo critério populacional aplica-se aos orçamentos FISCAL e de INVESTIMENTO (incisos I e II do § 5º), NÃO ao da Seguridade Social!'
    }
  ],

  // Aula 05 - Receita Pública: Conceito e Classificações
  5: [
    {
      sub: 'Receita Orçamentária vs. Ingressos Extraorçamentários',
      ref: 'Art. 3º e Art. 57 da Lei nº 4.320/1964 e MCASP',
      t: 'Receitas orçamentárias são disponibilidades de recursos financeiros que ingressam nos cofres públicos e pertencem ao Estado para financiar políticas públicas (inclusive operações de crédito), enquanto ingressos extraorçamentários são entradas transitórias de caráter devolutivo (cauções, fianças, depósitos de terceiros e ARO).',
      f: 'As operações de crédito por antecipação de receita orçamentária (ARO) constituem receitas orçamentárias de capital nos termos do Art. 3º da Lei nº 4.320/1964.',
      exp: 'Parágrafo único do Art. 3º da Lei 4.320/64: Não se consideram para os fins de receita orçamentária as operações de crédito por antecipação da receita (ARO), as emissões de papel-moeda e outras entradas compensatórias no ativo e passivo financeiros (ingressos extraorçamentários).'
    },
    {
      sub: 'Classificação por Categoria Econômica: Receitas Correntes (TRIBUTA CON PAIS)',
      ref: 'Art. 11, § 1º da Lei nº 4.320/1964 e MCASP',
      t: 'Classificam-se como Receitas Correntes as receitas tributárias (impostos, taxas e contribuições de melhoria), de contribuições, patrimonial, agropecuária, industrial, de serviços, as transferências correntes e outras receitas correntes.',
      f: 'A receita proveniente de aluguéis de imóveis públicos e dividendos de empresas estatais classifica-se como Receita de Capital de Alienação de Bens.',
      exp: 'Aluguéis, laudêmios, foros, juros de aplicações e dividendos são frutos da exploração do patrimônio público, classificando-se como Receita Corrente Patrimonial.'
    },
    {
      sub: 'Classificação por Categoria Econômica: Receitas de Capital (OPERA ALI AMOR TRANS OUTRAS)',
      ref: 'Art. 11, § 2º da Lei nº 4.320/1964 e MCASP',
      t: 'São Receitas de Capital as provenientes da realização de recursos financeiros oriundos de constituição de dívidas (operações de crédito), da conversão em espécie de bens e direitos (alienação de bens), da amortização de empréstimos concedidos, das transferências de capital e de outras receitas de capital.',
      f: 'A cobrança da dívida ativa tributária pelo Estado classifica-se como Receita de Capital por decorrer de créditos inscritos em exercícios anteriores.',
      exp: 'A receita de dívida ativa mantém a categoria econômica de Receita Corrente (Tributária ou Não Tributária / Outras Receitas Correntes).'
    },
    {
      sub: 'Superávit do Orçamento Corrente',
      ref: 'Art. 11, § 2º e § 3º da Lei nº 4.320/1964',
      t: 'Nos termos da Lei nº 4.320/1964, o superávit do Orçamento Corrente resultante do balanceamento dos totais das receitas e despesas correntes constitui item de receita de capital, mas não constitui item da receita orçamentária para efeito de execução.',
      f: 'O superávit do orçamento corrente constitui receita orçamentária corrente originária de livre arrecadação bancária.',
      exp: 'Art. 11, § 3º da Lei 4.320/64: O superávit do Orçamento Corrente é classificado legalmente como Receita de Capital, porém "não constituirá item de receita orçamentária".'
    },
    {
      sub: 'Classificação Doutrinária: Receitas Originárias vs. Derivadas',
      ref: 'Doutrina de Finanças Públicas e MCASP',
      t: 'As receitas originárias decorrem da exploração do próprio patrimônio estatal em regime de direito privado sem uso do poder de império (aluguéis, tarifas/preços públicos, dividendos), enquanto as receitas derivadas são obtidas mediante coação soberana sobre o patrimônio particular (tributos e multas).',
      f: 'As multas fiscais e os impostos estaduais constituem receitas públicas originárias por ingressarem diretamente na conta única do Tesouro.',
      exp: 'Receitas derivadas provêm do poder coercitivo estatal (jus imperii): tributos, penalidades pecuniárias e confisco. Receitas originárias provêm da exploração patrimonial.'
    },
    {
      sub: 'Classificação quanto ao Impacto Patrimonial: Receitas Efetivas vs. Não Efetivas',
      ref: 'MCASP (STN)',
      t: 'Receitas efetivas são aquelas que, no momento do reconhecimento do crédito, aumentam a situação líquida patrimonial do ente sem contrapartida de passivo ou baixa de ativo (ex: impostos), ao passo que receitas não efetivas (por mutação patrimonial) são fatos permutativos (ex: operações de crédito e alienação de bens).',
      f: 'Toda receita corrente é obrigatoriamente efetiva e toda receita de capital é obrigatoriamente não efetiva, sem qualquer exceção no MCASP.',
      exp: 'Existem exceções importantes: o recebimento de dívida ativa (receita corrente) é NÃO efetivo (baixa um ativo já reconhecido), enquanto o recebimento de transferência de capital (receita de capital) é EFETIVO (aumenta o PL sem contrapartida).'
    }
  ],

  // Aula 06 - Despesa Pública: Conceito e Estrutura
  6: [
    {
      sub: 'Dispêndios Orçamentários vs. Extraorçamentários',
      ref: 'Lei nº 4.320/1964 e MCASP',
      t: 'A despesa orçamentária depende de autorização legislativa (dotação) para sua execução, enquanto o dispêndio extraorçamentário independe de autorização na LOA e corresponde à devolução de valores transitórios (restituição de cauções, resgate de ARO e pagamento de Restos a Pagar em exercícios seguintes).',
      f: 'O pagamento de Restos a Pagar no exercício financeiro seguinte ao de sua inscrição exige nova dotação e novo empenho na LOA vigente.',
      exp: 'Os Restos a Pagar já consumiram dotação orçamentária no ano em que foram empenhados; logo, o seu pagamento em exercícios subsequentes é dispêndio extraorçamentário.'
    },
    {
      sub: 'Estrutura da Programação Qualitativa da Despesa',
      ref: 'Portaria MOG nº 42/1999 e MTO',
      t: 'A classificação qualitativa da despesa pública estrutura-se por Esfera Orçamentária (Fiscal, Seguridade, Investimento), Classificação Institucional (Órgão e Unidade Orçamentária), Classificação Funcional (Função e Subfunção) e Estrutura Programática (Programa e Ação).',
      f: 'A classificação qualitativa da despesa resume-se exclusivamente ao código numérico do elemento de despesa e do subelemento contábil.',
      exp: 'A programação qualitativa responde a "em qual orçamento?", "quem gasta?", "em que área de atuação?" e "o que e para que se gasta?".'
    },
    {
      sub: 'Classificação Funcional: Função e Subfunção (Portaria MOG nº 42/1999)',
      ref: 'Portaria MOG nº 42/1999',
      t: 'A Função representa o maior nível de agregação das diversas áreas de despesa que competem ao setor público (relacionando-se à missão institucional do órgão), enquanto a Subfunção representa uma partição da função visando agregar determinado subconjunto de despesa, podendo ser combinada com funções diferentes daquela a que está vinculada (matricialidade).',
      f: 'É terminantemente proibida pela Portaria nº 42/1999 a combinação de uma subfunção típica de uma área (como Saúde) com a função de outro ministério ou secretaria (como Defesa ou Educação).',
      exp: 'Regra fundamental da Portaria MOG 42/99: as subfunções podem ser combinadas com funções diferentes daquelas a que estão diretamente vinculadas (princípio da matricialidade), exceto a função Encargos Especiais.'
    },
    {
      sub: 'Tipologia de Ações Orçamentárias: Projetos, Atividades e Operações Especiais',
      ref: 'MTO e Portaria MOG nº 42/1999',
      t: 'Projeto é um instrumento de programação limitado no tempo do qual resulta um produto que concorre para a expansão ou aperfeiçoamento da ação de governo; Atividade envolve operações contínuas e permanentes de manutenção; e Operação Especial abrange despesas que não contribuem para a manutenção, expansão ou aperfeiçoamento das ações de governo e das quais não resulta um produto.',
      f: 'O pagamento de aposentadorias, pensões, sentenças judiciais e amortização da dívida pública é classificado como Projeto de Expansão Governamental.',
      exp: 'Aposentadorias, pensões, serviço da dívida e transferências constitucionais são exemplos clássicos de Operações Especiais (não geram produto direto nem contraprestação de bens/serviços).'
    },
    {
      sub: 'Classificação Institucional: Órgão Orçamentário e Unidade Orçamentária (UO)',
      ref: 'Art. 14 da Lei nº 4.320/1964 e MTO',
      t: 'Constitui Unidade Orçamentária (UO) o agrupamento de serviços subordinados ao mesmo órgão ou repartição a que serão consignadas dotações próprias na LOA, não precisando um órgão orçamentário corresponder necessariamente a uma estrutura administrativa física.',
      f: 'Apenas entidades dotadas de personalidade jurídica própria de direito público podem ser qualificadas como Unidades Orçamentárias na LOA.',
      exp: 'Fundos especiais e agrupamentos de encargos financeiros (sem personalidade jurídica) podem constituir Unidades Orçamentárias ou Órgãos Orçamentários.'
    },
    {
      sub: 'Componentes da Programação Física e Financeira',
      ref: 'MTO - Programação Quantitativa',
      t: 'Enquanto a programação qualitativa define o programa de trabalho, a programação quantitativa possui duas dimensões: a dimensão física (meta física do produto a ser entregue pela ação) e a dimensão financeira (dotação orçamentária monetária necessária).',
      f: 'As ações do tipo Operação Especial exigem obrigatoriamente a fixação de meta física unitária mensurável em unidades de obra construída.',
      exp: 'Como as Operações Especiais não geram um produto direto (bens ou serviços), elas não possuem meta física associada na LOA, possuindo apenas dimensão financeira.'
    }
  ],

  // Aula 07 - Despesa Pública: Classificação Orçamentária
  7: [
    {
      sub: 'Codificação da Natureza da Despesa (C.G.M.E)',
      ref: 'Portaria Interministerial STN/SOF nº 163/2001 e MCASP',
      t: 'A classificação por Natureza da Despesa compõe-se de um código de 6 dígitos (ou 8 dígitos com o desdobramento facultativo), estruturado em: Categoria Econômica (1º dígito), Grupo de Natureza de Despesa - GND (2º dígito), Modalidade de Aplicação (3º e 4º dígitos) e Elemento de Despesa (5º e 6º dígitos).',
      f: 'A Modalidade de Aplicação indica o objeto final do gasto (como material de consumo ou diárias) e substitui o Elemento de Despesa na execução orçamentária.',
      exp: 'No código C.G.MM.EE (ex: 3.3.90.30): C = Categoria Econômica (3 Corrente / 4 Capital); G = GND (1 a 6); MM = Modalidade de Aplicação (ex: 90 Aplicação Direta); EE = Elemento de Despesa (ex: 30 Material de Consumo).'
    },
    {
      sub: 'Despesas Correntes (GNDs 1, 2 e 3)',
      ref: 'Art. 12 da Lei nº 4.320/1964 e Portaria nº 163/2001',
      t: 'As Despesas Correntes (Categoria Econômica 3) subdividem-se nos Grupos de Natureza de Despesa: 1 - Pessoal e Encargos Sociais; 2 - Juros e Encargos da Dívida; e 3 - Outras Despesas Correntes (como material de consumo, diárias, passagens e serviços de terceiros).',
      f: 'O pagamento de juros sobre a dívida pública fundada interna classifica-se como Despesa de Capital no grupo Amortização da Dívida (GND 6).',
      exp: 'Atenção: JUROS e encargos da dívida são Despesa CORRENTE (GND 2 - 3.2). Apenas a AMORTIZAÇÃO do principal da dívida é Despesa de CAPITAL (GND 6 - 4.6).'
    },
    {
      sub: 'Despesas de Capital (GNDs 4, 5 e 6)',
      ref: 'Art. 12 da Lei nº 4.320/1964 e Portaria nº 163/2001',
      t: 'As Despesas de Capital (Categoria Econômica 4) compreendem os Grupos de Natureza de Despesa: 4 - Investimentos; 5 - Inversões Financeiras; e 6 - Amortização da Dívida.',
      f: 'A aquisição de equipamentos de informática novos e a construção de rodovias públicas classificam-se como Inversões Financeiras (GND 5).',
      exp: 'Obras públicas, instalações, equipamentos e material permanente novos (assim como softwares sob encomenda) classificam-se como INVESTIMENTOS (GND 4).'
    },
    {
      sub: 'Distinção Clássica: Investimentos (GND 4) vs. Inversões Financeiras (GND 5)',
      ref: 'Art. 12, §§ 4º e 5º da Lei nº 4.320/1964',
      t: 'Classificam-se como Investimentos o planejamento e a execução de obras, a aquisição de instalações, equipamentos e material permanente, e a aquisição de imóveis necessários à realização de obras; já as Inversões Financeiras abrangem a aquisição de imóveis ou bens de capital já em utilização, a aquisição de títulos representativos do capital de empresas já constituídas (quando não importe aumento de capital) e a concessão de empréstimos.',
      f: 'A aquisição de um terreno para a construção de um hospital público estadual é classificada como Inversão Financeira na Lei nº 4.320/1964.',
      exp: 'Art. 12, § 4º da Lei 4.320/64: A aquisição de imóveis ou de bens de capital JÁ EM UTILIZAÇÃO é Inversão Financeira; porém, a aquisição de imóveis necessários à realização de OBRAS novas é INVESTIMENTO!'
    },
    {
      sub: 'Subvenções Sociais e Econômicas vs. Auxílios',
      ref: 'Art. 12, §§ 3º e 6º e Arts. 16 a 19 da Lei nº 4.320/1964',
      t: 'As subvenções destinam-se a cobrir despesas de custeio das entidades beneficiadas (Transferências Correntes), dividindo-se em sociais (instituições públicas ou privadas de caráter assistencial ou cultural sem finalidade lucrativa) e econômicas (empresas públicas ou privadas), enquanto os auxílios e contribuições de capital constituem Transferências de Capital.',
      f: 'A Lei nº 4.320/1964 autoriza a concessão de subvenções econômicas a empresas privadas com fins lucrativos mediante simples despacho administrativo, dispensando lei especial autorizativa.',
      exp: 'Art. 19 da Lei 4.320/64: A Lei de Orçamento não consignará ajuda financeira, a qualquer título, a empresa de fins lucrativos, salvo quando se tratar de subvenções cuja concessão tenha sido expressamente autorizada em LEI ESPECIAL.'
    },
    {
      sub: 'Modalidade de Aplicação e Vedação à Dupla Contagem',
      ref: 'Portaria Interministerial nº 163/2001',
      t: 'A Modalidade de Aplicação indica se os recursos serão aplicados diretamente pela unidade detentora do crédito (modalidade 90) ou mediante transferência para outras esferas de governo, órgãos ou entidades privadas (ex: 30 Estados, 40 Municípios, 50 Entidades Privadas sem fins lucrativos), visando eliminar a dupla contagem dos recursos no orçamento.',
      f: 'A Modalidade de Aplicação é informação gerencial obrigatória que deve constar do texto publicado da Lei Orçamentária Anual com vedação de alteração durante a execução.',
      exp: 'A Modalidade de Aplicação é informação gerencial destinando-se a evitar dupla contagem em transferências; na LOA, a despesa é discriminada até o nível de GND e Modalidade (ou GND).'
    }
  ],

  // Aula 08 - Estágios da Receita e da Despesa Pública
  8: [
    {
      sub: 'Estágios da Receita Orçamentária (Previsão, Lançamento, Arrecadação e Recolhimento)',
      ref: 'Arts. 51 a 56 da Lei nº 4.320/1964 e MCASP',
      t: 'A execução da receita orçamentária segue os estágios de Arrecadação (entrega dos recursos pelos contribuintes aos agentes arrecadadores/bancos) e Recolhimento (transferência dos valores arrecadados à conta específica do Tesouro Público sob o princípio da unidade de tesouraria), precedidos pelo planejamento (Previsão) e, quando aplicável, pelo Lançamento.',
      f: 'Toda receita pública orçamentária percorre obrigatoriamente os quatro estágios na ordem estrita de previsão, lançamento, recolhimento e arrecadação.',
      exp: 'Nem toda receita passa pelo estágio do lançamento (ex: doações e transferências voluntárias), e a Arrecadação (pagamento pelo contribuinte no banco) sempre antecede o Recolhimento (repasse do banco à Conta Única do Tesouro).'
    },
    {
      sub: 'Empenho da Despesa e suas Modalidades (Ordinário, Estimativo e Global)',
      ref: 'Arts. 58 a 61 da Lei nº 4.320/1964',
      t: 'O empenho é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição, classificando-se em: Ordinário (valor exato e pagamento único), por Estimativa (montante não se pode determinar previamente, como água e energia) e Global (despesas contratuais de valor determinado sujeitas a parcelamento, como aluguéis).',
      f: 'O empenho global é utilizado para despesas cujo montante total seja desconhecido, sendo vedado o seu reforço ou anulação parcial.',
      exp: 'Art. 60 da Lei 4.320/64: Valor desconhecido = Empenho por Estimativa; Valor total conhecido mas pago parceladamente (ex: aluguel anual, contrato de obra parcelada) = Empenho Global; Valor exato em parcela única = Empenho Ordinário.'
    },
    {
      sub: 'Liquidação da Despesa Pública',
      ref: 'Arts. 62 e 63 da Lei nº 4.320/1964',
      t: 'A liquidação da despesa consiste na verificação do direito adquirido pelo credor tendo por base os títulos e documentos comprobatórios do respectivo crédito (contrato, nota de empenho e comprovante da entrega do material ou da prestação efetiva do serviço).',
      f: 'A liquidação da despesa consiste na emissão da ordem bancária para transferência eletrônica do numerário ao fornecedor antes da entrega do bem.',
      exp: 'Art. 63 da Lei 4.320/64: A liquidação apura a origem e o objeto do que se deve pagar, a importância exata a pagar e a quem se deve pagar para extinguir a obrigação, após o implemento da condição.'
    },
    {
      sub: 'Regime de Adiantamento (Suprimento de Fundos)',
      ref: 'Arts. 68 e 69 da Lei nº 4.320/1964',
      t: 'O regime de adiantamento (suprimento de fundos) é aplicável aos casos de despesas expressamente definidos em lei (eventuais, de pronto pagamento/pequeno vulto ou sigilosas) e consiste na entrega de numerário a servidor, sempre precedida de empenho na dotação própria, não podendo ser concedido a servidor em alcance nem a responsável por dois adiantamentos.',
      f: 'O suprimento de fundos dispensa o prévio empenho orçamentário e pode ser concedido a servidor declarado em alcance desde que autorizado pelo governador.',
      exp: 'Art. 68 e 69 da Lei 4.320/64: O suprimento de fundos SEMPRE exige prévio empenho na dotação própria e é vedado a servidor em alcance (que não prestou contas no prazo ou teve contas reprovadas) ou responsável por dois adiantamentos.'
    },
    {
      sub: 'Restos a Pagar (Processados vs. Não Processados)',
      ref: 'Art. 36 da Lei nº 4.320/1964 e Decreto nº 93.872/1986',
      t: 'Consideram-se Restos a Pagar as despesas empenhadas mas não pagas até o dia 31 de dezembro, distinguindo-se as processadas (empenhadas e já liquidadas, cujo direito do credor é líquido e certo) das não processadas (empenhadas mas ainda pendentes de liquidação).',
      f: 'Os Restos a Pagar Processados podem ser livremente cancelados por conveniência administrativa do gestor para gerar superávit financeiro.',
      exp: 'Nos Restos a Pagar Processados (RPP), o fornecedor já entregou o bem ou prestou o serviço (despesa liquidada), não cabendo cancelamento unilateral salvo erro formal ou prescrição.'
    },
    {
      sub: 'Despesas de Exercícios Anteriores (DEA)',
      ref: 'Art. 37 da Lei nº 4.320/1964',
      t: 'Correspondem a Despesas de Exercícios Anteriores (DEA), pagas à conta de dotação específica do orçamento atual, as despesas de exercícios encerrados para as quais o orçamento respectivo consignava crédito próprio, com saldo suficiente, mas que não se tenham processado na época própria, bem como os Restos a Pagar com prescrição interrompida e os compromissos reconhecidos após o encerramento do exercício.',
      f: 'As Despesas de Exercícios Anteriores (DEA) constituem dispêndios extraorçamentários que independem de empenho ou de dotação na LOA vigente.',
      exp: 'Diferentemente dos Restos a Pagar (que são extraorçamentários no pagamento), as DEA são despesas ORÇAMENTÁRIAS do exercício atual (Elemento de Despesa 92), exigindo dotação, empenho, liquidação e pagamento.'
    }
  ],

  // Aula 09 - Lei de Responsabilidade Fiscal (LRF Parte 1 - Planejamento e RCL)
  9: [
    {
      sub: 'Abrangência Subjetiva da LRF (LC nº 101/2000)',
      ref: 'Art. 1º, §§ 2º e 3º e Art. 2º, III da LRF',
      t: 'As disposições da LRF obrigam a União, os Estados, o Distrito Federal e os Municípios, abrangendo os Poderes Executivo, Legislativo (incluídos os Tribunais de Contas), Judiciário, o Ministério Público, as respectivas administrações diretas, fundos, autarquias, fundações e as empresas estatais dependentes.',
      f: 'As empresas públicas e sociedades de economia mista não dependentes (como o Banco do Brasil e a Petrobras) submetem-se aos limites de despesa com pessoal da LRF.',
      exp: 'Apenas as empresas estatais DEPENDENTES (aquelas controladas que recebem do ente controlador recursos financeiros para pagamento de despesas com pessoal ou de custeio em geral, excluídos os de aumento de participação acionária) submetem-se integralmente à LRF.'
    },
    {
      sub: 'Anexo de Metas Fiscais (AMF) e Anexo de Riscos Fiscais (ARF) na LDO',
      ref: 'Art. 4º, §§ 1º a 3º da LRF',
      t: 'Integrará o projeto de LDO o Anexo de Metas Fiscais, em que serão estabelecidas metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública para o exercício a que se referirem e para os dois seguintes, além do Anexo de Riscos Fiscais, onde serão avaliados os passivos contingentes.',
      f: 'O Anexo de Metas Fiscais e o Anexo de Riscos Fiscais integram exclusivamente o texto do Plano Plurianual (PPA) e têm vigência decenal.',
      exp: 'Art. 4º, §§ 1º e 3º da LRF: Ambos os anexos (AMF e ARF) integram a Lei de Diretrizes Orçamentárias (LDO)!'
    },
    {
      sub: 'Limitação de Empenho e Movimentação Financeira (Contingenciamento)',
      ref: 'Art. 9º da LRF e Jurisprudência do STF (ADI 2.238)',
      t: 'Se verificado, ao final de um bimestre, que a realização da receita poderá não comportar o cumprimento das metas de resultado primário ou nominal estabelecidas no Anexo de Metas Fiscais, os Poderes e o Ministério Público promoverão, por ato próprio e nos montantes necessários, nos trinta dias subsequentes, limitação de empenho e movimentação financeira, segundo os critérios fixados pela LDO.',
      f: 'Não serão objeto de limitação de empenho apenas as despesas discricionárias de investimentos em obras rodoviárias, podendo ser contingenciado o pagamento do serviço da dívida.',
      exp: 'Art. 9º, § 2º da LRF: NÃO serão objeto de limitação as obrigações constitucionais e legais do ente, inclusive aquelas destinadas ao pagamento do serviço da dívida, à ciência e tecnologia e as ressalvadas pela LDO.'
    },
    {
      sub: 'Conceito e Apuração da Receita Corrente Líquida (RCL) dos Estados',
      ref: 'Art. 2º, IV e § 3º da LRF',
      t: 'A Receita Corrente Líquida (RCL) é apurada somando-se as receitas arrecadadas no mês em referência e nos onze anteriores (período de 12 meses), deduzidas, nos Estados, as parcelas entregues aos Municípios por determinação constitucional e as contribuições dos servidores para o custeio do seu sistema de previdência e assistência social e as receitas provenientes da compensação financeira previdenciária.',
      f: 'A Receita Corrente Líquida é calculada exclusivamente sobre as receitas de capital previstas para o quadriênio do PPA.',
      exp: 'Art. 2º, IV e § 3º da LRF: A RCL considera os últimos 12 meses (mês de referência + 11 anteriores) de receitas correntes, deduzindo nos Estados as transferências constitucionais aos municípios (25% ICMS, 50% IPVA, 25% IPI-Exp) e as contribuições previdenciárias dos servidores.'
    },
    {
      sub: 'Renúncia de Receita e Medidas de Compensação',
      ref: 'Art. 14 da LRF',
      t: 'A concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deverá estar acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva iniciar sua vigência e nos dois seguintes, atender à LDO e a pelo menos uma de duas condições: demonstração de que foi considerada na estimativa de receita da LOA sem afetar as metas fiscais, ou estar acompanhada de medidas de compensação.',
      f: 'As alterações das alíquotas do II, IE, IPI e IOF, bem como o cancelamento de débito cujo montante seja inferior ao dos respectivos custos de cobrança, exigem medidas prévias de compensação tributária pelo Art. 14 da LRF.',
      exp: 'Art. 14, § 3º da LRF: O disposto no art. 14 NÃO se aplica às alterações das alíquotas dos impostos extrafiscais (II, IE, IPI e IOF) nem ao cancelamento de débito de pequeno valor cujo montante seja inferior aos custos de cobrança.'
    },
    {
      sub: 'Geração de Despesa e Despesa Obrigatória de Caráter Continuado (DOCC)',
      ref: 'Arts. 16 e 17 da LRF',
      t: 'Considera-se obrigatória de caráter continuado a despesa corrente derivada de lei, medida provisória ou ato administrativo normativo que fixem para o ente a obrigação legal de sua execução por um período superior a dois exercícios, exigindo comprovação de origem dos recursos para seu custeio e compensação pelo aumento permanente de receita ou redução permanente de despesa.',
      f: 'A despesa destinada ao serviço da dívida pública e ao reajustamento geral anual de servidores (art. 37, X, CF) submete-se integralmente à exigência de compensação do Art. 17 da LRF.',
      exp: 'Art. 17, § 6º da LRF: As regras de compensação da DOCC NÃO se aplicam às despesas destinadas ao serviço da dívida nem ao reajustamento geral anual dos servidores.'
    }
  ],

  // Aula 10 - Lei de Responsabilidade Fiscal (LRF Parte 2 - Despesa com Pessoal)
  10: [
    {
      sub: 'Limites Globais de Despesa Total com Pessoal por Ente Federativo',
      ref: 'Art. 19 da LRF',
      t: 'A despesa total com pessoal, em cada período de apuração e em cada ente da Federação, não poderá exceder os percentuais da Receita Corrente Líquida (RCL) de: 50% na União; 60% nos Estados e no Distrito Federal; e 60% nos Municípios.',
      f: 'O limite global de despesa total com pessoal em relação à Receita Corrente Líquida é de 60% para a União e de 50% para os Estados e Municípios.',
      exp: 'Art. 19 da LRF: União = 50% da RCL; Estados = 60% da RCL; Municípios = 60% da RCL.'
    },
    {
      sub: 'Repartição dos Limites de Pessoal na Esfera Estadual (60% da RCL)',
      ref: 'Art. 20, II da LRF',
      t: 'Na esfera estadual, a repartição do limite global de 60% da RCL para despesa com pessoal não poderá exceder: 3% para o Legislativo (incluído o Tribunal de Contas do Estado), 6% para o Judiciário, 2% para o Ministério Público e 49% para o Poder Executivo (dentro do qual se insere a Defensoria Pública).',
      f: 'Na esfera estadual, o Poder Judiciário dispõe de limite de 10% da RCL e o Ministério Público dispõe de 6% da RCL para despesas com pessoal.',
      exp: 'Art. 20, II da LRF (Estados): Executivo = 49%; Judiciário = 6%; Legislativo + TCE/TCM = 3%; Ministério Público Estadual = 2% (Total = 60%).'
    },
    {
      sub: 'Itens Excluídos do Cômputo do Limite de Despesa com Pessoal',
      ref: 'Art. 19, § 1º da LRF',
      t: 'Na verificação do atendimento dos limites de despesa com pessoal, não serão computadas as despesas: de indenização por demissão de servidores ou empregados; relativas a incentivos à demissão voluntária; derivadas de convocação extraordinária do Congresso; decorrentes de decisão judicial de competência de período anterior ao da apuração; e com inativos e pensionistas custeadas com recursos próprios vinculados da previdência.',
      f: 'As despesas com terceirização de mão de obra que se referem à substituição de servidores e empregados públicos são excluídas do cálculo da despesa total com pessoal.',
      exp: 'Art. 18, § 1º da LRF: Os valores dos contratos de terceirização de mão de obra que se referem à substituição de servidores e empregados públicos DEVEM ser contabilizados como "Outras Despesas de Pessoal" e entram no limite!'
    },
    {
      sub: 'Limite de Alerta (90%) e Limite Prudencial (95%)',
      ref: 'Art. 59, § 1º, II e Art. 22, parágrafo único da LRF',
      t: 'O Tribunal de Contas alertará os Poderes ou órgãos quando a despesa com pessoal ultrapassar 90% do limite (limite de alerta); já se a despesa exceder a 95% do limite (limite prudencial), ficam vedados ao Poder ou órgão a concessão de vantagem ou aumento, a criação de cargo, a alteração de carreira que implique aumento de despesa, o provimento de cargo público (salvo reposição em educação, saúde e segurança) e a contratação de hora extra (salvo situações da LDO).',
      f: 'Ao atingir o limite prudencial de 95%, o Poder ou órgão fica proibido até mesmo de conceder a revisão geral anual (art. 37, X, CF) e de repor vacâncias nas áreas de saúde e educação.',
      exp: 'Art. 22, parágrafo único da LRF ressalva expressamente do limite prudencial: I - a revisão geral anual (art. 37, X, CF); IV - a reposição decorrente de aposentadoria ou falecimento de servidores das áreas de educação, saúde e segurança.'
    },
    {
      sub: 'Extrapolação do Limite Máximo (100%) e Prazo de Recondução',
      ref: 'Art. 23 da LRF e Art. 169, §§ 3º e 4º da CF/88',
      t: 'Se a despesa total com pessoal, do Poder ou órgão, ultrapassar os limites definidos na LRF, o percentual excedente terá de ser eliminado nos dois quadrimestres seguintes, sendo pelo menos um terço no primeiro, adotando-se a redução em pelo menos 20% das despesas com cargos em comissão e funções de confiança e a exoneração dos servidores não estáveis, e, se insuficiente, a perda de cargo do servidor estável.',
      f: 'Ultrapassado o limite máximo de pessoal, o ente dispõe de cinco exercícios financeiros para eliminar o excesso, sem qualquer restrição no primeiro ano.',
      exp: 'Art. 23 da LRF: O excesso deve ser eliminado nos 2 quadrimestres seguintes (pelo menos 1/3 no primeiro), salvo em caso de baixo crescimento econômico/calamidade (art. 66), quando o prazo duplica.'
    },
    {
      sub: 'Nulidade de Atos de Aumento de Despesa com Pessoal nos Últimos 180 Dias de Mandato',
      ref: 'Art. 21, II da LRF',
      t: 'É nulo de pleno direito o ato de que resulte aumento da despesa com pessoal expedido nos 180 (cento e oitenta) dias anteriores ao final do mandato do titular do respectivo Poder ou órgão, bem como o ato que preveja parcelas a serem implementadas em períodos posteriores ao final do mandato sem autorização na LDO.',
      f: 'O governador ou prefeito pode conceder reajustes salariais reais para vigorarem no último mês de seu mandato, desde que a despesa esteja abaixo do limite prudencial.',
      exp: 'Art. 21 da LRF pune com nulidade de pleno direito o aumento de despesa com pessoal expedido nos últimos 180 dias do mandato do titular de Poder ou órgão.'
    }
  ],

  // Aula 11 - Lei de Responsabilidade Fiscal (LRF Parte 3 - Dívida e Endividamento)
  11: [
    {
      sub: 'Dívida Pública Consolidada (Fundada) vs. Dívida Mobiliária',
      ref: 'Art. 29, I e II e § 3º da LRF',
      t: 'Dívida pública consolidada ou fundada é o montante total, apurado sem duplicidade, das obrigações financeiras do ente assumidas em virtude de leis, contratos, convênios ou tratados para amortização em prazo superior a doze meses, incluindo também as operações de crédito de prazo inferior a doze meses cujas receitas tenham constado do orçamento.',
      f: 'Operações de crédito de prazo inferior a doze meses cujas receitas tenham constado da LOA jamais integram a dívida pública consolidada na LRF.',
      exp: 'Pegadinha clássica do Art. 29, § 3º da LRF: diferentemente da Lei 4.320/64, na LRF também integram a dívida pública consolidada as operações de crédito de prazo INFERIOR a 12 meses cujas receitas tenham constado do orçamento!'
    },
    {
      sub: 'Competência para Fixação dos Limites da Dívida Consolidada e Mobiliária',
      ref: 'Art. 52, VI e IX e Art. 48, XIV da CF/88 e Art. 30 da LRF',
      t: 'Por proposta do Presidente da República, compete privativamente ao Senado Federal, mediante resolução, fixar os limites globais para o montante da dívida consolidada da União, dos Estados, do DF e dos Municípios (atualmente 200% da RCL para Estados e 120% para Municípios), cabendo ao Congresso Nacional dispor por lei sobre o montante da dívida mobiliária federal.',
      f: 'Os limites da dívida consolidada dos Estados e Municípios são fixados por decreto autônomo de cada Governador em conjunto com o Tribunal de Contas.',
      exp: 'Dívida Consolidada (União, Estados, DF e Municípios) e Dívida Mobiliária (Estados, DF e Municípios) = Resolução do Senado Federal (Resoluções SF 40/2001 e 43/2001). Dívida Mobiliária Federal = Lei do Congresso Nacional.'
    },
    {
      sub: 'Recondução da Dívida Consolidada ao Limite (3 Quadrimestres)',
      ref: 'Art. 31 da LRF',
      t: 'Se a dívida consolidada de um ente da Federação ultrapassar o respectivo limite ao final de um quadrimestre, deverá ser a ele reconduzida até o término dos três subsequentes, reduzindo o excedente em pelo menos 25% no primeiro quadrimestre, ficando o ente proibido de realizar operação de crédito interna ou externa (inclusive ARO), salvo para refinanciamento do principal atualizado da dívida mobiliária.',
      f: 'O prazo de recondução da dívida consolidada é de dois bimestres, reduzindo-se metade no primeiro bimestre sem restrição à contratação de ARO.',
      exp: 'Compare os prazos da LRF: Pessoal = 2 quadrimestres (1/3 no 1º); Dívida Consolidada = 3 quadrimestres (25% no 1º).'
    },
    {
      sub: 'Regra de Ouro na LRF e Vedações de Operações de Crédito',
      ref: 'Art. 32, § 3º, Art. 35 e Art. 37 da LRF',
      t: 'É vedada a realização de operação de crédito entre um ente da Federação, diretamente ou por intermédio de fundo, autarquia, fundação ou empresa estatal dependente, e outro, inclusive suas entidades da administração indireta, ainda que sob a forma de novação, refinanciamento ou postergação de dívida contraída anteriormente.',
      f: 'A LRF autoriza que o Banco Central do Brasil conceda empréstimos diretos ao Tesouro Nacional para financiar o déficit corrente primário da União.',
      exp: 'O Art. 35 da LRF proíbe operações de crédito entre entes da Federação, e o Art. 164, § 1º da CF/88 c/c Art. 39 da LRF proíbe ao Banco Central conceder empréstimos ao Tesouro.'
    },
    {
      sub: 'Operações Equiparadas a Operação de Crédito (Vedação do Art. 37)',
      ref: 'Art. 37 da LRF',
      t: 'Equiparam-se a operações de crédito e estão vedadas pela LRF: a captação de recursos a título de antecipação de receita de tributo ou contribuição cujo fato gerador ainda não tenha ocorrido; o recebimento antecipado de valores de empresa em que o Poder Público detenha a maioria do capital social com direito a voto (salvo lucros e dividendos); e a assunção direta de compromisso ou confissão de dívida com fornecedor.',
      f: 'O recebimento de lucros e dividendos pagos por sociedade de economia mista ao Estado controlador é equiparado a operação de crédito ilegal pelo Art. 37 da LRF.',
      exp: 'Art. 37, II da LRF veda o recebimento antecipado de valores de estatal controlada, RESSALVADOS os lucros e dividendos, na forma da legislação.'
    },
    {
      sub: 'Operações de Crédito por Antecipação de Receita Orçamentária (ARO)',
      ref: 'Art. 38 da LRF',
      t: 'A operação de crédito por antecipação de receita (ARO) destina-se a atender insuficiência de caixa durante o exercício financeiro e somente poderá ser realizada a partir do décimo dia do início do exercício, devendo ser liquidada, com juros e outros encargos incidentes, até o dia dez de dezembro de cada ano, sendo proibida no último ano de mandato do Presidente, Governador ou Prefeito.',
      f: 'A operação de crédito por ARO pode ser contratada a partir de 2 de janeiro e é permitida no último ano de mandato do Governador desde que liquidada até 31 de dezembro.',
      exp: 'Regras da ARO (Art. 38 da LRF): 1) contratação só a partir de 10 de janeiro; 2) liquidação até 10 de dezembro; 3) proibida enquanto existir outra ARO não resgatada; 4) PROIBIDA no último ano de mandato do Chefe do Executivo.'
    }
  ],

  // Aula 12 - Lei de Responsabilidade Fiscal (LRF Parte 4 - Transparência e Controle)
  12: [
    {
      sub: 'Instrumentos de Transparência da Gestão Fiscal',
      ref: 'Arts. 48 e 48-A da LRF (LC nº 131/2009)',
      t: 'São instrumentos de transparência da gestão fiscal, aos quais será dada ampla divulgação, inclusive em meios eletrônicos de acesso público: os planos, orçamentos e leis de diretrizes orçamentárias; as prestações de contas e o respectivo parecer prévio; o Relatório Resumido da Execução Orçamentária (RREO) e o Relatório de Gestão Fiscal (RGF); e as versões simplificadas desses documentos.',
      f: 'O acesso do cidadão ao sistema eletrônico de execução orçamentária e financeira em tempo real depende de requerimento administrativo formal motivado.',
      exp: 'Art. 48, § 1º, II e Art. 48-A da LRF exigem a liberação ao pleno conhecimento e acompanhamento da sociedade, em tempo real, de informações pormenorizadas sobre a execução orçamentária e financeira, sem exigência de cadastramento ou requerimento.'
    },
    {
      sub: 'Relatório Resumido da Execução Orçamentária (RREO)',
      ref: 'Art. 165, § 3º da CF/88 e Arts. 52 e 53 da LRF',
      t: 'O Relatório Resumido da Execução Orçamentária (RREO) abrange todos os Poderes e o Ministério Público, mas é publicado exclusivamente pelo Poder Executivo até trinta dias após o encerramento de cada bimestre, sendo composto pelo balanço orçamentário e demonstrativos da execução das receitas, despesas, resultados nominal e primário, restos a pagar e RCL.',
      f: 'O RREO é emitido individualmente pelos titulares de cada Poder e do Ministério Público a cada quadrimestre.',
      exp: 'Distinção clássica: RREO = Poder Executivo publica consolidado (todos os Poderes) a cada BIMESTRE (até 30 dias após). RGF = Cada titular de Poder/órgão emite o seu a cada QUADRIMESTRE (até 30 dias após).'
    },
    {
      sub: 'Relatório de Gestão Fiscal (RGF)',
      ref: 'Arts. 54 e 55 da LRF',
      t: 'Ao final de cada quadrimestre será emitido pelos titulares dos Poderes e órgãos referidos no art. 20 da LRF o Relatório de Gestão Fiscal (RGF), assinado pelo Chefe do Poder/órgão e pelas autoridades responsáveis pela administração financeira e pelo controle interno, contendo comparativos com os limites da LRF de despesa total com pessoal, dívidas consolidada e mobiliária, concessão de garantias e operações de crédito (inclusive ARO).',
      f: 'Os Municípios com população inferior a 200 mil habitantes estão dispensados de elaborar e publicar o Relatório de Gestão Fiscal.',
      exp: 'Art. 63 da LRF: Municípios com população inferior a 50 mil habitantes podem optar por divulgar o RGF (e os demonstrativos do art. 53 do RREO) SEMESTRALMENTE, mas jamais estão dispensados de publicá-los!'
    },
    {
      sub: 'Restos a Pagar nos Dois Últimos Quadrimestres do Mandato (Art. 42 da LRF)',
      ref: 'Art. 42 da LRF',
      t: 'É vedado ao titular de Poder ou órgão referido no art. 20, nos últimos dois quadrimestres do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte sem que haja suficiente disponibilidade de caixa para este efeito.',
      f: 'A vedação do Art. 42 da LRF impede a inscrição de qualquer valor em Restos a Pagar nos últimos oito meses do mandato, mesmo quando houver plena disponibilidade de caixa.',
      exp: 'O Art. 42 da LRF não proíbe a inscrição em Restos a Pagar se houver suficiente disponibilidade de caixa líquida (considerados os encargos e despesas compromissadas a pagar até o final do exercício).'
    },
    {
      sub: 'Preservação do Patrimônio Público (Arts. 44 a 46 da LRF)',
      ref: 'Arts. 44, 45 e 46 da LRF',
      t: 'É vedada a aplicação da receita de capital derivada da alienação de bens e direitos que integram o patrimônio público para o financiamento de despesa corrente, salvo se destinada por lei aos regimes de previdência social, geral e próprio dos servidores públicos; ademais, a LOA não consignará dotação para início de novos projetos sem que estejam adequadamente atendidos os projetos em andamento e contempladas as despesas de conservação do patrimônio público.',
      f: 'A receita obtida pelo Estado com a privatização de empresa estatal ou venda de imóveis públicos pode ser livremente aplicada no pagamento da folha salarial de servidores ativos.',
      exp: 'Art. 44 da LRF: A receita de capital de alienação de bens não pode custear despesa corrente (como salários de ativos), admitindo-se apenas a exceção legal para o regime geral e próprio de previdência social (inativos).'
    },
    {
      sub: 'Escrituração, Consolidação das Contas e Conselho de Gestão Fiscal',
      ref: 'Arts. 50, 51 e 67 da LRF',
      t: 'O Poder Executivo da União promoverá, até o dia trinta de junho, a consolidação, nacional e por esfera de governo, das contas dos entes da Federação relativas ao exercício anterior, cabendo aos Estados encaminhar suas contas até trinta e um de maio e aos Municípios até trinta de abril.',
      f: 'Na escrituração das contas públicas, a disponibilidade de caixa e a despesa liquidada serão registradas exclusivamente pelo regime de caixa.',
      exp: 'Art. 50, II da LRF: A despesa e a assunção de compromisso serão registradas segundo o regime de COMPETÊNCIA, apurando-se, em caráter complementar, o resultado dos fluxos financeiros.'
    }
  ]
};
