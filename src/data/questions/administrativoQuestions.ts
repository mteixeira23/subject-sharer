import { QuestionData } from '../aula00Questions';

export const ADMINISTRATIVO_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Princípios do Direito Administrativo e Regime Jurídico (50 Questões Únicas) ──
  0: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Princípios da Administração Pública (LIMPE e Autotutela)',
      type: 'multiple',
      statement: 'A Administração Pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios expressos no Art. 37, caput, da CF/88, além dos princípios implícitos consagrados na doutrina e jurisprudência. A respeito do princípio da autotutela administrativa (Súmulas 346 e 473 do STF), assinale a afirmativa correta:',
      options: [
        'A Administração deve aguardar prévia manifestação do Poder Judiciário para declarar a nulidade de seus próprios atos ilegais.',
        'A Administração Pública pode anular seus próprios atos quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos, e revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.',
        'A anulação de atos administrativos que gerem efeitos favoráveis aos destinatários pode ser promovida a qualquer tempo, sendo inaplicável prazo decadencial.',
        'A revogação de atos discricionários pela Administração produz efeitos retroativos (ex tunc), desfazendo todas as consequências jurídicas já consolidadas.',
        'O princípio da autotutela autoriza o controle jurisdicional sobre o mérito administrativo das decisões puramente discricionárias do Poder Executivo.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Enunciado literal da Súmula 473 do STF: "A Administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos e ressalvada, em todos os casos, a apreciação judicial". A anulação gera efeitos ex tunc e a revogação gera efeitos prospectivos ex nunc.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Princípio da Impessoalidade e Súmula Vinculante nº 13 (Nepotismo)',
      type: 'tf',
      statement: 'A nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, da autoridade nomeante para o exercício de cargo em comissão ou de confiança viola a Constituição Federal, segundo a Súmula Vinculante nº 13 do STF, com esteio no princípio da impessoalidade e da moralidade.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. A Súmula Vinculante nº 13 veda expressamente o nepotismo na Administração Pública direta e indireta de todos os Poderes, aplicando diretamente os princípios constitucionais da moralidade, impessoalidade e igualdade (Art. 37, caput da CF/88).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Supremacia e Indisponibilidade do Interesse Público',
      type: 'multiple',
      statement: 'No regime jurídico-administrativo, os dois princípios fundamentais basilares (pedras de toque da doutrina de Celso Antônio Bandeira de Mello) que conformam toda a atuação do Estado são:',
      options: [
        'A legalidade estrita e a eficiência produtiva empresarial.',
        'A supremacia do interesse público sobre o privado e a indisponibilidade do interesse público pela Administração.',
        'A autoexecutoriedade coercitiva e a publicidade oficial obrigatória.',
        'A continuidade dos serviços e a presunção absoluta de veracidade funcional.',
        'A ampla defesa contraditória e a motivação circunstanciada.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O regime jurídico-administrativo assenta-se no binômio basilar formulado por Celso Antônio Bandeira de Mello: 1) Supremacia do interesse público sobre o privado (confere prerrogativas especiais e poderes de império à Administração); e 2) Indisponibilidade do interesse público (impõe limites, restrições e sujeições ao gestor, pois a coisa pública pertence à coletividade).'
    },
    {
      id: 4,
      source: 'CEBRASPE – Auditor Federal / CGU',
      topic: 'Princípio da Legalidade no Direito Público vs Direito Privado',
      type: 'tf',
      statement: 'Enquanto no âmbito das relações privadas vige o princípio da autonomia da vontade (em que ao particular é lícito fazer tudo o que a lei não proíba), no Direito Administrativo vige o princípio da legalidade estrita, segundo o qual a Administração Pública só pode agir quando e como a lei expressamente autorizar ou determinar.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 37, caput e Art. 5º, II da CF/88. A Administração Pública subordina-se à legalidade estrita (princípio da subordinação à lei), não existindo vontade autônoma do administrador, mas sim a vontade emanada da lei.'
    },
    {
      id: 5,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Vedação à Promoção Pessoal na Publicidade Governamental',
      type: 'multiple',
      statement: 'O Artigo 37, § 1º da Constituição Federal estabelece que a publicidade dos atos, programas, obras, serviços e campanhas dos órgãos públicos deverá ter caráter educativo, informativo ou de orientação social. À luz do princípio da impessoalidade, é expressamente vedado:',
      options: [
        'Constar nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos.',
        'Divulgar o valor total das despesas orçamentárias incorridas na execução da campanha.',
        'Veicular a publicidade nos finais de semana e feriados nacionais.',
        'Contratar agências de publicidade mediante licitação na modalidade concorrência.',
        'Informar à população sobre os postos e calendários de vacinação.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 37, § 1º da CF/88 veda expressamente nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos em qualquer tipo de publicidade oficial.'
    },
    {
      id: 6,
      source: 'CEBRASPE – Auditor de Controle Externo / TCE-RJ',
      topic: 'Súmula Vinculante 13 e Cargos de Natureza Política',
      type: 'tf',
      statement: 'Segundo a jurisprudência pacífica do STF, a vedação ao nepotismo expressa na Súmula Vinculante nº 13 aplica-se indistintamente e sem qualquer exceção aos cargos de natureza eminentemente política, tais como Secretários de Estado e Ministros de Estado, tornando nula de pleno direito qualquer nomeação de parente.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. O STF pacificou o entendimento de que a Súmula Vinculante nº 13 NÃO se aplica, em regra, a cargos estritamente POLÍTICOS (como Secretário de Estado, Ministro de Estado e Secretário Municipal), ressalvados os casos de manifesta ausência de qualificação técnica ou fraude à lei (nepotismo cruzado).'
    },
    {
      id: 7,
      source: 'FCC – Analista de Controle Externo / TCE-AP',
      topic: 'Prazo Decadencial para Anulação de Atos Favoráveis (Art. 54 da Lei 9.784/99)',
      type: 'multiple',
      statement: 'Nos termos da Lei nº 9.784/1999 (Processo Administrativo Federal) e da jurisprudência consolidada do STJ, o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em:',
      options: [
        '5 (cinco) anos, contados da data em que foram praticados, salvo comprovada má-fé.',
        '10 (dez) anos, independentemente da boa ou má-fé do beneficiário.',
        '2 (dois) anos, aplicando-se subsidiariamente o Código Civil brasileiro.',
        'Tempo algum, pois atos nulos jamais prescrevem ou decaem segundo a doutrina clássica.',
        '20 (vinte) anos, conforme o prazo geral das ações reais de desapropriação.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 54 da Lei 9.784/99: O direito da Administração de anular atos favoráveis aos administrados decai em 5 anos, salvo comprovada má-fé. Esse dispositivo consagra os princípios da segurança jurídica e da proteção à confiança legítima.'
    },
    {
      id: 8,
      source: 'CEBRASPE – Auditor Federal de Controle Externo / TCU',
      topic: 'Segurança Jurídica e Vedação à Aplicação Retroativa de Nova Interpretação',
      type: 'tf',
      statement: 'O princípio da segurança jurídica veda a aplicação retroativa de nova interpretação jurídica adotada pela Administração Pública a situações pretéritas já consolidadas sob a égide da interpretação anterior.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 2º, parágrafo único, XIII da Lei nº 9.784/1999 e Art. 24 da LINDB proíbem expressamente a aplicação retroativa de nova interpretação para alcançar situações definitivamente constituídas.'
    },
    {
      id: 9,
      source: 'FGV – Auditor do Estado / CGE-SC',
      topic: 'Princípio da Moralidade Administrativa e Distinção da Legalidade',
      type: 'multiple',
      statement: 'A respeito do princípio da moralidade administrativa, doutrina e jurisprudência afirmam que:',
      options: [
        'A moralidade administrativa possui densidade jurídica autônoma, de modo que um ato administrativo pode ser formalmente legal e, simultaneamente, inválido por violação à moralidade e à probidade.',
        'A moralidade confunde-se inteiramente com a moral comum subjetiva de cada agente público.',
        'O vício de imoralidade administrativa não autoriza a propositura de Ação Popular pelo cidadão.',
        'Apenas os atos praticados pelo Presidente da República sujeitam-se ao controle de moralidade.',
        'A moralidade é princípio meramente programático e sem força cogente vinculante.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A moralidade administrativa é princípio constitucional autônomo (Art. 37 CF). Um ato pode cumprir formalmente a letra da lei, mas ser materialmente nulo por desvio moral ou violação à lealdade e boa-fé administrativa (passível de invalidação e ação popular - Art. 5º, LXXIII CF).'
    },
    {
      id: 10,
      source: 'CEBRASPE – Contador / DPE-RO',
      topic: 'Princípio da Continuidade do Serviço Público e Interrupção por Inadimplemento',
      type: 'tf',
      statement: 'Pelo princípio da continuidade do serviço público, é absolutamente vedado à concessionária de energia elétrica suspender o fornecimento de energia a consumidor pessoa física inadimplente, mesmo após prévio aviso formal.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. Segundo a Lei nº 8.987/1995 (Art. 6º, § 3º, II) e a Súmula 356 do STJ, não se caracteriza descontinuidade do serviço a sua suspensão por inadimplemento do usuário, após prévio aviso, considerada a relevância do interesse da coletividade na sustentabilidade financeira do serviço.'
    },
    {
      id: 11,
      source: 'FCC – Auditor Fiscal do Tesouro Estadual / SEFAZ-PE',
      topic: 'Princípio da Proporcionalidade: Elementos Intrínsecos',
      type: 'multiple',
      statement: 'O princípio da proporcionalidade, amplamente aplicado no controle dos atos administrativos restritivos de direitos (como sanções e intervenções no poder de polícia), decompõe-se tradicionalmente em três subprincípios cumulativos:',
      options: [
        'Adequação (idoneidade da medida), Necessidade (vedação do excesso/menor ingerência possível) e Proporcionalidade em sentido estrito (vantagens superiores às desvantagens).',
        'Celeridade, Gratuidade e Economia processual.',
        'Legalidade, Impessoalidade e Publicidade oficial.',
        'Autonomia, Coercibilidade e Autoexecutoriedade imediata.',
        'Motivação, Revogação e Prescritibilidade.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. O teste tripartite da proporcionalidade (doutrina alemã e STF) exige: 1) Adequação (o meio é apto a atingir o fim pretendido?); 2) Necessidade (inexiste meio menos gravoso para o mesmo resultado?); e 3) Proporcionalidade em sentido estrito (relação custo-benefício justa).'
    },
    {
      id: 12,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-RS',
      topic: 'Teoria dos Motivos Determinantes',
      type: 'tf',
      statement: 'Pela Teoria dos Motivos Determinantes, a validade do ato administrativo vincula-se aos motivos de fato e de direito indicados pela autoridade que o praticou, de modo que, se tais motivos forem inexistentes ou falsos, o ato será nulo, mesmo que se trate de ato discricionário para o qual a lei não exigia motivação prévia obrigatória.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. A Teoria dos Motivos Determinantes vincula o ato à fundamentação expressa pelo agente: se a autoridade motivou a exoneração de um servidor comissionado alegando "redução de despesas", e logo em seguida nomeou outro para o mesmo cargo, o ato é nulo pela falsidade do motivo invocado.'
    },
    {
      id: 13,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Princípio da Tutela ou Controle (Supervisão Ministerial)',
      type: 'multiple',
      statement: 'A relação jurídica que une a Administração Pública Direta (Ministérios e Secretarias de Estado) às entidades da Administração Pública Indireta (Autarquias, Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista) é pautada pelo princípio da:',
      options: [
        'Tutela (ou Controle Finalístico / Supervisão Ministerial), não havendo subordinação hierárquica entre elas.',
        'Hierarquia estrita com poder de comando irrestrito e avocação compulsória.',
        'Autoexecutoriedade absoluta sem limites legais.',
        'Supremacia judiciária preliminar.',
        'Desconcentração interna sem outorga de personalidade.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Não há hierarquia nem subordinação entre a Administração Direta e a Indireta, mas sim VINCULAÇÃO (Tutela Administrativa ou Controle Finalístico), destinada a assegurar que as entidades cumpram suas finalidades legais institucionais (Art. 19 do Decreto-Lei 200/67).'
    },
    {
      id: 14,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-CE',
      topic: 'Diferença entre Descentralização e Desconcentração',
      type: 'tf',
      statement: 'A desconcentração administrativa ocorre quando o Estado distribui competências internas dentro de uma mesma pessoa jurídica (criando órgãos despersonalizados), ao passo que a descentralização envolve a transferência de competências para outra pessoa jurídica distinta (como autarquias e empresas públicas).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Mnemônico clássico de concurso: DesCONcentração cria Órgãos (mesma pessoa jurídica); DesCENTralização cria Entes (pessoas jurídicas distintas).'
    },
    {
      id: 15,
      source: 'FCC – Auditor Fiscal / SEFAZ-SC',
      topic: 'Teoria do Órgão e Imputação Volitiva',
      type: 'multiple',
      statement: 'A teoria adotada pelo ordenamento jurídico brasileiro para explicar a relação jurídica entre o Estado e os agentes públicos atuantes em seus órgãos é a:',
      options: [
        'Teoria do Órgão (ou da Imputação Volitiva, desenvolvida por Otto Gierke), segundo a qual a manifestação de vontade do agente público é imputada diretamente à pessoa jurídica de direito público a cujo quadro pertence.',
        'Teoria do Mandato civil com representação procuratória compulsória.',
        'Teoria da Representação Tutelar dos incapazes.',
        'Teoria da Identidade Física absoluta do juiz natural.',
        'Teoria do Risco Integral punitivo.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A Teoria da Imputação Volitiva (Teoria do Órgão) estabelece que a atuação do agente manifesta a própria vontade do órgão que integra o Estado. Quando o Auditor Fiscal autua um contribuinte, é o próprio Estado que está se manifestando.'
    },
    {
      id: 16,
      source: 'CEBRASPE – Auditor Federal / CGU',
      topic: 'Capacidade Processual Especial de Certos Órgãos Independentes',
      type: 'tf',
      statement: 'Embora os órgãos públicos sejam despersonalizados e, em regra geral, não tenham capacidade processual judiciária ativa, o STF e o STJ admitem que determinados órgãos independentes ou autônomos (como Câmaras Municipais e Tribunais de Contas) impetrem Mandado de Segurança na defesa de suas prerrogativas e competências institucionais.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. A jurisprudência admite capacidade processual extraordinária (personalidade judiciária) a órgãos de cúpula para a defesa exclusiva de suas prerrogativas e autonomia orçamentária/institucional.'
    },
    {
      id: 17,
      source: 'FGV – Auditor Federal / TCU',
      topic: 'Presunção de Legitimidade e Veracidade dos Atos Administrativos',
      type: 'multiple',
      statement: 'A presunção de legitimidade e veracidade dos atos administrativos é um atributo que produz o seguinte efeito prático no processo judicial ou administrativo:',
      options: [
        'Inversão do ônus da prova, cabendo ao administrado comprovar que o ato padece de ilegalidade ou que os fatos declarados pela autoridade não são verdadeiros, tratando-se de presunção relativa (juris tantum).',
        'Presunção absoluta (jure et de jure) insuscetível de qualquer prova em contrário pelo particular.',
        'Imunidade jurisdicional definitiva que impede o Poder Judiciário de anular o ato.',
        'Dispensar a Administração de fundamentar seus atos decisórios em processos disciplinares.',
        'Exigência de caução prévia pelo cidadão para ingressar com recurso administrativo.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A presunção de legitimidade (conformidade com a lei) e veracidade (fatos alegados são verdadeiros) é relativa (juris tantum). O ato opera imediatamente seus efeitos e o ônus de provar eventual vício recai sobre o administrado.'
    },
    {
      id: 18,
      source: 'CEBRASPE – Auditor de Controle Externo / TCE-RJ',
      topic: 'Autoexecutoriedade dos Atos Administrativos',
      type: 'tf',
      statement: 'A autoexecutoriedade é um atributo presente em absolutamente todos os atos administrativos, autorizando a Administração a executar diretamente qualquer obrigação pecuniária por seus próprios meios, inclusive promovendo a penhora sumária de contas bancárias do contribuinte sem intervenção judicial.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. A autoexecutoriedade NÃO existe em todos os atos (exige previsão expressa em lei ou situação urgente de perigo iminente). Ademais, a cobrança de multas e créditos tributários NÃO é autoexecutória: exige ajuizamento de Execução Fiscal perante o Judiciário (Lei 6.830/80).'
    },
    {
      id: 19,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'LINDB e Consequências Práticas das Decisões (Art. 20)',
      type: 'multiple',
      statement: 'O Artigo 20 da Lei de Introdução às Normas do Direito Brasileiro (LINDB), incluído pela Lei nº 13.655/2018, dispõe expressamente que nas esferas administrativa, controladora e judicial:',
      options: [
        'Não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão.',
        'A autoridade deve aplicar a letra fria da lei sem perquirir impactos orçamentários ou sociais.',
        'Fica vedada a aplicação de jurisprudência sumulada dos Tribunais de Contas.',
        'As decisões dos órgãos de controle têm efeito absolutório perante a esfera penal.',
        'A discricionariedade administrativa é eliminada em favor de sentenças matemáticas.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 20 da LINDB: "Nas esferas administrativa, controladora e judicial, não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão".'
    },
    {
      id: 20,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'LINDB e Responsabilidade Pessoal do Agente Público (Art. 28)',
      type: 'tf',
      statement: 'Segundo o Artigo 28 da LINDB, o agente público responderá pessoalmente por suas decisões ou opiniões técnicas perante os órgãos de controle exclusivamente em caso de dolo ou erro grosseiro.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 28 da LINDB: "O agente público responderá pessoalmente por suas decisões ou opiniões técnicas em caso de dolo ou erro grosseiro". O STF confirmou a constitucionalidade do dispositivo (ADI 6421).'
    },
    {
      id: 21,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Súmula Vinculante nº 5 do STF e Defesa Técnica no PAD',
      type: 'multiple',
      statement: 'A respeito da necessidade de representação por advogado em Processo Administrativo Disciplinar (PAD), o Supremo Tribunal Federal editou a Súmula Vinculante nº 5, cujo teor prescreve:',
      options: [
        '"A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição."',
        '"É obrigatória a presença de defensor dativo em todos os interrogatórios de servidores públicos."',
        '"O PAD conduzido sem advogado gera nulidade absoluta e insanável desde a portaria inaugural."',
        '"Apenas os servidores estáveis dispensam a presença de advogado constituído."',
        '"A comissão processante deve ser composta exclusivamente por bacharéis em Direito."'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Súmula Vinculante nº 5 do STF: "A falta de defesa técnica por advogado no processo administrativo disciplinar não ofende a Constituição". O servidor pode promover a sua própria autodefesa.'
    },
    {
      id: 22,
      source: 'CEBRASPE – Auditor Federal / CGU',
      topic: 'Súmula 592 do STJ e Excesso de Prazo no PAD',
      type: 'tf',
      statement: 'O excesso de prazo para a conclusão do processo administrativo disciplinar causa nulidade automática e peremptória do processo, extinguindo imediatamente a pretensão punitiva disciplinar da Administração, mesmo que não haja qualquer prejuízo à defesa.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. Súmula 592 do STJ: "O excesso de prazo para a conclusão do processo administrativo disciplinar só causa nulidade se houver demonstração de prejuízo à defesa" (princípio pas de nullité sans grief).'
    },
    {
      id: 23,
      source: 'FCC – Auditor Fiscal / SEFAZ-AP',
      topic: 'Desvio de Finalidade e Vício no Ato Administrativo',
      type: 'multiple',
      statement: 'Quando um gestor público remove compulsoriamente um servidor para localidade remota da comarca como forma disfarçada de punição disciplinar pessoal, o ato de remoção padece de vício de:',
      options: [
        'Desvio de Finalidade (desvio de poder), que afeta o elemento "finalidade" do ato administrativo, tornando-o nulo.',
        'Incompetência relativa suscetível de convalidação.',
        'Vício de forma puramente sanável.',
        'Objeto ilícito com eficácia ex nunc mantida.',
        'Ausência de autoexecutoriedade externa.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A remoção de servidor tem por finalidade legal o atendimento ao interesse do serviço (ajuste de lotação). Usá-la para castigar ou punir desafeto caracteriza Desvio de Finalidade (vício insanável que torna o ato nulo).'
    },
    {
      id: 24,
      source: 'CEBRASPE – Contador / DPE-RO',
      topic: 'Mérito Administrativo e Limites do Controle Jurisdicional',
      type: 'tf',
      statement: 'É vedado ao Poder Judiciário imiscuir-se no mérito administrativo para substituir a valoração de conveniência e oportunidade legitimamente feita pelo Administrador no âmbito de sua competência discricionária.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. O controle jurisdicional sobre atos discricionários restringe-se à legalidade, legitimidade, razoabilidade, proporcionalidade e desvio de poder, sendo vedada a invasão do mérito (conveniência e oportunidade do Executivo).'
    },
    {
      id: 25,
      source: 'FGV – Auditor do Estado / CGE-SC',
      topic: 'Classificação dos Sentidos da Administração Pública',
      type: 'multiple',
      statement: 'A expressão "Administração Pública" grafada em sentido SUBJETIVO, FORMAL ou ORGÂNICO compreende:',
      options: [
        'O conjunto de órgãos públicos, agentes administrativos e pessoas jurídicas que desempenham as funções administrativas do Estado.',
        'A própria atividade administrativa concretamente desempenhada (serviços públicos, fomento, intervenção e polícia).',
        'As diretrizes políticas do Presidente da República consignadas no plano de governo.',
        'Os três Poderes em sua função legiferante típica.',
        'O conjunto de sentenças com trânsito em julgado emitidas pelos tribunais judiciais.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Administração Pública em sentido Subjetivo/Formal/Orgânico responde a "QUEM são os agentes, órgãos e entidades". Em sentido Objetivo/Material/Funcional responde a "O QUE é feito" (a atividade administrativa).'
    },
    {
      id: 26,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-CE',
      topic: 'Centralização Administrativa',
      type: 'tf',
      statement: 'A prestação de serviços de segurança pública pela Polícia Militar do Estado diretamente à população constitui um exemplo típico de administração pública centralizada desconcentrada.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Centralizada porque é prestada pelo próprio Estado (pessoa jurídica federada da Administração Direta); desconcentrada porque é executada por um órgão interno integrante de sua estrutura (a Polícia Militar).'
    },
    {
      id: 27,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Regime Jurídico dos Bens Públicos',
      type: 'multiple',
      statement: 'Os bens públicos de uso especial e de uso comum do povo possuem como prerrogativas de seu regime jurídico:',
      options: [
        'Inalienabilidade (enquanto mantiverem a afetação), imprescritibilidade (não sujeitos a usucapião), impenhorabilidade e não onerabilidade (impossibilidade de hipoteca ou penhor).',
        'Alienabilidade imediata em bolsas de valores sem autorização legislativa.',
        'Penhorabilidade judicial ordinária em ações cíveis de cobrança.',
        'Prescritibilidade por posse mansa e pacífica de terceiros durante 15 anos.',
        'Subordinação obrigatória às regras do Código de Defesa do Consumidor.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Os bens afetados (uso comum e uso especial) são inalienáveis enquanto afetados. Todos os bens públicos (incluindo os dominicais) são imprescritíveis (Súmula 340 do STF: bens públicos não se adquirem por usucapião) e impenhoráveis.'
    },
    {
      id: 28,
      source: 'CEBRASPE – Auditor Federal de Controle Externo / TCU',
      topic: 'Responsabilidade Civil do Estado: Teoria do Risco Administrativo',
      type: 'tf',
      statement: 'A responsabilidade civil das pessoas jurídicas de direito público e das de direito privado prestadoras de serviços públicos por danos causados por seus agentes nessa qualidade é objetiva, prescindindo de comprovação de dolo ou culpa, com base na teoria do risco administrativo.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 37, § 6º da CF/88. A responsabilidade é objetiva com esteio na Teoria do Risco Administrativo (admite excludentes de nexo causal: culpa exclusiva da vítima, caso fortuito/força maior).'
    },
    {
      id: 29,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Direito de Regresso contra Servidor Causador de Dano',
      type: 'multiple',
      statement: 'Na ação regressiva proposta pela Fazenda Pública em face do servidor público que causou dano a terceiro indenizado pelo Estado (Art. 37, § 6º in fine da CF/88):',
      options: [
        'A responsabilidade do servidor é subjetiva, sendo imprescindível a comprovação inequívoca de dolo ou culpa de sua parte.',
        'A responsabilidade do servidor é objetiva por presunção legal absoluta.',
        'O Estado é obrigado a denunciar o servidor à lide compulsoriamente na ação principal movida pela vítima.',
        'A responsabilidade do servidor prescreve no exíguo prazo decadencial de 30 dias contados do fato.',
        'O desconto no contracheque pode ser implementado de ofício sem prévio processo contraditório.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Art. 37, § 6º in fine: O Estado responde objetivamente perante a vítima, mas tem direito de regresso contra o responsável nos casos de DOLO OU CULPA (responsabilidade subjetiva do servidor).'
    },
    {
      id: 30,
      source: 'CEBRASPE – Auditor Federal / CGU',
      topic: 'Tema 940 do STF e Ajuizamento Direto contra Servidor',
      type: 'tf',
      statement: 'O Supremo Tribunal Federal, ao julgar o Tema 940 da Repercussão Geral, fixou a tese de que a ação de reparação de danos decorrentes de ato funcional deve ser ajuizada obrigatoriamente em face do Estado ou da pessoa jurídica prestadora do serviço público, sendo o servidor parte ilegítima para figurar no polo passivo da ação proposta pela vítima.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Tema 940 STF: A vítima não pode ajuizar a ação de indenização diretamente contra o agente público nem em litisconsórcio com ele; deve acionar a pessoa jurídica estatal, cabendo a esta mover a competente ação de regresso contra o servidor.'
    },
    {
      id: 31,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Poder de Polícia: Atributos Clássicos',
      type: 'multiple',
      statement: 'São atributos ou características peculiares que qualificam a manifestação do Poder de Polícia da Administração Pública:',
      options: [
        'Discricionariedade, autoexecutoriedade e coercibilidade.',
        'Bilateralidade, comutatividade e consensualidade negocial.',
        'Irrevogabilidade, gratuidade universal e sigilo absoluto.',
        'Subordinação hierárquica aos conselhos comunitários de bairro.',
        'Dependência obrigatória de decisão liminar expedida por juízo cível.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Atributos do poder de polícia: 1) Discricionariedade (margem de escolha na conveniência da fiscalização); 2) Autoexecutoriedade (capacidade de agir de ofício sem autorização judicial prévia); e 3) Coercibilidade (imposição forçada da obrigação).'
    },
    {
      id: 32,
      source: 'CEBRASPE – Auditor de Controle Interno / CGE-AL',
      topic: 'Delegação do Poder de Polícia a Pessoas Jurídicas Privadas (Tema 532 STF)',
      type: 'tf',
      statement: 'O STF, no julgamento do Tema 532 da Repercussão Geral, fixou a tese de que é constitucional a delegação do poder de polícia sancionatório a empresas estatais prestadoras de serviços públicos em regime não concorrencial e de capital social majoritariamente público.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Tema 532 STF: É constitucional a delegação das fases de fiscalização e sanção do poder de polícia a pessoas jurídicas de direito privado integrantes da administração pública indireta de capital social majoritariamente público que prestem exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial (ex: BHTrans).'
    },
    {
      id: 33,
      source: 'FGV – Contador / SEFAZ-AM',
      topic: 'Poder Regulamentar e seus Limites',
      type: 'multiple',
      statement: 'O Poder Regulamentar (ou Poder Normativo) do Chefe do Poder Executivo (Art. 84, IV da CF/88) possui como limite intransponível:',
      options: [
        'A impossibilidade de criar direitos, obrigações ou impor proibições não previstas expressamente na lei, sob pena de usurpação de competência legislativa.',
        'A exigência de homologação prévia por comissão mista do Congresso Nacional.',
        'A necessidade de realização de plebiscito popular para cada decreto regulamentar.',
        'A impossibilidade de dispor sobre a organização da administração pública.',
        'A restrição exclusiva ao âmbito das sanções disciplinares a servidores estáveis.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. O poder regulamentar é secundário e subordinado à lei formal. Regulamento não inova na ordem jurídica; não cria deveres ou sanções que não tenham assento prévio na lei (princípio da reserva legal).'
    },
    {
      id: 34,
      source: 'CEBRASPE – Auditor de Controle Externo / TCE-RJ',
      topic: 'Decreto Autônomo (Art. 84, VI da CF/88)',
      type: 'tf',
      statement: 'O Chefe do Poder Executivo pode expedir decretos autônomos para dispor sobre a organização e funcionamento da administração federal quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos, bem como para a extinção de funções ou cargos públicos quando vagos.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Exceção expressa trazida pela EC 19/98 no Art. 84, VI da CF/88: cabe decreto autônomo para: a) organização e funcionamento da administração sem aumento de despesa e sem criar/extinguir órgãos; b) extinção de funções ou cargos públicos vagos.'
    },
    {
      id: 35,
      source: 'FCC – Analista de Controle Externo / TCE-AP',
      topic: 'Poder Disciplinar e Poder Hierárquico: Distinção',
      type: 'multiple',
      statement: 'A punição disciplinar aplicada pela autoridade competente a um servidor público estável com esteio no Estatuto dos Servidores decorre primariamente do exercício conjugado dos poderes:',
      options: [
        'Hierárquico e Disciplinar.',
        'De Polícia e Regulamentar.',
        'Normativo e Jurisdicional.',
        'Vinculante e Pretoriano.',
        'Tributário e Fiscalizatório de Rendas.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A aplicação de sanções internas a servidores submetidos à hierarquia administrativa decorre do Poder Disciplinar, que se alicerça na estrutura escalonada do Poder Hierárquico.'
    },
    {
      id: 36,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Poder Disciplinar vs Poder de Polícia na Aplicação de Sanções',
      type: 'tf',
      statement: 'A multa aplicada pela vigilância sanitária a uma padaria privada decorre do poder disciplinar da Administração, pois houve infração a norma regulamentar de higiene.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. Sanção a particular sem vínculo específico com o Estado (geral) decorre do PODER DE POLÍCIA. O poder disciplinar exige vínculo especial de sujeição (servidores públicos ou particulares contratados/conveniados).'
    },
    {
      id: 37,
      source: 'FGV – Auditor Federal / CGU',
      topic: 'Requisitos/Elementos do Ato Administrativo (COMFIFOR)',
      type: 'multiple',
      statement: 'A doutrina de Hely Lopes Meirelles consagra cinco elementos estruturais essenciais e indispensáveis à validade de qualquer ato administrativo:',
      options: [
        'Competência, Finalidade, Forma, Motivo e Objeto.',
        'Conveniência, Oportunidade, Razoabilidade, Celeridade e Gratuidade.',
        'Autotutela, Hierarquia, Disciplina, Coerção e Vinculação.',
        'Lançamento, Arrecadação, Empenho, Liquidação e Pagamento.',
        'Autoexecutoriedade, Imperatividade, Exigibilidade, Tipicidade e Legalidade.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Elementos clássicos do ato administrativo (mnemônico CO-FI-FO-M-OB): Competência (quem pratica), Finalidade (interesse público), Forma (como se exterioriza), Motivo (pressupostos de fato e de direito) e Objeto (o efeito prático gerado).'
    },
    {
      id: 38,
      source: 'CEBRASPE – Auditor Federal de Controle Externo / TCU',
      topic: 'Elementos Vinculados e Discricionários do Ato Administrativo',
      type: 'tf',
      statement: 'Em um ato administrativo discricionário, todos os cinco elementos estruturais do ato (competência, finalidade, forma, motivo e objeto) são discricionários e flexíveis à escolha pessoal do administrador.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. Em regra, a Competência, a Finalidade e a Forma são SEMPRE elementos VINCULADOS pela lei. A discricionariedade (margem de mérito administrativo) situa-se precipuamente no MOTIVO e no OBJETO.'
    },
    {
      id: 39,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Convalidação de Atos Administrativos (Art. 55 da Lei 9.784/99)',
      type: 'multiple',
      statement: 'A convalidação (ou sanatória) de um ato administrativo viciado é admitida pelo ordenamento jurídico quando:',
      options: [
        'O vício residir exclusivamente na competência (desde que não seja exclusiva) ou na forma (desde que a lei não a declare essencial e solene), não acarretar lesão ao interesse público nem prejuízo a terceiros.',
        'O vício consistir em desvio de finalidade comprovado.',
        'O motivo for flagrantemente falso ou juridicamente inexistente.',
        'O objeto da decisão for expressamente proibido pela legislação penal.',
        'O ato tiver sido praticado por autoridade desprovida de investidura funcional.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Conforme Art. 55 da Lei 9.784/99, são convalidáveis os atos com defeitos sanáveis: vício de competência (não exclusiva) e vício de forma (quando a lei não exigir forma solene como requisito de validade), sem lesão ao erário nem a terceiros.'
    },
    {
      id: 40,
      source: 'CEBRASPE – Contador / DPE-RO',
      topic: 'Efeitos da Revogação e Anulação do Ato Administrativo',
      type: 'tf',
      statement: 'A anulação do ato administrativo por ilegalidade produz efeitos retroativos ex tunc (atingindo o ato desde a sua origem), ao passo que a revogação do ato válido por motivo de conveniência produz efeitos prospectivos ex nunc (a partir da data da decisão revocatória).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Anulação = Ilegalidade -> Efeito ex tunc (retroativo). Revogação = Mérito (conveniência/oportunidade) -> Efeito ex nunc (não retroativo), preservando efeitos passados.'
    },
    {
      id: 41,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Atos Administrativos que NÃO Admitem Revogação',
      type: 'multiple',
      statement: 'São espécies de atos administrativos que NÃO admitem revogação pela Administração Pública:',
      options: [
        'Atos vinculados, atos consumados (cujos efeitos já se exauriram), atos que geraram direito adquirido e atos enunciativos.',
        'Autorizações de uso de bem público e permissões a título precário.',
        'Portarias de lotação interna de servidores em cargos comissionados.',
        'Editais de licitação pública antes da publicação final no diário oficial.',
        'Despachos discricionários pendentes de cumprimento.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Não admitem revogação: 1) Atos vinculados (não há mérito a rever); 2) Atos consumados (já exauriram seus efeitos); 3) Atos que geraram direito adquirido (Súmula 473 STF); 4) Atos enunciativos/declaratórios (certidões, atestados); 5) Atos que integram procedimento complexo já superado.'
    },
    {
      id: 42,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-CE',
      topic: 'Atos Complexos vs Atos Compostos',
      type: 'tf',
      statement: 'O ato complexo é aquele que se aperfeiçoa com a manifestação de vontades de dois ou mais órgãos ou entidades distintas que se fundem em um ato único (como a concessão de aposentadoria sujeita a registro pelo Tribunal de Contas), enquanto o ato composto resulta da manifestação de um órgão principal subordinada à aprovação ou homologação de outro.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Súmula Vinculante nº 3 do STF e jurisprudência pacífica: Aposentadoria pública é ato COMPLEXO, aperfeiçoando-se somente após o julgamento de legalidade e registro perante o Tribunal de Contas.'
    },
    {
      id: 43,
      source: 'FCC – Auditor Fiscal / SEFAZ-SC',
      topic: 'Prazo para o Tribunal de Contas Apreciar Aposentadoria (Tema 445 STF)',
      type: 'multiple',
      statement: 'Em julgamento histórico do Tema 445 da Repercussão Geral, o Supremo Tribunal Federal assentou que os Tribunais de Contas estão sujeitos ao prazo decaiu de:',
      options: [
        '5 (cinco) anos para o julgamento da legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, contado da chegada do processo à Corte de Contas, sob pena de registro tácito.',
        '10 (dez) anos contados da publicação no diário oficial do Poder Executivo.',
        'Prazo nenhum, em face da imprescritibilidade dos atos de concessão de benefícios previdenciários.',
        '2 (dois) anos improrrogáveis contados da certidão de tempo de contribuição.',
        '30 (trinta) dias após o parecer da assessoria jurídica do Ministério Público.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Tema 445 STF: O Tribunal de Contas tem 5 anos a contar da chegada do processo ao tribunal para apreciar a concessão inicial de aposentadoria/pensão. Transcorrido esse prazo sem decisão, opera-se o registro tácito do ato.'
    },
    {
      id: 44,
      source: 'CEBRASPE – Auditor Federal / CGU',
      topic: 'Abuso de Poder: Excesso de Poder vs Desvio de Poder',
      type: 'tf',
      statement: 'O abuso de poder é gênero que compreende duas espécies autônomas: o excesso de poder (em que o agente público atua além dos limites de sua competência legal) e o desvio de poder ou finalidade (em que o agente atua dentro de sua competência, mas com finalidade alheia ao interesse público).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Doutrina de Celso Antônio Bandeira de Mello e Hely Lopes Meirelles: Abuso de poder = Excesso de poder (vício no elemento competência) + Desvio de poder/finalidade (vício no elemento finalidade).'
    },
    {
      id: 45,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Fontes do Direito Administrativo',
      type: 'multiple',
      statement: 'No estudo das fontes do Direito Administrativo brasileiro, a única fonte primária e direta que inova originariamente no ordenamento jurídico impondo deveres gerais coercitivos é a:',
      options: [
        'Lei em sentido formal e material.',
        'Doutrina dos administrativistas consagrados.',
        'Jurisprudência reiterada das varas de fazenda pública.',
        'Súmula de jurisprudência sem efeito vinculante.',
        'Praxe cartorária e os costumes reiterados.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A LEI (em sentido amplo, abrangendo a CF e as leis em sentido formal) é a única fonte PRIMÁRIA do Direito Administrativo. Doutrina, jurisprudência e costumes são fontes secundárias/indiretas.'
    },
    {
      id: 46,
      source: 'CEBRASPE – Auditor de Controle Externo / TCE-RJ',
      topic: 'Costume Administrativo e a Praxe',
      type: 'tf',
      statement: 'O costume administrativo (praxe administrativa) contra legem tem força jurídica para revogar mandamento expresso de lei formal federal caso seja praticado de forma contínua e reiterada há mais de dez anos.',
      options: ['Certo', 'Errado'],
      correctAnswer: 1,
      explanation: 'Gabarito: ERRADO. O costume contra legem é juridicamente nulo e ineficaz. O costume só é aceito secundariamente secundum legem ou praeter legem (para integrar lacunas quando não conflita com a lei).'
    },
    {
      id: 47,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Princípio da Especialidade na Administração Indireta',
      type: 'multiple',
      statement: 'O Princípio da Especialidade impõe que as entidades da Administração Pública Indireta (ex: autarquias federais e estaduais):',
      options: [
        'Não podem desviar-se dos objetivos e finalidades específicas expressamente previstos na sua lei autorizadora ou instituidora.',
        'Devem contratar servidores públicos sem concurso de provas e títulos.',
        'Gozem de imunidade penal e tributária em atividades comerciais concorrenciais.',
        'Fiquem isentas da prestação de contas aos Tribunais de Contas.',
        'Tenham mandatos vitalícios para toda a diretoria colegiada.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Pelo princípio da especialidade, a entidade criada pelo Estado tem sua capacidade jurídica restrita aos fins específicos fixados pela lei que a criou/autorizou, sendo vedada a exploração de atividades estranhas a seu escopo.'
    },
    {
      id: 48,
      source: 'CEBRASPE – Auditor Federal / CGU',
      topic: 'VEDAÇÃO À CUMULAÇÃO REMUNERADA DE CARGOS PÚBLICOS',
      type: 'tf',
      statement: 'A regra constitucional estabelece a vedação à acumulação remunerada de cargos públicos, admitindo-se, quando houver compatibilidade de horários, apenas: a) dois cargos de professor; b) um cargo de professor com outro técnico ou científico; c) dois cargos ou empregos privativos de profissionais de saúde com profissões regulamentadas.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 37, XVI da CF/88 enumera exaustivamente as três únicas hipóteses constitucionais permitidas para acumulação remunerada de cargos, desde que haja compatibilidade de horários.'
    },
    {
      id: 49,
      source: 'FGV – Auditor do Estado / CGE-SC',
      topic: 'Regime da Invalidação de Atos Administrativos no STF',
      type: 'multiple',
      statement: 'Segundo a jurisprudência fixada pelo STF, a anulação de ato administrativo de cuja revogação decorram efeitos favoráveis a servidor ou particular:',
      options: [
        'Exige a prévia instauração de procedimento administrativo com garantia do contraditório e da ampla defesa ao administrado.',
        'Pode ser promovida sumariamente sem prévia notificação, bastando despacho monocrático da autoridade.',
        'Fica condicionada à autorização da Procuradoria Geral do Estado no prazo de 48 horas.',
        'Só pode ser deflagrada mediante ação rescisória ajuizada na Vara de Fazenda Pública.',
        'Extingue automaticamente todas as responsabilidades civis do gestor.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Súmula Vinculante nº 3 do STF e Súmula 473: A autotutela administrativa não é absoluta; a anulação de ato que afete situação individual de particular exige oportunidade prévia de contraditório e ampla defesa.'
    },
    {
      id: 50,
      source: 'CEBRASPE – Contador / SEFAZ-AL',
      topic: 'Princípio da Subsidiariedade no Direito Administrativo',
      type: 'tf',
      statement: 'Pelo princípio da subsidiariedade, a intervenção do Estado na exploração direta da atividade econômica é excepcional e subsidiária, cabendo apenas quando necessária aos imperativos da segurança nacional ou a relevante interesse coletivo definidos em lei (Art. 173 da CF/88).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Art. 173 da CF/88 consagra o princípio da subsidiariedade da atuação econômica estatal: a regra geral é o regime de livre iniciativa privada, sendo a exploração direta pelo Estado restrita a imperativos de segurança nacional ou relevante interesse coletivo.'
    }
  ],

  // ── Aula 02: Poderes Administrativos ───────────────────────────────────────
  2: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP',
      topic: 'Poder de Polícia Administrativa e seus Atributos',
      type: 'multiple',
      statement: 'O Poder de Polícia é a faculdade de que dispõe a administração pública para condicionar e restringir o uso e gozo de bens, atividades e direitos individuais, em benefício da coletividade ou do próprio Estado (Art. 78 do CTN). São atributos clássicos do poder de polícia:',
      options: [
        'Irrevogabilidade, publicidade e bilateralidade negocial.',
        'Discricionariedade, autoexecutoriedade e coercibilidade.',
        'Imprescritibilidade, hierarquia e subsidiariedade civil.',
        'Tipicidade absoluta, imutabilidade e imediatidade judicial.',
        'Indelegabilidade absoluta a qualquer entidade estatal descentralizada.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Os atributos clássicos do poder de polícia (mnemônico DAC) são: 1) Discricionariedade (margem de escolha de conveniência e oportunidade nos limites da lei na maioria dos atos); 2) Autoexecutoriedade (capacidade de executar diretamente a medida sem prévia autorização judicial); e 3) Coercibilidade (imposição forçada da obrigação ao particular).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-BA',
      topic: 'Poder Disciplinar vs Poder Hierárquico',
      type: 'tf',
      statement: 'A sanção administrativa de suspensão aplicada por autoridade fazendária competente a auditor fiscal estadual em decorrência de infração funcional apurada em regular processo administrativo disciplinar fundamenta-se precipuamente no poder disciplinar da Administração, o qual opera no âmbito interno das relações de sujeição especial.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. O poder disciplinar é o poder-dever conferido à Administração para apurar infrações e aplicar penalidades aos servidores públicos e a particulares que com ela mantenham vínculo jurídico especial (contratados, concessionários), ao passo que o poder de polícia atinge a coletividade em geral em vínculo geral.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-SC',
      topic: 'Abuso de Poder: Excesso de Poder e Desvio de Finalidade',
      type: 'multiple',
      statement: 'O abuso de poder é gênero que abrange duas espécies autônomas de ilegalidade administrativa: o excesso de poder e o desvio de finalidade (desvio de poder). Configura hipótese típica de DESVIO DE FINALIDADE:',
      options: [
        'O ato praticado por autoridade pública atuando além dos limites materiais de sua competência legal atribuída.',
        'A remoção de servidor público de sua lotação original adotada pela chefia com intuito de perseguição política ou punição dissimulada, desviando-se do interesse público.',
        'A lavratura de auto de infração por funcionário que não detém atribuição legal privativa de auditor fiscal.',
        'A interdição de estabelecimento comercial com fundamento em risco iminente de desabamento estrutural.',
        'A aplicação de penalidade contratual sem oportunizar prévio contraditório ao particular contratado.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O desvio de finalidade ocorre quando o agente atua dentro de sua competência legal, mas pratica o ato visando a um fim alheio ao interesse público ou diverso daquele fixado em lei para a espécie (ex: remover servidor para castigá-lo pessoalmente). O excesso de poder, por sua vez, ocorre quando o agente ultrapassa os limites de sua competência legal.'
    }
  ],

  // ── Aula 03: Atos Administrativos (Requisitos e Atributos) ───────────────────
  3: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-MG',
      topic: 'Elementos/Requisitos do Ato Administrativo (COMFIFOR)',
      type: 'multiple',
      statement: 'A doutrina de Hely Lopes Meirelles sistematiza os cinco elementos (requisitos de validade) essenciais à existência e eficácia do ato administrativo: competência, finalidade, forma, motivo e objeto. A respeito desses elementos e da possibilidade de convalidação, assinale a afirmativa correta:',
      options: [
        'O motivo do ato administrativo equivale sempre à motivação, sendo dispensável a congruência entre a situação de fato alegada e a realidade.',
        'Os vícios de competência (desde que não exclusiva) e os vícios de forma (desde que a lei não a exija expressamente como da essência do ato) admitem convalidação pela própria Administração se não causarem lesão ao interesse público nem prejuízo a terceiros.',
        'O desvio de finalidade pode ser perfeitamente convalidado mediante despacho fundamentado da autoridade superior hierárquica.',
        'O objeto do ato administrativo vinculado pode ser convalidado mesmo quando for ilícito ou juridicamente impossível.',
        'A competência é elemento eminentemente discricionário, podendo o agente escolher a seu critério se a exercerá ou transferirá a terceiro particular.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Nos termos do Art. 55 da Lei nº 9.784/1999 e da melhor doutrina, somente os vícios sanáveis de COMPETÊNCIA (desde que não se trate de competência em razão da matéria ou exclusiva) e de FORMA (quando não exigida como solene/ad substantiam) admitem convalidação (sanatória), retroagindo os efeitos ao momento original (ex tunc).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor do Estado / CGE-SC',
      topic: 'Teoria dos Motivos Determinantes',
      type: 'tf',
      statement: 'A convalidação dos atos administrativos consiste no suprimento da invalidade de um ato com efeitos retroativos (ex tunc). De acordo com a doutrina e a Lei nº 9.784/1999, são passíveis de convalidação pela própria Administração os atos com defeitos sanáveis relativos à competência (não exclusiva) e à forma (não essencial).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. A Teoria dos Motivos Determinantes estabelece que, se a autoridade explicita os motivos de fato e de direito do ato (mesmo em ato discricionário cuja motivação fosse dispensada em tese), fica juridicamente vinculada a eles. Se comprovada a falsidade ou inexistência desses motivos, o ato é nulo de pleno direito.'
    }
  ],

  // ── Aula 09: Licitações Públicas (Lei nº 14.133/2021 - Modalidades e Contratação Direta) ─
  9: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Modalidades de Licitação na Nova Lei (Lei nº 14.133/2021)',
      type: 'multiple',
      statement: 'A Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos) promoveu profunda reformulação nas modalidades licitatórias do Direito Administrativo brasileiro. Nos termos do Art. 28 da referida lei, são modalidades de licitação expressamente previstas:',
      options: [
        'Pregão, concorrência, concurso, leilão e diálogo competitivo.',
        'Pregão, concorrência, tomada de preços, convite e leilão.',
        'Concorrência, diálogo competitivo, consulta e tomada de preços.',
        'Pregão eletrônico, convite, concorrência internacional e leilão reverso.',
        'Concurso, diálogo concorrencial, tomada de preços e pregão presencial exclusivo.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Artigo 28 da Lei nº 14.133/2021: São modalidades de licitação: I - pregão; II - concorrência; III - concurso; IV - leilão; V - diálogo competitivo. A Lei 14.133 extinguiu em definitivo as modalidades Tomada de Preços e Convite, bem como não incorporou a Consulta (específica das agências reguladoras na Lei 9.472).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-DF',
      topic: 'Inexigibilidade de Licitação (Art. 74 da Lei nº 14.133/2021)',
      type: 'tf',
      statement: 'A contratação de serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de publicidade e divulgação, constitui hipótese legal de INEXIGIBILIDADE de licitação, tendo em vista a inviabilidade de competição.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 74, III da Lei nº 14.133/2021: É inexigível a licitação para contratação de serviços técnicos especializados de natureza predominantemente intelectual prestados por profissionais ou empresas de notória especialização, vedada expressamente a inexigibilidade para serviços de publicidade e divulgação (para os quais a licitação é obrigatória).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal / SEFAZ-PE',
      topic: 'Dispensa vs Inexigibilidade de Licitação',
      type: 'multiple',
      statement: 'No sistema de contratações públicas da Lei nº 14.133/2021, a contratação direta sem licitação pode ocorrer por Inexigibilidade (Art. 74) ou por Dispensa de Licitação (Art. 75). É hipótese típica e expressa de DISPENSA DE LICITAÇÃO:',
      options: [
        'Aquisição de materiais, equipamentos ou gêneros que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivo.',
        'Contratação de profissional do setor artístico, diretamente ou por meio de empresário exclusivo, consagrado pela crítica especializada ou pela opinião pública.',
        'Contratação que envolva valores inferiores a R$ 100.000,00 (atualizados periodicamente), no caso de obras e serviços de engenharia ou de serviços de manutenção de veículos automotores.',
        'Contratação de objetos que devam ou possam ser contratados por meio de credenciamento.',
        'Aquisição ou locação de imóvel cujas características de instalações e de localização tornem necessária sua escolha com inviabilidade de competição.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. A contratação em razão do valor (pequeno valor, Art. 75, I e II da Lei 14.133/2021) é hipótese legal expressa de licitação DISPENSÁVEL. As alternativas A, B, D e E constituem hipóteses de INEXIGIBILIDADE de licitação disciplinadas no Artigo 74, incisos I, II, IV e V.'
    }
  ],

  // ── Aula 11: Contratos Administrativos (Lei nº 14.133/2021) ─────────────────
  11: [
    {
      id: 1,
      source: 'FGV – Auditor do Estado / CGE-SC',
      topic: 'Cláusulas Exorbitantes nos Contratos Administrativos',
      type: 'multiple',
      statement: 'Os contratos regidos pela Lei nº 14.133/2021 conferem prerrogativas extraordinárias à Administração Pública decorrentes da supremacia do interesse público (cláusulas exorbitantes, Art. 104). Dentre essas prerrogativas expressas, NÃO se inclui:',
      options: [
        'A prerrogativa de modificá-los unilateralmente, para melhor adequação às finalidades de interesse público, respeitados os direitos do contratado.',
        'A prerrogativa de extingui-los unilateralmente nos casos especificados em lei.',
        'A prerrogativa de fiscalizar sua execução diretamente ou por terceiros contratados.',
        'A prerrogativa de alterar unilateralmente o equilíbrio econômico-financeiro sem necessidade de recomposição do valor do contrato.',
        'A prerrogativa de aplicar sanções motivadas pela inexecução total ou parcial do ajuste.'
      ],
      correctAnswer: 3,
      explanation: 'Gabarito: D. A manutenção do equilíbrio econômico-financeiro da equação inicial do contrato é garantia constitucional (Art. 37, XXI da CF/88) e legal (Art. 124, II, "d" e Art. 130 da Lei 14.133/2021) do contratado. A Administração pode alterar unilateralmente o projeto ou as quantidades (nos limites legais de 25% ou 50%), mas é expressamente OBRIGADA a restabelecer o equilíbrio econômico-financeiro mediante reajuste ou repactuação.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-CE',
      topic: 'Extinção do Contrato e Exceção do Contrato Não Cumprido',
      type: 'tf',
      statement: 'Na Nova Lei de Licitações (Lei nº 14.133/2021), é direito do contratado suspender o cumprimento de suas obrigações ou pleitear a extinção do contrato administrativo na hipótese de atraso superior a 2 (dois) meses dos pagamentos devidos pela Administração decorrentes de parcelas já executadas e faturadas, salvo em caso de calamidade pública, grave perturbação da ordem interna ou guerra.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 137, § 2º, IV da Lei nº 14.133/2021: O contratado tem direito à extinção ou à suspensão da execução na ocorrência de atraso de pagamento superior a 2 meses (reduzindo o antigo prazo de 90 dias da Lei 8.666/93 para 2 meses), ressalvadas as hipóteses excepcionais de calamidade ou guerra.'
    }
  ],

  // ── Aula 14: Responsabilidade Civil do Estado ──────────────────────────────
  14: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Teoria do Risco Administrativo e Tema 940 do STF',
      type: 'multiple',
      statement: 'O Artigo 37, § 6º, da Constituição Federal dispõe que as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa. Com esteio na jurisprudência vinculante fixada pelo STF no Tema 940 da repercussão geral, assinale a afirmativa correta:',
      options: [
        'A vítima de dano causado por agente público pode propor a ação indenizatória diretamente e exclusivamente contra o servidor culpado.',
        'A ação por danos causados por agente público deve ser ajuizada necessariamente contra a pessoa jurídica de direito público ou prestadora de serviço, sendo vedado o ajuizamento direto contra o servidor ou a sua inclusão no polo passivo em litisconsórcio passivo facultativo.',
        'A responsabilidade civil do Estado em razão de conduta comissiva de seus agentes é subjetiva, exigindo da vítima prova de imperícia ou negligência funcional.',
        'A culpa exclusiva da vítima não exclui a responsabilidade objetiva do Estado pela teoria do risco administrativo.',
        'A ação regressiva contra o servidor público independe de comprovação de elemento subjetivo de dolo ou culpa.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Tese do Tema 940 do STF (RE 1.027.633): "A teor do disposto no art. 37, § 6º, da Constituição Federal, a ação por danos causados por agente público (integrante da administração direta ou indireta) deve ser ajuizada contra o Estado ou a pessoa jurídica de direito privado prestadora de serviço público, sendo parte ilegítima para a ação o autor do ato, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa". O lesado não pode demandar diretamente o servidor.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-AL',
      topic: 'Responsabilidade por Omissão Estatal',
      type: 'tf',
      statement: 'Tratando-se de ato omissivo genérico da Administração Pública, a jurisprudência majoritária do STF e do STJ perfilha o entendimento de que a responsabilidade civil do Estado é, em regra, subjetiva, exigindo a comprovação do descumprimento do dever legal de agir decorrente da falta do serviço público (faute du service).',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Em caso de omissão estatal genérica, vigora a responsabilidade civil subjetiva fundada na culpa do serviço (o serviço não funcionou, funcionou mal ou funcionou com atraso). Excepciona-se a omissão específica (quando o Estado tem o dever legal e imediato de garantir a integridade física de pessoas ou bens sob sua custódia direta, como presos ou alunos em escola pública), onde a responsabilidade é objetiva.'
    }
  ],

  // ── Aula 16: Improbidade Administrativa (Lei nº 8.429/1992 e Lei nº 14.230/2021) ───
  16: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-AM',
      topic: 'Elemento Subjetivo e Alterações da Lei nº 14.230/2021',
      type: 'multiple',
      statement: 'A Lei nº 14.230/2021 introduziu alterações estruturais na Lei nº 8.429/1992 (Lei de Improbidade Administrativa). Quanto ao elemento subjetivo indispensável para a configuração dos atos de improbidade administrativa, assinale a afirmativa correta:',
      options: [
        'Os atos que causam prejuízo ao erário (Art. 10) continuam admitindo punição na modalidade estritamente culposa (negligência ou imprudência grave).',
        'Exige-se a demonstração de dolo específico para a configuração de qualquer ato de improbidade administrativa, conceituado como a vontade livre e consciente de alcançar o resultado ilícito tipificado nos artigos 9º, 10 e 11 da lei, sendo revogada a modalidade culposa.',
        'O mero voluntarismo na atuação administrativa, sem comprovação de má-fé, é suficiente para caracterizar ato de improbidade com perda do cargo.',
        'A divergência interpretativa da lei baseada em jurisprudência não pacificada tipifica ato de improbidade atentatório aos princípios da administração.',
        'A ação de improbidade pode ser ajuizada concorrentemente pela Procuradoria-Geral do Estado e pelo Ministério Público sem qualquer restrição.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Conforme os Arts. 1º, §§ 1º, 2º e 3º da Lei nº 8.429/1992 com a redação da Lei nº 14.230/2021 e pacificado pelo STF no Tema 1.199 da repercussão geral: Todos os atos de improbidade (Arts. 9º, 10 e 11) exigem OBRIGATORIAMENTE dolo específico (vontade livre e consciente de cometer a conduta ilícita tipificada). Não há mais ato de improbidade culposo no direito brasileiro.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal / SEFAZ-DF',
      topic: 'Prescrição na Ação de Improbidade Administrativa',
      type: 'tf',
      statement: 'Com o advento da Lei nº 14.230/2021, a ação de improbidade administrativa prescreve em 8 (oito) anos, contados a partir da data da ocorrência do fato ou, no caso de infrações permanentes, do dia em que tiver cessado a permanência.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Artigo 23, caput da Lei nº 8.429/1992 (com redação da Lei nº 14.230/2021): Fixou-se prazo prescricional unificado de 8 anos a contar do fato (ou da cessação da permanência), extinguindo os antigos prazos contados do término do mandato eletivo.'
    }
  ]
};
