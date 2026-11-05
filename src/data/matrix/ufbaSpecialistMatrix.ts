import { LessonProposition, SubjectLessonMatrix } from './types';

export const UFBA_AUDITORIA_SPECIALIST_MATRIX: SubjectLessonMatrix = {
  17: [
    {
      sub: 'Conceito e Competência Exclusiva na Perícia Contábil (NBC TP 01)',
      ref: 'NBC TP 01 (R1), itens 2 e 3',
      t: 'A perícia contábil constitui o conjunto de procedimentos técnicos e científicos destinados a levar à instância decisória elementos de prova necessários a subsidiar a justa solução do litígio ou constatação de fato, mediante laudo pericial contábil e/ou parecer pericial contábil, sendo atribuição privativa de contador regularmente registrado em Conselho Regional de Contabilidade.',
      f: 'A perícia contábil judicial pode ser executada e assinada por técnicos em contabilidade de nível médio ou por economistas sem registro em Conselho Regional de Contabilidade.',
      exp: 'Nos termos do Decreto-Lei nº 9.295/1946 e da NBC TP 01 (R1), a perícia contábil é atribuição privativa de bacharel em Ciências Contábeis (Contador) ativo no CRC.'
    },
    {
      sub: 'Distinção entre Laudo Pericial Contábil e Parecer Pericial Contábil',
      ref: 'NBC TP 01 (R1) e CPC/2015, Art. 477',
      t: 'O Laudo Pericial Contábil é a peça escrita na qual o perito do juízo (oficial) expõe de forma circunstanciada as sínteses do objeto da perícia, os estudos, as diligências realizadas, os critérios adotados e as conclusões fundamentadas; já o Parecer Pericial Contábil é a peça escrita elaborada pelo perito assistente técnico indicado pela parte.',
      f: 'Tanto o perito nomeado pelo juiz quanto o assistente técnico contratado pelas partes emitem documento denominado Laudo Pericial Oficial.',
      exp: 'Distinção clássica de prova: Perito do Juízo emite LAUDO Pericial Contábil; Assistente Técnico das partes emite PARECER Pericial Contábil.'
    },
    {
      sub: 'Impedimento vs. Suspeição do Perito (NBC PP 01)',
      ref: 'NBC PP 01 (R1) e CPC/2015, Arts. 144, 145 e 148',
      t: 'O impedimento do perito decorre de causas objetivas e absolutas previstas na lei processual e nas normas profissionais (como ser parte da causa, ter atuado como assistente técnico ou testemunha no processo, ou ser cônjuge/parente até o terceiro grau de alguma das partes), enquanto a suspeição decorre de causas subjetivas que comprometem a imparcialidade (como ser amigo íntimo ou inimigo capital das partes, ou credor/devedor).',
      f: 'O assistente técnico indicado pelas partes está sujeito às mesmas regras de impedimento e suspeição aplicáveis ao perito nomeado pelo juiz.',
      exp: 'Nos termos do art. 466, § 1º do CPC, os assistentes técnicos são de confiança da parte e NÃO estão sujeitos a impedimento ou suspeição.'
    },
    {
      sub: 'Procedimentos Periciais: Exame, Vistoria, Indagação, Investigação, Arbitramento, Mensuração, Avaliação e Certificação',
      ref: 'NBC TP 01 (R1), item 29',
      t: 'Na execução da perícia contábil: o Exame é a análise de livros, registros de transações e documentos; a Vistoria é a diligência que objetiva a verificação e a constatação de situação, coisa ou fato, de forma circunstanciada in loco; a Indagação é a busca de informações mediante entrevista com conhecedores do objeto; a Investigação é a pesquisa que busca trazer ao laudo o que está oculto; e o Arbitramento é a determinação de valores ou quantidades por critério técnico-científico.',
      f: 'De acordo com a NBC TP 01, a análise documental de livros contábeis denomina-se Vistoria, enquanto a inspeção física de imóveis denomina-se Exame.',
      exp: 'Exame = livros, registros e documentos; Vistoria = verificação física in loco de bens, coisas ou fatos.'
    },
    {
      sub: 'Termo de Diligência e Requisição de Documentos',
      ref: 'NBC TP 01 (R1), itens 23 a 28',
      t: 'O termo de diligência é o instrumento formal por meio do qual o perito solicita documentos, livros, dados e outros elementos necessários à elaboração do laudo ou parecer pericial que não estejam anexados aos autos do processo, comunicando diretamente às partes, aos assistentes ou a terceiros com prazo para cumprimento.',
      f: 'O perito contábil é proibido de solicitar documentos que não estejam previamente juntados à petição inicial, sendo vedada a emissão de termo de diligência.',
      exp: 'O Termo de Diligência formaliza a requisição de documentos e elementos comprobatórios em poder das partes ou de terceiros.'
    },
    {
      sub: 'Quesitos Periciais: Principais, Suplementares e de Esclarecimento',
      ref: 'CPC/2015, Arts. 469 e 477; NBC TP 01 (R1)',
      t: 'As partes e o juiz formulam quesitos iniciais; durante a diligência, poderão apresentar quesitos suplementares (dando-se ciência à parte contrária); e após a apresentação do laudo, as partes podem requerer que o perito preste esclarecimentos sobre pontos divergentes ou duvidosos em até 15 dias.',
      f: 'É vedada a apresentação de quesitos suplementares após o despacho de nomeação do perito judicial.',
      exp: 'Art. 469 do CPC: As partes poderão apresentar quesitos suplementares durante a diligência, que poderão ser respondidos pelo perito previamente ou na audiência de instrução e julgamento.'
    },
    {
      sub: 'Proposta de Honorários Periciais e Levantamento Parcial',
      ref: 'NBC PP 01 (R1) e CPC/2015, Art. 465',
      t: 'Na elaboração da proposta de honorários, o perito deve considerar a relevância, o vulto, o risco, a complexidade, a quantidade de horas técnicas estimadas, o pessoal técnico e o prazo estabelecido; o juiz pode autorizar o levantamento de até 50% dos honorários arbitrados no início dos trabalhos, sendo o restante pago apenas após a entrega do laudo e prestação dos esclarecimentos.',
      f: 'O perito contábil pode fixar seus honorários judiciais em percentual sobre o ganho futuro da causa (contrato de risco quota litis).',
      exp: 'Os honorários periciais judiciais jamais podem ser vinculados ao resultado da demanda (vedado honorário contingente na perícia).'
    },
    {
      sub: 'Perícia Conjunta, Substituição do Perito e Segunda Perícia',
      ref: 'CPC/2015, Arts. 468, 475 e 480',
      t: 'Tratando-se de perícia complexa que abranja mais de uma área de conhecimento especializado, o juiz poderá nomear mais de um perito; ademais, o juiz determinará, de ofício ou a requerimento da parte, a realização de segunda perícia quando a matéria não lhe parecer suficientemente esclarecida, a qual não substitui a primeira, cabendo ao juiz apreciar livremente o valor de uma e de outra.',
      f: 'A realização de uma segunda perícia anula automaticamente e desentranha dos autos o primeiro laudo pericial contábil.',
      exp: 'Art. 480, § 3º do CPC: A segunda perícia não substitui a primeira, cabendo ao juiz apreciar o valor de uma e de outra.'
    }
  ]
};

export const UFBA_CASP_SPECIALIST_MATRIX: SubjectLessonMatrix = {
  19: [
    {
      sub: 'Siconfi e Matriz de Saldos Contábeis (MSC)',
      ref: 'LRF, Art. 48, § 2º e Portarias STN Siconfi',
      t: 'O Sistema de Informações Contábeis e Fiscais do Setor Público Brasileiro (Siconfi), gerido pela Secretaria do Tesouro Nacional (STN), recebe mensalmente a Matriz de Saldos Contábeis (MSC) enviada pela União, Estados, DF e Municípios, a qual contém os saldos detalhados das contas do PCASP acompanhados das informações complementares (atributos contábeis, financeiros e orçamentários) para geração automática do RREO, RGF e DCA.',
      f: 'O envio da Matriz de Saldos Contábeis (MSC) ao Siconfi ocorre apenas uma vez a cada quatro anos ao final do mandato do Prefeito.',
      exp: 'A MSC é enviada mensalmente pelos entes da Federação ao Siconfi, servindo de base para a elaboração dos demonstrativos fiscais e da Declaração de Contas Anuais (DCA).'
    },
    {
      sub: 'Sistemas Constitucionais de Vinculação: SIOPE (Educação) e SIOPS (Saúde)',
      ref: 'CF/88, Arts. 198, § 2º e 212; LC 141/2012 e Lei 14.113/2020',
      t: 'Os Municípios estão obrigados a aplicar, anualmente, nunca menos de 25% da receita resultante de impostos (compreendida a proveniente de transferências) na Manutenção e Desenvolvimento do Ensino (MDE - monitorada pelo SIOPE/FNDE) e no mínimo 15% da arrecadação de impostos e transferências constitucionais em Ações e Serviços Públicos de Saúde (ASPS - monitorada pelo SIOPS/Ministério da Saúde).',
      f: 'Para os Municípios, o limite mínimo constitucional de aplicação em Saúde Pública (SIOPS) é de 25%, enquanto na Educação (SIOPE) é de apenas 12%.',
      exp: 'Municípios: Educação (MDE / SIOPE) = mínimo de 25%; Saúde (ASPS / SIOPS) = mínimo de 15%. (Nos Estados: Educação = 25% e Saúde = 12%).'
    },
    {
      sub: 'Padrão Mínimo de Qualidade do SIAFIC (Decreto Federal nº 10.540/2020)',
      ref: 'LRF, Art. 48, § 6º e Decreto nº 10.540/2020',
      t: 'Todos os Poderes e órgãos de cada ente federativo (incluídas autarquias, fundações, fundos e estatais dependentes) devem utilizar um único Sistema Único e Integrado de Execução Orçamentária, Administração Financeira e Controle (SIAFIC), gerido pelo Poder Executivo, com base de dados compartilhada e integração contábil em tempo real, vedada a existência de sistemas paralelos.',
      f: 'O Decreto nº 10.540/2020 autoriza que a Câmara Municipal e cada fundo municipal mantenham softwares contábeis isolados sem integração com a Prefeitura.',
      exp: 'O SIAFIC é único para todo o ente federativo (União, Estado ou Município), assegurando a unidade da escrituração e da consolidação contábil.'
    },
    {
      sub: 'Contabilização dos Tributos Próprios Municipais (IPTU, ITBI e ISSQN)',
      ref: 'NBC TSP 01 e MCASP',
      t: 'Na contabilidade municipal, o IPTU (lançado de ofício no início do exercício) tem seu ativo (Créditos Tributários a Receber) e sua Variação Patrimonial Aumentativa (VPA Bruta) reconhecidos pelo regime de competência no momento do fato gerador/lançamento, registrando-se a receita orçamentária apenas no momento da efetiva arrecadação bancária.',
      f: 'Sob a ótica patrimonial da NBC TSP 01, o Município só pode reconhecer a Variação Patrimonial Aumentativa (VPA) de IPTU e ISS após o trânsito em julgado da execução fiscal.',
      exp: 'Pelo regime de competência patrimonial (NBC TSP 01), a VPA tributária é reconhecida na ocorrência do evento tributável (fato gerador), independentemente do momento do recebimento em caixa.'
    },
    {
      sub: 'Retenções Tributárias na Fonte pelos Municípios e Autarquias (IRRF e ISS)',
      ref: 'CF/88, Art. 158, I; Tema 1130 do STF e MCASP',
      t: 'Pertence aos Municípios (e aos Estados, no seu âmbito) o produto da arrecadação do Imposto da União sobre renda e proventos de qualquer natureza (IRRF), incidente na fonte, sobre rendimentos pagos, a qualquer título, por eles, suas autarquias e pelas fundações que instituírem e mantiverem (inclusive pagamentos a fornecedores de bens e serviços - Tema 1130 STF).',
      f: 'O Imposto de Renda Retido na Fonte (IRRF) sobre a folha de pagamento dos servidores municipais deve ser integralmente repassado pelos Municípios aos cofres da União.',
      exp: 'Art. 158, I da CF/88 e Tema 1130 do STF: 100% do IRRF retido na fonte por Municípios, suas autarquias e fundações (sobre salários e sobre pagamentos a pessoas jurídicas por bens/serviços) pertence ao próprio Município como receita tributária própria!'
    },
    {
      sub: 'Contabilização de Fundos Especiais Municipais (Saúde, Assistência Social, Educação)',
      ref: 'Lei nº 4.320/1964, Arts. 71 a 74 e MCASP',
      t: 'Constitui fundo especial o produto de receitas especificadas que, por lei, se vinculam à realização de determinados objetivos ou serviços; os fundos públicos não possuem personalidade jurídica própria, mas funcionam como unidades orçamentárias/gestoras integrantes do orçamento geral do ente, mantendo escrituração contábil integrada ao SIAFIC.',
      f: 'Os fundos municipais de saúde e assistência social são empresas públicas independentes dispensadas de prestar contas ao Tribunal de Contas.',
      exp: 'Fundos especiais têm natureza meramente contábil/orçamentária (sem personalidade jurídica autônoma), embora possuam CNPJ próprio para fins operacionais/bancários.'
    },
    {
      sub: 'Declaração de Contas Anuais (DCA) e Balanço do Setor Público Nacional (BSPN)',
      ref: 'LRF, Art. 51 e MCASP Parte V',
      t: 'O Poder Executivo da União promove, até 30 de junho, a consolidação nacional e por esfera de governo das contas dos entes da Federação relativas ao exercício anterior (Balanço do Setor Público Nacional - BSPN); para tanto, os Municípios devem encaminhar suas contas anuais (DCA) ao Siconfi até 30 de abril, e os Estados até 31 de maio.',
      f: 'Os Municípios têm prazo até 31 de dezembro do ano seguinte para enviar a Declaração de Contas Anuais (DCA) à Secretaria do Tesouro Nacional.',
      exp: 'Art. 51, § 1º da LRF: Prazos de envio das contas do exercício anterior -> Municípios até 30 de abril; Estados até 31 de maio; Consolidação pela União até 30 de junho.'
    },
    {
      sub: 'CAUC (Sistema Auxiliar de Informações para Transferências Voluntárias)',
      ref: 'LRF, Art. 25 e Instruções Normativas STN',
      t: 'O CAUC é o serviço mantido pelo Tesouro Nacional que consolida e espelha a situação de adimplência fiscal, contábil e de transparência dos Estados e Municípios (incluindo envio de RREO, RGF, DCA, MSC, SIOPE e SIOPS) como requisito para o recebimento de transferências voluntárias e contratação de operações de crédito.',
      f: 'A inadimplência de um Município no envio do SIOPE e do SIOPS impede até mesmo o recebimento das transferências constitucionais obrigatórias do FPM e do SUS.',
      exp: 'O bloqueio por pendência fiscal atinge as transferências VOLUNTÁRIAS (Art. 25 da LRF, ressalvadas ações de educação, saúde e assistência social), jamais as transferências constitucionais obrigatórias.'
    }
  ]
};

export const UFBA_CONTABILIDADE_SPECIALIST_MATRIX: SubjectLessonMatrix = {
  31: [
    {
      sub: 'Terminologia de Custos: Gasto, Desembolso, Investimento, Custo, Despesa e Perda',
      ref: 'Eliseu Martins (Contabilidade de Custos) e CPC 16',
      t: 'Na terminologia contábil de custos: Gasto é o sacrifício financeiro para obtenção de um bem ou serviço; Investimento é o gasto ativado em função de sua vida útil ou benefícios futuros; Custo é o gasto relativo a bem ou serviço utilizado na produção de outros bens ou serviços; Despesa é o bem ou serviço consumido para obtenção de receitas (fora da produção); e Perda é o consumo anormal e involuntário que vai direto para o resultado.',
      f: 'A comissão dos vendedores da loja comercial e a depreciação dos computadores da diretoria jurídica classificam-se como custos diretos de fabricação.',
      exp: 'Gastos da fábrica/produção = CUSTOS; gastos administrativos, comerciais e financeiros = DESPESAS.'
    },
    {
      sub: 'Custos Diretos vs. Indiretos e Custos Fixos vs. Variáveis',
      ref: 'Contabilidade de Custos e CPC 16',
      t: 'Quanto à apropriação aos produtos: Custos Diretos são diretamente apropriados sem necessidade de rateio (por medição objetiva de consumo, como matéria-prima e mão de obra direta), enquanto Custos Indiretos (CIF/GGF) exigem critério de rateio. Quanto ao volume de produção: Custos Fixos permanecem constantes no total dentro da capacidade instalada (mas o custo fixo unitário diminui quando a produção aumenta!), enquanto Custos Variáveis variam no total proporcionalmente ao volume (mas o custo variável unitário é constante!).',
      f: 'O custo fixo unitário permanece constante qualquer que seja a quantidade produzida no mês, ao passo que o custo variável unitário cresce proporcionalmente à produção.',
      exp: 'Pegadinha clássica: No TOTAL, o Custo Fixo é fixo e o Variável varia; mas no UNITÁRIO (por unidade produzida), o Custo Fixo Unitário é variável (decrescente) e o Custo Variável Unitário é fixo!'
    },
    {
      sub: 'Custeio por Absorção vs. Custeio Variável (Direto)',
      ref: 'CPC 16 (R1) e Legislação do IRPJ (RIR)',
      t: 'O Custeio por Absorção apropria aos produtos elaborados todos os custos de produção (tanto os variáveis quanto os fixos, diretos e indiretos), sendo o único método aceito pela contabilidade societária (CPC 16) e pelo Fisco no Brasil; já o Custeio Variável (ou Direto) aloca aos produtos apenas os custos variáveis, tratando todos os custos fixos como despesa integral do período para fins gerenciais.',
      f: 'A legislação tributária brasileira e o Pronunciamento Técnico CPC 16 determinam o uso obrigatório do Custeio Variável para avaliação dos estoques no Balanço Patrimonial.',
      exp: 'Para fins societários (CPC 16) e fiscais, é obrigatório o Custeio por Absorção; o Custeio Variável é exclusivo para relatórios gerenciais internos.'
    },
    {
      sub: 'Custeio Baseado em Atividades (ABC - Activity-Based Costing)',
      ref: 'Contabilidade Gerencial e de Custos',
      t: 'O método de Custeio ABC busca reduzir as distorções provocadas pelo rateio arbitrário dos custos indiretos no custeio tradicional, partindo da premissa de que os recursos de uma organização são consumidos por suas atividades e as atividades são consumidas pelos produtos ou serviços, utilizando direcionadores de custos de recursos (1º estágio) e direcionadores de atividades (2º estágio).',
      f: 'O Custeio ABC elimina a existência de custos diretos, rateando a matéria-prima exclusivamente pelo volume de horas de mão de obra direta.',
      exp: 'No ABC: Recursos -> (direcionadores de recursos) -> Atividades -> (direcionadores de atividades) -> Objetos de Custo (produtos/serviços).'
    },
    {
      sub: 'Margem de Contribuição e Pontos de Equilíbrio (Contábil, Econômico e Financeiro)',
      ref: 'Análise Custo-Volume-Lucro (CVL)',
      t: 'A Margem de Contribuição Unitária (MCu) é a diferença entre o Preço de Venda Unitário e a soma dos Custos e Despesas Variáveis Unitários; o Ponto de Equilíbrio Contábil (PEC) é dado por (CF + DF) / MCu; o Ponto de Equilíbrio Econômico (PEE) soma ao numerador o Custo de Oportunidade (lucro mínimo desejado); e o Ponto de Equilíbrio Financeiro (PEF) subtrai do numerador os custos/despesas fixos não desembolsáveis (como a depreciação).',
      f: 'Em uma empresa industrial com depreciação positiva de máquinas e custo de oportunidade positivo, o Ponto de Equilíbrio Financeiro é sempre maior que o Ponto de Equilíbrio Econômico.',
      exp: 'Como o PEE soma o lucro desejado e o PEF subtrai a depreciação, tem-se sempre: PEE > PEC > PEF!'
    },
    {
      sub: 'Custo Padrão (Standard) vs. Custo Real e Análise das Variações',
      ref: 'Controle Gerencial de Custos',
      t: 'O Custo Padrão é uma meta de custo cientificamente predeterminada com base em condições normais ou ideais de eficiência para servir de parâmetro de controle; ao final do período, confronta-se o Custo Padrão com o Custo Real incorrido (análise de variações de quantidade/eficiência, de preço/taxa e mista), devendo os estoques no balanço ser ajustados ao Custo Real se este divergir do padrão.',
      f: 'A adoção do sistema de Custo Padrão dispensa a empresa de apurar o custo real incorrido na contabilidade financeira ao final do exercício.',
      exp: 'O Custo Padrão não substitui o Custo Real nas demonstrações contábeis: ele funciona como ferramenta de controle gerencial para apurar variações de preço e quantidade.'
    },
    {
      sub: 'Custos no Setor Público (NBC TSP 34)',
      ref: 'NBC TSP 34 (Custos no Setor Público) e LRF, Art. 50, § 3º',
      t: 'A NBC TSP 34 estabelece que a informação de custos no setor público apoia a avaliação de eficiência, eficácia e economicidade das políticas públicas, utiliza como base fundamental os dados de natureza patrimonial pelo regime de competência (Variações Patrimoniais Diminutivas - VPD e consumo de ativos) e faculta ao gestor público a escolha do método de custeio mais adequado (Absorção, Direto, ABC, etc.).',
      f: 'Segundo a NBC TSP 34, a apuração de custos no setor público deve basear-se exclusivamente nos valores de empenho orçamentário, ignorando a depreciação patrimonial.',
      exp: 'Na NBC TSP 34, custos no setor público refletem o consumo de recursos econômicos pelo regime de competência (patrimonial), incluindo depreciação e amortização.'
    },
    {
      sub: 'Sistema SIAFI: Tabela de Eventos e Documentos Contábeis (ND, NC, NE, NL, NS, OB, GRU)',
      ref: 'Manual SIAFI / Secretaria do Tesouro Nacional (STN)',
      t: 'No SIAFI: a Tabela de Eventos associa cada ato/fato administrativo aos roteiros automáticos de partidas dobradas no PCASP; a Nota de Dotação (ND) registra créditos da LOA; a Nota de Movimentação de Crédito (NC) registra descentralizações de créditos (Provisão interna ou Destaque externo); a Nota de Empenho (NE) registra o empenho; a Nota de Lançamento (NL) / Nota de Sistema (NS) registra eventos de liquidação e ajustes; e a Ordem Bancária (OB) executa o pagamento.',
      f: 'No SIAFI, o pagamento financeiro aos fornecedores é realizado mediante emissão de uma Nota de Dotação (ND), enquanto o empenho é feito por Ordem Bancária (OB).',
      exp: 'Resumo SIAFI: ND = Dotação; NC = Descentralização de Crédito; PF = Programação Financeira (Cota/Repasse/Sub-repasse); NE = Empenho; NL/NS = Liquidação/Apropriação; OB = Pagamento; GRU/DARF = Arrecadação.'
    }
  ]
};

export const UFBA_PORTUGUES_SPECIALIST_MATRIX: SubjectLessonMatrix = {
  16: [
    {
      sub: 'Atributos da Redação Oficial (Manual da Presidência da República - 3ª Edição)',
      ref: 'MRPR 3ª Edição (2018), Capítulo I',
      t: 'Segundo o Manual de Redação da Presidência da República (3ª edição), a redação oficial deve caracterizar-se pelos seguintes atributos fundamentais: clareza e precisão, objetividade, concisão, coesão e coerência, impessoalidade, formalidade e padronização, e uso da norma padrão da língua portuguesa.',
      f: 'A redação oficial estimula a subjetividade literária, o uso de figuras de linguagem poéticas e a manifestação de opiniões pessoais do servidor signatário.',
      exp: 'A impessoalidade decorre do art. 37 da CF/88: a comunicação é sempre feita em nome do Serviço Público, sem impressões individuais.'
    },
    {
      sub: 'O Padrão Ofício Unificado (Extinção do Aviso e do Memorando)',
      ref: 'MRPR 3ª Edição (2018), Capítulo II',
      t: 'A 3ª edição do Manual de Redação da Presidência da República aboliu a antiga distinção entre Aviso, Ofício e Memorando, passando a adotar o Padrão Ofício unificado (utilizando-se a nomenclatura "Ofício" tanto para comunicações internas entre unidades de um mesmo órgão quanto para comunicações externas a outros órgãos ou a particulares).',
      f: 'Pelas regras atuais do Manual da Presidência da República, a comunicação interna entre duas Pró-Reitorias da UFBA deve ser redigida obrigatoriamente sob a forma de Memorando.',
      exp: 'Pegadinha campeã de prova: Memorando e Aviso foram extintos na 3ª edição do MRPR! Hoje usa-se apenas OFÍCIO para comunicações internas e externas.'
    },
    {
      sub: 'Fechos para Comunicações Oficiais ("Respeitosamente" e "Atenciosamente")',
      ref: 'MRPR 3ª Edição (2018), item 5.2',
      t: 'O Manual de Redação da Presidência da República estabelece o emprego de apenas dois fechos diferentes para todas as modalidades de comunicação oficial: "Respeitosamente," (para autoridades superiores, inclusive o Presidente da República) e "Atenciosamente," (para autoridades de mesma hierarquia, de hierarquia inferior ou demais casos).',
      f: 'Para autoridades de hierarquia inferior, o Manual da Presidência da República determina o uso do fecho "Cordialmente," ou "Saudações universitárias,".',
      exp: 'Existem APENAS DOIS fechos oficiais no MRPR: "Respeitosamente," (para superiores) e "Atenciosamente," (para mesma hierarquia, inferiores ou particulares).'
    },
    {
      sub: 'Pronomes de Tratamento: Concordância em 3ª Pessoa e Vocativo',
      ref: 'MRPR 3ª Edição e Decreto nº 9.758/2019',
      t: 'Embora os pronomes de tratamento se dirijam à segunda pessoa (com quem se fala), toda a concordância verbal, pronominal (seu, sua, lhe, o, a) e nominal (conforme o sexo do destinatário) deve ser feita obrigatoriamente na 3ª pessoa gramatical; usa-se "Vossa Excelência" para falar diretamente com a autoridade e "Sua Excelência" para falar a respeito dela.',
      f: 'Na frase "Solicitamos a Vossa Senhoria que envieis vosso relatório", a concordância pronominal e verbal respeita as normas da redação oficial.',
      exp: 'Jamais se usa 2ª pessoa ("envieis, vosso, vossa") com Vossa Excelência ou Vossa Senhoria! O correto é 3ª pessoa: "Solicitamos a Vossa Senhoria que envie seu relatório".'
    },
    {
      sub: 'Variação Linguística: Diatópica, Diastrática, Diafásica e Diacrônica',
      ref: 'Sociolinguística e Adequação de Registro',
      t: 'Na análise das variações linguísticas: a variação diatópica ocorre em razão do espaço geográfico/regional; a variação diastrática ocorre em razão dos grupos ou estratos sociais (faixa etária, profissão, escolaridade); a variação diafásica ocorre em função da situação comunicativa (grau de monitoramento formal vs. informal); e a variação diacrônica ocorre ao longo da história da língua.',
      f: 'A diferença entre a linguagem formal usada por um servidor em um ofício e a linguagem descontraída usada por esse mesmo servidor em casa exemplifica a variação diacrônica.',
      exp: 'Adequação do mesmo falante a diferentes situações comunicativas (formal no trabalho vs. coloquial em casa) = Variação DIAFÁSICA (situacional ou de registro).'
    },
    {
      sub: 'Funções Morfossintáticas do "QUE": Conjunção Integrante vs. Pronome Relativo',
      ref: 'Morfossintaxe do Período Composto',
      t: 'A palavra "QUE" classifica-se como Conjunção Integrante quando introduz oração subordinada substantiva (podendo a oração ser substituída por "ISTO", sem que o "que" exerça função sintática interna); e classifica-se como Pronome Relativo quando retoma um termo antecedente e introduz oração subordinada adjetiva (equivalendo a "o qual / a qual" e exercendo função sintática interna de sujeito, objeto, etc.).',
      f: 'Na frase "Os relatórios que o contador assinou foram aprovados", o vocábulo "que" é uma conjunção integrante sem função sintática.',
      exp: 'Em "Os relatórios [os quais] o contador assinou", o "que" retoma "relatórios" (pronome relativo) e exerce a função sintática de Objeto Direto de "assinou".'
    },
    {
      sub: 'Funções Morfossintáticas do "SE": Partícula Apassivadora (PA) vs. Índice de Indeterminação do Sujeito (IIS)',
      ref: 'Vozes Verbais e Tipos de Sujeito',
      t: 'Quando associado a verbo transitivo direto (VTD) ou transitivo direto e indireto (VTDI), o pronome "SE" atua como Partícula Apassivadora (PA), convertendo o objeto direto em sujeito paciente com o qual o verbo deve concordar ("Analisaram-se os processos"); quando associado a verbo transitivo indireto (VTI), intransitivo (VI) ou de ligação (VL), atua como Índice de Indeterminação do Sujeito (IIS), mantendo o verbo obrigatoriamente na 3ª pessoa do singular ("Trata-se de normas federais").',
      f: 'Na frase "Necessitam-se de novos servidores na universidade", a flexão plural do verbo está correta por concordar com o sujeito paciente.',
      exp: 'Quem necessita, necessita DE algo (VTI). Com VTI + SE, o sujeito é indeterminado e o verbo fica obrigatoriamente no singular: "Necessita-se de novos servidores".'
    },
    {
      sub: 'Outras Funções do "SE": Conjunção Condicional, Conjunção Integrante, Parte Integrante do Verbo e Pronome Reflexivo',
      ref: 'Morfossintaxe da Língua Portuguesa',
      t: 'Além de PA e IIS, o vocábulo "SE" pode atuar como: Conjunção Subordinativa Condicional (equivale a "caso": "Se houver vaga, será nomeado"); Conjunção Subordinativa Integrante (introduz oração substantiva em dúvidas indiretas: "Não sei se o edital saiu"); Pronome Reflexivo (sujeito pratica e recebe a ação); ou Parte Integrante do Verbo (em verbos essencialmente pronominais como queixar-se, arrepender-se, suicidar-se).',
      f: 'Em "A diretoria perguntou se todos assinaram a ata", a partícula "se" classifica-se como pronome reflexivo recíproco.',
      exp: '"A diretoria perguntou ISTO" -> o "se" introduz uma oração subordinada substantiva objetiva direta, sendo Conjunção Subordinativa Integrante.'
    }
  ]
};

export const UFBA_ADMINISTRATIVO_SPECIALIST_MATRIX: SubjectLessonMatrix = {
  // Aula 25: Estatuto e Regimento Geral da UFBA e Carreira TAE (Lei 11.091/2005)
  25: [
    {
      sub: 'Natureza Jurídica da UFBA e Autonomia Universitária (Art. 207 da CF/88)',
      ref: 'Estatuto da UFBA, Art. 1º e CF/88, Art. 207',
      t: 'A Universidade Federal da Bahia (UFBA) é uma autarquia federal de regime especial, vinculada ao Ministério da Educação, dotada de autonomia didático-científica, administrativa e de gestão financeira e patrimonial, obedecendo ao princípio da indissociabilidade entre ensino, pesquisa e extensão.',
      f: 'A UFBA é uma sociedade de economia mista de direito privado cujo pessoal é contratado exclusivamente pelo regime da CLT.',
      exp: 'A UFBA é autarquia federal de regime especial (pessoa jurídica de direito público integrante da Administração Indireta Federal) e seus servidores são estatutários (Lei 8.112/90 e Lei 11.091/05).'
    },
    {
      sub: 'Conselho Universitário (CONSUNI) da UFBA',
      ref: 'Estatuto da UFBA, Arts. 14 a 19',
      t: 'O Conselho Universitário (CONSUNI) é o órgão superior deliberativo e consultivo máximo da UFBA em matéria de política geral, planejamento administrativo, aprovação e reforma do Estatuto e Regimento Geral, e instância final de recursos administrativos.',
      f: 'O Conselho Universitário (CONSUNI) é um órgão unipessoal consultivo subordinado aos Diretores de Departamentos.',
      exp: 'O CONSUNI é o órgão colegiado máximo da Administração Superior da UFBA, presidido pelo Reitor, com representação docente (no mínimo 70%), técnico-administrativa (15%) e estudantil (15%).'
    },
    {
      sub: 'Conselho de Ensino, Pesquisa e Extensão (CONSEPE) da UFBA',
      ref: 'Estatuto da UFBA, Arts. 20 a 24',
      t: 'O Conselho de Ensino, Pesquisa e Extensão (CONSEPE) é o órgão superior deliberativo e consultivo da UFBA encarregado especificamente da supervisão e coordenação das atividades didático-científicas, currículos, programas de ensino, pesquisa e extensão universitária.',
      f: 'Compete privativamente ao CONSEPE julgar a tomada de contas anual do Reitor e autorizar a venda de terrenos da UFBA.',
      exp: 'Matéria acadêmica (ensino, pesquisa e extensão) = CONSEPE; Matéria econômico-financeira e patrimonial = Conselho de Curadores; Política geral e administração máxima = CONSUNI.'
    },
    {
      sub: 'Conselho de Curadores e Assembleia Universitária da UFBA',
      ref: 'Estatuto da UFBA, Arts. 25 a 29',
      t: 'O Conselho de Curadores é o órgão deliberativo e consultivo em matéria econômico-financeira e patrimonial da UFBA, competindo-lhe acompanhar a execução orçamentária, aprovar a prestação de contas anual do Reitor e autorizar a alienação ou gravame de bens imóveis; já a Assembleia Universitária é o órgão consultivo solene que reúne toda a comunidade universitária.',
      f: 'O Conselho de Curadores da UFBA é presidido pelo Reitor da Universidade.',
      exp: 'No Estatuto da UFBA, o Presidente do Conselho de Curadores é eleito pelos seus próprios pares (vedada a presidência pelo Reitor, já que o Conselho fiscaliza as contas do Reitor!).'
    },
    {
      sub: 'Reitoria, Pró-Reitorias e Administração das Unidades Universitárias (Congregação e Diretoria)',
      ref: 'Estatuto da UFBA, Arts. 30 a 48',
      t: 'A Reitoria é o órgão executivo central da UFBA, dirigida pelo Reitor e auxiliada pelas Pró-Reitorias (PROAD, PROPLAN, PRODEP, PROGRAD, PRPPG, PROEXT, PROAE); já em cada Unidade Universitária (Faculdade, Escola ou Instituto), a administração é exercida pela Congregação (órgão deliberativo máximo da unidade), pela Diretoria (órgão executivo), pelos Departamentos e pelos Colegiados de Cursos.',
      f: 'Nas Faculdades e Institutos da UFBA, a Diretoria é o órgão colegiado deliberativo superior à Congregação.',
      exp: 'Na Unidade Universitária: Congregação = órgão deliberativo máximo da unidade; Diretoria = órgão executivo da unidade.'
    },
    {
      sub: 'Plano de Carreira dos Cargos Técnico-Administrativos em Educação - PCCTAE (Lei nº 11.091/2005)',
      ref: 'Lei nº 11.091/2005, Arts. 1º a 8º',
      t: 'O PCCTAE estrutura os cargos técnico-administrativos das IFES em 5 níveis de classificação (A, B, C, D e E), divididos em 4 níveis de capacitação (I, II, III e IV) e 16 padrões de vencimento; cabe aos servidores TAE planejar, organizar, executar ou avaliar as atividades técnico-administrativas e educativas de apoio ao ensino, pesquisa e extensão.',
      f: 'Na Lei nº 11.091/2005, o cargo de Assistente em Administração pertence ao Nível de Classificação A e o cargo de Contador pertence ao Nível C.',
      exp: 'Assistente em Administração = Nível de Classificação D (Ensino Médio); Contador = Nível de Classificação E (Ensino Superior).'
    },
    {
      sub: 'Progressão por Capacitação vs. Progressão por Mérito Profissional (Lei nº 11.091/2005)',
      ref: 'Lei nº 11.091/2005, Arts. 10 e 10-A',
      t: 'O desenvolvimento do servidor na carreira TAE ocorre por: 1) Progressão por Capacitação Profissional (mudança de nível de capacitação I a IV no mesmo nível de classificação, decorrente da obtenção de certificação em programa de capacitação compatível, respeitado o interstício de 18 meses); e 2) Progressão por Mérito Profissional (mudança para o padrão de vencimento imediatamente subsequente a cada 18 meses de efetivo exercício, mediante avaliação de desempenho favorável).',
      f: 'Na carreira TAE das Universidades Federais (Lei 11.091/2005), a progressão por mérito profissional permite ao servidor de nível médio passar automaticamente para o cargo de nível superior.',
      exp: 'A mudança de um cargo de nível D para um cargo de nível E exige aprovação em novo concurso público (Súmula Vinculante 43 do STF); na carreira ocorrem apenas progressão por capacitação e por mérito (interstício de 18 meses).'
    },
    {
      sub: 'Incentivo à Qualificação (IQ) na Carreira TAE (Lei nº 11.091/2005)',
      ref: 'Lei nº 11.091/2005, Art. 11 e Anexo IV',
      t: 'O Incentivo à Qualificação (IQ) é devido ao servidor TAE que possuir educação formal superior ao exigido para o ingresso no cargo de que é titular, incidindo como percentual sobre o padrão de vencimento percebido, com percentuais maiores quando a área de conhecimento guardar relação direta com o ambiente organizacional de atuação do servidor (ex.: graduação, especialização, mestrado ou doutorado).',
      f: 'Os percentuais do Incentivo à Qualificação (IQ) são cumulativos entre si, somando-se o percentual da graduação com o da especialização e o do mestrado.',
      exp: 'Art. 11, § 3º da Lei 11.091/2005: Os percentuais do Incentivo à Qualificação NÃO são acumuláveis e serão incorporados aos proventos de aposentadoria.'
    }
  ],

  // Aula 26: Governo Digital (Lei 14.129/21), Governança (Dec. 9.203/17), LINDB e A3P
  26: [
    {
      sub: 'Princípios e Diretrizes da Lei do Governo Digital (Lei nº 14.129/2021)',
      ref: 'Lei nº 14.129/2021, Art. 3º',
      t: 'São princípios e diretrizes do Governo Digital e da eficiência pública: a desburocratização, a modernização, o fortalecimento e a simplificação da relação do poder público com a sociedade mediante serviços digitais acessíveis inclusive por dispositivos móveis; a disponibilização em plataforma única (gov.br); a interoperabilidade de sistemas; a presunção de boa-fé do usuário; e a eliminação de formalidades cujo custo econômico ou social seja superior ao risco envolvido.',
      f: 'A Lei do Governo Digital (Lei nº 14.129/2021) proíbe o atendimento presencial nas repartições públicas, extinguindo os balcões físicos para idosos e pessoas sem acesso à internet.',
      exp: 'A Lei 14.129/2021 prioriza o autosserviço digital, mas assegura expressamente o atendimento presencial quando necessário e a inclusão digital.'
    },
    {
      sub: 'Identificação pelo CPF e Vedação de Exigência Duplicada (Lei nº 14.129/2021)',
      ref: 'Lei nº 14.129/2021, Art. 28 e Decreto nº 9.094/2017',
      t: 'Fica estabelecido o número de inscrição no Cadastro de Pessoas Físicas (CPF) ou no CNPJ como número suficiente para identificação do cidadão ou da pessoa jurídica nos bancos de dados de serviços públicos, sendo vedado ao poder público exigir do usuário documentos ou certidões que já constem das bases de dados oficiais da própria administração.',
      f: 'Mesmo com a Lei do Governo Digital, o cidadão deve apresentar certidão negativa em papel emitida pela Receita Federal para protocolar pedidos em autarquias federais.',
      exp: 'Princípio Once-Only (Não Duplicidade): os órgãos públicos devem consultar diretamente as bases oficiais interoperáveis sem transferir esse ônus ao cidadão.'
    },
    {
      sub: 'Dados Abertos e Laboratórios de Inovação na Lei nº 14.129/2021',
      ref: 'Lei nº 14.129/2021, Arts. 29 a 46',
      t: 'Os órgãos públicos devem promover a abertura de dados de forma ativa, disponibilizando bases não sigilosas sob licença aberta, em formato aberto, estruturado e legível por máquina; ademais, podem instituir Laboratórios de Inovação abertos à participação social para o desenvolvimento e experimentação de conceitos e soluções inovadoras.',
      f: 'Dados abertos governamentais são aqueles publicados exclusivamente em arquivos de imagem digitalizados sem possibilidade de processamento automatizado.',
      exp: 'Dados abertos (Open Data) exigem formatos estruturados, não proprietários e processáveis por máquina (ex.: CSV, JSON, XML).'
    },
    {
      sub: 'Política de Governança da Administração Pública Federal (Decreto nº 9.203/2017)',
      ref: 'Decreto nº 9.203/2017, Arts. 2º a 5º',
      t: 'Governança pública é o conjunto de mecanismos de liderança, estratégia e controle postos em prática para avaliar, direcionar e monitorar a gestão, com vistas à condução de políticas públicas e à prestação de serviços de interesse da sociedade, tendo como princípios a capacidade de resposta, a integridade, a confiabilidade, a melhoria regulatória, a prestação de contas e responsabilidade (accountability) e a transparência.',
      f: 'Segundo o Decreto nº 9.203/2017, a governança pública confunde-se com a execução operacional diária de tarefas rotineiras pelos estagiários.',
      exp: 'Governança (Avaliar, Direcionar e Monitorar - mecanismos de Liderança, Estratégia e Controle) não se confunde com Gestão (Planejar, Executar e Controlar as operações).'
    },
    {
      sub: 'Gestão de Riscos e Programas de Integridade (Decreto nº 9.203/2017)',
      ref: 'Decreto nº 9.203/2017, Arts. 17 a 19',
      t: 'A alta administração das organizações públicas federais deve instituir, manter, monitorar e aprimorar sistema de gestão de riscos e controles internos, além de instituir programa de integridade estruturado em medidas institucionais voltadas para a prevenção, detecção, punição e remediação de práticas de corrupção, fraudes, irregularidades e desvios éticos.',
      f: 'A responsabilidade pela gestão de riscos nas autarquias federais recai exclusivamente sobre o Tribunal de Contas da União, isentando a alta administração do órgão.',
      exp: 'Pelo modelo das Três Linhas (e Decreto 9.203/2017), a alta administração e os gestores operacionais são os proprietários dos riscos.'
    },
    {
      sub: 'Segurança Jurídica e Consequencialismo na LINDB (Arts. 20 a 30 e Decreto nº 9.830/2019)',
      ref: 'Decreto-Lei nº 4.657/1942 (LINDB), Arts. 20 a 28 e Decreto nº 9.830/2019',
      t: 'Nas esferas administrativa, controladora e judicial, não se decidirá com base em valores jurídicos abstratos sem que sejam consideradas as consequências práticas da decisão; a interpretação de normas sobre gestão pública considerará os obstáculos e as dificuldades reais do gestor; e o agente público responderá pessoalmente por suas decisões ou opiniões técnicas apenas em caso de dolo ou erro grosseiro.',
      f: 'Pelo Decreto nº 9.830/2019, qualquer divergência interpretativa razoável do servidor público configura erro grosseiro passível de ressarcimento pessoal ao erário.',
      exp: 'Art. 12, § 1º do Decreto 9.830/2019: Considera-se erro grosseiro aquele manifesto, evidente e inescusável praticado com culpa grave; o mero nexo causal ou divergência jurisprudencial não caracteriza erro grosseiro.'
    },
    {
      sub: 'Agenda Ambiental na Administração Pública (A3P) — Conceito e Os 6 Eixos Temáticos',
      ref: 'Programa A3P / Ministério do Meio Ambiente (MMA)',
      t: 'A Agenda Ambiental na Administração Pública (A3P) é um programa de adesão voluntária do Ministério do Meio Ambiente que estimula os órgãos públicos a implementarem práticas de sustentabilidade estruturadas em 6 eixos temáticos: 1) Uso racional dos recursos naturais e bens públicos; 2) Gestão adequada dos resíduos gerados; 3) Qualidade de vida no ambiente de trabalho; 4) Sensibilização e capacitação dos servidores; 5) Compras públicas sustentáveis; e 6) Construções sustentáveis.',
      f: 'A adesão ao Programa A3P do Ministério do Meio Ambiente é compulsória mediante cobrança de taxa ambiental mensal das universidades federais.',
      exp: 'A A3P tem caráter voluntário (formalizado por Termo de Adesão) e estrutura-se nos 6 eixos temáticos e na política dos 5 Rs.'
    },
    {
      sub: 'Política dos 5 Rs na Sustentabilidade Pública e Compras Sustentáveis',
      ref: 'Programa A3P e Lei nº 14.133/2021, Art. 11, IV',
      t: 'Na gestão socioambiental pública (A3P), aplica-se a pedagogia dos 5 Rs: Repensar os hábitos de consumo, Recusar produtos que agridam o meio ambiente, Reduzir o consumo supérfluo e o desperdício, Reaproveitar (Reutilizar) materiais e Reciclar os resíduos descartados, alinhando-se ao objetivo do desenvolvimento nacional sustentável nas licitações públicas.',
      f: 'O princípio das compras públicas sustentáveis obriga a Administração a adquirir sempre o produto de menor preço nominal, proibindo exigências de eficiência energética ou logística reversa.',
      exp: 'Tanto a A3P quanto a Lei 14.133/2021 (ciclo de vida do objeto e desenvolvimento nacional sustentável) determinam a consideração de critérios socioambientais nas contratações.'
    }
  ],

  // Aula 27: Ética no Serviço Público (Dec. 1.171/94), LAI (Lei 12.527/11) e LGPD (Lei 13.709/18)
  27: [
    {
      sub: 'Código de Ética do Servidor Público Federal (Decreto nº 1.171/1994): Regras Deontológicas e Moralidade',
      ref: 'Decreto nº 1.171/1994, Seção I',
      t: 'A dignidade, o decoro, o zelo, a eficácia e a consciência dos princípios morais são primados maiores que devem nortear o servidor público, seja no exercício do cargo ou função, ou fora dele; o servidor não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, mas principalmente entre o honesto e o desonesto.',
      f: 'Segundo o Decreto nº 1.171/1994, os atos e fatos da vida privada do servidor público não têm qualquer reflexo ou influência sobre o seu bom conceito na vida funcional.',
      exp: 'Inciso VI do Decreto 1.171/1994: "A função pública deve ser tida como exercício profissional e, portanto, se integra na vida particular de cada servidor público. Assim, os fatos e atos verificados na conduta do dia a dia em sua vida privada poderão acrescer ou diminuir o seu bom conceito na vida funcional."'
    },
    {
      sub: 'Conceito Amplo de Servidor Público para Fins Éticos e Penalidade Única de Censura',
      ref: 'Decreto nº 1.171/1994, Incisos XXII e XXIV',
      t: 'Para fins de apuração do comprometimento ético, entende-se por servidor público todo aquele que, por força de lei, contrato ou de qualquer ato jurídico, preste serviços de natureza permanente, temporária ou excepcional, ainda que sem retribuição financeira, desde que ligado direta ou indiretamente a qualquer órgão do poder estatal; e a única penalidade aplicável pela Comissão de Ética é a de CENSURA, fundamentada em parecer assinado por todos os seus integrantes, com ciência do faltoso.',
      f: 'A Comissão de Ética Setorial da UFBA tem competência para aplicar diretamente as penas de suspensão de 30 dias e demissão ao servidor que violar o Decreto nº 1.171/1994.',
      exp: 'Comissão de Ética aplica EXCLUSIVAMENTE a pena de CENSURA! Penas disciplinares (advertência, suspensão, demissão) são aplicadas pela autoridade administrativa competente via Sindicância/PAD (Lei 8.112/90).'
    },
    {
      sub: 'Vedações ao Servidor Público no Código de Ética (Decreto nº 1.171/1994, Seção III)',
      ref: 'Decreto nº 1.171/1994, Inciso XV',
      t: 'É vedado ao servidor público federal: usar o cargo ou função, facilidades, amizades, tempo, posição e influências para obter qualquer favorecimento para si ou para outrem; pleitear, solicitar, provocar, sugerir ou receber qualquer tipo de ajuda financeira, gratificação, prêmio, comissão, doação ou vantagem de qualquer espécie; alterar ou deturpar o teor de documentos; iludir ou tentar iludir qualquer pessoa que necessite do atendimento em serviços públicos; e apresentar-se embriagado no serviço ou fora dele habitualmente.',
      f: 'O Decreto nº 1.171/1994 permite que o servidor público receba comissões e brindes de alto valor de fornecedores desde que comunique verbalmente ao chefe imediato.',
      exp: 'Receber propina, comissão, doação ou vantagem de qualquer espécie para cumprimento de sua missão é expressamente vedado pelo inciso XV, "g".'
    },
    {
      sub: 'Sistema de Gestão da Ética do Poder Executivo Federal (Decreto nº 6.029/2007)',
      ref: 'Decreto nº 6.029/2007, Arts. 2º a 7º',
      t: 'Integram o Sistema de Gestão da Ética do Poder Executivo Federal a Comissão de Ética Pública (CEP - composta por 7 brasileiros designados pelo Presidente da República para mandatos de 3 anos, não coincidentes), as Comissões de Ética de que trata o Decreto 1.171/94 (compostas por 3 titulares e 3 suplentes escolhidos entre servidores ou empregados titulares de cargo efetivo ou emprego permanente, para mandatos de 3 anos) e as demais Comissões de Ética equivalentes.',
      f: 'Os membros da Comissão de Ética Pública (CEP) recebem remuneração extra equivalente ao subsídio de Ministro de Estado pelo exercício dessa função.',
      exp: 'Tanto na CEP quanto nas Comissões de Ética setoriais, a atuação não enseja qualquer remuneração adicional, sendo os trabalhos considerados prestação de relevante serviço público.'
    },
    {
      sub: 'Lei de Acesso à Informação — LAI (Lei nº 12.527/2011): Transparência Ativa vs. Passiva e Procedimento',
      ref: 'Lei nº 12.527/2011, Arts. 8º, 10 e 11',
      t: 'A Transparência Ativa é a divulgação espontânea de informações de interesse coletivo ou geral pelos órgãos públicos em sítios oficiais da internet, independentemente de requerimento; já a Transparência Passiva ocorre mediante pedido de acesso apresentado por qualquer interessado (sendo vedadas quaisquer exigências relativas aos motivos determinantes da solicitação!), devendo o acesso ser imediato ou concedido em prazo não superior a 20 dias (prorrogável por mais 10 dias mediante justificativa expressa).',
      f: 'Para obter informações sobre contratos públicos com base na Lei nº 12.527/2011, o cidadão deve comprovar interesse jurídico legítimo e justificar os motivos do seu pedido.',
      exp: 'Art. 10, § 3º da LAI: São VEDADAS quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público!'
    },
    {
      sub: 'Recursos Administrativos e Graus de Sigilo na LAI (Reservada, Secreta e Ultrassecreta)',
      ref: 'Lei nº 12.527/2011, Arts. 15, 24 e 31',
      t: 'No caso de indeferimento de acesso a informações ou às razões da negativa, poderá o interessado interpor recurso contra a decisão no prazo de 10 dias a contar da sua ciência, dirigido à autoridade hierarquicamente superior; quanto à classificação de informações sigilosas imprescindíveis à segurança da sociedade ou do Estado, os prazos máximos de restrição são: Ultrassecreta (25 anos), Secreta (15 anos) e Reservada (5 anos); já as informações pessoais (intimidade, vida privada, honra e imagem) têm seu acesso restrito pelo prazo máximo de 100 anos.',
      f: 'Pela Lei de Acesso à Informação, a informação classificada no grau Reservado permanece em sigilo pelo prazo máximo de 15 anos.',
      exp: 'Prazos máximos de sigilo na LAI (Art. 24): Reservada = 5 anos; Secreta = 15 anos; Ultrassecreta = 25 anos. Informações pessoais (Art. 31) = até 100 anos.'
    },
    {
      sub: 'LGPD (Lei nº 13.709/2018): Conceitos de Dado Pessoal, Dado Sensível, Anonimizado e Agentes de Tratamento',
      ref: 'Lei nº 13.709/2018 (LGPD), Art. 5º',
      t: 'Na LGPD: Dado Pessoal é a informação relacionada a pessoa natural identificada ou identificável; Dado Pessoal Sensível é o dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico; Controlador é a pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento; Operador é quem realiza o tratamento em nome do controlador; e Encarregado (DPO) é o canal de comunicação com os titulares e a ANPD.',
      f: 'Nos termos da LGPD, o número do CPF, o endereço residencial e a remuneração bruta do servidor público são classificados como dados pessoais sensíveis.',
      exp: 'CPF, nome, e-mail e salário são dados pessoais comuns (e no caso da remuneração pública, sujeitos à transparência ativa da LAI), NÃO integrando o rol taxativo de dados sensíveis do art. 5º, II da LGPD.'
    },
    {
      sub: 'Tratamento de Dados Pessoais pelo Poder Público (Arts. 23 a 30 da LGPD)',
      ref: 'Lei nº 13.709/2018 (LGPD), Arts. 7º, III e 23 a 26',
      t: 'O tratamento de dados pessoais pelas pessoas jurídicas de direito público deverá ser realizado para o atendimento de sua finalidade pública, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público (dispensado o consentimento do titular quando para execução de políticas públicas previstas em leis e regulamentos), desde que sejam informadas as hipóteses em veículos de fácil acesso e seja indicado um Encarregado.',
      f: 'As universidades federais só podem tratar dados acadêmicos de alunos para emissão de histórico escolar mediante assinatura de contrato comercial privado e pagamento ao titular.',
      exp: 'Pelo art. 7º, II e III e art. 23 da LGPD, a Administração Pública trata dados pessoais com base no cumprimento de obrigação legal/regulatória e na execução de políticas públicas, sem depender de consentimento para suas atribuições legais.'
    }
  ],

  // Aula 28: [Assistente UFBA] Administração Geral: Estruturas Organizacionais, Departamentalização e PODC
  28: [
    {
      sub: 'As Quatro Funções Administrativas do Processo Organizacional (PODC)',
      ref: 'Teoria Neoclássica da Administração (Peter Drucker e Idalberto Chiavenato)',
      t: 'O processo organizacional é composto pela interação dinâmica e cíclica de quatro funções administrativas básicas: Planejar (definir objetivos futuros e escolher os meios/cursos de ação para alcançá-los), Organizar (dividir o trabalho, agrupar atividades em órgãos, definir cargos/autoridade e alocar recursos), Dirigir (orientar, comunicar, motivar e liderar as pessoas na execução) e Controlar (definir padrões, medir o desempenho, comparar com o planejado e corrigir desvios).',
      f: 'Dentro do processo administrativo PODC, a função de Dirigir é responsável por desenhar o organograma formal da instituição e realizar o tombamento patrimonial.',
      exp: 'Desenhar o organograma e distribuir tarefas/recursos = ORGANIZAR; liderar e motivar pessoas = DIRIGIR.'
    },
    {
      sub: 'Níveis Organizacionais e Níveis de Planejamento (Estratégico, Tático e Operacional)',
      ref: 'Administração Geral — Planejamento',
      t: 'O Planejamento Estratégico é elaborado no nível institucional (cúpula), abrange a organização como um todo, é voltado para o longo prazo e interage fortemente com o ambiente externo (análise SWOT: Forças/Fraquezas internas e Oportunidades/Ameaças externas); o Planejamento Tático ocorre no nível intermediário (departamental/gerencial), tem médio prazo e decompõe a estratégia por unidade; e o Planejamento Operacional ocorre na base operacional, tem curto prazo e detalha tarefas, rotinas e procedimentos específicos.',
      f: 'Na Análise SWOT (FOFA), as Oportunidades e Ameaças constituem variáveis internas totalmente controláveis pela direção da empresa.',
      exp: 'Na Matriz SWOT (FOFA): Forças e Fraquezas = Ambiente INTERNO (controláveis); Oportunidades e Ameaças = Ambiente EXTERNO (não controláveis).'
    },
    {
      sub: 'Eficiência, Eficácia e Efetividade na Administração Pública',
      ref: 'Indicadores de Desempenho Organizacional (3 Es)',
      t: 'A Eficiência refere-se à relação entre os insumos utilizados e os produtos obtidos, focando nos meios, nos métodos, na racionalidade e na redução de custos ("fazer corretamente as coisas"); a Eficácia refere-se ao grau de alcance das metas e objetivos planejados ("fazer a coisa certa", foco nos resultados); e a Efetividade refere-se aos impactos reais e transformações positivas e duradouras geradas na sociedade ou no público-alvo.',
      f: 'Uma equipe administrativa que cumpre a meta de emitir 100 certidões no prazo, porém desperdiçando o triplo do papel e de horas extras previstas, foi altamente eficiente, embora ineficaz.',
      exp: 'Como atingiu a meta (100 certidões) mas desperdiçou recursos, a equipe foi EFICAZ (atingiu o resultado), porém INEFICIENTE (usou mal os recursos).'
    },
    {
      sub: 'Estrutura Linear vs. Estrutura Funcional vs. Estrutura Linha-Staff',
      ref: 'Estruturas Organizacionais Clássicas',
      t: 'A Estrutura Linear baseia-se na unidade de comando (cada subordinado responde a um único chefe), linhas formais de comunicação e centralização; a Estrutura Funcional aplica o princípio da especialização (autoridade funcional dividida, em que o subordinado se reporta a vários chefes especialistas, cada qual em sua área); e a Estrutura Linha-Staff combina a unidade de comando dos órgãos de linha (execução e decisão) com a consultoria técnica especializada dos órgãos de staff (assessoria, que aconselha mas não dá ordens diretas à linha).',
      f: 'Na estrutura Linha-Staff, os órgãos de assessoria (staff) possuem autoridade hierárquica de comando superior para demitir e dar ordens diretas aos gerentes de linha.',
      exp: 'Órgãos de Linha = autoridade linear de comando/execução; Órgãos de Staff (Assessoria) = autoridade técnica funcional de aconselhamento, consultoria e recomendação (sem comando hierárquico sobre a linha).'
    },
    {
      sub: 'Estrutura Matricial e Estrutura por Projetos',
      ref: 'Estruturas Organizacionais Modernas',
      t: 'A Estrutura Matricial é um modelo híbrido que sobrepõe duas formas de departamentalização (geralmente a departamentalização Funcional permanente com a departamentalização por Projetos ou Produtos temporários), proporcionando alta flexibilidade técnica e coordenação interdisciplinar, mas quebrando o princípio clássico da unidade de comando ao instituir a dupla subordinação (ao gerente funcional e ao gerente do projeto).',
      f: 'A principal característica da Estrutura Matricial é a preservação absoluta e inflexível da unidade de comando militar.',
      exp: 'A Estrutura Matricial sacrifica a unidade de comando (gerando dupla subordinação) em troca de flexibilidade e aproveitamento multidisciplinar de especialistas.'
    },
    {
      sub: 'Critérios de Departamentalização (Funcional, por Produtos/Serviços, Geográfica, por Clientes e por Processos)',
      ref: 'Teoria Neoclássica — Departamentalização',
      t: 'A Departamentalização consiste no agrupamento horizontal de atividades em unidades organizacionais (vertical = hierarquia; horizontal = departamentalização): é Funcional quando agrupa especialistas da mesma função (Finanças, RH, TI); Geográfica (Territorial) quando agrupa por região física de atuação; por Clientes quando agrupa segundo o perfil/necessidades específicas do público atendido; por Produtos/Serviços quando agrupa pelo resultado entregue; e por Processos quando agrupa conforme as etapas da cadeia produtiva.',
      f: 'Quando uma universidade cria pró-reitorias específicas para atender separadamente estudantes de Graduação, estudantes de Pós-Graduação e estudantes de Assistência Estudantil, adota exclusivamente a departamentalização geográfica.',
      exp: 'Agrupar unidades de acordo com o tipo/grupo de usuário atendido (graduando vs. pós-graduando; criança vs. adulto; pessoa física vs. jurídica) caracteriza a Departamentalização por CLIENTES (ou Usuários).'
    },
    {
      sub: 'Amplitude Administrativa (Span of Control): Estruturas Altas vs. Estruturas Achatadas',
      ref: 'Desenho Organizacional',
      t: 'A Amplitude Administrativa (ou Amplitude de Controle) refere-se ao número de subordinados que um administrador pode supervisionar direta e eficazmente: uma amplitude estreita (pequena) gera uma estrutura organizacional Alta/Verticalizada (com muitos níveis hierárquicos, maior custo de chefias e comunicação mais lenta), enquanto uma amplitude ampla (grande) gera uma estrutura Achatada/Horizontalizada (com poucos níveis hierárquicos e maior delegação).',
      f: 'Quanto maior for a amplitude administrativa de controle dos chefes, maior será o número de níveis hierárquicos verticais da organização.',
      exp: 'Relação inversa para um mesmo total de funcionários: Maior amplitude de controle (mais subordinados por chefe) = MENOS níveis hierárquicos (estrutura achatada/horizontal).'
    },
    {
      sub: 'As Quatro Etapas e os Três Momentos da Função Controle (Prévio, Concomitante e Posterior)',
      ref: 'Função Administrativa de Controle',
      t: 'O processo de controle compõe-se de 4 etapas (1-Estabelecimento de padrões/objetivos; 2-Mensuração do desempenho; 3-Comparação do desempenho com o padrão; 4-Ação corretiva) e classifica-se quanto ao momento em: Controle Prévio ou Preventivo (ex ante, antes da execução, como inspeção de insumos e orçamento), Controle Concomitante ou Simultâneo (durante a execução em tempo real) e Controle Posterior ou Corretivo (ex post, após a conclusão da atividade, avaliando os resultados finais).',
      f: 'O controle preventivo (prévio) ocorre exclusivamente após o encerramento do exercício financeiro para punir desvios já consumados.',
      exp: 'Prévio (Preventivo) = antes da ação; Concomitante (Simultâneo) = durante a ação; Posterior (Feedback/Corretivo) = após a ação.'
    }
  ],

  // Aula 29: [Assistente UFBA] Gestão de Processos (BPM), Gestão da Qualidade (PDCA, 5S, Ferramentas) e Projetos
  29: [
    {
      sub: 'Gestão por Processos (BPM): Conceito, Hierarquia e Classificação (Primários, de Suporte e Gerenciais)',
      ref: 'Guia BPM CBOK',
      t: 'Processo é uma agregação lógica de atividades que transforma entradas (inputs) em saídas (outputs) de maior valor para um cliente; na hierarquia de processos (Macroprocesso -> Processo -> Subprocesso -> Atividade -> Tarefa), os processos classificam-se em: 1) Primários (Finalísticos ou de Negócio, que entregam valor diretamente ao cliente externo/cidadão); 2) de Suporte ou Apoio (que dão sustentação interna aos primários, como RH, Compras e TI); e 3) de Gerenciamento (que medem, monitoram e controlam a estratégia).',
      f: 'Na hierarquia de processos organizacionais, a Tarefa é o nível mais amplo e estratégico, englobando diversos Macroprocessos.',
      exp: 'Do mais amplo ao mais específico: Macroprocesso -> Processo -> Subprocesso -> Atividade -> Tarefa (ou Passo).'
    },
    {
      sub: 'Modelagem de Processos: Fluxograma e Notação BPMN',
      ref: 'BPM CBOK e Simbologia de Fluxograma',
      t: 'No mapeamento de processos por Fluxograma ou BPMN (Business Process Model and Notation): o Retângulo representa uma Atividade/Operação; o Losango (Gateway) representa um ponto de Decisão ou ramificação condicional; o Círculo/Oval representa o evento de Início ou Fim; as Setas indicam a direção do fluxo de sequência; e as Raias (Swimlanes, contidas dentro de uma Piscina/Pool) identificam os diferentes setores ou cargos responsáveis por cada etapa.',
      f: 'Em um fluxograma administrativo padrão, o símbolo geométrico do Losango é utilizado para representar o início e o encerramento definitivo do processo.',
      exp: 'Memorização essencial em fluxograma: Losango = Decisão (Sim/Não); Retângulo = Operação/Atividade; Oval/Círculo = Início/Fim.'
    },
    {
      sub: 'Ciclo PDCA (Deming / Shewhart) e Ciclo SDCA',
      ref: 'Gestão da Qualidade Total (TQM)',
      t: 'O Ciclo PDCA é o método gerencial de melhoria contínua composto por 4 etapas: Plan (Planejar: identificar o problema, analisar causas e definir metas e plano de ação), Do (Executar: treinar/capacitar as pessoas e executar o plano), Check (Verificar: comparar os resultados alcançados na execução com as metas planejadas) e Act (Agir corretivamente para eliminar desvios ou padronizar o processo bem-sucedido no ciclo SDCA - Standard, Do, Check, Act).',
      f: 'No Ciclo PDCA, a etapa de capacitação e treinamento da equipe para executar o plano ocorre apenas na última fase (Act), após o encerramento da verificação.',
      exp: 'O treinamento/capacitação faz parte da etapa DO (Execução), preparando a equipe imediatamente antes de executar o plano.'
    },
    {
      sub: 'As 7 Ferramentas Clássicas da Qualidade: Diagrama de Ishikawa (6M) e Diagrama de Pareto (80/20)',
      ref: 'Kaoru Ishikawa e Joseph Juran',
      t: 'O Diagrama de Ishikawa (Diagrama de Causa e Efeito ou Espinha de Peixe) estrutura a identificação das causas raízes que geram um problema/efeito, agrupando-as geralmente nos 6M (Método, Matéria-prima, Mão de obra, Máquinas, Medição e Meio ambiente); já o Diagrama de Pareto é um gráfico de barras ordenadas de forma decrescente com linha acumulada que aplica o Princípio de Pareto (80/20), permitindo priorizar as poucas causas vitais que geram a maior parte dos problemas.',
      f: 'O Diagrama de Ishikawa é utilizado para calcular a correlação estatística linear entre duas variáveis numéricas em um plano cartesiano.',
      exp: 'Correlação entre duas variáveis numéricas = Diagrama de Dispersão. Causas raízes (6M) = Diagrama de Ishikawa (Espinha de Peixe). Priorização 80/20 = Diagrama de Pareto.'
    },
    {
      sub: 'Outras Ferramentas da Qualidade: Folha de Verificação, Histograma, Carta de Controle, Brainstorming, 5W2H e GUT',
      ref: 'Ferramentas de Gestão da Qualidade',
      t: 'A Folha de Verificação (Checklist) padroniza a coleta de dados; o Histograma mostra a distribuição de frequência de dados contínuos em barras; a Carta de Controle monitora a variabilidade de um processo ao longo do tempo entre Limites Superior e Inferior de Controle; o 5W2H estrutura planos de ação (What, Why, Where, When, Who, How, How much); e a Matriz GUT prioriza problemas multiplicando notas de 1 a 5 para Gravidade, Urgência e Tendência.',
      f: 'Na ferramenta 5W2H, os dois "H" correspondem às perguntas "Histórico do problema" e "Hierarquia do setor".',
      exp: 'No 5W2H: 5W = What (O quê), Why (Por quê), Where (Onde), When (Quando), Who (Quem); 2H = How (Como) e How much (Quanto custa).'
    },
    {
      sub: 'Programa 5S de Qualidade Total',
      ref: 'Kaoru Ishikawa — Os 5 Sensos Japoneses',
      t: 'O Programa 5S prepara o ambiente organizacional para a qualidade por meio de cinco sensos: 1) Seiri (Senso de Utilização/Descarte: separar o necessário do desnecessário); 2) Seiton (Senso de Ordenação/Organização: definir e identificar o local adequado para cada item); 3) Seiso (Senso de Limpeza: manter o ambiente limpo e eliminar fontes de sujeira); 4) Seiketsu (Senso de Padronização/Saúde e Higiene: conservar padrões e condições favoráveis à saúde física e mental); e 5) Shitsuke (Senso de Autodisciplina: hábito de cumprir as normas espontaneamente).',
      f: 'No Programa 5S, o senso Seiri refere-se à demissão em massa de servidores, enquanto o senso Seiso refere-se à auditoria contábil.',
      exp: 'Mnemônico dos 5S: Seiri (Utilização), Seiton (Ordenação), Seiso (Limpeza), Seiketsu (Padronização/Saúde) e Shitsuke (Autodisciplina).'
    },
    {
      sub: 'Melhoria Contínua (Kaizen) vs. Reengenharia de Processos (Hammer & Champy)',
      ref: 'Gestão da Qualidade vs. Reengenharia',
      t: 'Enquanto o Kaizen (melhoria contínua) promove o aperfeiçoamento gradual, incremental, participativo e constante dos processos já existentes (de baixo para cima), a Reengenharia de Processos propõe o repensar fundamental e a reestruturação radical dos processos empresariais ("começar do zero" / folha em branco, de cima para baixo) para alcançar melhorias drásticas em custos, qualidade, atendimento e velocidade.',
      f: 'A Reengenharia de Processos consiste em preservar intacta a estrutura burocrática antiga, fazendo apenas pequenos ajustes cosméticos ao longo de vinte anos.',
      exp: 'Kaizen = mudança incremental, gradual e contínua; Reengenharia = mudança radical, drástica e fundamental (redesenho do zero).'
    },
    {
      sub: 'Gestão de Projetos (PMBOK): Conceito, Tripla Restrição, Grupos de Processos e EAP (WBS)',
      ref: 'Guia PMBOK (Project Management Institute - PMI)',
      t: 'Projeto é um esforço temporário (com início e fim definidos) empreendido para criar um produto, serviço ou resultado único (exclusivo), diferenciando-se das operações contínuas/rotineiras; o gerenciamento de projetos tradicionalmente equilibra restrições de Escopo, Tempo, Custo e Qualidade ao longo de 5 grupos de processos (Iniciação, Planejamento, Execução, Monitoramento/Controle e Encerramento), utilizando a Estrutura Analítica do Projeto (EAP ou WBS) para decompor hierarquicamente as entregas do escopo.',
      f: 'A Estrutura Analítica do Projeto (EAP / WBS) é o documento contábil que registra a folha de pagamento perpétua dos servidores aposentados.',
      exp: 'A EAP (Estrutura Analítica do Projeto / Work Breakdown Structure) é a decomposição hierárquica orientada às entregas do trabalho a ser executado pela equipe para atingir os objetivos do projeto.'
    }
  ],

  // Aula 30: [Assistente UFBA] Gestão de Pessoas, Comportamento, Motivação (Maslow/Herzberg), Liderança e Clima
  30: [
    {
      sub: 'Os Seis Processos Básicos da Gestão de Pessoas (Chiavenato)',
      ref: 'Idalberto Chiavenato (Gestão de Pessoas)',
      t: 'A moderna Gestão de Pessoas compreende 6 processos interligados: 1) Processos de Agregar pessoas (recrutamento e seleção); 2) Processos de Aplicar pessoas (desenho de cargos, orientação/integração e avaliação de desempenho); 3) Processos de Recompensar pessoas (remuneração, benefícios e incentivos); 4) Processos de Desenvolver pessoas (treinamento, desenvolvimento, aprendizagem e gestão de carreira); 5) Processos de Manter pessoas (higiene, segurança do trabalho, qualidade de vida e relações sindicais); e 6) Processos de Monitorar pessoas (bancos de dados e sistemas de informações gerenciais de RH).',
      f: 'Na classificação de Chiavenato, o Treinamento e Desenvolvimento de servidores pertence ao processo de Agregar pessoas, enquanto o Recrutamento pertence ao processo de Monitorar.',
      exp: 'Agregar = Recrutamento e Seleção; Aplicar = Desenho de Cargos e Avaliação de Desempenho; Desenvolver = Treinamento e Desenvolvimento.'
    },
    {
      sub: 'Gestão por Competências (CHA: Conhecimentos, Habilidades e Atitudes)',
      ref: 'Gestão Estratégica de Pessoas (Fleury, Dutra e Leme)',
      t: 'Competência é o conjunto sinérgico de Conhecimentos (Saber: domínio teórico, técnico e conceitual), Habilidades (Saber fazer: capacidade prática de aplicar o conhecimento e resolver problemas) e Atitudes (Querer fazer: comportamento, proatividade, valores e motivação em ação) que agrega valor à organização e ao indivíduo; o mapeamento de competências identifica a lacuna (gap) entre as competências necessárias à estratégia e as competências atuais dos servidores.',
      f: 'No acrônimo CHA da gestão por competências, a letra "A" refere-se exclusivamente à Antiguidade no cargo público.',
      exp: 'Tríade CHA: C = Conhecimento (Saber); H = Habilidade (Saber fazer); A = Atitude (Querer fazer / Agir).'
    },
    {
      sub: 'Hierarquia das Necessidades de Abraham Maslow',
      ref: 'Teorias de Conteúdo da Motivação — Maslow',
      t: 'A teoria de Maslow dispõe as necessidades humanas em uma pirâmide de cinco níveis (da base para o topo): 1) Fisiológicas (alimentação, sono, abrigo); 2) Segurança (proteção, estabilidade no emprego); 3) Sociais ou de Associação (amizade, afeto, aceitação pelo grupo); 4) Estima (autoconfiança, reconhecimento, prestígio, status); e 5) Autorrealização (autodesenvolvimento pleno e alcance do próprio potencial), sendo as duas primeiras primárias e as três últimas secundárias.',
      f: 'Para Abraham Maslow, a necessidade fisiológica situa-se no topo da pirâmide e só é ativada depois que o indivíduo alcança a autorrealização plena.',
      exp: 'Base da pirâmide de Maslow = Fisiológicas -> Segurança -> Sociais -> Estima -> Topo = Autorrealização.'
    },
    {
      sub: 'Teoria dos Dois Fatores de Frederick Herzberg (Higiênicos vs. Motivacionais)',
      ref: 'Teorias de Conteúdo da Motivação — Herzberg',
      t: 'Herzberg distingue dois grupos de fatores: 1) Fatores Higiênicos ou Extrínsecos (localizados no ambiente/contexto que rodeia o cargo, como salário, benefícios, condições físicas de trabalho, políticas da empresa e relacionamento com o chefe), os quais apenas evitam a insatisfação quando ótimos, mas não motivam; e 2) Fatores Motivacionais ou Intrínsecos (relacionados ao conteúdo do próprio cargo, como realização, reconhecimento, responsabilidade, autonomia e crescimento), que geram satisfação duradoura e motivação.',
      f: 'Segundo a Teoria dos Dois Fatores de Herzberg, o salário e o plano de saúde são os únicos fatores motivacionais intrínsecos capazes de gerar satisfação duradoura.',
      exp: 'Pegadinha mais cobrada de Gestão de Pessoas! Em Herzberg, Salário e Condições de Trabalho são Fatores HIGIÊNICOS (extrínsecos): quando bons, apenas evitam a insatisfação, mas não geram motivação intrínseca!'
    },
    {
      sub: 'Teorias X e Y de McGregor, Necessidades Adquiridas de McClelland e Expectativa de Vroom',
      ref: 'Teorias Motivacionais Clássicas e de Processo',
      t: 'Na Teoria X e Y de McGregor, a Teoria X pressupõe que as pessoas são preguiçosas e precisam de controle coercitivo, enquanto a Teoria Y pressupõe que as pessoas são criativas, responsáveis e automotivadas; na teoria de McClelland, destacam-se três necessidades adquiridas socialmente: Realização (nAch), Afiliação (nAff) e Poder (nPow); e na Teoria da Expectativa de Victor Vroom, a motivação resulta do produto entre Valência (atratividade da recompensa), Expectativa (esforço gera desempenho) e Instrumentalidade (desempenho gera recompensa).',
      f: 'Na Teoria da Expectativa de Victor Vroom, a motivação independe da percepção do trabalhador sobre a relação entre desempenho e recompensa.',
      exp: 'Em Vroom (Fórmula: Motivação = V × E × I), se qualquer um dos três fatores (Valência, Expectativa ou Instrumentalidade) for zero, a motivação para aquela meta será nula.'
    },
    {
      sub: 'Estilos de Liderança: Autocrática, Democrática e Liberal (Kurt Lewin) e Grid Gerencial (Blake e Mouton)',
      ref: 'Teorias Comportamentais de Liderança',
      t: 'Nos estudos de Kurt Lewin: o líder Autocrático centraliza as decisões e impõe ordens sem participação do grupo; o líder Democrático debate diretrizes, estimula a participação da equipe e oferece apoio objetivo; e o líder Liberal (Laissez-Faire) delega totalmente as decisões ao grupo com mínima intervenção. Já no Grid Gerencial de Blake e Mouton (eixos de preocupação com a Produção vs. preocupação com as Pessoas, de 1 a 9), o estilo 9,9 (Gerência em Equipe) representa a excelência máxima em ambos os eixos.',
      f: 'No Grid Gerencial de Blake e Mouton, o estilo 1,1 (Gerência Empobrecida) é considerado o modelo ideal de alto desempenho e engajamento.',
      exp: 'No Grid de Blake e Mouton: (1,1) = Empobrecida; (9,1) = Autoridade-Obediência (só tarefa); (1,9) = Clube Campestre (só pessoas); (5,5) = Homem Organizacional (meio-termo); (9,9) = Equipe (máximo foco em pessoas e produção).'
    },
    {
      sub: 'Liderança Situacional (Hersey e Blanchard) e Liderança Transacional vs. Transformacional',
      ref: 'Teorias Contingenciais e Contemporâneas de Liderança',
      t: 'Na Liderança Situacional de Hersey e Blanchard, não existe um único estilo de liderança melhor para todas as situações: o líder deve adaptar seu comportamento (Determinar/Dirigir E1, Persuadir/Treinar E2, Compartilhar/Apoiar E3 ou Delegar E4) ao nível de maturidade (capacidade técnica + disposição/motivação) dos seus liderados; já a Liderança Transformacional inspira os liderados a transcenderem seus interesses pessoais em prol da missão organizacional, diferentemente da Liderança Transacional (baseada em trocas de recompensas por metas).',
      f: 'Segundo Hersey e Blanchard, quando o subordinado possui baixíssima maturidade técnica e nenhuma experiência na tarefa, o líder deve adotar imediatamente o estilo Delegar (E4).',
      exp: 'Baixa maturidade (M1: incapaz e inseguro) exige o estilo E1 (Determinar/Dirigir: alto foco na tarefa). Só se adota E4 (Delegar) quando o liderado atinge alta maturidade (M4: capaz e motivado).'
    },
    {
      sub: 'Trabalho em Equipe (Grupo vs. Equipe), Gestão de Conflitos e Clima vs. Cultura Organizacional',
      ref: 'Comportamento Organizacional (Stephen Robbins)',
      t: 'Enquanto o Grupo de Trabalho apenas interage para compartilhar informações com responsabilidade individual e sinergia neutra, a Equipe de Trabalho gera sinergia positiva por meio do esforço coordenado, responsabilidade individual e mútua, e habilidades complementares; ademais, a Cultura Organizacional é o sistema profundo e duradouro de valores, crenças e pressupostos compartilhados (artefatos visíveis, valores compartilhados e pressupostos básicos - Schein), enquanto o Clima Organizacional é a percepção temporal e mutável dos servidores sobre o ambiente de trabalho.',
      f: 'O Clima Organizacional é imutável no curto prazo, enquanto a Cultura Organizacional muda diariamente a cada pesquisa de satisfação.',
      exp: 'Clima = atmosfera psicológica momentânea (fotografia de curto prazo, medida por Pesquisa de Clima); Cultura = personalidade profunda da organização construída no longo prazo.'
    }
  ],

  // Aula 31: [Assistente UFBA] Administração de Recursos Materiais, Estoques (Curva ABC, Ponto de Pedido) e Almoxarifado
  31: [
    {
      sub: 'Atributos e Etapas da Classificação e Codificação de Materiais',
      ref: 'João José Viana e Marco Aurélio Dias (Administração de Materiais)',
      t: 'Um sistema de classificação de materiais deve possuir três atributos essenciais: Abrangência, Flexibilidade e Praticidade; e desenvolve-se em 6 etapas: Catalogação (arrolamento de todos os itens), Simplificação (redução da variedade de itens que atendem ao mesmo fim), Especificação (descrição minuciosa do material), Normalização (normas técnicas de uso), Padronização (uniformização de pesos, medidas e formatos) e Codificação (atribuição de código numérico/alfanumérico, como o FSC de 11 dígitos).',
      f: 'A etapa da Simplificação consiste em aumentar o número de marcas e tamanhos diferentes de um mesmo insumo no almoxarifado para ampliar a complexidade do estoque.',
      exp: 'Simplificação = reduzir a diversidade de itens similares que cumprem a mesma finalidade.'
    },
    {
      sub: 'Classificação ABC (Princípio de Pareto) vs. Classificação XYZ (Criticidade Operacional)',
      ref: 'Gestão de Estoques — Curva ABC e Criticidade XYZ',
      t: 'Na Classificação ABC (baseada no valor financeiro de consumo anual = quantidade consumida × preço unitário): os itens Classe A representam a menor parcela física (~20% dos itens) mas respondem pela maior parte do valor financeiro (~80% do valor, exigindo controle rigoroso); os Classe B são intermediários (~30% dos itens e ~15% do valor); e os Classe C representam a maioria física (~50% dos itens) mas pequeno valor financeiro (~5%). Já na Classificação XYZ (baseada na importância/criticidade operacional): X = baixa criticidade (fácil substituição), Y = média criticidade e Z = alta criticidade (item imprescindível cuja falta paralisa atividades essenciais!).',
      f: 'Na classificação por criticidade operacional XYZ, os materiais da Classe X são os mais vitais e insubstituíveis da instituição, enquanto os da Classe Z são supérfluos.',
      exp: 'Atenção máxima: Na Curva ABC (Valor financeiro), o mais importante é o "A"; na Classificação XYZ (Criticidade operacional), o mais crítico/vital cuja falta paralisa a operação é o "Z"!'
    },
    {
      sub: 'Níveis de Ressuprimento: Consumo Médio, Tempo de Reposição (Lead Time), Estoque Mínimo e Ponto de Pedido',
      ref: 'Cálculo de Gestão de Estoques',
      t: 'O Tempo de Reposição (TR ou Lead Time) compreende o intervalo desde a emissão do pedido de compra até a disponibilização física do item no almoxarifado; o Estoque Mínimo (ou de Segurança - EMin) protege a organização contra atrasos na entrega ou aumentos imprevistos de demanda; e o Ponto de Pedido (PP) é o nível de saldo em estoque que dispara uma nova encomenda, calculado pela fórmula: PP = (Consumo Médio × Tempo de Reposição) + Estoque Mínimo.',
      f: 'O Ponto de Pedido é calculado subtraindo-se o Estoque Mínimo do produto entre o Consumo Médio e o Tempo de Reposição.',
      exp: 'Fórmula clássica obrigatória: PP = (C × TR) + EMin. Quando o estoque cai até atingir o PP, emite-se novo pedido de compra!'
    },
    {
      sub: 'Lote Econômico de Compra (LEC), Giro de Estoque e Cobertura de Estoque',
      ref: 'Modelos de Gestão de Estoques',
      t: 'O Lote Econômico de Compra (LEC) é a quantidade ideal a ser adquirida em cada pedido que minimiza o Custo Total de Estocagem (no ponto exato em que o Custo de Armazenagem iguala-se ao Custo de Pedido); o Giro de Estoque (Rotatividade) mede quantas vezes o estoque foi renovado no período (Giro = Consumo Anual / Estoque Médio); e a Cobertura (Antigiro) indica por quantos dias/meses o estoque médio supre a demanda.',
      f: 'Quanto menor for o Giro de Estoque de um material perecível, mais rápida e eficiente está sendo a sua renovação no almoxarifado.',
      exp: 'Maior Giro de Estoque = maior velocidade de renovação do estoque (menos capital empatado). Estoque Médio = (Lote de Compra / 2) + Estoque Mínimo.'
    },
    {
      sub: 'Avaliação de Estoques (PEPS, UEPS e Custo Médio Ponderado) e Critério de Saída Física',
      ref: 'Administração de Materiais e Lei nº 4.320/1964',
      t: 'Na movimentação física e contábil de almoxarifados: o método PEPS (FIFO - Primeiro que Entra, Primeiro que Sai) avalia as saídas pelo custo dos lotes mais antigos, mantendo o estoque final valorado pelos preços mais recentes (sendo indispensável na gestão física de itens perecíveis e medicamentos com prazo de validade — FEFO: Primeiro que Vence, Primeiro que Sai); e o Custo Médio Ponderado é o padrão contábil adotado pela Administração Pública (Art. 106, III da Lei 4.320/64), sendo vedado o UEPS (LIFO).',
      f: 'Em um contexto de inflação (preços crescentes), o método PEPS apresenta Custo das Mercadorias Vendidas maior e Estoque Final menor do que o método UEPS.',
      exp: 'Com inflação (preços subindo): como o PEPS baixa primeiro os lotes antigos (mais baratos) e deixa no estoque os novos (mais caros), o PEPS gera MENOR custo de saída e MAIOR valor de Estoque Final.'
    },
    {
      sub: 'Compras no Setor Público e Recebimento no Almoxarifado (Provisório, Quantitativo, Qualitativo e Definitivo)',
      ref: 'IN SEDAP nº 205/1988 e Lei nº 14.133/2021, Art. 140',
      t: 'O recebimento de materiais no almoxarifado compreende quatro etapas: 1) Entrada Provisória (recepção dos volumes e assinatura no conhecimento de transporte, sem implicar aceitação); 2) Conferência Quantitativa (verificação física da quantidade entregue em relação à nota fiscal, recomendando-se a "conferência cega", na qual o conferente conta sem conhecer previamente a quantidade da nota); 3) Conferência Qualitativa (inspeção técnica das especificações); e 4) Regularização/Aceitação Definitiva (atesto e entrada no estoque).',
      f: 'A simples assinatura do almoxarife no canhoto da transportadora no ato da descarga do caminhão configura aceitação qualitativa definitiva e irretratável do material.',
      exp: 'Art. 140 da Lei 14.133/2021 e IN 205/1988: O objeto do contrato será recebido provisoriamente (para efeito de posterior verificação da conformidade) e definitivamente (após comprovação da qualidade e quantidade).'
    },
    {
      sub: 'Armazenagem, Layout de Almoxarifado e Endereçamento de Estoque',
      ref: 'IN SEDAP nº 205/1988 e Técnicas de Armazenagem',
      t: 'As boas práticas de armazenagem em almoxarifados públicos determinam que: os materiais jamais devem ser estocados em contato direto com o piso (devem ficar sobre estrados/pallets); os itens de maior frequência de saída (alto giro) devem ficar próximos à porta de expedição; os materiais pesados e volumosos devem ocupar as prateleiras inferiores; e os produtos inflamáveis ou tóxicos devem ficar em local isolado e ventilado.',
      f: 'Para otimizar o espaço no almoxarifado da universidade, as caixas mais pesadas de ferro e equipamentos devem ser empilhadas no topo das estantes mais altas e distantes da porta.',
      exp: 'Regra de segurança e ergonomia: materiais pesados e de grande volume ficam nas partes baixas/inferiores e próximos à saída; itens leves e de baixo giro ficam nas partes superiores/ao fundo.'
    },
    {
      sub: 'Gestão Patrimonial: Tombamento, Inventário Físico (Tipos) e Baixa/Alienação de Bens Permanentes',
      ref: 'IN SEDAP nº 205/1988 e MCASP',
      t: 'Material Permanente é aquele que, em razão de seu uso corrente, não perde a sua identidade física e/ou tem durabilidade superior a 2 anos; o Tombamento é o procedimento administrativo de inclusão do bem permanente no controle patrimonial com atribuição de número de registro único e afixação de plaqueta/código; e o Inventário Físico classifica-se em: Inicial (na criação da unidade), de Transferência de Responsabilidade (mudança de dirigente), de Extinção/Transformação, Eventual (a qualquer tempo por auditoria) e Anual (no encerramento de cada exercício).',
      f: 'Resmas de papel A4, canetas esferográficas e cartuchos de tinta descartáveis devem receber plaqueta metálica de tombamento patrimonial individualizado.',
      exp: 'Tombamento aplica-se exclusivamente aos Bens Permanentes (Imobilizado); materiais de consumo são controlados no almoxarifado sem número de tombamento patrimonial.'
    }
  ],

  // Aula 32: [Assistente UFBA] Arquivologia Completa: Lei 8.159/91, Três Idades, Temporalidade, Protocolo e Métodos
  32: [
    {
      sub: 'Conceito de Arquivo, Gestão de Documentos e Política Nacional de Arquivos (Lei nº 8.159/1991)',
      ref: 'Lei nº 8.159/1991, Arts. 1º a 3º',
      t: 'Consideram-se arquivos os conjuntos de documentos produzidos e recebidos por órgãos públicos, instituições de caráter público e entidades privadas, em decorrência do exercício de atividades específicas, bem como por pessoa física, qualquer que seja o suporte da informação ou a natureza dos documentos; e considera-se Gestão de Documentos o conjunto de procedimentos e operações técnicas referentes à sua Produção, Tramitação, Uso, Avaliação e Arquivamento em fase corrente e intermediária, visando a sua eliminação ou recolhimento para guarda permanente.',
      f: 'Segundo a Lei nº 8.159/1991, apenas os documentos impressos em suporte papel com mais de cinquenta anos de idade são considerados documentos de arquivo.',
      exp: 'Art. 2º da Lei 8.159/91: independe do suporte (papel, digital, microfilme, audiovisual) e nasce como arquivo desde a sua produção/recebimento na idade corrente.'
    },
    {
      sub: 'Princípios Arquivísticos: Proveniência (Respeito aos Fundos), Organicidade, Unicidade, Indivisibilidade e Cumulatividade',
      ref: 'Teoria Arquivística e Dicionário Brasileiro de Terminologia Arquivística (DBTA)',
      t: 'O Princípio da Proveniência (ou Respeito aos Fundos) é o princípio basilar da Arquivologia segundo o qual o arquivo produzido por uma entidade coletiva, pessoa ou família não deve ser misturado aos de outras entidades produtoras; o Princípio da Organicidade estabelece que o arquivo reflete a estrutura, funções e atividades da entidade produtora; e o Princípio da Ordem Original determina que o arquivo deve conservar o arranjo dado pela própria entidade produtora.',
      f: 'A principal diferença entre um Arquivo e uma Biblioteca/Coleção é que o Arquivo é formado pela compra artificial de livros raros por assunto temático, sem relação orgânica com o produtor.',
      exp: 'Arquivo = acumulação orgânica, natural e funcional no curso das atividades (Fundo de Arquivo); Biblioteca/Museu = coleção artificial e intencional reunida por tema/autor.'
    },
    {
      sub: 'Teoria das Três Idades (Ciclo Vital dos Documentos) e Valores Primário vs. Secundário',
      ref: 'Lei nº 8.159/1991, Arts. 8º a 10',
      t: 'Os documentos públicos são identificados como: 1) Correntes (1ª idade: em curso ou de uso frequente, conservados próximos ao produtor, com valor primário administrativo/legal/fiscal); 2) Intermediários (2ª idade: não sendo de uso corrente nos órgãos produtores, aguardam em depósito centralizado o cumprimento de prazos prescricionais/precaucionais da Tabela de Temporalidade, mantendo valor primário reduzido); e 3) Permanentes (3ª idade: conjuntos de documentos de valor secundário histórico, probatório e informativo que devem ser definitivamente preservados, sendo inalienáveis e imprescritíveis!).',
      f: 'Os documentos recolhidos ao Arquivo Permanente (3ª idade) podem ser eliminados e fragmentados após dez anos caso falte espaço nas prateleiras da instituição.',
      exp: 'Art. 10 da Lei 8.159/1991: Os documentos de valor permanente são INALIENÁVEIS e IMPRESCRITÍVEIS, jamais podendo ser eliminados!'
    },
    {
      sub: 'Operações de Passagem (Transferência vs. Recolhimento), Avaliação e Tabela de Temporalidade (TTD)',
      ref: 'DBTA e Resoluções do CONARQ',
      t: 'A passagem de documentos do Arquivo Corrente para o Arquivo Intermediário denomina-se TRANSFERÊNCIA; a passagem de documentos (do corrente ou do intermediário) para o Arquivo Permanente denomina-se RECOLHIMENTO; e a Tabela de Temporalidade Documental (TTD) é o instrumento resultante da Avaliação Documental que fixa os prazos de guarda nas fases corrente e intermediária e determina a destinação final (eliminação autorizada pela instituição arquivística pública ou recolhimento para guarda permanente).',
      f: 'Denomina-se Tombamento a passagem de documentos do arquivo corrente para o arquivo intermediário, e Descarte a entrada no arquivo permanente.',
      exp: 'Para o Arquivo Intermediário = TRANSFERÊNCIA; para o Arquivo Permanente = RECOLHIMENTO!'
    },
    {
      sub: 'Atividades de Protocolo (Recebimento, Classificação, Registro, Movimentação e Expedição)',
      ref: 'Gestão Documental — Rotinas de Protocolo',
      t: 'O setor de Protocolo atua na fase corrente executando o recebimento, a separação entre correspondência oficial/ostensiva e particular/sigilosa, a abertura da correspondência ostensiva, a classificação segundo o Código de Classificação, a autuação (formação de processo), o registro, a distribuição/tramitação e a expedição; correspondências particulares ou com indicação de confidencialidade/sigilo NÃO devem ser abertas pelo protocolo, sendo registradas apenas pelos dados do envelope e encaminhadas fechadas ao destinatário.',
      f: 'O protocolo faz parte exclusivamente da terceira idade arquivística (Arquivo Permanente), sendo responsável pela restauração química de pergaminhos.',
      exp: 'Protocolo é atividade típica da 1ª idade (Arquivo Corrente / Fase de Utilização da gestão de documentos).'
    },
    {
      sub: 'Classificação dos Arquivos (Setoriais vs. Centrais; Horizontais vs. Verticais) e Espécie vs. Tipo Documental',
      ref: 'Marilena Leite Paes (Arquivo: Teoria e Prática)',
      t: 'Quanto à localização/extensão de atuação, os arquivos dividem-se em Setoriais (estabelecidos junto aos próprios órgãos operacionais, cumprindo funções de arquivo corrente) e Centrais ou Gerais (que centralizam documentos correntes/intermediários de diversos setores); quanto ao posicionamento físico das fichas/pastas, no arquivamento Horizontal os documentos ficam uns sobre os outros (em gavetas/mapotecas, ideal para plantas e mapas), e no Vertical ficam dispostos uns atrás dos outros; ademais, Espécie Documental é a configuração formal (ex.: Portaria, Ofício, Ata) e Tipo Documental é a espécie somada à atividade/função (ex.: Portaria de Nomeação).',
      f: 'No arquivamento horizontal, para retirar a pasta que está na base da pilha não é necessário movimentar os documentos que estão sobre ela.',
      exp: 'O arquivamento horizontal dificulta a retirada do documento que está embaixo na pilha, sendo por isso restrito a grandes formatos (mapas, plantas arquitetônicas) e arquivos permanentes em caixas horizontais.'
    },
    {
      sub: 'Métodos de Arquivamento: Sistemas Diretos vs. Indiretos e Regras de Alfabetação',
      ref: 'Marilena Leite Paes — 13 Regras de Alfabetação',
      t: 'Nos sistemas Diretos a busca do documento é feita diretamente no local de guarda sem necessidade de índice auxiliar (ex.: métodos Alfabético e Geográfico); nos sistemas Indiretos é obrigatório consultar previamente um índice alfabético para descobrir o código/número da pasta (ex.: métodos Numérico Simples, Numérico Cronológico e Dígito-Terminal). Nas regras de alfabetação de nomes de pessoas físicas: arquiva-se pelo último sobrenome ("João Silva" -> SILVA, João), mantendo-se unidos os graus de parentesco ("João Silva Neto" -> SILVA NETO, João) e sobrenomes compostos por substantivo+adjetivo ou santos ("Santa Rita, Cláudio").',
      f: 'O método Numérico Dígito-Terminal é classificado como sistema direto porque dispensa totalmente o uso de índice alfabético remissivo.',
      exp: 'Todos os métodos numéricos (Simples, Cronológico e Dígito-Terminal) são sistemas INDIRETOS (exigem índice)!'
    },
    {
      sub: 'Conservação Preventiva, Agentes de Deterioração, Restauração e Microfilmagem (Lei nº 5.433/1968)',
      ref: 'Conservação de Acervos e Lei nº 5.433/1968',
      t: 'A conservação preventiva controla fatores ambientais (temperatura ideal em torno de 18°C a 22°C e umidade relativa entre 45% e 55%, controle de luz/radiação UV, higienização mecânica com trincha/pincel macio a seco e substituição de clipes metálicos por plásticos); quanto à Microfilmagem (Lei 5.433/68) e à Digitalização (Decreto 10.278/20), os documentos públicos de valor permanente jamais podem ser eliminados após serem microfilmados ou digitalizados.',
      f: 'De acordo com a legislação arquivística brasileira, uma vez realizada a digitalização simples em scanner comum de um documento histórico do século XIX, o original em papel deve ser imediatamente incinerado.',
      exp: 'Documentos de valor histórico/permanente NUNCA podem ser eliminados, mesmo após microfilmagem ou digitalização com certificado ICP-Brasil!'
    }
  ],

  // Aula 33: [Assistente UFBA] Atendimento ao Público, Comunicação Interpessoal e Carta de Serviços (Lei 13.460/17)
  33: [
    {
      sub: 'Postura Profissional e Princípios da Excelência no Atendimento ao Público',
      ref: 'Ética, Discrição e Qualidade no Atendimento Público',
      t: 'No atendimento ao público em instituições federais de ensino, o servidor representa o próprio Estado e deve pautar-se pela competência técnica, eficiência, presteza, cortesia, urbanidade, equidade (tratamento isonômico sem distinções pessoais, respeitadas as prioridades legais), linguagem clara e acessível, escuta ativa, empatia (compreender a necessidade do usuário colocando-se em seu lugar) e discrição funcional.',
      f: 'No atendimento ao público, a postura de discrição autoriza o servidor a ocultar informações públicas do próprio interessado sobre o andamento do seu requerimento.',
      exp: 'Discrição significa manter sigilo sobre informações pessoais/sensíveis perante terceiros e manter sobriedade comportamental, jamais negar ao próprio interessado o direito de acesso ao seu processo.'
    },
    {
      sub: 'Elementos do Processo de Comunicação e a Importância do Feedback (Retroação)',
      ref: 'Teoria da Comunicação Organizacional',
      t: 'O processo de comunicação interpessoal envolve: Emissor (quem elabora e envia a mensagem), Codificação (tradução da ideia em signos/linguagem), Mensagem (conteúdo transmitido), Canal (meio físico ou digital de transmissão), Decodificação (interpretação dos signos pelo receptor), Receptor (destinatário), Ruído (qualquer interferência que distorça a mensagem) e Feedback ou Retroação (retorno do receptor ao emissor que confirma se a mensagem foi efetivamente compreendida!).',
      f: 'O processo de comunicação interpessoal considera-se plenamente eficaz no exato instante em que o emissor pronuncia a frase, independentemente de o receptor ter compreendido o significado.',
      exp: 'Sem compreensão pelo receptor e confirmação via Feedback (retroação), houve apenas emissão sonora/escrita, e não comunicação eficaz.'
    },
    {
      sub: 'Barreiras à Comunicação Eficaz: Mecânicas/Físicas, Fisiológicas, Semânticas e Psicológicas',
      ref: 'Comportamento Organizacional — Barreiras na Comunicação',
      t: 'As barreiras (ruídos) à comunicação classificam-se em: 1) Físicas ou Mecânicas (barulho externo, queda de conexão, distância física, defeito no microfone); 2) Fisiológicas (limitações orgânicas do emissor ou receptor, como surdez ou afonia); 3) Semânticas (decorrentes da linguagem, como uso de jargões técnicos herméticos, siglas desconhecidas ou palavras com duplo sentido); e 4) Psicológicas ou Pessoais (preconceitos, estereótipos, Efeito Halo, filtragem, receio, raiva ou percepção seletiva).',
      f: 'A utilização excessiva de termos jurídicos em latim e siglas contábeis desconhecidas ao orientar um cidadão humilde caracteriza uma barreira puramente mecânica.',
      exp: 'Distorção causada pelo significado das palavras, jargões técnicos, gírias ou idiomas = Barreira SEMÂNTICA!'
    },
    {
      sub: 'Fluxos da Comunicação Organizacional (Descendente, Ascendente, Horizontal, Diagonal e Rede Informal)',
      ref: 'Comunicação nas Organizações',
      t: 'Na estrutura organizacional: a comunicação Descendente flui do topo/chefia para os subordinados (ordens, diretrizes, manuais, feedback de avaliação); a Ascendente flui dos subordinados para a chefia (relatórios de desempenho, sugestões, queixas, pesquisa de clima); a Horizontal (ou Lateral) ocorre entre colegas ou unidades do mesmo nível hierárquico para coordenar tarefas; e a Diagonal (ou Transversal) ocorre entre pessoas de níveis hierárquicos e departamentos diferentes sem subordinação direta.',
      f: 'Uma caixa de sugestões e uma pesquisa de clima organizacional respondida pelos servidores para a Reitoria são exemplos de comunicação vertical descendente.',
      exp: 'Da base (servidores) para o topo (chefia/Reitoria) = Comunicação Vertical ASCENDENTE.'
    },
    {
      sub: 'Direitos Básicos dos Usuários e Diretrizes da Lei nº 13.460/2017 (Código de Defesa do Usuário)',
      ref: 'Lei nº 13.460/2017, Arts. 5º e 6º',
      t: 'Nos termos da Lei nº 13.460/2017, os agentes públicos devem observar diretrizes de urbanidade, respeito, acessibilidade, cortesia, presunção de boa-fé do usuário, igualdade no tratamento (vedado qualquer tipo de discriminação), cumprimento de prazos e normas, e aplicação de soluções tecnológicas que simplifiquem processos, sendo direito básico do usuário a participação no acompanhamento e avaliação dos serviços e a proteção de suas informações pessoais.',
      f: 'A Lei nº 13.460/2017 estabelece a presunção absoluta de má-fé do cidadão que apresenta reclamação contra demora no serviço público.',
      exp: 'Art. 5º, II da Lei 13.460/2017: vigora a presunção de BOA-FÉ do usuário dos serviços públicos!'
    },
    {
      sub: 'Carta de Serviços ao Usuário (Art. 7º da Lei nº 13.460/2017)',
      ref: 'Lei nº 13.460/2017, Art. 7º',
      t: 'Os órgãos e entidades abrangidos pela Lei nº 13.460/2017 divulgarão Carta de Serviços ao Usuário, que tem por objetivo informar o usuário sobre os serviços prestados, as formas de acesso a esses serviços e seus compromissos e padrões de qualidade de atendimento, devendo detalhar: os serviços oferecidos, os requisitos, documentos, formas e informações necessárias para acessar o serviço, as principais etapas para processamento, o prazo máximo para a prestação do serviço, a forma de prestação e os locais e formas para o usuário apresentar eventual manifestação.',
      f: 'A Carta de Serviços ao Usuário é um documento interno secreto de acesso restrito aos auditores da Controladoria-Geral da União.',
      exp: 'Art. 7º, § 4º da Lei 13.460/2017: A Carta de Serviços ao Usuário será objeto de atualização periódica e de permanente divulgação mediante publicação em sítio eletrônico do órgão ou entidade na internet.'
    },
    {
      sub: 'Atuação das Ouvidorias e Prazos de Resposta na Lei nº 13.460/2017',
      ref: 'Lei nº 13.460/2017, Arts. 13 a 16',
      t: 'As ouvidorias têm como atribuições receber, analisar e responder, por meio de mecanismos proativos e reativos, às manifestações encaminhadas por usuários de serviços públicos (sugestões, elogios, solicitações, reclamações e denúncias), devendo elaborar e apresentar resposta conclusiva às manifestações no prazo de até 30 (trinta) dias contados do seu recebimento, prorrogável de forma justificada uma única vez, por igual período (+30 dias).',
      f: 'Para registrar um elogio ou uma sugestão na Ouvidoria de uma universidade federal, a Lei nº 13.460/2017 exige pagamento de taxa de expediente e representação por advogado.',
      exp: 'Art. 10 da Lei 13.460/2017: A manifestação será dirigida à ouvidoria sem qualquer cobrança de taxa, sendo vedadas quaisquer exigências relativas aos motivos determinantes da apresentação de manifestações.'
    },
    {
      sub: 'Desburocratização (Decreto nº 9.094/2017 e Lei nº 13.726/2018) e Atendimento Prioritário (Lei nº 10.048/2000)',
      ref: 'Decreto nº 9.094/2017, Lei nº 13.726/2018 e Lei nº 10.048/2000',
      t: 'Na relação dos órgãos públicos com os usuários, é dispensado o reconhecimento de firma e a autenticação de cópia de documento em cartório (cabendo ao próprio servidor público confrontar a assinatura com o documento de identidade ou atestar a autenticidade da cópia à vista do original); ademais, têm direito a atendimento prioritário (Lei 10.048/2000): pessoas com deficiência, pessoas com transtorno do espectro autista (TEA), pessoas idosas (60 anos ou mais, tendo os maiores de 80 anos prioridade especial sobre os demais idosos), gestantes, lactantes, pessoas com criança de colo, obesos, pessoas com mobilidade reduzida e doadores de sangue.',
      f: 'O servidor público federal deve recusar o recebimento de cópia de RG apresentada juntamente com o documento original caso a cópia não possua selo pago de autenticação em tabelionato de notas.',
      exp: 'Pela Lei 13.726/2018 e Decreto 9.094/2017, o próprio servidor administrativo confere a cópia com o original na hora e atesta sua autenticidade gratuitamente.'
    }
  ]
};
