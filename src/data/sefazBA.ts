import { Contest, Subject, Lesson, SUBJECT_COLORS } from '@/types/study';

export const SEFAZ_BA_CONTEST: Contest = {
  id: 'sefaz-ba-2025',
  name: 'SEFAZ-BA 2025',
  createdAt: new Date().toISOString(),
  currentCycle: 1,
};

export const SEFAZ_BA_SUBJECTS: Omit<Subject, 'id'>[] = [
  { contestId: 'sefaz-ba-2025', name: 'Língua Portuguesa', totalLessons: 20, color: SUBJECT_COLORS[0] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Constitucional', totalLessons: 14, color: SUBJECT_COLORS[1] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Administrativo', totalLessons: 21, color: SUBJECT_COLORS[2] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Tributário', totalLessons: 25, color: SUBJECT_COLORS[3] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Geral', totalLessons: 28, color: SUBJECT_COLORS[4] },
  { contestId: 'sefaz-ba-2025', name: 'Estatística', totalLessons: 15, color: SUBJECT_COLORS[5] },
  { contestId: 'sefaz-ba-2025', name: 'Noções de Igualdade Racial', totalLessons: 10, color: SUBJECT_COLORS[6] },
  { contestId: 'sefaz-ba-2025', name: 'Administração, Economia e Finanças Públicas', totalLessons: 23, color: SUBJECT_COLORS[7] },
  { contestId: 'sefaz-ba-2025', name: 'Matemática Financeira', totalLessons: 16, color: SUBJECT_COLORS[8] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Aplicada ao Setor Público (CASP)', totalLessons: 18, color: SUBJECT_COLORS[9] },
  { contestId: 'sefaz-ba-2025', name: 'Informática Básica', totalLessons: 12, color: SUBJECT_COLORS[10] },
];

export const IGUALDADE_RACIAL_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Direitos Humanos na CF/88 & Teoria Geral dos Direitos Fundamentais',
  2: 'Aula 01 - Convenção de Eliminação da Discriminação Racial e CEDAW',
  3: 'Aula 02 - Estatuto da Igualdade Racial Nacional (Lei nº 12.288/2010)',
  4: 'Aula 03 - Estatuto da Igualdade Racial da Bahia (Lei nº 13.182/2014)',
  5: 'Aula 04 - Crimes de Preconceito de Raça ou Cor (Lei nº 7.716/1989 e Caó)',
  6: 'Aula 05 - Ações Afirmativas e Sistema de Cotas em Concursos e Universidades',
  7: 'Aula 06 - Legislação Específica da Bahia (Lei Estadual nº 10.549/06 e Sepromi)',
  8: 'Aula 07 - Proteção às Comunidades Tradicionais e Quilombolas',
  9: 'Aula 08 - Legislação Específica e Convenções Internacionais de Direitos Humanos',
  10: 'Aula 09 - Revisão Geral e Bateria de Questões Comentadas FGV',
};

export function generateInitialData(): {
  contests: Contest[];
  subjects: Subject[];
  lessons: Lesson[];
} {
  const subjects: Subject[] = SEFAZ_BA_SUBJECTS.map((subject, index) => ({
    ...subject,
    id: `subject-${index + 1}`,
  }));

  const lessons: Lesson[] = [];
  subjects.forEach((subject) => {
    for (let i = 1; i <= subject.totalLessons; i++) {
      let name = '';
      if (subject.name === 'Noções de Igualdade Racial' && IGUALDADE_RACIAL_LESSON_NAMES[i]) {
        name = IGUALDADE_RACIAL_LESSON_NAMES[i];
      }
      lessons.push({
        id: `${subject.id}-lesson-${i}`,
        subjectId: subject.id,
        number: i,
        name,
        theoryCompleted: false,
        reviewCompleted: false,
        questionsCount: 0,
        correctAnswers: 0,
        cycle: 1,
      });
    }
  });

  return {
    contests: [SEFAZ_BA_CONTEST],
    subjects,
    lessons,
  };
}
