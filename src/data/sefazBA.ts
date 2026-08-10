import { Contest, Subject, Lesson, SUBJECT_COLORS } from '@/types/study';

export const SEFAZ_BA_CONTEST: Contest = {
  id: 'sefaz-ba-2025',
  name: 'SEFAZ-BA 2025',
  createdAt: new Date().toISOString(),
  currentCycle: 1,
};

export const SEFAZ_BA_SUBJECTS: Omit<Subject, 'id'>[] = [
  { contestId: 'sefaz-ba-2025', name: 'Língua Portuguesa', totalLessons: 16, color: SUBJECT_COLORS[0] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Constitucional', totalLessons: 21, color: SUBJECT_COLORS[1] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Administrativo', totalLessons: 25, color: SUBJECT_COLORS[2] },
  { contestId: 'sefaz-ba-2025', name: 'Direito Tributário', totalLessons: 19, color: SUBJECT_COLORS[3] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Geral', totalLessons: 31, color: SUBJECT_COLORS[4] },
  { contestId: 'sefaz-ba-2025', name: 'Estatística', totalLessons: 20, color: SUBJECT_COLORS[5] },
  { contestId: 'sefaz-ba-2025', name: 'Noções de Igualdade Racial', totalLessons: 10, color: SUBJECT_COLORS[6] },
  { contestId: 'sefaz-ba-2025', name: 'Administração, Economia e Finanças Públicas', totalLessons: 13, color: SUBJECT_COLORS[7] },
  { contestId: 'sefaz-ba-2025', name: 'Matemática Financeira', totalLessons: 16, color: SUBJECT_COLORS[8] },
  { contestId: 'sefaz-ba-2025', name: 'Contabilidade Aplicada ao Setor Público (CASP)', totalLessons: 19, color: SUBJECT_COLORS[9] },
  { contestId: 'sefaz-ba-2025', name: 'Informática Básica', totalLessons: 12, color: SUBJECT_COLORS[10] },
  { contestId: 'sefaz-ba-2025', name: 'Auditoria', totalLessons: 17, color: SUBJECT_COLORS[11] },
  { contestId: 'sefaz-ba-2025', name: 'Economia', totalLessons: 16, color: SUBJECT_COLORS[12] },
];

export const AUDITORIA_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Introdução à Auditoria (NBC TA 200)',
  2: 'Aula 01 - Auditoria Interna (NBC TI 01)',
  3: 'Aula 02 - Planejamento de Auditoria (NBC TA 300)',
  4: 'Aula 03 - Evidência de Auditoria (NBC TA 500)',
  5: 'Aula 04 - Amostragem em Auditoria (NBC TA 530)',
  6: 'Aula 05 - Materialidade em Auditoria (NBC TA 320)',
  7: 'Aula 06 - Relatório de Auditoria (NBC TA 700)',
  8: 'Aula 07 - Controle Interno e Avaliação de Riscos (NBC TA 315)',
  9: 'Aula 08 - Transações com Partes Relacionadas (NBC TA 550)',
  10: 'Aula 09 - Representações Formais / Cartas de Responsabilidade (NBC TA 580)',
  11: 'Aula 10 - Avaliação das Distorções Identificadas (NBC TA 450)',
  12: 'Aula 11 - Utilização de Outros Profissionais / Auditores Internos (NBC TA 610/620)',
  13: 'Aula 12 - Procedimentos em Áreas Específicas (Parte 1)',
  14: 'Aula 13 - Procedimentos em Áreas Específicas (Parte 2)',
  15: 'Aula 14 - Auditoria Fiscal e Tributária (Parte 1)',
  16: 'Aula 15 - Auditoria Fiscal e Tributária (Parte 2)',
  17: 'Aula 16 - Estrutura Conceitual para Trabalhos de Asseguração',
};

export const ECONOMIA_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Fundamentos da Economia e Introdução à Microeconomia',
  2: 'Aula 01 - Elasticidades (Preço, Renda e Cruzada)',
  3: 'Aula 02 - Teoria do Consumidor, Curvas de Indiferença e Restrição Orçamentária',
  4: 'Aula 03 - Teoria da Produção e Rendimentos de Escala',
  5: 'Aula 04 - Teoria dos Custos de Produção (Curto e Longo Prazo)',
  6: 'Aula 05 - Teoria dos Mercados e Concorrência Perfeita',
  7: 'Aula 06 - Monopólio, Discriminação de Preços e Regulação',
  8: 'Aula 07 - Oligopólio, Concorrência Monopolística e Teoria dos Jogos',
  9: 'Aula 08 - Bens Públicos, Externalidades e Falhas de Mercado',
  10: 'Aula 09 - Introdução à Macroeconomia e Agregados Macroeconômicos',
  11: 'Aula 10 - Modelo Keynesiano Simples e Determinação da Renda',
  12: 'Aula 11 - Sistema Monetário, Oferta/Demanda por Moeda e Multiplicador',
  13: 'Aula 12 - Modelo IS-LM-BP e Políticas Econômicas',
  14: 'Aula 13 - Inflação, Curva de Phillips e Desemprego',
  15: 'Aula 14 - Balanço de Pagamentos e Relações Internacionais',
  16: 'Aula 15 - Política Cambial, Regimes de Câmbio e Economia Aberta',
};

export const INFORMATICA_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Conceitos Fundamentais de Hardware e Software',
  2: 'Aula 01 - Sistema Operacional Windows 10/11',
  3: 'Aula 02 - Conceitos de Redes de Computadores e Internet',
  4: 'Aula 03 - Navegadores de Internet (Chrome, Edge, Firefox)',
  5: 'Aula 04 - Correio Eletrônico e Protocolos (SMTP, POP3, IMAP)',
  6: 'Aula 05 - Edição de Textos: Microsoft Word',
  7: 'Aula 06 - Planilhas Eletrônicas: Microsoft Excel (Fórmulas e Funções)',
  8: 'Aula 07 - Softwares de Apresentação: Microsoft PowerPoint',
  9: 'Aula 08 - Segurança da Informação e Malware (Vírus, Trojan, Ransomware)',
  10: 'Aula 09 - Mecanismos de Proteção (Firewall, Antivírus, Criptografia)',
  11: 'Aula 10 - Computação em Nuvem (Cloud Computing)',
  12: 'Aula 11 - Bateria de Questões FGV e Revisão Geral',
};

export const MATEMATICA_FINANCEIRA_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Juros Simples e Desconto Simples',
  2: 'Aula 01 - Juros Compostos e Taxas Equivalentes',
  3: 'Aula 02 - Desconto Composto (Racional e Comercial)',
  4: 'Aula 03 - Taxas Nominais, Efetivas, Reais e Inflação',
  5: 'Aula 04 - Equivalência de Capitais e Fluxos de Caixa',
  6: 'Aula 05 - Rendimento de Aplicações Financeiras',
  7: 'Aula 06 - Anualidades e Séries de Pagamento (Uniforme e Periódica)',
  8: 'Aula 07 - Séries Diferidas e Perpetuidades',
  9: 'Aula 08 - Sistemas de Amortização: Tabela Price (SAF)',
  10: 'Aula 09 - Sistemas de Amortização: SAC (Amortização Constante)',
  11: 'Aula 10 - Sistema Americano e Sinking Fund',
  12: 'Aula 11 - Análise de Investimentos: Valor Presente Líquido (VPL)',
  13: 'Aula 12 - Análise de Investimentos: Taxa Interna de Retorno (TIR)',
  14: 'Aula 13 - Payback Simples e Descontado',
  15: 'Aula 14 - Depreciação Financeira e Avaliação de Ativos',
  16: 'Aula 15 - Análise de Projetos e Bateria de Questões FGV',
};

export const DIREITO_TRIBUTARIO_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Conceito de Tributo e Especies Tributárias',
  2: 'Aula 01 - Competência Tributária e Capacidade Tributária',
  3: 'Aula 02 - Limitações Ao Poder de Tributar: Princípios Tributários I',
  4: 'Aula 03 - Limitações Ao Poder de Tributar: Princípios Tributários II',
  5: 'Aula 04 - Imunidades Tributárias (Art. 150, VI da CF/88)',
  6: 'Aula 05 - Fontes do Direito Tributário e Legislação Tributária',
  7: 'Aula 06 - Obrigação Tributária e Responsabilidade Tributária',
  8: 'Aula 07 - Fato Gerador e Sujeitos da Obrigação Tributária',
  9: 'Aula 08 - Lançamento Tributário e Crédito Tributário',
  10: 'Aula 09 - Suspensão da Exigibilidade do Crédito Tributário',
  11: 'Aula 10 - Extinção do Crédito Tributário: Decadência e Prescrição',
  12: 'Aula 11 - Exclusão do Crédito Tributário: Isenção e Anistia',
  13: 'Aula 12 - Garantias e Privilégios do Crédito Tributário',
  14: 'Aula 13 - Administração Tributária e Fiscalização',
  15: 'Aula 14 - Dívida Ativa e Certidões Negativas',
  16: 'Aula 15 - Processo Administrativo Tributário (PAT)',
  17: 'Aula 16 - Processo Judicial Tributário (Execução Fiscal, Anulatória, MS)',
  18: 'Aula 17 - Impostos de Competência dos Estados (ICMS, IPVA, ITCMD)',
  19: 'Aula 18 - Simples Nacional e Legislação Específica da Bahia',
};

export const ESTATISTICA_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Apresentação de Dados e Estatística Descritiva',
  2: 'Aula 01 - Medidas de Tendência Central: Médias',
  3: 'Aula 02 - Medidas de Tendência Central: Moda',
  4: 'Aula 03 - Separatrizes e Quantis',
  5: 'Aula 04 - Medidas de Dispersão e Variabilidade',
  6: 'Aula 05 - Análise Combinatória Aplicada à Probabilidade',
  7: 'Aula 06 - Teoria das Probabilidades e Eventos',
  8: 'Aula 07 - Variáveis Aleatórias Discretas',
  9: 'Aula 08 - Distribuições de Probabilidade Discretas',
  10: 'Aula 09 - Variáveis Aleatórias Contínuas',
  11: 'Aula 10 - Distribuições Conjuntas de Variáveis Aleatórias',
  12: 'Aula 11 - Teoria da Amostragem e Métodos Amostrais',
  13: 'Aula 12 - Estimação Pontual e por Intervalo de Confiança',
  14: 'Aula 13 - Testes de Hipóteses Parâmetricos e Não-Paramétricos',
  15: 'Aula 14 - Análise de Variância (ANOVA)',
  16: 'Aula 15 - Regressão Linear Simples e Correlação',
  17: 'Aula 16 - Regressão Linear Múltipla',
  18: 'Aula 17 - Séries Temporais e Números Índices',
  19: 'Aula 18 - Análise Multivariada',
  20: 'Aula 19 - Análise Bidimensional e Tabelas de Contingência',
};

export const DIREITO_CONSTITUCIONAL_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Conceito, Objeto, Sentidos e Classificação das Constituições (Prof. Ricardo Vale)',
  2: 'Aula 01 - Aplicabilidade das Normas Constitucionais (Plena, Contida e Limitada)',
  3: 'Aula 02 - Hierarquia das Normas e Pirâmide de Kelsen',
  4: 'Aula 03 - Poder Constituinte Originário, Derivado, Reformador e Decorrente',
  5: 'Aula 04 - Direitos e Garantias Fundamentais: Direitos Individuais e Coletivos I (Art. 5º)',
  6: 'Aula 05 - Direitos e Garantias Fundamentais: Direitos Individuais e Coletivos II (Art. 5º)',
  7: 'Aula 06 - Remédios Constitucionais (Habeas Corpus, MS, Ação Popular, HD, MI)',
  8: 'Aula 07 - Direitos Sociais (Art. 6º ao 11 da CF/88)',
  9: 'Aula 08 - Nacionalidade, Direitos Políticos e Partidos Políticos (Art. 12 ao 17 da CF/88)',
  10: 'Aula 09 - Organização do Estado e Repartição de Competências (Art. 18 ao 36 da CF/88)',
  11: 'Aula 10 - Administração Pública na CF/88 (Art. 37 ao 41 da CF/88)',
  12: 'Aula 11 - Poder Legislativo e Processo Legislativo (Art. 44 ao 69 da CF/88)',
  13: 'Aula 12 - Poder Executivo: Atribuições e Responsabilidade do Presidente (Art. 76 ao 91)',
  14: 'Aula 13 - Poder Judiciário: Estrutura, Competências do STF e STJ (Art. 92 ao 126)',
  15: 'Aula 14 - Funções Essenciais à Justiça (MP, Advocacia Pública, Defensoria)',
  16: 'Aula 15 - Controle de Constitucionalidade: Conceito, Espécies e Vícios',
  17: 'Aula 16 - Controle Concentrado de Constitucionalidade (ADI, ADC, ADO e ADPF)',
  18: 'Aula 17 - Defesa do Estado e das Instituições Democráticas (Estado de Sítio e Defesa)',
  19: 'Aula 18 - Finanças Públicas e Orçamento na CF/88 (Art. 165 ao 169 da CF/88)',
  20: 'Aula 19 - Ordem Econômica e Financeira na CF/88 (Art. 170 ao 192 da CF/88)',
  21: 'Aula 20 - Ordem Social e Direitos Sociais Específicos (Revisão Geral FGV)',
};

export const PORTUGUES_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Ortografia Oficial, Acentuação Gráfica e Fonemas (FGV)',
  2: 'Aula 01 - Compreensão e Interpretação de Textos (Coesão e Coerência FGV)',
  3: 'Aula 02 - Tipologia e Gêneros Textuais',
  4: 'Aula 03 - Semântica: Parônimos, Homônimos e Significação de Palavras',
  5: 'Aula 04 - Regras Gerais de Acentuação e Novo Acordo Ortográfico',
  6: 'Aula 05 - Emprego do Hífen (Regras Gerais e Especiais)',
  7: 'Aula 06 - Classes de Palavras: Substantivos, Adjetivos e Artigos',
  8: 'Aula 07 - Pronomes: Emprego, Colocação Pronômica e Anapora',
  9: 'Aula 08 - Verbos: Modos, Tempos, Vozes e Correlação Verbal',
  10: 'Aula 09 - Estrutura Sintática da Oração (Sujeito, Predicado e Complementos)',
  11: 'Aula 10 - Sintaxe do Período Composto (Orações Coordenadas e Subordinadas)',
  12: 'Aula 11 - Concordância Verbal e Nominal',
  13: 'Aula 12 - Regência Verbal/Nominal e Emprego da Crase',
  14: 'Aula 13 - Pontuação (Vírgula, Ponto e Vírgula, Dois Pontos)',
  15: 'Aula 14 - Reescritura de Frases e Equivalência de Estruturas (FGV)',
  16: 'Aula 15 - Figuras de Linguagem e Bateria de Questões Comentadas FGV',
};

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

export const CONTABILIDADE_GERAL_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Aspectos Introdutórios da Contabilidade (Prof. Gilmar Possati)',
  2: 'Aula 01 - Patrimônio: Ativo, Passivo e Patrimônio Líquido',
  3: 'Aula 02 - Atos e Fatos Contábeis e Lançamentos',
  4: 'Aula 03 - Contas e Plano de Contas',
  5: 'Aula 04 - Balancete de Verificação',
  6: 'Aula 05 - Estrutura Conceitual Contábil (CPC 00 R2)',
  7: 'Aula 06 - Operações com Mercadorias e Estoques (CPC 16)',
  8: 'Aula 07 - Tributos Sobre Compras e Vendas',
  9: 'Aula 08 - Duplicatas Descontadas e PCLD',
  10: 'Aula 09 - Ativo Imobilizado (CPC 27)',
  11: 'Aula 10 - Depreciação, Amortização e Exaustão',
  12: 'Aula 11 - Ativo Intangível (CPC 04)',
  13: 'Aula 12 - Redução ao Valor Recuperável - Impairment (CPC 01)',
  14: 'Aula 13 - Passivo Exigível, Provisões e Contingências (CPC 25)',
  15: 'Aula 14 - Patrimônio Líquido: Capital Social e Reservas',
  16: 'Aula 15 - Ações em Tesouraria e Distribuição de Lucros',
  17: 'Aula 16 - Apuração do Resultado do Exercício (ARE)',
  18: 'Aula 17 - Balanço Patrimonial (Estrutura Completa)',
  19: 'Aula 18 - Demonstração do Resultado do Exercício (DRE)',
  20: 'Aula 19 - Demonstração dos Fluxos de Caixa (DFC - CPC 03)',
  21: 'Aula 20 - Demonstração das Mutações do PL (DMPL) e DLPA',
  22: 'Aula 21 - Demonstração do Valor Adicionado (DVA - CPC 09)',
  23: 'Aula 22 - Avaliação de Investimentos em Coligadas/Controladas (MEP)',
  24: 'Aula 23 - Combinação de Negócios (CPC 15)',
  25: 'Aula 24 - Consolidação das Demonstrações Contábeis',
  26: 'Aula 25 - Análise de Balanços: Índices de Liquidez e Solvência',
  27: 'Aula 26 - Análise de Balanços: Endividamento e Rentabilidade',
  28: 'Aula 27 - Prazos Médios, Ciclo Operacional e Ciclo Financeiro',
  29: 'Aula 28 - Contabilidade Geral: Tópicos Especiais I (Prof. Cadu Carrilho)',
  30: 'Aula 29 - Contabilidade Geral: Tópicos Especiais II e Pronunciamentos',
  31: 'Aula 30 - Contabilidade Geral: Revisão Geral e Bateria FGV',
};

export const CASP_LESSON_NAMES: Record<number, string> = {
  1: 'Aspectos Introdutórios e Conceito da CASP',
  2: 'Despesa Pública no Setor Público',
  3: 'MCASP: Procedimentos Contábeis Patrimoniais II',
  4: 'MCASP: Procedimentos Contábeis Patrimoniais III',
  5: 'Plano de Contas Aplicado ao Setor Público (PCASP)',
  6: 'Balanço Orçamentário',
  7: 'Balanço Financeiro',
  8: 'Balanço Patrimonial Público',
  9: 'Demonstração das Variações Patrimoniais (DVP)',
  10: 'DFC, DMPL e Notas Explicativas no Setor Público',
  11: 'Título IX da Lei nº 4.320/64',
  12: 'NBC TSP R - Estrutura Conceitual',
  13: 'Tópicos Selecionados da LRF I',
  14: 'Tópicos Selecionados da LRF II',
  15: 'Princípios do Setor Público',
  16: 'Composição do Patrimônio Público',
  17: 'Estoques no Setor Público',
  18: 'Fundeb (Fundo de Manutenção da Educação)',
  19: 'Princípios Aplicados à Contabilidade Pública',
};

export const DIREITO_ADMINISTRATIVO_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Princípios do Direito Administrativo',
  2: 'Aula 01 - Conceito e Introdução ao Direito Administrativo',
  3: 'Aula 02 - Poderes Administrativos',
  4: 'Aula 03 - Atos Administrativos (Parte 1)',
  5: 'Aula 04 - Atos Administrativos (Parte 2)',
  6: 'Aula 05 - Organização Administrativa e Descentralização',
  7: 'Aula 06 - Lei das Estatais (Lei nº 13.303/2016)',
  8: 'Aula 07 - Entidades Paraestatais e Terceiro Setor',
  9: 'Aula 08 - Agentes Públicos e Estatuto dos Servidores',
  10: 'Aula 09 - Licitações Públicas (Lei nº 14.133/2021 - Parte 1)',
  11: 'Aula 10 - Licitações Públicas (Lei nº 14.133/2021 - Parte 2)',
  12: 'Aula 11 - Contratos Administrativos (Lei nº 14.133/2021)',
  13: 'Aula 12 - Serviços Públicos e Concessões',
  14: 'Aula 13 - Parcerias Público-Privadas (PPPs - Lei nº 11.079/2004)',
  15: 'Aula 14 - Responsabilidade Civil do Estado',
  16: 'Aula 15 - Controle da Administração Pública',
  17: 'Aula 16 - Improbidade Administrativa (Lei nº 8.429/1992)',
  18: 'Aula 17 - Bens Públicos',
  19: 'Aula 18 - Intervenção do Estado na Propriedade',
  20: 'Aula 19 - Convênios e Contratos de Repasse',
  21: 'Aula 20 - Resumo Geral de Direito Administrativo',
  22: 'Aula 21 - Processo Administrativo',
  23: 'Aula 22 - Constituição do Estado da Bahia (CE-BA)',
  24: 'Aula 23 - Lei Estadual da Bahia nº 14.634/2023 (Licitações)',
  25: 'Aula 24 - Lei Estadual da Bahia nº 9.290/2004',
};

export const FINANCAS_PUBLICAS_LESSON_NAMES: Record<number, string> = {
  1: 'Aula 00 - Conceito e Funções do Orçamento Público',
  2: 'Aula 01 - Princípios Orçamentários',
  3: 'Aula 02 - Créditos Adicionais (Suplementares, Especiais e Extraordinários)',
  4: 'Aula 03 - Ciclo Orçamentário e Processo Orçamentário',
  5: 'Aula 04 - Instrumentos de Planejamento na CF/88 (PPA, LDO e LOA)',
  6: 'Aula 05 - Receita Pública: Conceito e Classificações',
  7: 'Aula 06 - Despesa Pública: Conceito e Estrutura',
  8: 'Aula 07 - Despesa Pública: Classificação Orçamentária',
  9: 'Aula 08 - Estágios da Receita e da Despesa Pública',
  10: 'Aula 09 - Lei de Responsabilidade Fiscal (LRF Parte 1 - Planejamento e RCL)',
  11: 'Aula 10 - Lei de Responsabilidade Fiscal (LRF Parte 2 - Despesa com Pessoal)',
  12: 'Aula 11 - Lei de Responsabilidade Fiscal (LRF Parte 3 - Dívida e Endividamento)',
  13: 'Aula 12 - Lei de Responsabilidade Fiscal (LRF Parte 4 - Transparência e Controle)',
};

export function getLessonName(subjectName: string, lessonNumber: number): string {
  const nameClean = (subjectName || '').trim().toLowerCase();
  if (nameClean.includes('constitucional') && DIREITO_CONSTITUCIONAL_LESSON_NAMES[lessonNumber]) {
    return DIREITO_CONSTITUCIONAL_LESSON_NAMES[lessonNumber];
  }
  if ((nameClean.includes('portug') || nameClean.includes('língua') || nameClean.includes('lingua')) && PORTUGUES_LESSON_NAMES[lessonNumber]) {
    return PORTUGUES_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('racial') && IGUALDADE_RACIAL_LESSON_NAMES[lessonNumber]) {
    return IGUALDADE_RACIAL_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('contabilid') && !nameClean.includes('casp') && CONTABILIDADE_GERAL_LESSON_NAMES[lessonNumber]) {
    return CONTABILIDADE_GERAL_LESSON_NAMES[lessonNumber];
  }
  if ((nameClean.includes('casp') || nameClean.includes('setor público') || nameClean.includes('setor publico')) && CASP_LESSON_NAMES[lessonNumber]) {
    return CASP_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('administrativo') && DIREITO_ADMINISTRATIVO_LESSON_NAMES[lessonNumber]) {
    return DIREITO_ADMINISTRATIVO_LESSON_NAMES[lessonNumber];
  }
  if ((nameClean.includes('finanças') || nameClean.includes('financas') || nameClean.includes('afo') || nameClean.includes('orçamento')) && FINANCAS_PUBLICAS_LESSON_NAMES[lessonNumber]) {
    return FINANCAS_PUBLICAS_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('auditoria') && AUDITORIA_LESSON_NAMES[lessonNumber]) {
    return AUDITORIA_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('estat') && ESTATISTICA_LESSON_NAMES[lessonNumber]) {
    return ESTATISTICA_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('tribut') && DIREITO_TRIBUTARIO_LESSON_NAMES[lessonNumber]) {
    return DIREITO_TRIBUTARIO_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('matem') && MATEMATICA_FINANCEIRA_LESSON_NAMES[lessonNumber]) {
    return MATEMATICA_FINANCEIRA_LESSON_NAMES[lessonNumber];
  }
  if ((nameClean.includes('inform') || nameClean.includes('tecnologia')) && INFORMATICA_LESSON_NAMES[lessonNumber]) {
    return INFORMATICA_LESSON_NAMES[lessonNumber];
  }
  if (nameClean.includes('economia') && ECONOMIA_LESSON_NAMES[lessonNumber]) {
    return ECONOMIA_LESSON_NAMES[lessonNumber];
  }
  return `Aula ${String(Math.max(0, lessonNumber - 1)).padStart(2, '0')}`;
}

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
      const name = getLessonName(subject.name, i);
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
