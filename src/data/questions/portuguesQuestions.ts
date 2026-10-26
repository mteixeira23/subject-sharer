import { QuestionData } from '../aula00Questions';

export const PORTUGUES_QUESTIONS_BY_LESSON: Record<number, QuestionData[]> = {
  // ── Aula 00: Ortografia Oficial, Acentuação Gráfica e Fonemas (FGV) ───────────
  0: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2022)',
      topic: 'Regras de Acentuação Gráfica',
      type: 'multiple',
      statement: 'Assinale a alternativa em que todos os vocábulos são acentuados graficamente pela mesma regra que justifica o acento na palavra "RELATÓRIO":',
      options: [
        'Memória, patrimônio, exercício, colégio.',
        'País, saúde, saída, egoísta.',
        'Você, café, amapá, cipó.',
        'Público, econômico, máquina, líquido.',
        'Também, porém, alguém, armazém.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. "Relatório" é paroxítona terminada em ditongo oral crescente (-io). Da mesma forma: me-mó-ria, pa-tri-mô-nio, e-xer-cí-cio e co-lé-gio são paroxítonas terminadas em ditongo oral.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Rendas / SEFAZ-SP (2023)',
      topic: 'Novo Acordo Ortográfico - Ditongos Abertos',
      type: 'multiple',
      statement: 'Com base nas regras vigentes do Acordo Ortográfico da Língua Portuguesa, assinale o vocábulo grafado de forma CORRETA:',
      options: [
        'Idéia (com acento agudo no ditongo aberto da paroxítona)',
        'Assembleia (sem acento agudo no ditongo aberto "ei" da paroxítona)',
        'Heróico (com acento agudo no ditongo aberto "oi" da paroxítona)',
        'Gibóia (com acento agudo na paroxítona)',
        'Estréia (com acento no ditongo aberto paroxítono)'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. Pelo Acordo Ortográfico, perderam o acento agudo os ditongos abertos "ei" e "oi" das palavras PAROXÍTONAS (assembleia, ideia, heroico, jiboia, estreia). Mantém-se o acento nas oxítonas e monossílabos (ex: herói, troféu, dói).'
    },
    {
      id: 3,
      source: 'FGV – Analista de Controle Externo / TCE-TO (2022)',
      topic: 'Acentuação de Hiatos (I e U)',
      type: 'multiple',
      statement: 'Assinale a opção em que a palavra destacada NÃO recebe acento gráfico de acordo com as regras gramaticais:',
      options: [
        'Ele não construiu a saída de emergência.',
        'A rainha presidiu a cerimônia de abertura.',
        'O prejuízo da empresa foi significativo no trimestre.',
        'Os auditores avaliaram o juízo de valor emitido.',
        'Ele mantém uma postura egoísta no ambiente profissional.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. "Rainha" não recebe acento porque o "i" tônico forma hiato, mas é seguido imediatamente de "nh" na sílaba seguinte (ra-i-nha). As demais palavras (sa-í-da, pre-ju-í-zo, ju-í-zo, e-go-ís-ta) são acentuadas pela regra do "i" ou "u" tônico isolado na sílaba em hiato.'
    },
    {
      id: 4,
      source: 'FGV – Contador / Prefeitura de Salvador-BA (2020)',
      topic: 'Ortografia Oficial - Emprego de Letras (S, Z, X, CH)',
      type: 'multiple',
      statement: 'Assinale a alternativa em que todas as palavras estão grafadas corretamente em conformidade com a norma-padrão da língua portuguesa:',
      options: [
        'Paralisia, analisar, pesquisar, hesitar.',
        'Paralizia, analiçar, pesquizar, exitar.',
        'Paralizia, analisar, pesquizar, hezitar.',
        'Paralisia, analiçar, pesquisar, hezitar.',
        'Paralisia, analisar, pesquizar, exitar.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. Escrevem-se com "s": paralisia (e paralisar), analisar (derivada de análise), pesquisar (derivada de pesquisa) e hesitar (com h e s).'
    },
    {
      id: 5,
      source: 'FGV – Técnico / Câmara de Salvador-BA (2018)',
      topic: 'Acentuação Diferencial',
      type: 'multiple',
      statement: 'Com o Novo Acordo Ortográfico, a acentuação diferencial foi mantida em casos específicos. Assinale a frase em que o acento diferencial foi empregado CORRETAMENTE:',
      options: [
        'Ontem ele não pôde comparecer à reunião de planejamento.',
        'Eles tem muitas atribuições na administração direta.',
        'O secretário vêm de Salvador todas as semanas.',
        'Ele põe a correspondência sobre o para-lama do carro.',
        'O pára-quedas não abriu durante a instrução.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. O acento diferencial em "pôde" (pretérito perfeito do indicativo) é obrigatório para diferenciar de "pode" (presente do indicativo). No plural dos verbos ter e vir usa-se acento circunflexo (eles têm, eles vêm).'
    }
  ],

  // ── Aula 01: Compreensão e Interpretação de Textos, Coesão e Coerência (FGV) ──
  1: [
    {
      id: 1,
      source: 'FGV – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA (2022)',
      topic: 'Coesão Referencial e Anáfora',
      type: 'multiple',
      statement: 'A coesão textual pode ser obtida por meio de mecanismos gramaticais e lexicais. Quando um termo recupera o sentido de outro elemento previamente expresso no texto, ocorre o processo de:',
      options: [
        'Catáfora por antecipação.',
        'Anáfora por remissão.',
        'Elipse temporal direta.',
        'Hiperonímia inversa.',
        'Zeugma restritivo.'
      ],
      correctAnswer: 1,
      explanation: 'Gabarito: B. O mecanismo anafórico é aquele pelo qual um termo gramatical ou lexical retoma um elemento já citado anteriormente no texto.'
    },
    {
      id: 2,
      source: 'FGV – Auditor Fiscal de Tributos Estaduais / SEFAZ-AM (2022)',
      topic: 'Conectores e Relações Lógicas',
      type: 'multiple',
      statement: 'No fragmento "Embora houvesse escassez de recursos, o órgão manteve o cronograma de fiscalização", o conector "Embora" introduz uma oração que expressa ideia de:',
      options: [
        'Concessão.',
        'Consequência.',
        'Causa determinante.',
        'Condição prévia.',
        'Proporcionalidade.'
      ],
      correctAnswer: 0,
      explanation: 'Gabarito: A. A conjunção subordinativa "embora" introduz oração subordinada adverbial concessiva (ideia de ressalva/contraste que não impede o fato principal).'
    }
  ]
};
