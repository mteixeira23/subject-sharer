import { CEBRASPE_SOURCES, MULTIPLE_CHOICE_SOURCES, DomainQuestionData } from '../domainQuestionGenerators';

export interface LessonProposition {
  sub: string;   // Subtópico específico da aula
  ref: string;   // Base legal, normativa, jurisprudencial ou teórica
  t: string;     // Afirmativa técnica VERDADEIRA completa
  f: string;     // Afirmativa técnica FALSA (pegadinha clássica de prova) completa
  exp: string;   // Fundamentação técnica detalhada do gabarito
}

export type SubjectLessonMatrix = Record<number, LessonProposition[]>;

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
  subjectMatrix?: SubjectLessonMatrix,
  batteryNum: 1 | 2 = 1
): DomainQuestionData {
  const N = propositions.length;
  const cleanTopic = (lessonTitle || 'Conhecimentos Específicos')
    .replace(/^Aula\s*\d+\s*[-–:]\s*/i, '')
    .trim();

  // High-dispersion indexing guaranteeing that consecutive questions NEVER test the same proposition or serie
  let i: number;
  let serie: number;
  let prevTestedProp: LessonProposition | undefined;
  const batteryShift = batteryNum === 2 ? Math.max(1, Math.floor(N / 2) + 1) : 0;

  if (isTF) {
    const tfStep = Math.floor(idx / 2);
    // Use coprime stride 3 to cycle through propositions with wide spacing
    i = (tfStep * 3 + batteryShift) % N;
    serie = (Math.floor((tfStep * 3) / N) + tfStep + (batteryNum === 2 ? 2 : 0)) % 5;
    if (idx > 0) {
      const prevMcStep = Math.floor((idx - 1) / 2);
      const prevMcOffset = Math.max(1, Math.floor(N / 2));
      const prevMcI = (prevMcStep * 3 + prevMcOffset + batteryShift) % N;
      prevTestedProp = propositions[prevMcI];
    }
  } else {
    const mcStep = Math.floor(idx / 2);
    const mcOffset = Math.max(1, Math.floor(N / 2));
    i = (mcStep * 3 + mcOffset + batteryShift) % N;
    serie = (Math.floor((mcStep * 3) / N) + mcStep + (batteryNum === 2 ? 3 : 2)) % 5;
    if (idx > 0) {
      const prevTfStep = Math.floor((idx - 1) / 2);
      const prevTfI = (prevTfStep * 3 + batteryShift) % N;
      prevTestedProp = propositions[prevTfI];
    }
  }

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
    const tfBancas = [
      'CEBRASPE – Auditor Federal de Controle Externo / TCU',
      'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-AL',
      'CEBRASPE – Auditor Fiscal da Receita Estadual / SEFAZ-CE',
      'CEBRASPE – Contador / DPE-RO',
      'CEBRASPE – Auditor do Estado / CAGE-RS',
      'CEBRASPE – Analista de Controle Externo / TCE-RJ',
      'Instituto Avalia – Concurso UFBA',
      'CEBRASPE – Auditor Federal de Finanças e Controle / CGU',
      'CEBRASPE – Analista Administrativo / EBSERH',
    ];
    const source = `${tfBancas[(qNum * 7 + lessonNum * 3) % tfBancas.length]} (${p1.ref})`;

    const isTrue = (idx + lessonNum + (batteryNum === 2 ? 1 : 0)) % 2 === 0;
    const testProp = isTrue ? p1.t : p1.f;
    const promptPrefixes = [
      `A respeito de ${cleanTopic}, especificamente quanto a ${p1.sub}, julgue o item a seguir:`,
      `No que concerne a ${p1.sub}, julgue o item subsequente:`,
      `Acerca da disciplina de ${cleanTopic} (${p1.sub}), julgue a assertiva:`,
      `Considerando as disposições aplicáveis a ${p1.sub}, julgue o item:`,
      `Julgue o item a seguir a respeito de ${cleanTopic} (${p1.sub}):`,
    ];
    const prefix = promptPrefixes[(qNum + idx) % promptPrefixes.length];

    return {
      source,
      type: 'tf',
      statement: `[Questão ${qNum}] ${prefix}\n\n${ensurePeriod(testProp)}`,
      options: ['Certo', 'Errado'],
      correctAnswer: isTrue ? 0 : 1,
      explanation: isTrue
        ? `Gabarito: CERTO. Nos termos de ${p1.ref}: ${p1.exp}`
        : `Gabarito: ERRADO. De acordo com ${p1.ref}: ${p1.exp}`,
    };
  } else {
    // MULTIPLE CHOICE (5 séries de enunciado único com motor anti-reciclagem de distratores)
    const p1 = propositions[i];
    const p2 = propositions[(i + 1) % N];
    const p3 = propositions[(i + 2) % N];
    const p4 = propositions[(i + 3) % N];
    const p5 = propositions[(i + 4) % N];
    const mcBancas = [
      'Instituto Avalia – Concurso Público UFBA',
      'FGV – Analista Administrativo / Câmara dos Deputados',
      'FCC – Analista Judiciário / TRT',
      'FGV – Auditor Fiscal da Receita Estadual / SEFAZ-MG',
      'FCC – Auditor Fiscal dos Tributos Estaduais / SEFAZ-BA',
      'VUNESP – Assistente em Administração / UNESP',
      'Instituto AOCP – Assistente em Administração / IFES',
      'FGV – Analista / SEFAZ-AM',
      'FCC – Analista de Controle Externo / TCE',
      'FGV – Auditor do Estado / CGE-SC',
    ];
    const source = `${mcBancas[(qNum * 7 + lessonNum * 3) % mcBancas.length]} (${p1.ref})`;

    const distractorCandidates = extendedPool.filter(p =>
      p.t !== p1.t && p.f !== p1.f &&
      (!prevTestedProp || (p.t !== prevTestedProp.t && p.f !== prevTestedProp.f))
    );
    const poolLen = distractorCandidates.length;
    const baseOffset = (idx * 4 + 7) % Math.max(1, poolLen);
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
      const placed = placeCorrectAt(
        ensurePeriod(p1.f),
        [ensurePeriod(d1.t), ensurePeriod(d2.t), ensurePeriod(d3.t), ensurePeriod(d4.t)],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Acerca de ${cleanTopic}, analise as alternativas referentes a ${p1.sub} (${p1.ref}) e aos demais institutos correlatos, e assinale a única alternativa INCORRETA:`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. A alternativa apontada é a única INCORRETA, pois viola ${p1.ref}: ${p1.exp} Todas as demais opções reproduzem preceitos verdadeiros.`,
      };
    } else if (serie === 2) {
      const placed = placeCorrectAt(
        ensurePeriod(p1.t),
        [ensurePeriod(d2.f), ensurePeriod(d3.f), ensurePeriod(d4.f), ensurePeriod(d1.f)],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Considerando a doutrina e a legislação aplicáveis a ${cleanTopic}, assinale a alternativa que descreve corretamente a regra referente a ${p1.sub} (${p1.ref}):`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. De acordo com ${p1.ref}: ${p1.exp}`,
      };
    } else if (serie === 3) {
      const placed = placeCorrectAt(
        ensurePeriod(p2.t),
        [ensurePeriod(d1.f), ensurePeriod(d2.f), ensurePeriod(d3.f), ensurePeriod(d4.f)],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] No que tange a ${cleanTopic}, especificamente quanto a ${p2.sub} (${p2.ref}), assinale a afirmativa correta:`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. Conforme ${p2.ref}: ${p2.exp}`,
      };
    } else {
      const placed = placeCorrectAt(
        ensurePeriod(p3.t),
        [ensurePeriod(d1.f), ensurePeriod(d2.f), ensurePeriod(d3.f), ensurePeriod(d4.f)],
        targetPos
      );
      return {
        source,
        type: 'multiple',
        statement: `[Questão ${qNum}] Em relação a ${cleanTopic}, assinale a opção que apresenta preceito correto acerca de ${p3.sub} (${p3.ref}):`,
        options: placed.options,
        correctAnswer: placed.correctAnswer,
        explanation: `Gabarito: ${placed.letter}. Nos termos de ${p3.ref}: ${p3.exp}`,
      };
    }
  }
}
