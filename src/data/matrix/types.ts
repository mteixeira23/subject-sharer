import { CEBRASPE_SOURCES, MULTIPLE_CHOICE_SOURCES, DomainQuestionData } from '../domainQuestionGenerators';

export interface LessonProposition {
  sub: string;   // Subtópico específico da aula
  ref: string;   // Base legal, normativa, jurisprudencial ou teórica
  t: string;     // Afirmativa técnica VERDADEIRA completa
  f: string;     // Afirmativa técnica FALSA (pegadinha clássica de prova) completa
  exp: string;   // Fundamentação técnica detalhada do gabarito
}

export type SubjectLessonMatrix = Record<number, LessonProposition[]>;

function lowerFirst(s: string): string {
  if (!s) return '';
  const trimmed = s.trim();
  // Keep acronyms uppercase (e.g., ICMS, CF/88, STF, CPC, NBC, LRF, PPA, LDO, LOA)
  if (/^[A-ZÀ-Ú0-9]{2,}/.test(trimmed)) {
    return trimmed;
  }
  return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
}

function ensurePeriod(s: string): string {
  const t = (s || '').trim();
  if (!t) return '';
  return /[.!?]$/.test(t) ? t : t + '.';
}

export function generateFromLessonPropositions(
  propositions: LessonProposition[],
  qNum: number,
  lessonTitle: string,
  isTF: boolean,
  idx: number,
  lessonNum: number
): DomainQuestionData {
  const N = propositions.length;
  const cleanTopic = (lessonTitle || 'Conhecimentos Específicos')
    .replace(/^Aula\s*\d+\s*[-–:]\s*/i, '')
    .trim();

  const itemIdx = Math.floor(idx / 2); // 0..29
  const serie = Math.floor(itemIdx / N); // 0..4
  const i = itemIdx % N; // 0..N-1
  const seed = lessonNum * 13 + itemIdx;

  if (isTF) {
    const source = CEBRASPE_SOURCES[(seed + qNum) % CEBRASPE_SOURCES.length];
    const p1 = propositions[i];
    const p2 = propositions[(i + 1) % N];
    const p3 = propositions[(i + 2) % N];
    const p4 = propositions[(i + 3) % N];

    if (serie === 0) {
      // Série 1: Julgamento direto de proposição VERDADEIRA da aula
      return {
        source,
        type: 'tf',
        statement: `[Questão ${qNum}] Julgue o item a seguir a respeito de ${cleanTopic} (${p1.sub}):\n\n${ensurePeriod(p1.t)}`,
        options: ['Certo', 'Errado'],
        correctAnswer: 0,
        explanation: `Gabarito: CERTO. Nos termos de ${p1.ref}: ${p1.exp}`,
      };
    } else if (serie === 1) {
      // Série 2: Julgamento direto de proposição FALSA (pegadinha clássica) da aula
      return {
        source,
        type: 'tf',
        statement: `[Questão ${qNum}] Acerca de ${cleanTopic}, especificamente no tocante a ${p1.sub} (${p1.ref}), julgue o item subsequente:\n\n${ensurePeriod(p1.f)}`,
        options: ['Certo', 'Errado'],
        correctAnswer: 1,
        explanation: `Gabarito: ERRADO. De acordo com ${p1.ref}: ${p1.exp}`,
      };
    } else if (serie === 2) {
      // Série 3: Análise integrada verdadeira de dois subtópicos da mesma aula
      return {
        source,
        type: 'tf',
        statement: `[Questão ${qNum}] Na análise sistemática de ${cleanTopic}, julgue o item quanto à correlação entre ${p1.sub} e ${p2.sub}:\n\n${ensurePeriod(p1.t)} Outrossim, sob a regência de ${p2.ref}, ${lowerFirst(ensurePeriod(p2.t))}`,
        options: ['Certo', 'Errado'],
        correctAnswer: 0,
        explanation: `Gabarito: CERTO. Ambas as proposições estão corretas. 1) ${p1.sub} (${p1.ref}): ${p1.exp} 2) ${p2.sub} (${p2.ref}): ${p2.exp}`,
      };
    } else if (serie === 3) {
      // Série 4: Primeira parte verdadeira + segunda parte falsa (padrão CEBRASPE)
      const firstPart = ensurePeriod(p1.t).replace(/\.$/, '');
      return {
        source,
        type: 'tf',
        statement: `[Questão ${qNum}] Considerando a disciplina normativa e técnica de ${cleanTopic} (${p1.ref} e ${p3.ref}), julgue a assertiva:\n\nEmbora seja correto afirmar, quanto a ${p1.sub}, que ${lowerFirst(firstPart)}, no que concerne a ${p3.sub} verifica-se que ${lowerFirst(ensurePeriod(p3.f))}`,
        options: ['Certo', 'Errado'],
        correctAnswer: 1,
        explanation: `Gabarito: ERRADO. A primeira parte sobre ${p1.sub} é verdadeira, mas a segunda parte referente a ${p3.sub} está incorreta (${p3.ref}): ${p3.exp}`,
      };
    } else {
      // Série 5+: Caso aplicado alternando Certo (par) e Errado (ímpar)
      const isTrueCase = i % 2 === 0;
      if (isTrueCase) {
        return {
          source,
          type: 'tf',
          statement: `[Questão ${qNum}] Em sede de verificação técnica sobre ${cleanTopic}, avaliou-se a aplicação conjunta de ${p4.sub} e ${p1.sub}. Julgue o item:\n\n${ensurePeriod(p4.t)} Tal diretriz mostra-se plenamente compatível com o preceito de ${p1.ref} segundo o qual ${lowerFirst(ensurePeriod(p1.t))}`,
          options: ['Certo', 'Errado'],
          correctAnswer: 0,
          explanation: `Gabarito: CERTO. Tanto a premissa relativa a ${p4.sub} (${p4.ref}) quanto a conclusão sobre ${p1.sub} (${p1.ref}) estão integralmente corretas. ${p1.exp}`,
        };
      } else {
        return {
          source,
          type: 'tf',
          statement: `[Questão ${qNum}] Em sede de verificação técnica sobre ${cleanTopic}, avaliou-se a aplicação de ${p4.sub} (${p4.ref}). Julgue o item:\n\n${ensurePeriod(p4.f)} Consequentemente, no âmbito de ${p1.sub}, ${lowerFirst(ensurePeriod(p1.f))}`,
          options: ['Certo', 'Errado'],
          correctAnswer: 1,
          explanation: `Gabarito: ERRADO. Ambas as afirmativas contrariam a disciplina de ${cleanTopic}: ${p4.exp} Além disso, quanto a ${p1.sub}: ${p1.exp}`,
        };
      }
    }
  } else {
    // MULTIPLE CHOICE (5 séries distintas 100% baseadas nas proposições da aula)
    const source = MULTIPLE_CHOICE_SOURCES[(seed + qNum) % MULTIPLE_CHOICE_SOURCES.length];
    const p1 = propositions[i];
    const p2 = propositions[(i + 1) % N];
    const p3 = propositions[(i + 2) % N];
    const p4 = propositions[(i + 3) % N];
    const p5 = propositions[(i + 4) % N];

    if (serie === 0) {
      // Série 1: Assinale a afirmativa CORRETA sobre p1.sub
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] No âmbito de ${cleanTopic}, especificamente no que tange a ${p1.sub} (${p1.ref}), assinale a afirmativa correta:`,
        options: [
          ensurePeriod(p1.t),
          ensurePeriod(p2.f),
          ensurePeriod(p3.f),
          ensurePeriod(p4.f),
          ensurePeriod(p5.f),
        ],
        correctAnswer: 0,
        explanation: `Gabarito: A. Em conformidade com ${p1.ref}: ${p1.exp}`,
      };
    } else if (serie === 1) {
      // Série 2: Assinale a afirmativa INCORRETA (Exceção) sobre p1.sub
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Acerca de ${cleanTopic}, analise as proposições abaixo referentes a ${p1.sub} (${p1.ref}) e aos demais institutos da aula, e assinale a única alternativa INCORRETA:`,
        options: [
          ensurePeriod(p1.f),
          ensurePeriod(p2.t),
          ensurePeriod(p3.t),
          ensurePeriod(p4.t),
          ensurePeriod(p5.t),
        ],
        correctAnswer: 0,
        explanation: `Gabarito: A. A alternativa apontada é a única INCORRETA, pois viola ${p1.ref}: ${p1.exp} Todas as demais opções reproduzem preceitos verdadeiros estudados nesta aula.`,
      };
    } else if (serie === 2) {
      // Série 3: Julgamento de Assertivas I, II e III (Padrão FGV)
      const pattern = i % 5;
      let sI = '', sII = '', sIII = '', correctOpt = '', expDetail = '';
      if (pattern === 0) {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(p2.f);
        sIII = ensurePeriod(p3.t);
        correctOpt = 'Está correto o que se afirma em I e III, apenas.';
        expDetail = `Item I: CERTO (${p1.ref}). Item II: ERRADO (${p2.exp}). Item III: CERTO (${p3.ref}).`;
      } else if (pattern === 1) {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(p2.t);
        sIII = ensurePeriod(p3.f);
        correctOpt = 'Está correto o que se afirma em I e II, apenas.';
        expDetail = `Item I: CERTO (${p1.ref}). Item II: CERTO (${p2.ref}). Item III: ERRADO (${p3.exp}).`;
      } else if (pattern === 2) {
        sI = ensurePeriod(p1.f);
        sII = ensurePeriod(p2.t);
        sIII = ensurePeriod(p3.t);
        correctOpt = 'Está correto o que se afirma em II e III, apenas.';
        expDetail = `Item I: ERRADO (${p1.exp}). Item II: CERTO (${p2.ref}). Item III: CERTO (${p3.ref}).`;
      } else if (pattern === 3) {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(p2.t);
        sIII = ensurePeriod(p3.t);
        correctOpt = 'Está correto o que se afirma em I, II e III.';
        expDetail = `Todos os itens (I, II e III) estão corretos segundo ${p1.ref}, ${p2.ref} e ${p3.ref}.`;
      } else {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(p2.f);
        sIII = ensurePeriod(p3.f);
        correctOpt = 'Está correto o que se afirma em I, apenas.';
        expDetail = `Item I: CERTO (${p1.ref}). Item II: ERRADO (${p2.exp}). Item III: ERRADO (${p3.exp}).`;
      }
      const allPool = [
        'Está correto o que se afirma em I e III, apenas.',
        'Está correto o que se afirma em I e II, apenas.',
        'Está correto o que se afirma em II e III, apenas.',
        'Está correto o que se afirma em I, II e III.',
        'Está correto o que se afirma em I, apenas.',
      ];
      const otherOpts = allPool.filter(o => o !== correctOpt);
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] A respeito de ${cleanTopic}, avalie as afirmativas a seguir relativas a ${p1.sub}, ${p2.sub} e ${p3.sub}:\n\nI. ${sI}\nII. ${sII}\nIII. ${sIII}\n\nAssinale a alternativa correta:`,
        options: [correctOpt, ...otherOpts],
        correctAnswer: 0,
        explanation: `Gabarito: A. ${expDetail}`,
      };
    } else if (serie === 3) {
      // Série 4: Articulação comparativa dupla entre p1 e p4
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Considerando o conteúdo programático de ${cleanTopic}, assinale a alternativa que articula corretamente os preceitos de ${p1.sub} (${p1.ref}) e ${p4.sub} (${p4.ref}):`,
        options: [
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.t))} Já quanto a ${p4.sub}, ${lowerFirst(ensurePeriod(p4.t))}`,
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.f))} Já quanto a ${p4.sub}, ${lowerFirst(ensurePeriod(p4.t))}`,
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.t))} Já quanto a ${p4.sub}, ${lowerFirst(ensurePeriod(p4.f))}`,
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.f))} Já quanto a ${p4.sub}, ${lowerFirst(ensurePeriod(p4.f))}`,
          `No tocante a ${p2.sub}, ${lowerFirst(ensurePeriod(p2.f))} Já quanto a ${p5.sub}, ${lowerFirst(ensurePeriod(p5.f))}`,
        ],
        correctAnswer: 0,
        explanation: `Gabarito: A. Ambas as proposições são verdadeiras: 1) ${p1.sub} (${p1.ref}): ${p1.exp} 2) ${p4.sub} (${p4.ref}): ${p4.exp}`,
      };
    } else {
      // Série 5+: Classificação V / F em 3 assertivas da aula
      const pat = i % 5;
      let a1 = '', a2 = '', a3 = '', targetSeq = '', expSeq = '';
      if (pat === 0) {
        a1 = ensurePeriod(p1.t); a2 = ensurePeriod(p3.f); a3 = ensurePeriod(p5.t);
        targetSeq = 'V – F – V';
        expSeq = `1ª (V): ${p1.ref}. 2ª (F): ${p3.exp} 3ª (V): ${p5.ref}.`;
      } else if (pat === 1) {
        a1 = ensurePeriod(p1.f); a2 = ensurePeriod(p3.t); a3 = ensurePeriod(p5.f);
        targetSeq = 'F – V – F';
        expSeq = `1ª (F): ${p1.exp} 2ª (V): ${p3.ref}. 3ª (F): ${p5.exp}`;
      } else if (pat === 2) {
        a1 = ensurePeriod(p1.t); a2 = ensurePeriod(p3.t); a3 = ensurePeriod(p5.f);
        targetSeq = 'V – V – F';
        expSeq = `1ª (V): ${p1.ref}. 2ª (V): ${p3.ref}. 3ª (F): ${p5.exp}`;
      } else if (pat === 3) {
        a1 = ensurePeriod(p1.f); a2 = ensurePeriod(p3.f); a3 = ensurePeriod(p5.t);
        targetSeq = 'F – F – V';
        expSeq = `1ª (F): ${p1.exp} 2ª (F): ${p3.exp} 3ª (V): ${p5.ref}.`;
      } else {
        a1 = ensurePeriod(p1.t); a2 = ensurePeriod(p3.t); a3 = ensurePeriod(p5.t);
        targetSeq = 'V – V – V';
        expSeq = `Todas as três afirmativas são verdadeiras (${p1.ref}, ${p3.ref} e ${p5.ref}).`;
      }
      const seqPool = ['V – F – V', 'F – V – F', 'V – V – F', 'F – F – V', 'V – V – V'];
      const restSeq = seqPool.filter(s => s !== targetSeq);
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Sobre ${cleanTopic}, classifique as assertivas a seguir como Verdadeiras (V) ou Falsas (F) segundo ${p1.ref}, ${p3.ref} e ${p5.ref}:\n\n( ) ${a1}\n( ) ${a2}\n( ) ${a3}\n\nAs assertivas são, na ordem apresentada, respectivamente:`,
        options: [targetSeq, ...restSeq],
        correctAnswer: 0,
        explanation: `Gabarito: A (${targetSeq}). ${expSeq}`,
      };
    }
  }
}
