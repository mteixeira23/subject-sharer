import { SubjectLessonMatrix } from './types';

// Direito Administrativo - 25 Aulas (0..24)
export const ADMINISTRATIVO_LESSON_MATRIX: SubjectLessonMatrix = {
  // Aula 00 - Princípios do Direito Administrativo
  0: [
    {
      sub: 'Regime Jurídico-Administrativo: Supremacia e Indisponibilidade do Interesse Público',
      ref: 'Doutrina de Celso Antônio Bandeira de Mello',
      t: 'As duas pedras de toque do regime jurídico-administrativo são a supremacia do interesse público sobre o privado (que fundamenta as prerrogativas públicas) e a indisponibilidade do interesse público pela Administração (que fundamenta as sujeições e deveres).',
      f: 'O princípio da indisponibilidade do interesse público impede que a Administração Pública celebre acordos, transações ou utilize arbitragem para dirimir conflitos patrimoniais.',
      exp: 'A indisponibilidade do interesse público primário é compatível com a autocomposição e a arbitragem quanto a direitos patrimoniais disponíveis (Lei 14.133/2021, art. 151).'
    },
    {
      sub: 'Princípio da Legalidade Administrativa vs. Legalidade Privada',
      ref: 'CF/88, Art. 37, caput e Art. 5º, II',
      t: 'Enquanto na esfera privada é lícito fazer tudo o que a lei não proíbe (autonomia da vontade), na Administração Pública vigora a subordinação à lei e ao Direito (juridicidade), só podendo o administrador atuar quando houver previsão ou autorização normativa.',
      f: 'O princípio da legalidade administrativa autoriza o servidor público a praticar qualquer ato administrativo desde que não exista proibição expressa no Código Penal.',
      exp: 'Para o agente público, a lei é o fundamento e o limite de toda atuação administrativa.'
    },
    {
      sub: 'Princípio da Impessoalidade, Finalidade e Teoria do Órgão (Imputação Volitiva)',
      ref: 'CF/88, Art. 37, caput e § 1º; Súmula Vinculante 13 do STF',
      t: 'O princípio da impessoalidade exige atuação voltada ao interesse público sem favoritismos ou perseguições, veda a promoção pessoal de autoridades em publicidade oficial (art. 37, § 1º), fundamenta a Súmula Vinculante 13 contra o nepotismo e explica a validade dos atos praticados por "funcionário de fato" perante terceiros de boa-fé.',
      f: 'A publicidade institucional dos órgãos públicos pode conter nomes, símbolos e slogans pessoais do Governador para enaltecer sua gestão.',
      exp: 'Art. 37, § 1º da CF/88: A publicidade oficial deve ter caráter educativo, informativo ou de orientação social, dela não podendo constar nomes, símbolos ou imagens que caracterizem promoção pessoal.'
    },
    {
      sub: 'Princípio da Autotutela Administrativa e Decadência Quinquenal (Súmula 473 STF e Lei 9.784/99)',
      ref: 'Súmulas 346 e 473 do STF; Lei nº 9.784/1999, Arts. 53 e 54',
      t: 'A Administração pode anular seus próprios atos, quando eivados de vícios que os tornem ilegais, ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos, decaindo em cinco anos o direito de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários de boa-fé.',
      f: 'O Poder Judiciário pode revogar atos administrativos discricionários praticados pelo Poder Executivo quando discordar de sua conveniência.',
      exp: 'A revogação por mérito (conveniência e oportunidade) é privativa da Administração que praticou o ato; o Judiciário exerce apenas controle de legalidade/legitimidade.'
    },
    {
      sub: 'Princípios da Segurança Jurídica, Proteção à Confiança, Motivação e LINDB (Arts. 20 a 30)',
      ref: 'Lei nº 9.784/1999, Art. 2º e LINDB (Lei nº 13.655/2018), Arts. 20 a 24',
      t: 'Nos termos da LINDB (Lei 13.655/2018), não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão (consequencialismo), e a revisão de ato administrativo cuja produção já se houver completado levará em conta as orientações gerais da época, sendo vedado declarar inválido ato com base em mudança posterior de orientação geral.',
      f: 'A nova interpretação administrativa de caráter geral pode retroagir para anular situações plenamente constituídas e aplicar multas retroativas aos administrados.',
      exp: 'Art. 2º, parágrafo único, XIII da Lei 9.784/99 e Art. 24 da LINDB vedam a aplicação retroativa de nova interpretação administrativa.'
    }
  ],

  // Aula 01 - Conceito e Introdução ao Direito Administrativo
  1: [
    {
      sub: 'Conceito e Objeto do Direito Administrativo Brasileiro',
      ref: 'Doutrina de Hely Lopes Meirelles e Maria Sylvia Zanella Di Pietro',
      t: 'O Direito Administrativo é o ramo do direito público interno que reúne os princípios e normas que regem os órgãos, agentes e pessoas jurídicas administrativas que integram a Administração Pública na realização direta, concreta e imediata dos fins desejados pelo Estado.',
      f: 'O Direito Administrativo integra o direito privado comercial e tem por objeto exclusivo a atividade jurisdicional do Estado.',
      exp: 'O Direito Administrativo é ramo autônomo do Direito Público interno voltado à função administrativa.'
    },
    {
      sub: 'Critérios de Definição do Direito Administrativo (Escola do Serviço Público, Poder Executivo, Teleológico e Negativo)',
      ref: 'Escolas Históricas do Direito Administrativo (Duguit, Hauriou)',
      t: 'Pelo critério residual ou negativo, a função administrativa compreende as atividades estatais que não constituem função legislativa nem jurisdicional; já o critério da Administração Pública adota o conjunto de princípios e normas que regem os órgãos e entidades no cumprimento das finalidades públicas sob regime de direito público.',
      f: 'A Escola Legalista ou Exegética francesa definia o Direito Administrativo como um sistema aberto de princípios não escritos desvinculados das leis.',
      exp: 'A Escola Exegética restringia o Direito Administrativo à mera interpretação literal dos textos legais positivados, sendo superada pelos critérios teleológico, das relações jurídicas e da Administração Pública.'
    },
    {
      sub: 'Sentido Subjetivo (Orgânico/Formal) vs. Sentido Objetivo (Material/Funcional) da Administração Pública',
      ref: 'Doutrina Clássica de Direito Administrativo',
      t: 'Em sentido subjetivo, formal ou orgânico, Administração Pública designa o conjunto de órgãos, agentes e pessoas jurídicas aos quais a lei atribui o exercício da função administrativa ("quem exerce"); já em sentido objetivo, material ou funcional, designa a própria atividade administrativa concreta exercida pelo Estado ("o que faz": serviço público, polícia administrativa, fomento e intervenção).',
      f: 'O sentido subjetivo ou orgânico da Administração Pública refere-se às atividades materiais de polícia administrativa, fomento e serviço público.',
      exp: 'Mnemônico: Subjetivo = Sujeitos (órgãos, entidades e agentes, com iniciais maiúsculas); Objetivo = Objeto/Atividade (polícia, serviço público, fomento e intervenção, com iniciais minúsculas).'
    },
    {
      sub: 'Governo (Função Política) vs. Administração (Função Administrativa)',
      ref: 'Teoria Geral do Estado e Direito Administrativo',
      t: 'A função de Governo (política) caracteriza-se pela ampla discricionariedade, comando superior, fixação de diretrizes e políticas públicas constitucionais, enquanto a Administração Pública possui caráter instrumental, neutro, técnico e subordinado para executar concretamente as políticas traçadas.',
      f: 'Os atos políticos de governo confundem-se integralmente com os atos administrativos de mero expediente e não admitem controle judicial mesmo quando violem direitos fundamentais.',
      exp: 'Mesmo os atos políticos ou de governo submetem-se ao controle jurisdicional quando causarem lesão a direitos individuais ou violarem limites constitucionais.'
    },
    {
      sub: 'Sistemas Administrativos: Contencioso Administrativo (Francês) vs. Jurisdição Única (Inglês/Brasileiro)',
      ref: 'CF/88, Art. 5º, XXXV',
      t: 'O Brasil adota o sistema inglês da jurisdição una (unicidade de jurisdição - art. 5º, XXXV da CF/88), no qual apenas o Poder Judiciário profere decisões com força de coisa julgada material definitiva, não se exigindo em regra o prévio esgotamento da via administrativa (ressalvados o habeas data, a justiça desportiva com prazo de 60 dias, a reclamação contra violação de súmula vinculante por ato administrativo e o requerimento prévio ao INSS no Tema 350 do STF).',
      f: 'O Brasil adota o sistema francês da dualidade de jurisdição, no qual o Conselho de Estado julga em definitivo todas as causas da Administração sem revisão pelo Poder Judiciário.',
      exp: 'No Brasil vigora a inafastabilidade da jurisdição (Art. 5º, XXXV da CF/88: sistema inglês de jurisdição única).'
    }
  ],

  // Aula 02 - Poderes Administrativos
  2: [
    {
      sub: 'Poder Vinculado vs. Poder Discricionário e Conceitos Jurídicos Indeterminados',
      ref: 'Doutrina de Direito Administrativo',
      t: 'Na atuação vinculada, a lei estabelece todos os elementos do ato (competência, finalidade, forma, motivo e objeto) sem margem de escolha ao agente (ex: lançamento tributário e concessão de aposentadoria); na atuação discricionária, a lei confere margem de liberdade nos elementos motivo e objeto (mérito administrativo: conveniência e oportunidade), sujeitando-se ao controle judicial de legalidade, razoabilidade e proporcionalidade.',
      f: 'No ato administrativo discricionário, o agente público tem liberdade para escolher qualquer finalidade ou alterar a sua própria competência legal.',
      exp: 'Os elementos Competência, Finalidade e Forma (COM-FI-FOR) são SEMPRE vinculados; o mérito administrativo reside apenas no Motivo e no Objeto (MO).'
    },
    {
      sub: 'Poder Hierárquico: Delegação e Avocação de Competências (Lei nº 9.784/1999)',
      ref: 'Lei nº 9.784/1999, Arts. 11 a 15 e Súmula 510 do STF',
      t: 'Do poder hierárquico decorrem as faculdades de dar ordens, fiscalizar, rever atos, delegar (inclusive sem subordinação hierárquica) e avocar (sempre temporária, excepcional e restrita a órgão hierarquicamente inferior); nos termos do art. 13 da Lei 9.784/99, NÃO podem ser objeto de delegação a edição de atos de caráter normativo, a decisão de recursos administrativos e as matérias de competência exclusiva (CENOREX).',
      f: 'A avocação de competência pode ocorrer entre órgãos sem relação de subordinação hierárquica e abrange matérias de competência exclusiva do subordinado.',
      exp: 'Art. 15 da Lei 9.784/99: A avocação exige subordinação hierárquica, caráter temporário, motivos relevantes e NÃO cabe para competência exclusiva.'
    },
    {
      sub: 'Poder Disciplinar vs. Poder de Polícia e Poder Regulamentar (Art. 84, IV e VI da CF/88)',
      ref: 'CF/88, Art. 84, IV e VI; Jurisprudência do STF',
      t: 'O poder disciplinar aplica sanções apenas a quem possui vínculo jurídico específico com a Administração (servidores públicos e particulares contratados ou alunos de escola pública), enquanto o poder de polícia incide sobre a coletividade em geral (vínculo geral); já o poder regulamentar manifesta-se como regra por decretos de execução secundários (art. 84, IV) e excepcionalmente por decretos autônomos nas duas hipóteses do art. 84, VI.',
      f: 'A multa de trânsito aplicada a motorista particular e a interdição sanitária de restaurante privado decorrem do poder disciplinar e do poder hierárquico da Administração.',
      exp: 'Não há hierarquia nem poder disciplinar sobre particulares sem vínculo contratual/funcional; multas de trânsito e interdições sanitárias decorrem do PODER DE POLÍCIA!'
    },
    {
      sub: 'Poder de Polícia: Conceito (Art. 78 do CTN), Atributos (DAC) e Ciclo de Polícia (Tema 532 do STF)',
      ref: 'CTN, Art. 78 e STF (RE 633.782 - Tema 532)',
      t: 'São atributos do poder de polícia a discricionariedade (regra, embora a licença seja vinculada), a autoexecutoriedade (exceto na cobrança de multas, que exige execução judicial) e a coercibilidade; o ciclo de polícia divide-se em ordem de polícia, consentimento de polícia, fiscalização de polícia e sanção de polícia, tendo o STF (Tema 532) decidido que é constitucional a delegação das fases de consentimento, fiscalização e sanção de polícia a pessoas jurídicas de direito privado integrantes da Administração Indireta de capital majoritariamente público que prestem exclusivamente serviço público sem regime concorrencial.',
      f: 'A cobrança de multa administrativa de polícia goza de autoexecutoriedade plena, podendo o fiscal penhorar e leiloar diretamente os bens do infrator sem ação judicial.',
      exp: 'A imposição (lavratura) da multa é ato de polícia, mas a COBRANÇA forçada da multa não paga NÃO tem autoexecutoriedade (exige inscrição em dívida ativa e execução fiscal judicial).'
    },
    {
      sub: 'Abuso de Poder (Excesso de Poder vs. Desvio de Finalidade) e Prescrição do Poder de Polícia (Lei 9.873/99)',
      ref: 'Lei nº 4.717/1965, Art. 2º e Lei nº 9.873/1999, Art. 1º',
      t: 'O abuso de poder divide-se em excesso de poder (vício de competência, em que o agente atua fora ou além de suas atribuições legais) e desvio de poder ou de finalidade (vício de finalidade, em que o agente atua dentro de sua competência, mas visando fim alheio ao interesse público); ademais, prescreve em 5 anos a ação punitiva da Administração no exercício do poder de polícia, e incide a prescrição intercorrente no procedimento administrativo paralisado por mais de 3 anos.',
      f: 'Na prescrição da ação punitiva do poder de polícia regida pela Lei nº 9.873/1999, a prescrição intercorrente ocorre somente após dez anos de paralisação do processo.',
      exp: 'Art. 1º, caput e § 1º da Lei 9.873/99: Prescrição punitiva = 5 anos (ou o prazo da lei penal se o fato também constituir crime - § 2º); Prescrição intercorrente = paralisação por mais de 3 anos.'
    }
  ],

  // Aula 03 - Atos Administrativos (Parte 1: Conceito, Requisitos/Elementos e Atributos)
  3: [
    {
      sub: 'Conceito de Ato Administrativo vs. Ato da Administração e Fato Administrativo',
      ref: 'Doutrina de Maria Sylvia Zanella Di Pietro',
      t: 'Ato administrativo é a declaração unilateral do Estado ou de quem o represente, no exercício de prerrogativas públicas sob regime jurídico de direito público, destinada a produzir efeitos jurídicos imediatos e sujeita ao controle judicial; "ato da Administração" é gênero mais amplo que inclui também os atos regidos pelo direito privado (como locação ou doação) e atos materiais; e fato administrativo é a realização material sem conteúdo de manifestação de vontade.',
      f: 'O silêncio administrativo importa sempre em manifestação positiva de concordância tácita da Administração Pública em qualquer requerimento do cidadão.',
      exp: 'O silêncio administrativo NÃO é ato administrativo (é fato jurídico omissivo) e só produz efeito de anuência ou recusa quando a lei expressamente assim dispuser (ressalvada a liberação de atividade econômica de baixo risco na Lei 13.874/2019).'
    },
    {
      sub: 'Os Cinco Elementos ou Requisitos de Validade do Ato Administrativo (COM-FI-FOR-M-O)',
      ref: 'Lei nº 4.717/1965, Art. 2º e Lei nº 9.784/1999',
      t: 'São cinco os elementos (requisitos de validade) do ato administrativo: Competência (sujeito, irrenunciável, imodificável pela vontade do agente e imprescritível), Finalidade (bem jurídico objetivado, sempre vinculada), Forma (exteriorização do ato, em regra escrita - art. 22 da Lei 9.784/99), Motivo (pressuposto de fato e de direito que antecede a prática do ato) e Objeto (conteúdo/efeito jurídico imediato que o ato produz).',
      f: 'A competência administrativa pode ser livremente renunciada pelo servidor público ou transferida em caráter definitivo a particular por acordo privado.',
      exp: 'Art. 11 da Lei 9.784/99: A competência é irrenunciável e se exerce pelos órgãos administrativos a que foi atribuída como própria, salvo os casos de delegação e avocação legalmente admitidos.'
    },
    {
      sub: 'Distinção entre Motivo e Motivação e Teoria dos Motivos Determinantes',
      ref: 'Lei nº 9.784/1999, Art. 50',
      t: 'Motivo é a situação de fato e de direito que autoriza ou exige a prática do ato, enquanto motivação é a exposição escrita dessas razões (integrando o elemento forma); pela Teoria dos Motivos Determinantes, a validade do ato vincula-se aos motivos declarados pelo agente como seu fundamento (mesmo quando a lei dispensava a motivação, como na exoneração ad nutum de cargo em comissão): se tais motivos forem falsos ou inexistentes, o ato é nulo.',
      f: 'Na exoneração ad nutum de servidor ocupante de cargo em comissão, ainda que a autoridade declare motivo falso de corrupção, o ato permanece válido por ser discricionário.',
      exp: 'Pela Teoria dos Motivos Determinantes, embora a exoneração de cargo em comissão não exija motivação, SE a autoridade declarar um motivo, fica vinculada à sua veracidade!'
    },
    {
      sub: 'Motivação Aliunde (Per Relationem) na Lei nº 9.784/1999',
      ref: 'Lei nº 9.784/1999, Art. 50, § 1º',
      t: 'A motivação deve ser explícita, clara e congruente, podendo consistir em declaração de concordância com fundamentos de anteriores pareceres, informações, decisões ou propostas, que, neste caso, serão parte integrante do ato (motivação aliunde ou per relationem).',
      f: 'A Lei nº 9.784/1999 proíbe que a autoridade administrativa fundamente sua decisão remetendo aos termos de parecer técnico ou jurídico constante do processo.',
      exp: 'Art. 50, § 1º da Lei 9.784/99 autoriza expressamente a motivação aliunde (por referência a parecer ou decisão anterior dos autos).'
    },
    {
      sub: 'Atributos do Ato Administrativo (PATI): Presunção de Legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade',
      ref: 'Doutrina de Direito Administrativo',
      t: 'A presunção de legitimidade e veracidade (relativa / juris tantum, que inverte o ônus da prova para o particular) e a tipicidade estão presentes em todos os atos administrativos; já a imperatividade (poder extroverso, ausente nos atos enunciativos e negociais) e a autoexecutoriedade (presente quando prevista em lei ou em situação de urgência) não existem em todos os atos.',
      f: 'O atributo da autoexecutoriedade está presente em absolutamente todos os atos administrativos, inclusive nas certidões, atestados e cobranças de multas.',
      exp: 'Apenas a Presunção de Legitimidade/Veracidade e a Tipicidade estão presentes em todos os atos; Imperatividade e Autoexecutoriedade só existem em parte dos atos.'
    }
  ],

  // Aula 04 - Atos Administrativos (Parte 2: Classificação, Espécies e Extinção)
  4: [
    {
      sub: 'Classificação dos Atos quanto à Formação da Vontade: Simples, Composto e Complexo',
      ref: 'Doutrina e Súmula Vinculante 3 do STF',
      t: 'Ato simples resulta da manifestação de vontade de um único órgão (singular ou colegiado); ato complexo resulta da conjugação de vontades autônomas de dois ou mais órgãos distintos para formar um único ato (ex: concessão inicial de aposentadoria pelo órgão + registro pelo Tribunal de Contas, e nomeação de dirigente de agência reguladora após sabatina do Senado); e ato composto resulta da vontade principal de um órgão que depende de um ato acessório/instrumental ratificador de outro órgão (ex: visto ou homologação interna).',
      f: 'A deliberação tomada pelo plenário de um conselho de contribuintes composto por dez conselheiros classifica-se como ato administrativo complexo.',
      exp: 'A decisão de um único órgão colegiado é ato SIMPLES (colegiado); o ato complexo exige a manifestação de dois ou mais ÓRGÃOS distintos!'
    },
    {
      sub: 'Espécies de Atos Administrativos (NOR-O-N-E-P): Licença, Autorização e Permissão',
      ref: 'Classificação de Hely Lopes Meirelles',
      t: 'Dentre os atos negociais: a Licença é ato vinculado e definitivo que reconhece direito subjetivo do particular que preenche os requisitos legais (ex: licença para construir e CNH); a Autorização é ato discricionário e precário no interesse predominante do particular (ex: porte de arma e uso de rua para festa); e a Permissão de uso de bem público é ato discricionário e precário no interesse público e privado.',
      f: 'O alvará de licença edilícia para construção de imóvel que atende integralmente ao código de obras municipal é ato discricionário e precário.',
      exp: 'A Licença é ato VINCULADO e definitivo (só podendo ser cassada por descumprimento, anulada por ilegalidade ou revogada com indenização se antes do início da obra por interesse público superveniente).'
    },
    {
      sub: 'Convalidação (Sanatória) dos Atos Administrativos (Art. 55 da Lei nº 9.784/1999)',
      ref: 'Lei nº 9.784/1999, Art. 55',
      t: 'Em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração, produzindo efeitos retroativos (ex tunc), admitindo convalidação apenas os vícios de competência (desde que não exclusiva nem em razão da matéria) e de forma (desde que não essencial à validade do ato - FO-CO).',
      f: 'Os atos administrativos praticados com desvio de finalidade ou objeto ilícito podem ser convalidados mediante ratificação do Governador.',
      exp: 'Vícios de Finalidade, Motivo e Objeto são INSANÁVEIS (atos nulos); apenas vícios de Competência (não exclusiva) e Forma (não essencial) admitem convalidação (FO-CO).'
    },
    {
      sub: 'Extinção dos Atos Administrativos: Anulação vs. Revogação',
      ref: 'Súmula 473 do STF e Lei nº 9.784/1999, Art. 53',
      t: 'A anulação (invalidação) recai sobre ato ilegal, pode ser feita pela Administração ou pelo Poder Judiciário e produz efeitos retroativos (ex tunc, ressalvados terceiros de boa-fé); a revogação recai sobre ato válido e discricionário por razões de conveniência e oportunidade, é privativa da Administração e produz efeitos prospectivos (ex nunc), sendo irrevogáveis os atos vinculados, os atos consumados/exauridos, os atos que geraram direito adquirido, os atos complexos, os meros atos administrativos (certidões/pareceres) e os atos integrantes de procedimento após a preclusão.',
      f: 'A revogação de um ato administrativo produz efeitos retroativos (ex tunc) e pode incidir sobre atos vinculados e certidões.',
      exp: 'Revogação = ato válido discricionário, mérito, só Administração, efeito EX NUNC. Anulação = ato ilegal (vinculado ou discricionário), Administração ou Judiciário, efeito EX TUNC.'
    },
    {
      sub: 'Cassação, Caducidade e Contraposição (Derrubada)',
      ref: 'Doutrina de Direito Administrativo',
      t: 'A cassação é a extinção de ato válido porque o beneficiário descumpriu condições que deveria manter para continuar usufruindo da situação jurídica (ex: hotel que vira casa de jogos ilícitos tem seu alvará cassado); a caducidade é a extinção do ato porque uma nova lei superveniente tornou inadmissível aquela situação antes permitida (ex: nova lei de zoneamento proíbe circo em praça pública); e a contraposição (derrubada) ocorre quando é editado novo ato baseado em competência diversa cujos efeitos são opostos ao anterior (ex: exoneração que derruba a nomeação).',
      f: 'Quando o particular descumpre as condições legais exigidas para a manutenção de sua licença ambiental, ocorre a extinção do ato por caducidade.',
      exp: 'Descumprimento de condição pelo particular = CASSAÇÃO; Superveniência de lei proibitiva = CADUCIDADE!'
    }
  ],

  // Aula 05 - Organização Administrativa e Descentralização
  5: [
    {
      sub: 'Desconcentração (Órgãos) vs. Descentralização (Entidades)',
      ref: 'Decreto-Lei nº 200/1967, Art. 4º',
      t: 'A desconcentração ocorre dentro de uma mesma pessoa jurídica mediante distribuição interna de competências entre órgãos públicos (com relação de hierarquia e subordinação, sem criação de nova personalidade jurídica); já a descentralização transfere atribuições para outra pessoa jurídica distinta (da Administração Indireta por outorga ou particular por delegação), inexistindo hierarquia ou subordinação entre a Administração Direta e a Indireta, mas apenas controle finalístico (tutela ou supervisão ministerial).',
      f: 'Entre a Secretaria da Fazenda (Administração Direta) e uma autarquia estadual vinculada (Administração Indireta) existe relação de subordinação hierárquica que autoriza a avocação de competências.',
      exp: 'Desconcentração = cria ÓRGÃOS (mesma PJ, COM hierarquia); Descentralização = cria/envolve ENTIDADES (PJs distintas, SEM hierarquia, apenas tutela/supervisão finalística).'
    },
    {
      sub: 'Classificação e Capacidade Processual dos Órgãos Públicos (Súmula 525 do STJ)',
      ref: 'Teoria do Órgão (Otto Gierke) e Súmula 525 do STJ',
      t: 'Os órgãos públicos são centros de competência despersonalizados (não possuem personalidade jurídica própria nem patrimônio próprio); contudo, os órgãos de estatura constitucional independentes e autônomos (como as Mesas das Casas Legislativas, o Tribunal de Contas e o Ministério Público) possuem personalidade judiciária (capacidade processual ativa) para defender em juízo suas prerrogativas institucionais (ex: via mandado de segurança), mas jamais respondem por ações indenizatórias.',
      f: 'Um Ministério ou Secretaria de Estado possui personalidade jurídica própria de direito público e responde diretamente em seu próprio CNPJ às ações de indenização.',
      exp: 'Quem responde judicialmente por obrigações e indenizações é a Pessoa Jurídica (União, Estado ou Município), nunca o órgão isolado.'
    },
    {
      sub: 'Criação de Entidades da Administração Indireta (Art. 37, XIX e XX da CF/88)',
      ref: 'CF/88, Art. 37, XIX e XX',
      t: 'Somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação, cabendo à lei complementar, neste último caso, definir as áreas de sua atuação; ademais, depende de autorização legislativa, em cada caso, a criação de subsidiárias dessas entidades, assim como a participação de qualquer delas em empresa privada (admitindo o STF na ADI 1.649 que a autorização para subsidiárias conste da própria lei instituidora da estatal matriz).',
      f: 'As autarquias adquirem personalidade jurídica apenas após o registro de seu estatuto social no Cartório de Registro Civil das Pessoas Jurídicas.',
      exp: 'A autarquia (e a fundação pública de direito público / autarquia fundacional) é CRIADA diretamente pela lei específica; já as EP, SEM e fundações de direito privado têm sua criação AUTORIZADA por lei, adquirindo personalidade jurídica com o registro de seus atos constitutivos.'
    },
    {
      sub: 'Autarquias, Agências Reguladoras e Conselhos Profissionais (ADI 1.717 e ADC 36)',
      ref: 'CF/88, Art. 37, XIX; Lei nº 13.848/2019 e Jurisprudência do STF (ADI 1.717 e ADC 36)',
      t: 'As autarquias são pessoas jurídicas de direito público que desempenham atividades típicas de Estado, gozando de imunidade tributária recíproca (art. 150, § 2º), impenhorabilidade de bens (regime de precatórios), prazos processuais em dobro (art. 183 CPC) e prescrição quinquenal; as agências reguladoras são autarquias em regime especial dotadas de autonomia decisória e mandatos fixos de seus dirigentes; e os conselhos de fiscalização profissional (exceto a OAB, que é entidade sui generis) têm natureza de autarquias federais, embora o STF (ADC 36) tenha admitido a contratação de seus empregados pelo regime da CLT mediante concurso público.',
      f: 'A Ordem dos Advogados do Brasil (OAB) é uma autarquia federal integrante da Administração Indireta da União e submete-se à prestação de contas ao TCU.',
      exp: 'Para o STF (ADI 3.026 e RE 293.219), a OAB é serviço público independente de categoria ímpar (sui generis), NÃO integrando a Administração Indireta nem prestando contas ao TCU (diferentemente dos demais conselhos como CRM, CREA, CRC).'
    },
    {
      sub: 'Fundações Públicas (Direito Público vs. Direito Privado) e Consórcios Públicos (Lei nº 11.107/2005)',
      ref: 'CF/88, Art. 37, XIX e Art. 241; Lei nº 11.107/2005',
      t: 'O STF admite que o Estado institua fundações públicas de direito público (autarquias fundacionais, criadas diretamente por lei) ou fundações públicas de direito privado (autorizadas por lei); e os consórcios públicos formados exclusivamente por entes federativos (Lei 11.107/2005) podem adquirir personalidade jurídica de direito público (associação pública, que integra a Administração Indireta de todos os entes consorciados) ou de direito privado.',
      f: 'Um consórcio público de direito público celebrado entre o Estado da Bahia e dez Municípios baianos integra apenas a Administração Indireta do Estado, não a dos Municípios.',
      exp: 'Art. 6º, § 1º da Lei 11.107/2005: O consórcio público com personalidade jurídica de direito público (associação pública) integra a administração indireta de TODOS os entes da Federação consorciados!'
    }
  ],

  // Aula 06 - Lei das Estatais (Lei nº 13.303/2016)
  6: [
    {
      sub: 'Conceito de Empresa Pública e Sociedade de Economia Mista e Foro Processual',
      ref: 'Lei nº 13.303/2016, Arts. 3º e 4º; CF/88, Art. 109, I e Súmula 556 do STF',
      t: 'Ambas são pessoas jurídicas de direito privado autorizadas por lei: a Empresa Pública tem capital social integralmente pertencente a entes da Administração Direta ou Indireta (admitindo qualquer forma societária, e as EP federais têm foro na Justiça Federal - art. 109, I da CF); já a Sociedade de Economia Mista tem capital misto com maioria das ações com direito a voto pertencente ao Poder Público, reveste obrigatoriamente a forma de Sociedade Anônima (S/A) e tem foro na Justiça Estadual (mesmo quando federal - Súmula 556 STF).',
      f: 'As sociedades de economia mista federais, como o Banco do Brasil e a Petrobras, têm suas causas cíveis julgadas na Justiça Federal.',
      exp: 'Art. 109, I da CF/88 e Súmula 556 do STF: Apenas a União, autarquias e empresas públicas federais vão para a Justiça Federal; as sociedades de economia mista federais são julgadas na Justiça Estadual!'
    },
    {
      sub: 'Regime de Pessoal, Teto Remuneratório e Demissão Imotivada nas Estatais (Tema 1022 do STF)',
      ref: 'CF/88, Art. 37, II e § 9º; STF (RE 688.267 - Tema 1022 / 2024)',
      t: 'Os agentes das empresas públicas e sociedades de economia mista são empregados públicos regidos pela CLT, admitidos por concurso público, que não gozam da estabilidade do art. 41 da CF/88; contudo, o STF fixou no Tema 1022 que a dispensa sem justa causa de empregado de empresa pública e de sociedade de economia mista admitido por concurso público exige motivação formal em ato administrativo (ainda que sem necessidade de PAD); ademais, o teto remuneratório só se aplica às estatais que receberem recursos do ente político para pagamento de despesas de pessoal ou de custeio em geral (estatais dependentes - art. 37, § 9º).',
      f: 'Os empregados públicos do Banco do Brasil e da Petrobras submetem-se ao teto remuneratório dos Ministros do STF por integrarem a Administração Indireta.',
      exp: 'Art. 37, § 9º da CF/88: O teto constitucional aplica-se apenas às empresas estatais DEPENDENTES (que recebem recursos do Tesouro para pessoal ou custeio em geral).'
    },
    {
      sub: 'Governança Corporativa e Vedações para Indicação de Administradores (Art. 17 da Lei 13.303/2016)',
      ref: 'Lei nº 13.303/2016, Art. 17 e ADI 7.331 do STF',
      t: 'Os membros do Conselho de Administração e os diretores das estatais devem ter experiência profissional comprovada e formação acadêmica compatível, sendo vedada a indicação de representantes do órgão regulador, de titulares de mandato no Poder Legislativo, de dirigentes de partidos políticos e de pessoas que tenham conflito de interesses; o prazo de gestão será unificado e não superior a 2 (dois) anos, sendo permitidas, no máximo, 3 (três) reconduções consecutivas (Art. 13, VI).',
      f: 'O prazo de gestão dos diretores das empresas estatais na Lei nº 13.303/2016 é de 4 anos, admitidas reconduções ilimitadas.',
      exp: 'Art. 13, VI da Lei 13.303/2016: Prazo de gestão unificado não superior a 2 anos, com no máximo 3 reconduções consecutivas (total máximo de 8 anos).'
    },
    {
      sub: 'Dispensa de Licitação para Atividade-Fim e Oportunidades de Negócio (Art. 28, § 3º da Lei 13.303/2016)',
      ref: 'Lei nº 13.303/2016, Art. 28, § 3º, I e II',
      t: 'As empresas públicas e as sociedades de economia mista são dispensadas da observância das regras licitatórias da Lei 13.303/2016 em duas situações estratégicas: I - comercialização, prestação ou execução, de forma direta, pelas próprias estatais, de produtos, serviços ou obras especificamente relacionados com seus respectivos objetos sociais (atividade-fim); e II - nos casos em que a escolha do parceiro esteja associada a suas características particulares, vinculada a oportunidades de negócio definidas e específicas, justificada a inviabilidade de procedimento competitivo.',
      f: 'As empresas estatais submetem-se integralmente à Nova Lei de Licitações (Lei nº 14.133/2021) para todas as suas contratações.',
      exp: 'Art. 1º, § 1º da Lei 14.133/2021: As empresas públicas, as sociedades de economia mista e as suas subsidiárias NÃO são abrangidas pela Lei 14.133/2021 (salvo as disposições penais), regendo-se pela Lei nº 13.303/2016!'
    },
    {
      sub: 'Licitações e Contratos na Lei das Estatais (Arts. 29 a 81 da Lei nº 13.303/2016)',
      ref: 'Lei nº 13.303/2016, Arts. 29, 34, 71 e 81',
      t: 'Na Lei nº 13.303/2016, é dispensável a licitação para obras e serviços de engenharia de valor até R$ 100.000,00 e para outros serviços e compras de valor até R$ 50.000,00 (valores atualizáveis pelo conselho de administração); o orçamento estimado do contrato é em regra sigiloso (art. 34); a duração dos contratos não excederá a 5 (cinco) anos (salvo exceções de projetos de investimento e prorrogação de aluguel); e os contratos só podem ser alterados por ACORDO entre as partes (inexistindo alteração unilateral exorbitante - art. 72 e 81).',
      f: 'Na Lei das Estatais (Lei nº 13.303/2016), a estatal contratante pode alterar unilateralmente o contrato para impor acréscimos de até 25% contra a vontade do contratado.',
      exp: 'Diferença crucial entre a Lei 14.133/2021 e a Lei 13.303/2016 (Art. 72 e 81): Nas estatais, as alterações contratuais de acréscimo ou supressão dependem SEMPRE de acordo entre as partes (não há alteração unilateral!).'
    }
  ],

  // Aula 07 - Entidades Paraestatais e Terceiro Setor
  7: [
    {
      sub: 'Conceito de Terceiro Setor e Entidades Paraestatais (Cooperação Fomento)',
      ref: 'Doutrina de Direito Administrativo',
      t: 'As entidades do Terceiro Setor (entidades paraestatais) são pessoas jurídicas de direito privado, sem fins lucrativos, que não integram a Administração Pública Direta nem Indireta, mas atuam ao lado do Estado executando atividades de interesse público não exclusivas do Estado mediante fomento governamental.',
      f: 'As Organizações Sociais (OS), as OSCIPs e o Sistema S integram a Administração Pública Indireta juntamente com as autarquias e fundações.',
      exp: 'O Terceiro Setor fica FORA da Administração Pública (não integra a Administração Direta nem a Indireta).'
    },
    {
      sub: 'Serviços Sociais Autônomos (Sistema S: SESI, SENAI, SESC, SENAC, SEBRAE)',
      ref: 'Jurisprudência do STF (RE 789.874 - Tema 569)',
      t: 'Os Serviços Sociais Autônomos são pessoas jurídicas de direito privado sem fins lucrativos instituídas por confederações patronais após autorização legal para ministrar assistência ou ensino a certas categorias profissionais, mantendo-se por contribuições parafiscais ou dotações; segundo o STF (Tema 569), não estão sujeitos à regra do concurso público do art. 37, II da CF (basta processo seletivo simplificado objetivo), nem à Lei 14.133/2021 (adotam regulamentos próprios de compras), mas prestam contas ao Tribunal de Contas pelos recursos parafiscais recebidos.',
      f: 'Os Serviços Sociais Autônomos (Sistema S) são obrigados a realizar concurso público nos moldes do art. 37, II da Constituição Federal para contratar seus empregados.',
      exp: 'No RE 789.874 (Tema 569 da Repercussão Geral), o STF decidiu que os Serviços Sociais Autônomos NÃO se submetem à exigência de concurso público do art. 37, II da CF/88.'
    },
    {
      sub: 'Organizações Sociais (OS - Lei nº 9.637/1998 e ADI 1.923 do STF)',
      ref: 'Lei nº 9.637/1998 e ADI 1.923 do STF',
      t: 'Qualificam-se como Organizações Sociais (OS), por ato discricionário do Poder Executivo, pessoas jurídicas de direito privado sem fins lucrativos cujas atividades sejam dirigidas ao ensino, à pesquisa científica, ao desenvolvimento tecnológico, à proteção e preservação do meio ambiente, à cultura e à saúde; a OS firma Contrato de Gestão com o Poder Público, exige participação de representantes do Poder Público e da comunidade em seu Conselho de Administração, pode receber recursos orçamentários, cessão de bens públicos e cessão de servidores com ônus para a origem, e pode ser contratada diretamente por dispensa de licitação (após chamamento público objetivo - ADI 1.923).',
      f: 'O vínculo jurídico firmado entre o Poder Público e uma Organização Social (OS) denomina-se Termo de Parceria, sendo vedada a cessão de servidores públicos para a OS.',
      exp: 'Distinção clássica: OS (Lei 9.637/98) = CONTRATO DE GESTÃO (tem Poder Público no conselho e recebe bens/servidores); OSCIP (Lei 9.790/99) = TERMO DE PARCERIA!'
    },
    {
      sub: 'Organizações da Sociedade Civil de Interesse Público (OSCIP - Lei nº 9.790/1999)',
      ref: 'Lei nº 9.790/1999, Arts. 1º a 9º',
      t: 'A qualificação como OSCIP é ato vinculado concedido pelo Ministério da Justiça à pessoa jurídica de direito privado sem fins lucrativos em funcionamento regular há no mínimo 3 (três) anos, não podendo qualificar-se como OSCIP os sindicatos, partidos políticos, entidades religiosas, hospitais privados não gratuitos, escolas privadas não gratuitas, cooperativas e fundações instituídas pelo Poder Público, nem podendo uma entidade ser simultaneamente OS e OSCIP; o vínculo celebrado entre a OSCIP e o Poder Público é o Termo de Parceria.',
      f: 'Partidos políticos, sindicatos e igrejas podem obter a qualificação de OSCIP perante o Ministério da Justiça para celebrar Termo de Parceria.',
      exp: 'O Art. 2º da Lei 9.790/1999 veda expressamente a qualificação de partidos, sindicatos, entidades religiosas, cooperativas e Organizações Sociais como OSCIP.'
    },
    {
      sub: 'Marco Regulatório das Organizações da Sociedade Civil - MROSC (Lei nº 13.019/2014)',
      ref: 'Lei nº 13.019/2014, Arts. 2º, 16, 17 e 18',
      t: 'A Lei nº 13.019/2014 instituiu três instrumentos jurídicos para parcerias com Organizações da Sociedade Civil (OSCs), precedidos em regra de Chamamento Público: 1) Termo de Colaboração (proposto pela Administração Pública, com transferência de recursos financeiros); 2) Termo de Fomento (proposto pelas OSCs, com transferência de recursos financeiros); e 3) Acordo de Cooperação (quando não envolver transferência de recursos financeiros), vedada a celebração de novos convênios com entidades privadas sem fins lucrativos fora da área complementar do SUS.',
      f: 'Na Lei nº 13.019/2014, o Acordo de Cooperação é o instrumento utilizado quando a parceria envolve transferência milionária de recursos financeiros do orçamento público.',
      exp: 'Mnemônico da Lei 13.019/2014: Colaboração = iniciativa da Administração COM dinheiro; Fomento = iniciativa da OSC COM dinheiro; Acordo de Cooperação = SEM transferência de recursos financeiros!'
    }
  ],

  // Aula 08 - Agentes Públicos e Estatuto dos Servidores (Lei BA nº 6.677/1994)
  8: [
    {
      sub: 'Classificação dos Agentes Públicos: Políticos, Administrativos, Honoríficos, Delegados e Credenciados',
      ref: 'Classificação de Hely Lopes Meirelles e CF/88',
      t: 'Agentes públicos são todas as pessoas físicas que exercem, ainda que transitoriamente ou sem remuneração, mandato, cargo, emprego ou função pública, dividindo-se em: Agentes Políticos (Chefes do Executivo, Ministros/Secretários, Parlamentares e, para o STF, Magistrados e Membros do MP); Servidores/Agentes Administrativos (estatutários, celetistas e temporários do art. 37, IX); Militares (art. 42 e 142); Agentes Honoríficos (jurados e mesários); Agentes Delegados (concessionários, leiloeiros e notários/registradores do art. 236); e Agentes Credenciados.',
      f: 'Os titulares de serviços notariais e de registro (cartórios extrajudiciais) são servidores públicos estatutários ocupantes de cargo efetivo sujeitos à aposentadoria compulsória aos 75 anos.',
      exp: 'Para o STF (ADI 2.602 e RE 647.827), os tabeliães e registradores exercem atividade em caráter privado por delegação do Poder Público (Art. 236, CF), não são servidores estatutários e NÃO se submetem à aposentadoria compulsória.'
    },
    {
      sub: 'Formas de Provimento Originário e Derivado (Lei BA nº 6.677/1994 e Lei nº 8.112/1990)',
      ref: 'Lei Estadual da Bahia nº 6.677/1994, Art. 10',
      t: 'A Nomeação é a única forma de provimento originário; são formas de provimento derivado: Promoção (passagem de uma classe para outra na carreira), Readaptação (investidura em cargo compatível com limitação física ou mental sofrida), Reversão (retorno à atividade do aposentado por invalidez quando insubsistentes os motivos), Aproveitamento (retorno à atividade do servidor em disponibilidade), Reintegração (reinvestidura do servidor estável quando invalidada a sua demissão por decisão administrativa ou judicial, com ressarcimento de todas as vantagens) e Recondução (retorno do servidor estável ao cargo anteriormente ocupado por inabilitação em estágio probatório de outro cargo ou reintegração do anterior ocupante).',
      f: 'A remoção e a redistribuição constituem formas de provimento derivado de cargo público.',
      exp: 'Remoção (deslocamento do servidor) e Redistribuição (deslocamento do cargo) são formas de MOVIMENTAÇÃO, e NÃO formas de provimento nem de vacância!'
    },
    {
      sub: 'Posse, Exercício e Estágio Probatório no Estatuto dos Servidores da Bahia (Lei nº 6.677/1994)',
      ref: 'Lei Estadual da Bahia nº 6.677/1994, Arts. 19, 21 e 27',
      t: 'A investidura em cargo público ocorre com a posse; no Estatuto dos Servidores Civis do Estado da Bahia (Lei nº 6.677/1994), a posse deve ocorrer no prazo de 30 dias da publicação do ato de provimento (prorrogável por mais 30 dias a requerimento do interessado), admitindo-se posse mediante procuração específica; se o nomeado não tomar posse no prazo, o ato de provimento é tornado sem efeito (não é exoneração!); já o prazo para entrar em exercício após a posse é, na Lei 6.677/94 da Bahia, de 30 dias (se não entrar em exercício, será exonerado de ofício).',
      f: 'Quando o candidato nomeado em concurso público não comparece para tomar posse dentro do prazo legal, a Administração deve aplicar-lhe a penalidade de demissão.',
      exp: 'Sem posse ainda não há investidura nem servidor: se não tomar posse no prazo, torna-se SEM EFEITO o ato de nomeação; se tomou posse mas não entrou em exercício no prazo, aplica-se a EXONERAÇÃO de ofício (não é demissão, pois não é penalidade).'
    },
    {
      sub: 'Responsabilidade Civil, Penal e Administrativa do Servidor e Intercomunicabilidade das Instâncias',
      ref: 'Lei Estadual BA nº 6.677/1994 e Lei nº 8.112/1990, Arts. 121 a 126',
      t: 'O servidor responde civil, penal e administrativamente pelo exercício irregular de suas atribuições, sendo as sanções civis, penais e administrativas cumuláveis e independentes entre si; contudo, a responsabilidade administrativa e civil do servidor será afastada no caso de absolvição criminal que negue a existência do fato ou a sua autoria (vinculação obrigatória da esfera penal sobre as demais).',
      f: 'A absolvição do servidor público no juízo criminal por insuficiência de provas obriga a Administração a reintegrá-lo automaticamente e anular a demissão administrativa.',
      exp: 'Súmula 18 do STF e Estatutos de Servidores: A absolvição criminal por falta/insuficiência de provas NÃO vincula a esfera administrativa (que pode punir pela falta residual); só vincula a absolvição por inexistência do fato ou negativa de autoria!'
    },
    {
      sub: 'Processo Administrativo Disciplinar (PAD): Súmulas Vinculantes e Súmulas do STJ',
      ref: 'Súmula Vinculante 5 do STF e Súmulas 343, 591, 592, 611, 635 e 650 do STJ',
      t: 'A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição (Súmula Vinculante 5 STF); é permitida a "prova emprestada" produzida validamente em processo criminal ou interceptação telefônica judicial para instruir o PAD, desde que observado o contraditório (Súmula 591 STJ); é admitida a instauração de PAD com base em denúncia anônima desde que precedida de investigação preliminar sumária (Súmula 611 STJ); o excesso de prazo para conclusão do PAD não causa nulidade se não houver prejuízo à defesa (Súmula 592 STJ); e a autoridade administrativa não possui discricionariedade para deixar de aplicar a pena de demissão quando configurada hipótese legal demissível (Súmula 650 STJ).',
      f: 'De acordo com o Supremo Tribunal Federal, é nulo o Processo Administrativo Disciplinar no qual o servidor não tenha sido defendido por advogado inscrito na OAB.',
      exp: 'Súmula Vinculante 5 do STF: A falta de defesa técnica por advogado no processo administrativo disciplinar NÃO ofende a Constituição (superando a antiga Súmula 343 do STJ).'
    }
  ],

  // Aula 09 - Licitações Públicas (Lei nº 14.133/2021 - Parte 1: Âmbito, Princípios, Agentes e Modalidades)
  9: [
    {
      sub: 'Âmbito de Aplicação da Nova Lei de Licitações (Lei nº 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 1º a 3º',
      t: 'A Lei nº 14.133/2021 estabelece normas gerais de licitação e contratação para as Administrações Públicas diretas, autárquicas e fundacionais da União, dos Estados, do DF e dos Municípios, abrangendo os órgãos dos Poderes Legislativo e Judiciário, os Tribunais de Contas e o Ministério Público no exercício de função administrativa, bem como os fundos especiais, mas NÃO abrange as empresas públicas e sociedades de economia mista (regidas pela Lei 13.303/2016, exceto quanto aos crimes licitatórios inseridos no Código Penal).',
      f: 'A Lei nº 14.133/2021 revogou a Lei das Estatais (Lei nº 13.303/2016) e passou a reger todas as licitações das empresas públicas e sociedades de economia mista.',
      exp: 'Art. 1º, § 1º da Lei 14.133/2021: As empresas públicas, as sociedades de economia mista e as suas subsidiárias continuam regidas pela Lei nº 13.303/2016.'
    },
    {
      sub: 'Agente de Contratação, Pregoeiro e Comissão de Contratação (Arts. 7º e 8º da Lei 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 7º e 8º',
      t: 'A licitação será conduzida por agente de contratação (designado como pregoeiro quando a modalidade for pregão), pessoa designada pela autoridade competente entre servidores efetivos ou empregados públicos dos quadros permanentes da Administração Pública para tomar decisões, acompanhar o trâmite e dar impulso ao procedimento, auxiliado por equipe de apoio; em licitação que envolva bens ou serviços especiais (e obrigatoriamente no diálogo competitivo), o agente de contratação pode ser substituído por comissão de contratação formada por, no mínimo, 3 (três) membros, que responderão solidariamente por todos os atos praticados, ressalvado o membro que expressar posição individual divergente fundamentada e registrada em ata.',
      f: 'Na Lei nº 14.133/2021, o agente de contratação deve ser sempre um servidor ocupante exclusivamente de cargo em comissão de livre nomeação.',
      exp: 'Art. 8º da Lei 14.133/2021: O agente de contratação deve ser designado entre servidores EFETIVOS ou empregados públicos dos quadros permanentes da Administração.'
    },
    {
      sub: 'As Cinco Modalidades de Licitação na Lei nº 14.133/2021 (Art. 28)',
      ref: 'Lei nº 14.133/2021, Arts. 28 a 32',
      t: 'São modalidades de licitação na Lei nº 14.133/2021: I - pregão; II - concorrência; III - concurso; IV - leilão; e V - diálogo competitivo, sendo expressamente vedada a criação de outras modalidades de licitação ou a combinação das modalidades referidas (tendo sido extintas a tomada de preços, o convite e o RDC), definindo-se a modalidade exclusivamente pela natureza do objeto, e nunca pelo valor estimado da contratação.',
      f: 'Na Lei nº 14.133/2021, a escolha entre as modalidades concorrência, tomada de preços e convite depende do valor financeiro estimado da obra.',
      exp: 'A Lei 14.133/2021 extinguiu a tomada de preços e o convite; as 5 modalidades (Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo) são definidas pela NATUREZA do objeto, jamais pelo valor!'
    },
    {
      sub: 'Pregão vs. Concorrência e Diálogo Competitivo (Arts. 29 e 32 da Lei 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 6º, XLI e XLII, 29 e 32',
      t: 'O pregão é modalidade obrigatória para aquisição de bens e serviços comuns (inclusive serviços comuns de engenharia), cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto (não se aplicando a serviços técnicos especializados de natureza predominantemente intelectual nem a obras e serviços especiais de engenharia); a concorrência aplica-se a bens e serviços especiais e a obras e serviços comuns e especiais de engenharia; e o diálogo competitivo é restrito a contratações de inovação tecnológica, impossibilidade de definir especificações técnicas sem adaptação das soluções disponíveis ou impossibilidade de definir com precisão os meios técnicos ou financeiros.',
      f: 'A modalidade pregão pode ser utilizada na Lei nº 14.133/2021 para a contratação de grandes obras públicas de engenharia pelo critério de melhor técnica.',
      exp: 'Art. 29, parágrafo único da Lei 14.133/2021: O pregão NÃO se aplica a OBRAS nem a serviços especiais de engenharia, mas admite-se (concorrentemente com a concorrência) para serviços COMUNS de engenharia!'
    },
    {
      sub: 'Critérios de Julgamento das Propostas (Art. 33 da Lei nº 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 33 a 39',
      t: 'O julgamento das propostas será realizado de acordo com os seguintes seis critérios: I - menor preço; II - maior desconto; III - melhor técnica ou conteúdo artístico; IV - técnica e preço (em que a pontuação técnica é valorada na proporção máxima de 70%); V - maior lance, no caso de leilão; ou VI - maior retorno econômico (exclusivo para contratos de eficiência, em que a remuneração é fixada em percentual da economia gerada para a Administração).',
      f: 'No critério de julgamento por técnica e preço da Lei nº 14.133/2021, a nota da proposta técnica pode ter peso de 90% e a de preço apenas 10%.',
      exp: 'Art. 36, § 2º da Lei 14.133/2021: No julgamento por técnica e preço, deverão ser avaliadas e ponderadas as propostas técnicas e, em seguida, as propostas de preço, na proporção máxima de 70% de valoração para a proposta técnica!'
    }
  ],

  // Aula 10 - Licitações Públicas (Lei nº 14.133/2021 - Parte 2: Fases, Contratação Direta e Procedimentos Auxiliares)
  10: [
    {
      sub: 'Rito Procedimental Comum das Licitações e Inversão de Fases (Art. 17 da Lei 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Art. 17, caput e § 1º',
      t: 'O processo de licitação observará, como regra geral, as seguintes fases em sequência: I - preparatória; II - de divulgação do edital de licitação; III - de apresentação de propostas e lances; IV - de julgamento; V - de habilitação; VI - recursal (fase recursal única); e VII - de homologação; excepcionalmente, mediante ato motivado com explicitação dos benefícios decorrentes e previsão expressa no edital, a fase de habilitação poderá anteceder a fase de apresentação de propostas e lances e de julgamento.',
      f: 'Na Lei nº 14.133/2021, a fase de habilitação ocorre como regra geral antes da abertura das propostas de preços em todas as licitações.',
      exp: 'Na Lei 14.133/2021, a regra geral (tanto no pregão quanto na concorrência) é que o JULGAMENTO precede a HABILITAÇÃO (só se analisa a habilitação do licitante vencedor), admitindo-se a inversão excepcional motivada no edital.'
    },
    {
      sub: 'Orçamento Estimado Sigiloso e Prazos Mínimos de Divulgação do Edital (Arts. 24 e 55)',
      ref: 'Lei nº 14.133/2021, Arts. 24 e 55',
      t: 'Desde que justificado, o orçamento estimado da contratação poderá ter caráter sigiloso, sem prejuízo da divulgação do detalhamento dos quantitativos e das demais informações necessárias para a elaboração das propostas, não prevalecendo o sigilo para os órgãos de controle interno e externo (e sendo vedado o orçamento sigiloso quando o critério de julgamento for por maior desconto); quanto aos prazos mínimos entre a publicação do edital e a apresentação das propostas, são de 8 dias úteis para aquisição de bens (menor preço/maior desconto) e de 10 dias úteis para serviços comuns e obras/serviços comuns de engenharia.',
      f: 'O orçamento sigiloso da Lei nº 14.133/2021 é oponível inclusive aos auditores do Tribunal de Contas e é obrigatório nas licitações por maior desconto.',
      exp: 'Art. 24, I e parágrafo único da Lei 14.133/2021: O sigilo não prevalece para os órgãos de controle interno e externo, e nas licitações por maior desconto o preço estimado deve constar obrigatoriamente do edital.'
    },
    {
      sub: 'Inexigibilidade de Licitação: Rol Exemplificativo (Art. 74 da Lei nº 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Art. 74, I a V',
      t: 'É inexigível a licitação quando inviável a competição, em especial nos casos de: I - aquisição de materiais, equipamentos ou gêneros ou contratação de serviços que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivos (vedada preferência de marca); II - contratação de profissional do setor artístico, diretamente ou por meio de empresário exclusivo, desde que consagrado pela crítica especializada ou pela opinião pública; III - contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização (vedada a inexigibilidade para serviços de publicidade e divulgação); IV - objetos que devam ou possam ser contratados por meio de credenciamento; e V - aquisição ou locação de imóvel cujas características de instalações e de localização tornem necessária sua escolha.',
      f: 'Na Lei nº 14.133/2021, a aquisição ou locação de imóvel cujas características de instalações e localização tornem necessária sua escolha continua sendo hipótese de dispensa de licitação.',
      exp: 'Mudança clássica da Lei 14.133/2021 (Art. 74, V): A compra ou locação de imóvel específico passou de dispensa (antigo art. 24, X da Lei 8.666) para INEXIGIBILIDADE DE LICITAÇÃO, assim como o credenciamento (Art. 74, IV)!'
    },
    {
      sub: 'Dispensa de Licitação: Rol Taxativo (Art. 75 da Lei nº 14.133/2021 - Valor, Emergência e Licitação Deserta/Fracassada)',
      ref: 'Lei nº 14.133/2021, Art. 75, I, II, III e VIII',
      t: 'É dispensável a licitação nos casos taxativos do art. 75, destacando-se: I - valor inferior a R$ 100.000,00 (atualizado anualmente pelo IPCA-E) para obras e serviços de engenharia ou serviços de manutenção de veículos automotores; II - valor inferior a R$ 50.000,00 (atualizado) para outros serviços e compras (valores duplicados para consórcios públicos e agências executivas); III - licitação deserta ou fracassada realizada há menos de 1 (um) ano, mantendo-se todas as condições do edital; e VIII - emergência ou calamidade pública, para parcelas de obras e serviços que possam ser concluídas no prazo máximo de 1 (um) ano, contado da data de ocorrência da emergência ou da calamidade, vedada a prorrogação dos respectivos contratos e a recontratação de empresa já contratada com base no disposto neste inciso.',
      f: 'Na dispensa por emergência ou calamidade pública da Lei nº 14.133/2021, o prazo máximo de conclusão continua sendo de 180 dias, admitida a prorrogação por igual período.',
      exp: 'Art. 75, VIII da Lei 14.133/2021: O prazo máximo da contratação emergencial subiu de 180 dias para 1 (UM) ANO, sendo vedada a prorrogação do contrato e a recontratação da mesma empresa!'
    },
    {
      sub: 'Procedimentos Auxiliares das Licitações (Art. 78 da Lei nº 14.133/2021) e SRP',
      ref: 'Lei nº 14.133/2021, Arts. 78 a 86',
      t: 'São procedimentos auxiliares das licitações e das contratações regidas pela Lei nº 14.133/2021: I - credenciamento; II - pré-qualificação; III - procedimento de manifestação de interesse (PMI); IV - sistema de registro de preços (SRP); e V - registro cadastral; no SRP, o prazo de vigência da ata de registro de preços será de 1 (um) ano e poderá ser prorrogado, por igual período, desde que comprovado o preço vantajoso, admitindo-se o uso do SRP inclusive para obras e serviços de engenharia (desde que exista projeto padronizado sem complexidade técnica e necessidade permanente ou frequente) e para hipóteses de inexigibilidade e de dispensa de licitação.',
      f: 'Na Lei nº 14.133/2021, a ata de registro de preços tem validade improrrogável de um ano, sendo vedado o uso do Sistema de Registro de Preços para obras de engenharia ou contratações diretas.',
      exp: 'Inovações da Lei 14.133/2021 no SRP (Arts. 82 a 86): 1) a ata dura 1 ano, PRORROGÁVEL por mais 1 ano; 2) cabe SRP para obras padronizadas; 3) cabe SRP em dispensa e inexigibilidade!'
    }
  ],

  // Aula 11 - Contratos Administrativos (Lei nº 14.133/2021)
  11: [
    {
      sub: 'Formalização, Divulgação no PNCP e Cláusulas Exorbitantes (Arts. 94, 95 e 104 da Lei 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 94, 95 e 104',
      t: 'A divulgação no Portal Nacional de Contratações Públicas (PNCP) é condição indispensável para a eficácia do contrato e de seus aditamentos (no prazo de 20 dias úteis na licitação e 10 dias úteis na contratação direta); o instrumento de contrato é obrigatório, salvo nas dispensas em razão de valor e nas compras com entrega imediata e integral dos bens adquiridos (até 30 dias) e dos quais não resultem obrigações futuras; e constituem prerrogativas da Administração (cláusulas exorbitantes) modificar unilateralmente o contrato, extingui-lo unilateralmente, fiscalizar sua execução, aplicar sanções e ocupar provisoriamente bens móveis e imóveis.',
      f: 'Os contratos celebrados pela Administração Pública produzem plena eficácia jurídica a partir da assinatura das partes, independentemente de publicação no Portal Nacional de Contratações Públicas (PNCP).',
      exp: 'Art. 94 da Lei 14.133/2021: A divulgação no PNCP é condição de EFICÁCIA do contrato e de seus aditamentos (20 dias úteis para licitações e 10 dias úteis para contratações diretas).'
    },
    {
      sub: 'Garantias Contratuais e Seguro-Garantia com Cláusula de Retomada / Step-in (Arts. 96 a 102 da Lei 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 96 a 102',
      t: 'Caberá ao contratado optar por uma das seguintes modalidades de garantia: caução em dinheiro ou em títulos da dívida pública, seguro-garantia, fiança bancária ou título de capitalização (incluído pela Lei 14.770/2023); o limite geral da garantia é de até 5% do valor inicial do contrato (autorizado até 10% mediante justificativa de complexidade e riscos); e nas contratações de obras e serviços de engenharia de grande vulto (acima de R$ 200 milhões atualizados), poderá ser exigida a prestação de garantia na modalidade seguro-garantia, em percentual de até 30% do valor inicial do contrato, com cláusula de retomada (step-in right) obrigando a seguradora a assumir a execução e concluir o objeto em caso de inadimplemento.',
      f: 'Cabe à Administração Pública impor obrigatoriamente ao licitante vencedor a prestação de caução em dinheiro em qualquer contrato de fornecimento comum.',
      exp: 'A escolha da modalidade de garantia contratual pertence ao CONTRATADO (salvo nas obras e serviços de engenharia em que o edital exija o seguro-garantia com cláusula de retomada do art. 102).'
    },
    {
      sub: 'Duração dos Contratos Administrativos na Lei nº 14.133/2021 (Arts. 105 a 114)',
      ref: 'Lei nº 14.133/2021, Arts. 105 a 114',
      t: 'Na Lei nº 14.133/2021, a Administração poderá celebrar contratos com prazo de até 5 (cinco) anos nas hipóteses de serviços e fornecimentos contínuos, prorrogáveis sucessivamente respeitada a vigência máxima decenal (10 anos); os contratos que gerem receita para a Administração e os contratos de eficiência terão vigência de até 10 anos (sem investimento) ou de até 35 anos (com investimento); e a Administração poderá estabelecer a vigência por prazo indeterminado nos contratos em que seja usuária de serviço público oferecido em regime de monopólio.',
      f: 'A Lei nº 14.133/2021 proíbe em caráter absoluto a celebração de qualquer contrato administrativo por prazo indeterminado.',
      exp: 'Art. 109 da Lei 14.133/2021: A Administração poderá estabelecer a vigência por PRAZO INDETERMINADO nos contratos em que seja usuária de serviço público oferecido em regime de monopólio (ex: água/esgoto, energia elétrica distribuída).'
    },
    {
      sub: 'Alteração dos Contratos e Limites de Acréscimos e Supressões (Arts. 124 a 136 da Lei 14.133/2021)',
      ref: 'Lei nº 14.133/2021, Arts. 124 e 125',
      t: 'Nas alterações unilaterais qualitativas ou quantitativas, o contratado será obrigado a aceitar, nas mesmas condições contratuais, acréscimos ou supressões de até 25% do valor inicial atualizado do contrato que se fizerem nas obras, nos serviços ou nas compras, e, no caso de reforma de edifício ou de equipamento, o limite para os acréscimos será de 50% (mantido em 25% para as supressões unilaterais), não podendo as alterações transfigurar o objeto da contratação.',
      f: 'No caso de reforma de edifício ou de equipamento, a Administração pode impor unilateralmente ao contratado tanto acréscimos quanto supressões de até 50% do valor inicial do contrato.',
      exp: 'Pegadinha clássica do Art. 125 da Lei 14.133/2021: Na reforma de edifício ou equipamento, o limite de 50% aplica-se APENAS para os ACRÉSCIMOS; para as supressões unilaterais continua valendo o limite de 25%!'
    },
    {
      sub: 'Extinção dos Contratos, Atraso nos Pagamentos (2 Meses) e Sanções Administrativas (Arts. 137 e 156)',
      ref: 'Lei nº 14.133/2021, Arts. 137, § 2º e 156',
      t: 'O contratado terá direito à extinção do contrato (ou suspensão do cumprimento de suas obrigações) no caso de suspensão de execução do contrato por ordem da Administração por prazo superior a 3 meses (ou 90 dias úteis de repetidas suspensões), bem como no caso de atraso superior a 2 (dois) meses, contado da emissão da nota fiscal, dos pagamentos devidos pela Administração; e são sanções aplicáveis ao licitante ou contratado: I - advertência; II - multa (de 0,5% a 30% do valor do contrato); III - impedimento de licitar e contratar (no âmbito do ente federativo sancionador, pelo prazo máximo de 3 anos); e IV - declaração de inidoneidade para licitar ou contratar (em todos os entes federativos, pelo prazo mínimo de 3 anos e máximo de 6 anos).',
      f: 'Na Lei nº 14.133/2021, o contratado só pode suspender a execução do contrato após atraso de pagamento superior a 90 dias, e a multa contratual é limitada a 10%.',
      exp: 'Duas mudanças cruciais da Lei 14.133/2021: 1) a exceptio non adimpleti contractus por atraso de pagamento caiu de 90 dias para 2 MESES (Art. 137, § 2º, IV); 2) a multa vai de 0,5% a 30%, e a inidoneidade tem prazo determinado de 3 a 6 anos (Art. 156).'
    }
  ],

  // Aula 12 - Serviços Públicos e Concessões (Lei nº 8.987/1995)
  12: [
    {
      sub: 'Conceito, Princípios dos Serviços Públicos e Interrupção por Inadimplemento (Art. 6º da Lei 8.987/95)',
      ref: 'CF/88, Art. 175 e Lei nº 8.987/1995, Art. 6º, §§ 1º a 4º',
      t: 'Serviço adequado é o que satisfaz as condições de regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia na sua prestação e modicidade das tarifas; não caracteriza descontinuidade do serviço a sua interrupção em situação de emergência ou após prévio aviso, quando motivada por razões de ordem técnica ou de segurança das instalações, ou por inadimplemento do usuário, considerado o interesse da coletividade (não podendo a interrupção por inadimplemento iniciar-se na sexta-feira, no sábado ou no domingo, nem em feriado ou no dia anterior a feriado - Lei 14.015/2020).',
      f: 'A concessionária de energia elétrica pode cortar o fornecimento do usuário inadimplente na sexta-feira à tarde sem qualquer aviso prévio.',
      exp: 'Art. 6º, § 4º da Lei 8.987/95 (incluído pela Lei 14.015/2020): A interrupção do serviço por inadimplemento exige prévio aviso e NÃO poderá iniciar-se na sexta-feira, no sábado, no domingo, em feriado ou na véspera de feriado!'
    },
    {
      sub: 'Concessão de Serviço Público vs. Permissão de Serviço Público (Art. 2º e 40 da Lei 8.987/95)',
      ref: 'Lei nº 8.987/1995, Arts. 2º, II, III e IV e 40; Lei nº 14.133/2021',
      t: 'A concessão de serviço público é a delegação de sua prestação, feita pelo poder concedente, mediante licitação, na modalidade concorrência ou diálogo competitivo, a pessoa jurídica ou consórcio de empresas que demonstre capacidade para seu desempenho, por sua conta e risco e por prazo determinado; já a permissão de serviço público é a delegação, a título precário, mediante licitação, feita pelo poder concedente à pessoa física ou jurídica, sendo formalizada mediante contrato de adesão.',
      f: 'A concessão de serviço público pode ser outorgada a pessoa física individual sem licitação.',
      exp: 'Concessão = apenas Pessoa Jurídica ou consórcio de empresas (Concorrência ou Diálogo Competitivo); Permissão = Pessoa Física OU Jurídica (qualquer modalidade licitatória, contrato de adesão).'
    },
    {
      sub: 'Política Tarifária, Receitas Alternativas e Equilíbrio Econômico-Financeiro (Arts. 9º a 13 da Lei 8.987/95)',
      ref: 'Lei nº 8.987/1995, Arts. 9º a 13',
      t: 'A tarifa não será subordinada à legislação específica anterior e seu valor será preservado pelas regras de revisão e reajuste; não é obrigatória a previsão de tarifa mínima para que o serviço seja concedido, e o poder concedente poderá prever, em favor da concessionária, no edital de licitação, a possibilidade de outras fontes provenientes de receitas alternativas, complementares, acessórias ou de projetos associados, com ou sem exclusividade, com vistas a favorecer a modicidade das tarifas; ademais, ressalvados os impostos sobre a renda, a criação, alteração ou extinção de quaisquer tributos ou encargos legais, após a apresentação da proposta, quando comprovado seu impacto, implicará a revisão da tarifa, para mais ou para menos.',
      f: 'O aumento da alíquota do Imposto de Renda da Pessoa Jurídica (IRPJ) dá direito automático à concessionária de exigir revisão extraordinária da tarifa cobrada dos usuários.',
      exp: 'Art. 9º, § 3º da Lei 8.987/95: Ressalvados os impostos sobre a RENDA (IRPJ), a criação, alteração ou extinção de tributos após a proposta gera revisão tarifária (fato do príncipe).'
    },
    {
      sub: 'Intervenção na Concessão e Subconcessão (Arts. 26 e 32 a 34 da Lei 8.987/95)',
      ref: 'Lei nº 8.987/1995, Arts. 26 e 32 a 34',
      t: 'É admitida a subconcessão, nos termos previstos no contrato de concessão, desde que expressamente autorizada pelo poder concedente e sempre precedida de concorrência; por outro lado, o poder concedente poderá intervir na concessão, com o fim de assegurar a adequação na prestação do serviço, por decreto do poder concedente, que conterá a designação do interventor, o prazo da intervenção e os objetivos e limites da medida, devendo ser instaurado procedimento administrativo em 30 dias e concluído no prazo de até 180 dias, sob pena de considerar-se inválida a intervenção.',
      f: 'A intervenção do poder concedente na concessionária extingue imediatamente o contrato de concessão e dispensa a instauração de processo administrativo.',
      exp: 'A intervenção NÃO é forma de extinção da concessão (é medida acautelatória temporária, com instauração de processo em 30 dias e conclusão em 180 dias).'
    },
    {
      sub: 'Formas de Extinção da Concessão: Advento do Termo, Encampação, Caducidade, Rescisão, Anulação e Falência (Art. 35)',
      ref: 'Lei nº 8.987/1995, Arts. 35 a 39',
      t: 'Extingue-se a concessão por: I - advento do termo contratual (com reversão dos bens reversíveis); II - encampação (retomada do serviço durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização); III - caducidade (inexecução total ou parcial do contrato por culpa da concessionária, declarada por decreto após processo administrativo, sem necessidade de lei nem de indenização prévia); IV - rescisão (por iniciativa da concessionária, no caso de descumprimento das normas contratuais pelo poder concedente, mediante ação judicial especialmente intentada para esse fim); V - anulação (ilegalidade); e VI - falência ou extinção da empresa.',
      f: 'Quando a concessionária comete faltas graves na prestação do serviço público, o poder concedente extingue o contrato por encampação mediante lei específica e indenização prévia.',
      exp: 'Distinção clássica na Lei 8.987/95: Retomada por INTERESSE PÚBLICO (sem culpa da concessionária) = ENCAMPAÇÃO (exige lei específica + indenização prévia); Extinção por INADIMPLEMENTO/CULPA da concessionária = CADUCIDADE (por decreto após PAD, indenização posterior descontadas as multas)!'
    }
  ],
  // Aula 13 - Parcerias Público-Privadas (PPPs - Lei nº 11.079/2004)
  13: [
    {
      sub: 'Modalidades de PPP: Concessão Patrocinada vs. Concessão Administrativa (Art. 2º da Lei 11.079/2004)',
      ref: 'Lei nº 11.079/2004, Art. 2º, §§ 1º e 2º',
      t: 'Concessão patrocinada é a concessão de serviços públicos ou de obras públicas de que trata a Lei 8.987/95, quando envolver, adicionalmente à tarifa cobrada dos usuários, contraprestação pecuniária do parceiro público ao parceiro privado; já a concessão administrativa é o contrato de prestação de serviços de que a Administração Pública seja a usuária direta ou indireta, ainda que envolva execução de obra ou fornecimento e instalação de bens (remunerada integralmente pelo Estado, sem cobrança de tarifa do usuário).',
      f: 'Na concessão administrativa, a remuneração do parceiro privado provém exclusivamente da tarifa paga diretamente pelos cidadãos usuários.',
      exp: 'Patrocinada = Tarifa do usuário + Contraprestação estatal; Administrativa = Administração é usuária direta ou indireta (100% paga pelo parceiro público, sem tarifa).'
    },
    {
      sub: 'Vedações Legais à Celebração de PPP: Valor Mínimo, Prazo e Objeto (Art. 2º, § 4º da Lei 11.079/2004)',
      ref: 'Lei nº 11.079/2004, Art. 2º, § 4º (com redação da Lei nº 13.529/2017) e Art. 5º, I',
      t: 'É vedada a celebração de contrato de parceria público-privada: I - cujo valor do contrato seja inferior a R$ 10.000.000,00 (dez milhões de reais); II - cujo período de prestação do serviço seja inferior a 5 (cinco) anos (nem superior a 35 anos, incluindo eventual prorrogação); ou III - que tenha como objeto único o fornecimento de mão de obra, o fornecimento e instalação de equipamentos ou a execução de obra pública.',
      f: 'O valor mínimo exigido pela Lei nº 11.079/2004 para celebração de PPP é de R$ 20.000.000,00 e o prazo máximo é de 50 anos.',
      exp: 'Com a Lei 13.529/2017, o valor mínimo das PPPs caiu de R$ 20 milhões para R$ 10.000.000,00 (dez milhões de reais), e o prazo deve situar-se entre 5 e 35 anos.'
    },
    {
      sub: 'Repartição Objetiva de Riscos e Momento da Contraprestação Pública (Arts. 4º, VI, 5º, III e 7º)',
      ref: 'Lei nº 11.079/2004, Arts. 4º, VI, 5º, III e 7º',
      t: 'Nas PPPs, há repartição objetiva de riscos entre as partes, inclusive os referentes a caso fortuito, força maior, fato do príncipe e álea econômica extraordinária; ademais, a contraprestação da Administração Pública será obrigatoriamente precedida da disponibilização do serviço objeto do contrato de parceria público-privada (admitindo-se o pagamento proporcional à parcela fruível disponibilizada e o aporte de recursos na fase de investimentos para construção ou aquisição de bens reversíveis).',
      f: 'Na parceria público-privada, assim como na concessão comum, todos os riscos extraordinários recaem exclusivamente sobre a empresa concessionária privada.',
      exp: 'Diferencial essencial da PPP (Art. 5º, III): repartição objetiva dos riscos entre o parceiro público e o privado, inclusive caso fortuito, força maior e fato do príncipe.'
    },
    {
      sub: 'Autorização Legislativa na Concessão Patrocinada (> 70%) e Sociedade de Propósito Específico (SPE)',
      ref: 'Lei nº 11.079/2004, Art. 9º e Art. 10, § 3º',
      t: 'As concessões patrocinadas em que mais de 70% da remuneração do parceiro privado for paga pela Administração Pública dependerão de autorização legislativa específica; e antes da celebração do contrato, deverá ser constituída Sociedade de Propósito Específico (SPE), incumbida de implantar e gerir o objeto da parceria, sendo vedado à Administração Pública ser titular da maioria do capital votante da SPE (salvo eventual aquisição por instituição financeira controlada pelo Poder Público em caso de inadimplemento de contratos de financiamento).',
      f: 'A Administração Pública deve deter obrigatoriamente no mínimo 51% das ações ordinárias com direito a voto da Sociedade de Propósito Específico (SPE) na PPP.',
      exp: 'Art. 9º, § 4º da Lei 11.079/2004: É VEDADO à Administração Pública ser titular da maioria do capital votante das Sociedades de Propósito Específico (SPE).'
    },
    {
      sub: 'Garantias do Parceiro Público ao Parceiro Privado e Modalidades Licitatórias na PPP (Arts. 8º e 10)',
      ref: 'Lei nº 11.079/2004, Arts. 8º e 10 (com redação da Lei nº 14.133/2021)',
      t: 'As obrigações pecuniárias contraídas pela Administração Pública em contrato de PPP poderão ser garantidas mediante vinculação de receitas (observado o art. 167, IV da CF), instituição ou utilização de fundos especiais, contratação de seguro-garantia com companhias seguradoras que não sejam controladas pelo Poder Público, ou garantia prestada por fundo garantidor ou empresa estatal criada para essa finalidade; e a contratação de PPP será precedida de licitação na modalidade concorrência ou diálogo competitivo.',
      f: 'Os contratos de parceria público-privada podem ser celebrados mediante licitação na modalidade pregão ou leilão.',
      exp: 'Art. 10 da Lei 11.079/2004 (atualizado pela Lei 14.133/2021): A PPP exige licitação na modalidade CONCORRÊNCIA ou DIÁLOGO COMPETITIVO.'
    }
  ],

  // Aula 14 - Responsabilidade Civil do Estado
  14: [
    {
      sub: 'Teoria do Risco Administrativo (Art. 37, § 6º da CF/88) e Pessoas Abrangidas',
      ref: 'CF/88, Art. 37, § 6º e Jurisprudência do STF (RE 591.874)',
      t: 'As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão objetivamente (independentemente de dolo ou culpa, pela Teoria do Risco Administrativo) pelos danos que seus agentes, nessa qualidade, causarem a terceiros (usuários ou não usuários do serviço público - RE 591.874), assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa (responsabilidade subjetiva do agente).',
      f: 'As empresas públicas e sociedades de economia mista exploradoras de atividade econômica em sentido estrito respondem objetivamente pelo Art. 37, § 6º da Constituição.',
      exp: 'O Art. 37, § 6º abrange apenas as PJs de direito público e as PJs de direito privado PRESTADORAS DE SERVIÇOS PÚBLICOS (as exploradoras de atividade econômica respondem pelo direito privado/CDC).'
    },
    {
      sub: 'Excludentes da Responsabilidade Objetiva vs. Teoria do Risco Integral',
      ref: 'CF/88, Art. 21, XXIII, "d" e Jurisprudência do STF/STJ',
      t: 'Na Teoria do Risco Administrativo (regra geral no Brasil), admitem-se as excludentes do nexo causal: culpa exclusiva da vítima, caso fortuito ou força maior externo e fato exclusivo de terceiro (enquanto a culpa concorrente atenua a indenização); excepcionalmente, adota-se a Teoria do Risco Integral (que não admite excludentes) nos danos nucleares (art. 21, XXIII, "d" da CF), danos ambientais e atos terroristas/guerra a bordo de aeronaves brasileiras.',
      f: 'Na Teoria do Risco Administrativo adotada como regra no Art. 37, § 6º da CF/88, a culpa exclusiva da vítima não afasta o dever de indenizar do Estado.',
      exp: 'No Risco Administrativo, a culpa exclusiva da vítima rompe o nexo de causalidade e exclui a responsabilidade estatal.'
    },
    {
      sub: 'Responsabilidade por Omissão Estatal (Genérica vs. Específica) e Custódia de Presos (Tema 592 STF)',
      ref: 'STF (RE 841.526 - Tema 592 e RE 608.880 - Tema 362)',
      t: 'Na omissão genérica do Estado, aplica-se a responsabilidade subjetiva fundada na culpa anônima do serviço (faute du service: o serviço não funcionou, funcionou mal ou com atraso); já na omissão específica (quando o Estado tem dever individualizado de guarda e proteção de pessoas ou coisas sob sua custódia, como presos em presídios ou alunos em escolas públicas), a responsabilidade é objetiva (Tema 592 STF); por outro lado, o Estado não responde civilmente por atos praticados por foragido do sistema prisional, salvo se demonstrado nexo causal direto e imediato entre o momento da fuga e o delito (Tema 362 STF).',
      f: 'O Estado responde objetivamente por qualquer roubo praticado por preso foragido meses após a sua evasão do estabelecimento prisional.',
      exp: 'Tema 362 do STF: Nos termos do art. 37, § 6º da CF, NÃO se caracteriza a responsabilidade civil objetiva do Estado por danos decorrentes de crime praticado por pessoa foragida do sistema prisional, quando não demonstrado o nexo causal direto entre o momento da fuga e a conduta praticada.'
    },
    {
      sub: 'Tese da Dupla Garantia (Tema 940 do STF) e Responsabilidade de Tabeliães (Tema 777 do STF)',
      ref: 'STF (RE 1.027.633 - Tema 940 e RE 842.846 - Tema 777)',
      t: 'Pela tese da dupla garantia (Tema 940 do STF), a ação por danos causados por agente público deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para a ação o autor do ato, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa; e no Tema 777, o STF fixou que o Estado responde, objetivamente, pelos atos dos tabeliães e registradores oficiais que, no exercício de suas funções, causem dano a terceiros, assentado o dever de regresso contra o responsável, nos casos de dolo ou culpa.',
      f: 'A vítima de acidente causado por viatura oficial pode escolher livremente ajuizar a ação de indenização diretamente contra o motorista servidor público.',
      exp: 'Tema 940 do STF: É vedado à vítima demandar diretamente o agente público causador do dano (legitimidade passiva exclusiva da pessoa jurídica).'
    },
    {
      sub: 'Prescrição da Pretensão Indenizatória contra a Fazenda Pública e da Ação Regressiva (Tema 666 e 897 STF)',
      ref: 'Decreto nº 20.910/1932, Art. 1º; CF/88, Art. 37, § 5º e STF (Temas 666 e 897)',
      t: 'A pretensão de reparação civil contra a Fazenda Pública prescreve em 5 (cinco) anos nos termos do art. 1º do Decreto nº 20.910/1932 (Tema 553 do STJ); quanto ao ressarcimento ao erário na ação regressiva (art. 37, § 5º da CF), o STF fixou que é prescritível a ação de reparação de danos à Fazenda Pública decorrente de ilícito civil comum (Tema 666), sendo imprescritíveis apenas as ações de ressarcimento ao erário fundadas na prática de ato doloso tipificado na Lei de Improbidade Administrativa (Tema 897).',
      f: 'Todas as ações de ressarcimento ao erário decorrentes de acidentes de trânsito culposos envolvendo viaturas públicas são imprescritíveis.',
      exp: 'Tema 666 e Tema 897 do STF: Ilícito civil comum ou culposo = PRESCRITÍVEL; Ato DOLOSO de improbidade administrativa = IMPRESCRITÍVEL o ressarcimento ao erário!'
    }
  ],

  // Aula 15 - Controle da Administração Pública
  15: [
    {
      sub: 'Classificação do Controle: Interno vs. Externo, Prévio/Concomitante/Posterior e de Legalidade vs. Mérito',
      ref: 'CF/88, Arts. 70 a 75',
      t: 'Quanto ao órgão que o exerce, o controle é interno (exercido dentro de cada um dos Poderes sobre seus próprios atos e agentes) ou externo (exercido por um Poder sobre outro, como o Congresso Nacional com auxílio do Tribunal de Contas e o Poder Judiciário); quanto ao aspecto controlado, o controle de mérito (conveniência e oportunidade) compete à própria Administração (e excepcionalmente ao Legislativo nas hipóteses constitucionais expressas), enquanto o Poder Judiciário exerce exclusivamente controle de legalidade e legitimidade sobre os atos dos demais Poderes.',
      f: 'O Sistema de Controle Interno é privativo do Poder Executivo, o qual fiscaliza internamente os atos administrativos dos Poderes Legislativo e Judiciário.',
      exp: 'Art. 70 e 74 da CF/88: Os Poderes Legislativo, Executivo e Judiciário manterão, de forma integrada, sistema de controle interno próprio de cada Poder.'
    },
    {
      sub: 'Recursos Administrativos, Reformatio in Pejus e Prescrição (Lei nº 9.784/1999)',
      ref: 'Lei nº 9.784/1999, Arts. 56 a 65',
      t: 'Das decisões administrativas cabe recurso, em face de razões de legalidade e de mérito, dirigido à autoridade que proferiu a decisão (que se não a reconsiderar em 5 dias o encaminhará à autoridade superior), tramitando no máximo por três instâncias e independendo de caução; no recurso ordinário admite-se a reformatio in pejus (agravamento da situação do recorrente, mediante cientificação prévia para alegações - art. 64, parágrafo único), ao passo que na Revisão Administrativa de sanção (art. 65, quando surgirem fatos novos) NÃO pode resultar agravamento da sanção.',
      f: 'Na revisão administrativa de processo sancionador prevista no Art. 65 da Lei nº 9.784/1999, a autoridade julgadora pode agravar a penalidade anteriormente imposta ao servidor.',
      exp: 'Diferença crucial na Lei 9.784/99: No RECURSO administrativo (Art. 64, parágrafo único) CABE reformatio in pejus (com intimação prévia); na REVISÃO do processo sancionador (Art. 65, parágrafo único) é VEDADO o agravamento da sanção!'
    },
    {
      sub: 'Controle Parlamentar Direto e Controle pelos Tribunais de Contas (Art. 49, V e X e Art. 71 da CF/88)',
      ref: 'CF/88, Arts. 49, V, IX e X, 71 e 75; Súmula 653 do STF',
      t: 'Compete exclusivamente ao Congresso Nacional sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa (art. 49, V); os Tribunais de Contas Estaduais (TCEs) são compostos por 7 (sete) Conselheiros, sendo 4 escolhidos pela Assembleia Legislativa e 3 pelo Governador do Estado (sendo um de livre escolha e dois alternadamente dentre auditores e membros do Ministério Público junto ao Tribunal, indicados em lista tríplice - Súmula 653 STF).',
      f: 'Nos Tribunais de Contas dos Estados, dois terços dos sete Conselheiros são nomeados livremente pelo Governador do Estado e apenas um terço pela Assembleia Legislativa.',
      exp: 'Súmula 653 do STF: Enquanto no TCU (9 Ministros) 2/3 (6) são do Congresso e 1/3 (3) do Presidente, nos TCEs (7 Conselheiros) 4 são da Assembleia Legislativa e 3 são do Governador (1 livre + 1 auditor + 1 membro do MPC).'
    },
    {
      sub: 'Julgamento das Contas de Prefeitos pelo Poder Legislativo Municipal (Tema 157 do STF)',
      ref: 'CF/88, Art. 31, § 2º e STF (RE 848.826 - Tema 157)',
      t: 'O parecer prévio, emitido pelo órgão competente (Tribunal de Contas) sobre as contas que o Prefeito deve anualmente prestar, só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal; segundo o STF (Tema 157), tanto para as contas anuais de governo quanto para as contas de gestão em que o Prefeito atue como ordenador de despesas, a competência para o julgamento definitivo (para fins de inelegibilidade da Lei da Ficha Limpa) é exclusiva da Câmara Municipal, funcionando o Tribunal de Contas apenas mediante parecer prévio.',
      f: 'Quando o Prefeito Municipal atua pessoalmente como ordenador de despesas, o Tribunal de Contas julga em definitivo suas contas sem necessidade de deliberação da Câmara de Vereadores.',
      exp: 'No RE 848.826 (Tema 157 da Repercussão Geral), o STF decidiu que é exclusivamente da Câmara Municipal a competência para julgar as contas de governo e as contas de gestão dos Prefeitos.'
    },
    {
      sub: 'Controle Judicial dos Atos Administrativos e Limites sobre o Mérito Administrativo',
      ref: 'CF/88, Art. 5º, XXXV e Jurisprudência do STF/STJ',
      t: 'O Poder Judiciário pode controlar qualquer ato administrativo (vinculado ou discricionário) sob o prisma da legalidade e da legitimidade (inclusive aferindo a conformidade do motivo e do objeto com os princípios da razoabilidade, proporcionalidade e moralidade), podendo anulá-lo quando ilegal, mas não pode invadir o núcleo legítimo do mérito administrativo (conveniência e oportunidade) nem substituir a banca examinadora na correção de questões de concurso público (salvo flagrante ilegalidade de cobrança de tema fora do edital - Tema 485 do STF).',
      f: 'Em ação judicial proposta por candidato de concurso público, o juiz pode reavaliar os critérios de correção da banca examinadora e substituir a nota atribuída à prova discursiva.',
      exp: 'Tema 485 do STF: Não compete ao Poder Judiciário, no controle de legalidade, substituir a banca examinadora para avaliar respostas dadas pelos candidatos e notas a elas atribuídas (salvo compatibilidade com o conteúdo programático do edital).'
    }
  ],

  // Aula 16 - Improbidade Administrativa (Lei nº 8.429/1992 com a Lei nº 14.230/2021)
  16: [
    {
      sub: 'Exigência de Dolo Específico e Extinção da Modalidade Culposa (Lei nº 14.230/2021 e Tema 1199 do STF)',
      ref: 'Lei nº 8.429/1992 (redação da Lei nº 14.230/2021), Art. 1º, §§ 1º a 3º e STF (Tema 1199)',
      t: 'Consideram-se atos de improbidade administrativa as condutas dolosas tipificadas nos arts. 9º, 10 e 11 da Lei nº 8.429/1992, exigindo-se sempre o dolo específico (vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11, não bastando a voluntariedade do agente nem o mero exercício da função); a Lei nº 14.230/2021 extinguiu a modalidade culposa de improbidade administrativa.',
      f: 'Os atos de improbidade administrativa que causam prejuízo ao erário (Art. 10) continuam sendo punidos a título de culpa grave por imprudência ou negligência.',
      exp: 'Com a Lei 14.230/2021 (e Tema 1199 do STF), NÃO existe mais improbidade culposa no Brasil; todas as modalidades (arts. 9º, 10 e 11) exigem DOLO ESPECÍFICO!'
    },
    {
      sub: 'Sujeitos Ativos, Terceiros Particulares, Nepotismo e Rol Taxativo do Art. 11 (Lei 14.230/2021)',
      ref: 'Lei nº 8.429/1992, Arts. 2º, 3º e 11',
      t: 'O particular (pessoa física ou jurídica) que induza ou concorra dolosamente para a prática do ato de improbidade responde nos termos da Lei 8.429/92 (mas não pode responder sozinho na ação sem vínculo com agente público, e se houver acordo ou sanção na Lei Anticorrupção 12.846/2013 não sofre bis in idem pelo mesmo fato); ademais, após a Lei 14.230/2021, o rol de atos que atentam contra os princípios da Administração Pública (Art. 11) passou a ser TAXATIVO (e não mais exemplificativo), exigindo lesividade relevante.',
      f: 'Mesmo após a Lei nº 14.230/2021, o caput do Art. 11 da Lei de Improbidade continua contendo um rol meramente exemplificativo de condutas.',
      exp: 'Mudança fundamental na Lei 14.230/2021: Enquanto os arts. 9º e 10 permanecem exemplificativos ("notadamente"), o Art. 11 (princípios) passou a ter rol TAXATIVO ("caracterizada por uma das seguintes condutas")!'
    },
    {
      sub: 'Sanções da Improbidade Administrativa e Prazos Máximos (Art. 12 da Lei nº 8.429/1992)',
      ref: 'CF/88, Art. 37, § 4º e Lei nº 8.429/1992, Art. 12, I, II e III (Lei 14.230/2021)',
      t: 'Independentemente do ressarcimento integral do dano patrimonial (se efetivo), as sanções máximas do art. 12 são: I - Enriquecimento Ilícito (art. 9º): perda dos bens acrescidos ilicitamente, perda da função pública, suspensão dos direitos políticos até 14 anos, multa equivalente ao valor do acréscimo e proibição de contratar por até 14 anos; II - Lesão ao Erário (art. 10): perda dos bens (se concorrer), perda da função, suspensão dos direitos políticos até 12 anos, multa equivalente ao valor do dano e proibição de contratar por até 12 anos; e III - Princípios (art. 11): multa de até 24 vezes a remuneração e proibição de contratar por até 4 anos (NÃO cabendo mais perda da função nem suspensão de direitos políticos no art. 11!).',
      f: 'A prática de ato de improbidade que atenta contra os princípios da administração pública (Art. 11) continua sendo punida com perda da função pública e suspensão dos direitos políticos por 5 anos.',
      exp: 'Atenção máxima ao Art. 12 após a Lei 14.230/2021: No Art. 11 (Princípios) NÃO há mais perda da função pública nem suspensão dos direitos políticos (apenas multa de até 24x a remuneração e proibição de contratar até 4 anos)! E nos arts. 9º e 10 os tetos passaram para 14 anos e 12 anos.'
    },
    {
      sub: 'Legitimidade Ativa Concorrente (MP e Pessoa Jurídica Interessada - ADIs 7042 e 7043) e ANPC',
      ref: 'Lei nº 8.429/1992, Arts. 17 e 17-B; STF (ADIs 7.042 e 7.043)',
      t: 'No julgamento das ADIs 7.042 e 7.043, o Supremo Tribunal Federal declarou a inconstitucionalidade da exclusividade do Ministério Público e restabeleceu a legitimidade ativa concorrente e disjuntiva entre o Ministério Público e as pessoas jurídicas interessadas (União, Estados, DF, Municípios e suas entidades) para a propositura da ação de improbidade administrativa e para a celebração de Acordo de Não Persecução Cível (ANPC).',
      f: 'O Supremo Tribunal Federal confirmou que apenas o Ministério Público possui legitimidade para propor ação de improbidade administrativa, excluindo os Estados e Municípios lesados.',
      exp: 'Nas ADIs 7.042 e 7.043 (2022), o STF derrubou a exclusividade do MP criada pela Lei 14.230/21 e garantiu legitimidade concorrente também à pessoa jurídica lesada.'
    },
    {
      sub: 'Prescrição de 8 Anos e Prescrição Intercorrente de 4 Anos (Art. 23 da Lei nº 8.429/1992)',
      ref: 'Lei nº 8.429/1992, Art. 23, caput e §§ 4º a 8º (Lei 14.230/2021) e Tema 1199 do STF',
      t: 'A ação para a aplicação das sanções previstas na Lei de Improbidade prescreve em 8 (oito) anos, contados a partir da data da ocorrência do fato ou, no caso de infrações permanentes, do dia em que cessou a permanência; interrompida a prescrição (ex: pelo ajuizamento da ação ou pela publicação da sentença condenatória), o prazo recomeça a correr do dia da interrupção pela metade do prazo previsto no caput, isto é, em 4 (quatro) anos (prescrição intercorrente), regime que segundo o STF (Tema 1199) aplica-se apenas a partir da publicação da Lei 14.230/2021.',
      f: 'O prazo prescricional da ação de improbidade contra Prefeito ou Governador continua sendo de 5 anos contados apenas após o término do mandato eletivo.',
      exp: 'Com a Lei 14.230/2021, o prazo prescricional foi unificado em 8 anos a contar do FATO (com prescrição intercorrente pela metade = 4 anos entre os marcos interruptivos).'
    }
  ],

  // Aula 17 - Bens Públicos
  17: [
    {
      sub: 'Conceito e Critério da Titularidade (Art. 98 do Código Civil) vs. Bens Afetados de Particulares',
      ref: 'Código Civil (Lei nº 10.406/2002), Art. 98 e Jurisprudência do STF/STJ',
      t: 'Pelo Código Civil (art. 98), são públicos os bens do domínio nacional pertencentes às pessoas jurídicas de direito público interno (União, Estados, DF, Municípios, autarquias e fundações públicas de direito público), sendo todos os outros particulares; contudo, a doutrina e a jurisprudência estendem as garantias da impenhorabilidade e não oneração aos bens pertencentes a pessoas jurídicas de direito privado (estatais e concessionárias) enquanto estiverem diretamente afetados à prestação de serviço público.',
      f: 'Todos os bens pertencentes a sociedades de economia mista exploradoras de atividade econômica bancária são bens públicos impenhoráveis pelo Art. 98 do Código Civil.',
      exp: 'Os bens das empresas públicas e sociedades de economia mista são formalmente bens privados, gozando de impenhorabilidade apenas quando comprovadamente afetados à prestação de serviço público essencial.'
    },
    {
      sub: 'Classificação quanto à Destinação: Bens de Uso Comum do Povo, de Uso Especial e Dominicais (Art. 99 CC)',
      ref: 'Código Civil, Arts. 99 e 100',
      t: 'Classificam-se os bens públicos em: I - de uso comum do povo (rios, mares, estradas, ruas e praças - afetados ao uso geral da coletividade); II - de uso especial (edifícios ou terrenos destinados a serviço ou estabelecimento da administração, inclusive os de suas autarquias - afetados a uma finalidade administrativa específica); e III - dominicais ou dominiais (que constituem o patrimônio das pessoas jurídicas de direito público como objeto de direito pessoal ou real, sem destinação pública específica - desafetados, ex: terras devolutas e prédios desativados).',
      f: 'O prédio onde funciona a sede da Secretaria da Fazenda Estadual é classificado como bem público dominical.',
      exp: 'Prédios de repartições públicas, escolas, hospitais, viaturas e cemitérios públicos são bens de USO ESPECIAL; ruas e praças são de USO COMUM DO POVO; terras devolutas e imóveis desafetados são DOMINICAIS.'
    },
    {
      sub: 'Regime Jurídico dos Bens Públicos: Inalienabilidade Condicionada, Impenhorabilidade, Imprescritibilidade e Não Onerabilidade',
      ref: 'CF/88, Arts. 100, 183, § 3º e 191, parágrafo único; Código Civil, Arts. 100 a 102; Súmula 340 do STF',
      t: 'Os bens públicos de uso comum do povo e os de uso especial são inalienáveis, enquanto conservarem a sua qualificação (exigindo prévia desafetação para passar a dominicais), ao passo que os bens dominicais podem ser alienados observadas as exigências da lei (alienabilidade condicionada); ademais, todos os bens públicos (inclusive os dominicais!) são impenhoráveis (pagamentos via precatórios), imprescritíveis (jamais sujeitos a usucapião - Súmula 340 STF) e não oneráveis por direitos reais de garantia (penhor, hipoteca ou anticrese).',
      f: 'Os bens públicos dominicais, por não possuírem afetação pública, podem ser objeto de usucapião e de penhora judicial direta.',
      exp: 'Atenção máxima: Mesmo os bens públicos DOMINICAIS são impenhoráveis, imprescritíveis (não cabe usucapião - Súmula 340 STF e Súmula 619 STJ) e não oneráveis!'
    },
    {
      sub: 'Requisitos para Alienação de Bens Públicos na Lei nº 14.133/2021 (Art. 76)',
      ref: 'Lei nº 14.133/2021, Art. 76, I e II',
      t: 'Na Lei nº 14.133/2021 (art. 76), a alienação de bens da Administração Pública, subordinada à existência de interesse público devidamente justificado, será precedida de avaliação e obedecerá às seguintes normas: tratando-se de bens IMÓVEIS (para a Administração Direta, autarquias e fundações), exigirá autorização legislativa e licitação na modalidade LEILÃO (dispensada a licitação em casos como dação em pagamento, doação ou venda a outro órgão/entidade pública e investidura); tratando-se de bens MÓVEIS, exigirá avaliação e licitação na modalidade LEILÃO (dispensada autorização legislativa).',
      f: 'Na Nova Lei de Licitações (Lei nº 14.133/2021), a alienação de bens imóveis públicos continua exigindo obrigatoriamente a modalidade concorrência.',
      exp: 'Mudança importantíssima da Lei 14.133/2021 (Art. 76, I): A modalidade licitatória para alienação tanto de bens móveis quanto de bens IMÓVEIS públicos passou a ser o LEILÃO (e não mais a concorrência da antiga Lei 8.666)!'
    },
    {
      sub: 'Uso Privativo de Bem Público por Particular: Autorização, Permissão e Concessão de Uso e Súmula 619 STJ',
      ref: 'Doutrina de Direito Administrativo e Súmula 619 do STJ',
      t: 'O uso privativo anormal ou especial de bem público por particular formaliza-se mediante: Autorização de uso (ato unilateral, discricionário e precário, sem licitação, no interesse predominante do particular para eventos de curtíssima duração); Permissão de uso (ato unilateral, discricionário e precário, no interesse público e privado, ex: banca de jornal); ou Concessão de uso / Concessão de direito real de uso (contrato bilateral, precedido de licitação e com prazo determinado); ademais, a ocupação indevida de bem público configura mera detenção, de natureza precária, insuscetível de retenção ou indenização por acessões e benfeitorias (Súmula 619 do STJ).',
      f: 'O particular que invade e constrói sem autorização em terreno público tem direito de retenção do imóvel e indenização pelas benfeitorias úteis realizadas.',
      exp: 'Súmula 619 do STJ: A ocupação indevida de bem público configura mera detenção, de natureza precária, sendo insuscetível de retenção ou indenização por acessões e benfeitorias.'
    }
  ],

  // Aula 18 - Intervenção do Estado na Propriedade
  18: [
    {
      sub: 'Modalidades Restritivas vs. Modalidade Supressiva (Desapropriação) de Intervenção na Propriedade',
      ref: 'Doutrina de Direito Administrativo e CF/88',
      t: 'As modalidades restritivas de intervenção na propriedade (que retiram apenas algumas faculdades do domínio sem transferir a propriedade: limitação administrativa, servidão administrativa, requisição administrativa, ocupação temporária e tombamento) preservam a titularidade do bem com o particular; já a desapropriação é a única modalidade supressiva (originária de aquisição da propriedade pelo Poder Público).',
      f: 'A servidão administrativa e o tombamento são formas supressivas de intervenção que transferem a propriedade do imóvel para o nome do Estado no cartório de imóveis.',
      exp: 'Apenas a DESAPROPRIAÇÃO retira o domínio (propriedade) do particular; todas as demais são modalidades restritivas.'
    },
    {
      sub: 'Limitação Administrativa vs. Servidão Administrativa (Decreto-Lei nº 3.365/1941, Art. 40)',
      ref: 'Decreto-Lei nº 3.365/1941, Art. 40 e Súmula 56 do STJ',
      t: 'A limitação administrativa é imposição geral, abstrata, unilateral e gratuita (decorrente do poder de polícia, atingindo proprietários indeterminados em prol da função social, sem direito a indenização salvo se aniquilar o conteúdo econômico configurando desapropriação indireta - ex: gabarito máximo de altura de prédios); já a servidão administrativa é direito real público sobre coisa alheia (imóvel específico determinado) em favor de um serviço ou obra pública (ex: passagem de linhas de transmissão elétrica), instituída por acordo ou sentença judicial e gerando indenização se houver prejuízo efetivo (incidindo juros compensatórios na servidão administrativa - Súmula 56 STJ).',
      f: 'Toda limitação administrativa geral de zoneamento urbano gera direito automático de indenização prévia em dinheiro a todos os proprietários do município.',
      exp: 'Limitação administrativa = geral, abstrata e em regra GRATUITA (não indenizável); Servidão administrativa = direito real sobre imóvel específico, indenizável se causar dano/redução de valor.'
    },
    {
      sub: 'Requisição Administrativa vs. Ocupação Temporária e Tombamento (Decreto-Lei nº 25/1937)',
      ref: 'CF/88, Art. 5º, XXV e Art. 216, § 1º; Decreto-Lei nº 25/1937',
      t: 'A requisição administrativa recai sobre bens móveis, imóveis ou serviços em caso de iminente perigo público, com autoexecutoriedade e indenização ulterior somente se houver dano; a ocupação temporária utiliza terrenos não edificados vizinhos a obras públicas ou pesquisas arqueológicas; e o tombamento (proteção do patrimônio histórico, artístico e cultural, de competência comum de todos os entes) pode ser voluntário ou compulsório, provisório ou definitivo, sobre bens móveis ou imóveis (inclusive bens públicos - tombamento de ofício), não impedindo a alienação do bem privado tombado nem gerando, em regra, indenização.',
      f: 'O imóvel particular submetido a tombamento definitivo pelo IPHAN torna-se absolutamente inalienável, não podendo ser vendido a terceiros.',
      exp: 'O bem privado tombado PODE ser alienado (tendo o Decreto-Lei 25/37 previsto direito de preferência revogado pelo art. 1.072, I do CPC/2015), mas o adquirente permanece obrigado a conservar o bem e não pode destruí-lo ou descaracterizá-lo.'
    },
    {
      sub: 'Desapropriação Comum e Especial (Urbanística, Rural e Confiscatória) e Fases do Procedimento',
      ref: 'CF/88, Arts. 5º, XXIV, 182, § 4º, 184 e 243; Decreto-Lei nº 3.365/1941 e Lei nº 4.132/1962',
      t: 'A desapropriação ordinária por necessidade ou utilidade pública (caducidade do decreto declaratório em 5 anos) ou por interesse social (caducidade do decreto em 2 anos) pode ser declarada por União, Estados, DF, Municípios, DNIT e ANEEL mediante prévia e justa indenização em dinheiro; a desapropriação urbanística sancionatória (competência exclusiva do Município, art. 182, § 4º, em títulos de até 10 anos), a desapropriação para reforma agrária (competência exclusiva da União, art. 184, em TDA de até 20 anos) e a desapropriação confiscatória (competência exclusiva da União, art. 243, sem qualquer indenização para glebas com culturas ilegais de plantas psicotrópicas ou exploração de trabalho escravo - Tema 643 STF) são modalidades especiais.',
      f: 'Os Estados-membros podem decretar desapropriação por interesse social para fins de reforma agrária pagando a indenização em Títulos da Dívida Agrária.',
      exp: 'Desapropriação para reforma agrária (TDA) e desapropriação confiscatória (art. 243) são de competência EXCLUSIVA da UNIÃO; desapropriação urbanística sancionatória é exclusiva do MUNICÍPIO!'
    },
    {
      sub: 'Desapropriação por Zona, Direito de Extensão, Tredestinação, Retrocessão e Desapropriação Indireta',
      ref: 'Decreto-Lei nº 3.365/1941, Arts. 4º, 35 e 35-A; Código Civil, Art. 519; Tema 865 do STF',
      t: 'Na tredestinação lícita (mudança da destinação específica mantendo o interesse público, ex: desapropriou para escola e construiu hospital), o ato é válido e não cabe retrocessão; na tredestinação ilícita (desvio de finalidade sem dar destinação pública), surge o direito à retrocessão (que pelo art. 35 do DL 3.365/41 e STJ resolve-se em perdas e danos ou direito de preferência pelo valor atual); e a desapropriação indireta (apossamento administrativo sem devido processo legal) submete-se ao prazo prescricional de 10 (dez) anos do art. 1.238, parágrafo único do Código Civil (Tema 1019 do STJ).',
      f: 'Sempre que o Poder Público altera a finalidade original do decreto expropriatório para construir um hospital público em vez de uma escola pública, ocorre tredestinação ilícita que anula a desapropriação.',
      exp: 'Mudar de escola pública para hospital público mantém o interesse público (tredestinação LÍCITA), não gerando direito de retrocessão nem indenização adicional ao ex-proprietário.'
    }
  ],

  // Aula 19 - Convênios e Contratos de Repasse
  19: [
    {
      sub: 'Distinção Clássica entre Contrato Administrativo e Convênio Administrativo',
      ref: 'Lei nº 14.133/2021, Art. 184 e Decreto nº 11.531/2023',
      t: 'No contrato administrativo, os interesses das partes são opostos e contraditórios (a Administração quer o bem/serviço e o particular quer o lucro/preço, havendo remuneração que ingressa no patrimônio do contratado); já no convênio administrativo, os partícipes possuem interesses comuns e convergentes (mútua cooperação para alcançar um resultado de interesse público recíproco), os recursos repassados permanecem vinculados ao objeto (não constituem preço nem lucro, devendo o saldo não utilizado ser devolvido ao concedente) e qualquer partícipe pode denunciá-lo a qualquer tempo.',
      f: 'Nos convênios administrativos, os valores financeiros transferidos pelo ente concedente passam a integrar definitivamente o patrimônio livre do convenente a título de lucro contratual.',
      exp: 'Em convênios não há preço nem lucro: os recursos continuam sendo dinheiro público vinculado ao plano de trabalho, exigindo prestação de contas integral e devolução dos saldos remanescentes (inclusive rendimentos de aplicação financeira não utilizados).'
    },
    {
      sub: 'Convênio vs. Contrato de Repasse e Termo de Execução Descentralizada (TED)',
      ref: 'Decreto nº 11.531/2023 e Portaria Conjunta MGI/MF/CGU nº 33/2023',
      t: 'Convênio é o instrumento que disciplina a transferência de recursos financeiros de órgãos ou entidades da Administração Pública para órgãos ou entidades estaduais, distritais ou municipais, ou consórcios públicos, visando à execução de projeto ou atividade de interesse recíproco em regime de mútua cooperação; o Contrato de Repasse é o instrumento de interesse recíproco em que a transferência dos recursos financeiros se processa por intermédio de instituição ou agente financeiro público oficial que atua como mandatário da União (ex: Caixa Econômica Federal); e o Termo de Execução Descentralizada (TED) ajusta a descentralização de créditos entre órgãos/entidades integrantes dos Orçamentos Fiscal e da Seguridade Social da mesma esfera.',
      f: 'O Contrato de Repasse dispensa a atuação de instituição financeira oficial mandatária e aplica-se exclusivamente à compra de material de expediente.',
      exp: 'A diferença entre Convênio e Contrato de Repasse é que no Contrato de Repasse a transferência e o acompanhamento de engenharia/execução ocorrem por intermédio de instituição financeira pública mandatária (como a Caixa).'
    },
    {
      sub: 'Transferências Voluntárias na LRF (Art. 25 da LC nº 101/2000)',
      ref: 'LC nº 101/2000 (LRF), Art. 25, §§ 1º a 3º',
      t: 'Para efeito da LRF, entende-se por transferência voluntária a entrega de recursos correntes ou de capital a outro ente da Federação, a título de cooperação, auxílio ou assistência financeira, que não decorra de determinação constitucional, legal ou os destinados ao Sistema Único de Saúde; são exigências para a realização de transferência voluntária a existência de dotação específica, a observância do art. 167, X da CF (vedação para pagamento de despesas com pessoal), a comprovação pelo beneficiário de que se acha em dia quanto ao pagamento de tributos, empréstimos e prestação de contas, o cumprimento dos limites constitucionais de educação e saúde, a observância dos limites das dívidas e de despesa com pessoal e a previsão orçamentária de contrapartida; contudo, é vedada a aplicação de sanções de suspensão de transferências voluntárias às ações de educação, saúde e assistência social (§ 3º).',
      f: 'Os repasses constitucionais obrigatórios do FPE e do FPM, bem como os recursos destinados ao Sistema Único de Saúde (SUS), são classificados como transferências voluntárias pelo Art. 25 da LRF.',
      exp: 'Art. 25, caput e § 3º da LRF: Repasses constitucionais/legais e recursos do SUS NÃO são transferências voluntárias; e mesmo para as transferências voluntárias, não se suspendem as destinadas a Educação, Saúde e Assistência Social!'
    },
    {
      sub: 'Vedações na Execução de Convênios: Taxa de Administração e Pagamento a Servidores',
      ref: 'Decreto nº 11.531/2023 e Jurisprudência do TCU',
      t: 'Na celebração e execução de convênios e contratos de repasse, é vedada a realização de despesas a título de taxa de administração, de gerência ou similar, bem como o pagamento, a qualquer título, a servidor ou empregado público integrante de quadro de pessoal de órgão ou entidade pública da administração direta ou indireta, salvo nas hipóteses previstas em leis específicas e na LDO.',
      f: 'Nos convênios celebrados entre o Estado e os Municípios, o convenente pode reter livremente 20% do valor repassado a título de taxa de administração pura.',
      exp: 'A cobrança de taxa de administração genérica e o desvio de finalidade (ou uso em finalidade diversa da pactuada no plano de trabalho) são expressamente proibidos nos convênios.'
    },
    {
      sub: 'Prestação de Contas, Tomada de Contas Especial (TCE) e Aplicação Subsidiária da Lei nº 14.133/2021',
      ref: 'Lei nº 14.133/2021, Art. 184 e Jurisprudência do TCU',
      t: 'Nos termos do art. 184 da Lei nº 14.133/2021, aplicam-se as disposições da Nova Lei de Licitações, no que couber e na ausência de norma específica, aos convênios, acordos, ajustes e outros instrumentos congêneres celebrados por órgãos e entidades da Administração Pública; a omissão no dever de prestar contas ou a não comprovação da boa e regular aplicação dos recursos repassados enseja a instauração de Tomada de Contas Especial (TCE) para apuração dos fatos, identificação dos responsáveis e quantificação do dano.',
      f: 'A ausência de prestação de contas dos recursos recebidos por convênio gera apenas advertência verbal ao gestor, sem obrigação de devolução dos valores.',
      exp: 'Quem gere recursos públicos de convênio tem o ônus de comprovar a sua regular aplicação (Art. 70, parágrafo único da CF/88), sob pena de Tomada de Contas Especial e imputação de débito e multa pelo Tribunal de Contas.'
    }
  ],

  // Aula 20 - Resumo Geral de Direito Administrativo
  20: [
    {
      sub: 'Síntese Comparativa: Administração Direta vs. Administração Indireta',
      ref: 'Decreto-Lei nº 200/1967, CF/88, Art. 37 e Jurisprudência do STF',
      t: 'A Administração Direta é composta pelos órgãos integrantes das pessoas políticas (União, Estados, DF e Municípios) por desconcentração, com relação de hierarquia; a Administração Indireta é composta por pessoas jurídicas autônomas criadas por descentralização por serviços/outorga (Autarquias, Fundações Públicas, Empresas Públicas, Sociedades de Economia Mista e Consórcios Públicos de direito público), vinculadas à Administração Direta por controle finalístico (supervisão ministerial) sem subordinação hierárquica.',
      f: 'As Concessionárias de serviço público e as Organizações Sociais integram o rol legal das entidades da Administração Pública Indireta.',
      exp: 'Concessionárias (delegatárias) e entidades do Terceiro Setor (OS, OSCIP, Sistema S) NÃO integram a Administração Indireta.'
    },
    {
      sub: 'Síntese dos Poderes e Atos Administrativos na Jurisprudência das Bancas (FGV / CEBRASPE)',
      ref: 'Lei nº 9.784/1999, CTN, Art. 78 e Súmula 473 do STF',
      t: 'Os poderes administrativos são instrumentais (poderes-deveres irrenunciáveis): o poder hierárquico não se confunde com o poder disciplinar nem com o poder de polícia; nos atos administrativos, Competência, Finalidade e Forma são sempre vinculados, admitindo convalidação apenas os vícios sanáveis de Competência (não exclusiva) e Forma (não essencial) com efeitos ex tunc (art. 55 da Lei 9.784/99).',
      f: 'O vício de finalidade (desvio de poder) e o vício de objeto ilícito admitem convalidação discricionária pela autoridade superior.',
      exp: 'Apenas Competência (não exclusiva) e Forma (não essencial) admitem convalidação (FO-CO).'
    },
    {
      sub: 'Síntese da Nova Lei de Licitações e Contratos (Lei nº 14.133/2021)',
      ref: 'Lei nº 14.133/2021',
      t: 'A Lei nº 14.133/2021 consagrou 5 modalidades (pregão, concorrência, concurso, leilão e diálogo competitivo), extinguiu tomada de preços e convite, adotou o rito padrão em que o julgamento precede a habilitação, transferiu para a inexigibilidade (art. 74) o credenciamento e a aquisição/locação de imóvel específico, fixou a alienação de imóveis públicos via leilão (art. 76) e reduziu para 2 meses o atraso de pagamento que autoriza o contratado a suspender a execução (art. 137, § 2º, IV).',
      f: 'A Lei nº 14.133/2021 manteve a tomada de preços para obras médias e fixou a concorrência como única modalidade para alienação de bens imóveis.',
      exp: 'Na Lei 14.133/2021 não existe mais tomada de preços nem convite, e a alienação de imóveis públicos passou a ser feita na modalidade Leilão (Art. 76, I).'
    },
    {
      sub: 'Síntese de Responsabilidade Civil do Estado e Improbidade Administrativa',
      ref: 'CF/88, Art. 37, §§ 4º a 6º; Lei nº 8.429/1992 (Lei 14.230/2021) e STF (Temas 897, 940 e 1199)',
      t: 'Na responsabilidade civil do Estado (art. 37, § 6º), vigora a responsabilidade objetiva pelo risco administrativo para condutas comissivas e omissões específicas, vedado o ajuizamento da ação diretamente contra o agente público (Tema 940 STF); e na Improbidade Administrativa (Lei 14.230/2021), exige-se sempre dolo específico, o rol do art. 11 é taxativo sem perda do cargo nem suspensão de direitos políticos, a prescrição é de 8 anos (com intercorrente de 4 anos), e o ressarcimento ao erário por ato doloso de improbidade é imprescritível (Tema 897 STF).',
      f: 'A ação de improbidade administrativa admite condenação por culpa grave e tem prazo prescricional de 20 anos.',
      exp: 'A Lei 14.230/2021 extinguiu a modalidade culposa de improbidade e fixou a prescrição em 8 anos do fato.'
    },
    {
      sub: 'Síntese de Serviços Públicos, Bens Públicos e Intervenção na Propriedade',
      ref: 'Leis nº 8.987/1995 e 11.079/2004; Código Civil, Arts. 98 a 102; DL nº 3.365/1941',
      t: 'As PPPs exigem valor mínimo de R$ 10 milhões e prazo de 5 a 35 anos (patrocinada ou administrativa); todos os bens públicos (inclusive os dominicais) são impenhoráveis e imprescritíveis (Súmula 340 STF); e na desapropriação indireta o prazo prescricional é de 10 anos (Tema 1019 STJ).',
      f: 'O valor mínimo das Parcerias Público-Privadas é de R$ 1 milhão e os bens dominicais podem ser adquiridos por usucapião.',
      exp: 'PPP = mínimo de R$ 10 milhões; Bens públicos (mesmo dominicais) = jamais sofrem usucapião.'
    }
  ],

  // Aula 21 - Processo Administrativo (Lei Federal nº 9.784/1999 e Lei Estadual BA nº 12.209/2011)
  21: [
    {
      sub: 'Âmbito, Princípios e Direitos dos Administrados no Processo Administrativo (Lei 9.784/99 e Lei BA 12.209/11)',
      ref: 'Lei nº 9.784/1999, Arts. 1º a 4º e Lei Estadual da Bahia nº 12.209/2011',
      t: 'A Lei de Processo Administrativo aplica-se aos órgãos dos Poderes Executivo, Legislativo e Judiciário (e na Bahia também ao MP, Defensoria e Tribunais de Contas pela Lei Estadual nº 12.209/2011) quando no desempenho de função administrativa, sendo vedada a cobrança de despesas processuais (salvo as previstas em lei) e dispensada a presença obrigatória de advogado (Súmula Vinculante 5 do STF).',
      f: 'No processo administrativo regido pela Lei nº 9.784/1999 e pela Lei BA nº 12.209/2011, o protocolo da petição inicial exige recolhimento de custas iniciais e assinatura de advogado.',
      exp: 'Vigora no processo administrativo o princípio da gratuidade (Art. 2º, parágrafo único, XI da Lei 9.784/99) e da capacidade postulatória direta do administrado (SV 5).'
    },
    {
      sub: 'Legitimados, Capacidade Processual (Maiores de 18 Anos) e Impedimento vs. Suspeição (Arts. 9º, 10 e 18 a 21)',
      ref: 'Lei nº 9.784/1999, Arts. 9º, 10 e 18 a 21',
      t: 'São capazes, para fins de processo administrativo, os maiores de dezoito anos, ressalvada previsão especial em ato normativo próprio; o impedimento (critério objetivo: interesse direto ou indireto na matéria, atuação como perito/testemunha ou litígio judicial/administrativo com o interessado) gera dever de abstenção cuja omissão constitui falta grave, enquanto a suspeição (critério subjetivo: amizade íntima ou inimizade notória) pode ter seu indeferimento objeto de recurso sem efeito suspensivo.',
      f: 'O servidor público que possui amizade íntima com o requerente incorre em hipótese de impedimento absoluto, cabendo recurso com efeito suspensivo automático.',
      exp: 'Distinção clássica na Lei 9.784/99: Interesse na matéria, perito/testemunha ou litígio com a parte = IMPEDIMENTO (Art. 18); Amizade íntima ou inimizade notória = SUSPEIÇÃO (Art. 20, recurso sem efeito suspensivo).'
    },
    {
      sub: 'Instrução, Consulta Pública, Audiência Pública, Pareceres e Prazos para Decidir (Arts. 31 a 49)',
      ref: 'Lei nº 9.784/1999, Arts. 31 a 49',
      t: 'Quando deva ser obrigatoriamente ouvido um órgão consultivo, o parecer deverá ser emitido no prazo máximo de 15 dias; se um parecer obrigatório e vinculante deixar de ser emitido no prazo fixado, o processo não terá seguimento até a respectiva apresentação (responsabilizando-se quem der causa ao atraso), mas se um parecer obrigatório e NÃO vinculante deixar de ser emitido no prazo, o processo poderá ter prosseguimento e ser decidido com sua dispensa; concluída a instrução, a Administração tem o prazo de até 30 (trinta) dias para decidir, salvo prorrogação por igual período expressamente motivada.',
      f: 'Se um parecer obrigatório e vinculante não for emitido no prazo de 15 dias, a autoridade pode decidir o processo imediatamente dispensando o parecer.',
      exp: 'Art. 42, §§ 1º e 2º da Lei 9.784/99: Parecer obrigatório e VINCULANTE = o processo NÃO segue sem ele; Parecer obrigatório e NÃO vinculante = o processo PODE prosseguir e ser decidido com sua dispensa se atrasar!'
    },
    {
      sub: 'Desistência do Pedido vs. Extinção do Processo (Arts. 51 e 52 da Lei nº 9.784/1999)',
      ref: 'Lei nº 9.784/1999, Arts. 51 e 52',
      t: 'O interessado poderá, mediante manifestação escrita, desistir total ou parcialmente do pedido formulado ou, ainda, renunciar a direitos disponíveis; havendo vários interessados, a desistência ou renúncia atinge somente quem a tenha formulado, e a desistência ou renúncia do interessado NÃO prejudica o prosseguimento do processo, se a Administração considerar que o interesse público assim o exige.',
      f: 'A desistência formulada por um dos requerentes em processo administrativo coletivo extingue obrigatoriamente o processo para todos os demais interessados e vincula a Administração ao arquivamento.',
      exp: 'Art. 51, §§ 1º e 2º da Lei 9.784/99: A desistência só atinge quem a formulou e não impede a Administração de prosseguir de ofício se o interesse público exigir.'
    },
    {
      sub: 'Prazos Recursais e Prioridade de Tramitação (Arts. 59 e 69-A da Lei nº 9.784/1999 e Lei BA nº 12.209/2011)',
      ref: 'Lei nº 9.784/1999, Arts. 59 a 61 e 69-A; Lei Estadual BA nº 12.209/2011',
      t: 'Na Lei Federal nº 9.784/1999 (e também como regra no recurso administrativo da Lei Estadual da Bahia nº 12.209/2011), salvo disposição legal específica, o prazo para interposição de recurso administrativo é de 10 (dez) dias, contados a partir da ciência ou divulgação oficial da decisão recorrida, e o recurso não tem efeito suspensivo como regra (salvo disposição legal ou justo receio de prejuízo de difícil ou incerta reparação); têm prioridade na tramitação os procedimentos em que figure como parte ou interessado pessoa com idade igual ou superior a 60 anos, pessoa portadora de deficiência ou portadora de doença grave.',
      f: 'Na Lei nº 9.784/1999, todo recurso administrativo possui efeito suspensivo automático e a prioridade de tramitação por idade só se inicia aos 65 anos.',
      exp: 'Dois pontos clássicos da Lei 9.784/99: 1) O recurso administrativo em regra NÃO tem efeito suspensivo (Art. 61); 2) A prioridade de tramitação aplica-se a pessoa com idade igual ou superior a 60 (SESSENTA) anos (Art. 69-A, I).'
    }
  ],

  // Aula 22 - Constituição do Estado da Bahia (CE-BA)
  22: [
    {
      sub: 'Organização Político-Administrativa do Estado da Bahia e Criação de Municípios (CE-BA)',
      ref: 'Constituição do Estado da Bahia (CE-BA), Arts. 1º a 55',
      t: 'O Estado da Bahia exerce em seu território todas as competências que não lhe sejam vedadas pela Constituição Federal, organizando-se em Poderes Legislativo (Assembleia Legislativa), Executivo (Governador do Estado) e Judiciário (Tribunal de Justiça e demais órgãos), vedada a delegação de atribuições entre os Poderes salvo nas exceções constitucionais.',
      f: 'A Constituição do Estado da Bahia permite que o Governador crie novos Municípios baianos por meio de decreto autônomo estadual sem consulta plebiscitária.',
      exp: 'A criação de Municípios exige o atendimento integral aos requisitos do Art. 18, § 4º da CF/88 (lei complementar federal, estudo de viabilidade, plebiscito e lei estadual).'
    },
    {
      sub: 'Administração Pública e Servidores na Constituição do Estado da Bahia (CE-BA, Arts. 13 a 45)',
      ref: 'Constituição do Estado da Bahia, Arts. 13 a 45 e Jurisprudência do STF',
      t: 'A Administração Pública direta e indireta de qualquer dos Poderes do Estado e dos Municípios baianos obedece aos princípios de legalidade, impessoalidade, moralidade, publicidade, eficiência, razoabilidade e motivação, sendo assegurada aos servidores estaduais ocupantes de cargo efetivo a estabilidade após três anos de efetivo exercício mediante avaliação especial de desempenho.',
      f: 'A Constituição do Estado da Bahia autoriza a transposição automática de empregados celetistas para cargos efetivos de auditor fiscal sem aprovação em concurso público.',
      exp: 'Qualquer provimento derivado vertical sem concurso público é inconstitucional (Art. 37, II da CF/88 e Súmula Vinculante 43 do STF).'
    },
    {
      sub: 'Poder Legislativo Estadual (Assembleia Legislativa da Bahia - ALBA) e Tribunais de Contas (TCE-BA e TCM-BA)',
      ref: 'Constituição do Estado da Bahia, Arts. 68 a 95',
      t: 'O Poder Legislativo do Estado da Bahia é exercido pela Assembleia Legislativa (composta por 63 Deputados Estaduais eleitos pelo sistema proporcional para mandato de 4 anos), e o controle externo é exercido com o auxílio do Tribunal de Contas do Estado da Bahia (TCE-BA, quanto às contas estaduais) e do Tribunal de Contas dos Municípios do Estado da Bahia (TCM-BA, quanto às contas municipais, cuja existência anterior a 1988 é preservada pelo art. 31, § 1º da CF/88).',
      f: 'No Estado da Bahia não existe Tribunal de Contas dos Municípios (TCM-BA), cabendo ao TCU julgar diretamente as contas anuais das prefeituras baianas.',
      exp: 'A Bahia é um dos Estados (junto com Goiás e Pará) que mantêm Tribunal de Contas dos Municípios (TCM-BA, órgão estadual) criado antes da CF/88, além do TCE-BA.'
    },
    {
      sub: 'Poder Executivo e Poder Judiciário na Constituição do Estado da Bahia (CE-BA)',
      ref: 'Constituição do Estado da Bahia, Arts. 96 a 135',
      t: 'O Governador do Estado da Bahia exerce a direção superior da administração estadual auxiliado pelos Secretários de Estado, cabendo ao Tribunal de Justiça do Estado da Bahia (TJ-BA) julgar originariamente a Representação de Inconstitucionalidade de leis ou atos normativos estaduais ou municipais em face da Constituição Estadual.',
      f: 'Compete ao Tribunal de Justiça da Bahia julgar originariamente o Governador do Estado nas infrações penais comuns.',
      exp: 'Pelo Art. 105, I, "a" da CF/88 (norma de reprodução obrigatória), a competência para julgar o Governador do Estado nos crimes comuns é originária do Superior Tribunal de Justiça (STJ), e não do TJ-BA!'
    },
    {
      sub: 'Sistema Tributário e Finanças Públicas na Constituição do Estado da Bahia (CE-BA)',
      ref: 'Constituição do Estado da Bahia, Arts. 146 a 163',
      t: 'Na Constituição do Estado da Bahia, compete ao Estado instituir impostos sobre transmissão causa mortis e doação (ITCMD), operações relativas à circulação de mercadorias e serviços de transporte interestadual/intermunicipal e de comunicação (ICMS) e propriedade de veículos automotores (IPVA), além de taxas e contribuições de melhoria, observada a repartição constitucional de 25% do ICMS e 50% do IPVA aos Municípios baianos.',
      f: 'A Constituição do Estado da Bahia atribui ao Estado a competência para instituir o Imposto sobre Serviços de Qualquer Natureza (ISS) e o IPTU na capital.',
      exp: 'ISS, IPTU e ITBI são impostos de competência exclusiva dos Municípios (e do DF).'
    }
  ],

  // Aula 23 - Lei Estadual da Bahia nº 14.634/2023 (Licitações e Contratos da Bahia)
  23: [
    {
      sub: 'Objeto e Relação da Lei Estadual da Bahia nº 14.634/2023 com a Lei Federal nº 14.133/2021',
      ref: 'Lei Estadual da Bahia nº 14.634/2023, Arts. 1º a 3º',
      t: 'A Lei Estadual nº 14.634, de 28 de novembro de 2023, disciplina as normas de licitações e contratos administrativos no âmbito da Administração Pública direta, autárquica e fundacional do Estado da Bahia (Poderes Executivo, Legislativo e Judiciário, TCE, TCM, MP e Defensoria), harmonizando o regime estadual com as normas gerais da Lei Federal nº 14.133/2021 e revogando a antiga Lei Estadual nº 9.433/2005.',
      f: 'A Lei Estadual da Bahia nº 14.634/2023 manteve em pleno vigor a antiga Lei Estadual nº 9.433/2005 e as modalidades de tomada de preços e convite.',
      exp: 'A Lei Estadual nº 14.634/2023 revogou a antiga Lei baiana 9.433/2005 e alinhou integralmente o Estado da Bahia ao novo marco da Lei Federal nº 14.133/2021.'
    },
    {
      sub: 'Governança, Centralização de Compras (SAEB) e Catálogo Eletrônico na Lei BA nº 14.634/2023',
      ref: 'Lei Estadual da Bahia nº 14.634/2023, Arts. 6º a 18',
      t: 'Na Lei Estadual nº 14.634/2023, compete à alta administração implementar processos e estruturas de governança das contratações, alinhados ao Plano de Contratações Anual (PCA), promovendo a padronização e a centralização dos procedimentos de aquisição e contratação de bens e serviços de uso comum sob coordenação do órgão central de administração estadual (Secretaria da Administração - SAEB).',
      f: 'A Lei Estadual nº 14.634/2023 proíbe a elaboração de Plano de Contratações Anual (PCA) e veda a realização de compras centralizadas ou registro de preços na Bahia.',
      exp: 'A Lei BA 14.634/2023 fortalece a governança, o Plano de Contratações Anual (PCA), o catálogo eletrônico de padronização e as compras compartilhadas/centralizadas.'
    },
    {
      sub: 'Fase Preparatória, Estudo Técnico Preliminar (ETP) e Pesquisa de Preços na Lei BA nº 14.634/2023',
      ref: 'Lei Estadual da Bahia nº 14.634/2023, Arts. 19 a 30',
      t: 'A fase preparatória das licitações estaduais na Bahia caracteriza-se pelo planejamento compatível com o PCA e com as leis orçamentárias, compreendendo a elaboração de Estudo Técnico Preliminar (ETP), Termo de Referência ou Projeto Básico, matriz de alocação de riscos (quando aplicável) e orçamento estimado baseado em cesta de preços e sistemas referenciais oficiais.',
      f: 'Na Lei Estadual nº 14.634/2023, todas as licitações devem ser realizadas obrigatoriamente sob a forma presencial em sessão com envelopes físicos lacrados.',
      exp: 'Em consonância com a Lei 14.133/2021, na Lei Estadual BA nº 14.634/2023 as licitações são realizadas preferencialmente sob a forma ELETRÔNICA.'
    },
    {
      sub: 'Gestão e Fiscalização de Contratos e Recebimento do Objeto na Lei BA nº 14.634/2023',
      ref: 'Lei Estadual da Bahia nº 14.634/2023, Arts. 45 a 60',
      t: 'A execução do contrato administrativo no Estado da Bahia deve ser acompanhada e fiscalizada por 1 (um) ou mais fiscais do contrato, representantes da Administração especialmente designados, segregando-se as atribuições de gestão contratual e de fiscalização técnica, administrativa e setorial, com recebimento provisório e definitivo do objeto.',
      f: 'Na Lei Estadual da Bahia nº 14.634/2023, o próprio representante comercial da empresa contratada atua como fiscal oficial do contrato perante o Estado.',
      exp: 'A fiscalização do contrato é prerrogativa e dever da Administração Pública por meio de servidores formalmente designados (podendo contratar terceiros apenas para assisti-los e subsidiá-los).'
    },
    {
      sub: 'Processo Administrativo Sancionador e Reabilitação na Lei BA nº 14.634/2023',
      ref: 'Lei Estadual da Bahia nº 14.634/2023, Arts. 61 a 75',
      t: 'Para a aplicação das sanções de impedimento de licitar e contratar e de declaração de inidoneidade na Lei Estadual nº 14.634/2023, exige-se a instauração de processo de responsabilização conduzido por comissão composta de 2 (dois) ou mais servidores estáveis, assegurados a intimação para defesa no prazo de 15 dias úteis, o direito à produção de provas e a possibilidade de reabilitação cumpridos os requisitos legais e reparado o dano.',
      f: 'Na Lei Estadual nº 14.634/2023, a sanção de declaração de inidoneidade tem caráter perpétuo e pode ser aplicada sem contraditório.',
      exp: 'A declaração de inidoneidade tem prazo de 3 a 6 anos, exige processo de responsabilização conduzido por comissão de 2 ou mais servidores estáveis e admite reabilitação.'
    }
  ],

  // Aula 24 - Lei Estadual da Bahia nº 9.290/2004 (Código de Defesa do Contribuinte da Bahia)
  24: [
    {
      sub: 'Objetivos e Alcance do Código de Defesa do Contribuinte da Bahia (Lei Estadual nº 9.290/2004)',
      ref: 'Lei Estadual da Bahia nº 9.290/2004, Arts. 1º a 3º',
      t: 'A Lei Estadual nº 9.290/2004 institui o Código de Defesa do Contribuinte do Estado da Bahia, com os objetivos de promover o bom relacionamento entre o fisco e o contribuinte baseado na cooperação, no respeito mútuo e na parceria, proteger o contribuinte contra o exercício abusivo do poder de fiscalizar, de lançar e de cobrar tributo, e assegurar a ampla defesa dos seus direitos.',
      f: 'O Código de Defesa do Contribuinte da Bahia (Lei nº 9.290/2004) aplica-se exclusivamente aos tributos municipais cobrados pelas prefeituras do interior baiano.',
      exp: 'A Lei Estadual nº 9.290/2004 rege a relação jurídico-tributária entre o Fisco Estadual da Bahia (SEFAZ-BA) e os contribuintes dos tributos estaduais.'
    },
    {
      sub: 'Direitos do Contribuinte Baiano (Art. 4º da Lei Estadual nº 9.290/2004)',
      ref: 'Lei Estadual da Bahia nº 9.290/2004, Art. 4º',
      t: 'São direitos do contribuinte nos termos da Lei BA nº 9.290/2004: o adequado e eficaz atendimento pelos órgãos e unidades da Secretaria da Fazenda; a igualdade de tratamento, com respeito e urbanidade; a identificação do servidor nas repartições e nas ações fiscais; o acesso a dados e informações de seu interesse registrados nos sistemas de tributação; a substituição, se comprovado defeito, de documento relativo a obrigação tributária; e a recusa a prestar informações por requisição verbal, se preferir intimação por escrito.',
      f: 'Pela Lei Estadual nº 9.290/2004, o contribuinte baiano é obrigado a entregar seus livros fiscais a qualquer pessoa que não se identifique como servidor fazendário mediante simples requisição verbal.',
      exp: 'O Art. 4º da Lei BA 9.290/2004 assegura expressamente ao contribuinte o direito à identificação funcional do servidor fazendário e o direito de exigir intimação por escrito.'
    },
    {
      sub: 'Garantias do Contribuinte e Vedação às Sanções Políticas (Arts. 5º a 10 da Lei BA nº 9.290/2004)',
      ref: 'Lei Estadual da Bahia nº 9.290/2004 e Súmulas 70, 323 e 547 do STF',
      t: 'O Código de Defesa do Contribuinte da Bahia garante a não obrigatoriedade de apresentar certidão negativa na repartição competente a título de condição para apresentação de defesa ou recurso administrativo, a proibição de divulgação de dados sigilosos sem amparo legal e a vedação de sanções políticas coercitivas indiretas (como interdição de estabelecimento ou apreensão indefinida de mercadorias como meio coercitivo para pagamento de tributo - Súmulas 70, 323 e 547 do STF).',
      f: 'A Lei Estadual nº 9.290/2004 autoriza a SEFAZ-BA a interditar o estabelecimento comercial e bloquear a emissão de notas fiscais como forma de forçar o pagamento de dívida tributária discutida em recurso.',
      exp: 'Tanto as Súmulas 70, 323 e 547 do STF quanto a Lei BA 9.290/2004 vedam o uso de sanções políticas (interdição ou retenção de mercadorias oltre o tempo necessário à lavratura do auto) como meio coercitivo de cobrança tributária.'
    },
    {
      sub: 'Deveres do Contribuinte e da Administração Fazendária na Lei BA nº 9.290/2004',
      ref: 'Lei Estadual da Bahia nº 9.290/2004, Arts. 6º a 15',
      t: 'Constituem deveres do contribuinte na Lei BA nº 9.290/2004 tratar com respeito e urbanidade os servidores da administração fazendária, identificar-se como titular, sócio ou representante legal, fornecer condições de segurança e local adequado para a execução dos procedimentos de fiscalização, apurar, declarar e recolher o imposto devido e exibir documentos e livros fiscais quando regularmente intimado.',
      f: 'O Código de Defesa do Contribuinte da Bahia isenta o sujeito passivo de conservar os livros e documentos fiscais pelo prazo decadencial.',
      exp: 'O contribuinte tem o dever legal de conservar e exibir livros e documentos fiscais até que ocorra a prescrição dos créditos tributários decorrentes das operações a que se refiram (Art. 195, parágrafo único do CTN e Lei BA 9.290/2004).'
    },
    {
      sub: 'Conselho Estadual de Defesa do Contribuinte (CODECON-BA)',
      ref: 'Lei Estadual da Bahia nº 9.290/2004, Arts. 16 a 22',
      t: 'A Lei Estadual nº 9.290/2004 instituiu o Conselho Estadual de Defesa do Contribuinte (CODECON), órgão de composição paritária integrado por representantes do Poder Público estadual (como SEFAZ, PGE e SAEB) e de entidades empresariais, de classe e profissionais (como FIEB, FECOMÉRCIO, FAEB, OAB-BA e CRC-BA), com atribuições de planejar, elaborar, propor, coordenar e executar a política estadual de proteção ao contribuinte e receber sugestões e reclamações.',
      f: 'O Conselho Estadual de Defesa do Contribuinte (CODECON-BA) substituiu o CONSEF e passou a julgar em última instância todos os autos de infração de ICMS na Bahia.',
      exp: 'Distinção essencial na SEFAZ-BA: Quem julga os Autos de Infração no contencioso administrativo fiscal é o CONSEF (Lei 7.014/96); já o CODECON (Lei 9.290/04) é órgão consultivo e propositivo de defesa dos direitos e garantias do contribuinte!'
    }
  ]
};
