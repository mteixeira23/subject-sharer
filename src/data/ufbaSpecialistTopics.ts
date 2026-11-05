export interface UfbaSpecialistTopic {
  id: string;
  code: string;
  title: string;
  category: string;
  block: 'especificos' | 'comuns' | 'assistente';
  weightLabel: string;
  specialistRole: string;
  habitusSubject: string;
  habitusLesson: string;
  sourceLegislation: string;
  summary: string;
  keyPoints: { title: string; explanation: string; mnemonicOrTrap?: string }[];
  comparativeTable?: { headers: string[]; rows: string[][] };
  fullTheoryMarkdown: string;
}

export const UFBA_SPECIALIST_TOPICS: Record<string, UfbaSpecialistTopic> = {
  'pericia-contabil': {
    id: 'pericia-contabil',
    code: 'Esp. Item 9',
    title: 'Perícia Contábil (NBC TP 01 e NBC PP 01)',
    category: '6. Auditoria, Controle Interno e Perícia',
    block: 'especificos',
    weightLabel: 'Peso 2.0',
    specialistRole: 'Especialista em Auditoria e Perícia Contábil',
    habitusSubject: 'Auditoria',
    habitusLesson: 'Aula 17',
    sourceLegislation: 'NBC TP 01 (R1) - Perícia Contábil; NBC PP 01 (R1) - Perito Contábil; CPC/2015 Arts. 464 a 480',
    summary: 'A perícia contábil constitui o conjunto de procedimentos técnicos e científicos destinados a levar à instância decisória elementos de prova necessários a subsidiar a justa solução do litígio, mediante laudo pericial contábil e/ou parecer pericial contábil, em conformidade com as normas jurídicas e profissionais, e com a legislação específica.',
    keyPoints: [
      {
        title: 'Diferença entre Laudo Pericial e Parecer Pericial',
        explanation: 'O Laudo Pericial Contábil é elaborado EXCLUSIVAMENTE pelo Perito do Juízo (nomeado pelo magistrado). O Parecer Pericial Contábil é elaborado pelo Perito Assistente Técnico (indicado pelas partes litigantes). Ambos devem ser fundamentados, mas o laudo responde aos quesitos judiciais e das partes de forma equidistante.',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA: A banca afirma que o assistente técnico emite laudo. ERRADO! Assistente técnico emite PARECER. Quem emite LAUDO é o perito do juiz!'
      },
      {
        title: 'Impedimento vs. Suspeição do Perito (NBC PP 01)',
        explanation: 'Impedimento é de caráter objetivo e absoluto (ex.: ser parte no processo, ter atuado como perito assistente ou testemunha, ter cônjuge ou parente até 3º grau no processo). Suspeição é de caráter subjetivo e relativo (ex.: amigo íntimo ou inimigo capital de uma das partes, credor ou devedor de qualquer das partes).',
        mnemonicOrTrap: '💡 Mnemônico: IMPEDIMENTO = Fato objetivo comprovável (família, processo anterior). SUSPEIÇÃO = Sentimento ou relação moral/financeira (amizade, inimizade, dívida).'
      },
      {
        title: 'Procedimentos Periciais (Exame, Vistoria, Indagação, Investigação, etc.)',
        explanation: 'Exame: análise de livros e documentos. Vistoria: verificação in loco de coisas e fatos. Indagação: busca de informações verbais. Investigação: pesquisa de elementos ocultos. Arbitramento: determinação de valores ou quantidades por estimativa fundamentada. Mensuração: quantificação física. Avaliação: valoração monetária. Certificação: atestação de informação contida em registros.',
        mnemonicOrTrap: '⚠️ PEGADINHA: Confundir Vistoria (coisas/bens móveis/imóveis) com Exame (livros, registros contábeis e documentos).'
      },
      {
        title: 'Honorários Periciais e Termo de Diligência',
        explanation: 'A proposta de honorários periciais deve considerar a complexidade, as horas estimadas, qualificação da equipe e despesas de viagem. Quando o perito necessitar de documentos em poder das partes ou de terceiros, emitirá o TERMO DE DILIGÊNCIA, fixando prazo razoável para cumprimento.',
        mnemonicOrTrap: 'Termo de Diligência: comunicação formal com protocolo de recebimento ou envio comprovado (AR/e-mail institucional).'
      }
    ],
    comparativeTable: {
      headers: ['Aspecto', 'Perito do Juízo (Oficial)', 'Perito Assistente Técnico'],
      rows: [
        ['Nomeação / Indicação', 'Nomeado pelo Juiz da causa', 'Indicado livremente pelas partes'],
        ['Documento Produzido', 'Laudo Pericial Contábil', 'Parecer Pericial Contábil'],
        ['Compromisso Legal', 'Presta compromisso de bem e fielmente cumprir o encargo', 'Não está sujeito a compromisso legal de posse nem suspeição'],
        ['Prazo de Entrega', 'Fixado pelo juiz (geralmente 20 dias antes da audiência)', 'No prazo comum após a juntada do laudo pelo perito oficial'],
        ['Equidistância / Imparcialidade', 'Absoluta imparcialidade; sujeito a impedimento e suspeição', 'Atua na defesa técnica da parte contratante, mas sem falsear a verdade']
      ]
    },
    fullTheoryMarkdown: `# Perícia Contábil — Módulo Especializado para o Concurso da UFBA (Cargo 405: Contador)
*Elaborado pelo Especialista em Auditoria e Perícia Contábil da Federação Hermes*

## 1. Fundamentos e Conceito (NBC TP 01 - R1)
A perícia contábil é uma atribuição privativa de bacharel em Ciências Contábeis registrado em Conselho Regional de Contabilidade (Decreto-Lei nº 9.295/1946). 
Segundo o item 2 da **NBC TP 01 (R1)**:
> *"A perícia contábil constitui o conjunto de procedimentos técnicos e científicos destinados a levar à instância decisória elementos de prova necessários a subsidiar a justa solução do litígio ou constatação de um fato, mediante laudo pericial contábil e/ou parecer pericial contábil, em conformidade com as normas jurídicas e profissionais e com a legislação específica."*

## 2. Espécies de Perícia Contábil
* **Perícia Judicial:** Realizada no âmbito do Poder Judiciário por determinação de magistrado.
* **Perícia Extrajudicial:** Realizada no âmbito arbitral (Lei nº 9.307/1996), estatal (inquéritos e sindicâncias administrativas) ou voluntária (acordos entre sócios, partilhas amigáveis).

## 3. Os Dois Instrumentos Periciais: Laudo x Parecer
* **Laudo Pericial Contábil:** Peça técnica elaborada pelo perito nomeado pelo juiz.
* **Parecer Pericial Contábil:** Peça técnica elaborada pelo perito-assistente técnico contratado pela parte litigante.
Ambos devem conter:
1. Identificação do processo e das partes;
2. Síntese do objeto da perícia;
3. Metodologia adotada e critérios técnicos;
4. Transcrição e resposta fundamentada aos quesitos formulados pelo juízo e pelas partes;
5. Conclusão;
6. Assinatura e número de registro no CRC com comprovante de regularidade (DHP/Certidão).

## 4. Procedimentos da Perícia Contábil (Item 29 da NBC TP 01)
* **Exame:** Análise de livros, registros e documentos contábeis.
* **Vistoria:** Verificação *in loco* do estado de bens, coisas ou situações.
* **Indagação:** Obtenção de testemunho ou esclarecimentos verbais.
* **Investigação:** Pesquisa do que está oculto por quaisquer circunstâncias.
* **Arbitramento:** Determinação de valores, quantidades ou soluções com base em estimativas técnicas fundamentadas.
* **Mensuração:** Ato de qualificar e quantificar fisicamente coisas, bens, direitos e obrigações.
* **Avaliação:** Determinação do valor monetário de coisas, bens, direitos e obrigações.
* **Certificação:** Ato de atestar a informação trazida no laudo ou parecer com base em registros autênticos.

## 5. Quesitos Suplementares e Esclarecimentos
* Quesitos suplementares podem ser apresentados durante a realização da perícia (art. 469 do CPC).
* Se houver dúvida ou divergência quanto ao laudo, as partes e o juiz podem intimar o perito para prestar esclarecimentos em audiência ou por escrito, no prazo de 15 dias.`
  },

  'casp-municipal-siconfi': {
    id: 'casp-municipal-siconfi',
    code: 'Esp. Item 7',
    title: 'Contabilidade Pública Municipal, Fundos e Sistemas (Siconfi, Siope, Siops)',
    category: '7. Contabilidade Pública Municipal / Fundos',
    block: 'especificos',
    weightLabel: 'Peso 2.0',
    specialistRole: 'Especialista em CASP e Contabilidade Municipal',
    habitusSubject: 'Contabilidade Aplicada ao Setor Público (CASP)',
    habitusLesson: 'Aula 19',
    sourceLegislation: 'Constituição Federal (Arts. 198, 212); Lei 4.320/64; LC 101/2000; Portaria STN Siconfi; Lei 14.113/2020 (Novo Fundeb)',
    summary: 'Abrange as particularidades contábeis da esfera municipal e dos sistemas nacionais de consolidação contábil e fiscal exigidos pelo governo federal (Siconfi, Siope e Siops), além da contabilização de fundos públicos municipais e tributos próprios (IPTU, ISSQN, ITBI).',
    keyPoints: [
      {
        title: 'Siconfi (Sistema de Informações Contábeis e Fiscais do Setor Público Brasileiro)',
        explanation: 'Gerido pela Secretaria do Tesouro Nacional (STN). É o repositório central que recebe a Matriz de Saldos Contábeis (MSC), o Relatório Resumido da Execução Orçamentária (RREO) e o Relatório de Gestão Fiscal (RGF) de todos os municípios, estados e da União.',
        mnemonicOrTrap: '⚠️ REGRA DE OURO: A MSC (Matriz de Saldos Contábeis) é enviada mensalmente ao Siconfi no nível de detalhamento de conta corrente e poder/órgão.'
      },
      {
        title: 'Siope e Siops: Vínculos Constitucionais Obrigatórios',
        explanation: 'SIOPE: Sistema de Informações sobre Orçamentos Públicos em Educação (MEC/FNDE) — monitora o cumprimento mínimo de 25% em Manutenção e Desenvolvimento do Ensino (MDE) e aplicação do Fundeb. SIOPS: Sistema de Informações sobre Orçamentos Públicos em Saúde (MS) — monitora a aplicação mínima municipal de 15% das receitas de impostos em Ações e Serviços Públicos de Saúde (ASPS).',
        mnemonicOrTrap: '💡 Mnemônico percentual: EDUCAÇÃO = 25% (Siope). SAÚDE MUNICIPAL = 15% (Siops). O não envio impede o recebimento de transferências voluntárias!'
      },
      {
        title: 'Contabilização de Fundos Municipais e Transferências Voluntárias',
        explanation: 'Fundos especiais (Art. 71 a 74 da Lei 4.320/64) não possuem personalidade jurídica própria, mas integram o orçamento municipal e devem ter contabilidade individualizada. As transferências voluntárias por convênios (Plataforma Transferegov) registram-se no momento da celebração (natureza de controle/atos potenciais) e na liberação financeira.',
        mnemonicOrTrap: '⚠️ PEGADINHA: Fundo municipal NÃO é pessoa jurídica autônoma; é uma afetação orçamentária vinculada a objetivos específicos com plano de contas integrado.'
      },
      {
        title: 'Tributos Municipais: IPTU, ITBI, ISSQN e Taxas',
        explanation: 'IPTU (lançamento de ofício/direto); ITBI (lançamento por declaração); ISSQN (lançamento por homologação na regra geral). O reconhecimento da receita tributária no setor público sob a ótica patrimonial (NBC TSP) se dá no FATO GERADOR (competência), mesmo antes da arrecadação.',
        mnemonicOrTrap: 'No enfoque orçamentário (Lei 4.320/64, art. 35): Caixa para receitas (arrecadação). No enfoque patrimonial (PCASP/NBC TSP): Competência (lançamento/fato gerador).'
      }
    ],
    comparativeTable: {
      headers: ['Sistema Federal', 'Órgão Gestor', 'Área de Monitoramento', 'Obrigatoriedade Constitucional'],
      rows: [
        ['SICONFI', 'STN (Min. Fazenda)', 'Contabilidade e Gestão Fiscal Geral (RREO, RGF, DCA, MSC)', 'LRF Art. 48 e 51'],
        ['SIOPE', 'FNDE / MEC', 'Gastos em Educação (MDE e Fundeb)', 'CF Art. 212 (Mínimo 25%)'],
        ['SIOPS', 'Ministério da Saúde', 'Gastos em Saúde Pública (ASPS)', 'CF Art. 198, §2º (Mínimo 15% Municípios)']
      ]
    },
    fullTheoryMarkdown: `# Contabilidade Aplicada ao Setor Público Municipal e Sistemas Nacionais
*Elaborado pelo Especialista em CASP e Finanças Municipais da Federação Hermes*

## 1. Particularidades da Contabilidade Municipal
A contabilidade dos municípios segue rigorosamente a estrutura da **Lei nº 4.320/1964**, da **Lei Complementar nº 101/2000 (LRF)** e do **MCASP/PCASP**. No entanto, possui regras singulares em relação à arrecadação de tributos próprios e à dependência de transferências constitucionais obrigatórias (FPM, cota-parte do ICMS e IPVA).

## 2. Os Três Grandes Sistemas Federais de Prestação de Contas
1. **SICONFI:**
   * Recebe as demonstrações contábeis e fiscais de todos os entes federativos.
   * Instrumento pelo qual a STN gera o Balanço do Setor Público Nacional (BSPN).
   * O não envio da declaração anual de contas acarreta impedimento de contratação de operações de crédito e garantia da União.
2. **SIOPE (Educação):**
   * Coleta dados da execução orçamentária e financeira dos recursos destinados à Manutenção e Desenvolvimento do Ensino (MDE).
   * Fiscaliza o cumprimento do limite de 25% da receita líquida de impostos e transferências tributárias (Art. 212 da CF/88) e o mínimo de 70% do Fundeb para remuneração dos profissionais da educação básica.
3. **SIOPS (Saúde):**
   * Fiscaliza o investimento mínimo em Ações e Serviços Públicos de Saúde (ASPS).
   * Para os municípios, o limite mínimo constitucional é de **15%** (Art. 198, § 2º, III da CF/88 e LC nº 141/2012).

## 3. Contabilização da Receita Tributária Municipal
* **Enfoque Patrimonial:** Débito no Ativo Circulante (Créditos Tributários a Receber) e Crédito em Variação Patrimonial Aumentativa (VPA - Impostos).
* **Enfoque Orçamentário:** No momento da arrecadação pelo agente bancário municipal, realiza-se o lançamento nas classes 5 e 6 do PCASP para registrar a receita orçamentária realizada.`
  },

  'legislacao-ufba-ifes': {
    id: 'legislacao-ufba-ifes',
    code: 'Comum • Adm.',
    title: 'Estatuto e Regimento Geral da UFBA e Governança das IFES',
    category: 'Administração Pública e Legislação UFBA (12 Questões)',
    block: 'comuns',
    weightLabel: 'Peso 1.0 / 2.0',
    specialistRole: 'Especialista em Legislação Universitária e Direito Público',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 25',
    sourceLegislation: 'Estatuto da UFBA; Regimento Geral da UFBA; CF/88 Art. 207 (Autonomia Universitária); Lei 11.091/2005 (PCCTAE)',
    summary: 'Estrutura institucional, órgãos deliberativos superiores (CONSUNI, CONSEPE, Conselho de Curadores), reitoria, pró-reitorias, congregações das faculdades/institutos, carreira TAE (Lei 11.091/2005) e regime administrativo da Universidade Federal da Bahia.',
    keyPoints: [
      {
        title: 'Conselhos Superiores da UFBA: CONSUNI, CONSEPE e Conselho de Curadores',
        explanation: 'CONSUNI (Conselho Universitário): Órgão deliberativo e consultivo máximo em matéria de política geral, administração e planejamento. CONSEPE (Conselho de Ensino, Pesquisa e Extensão): Órgão deliberativo e consultivo em matéria estritamente acadêmica (currículos, vagas, ensino). Conselho de Curadores: Órgão deliberativo e fiscalizador em matéria econômico-financeira e patrimonial da universidade.',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA DA UFBA: O CONSUNI aprova a política geral e o orçamento; o Conselho de Curadores fiscaliza e julga a prestação de contas e patrimônio; e o CONSEPE cuida do acadêmico.'
      },
      {
        title: 'Autonomia Universitária (Art. 207 da CF/88)',
        explanation: 'As universidades gozam de autonomia didático-científica, administrativa e de gestão financeira e patrimonial, e obedecerão ao princípio de indissociabilidade entre ensino, pesquisa e extensão.',
        mnemonicOrTrap: '💡 Autonomia não é soberania: a UFBA submete-se ao controle externo do TCU, CGU e às leis gerais da administração pública federal (Lei 8.112/90, Lei 14.133/21).'
      },
      {
        title: 'Estrutura da Reitoria e Pró-Reitorias da UFBA',
        explanation: 'A administração executiva central é exercida pelo Reitor, assessorado pelo Vice-Reitor e pelos Pró-Reitores: PRODEP (Pessoas), PROPLAN (Planejamento e Orçamento), PROAE (Assistência Estudantil), PROEXT (Extensão), PRPPG (Pesquisa e Pós-Graduação), PROGRAD (Graduação) e PROAD (Administração).',
        mnemonicOrTrap: 'O Contador e o Assistente em Administração atuam predominantemente sob coordenação da PROAD, PROPLAN e PRODEP.'
      },
      {
        title: 'Carreira TAE nas IFES (Lei nº 11.091/2005)',
        explanation: 'Estrutura o Plano de Carreira dos Cargos Técnico-Administrativos em Educação (PCCTAE) em 5 níveis de classificação (A, B, C, D e E). Assistente em Administração pertence ao Nível D (Médio) e Contador ao Nível E (Superior). Prevê desenvolvimento por Progressão por Capacitação Profissional, Progressão por Mérito Profissional (a cada 18 meses) e Incentivo à Qualificação (IQ).',
        mnemonicOrTrap: '⚠️ ATENÇÃO: Na Lei 11.091/05, o interstício da Progressão por Mérito Profissional é de 18 MESES de efetivo exercício!'
      }
    ],
    comparativeTable: {
      headers: ['Órgão Colegiado', 'Natureza / Função', 'Composição Principal', 'Competência Típica'],
      rows: [
        ['CONSUNI', 'Órgão Máximo da Universidade', 'Reitor (Presidente), Diretores, Docentes, Técnicos (15%) e Discentes (15%)', 'Fixar diretrizes institucionais, aprovar estatuto e normas gerais'],
        ['CONSEPE', 'Órgão Acadêmico Deliberativo', 'Reitor, Coordenadores acadêmicos, Docentes, TAE e Alunos', 'Deliberar sobre criação de cursos, currículos e pesquisa'],
        ['Conselho de Curadores', 'Órgão de Fiscalização Econômica', 'Representantes dos Conselhos, MEC, Comunidade, TAE e Discentes', 'Acompanhar a gestão financeira e aprovar a prestação de contas anual']
      ]
    },
    fullTheoryMarkdown: `# Estatuto e Regimento Geral da UFBA e Carreira TAE (Lei nº 11.091/2005)
*Elaborado pelo Especialista em Direito Universitário da Federação Hermes*

## 1. Natureza Jurídica e Fins da UFBA
A Universidade Federal da Bahia (UFBA) é uma autarquia federal de regime especial, vinculada ao Ministério da Educação, dotada de autonomia didático-científica, administrativa e de gestão financeira e patrimonial (art. 207 da CF/88).

## 2. Órgãos da Administração Superior da UFBA
1. **Conselho Universitário (CONSUNI):** Instância máxima de deliberação coletiva sobre políticas e diretrizes da UFBA.
2. **Conselho de Ensino, Pesquisa e Extensão (CONSEPE):** Delibera privativamente sobre questões didáticas, regimes de matrículas, projetos de pesquisa e extensão.
3. **Conselho de Curadores:** Órgão deliberativo e consultivo em matéria econômico-financeira e patrimonial. Examina a proposta orçamentária, autoriza alienação de bens imóveis e aprova a prestação de contas anual do Reitor.
4. **Assembleia Universitária:** Órgão consultivo solene que reúne toda a comunidade universitária (entrega de títulos, abertura do ano letivo).
5. **Reitoria:** Órgão executivo central que administra, coordena e superintende todas as atividades da universidade.

## 3. Unidades Universitárias
* A administração em nível de Unidade Universitária (Faculdades, Escolas e Institutos) é exercida pela **Congregação** (órgão deliberativo máximo da unidade), pela **Diretoria** (órgão executivo, exercido pelo Diretor e Vice-Diretor) e pelos **Departamentos** e **Colegiados de Cursos**.

## 4. Plano de Carreira TAE (Lei nº 11.091/2005)
* **Níveis de Classificação:** A, B, C, D (Assistente em Administração) e E (Contador).
* **Desenvolvimento na Carreira:**
  * **Progressão por Capacitação Profissional:** Mudança de nível de capacitação (I a IV) no mesmo nível de classificação, decorrente de obtenção de certificação em programa de capacitação (interstício de 18 meses).
  * **Progressão por Mérito Profissional:** Mudança para o padrão de vencimento imediatamente subsequente, a cada **18 meses** de efetivo exercício, mediante resultado favorável em avaliação de desempenho.
  * **Incentivo à Qualificação (IQ):** Percentual calculado sobre o padrão de vencimento percebido pelo servidor que possuir educação formal superior ao exigido para o cargo (maior percentual se tiver relação direta com o ambiente organizacional).`
  },

  'governo-digital-governanca': {
    id: 'governo-digital-governanca',
    code: 'Comum & Esp. 5',
    title: 'Governo Digital (Lei 14.129/21), Riscos (Decreto 9.830/19) e A3P',
    category: 'Administração Pública & Marcos Federais Contemporâneos',
    block: 'comuns',
    weightLabel: 'Peso 1.0 / 2.0',
    specialistRole: 'Especialista em Gestão Pública e Integridade',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 26',
    sourceLegislation: 'Lei 14.129/2021 (Governo Digital); Decreto 9.203/2017 (Governança); Decreto 9.830/2019 (LINDB); Agenda Ambiental A3P',
    summary: 'Princípios do Governo Digital, digitalização e interoperabilidade de serviços públicos, transparência, integridade, gestão de riscos no setor público e diretrizes de sustentabilidade da Agenda Ambiental na Administração Pública (A3P).',
    keyPoints: [
      {
        title: 'Princípios da Lei do Governo Digital (Lei nº 14.129/2021)',
        explanation: 'Desburocratização, inovação, transformação digital, o cidadão como centro dos serviços, dados abertos como regra e sigilo como exceção, autosserviço, integração e interoperabilidade entre sistemas públicos (Base Nacional de Serviços Públicos e Número de Identificação Único - CPF).',
        mnemonicOrTrap: '⚠️ O princípio da NÃO DUPLICIDADE (Once-Only): É vedado ao poder público exigir do cidadão certidões ou documentos que já constem em bases de dados oficiais federais!'
      },
      {
        title: 'Governança Pública (Dec. 9.203/17) e LINDB (Dec. 9.830/19)',
        explanation: 'Governança pública compreende mecanismos de Liderança, Estratégia e Controle (LEC). O Decreto 9.830/19 regulamenta os artigos 20 a 30 da LINDB: exige que as decisões de controle considerem as consequências práticas, os obstáculos reais do gestor e a responsabilização pessoal do agente apenas por DOLO ou ERRO GROSSEIRO.',
        mnemonicOrTrap: 'Erro grosseiro (Dec. 9.830/19): aquele manifesto, evidente e inescusável, praticado com culpa grave (imprudência, negligência ou imperícia em grau elevado).'
      },
      {
        title: 'Agenda Ambiental na Administração Pública (A3P)',
        explanation: 'Programa do Ministério do Meio Ambiente (adesão voluntária) baseado em 6 eixos temáticos prioritários: 1) Uso racional dos recursos naturais e bens públicos; 2) Gestão adequada dos resíduos gerados; 3) Qualidade de vida no ambiente de trabalho; 4) Sensibilização e capacitação dos servidores; 5) Compras públicas sustentáveis; e 6) Construções sustentáveis.',
        mnemonicOrTrap: '💡 Mnemônico dos 6 Eixos A3P: R-R-Q-S-C-C (Recursos, Resíduos, Qualidade, Sensibilização, Compras sustentáveis e Construções).'
      }
    ],
    comparativeTable: {
      headers: ['Marco Legal', 'Foco Principal', 'Conceito-Chave em Prova'],
      rows: [
        ['Lei 14.129/2021', 'Governo Digital e Eficiência', 'CPF como número suficiente de identificação; Balcão Único; Interoperabilidade'],
        ['Decreto 9.203/2017', 'Governança Pública Federal', 'Mecanismos: Liderança, Estratégia e Controle (LEC); Gestão de Riscos'],
        ['Decreto 9.830/2019', 'Segurança Jurídica (LINDB)', 'Consequencialismo decisório; Responsabilização apenas por dolo ou erro grosseiro'],
        ['Programa A3P (MMA)', 'Sustentabilidade Pública', 'Adesão voluntária; Regra dos 5 Rs (Repensar, Reduzir, Reaproveitar, Reciclar, Recusar)']
      ]
    },
    fullTheoryMarkdown: `# Governo Digital, Governança Pública, LINDB e Sustentabilidade (A3P)
*Elaborado pelo Especialista em Governança e Integridade da Federação Hermes*

## 1. Lei do Governo Digital (Lei nº 14.129/2021)
Institui princípios, regras e instrumentos para o Governo Digital e o aumento da eficiência pública:
* **Identificação Digital Única:** O número de inscrição no **CPF** é suficiente para identificação do cidadão nos bancos de dados de serviços públicos.
* **Interoperabilidade:** Integração segura e automática entre bases de dados de órgãos públicos.
* **Transparência Ativa e Dados Abertos:** Disponibilização contínua de bases de dados não sigilosas em formatos abertos, estruturados e legíveis por máquina.
* **Laboratórios de Inovação:** Espaços abertos à participação social para experimentação de soluções tecnológicas.

## 2. Governança Pública (Decreto nº 9.203/2017) e LINDB (Decreto nº 9.830/2019)
* **Governança Pública:** Conjunto de mecanismos de **Liderança, Estratégia e Controle** postos em prática para avaliar, direcionar e monitorar a gestão, com vistas à condução de políticas públicas e à prestação de serviços de interesse da sociedade.
* **LINDB (Art. 28 e Decreto 9.830/19):** O agente público só responderá pessoalmente por suas decisões ou opiniões técnicas em caso de **dolo** ou **erro grosseiro**. O mero nexo causal entre a conduta e o resultado danoso não implica responsabilização automática.

## 3. Agenda Ambiental na Administração Pública (A3P)
* Iniciativa do Ministério do Meio Ambiente (MMA) de adesão voluntária que estimula os órgãos públicos do país a implementarem práticas de sustentabilidade.
* Estrutura-se na política dos **5 Rs**: Repensar, Recusar, Reduzir, Reaproveitar e Reciclar.`
  },

  'redacao-oficial-variacao': {
    id: 'redacao-oficial-variacao',
    code: 'Comum • Port.',
    title: 'Redação Oficial (Manual da PR 3ª Ed.), Variação Linguística e Funções do Que/Se',
    category: '1. Língua Portuguesa (Comum: Contador e Assistente)',
    block: 'comuns',
    weightLabel: 'Peso 1.0',
    specialistRole: 'Especialista em Língua Portuguesa e Redação Oficial',
    habitusSubject: 'Língua Portuguesa',
    habitusLesson: 'Aula 16',
    sourceLegislation: 'Manual de Redação da Presidência da República (3ª Edição - 2018); Decreto nº 9.758/2019 (Pronomes de Tratamento)',
    summary: 'Atributos da Redação Oficial (clareza, precisão, objetividade, concisão, coesão, coerência, impessoalidade, formalidade e padronização), Padrão Ofício unificado (fim do memorando e aviso), pronomes de tratamento, adequação vocabular/variação linguística e análise morfossintática das partículas "Que" e "Se".',
    keyPoints: [
      {
        title: 'Atributos da Redação Oficial e o Padrão Ofício (MRPR 3ª Ed.)',
        explanation: 'A 3ª edição do Manual da Presidência da República aboliu a distinção entre Aviso, Ofício e Memorando, unificando todos no PADRÃO OFÍCIO. Os atributos obrigatórios são: Clareza e Precisão, Objetividade, Concisão, Coesão e Coerência, Impessoalidade, Formalidade e Padronização, e Uso da Norma Padrão.',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA: Memorando e Aviso NÃO existem mais desde a 3ª edição do MRPR! Hoje usa-se apenas o OFÍCIO tanto para comunicações internas quanto externas.'
      },
      {
        title: 'Pronomes de Tratamento, Vocativo e Fechos Oficiais',
        explanation: 'Na 3ª edição do MRPR existem APENAS DOIS fechos oficiais para todas as comunicações: "Respeitosamente," (para autoridades superiores, inclusive o Presidente da República) e "Atenciosamente," (para autoridades de mesma hierarquia, de hierarquia inferior ou demais casos). A concordância com Vossa Excelência / Vossa Senhoria é sempre na 3ª pessoa gramatical e o adjetivo concorda com o sexo da pessoa.',
        mnemonicOrTrap: '💡 Decreto 9.758/2019: Na administração federal, veda-se o tratamento "Doutor" ou "Excelentíssimo" para agentes públicos em geral; a regra passou a ser "Senhor". No MRPR tradicional: "Excelentíssimo Senhor" no vocativo é restrito aos Chefes dos 3 Poderes!'
      },
      {
        title: 'Variação Linguística: Diatópica, Diastrática, Diafásica e Diacrônica',
        explanation: 'Diatópica (geográfica/regional); Diastrática (social/grupos profissionais ou faixas etárias/gírias); Diafásica (situacional/grau de formalidade e monitoramento do registro); Diacrônica (histórica ao longo do tempo).',
        mnemonicOrTrap: '💡 Mnemônico: DiaTÓPICA = Topos/Lugar. DiaSTRÁTICA = Estrato social. DiaFÁSICA = Fase/Situação comunicativa (formal vs. informal). DiaCRÔNICA = Cronos/Tempo.'
      },
      {
        title: 'Funções Morfossintáticas do "QUE" e do "SE"',
        explanation: 'O "QUE" pode ser: Pronome Relativo (equivale a o qual/a qual, introduz oração adjetiva e exerce função sintática de sujeito, OD, OI, etc.) ou Conjunção Integrante (equivale a "ISTO", introduz oração substantiva). O "SE" pode ser: Partícula Apassivadora (PA - com VTD ou VTDI, o objeto direto vira sujeito paciente e o verbo concorda com ele) ou Índice de Indeterminação do Sujeito (IIS - com VI, VTI ou VL, verbo obrigatoriamente na 3ª pessoa do singular).',
        mnemonicOrTrap: '⚠️ Alugam-se apartamentos (VTD + PA = plural) vs. Precisa-se de contadores (VTI + IIS = singular obrigatório!).'
      }
    ],
    comparativeTable: {
      headers: ['Elemento', 'Regra do Manual da Presidência (3ª Ed.)', 'Pegadinha de Prova (Instituto Avalia)'],
      rows: [
        ['Tipos de Expedientes', 'Padrão Ofício unificado (Ofício, Exposição de Motivos, Mensagem)', 'Dizer que "Memorando" é usado para comunicação interna entre setores'],
        ['Fechos para Comunicações', 'Apenas 2: "Respeitosamente," (superior) e "Atenciosamente," (igual/inferior)', 'Citar "Cordialmente," ou "Atenciosamente e respeitosamente,"'],
        ['Concordância Pronominal', 'Vossa Excelência + verbo em 3ª pessoa + possessivo "seu/sua"', 'Usar "vosso/vossa" com Vossa Senhoria ou Vossa Excelência'],
        ['Partícula "SE" (PA x IIS)', 'PA = VTD/VTDI (verbo concorda); IIS = VTI/VI/VL (verbo no singular)', 'Pluralizar verbo transitivo indireto: "Necessitam-se de servidores" (ERRADO)']
      ]
    },
    fullTheoryMarkdown: `# Redação Oficial, Variação Linguística e Funções do "Que" e do "Se"
*Elaborado pelo Especialista em Língua Portuguesa e Redação Oficial da Federação Hermes*

## 1. Redação Oficial (Manual da Presidência da República - 3ª Edição)
Redação oficial é a maneira pela qual o Poder Público redige comunicações oficiais e atos normativos.
### 1.1. Atributos Fundamentais
* **Clareza e Precisão:** Texto imediatamente compreensível e sem ambiguidade.
* **Objetividade e Concisão:** Ir diretamente ao assunto e transmitir o máximo de informações com o mínimo de palavras.
* **Impessoalidade:** Ausência de impressões individuais de quem comunica e de quem recebe; comunicação sempre em nome do Serviço Público.
* **Formalidade e Padronização:** Respeito às normas de civilidade, liturgia do cargo e diagramação uniforme.

### 1.2. O Fim do Aviso e do Memorando: O Padrão Ofício
A partir da 3ª edição (2018), foram extintos o *Aviso* e o *Memorando*. Adotou-se a nomenclatura única **Ofício**, com a mesma diagramação (Padrão Ofício) tanto para comunicações internas (entre unidades de um mesmo órgão) quanto externas (para outros órgãos ou particulares).

### 1.3. Fechos e Pronomes de Tratamento
* **Fechos:** Apenas **Respeitosamente,** (para autoridades superiores) e **Atenciosamente,** (para autoridades de mesma hierarquia, inferior ou particulares).
* **Vocativo com "Excelentíssimo Senhor":** Exclusivo para os Chefes de Poder (Presidente da República, Presidente do Congresso Nacional e Presidente do STF). Para as demais autoridades trata-se no vocativo por **Senhor + Cargo** (ex.: *Senhor Senador,*, *Senhor Ministro,*, *Senhor Reitor,*).

## 2. Variação Linguística e Adequação de Registro
* **Variação Diatópica (Regional):** Diferenças fonéticas e lexicais conforme a região geográfica.
* **Variação Diastrática (Social):** Diferenças ligadas a classes sociais, faixas etárias ou jargões técnicos.
* **Variação Diafásica (Situacional):** Adaptação do falante ao grau de formalidade do contexto (registro formal vs. coloquial).
* **Variação Diacrônica (Histórica):** Mudanças da língua através do tempo (*vossa mercê > você*).

## 3. Funções do "QUE" e do "SE"
* **QUE — Conjunção Integrante:** Introduz Oração Subordinada Substantiva. Teste prático: substitua toda a oração iniciada pelo *que* por **ISTO** (*"É necessário que estudes" = "É necessário ISTO"*).
* **QUE — Pronome Relativo:** Retoma um termo antecedente e introduz Oração Subordinada Adjetiva. Teste prático: substitua por **o qual / a qual / os quais / as quais**.
* **SE — Pronome Apassivador (PA):** Acompanha verbos transitivos diretos (VTD) ou diretos e indiretos (VTDI) na voz passiva sintética. O termo seguinte é **Sujeito Paciente** e o verbo concorda com ele (*"Homologaram-se os resultados do concurso"*).
* **SE — Índice de Indeterminação do Sujeito (IIS):** Acompanha verbos transitivos indiretos (VTI), intransitivos (VI) ou de ligação (VL). O verbo fica obrigatoriamente na **3ª pessoa do singular** (*"Trata-se de processos urgentes"*, *"Assiste-se a grandes mudanças"*).`
  },

  'etica-lai-lgpd': {
    id: 'etica-lai-lgpd',
    code: 'Comum • Leg.',
    title: 'Ética Pública (Dec. 1.171/94 e 6.029/07), LAI (Lei 12.527/11) e LGPD (Lei 13.709/18)',
    category: '3. Administração Pública e Legislação Federal (Comum: Contador e Assistente)',
    block: 'comuns',
    weightLabel: 'Peso 1.0 / 2.0',
    specialistRole: 'Especialista em Legislação Federal e Transparência',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 27',
    sourceLegislation: 'Decreto nº 1.171/1994; Decreto nº 6.029/2007 (SCEP); Lei nº 12.527/2011 (LAI); Lei nº 13.709/2018 (LGPD)',
    summary: 'Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto 1.171/94), Comissões de Ética e penalidade de Censura, Sistema de Gestão da Ética (Decreto 6.029/07), Lei de Acesso à Informação (prazos, transparência ativa/passiva e graus de sigilo 5/15/25 anos) e LGPD aplicada ao Setor Público.',
    keyPoints: [
      {
        title: 'Decreto nº 1.171/1994 e Decreto nº 6.029/2007 (Ética no Serviço Público)',
        explanation: 'A Comissão de Ética é composta por 3 servidores ou empregados titulares de cargo efetivo ou emprego permanente (mandatos de 3 anos, não coincidentes). A ÚNICA penalidade aplicável pela Comissão de Ética é a CENSURA, fundamentada em parecer assinado por TODOS os seus integrantes, com ciência do faltoso.',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA: Comissão de Ética NÃO aplica advertência, suspensão nem demissão! Aplica exclusivamente a pena de CENSURA!'
      },
      {
        title: 'Lei de Acesso à Informação — LAI (Lei nº 12.527/2011): Prazos e Sigilo',
        explanation: 'Regra: publicidade; Exceção: sigilo. Prazo para conceder acesso à informação não imediata: até 20 DIAS, prorrogáveis por mais 10 DIAS mediante justificativa expressa. Prazo para interpor recurso contra negativa: 10 DIAS. Graus e prazos máximos de restrição de acesso à informação classificada: Reservada (5 anos), Secreta (15 anos) e Ultrassecreta (25 anos, única prorrogável uma vez).',
        mnemonicOrTrap: '💡 Mnemônico dos Prazos de Sigilo LAI: R-S-U = 5 - 15 - 25 anos (Reservada = 5, Secreta = 15, Ultrassecreta = 25). Informações PESSOAIS têm acesso restrito por até 100 ANOS (independentemente de classificação de sigilo)!'
      },
      {
        title: 'LGPD no Setor Público (Lei nº 13.709/2018 — Arts. 23 a 30)',
        explanation: 'O tratamento de dados pessoais pelas pessoas jurídicas de direito público deve ser realizado para o atendimento de sua finalidade pública, na persecução do interesse público, com o objetivo de executar competências legais ou cumprir atribuições do serviço público. Exige indicação de um Encarregado pelo Tratamento de Dados Pessoais (DPO).',
        mnemonicOrTrap: '⚠️ Diferença crucial: Na LGPD, dado pessoal SENSÍVEL abrange origem racial/étnica, convicção religiosa, opinião política, filiação a sindicato, dado referente à saúde, vida sexual ou dado genético/biométrico (CPF e salário NÃO são dados sensíveis!).'
      }
    ],
    comparativeTable: {
      headers: ['Norma Federal', 'Regra / Prazo Essencial', 'Exceção / Detalhe Crítico de Prova'],
      rows: [
        ['Decreto 1.171/1994', 'Pena única: CENSURA ética', 'Comissão de 3 membros efetivos; Parecer assinado por TODOS os integrantes'],
        ['LAI (Pedido de Acesso)', 'Imediato ou em até 20 dias (+10 dias)', 'Qualquer interessado pode pedir; É VEDADO exigir os motivos determinantes da solicitação!'],
        ['LAI (Graus de Sigilo)', 'Reservada (5a), Secreta (15a), Ultrassecreta (25a)', 'Informações pessoais (intimidade/honra): restritas pelo prazo máximo de 100 anos'],
        ['LGPD (Lei 13.709/18)', 'Controlador (Órgão), Operador e Encarregado (DPO)', 'Dispensa consentimento do titular quando para execução de políticas públicas previstas em lei']
      ]
    },
    fullTheoryMarkdown: `# Ética no Serviço Público, LAI (Lei 12.527/11) e LGPD (Lei 13.709/18)
*Elaborado pelo Especialista em Direito Público e Transparência da Federação Hermes*

## 1. Código de Ética do Servidor Federal (Decreto nº 1.171/1994 e Decreto nº 6.029/2007)
* **Conceito de Servidor Público para fins éticos:** Todo aquele que, por força de lei, contrato ou qualquer ato jurídico, preste serviços de natureza permanente, temporária ou excepcional, **ainda que sem retribuição financeira**, desde que ligado direta ou indiretamente a qualquer órgão do poder estatal.
* **Moralidade e Elemento Ético:** O servidor não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre o **honesto e o desonesto** (Art. 37, caput e § 4º da CF/88).
* **A Função da Publicidade:** A publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade, ensejando sua omissão comprometimento ético contra o bem comum, imputável a quem a negar (salvo casos de segurança nacional ou investigação sigilosa).
* **Comissão de Ética:** Composta por **3 titulares e 3 suplentes**, escolhidos entre servidores efetivos ou empregados permanentes, para mandatos de **3 anos** não coincidentes. Aplica exclusivamente a pena de **CENSURA**.

## 2. Lei de Acesso à Informação — LAI (Lei nº 12.527/2011)
* **Abrangência:** União, Estados, DF e Municípios (Administração Direta, Indireta e entidades privadas sem fins lucrativos que recebam recursos públicos, na parcela relativa aos recursos públicos).
* **Procedimento de Acesso (Art. 10 e 11):**
  * Qualquer interessado pode apresentar pedido de acesso, devendo conter identificação do requerente e especificação da informação.
  * **São VEDADAS quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público!**
  * Concessão **imediata** se disponível; não sendo possível, prazo máximo de **20 dias**, prorrogável por mais **10 dias** mediante justificativa expressa.
* **Classificação da Informação Sigilosa (Art. 24):**
  * **Ultrassecreta:** até **25 anos** (prorrogável 1 vez pela CMRI).
  * **Secreta:** até **15 anos**.
  * **Reservada:** até **5 anos**.
* **Informações Pessoais (Art. 31):** Relativas à intimidade, vida privada, honra e imagem têm acesso restrito pelo prazo máximo de **100 anos** a contar da data de sua produção.

## 3. Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018)
* **Agentes de Tratamento:** **Controlador** (a quem competem as decisões referentes ao tratamento — ex.: a UFBA) e **Operador** (quem realiza o tratamento em nome do controlador). O **Encarregado (DPO)** atua como canal de comunicação entre o controlador, os titulares dos dados e a ANPD.
* **Dados Pessoais Sensíveis:** Origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, dado referente à saúde ou à vida sexual, dado genético ou biométrico.
* **Tratamento pelo Poder Público (Art. 23):** Realizado para atendimento de sua finalidade pública, execução de competências legais e políticas públicas, devendo ser indicado um Encarregado e dada publicidade às hipóteses de tratamento.`
  },

  'contabilidade-custos-siafi': {
    id: 'contabilidade-custos-siafi',
    code: 'Esp. Contador',
    title: 'Contabilidade de Custos (Absorção, Variável, ABC, NBC TSP 34) e Sistema SIAFI',
    category: '5. Contabilidade de Custos e Contabilidade Pública (Exclusivo Contador)',
    block: 'especificos',
    weightLabel: 'Peso 2.0',
    specialistRole: 'Especialista em Contabilidade de Custos e SIAFI',
    habitusSubject: 'Contabilidade Geral',
    habitusLesson: 'Aula 31',
    sourceLegislation: 'CPC 16 (Estoques); NBC TSP 34 (Custos no Setor Público); Manual SIAFI / STN',
    summary: 'Terminologia de custos (gasto, desembolso, investimento, custo, despesa e perda), classificação (Custos Diretos vs. Indiretos; Fixos vs. Variáveis), Sistemas de Custeio (Absorção, Variável/Direto, ABC e Padrão), Margem de Contribuição, Ponto de Equilíbrio (Contábil, Econômico e Financeiro), Custos no Setor Público (NBC TSP 34) e documentos do SIAFI (NC, ND, NE, NL, NS, OB, DARF, GRU).',
    keyPoints: [
      {
        title: 'Classificação de Custos: Diretos vs. Indiretos e Fixos vs. Variáveis',
        explanation: 'Em relação ao OBJETO DE CUSTO (produto): Diretos (apropriados sem rateio, por medição objetiva — ex.: matéria-prima, MOD) vs. Indiretos (dependem de rateio/estimativa — ex.: aluguel da fábrica, depreciação geral). Em relação ao VOLUME DE PRODUÇÃO: Fixos (não variam no total com o volume produzido no curto prazo, mas o custo fixo UNITÁRIO é decrescente!) vs. Variáveis (variam no total proporcionalmente ao volume, mas o custo variável UNITÁRIO é constante!).',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA: Custo Fixo Unitário NÃO é fixo — ele diminui quando a produção aumenta! Já o Custo Variável Unitário é constante!'
      },
      {
        title: 'Custeio por Absorção vs. Custeio Variável vs. Custeio ABC',
        explanation: 'Custeio por Absorção: apropria aos produtos TODOS os custos de produção (Fixos e Variáveis, Diretos e Indiretos); Despesas vão direto para a DRE. É o ÚNICO aceito pelo CPC 16 e pela legislação fiscal (IRPJ). Custeio Variável (Direto): apropria aos estoques APENAS os Custos Variáveis; os Custos Fixos são tratados integralmente como despesa do período (uso gerencial). Custeio ABC (Baseado em Atividades): rastreia custos indiretos por meio de direcionadores de recursos e de atividades.',
        mnemonicOrTrap: '💡 Se Produção > Vendas, o Lucro pelo Custeio por Absorção é MAIOR que pelo Custeio Variável (porque parte do Custo Fixo fica retida no estoque final!).'
      },
      {
        title: 'Margem de Contribuição e Pontos de Equilíbrio (PEC, PEE e PEF)',
        explanation: 'Margem de Contribuição Unitária (MCu) = Preço de Venda Unitário - (Custos Variáveis Unitários + Despesas Variáveis Unitárias). Ponto de Equilíbrio Contábil (PEC) = (Custos Fixos + Despesas Fixas) / MCu (Lucro = 0). Ponto de Equilíbrio Econômico (PEE) = (CF + DF + Custo de Oportunidade / Lucro Desejado) / MCu. Ponto de Equilíbrio Financeiro (PEF) = (CF + DF - Depreciação e gastos não desembolsáveis) / MCu.',
        mnemonicOrTrap: '⚠️ Ordem de grandeza sempre: PEE > PEC > PEF! Na fórmula do PEC entram tanto os Custos Fixos quanto as Despesas Fixas!'
      },
      {
        title: 'Custos no Setor Público (NBC TSP 34) e Documentos do SIAFI',
        explanation: 'A NBC TSP 34 permite liberdade de escolha do método de custeio (Absorção, Direto, ABC, etc.) conforme a necessidade gerencial do ente público. No SIAFI: ND (Nota de Dotação - orçamento inicial), NC (Nota de Movimentação de Crédito - descentralização/destaque/provisão), NE (Nota de Empenho), NL (Nota de Lançamento), NS (Nota de Sistema - automática), OB (Ordem Bancária - pagamento) e GRU (Guia de Recolhimento da União).',
        mnemonicOrTrap: '💡 Mnemônico SIAFI: ND = Dotação (LOA). NC = Crédito descentralizado (Provisão/Destaque). NE = Empenho. OB = Pagamento.'
      }
    ],
    comparativeTable: {
      headers: ['Indicador / Documento', 'Fórmula ou Finalidade Técnica', 'Aplicação em Prova de Contador'],
      rows: [
        ['PEC (Ponto de Equilíbrio Contábil)', '(Custos Fixos + Despesas Fixas) ÷ MCu', 'Quantidade em que o Lucro Contábil é igual a ZERO'],
        ['PEE (Ponto de Equilíbrio Econômico)', '(CF + DF + Custo de Oportunidade) ÷ MCu', 'Quantidade para cobrir custos fixos e remunerar o capital próprio'],
        ['PEF (Ponto de Equilíbrio Financeiro)', '(CF + DF − Depreciação/Amortização) ÷ MCu', 'Quantidade para igualar entradas e saídas efetivas de caixa'],
        ['SIAFI: NC vs. NE vs. OB', 'NC (Movimentação de Crédito) / NE (Empenho) / OB (Pagamento)', 'NC registra Destaque (externo) ou Provisão (interno, ex.: Reitoria p/ Faculdade)']
      ]
    },
    fullTheoryMarkdown: `# Contabilidade de Custos (Geral e Pública) e Sistema SIAFI
*Elaborado pelo Especialista em Contabilidade de Custos e Finanças Públicas da Federação Hermes*

## 1. Terminologia Fundamental de Custos
* **Gasto:** Sacrifício financeiro com que a entidade arca para a obtenção de um produto ou serviço.
* **Investimento:** Gasto ativado em função de sua vida útil ou de benefícios atribuíveis a futuros períodos (ex.: compra de matéria-prima enquanto está no estoque).
* **Custo:** Gasto relativo a bem ou serviço utilizado na **produção** de outros bens ou serviços (chão de fábrica).
* **Despesa:** Bem ou serviço consumido direta ou indiretamente para a **obtenção de receitas** (administração, comercial, financeiro).
* **Perda:** Bem ou serviço consumido de forma **anormal e involuntária** (ex.: incêndio, inundação) — vai direto para o resultado (DRE). Subprodutos e sucatas normais do processo produtivo integram o custo de produção!

## 2. Sistemas de Custeio e Fórmulas Essenciais
$$\text{CPP (Custo de Produção do Período)} = \text{MP Consumida} + \text{MOD} + \text{CIF}$$
$$\text{CPA (Custo da Produção Acabada)} = \text{EIPE} + \text{CPP} - \text{EFPE}$$
$$\text{CPV (Custo dos Produtos Vendidos)} = \text{EIPA} + \text{CPA} - \text{EFPA}$$

### Análise Custo-Volume-Lucro (CVL)
$$\text{MCu} = PV_u - (CV_u + DV_u)$$
$$\text{PEC} = \frac{CF + DF}{MCu} \quad | \quad \text{PEE} = \frac{CF + DF + \text{Lucro Desejado}}{MCu} \quad | \quad \text{PEF} = \frac{CF + DF - \text{Depreciação}}{MCu}$$

## 3. Custos no Setor Público (NBC TSP 34)
* A informação de custos no setor público é requisito da LRF (art. 50, § 3º) e da Lei 4.320/64.
* A **NBC TSP 34** estabelece que o sistema de custos se apoia nas informações **patrimoniais** (regime de competência / VPD), e não apenas na execução orçamentária.
* Não impõe um método único de custeio: o órgão pode adotar Absorção, ABC, Custeio Direto ou RKW conforme o objetivo decisório.

## 4. Sistema SIAFI: Tabela de Eventos e Documentos Contábeis
* **Tabela de Eventos:** Instrumento que transforma os atos e fatos administrativos rotineiros em partidas dobradas automáticas no PCASP.
* **Principais Documentos SIAFI:**
  * **ND (Nota de Dotação):** Registra os créditos previstos na LOA e créditos adicionais.
  * **NC (Nota de Movimentação de Crédito):** Registra a descentralização de créditos (**Provisão** = interna, no mesmo órgão/ministério; **Destaque** = externa, entre órgãos/ministérios distintos).
  * **NE (Nota de Empenho):** Registra o comprometimento do orçamento com o credor.
  * **NL (Nota de Lançamento) / NS (Nota de Sistema):** Registram apropriações na liquidação, retenções e eventos patrimoniais.
  * **OB (Ordem Bancária):** Materializa o pagamento da despesa pública.`
  },

  'assistente-tga-estruturas-podc': {
    id: 'assistente-tga-estruturas-podc',
    code: 'Assist. Módulo 1',
    title: 'Administração Geral: Estruturas Organizacionais, Departamentalização e Processo Organizacional (PODC)',
    category: '4. Conhecimentos Específicos — Assistente em Administração (Manhã • Peso 2.0)',
    block: 'assistente',
    weightLabel: 'Peso 2.0 (Manhã)',
    specialistRole: 'Especialista em Teoria Geral da Administração (TGA)',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 28',
    sourceLegislation: 'Edital UFBA 007/2026 - Cargo Assistente em Administração: Estruturas Organizacionais, Departamentalização e Funções Administrativas (PODC)',
    summary: 'Funções clássicas do Processo Organizacional (Planejar, Organizar, Dirigir e Controlar - PODC), níveis organizacionais (Estratégico, Tático e Operacional), Eficiência vs. Eficácia vs. Efetividade, tipos de Estruturas Organizacionais (Linear, Funcional, Linha-Staff, Matricial, por Projetos e em Rede) e critérios de Departamentalização.',
    keyPoints: [
      {
        title: 'Processo Organizacional (PODC): Planejar, Organizar, Dirigir e Controlar',
        explanation: 'PLANEJAR: definir missão, visão, objetivos e escolher os meios/estratégias futuras (Estratégico = longo prazo/global; Tático = médio prazo/departamental; Operacional = curto prazo/tarefas). ORGANIZAR: dividir o trabalho, alocar recursos, definir estrutura, cargos e autoridade. DIRIGIR: liderar, motivar, comunicar e coordenar pessoas (foco interpessoal). CONTROLAR: definir padrões de desempenho, monitorar, comparar o realizado com o planejado e aplicar ações corretivas.',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA: "Definir indicadores e padrões de avaliação" pertence ao CONTROLE (1ª etapa do controle) ou ao Planejamento, mas "Distribuir tarefas e autoridade em órgãos" é ORGANIZAÇÃO (não Direção!).'
      },
      {
        title: 'Eficiência, Eficácia e Efetividade (Os 3 Es da Administração)',
        explanation: 'EFICIÊNCIA: foco nos MEIOS, métodos, processos e uso racional/econômico dos recursos ("fazer certo as coisas", mínimo custo/desperdício). EFICÁCIA: foco nos FINS, alcance das metas e objetivos propostos ("fazer a coisa certa"). EFETIVIDADE: foco no IMPACTO real e transformação duradoura gerada para o público-alvo/sociedade.',
        mnemonicOrTrap: '💡 Mnemônico: EfiCIÊNCIA = Como faz (Custos/Meios). EfiCÁCIA = Resultado/Alvo atingido. EfeTIVIDADE = Transformação/Impacto social.'
      },
      {
        title: 'Estruturas Organizacionais: Linear, Funcional, Linha-Staff e Matricial',
        explanation: 'LINEAR: autoridade única (unidade de comando), comunicação formal pelas linhas do organograma, formato piramidal, centralizada, ideal para pequenas empresas estáveis. FUNCIONAL (Taylor): autoridade funcional/dividida por especialidade (vários chefes especialistas), comunicação direta sem intermediação hierárquica. LINHA-STAFF: combina unidade de comando (órgãos de linha = execução/decisão) com assessoria especializada (staff = consultoria/aconselhamento sem autoridade de comando sobre a linha). MATRICIAL: estrutura dual/híbrida que combina departamentalização Funcional + por Projetos/Produtos; fere o princípio da unidade de comando (dupla subordinação).',
        mnemonicOrTrap: '⚠️ QUESTÃO CERTA NA PROVA: Qual estrutura viola deliberadamente a unidade de comando combinando gerência funcional e gerência de projeto? ESTRUTURA MATRICIAL!'
      },
      {
        title: 'Critérios de Departamentalização (Funcional, Produto, Geográfica, Clientes, Processos, Projetos)',
        explanation: 'Funcional: agrupa especialistas da mesma área (Finanças, RH, Contabilidade) — máxima especialização, mas pouca cooperação interdepartamental. Por Produto/Serviço: agrupa conforme a linha de produtos. Geográfica/Territorial: agrupa por região física (ex.: campi da UFBA em Salvador, Vitória da Conquista, Camaçari). Por Clientes: agrupa pelo perfil do usuário (ex.: Graduação, Pós-Graduação, Assistência Estudantil). Por Processos: segue a sequência produtiva.',
        mnemonicOrTrap: 'Amplitude Administrativa (Span of Control): número de subordinados que um chefe supervisiona eficazmente. Amplitude GRANDE = estrutura ACHATADA (Horizontal/Flat). Amplitude PEQUENA = estrutura ALTA/AGUDA (Vertical).'
      }
    ],
    comparativeTable: {
      headers: ['Tipo de Estrutura', 'Característica de Comando', 'Vantagem Principal', 'Desvantagem / Limitação'],
      rows: [
        ['Linear (Militar)', 'Unidade de Comando estrita (1 único chefe)', 'Disciplina clara, simplicidade e rapidez decisória no topo', 'Rigidez, sobrecarga da chefia e comunicações lentas/indiretas'],
        ['Funcional', 'Autoridade dividida por especialidade (múltiplos chefes)', 'Máxima especialização técnica e comunicação direta', 'Conflito de autoridade e perda da visão global'],
        ['Linha-Staff', 'Unidade de comando (Linha) + Consultoria técnica (Staff)', 'Une especialização técnica mantendo a hierarquia única', 'Conflitos entre órgãos de linha (práticos) e assessoria (teóricos)'],
        ['Matricial', 'Dupla subordinação (Gerente Funcional + Gerente de Projeto)', 'Alta flexibilidade e uso ótimo de especialistas em projetos', 'Dupla chefia gera ambiguidade e conflitos de prioridade']
      ]
    },
    fullTheoryMarkdown: `# Administração Geral: Processo Organizacional (PODC), Estruturas e Departamentalização
*Módulo Exclusivo para Assistente em Administração (UFBA — Manhã • Peso 2.0)*

## 1. O Processo Organizacional: As 4 Funções Administrativas (PODC)
Inspirado em Henri Fayol (Prever, Organizar, Comandar, Coordenar e Controlar), o modelo neoclássico consolidou o ciclo **PODC**:

### 1.1. Planejamento (P)
Função que antecede as demais: define **onde se quer chegar** (objetivos) e **como chegar** (planos e estratégias).
* **Planejamento Estratégico:** Nível institucional (Cúpula/Reitoria), longo prazo, abrange a organização como um todo, forte orientação externa (ambiente, oportunidades e ameaças).
* **Planejamento Tático:** Nível intermediário (Gerências/Pró-Reitorias/Unidades), médio prazo, traduz a estratégia para cada departamento.
* **Planejamento Operacional:** Nível operacional (Chefias de seção/Setores), curto prazo, foco em tarefas rotineiras, cronogramas, procedimentos e regulamentos.

### 1.2. Organização (O)
Consiste em estruturar a empresa, agrupar atividades em órgãos (departamentalização), desenhar cargos/tarefas e atribuir recursos e autoridade/responsabilidade.

### 1.3. Direção (D)
Função eminentemente interpessoal que aciona e dinamiza as pessoas por meio de **Liderança, Motivação, Comunicação e Coordenação**.

### 1.4. Controle (C)
Verifica se a execução está em conformidade com o que foi planejado. Possui **4 etapas sequenciais**:
1. Estabelecimento de padrões/critérios de desempenho;
2. Observação/mensuração do desempenho atual;
3. Comparação do desempenho atual com os padrões estabelecidos;
4. Ação corretiva para eliminar desvios.

## 2. Estruturas Organizacionais Clássicas e Modernas
* **Cadeia de Comando (Linha de Autoridade):** Linha contínua de autoridade que liga o topo à base da organização.
* **Centralização vs. Descentralização:** Na centralização, as decisões concentram-se no topo da hierarquia; na descentralização, a autoridade decisória é delegada para os níveis mais baixos (próximos da ação).
* **Estrutura Matricial:** É a sobreposição de dois tipos de departamentalização (geralmente **Funcional + Projetos**) sobre os mesmos colaboradores. É a resposta clássica quando a questão menciona "dupla subordinação" ou "comprometimento do princípio da unidade de comando para ganhar flexibilidade".`
  },

  'assistente-processos-qualidade': {
    id: 'assistente-processos-qualidade',
    code: 'Assist. Módulo 2',
    title: 'Gestão de Processos (BPM), Gestão da Qualidade (PDCA, Ferramentas, 5S) e Gestão de Projetos',
    category: '4. Conhecimentos Específicos — Assistente em Administração (Manhã • Peso 2.0)',
    block: 'assistente',
    weightLabel: 'Peso 2.0 (Manhã)',
    specialistRole: 'Especialista em Processos, Qualidade e Projetos',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 29',
    sourceLegislation: 'CBOK (BPM); PMBOK (Projetos); Deming/Ishikawa (Qualidade Total e Ferramentas da Qualidade)',
    summary: 'Conceito e hierarquia de processos (Macroprocesso, Processo, Subprocesso, Atividade, Tarefa), tipos de processos (Finalísticos/Primários, de Apoio/Suporte e Gerenciais), Ciclo PDCA (Deming), as 7 Ferramentas Clássicas da Qualidade (Ishikawa, Pareto, Fluxograma, etc.), Programa 5S, 5W2H e conceitos de Gestão de Projetos (PMBOK).',
    keyPoints: [
      {
        title: 'Gestão por Processos (BPM): Tipos e Hierarquia de Processos',
        explanation: 'Hierarquia (do maior para o menor): Macroprocesso -> Processo -> Subprocesso -> Atividade -> Tarefa. Classificação quanto à finalidade: 1) Processos Primários (Finalísticos ou de Negócio): entregam valor diretamente ao cliente/cidadão externo (ex.: Ensino, Pesquisa e Extensão na UFBA); 2) Processos de Suporte (Apoio): viabilizam os primários internamente (ex.: Folha de Pagamento, Compras, TI); 3) Processos Gerenciais: monitoram, medem e estrategizam a organização (ex.: Planejamento Estratégico, Controle Interno).',
        mnemonicOrTrap: '⚠️ PEGADINHA: Processos de Suporte NÃO entregam valor direto ao cliente final externo, mas são indispensáveis para que os Processos Primários funcionem!'
      },
      {
        title: 'Ciclo PDCA (Shewhart / Deming) e Melhoria Contínua (Kaizen)',
        explanation: 'PLAN (Planejar): identificar o problema, analisar causas e traçar o plano de ação e metas. DO (Executar): capacitar a equipe e executar o plano em escala experimental/operacional. CHECK (Verificar): avaliar os resultados obtidos comparando-os com a meta planejada. ACT (Agir corretivamente / Padronizar): se deu certo, padronizar a melhoria; se deu errado, agir sobre as causas do desvio e girar o PDCA novamente.',
        mnemonicOrTrap: '💡 O treinamento dos colaboradores ocorre na fase DO (Execução), logo antes de colocar o plano em prática!'
      },
      {
        title: 'As 7 Ferramentas da Qualidade (Ishikawa, Pareto, Fluxograma, etc.)',
        explanation: '1) Diagrama de Ishikawa (Espinha de Peixe / Causa e Efeito / 6M): identifica as CAUSAS raízes de um problema. 2) Diagrama de Pareto (Regra 80/20): prioriza problemas mostrando que 80% dos efeitos decorrem de 20% das causas. 3) Fluxograma: representa graficamente a sequência lógica das etapas de um processo (Losango = Decisão; Retângulo = Operação/Atividade; Oval = Início/Fim). 4) Histograma: distribuição de frequência em barras. 5) Folha de Verificação (Checklist): coleta padronizada de dados. 6) Diagrama de Dispersão: correlação entre duas variáveis. 7) Carta/Gráfico de Controle: monitora a estabilidade e variabilidade do processo (limites superior e inferior).',
        mnemonicOrTrap: '⚠️ QUESTÃO CLÁSSICA: "Qual ferramenta prioriza as poucas causas vitais sobre as muitas triviais (80/20)?" -> DIAGRAMA DE PARETO! "Qual identifica e agrupa causas em 6M?" -> ISHIKAWA!'
      },
      {
        title: 'Programa 5S e Diferença entre Processo e Projeto (PMBOK)',
        explanation: 'Os 5 Sensos japoneses: Seiri (Utilização/Descarte), Seiton (Ordenação/Organização), Seiso (Limpeza), Seiketsu (Padronização/Saúde e Higiene) e Shitsuke (Autodisciplina). PROJETO vs. PROCESSO: Processo é contínuo, repetitivo e permanente; Projeto é um esforço TEMPORÁRIO (tem início e fim definidos) empreendido para criar um produto, serviço ou resultado ÚNICO/EXCLUSIVO.',
        mnemonicOrTrap: '💡 Mnemônico dos 5S em ordem: U-O-L-P-A (Utilização, Ordenação, Limpeza, Padronização/Saúde, Autodisciplina).'
      }
    ],
    comparativeTable: {
      headers: ['Ferramenta da Qualidade', 'Objetivo Principal', 'Palavra-Chave na Questão'],
      rows: [
        ['Diagrama de Ishikawa', 'Identificar e categorizar as causas raízes de um efeito/problema', 'Espinha de Peixe / Causa e Efeito / 6M'],
        ['Diagrama de Pareto', 'Priorizar a resolução dos problemas mais críticos', 'Proporção 80/20 (Poucos vitais vs. Muitos triviais)'],
        ['Fluxograma', 'Mapear o passo a passo sequencial de um processo', 'Símbolos padronizados (Losango = Decisão, Retângulo = Ação)'],
        ['5W2H', 'Estruturar um Plano de Ação completo', 'What, Why, Where, When, Who + How, How much (Custo)'],
        ['Ciclo PDCA', 'Método iterativo de gestão e melhoria contínua', 'Plan (Planejar), Do (Executar), Check (Verificar), Act (Agir)']
      ]
    },
    fullTheoryMarkdown: `# Gestão de Processos (BPM), Gestão da Qualidade e Gestão de Projetos
*Módulo Exclusivo para Assistente em Administração (UFBA — Manhã • Peso 2.0)*

## 1. Gestão de Processos (BPM — Business Process Management)
* **Conceito de Processo:** Conjunto estruturado de atividades sequenciais que recebem **entradas (inputs)**, agregam valor por meio de processamento e entregam **saídas (outputs)** a um cliente interno ou externo.
* **Notação de Fluxograma e BPMN:**
  * **Oval / Círculo:** Evento de Início ou Fim do processo.
  * **Retângulo:** Atividade, Tarefa ou Operação executada.
  * **Losango (Gateway):** Ponto de **Decisão** ou bifurcação condicional (Sim / Não).
  * **Seta:** Fluxo de sequência ou direção do processo.
* **Melhoria de Processos:**
  * **Kaizen (Melhoria Contínua):** Aperfeiçoamento gradual, incremental e constante do processo existente.
  * **Reengenharia (Hammer & Champy):** Mudança **radical, drástica e fundamental** (redesenhar o processo "do zero" / folha em branco) para obter saltos dramáticos de desempenho.

## 2. Gestão da Qualidade: PDCA, 5S e Ferramentas
* **Programa 5S (Origem no Japão):**
  1. **Seiri (Senso de Utilização):** Separar o útil do inútil, descartando o desnecessário.
  2. **Seiton (Senso de Ordenação):** "Um lugar para cada coisa e cada coisa em seu lugar".
  3. **Seiso (Senso de Limpeza):** Limpar e, sobretudo, não sujar, identificando fontes de sujeira.
  4. **Seiketsu (Senso de Padronização e Saúde):** Manter condições favoráveis à saúde física/mental e padronizar os 3 primeiros S.
  5. **Shitsuke (Senso de Autodisciplina):** Transformar os sensos anteriores em hábito diário sem necessidade de cobrança.

## 3. Gestão de Projetos (PMBOK)
* **Projeto:** Esforço **temporário** empreendido para criar um produto, serviço ou resultado **único**.
* **Ciclo de Vida / Grupos de Processos do Projeto:**
  1. **Iniciação** (Termo de Abertura do Projeto - TAP);
  2. **Planejamento** (Escopo, EAP/WBS, Cronograma, Custos, Riscos);
  3. **Execução** (Coordenação de pessoas e recursos);
  4. **Monitoramento e Controle** (Acompanhamento simultâneo de desvios);
  5. **Encerramento** (Aceite formal da entrega e lições aprendidas).`
  },

  'assistente-gestao-pessoas-comportamento': {
    id: 'assistente-gestao-pessoas-comportamento',
    code: 'Assist. Módulo 3',
    title: 'Gestão de Pessoas, Comportamento Organizacional, Motivação, Liderança e Clima',
    category: '4. Conhecimentos Específicos — Assistente em Administração (Manhã • Peso 2.0)',
    block: 'assistente',
    weightLabel: 'Peso 2.0 (Manhã)',
    specialistRole: 'Especialista em Gestão de Pessoas e Comportamento Organizacional',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 30',
    sourceLegislation: 'Chiavenato (6 Processos de GP); Maslow, Herzberg, McGregor, McClelland, Vroom; Liderança; Clima vs. Cultura',
    summary: 'Os 6 Processos de Gestão de Pessoas (Agregar, Aplicar, Recompensar, Desenvolver, Manter e Monitorar), responsabilidade de linha e função de staff, Teorias Motivacionais (Hierarquia de Maslow, Dois Fatores de Herzberg, Teoria X e Y de McGregor, Expectativa de Vroom), Estilos de Liderança (Autocrática, Democrática, Liberal/Laissez-Faire, Situacional, Transacional vs. Transformacional), Trabalho em Equipe e Clima vs. Cultura Organizacional.',
    keyPoints: [
      {
        title: 'Os 6 Processos de Gestão de Pessoas (Chiavenato) e Responsabilidade de Linha / Staff',
        explanation: '1) Processos de AGREGAR (Recrutamento e Seleção); 2) Processos de APLICAR (Desenho e análise de cargos, orientação e Avaliação de Desempenho); 3) Processos de RECOMPENSAR (Remuneração, benefícios e incentivos); 4) Processos de DESENVOLVER (Treinamento, desenvolvimento e aprendizagem); 5) Processos de MANTER (Higiene, segurança, qualidade de vida e relações sindicais); 6) Processos de MONITORAR (Banco de dados e sistemas de informação de RH). Gestão de Pessoas é uma responsabilidade de LINHA (de cada gestor) e uma função de STAFF (assessoria do setor de RH).',
        mnemonicOrTrap: '⚠️ PEGADINHA: Avaliação de Desempenho pertence ao processo de APLICAR pessoas (e não ao processo de Monitorar ou Desenvolver!).'
      },
      {
        title: 'Teorias de Motivação: Maslow (Pirâmide) vs. Herzberg (Dois Fatores)',
        explanation: 'MASLOW (Hierarquia das Necessidades): 1. Fisiológicas (base), 2. Segurança, 3. Sociais/Afetivas (primárias = 1 e 2; secundárias = 3, 4 e 5), 4. Estima, 5. Autorrealização (topo). HERZBERG (Dois Fatores): 1) Fatores HIGIÊNICOS (Extrínsecos / Contexto do cargo: salário, condições físicas, benefícios, clima, chefia) — quando ótimos, apenas EVITAM A INSATISFAÇÃO, mas NÃO motivam duradouramente; 2) Fatores MOTIVACIONAIS (Intrínsecos / Conteúdo do cargo: realização, reconhecimento, responsabilidade, progresso, o próprio trabalho) — geram SATISFAÇÃO e motivação real.',
        mnemonicOrTrap: '⚠️ QUESTÃO GARANTIDA: Segundo Herzberg, AUMENTO SALARIAL motiva o servidor? NÃO! Salário é fator HIGIÊNICO (extrínseco): apenas evita a insatisfação!'
      },
      {
        title: 'Outras Teorias Motivacionais: McGregor (X e Y), McClelland e Vroom (Expectativa)',
        explanation: 'McGREGOR: Teoria X (visão tradicional negativa: o trabalhador é indolente, evita responsabilidade e precisa ser coagido) vs. Teoria Y (visão moderna positiva: o trabalho é natural, as pessoas buscam responsabilidade e criatividade). McCLELLAND: 3 necessidades adquiridas socialmente: Realização (sucesso/excelência), Afiliação (relacionamentos) e Poder (influenciar outros). VROOM (Teoria da Expectativa): Motivação = Valência (valor da recompensa) × Expectativa (crença de que o esforço gera desempenho) × Instrumentalidade (crença de que o desempenho gera a recompensa).',
        mnemonicOrTrap: '💡 Mnemônico Vroom: V-E-I (Valência, Expectativa, Instrumentalidade).'
      },
      {
        title: 'Liderança (Lewin, Situacional, Transformacional), Grupo vs. Equipe e Clima vs. Cultura',
        explanation: 'Kurt Lewin: Autocrática (líder centraliza tudo), Democrática (líder debate e incentiva participação do grupo) e Liberal/Laissez-Faire (liberdade total ao grupo, mínima intervenção do líder). Transacional (baseada em trocas/recompensas por metas) vs. Transformacional (inspira, engaja valores e visão de futuro). EQUIPE (sinergia positiva, responsabilidade individual e mútua, habilidades complementares) vs. GRUPO (soma de esforços individuais). CULTURA (profunda, valores, crenças e pressupostos construídos no longo prazo) vs. CLIMA (superficial, fotografia momentânea da percepção e estado de ânimo dos servidores).',
        mnemonicOrTrap: '⚠️ Clima Organizacional é temporal, mutável no curto prazo e medido por Pesquisa de Clima; Cultura Organizacional é profunda, estável e difícil de mudar rapidamente.'
      }
    ],
    comparativeTable: {
      headers: ['Teoria / Conceito', 'Autor / Referência', 'Tese Central para Acertar na Prova'],
      rows: [
        ['Hierarquia das Necessidades', 'Abraham Maslow', 'Pirâmide em 5 níveis: Fisiológicas → Segurança → Sociais → Estima → Autorrealização'],
        ['Teoria dos Dois Fatores', 'Frederick Herzberg', 'Higiênicos (Salário/Condições = evitam insatisfação) vs. Motivacionais (Cargo/Reconhecimento = geram satisfação)'],
        ['Teorias X e Y', 'Douglas McGregor', 'X = trabalhador preguiçoso/controle rígido; Y = trabalhador proativo/autonomia'],
        ['Liderança Situacional', 'Hersey e Blanchard', 'Não existe estilo único ideal: o líder adapta seu estilo ao nível de MATURIDADE do liderado'],
        ['Grupo vs. Equipe', 'Robbins / Katzenbach', 'Grupo = esforço individual/sem sinergia; Equipe = sinergia positiva e responsabilidade coletiva']
      ]
    },
    fullTheoryMarkdown: `# Gestão de Pessoas e Comportamento Organizacional
*Módulo Exclusivo para Assistente em Administração (UFBA — Manhã • Peso 2.0)*

## 1. Papel do Setor de Gestão de Pessoas e Políticas de RH
* Na administração moderna, as pessoas deixaram de ser vistas apenas como "recursos humanos" (sujeitos passivos) e passaram a ser vistas como **parceiros / colaboradores ativos** dotados de competências (**CHA**: Conhecimentos, Habilidades e Atitudes).
* **Recrutamento:** Interno (valoriza os próprios servidores, mais rápido e barato, mas pode gerar endogenia/princípio de Peter) vs. Externo (traz "sangue novo" e inovação, mas é mais lento e caro).
* **Avaliação de Desempenho 360 Graus:** O servidor é avaliado por todos ao seu redor (chefe, subordinados, pares, clientes internos/externos e autoavaliação).

## 2. Motivação: Comparativo Maslow x Herzberg
* Os **Fatores Higiênicos de Herzberg** correspondem às necessidades primárias de Maslow (**Fisiológicas, Segurança e parte das Sociais**).
* Os **Fatores Motivacionais de Herzberg** correspondem às necessidades mais elevadas de Maslow (**Estima e Autorrealização**).
* **Enriquecimento do Cargo (Job Enrichment):** Consiste em ampliar a responsabilidade, a autonomia e os desafios do cargo (verticalmente) para aumentar a motivação intrínseca segundo Herzberg.

## 3. Liderança, Trabalho em Equipe e Clima Organizacional
* **Estilos de Liderança (White e Lippitt / Kurt Lewin):**
  * **Autocrática:** Foco exclusivo no líder; alta produtividade apenas na presença do chefe, mas gera tensão e frustração.
  * **Democrática:** Foco no líder e nos subordinados; melhor qualidade do trabalho, comprometimento e clima de satisfação.
  * **Liberal (Laissez-Faire):** Foco exclusivo no grupo (que precisa ter altíssima maturidade); sem maturidade, gera baixa produtividade e dispersão.
* **Cultura Organizacional (Edgar Schein):** Possui 3 níveis (do mais visível ao mais profundo):
  1. **Artefatos Visíveis** (arquitetura, vestimenta, símbolos, rituais);
  2. **Valores Compartilhados** (normas declaradas, justificativas);
  3. **Pressupostos Básicos Inconscientes** (crenças enraizadas que ditam o comportamento real).`
  },

  'assistente-recursos-materiais-estoques': {
    id: 'assistente-recursos-materiais-estoques',
    code: 'Assist. Módulo 4',
    title: 'Administração de Recursos Materiais, Estoques (Curva ABC, Ponto de Pedido) e Almoxarifado',
    category: '4. Conhecimentos Específicos — Assistente em Administração (Manhã • Peso 2.0)',
    block: 'assistente',
    weightLabel: 'Peso 2.0 (Manhã)',
    specialistRole: 'Especialista em Administração de Recursos Materiais e Patrimoniais',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 31',
    sourceLegislation: 'Francischini & Gurgel; Marco Aurélio Dias; IN SEDAP nº 205/1988 (Administração de Material e Patrimônio Federal)',
    summary: 'Classificação e Codificação de Materiais (Atributos: Abrangência, Flexibilidade e Praticidade; Criticidade XYZ; Perecibilidade; Periculosidade; Material de Consumo vs. Permanente), Gestão de Estoques (Curva ABC / Pareto, Estoque Mínimo/Segurança, Ponto de Pedido, Lote Econômico de Compra - LEC, Giro de Estoque, PEPS, UEPS e Custo Médio) e Compras, Recebimento, Conferência e Armazenagem/Almoxarifado.',
    keyPoints: [
      {
        title: 'Classificação de Materiais: Atributos (AFP), Criticidade (XYZ) e Curva ABC',
        explanation: 'Atributos de um bom sistema de classificação: ABRANGÊNCIA (tratar gama completa de características), FLEXIBILIDADE (permitir inclusão de novos itens e adaptação) e PRATICIDADE (ser simples e direto). Classificação por CRITICIDADE (Importância Operacional — XYZ): Classe X = baixa criticidade (falta não paralisa operações e possui similares fáceis); Classe Y = média criticidade (possui similares, mas é vital); Classe Z = ALTA CRITICIDADE / IMPRESCINDÍVEL (sua falta paralisa a operação da instituição e não há substituto imediato!). Classificação ABC (Valor de consumo × Quantidade): Classe A = maior valor financeiro acumulado (~70% a 80% do valor) e menor quantidade de itens (~15% a 20% dos itens); Classe B = intermediária (~15% a 20% do valor e ~30% dos itens); Classe C = menor valor financeiro (~5% a 10% do valor) e maior quantidade de itens (~50% dos itens).',
        mnemonicOrTrap: '⚠️ PEGADINHA CLÁSSICA: Não confunda Curva ABC com XYZ! Na Curva ABC, o item mais caro/importante financeiramente é o "A". Na classificação XYZ (Criticidade operacional), o item mais crítico/indispensável cuja falta trava tudo é o "Z"!'
      },
      {
        title: 'Níveis de Ressuprimento: Estoque Mínimo, Ponto de Pedido e Estoque Máximo',
        explanation: 'Consumo Médio (C): demanda por unidade de tempo (dia/mês). Tempo de Reposição ou Lead Time (TR): tempo entre a emissão do pedido de compra e a chegada efetiva no almoxarifado. Estoque Mínimo ou de Segurança (EMin): quantidade extra mantida para cobrir atrasos do fornecedor ou picos imprevistos de consumo. PONTO DE PEDIDO (PP): nível de estoque que, ao ser atingido, dispara uma nova compra -> Fórmula: PP = (C × TR) + EMin. Estoque Máximo (EMax) = EMin + Lote de Compra (LC).',
        mnemonicOrTrap: '💡 FÓRMULA QUE CAI EM TODA PROVA DE ASSISTENTE: PP = (Consumo Médio × Tempo de Reposição) + Estoque Mínimo! Exemplo: Se consome 10 resmas/dia, o fornecedor demora 5 dias (TR=5) e o Estoque Mínimo é 20, então PP = (10 × 5) + 20 = 70 resmas!'
      },
      {
        title: 'Etapas da Classificação (Catalogação, Simplificação, Especificação, Normalização, Padronização, Codificação)',
        explanation: '1) Catalogação: arrolamento/listagem de todos os itens existentes. 2) Simplificação: redução da variedade de itens que servem ao mesmo fim (ex.: escolher apenas 1 tipo de caneta azul em vez de 5 marcas). 3) Especificação: descrição minuciosa das características físicas/químicas do material. 4) Normalização: estabelecimento de normas técnicas (ABNT) para uso. 5) Padronização: uniformização de pesos, medidas e formatos. 6) Codificação: atribuição de código alfabético, alfanumérico ou numérico (ex.: FSC - Federal Supply Classification ou código de barras) a cada item.',
        mnemonicOrTrap: '⚠️ Simplificação = reduzir variedade de itens redundantes. Especificação = descrever detalhadamente o item.'
      },
      {
        title: 'Almoxarifado: Recebimento, Conferência e Critérios de Armazenagem',
        explanation: 'Fases do Recebimento no Almoxarifado: 1ª) Entrada Provisória (assinatura no canhoto da transportadora apenas para recebimento de volumes); 2ª) Conferência Quantitativa (contagem física dos itens — pode usar "conferência cega", onde o conferente conta sem ver a quantidade da Nota Fiscal); 3ª) Conferência Qualitativa (inspeção técnica para verificar se atende às especificações do edital); 4ª) Regularização / Aceite Definitivo (atesto da nota e entrada no sistema). Critério de saída no almoxarifado: PEPS / FIFO (Primeiro que Entra, Primeiro que Sai — obrigatório para perecíveis!).',
        mnemonicOrTrap: '💡 Material de Consumo vs. Material Permanente (Lei 4.320/64 e STN): Material permanente tem durabilidade superior a 2 ANOS e não perde sua identidade física no uso.'
      }
    ],
    comparativeTable: {
      headers: ['Conceito / Ferramenta', 'Regra ou Fórmula', 'Dica Rápida de Prova'],
      rows: [
        ['Curva ABC (Pareto)', 'A = 80% do valor (20% itens); C = 5% do valor (50% itens)', 'Baseia-se em VALOR de demanda × Quantidade; Itens A exigem controle rigoroso'],
        ['Criticidade XYZ', 'X = Baixa criticidade; Y = Média; Z = Máxima criticidade', 'Item Z não tem substituto e sua falta paralisa atividades essenciais'],
        ['Ponto de Pedido (PP)', 'PP = (Consumo Médio × Tempo de Reposição) + Estoque Mínimo', 'Momento exato de emitir nova solicitação de compra'],
        ['Conferência Cega', 'Conferente conta a mercadoria sem saber a quantidade da NF', 'Evita vícios e garante contagem física real na Conferência Quantitativa'],
        ['Bens Patrimoniais', 'Tombamento, Inventário (Anual, Inicial, Transferência, Extinção) e Baixa', 'Tombamento = registro de entrada de bem PERMANENTE com número patrimonial']
      ]
    },
    fullTheoryMarkdown: `# Administração de Recursos Materiais, Estoques e Almoxarifado
*Módulo Exclusivo para Assistente em Administração (UFBA — Manhã • Peso 2.0)*

## 1. Classificação e Codificação de Materiais
* **Atributos da Classificação:** **Abrangência**, **Flexibilidade** e **Praticidade**.
* **Etapas da Classificação:**
  1. **Catalogação:** Levantamento e listagem de todos os itens.
  2. **Simplificação:** Redução da diversidade de itens empregados para uma mesma finalidade.
  3. **Especificação:** Descrição detalhada das características do item.
  4. **Normalização:** Fixação de normas técnicas de medição e verificação.
  5. **Padronização:** Estabelecimento de padrões idênticos de peso, medida e formato.
  6. **Codificação:** Atribuição de uma sequência numérica/alfanumérica representativa (ex.: Sistema Decimal ou **FSC — Federal Supply Classification**, composto por 11 dígitos: 4 para Grupo/Classe + 7 para Identificação).

## 2. Gestão de Estoques e Níveis de Ressuprimento
### 2.1. Fórmulas Indispensáveis para a Prova
$$\text{Ponto de Pedido (PP)} = (C \times TR) + E_{\min}$$
$$\text{Estoque Médio (EMed)} = \frac{Q}{2} + E_{\min} \quad \text{(onde } Q \text{ é o lote de compra)}$$
$$\text{Giro de Estoque (GE)} = \frac{\text{Consumo Anual}}{\text{Estoque Médio}}$$
$$\text{Cobertura de Estoque (Antigiro)} = \frac{\text{Período (ex.: 360 dias)}}{\text{Giro de Estoque}}$$

### 2.2. Lote Econômico de Compra (LEC)
Quantidade ideal de pedido que **iguala o Custo de Armazenagem (CA) ao Custo de Pedido (CP)**, minimizando o Custo Total de Estocagem.

## 3. Compras, Recebimento e Armazenagem (IN SEDAP nº 205/1988)
* **Recebimento:** Ato pelo qual o material encomendado é entregue ao órgão público no local previamente designado, não implicando ainda aceitação definitiva (apenas transfere a guarda provisória).
* **Aceitação:** Operação segundo a qual se declara, na documentação fiscal, que o material recebido satisfaz às especificações contratadas (após as conferências quantitativa e qualitativa).
* **Regras de Armazenagem no Almoxarifado:**
  * Os materiais nunca devem ser estocados em contato direto com o piso (usar *pallets*/estrados).
  * Os itens de maior giro/saída devem ficar próximos à porta de expedição.
  * Os itens pesados e volumosos devem ficar nas partes inferiores das prateleiras/porta-pallets.`
  },

  'assistente-arquivologia-completa': {
    id: 'assistente-arquivologia-completa',
    code: 'Assist. Módulo 5',
    title: 'Arquivologia Completa: Lei 8.159/91, Teoria das Três Idades, Métodos de Arquivamento, Protocolo e Conservação',
    category: '4. Conhecimentos Específicos — Assistente em Administração (Manhã • Peso 2.0)',
    block: 'assistente',
    weightLabel: 'Peso 2.0 (Manhã)',
    specialistRole: 'Especialista em Arquivologia e Gestão Documental',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 32',
    sourceLegislation: 'Lei nº 8.159/1991 (Política Nacional de Arquivos); Decreto nº 4.073/2002; Resoluções do CONARQ; Dicionário Brasileiro de Terminologia Arquivística',
    summary: 'Conceitos fundamentais e Princípios Arquivísticos (Proveniência/Respeito aos Fundos, Organicidade, Unicidade, Indivisibilidade, Cumulatividade), Gestão de Documentos (Produção, Utilização e Destinação - Lei 8.159/91), Teoria das Três Idades (Arquivos Corrente, Intermediário e Permanente), Tabela de Temporalidade, Protocolo, Métodos de Arquivamento (Alfabético, Geográfico, Numérico Simples, Cronológico, Dígito-Terminal, Ideográfico) e Conservação/Microfilmagem.',
    keyPoints: [
      {
        title: 'Princípios Arquivísticos Fundamentais: Proveniência (Fundos) e Organicidade',
        explanation: '1) PRINCÍPIO DA PROVENIÊNCIA (ou Respeito aos Fundos): é o princípio básico e mais importante da Arquivologia! Determina que os arquivos originários de uma instituição ou pessoa (Fundo de Arquivo) devem manter a sua individualidade, NÃO devendo jamais ser misturados aos de origem diversa. 2) ORGANICIDADE: os documentos de arquivo refletem as relações orgânicas, funções e atividades da instituição que os produziu (diferença entre arquivo e coleção!). 3) UNICIDADE: cada documento de arquivo é único em função do seu contexto de produção, independentemente de existirem cópias. 4) CUMULATIVIDADE (Naturalidade): o arquivo é uma formação progressiva, natural e orgânica.',
        mnemonicOrTrap: '⚠️ QUESTÃO CAMPEÃ DE PROVA: "Não misturar documentos produzidos por entidades diferentes" -> Princípio da PROVENIÊNCIA (ou Respeito aos Fundos)!'
      },
      {
        title: 'Teoria das Três Idades (Ciclo Vital dos Documentos) e Tabela de Temporalidade',
        explanation: '1ª Idade — ARQUIVO CORRENTE (Setorial): documentos em curso ou consultados com alta frequência; permanecem próximos aos setores produtores; possuem VALOR PRIMÁRIO (administrativo, fiscal ou legal). 2ª Idade — ARQUIVO INTERMEDIÁRIO: documentos que deixaram de ser frequentemente consultados, mas aguardam cumprimento de prazos prescricionais/precaucionais; ainda possuem VALOR PRIMÁRIO e podem ser ELIMINADOS ao fim do prazo ou recolhidos. 3ª Idade — ARQUIVO PERMANENTE (Histórico): documentos que perderam todo o valor primário e adquiriram VALOR SECUNDÁRIO (probatório, informativo, histórico e cultural); são INALIENÁVEIS e IMPRESCRITÍVEIS (JAMAIS podem ser eliminados!). Passagem de 1ª para 2ª idade = TRANSFERÊNCIA. Passagem para a 3ª idade = RECOLHIMENTO.',
        mnemonicOrTrap: '💡 Mnemônico de ouro: Corrente/Intermediário = Valor PRIMÁRIO (podem sofrer eliminação conforme a Tabela de Temporalidade). Permanente = Valor SECUNDÁRIO (IMPRESCRITÍVEL e INALIENÁVEL; nunca é eliminado!). Passagem para Intermediário = TRANSFERÊNCIA; para Permanente = RECOLHIMENTO!'
      },
      {
        title: 'Protocolo (Setor de Recebimento e Expedição) e Gestão de Documentos (Lei 8.159/91)',
        explanation: 'A Gestão de Documentos (Art. 3º da Lei 8.159/91) compreende 3 fases básicas: I - PRODUÇÃO (elaboração padronizada de formulários e documentos); II - UTILIZAÇÃO (inclui as atividades de PROTOCOLO — recebimento, classificação, registro, distribuição, tramitação — e expedição/arquivamento corrente); III - DESTINAÇÃO (avaliação e seleção pela Tabela de Temporalidade para eliminação ou recolhimento à guarda permanente).',
        mnemonicOrTrap: '⚠️ PEGADINHA: Correspondência Particular ou Sigilosa/Confidencial NÃO deve ser aberta pelo setor de Protocolo! O protocolo apenas registra externamente o envelope e o encaminha fechado ao destinatário!'
      },
      {
        title: 'Métodos de Arquivamento (Básicos e Padronizados) e Conservação/Microfilmagem',
        explanation: 'Sistemas de busca: DIRETO (consulta direto na pasta sem índice — ex.: Alfabético e Geográfico) vs. INDIRETO (exige consulta prévia a um índice/fichário — ex.: Numérico Simples, Cronológico e Dígito-Terminal). Método Alfabético (Regra de alfabetação: prenomes/sobrenomes — arquiva-se pelo ÚLTIMO sobrenome, exceto sobrenomes compostos por substantivo+adjetivo como "Castelo Branco", parentesco como "Filho/Neto/Júnior" ou nomes espanhóis pelo penúltimo). Método Dígito-Terminal: decompõe o número em 3 grupos de 2 dígitos lidos da direita para a esquerda. Conservação: Higienização (limpeza mecânica com trincha/pincel), Desinfestação, Planificação e Encapsulamento. Microfilmagem (Lei 5.433/68): produz efeitos legais equivalentes ao original, mas documentos de valor PERMANENTE jamais podem ser destruídos mesmo após microfilmados!',
        mnemonicOrTrap: '💡 Alfabetação: "João Silva Neto" -> arquiva-se como "SILVA NETO, João" (graus de parentesco Filho, Neto, Sobrinho, Júnior acompanham o penúltimo sobrenome!). Títulos (Dr., Prof., Gen.) vão no final entre parênteses!'
      }
    ],
    comparativeTable: {
      headers: ['Idade do Arquivo', 'Frequência de Uso', 'Valor Documental', 'Operação de Entrada e Destino Final'],
      rows: [
        ['1ª Idade: Corrente', 'Alta frequência (em tramitação ou uso funcional)', 'Valor Primário (Administrativo, Fiscal, Legal)', 'Arquivamento inicial → Transferência (p/ 2ª), Recolhimento (p/ 3ª) ou Eliminação'],
        ['2ª Idade: Intermediário', 'Baixa frequência (aguarda prazos prescricionais)', 'Valor Primário (reduzido / precaucional)', 'Recebe por TRANSFERÊNCIA → Destino: Eliminação ou Recolhimento (p/ 3ª)'],
        ['3ª Idade: Permanente', 'Uso científico, social, cultural e histórico', 'Valor Secundário (Histórico / Probatório)', 'Recebe por RECOLHIMENTO → Guarda definitiva (Inalienável e Imprescritível)']
      ]
    },
    fullTheoryMarkdown: `# Arquivologia Completa para Assistente em Administração (UFBA)
*Módulo Exclusivo para Assistente em Administração (UFBA — Manhã • Peso 2.0)*

## 1. Conceitos Fundamentais e Lei nº 8.159/1991
* **Arquivos (Art. 2º da Lei 8.159/91):** Conjuntos de documentos produzidos e recebidos por órgãos públicos, instituições de caráter público e entidades privadas, em decorrência do exercício de atividades específicas, bem como por pessoa física, **qualquer que seja o suporte da informação ou a natureza dos documentos**.
* **Suporte vs. Espécie vs. Tipo Documental:**
  * **Suporte:** Material físico onde a informação é registrada (papel, filme, mídia magnética/óptica).
  * **Espécie Documental:** Configuração que assume um documento de acordo com a disposição e a natureza das informações (ex.: *Ofício, Ata, Portaria, Certidão, Contrato*).
  * **Tipo Documental:** Espécie documental somada à **função/atividade** que a gerou (ex.: *Portaria de Nomeação*, *Ata de Reunião do CONSUNI*, *Certidão de Tempo de Serviço*).

## 2. Teoria das Três Idades e Instrumentos de Gestão Documental
* **Plano de Classificação (Código de Classificação):** Organiza os documentos segundo as funções e atividades do órgão (estrutura hierárquica de classes, subclasses, grupos e subgrupos).
* **Tabela de Temporalidade Documental (TTD):** Instrumento arquivístico resultante da **Avaliação Documental** (elaborado por Comissão Permanente de Avaliação de Documentos - CPAD) que define os **prazos de guarda** na fase corrente e na fase intermediária e a **destinação final** (eliminação ou recolhimento para guarda permanente).
* **Eliminação de Documentos Públicos (Art. 9º da Lei 8.159/91):** Depende de autorização da instituição arquivística pública na sua específica esfera de competência (no âmbito federal, o **Arquivo Nacional**).

## 3. Métodos de Arquivamento
* **Método Alfabético (Nominal):** Sistema direto. Regras principais de alfabetação:
  * Pessoas físicas: último sobrenome seguido do prenome (*Marcos Vinícius Teixeira* → **TEIXEIRA, Marcos Vinícius**).
  * Sobrenomes com *Filho, Júnior, Neto, Sobrinho*: permanecem junto ao sobrenome anterior (*Antônio Almeida Filho* → **ALMEIDA FILHO, Antônio**).
  * Sobrenomes compostos de um substantivo e um adjetivo ou ligados por hífen ou nomes de santos: não se separam (*Monteiro Lobato*, *Castelo Branco*, *Santa Rita* → **CASTELO BRANCO, Humberto**).
  * Partículas *de, da, do, dos*: não são consideradas na alfabetação (*Carlos de Sousa* → **SOUSA, Carlos de**).
  * Nomes de empresas e órgãos públicos: arquivam-se como se apresentam, sem inversão (*Universidade Federal da Bahia*).
* **Método Geográfico:** Sistema direto. Quando organizado por Estado/Cidade, a **Capital** do estado sempre encabeça a lista antes das demais cidades em ordem alfabética.
* **Método Numérico Dígito-Terminal:** Sistema indireto usado em grandes volumes. O número (de até 6 dígitos, completado com zeros à esquerda) é dividido em 3 pares lidos da **direita para a esquerda** (*Ex.: 04.82.91 → 1º grupo: 91; 2º grupo: 82; 3º grupo: 04*).

## 4. Conservação, Restauração e Microfilmagem
* **Agentes de Deterioração:** Intrínsecos (acidez do papel e da tinta ferrogálica) e Extrínsecos (Físicos: luz/radiação UV, temperatura e umidade relativa; Químicos: poluentes atmosféricos e poeira; Biológicos: fungos, bactérias, traças, cupins, brocas e roedores; Humanos: manuseio inadequado, clipes metálicos oxidáveis, fitas adesivas).
* **Preservação vs. Conservação vs. Restauração:**
  * **Preservação:** Política global e medidas administrativas/financeiras amplas para proteger o acervo.
  * **Conservação (Preventiva e Reparadora):** Medidas diretas de controle ambiental (climatização a ~20°C e ~50% de umidade) e higienização mecânica para desacelerar a degradação.
  * **Restauração:** Intervenção técnica corretiva sobre o documento já danificado (ex.: banho de desacidificação, velatura, reintegração mecânica/obturação, laminação).`
  },

  'assistente-atendimento-publico': {
    id: 'assistente-atendimento-publico',
    code: 'Assist. Módulo 6',
    title: 'Atendimento ao Público, Comunicação Interpessoal e Carta de Serviços ao Usuário (Lei 13.460/17)',
    category: '4. Conhecimentos Específicos — Assistente em Administração (Manhã • Peso 2.0)',
    block: 'assistente',
    weightLabel: 'Peso 2.0 (Manhã)',
    specialistRole: 'Especialista em Atendimento Público e Relações Interpessoais',
    habitusSubject: 'Direito Administrativo',
    habitusLesson: 'Aula 33',
    sourceLegislation: 'Lei nº 13.460/2017 (Código de Defesa do Usuário de Serviços Públicos); Decreto nº 9.094/2017; Lei nº 10.048/2000 (Atendimento Prioritário)',
    summary: 'Excelência no atendimento ao cidadão (eficiência, cortesia, urbanidade, discrição, empatia, escuta ativa e postura profissional), Elementos e Barreiras da Comunicação Interpessoal (Mecânicas, Fisiológicas, Psicológicas e Semânticas), Direitos dos Usuários de Serviços Públicos, Ouvidorias, Conselhos de Usuários e Carta de Serviços ao Usuário (Lei 13.460/2017), Simplificação do Atendimento (Decreto 9.094/2017 - "Ratificar a dispensa de reconhecimento de firma e autenticação") e Prioridades Legais (Lei 10.048/2000 e Estatuto da Pessoa Idosa).',
    keyPoints: [
      {
        title: 'Qualidade no Atendimento ao Público: Empatia, Escuta Ativa e Discrição',
        explanation: 'O bom atendimento no setor público baseia-se na Equidade/Isonomia, Cortesia, Presteza, Objetividade e Discrição (sigilo funcional sobre assuntos da repartição e dados pessoais dos usuários). EMPATIA é a capacidade de se colocar no lugar do outro e compreender sua perspectiva sem julgamentos, enquanto SIMPATIA é afinidade emocional/espontânea. ESCUTA ATIVA exige atenção plena ao interlocutor, confirmação de entendimento (feedback) e ausência de interrupções prematuras.',
        mnemonicOrTrap: '⚠️ PEGADINHA: No serviço público exige-se EMPATIA e URBANIDADE com todos os cidadãos indistintamente (e não "simpatia seletiva" ou intimidade pessoal!).'
      },
      {
        title: 'Comunicação Interpessoal e Barreiras (Ruídos) à Comunicação',
        explanation: 'Elementos da comunicação: Emissor (Fonte), Codificador, Mensagem, Canal (Meio), Decodificador, Receptor (Destinatário), Feedback (Retroação — confirma que a mensagem foi compreendida!) e Ruído (qualquer interferência). Barreiras: 1) Mecânicas/Físicas (barulho no ambiente, falha no telefone/internet); 2) Fisiológicas (surdez, rouquidão, deficiência visual); 3) Semânticas (uso de jargões técnicos incompreensíveis, siglas burocráticas ou palavras ambíguas); 4) Psicológicas (preconceitos, estereótipos, Efeito Halo, filtragem, defesa ou desinteresse emocional).',
        mnemonicOrTrap: '💡 Quando um servidor usa excesso de "juridiquês" ou siglas técnicas que o cidadão não entende, ocorre uma BARREIRA SEMÂNTICA!'
      },
      {
        title: 'Código de Defesa do Usuário e Carta de Serviços (Lei nº 13.460/2017)',
        explanation: 'A Carta de Serviços ao Usuário tem por objetivo informar o usuário sobre os serviços prestados pelo órgão/entidade, as formas de acesso, os requisitos, documentos, etapas, prazo máximo para a prestação do serviço e os mecanismos de consulta e manifestação. A Carta de Serviços deve ser objeto de atualização periódica e de permanente divulgação em sítio eletrônico na internet. As Ouvidorias devem responder às manifestações dos usuários em até 30 DIAS, prorrogáveis de forma justificada uma única vez por igual período (+30 dias).',
        mnemonicOrTrap: '⚠️ Prazo da Ouvidoria na Lei 13.460/2017: 30 DIAS (+30 dias)! Não confunda com o prazo de pedido de acesso à informação na LAI, que é de 20 dias (+10 dias)!'
      },
      {
        title: 'Simplificação do Atendimento (Dec. 9.094/17) e Atendimento Prioritário (Lei 10.048/00)',
        explanation: 'Pelo Decreto 9.094/2017 e Lei 13.726/2018 (Lei da Desburocratização), é DISPENSA-SE o reconhecimento de firma e a autenticação de cópia de documento, cabendo ao próprio servidor público confrontar a assinatura com o documento de identidade ou atestar a autenticidade da cópia à vista do original. Têm direito a atendimento prioritário (Lei 10.048/2000): pessoas com deficiência, pessoas com transtorno do espectro autista (TEA), idosos (60 anos ou mais, tendo os maiores de 80 anos "superprioridade" entre os idosos!), gestantes, lactantes, pessoas com crianças de colo, obesos, pessoas com mobilidade reduzida e doadores de sangue.',
        mnemonicOrTrap: '💡 Superprioridade (Estatuto da Pessoa Idosa): Idosos com 80 ANOS OU MAIS têm prioridade especial sobre os demais idosos!'
      }
    ],
    comparativeTable: {
      headers: ['Tema / Legislação', 'Regra Fundamental', 'Pegadinha Recorrente'],
      rows: [
        ['Carta de Serviços (Lei 13.460/17)', 'Informa requisitos, prazos máximos, etapas e locais de atendimento', 'Dizer que a Carta de Serviços é facultativa para autarquias como a UFBA (é obrigatória!)'],
        ['Prazo da Ouvidoria (Lei 13.460/17)', 'Decisão administrativa final em até 30 dias, prorrogável por +30 dias', 'Trocar o prazo de 30 dias da Ouvidoria pelos 20 dias da LAI'],
        ['Desburocratização (Dec. 9.094/17)', 'Dispensa reconhecimento de firma e autenticação em cartório', 'Afirmar que o servidor só pode aceitar cópia autenticada em tabelionato'],
        ['Barreiras da Comunicação', 'Semântica (linguagem/jargão), Psicológica (preconceito), Física (ambiente)', 'Classificar o uso de jargão técnico complexo como barreira física ou fisiológica']
      ]
    },
    fullTheoryMarkdown: `# Atendimento ao Público, Comunicação Interpessoal e Carta de Serviços (Lei nº 13.460/2017)
*Módulo Exclusivo para Assistente em Administração (UFBA — Manhã • Peso 2.0)*

## 1. Postura Profissional, Eficiência, Discrição e Ética no Atendimento
* O servidor público atua como o **representante direto do Estado** perante o cidadão-usuário.
* **Princípios da Qualidade no Atendimento Público:**
  * **Urbanidade e Cortesia:** Tratamento respeitoso, educado e prestativo.
  * **Impessoalidade e Equidade:** Atendimento isonômico sem privilégios pessoais, respeitando-se as prioridades legais (acessibilidade e equidade material).
  * **Discrição:** Manutenção do sigilo funcional e respeito à privacidade dos dados do cidadão (em consonância com a LGPD).
  * **Eficiência e Tempestividade:** Resolução célere das demandas, evitando filas desnecessárias e retrabalho.

## 2. Comunicação Interpessoal no Ambiente Organizacional
* **Comunicação Verbal (Oral e Escrita) vs. Não Verbal:** Expressões faciais, postura corporal, tom de voz e contato visual (comunicação não verbal) devem ser coerentes com a fala.
* **Fluxos da Comunicação Organizacional:**
  * **Descendente (Vertical para baixo):** Da chefia para os subordinados (ordens, instruções normativas, metas, feedback de desempenho).
  * **Ascendente (Vertical para cima):** Dos subordinados para a chefia (relatórios de execução, sugestões, reclamações, pesquisa de clima).
  * **Horizontal (Lateral):** Entre servidores ou setores de mesmo nível hierárquico (coordenação interdepartamental e trabalho em equipe).
  * **Diagonal (Transversal):** Entre unidades e níveis hierárquicos diferentes sem relação de subordinação direta.

## 3. Lei nº 13.460/2017 (Defesa do Usuário de Serviços Públicos e Carta de Serviços)
* **Direitos Básicos do Usuário (Art. 6º):**
  1. Participação no acompanhamento da prestação e na avaliação dos serviços;
  2. Obtenção e utilização dos serviços com liberdade de escolha entre os meios oferecidos e sem discriminação;
  3. Acesso e obtenção de informações relativas à sua pessoa constantes de registros ou bancos de dados;
  4. Proteção de suas informações pessoais (Lei 12.527/2011 e LGPD);
  5. Atuação integrada e sistêmica na expedição de atestados, certidões e documentos comprobatórios de regularidade;
  6. Obtenção de informações precisas e de fácil acesso nos locais de prestação do serviço, especialmente sobre horário de funcionamento, serviços prestados, etapas, prazos máximos e documentação exigida (**Carta de Serviços ao Usuário**).`
  }
};
