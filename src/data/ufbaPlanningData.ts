export interface PlanTask {
  id: string;
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: string;
  shift: string;
  subject?: string;
  lesson?: string;
  title: string;
  description: string;
  isVaccine?: boolean;
}

export interface DayPlan {
  dayNumber: number;
  dateStr: string;
  weekNumber: number;
  phase: string;
  tasks: PlanTask[];
}

export function buildUfbaSprintPlan(): DayPlan[] {
  const days: DayPlan[] = [];

  // Data de Início: 22/10/2026
  const startDate = new Date(2026, 9, 22);

  // Sequência de matérias prioritárias UFBA 100% alinhada à numeração oficial do catálogo SEFAZ-BA / Matrizes
  const UFBA_WEEKDAY_SEQUENCE: { subject: string; lesson: string; title: string; desc: string }[] = [
    // Bloco 1: Fundação Contábil, CASP, AFO, Administrativo e Português
    { subject: 'Contabilidade Geral', lesson: 'Aula 00', title: 'Contabilidade Geral - Aula 00', desc: 'Aspectos Introdutórios da Contabilidade (Objeto, Finalidade e Técnicas)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 00', title: 'CASP - Aula 00', desc: 'Aspectos Introdutórios e Conceito da CASP (MCASP e NBC TSP)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 00', title: 'Direito Administrativo - Aula 00', desc: 'Princípios do Direito Administrativo (LIMPE e Implícitos)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 00', title: 'Português - Aula 00', desc: 'Ortografia Oficial, Acentuação Gráfica e Fonemas' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 01', title: 'Contabilidade Geral - Aula 01', desc: 'Patrimônio: Ativo, Passivo e Patrimônio Líquido (Situações Líquidas)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 01', title: 'CASP - Aula 01', desc: 'Despesa Pública no Setor Público (Categorias, Estágios, RP e DEA)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 00', title: 'AFO / Finanças - Aula 00', desc: 'Conceito e Funções do Orçamento Público (Alocativa, Distributiva e Estabilizadora)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 01', title: 'Direito Administrativo - Aula 01', desc: 'Conceito e Introdução ao Direito Administrativo' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 02', title: 'Contabilidade Geral - Aula 02', desc: 'Atos e Fatos Contábeis (Permutativos, Modificativos e Mistos) e Lançamentos' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 02', title: 'CASP - Aula 02', desc: 'MCASP: Procedimentos Contábeis Patrimoniais II (Imobilizado, Reavaliação e Impairment)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 01', title: 'AFO / Finanças - Aula 01', desc: 'Princípios Orçamentários (Universalidade, Exclusividade, Não Afetação e Anualidade)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 01', title: 'Português - Aula 01', desc: 'Compreensão e Interpretação de Textos (Coesão e Coerência)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 03', title: 'Contabilidade Geral - Aula 03', desc: 'Contas, Teorias das Contas, Natureza Devedora/Credora e Plano de Contas' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 03', title: 'CASP - Aula 03', desc: 'MCASP: Procedimentos Contábeis Patrimoniais III (Intangível, Provisões e VPA/VPD)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 02', title: 'Direito Administrativo - Aula 02', desc: 'Poderes Administrativos (Vinculado, Discricionário, Hierárquico, Disciplinar e Polícia)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 02', title: 'Português - Aula 02', desc: 'Tipologia e Gêneros Textuais (Narração, Descrição, Dissertação e Injunção)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 04', title: 'Contabilidade Geral - Aula 04', desc: 'Balancete de Verificação (Finalidade, Colunas e Limitações na Detecção de Erros)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 04', title: 'CASP - Aula 04', desc: 'Plano de Contas Aplicado ao Setor Público (PCASP - 8 Classes e Atributos F/P)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 02', title: 'AFO / Finanças - Aula 02', desc: 'Créditos Adicionais (Suplementares, Especiais e Extraordinários e Fontes)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 03', title: 'Direito Administrativo - Aula 03', desc: 'Atos Administrativos - Parte 1 (Requisitos/Elementos e Atributos)' },

    // Bloco 2: Demonstrações Públicas (DCASP), CPCs Fundamentais e Organização/Agentes/Licitações
    { subject: 'Contabilidade Geral', lesson: 'Aula 05', title: 'Contabilidade Geral - Aula 05', desc: 'Estrutura Conceitual Contábil (CPC 00 R2 - Características Qualitativas e Elementos)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 05', title: 'CASP - Aula 05', desc: 'Balanço Orçamentário (Previsão vs. Execução, Resultado Orçamentário e Quadros de RP)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 03', title: 'AFO / Finanças - Aula 03', desc: 'Ciclo Orçamentário e Processo Legislativo Orçamentário (Prazos e Emendas)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 03', title: 'Português - Aula 03', desc: 'Semântica: Parônimos, Homônimos, Polissemia e Significação de Palavras' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 06', title: 'Contabilidade Geral - Aula 06', desc: 'Operações com Mercadorias e Estoques (CPC 16 - PEPS, Média Ponderada e CMV)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 06', title: 'CASP - Aula 06', desc: 'Balanço Financeiro (Ingressos/Dispêndios Orçamentários e Extraorçamentários)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 04', title: 'Direito Administrativo - Aula 04', desc: 'Atos Administrativos - Parte 2 (Espécies, Anulação, Revogação e Convalidação)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 06', title: 'Português - Aula 06', desc: 'Classes de Palavras: Substantivos, Adjetivos e Artigos' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 07', title: 'Contabilidade Geral - Aula 07', desc: 'Tributos Sobre Compras e Vendas (ICMS, IPI, PIS e COFINS Recuperáveis)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 07', title: 'CASP - Aula 07', desc: 'Balanço Patrimonial Público (Quadro Principal, Financeiro/Permanente e Superávit Financeiro)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 04', title: 'AFO / Finanças - Aula 04', desc: 'Instrumentos de Planejamento na CF/88 (PPA, LDO e LOA)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 05', title: 'Direito Administrativo - Aula 05', desc: 'Organização Administrativa (Administração Direta, Autarquias, Fundações e Estatais)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 08', title: 'Contabilidade Geral - Aula 08', desc: 'Duplicatas Descontadas e Perdas Estimadas em Créditos de Liquidação Duvidosa (PCLD)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 08', title: 'CASP - Aula 08', desc: 'Demonstração das Variações Patrimoniais (DVP - VPA, VPD e Resultado Patrimonial)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 05', title: 'AFO / Finanças - Aula 05', desc: 'Receita Pública: Conceito, Classificações (Correntes/Capital) e Origens' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 07', title: 'Português - Aula 07', desc: 'Pronomes: Emprego, Relativos (Cujo/Onde) e Colocação Pronominal' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 09', title: 'Contabilidade Geral - Aula 09', desc: 'Ativo Imobilizado (CPC 27 - Reconhecimento, Mensuração e Custos Ativáveis)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 09', title: 'CASP - Aula 09', desc: 'DFC, DMPL e Notas Explicativas no Setor Público (MCASP Parte V)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 08', title: 'Direito Administrativo - Aula 08', desc: 'Agentes Públicos e Regime Jurídico dos Servidores Públicos' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 08', title: 'Português - Aula 08', desc: 'Verbos: Modos, Tempos, Vozes Verbais e Correlação Verbal' },

    // Bloco 3: CPCs Avançados, Lei 4.320/64, NBC TSP Estrutura Conceitual, LRF e Lei 14.133/2021
    { subject: 'Contabilidade Geral', lesson: 'Aula 10', title: 'Contabilidade Geral - Aula 10', desc: 'Depreciação, Amortização e Exaustão (Métodos Linear, Soma dos Dígitos e Unidades)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 10', title: 'CASP - Aula 10', desc: 'Título IX da Lei nº 4.320/64 (Contabilidade Pública e Avaliação Patrimonial)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 06', title: 'AFO / Finanças - Aula 06', desc: 'Despesa Pública: Conceito, Estrutura Funcional-Programática e Créditos' },
    { subject: 'Direito Administrativo', lesson: 'Aula 09', title: 'Direito Administrativo - Aula 09', desc: 'Nova Lei de Licitações (Lei 14.133/2021 - Parte 1: Modalidades e Critérios)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 11', title: 'Contabilidade Geral - Aula 11', desc: 'Ativo Intangível (CPC 04 - Pesquisa vs. Desenvolvimento, Goodwill e Amortização)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 11', title: 'CASP - Aula 11', desc: 'NBC TSP Estrutura Conceitual (RCPGs, Características Qualitativas e Mensuração)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 07', title: 'AFO / Finanças - Aula 07', desc: 'Despesa Pública: Classificação Orçamentária por Natureza (Categorias e GND)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 09', title: 'Português - Aula 09', desc: 'Estrutura Sintática da Oração (Sujeito, Predicado e Complementos)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 12', title: 'Contabilidade Geral - Aula 12', desc: 'Redução ao Valor Recuperável de Ativos - Impairment (CPC 01 - Valor em Uso e Valor Justo)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 12', title: 'CASP - Aula 12', desc: 'Tópicos Selecionados da LRF I (Receita Corrente Líquida e Limites de Pessoal)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 10', title: 'Direito Administrativo - Aula 10', desc: 'Nova Lei de Licitações (Lei 14.133/2021 - Parte 2: Dispensa e Inexigibilidade)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 10', title: 'Português - Aula 10', desc: 'Sintaxe do Período Composto (Orações Coordenadas e Subordinadas)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 13', title: 'Contabilidade Geral - Aula 13', desc: 'Passivo Exigível, Provisões e Passivos/Ativos Contingentes (CPC 25)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 13', title: 'CASP - Aula 13', desc: 'Tópicos Selecionados da LRF II (Regra de Ouro, ARO, RREO, RGF e Restos a Pagar)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 08', title: 'AFO / Finanças - Aula 08', desc: 'Estágios da Receita (Previsão, Lançamento, Arrecadação, Recolhimento) e da Despesa' },
    { subject: 'Direito Administrativo', lesson: 'Aula 11', title: 'Direito Administrativo - Aula 11', desc: 'Contratos Administrativos (Lei 14.133/2021 - Cláusulas Exorbitantes, Garantias e Duração)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 14', title: 'Contabilidade Geral - Aula 14', desc: 'Patrimônio Líquido: Capital Social, Reservas de Capital e Reservas de Lucros' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 14', title: 'CASP - Aula 14', desc: 'Princípios Orçamentários e Contábeis no Setor Público' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 09', title: 'AFO / Finanças - Aula 09', desc: 'Lei de Responsabilidade Fiscal (LRF Parte 1 - Planejamento, Metas e Renúncia de Receita)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 11', title: 'Português - Aula 11', desc: 'Concordância Verbal e Concordância Nominal' },

    // Bloco 4: Demonstrações Societárias Completas (BP, DRE, DFC, DMPL, DVA), Análise de Balanços e Patrimônio Público
    { subject: 'Contabilidade Geral', lesson: 'Aula 15', title: 'Contabilidade Geral - Aula 15', desc: 'Ações em Tesouraria, Dividendos Obrigatórios e Juros sobre o Capital Próprio (JSCP)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 15', title: 'CASP - Aula 15', desc: 'Composição do Patrimônio Público (Bens de Uso Comum, Especial e Dominicais)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 10', title: 'AFO / Finanças - Aula 10', desc: 'Lei de Responsabilidade Fiscal (LRF Parte 2 - Despesa com Pessoal e Limite Prudencial)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 12', title: 'Português - Aula 12', desc: 'Regência Verbal e Nominal e Emprego do Sinal Indicativo de Crase' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 16', title: 'Contabilidade Geral - Aula 16', desc: 'Apuração do Resultado do Exercício (ARE), Absorção de Prejuízos e Participações' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 16', title: 'CASP - Aula 16', desc: 'Estoques no Setor Público (NBC TSP 04 - Distribuição Gratuita e Custo de Reposição)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 15', title: 'Direito Administrativo - Aula 15', desc: 'Controle da Administração Pública (Interno, Externo, Parlamentar e Tribunais de Contas)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 13', title: 'Português - Aula 13', desc: 'Pontuação (Vírgula, Ponto e Vírgula, Dois-Pontos e Travessões)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 17', title: 'Contabilidade Geral - Aula 17', desc: 'Balanço Patrimonial Societário (Estrutura Completa da Lei 6.404/76 e Ciclo Operacional)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 17', title: 'CASP - Aula 17', desc: 'Fundeb (Fundo de Manutenção da Educação Básica - Contabilização de Deduções e Receitas)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 11', title: 'AFO / Finanças - Aula 11', desc: 'Lei de Responsabilidade Fiscal (LRF Parte 3 - Dívida Pública, Operações de Crédito e ARO)' },
    { subject: 'Direito Administrativo', lesson: 'Aula 16', title: 'Direito Administrativo - Aula 16', desc: 'Improbidade Administrativa (Lei 8.429/1992 atualizada pela Lei 14.230/2021)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 18', title: 'Contabilidade Geral - Aula 18', desc: 'Demonstração do Resultado do Exercício (DRE - Receita Líquida, Lucro Bruto e LAIR)' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 18', title: 'CASP - Aula 18', desc: 'Síntese Geral de Contabilidade Pública (Regimes, PCASP, DCASP e NBC TSP)' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 12', title: 'AFO / Finanças - Aula 12', desc: 'Lei de Responsabilidade Fiscal (LRF Parte 4 - Transparência, RREO, RGF e Contas)' },
    { subject: 'Língua Portuguesa', lesson: 'Aula 14', title: 'Português - Aula 14', desc: 'Reescritura de Frases, Nominalização e Equivalência de Estruturas' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 19', title: 'Contabilidade Geral - Aula 19', desc: 'Demonstração dos Fluxos de Caixa (DFC - CPC 03: Métodos Direto e Indireto)' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 20', title: 'Contabilidade Geral - Aula 20', desc: 'Demonstração das Mutações do Patrimônio Líquido (DMPL) e DLPA' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 21', title: 'Contabilidade Geral - Aula 21', desc: 'Demonstração do Valor Adicionado (DVA - CPC 09: Geração e Distribuição da Riqueza)' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 22', title: 'Contabilidade Geral - Aula 22', desc: 'Avaliação de Investimentos pelo Método da Equivalência Patrimonial (MEP - CPC 18)' },

    { subject: 'Contabilidade Geral', lesson: 'Aula 25', title: 'Contabilidade Geral - Aula 25', desc: 'Análise de Balanços: Índices de Liquidez (Geral, Corrente, Seca e Imediata) e CCL' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 26', title: 'Contabilidade Geral - Aula 26', desc: 'Análise de Balanços: Endividamento, ROA, ROE, DuPont e Alavancagem Financeira' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 27', title: 'Contabilidade Geral - Aula 27', desc: 'Prazos Médios (PME, PMR, PMP), Ciclo Operacional e Ciclo Financeiro' },
    { subject: 'Matemática Financeira', lesson: 'Aula 00', title: 'Matemática Financeira - Aula 00', desc: 'Juros Simples e Desconto Simples (Racional e Comercial)' },

    { subject: 'Matemática Financeira', lesson: 'Aula 01', title: 'Matemática Financeira - Aula 01', desc: 'Juros Compostos, Taxas Equivalentes e Convenções Linear/Exponencial' },
    { subject: 'Matemática Financeira', lesson: 'Aula 08', title: 'Matemática Financeira - Aula 08', desc: 'Sistemas de Amortização: Tabela Price (Sistema Francês - SAF)' },
    { subject: 'Matemática Financeira', lesson: 'Aula 09', title: 'Matemática Financeira - Aula 09', desc: 'Sistemas de Amortização: SAC (Amortização Constante) e SAM' },
    { subject: 'Direito Tributário', lesson: 'Aula 00', title: 'Direito Tributário - Aula 00', desc: 'Conceito de Tributo (Art. 3º do CTN) e Espécies Tributárias (Teoria Pentapartite)' },

    { subject: 'Direito Constitucional', lesson: 'Aula 10', title: 'Direito Constitucional - Aula 10', desc: 'Administração Pública na CF/88 (Art. 37 ao 41 da CF/88)' },
    { subject: 'Direito Constitucional', lesson: 'Aula 18', title: 'Direito Constitucional - Aula 18', desc: 'Finanças Públicas e Orçamento na CF/88 (Art. 165 ao 169 da CF/88)' },
    { subject: 'Informática Básica', lesson: 'Aula 00', title: 'Informática - Aula 00', desc: 'Conceitos Fundamentais de Hardware e Software' },
    { subject: 'Informática Básica', lesson: 'Aula 06', title: 'Informática - Aula 06', desc: 'Planilhas Eletrônicas: Microsoft Excel (Fórmulas e Funções)' },

    { subject: 'Língua Portuguesa', lesson: 'Aula 15', title: 'Português - Aula 15', desc: 'Figuras de Linguagem e Bateria de Questões Comentadas' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 28', title: 'Contabilidade Geral - Aula 28', desc: 'Tópicos Especiais I: Arrendamento (CPC 06), Subvenção (CPC 07) e Custos de Empréstimos' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 29', title: 'Contabilidade Geral - Aula 29', desc: 'Tópicos Especiais II: Instrumentos Financeiros (CPC 48), Receita (CPC 47) e Eventos Subsequentes' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 30', title: 'Contabilidade Geral - Aula 30', desc: 'Revisão Geral de Contabilidade Societária e Pronunciamentos do CPC' },
  ];

  // Tarefas da Vacina CGU para os fins de semana (Manhã) - 100% mapeadas a aulas únicas
  const CGU_VACCINE_TASKS = [
    { subject: 'Auditoria', lesson: 'Aula 00', title: '💉 Vacina CGU: Auditoria - Aula 00 (NBC TA 200)', desc: 'Conceito, Objetivos Gerais do Auditor Independente, Ceticismo e Risco de Auditoria' },
    { subject: 'Direito Administrativo', lesson: 'Aula 14', title: '💉 Vacina CGU: Responsabilidade Civil do Estado - Aula 14', desc: 'Teoria do Risco Administrativo (Art. 37, §6º da CF/88), Excludentes e Ação Regressiva' },
    { subject: 'Auditoria', lesson: 'Aula 01', title: '💉 Vacina CGU: Auditoria Interna - Aula 01 (NBC TI 01)', desc: 'Auditoria Interna vs. Externa, Papéis de Trabalho, Fraude vs. Erro e Relatório' },
    { subject: 'Direito Administrativo', lesson: 'Aula 21', title: '💉 Vacina CGU: Processo Administrativo Federal - Aula 21 (Lei 9.784/99)', desc: 'Princípios, Competência, Delegação/Avocação, Decadência Quinquenal e Recursos' },
    { subject: 'Auditoria', lesson: 'Aula 02', title: '💉 Vacina CGU: Planejamento de Auditoria - Aula 02 (NBC TA 300)', desc: 'Estratégia Global de Auditoria, Plano de Auditoria e Auditoria Inicial' },
    { subject: 'Auditoria', lesson: 'Aula 07', title: '💉 Vacina CGU: Controle Interno e Riscos - Aula 07 (NBC TA 315 e COSO)', desc: 'Identificação e Avaliação dos Riscos de Distorção Relevante e Componentes do Controle Interno' },
    { subject: 'Auditoria', lesson: 'Aula 03', title: '💉 Vacina CGU: Evidência de Auditoria - Aula 03 (NBC TA 500)', desc: 'Adequação e Suficiência da Evidência, Inspeção, Confirmação Externa e Recálculo' },
    { subject: 'Auditoria', lesson: 'Aula 06', title: '💉 Vacina CGU: Relatório do Auditor Independente - Aula 06 (NBC TA 700/705)', desc: 'Opinião Não Modificada vs. Opinião com Ressalva, Adversa e Abstenção de Opinião' },
    { subject: 'Auditoria', lesson: 'Aula 04', title: '💉 Vacina CGU: Amostragem em Auditoria - Aula 04 (NBC TA 530)', desc: 'Risco de Amostragem, Estratificação, Projeção de Distorções e Tamanho da Amostra' },
    { subject: 'Auditoria', lesson: 'Aula 05', title: '💉 Vacina CGU: Materialidade em Auditoria - Aula 05 (NBC TA 320)', desc: 'Materialidade Global, Materialidade para Execução dos Trabalhos e Revisão' },
  ];

  // Baterias de Revisão Ativa para os fins de semana (Noite) - cada fim de semana exercita uma aula distinta!
  const WEEKEND_REVIEW_TASKS = [
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 04', title: 'Revisão Ativa: Bateria PCASP e Naturezas de Informação (Aula 04)', desc: 'Resolução de 50 questões comentadas sobre as 8 Classes do PCASP e Atributos F/P' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 02', title: 'Revisão Ativa: Bateria Créditos Adicionais e Fontes (Aula 02)', desc: 'Resolução de 50 questões sobre Créditos Suplementares, Especiais, Extraordinários e Superávit Financeiro' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 05', title: 'Revisão Ativa: Bateria Balanço Orçamentário (Aula 05)', desc: 'Resolução de 50 questões sobre Resultado Orçamentário e Quadros de Restos a Pagar' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 06', title: 'Revisão Ativa: Bateria Balanço Financeiro (Aula 06)', desc: 'Resolução de 50 questões sobre Ingressos/Dispêndios Extraorçamentários e Resultado Financeiro' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 07', title: 'Revisão Ativa: Bateria Balanço Patrimonial Público (Aula 07)', desc: 'Resolução de 50 questões sobre Ativo/Passivo Financeiro vs. Permanente e Superávit Financeiro' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 08', title: 'Revisão Ativa: Bateria Demonstração das Variações Patrimoniais (Aula 08)', desc: 'Resolução de 50 questões sobre VPA, VPD e Resultado Patrimonial do Exercício' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 09', title: 'Revisão Ativa: Bateria LRF - Receita Corrente Líquida e Renúncia (Aula 09)', desc: 'Resolução de 50 questões sobre Planejamento, Metas Fiscais, RCL e Art. 14 da LRF' },
    { subject: 'Administração, Economia e Finanças Públicas', lesson: 'Aula 10', title: 'Revisão Ativa: Bateria LRF - Despesa com Pessoal e Limites (Aula 10)', desc: 'Resolução de 50 questões sobre Limites de Pessoal (50%/60%), Limite Prudencial e Recondução' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 18', title: 'Revisão Ativa: Bateria DRE e Apuração do Resultado (Aula 18)', desc: 'Resolução de 50 questões sobre Deduções da Receita Bruta, Lucro Bruto e Participações' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 19', title: 'Revisão Ativa: Bateria DFC - Fluxos de Caixa (Aula 19)', desc: 'Resolução de 50 questões sobre Fluxos Operacionais, Investimento e Financiamento (CPC 03)' },
  ];

  // Tarefas de Reta Final UFBA (Dias 54 a 59) com aulas específicas distintas
  const RETA_FINAL_T1 = [
    { subject: 'Direito Administrativo', lesson: 'Aula 05', title: 'Reta Final UFBA: Autarquias Federais e Regime das IFES (Aula 05)', desc: 'Natureza autárquica especial das Universidades Federais, autonomia universitária (Art. 207 da CF) e bens' },
    { subject: 'Direito Administrativo', lesson: 'Aula 08', title: 'Reta Final UFBA: Regime Jurídico dos Servidores - Lei 8.112/90 (Aula 08)', desc: 'Provimento, vacância, direitos, deveres, proibições e processo administrativo disciplinar' },
    { subject: 'Direito Administrativo', lesson: 'Aula 09', title: 'Reta Final UFBA: Licitações Públicas - Lei 14.133/2021 Parte 1 (Aula 09)', desc: 'Modalidades licitatórias, pregão, diálogo competitivo e critérios de julgamento' },
    { subject: 'Direito Administrativo', lesson: 'Aula 10', title: 'Reta Final UFBA: Contratação Direta - Lei 14.133/2021 Parte 2 (Aula 10)', desc: 'Hipóteses de inexigibilidade (Art. 74), dispensa de licitação (Art. 75) e alienações' },
    { subject: 'Direito Administrativo', lesson: 'Aula 11', title: 'Reta Final UFBA: Contratos Administrativos na Lei 14.133/2021 (Aula 11)', desc: 'Alteração unilateral, equilíbrio econômico-financeiro, duração e extinção contratual' },
    { subject: 'Direito Administrativo', lesson: 'Aula 16', title: 'Reta Final UFBA: Improbidade Administrativa - Lei 8.429/92 (Aula 16)', desc: 'Exigência de dolo específico, espécies de atos (Arts. 9º, 10 e 11) e sanções' },
  ];

  const RETA_FINAL_T2 = [
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 05', title: 'Revisão Relâmpago UFBA: Balanço Orçamentário e Restos a Pagar (Aula 05)', desc: 'Apuração do Resultado Orçamentário, Economia Orçamentária e Quadros Anexos de RP' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 06', title: 'Revisão Relâmpago UFBA: Balanço Financeiro e Extraorçamentário (Aula 06)', desc: 'Equação do Balanço Financeiro, compensação dos RP inscritos e transferências financeiras' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 07', title: 'Revisão Relâmpago UFBA: Balanço Patrimonial e Superávit Financeiro (Aula 07)', desc: 'Cálculo do Superávit Financeiro (Ativo Financeiro - Passivo Financeiro) e atributos F/P' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 08', title: 'Revisão Relâmpago UFBA: DVP, VPA e VPD pelo Regime de Competência (Aula 08)', desc: 'Variações quantitativas vs. qualitativas e apuração do Resultado Patrimonial' },
    { subject: 'Contabilidade Aplicada ao Setor Público (CASP)', lesson: 'Aula 11', title: 'Revisão Relâmpago UFBA: NBC TSP Estrutura Conceitual (Aula 11)', desc: 'Características qualitativas, restrições da informação e bases de mensuração' },
    { subject: 'Contabilidade Geral', lesson: 'Aula 30', title: 'Revisão Relâmpago UFBA: Síntese Geral de Contabilidade Societária (Aula 30)', desc: 'Revisão final de CPC 00, Estoques (CPC 16), Imobilizado (CPC 27), Impairment (CPC 01) e DFC/DVA' },
  ];

  let weekdayIdx = 0;
  let vaccineIdx = 0;

  for (let d = 1; d <= 60; d++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + (d - 1));
    const dayOfWeek = currentDate.getDay(); // 0 = Domingo, 6 = Sábado
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    const dateFormatted = currentDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const weekNum = Math.ceil(d / 7);

    const tasks: PlanTask[] = [];

    // Marcos Especiais
    if (d === 53) {
      // 13/12/2026: PROVA DA CGU
      tasks.push({
        id: `ufba-day-53-cgu`,
        dayNumber: 53,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🎯 DIA DE PROVA: CGU',
        shift: 'Dia Inteiro',
        subject: 'Auditoria',
        lesson: 'Aula 16',
        title: '🌟 PROVA DA CGU EM SALVADOR (Auditor Federal)',
        description: 'Aplicação da prova Cebraspe. Foco na pontuação líquida: deixe em branco o que não domina!'
      });
      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🎯 DIA DE PROVA: CGU',
        tasks
      });
      continue;
    }

    if (d === 60) {
      // 20/12/2026: PROVA DA UFBA
      tasks.push({
        id: `ufba-day-60-ufba`,
        dayNumber: 60,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🏆 DIA DE PROVA: UFBA',
        shift: 'Dia Inteiro',
        subject: 'Contabilidade Aplicada ao Setor Público (CASP)',
        lesson: 'Aula 18',
        title: '🏆 PROVA DA UFBA EM SALVADOR (Contador - Código 405)',
        description: '60 Questões (Específicas Peso 2) + Redação. Chute tudo o que tiver dúvida (não anula)! Sua vaga em Salvador.'
      });
      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: '🏆 DIA DE PROVA: UFBA',
        tasks
      });
      continue;
    }

    if (d >= 54 && d <= 59) {
      // Semana entre CGU e UFBA: RETA FINAL EXCLUSIVA UFBA
      const rfIdx = d - 54;
      const t1 = RETA_FINAL_T1[rfIdx % RETA_FINAL_T1.length];
      const t2 = RETA_FINAL_T2[rfIdx % RETA_FINAL_T2.length];
      const portLesson = `Aula ${String(10 + (rfIdx % 6)).padStart(2, '0')}`;

      tasks.push({
        id: `ufba-day-${d}-t1`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        shift: 'Turno 1',
        subject: t1.subject,
        lesson: t1.lesson,
        title: t1.title,
        description: t1.desc
      });
      tasks.push({
        id: `ufba-day-${d}-t2`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        shift: 'Turno 2',
        subject: t2.subject,
        lesson: t2.lesson,
        title: t2.title,
        description: t2.desc
      });
      tasks.push({
        id: `ufba-day-${d}-t3`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        shift: 'Turno 3',
        subject: 'Língua Portuguesa',
        lesson: portLesson,
        title: `Treino de Redação e Gramática Aplicada (${portLesson})`,
        description: 'Elaboração de texto dissertativo de 25 linhas com revisão de sintaxe, pontuação e reescritura'
      });

      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 4: Sprint Final UFBA',
        tasks
      });
      continue;
    }

    // Finais de Semana: Vacina CGU + Redação UFBA + Revisão Ativa
    if (isWeekend) {
      const curVacIdx = vaccineIdx;
      const vTask = CGU_VACCINE_TASKS[curVacIdx % CGU_VACCINE_TASKS.length];
      const rTask = WEEKEND_REVIEW_TASKS[curVacIdx % WEEKEND_REVIEW_TASKS.length];
      const redPortLesson = `Aula ${String((curVacIdx + 1) % 16).padStart(2, '0')}`;
      vaccineIdx++;

      tasks.push({
        id: `ufba-day-${d}-vac`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        shift: 'Turno 1 (Manhã)',
        subject: vTask.subject,
        lesson: vTask.lesson,
        title: vTask.title,
        description: vTask.desc,
        isVaccine: true
      });

      tasks.push({
        id: `ufba-day-${d}-red`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        shift: 'Turno 2 (Tarde)',
        subject: 'Língua Portuguesa',
        lesson: redPortLesson,
        title: `✍️ Treino de Redação Semanal + Português (${redPortLesson})`,
        description: 'Produzir 1 texto dissertativo completo de 20 a 30 linhas sobre Eficiência Pública ou Ética'
      });

      tasks.push({
        id: `ufba-day-${d}-rev`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        shift: 'Turno 3 (Noite)',
        subject: rTask.subject,
        lesson: rTask.lesson,
        title: rTask.title,
        description: rTask.desc
      });

      days.push({
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 2: Vacina CGU & Revisão',
        tasks
      });
      continue;
    }

    // Dias de Semana Normais: 3 aulas por dia do Núcleo de Ouro UFBA
    for (let t = 1; t <= 3; t++) {
      const item = UFBA_WEEKDAY_SEQUENCE[weekdayIdx % UFBA_WEEKDAY_SEQUENCE.length];
      weekdayIdx++;
      tasks.push({
        id: `ufba-day-${d}-t${t}`,
        dayNumber: d,
        dateStr: dateFormatted,
        weekNumber: weekNum,
        phase: 'Fase 1: Núcleo de Ouro UFBA',
        shift: `Turno ${t}`,
        subject: item.subject,
        lesson: item.lesson,
        title: item.title,
        description: `${item.desc} (PDF da pasta Sefaz BA)`
      });
    }

    days.push({
      dayNumber: d,
      dateStr: dateFormatted,
      weekNumber: weekNum,
      phase: 'Fase 1: Núcleo de Ouro UFBA',
      tasks
    });
  }

  return days;
}
