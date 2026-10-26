import { QuestionData } from '../aula00Questions';

export const AUDITORIA_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Introdução à Auditoria (NBC TA 200) ───────────────────────────
  0: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Objetivos Gerais do Auditor Independente (NBC TA 200 R1)',
      type: 'multiple',
      statement: 'De acordo com a NBC TA 200 (R1) – Objetivos Gerais do Auditor Independente e a Condução da Auditoria em Conformidade com Normas de Auditoria, o auditor deve obter asseguração razoável de que as demonstrações contábeis como um todo estão livres de distorção relevante. Sobre a asseguração razoável, assinale a afirmativa correta:',
      options: [
        'É um nível absoluto de garantia de que nenhuma irregularidade deixou de ser detectada na auditoria.',
        'É um nível alto, mas não absoluto, de certeza, em virtude das limitações inerentes de uma auditoria.',
        'Substitui a responsabilidade primária da administração na elaboração das demonstrações contábeis.',
        'Pode ser dispensada caso a empresa auditada possua comitê de auditoria interna independente.',
        'Equivale à garantia de viabilidade futura da entidade e à eficiência de sua administração.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Conforme a NBC TA 200 (R1), item 5, a asseguração razoável é um nível elevado de certeza, mas não absoluto, devido às limitações inerentes à auditoria (uso de testes por amostragem, julgamento profissional e limitações do controle interno).'
    },
    {
      id: 2,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Ceticismo Profissional',
      type: 'tf',
      statement: 'O ceticismo profissional é a postura que inclui uma mente alerta para condições que possam indicar possível distorção decorrente de erro ou fraude e uma avaliação crítica das evidências de auditoria.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Literalidade da NBC TA 200 (R1), item 13: O ceticismo profissional exige que o auditor reconheça que podem existir circunstâncias que causem distorção relevante nas demonstrações contábeis.'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-SC (2018)',
      topic: 'Risco de Auditoria e seus Componentes',
      type: 'multiple',
      statement: 'O Risco de Auditoria é a possibilidade de o auditor expressar uma opinião inadequada quando as demonstrações contábeis contiverem distorção relevante. Ele é composto pelo produto dos seguintes riscos:',
      options: [
        'Risco de Inerência e Risco de Crédito.',
        'Risco de Distorção Relevante (Risco Inerente x Risco de Controle) e Risco de Detecção.',
        'Risco de Mercado, Risco Operacional e Risco Sistêmico.',
        'Risco de Fraude, Risco de Falência e Risco Cambial.',
        'Risco Amostral e Risco de Negócio apenas.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Matriz da NBC TA 200: Risco de Auditoria (RA) = Risco de Distorção Relevante (RDR = Risco Inerente x Risco de Controle) x Risco de Detecção (RD). O Risco de Detecção é o único controlado e reduzido diretamente pelos procedimentos do auditor.'
    }
  ],

  // ── Aula 03: Evidência de Auditoria (NBC TA 500) ───────────────────────────
  3: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Suficiência e Apropriação da Evidência (NBC TA 500)',
      type: 'multiple',
      statement: 'Na execução dos trabalhos de auditoria, o auditor deve obter evidência de auditoria apropriada e suficiente para fundamentar suas conclusões. Os conceitos de suficiência e apropriação referem-se, respectivamente, à:',
      options: [
        'Forma física dos documentos e à sua autenticação em cartório público.',
        'Quantidade da evidência de auditoria e à sua qualidade (relevância e confiabilidade).',
        'Velocidade de obtenção dos dados e ao custo incorrido na realização dos testes.',
        'Certeza matemática dos saldos e à aprovação formal pelo conselho fiscal.',
        'Extensão das amostras e ao volume de papéis de trabalho gerados.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. NBC TA 500, item 5: A "Suficiência" é a medida da QUANTIDADE da evidência; a "Apropriação" é a medida da QUALIDADE da evidência (sua relevância e confiabilidade para fornecer suporte às conclusões).'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL (2020)',
      topic: 'Confiabilidade das Evidências Externas',
      type: 'tf',
      statement: 'A evidência de auditoria obtida diretamente pelo auditor independente junto a fontes externas e independentes da entidade auditada é, em regra, mais confiável do que a evidência gerada internamente pela própria entidade.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. NBC TA 500, A31: A confiabilidade da evidência de auditoria aumenta quando ela é obtida de fontes independentes externas à entidade (ex.: circularização bancária).'
    },
    {
      id: 3,
      source: 'FCC – Auditor Fiscal da Receita Estadual / SEFAZ-PE (2022)',
      topic: 'Procedimentos de Auditoria: Inspeção, Observação e Recálculo',
      type: 'multiple',
      statement: 'Assinale a alternativa que descreve corretamente o procedimento de auditoria denominado "Recálculo":',
      options: [
        'Exame de registros ou documentos, internos ou externos, em papel ou em formato eletrônico.',
        'Acompanhamento presencial da contagem física de estoques realizada pelos empregados da entidade.',
        'Verificação da exatidão matemática de documentos e registros contábeis por meio de conferência aritmética.',
        'Envio de solicitação de confirmação de saldos a clientes e fornecedores externos.',
        'Indagação verbal aos diretores e gerentes sobre contingências trabalhistas.'
      ],
      correctAnswer: 2,
      explanation: 'Gabarito: C. NBC TA 500: O Recálculo consiste na verificação da exatidão matemática de documentos ou registros (pode ser realizado manual ou eletronicamente).'
    }
  ],

  // ── Aula 04: Amostragem em Auditoria (NBC TA 530) ───────────────────────────
  4: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal de Tributos Estaduais / SEFAZ-AM (2022)',
      topic: 'Amostragem Estatística vs Não Estatística (NBC TA 530)',
      type: 'multiple',
      statement: 'De acordo com a NBC TA 530 – Amostragem em Auditoria, uma amostragem é classificada como ESTATÍSTICA quando apresenta simultaneamente as seguintes características:',
      options: [
        'Seleção aleatória dos itens da amostra e uso da teoria das probabilidades para avaliar os resultados e mensurar o risco amostral.',
        'Seleção baseada no julgamento exclusivo do auditor sênior sem cálculo probabilístico.',
        'Exame de 100% dos itens da população contábil acima do limite de materialidade.',
        'Seleção por blocos consecutivos de notas fiscais emitidas no último mês do exercício social.',
        'Uso compulsório de software homologado pelo Conselho Federal de Contabilidade.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. NBC TA 530, item 5(g): A amostragem estatística exige: 1) Seleção aleatória dos itens da amostra; e 2) Aplicação da teoria das probabilidades para avaliação dos resultados e mensuração do risco de amostragem.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-CE (2021)',
      topic: 'Risco de Amostragem (Tipo I e Tipo II)',
      type: 'tf',
      statement: 'O risco de amostragem decorre da possibilidade de a conclusão do auditor com base na amostra ser diferente da conclusão que seria alcançada se toda a população fosse submetida ao mesmo procedimento de auditoria.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Literalidade da NBC TA 530, item 5(c).'
    }
  ],

  // ── Aula 06: Relatório de Auditoria (NBC TA 700 e 705) ─────────────────────
  6: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal / SEFAZ-BA (2022)',
      topic: 'Tipos de Opinião Modificada (NBC TA 705)',
      type: 'multiple',
      statement: 'O auditor independente, ao examinar as demonstrações contábeis de uma sociedade anônima, obteve evidência de que distorções relevantes afetam o balanço patrimonial e a DRE. Tais distorções são materiais e GENERALIZADAS (pervasivas) para as demonstrações como um todo. Nessa situação, o auditor deve emitir um relatório com opinião:',
      options: [
        'Com Ressalva.',
        'Adversa.',
        'Sem Ressalva com parágrafo de ênfase.',
        'Com Abstenção de Opinião.',
        'Favorável condicionada à retificação tempestiva.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. NBC TA 705: Se a distorção relevante for relevante (material) e GENERALIZADA (pervasive), e o auditor obteve evidência suficiente, a opinião deve ser ADVERSA. (Se não tivesse conseguido obter evidência e os possíveis efeitos fossem generalizados, seria Abstenção de Opinião).'
    },
    {
      id: 2,
      source: 'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2019)',
      topic: 'Parágrafo de Ênfase vs Outros Assuntos (NBC TA 706)',
      type: 'tf',
      statement: 'O parágrafo de ênfase é utilizado no relatório do auditor para destacar assunto apropriadamente apresentado ou divulgado nas demonstrações contábeis que, segundo o julgamento do auditor, é de fundamental importância para a compreensão das demonstrações pelos usuários, não modificando a opinião do auditor.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. NBC TA 706, item 5: O parágrafo de ênfase não substitui opinião modificada nem ressalva, referindo-se a assunto já adequadamente evidenciado nas notas explicativas.'
    }
  ],

  // ── Aula 14: Auditoria Fiscal e Tributária ─────────────────────────────────
  14: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG (2023)',
      topic: 'Procedimentos de Auditoria em Livros Fiscais e SPED Fiscal',
      type: 'multiple',
      statement: 'Na execução da auditoria fiscal do ICMS, o Auditor Fiscal constata divergência entre os valores de créditos tributários escriturados na EFD-ICMS/IPI (SPED Fiscal) e os documentos fiscais eletrônicos (NF-e) emitidos por fornecedores idôneos. O procedimento inicial de fiscalização para apurar a legitimidade do crédito deve consistir em:',
      options: [
        'Confronto automatizado entre o Registro C100/C170 da EFD e os XMLs das NF-e autorizadas no ambiente nacional da SEFAZ.',
        'Arbitramento imediato do lucro bruto da empresa sem intimação preliminar.',
        'Cancelamento de ofício do CNPJ da sociedade empresária.',
        'Desconsideração judicial da personalidade jurídica no juízo cível.',
        'Cobrança direta via protesto em cartório sem lavratura de auto de infração.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A auditoria fiscal eletrônica realiza o cruzamento de dados (data matching) entre a Escrituração Fiscal Digital (Registros C100 e C170 do SPED Fiscal) e a base de XMLs autorizados das NF-e para verificar a autenticidade e validade jurídica do crédito de ICMS apropriado.'
    },
    {
      id: 2,
      source: 'CEBRASPE – Auditor Fiscal da Receita do DF / SEFAZ-DF (2020)',
      topic: 'Presunção Legal de Omissão de Receitas',
      type: 'tf',
      statement: 'No âmbito da auditoria fiscal, a constatação de passivo fictício ou de saldo credor na conta Caixa constitui presunção legal de omissão de receitas tributáveis, autorizando o Fisco a efetuar o lançamento de ofício das diferenças de tributos e das penalidades cabíveis.',
      options: ['Certo', 'Errado'],
      correctAnswer: 0,
      explanation: 'Gabarito: CERTO. Legislação tributária e jurisprudência consolidada (Art. 12, § 2º do DL 1.598/77 e legislações estaduais do ICMS): A manutenção de saldo credor na conta Caixa ("estouro de caixa") ou a comprovação de passivo fictício geram presunção legal relativa de omissão de receitas.'
    }
  ]
};
