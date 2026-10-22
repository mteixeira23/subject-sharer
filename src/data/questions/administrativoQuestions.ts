import { QuestionData } from '../aula00Questions';

export const ADMINISTRATIVO_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Princípios do Direito Administrativo ───────────────────────────
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
      statement: 'Pela Teoria dos Motivos Determinantes, a validade do ato administrativo fica vinculada à veracidade e procedência dos motivos expostos pela autoridade como justificativa para sua edição, de forma que, se os motivos declarados forem inexistentes ou falsos, o ato será nulo, ainda que a sua motivação original fosse facultativa por lei.',
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
