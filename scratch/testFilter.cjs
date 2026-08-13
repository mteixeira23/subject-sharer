const SEFAZ_BA_SUBJECTS = [
  { name: 'Noções de Igualdade Racial', totalLessons: 16 },
  { name: 'Administração, Economia e Finanças Públicas', totalLessons: 21 },
  { name: 'Matemática Financeira', totalLessons: 25 },
  { name: 'Língua Portuguesa', totalLessons: 19 },
  { name: 'Estatística', totalLessons: 31 },
  { name: 'Direito Constitucional', totalLessons: 20 },
  { name: 'Direito Administrativo', totalLessons: 10 },
  { name: 'Direito Tributário', totalLessons: 13 },
  { name: 'Auditoria', totalLessons: 16 },
  { name: 'Contabilidade Geral', totalLessons: 19 },
  { name: 'Contabilidade Aplicada ao Setor Público (CASP)', totalLessons: 12 },
  { name: 'Informática Básica', totalLessons: 17 },
  { name: 'Economia', totalLessons: 16 },
];

const testNames = [
  'Noções de Igualdade Racial',
  'Administração, Economia e Finanças Públicas',
  'Matemática Financeira',
  'Língua Portuguesa',
  'Matemática e RLM',
  'Direito Civil e Empresarial',
  'Direito Penal',
  'Legislação Tributária da Bahia',
  'Contabilidade de Custos',
  'Contabilidade Avançada',
  'Economia e Finanças Públicas',
  'Tecnologia da Informação',
  'Estatística',
  'Direito Constitucional',
  'Direito Administrativo',
  'Direito Tributário',
  'Auditoria',
  'Contabilidade Geral',
];

const sefazNames = new Set(SEFAZ_BA_SUBJECTS.map(s => s.name.trim().toLowerCase()));

const filtered = testNames.filter(name => sefazNames.has(name.trim().toLowerCase()));

console.log("Original count:", testNames.length);
console.log("Filtered count:", filtered.length);
console.log("Filtered list:", filtered);
