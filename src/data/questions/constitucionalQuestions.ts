import { QuestionData } from '../aula00Questions';

export const CONSTITUCIONAL_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Conceito, Objeto, Sentidos e Classificação das Constituições ───
  0: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-AM',
      topic: 'Sentidos da Constituição (Lassalle, Schmitt e Kelsen)',
      type: 'multiple',
      statement: 'Na teoria geral do Direito Constitucional, diversos autores formularam concepções sobre o conceito e a essência da Constituição. Ferdinand Lassalle, em sua obra clássica "A Essência da Constituição", sustentou que a Constituição real e efetiva de um país corresponde:',
      options: [
        'À decisão política fundamental tomada pelo titular do poder constituinte sobre a forma e o modo da unidade política.',
        'Aos fatores reais do poder que regem a sociedade, sendo a constituição escrita uma mera folha de papel (folha de papel escrita) desprovida de eficácia duradoura se não corresponder à realidade fática.',
        'À norma fundamental hipotética que confere validade e eficácia a todo o ordenamento jurídico positivo.',
        'À força normativa capaz de condicionar e moldar ativamente a realidade política e social do Estado.',
        'Ao conjunto de valores substantivos de justiça e dignidade da pessoa humana inerentes ao pós-positivismo.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Para Ferdinand Lassalle (sentido sociológico), a Constituição real é o somatório dos fatores reais de poder vigentes na sociedade (as forças econômicas, militares e sociais). A constituição escrita em um pedaço de papel que divirja dos fatores reais é mera "folha de papel" (Blatt Papier), fadada ao fracasso.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Classificação das Constituições (Rigidez Constitucional)',
      type: 'tf',
      statement: 'A Constituição Federal de 1988 é classificada pela doutrina majoritária como rígida, pois suas normas somente podem ser modificadas por intermédio de processo legislativo mais solene e dificultoso do que aquele exigido para a edição de leis infraconstitucionais comuns.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Constituições rígidas exigem um processo legislativo especial e qualificado (Art. 60 da CF/88: proposta por 1/3 da CD ou SF, aprovação em 2 turnos por 3/5 dos votos em cada casa) para alteração de seu texto, em contraposição ao processo ordinário de elaboração legal.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Classificação da CF/88',
      type: 'multiple',
      statement: 'A respeito das classificações ontológicas, sistemáticas e formais da Constituição da República Federativa do Brasil de 1988, assinale a opção que apresenta a classificação integralmente correta:',
      options: [
        'Outorgada, histórica, flexível, sintética e semântica.',
        'Promulgada, escrita, rígida, analítica, formal e dirigente.',
        'Pactuada, não escrita, semirrígida, sintética e cesarista.',
        'Promulgada, consuetudinária, flexível, dogmática e negativa.',
        'Outorgada, escrita, rígida, analítica e nominalista.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. A CF/88 é: Promulgada (democrática/votada); Escrita (instrumentalizada em documento formal); Rígida (processo de reforma qualificado); Analítica (extensa e minuciosa); Formal (todas as matérias nela inseridas têm hierarquia constitucional); e Dirigente (estabelece metas, diretrizes e programas de ação para o Estado).'
    }
  ],

  // ── Aula 01: Aplicabilidade das Normas Constitucionais ──────────────────────
  1: [
    {
      id: 1,
      source: 'FGV – Auditor do Estado / CGE-SC',
      topic: 'Eficácia das Normas Constitucionais (José Afonso da Silva)',
      type: 'multiple',
      statement: 'O Artigo 5º, XIII, da CF/88 estabelece: "é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer". De acordo com a clássica classificação das normas constitucionais quanto à aplicabilidade e eficácia formulada por José Afonso da Silva, o preceito citado é classificado como norma de eficácia:',
      options: [
        'Plena, pois seus efeitos são imediatos e não admitem qualquer tipo de restrição legislativa infraconstitucional.',
        'Contida (ou redutível), pois possui aplicabilidade direta, imediata e integral, mas admite que lei ordinária superveniente imponha restrições ou qualificações ao seu alcance.',
        'Limitada de princípio institutivo, pois depende de lei integradora para produzir seus efeitos mínimos de eficácia jurídica.',
        'Limitada de princípio programático, pois apenas estabelece uma diretriz axiológica dirigida aos órgãos estatais sem conferir direito subjetivo.',
        'Exaurida ou de aplicabilidade esvaída, por regular matéria temporária do direito intertemporal.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. A liberdade profissional (Art. 5º, XIII) é norma de eficácia contida: desde a promulgação da CF/88 é livre o exercício de qualquer ofício; no entanto, o legislador ordinário pode editar lei restringindo/condicionando o exercício (ex: exigência de diploma e aprovação em exame para a advocacia ou medicina). Enquanto não houver lei restritiva, a liberdade é plena.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-DF',
      topic: 'Normas de Eficácia Limitada',
      type: 'tf',
      statement: 'As normas constitucionais de eficácia limitada produzem, desde a sua promulgação, eficácia jurídica negativa (revogando normas anteriores incompatíveis e impedindo leis infraconstitucionais contrárias), muito embora dependam de atuação legislativa posterior para que produzam a totalidade de seus efeitos positivos.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Nenhuma norma constitucional é despida de eficácia jurídica. Mesmo as normas de eficácia limitada (princípio institutivo ou programático) possuem eficácia jurídica mínima ou negativa: servem de parâmetro de controle de constitucionalidade e revogam a legislação pretérita conflitante.'
    }
  ],

  // ── Aula 04: Direitos e Garantias Fundamentais I (Art. 5º da CF/88) ─────────
  4: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Inviolabilidade de Domicílio e Fiscalização Tributária',
      type: 'multiple',
      statement: 'O Artigo 5º, XI, da Constituição Federal estabelece que a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial. Com fundamento no texto constitucional e na jurisprudência vinculante do Supremo Tribunal Federal (STF - Tema 280), assinale a afirmativa correta:',
      options: [
        'A autoridade fiscal pode ingressar livremente no domicílio do contribuinte durante o dia, sem autorização judicial, mediante simples lavratura de termo de início de fiscalização.',
        'O conceito de "casa" para proteção constitucional restringe-se à habitação estritamente residencial, excluindo escritórios profissionais, consultórios e oficinas não abertas ao público.',
        'A entrada forçada em domicílio sem mandado judicial é lícita, mesmo em período noturno, quando amparada em fundadas razões (justa causa) devidamente justificadas pelas circunstâncias do caso concreto que indiquem estado de flagrante delito.',
        'A determinação judicial para ingresso domiciliar pode ser cumprida indistintamente no período diurno ou noturno, desde que expressamente autorizada pelo magistrado.',
        'O consentimento do morador para ingresso de auditores fiscais em sua residência pode ser suprido tacitamente pelo silêncio perante a intimação fiscal.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. No julgamento do RE 603.616/RO (Tema 280 da repercussão geral), o STF fixou que a entrada forçada em domicílio sem mandado judicial é lícita, a qualquer hora do dia ou da noite, desde que amparada em "fundadas razões" (justa causa) prévias que indiquem ocorrência de situação de flagrante delito no interior do imóvel, justificadas a posteriori sob pena de responsabilidade.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Sigilo Bancário e Administração Tributária (LC 105/2001)',
      type: 'tf',
      statement: 'O Supremo Tribunal Federal firmou tese de repercussão geral (Tema 225) no sentido de que o fornecimento de informações bancárias pelas instituições financeiras diretamente ao Fisco, sem prévia autorização judicial, previsto no Art. 6º da Lei Complementar nº 105/2001, é plenamente constitucional, configurando mera transferência de sigilo entre entes legalmente vinculados ao dever de preservação do segredo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. No julgamento do RE 601.314 (Tema 225) e das ADIs 2390, 2386, 2359 e 2859, o STF assentou que o art. 6º da LC 105/01 não ofende o direito à intimidade, pois não há quebra de sigilo bancário, e sim transferência de sigilo da instituição financeira para a administração fazendária, a qual continua obrigada a guardar segredo funcional sob pena de crime.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal de Tributos Estaduais / SEFAZ-AP',
      topic: 'Direito de Reunião e Liberdade de Associação',
      type: 'multiple',
      statement: 'Em tema de direitos fundamentais previstos no Artigo 5º da CF/88, assinale a opção que está em consonância com a disciplina constitucional e o entendimento do STF:',
      options: [
        'A exigência de aviso prévio à autoridade competente como pressuposto de validade da reunião pacífica exige autorização formal emitida pelo Poder Público com 48 horas de antecedência.',
        'A criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento.',
        'As associações só podem ter suas atividades suspensas ou ser compulsoriamente dissolvidas por decisão judicial transitada em julgado.',
        'A dissolução compulsória de associação pode ser determinada liminarmente por decisão judicial monocrática não transitada em julgado.',
        'Ninguém poderá ser compelido a associar-se ou a permanecer associado, salvo por deliberação de convenção coletiva ou assembleia geral soberana.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Artigo 5º, XVIII da CF/88: a criação de associações e de cooperativas independe de autorização, sendo vedada a interferência estatal em seu funcionamento. Ademais, para dissolução compulsória exige-se o trânsito em julgado (Art. 5º, XIX), enquanto a suspensão de atividades prescinde do trânsito.'
    }
  ],

  // ── Aula 06: Remédios Constitucionais ──────────────────────────────────────
  6: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-MG',
      topic: 'Mandado de Segurança Coletivo e Individual',
      type: 'multiple',
      statement: 'O Mandado de Segurança é garantia constitucional voltada a proteger direito líquido e certo não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público (Art. 5º, LXIX da CF/88). Sobre o mandado de segurança coletivo, assinale a afirmativa correta:',
      options: [
        'A impetração de mandado de segurança coletivo por entidade de classe ou associação exige expressa autorização individual de cada um dos associados substituídos.',
        'O mandado de segurança coletivo pode ser impetrado por partido político sem qualquer representação no Congresso Nacional, desde que legalmente registrado no TSE.',
        'As associações legalmente constituídas e em funcionamento há pelo menos um ano possuem legitimidade para impetrar mandado de segurança coletivo na defesa dos interesses de seus membros, atuando em substituição processual sem necessidade de autorização específica.',
        'O prazo decadencial para impetração de mandado de segurança é prescritível em cinco anos a contar da ciência formal do ato coator.',
        'O titular de direito líquido e certo pode requerer a concessão de mandado de segurança contra ato judicial transitado em julgado que contenha nulidade de citação.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. Conforme o Art. 5º, LXX, "b" da CF/88 e a Súmula 629 do STF ("A impetração de mandado de segurança coletivo por entidade de classe em favor dos associados independe da autorização destes"), a associação regularmente constituída e em funcionamento há pelo menos 1 ano atua em substituição processual sem depender de autorização assemblear específica individualizada.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-CE',
      topic: 'Habeas Data (Súmula 2 do STJ)',
      type: 'tf',
      statement: 'Para a impetração de Habeas Data com a finalidade de assegurar o conhecimento de registros e dados relativos à pessoa do impetrante, é indispensável a comprovação prévia da recusa administrativa ou da demora injustificada da autoridade detentora dos registros públicos em fornecer as referidas informações.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Súmula 2 do STJ: "Não cabe o habeas data (CF, art. 5º, LXXII, letra a) se não houve recusa de informações por parte da autoridade administrativa". Exige-se demonstração de pretensão resistida e interesse de agir prévio (Art. 8º da Lei nº 9.507/1997).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-SC',
      topic: 'Ação Popular e Mandado de Injunção',
      type: 'multiple',
      statement: 'A respeito das ações e garantias constitucionais reguladas no Artigo 5º da Carta da República, assinale a afirmativa correta:',
      options: [
        'Qualquer pessoa física residente no país ou pessoa jurídica nacional é parte legítima para propor Ação Popular visando anular ato lesivo ao patrimônio público.',
        'O autor da Ação Popular é sempre isento de custas judiciais e do ônus da sucumbência, inclusive se comprovada litigância de má-fé.',
        'O Mandado de Injunção é cabível sempre que a falta de norma regulamentadora inviabilize o exercício dos direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.',
        'O Mandado de Injunção coletivo não é admitido pelo ordenamento jurídico brasileiro em virtude da ausência de previsão literal no texto original de 1988.',
        'O Habeas Data é ação onerosa destinada a obter certidões de órgãos públicos para defesa de direitos de terceiros em juízo.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. Artigo 5º, LXXI da CF/88 e Lei nº 13.300/2016 definem a hipótese clássica do mandado de injunção. A ação popular é privativa de "cidadão" (pessoa física no pleno gozo de direitos políticos com título de eleitor), sendo isento de custas salvo comprovada má-fé (Art. 5º, LXXIII).'
    }
  ],

  // ── Aula 09: Organização do Estado e Repartição de Competências ─────────────
  9: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Repartição de Competências Legislativas (Art. 22 e 24 da CF/88)',
      type: 'multiple',
      statement: 'No modelo federativo brasileiro desenhado pela Constituição de 1988, a repartição de competências legislativas entre os entes federados obedece ao princípio da predominância do interesse. Nos termos dos Artigos 22 e 24 da CF/88, compete concorrentemente à União, aos Estados e ao Distrito Federal legislar sobre:',
      options: [
        'Direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho.',
        'Direito tributário, financeiro, penitenciário, econômico e urbanístico.',
        'Desapropriação, trânsito e transporte, jazidas, minas e recursos minerais.',
        'Seguridade social, comércio exterior e diretrizes da política nacional de transportes.',
        'Sistemas de consórcios e sorteios, normas gerais de licitação e contratação.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Artigo 24, I da CF/88: compete à União, aos Estados e ao DF legislar concorrentemente sobre direito tributário, financeiro, penitenciário, econômico e urbanístico. As matérias da opção A e C são privativas da União (Art. 22, I, II, XI).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Competência Concorrente Suplementar dos Estados',
      type: 'tf',
      statement: 'No âmbito da legislação concorrente tributária e financeira, inexistindo lei federal sobre normas gerais, os Estados e o Distrito Federal exercerão a competência legislativa plena, para atender a suas peculiaridades; contudo, a superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual, no que lhe for contrário.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 24, § 3º e § 4º da CF/88. Inexistindo lei federal de normas gerais, os Estados exercem competência plena suplementar (competência supletiva). Surgindo lei federal posterior, a norma estadual não é revogada, mas tem sua eficácia SUSPENSA naquilo em que contrariar as normas gerais federais.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Bens dos Estados e Municípios',
      type: 'multiple',
      statement: 'De acordo com o Artigo 26 da Constituição Federal de 1988, incluem-se expressamente entre os bens dos Estados-membros:',
      options: [
        'Os recursos minerais, inclusive os do subsolo e os potenciais de energia hidráulica.',
        'As águas superficiais ou subterrâneas, fluentes, emergentes e em depósito, ressalvadas, neste caso, na forma da lei, as decorrentes de obras da União.',
        'As terras tradicionalmente ocupadas pelos índios e as ilhas oceânicas desprovidas de sede de Município.',
        'As faixas de fronteira e as praias marítimas federais contíguas a portos organizados.',
        'O mar territorial e os terrenos de marinha e seus acrescidos.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Artigo 26, I da CF/88: São bens dos Estados as águas superficiais ou subterrâneas, fluentes, emergentes e em depósito, ressalvadas as decorrentes de obras da União. As demais opções trazem bens pertencentes expressamente à União (Art. 20, CF/88).'
    }
  ],

  // ── Aula 10: Administração Pública na CF/88 (Art. 37 ao 41) ────────────────
  10: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Acumulação de Cargos Públicos e Teto Remuneratório',
      type: 'multiple',
      statement: 'O Artigo 37, XVI, da Constituição Federal estabelece como regra geral a proibição da acumulação remunerada de cargos públicos. No entanto, é ressalvada a acumulação, desde que haja compatibilidade de horários, de:',
      options: [
        'Dois cargos técnicos ou científicos, indistintamente.',
        'Dois cargos de professor; de um cargo de professor com outro técnico ou científico; e de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.',
        'Um cargo de auditor fiscal com um cargo em comissão de direção política em autarquia estadual.',
        'Três cargos de magistério, desde que a jornada semanal consolidada não exceda 60 horas.',
        'Um cargo da carreira jurídica pública com cargo eletivo no Poder Executivo.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. As 3 exceções constitucionais permissivas de acumulação remunerada de cargos públicos com compatibilidade de horários são: a) a de dois cargos de professor; b) a de um cargo de professor com outro técnico ou científico; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas (Art. 37, XVI, CF/88).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Estabilidade do Servidor Público (Art. 41 da CF/88)',
      type: 'tf',
      statement: 'São estáveis após três anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público, sendo condição obrigatória para a aquisição da estabilidade a prévia avaliação especial de desempenho por comissão instituída para essa finalidade.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 41, caput e § 4º da CF/88 (redação dada pela EC 19/98): O prazo do estágio probatório é de 3 anos de efetivo exercício, e a avaliação especial de desempenho por comissão formal é condição sine qua non para aquisição da estabilidade funcional.'
    }
  ],

  // ── Aula 16: Controle Concentrado de Constitucionalidade ───────────────────
  16: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-MG',
      topic: 'Legitimação Ativa na ADI e ADC (Art. 103 da CF/88)',
      type: 'multiple',
      statement: 'O Artigo 103 da Constituição Federal estabelece o rol taxativo de legitimados a propor a Ação Direta de Inconstitucionalidade (ADI) e a Ação Declaratória de Constitucionalidade (ADC) perante o Supremo Tribunal Federal. A jurisprudência consolidada do STF divide esses legitimados entre "universais" e "especiais" (estes últimos sujeitos à exigência de pertinência temática). É classificado como legitimado ESPECIAL:',
      options: [
        'O Presidente da República.',
        'A Mesa do Senado Federal e a Mesa da Câmara dos Deputados.',
        'O Governador de Estado ou do Distrito Federal.',
        'O Procurador-Geral da República.',
        'O Conselho Federal da Ordem dos Advogados do Brasil (CFOAB).'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. São legitimados especiais (que precisam demonstrar pertinência temática entre o objeto impugnado e suas finalidades institucionais): 1) Governador de Estado/DF; 2) Mesa da Assembleia Legislativa ou da Câmara Legislativa do DF; e 3) Confederação sindical ou entidade de classe de âmbito nacional. Os demais (Presidente, Mesas da CD e SF, PGR, CFOAB e Partido Político com representação no Congresso) são legitimados universais.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-DF',
      topic: 'Modulação de Efeitos na ADI (Art. 27 da Lei 9.868/99)',
      type: 'tf',
      statement: 'Ao declarar a inconstitucionalidade de lei ou ato normativo em sede de controle concentrado abstrato, o STF poderá, por maioria de dois terços de seus membros, restringir os efeitos daquela declaração ou decidir que ela só tenha eficácia a partir de seu trânsito em julgado ou de outro momento que venha a ser fixado (modulação temporal).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 27 da Lei nº 9.868/1999: Por razões de segurança jurídica ou de excepcional interesse social, o STF, pelo voto de 2/3 dos seus membros (8 ministros), pode modular os efeitos temporais da decisão de inconstitucionalidade, superando a regra geral da eficácia retroativa ex tunc.'
    }
  ],

  // ── Aula 18: Finanças Públicas e Orçamento na CF/88 (Art. 165 ao 169) ───────
  18: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Regra de Ouro Orçamentária (Art. 167, III da CF/88)',
      type: 'multiple',
      statement: 'A Constituição Federal de 1988 estabelece vedações orçamentárias expressas para garantir o equilíbrio fiscal e a sustentabilidade das contas públicas. A clássica "Regra de Ouro" das finanças públicas federais, insculpida no Artigo 167, III, veda:',
      options: [
        'A realização de despesas de pessoal que excedam os percentuais fixados em lei complementar federal de responsabilidade fiscal.',
        'A realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta.',
        'A vinculação de receita de impostos a qualquer órgão, fundo ou despesa sem prévia anuência do Tribunal de Contas.',
        'A abertura de crédito suplementar ou especial sem prévia autorização legislativa e sem indicação dos recursos correspondentes.',
        'A utilização de recursos do orçamento fiscal e da seguridade social para suprir necessidade ou déficit de empresas públicas estatais.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Literalidade do Art. 167, III da CF/88. A Regra de Ouro impede que o ente federativo financie despesas correntes (custeio do dia a dia, como salários e encargos) com endividamento público (operações de crédito), restringindo os empréstimos ao valor total das despesas de capital (investimentos, inversões financeiras e amortização da dívida), salvo autorização extraordinária por maioria absoluta do Legislativo.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor do Estado / CAGE-RS',
      topic: 'Princípio da Exclusividade Orçamentária (Art. 165, § 8º da CF/88)',
      type: 'tf',
      statement: 'Pelo princípio orçamentário constitucional da exclusividade, a lei orçamentária anual não conterá dispositivo estranho à previsão da receita e à fixação da despesa, não se incluindo na proibição a autorização para abertura de créditos suplementares e contratação de operações de crédito, ainda que por antecipação de receita.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 165, § 8º da CF/88. O princípio da exclusividade (originado na emenda Rui Barbosa da CF de 1891 contra as "caudas orçamentárias") admite apenas duas exceções constitucionais expressas: a autorização para abertura de créditos suplementares e a autorização para contratação de operações de crédito (inclusive ARO).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal do Tesouro Estadual / SEFAZ-PE',
      topic: 'Instrumentos de Planejamento Orçamentário (PPA, LDO e LOA)',
      type: 'multiple',
      statement: 'No sistema orçamentário constitucional brasileiro (Art. 165 da CF/88), a Lei de Diretrizes Orçamentárias (LDO) compreende as diretrizes, objetivos e metas da administração pública para as despesas de capital e outras delas decorrentes. Além disso, a LDO possui papel crucial na integração do planejamento. De acordo com o texto constitucional, a LDO:',
      options: [
        'Fixa os valores das dotações orçamentárias nominais consignadas a cada órgão e unidade gestora para os quatro anos do mandato governamental.',
        'Compreenderá as metas e prioridades da administração pública federal/estadual, incluindo as despesas de capital para o exercício financeiro subsequente, orientará a elaboração da lei orçamentária anual e disporá sobre as alterações na legislação tributária.',
        'Pode instituir diretamente novos impostos ou majorar alíquotas do ICMS por simples inclusão em anexo específico.',
        'É de iniciativa privativa do Tribunal de Contas do Estado no que concerne às metas de controle externo.',
        'Tem vigência quadrienal com início no segundo ano de mandato do Chefe do Executivo e término no primeiro ano do mandato subsequente.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Artigo 165, § 2º da CF/88: A Lei de Diretrizes Orçamentárias (LDO) compreenderá as metas e prioridades da administração pública, incluindo as despesas de capital para o exercício financeiro subsequente, orientará a elaboração da LOA, disporá sobre alterações na legislação tributária e estabelecerá a política de aplicação das agências financeiras oficiais de fomento.'
    }
  ]
};
