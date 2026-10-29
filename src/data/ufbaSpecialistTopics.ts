export interface UfbaSpecialistTopic {
  id: string;
  code: string;
  title: string;
  category: string;
  block: 'especificos' | 'comuns';
  weightLabel: string;
  specialistRole: string;
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
    weightLabel: 'Peso 1.0',
    specialistRole: 'Especialista em Legislação Universitária e Direito Público',
    sourceLegislation: 'Estatuto da UFBA; Regimento Geral da UFBA; CF/88 Art. 207 (Autonomia Universitária); Lei 9.394/96 (LDB)',
    summary: 'Estrutura institucional, órgãos deliberativos superiores (CONSUNI, CONSEPE, Conselho de Curadores), reitoria, pró-reitorias, congregações das faculdades/institutos e regime administrativo da Universidade Federal da Bahia.',
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
      }
    ],
    comparativeTable: {
      headers: ['Órgão Colegiado', 'Natureza / Função', 'Composição Principal', 'Competência Típica'],
      rows: [
        ['CONSUNI', 'Órgão Máximo da Universidade', 'Reitor (Presidente), Diretores, Docentes, Técnicos e Discentes', 'Fixar diretrizes institucionais, aprovar estatuto e normas gerais'],
        ['CONSEPE', 'Órgão Acadêmico Deliberativo', 'Reitor, Coordenadores acadêmicos, Docentes e Alunos', 'Deliberar sobre criação de cursos, currículos e pesquisa'],
        ['Conselho de Curadores', 'Órgão de Fiscalização Econômica', 'Representantes da comunidade, docentes e especialistas', 'Acompanhar a gestão financeira e emitir parecer sobre as contas anuais']
      ]
    },
    fullTheoryMarkdown: `# Estatuto e Regimento Geral da UFBA
*Elaborado pelo Especialista em Direito Universitário da Federação Hermes*

## 1. Natureza Jurídica e Fins da UFBA
A Universidade Federal da Bahia (UFBA) é uma autarquia federal de regime especial, vinculada ao Ministério da Educação, dotada de autonomia didático-científica, administrativa e de gestão financeira e patrimonial (art. 207 da CF/88).

## 2. Órgãos da Administração Superior da UFBA
1. **Conselho Universitário (CONSUNI):** Instância máxima de deliberação coletiva sobre políticas e diretrizes da UFBA.
2. **Conselho de Ensino, Pesquisa e Extensão (CONSEPE):** Delibera privativamente sobre questões didáticas, regimes de matrículas, projetos de pesquisa e extensão.
3. **Conselho de Curadores:** Órgão fiscalizador do patrimônio e da gestão financeira. Examina a proposta orçamentária e emite parecer sobre a prestação de contas anual do Reitor antes do envio ao TCU.
4. **Reitoria:** Órgão executivo central que administra, coordena e superintende todas as atividades da universidade.`
  },

  'governo-digital-governanca': {
    id: 'governo-digital-governanca',
    code: 'Comum & Esp. 5',
    title: 'Governo Digital (Lei 14.129/21), Riscos (Decreto 9.830/19) e A3P',
    category: 'Administração Pública & Marcos Federais Contemporâneos',
    block: 'comuns',
    weightLabel: 'Peso 1.0',
    specialistRole: 'Especialista em Gestão Pública e Integridade',
    sourceLegislation: 'Lei 14.129/2021 (Governo Digital); Decreto 9.830/2019 (LINDB e Governança); Agenda Ambiental A3P',
    summary: 'Princípios do Governo Digital, digitalização e interoperabilidade de serviços públicos, transparência, integridade, gestão de riscos no setor público e diretrizes de sustentabilidade da Agenda Ambiental na Administração Pública (A3P).',
    keyPoints: [
      {
        title: 'Princípios da Lei do Governo Digital (Lei nº 14.129/2021)',
        explanation: 'Desburocratização, inovação, transformação digital, o cidadão como centro dos serviços, dados abertos como regra e sigilo como exceção, integração e interoperabilidade entre sistemas públicos.',
        mnemonicOrTrap: '⚠️ O princípio da NÃO DUPLICIDADE: É vedado ao poder público exigir do cidadão certidões ou documentos que já constem em bases de dados oficiais federais!'
      },
      {
        title: 'Gestão de Riscos e Integridade (Decreto Federal nº 9.830/2019)',
        explanation: 'Regulamenta os artigos 20 a 30 da LINDB (Lei de Introdução às Normas do Direito Brasileiro). Exige que as decisões de controle considerem as consequências práticas, os obstáculos reais do gestor e a proibição de anulação por mera alegação abstrata sem indicação de solução proporcional.',
        mnemonicOrTrap: 'Erro grosseiro: o gestor público só responde pessoalmente por suas decisões em caso de DOLO ou ERRO GROSSEIRO (culpa grave inescusável).'
      },
      {
        title: 'Agenda Ambiental na Administração Pública (A3P)',
        explanation: 'Programa do Ministério do Meio Ambiente baseado em 6 eixos prioritários: Uso racional dos recursos naturais e bens públicos; Gestão adequada dos resíduos gerados; Qualidade de vida no ambiente de trabalho; Sensibilização e capacitação; Compras públicas sustentáveis; e Construções sustentáveis.',
        mnemonicOrTrap: '💡 Mnemônico dos 6 Eixos A3P: R-R-Q-S-C-C (Recursos, Resíduos, Qualidade, Sensibilização, Compras sustentáveis e Construções).'
      }
    ],
    fullTheoryMarkdown: `# Governo Digital, Gestão de Riscos e Sustentabilidade (A3P)
*Elaborado pelo Especialista em Governança e Integridade da Federação Hermes*

## 1. Lei do Governo Digital (Lei nº 14.129/2021)
Institui princípios, regras e instrumentos para o Governo Digital e o aumento da eficiência pública:
* **Identificação Digital Única:** Plataforma Gov.br como mecanismo unificado de acesso.
* **Interoperabilidade:** Integração segura entre bases de dados de órgãos federais.
* **Transparência Ativa e Dados Abertos:** Disponibilização contínua de bases de dados em formatos legíveis por máquina.

## 2. LINDB e Governança Decisória (Decreto nº 9.830/2019)
* Protege a tomada de decisão legítima contra controles excessivamente formais.
* O controle deve avaliar as circunstâncias práticas do administrador no momento dos fatos.

## 3. Agenda Ambiental na Administração Pública (A3P)
* Compromisso voluntário dos órgãos públicos federais com a responsabilidade socioambiental.
* Foco prioritário na redução de descartáveis, economia de água e energia e inserção de critérios ecológicos nos editais de licitação.`
  }
};
