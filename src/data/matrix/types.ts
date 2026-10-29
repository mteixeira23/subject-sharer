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
  lessonNum: number,
  subjectMatrix?: SubjectLessonMatrix
): DomainQuestionData {
  const N = propositions.length;
  const cleanTopic = (lessonTitle || 'Conhecimentos Específicos')
    .replace(/^Aula\s*\d+\s*[-–:]\s*/i, '')
    .trim();

  const itemIdx = Math.floor(idx / 2); // 0..29
  const serie = Math.floor(itemIdx / N); // 0..4
  const i = itemIdx % N; // 0..N-1

  // Build an extended pool of propositions across the subject matrix to prevent distractor recycling
  const extendedPool: LessonProposition[] = [...propositions];
  if (subjectMatrix) {
    const keys = Object.keys(subjectMatrix)
      .map(Number)
      .filter(k => k !== lessonNum)
      .sort((a, b) => Math.abs(a - lessonNum) - Math.abs(b - lessonNum));
    for (const k of keys) {
      const list = subjectMatrix[k] || [];
      for (const prop of list) {
        if (!extendedPool.some(existing => existing.t === prop.t || existing.f === prop.f)) {
          extendedPool.push(prop);
        }
      }
    }
  }

  if (isTF) {
    const p1 = propositions[i];
    const p2 = propositions[(i + 1) % N];
    const p3 = propositions[(i + 2) % N];
    const p4 = propositions[(i + 3) % N];
    const source = `[Inédita / Simulado Dirigido (Estilo CEBRASPE) – ${p1.ref}]`;

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
    // MULTIPLE CHOICE (5 séries distintas com motor anti-reciclagem de distratores)
    const p1 = propositions[i];
    const p2 = propositions[(i + 1) % N];
    const p3 = propositions[(i + 2) % N];
    const p4 = propositions[(i + 3) % N];
    const p5 = propositions[(i + 4) % N];
    const source = `[Inédita / Simulado Especializado (Estilo FGV/FCC) – ${p1.ref}]`;

    // Pool de distratores sem p1, deslocado de 4 em 4 a cada questão para impedir repetição entre questões consecutivas
    const distractorCandidates = extendedPool.filter(p => p.t !== p1.t && p.f !== p1.f);
    const poolLen = distractorCandidates.length;
    const baseOffset = itemIdx * 4;
    const d1 = poolLen > 0 ? distractorCandidates[(baseOffset + 0) % poolLen] : p2;
    const d2 = poolLen > 1 ? distractorCandidates[(baseOffset + 1) % poolLen] : p3;
    const d3 = poolLen > 2 ? distractorCandidates[(baseOffset + 2) % poolLen] : p4;
    const d4 = poolLen > 3 ? distractorCandidates[(baseOffset + 3) % poolLen] : p5;

    const placeCorrectAt = (correctText: string, wrongTexts: string[], targetIdx: number) => {
      const opts = [...wrongTexts];
      const safeIdx = ((targetIdx % 5) + 5) % 5;
      opts.splice(safeIdx, 0, correctText);
      const letter = ['A', 'B', 'C', 'D', 'E'][safeIdx];
      return { options: opts.slice(0, 5), correctAnswer: safeIdx, letter };
    };

    const targetPos = (qNum + lessonNum) % 5;

    if (serie === 0) {
      // Série 1: Assinale a afirmativa CORRETA sobre p1.sub
      const placed = placeCorrectAt(
        ensurePeriod(p1.t),
        [ensurePeriod(d1.f), ensurePeriod(d2.f), ensurePeriod(d3.f), ensurePeriod(d4.f)],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] No âmbito de ${cleanTopic}, especificamente no que tange a ${p1.sub} (${p1.ref}), assinale a afirmativa correta:`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. Em conformidade com ${p1.ref}: ${p1.exp}`,
      };
    } else if (serie === 1) {
      // Série 2: Assinale a afirmativa INCORRETA (Exceção) sobre p1.sub
      const placed = placeCorrectAt(
        ensurePeriod(p1.f),
        [ensurePeriod(d1.t), ensurePeriod(d2.t), ensurePeriod(d3.t), ensurePeriod(d4.t)],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Acerca de ${cleanTopic}, analise as proposições abaixo referentes a ${p1.sub} (${p1.ref}) e aos demais institutos correlatos, e assinale a única alternativa INCORRETA:`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. A alternativa apontada é a única INCORRETA, pois viola ${p1.ref}: ${p1.exp} Todas as demais opções reproduzem preceitos verdadeiros.`,
      };
    } else if (serie === 2) {
      // Série 3: Julgamento de Assertivas I, II e III (Padrão FGV)
      const pattern = i % 5;
      let sI = '', sII = '', sIII = '', correctOpt = '', expDetail = '';
      if (pattern === 0) {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(d1.f);
        sIII = ensurePeriod(d2.t);
        correctOpt = 'Está correto o que se afirma em I e III, apenas.';
        expDetail = `Item I: CERTO (${p1.ref}). Item II: ERRADO (${d1.exp}). Item III: CERTO (${d2.ref}).`;
      } else if (pattern === 1) {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(d1.t);
        sIII = ensurePeriod(d2.f);
        correctOpt = 'Está correto o que se afirma em I e II, apenas.';
        expDetail = `Item I: CERTO (${p1.ref}). Item II: CERTO (${d1.ref}). Item III: ERRADO (${d2.exp}).`;
      } else if (pattern === 2) {
        sI = ensurePeriod(p1.f);
        sII = ensurePeriod(d1.t);
        sIII = ensurePeriod(d2.t);
        correctOpt = 'Está correto o que se afirma em II e III, apenas.';
        expDetail = `Item I: ERRADO (${p1.exp}). Item II: CERTO (${d1.ref}). Item III: CERTO (${d2.ref}).`;
      } else if (pattern === 3) {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(d1.t);
        sIII = ensurePeriod(d2.t);
        correctOpt = 'Está correto o que se afirma em I, II e III.';
        expDetail = `Todos os itens (I, II e III) estão corretos segundo ${p1.ref}, ${d1.ref} e ${d2.ref}.`;
      } else {
        sI = ensurePeriod(p1.t);
        sII = ensurePeriod(d1.f);
        sIII = ensurePeriod(d2.f);
        correctOpt = 'Está correto o que se afirma em I, apenas.';
        expDetail = `Item I: CERTO (${p1.ref}). Item II: ERRADO (${d1.exp}). Item III: ERRADO (${d2.exp}).`;
      }
      const allPool = [
        'Está correto o que se afirma em I e III, apenas.',
        'Está correto o que se afirma em I e II, apenas.',
        'Está correto o que se afirma em II e III, apenas.',
        'Está correto o que se afirma em I, II e III.',
        'Está correto o que se afirma em I, apenas.',
      ];
      const otherOpts = allPool.filter(o => o !== correctOpt);
      const placed = placeCorrectAt(correctOpt, otherOpts, targetPos);
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] A respeito de ${cleanTopic}, avalie as afirmativas a seguir relativas a ${p1.sub}, ${d1.sub} e ${d2.sub}:\n\nI. ${sI}\nII. ${sII}\nIII. ${sIII}\n\nAssinale a alternativa correta:`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. ${expDetail}`,
      };
    } else if (serie === 3) {
      // Série 4: Articulação comparativa dupla entre p1 e d3
      const placed = placeCorrectAt(
        `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.t))} Já quanto a ${d3.sub}, ${lowerFirst(ensurePeriod(d3.t))}`,
        [
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.f))} Já quanto a ${d3.sub}, ${lowerFirst(ensurePeriod(d3.t))}`,
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.t))} Já quanto a ${d3.sub}, ${lowerFirst(ensurePeriod(d3.f))}`,
          `No tocante a ${p1.sub}, ${lowerFirst(ensurePeriod(p1.f))} Já quanto a ${d3.sub}, ${lowerFirst(ensurePeriod(d3.f))}`,
          `No tocante a ${d1.sub}, ${lowerFirst(ensurePeriod(d1.f))} Já quanto a ${d4.sub}, ${lowerFirst(ensurePeriod(d4.f))}`,
        ],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Considerando o conteúdo programático de ${cleanTopic}, assinale a alternativa que articula corretamente os preceitos de ${p1.sub} (${p1.ref}) e ${d3.sub} (${d3.ref}):`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. Ambas as proposições são verdadeiras: 1) ${p1.sub} (${p1.ref}): ${p1.exp} 2) ${d3.sub} (${d3.ref}): ${d3.exp}`,
      };
    } else {
      // Série 5+: Classificação V / F em 3 assertivas
      const pat = i % 5;
      let a1 = '', a2 = '', a3 = '', targetSeq = '', expSeq = '';
      if (pat === 0) {
        a1 = ensurePeriod(p1.t); a2 = ensurePeriod(d2.f); a3 = ensurePeriod(d4.t);
        targetSeq = 'V – F – V';
        expSeq = `1ª (V): ${p1.ref}. 2ª (F): ${d2.exp} 3ª (V): ${d4.ref}.`;
      } else if (pat === 1) {
        a1 = ensurePeriod(p1.f); a2 = ensurePeriod(d2.t); a3 = ensurePeriod(d4.f);
        targetSeq = 'F – V – F';
        expSeq = `1ª (F): ${p1.exp} 2ª (V): ${d2.ref}. 3ª (F): ${d4.exp}`;
      } else if (pat === 2) {
        a1 = ensurePeriod(p1.t); a2 = ensurePeriod(d2.t); a3 = ensurePeriod(d4.f);
        targetSeq = 'V – V – F';
        expSeq = `1ª (V): ${p1.ref}. 2ª (V): ${d2.ref}. 3ª (F): ${d4.exp}`;
      } else if (pat === 3) {
        a1 = ensurePeriod(p1.f); a2 = ensurePeriod(d2.f); a3 = ensurePeriod(d4.t);
        targetSeq = 'F – F – V';
        expSeq = `1ª (F): ${p1.exp} 2ª (F): ${d2.exp} 3ª (V): ${d4.ref}.`;
      } else {
        a1 = ensurePeriod(p1.t); a2 = ensurePeriod(d2.t); a3 = ensurePeriod(d4.t);
        targetSeq = 'V – V – V';
        expSeq = `Todas as três afirmativas são verdadeiras (${p1.ref}, ${d2.ref} e ${d4.ref}).`;
      }
      const seqPool = ['V – F – V', 'F – V – F', 'V – V – F', 'F – F – V', 'V – V – V'];
      const restSeq = seqPool.filter(s => s !== targetSeq);
      const placed = placeCorrectAt(targetSeq, restSeq, targetPos);
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Sobre ${cleanTopic}, classifique as assertivas a seguir como Verdadeiras (V) ou Falsas (F) segundo ${p1.ref}, ${d2.ref} e ${d4.ref}:\n\n( ) ${a1}\n( ) ${a2}\n( ) ${a3}\n\nAs assertivas são, na ordem apresentada, respectivamente:`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter} (${targetSeq}). ${expSeq}`,
      };
    }
  }
}
