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
  { contestId: 'sefaz-ba-2025', name: 'Noções de Igualdade Racial', totalLessons: 8, color: SUBJECT_COLORS[6] },
  { contestId: 'sefaz-ba-2025', name: 'Administração, Economia e Finanças Públicas', totalLessons: 23, color: SUBJECT_COLORS[7] },
  { contestId: 'sefaz-ba-2025', name: 'Matemática Financeira', totalLessons: 16, color: SUBJECT_COLORS[8] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Aplicada ao Setor Público (CASP)', totalLessons: 18, color: SUBJECT_COLORS[9] },
  { contestId: 'sefaz-ba-2025', name: 'Informática Básica', totalLessons: 12, color: SUBJECT_COLORS[10] },
];

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
      lessons.push({
        id: `${subject.id}-lesson-${i}`,
        subjectId: subject.id,
        number: i,
        name: '',
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
