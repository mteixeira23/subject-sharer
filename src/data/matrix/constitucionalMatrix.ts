import { SubjectLessonMatrix } from './types';

// Direito Constitucional - 21 Aulas (0..20)
export const CONSTITUCIONAL_LESSON_MATRIX: SubjectLessonMatrix = {
  // Aula 00 - Conceito, Objeto, Sentidos e Classificação das Constituições
  0: [
    {
      sub: 'Sentido Sociológico (Ferdinand Lassalle)',
      ref: 'Teoria da Constituição - Ferdinand Lassalle',
      t: 'Para Ferdinand Lassalle (concepção sociológica), a Constituição real e efetiva de um país é a soma dos fatores reais de poder que regem a sociedade, sendo a Constituição escrita mera "folha de papel" se não corresponder a esses fatores.',
      f: 'No sentido sociológico de Lassalle, a Constituição é uma norma pura hipotética desvinculada das forças sociais, econômicas e militares.',
      exp: 'Lassalle distingue a Constituição real (fatores reais de poder) da Constituição jurídica escrita ("folha de papel").'
    },
    {
      sub: 'Sentido Político (Carl Schmitt) vs. Sentido Jurídico (Hans Kelsen)',
      ref: 'Teoria da Constituição - Schmitt e Kelsen',
      t: 'Carl Schmitt define a Constituição em sentido político como a decisão política fundamental do titular do poder constituinte (distinguindo-a das leis constitucionais), enquanto Hans Kelsen a concebe em sentido jurídico (lógico-jurídico e jurídico-positivo) como norma pura fundamental.',
      f: 'Para Carl Schmitt, não existe qualquer diferença entre as normas que tratam da estrutura do Estado e os dispositivos meramente formais inseridos no texto constitucional.',
      exp: 'Schmitt diferencia Constituição (decisão política fundamental sobre forma de Estado, governo e direitos fundamentais) de leis constitucionais (demais normas apenas formalmente inseridas no texto).'
    },
    {
      sub: 'Força Normativa da Constituição (Konrad Hesse)',
      ref: 'Konrad Hesse - A Força Normativa da Constituição',
      t: 'Konrad Hesse contrapõe-se ao determinismo de Lassalle sustentando que a Constituição possui uma força normativa própria (vontade de Constituição - Wille zur Verfassung) capaz de conformar e transformar a realidade político-social.',
      f: 'Konrad Hesse defende que a Constituição escrita jamais consegue alterar a realidade política diante dos fatores reais de poder.',
      exp: 'Para Hesse, havendo "vontade de Constituição", a norma constitucional condiciona ativamente a realidade fática.'
    },
    {
      sub: 'Classificação da Constituição Federal de 1988',
      ref: 'Doutrina Constitucional Brasileira',
      t: 'A Constituição Federal de 1988 classifica-se como promulgada (democrática), escrita, formal, analítica (prolixa), dogmática, eclética (heterodoxa), dirigente e rígida (ou super-rígida para parte da doutrina em razão das cláusulas pétreas).',
      f: 'A Constituição de 1988 é classificada como semirrígida, sintética, histórica e outorgada.',
      exp: 'A única Constituição brasileira semirrígida (semiflexível) foi a Imperial de 1824 (Art. 178). A CF/88 é rígida, promulgada, escrita, formal e analítica.'
    },
    {
      sub: 'Classificação Ontológica de Karl Loewenstein (Normativa, Nominal e Semântica)',
      ref: 'Karl Loewenstein - Classificação Ontológica',
      t: 'Quanto à correspondência com a realidade política (critério ontológico de Loewenstein), a Constituição é normativa quando suas normas dominam efetivamente o processo político; nominal quando busca limitar o poder mas ainda não consegue conformar a realidade; e semântica quando serve apenas para legitimar e perpetuar os detentores fáticos do poder autoritário.',
      f: 'Na classificação de Loewenstein, a Constituição semântica é aquela plenamente democrática cujas normas são integralmente cumpridas por governantes e cidadãos.',
      exp: 'Para Loewenstein: Normativa (veste que serve bem = democracia efetiva); Nominal (veste no armário aguardando o corpo crescer); Semântica (disfarce/fachada de regimes autoritários).'
    }
  ],

  // Aula 01 - Aplicabilidade das Normas Constitucionais (Plena, Contida e Limitada)
  1: [
    {
      sub: 'Normas de Eficácia Plena (José Afonso da Silva)',
      ref: 'Classificação Tricotômica de José Afonso da Silva',
      t: 'As normas constitucionais de eficácia plena possuem aplicabilidade direta, imediata e integral desde a entrada em vigor da Constituição, independendo de lei regulamentadora para produzir todos os seus efeitos e não admitindo restrição infraconstitucional.',
      f: 'As normas de eficácia plena dependem da edição de lei complementar integrativa para produzir efeitos positivos.',
      exp: 'Normas de eficácia plena são autoaplicáveis (diretas, imediatas e integrais).'
    },
    {
      sub: 'Normas de Eficácia Contida (Prospectiva ou Redutível)',
      ref: 'CF/88, Art. 5º, XIII e XV',
      t: 'As normas de eficácia contida têm aplicabilidade direta, imediata e inicialmente integral, mas preveem que o legislador infraconstitucional, outros preceitos da própria Constituição ou conceitos ético-jurídicos restrinjam sua abrangência (ex: liberdade de exercício profissional no art. 5º, XIII da CF/88).',
      f: 'Enquanto não for editada a lei regulamentadora de uma norma de eficácia contida, o direito nela previsto não pode ser exercido pelos cidadãos.',
      exp: 'Na eficácia contida, enquanto não houver lei restritiva, o direito é exercido em sua plenitude! Na eficácia limitada é que a falta de lei impede a fruição plena.'
    },
    {
      sub: 'Normas de Eficácia Limitada: Princípio Institutivo vs. Princípio Programático',
      ref: 'CF/88, Art. 37, VII (Greve do Servidor) e Art. 7º, XI',
      t: 'As normas de eficácia limitada possuem aplicabilidade indireta, mediata e reduzida (diferida), dividindo-se em normas de princípio institutivo ou organizativo (que traçam esquemas gerais de estruturação de órgãos ou entidades) e normas de princípio programático (que estabelecem diretrizes e fins sociais a serem atingidos pelo Estado).',
      f: 'O direito de greve do servidor público civil (Art. 37, VII da CF/88) foi classificado pelo STF como norma de eficácia plena e incondicionada.',
      exp: 'Para o STF (MIs 670, 708 e 712), o direito de greve do servidor público (Art. 37, VII) é norma de eficácia LIMITADA (enquanto o direito de associação sindical do Art. 37, VI é de eficácia contida).'
    },
    {
      sub: 'Eficácia Jurídica Mínima (Negativa e Paralisante) das Normas de Eficácia Limitada',
      ref: 'Doutrina e Jurisprudência do STF',
      t: 'Mesmo antes de regulamentadas pelo legislador, todas as normas de eficácia limitada produzem imediatamente eficácia jurídica negativa (não recepcionam leis anteriores contrárias e invalidam leis posteriores que as afrontem) e eficácia interpretativa/vinculativa.',
      f: 'As normas constitucionais programáticas são meros conselhos morais desprovidos de qualquer eficácia jurídica vinculante.',
      exp: 'Nenhuma norma constitucional é destituída de eficácia jurídica; todas possuem ao menos eficácia paralisante, impeditiva e interpretativa.'
    },
    {
      sub: 'Normas de Eficácia Exaurida (Esvaída) no ADCT',
      ref: 'ADCT da CF/88',
      t: 'As normas constitucionais de eficácia exaurida (ou aplicabilidade esvaída) são aquelas, próprias do Ato das Disposições Constitucionais Transitórias (ADCT), que já cumpriram integralmente a finalidade para a qual foram criadas, extinguindo sua eficácia fática futura.',
      f: 'As normas do ADCT possuem hierarquia inferior às normas do corpo permanente da Constituição e não servem de parâmetro no controle de constitucionalidade.',
      exp: 'As normas do ADCT têm status formalmente constitucional idêntico ao corpo permanente, mas muitas têm eficácia exaurida após esgotarem seus efeitos transitórios.'
    }
  ],

  // Aula 02 - Hierarquia das Normas e Pirâmide de Kelsen
  2: [
    {
      sub: 'Supremacia Formal da Constituição e Escalonamento Normativo',
      ref: 'Teoria Pura do Direito (Hans Kelsen) e CF/88',
      t: 'No vértice da pirâmide normativa situam-se as normas constitucionais originárias, as emendas constitucionais e os tratados internacionais de direitos humanos aprovados pelo rito do art. 5º, § 3º da CF/88, servindo de fundamento de validade (bloco de constitucionalidade) para toda a legislação infraconstitucional.',
      f: 'As leis complementares possuem hierarquia formal superior às leis ordinárias porque exigem maioria absoluta para aprovação.',
      exp: 'Para o STF (RE 377.457), NÃO existe hierarquia entre lei complementar e lei ordinária (ambas são leis primárias que retiram validade diretamente da CF/88, distinguindo-se pelo campo material de atuação).'
    },
    {
      sub: 'Status Supralegal dos Tratados Internacionais Comuns de Direitos Humanos (RE 466.343)',
      ref: 'CF/88, Art. 5º, §§ 2º e 3º e STF (RE 466.343 e Súmula Vinculante 25)',
      t: 'Os tratados internacionais de direitos humanos aprovados em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros equivalem às emendas constitucionais; já os tratados de direitos humanos aprovados pelo rito ordinário (como o Pacto de San José da Costa Rica) possuem status supralegal (abaixo da CF, mas acima das leis ordinárias e complementares).',
      f: 'Todos os tratados internacionais comerciais e tributários ingressam automaticamente no ordenamento jurídico brasileiro com status de emenda constitucional.',
      exp: 'Tripla hierarquia dos tratados no STF: 1) Direitos Humanos com rito de 3/5 em 2 turnos = Constitucional; 2) Direitos Humanos com rito comum = Supralegal; 3) Tratados comuns (comerciais/tributários) = Legal (lei ordinária).'
    },
    {
      sub: 'Relação entre Lei Complementar e Lei Ordinária (STF)',
      ref: 'Jurisprudência do STF (RE 377.457 / Tema 71)',
      t: 'Se uma lei complementar disciplinar matéria não reservada pela Constituição à lei complementar (matéria de lei ordinária), ela é válida como lei formalmente complementar mas materialmente ordinária, podendo ser alterada ou revogada posteriormente por simples lei ordinária.',
      f: 'Uma lei ordinária que invada matéria reservada pela Constituição à lei complementar pode ser convalidada por decreto presidencial.',
      exp: 'Lei ordinária invadindo reserva de LC = inconstitucionalidade formal. Mas LC tratando de tema de LO = válida, porém pode ser revogada por LO futura!'
    },
    {
      sub: 'Ausência de Hierarquia entre Leis Federais, Estaduais, Distritais e Municipais',
      ref: 'CF/88, Arts. 18, 22, 24 e 30',
      t: 'No Estado Federal brasileiro não existe hierarquia entre lei federal, lei estadual, lei distrital e lei municipal, resolvendo-se eventuais conflitos normativos pelo critério da repartição constitucional de competências, e não pelo critério hierárquico.',
      f: 'Qualquer lei ordinária federal revoga automaticamente as leis estaduais e municipais em razão da superioridade hierárquica da União sobre os Estados.',
      exp: 'A autonomia dos entes federativos (Art. 18, CF) impede relação de subordinação hierárquica entre leis de diferentes esferas; o conflito resolve-se pela competência constitucional.'
    },
    {
      sub: 'Atos Normativos Primários vs. Atos Normativos Secundários (Regulamentares)',
      ref: 'CF/88, Art. 59 e Art. 84, IV e VI',
      t: 'São atos normativos primários (sujeitos a controle concentrado por ADI) aqueles que retiram seu fundamento de validade diretamente da Constituição (espécies do art. 59, regimentos dos tribunais e decretos autônomos do art. 84, VI); já os decretos regulamentares de execução (art. 84, IV) são atos secundários infralegais subordinados à lei.',
      f: 'Decretos regulamentares que extrapolam os limites da lei ordinária regulamentada ensejam Ação Direta de Inconstitucionalidade (ADI) no STF por ofensa direta à Constituição.',
      exp: 'Para o STF, se um decreto regulamentar contraria ou exorbita a lei que regulamenta, há crise de LEGALIDADE (ofensa reflexa/indireta à CF), não cabendo ADI.'
    }
  ],

  // Aula 03 - Poder Constituinte Originário, Derivado, Reformador e Decorrente
  3: [
    {
      sub: 'Poder Constituinte Originário: Características e Titularidade',
      ref: 'Teoria do Poder Constituinte (Emmanuel Joseph Sieyès) e CF/88, Art. 1º, parágrafo único',
      t: 'A titularidade do poder constituinte pertence ao povo, mas o seu exercício dá-se por meio de representantes eleitos ou diretamente; na concepção positivista adotada no Brasil, o Poder Constituinte Originário (PCO) é inicial, autônomo, ilimitado juridicamente, incondicionado, soberano e permanente.',
      f: 'No ordenamento brasileiro, é amplamente invocável o direito adquirido contra normas constitucionais originárias promulgadas na Assembleia Constituinte de 1988.',
      exp: 'Jurisprudência pacífica do STF: Não há direito adquirido contra norma constitucional originária (salvo se a própria Constituição o ressalvar expressamente).'
    },
    {
      sub: 'Fenômeno da Recepção, Revogação por Não Recepção e Repristinação',
      ref: 'ADPF 130 do STF e Teoria Constitucional',
      t: 'As leis anteriores à nova Constituição que forem materialmente compatíveis com ela são recepcionadas (ainda que sua forma original não seja mais a exigida, ganhando o novo status material, como o CTN que era lei ordinária de 1966 e foi recepcionado como lei complementar); já as leis materialmente incompatíveis são revogadas por não recepção (julgadas via ADPF, e não ADI).',
      f: 'Uma lei editada em 1975 sob formalidade diversa da exigida pela CF/88, mas materialmente compatível com a nova Carta, é revogada por inconstitucionalidade formal superveniente.',
      exp: 'A recepção analisa APENAS a compatibilidade MATERIAL com a nova Constituição, sendo irrelevante eventual incompatibilidade formal superveniente.'
    },
    {
      sub: 'Poder Constituinte Derivado Reformador e Limitações (Art. 60 da CF/88)',
      ref: 'CF/88, Art. 60, §§ 1º a 5º',
      t: 'O Poder Constituinte Derivado Reformador é secundário, limitado e condicionado, sofrendo limitações circunstanciais (vedação de emenda na vigência de intervenção federal, estado de defesa ou estado de sítio), formais/procedimentais (iniciativa restrita, 2 turnos em cada Casa por 3/5 dos votos e irrepetibilidade na mesma sessão legislativa) e materiais (cláusulas pétreas).',
      f: 'A Constituição Federal estabelece uma limitação temporal expressa que proíbe a aprovação de emendas nos cinco primeiros anos de vigência do texto constitucional.',
      exp: 'A CF/88 NÃO possui limitação temporal ao poder reformador (a única Constituição brasileira com limitação temporal de 4 anos foi a de 1824). A revisão do art. 3º do ADCT não impedia emendas comuns.'
    },
    {
      sub: 'Cláusulas Pétreas Expressas e Implícitas (Art. 60, § 4º da CF/88)',
      ref: 'CF/88, Art. 60, § 4º, I a IV',
      t: 'Não será objeto de deliberação a proposta de emenda tendente a abolir: I - a forma federativa de Estado; II - o voto direto, secreto, universal e periódico; III - a separação dos Poderes; e IV - os direitos e garantias individuais; além das limitações materiais implícitas (titularidade do poder constituinte e o próprio procedimento do art. 60).',
      f: 'O voto obrigatório, a forma republicana e o sistema presidencialista de governo constam expressamente no rol de cláusulas pétreas do Art. 60, § 4º da CF/88.',
      exp: 'Pegadinha clássica: O Art. 60, § 4º, II protege o voto direto, secreto, universal e periódico, mas NÃO protege o voto obrigatório! E República/Presidencialismo foram submetidos ao plebiscito de 1993.'
    },
    {
      sub: 'Poder Constituinte Derivado Decorrente (Constituições Estaduais) e Poder Difuso (Mutação)',
      ref: 'CF/88, Art. 25 e Art. 11 do ADCT; Súmula Vinculante 46',
      t: 'O Poder Constituinte Derivado Decorrente confere aos Estados-membros a capacidade de auto-organização por meio de suas Constituições Estaduais, observados os princípios constitucionais sensíveis (art. 34, VII), estabelecidos e extensíveis (simetria); já o Poder Constituinte Difuso atua de modo informal pela mutação constitucional (alteração do sentido da norma sem mudança no texto).',
      f: 'Os Municípios exercem poder constituinte derivado decorrente de segundo grau, submetendo suas leis orgânicas apenas à Constituição Federal e ignorando a Constituição Estadual.',
      exp: 'Para a doutrina majoritária e STF, a Lei Orgânica Municipal submete-se a um duplo grau de vinculação (CF/88 + Constituição Estadual, Art. 29 caput).'
    }
  ],

  // Aula 04 - Direitos e Garantias Fundamentais: Direitos Individuais e Coletivos I (Art. 5º)
  4: [
    {
      sub: 'Características e Titularidade dos Direitos Fundamentais',
      ref: 'CF/88, Art. 5º, caput e Jurisprudência do STF',
      t: 'Os direitos fundamentais caracterizam-se pela historicidade, universalidade, limitabilidade (relatividade), concorrência, irrenunciabilidade, inalienabilidade e imprescritibilidade, alcançando brasileiros, estrangeiros residentes e também estrangeiros não residentes (em trânsito) no território nacional, bem como pessoas jurídicas no que couber (ex: honra objetiva - Súmula 227 STJ).',
      f: 'Os direitos fundamentais previstos no Art. 5º da CF/88 são absolutos e aplicam-se exclusivamente aos brasileiros natos e naturalizados.',
      exp: 'O STF reconhece a titularidade dos direitos fundamentais básicos também aos estrangeiros não residentes (em trânsito no país) e às pessoas jurídicas.'
    },
    {
      sub: 'Eficácia Horizontal, Diagonal e Vertical dos Direitos Fundamentais',
      ref: 'STF (RE 201.819 - União Brasileira de Compositores)',
      t: 'Além da eficácia vertical (aplicação nas relações entre Estado e particular), o STF adota a teoria da eficácia horizontal direta e imediata dos direitos fundamentais nas relações privadas entre particulares (ex: garantia de ampla defesa para exclusão de sócio de associação privada), e a eficácia diagonal em relações privadas assimétricas (como relações de trabalho e consumo).',
      f: 'No Brasil, os direitos fundamentais vinculam exclusivamente o Poder Público, não tendo qualquer aplicação nos contratos e associações privadas.',
      exp: 'No RE 201.819, o STF consagrou a eficácia horizontal direta dos direitos fundamentais nas relações privadas.'
    },
    {
      sub: 'Inviolabilidade Domiciliar (Art. 5º, XI) e Conceito Amplo de "Casa"',
      ref: 'CF/88, Art. 5º, XI e STF (Tema 280 / RE 603.616)',
      t: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro (a qualquer hora do dia ou da noite), ou, durante o dia, por determinação judicial, abrangendo o conceito constitucional de "casa" também escritórios profissionais, consultórios e quartos de hotel ocupados.',
      f: 'O Auditor Fiscal da Receita Estadual pode ingressar à força no escritório contábil fechado ao público sem consentimento e sem mandado judicial durante o horário comercial.',
      exp: 'O STF pacificou que escritórios profissionais e compartimentos não abertos ao público são protegidos pelo Art. 5º, XI da CF/88, exigindo determinação judicial diurna para busca e apreensão.'
    },
    {
      sub: 'Inviolabilidade das Comunicações Telefônicas vs. Quebra de Dados Telefônicos e Bancários',
      ref: 'CF/88, Art. 5º, XII; Lei nº 9.296/1996 e STF (Tema 225)',
      t: 'A interceptação das comunicações telefônicas (escuta do diálogo em tempo real) exige ordem judicial para fins de investigação criminal ou instrução processual penal (reserva de jurisdição absoluta); já o acesso a registros passados de ligações (dados telefônicos) e a dados bancários e fiscais pode ser requisitado diretamente por Comissões Parlamentares de Inquérito (CPIs), e os dados bancários podem ser requisitados pelo Fisco nos termos do art. 6º da LC 105/2001.',
      f: 'Uma Comissão Parlamentar de Inquérito (CPI) pode decretar diretamente a interceptação telefônica (grampo telefônico) de investigados sem necessidade de decisão judicial.',
      exp: 'CPI pode quebrar sigilo bancário, fiscal e de DADOS telefônicos (extrato de chamadas passadas), mas NUNCA pode decretar interceptação telefônica (Art. 5º, XII exige ordem judicial em matéria penal).'
    },
    {
      sub: 'Direito de Reunião (Art. 5º, XVI) e Liberdade de Associação (Art. 5º, XVII a XXI)',
      ref: 'CF/88, Art. 5º, XVI a XXI e STF (RE 806.339 - Tema 855)',
      t: 'O direito de reunião pacífica, sem armas, em locais abertos ao público independe de autorização (sendo que o STF no Tema 855 dispensou até mesmo a exigência formal de aviso prévio escrito quando houver notória divulgação por redes sociais); e as associações só poderão ser compulsoriamente dissolvidas por decisão judicial transitada em julgado, sendo que para representarem seus filiados judicialmente (art. 5º, XXI) dependem de autorização expressa (Tema 82 STF), diferentemente do mandado de segurança coletivo (art. 5º, LXX, Súmula 629 STF).',
      f: 'As associações privadas podem ser compulsoriamente dissolvidas por ato administrativo do Ministro da Justiça ou por decisão judicial liminar antes do trânsito em julgado.',
      exp: 'Art. 5º, XIX da CF/88: Suspensão de atividades de associação = decisão judicial (cabe liminar); Dissolução compulsória = decisão judicial TRANSITADA EM JULGADO!'
    }
  ],

  // Aula 05 - Direitos e Garantias Fundamentais: Direitos Individuais e Coletivos II (Art. 5º)
  5: [
    {
      sub: 'Direito de Propriedade, Desapropriação e Requisição Administrativa (Art. 5º, XXII a XXV)',
      ref: 'CF/88, Art. 5º, XXII a XXV',
      t: 'A propriedade atenderá a sua função social, estabelecendo a lei o procedimento para desapropriação por necessidade ou utilidade pública, ou por interesse social, mediante justa e prévia indenização em dinheiro (ressalvados os casos de reforma agrária e reforma urbana com títulos, e o confisco do art. 243); já no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular (requisição administrativa), assegurada ao proprietário indenização ulterior, se houver dano.',
      f: 'Na requisição administrativa em caso de iminente perigo público, o Estado deve pagar indenização prévia em dinheiro antes de utilizar o bem particular.',
      exp: 'Desapropriação = indenização PRÉVIA e justa em dinheiro (regra); Requisição administrativa (Art. 5º, XXV) = indenização ULTERIOR (posterior), somente SE houver dano!'
    },
    {
      sub: 'Impenhorabilidade da Pequena Propriedade Rural (Art. 5º, XXVI)',
      ref: 'CF/88, Art. 5º, XXVI e Tema 961 do STF',
      t: 'A pequena propriedade rural, assim definida em lei, desde que trabalhada pela família, não será objeto de penhora para pagamento de débitos decorrentes de sua atividade produtiva, dispondo a lei sobre os meios de financiar o seu desenvolvimento, cabendo ao devedor apenas comprovar que o imóvel é pequeno e trabalhado pela família (presumindo-se que a dívida decorreu da atividade produtiva - Tema 961 STF).',
      f: 'A pequena propriedade rural trabalhada pela família pode ser penhorada por bancos privados se o produtor rural oferece-la em garantia hipotecária de empréstimo agrícola.',
      exp: 'Para o STF, a impenhorabilidade da pequena propriedade rural trabalhada pela família (Art. 5º, XXVI) é norma de ordem pública irrenunciável, mesmo que dada em hipoteca vinculada à atividade produtiva.'
    },
    {
      sub: 'Direito de Petição e Obtenção de Certidões (Art. 5º, XXXIV)',
      ref: 'CF/88, Art. 5º, XXXIV, "a" e "b"',
      t: 'São a todos assegurados, independentemente do pagamento de taxas: a) o direito de petição aos Poderes Públicos em defesa de direitos ou contra ilegalidade ou abuso de poder; e b) a obtenção de certidões em repartições públicas, para defesa de direitos e esclarecimento de situações de interesse pessoal.',
      f: 'O exercício do direito de petição perante as Secretarias da Fazenda exige a representação obrigatória por advogado inscrito na OAB e o recolhimento de taxa de expediente.',
      exp: 'O direito de petição e de certidão (Art. 5º, XXXIV) é gratuito (imune a taxas) e não exige capacidade postulatória de advogado.'
    },
    {
      sub: 'Garantias Penais e Processuais Constitucionais (Art. 5º, XXXVII a LXVII)',
      ref: 'CF/88, Art. 5º, XLII, XLIII, XLIV e LXVII; Súmula Vinculante 25 do STF',
      t: 'Constituem crimes inafiançáveis e imprescritíveis a prática do racismo (incluída a injúria racial e a homofobia/transfobia segundo o STF) e a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático; já a tortura, o tráfico ilícito de entorpecentes, o terrorismo e os crimes hediondos são inafiançáveis e insuscetíveis de graça ou anistia (mas são prescritíveis); ademais, não há prisão civil por dívida, salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia (sendo ilícita a do depositário infiel - SV 25).',
      f: 'Os crimes hediondos, a tortura e o terrorismo são imprescritíveis nos termos do Art. 5º, XLIII da Constituição Federal.',
      exp: 'Mnemônico: Imprescritíveis e Inafiançáveis = RAÇÃO (Racismo e Ação de grupos armados). Hediondos, Tortura, Tráfico e Terrorismo (3T+H) são inafiançáveis e insuscetíveis de graça/anistia, mas PRESCREVEM!'
    },
    {
      sub: 'Contraditório e Ampla Defesa em Processos no Tribunal de Contas (Súmula Vinculante 3)',
      ref: 'CF/88, Art. 5º, LV e Súmula Vinculante 3 do STF',
      t: 'Nos processos perante o Tribunal de Contas da União asseguram-se o contraditório e a ampla defesa quando da decisão puder resultar anulação ou revogação de ato administrativo que beneficie o interessado, excetuada a apreciação da legalidade do ato de concessão inicial de aposentadoria, reforma e pensão (salvo se o julgamento do registro ultrapassar 5 anos da chegada dos autos ao Tribunal - Tema 445 do STF).',
      f: 'A Súmula Vinculante 3 do STF exige contraditório prévio em toda e qualquer análise de concessão inicial de aposentadoria realizada no primeiro mês de chegada do processo ao Tribunal de Contas.',
      exp: 'A concessão inicial de aposentadoria, reforma e pensão é ato complexo que se aperfeiçoa com o registro no TC (dispensando contraditório se julgado em até 5 anos - SV 3 e Tema 445).'
    }
  ],

  // Aula 06 - Remédios Constitucionais (Habeas Corpus, MS, Ação Popular, HD, MI)
  6: [
    {
      sub: 'Habeas Corpus (Art. 5º, LXVIII da CF/88)',
      ref: 'CF/88, Art. 5º, LXVIII e LXXVII; Súmulas 693 e 695 do STF',
      t: 'Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder, sendo ação gratuita que pode ser impetrada por qualquer pessoa física ou jurídica (nacional ou estrangeira) sem necessidade de advogado; não cabe, porém, habeas corpus contra pena exclusivamente de multa (Súmula 693 STF) nem quando já extinta a pena privativa de liberdade (Súmula 695 STF).',
      f: 'É cabível a impetração de habeas corpus para liberar mercadorias apreendidas em posto fiscal da SEFAZ ou para discutir a aplicação isolada de multa tributária.',
      exp: 'O Habeas Corpus tutela exclusivamente a liberdade de locomoção física de pessoas naturais (ir, vir e permanecer), não servindo para liberar bens nem contra pena pecuniária.'
    },
    {
      sub: 'Mandado de Segurança Individual e Coletivo (Art. 5º, LXIX e LXX; Lei nº 12.016/2009)',
      ref: 'CF/88, Art. 5º, LXIX e LXX; Súmulas 625, 629, 630 e 632 do STF',
      t: 'O mandado de segurança protege direito líquido e certo (comprovável de plano por prova documental pré-constituída, sem dilação probatória), não amparado por habeas corpus ou habeas data, sujeitando-se ao prazo decadencial constitucionalmente válido de 120 dias (Súmula 632 STF); o MS coletivo pode ser impetrado por partido político com representação no Congresso Nacional, ou por organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos um ano, dispensada autorização especial dos associados (Súmula 629 STF).',
      f: 'O requisito de um ano de constituição e funcionamento aplica-se tanto às associações civis quanto aos sindicatos e partidos políticos para impetração de mandado de segurança coletivo.',
      exp: 'O requisito de "pelo menos 1 ano de constituição e funcionamento" aplica-se EXCLUSIVAMENTE às associações (Art. 5º, LXX, "b"), não aos sindicatos, entidades de classe ou partidos políticos!'
    },
    {
      sub: 'Mandado de Injunção e Teoria Concretista (Art. 5º, LXXI da CF/88 e Lei nº 13.300/2016)',
      ref: 'CF/88, Art. 5º, LXXI e Lei nº 13.300/2016',
      t: 'Conceder-se-á mandado de injunção sempre que a falta de norma regulamentadora torne inviável o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania; pela Lei nº 13.300/2016, adota-se como regra a corrente concretista individual ou coletiva intermediária (fixando prazo razoável para o legislador elaborar a norma e estabelecendo as condições de exercício do direito caso persista a mora).',
      f: 'Cabe mandado de injunção mesmo quando já existe lei regulamentando a norma constitucional, caso o impetrante considere a lei existente injusta.',
      exp: 'Pressuposto essencial do Mandado de Injunção é a omissão legislativa (falta total ou parcial de norma regulamentadora de norma constitucional de eficácia limitada).'
    },
    {
      sub: 'Habeas Data (Art. 5º, LXXII da CF/88 e Lei nº 9.507/1997)',
      ref: 'CF/88, Art. 5º, LXXII e LXXVII; Lei nº 9.507/1997; Súmula 2 do STJ',
      t: 'O habeas data é ação gratuita e personalíssima (transmissível apenas ao cônjuge sobrevivente ou herdeiros para proteger a memória de falecido) destinada a assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, e para a retificação de dados, exigindo-se comprovação de prévia recusa ou omissão administrativa (Súmula 2 do STJ).',
      f: 'O habeas data é o remédio constitucional adequado para obter vista de processo administrativo fiscal pendente de julgamento ou informações sobre terceiros concorrentes.',
      exp: 'Para obter certidões ou vista de processos administrativos recusados ilegalmente, o remédio cabível é o Mandado de Segurança (e não o Habeas Data, que só serve para informações pessoais em bancos de dados de caráter público).'
    },
    {
      sub: 'Ação Popular (Art. 5º, LXXIII da CF/88 e Lei nº 4.717/1965)',
      ref: 'CF/88, Art. 5º, LXXIII; Lei nº 4.717/1965 e Súmula 365 do STF',
      t: 'Qualquer cidadão (no gozo dos direitos políticos, comprovado pelo título de eleitor) é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.',
      f: 'O Ministério Público e as pessoas jurídicas de direito privado têm legitimidade ativa originária para ajuizar Ação Popular.',
      exp: 'Súmula 365 do STF: Pessoa jurídica não tem legitimidade para propor ação popular (nem mesmo o Ministério Público pode ajuizá-la, embora atue como fiscal da lei e possa assumir o polo ativo se o cidadão desistir).'
    }
  ],

  // Aula 07 - Direitos Sociais (Art. 6º ao 11 da CF/88)
  7: [
    {
      sub: 'Rol dos Direitos Sociais no Art. 6º da CF/88 (Incluindo Transporte e Renda Básica)',
      ref: 'CF/88, Art. 6º, caput e Parágrafo Único (EC 26/2000, EC 64/2010, EC 90/2015 e EC 114/2021)',
      t: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância e a assistência aos desamparados, estabelecendo ainda o parágrafo único do art. 6º que todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar.',
      f: 'A alimentação, a moradia e o transporte constavam na redação original de 1988 do Art. 6º da Constituição e não são considerados direitos sociais de segunda dimensão.',
      exp: 'Foram incluídos por emendas no Art. 6º: Moradia (EC 26/2000), Alimentação (EC 64/2010), Transporte (EC 90/2015) e Renda Básica Familiar (EC 114/2021).'
    },
    {
      sub: 'Reserva do Possível vs. Mínimo Existencial e Controle Judicial de Políticas Públicas',
      ref: 'STF (ADPF 45 e RE 592.581)',
      t: 'Embora a implementação dos direitos sociais sujeite-se à cláusula da reserva do possível (disponibilidade financeira e orçamentária do Estado), o STF consolidou que a reserva do possível não pode ser invocada pelo Poder Público para frustrar e fraudar a efetivação do mínimo existencial nem as determinações constitucionais prioritárias de saúde e educação.',
      f: 'Pelo princípio da separação dos Poderes, é absolutamente vedado ao Poder Judiciário determinar à Administração Pública a realização de obras ou o fornecimento de vagas em creches públicas.',
      exp: 'No Tema 548 (vagas em creche) e ADPF 45, o STF firmou que o Judiciário pode determinar excepcionalmente a implementação de políticas públicas constitucionais ligadas ao mínimo existencial diante da omissão estatal.'
    },
    {
      sub: 'Direitos dos Trabalhadores Urbanos, Rurais e Domésticos (Art. 7º da CF/88 e EC 72/2013)',
      ref: 'CF/88, Art. 7º, incisos e Parágrafo Único',
      t: 'São direitos dos trabalhadores urbanos e rurais, entre outros: irredutibilidade do salário (salvo o disposto em convenção ou acordo coletivo), décimo terceiro salário com base na remuneração integral, jornada não superior a 8 horas diárias e 44 semanais, repouso semanal remunerado preferencialmente aos domingos, hora extra no mínimo 50% superior à normal, e prescrição quinquenal na vigência do contrato até o limite de 2 anos após a extinção do contrato.',
      f: 'O adicional de remuneração para o serviço extraordinário (hora extra) previsto na Constituição é de no mínimo 20% sobre a hora normal, e o prazo para ajuizar reclamação trabalhista após a demissão é de 5 anos.',
      exp: 'Art. 7º, XVI e XXIX da CF/88: Hora extra = mínimo de 50% superior à normal; Prescrição trabalhista = 5 anos para urbanos e rurais, até o limite de 2 anos após a extinção do contrato.'
    },
    {
      sub: 'Liberdade e Unicidade Sindical (Art. 8º da CF/88)',
      ref: 'CF/88, Art. 8º, I a VIII e Súmula Vinculante 40 do STF',
      t: 'É livre a associação profissional ou sindical, sendo vedadas ao Poder Público a interferência e a intervenção na organização sindical, não exigindo a lei autorização do Estado para a fundação de sindicato (ressalvado o registro no órgão competente); vigora a unicidade sindical (um único sindicato da mesma categoria na mesma base territorial, não inferior à área de um Município), sendo que a contribuição confederativa fixada em assembleia só é exigível dos filiados ao respectivo sindicato (Súmula Vinculante 40).',
      f: 'É obrigatória a filiação de todo trabalhador ao sindicato de sua categoria, e o dirigente sindical perde a estabilidade se se candidatar em período de aviso prévio.',
      exp: 'Art. 8º, V e VIII da CF/88: Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato; é vedada a dispensa do empregado sindicalizado a partir do registro da candidatura e, se eleito (inclusive suplente), até 1 ano após o final do mandato, salvo falta grave.'
    },
    {
      sub: 'Direito de Greve (Art. 9º) e Representante dos Empregados em Empresas com mais de 200 Empregados (Art. 11)',
      ref: 'CF/88, Arts. 9º, 10 e 11',
      t: 'É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender, cabendo à lei definir os serviços ou atividades essenciais (sendo porém vedada a greve aos militares e policiais - Tema 541 STF); e nas empresas de mais de duzentos empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.',
      f: 'A eleição do representante dos empregados previsto no Art. 11 da CF/88 aplica-se apenas às empresas estatais que possuam mais de mil funcionários.',
      exp: 'Art. 11 da CF/88: O requisito constitucional é a empresa possuir mais de 200 (duzentos) empregados.'
    }
  ],

  // Aula 08 - Nacionalidade, Direitos Políticos e Partidos Políticos (Art. 12 ao 17 da CF/88)
  8: [
    {
      sub: 'Brasileiros Natos e Naturalizados (Art. 12, I e II da CF/88)',
      ref: 'CF/88, Art. 12, I, "a", "b", "c" e II',
      t: 'São brasileiros natos: a) os nascidos no Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país; b) os nascidos no estrangeiro, de pai brasileiro ou mãe brasileira, desde que qualquer deles esteja a serviço da República Federativa do Brasil; e c) os nascidos no estrangeiro de pai brasileiro ou de mãe brasileira, desde que sejam registrados em repartição brasileira competente ou venham a residir na República Federativa do Brasil e optem, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira (nacionalidade potestativa).',
      f: 'O filho de diplomatas argentinos nascido em hospital de Salvador enquanto ambos os pais estavam em missão oficial da Embaixada da Argentina no Brasil é brasileiro nato.',
      exp: 'Art. 12, I, "a": Exceção ao jus soli: nascido no Brasil de pais estrangeiros quando a serviço oficial de seu país de origem NÃO é brasileiro nato.'
    },
    {
      sub: 'Cargos Privativos de Brasileiro Nato (MP3.COM) e Extradição (Art. 12, § 3º e Art. 5º, LI)',
      ref: 'CF/88, Art. 12, §§ 2º e 3º e Art. 5º, LI',
      t: 'A lei não poderá estabelecer distinção entre brasileiros natos e naturalizados, salvo nos casos previstos na Constituição: são privativos de brasileiro nato os cargos de Presidente e Vice-Presidente da República, Presidente da Câmara dos Deputados, Presidente do Senado Federal, Ministro do Supremo Tribunal Federal, da carreira diplomática, de oficial das Forças Armadas e de Ministro de Estado da Defesa (MP3.COM), além dos 6 assentos do art. 89, VII no Conselho da República e da vedação absoluta de extradição do brasileiro nato.',
      f: 'Os cargos de Governador de Estado, Senador da República, Ministro do STJ e Ministro da Fazenda são privativos de brasileiro nato.',
      exp: 'Senador, Deputado Federal (desde que não presidentes das Casas), Governador e Ministro do STJ NÃO são privativos de brasileiro nato!'
    },
    {
      sub: 'Perda da Nacionalidade Brasileira após a Emenda Constitucional nº 131/2023',
      ref: 'CF/88, Art. 12, § 4º (com redação da EC 131/2023)',
      t: 'Após a EC nº 131/2023, a simples aquisição voluntária de outra nacionalidade estrangeira NÃO acarreta mais a perda da nacionalidade brasileira: será declarada a perda da nacionalidade apenas do brasileiro que tiver cancelada sua naturalização por sentença judicial (em virtude de fraude relacionada ao processo de naturalização ou de atentado contra a ordem constitucional e o Estado Democrático) ou que fizer pedido expresso de perda da nacionalidade brasileira perante autoridade brasileira competente, ressalvadas situações que acarretem apatridia.',
      f: 'Mesmo após a Emenda Constitucional nº 131/2023, o brasileiro nato que se naturaliza voluntariamente cidadão norte-americano por motivos de trabalho perde automaticamente a nacionalidade brasileira.',
      exp: 'Mudança importantíssima da EC 131/2023 no Art. 12, § 4º da CF/88: a aquisição de outra nacionalidade deixou de causar perda da nacionalidade brasileira! Agora a perda para o nato só ocorre mediante PEDIDO EXPRESSO do interessado (desde que não gere apatridia).'
    },
    {
      sub: 'Capacidade Eleitoral Ativa (Alistamento) e Passiva (Elegibilidade e Inelegibilidades - Art. 14)',
      ref: 'CF/88, Art. 14, §§ 1º a 9º e Súmula Vinculante 18 do STF',
      t: 'São inalistáveis os estrangeiros e, durante o período do serviço militar obrigatório, os conscritos; as idades mínimas de elegibilidade são 35 anos (Presidente, Vice e Senador), 30 anos (Governador e Vice), 21 anos (Deputados, Prefeito, Vice-Prefeito e Juiz de Paz) e 18 anos (Vereador); para concorrerem a outros cargos, o Presidente da República, os Governadores e os Prefeitos devem renunciar aos respectivos mandatos até 6 meses antes do pleito (desincompatibilização), e a dissolução da sociedade conjugal no curso do mandato não afasta a inelegibilidade reflexa do § 7º (Súmula Vinculante 18).',
      f: 'Para candidatar-se à reeleição para o mesmo cargo no período subsequente, o Governador do Estado é obrigado a renunciar ao mandato seis meses antes da eleição.',
      exp: 'Art. 14, §§ 5º e 6º da CF/88: A renúncia até 6 meses antes do pleito (desincompatibilização) só é exigida dos Chefes do Executivo para concorrerem a OUTROS cargos (não para a reeleição ao mesmo cargo!).'
    },
    {
      sub: 'Perda e Suspensão de Direitos Políticos (Art. 15), Anualidade Eleitoral (Art. 16) e Partidos Políticos (Art. 17)',
      ref: 'CF/88, Arts. 15, 16 e 17 (EC 97/2017 e EC 111/2021)',
      t: 'É vedada a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de cancelamento da naturalização por sentença transitada em julgado, incapacidade civil absoluta, condenação criminal transitada em julgado enquanto durarem seus efeitos, recusa de cumprir obrigação a todos imposta e improbidade administrativa; ademais, a lei que alterar o processo eleitoral entrará em vigor na data de sua publicação, não se aplicando à eleição que ocorra até um ano da data de sua vigência (Art. 16 - anualidade eleitoral).',
      f: 'A lei que altera o processo eleitoral só entra em vigor um ano após a sua publicação oficial.',
      exp: 'Pegadinha clássica do Art. 16 da CF/88: A lei eleitoral ENTRA EM VIGOR na data de sua publicação, mas tem eficácia diferida (não se aplica à eleição que ocorra em até 1 ano de sua vigência).'
    }
  ],

  // Aula 09 - Organização do Estado e Repartição de Competências (Art. 18 ao 36 da CF/88)
  9: [
    {
      sub: 'Organização Político-Administrativa, Vedação de Secessão e Criação de Estados e Municípios (Art. 18)',
      ref: 'CF/88, Art. 18, caput e §§ 1º a 4º',
      t: 'A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos e indissolúveis (vedado o direito de secessão); a criação, incorporação, fusão e desmembramento de Estados exigem plebiscito das populações diretamente interessadas e lei complementar federal (ouvidas as Assembleias Legislativas), enquanto para Municípios exige-se lei complementar federal fixando o período, estudo de viabilidade municipal, plebiscito e lei ordinária estadual.',
      f: 'Os Territórios Federais possuem autonomia política idêntica à dos Estados e Municípios, elegendo Governador e Senadores próprios.',
      exp: 'Os Territórios Federais (se criados por LC) NÃO são entes federativos autônomos: integram a União (natureza de autarquia territorial descentralizada, Art. 18, § 2º).'
    },
    {
      sub: 'Bens da União (Art. 20) vs. Bens dos Estados (Art. 26)',
      ref: 'CF/88, Arts. 20 e 26 e Súmula 650 do STF',
      t: 'São bens da União o mar territorial, os terrenos de marinha e seus acrescidos, os potenciais de energia hidráulica, os recursos minerais (inclusive do subsolo), as cavidades naturais subterrâneas, as terras tradicionalmente ocupadas pelos índios e os rios e lagos que banhem mais de um Estado ou sirvam de limites com outros países; já aos Estados pertencem as águas superficiais ou subterrâneas, fluentes, emergentes e em depósito (ressalvadas as decorrentes de obras da União) e as ilhas fluviais e lacustres não pertencentes à União.',
      f: 'Os recursos minerais localizados no subsolo de propriedades rurais estaduais pertencem ao Estado-membro onde se situa a jazida.',
      exp: 'Art. 20, IX da CF/88: Todos os recursos minerais, inclusive os do subsolo, e os potenciais de energia hidráulica são bens exclusivos da UNIÃO.'
    },
    {
      sub: 'Competência Privativa da União (Art. 22) e Delegação aos Estados (Parágrafo Único)',
      ref: 'CF/88, Art. 22, caput e Parágrafo Único',
      t: 'Compete privativamente à União legislar sobre direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho, desapropriação, trânsito e transporte, águas, energia, informática, telecomunicações, serviço postal, seguridade social e normas gerais de licitação; contudo, Lei Complementar poderá autorizar os Estados e o DF a legislar sobre questões específicas das matérias relacionadas no art. 22.',
      f: 'A União pode delegar por simples decreto presidencial a um único Estado específico a competência para legislar sobre direito penal e processual.',
      exp: 'Art. 22, parágrafo único da CF/88: A delegação da competência privativa da União exige: 1) Lei Complementar federal; 2) Questões ESPECÍFICAS; e 3) Igualdade federativa para todos os Estados (Art. 19, III).'
    },
    {
      sub: 'Competência Legislativa Concorrente (Art. 24 da CF/88)',
      ref: 'CF/88, Art. 24, §§ 1º a 4º',
      t: 'Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre direito tributário, financeiro, penitenciário, econômico e urbanístico, orçamento, juntas comerciais, custas dos serviços forenses, produção e consumo, meio ambiente, educação e previdência social; no âmbito da legislação concorrente, a União limita-se a estabelecer normas gerais (§ 1º), os Estados exercem competência suplementar (§ 2º) ou plena se inexistir lei federal (§ 3º), e a superveniência de lei federal sobre normas gerais SUSPENDE a eficácia da lei estadual, no que lhe for contrário (§ 4º).',
      f: 'Os Municípios estão expressamente incluídos no caput do Art. 24 da CF/88, e a superveniência de lei federal sobre normas gerais revoga definitivamente a lei estadual anterior.',
      exp: 'Duas regras de ouro do Art. 24 da CF/88: 1) Municípios não constam do art. 24 (legislam pelo art. 30, I e II); 2) Lei federal superveniente de normas gerais SUSPENDE a eficácia (não revoga!) da lei estadual no que lhe for contrário.'
    },
    {
      sub: 'Competência dos Estados (Residual/Remanescente - Art. 25), dos Municípios (Art. 30) e Intervenção (Arts. 34 a 36)',
      ref: 'CF/88, Arts. 25, 30 e 34 a 36; Súmula Vinculante 38 do STF',
      t: 'São reservadas aos Estados as competências que não lhes sejam vedadas pela Constituição (competência remanescente do art. 25, § 1º), cabendo-lhes explorar diretamente ou mediante concessão os serviços locais de gás canalizado (vedada medida provisória para a sua regulamentação - § 2º) e instituir regiões metropolitanas por lei complementar (§ 3º); aos Municípios compete legislar sobre assuntos de interesse local (como fixar o horário de funcionamento do comércio local - SV 38) e suplementar a legislação federal e a estadual no que couber.',
      f: 'Compete aos Municípios fixar o horário de atendimento ao público das agências bancárias localizadas em seu território.',
      exp: 'Súmula Vinculante 38 do STF vs. Súmula 19 do STJ: Horário do comércio local = competência do MUNICÍPIO (SV 38); Horário de funcionamento de agências bancárias = competência da UNIÃO / BACEN (Súmula 19 do STJ)!'
    }
  ],

  // Aula 10 - Administração Pública na CF/88 (Art. 37 ao 41 da CF/88)
  10: [
    {
      sub: 'Princípios Constitucionais da Administração Pública (LIMPE) e Vedação ao Nepotismo (SV 13)',
      ref: 'CF/88, Art. 37, caput e § 1º; Súmula Vinculante 13 do STF',
      t: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE), vedando o princípio da impessoalidade a promoção pessoal de autoridades em publicidade oficial (art. 37, § 1º) e a nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, para cargos em comissão ou funções de confiança (SV 13, ressalvados os cargos de natureza eminentemente política como Secretários de Estado, salvo fraude/troca cruzada).',
      f: 'A proibição do nepotismo na Administração Pública depende da edição de lei formal específica em cada Estado ou Município para poder ser aplicada.',
      exp: 'Na Súmula Vinculante 13 e ADC 12, o STF firmou que a vedação ao nepotismo decorre diretamente dos princípios autoaplicáveis da moralidade e da impessoalidade do Art. 37, caput da CF/88, dispensando lei formal.'
    },
    {
      sub: 'Concurso Público, Prazo de Validade e Direito Subjetivo à Nomeação (Art. 37, II a IV e Tema 161 STF)',
      ref: 'CF/88, Art. 37, II, III e IV; Súmula Vinculante 43 e Tema 161 do STF',
      t: 'A investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração; o prazo de validade do concurso será de até dois anos, prorrogável uma vez, por igual período; e o candidato aprovado dentro do número de vagas previsto no edital possui direito subjetivo à nomeação dentro do prazo de validade do certame (Tema 161 do STF).',
      f: 'O servidor aprovado em concurso para cargo de nível médio pode ser investido posteriormente, por ascensão funcional interna sem novo concurso, em cargo de auditor fiscal de nível superior.',
      exp: 'Súmula Vinculante 43 do STF: É inconstitucional toda modalidade de provimento que propicie ao servidor investir-se, sem prévia aprovação em concurso público destinado ao seu provimento, em cargo que não integra a carreira na qual anteriormente investido.'
    },
    {
      sub: 'Teto Remuneratório Constitucional e Subtetos Estaduais (Art. 37, XI e § 12 da CF/88)',
      ref: 'CF/88, Art. 37, XI, §§ 11 e 12; Temas 377 e 384 do STF',
      t: 'O teto remuneratório geral do funcionalismo público é o subsídio mensal dos Ministros do STF; nos Estados e no DF, aplica-se o subteto tripartido (Governador no Executivo, Deputados Estaduais no Legislativo e Desembargadores do TJ, limitados a 90,25% do STF, no Judiciário, Ministério Público, Procuradores e Defensores), sendo facultado aos Estados e ao DF, mediante emenda às respectivas Constituições e Lei Orgânica, fixar como limite único o subsídio dos Desembargadores do TJ (exceto para os Deputados Estaduais e Vereadores - art. 37, § 12).',
      f: 'Nos casos de acumulação constitucionalmente lícita de dois cargos públicos (como médico ou professor), o teto remuneratório incide sobre a soma global das duas remunerações.',
      exp: 'Temas 377 e 384 do STF: Nas acumulações lícitas de cargos públicos, o teto remuneratório constitucional deve ser considerado em relação a CADA CARGO isoladamente, e não sobre a somatória dos vínculos!'
    },
    {
      sub: 'Acumulação Remunerada de Cargos, Empregos e Funções e Aposentadoria Compulsória (Art. 37, XVI, XVII e § 10 e Art. 40)',
      ref: 'CF/88, Art. 37, XVI, XVII, § 10 e § 14 (EC 103/2019)',
      t: 'É vedada a acumulação remunerada de cargos, empregos e funções na administração direta e indireta, exceto, quando houver compatibilidade de horários: a) a de dois cargos de professor; b) a de um cargo de professor com outro técnico ou científico; e c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas; ademais, a aposentadoria concedida com a utilização de tempo de contribuição decorrente de cargo, emprego ou função pública, inclusive do RGPS, acarretará o rompimento do vínculo que gerou o referido tempo de contribuição (Art. 37, § 14, EC 103/2019).',
      f: 'É permitida a percepção simultânea de proventos de aposentadoria do regime próprio (Art. 40) com a remuneração de qualquer novo cargo efetivo inacumulável na atividade.',
      exp: 'Art. 37, § 10 da CF/88: É vedada a percepção simultânea de proventos de aposentadoria do art. 40, 42 ou 142 com a remuneração de cargo, emprego ou função pública, RESSALVADOS os cargos acumuláveis na forma da Constituição, os cargos eletivos e os cargos em comissão.'
    },
    {
      sub: 'Estabilidade do Servidor Efetivo e Hipóteses de Perda do Cargo (Art. 41 e Art. 169, § 4º da CF/88)',
      ref: 'CF/88, Art. 41, §§ 1º a 4º e Art. 169, § 4º',
      t: 'São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público, sendo obrigatória a avaliação especial de desempenho por comissão instituída para essa finalidade; o servidor público estável só perderá o cargo: I - em virtude de sentença judicial transitada em julgado; II - mediante processo administrativo em que lhe seja assegurada ampla defesa; III - mediante procedimento de avaliação periódica de desempenho, na forma de lei complementar; ou IV - para cumprimento dos limites de despesa com pessoal (art. 169, § 4º).',
      f: 'Extinto o cargo público ou declarada a sua desnecessidade, o servidor estável é exonerado sem remuneração até surgir vaga em outro órgão.',
      exp: 'Art. 41, § 3º da CF/88: Extinto o cargo ou declarada a sua desnecessidade, o servidor estável ficará em DISPONIBILIDADE, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo.'
    }
  ],
  // Aula 11 - Poder Legislativo e Processo Legislativo (Art. 44 ao 69 da CF/88)
  11: [
    {
      sub: 'Bicameralismo, Comissões Parlamentares de Inquérito (CPIs) e Reserva de Jurisdição (Art. 58, § 3º)',
      ref: 'CF/88, Art. 58, § 3º e Jurisprudência do STF',
      t: 'As CPIs terão poderes de investigação próprios das autoridades judiciais, sendo criadas a requerimento de um terço dos membros, para a apuração de fato determinado e por prazo certo; podem quebrar sigilos bancário, fiscal e de dados telefônicos e conduzir coercitivamente testemunha recalcitrante, mas não podem decretar prisão (salvo flagrante delito), busca e apreensão domiciliar, interceptação telefônica ou indisponibilidade de bens.',
      f: 'As Comissões Parlamentares de Inquérito podem decretar prisão preventiva de investigados e determinar bloqueio cautelar de contas bancárias.',
      exp: 'Prisão cautelar, busca domiciliar, grampo telefônico e bloqueio de bens submetem-se à cláusula de reserva de jurisdição (exclusivos de magistrado).'
    },
    {
      sub: 'Imunidades Parlamentares Material e Formal (Art. 53 da CF/88)',
      ref: 'CF/88, Art. 53, §§ 1º a 8º e Súmula 245 do STF',
      t: 'Os Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas opiniões, palavras e votos (imunidade material); desde a expedição do diploma, serão submetidos a julgamento perante o STF (para crimes cometidos no exercício do mandato e em razão das funções - AP 937) e não poderão ser presos, salvo em flagrante de crime inafiançável, caso em que os autos serão remetidos dentro de 24 horas à respectiva Casa para que, pelo voto da maioria de seus membros, resolva sobre a prisão.',
      f: 'As imunidades de Deputados ou Senadores suspendem-se automaticamente em caso de decretação de estado de sítio, independentemente de deliberação do Congresso.',
      exp: 'Art. 53, § 8º da CF/88: As imunidades parlamentares SUBSISTEM durante o estado de sítio, só podendo ser suspensas mediante o voto de 2/3 dos membros da Casa respectiva, nos casos de atos praticados fora do recinto do Congresso incompatíveis com a medida.'
    },
    {
      sub: 'Iniciativa Privativa do Presidente, Veto e Sanção (Arts. 61 e 66 da CF/88)',
      ref: 'CF/88, Arts. 61, § 1º e 66, §§ 1º a 7º; Súmula 5 do STF (superada)',
      t: 'A sanção presidencial não supre o vício de iniciativa parlamentar em matéria reservada ao Chefe do Executivo; o Presidente tem 15 dias úteis para sancionar ou vetar o projeto (importando o silêncio em sanção tácita), o veto parcial deve abranger texto integral de artigo, parágrafo, inciso ou alínea, e o veto será apreciado em sessão conjunta em 30 dias, só podendo ser rejeitado pelo voto da maioria absoluta dos Deputados e Senadores.',
      f: 'É permitido ao Presidente da República apor veto parcial suprimindo apenas uma palavra ou expressão isolada no interior de um artigo de lei.',
      exp: 'Art. 66, § 2º da CF/88: O veto parcial somente abrangerá texto integral de artigo, de parágrafo, de inciso ou de alínea.'
    },
    {
      sub: 'Medidas Provisórias: Requisitos, Vedações e Prazo (Art. 62 da CF/88)',
      ref: 'CF/88, Art. 62, §§ 1º a 12',
      t: 'Em caso de relevância e urgência, o Presidente pode adotar medidas provisórias com força de lei, com vigência de 60 dias prorrogável uma vez por igual período, ficando trancada a pauta se não apreciada em até 45 dias; é vedada a edição de MP sobre nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral, direito penal, processual penal e processual civil, organização do Judiciário e do MP, planos plurianuais, diretrizes orçamentárias, orçamento e créditos adicionais (exceto extraordinários) e matéria reservada a lei complementar.',
      f: 'É vedada a edição de medidas provisórias para regulamentar matérias de direito civil, direito tributário ordinário ou direito administrativo.',
      exp: 'O Art. 62, § 1º, I, "b" veda MP sobre direito penal, processual penal e processual civil, mas NÃO veda MP sobre direito civil, tributário (não reservado a LC) ou administrativo!'
    },
    {
      sub: 'Tribunal de Contas da União e Controle Externo (Arts. 70 e 71 da CF/88)',
      ref: 'CF/88, Arts. 70 a 75 e Tema 899 do STF',
      t: 'Compete ao TCU apreciar as contas anuais do Presidente da República mediante parecer prévio em 60 dias (julgadas pelo Congresso Nacional - art. 49, IX), julgar as contas dos demais administradores de recursos públicos (cujas decisões de que resulte imputação de débito ou multa têm eficácia de título executivo, mas são prescritíveis na fase de execução segundo o Tema 899 do STF) e sustar diretamente a execução de ATO administrativo impugnado se não atendido (cabendo ao Congresso sustar CONTRATOS - art. 71, § 1º).',
      f: 'O Tribunal de Contas possui competência originária para sustar diretamente e de imediato a execução de contratos administrativos celebrados pelo Poder Executivo.',
      exp: 'Art. 71, X e §§ 1º e 2º da CF/88: O Tribunal de Contas susta ATO; no caso de CONTRATO, o ato de sustação é adotado diretamente pelo Congresso Nacional (só agindo o TC se o Congresso não deliberar em 90 dias!).'
    }
  ],

  // Aula 12 - Poder Executivo: Atribuições e Responsabilidade do Presidente (Art. 76 ao 91)
  12: [
    {
      sub: 'Eleição, Vacância e Sucessão Presidencial (Arts. 77 a 81 da CF/88)',
      ref: 'CF/88, Arts. 77 a 81',
      t: 'A linha sucessória na vacância ou impedimento do Presidente e do Vice-Presidente da República chama sucessivamente ao exercício da Presidência o Presidente da Câmara dos Deputados, o do Senado Federal e o do Supremo Tribunal Federal; vagando os cargos de Presidente e Vice-Presidente nos dois primeiros anos do mandato, far-se-á eleição direta 90 dias depois de aberta a última vaga, e se a vacância ocorrer nos últimos dois anos, a eleição para ambos os cargos será feita 30 dias depois pelo Congresso Nacional (eleição indireta), para completar o período de seus antecessores (mandato-tampão).',
      f: 'Vagando os cargos de Presidente e Vice-Presidente da República no terceiro ano do mandato, o Presidente da Câmara assume em caráter definitivo até o final do quadriênio.',
      exp: 'Os Presidentes da Câmara, do Senado e do STF são apenas substitutos eventuais; em caso de dupla vacância definitiva, há sempre nova eleição (direta em 90 dias se nos 2 primeiros anos; indireta pelo Congresso em 30 dias se nos 2 últimos anos).'
    },
    {
      sub: 'Atribuições Privativas do Presidente e Hipóteses Delegáveis (Art. 84 da CF/88)',
      ref: 'CF/88, Art. 84, IV, VI, XII, XXV e Parágrafo Único',
      t: 'Compete privativamente ao Presidente da República exercer as atribuições do art. 84, podendo delegar aos Ministros de Estado, ao Procurador-Geral da República ou ao Advogado-Geral da União exclusivamente três atribuições: 1) dispor mediante decreto autônomo sobre organização e funcionamento da administração federal (quando não implicar aumento de despesa nem criação/extinção de órgãos) e extinção de funções ou cargos públicos, quando vagos (inciso VI); 2) conceder indulto e comutar penas (inciso XII); e 3) prover os cargos públicos federais, na forma da lei (inciso XXV, primeira parte).',
      f: 'O Presidente da República pode delegar aos Ministros de Estado a competência para sancionar projetos de lei e extinguir cargos públicos ocupados por decreto.',
      exp: 'O decreto autônomo do Art. 84, VI, "b" só pode extinguir cargos ou funções públicas quando estiverem VAGOS! E só os incisos VI, XII e XXV (1ª parte) são delegáveis.'
    },
    {
      sub: 'Crimes de Responsabilidade vs. Infrações Penais Comuns do Presidente (Arts. 85 e 86)',
      ref: 'CF/88, Arts. 85 e 86 e ADPF 378 do STF',
      t: 'Admitida a acusação contra o Presidente da República, por dois terços da Câmara dos Deputados, será ele submetido a julgamento perante o Supremo Tribunal Federal, nas infrações penais comuns, ou perante o Senado Federal, nos crimes de responsabilidade (sob a presidência do Presidente do STF); na vigência de seu mandato, o Presidente da República não pode ser responsabilizado por atos estranhos ao exercício de suas funções (imunidade penal temporária - art. 86, § 4º) e não estará sujeito a prisão nas infrações comuns enquanto não sobrevier sentença condenatória (§ 3º).',
      f: 'No processo de impeachment por crime de responsabilidade, o Senado Federal pode aplicar apenas a pena de perda do cargo, dispensando a inabilitação por oito anos para o exercício de função pública.',
      exp: 'Art. 52, parágrafo único da CF/88: A condenação pelo Senado Federal por 2/3 dos votos limita-se à perda do cargo, com inabilitação, por oito anos, para o exercício de função pública, sem prejuízo das demais sanções judiciais.'
    },
    {
      sub: 'Responsabilização de Governadores de Estado (Súmula Vinculante 46 e STJ)',
      ref: 'CF/88, Art. 105, I, "a"; Súmula Vinculante 46 e Jurisprudência do STF (ADIs 4791 e 6585)',
      t: 'A definição dos crimes de responsabilidade e o estabelecimento das respectivas normas de processo e julgamento são da competência legislativa privativa da União (Súmula Vinculante 46); nas infrações penais comuns, os Governadores são julgados originariamente pelo Superior Tribunal de Justiça (STJ - art. 105, I, "a"), independentemente de prévia licença da Assembleia Legislativa, e não gozam das imunidades dos §§ 3º e 4º do art. 86 (exclusivas do Presidente da República).',
      f: 'A Constituição Estadual pode exigir licença prévia de dois terços da Assembleia Legislativa para que o STJ processe criminalmente o Governador do Estado.',
      exp: 'No julgamento das ADIs 4791 e 5540, o STF decidiu que é inconstitucional exigir autorização prévia da Assembleia Legislativa para o STJ receber denúncia ou instaurar ação penal contra Governador por crime comum.'
    },
    {
      sub: 'Conselho da República e Conselho de Defesa Nacional (Arts. 89 a 91 da CF/88)',
      ref: 'CF/88, Arts. 89 a 91',
      t: 'O Conselho da República (órgão superior de consulta do Presidente) e o Conselho de Defesa Nacional pronunciam-se mediante pareceres meramente opinativos (não vinculantes) nos casos de intervenção federal, de estado de defesa e de estado de sítio.',
      f: 'O parecer contrário emitido pelo Conselho da República impede juridicamente o Presidente de decretar intervenção federal ou estado de defesa.',
      exp: 'A oitiva dos Conselhos da República e de Defesa Nacional é obrigatória, mas o parecer emitido por eles é meramente consultivo (não vincula a decisão do Presidente).'
    }
  ],

  // Aula 13 - Poder Judiciário: Estrutura, Competências do STF e STJ (Art. 92 ao 126)
  13: [
    {
      sub: 'Órgãos do Poder Judiciário, Garantias e Vedações da Magistratura (Arts. 92 e 95)',
      ref: 'CF/88, Arts. 92 e 95',
      t: 'São órgãos do Poder Judiciário o STF, o CNJ, o STJ, o TST, os TRFs e Juízes Federais, os Tribunais e Juízes do Trabalho, Eleitorais, Militares e dos Estados/DF; os juízes gozam de vitaliciedade (no primeiro grau, adquirida após 2 anos de exercício, e nos tribunais no ato da posse), inamovibilidade (salvo motivo de interesse público por maioria absoluta do tribunal ou CNJ) e irredutibilidade de subsídio, sendo-lhes vedado exercer outro cargo ou função, salvo uma de magistério, e exercer a advocacia no juízo ou tribunal do qual se afastou antes de decorridos 3 anos (quarentena de saída).',
      f: 'Os Tribunais de Contas da União e dos Estados e o Ministério Público integram a estrutura orgânica do Poder Judiciário no Art. 92 da Constituição.',
      exp: 'Os Tribunais de Contas vinculam-se ao Poder Legislativo no controle externo, e o Ministério Público é função essencial à justiça autônoma (não integram o Poder Judiciário!).'
    },
    {
      sub: 'Quinto Constitucional (Art. 94) e Cláusula de Reserva de Plenário (Art. 97 e SV 10)',
      ref: 'CF/88, Arts. 94 e 97; Súmula Vinculante 10 do STF',
      t: 'Um quinto dos lugares dos TRFs, dos TRTs e dos Tribunais dos Estados e do DF será composto de membros do Ministério Público, com mais de dez anos de carreira, e de advogados de notório saber jurídico e de reputação ilibada, com mais de dez anos de efetiva atividade profissional, indicados em lista sêxtupla pelos órgãos de representação das respectivas classes e reduzida a lista tríplice pelo tribunal; e somente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo (Art. 97 e SV 10).',
      f: 'A regra do quinto constitucional aplica-se também à composição do Supremo Tribunal Federal, do Superior Tribunal de Justiça e do Tribunal Superior Militar.',
      exp: 'No STF não há quinto; no STJ há o TERÇO constitucional (1/3 dentre juízes dos TRFs, 1/3 dentre desembargadores dos TJs e 1/3 em partes iguais dentre advogados e membros do MP - art. 104); no TST e nos TRFs/TRTs/TJs aplica-se o quinto (art. 94 e 111-A).'
    },
    {
      sub: 'Regime Constitucional dos Precatórios e Requisições de Pequeno Valor (Art. 100 da CF/88)',
      ref: 'CF/88, Art. 100, §§ 1º a 20',
      t: 'Os pagamentos devidos pelas Fazendas Públicas em virtude de sentença judiciária far-se-ão exclusivamente na ordem cronológica de apresentação dos precatórios, sendo obrigatória a inclusão no orçamento das entidades de direito público de verba necessária ao pagamento de seus débitos apresentados até 2 de abril, fazendo-se o pagamento até o final do exercício seguinte; os débitos de natureza alimentícia têm preferência sobre todos os demais, com superpreferência para titulares, originários ou por sucessão hereditária, que tenham 60 anos de idade, ou sejam portadores de doença grave ou pessoas com deficiência.',
      f: 'Os Estados e Municípios podem fixar por lei local o limite de suas Requisições de Pequeno Valor (RPV) em montante inferior ao maior benefício do regime geral de previdência social.',
      exp: 'Art. 100, § 4º da CF/88: Para fins de RPV, poderão ser fixados, por leis próprias, valores distintos segundo as diferentes capacidades econômicas, sendo o mínimo igual ao valor do maior benefício do RGPS.'
    },
    {
      sub: 'Conselho Nacional de Justiça (CNJ - Art. 103-B) e Súmula Vinculante (Art. 103-A)',
      ref: 'CF/88, Arts. 103-A e 103-B e ADI 3.367 do STF',
      t: 'O CNJ compõe-se de 15 membros com mandato de 2 anos (admitida uma recondução), presidido pelo Presidente do STF, exercendo controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes (exceto sobre o próprio STF, que não se submete ao CNJ, e sem competência jurisdicional); já o STF poderá, de ofício ou por provocação, mediante decisão de dois terços dos seus membros (8 Ministros), após reiteradas decisões sobre matéria constitucional, aprovar súmula que terá efeito vinculante em relação aos demais órgãos do Poder Judiciário e à administração pública direta e indireta (não vinculando o Poder Legislativo em sua função legiferante).',
      f: 'O Conselho Nacional de Justiça possui competência jurisdicional revisora para reformar sentenças judiciais de mérito e pode aplicar a pena de demissão administrativa a juízes vitalícios.',
      exp: 'O CNJ é órgão do Judiciário de natureza puramente ADMINISTRATIVA (não julga processos judiciais) e não tem competência sobre o STF.'
    },
    {
      sub: 'Competências do STF (Art. 102) e do STJ (Art. 105) e Incidente de Deslocamento de Competência',
      ref: 'CF/88, Arts. 102, 105 e 109, § 5º',
      t: 'Compete ao STF julgar em Recurso Extraordinário (com exigência de repercussão geral aprovada e só recusável por 2/3 de seus membros) as causas decididas em única ou última instância quando a decisão contrariar dispositivo da CF, declarar a inconstitucionalidade de tratado ou lei federal, ou julgar válida lei ou ato de governo local contestado em face da CF (e em face de lei federal); e nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais, poderá suscitar, perante o STJ, incidente de deslocamento de competência para a Justiça Federal (art. 109, § 5º).',
      f: 'Quando uma decisão de tribunal local julgar válida lei local contestada em face de lei federal, o recurso cabível é o Recurso Especial para o STJ.',
      exp: 'Pegadinha clássica (Art. 102, III, "d" vs. Art. 105, III, "b"): Julgar válido ATO de governo local contestado em face de lei federal = REsp no STJ; Julgar válida LEI local contestada em face de lei federal (conflito federativo de competências) = Recurso Extraordinário no STF!'
    }
  ],

  // Aula 14 - Funções Essenciais à Justiça (MP, Advocacia Pública, Defensoria)
  14: [
    {
      sub: 'Ministério Público: Princípios, Garantias, Vedações e Estrutura (Arts. 127 a 130-A)',
      ref: 'CF/88, Arts. 127 a 130-A',
      t: 'O Ministério Público é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis, sendo princípios institucionais a unidade, a indivisibilidade e a independência funcional; seus membros gozam das mesmas garantias dos magistrados (vitaliciedade após 2 anos, inamovibilidade e irredutibilidade de subsídio) e é-lhes vedado exercer a advocacia, atividade político-partidária e qualquer outra função pública, salvo uma de magistério.',
      f: 'O Ministério Público pode representar judicialmente e prestar consultoria jurídica a entidades públicas da administração direta estadual.',
      exp: 'Art. 129, IX da CF/88: É expressamente VEDADA ao Ministério Público a representação judicial e a consultoria jurídica de entidades públicas (função privativa da Advocacia Pública!).'
    },
    {
      sub: 'Ministério Público junto aos Tribunais de Contas (Art. 130 da CF/88)',
      ref: 'CF/88, Art. 130 e Jurisprudência do STF',
      t: 'Aos membros do Ministério Público junto aos Tribunais de Contas (Ministério Público de Contas) aplicam-se as disposições da seção do Ministério Público pertinentes a direitos, vedações e forma de investidura, integrando administrativamente a estrutura do respectivo Tribunal de Contas (não fazendo parte do MPU nem do MPE comum).',
      f: 'Os procuradores do Ministério Público Estadual comum detêm legitimidade para atuar ordinariamente como Ministério Público Especial junto ao Tribunal de Contas do Estado.',
      exp: 'Súmula 653 do STF e ADI 3.315: O Ministério Público especial junto aos Tribunais de Contas é instituição própria com cargos providos por concurso específico, distinta do MP comum.'
    },
    {
      sub: 'Advocacia Pública: AGU e Procuradorias dos Estados e do DF (Arts. 131 e 132 da CF/88)',
      ref: 'CF/88, Arts. 131 e 132',
      t: 'A Advocacia-Geral da União representa a União judicial e extrajudicialmente (sendo a execução da dívida ativa de natureza tributária da União atribuição da Procuradoria-Geral da Fazenda Nacional - art. 131, § 3º), tendo por chefe o Advogado-Geral da União, de livre nomeação pelo Presidente da República dentre cidadãos maiores de 35 anos (não precisando ser membro da carreira); já os Procuradores dos Estados e do DF, organizados em carreira na qual o ingresso dependerá de concurso público de provas e títulos com a participação da OAB em todas as suas fases, exercerão a representação judicial e a consultoria jurídica das respectivas unidades federadas, assegurada a estabilidade após três anos de efetivo exercício.',
      f: 'Tanto o Procurador-Geral da República (chefe do MPU) quanto o Advogado-Geral da União (chefe da AGU) devem ser obrigatoriamente escolhidos dentre integrantes das respectivas carreiras e aprovados pelo Senado.',
      exp: 'Distinção clássica: O PGR (Art. 128, § 1º) deve ser integrante da carreira com sabatina do Senado e mandato de 2 anos; já o AGU (Art. 131, § 1º) é de LIVRE nomeação pelo Presidente (maiores de 35 anos, fora ou dentro da carreira, sem sabatina!).'
    },
    {
      sub: 'Advocacia Privada e Inviolabilidade do Advogado (Art. 133 da CF/88)',
      ref: 'CF/88, Art. 133 e ADI 1.127 do STF',
      t: 'O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei (imunidade profissional relativa, que não é absoluta e pode ser regulada pela legislação infraconstitucional).',
      f: 'A inviolabilidade constitucional do advogado no exercício da profissão é absoluta e abrange o crime de desacato cometido contra magistrado em audiência.',
      exp: 'No julgamento da ADI 1.127, o STF declarou que a imunidade do advogado (Art. 133, "nos limites da lei") não é absoluta e não abrange o desacato.'
    },
    {
      sub: 'Defensoria Pública: Autonomia Funcional, Administrativa e Iniciativa Orçamentária (Art. 134 da CF/88)',
      ref: 'CF/88, Art. 134, §§ 1º a 4º (EC 45/2004, EC 74/2013 e EC 80/2014)',
      t: 'A Defensoria Pública é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a orientação jurídica, a promoção dos direitos humanos e a defesa, em todos os graus, judicial e extrajudicial, dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados; às Defensorias Públicas Estaduais e da União são asseguradas autonomia funcional e administrativa e a iniciativa de sua proposta orçamentária, sendo vedado aos seus membros o exercício da advocacia fora das atribuições institucionais.',
      f: 'Os Defensores Públicos podem exercer a advocacia privada remunerada nos horários de folga, desde que não litiguem contra o Estado que os remunera.',
      exp: 'Art. 134, § 1º da CF/88: É expressamente vedado aos membros da Defensoria Pública o exercício da advocacia fora das atribuições institucionais.'
    }
  ],

  // Aula 15 - Controle de Constitucionalidade: Conceito, Espécies e Vícios
  15: [
    {
      sub: 'Pressupostos do Controle de Constitucionalidade e Bloco de Constitucionalidade',
      ref: 'Teoria do Controle de Constitucionalidade e Jurisprudência do STF',
      t: 'O controle de constitucionalidade pressupõe a existência de uma Constituição formal e rígida (supremacia formal da Constituição); servem como parâmetro de controle (bloco de constitucionalidade) o corpo permanente da CF/88, o ADCT, as emendas constitucionais, os princípios constitucionais implícitos e os tratados internacionais de direitos humanos aprovados pelo rito do art. 5º, § 3º, mas NÃO o preâmbulo da Constituição (que segundo a ADI 2.076 não possui força normativa autônoma).',
      f: 'O preâmbulo da Constituição Federal de 1988 possui força normativa vinculante e constitui parâmetro autônomo para declaração de inconstitucionalidade em ADI.',
      exp: 'ADI 2.076 do STF: O preâmbulo da Constituição não se situa no âmbito do Direito, mas no domínio da política, não tendo força normativa nem relevância jurídica como parâmetro de controle.'
    },
    {
      sub: 'Inconstitucionalidade Formal (Orgânica, Subjetiva e Objetiva) vs. Material (Nomodinâmica vs. Nomostática)',
      ref: 'Doutrina e Jurisprudência do STF',
      t: 'A inconstitucionalidade formal (nomodinâmica) ocorre quando há violação às regras constitucionais do processo de formação da norma, dividindo-se em orgânica (invasão de competência legislativa de outro ente federado), subjetiva (vício de iniciativa) e objetiva (violação às demais fases como quórum ou turnos); já a inconstitucionalidade material (nomostática) decorre de incompatibilidade de conteúdo da lei com as normas substantivas da Constituição.',
      f: 'O vício de iniciativa parlamentar em projeto de lei sobre regime jurídico de servidores estaduais configura inconstitucionalidade material sanável pela sanção do Governador.',
      exp: 'O vício de iniciativa é inconstitucionalidade FORMAL subjetiva insanável, mesmo que o Chefe do Executivo sancione o projeto.'
    },
    {
      sub: 'Controle Preventivo (Político e Judicial) vs. Controle Repressivo',
      ref: 'CF/88 e Jurisprudência do STF (MS 32.033)',
      t: 'O controle preventivo realiza-se antes de o projeto se converter em lei, sendo exercido tipicamente pelo Legislativo (CCJ e plenário) e pelo Executivo (veto jurídico), e excepcionalmente pelo Poder Judiciário mediante Mandado de Segurança impetrado exclusivamente por parlamentar da respectiva Casa Legislativa para garantir o devido processo legislativo constitucional (ex: tramitação de PEC tendente a abolir cláusula pétrea).',
      f: 'Qualquer cidadão ou partido político pode impetrar mandado de segurança preventivo no STF para impedir a votação de projeto de lei ordinária inconstitucional no Congresso.',
      exp: 'No controle judicial preventivo do processo legislativo, a legitimidade ativa é EXCLUSIVA de parlamentar da respectiva Casa Legislativa (direito líquido e certo ao devido processo legislativo constitucional).'
    },
    {
      sub: 'Controle Difuso (Incidental / Concreto) e Papel do Senado Federal (Art. 52, X da CF/88)',
      ref: 'CF/88, Art. 52, X e Art. 97; STF (Reclamação 4.335)',
      t: 'No controle difuso (via de exceção/defesa), qualquer juiz ou tribunal (respeitada nos tribunais a cláusula de reserva de plenário do art. 97) pode deixar de aplicar uma lei inconstitucional no caso concreto, produzindo efeitos em regra inter partes e ex tunc; quando o Plenário do STF declara incidentalmente a inconstitucionalidade em sede de repercussão geral ou controle difuso, o STF reconhece hoje a abstrativização (transcendência dos motivos determinantes / eficácia erga omnes) da decisão, cabendo à resolução do Senado (art. 52, X) dar publicidade.',
      f: 'Um juiz singular de primeira instância precisa submeter o processo ao plenário do Tribunal de Justiça antes de afastar a aplicação de uma lei inconstitucional no caso concreto.',
      exp: 'A cláusula de reserva de plenário (Art. 97 da CF/88 e SV 10) aplica-se apenas aos órgãos colegiados dos TRIBUNAIS, jamais aos juízes monocráticos de 1ª instância!'
    },
    {
      sub: 'Declaração Parcial de Nulidade sem Redução de Texto vs. Interpretação Conforme a Constituição',
      ref: 'Lei nº 9.868/1999, Art. 28, parágrafo único',
      t: 'Ambas são técnicas de decisão com eficácia erga omnes e efeito vinculante em que o texto formal da lei permanece intacto: na interpretação conforme a Constituição, diante de norma polissêmica (plurissignificativa), o tribunal fixa qual é a única interpretação compatível com a CF; já na declaração parcial de nulidade sem redução de texto, o tribunal declara expressamente a inconstitucionalidade de determinada hipótese de aplicação da norma.',
      f: 'A técnica da interpretação conforme a Constituição autoriza o Poder Judiciário a contrariar o sentido literal unívoco da lei, atuando como legislador positivo.',
      exp: 'Limites da interpretação conforme: 1) só cabe diante de norma plurissignificativa (espaço de decisão); 2) não pode contrariar o texto unívoco nem a vontade clara do legislador.'
    }
  ],

  // Aula 16 - Controle Concentrado de Constitucionalidade (ADI, ADC, ADO e ADPF)
  16: [
    {
      sub: 'Legitimados Universais vs. Legitimados Especiais no Controle Concentrado (Art. 103 da CF/88)',
      ref: 'CF/88, Art. 103, I a IX e Jurisprudência do STF',
      t: 'São legitimados universais (dispensados de demonstrar pertinência temática) para propor ADI, ADC, ADO e ADPF: I - Presidente da República; II - Mesa do Senado Federal; III - Mesa da Câmara dos Deputados; VI - Procurador-Geral da República; VII - Conselho Federal da OAB; e VIII - partido político com representação no Congresso Nacional; e são legitimados especiais (sujeitos à pertinência temática): IV - Mesa de Assembleia Legislativa ou da Câmara Legislativa do DF; V - Governador de Estado ou do DF; e IX - confederação sindical ou entidade de classe de âmbito nacional.',
      f: 'O Governador de Estado e as confederações sindicais são legitimados universais e podem impugnar qualquer lei federal sem necessidade de demonstrar pertinência temática.',
      exp: 'Governador, Mesa de Assembleia Legislativa/CLDF e Confederação Sindical/Entidade de Classe de âmbito nacional são legitimados ESPECIAIS (exigem pertinência temática!).'
    },
    {
      sub: 'Objeto da ADI e da ADC no Supremo Tribunal Federal (Art. 102, I, "a" da CF/88)',
      ref: 'CF/88, Art. 102, I, "a" e Lei nº 9.868/1999',
      t: 'Compete ao STF processar e julgar, originariamente, a ação direta de inconstitucionalidade (ADI) de lei ou ato normativo federal ou estadual e a ação declaratória de constitucionalidade (ADC) de lei ou ato normativo exclusivamente FEDERAL, editados após a promulgação da Constituição de 1988 (pós-constitucionais) e dotados de generalidade e abstração (ou leis de efeitos concretos em sentido formal, como as leis orçamentárias segundo a jurisprudência atual do STF - ADI 4.048).',
      f: 'Cabe Ação Direta de Inconstitucionalidade (ADI) no STF contra lei municipal e contra leis federais editadas antes de 5 de outubro de 1988.',
      exp: 'Contra lei municipal ou direito pré-constitucional (anterior a 1988) NÃO cabe ADI no STF; o instrumento cabível no controle concentrado do STF é a ADPF!'
    },
    {
      sub: 'Natureza Dúplice (Ambivalente), Irrecorribilidade, Imprescritibilidade e Efeito Repristinatório',
      ref: 'Lei nº 9.868/1999, Arts. 5º, 11, § 2º, 24 e 26',
      t: 'A ADI e a ADC possuem natureza dúplice ou ambivalente (a improcedência da ADI equivale à procedência da ADC e vice-versa), não admitem desistência, intervenção de terceiros (salvo amicus curiae) nem ação rescisória, são imprescritíveis e suas decisões são irrecorríveis (salvo embargos de declaração); ademais, a concessão da medida cautelar ou a decisão final de mérito na ADI torna aplicável a legislação anterior acaso existente, salvo expressa manifestação em sentido contrário (efeito repristinatório tácito, exigindo pedido expresso em cadeia se a lei anterior também for inconstitucional).',
      f: 'O autor da Ação Direta de Inconstitucionalidade pode desistir livremente da ação até a publicação da pauta de julgamento no plenário do STF.',
      exp: 'Arts. 5º e 16 da Lei 9.868/99: Proposta a ADI, ADC, ADO ou ADPF, NÃO se admitirá desistência.'
    },
    {
      sub: 'Efeitos Subjetivos, Temporais e Modulação de Efeitos (Art. 27 da Lei nº 9.868/1999)',
      ref: 'CF/88, Art. 102, § 2º e Lei nº 9.868/1999, Art. 27',
      t: 'As decisões definitivas de mérito nas ações do controle concentrado produzem eficácia contra todos (erga omnes) e efeito vinculante relativamente aos demais órgãos do Poder Judiciário e à administração pública direta e indireta, nas esferas federal, estadual e municipal, com efeitos temporais em regra retroativos (ex tunc); contudo, tendo em vista razões de segurança jurídica ou de excepcional interesse social, poderá o STF, por maioria de dois terços de seus membros (8 Ministros), restringir os efeitos daquela declaração ou decidir que ela só tenha eficácia a partir de seu trânsito em julgado ou de outro momento que venha a ser fixado (modulação de efeitos).',
      f: 'O quórum para a declaração de inconstitucionalidade no STF é de dois terços (8 Ministros), enquanto a modulação de efeitos exige apenas maioria simples.',
      exp: 'Atenção aos quóruns na ADI: Instalação da sessão = 8 Ministros (2/3); Declaração de inconstitucionalidade/constitucionalidade = 6 Ministros (maioria absoluta); Modulação de efeitos = 8 Ministros (2/3)!'
    },
    {
      sub: 'ADO (Omissão Total ou Parcial) e ADPF (Subsidiariedade) e Controle Estadual (RI / TJ)',
      ref: 'CF/88, Art. 102, § 1º, Art. 103, § 2º e Art. 125, § 2º; Leis nº 9.868/1999 e 9.882/1999',
      t: 'A ADO visa suprir omissão inconstitucional total ou parcial para tornar efetiva norma constitucional; a ADPF é regida pelo princípio da subsidiariedade (só cabe quando não houver outro meio eficaz no controle objetivo para sanar a lesividade, alcançando leis municipais e direito pré-constitucional); e cabe aos Estados a instituição de representação de inconstitucionalidade de leis ou atos normativos estaduais ou municipais em face da Constituição Estadual perante o TJ, vedada a atribuição da legitimação para agir a um único órgão (art. 125, § 2º), cabendo recurso extraordinário ao STF quando o parâmetro da CE for norma de reprodução obrigatória da CF/88.',
      f: 'É vedado ao Tribunal de Justiça do Estado julgar representação de inconstitucionalidade de lei municipal que viole preceito da Constituição Estadual.',
      exp: 'Art. 125, § 2º da CF/88: No TJ estadual cabe representação de inconstitucionalidade de lei ESTADUAL ou MUNICIPAL em face da Constituição Estadual!'
    }
  ],

  // Aula 17 - Defesa do Estado e das Instituições Democráticas (Estado de Sítio e Defesa)
  17: [
    {
      sub: 'Estado de Defesa vs. Estado de Sítio: Controle Político do Congresso (Arts. 136 a 139 da CF/88)',
      ref: 'CF/88, Arts. 136 a 139',
      t: 'Tanto no Estado de Defesa quanto no Estado de Sítio o Presidente da República ouve previamente o Conselho da República e o Conselho de Defesa Nacional; porém, no Estado de Defesa o Presidente decreta a medida primeiro e submete o ato com a justificação dentro de 24 horas ao Congresso Nacional (controle político posterior, por maioria absoluta), enquanto no Estado de Sítio o Presidente solicita autorização PRÉVIA ao Congresso Nacional (controle político prévio, por maioria absoluta).',
      f: 'Para decretar o Estado de Defesa em áreas restritas atingidas por calamidades da natureza, o Presidente depende de autorização prévia do Congresso Nacional.',
      exp: 'Distinção fundamental: Estado de Defesa = decretação imediata pelo Presidente + submissão em 24h ao Congresso; Estado de Sítio = autorização PRÉVIA do Congresso Nacional!'
    },
    {
      sub: 'Prazo, Abrangência e Restrições de Direitos no Estado de Defesa (Art. 136 da CF/88)',
      ref: 'CF/88, Art. 136, §§ 1º a 3º',
      t: 'O Estado de Defesa destina-se a preservar ou prontamente restabelecer, em locais restritos e determinados, a ordem pública ou a paz social ameaçadas por grave e iminente instabilidade institucional ou atingidas por calamidades de grandes proporções na natureza; seu prazo não será superior a 30 dias, podendo ser prorrogado uma única vez por igual período, admitindo restrições aos direitos de reunião, sigilo de correspondência e de comunicação telegráfica e telefônica, e ocupação temporária de bens públicos, sendo vedada a incomunicabilidade do preso.',
      f: 'Durante a vigência do Estado de Defesa, é permitida a incomunicabilidade de presos por até dez dias mediante ordem do executor da medida.',
      exp: 'Art. 136, § 3º, IV da CF/88: É expressamente VEDADA a incomunicabilidade do preso no Estado de Defesa!'
    },
    {
      sub: 'Hipóteses e Prazos do Estado de Sítio (Arts. 137 e 138 da CF/88)',
      ref: 'CF/88, Arts. 137 e 138',
      t: 'O Estado de Sítio pode ser solicitado em dois casos: I - comoção grave de repercussão nacional ou ocorrência de fatos que comprovem a ineficácia de medida tomada durante o estado de defesa (não podendo ser decretado por mais de 30 dias, mas admitindo prorrogações sucessivas de no máximo 30 dias cada vez); ou II - declaração de estado de guerra ou resposta a agressão armada estrangeira (decretado por todo o tempo que durar a guerra ou agressão).',
      f: 'O Estado de Sítio por comoção grave de repercussão nacional só pode ser prorrogado uma única vez por trinta dias.',
      exp: 'Estado de Defesa = máximo 30 dias + 1 única prorrogação de até 30 dias; Estado de Sítio (inciso I) = máximo 30 dias + prorrogações SUCESSIVAS de até 30 dias cada; Estado de Sítio (inciso II - guerra) = por todo o tempo da guerra.'
    },
    {
      sub: 'Forças Armadas (Art. 142) e Órgãos da Segurança Pública (Art. 144 da CF/88)',
      ref: 'CF/88, Arts. 142 e 144 (EC 104/2019 - Polícias Penais)',
      t: 'As Forças Armadas (Marinha, Exército e Aeronáutica) estão sob a autoridade suprema do Presidente da República, sendo vedados aos militares a sindicalização, a greve e, enquanto em serviço ativo, a filiação a partidos políticos (não cabendo habeas corpus em relação a punições disciplinares militares quanto ao mérito); já a segurança pública é exercida pelos órgãos taxativos do art. 144: I - polícia federal; II - polícia rodoviária federal; III - polícia ferroviária federal; IV - polícias civis; V - polícias militares e corpos de bombeiros militares; e VI - polícias penais federal, estaduais e distrital (incluídas pela EC 104/2019).',
      f: 'As Guardas Municipais e os agentes de trânsito integram o rol taxativo de órgãos de segurança pública do caput do Art. 144 da Constituição Federal.',
      exp: 'As Guardas Municipais estão previstas no § 8º do Art. 144 para a proteção de bens, serviços e instalações municipais, mas NÃO constam nos incisos I a VI do caput (que recebeu as Polícias Penais na EC 104/2019).'
    },
    {
      sub: 'Atribuições da Polícia Federal, Polícia Civil e Polícia Militar (Art. 144, §§ 1º, 4º e 5º)',
      ref: 'CF/88, Art. 144, §§ 1º a 6º',
      t: 'À Polícia Federal compete apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União ou de suas entidades autárquicas e empresas públicas (excluídas as sociedades de economia mista), bem como exercer, com exclusividade, as funções de polícia judiciária da União; às Polícias Civis incumbem as funções de polícia judiciária e a apuração de infrações penais (exceto as militares); e às Polícias Militares cabem a polícia ostensiva e a preservação da ordem pública, subordinando-se, juntamente com as Polícias Civis e Penais Estaduais, aos Governadores dos Estados.',
      f: 'Compete à Polícia Federal apurar os crimes praticados em detrimento de bens e agências de sociedades de economia mista federais, como o Banco do Brasil.',
      exp: 'Art. 144, § 1º, I e Art. 109, IV da CF/88 (Súmula 42 do STJ): A competência da Justiça Federal e da Polícia Federal abrange a União, autarquias e empresas públicas federais (ex: Caixa e Correios), NÃO abrangendo sociedades de economia mista (ex: Banco do Brasil e Petrobras, que ficam na Polícia Civil e Justiça Estadual!).'
    }
  ],

  // Aula 18 - Finanças Públicas e Orçamento na CF/88 (Art. 165 ao 169 da CF/88)
  18: [
    {
      sub: 'Repartição Constitucional das Receitas Tributárias: Impostos Federais e Estaduais (Arts. 157 a 159)',
      ref: 'CF/88, Arts. 157, 158 e 159 (com redação da EC 132/2023)',
      t: 'Pertencem aos Estados e ao DF 100% do Imposto de Renda retido na fonte sobre rendimentos pagos por eles, suas autarquias e fundações (Súmula 447 STJ) e 20% do imposto residual da União; e pertencem aos Municípios 100% do IR retido na fonte por eles, 50% do ITR (ou 100% se optarem por fiscalizá-lo e cobrá-lo), 50% do IPVA de veículos licenciados em seus territórios (ou, para aquáticos e aéreos, domiciliados proprietários) e 25% do ICMS (sendo no mínimo 65% pelo valor adicionado e até 35% conforme lei estadual, incluindo no mínimo 10 pontos percentuais por indicadores de melhoria da aprendizagem na educação).',
      f: 'Os Municípios têm direito a receber 50% da arrecadação do ITCMD estadual e 25% da arrecadação do IPVA.',
      exp: 'Atenção aos percentuais do Art. 158 da CF/88: O ITCMD pertence 100% ao Estado (não é repartido com os Municípios!). Já o IPVA reparte 50% aos Municípios e o ICMS reparte 25% aos Municípios.'
    },
    {
      sub: 'Vedação de Retenção de Repasses Constitucionais e Suas Exceções (Art. 160 da CF/88)',
      ref: 'CF/88, Art. 160, caput e Parágrafo Único (EC 29/2000 e EC 109/2021)',
      t: 'É vedada a retenção ou qualquer restrição à entrega e ao emprego dos recursos atribuídos, na seção da repartição das receitas tributárias, aos Estados, ao Distrito Federal e aos Municípios, neles compreendidos adicionais e acréscimos relativos a impostos; contudo, essa vedação não impede a União e os Estados de condicionarem a entrega de recursos ao pagamento de seus créditos, inclusive de suas autarquias, e ao cumprimento do mínimo constitucional de aplicação em ações e serviços públicos de saúde.',
      f: 'É absolutamente vedado à União reter cotas do Fundo de Participação dos Estados (FPE) mesmo quando o Estado estiver inadimplente com dívidas vencidas perante a União ou o INSS.',
      exp: 'Art. 160, parágrafo único da CF/88: Admite-se o condicionamento da entrega dos repasses constitucionais em duas hipóteses: 1) pagamento de créditos da União/Estados (inclusive de suas autarquias); e 2) aplicação mínima em saúde (art. 198, § 2º).'
    },
    {
      sub: 'Emendas Parlamentares Individuais e de Bancada (Impositivas) e Emendas Pix (Art. 166 e 166-A)',
      ref: 'CF/88, Art. 166, §§ 9º a 20 e Art. 166-A (EC 86/2015, EC 100/2019 e EC 126/2022)',
      t: 'As emendas individuais ao projeto de lei orçamentária serão aprovadas no limite de 2% da receita corrente líquida do exercício anterior (sendo que a metade desse percentual será destinada a ações e serviços públicos de saúde, vedada para pagamento de pessoal ou encargos sociais), e as emendas de bancada estadual são de execução obrigatória até o montante de 1% da RCL; as emendas individuais podem alocar recursos a Estados e Municípios por transferência especial (independe de convênio e passa a pertencer ao ente no ato da transferência, devendo no mínimo 70% ser aplicado em despesas de capital) ou transferência com finalidade definida.',
      f: 'Os recursos recebidos pelos Municípios mediante transferência especial de emenda parlamentar individual podem ser integralmente gastos com pagamento de folha salarial de servidores ativos e encargos da dívida.',
      exp: 'Art. 166-A, § 1º da CF/88: Os recursos transferidos por transferência especial NÃO podem ser aplicados no pagamento de despesas com pessoal e encargos sociais (ativos, inativos e pensionistas) nem encargos referentes ao serviço da dívida, e pelo menos 70% devem ir para despesas de capital.'
    },
    {
      sub: 'Vedações Constitucionais Orçamentárias e Regra de Ouro (Art. 167 da CF/88)',
      ref: 'CF/88, Art. 167, I a XIV',
      t: 'São vedados pelo art. 167 da CF/88: o início de programas não incluídos na LOA; a realização de despesas que excedam os créditos orçamentários; a realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta (Regra de Ouro); a concessão ou utilização de créditos ilimitados; e a transposição, o remanejamento ou a transferência de recursos de uma categoria de programação para outra sem prévia autorização legislativa (exceto para ciência, tecnologia e inovação por ato do Executivo - § 5º).',
      f: 'A transposição, o remanejamento e a transferência de recursos de uma secretaria de Estado para outra podem ser feitos por simples decreto autônomo em qualquer área.',
      exp: 'Art. 167, VI e § 5º da CF/88: Transposição, remanejamento ou transferência exigem prévia autorização legislativa (em lei específica, não podendo constar da LOA pelo princípio da exclusividade), salvo no âmbito das atividades de ciência, tecnologia e inovação (§ 5º)!'
    },
    {
      sub: 'Liberação de Duodécimos até o Dia 20 (Art. 168) e Limites de Pessoal (Art. 169 da CF/88)',
      ref: 'CF/88, Arts. 168 e 169',
      t: 'Os recursos correspondentes às dotações orçamentárias, compreendidos os créditos suplementares e especiais, destinados aos órgãos dos Poderes Legislativo e Judiciário, do Ministério Público e da Defensoria Pública, ser-lhes-ão entregues até o dia 20 de cada mês, em duodécimos (sendo crime de responsabilidade do Governador ou Presidente o atraso ou retenção, vedado porém o repasse para pagamento de folhas de inativos custeados pelo tesouro - § 2º, EC 109/2021).',
      f: 'O Poder Executivo pode reter unilateralmente os duodécimos do Poder Judiciário e da Assembleia Legislativa caso a arrecadação mensal de ICMS fique abaixo da meta.',
      exp: 'Para o STF, o Executivo não pode reduzir ou reter unilateralmente os duodécimos do art. 168 (eventual contingenciamento do art. 9º da LRF é feito por ato próprio de cada Poder).'
    }
  ],

  // Aula 19 - Ordem Econômica e Financeira na CF/88 (Art. 170 ao 192 da CF/88)
  19: [
    {
      sub: 'Fundamentos, Fim e Princípios da Ordem Econômica (Art. 170 da CF/88)',
      ref: 'CF/88, Art. 170, I a IX e Parágrafo Único',
      t: 'A ordem econômica, fundada na valorização do trabalho humano e na livre iniciativa, tem por fim assegurar a todos existência digna, conforme os ditames da justiça social, observados os princípios da soberania nacional, propriedade privada, função social da propriedade, livre concorrência, defesa do consumidor, defesa do meio ambiente (inclusive mediante tratamento diferenciado conforme o impacto ambiental dos produtos e serviços), redução das desigualdades regionais e sociais, busca do pleno emprego e tratamento favorecido para as empresas de pequeno porte constituídas sob as leis brasileiras e que tenham sua sede e administração no País.',
      f: 'Na Constituição Federal de 1988, qualquer atividade econômica privada depende de prévia autorização discricionária do Poder Público para iniciar suas operações.',
      exp: 'Art. 170, parágrafo único da CF/88: É assegurado a todos o livre exercício de qualquer atividade econômica, INDEPENDENTEMENTE de autorização de órgãos públicos, salvo nos casos previstos em lei.'
    },
    {
      sub: 'Atuação Direta do Estado na Economia: Empresas Estatais e Regime Jurídico (Art. 173 da CF/88)',
      ref: 'CF/88, Art. 173, §§ 1º e 2º',
      t: 'Ressalvados os casos previstos na Constituição, a exploração direta de atividade econômica pelo Estado só será permitida quando necessária aos imperativos da segurança nacional ou a relevante interesse coletivo, conforme definidos em lei; as empresas públicas e as sociedades de economia mista que explorem atividade econômica de produção ou comercialização de bens ou de prestação de serviços sujeitam-se ao regime jurídico próprio das empresas privadas, inclusive quanto aos direitos e obrigações civis, comerciais, trabalhistas e tributários, não podendo gozar de privilégios fiscais não extensivos às do setor privado.',
      f: 'As sociedades de economia mista exploradoras de atividade econômica em regime de concorrência gozam de imunidade tributária recíproca sobre seus lucros e imóveis.',
      exp: 'Art. 173, § 2º e Art. 150, § 3º da CF/88: As empresas públicas e as sociedades de economia mista exploradoras de atividade econômica não podem gozar de privilégios fiscais não extensivos às do setor privado.'
    },
    {
      sub: 'Estado como Agente Normativo e Regulador e Prestação de Serviços Públicos (Arts. 174 e 175)',
      ref: 'CF/88, Arts. 174 e 175',
      t: 'Como agente normativo e regulador da atividade econômica, o Estado exercerá, na forma da lei, as funções de fiscalização, incentivo e planejamento, sendo este determinante para o setor público e indicativo para o setor privado; e incumbe ao Poder Público, na forma da lei, diretamente ou sob regime de concessão ou permissão, sempre através de licitação, a prestação de serviços públicos.',
      f: 'Na ordem econômica brasileira, o planejamento governamental estatal é compulsório e determinante tanto para o setor público quanto para as empresas privadas.',
      exp: 'Art. 174, caput da CF/88: O planejamento estatal é DETERMINANTE para o setor público e meramente INDICATIVO para o setor privado!'
    },
    {
      sub: 'Monopólios Constitucionais da União e Flexibilização do Petróleo e Radioisótopos (Art. 177 da CF/88)',
      ref: 'CF/88, Art. 177, I a V e §§ 1º e 2º (EC 9/1995, EC 49/2006 e EC 118/2022)',
      t: 'Constituem monopólio da União a pesquisa, lavra, refino, importação, exportação e transporte de petróleo, gás natural e outros hidrocarbonetos fluidos (admitindo o § 1º que a União contrate com empresas estatais ou privadas a realização dessas atividades dos incisos I a IV), bem como a pesquisa, a lavra, o enriquecimento, o reprocessamento, a industrialização e o comércio de minérios e minerais nucleares e seus derivados, com exceção dos radioisótopos cuja produção, comercialização e utilização poderão ser autorizadas sob regime de permissão.',
      f: 'É absolutamente vedado à União contratar empresas privadas para realizar atividades de pesquisa, lavra ou refino de petróleo e gás natural no território brasileiro.',
      exp: 'Desde a EC 9/1995 (Art. 177, § 1º), a União detém o monopólio do petróleo/gás natural (incisos I a IV), mas PODE contratar empresas estatais ou privadas para a execução dessas atividades; já o monopólio nuclear (inciso V) é indelegável, exceto quanto aos radioisótopos (EC 49/2006 e EC 118/2022).'
    },
    {
      sub: 'Política Urbana (Arts. 182 e 183) e Reforma Agrária (Arts. 184 a 191 da CF/88)',
      ref: 'CF/88, Arts. 182 a 191',
      t: 'O plano diretor, aprovado pela Câmara Municipal, é obrigatório para cidades com mais de vinte mil habitantes; na desapropriação urbanística sancionatória paga-se com títulos da dívida pública aprovados pelo Senado resgatáveis em até 10 anos, enquanto na desapropriação para fins de reforma agrária (competência exclusiva da União) paga-se o imóvel com títulos da dívida agrária resgatáveis em até 20 anos (e as benfeitorias úteis e necessárias em dinheiro), sendo insuscetíveis de desapropriação para fins de reforma agrária a pequena e média propriedade rural (assim definida em lei, desde que seu proprietário não possua outra) e a propriedade produtiva.',
      f: 'Os imóveis públicos pertencentes aos Estados e Municípios podem ser adquiridos por particulares mediante usucapião especial urbano após cinco anos de posse mansa.',
      exp: 'Art. 183, § 3º e Art. 191, parágrafo único da CF/88 (Súmula 340 do STF): Os imóveis públicos NÃO serão adquiridos por usucapião!'
    }
  ],

  // Aula 20 - Ordem Social e Direitos Sociais Específicos (Revisão Geral FGV)
  20: [
    {
      sub: 'Seguridade Social: Saúde, Previdência e Assistência Social e Princípios (Arts. 194 e 195)',
      ref: 'CF/88, Arts. 194 e 195',
      t: 'A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde (direito de todos, independente de contribuição), à previdência (caráter contributivo e filiação obrigatória) e à assistência social (prestada a quem dela necessitar, independentemente de contribuição), tendo como objetivos a universalidade da cobertura e do atendimento, a seletividade e distributividade, a irredutibilidade do valor dos benefícios, a equidade na forma de participação no custeio, a diversidade da base de financiamento e o caráter democrático e descentralizado da administração (gestão quadripartite).',
      f: 'A saúde pública e a assistência social exigem comprovação de carência mínima de doze contribuições previdenciárias mensais para atendimento do cidadão.',
      exp: 'Apenas a PREVIDÊNCIA SOCIAL tem caráter contributivo; a Saúde (para todos) e a Assistência Social (para os hipossuficientes/necessitados) independem de contribuição!'
    },
    {
      sub: 'Financiamento da Seguridade Social, Noventena e Regra da Contrapartida (Art. 195 da CF/88)',
      ref: 'CF/88, Art. 195, §§ 3º a 7º',
      t: 'As contribuições sociais da seguridade social só poderão ser exigidas após decorridos noventa dias da data da publicação da lei que as houver instituído ou modificado, não se lhes aplicando a anterioridade anual (§ 6º); são isentas (imunes) de contribuição para a seguridade social as entidades beneficentes de assistência social que atendam às exigências estabelecidas em lei complementar (§ 7º - Tema 32 STF); e nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total (§ 5º - regra da contrapartida).',
      f: 'A pessoa jurídica em débito com o sistema da seguridade social pode contratar livremente com o Poder Público e receber incentivos fiscais, desde que pague multa de 2%.',
      exp: 'Art. 195, § 3º da CF/88: A pessoa jurídica em débito com o sistema da seguridade social, como estabelecido em lei, NÃO poderá contratar com o Poder Público nem dele receber benefícios ou incentivos fiscais ou creditícios.'
    },
    {
      sub: 'Saúde Pública (SUS) e Vedação a Recursos Públicos para Instituições Privadas com Fins Lucrativos (Art. 199)',
      ref: 'CF/88, Arts. 196 a 200',
      t: 'A assistência à saúde é livre à iniciativa privada, podendo as instituições privadas participar de forma complementar do Sistema Único de Saúde (SUS), segundo diretrizes deste, mediante contrato de direito público ou convênio, tendo preferência as entidades filantrópicas e as sem fins lucrativos; é vedada a destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos, bem como a participação direta ou indireta de empresas ou capitais estrangeiros na assistência à saúde no País, salvo nos casos previstos em lei.',
      f: 'A Constituição proíbe a iniciativa privada de atuar na área da saúde suplementar e autoriza a concessão de subvenções públicas a fundo perdido para hospitais privados com fins lucrativos.',
      exp: 'Art. 199, §§ 1º e 2º da CF/88: A saúde é livre à iniciativa privada, mas é VEDADA a destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos.'
    },
    {
      sub: 'Educação na CF/88: Ensino Obrigatório dos 4 aos 17 Anos, Mínimos Constitucionais e FUNDEB Permanente',
      ref: 'CF/88, Arts. 205 a 214 (EC 59/2009 e EC 108/2020)',
      t: 'A educação básica é obrigatória e gratuita dos 4 (quatro) aos 17 (dezessete) anos de idade; a União aplicará, anualmente, nunca menos de 18%, e os Estados, o DF e os Municípios 25%, no mínimo, da receita resultante de impostos, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino (não constituindo despesa de ensino os programas suplementares de alimentação e assistência à saúde - art. 212, § 4º); os Municípios atuarão prioritariamente no ensino fundamental e na educação infantil, e os Estados e o DF no ensino fundamental e médio.',
      f: 'Os gastos realizados pelos Estados e Municípios com merenda escolar são integralmente computados para atingir o mínimo constitucional de 25% da receita de impostos em educação.',
      exp: 'Pegadinha clássica do Art. 212, § 4º da CF/88: Os programas suplementares de alimentação (merenda) e assistência à saúde serão financiados com recursos provenientes de contribuições sociais e outros recursos orçamentários, NÃO entrando no cômputo do mínimo de 18%/25% de impostos!'
    },
    {
      sub: 'Meio Ambiente (Art. 225), Família/Idoso (Arts. 226 a 230) e Povos Indígenas - Marco Temporal (Art. 231)',
      ref: 'CF/88, Arts. 225 a 232 e STF (Tema 1031)',
      t: 'Para assegurar a efetividade do direito ao meio ambiente ecologicamente equilibrado, incumbe ao Poder Público exigir, na forma da lei, para instalação de obra ou atividade potencialmente causadora de significativa degradação do meio ambiente, estudo prévio de impacto ambiental (EIA), a que se dará publicidade; as condutas lesivas ao meio ambiente sujeitam os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos; e os direitos originários dos índios sobre as terras que tradicionalmente ocupam são imprescritíveis e inalienáveis, tendo o STF rejeitado a tese do marco temporal (Tema 1031).',
      f: 'Pessoas jurídicas de direito privado não podem ser responsabilizadas criminalmente por delitos ambientais no ordenamento constitucional brasileiro.',
      exp: 'Art. 225, § 3º da CF/88: Tanto pessoas físicas quanto PESSOAS JURÍDICAS estão sujeitas a sanções penais e administrativas por crimes ambientais (independentemente de dupla imputação com pessoa física, segundo o STF no RE 548.181).'
    }
  ]
};
