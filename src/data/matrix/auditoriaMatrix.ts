import { SubjectLessonMatrix } from './types';

// Auditoria - 17 Aulas (0..16)
export const AUDITORIA_LESSON_MATRIX: SubjectLessonMatrix = {
  // Aula 00 - Introdução à Auditoria (NBC TA 200)
  0: [
    {
      sub: 'Objetivos Gerais do Auditor Independente (NBC TA 200)',
      ref: 'NBC TA 200 (R1), item 11',
      t: 'Os objetivos gerais do auditor independente são obter asseguração razoável de que as demonstrações contábeis como um todo estão livres de distorção relevante, independentemente se causadas por fraude ou erro, e apresentar relatório sobre as demonstrações contábeis comunicando-se conforme exigido pelas NBC TAs.',
      f: 'O objetivo da auditoria independente é fornecer asseguração absoluta de que 100% das transações contábeis estão isentas de qualquer erro material ou imaterial, emitindo certificado de solvência futura.',
      exp: 'A NBC TA 200 define que a auditoria oferece asseguração RAZOÁVEL (nível alto, mas não absoluto de segurança), jamais asseguração absoluta nem garantia de viabilidade futura.'
    },
    {
      sub: 'Ceticismo Profissional e Julgamento Profissional',
      ref: 'NBC TA 200 (R1), itens 13(k) e 13(l)',
      t: 'Ceticismo profissional é a postura que inclui uma mente questionadora e alerta para condições que possam indicar possível distorção devido a erro ou fraude e uma avaliação crítica das evidências de auditoria; já o julgamento profissional é a aplicação do treinamento, conhecimento e experiência relevantes na tomada de decisões informadas.',
      f: 'O ceticismo profissional pode ser dispensado pelo auditor quando a administração da entidade auditada possuir histórico comprovado de honestidade e integridade nos últimos cinco exercícios.',
      exp: 'NBC TA 200, item 15: O auditor deve manter o ceticismo profissional durante toda a auditoria, a despeito de sua experiência passada quanto à honestidade e integridade da administração.'
    },
    {
      sub: 'Risco de Auditoria e seus Componentes (RI, RC e RD)',
      ref: 'NBC TA 200 (R1), item 13(c) e (n)',
      t: 'O risco de auditoria é o risco de que o auditor expresse uma opinião de auditoria inadequada quando as demonstrações contábeis contiverem distorção relevante, sendo função dos riscos de distorção relevante (composto pelo risco inerente e pelo risco de controle) e do risco de detecção.',
      f: 'O risco inerente e o risco de controle são integralmente controlados pelo auditor independente por meio do aumento do tamanho de suas amostras.',
      exp: 'Os riscos de distorção relevante (Risco Inerente x Risco de Controle) são riscos da entidade e independem da auditoria; o único risco gerenciado diretamente pelo auditor é o Risco de Detecção (inversamente proporcional ao RDR).'
    },
    {
      sub: 'Limitações Inerentes da Auditoria',
      ref: 'NBC TA 200 (R1), itens A47 a A54',
      t: 'As limitações inerentes de uma auditoria decorrem da natureza do relatório financeiro (que envolve estimativas subjetivas da administração), da natureza dos procedimentos de auditoria (uso de testes por amostragem e possibilidade de conluio na fraude) e da necessidade de a auditoria ser conduzida dentro de período razoável de tempo e a custo razoável.',
      f: 'A limitação de tempo e o custo econômico da auditoria constituem justificativa válida para que o auditor omita procedimentos alternativos quando não obtiver evidência suficiente.',
      exp: 'NBC TA 200, A54: A dificuldade, o tempo ou o custo envolvido NÃO são, por si só, base válida para o auditor omitir um procedimento de auditoria para o qual não haja alternativa.'
    },
    {
      sub: 'Responsabilidades da Administração e dos Responsáveis pela Governança',
      ref: 'NBC TA 200 (R1), item 4 e A2',
      t: 'A auditoria em conformidade com as NBC TAs é conduzida com base na premissa de que a administração e os responsáveis pela governança reconhecem sua responsabilidade pela elaboração das demonstrações contábeis de acordo com a estrutura de relatório financeiro aplicável e pelo controle interno necessário.',
      f: 'A realização da auditoria das demonstrações contábeis exime a diretoria e os responsáveis pela governança de suas responsabilidades legais perante os acionistas e o fisco.',
      exp: 'NBC TA 200, item 4: A auditoria das demonstrações contábeis NÃO exime a administração nem os responsáveis pela governança de suas responsabilidades.'
    },
    {
      sub: 'Relação Inversa entre Risco de Distorção Relevante e Risco de Detecção',
      ref: 'NBC TA 200 (R1), item A44',
      t: 'Para um dado nível de risco de auditoria aceitável, o nível aceitável de risco de detecção apresenta uma relação inversa com os riscos avaliados de distorção relevante no nível da afirmação: quanto maior o risco de distorção relevante, menor o risco de detecção aceitável e maior a extensão dos testes substantivos.',
      f: 'Quanto maior for o risco de distorção relevante avaliado pelo auditor, maior será o risco de detecção aceitável e menor a quantidade de evidências requeridas.',
      exp: 'Se o RDR (RI x RC) é alto, o Risco de Detecção (RD) aceitável tem que ser BAIXO, exigindo procedimentos substantivos mais extensos e rigorosos.'
    }
  ],

  // Aula 01 - Auditoria Interna (NBC TI 01)
  1: [
    {
      sub: 'Conceito e Finalidade da Auditoria Interna (NBC TI 01)',
      ref: 'NBC TI 01 (Resolução CFC nº 986/2003), itens 12.1.1',
      t: 'A Auditoria Interna compreende os exames, análises, avaliações, levantamentos e comprovações, metodologicamente estruturados, para a avaliação da integridade, adequação, eficácia, eficiência e economicidade dos processos, dos sistemas de informações e de controles internos integrados ao ambiente e de gerenciamento de riscos, com vistas a assistir à administração da entidade no cumprimento de seus objetivos.',
      f: 'A Auditoria Interna tem como finalidade primordial emitir parecer de asseguração razoável destinado ao público externo e aos investidores da bolsa de valores.',
      exp: 'Enquanto a auditoria independente visa emitir opinião sobre as demonstrações contábeis para usuários externos, a auditoria interna assessora a alta administração no aprimoramento dos controles internos e gestão de riscos.'
    },
    {
      sub: 'Vínculo Funcional e Subordinação da Auditoria Interna',
      ref: 'NBC TI 01 e Doutrina de Auditoria',
      t: 'O auditor interno mantém vínculo trabalhista ou estatutário com a entidade auditada, devendo subordinar-se diretamente ao nível mais alto da administração ou ao conselho de administração/comitê de auditoria para preservar sua autonomia técnica e objetividade.',
      f: 'O auditor interno deve subordinar-se hierarquicamente ao gerente financeiro ou contador-geral da empresa para facilitar o acesso aos livros diário e razão.',
      exp: 'Para garantir independência operacional interna, a Auditoria Interna vincula-se ao topo da governança (Conselho de Administração ou Presidência), nunca às gerências operacionais auditadas.'
    },
    {
      sub: 'Papéis de Trabalho da Auditoria Interna',
      ref: 'NBC TI 01, item 12.1.2',
      t: 'A Auditoria Interna deve ser documentada por meio de papéis de trabalho, elaborados em meio físico ou eletrônico, que devem ser organizados e arquivados de forma sistemática e racional, constituindo o suporte documental das conclusões e recomendações emitidas.',
      f: 'Na auditoria interna, os papéis de trabalho são documentos informais que devem ser descartados imediatamente após a reunião de encerramento com o gestor da área.',
      exp: 'Os papéis de trabalho integram um conjunto organizado de registros e evidências que comprovam a execução do trabalho técnico do auditor interno.'
    },
    {
      sub: 'Fraude vs. Erro segundo a NBC TI 01',
      ref: 'NBC TI 01, item 12.1.3',
      t: 'O termo "fraude" aplica-se a ato intencional de omissão e/ou manipulação de transações e operações, adulteração de documentos, registros, relatórios, informações e demonstrações contábeis; já o termo "erro" aplica-se a ato não intencional de omissão, desatenção, desconhecimento ou má interpretação de fatos.',
      f: 'A NBC TI 01 conceitua o erro como a manipulação dolosa de saldos contábeis e a fraude como o equívoco aritmético involuntário na escrituração.',
      exp: 'A distinção fundamental entre fraude e erro reside na INTENCIONALIDADE (dolo na fraude vs. culpa/involuntariedade no erro).'
    },
    {
      sub: 'Relatório da Auditoria Interna e Recomendações',
      ref: 'NBC TI 01, item 12.3',
      t: 'O relatório é o documento pelo qual a Auditoria Interna apresenta o resultado dos seus trabalhos, devendo ser redigido com objetividade e imparcialidade, abordando a metodologia adotada, os principais procedimentos, os riscos associados aos fatos constatados e as conclusões e recomendações à administração.',
      f: 'O auditor interno possui poder coercitivo para demitir empregados e alterar unilateralmente as rotinas operacionais da empresa caso suas recomendações não sejam acatadas.',
      exp: 'A Auditoria Interna é órgão de assessoramento: emite recomendações (não determinações coercitivas), cabendo à administração decidir sobre a implementação ou assumir o risco.'
    },
    {
      sub: 'Sigilo Profissional do Auditor Interno',
      ref: 'NBC TI 01, item 12.1.4.2',
      t: 'O sigilo deve ser respeitado mesmo depois de terminado o vínculo empregatício ou contratual do auditor interno, sendo vedada a divulgação de informações a terceiros salvo quando houver obrigação legal.',
      f: 'O dever de sigilo do auditor interno extingue-se no exato dia da rescisão de seu contrato de trabalho com a entidade.',
      exp: 'Item 12.1.4.2 da NBC TI 01: O dever de manter o sigilo continua mesmo depois de terminado o vínculo empregatício ou contratual.'
    }
  ],

  // Aula 02 - Planejamento de Auditoria (NBC TA 300)
  2: [
    {
      sub: 'Estratégia Global de Auditoria vs. Plano de Auditoria',
      ref: 'NBC TA 300 (R1), itens 7 a 9',
      t: 'O auditor deve estabelecer uma estratégia global de auditoria que defina o alcance, a época e a direção da auditoria, para orientar o desenvolvimento do plano de auditoria, o qual é mais detalhado e inclui a natureza, a época e a extensão dos procedimentos de avaliação de risco e dos procedimentos adicionais de auditoria.',
      f: 'O plano de auditoria é elaborado antes da estratégia global de auditoria e permanece imutável até a emissão do relatório final do auditor.',
      exp: 'A Estratégia Global antecede e orienta o Plano de Auditoria. Ambos são dinâmicos e devem ser atualizados e alterados, se necessário, no curso da auditoria (item 10).'
    },
    {
      sub: 'Atividades Preliminares do Trabalho de Auditoria',
      ref: 'NBC TA 300 (R1), item 6',
      t: 'No início do trabalho de auditoria corrente, o auditor deve realizar procedimentos relativos à continuidade do relacionamento com o cliente, avaliar a conformidade com os requisitos éticos relevantes (inclusive independência) e estabelecer o entendimento dos termos do trabalho conforme a NBC TA 210.',
      f: 'As atividades preliminares de avaliação de independência só se aplicam ao décimo ano de auditoria da mesma companhia aberta.',
      exp: 'As atividades preliminares (aceitação/continuidade, independência ética e carta de contratação NBC TA 210) são obrigatórias no início de cada trabalho de auditoria.'
    },
    {
      sub: 'Benefícios do Planejamento Adequado da Auditoria',
      ref: 'NBC TA 300 (R1), item 2',
      t: 'O planejamento adequado auxilia o auditor a dedicar atenção apropriada às áreas importantes da auditoria, identificar e resolver tempestivamente problemas potenciais, organizar e gerenciar o trabalho de forma eficaz e selecionar membros da equipe com níveis apropriados de capacidade e competência.',
      f: 'O planejamento de auditoria constitui uma fase isolada e estanque que se encerra definitivamente antes do início da execução dos testes de controle.',
      exp: 'NBC TA 300, item A2: O planejamento NÃO é uma fase isolada da auditoria, mas um processo contínuo e iterativo que começa logo após a conclusão da auditoria anterior e continua até a conclusão do trabalho atual.'
    },
    {
      sub: 'Considerações Adicionais em Auditoria Inicial (Primeiro Ano)',
      ref: 'NBC TA 300 (R1), item 13',
      t: 'Antes de iniciar uma auditoria inicial (primeira auditoria na entidade), o auditor deve executar procedimentos relativos à aceitação do cliente e do trabalho e comunicar-se com o auditor antecessor, quando houver mudança de auditores, em conformidade com os requisitos éticos relevantes.',
      f: 'Na auditoria inicial, é proibido ao novo auditor manter qualquer contato ou comunicação técnica com o auditor independente antecessor.',
      exp: 'Na auditoria inicial, a comunicação com o auditor antecessor (com autorização da entidade auditada) e a revisão dos saldos iniciais (NBC TA 510) são procedimentos essenciais.'
    },
    {
      sub: 'Discussão do Planejamento com a Administração da Entidade',
      ref: 'NBC TA 300 (R1), itens A8 e A9',
      t: 'O auditor pode optar por discutir elementos do planejamento com a administração da entidade para facilitar a condução e o gerenciamento do trabalho, tomando o cuidado de não comprometer a eficácia da auditoria ao não tornar os procedimentos excessivamente previsíveis.',
      f: 'O auditor deve submeter o plano detalhado de seleção de amostras e datas de contagem surpresa de caixa à aprovação prévia da diretoria auditada.',
      exp: 'Discutir a natureza e a época detalhadas dos procedimentos (como quais itens da amostra serão testados) compromete a eficácia da auditoria ao torná-los previsíveis (item A9).'
    },
    {
      sub: 'Documentação do Planejamento de Auditoria',
      ref: 'NBC TA 300 (R1), item 12',
      t: 'O auditor deve incluir na documentação de auditoria a estratégia global de auditoria, o plano de auditoria e eventuais alterações significativas feitas durante o trabalho, juntamente com as razões de tais alterações.',
      f: 'Alterações feitas no plano de auditoria durante a execução do trabalho não precisam ser documentadas nem justificadas nos papéis de trabalho.',
      exp: 'NBC TA 300, item 12(c): Todas as alterações significativas na estratégia global ou no plano de auditoria, e as razões dessas alterações, devem ser formalmente documentadas.'
    }
  ],

  // Aula 03 - Evidência de Auditoria (NBC TA 500)
  3: [
    {
      sub: 'Suficiência (Quantidade) e Adequação (Qualidade) da Evidência',
      ref: 'NBC TA 500 (R1), item 5(b) e (e)',
      t: 'A suficiência é a medida da quantidade da evidência de auditoria (afetada pela avaliação dos riscos de distorção relevante e pela qualidade da evidência), enquanto a adequação é a medida da qualidade da evidência de auditoria, isto é, sua relevância e sua confiabilidade para fornecer suporte às conclusões.',
      f: 'A obtenção de grande quantidade de evidências (alta suficiência) compensa automaticamente a baixa qualidade e a falta de confiabilidade dessas evidências.',
      exp: 'NBC TA 500, item A4: A obtenção de mais evidência de auditoria, porém, NÃO compensa a sua má qualidade.'
    },
    {
      sub: 'Hierarquia de Confiabilidade das Evidências de Auditoria',
      ref: 'NBC TA 500 (R1), item A31',
      t: 'A confiabilidade da evidência de auditoria é aumentada quando é obtida de fontes independentes externas à entidade, quando os controles internos relacionados são efetivos, quando é obtida diretamente pelo auditor (ex: observação) e quando existe em forma documental (em papel ou meio eletrônico) e em documentos originais.',
      f: 'A indagação verbal feita aos gestores internos da empresa é mais confiável do que a confirmação externa (circularização) obtida diretamente de instituições bancárias.',
      exp: 'Regras da NBC TA 500, A31: Externa > Interna; Interna com controle efetivo > Interna com controle fraco; Obtida diretamente pelo auditor > Obtida indiretamente; Documental > Verbal; Original > Fotocópia.'
    },
    {
      sub: 'Procedimentos de Auditoria: Inspeção, Observação e Confirmação Externa',
      ref: 'NBC TA 500 (R1), itens A14 a A18',
      t: 'A inspeção envolve o exame de registros ou documentos (internos ou externos) ou o exame físico de um ativo; a observação consiste no exame de processo ou procedimento executado por outros (ex: contagem de estoque); e a confirmação externa é a evidência obtida pelo auditor como resposta escrita direta de terceiro (circularização).',
      f: 'A inspeção física de bens tangíveis do ativo imobilizado fornece evidência conclusiva tanto da existência física quanto dos direitos de propriedade e do valor recuperável do ativo.',
      exp: 'Pegadinha clássica (NBC TA 500, A16): A inspeção de ativos tangíveis pode fornecer evidência confiável quanto à sua EXISTÊNCIA, mas não necessariamente quanto aos direitos e obrigações (propriedade) ou à sua avaliação/mensuração!'
    },
    {
      sub: 'Procedimentos de Auditoria: Recálculo, Reexecução, Procedimentos Analíticos e Indagação',
      ref: 'NBC TA 500 (R1), itens A19 a A25',
      t: 'O recálculo consiste na verificação da exatidão matemática de documentos ou registros; a reexecução envolve a execução independente pelo auditor de procedimentos ou controles originalmente realizados como parte do controle interno da entidade; e os procedimentos analíticos consistem na avaliação das informações feitas por meio de estudo das relações plausíveis entre dados financeiros e não financeiros.',
      f: 'A indagação isoladamente considerada é suficiente para detectar a ausência de distorções relevantes no nível das afirmações e testar a eficácia operacional dos controles.',
      exp: 'NBC TA 500, A22: Embora a indagação possa fornecer importante evidência, a indagação sozinha geralmente NÃO fornece evidência de auditoria suficiente da ausência de distorção relevante nem da eficácia operacional dos controles.'
    },
    {
      sub: 'Afirmações sobre Classes de Transações, Saldos de Contas e Divulgações',
      ref: 'NBC TA 315 (R2) e NBC TA 500',
      t: 'No exame de saldos de contas no final do período (Balanço Patrimonial), o auditor testa afirmações como Existência, Direitos e Obrigações, Integridade e Valorização/Alocação; já nas classes de transações (DRE), testa Ocorrência, Integridade, Exatidão, Corte (Cut-off) e Classificação.',
      f: 'A afirmação de Corte (Cut-off) destina-se a verificar se os terrenos do imobilizado estão livres de hipotecas judiciais.',
      exp: 'A afirmação de Corte (Cut-off) verifica se as transações e eventos foram registrados no período contábil correto (regime de competência).'
    },
    {
      sub: 'Inconsistência ou Dúvida quanto à Confiabilidade da Evidência',
      ref: 'NBC TA 500 (R1), item 11',
      t: 'Se a evidência de auditoria obtida de uma fonte é inconsistente com a obtida de outra, ou se o auditor tem dúvidas sobre a confiabilidade das informações a serem usadas como evidência, ele deve determinar quais modificações ou acréscimos aos procedimentos de auditoria são necessários para solucionar o assunto.',
      f: 'Havendo inconsistência entre duas evidências, o auditor deve simplesmente calcular a média aritmética dos valores divergentes sem realizar procedimentos adicionais.',
      exp: 'O auditor não pode ignorar evidências contraditórias; deve ampliar ou modificar procedimentos para resolver a divergência e avaliar o efeito sobre o relatório.'
    }
  ],

  // Aula 04 - Amostragem em Auditoria (NBC TA 530)
  4: [
    {
      sub: 'Conceito de Amostragem em Auditoria e População',
      ref: 'NBC TA 530, item 5(a) e (b)',
      t: 'Amostragem em auditoria é a aplicação de procedimentos de auditoria em menos de 100% dos itens de população relevante para fins de auditoria, de maneira que todas as unidades de amostragem tenham a mesma chance (ou chance conhecida) de serem selecionadas para proporcionar uma base razoável que possibilite ao auditor concluir sobre toda a população.',
      f: 'O exame de 100% dos itens de uma conta contábil de alto valor configura a modalidade mais rigorosa de amostragem estatística na NBC TA 530.',
      exp: 'Examinar 100% dos itens de uma população ou selecionar itens específicos sem extrapolação NÃO constitui amostragem em auditoria (NBC TA 500, A52).'
    },
    {
      sub: 'Risco de Amostragem vs. Risco Não Resultante da Amostragem',
      ref: 'NBC TA 530, item 5(c) e (d)',
      t: 'Risco de amostragem é o risco de que a conclusão do auditor, com base em amostra, pudesse ser diferente se toda a população fosse sujeita ao mesmo procedimento de auditoria; já o risco não resultante da amostragem é o risco de o auditor alcançar uma conclusão errônea por qualquer outra razão não relacionada ao tamanho da amostra (ex: uso de procedimentos inapropriados ou falha em reconhecer uma distorção).',
      f: 'O risco não resultante da amostragem é eliminado integralmente quando o auditor decide aumentar o tamanho da amostra para 50% da população.',
      exp: 'O aumento do tamanho da amostra reduz o RISCO DE AMOSTRAGEM, mas não elimina o risco não resultante da amostragem (que depende de treinamento, supervisão e adequação dos procedimentos).'
    },
    {
      sub: 'Os Dois Tipos de Risco de Amostragem (Subavaliação e Superavaliação da Confiabilidade)',
      ref: 'NBC TA 530, item 5(c)(i) e (ii)',
      t: 'Em testes de controles e de detalhes, o risco de superavaliação da confiabilidade (controles considerados mais eficazes do que realmente são, ou ausência de distorção relevante quando na verdade ela existe) afeta a eficácia da auditoria e tem maior probabilidade de conduzir a uma opinião de auditoria inadequada; já a subavaliação afeta a eficiência da auditoria (levando a trabalho adicional).',
      f: 'Concluir que os controles são menos eficazes do que realmente são compromete a eficácia da auditoria e gera emissão de opinião limpa indevida.',
      exp: 'Superavaliar a confiabilidade (aceitação incorreta) compromete a EFICÁCIA (opinião errada); subavaliar a confiabilidade (rejeição incorreta) compromete apenas a EFICIÊNCIA (mais testes que o necessário).'
    },
    {
      sub: 'Amostragem Estatística vs. Não Estatística e Estratificação',
      ref: 'NBC TA 530, item 5(g) e Apêndice 1',
      t: 'A amostragem estatística possui duas características simultâneas: seleção aleatória dos itens da amostra e uso da teoria das probabilidades para avaliar os resultados e medir o risco de amostragem; além disso, a estratificação divide a população em subpopulações discretas homogêneas para reduzir a variabilidade e permitir menor tamanho de amostra.',
      f: 'Uma abordagem de amostragem que utilize seleção aleatória mas não aplique a teoria das probabilidades para avaliar os resultados ainda é classificada como amostragem estatística.',
      exp: 'NBC TA 530, item 5(g): Qualquer abordagem que NÃO apresente simultaneamente as duas características (seleção aleatória + avaliação probabilística) é considerada amostragem NÃO estatística.'
    },
    {
      sub: 'Fatores que Determinam o Tamanho da Amostra (Testes de Controle e Detalhes)',
      ref: 'NBC TA 530, Apêndices 2 e 3',
      t: 'O tamanho da amostra é diretamente proporcional ao nível de segurança desejado pelo auditor, à taxa esperada de desvio (ou distorção esperada) e à avaliação de risco do auditor; e é inversamente proporcional à taxa tolerável de desvio (ou distorção tolerável) e à estratificação da população.',
      f: 'Quanto maior for a distorção tolerável (ou taxa tolerável de desvio) definida pelo auditor, maior deverá ser o tamanho da amostra selecionada.',
      exp: 'Relação inversa: quanto MAIOR a distorção/desvio que o auditor tolera sem alterar sua conclusão (distorção tolerável), MENOR precisa ser o tamanho da amostra.'
    },
    {
      sub: 'Anomalia e Projeção de Distorções em Testes de Detalhes',
      ref: 'NBC TA 530, item 5(e), 13 e 14',
      t: 'Para os testes de detalhes, o auditor deve projetar as distorções encontradas na amostra para a população, salvo no raro caso em que uma distorção seja comprovadamente uma anomalia (distorção que comprovadamente não é representativa de distorções na população), a qual pode ser excluída da extrapolação mas deve ainda ser somada às distorções não anômalas projetadas.',
      f: 'Nos testes de controles, o auditor deve projetar financeiramente os desvios de controle encontrados para o valor monetário total do balanço patrimonial.',
      exp: 'NBC TA 530, item A19: Para testes de controles, NÃO é necessária projeção explícita dos desvios, visto que a taxa de desvio da amostra já é também a taxa de desvio projetada para a população.'
    }
  ],

  // Aula 05 - Materialidade em Auditoria (NBC TA 320)
  5: [
    {
      sub: 'Conceito de Materialidade (Relevância) no Planejamento e Execução',
      ref: 'NBC TA 320 (R1), itens 2 e 9',
      t: 'Distorções, incluindo omissões, são consideradas relevantes (materiais) quando for razoavelmente esperado que, individualmente ou em conjunto, influenciem as decisões econômicas dos usuários tomadas com base nas demonstrações contábeis, considerando tanto a magnitude quantitativa quanto a natureza qualitativa da distorção.',
      f: 'A determinação da materialidade pelo auditor leva em consideração o impacto possível da distorção para acionistas minoritários individuais com necessidades específicas.',
      exp: 'NBC TA 320, item 2: O auditor considera as necessidades comuns de informações financeiras dos usuários como um GRUPO, não o possível efeito sobre usuários individuais específicos.'
    },
    {
      sub: 'Três Níveis de Materialidade na Auditoria',
      ref: 'NBC TA 320 (R1), itens 10 e 11',
      t: 'Ao estabelecer a estratégia global de auditoria, o auditor deve determinar: 1) a materialidade para as demonstrações contábeis como um todo; 2) se aplicável, o nível de materialidade para classes específicas de transações, saldos contábeis ou divulgações; e 3) a materialidade para execução da auditoria.',
      f: 'A materialidade para execução da auditoria deve ser fixada em valor monetário superior à materialidade para as demonstrações contábeis como um todo.',
      exp: 'A materialidade para execução da auditoria é SEMPRE fixada em valor INFERIOR à materialidade global para reduzir a um nível adequadamente baixo a probabilidade de que distorções não corrigidas e não detectadas excedam a materialidade global.'
    },
    {
      sub: 'Uso de Referenciais (Benchmarks) no Cálculo da Materialidade',
      ref: 'NBC TA 320 (R1), itens A4 a A8',
      t: 'A determinação da materialidade envolve o exercício de julgamento profissional, aplicando-se frequentemente uma porcentagem a um referencial selecionado como ponto de partida, tal como lucro antes dos impostos para entidades voltadas ao lucro, ou receita total/despesa total para entidades sem fins lucrativos ou do setor público.',
      f: 'A NBC TA 320 fixa obrigatoriamente o percentual único de 5% sobre o capital social subscrito para todas as auditorias no Brasil.',
      exp: 'As NBC TAs não fixam percentuais rígidos; a escolha do referencial (lucro, receita, ativo líquido, despesa) e da porcentagem depende do julgamento profissional do auditor.'
    },
    {
      sub: 'Relação Inversa entre Materialidade e Risco de Auditoria',
      ref: 'NBC TA 320 (R1), item A1',
      t: 'Na condução de uma auditoria, a materialidade e o risco de auditoria são considerados ao longo de todo o trabalho, existindo uma relação inversa entre o nível de materialidade estabelecido e o risco de auditoria: quanto menor o valor monetário da materialidade tolerada, maior o risco de que distorções ultrapassem esse limite e maior a quantidade de evidências necessárias.',
      f: 'Quanto menor for o valor em reais fixado para a materialidade global, menor será a extensão dos procedimentos substantivos exigidos do auditor.',
      exp: 'Se o limite de materialidade é baixo (rigoroso), qualquer pequeno erro já se torna relevante, exigindo MAIS trabalho e amostras maiores para controlar o risco de auditoria.'
    },
    {
      sub: 'Revisão da Materialidade no Decorrer da Auditoria',
      ref: 'NBC TA 320 (R1), itens 12 e 13',
      t: 'O auditor deve revisar a materialidade para as demonstrações contábeis como um todo (e, se aplicável, para classes específicas e para execução da auditoria) no caso de tomar conhecimento de informações durante a auditoria que teriam levado o auditor a determinar inicialmente um valor diferente.',
      f: 'Uma vez documentada a materialidade na fase de planejamento, é vedado ao auditor reduzir o seu valor durante a execução dos testes substantivos.',
      exp: 'Se os resultados reais do exercício forem substancialmente diferentes dos projetados (ex: queda brusca no lucro ou venda de unidade operacional), o auditor deve revisar a materialidade e ajustar seus procedimentos.'
    },
    {
      sub: 'Documentação da Materialidade',
      ref: 'NBC TA 320 (R1), item 14',
      t: 'O auditor deve incluir na documentação de auditoria os valores e os fatores considerados na determinação da materialidade para as demonstrações contábeis como um todo, dos níveis específicos (se aplicável), da materialidade para execução da auditoria e de qualquer revisão desses valores no decorrer do trabalho.',
      f: 'Apenas o valor final da materialidade global deve constar dos papéis de trabalho, dispensando-se o registro da materialidade de execução.',
      exp: 'O item 14 da NBC TA 320 exige documentação completa dos três níveis e de eventuais revisões.'
    }
  ],

  // Aula 06 - Relatório de Auditoria (NBC TA 700, 701, 705 e 706)
  6: [
    {
      sub: 'Opinião Não Modificada (Sem Ressalva / Limpa) - NBC TA 700',
      ref: 'NBC TA 700, item 16',
      t: 'O auditor deve expressar uma opinião não modificada (sem ressalva) quando concluir que as demonstrações contábeis são elaboradas, em todos os aspectos relevantes, de acordo com a estrutura de relatório financeiro aplicável.',
      f: 'A opinião não modificada é dividida na estrutura do relatório moderno em duas seções: a seção de Opinião e a seção de Ressalvas Imateriais.',
      exp: 'Na estrutura da NBC TA 700 atualizada, a seção "Opinião" é a PRIMEIRA seção do relatório do auditor, seguida imediatamente pela seção "Base para Opinião".'
    },
    {
      sub: 'Matriz de Opinião Modificada (NBC TA 705): Ressalva, Adversa e Abstenção',
      ref: 'NBC TA 705, itens 7 a 10',
      t: 'O auditor expressa Opinião com Ressalva quando obtém evidência de distorção relevante mas não generalizada, ou quando não consegue obter evidência sobre assunto relevante mas não generalizado; expressa Opinião Adversa quando obtém evidência de distorção relevante e generalizada; e expressa Abstenção de Opinião quando não consegue obter evidência suficiente e os possíveis efeitos são relevantes e generalizados.',
      f: 'Quando o auditor obtém evidência suficiente e adequada de que as demonstrações contábeis contêm distorções relevantes e generalizadas, deve emitir Abstenção de Opinião.',
      exp: 'Distorção comprovada relevante e generalizada = Opinião ADVERSA. Falta de evidência (limitação de escopo) relevante e generalizada = ABSTENÇÃO DE OPINIÃO.'
    },
    {
      sub: 'Consequências da Impossibilidade de Obter Evidência Imposta pela Administração',
      ref: 'NBC TA 705, itens 11 a 13',
      t: 'Se a administração impuser uma limitação ao alcance da auditoria depois da aceitação do trabalho, cujo possível efeito seja relevante e generalizado, o auditor deve solicitar que a administração retire a limitação e, caso ela se recuse, deve renunciar ao trabalho (quando praticável e permitido por lei) ou abster-se de expressar uma opinião.',
      f: 'Diante de limitação de escopo imposta pela administração com efeito generalizado, o auditor deve emitir opinião sem ressalva acompanhada de parágrafo de ênfase.',
      exp: 'Limitação de escopo generalizada imposta pela administração exige solicitação de retirada da restrição; mantida a recusa, cabe renúncia ao trabalho ou Abstenção de Opinião.'
    },
    {
      sub: 'Parágrafo de Ênfase vs. Parágrafo de Outros Assuntos (NBC TA 706)',
      ref: 'NBC TA 706, itens 7 a 11',
      t: 'O Parágrafo de Ênfase refere-se a um assunto apropriadamente apresentado ou divulgado nas demonstrações contábeis (notas explicativas) que é fundamental para o entendimento dos usuários; já o Parágrafo de Outros Assuntos refere-se a um assunto NÃO apresentado ou divulgado nas demonstrações contábeis que é relevante para o entendimento da auditoria, da responsabilidade do auditor ou do relatório.',
      f: 'A inclusão de um Parágrafo de Ênfase substitui a necessidade de o auditor expressar opinião com ressalva ou adversa quando houver distorção relevante.',
      exp: 'NBC TA 706: O Parágrafo de Ênfase NUNCA modifica a opinião do auditor nem substitui opinião modificada (NBC TA 705) ou divulgação exigida da administração.'
    },
    {
      sub: 'Principais Assuntos de Auditoria (PAA - NBC TA 701)',
      ref: 'NBC TA 701 e NBC TA 705, item 29',
      t: 'Principais Assuntos de Auditoria (PAA) são aqueles que, no julgamento profissional do auditor, foram os mais significativos na auditoria das demonstrações contábeis do período corrente, selecionados entre os assuntos comunicados aos responsáveis pela governança, sendo obrigatória sua comunicação para entidades listadas, salvo quando o auditor se abstiver de expressar opinião.',
      f: 'Quando o auditor se abstém de expressar uma opinião sobre as demonstrações contábeis, permanece obrigado a incluir a seção de Principais Assuntos de Auditoria (PAA) no relatório.',
      exp: 'NBC TA 705, item 29: Salvo se exigido por lei ou regulamento, quando o auditor se abstém de expressar uma opinião, o relatório NÃO deve incluir a seção Principais Assuntos de Auditoria (NBC TA 701).'
    },
    {
      sub: 'Continuidade Operacional e Incerteza Relevante (NBC TA 570)',
      ref: 'NBC TA 570',
      t: 'Se o uso do pressuposto de continuidade operacional for apropriado, mas existir incerteza relevante adequadamente divulgada nas notas explicativas, o auditor deve expressar uma opinião não modificada e incluir uma seção separada sob o título "Incerteza relevante relacionada com a continuidade operacional"; se a divulgação for inadequada, deve expressar opinião com ressalva ou adversa.',
      f: 'A existência de incerteza relevante quanto à continuidade operacional adequadamente divulgada em notas explicativas obriga o auditor a emitir opinião adversa.',
      exp: 'Pela NBC TA 570 atual, incerteza relevante sobre continuidade operacional adequadamente divulgada gera opinião limpa com seção específica dedicada ("Incerteza relevante relacionada com a continuidade operacional").'
    }
  ],

  // Aula 07 - Controle Interno e Avaliação de Riscos (NBC TA 315)
  7: [
    {
      sub: 'Os Cinco Componentes do Controle Interno (COSO / NBC TA 315)',
      ref: 'NBC TA 315 (R2), item 12(m)',
      t: 'Para fins das normas de auditoria, o sistema de controle interno da entidade divide-se em cinco componentes inter-relacionados: 1) Ambiente de Controle; 2) Processo de Avaliação de Risco da Entidade; 3) Processo da Entidade para Monitorar o Sistema de Controle Interno; 4) Sistema de Informação e Comunicação; e 5) Atividades de Controle.',
      f: 'O Risco de Detecção do auditor independente e a carta de responsabilidade da administração constituem dois dos cinco componentes do controle interno do COSO.',
      exp: 'Os 5 componentes do controle interno (COSO I e NBC TA 315) são: Ambiente de Controle, Avaliação de Riscos, Atividades de Controle, Informação e Comunicação, e Monitoramento.'
    },
    {
      sub: 'Procedimentos de Avaliação de Riscos na NBC TA 315',
      ref: 'NBC TA 315 (R2), item 14',
      t: 'Os procedimentos de avaliação de riscos para obter entendimento da entidade e de seu ambiente e identificar riscos de distorção relevante devem incluir, obrigatoriamente: indagações à administração e a outros indivíduos apropriados na entidade, procedimentos analíticos, e observação e inspeção.',
      f: 'Na fase de avaliação de riscos da NBC TA 315, o auditor está proibido de realizar procedimentos analíticos ou inspeções documentais.',
      exp: 'Os 3 procedimentos obrigatórios de avaliação de riscos (NBC TA 315) são: 1) Indagações; 2) Procedimentos Analíticos; e 3) Observação e Inspeção.'
    },
    {
      sub: 'Atividades de Controle e Segregação de Funções',
      ref: 'NBC TA 315 (R2), Apêndice 3',
      t: 'As atividades de controle compreendem políticas e procedimentos que ajudam a assegurar que as diretrizes da administração sejam executadas, incluindo autorizações e aprovações, reconciliações, verificações, controles físicos e segregação de funções (separando as funções de autorizar transações, registrá-las contabilmente e manter a custódia física dos ativos).',
      f: 'O princípio da segregação de funções recomenda que o mesmo funcionário que custodia o numerário do caixa também realize a conciliação bancária e a aprovação de estornos.',
      exp: 'A segregação de funções impede que um mesmo indivíduo detenha o controle de todas as fases de uma transação (autorização, registro contábil e custódia de ativos), prevenindo fraudes e ocultação de erros.'
    },
    {
      sub: 'Risco Significativo e Espectro de Risco Inerente',
      ref: 'NBC TA 315 (R2), item 12(l)',
      t: 'Risco significativo é um risco identificado de distorção relevante para o qual a avaliação do risco inerente está próxima do limite superior do espectro de risco inerente devido ao grau em que os fatores de risco inerente afetam a combinação da probabilidade de ocorrência de uma distorção e da magnitude da distorção potencial, ou que deva ser tratado como risco significativo por exigência de outra NBC TA (como fraude no reconhecimento de receita).',
      f: 'Na avaliação de um risco significativo, o auditor deve levar em consideração o efeito mitigador dos controles internos antes de classificar o risco inerente.',
      exp: 'A avaliação do risco inerente (e a identificação de risco significativo) é feita ANTES de considerar o efeito de quaisquer controles relacionados.'
    },
    {
      sub: 'Limitações Inerentes do Controle Interno',
      ref: 'NBC TA 315 (R2), Apêndice 3',
      t: 'O controle interno, por mais eficaz que seja, só pode fornecer à entidade asseguração razoável quanto ao cumprimento dos objetivos de relatório financeiro, em virtude de limitações inerentes como a falibilidade do julgamento humano, a possibilidade de conluio entre duas ou mais pessoas e a capacidade de a administração burlar (override) o controle interno.',
      f: 'Um sistema de controle interno totalmente informatizado elimina o risco de conluio entre diretores e a possibilidade de transgressão dos controles pela alta administração.',
      exp: 'Conluio entre funcionários e burla/transgressão pela alta administração (management override) são limitações inerentes a qualquer sistema de controle interno.'
    },
    {
      sub: 'Comunicação de Deficiências de Controle Interno (NBC TA 265)',
      ref: 'NBC TA 265, itens 6 a 9',
      t: 'Existe uma deficiência significativa de controle interno quando uma deficiência ou combinação de deficiências no controle interno é de tal importância que, no julgamento profissional do auditor, merece a atenção dos responsáveis pela governança, devendo o auditor comunicá-las tempestivamente e por escrito aos responsáveis pela governança.',
      f: 'Deficiências significativas de controle interno devem ser comunicadas apenas verbalmente ao contador subordinado, sem registro formal por escrito.',
      exp: 'NBC TA 265, item 9: O auditor deve comunicar tempestivamente POR ESCRITO as deficiências significativas de controle interno identificadas aos responsáveis pela governança.'
    }
  ],

  // Aula 08 - Transações com Partes Relacionadas (NBC TA 550)
  8: [
    {
      sub: 'Conceito de Parte Relacionada (NBC TA 550 e CPC 05)',
      ref: 'NBC TA 550, item 10(b)',
      t: 'Parte relacionada é uma pessoa ou outra entidade que tem controle ou influência significativa, direta ou indiretamente por meio de um ou mais intermediários, sobre a entidade que reporta a informação, ou outra entidade sobre a qual a entidade que reporta tem controle ou influência significativa, ou que está sob controle comum com a entidade que reporta.',
      f: 'Duas empresas são consideradas partes relacionadas pelo simples fato de possuírem um fornecedor de energia elétrica ou um banco comercial em comum.',
      exp: 'Entidades que estão sob controle comum do Estado não são consideradas partes relacionadas entre si, a menos que se envolvam em transações significativas ou compartilhem recursos em extensão significativa (item 10(b)(iii)).'
    },
    {
      sub: 'Riscos Associados a Relacionamentos e Transações com Partes Relacionadas',
      ref: 'NBC TA 550, itens 2 e 3',
      t: 'A natureza dos relacionamentos e transações com partes relacionadas pode, em algumas circunstâncias, dar origem a riscos mais elevados de distorção relevante do que transações com partes não relacionadas, pois partes relacionadas podem operar por meio de uma extensa e complexa gama de relacionamentos e a fraude pode ser mais facilmente cometida em conluio entre elas.',
      f: 'As transações com partes relacionadas possuem risco inerente nulo porque ocorrem entre empresas do mesmo grupo econômico.',
      exp: 'Transações com partes relacionadas podem não ser conduzidas em termos e condições normais de mercado (arm’s length) e facilitam a ocultação de fraudes e passivos.'
    },
    {
      sub: 'Procedimentos para Identificar Partes Relacionadas Não Reveladas',
      ref: 'NBC TA 550, item 15',
      t: 'Durante a auditoria, ao inspecionar registros ou documentos, o auditor deve permanecer alerta para acordos ou outras informações que possam indicar a existência de relacionamentos ou transações com partes relacionadas que a administração não tenha identificado ou divulgado anteriormente, inspecionando confirmações bancárias e de consultores jurídicos e atas de assembleias de acionistas e reuniões da governança.',
      f: 'O auditor deve limitar-se exclusivamente à lista de partes relacionadas fornecida verbalmente pelo diretor comercial, sem inspecionar atas societárias.',
      exp: 'O item 15 da NBC TA 550 exige que o auditor inspecione obrigatoriamente confirmações bancárias/jurídicas e atas de reuniões de acionistas e da governança.'
    },
    {
      sub: 'Transações Significativas Fora do Curso Normal dos Negócios',
      ref: 'NBC TA 550, item 18 e 23',
      t: 'Transações significativas com partes relacionadas identificadas que estejam fora do curso normal dos negócios da entidade devem ser tratadas pelo auditor como dando origem a riscos significativos de distorção relevante, devendo o auditor inspecionar os contratos subjacentes e avaliar se a lógica de negócio sugere fraude ou se os termos são consistentes com as explicações da administração.',
      f: 'Transações significativas com partes relacionadas fora do curso normal dos negócios são classificadas como riscos baixos que dispensam testes substantivos.',
      exp: 'NBC TA 550, item 18: O auditor DEVE tratar transações significativas identificadas com partes relacionadas fora do curso normal dos negócios como geradoras de RISCOS SIGNIFICATIVOS.'
    },
    {
      sub: 'Afirmação de Condições Equivalentes às de Mercado (Arm’s Length)',
      ref: 'NBC TA 550, item 24',
      t: 'Se a administração fez uma afirmação nas demonstrações contábeis de que uma transação com parte relacionada foi conduzida em termos equivalentes àqueles que prevalecem em uma transação em condições normais de mercado (arm’s length), o auditor deve obter evidência de auditoria apropriada e suficiente sobre essa afirmação.',
      f: 'Basta a declaração formal da diretoria de que a venda a uma empresa controlada ocorreu a preços de mercado para que o auditor valide a divulgação sem comprovação externa.',
      exp: 'A administração só pode divulgar que a transação ocorreu em condições de mercado se tal afirmação puder ser comprovada e auditada com evidências externas.'
    },
    {
      sub: 'Representações Formais e Comunicação à Governança sobre Partes Relacionadas',
      ref: 'NBC TA 550, itens 26 e 27',
      t: 'O auditor deve obter representações formais da administração e dos responsáveis pela governança de que divulgaram ao auditor a identidade das partes relacionadas da entidade e todos os relacionamentos e transações das quais têm conhecimento, e de que contabilizaram e divulgaram adequadamente tais relacionamentos e transações.',
      f: 'A NBC TA 550 dispensa a inclusão do tema de partes relacionadas na carta de representações formais (NBC TA 580).',
      exp: 'A obtenção de representação formal específica sobre a completude e divulgação das partes relacionadas é obrigatória pelo item 26 da NBC TA 550.'
    }
  ],

  // Aula 09 - Representações Formais / Cartas de Responsabilidade (NBC TA 580)
  9: [
    {
      sub: 'Conceito e Natureza das Representações Formais (NBC TA 580)',
      ref: 'NBC TA 580 (R1), itens 4 e 7',
      t: 'Representação formal é uma declaração escrita pela administração, fornecida ao auditor, para confirmar certos assuntos ou para suportar outra evidência de auditoria; embora forneça evidência necessária, ela não fornece, por si só, evidência de auditoria apropriada e suficiente a respeito de qualquer dos assuntos dos quais trata.',
      f: 'A carta de representações formais assinada pelo presidente da companhia substitui os procedimentos de confirmação externa de saldos bancários e contagem física de estoques.',
      exp: 'Regra de ouro da NBC TA 580 (item 4): Representações formais são evidências necessárias, mas NUNCA fornecem, por si sós, evidência de auditoria apropriada e suficiente!'
    },
    {
      sub: 'Conteúdo Obrigatório das Representações Formais',
      ref: 'NBC TA 580 (R1), itens 10 e 11',
      t: 'O auditor deve solicitar à administração que forneça representação formal de que cumpriu sua responsabilidade pela elaboração das demonstrações contábeis de acordo com a estrutura de relatório financeiro aplicável, de que forneceu ao auditor todas as informações relevantes e acesso conforme acordado nos termos do trabalho, e de que todas as transações foram registradas e estão refletidas nas demonstrações contábeis.',
      f: 'A carta de representações formais é redigida e assinada pelo próprio auditor independente e entregue ao conselho fiscal da entidade.',
      exp: 'A representação formal emana da ADMINISTRAÇÃO (assinada pelos executivos com responsabilidade pelas demonstrações contábeis) e é endereçada ao auditor independente.'
    },
    {
      sub: 'Data e Período Coberto pelas Representações Formais',
      ref: 'NBC TA 580 (R1), item 14',
      t: 'A data das representações formais deve ser tão próxima quanto praticável, mas não posterior, à data do relatório do auditor sobre as demonstrações contábeis, e as representações formais devem ser referentes a todas as demonstrações contábeis e períodos mencionados no relatório do auditor.',
      f: 'A carta de representações formais deve ser datada trinta dias após a publicação do relatório do auditor independente no jornal oficial.',
      exp: 'Como as representações formais são evidências necessárias sobre eventos até a data do relatório, sua data NUNCA pode ser posterior à data do relatório do auditor (item 14).'
    },
    {
      sub: 'Mudança de Administração e Períodos Anteriores',
      ref: 'NBC TA 580 (R1), item A17',
      t: 'Mesmo quando os membros atuais da administração não estavam presentes durante todos os períodos mencionados no relatório do auditor, as responsabilidades da administração pelas demonstrações contábeis como um todo não são diminuídas, continuando o auditor a solicitar representações formais que cubram a totalidade dos períodos relevantes.',
      f: 'Caso a diretoria da companhia tenha tomado posse no último trimestre do ano, fica dispensada de fornecer representação formal sobre o primeiro semestre.',
      exp: 'A nova administração responde institucionalmente pelas demonstrações contábeis de todos os períodos apresentados e deve fornecer representação formal abrangendo todo o período.'
    },
    {
      sub: 'Dúvidas quanto à Confiabilidade das Representações Formais',
      ref: 'NBC TA 580 (R1), itens 16 a 18',
      t: 'Se o auditor tiver preocupações sobre a competência, integridade, valores éticos ou diligência da administração, ou se as representações formais forem inconsistentes com outras evidências de auditoria obtidas, o auditor deve executar procedimentos de auditoria para tentar solucionar o assunto e, permanecendo a dúvida sobre a integridade da administração, deve abster-se de expressar opinião.',
      f: 'Se uma representação formal contradisser o extrato bancário obtido por circularização, prevalece automaticamente a palavra escrita da administração.',
      exp: 'Havendo contradição, o auditor investiga e reconsidera a confiabilidade de todas as representações da administração.'
    },
    {
      sub: 'Recusa da Administração em Fornecer Representações Formais (Abstenção Obrigatória)',
      ref: 'NBC TA 580 (R1), itens 19 e 20',
      t: 'O auditor deve abster-se de expressar uma opinião sobre as demonstrações contábeis, nos termos da NBC TA 705, se concluir que há dúvida suficiente sobre a integridade da administração de modo que as representações formais não sejam confiáveis, ou se a administração não fornecer as representações formais obrigatórias.',
      f: 'A recusa da administração em assinar a carta de representações formais gera apenas a inclusão de um parágrafo de outros assuntos em um relatório sem ressalva.',
      exp: 'NBC TA 580, item 20: Se a administração se recusar a fornecer as representações formais dos itens 10 e 11, o auditor DEVE emitir ABSTENÇÃO DE OPINIÃO!'
    }
  ],

  // Aula 10 - Avaliação das Distorções Identificadas (NBC TA 450)
  10: [
    {
      sub: 'Acumulação de Distorções Identificadas (NBC TA 450)',
      ref: 'NBC TA 450 (R1), item 5',
      t: 'O auditor deve acumular as distorções identificadas durante a auditoria, que não sejam claramente triviais (manifestamente irrelevantes), para avaliar o efeito das distorções identificadas na auditoria e o efeito das distorções não corrigidas, se houver, sobre as demonstrações contábeis.',
      f: 'O termo "claramente trivial" na NBC TA 450 possui o exato mesmo significado técnico que a expressão "não relevante" (imaterial).',
      exp: 'NBC TA 450, item A2: "Claramente trivial" NÃO é outra expressão para "não relevante". Assuntos claramente triviais são de ordem de grandeza totalmente diferente (muito menores) que a materialidade e mesmo acumulados jamais terão efeito relevante.'
    },
    {
      sub: 'Classificação das Distorções: Factuais, de Julgamento e Projetadas',
      ref: 'NBC TA 450 (R1), item A6',
      t: 'Para auxiliar na avaliação do efeito das distorções acumuladas, é útil distinguir entre: distorções factuais (sobre as quais não há dúvida), distorções de julgamento (diferenças decorrentes de julgamentos da administração sobre estimativas contábeis ou políticas que o auditor considera não razoáveis) e distorções projetadas (melhor estimativa do auditor em populações, envolvendo extrapolação de amostras).',
      f: 'As distorções projetadas por amostragem estatística constituem distorções factuais exatas que obrigam a empresa a ajustar individualmente cada nota fiscal não auditada.',
      exp: 'A distorção projetada é uma extrapolação estatística para avaliar o efeito global na conta, distinguindo-se da distorção factual comprovada item a item.'
    },
    {
      sub: 'Comunicação e Solicitação de Correção de Distorções à Administração',
      ref: 'NBC TA 450 (R1), itens 8 e 9',
      t: 'O auditor deve comunicar tempestivamente todas as distorções acumuladas durante a auditoria ao nível apropriado da administração (salvo se proibido por lei) e solicitar que ela corrija essas distorções; caso a administração se recuse a corrigir algumas ou todas as distorções, o auditor deve obter o entendimento das razões da administração e avaliar se as demonstrações contábeis como um todo estão livres de distorção relevante.',
      f: 'Cabe ao próprio auditor independente acessar o sistema contábil do cliente e realizar diretamente os lançamentos de estorno das distorções identificadas.',
      exp: 'A escrituração e a correção das demonstrações contábeis são de responsabilidade exclusiva da administração; o auditor comunica e solicita a correção.'
    },
    {
      sub: 'Avaliação Qualitativa de Distorções Abaixo da Materialidade',
      ref: 'NBC TA 450 (R1), item A21',
      t: 'Circunstâncias relacionadas a certas distorções podem levar o auditor a avaliá-las como relevantes, individualmente ou em conjunto, mesmo que estejam abaixo do limite numérico de materialidade para as demonstrações contábeis como um todo, como quando a distorção afeta a conformidade com cláusulas restritivas de dívida (covenants), mascara uma mudança nos lucros ou aumenta a remuneração de executivos.',
      f: 'Qualquer distorção cujo valor monetário seja inferior à materialidade de execução deve ser automaticamente considerada irrelevante pelo auditor, ainda que decorra de fraude ou afete covenants bancários.',
      exp: 'O aspecto QUALITATIVO pode tornar relevante uma distorção quantitativamente pequena (ex: reverter prejuízo em lucro, atingir bônus de diretoria ou violar covenants).'
    },
    {
      sub: 'Comunicação de Distorções Não Corrigidas aos Responsáveis pela Governança',
      ref: 'NBC TA 450 (R1), itens 12 e 13',
      t: 'O auditor deve comunicar aos responsáveis pela governança as distorções não corrigidas e o efeito que elas, individualmente ou em conjunto, possam ter sobre a opinião no relatório do auditor, identificando individualmente as distorções relevantes não corrigidas e solicitando que sejam corrigidas.',
      f: 'O auditor só deve comunicar distorções não corrigidas aos responsáveis pela governança se o somatório superar 50% do patrimônio líquido.',
      exp: 'Todas as distorções não corrigidas (exceto as claramente triviais) devem ser comunicadas à governança, destacando individualmente as relevantes.'
    },
    {
      sub: 'Representação Formal sobre Distorções Não Corrigidas',
      ref: 'NBC TA 450 (R1), item 14',
      t: 'O auditor deve solicitar representação formal da administração e, quando apropriado, dos responsáveis pela governança sobre se eles acreditam que os efeitos das distorções não corrigidas são irrelevantes, individualmente e em conjunto, para as demonstrações contábeis como um todo, devendo um resumo desses itens ser incluído ou anexado à representação formal.',
      f: 'Existindo distorções não corrigidas imateriais, fica proibida a emissão de carta de representação formal pela administração.',
      exp: 'Item 14 da NBC TA 450: O resumo das distorções não corrigidas deve constar na (ou anexo à) carta de representação formal.'
    }
  ],

  // Aula 11 - Utilização de Outros Profissionais / Auditores Internos (NBC TA 610/620)
  11: [
    {
      sub: 'Uso do Trabalho da Auditoria Interna pelo Auditor Independente (NBC TA 610)',
      ref: 'NBC TA 610, itens 11 e 15',
      t: 'O auditor independente é o único responsável pela opinião de auditoria expressa, e essa responsabilidade não é reduzida pela utilização do trabalho da função de auditoria interna ou de auditores internos para prestar assistência direta, devendo o auditor externo avaliar a objetividade, o nível de competência e se a auditoria interna aplica uma abordagem sistemática e disciplinada.',
      f: 'Quando o auditor independente utiliza o trabalho da auditoria interna, deve dividir a responsabilidade pela opinião fazendo referência expressa aos auditores internos no relatório de auditoria.',
      exp: 'Princípio da responsabilidade indivisível: a utilização da auditoria interna (NBC TA 610) ou de especialista (NBC TA 620) NUNCA reduz a responsabilidade exclusiva do auditor independente.'
    },
    {
      sub: 'Vedações ao Uso da Auditoria Interna e de Assistência Direta',
      ref: 'NBC TA 610, itens 16, 18 e 30',
      t: 'O auditor independente não deve utilizar o trabalho da função de auditoria interna se determinar que o posicionamento organizacional e as políticas não suportam a objetividade dos auditores internos, que a função não tem competência suficiente ou que não aplica abordagem sistemática; além disso, deve usar menos o trabalho da auditoria interna quanto mais alto for o risco avaliado de distorção relevante e quanto maior for o grau de julgamento envolvido.',
      f: 'O auditor independente pode delegar integralmente à auditoria interna a avaliação final dos riscos significativos de fraude e das estimativas contábeis críticas.',
      exp: 'Quanto maior a subjetividade/julgamento e maior o risco de distorção relevante, mais procedimentos o próprio auditor independente deve executar diretamente.'
    },
    {
      sub: 'Conceito de Especialista do Auditor vs. Especialista da Administração (NBC TA 620)',
      ref: 'NBC TA 620, item 6',
      t: 'Especialista do auditor é uma pessoa ou organização com especialização em área que não seja contabilidade ou auditoria (como cálculos atuariais, avaliação de imóveis, reservas minerais ou engenharia ambiental), cujo trabalho nessa área é utilizado pelo auditor para ajudá-lo a obter evidência de auditoria apropriada e suficiente.',
      f: 'Um tributarista ou contador especialista em normas internacionais de contabilidade (IFRS/CPC) contratado pela firma de auditoria é classificado como especialista do auditor segundo a NBC TA 620.',
      exp: 'Pegadinha clássica (NBC TA 620, item 6(a)): Especialista em contabilidade ou auditoria integra a equipe do trabalho (NBC TA 220), NÃO sendo "especialista do auditor" (que atua somente em área diferente de contabilidade e auditoria!).'
    },
    {
      sub: 'Avaliação da Competência, Habilidade e Objetividade do Especialista (NBC TA 620)',
      ref: 'NBC TA 620, itens 9 a 13',
      t: 'O auditor deve avaliar se o especialista do auditor possui a competência, as habilidades e a objetividade necessárias para os fins do auditor, bem como avaliar a adequação do trabalho desse especialista como evidência de auditoria no que tange à relevância e razoabilidade de suas constatações, conclusões, premissas, métodos e dados básicos utilizados.',
      f: 'Por não dominar a área técnica do engenheiro ou atuário contratado, o auditor independente deve aceitar cegamente as conclusões do laudo sem avaliar a razoabilidade das premissas.',
      exp: 'NBC TA 620, item 12: O auditor deve avaliar a relevância e a razoabilidade das constatações, premissas significativas, métodos e dados básicos do especialista.'
    },
    {
      sub: 'Referência ao Especialista no Relatório do Auditor Independente',
      ref: 'NBC TA 620, itens 14 e 15',
      t: 'O auditor não deve fazer referência ao trabalho de especialista do auditor em seu relatório que contenha opinião não modificada (sem ressalva), a menos que seja exigido por lei ou regulamento; caso faça referência em relatório com opinião modificada para explicar a modificação, deve indicar no relatório que a referência não reduz a sua responsabilidade por essa opinião.',
      f: 'Em todo relatório de auditoria sem ressalva deve constar o nome e o número de registro profissional de todos os peritos e atuários consultados.',
      exp: 'Em opinião não modificada (limpa), é VEDADO fazer referência ao especialista do auditor (salvo imposição legal), para não sugerir divisão de responsabilidade.'
    },
    {
      sub: 'Auditor do Grupo vs. Auditor de Componente (NBC TA 600)',
      ref: 'NBC TA 600 (R1), item 11',
      t: 'Na auditoria de demonstrações contábeis de grupos econômicos (consolidadas), o sócio encarregado do trabalho do grupo é responsável pela direção, supervisão e execução do trabalho de auditoria do grupo, e o relatório do auditor sobre as demonstrações contábeis do grupo não deve se referir ao auditor de componente, a menos que exigido por lei ou regulamento.',
      f: 'Pelas normas brasileiras de auditoria (NBC TA 600), o auditor da holding pode eximir-se de responsabilidade pelas controladas citando o nome dos auditores das subsidiárias em seu parecer.',
      exp: 'No Brasil (NBC TA 600), vigora a responsabilidade única e indivisível do auditor do grupo, sendo vedada a divisão de responsabilidade com auditores de componentes.'
    }
  ],

  // Aula 12 - Procedimentos em Áreas Específicas (Parte 1: Estoques, Litígios e Segmentos - NBC TA 501)
  12: [
    {
      sub: 'Acompanhamento da Contagem Física dos Estoques (NBC TA 501)',
      ref: 'NBC TA 501, item 4',
      t: 'Se o estoque for relevante para as demonstrações contábeis, o auditor deve obter evidência de auditoria apropriada e suficiente quanto à existência e às condições do estoque mediante o acompanhamento de sua contagem física (a menos que seja impraticável), avaliando as instruções da administração, observando a execução dos procedimentos, inspecionando o estoque e executando testes de contagem.',
      f: 'A responsabilidade pela realização do inventário físico anual dos estoques é exclusiva da firma de auditoria independente, que deve contar 100% dos itens.',
      exp: 'Quem realiza a contagem física (inventário) é a ADMINISTRAÇÃO da entidade; o auditor acompanha a contagem (observação), inspeciona as condições (obsolescência/avarias) e faz testes de contagem em ambas as direções (do piso para a listagem = integridade; da listagem para o piso = existência).'
    },
    {
      sub: 'Impossibilidade de Acompanhar a Contagem Física na Data Planejada',
      ref: 'NBC TA 501, itens 6 e 7',
      t: 'Se o auditor não puder acompanhar a contagem física dos estoques devido a circunstâncias imprevistas, ele deve realizar ou observar algumas contagens físicas em data alternativa e executar procedimentos de auditoria sobre as transações ocorridas no período intermediário (roll-forward / roll-back); e se o acompanhamento for impraticável (ex: risco à segurança), deve executar procedimentos alternativos.',
      f: 'Quando o acompanhamento da contagem física do estoque é impraticável por questões climáticas ou de segurança, a simples carta da diretoria substitui qualquer procedimento alternativo.',
      exp: 'Se for impraticável acompanhar a contagem física, o auditor deve executar procedimentos alternativos (ex: inspeção de documentação de venda subsequente de itens adquiridos antes da contagem); se não for possível obter evidência por procedimentos alternativos, deve modificar a opinião (NBC TA 705).'
    },
    {
      sub: 'Estoques sob Custódia e Controle de Terceiros (Armazéns Gerais / Consignação)',
      ref: 'NBC TA 501, item 8',
      t: 'Se o estoque sob custódia e controle de terceiros for relevante para as demonstrações contábeis, o auditor deve obter evidência quanto à sua existência e condição solicitando confirmação ao terceiro quanto às quantidades e condições do estoque mantido em nome da entidade e/ou executando inspeção ou outro procedimento de auditoria apropriado.',
      f: 'Mercadorias remetidas para guarda em armazéns gerais de terceiros deixam de integrar o ativo da empresa remetente e não são objeto de auditoria.',
      exp: 'Estoques da entidade em poder de terceiros continuam no Ativo da entidade e exigem confirmação externa (circularização ao depositário) e/ou inspeção física.'
    },
    {
      sub: 'Identificação de Litígios e Reclamações (Contingências Jurídicas - NBC TA 501)',
      ref: 'NBC TA 501, itens 9 a 11',
      t: 'O auditor deve definir e executar procedimentos de auditoria para identificar litígios e reclamações que envolvam a entidade e possam gerar risco de distorção relevante, incluindo indagação à administração e ao consultor jurídico interno, revisão de atas de reuniões dos responsáveis pela governança, revisão de contas de despesas jurídicas e envio de carta de indagação aos consultores jurídicos externos.',
      f: 'A carta de circularização aos advogados externos deve ser redigida e enviada pelo auditor diretamente sem o conhecimento ou assinatura da administração da empresa.',
      exp: 'NBC TA 501, item 10: A comunicação direta com os consultores jurídicos externos é feita por meio de carta de indagação elaborada pela ADMINISTRAÇÃO e enviada pelo auditor, solicitando que o advogado responda diretamente ao auditor.'
    },
    {
      sub: 'Recusa de Comunicação com Consultores Jurídicos Externos',
      ref: 'NBC TA 501, item 11',
      t: 'Se a administração se recusar a dar permissão ao auditor para se comunicar ou reunir com os consultores jurídicos externos, ou se o consultor jurídico externo se recusar a responder apropriadamente à carta de indagação e o auditor não puder obter evidência por procedimentos alternativos, o auditor deve modificar a opinião no seu relatório de acordo com a NBC TA 705.',
      f: 'A proibição imposta pela diretoria de o auditor contatar os escritórios de advocacia externos é irrelevante se o departamento contábil fornecer uma planilha de provisões.',
      exp: 'A recusa da administração em autorizar a circularização dos advogados externos configura limitação de escopo imposta pela administração, exigindo modificação da opinião (Ressalva ou Abstenção).'
    },
    {
      sub: 'Informações por Segmentos (NBC TA 501 e CPC 22)',
      ref: 'NBC TA 501, item 13',
      t: 'O auditor deve obter evidência de auditoria apropriada e suficiente a respeito da apresentação e divulgação de informações por segmentos de acordo com a estrutura de relatório financeiro aplicável mediante a obtenção de entendimento dos métodos utilizados pela administração e a execução de procedimentos analíticos.',
      f: 'O auditor independente é obrigado a auditar individualmente cada segmento operacional como se fosse uma entidade jurídica autônoma, emitindo um parecer separado por segmento.',
      exp: 'NBC TA 501, A26: A responsabilidade do auditor refere-se às demonstrações contábeis como um todo, não sendo exigido executar procedimentos que seriam necessários para expressar opinião isolada sobre as informações por segmento.'
    }
  ],

  // Aula 13 - Procedimentos em Áreas Específicas (Parte 2: Confirmações Externas, Saldos Iniciais, Estimativas e Eventos Subsequentes)
  13: [
    {
      sub: 'Confirmações Externas / Circularização (NBC TA 505): Positiva vs. Negativa',
      ref: 'NBC TA 505, item 6',
      t: 'Solicitação de confirmação positiva é aquela em que a parte que confirma responde diretamente ao auditor indicando se concorda ou discorda das informações (em preto) ou fornecendo as informações solicitadas (em branco); já na confirmação negativa, a parte que confirma responde diretamente ao auditor somente se discordar das informações fornecidas na solicitação.',
      f: 'A solicitação de confirmação negativa fornece evidência de auditoria mais persuasiva e confiável do que a solicitação de confirmação positiva.',
      exp: 'NBC TA 505, item 15: Confirmações negativas fornecem evidência de auditoria MENOS persuasiva que confirmações positivas e só podem ser usadas como único procedimento substantivo se 4 condições cumulativas forem atendidas (RDR baixo, população de pequenos saldos homogêneos, taxa de exceção muito baixa esperada e ausência de circunstâncias que façam os destinatários ignorarem os pedidos).'
    },
    {
      sub: 'Ausência de Resposta à Confirmação Positiva e Recusa da Administração',
      ref: 'NBC TA 505, itens 8 e 12',
      t: 'No caso de cada não resposta a uma solicitação de confirmação positiva, o auditor deve executar procedimentos alternativos de auditoria para obter evidência relevante e confiável (ex: exame de recebimentos de caixa subsequentes ou notas fiscais e comprovantes de entrega para contas a receber).',
      f: 'Quando um cliente circularizado não responde a uma solicitação de confirmação positiva, o auditor deve presumir tacitamente que o saldo contábil está integralmente correto.',
      exp: 'Na confirmação POSITIVA, a falta de resposta NÃO valida o saldo; obriga o auditor a realizar procedimentos alternativos.'
    },
    {
      sub: 'Trabalhos Iniciais – Saldos Iniciais (NBC TA 510)',
      ref: 'NBC TA 510, itens 6 e 10',
      t: 'Na condução de trabalho de auditoria inicial (quando as demonstrações do período anterior não foram auditadas ou foram auditadas por auditor antecessor), o auditor deve obter evidência sobre se os saldos iniciais contêm distorções que afetem de forma relevante as demonstrações do período corrente e se as políticas contábeis foram aplicadas de maneira uniforme.',
      f: 'Na auditoria inicial, o novo auditor fica isento de verificar os saldos iniciais de estoques e passivos trazidos do balanço do exercício anterior.',
      exp: 'Se o auditor não conseguir obter evidência suficiente a respeito dos saldos iniciais, deve expressar opinião com ressalva ou abster-se de expressar opinião sobre as demonstrações do período corrente (item 10).'
    },
    {
      sub: 'Auditoria de Estimativas Contábeis e Divulgações Relacionadas (NBC TA 540)',
      ref: 'NBC TA 540 (R2), itens 13 e 18',
      t: 'Para testar uma estimativa contábil (como provisão para perdas de crédito esperadas, vida útil de ativos ou valor justo nível 3), o auditor deve aplicar uma ou mais das seguintes abordagens: obter evidência de eventos ocorridos até a data do relatório do auditor, testar como a administração fez a estimativa contábil (método, premissas e dados) ou desenvolver uma estimativa pontual ou intervalo do próprio auditor.',
      f: 'A simples diferença entre o desfecho real futuro de uma estimativa contábil e o valor originalmente estimado nas demonstrações contábeis comprova a existência de erro ou fraude.',
      exp: 'NBC TA 540: Uma diferença entre o desfecho real de uma estimativa contábil e o valor originalmente reconhecido NÃO representa necessariamente uma distorção das demonstrações contábeis.'
    },
    {
      sub: 'Eventos Subsequentes (NBC TA 560 e CPC 24): Eventos que Geram Ajuste vs. Divulgação',
      ref: 'NBC TA 560, itens 6 a 10',
      t: 'O auditor deve executar procedimentos destinados a obter evidência de que todos os eventos ocorridos entre a data das demonstrações contábeis e a data do relatório do auditor que precisam ser ajustados (evidenciam condições que já existiam na data do balanço) ou divulgados (indicam condições que surgiram após a data do balanço) nas demonstrações contábeis foram identificados.',
      f: 'O auditor tem obrigação ativa de continuar executando procedimentos de auditoria sobre as demonstrações contábeis durante os cinco anos posteriores à data de emissão de seu relatório.',
      exp: 'NBC TA 560, item 10: O auditor NÃO tem obrigação de executar nenhum procedimento de auditoria em relação às demonstrações contábeis APÓS a data do seu relatório, salvo se tomar conhecimento de fato que, se conhecido na data do relatório, poderia tê-lo levado a alterar o relatório.'
    },
    {
      sub: 'Procedimentos Analíticos Substantivos e na Conclusão da Auditoria (NBC TA 520)',
      ref: 'NBC TA 520, itens 5 e 6',
      t: 'Os procedimentos analíticos são obrigatórios na fase de avaliação de riscos (NBC TA 315) e perto do final da auditoria para formar uma conclusão geral sobre se as demonstrações contábeis são consistentes com o entendimento do auditor sobre a entidade, podendo ainda ser usados opcionalmente como procedimentos analíticos substantivos durante a execução.',
      f: 'Os procedimentos analíticos substantivos são obrigatórios para todas as contas do balanço, sendo opcionais na fase final de conclusão da auditoria.',
      exp: 'Regra clássica (NBC TA 315 e 520): Procedimentos analíticos são OBRIGATÓRIOS no planejamento/avaliação de riscos e na conclusão geral da auditoria, e FACULTATIVOS como testes substantivos.'
    }
  ],

  // Aula 14 - Auditoria Fiscal e Tributária (Parte 1: Escrituração Digital, SPED e Auditoria de Contas do Ativo)
  14: [
    {
      sub: 'Auditoria no Ambiente do SPED Fiscal (EFD-ICMS/IPI) e NF-e',
      ref: 'Ajuste SINIEF 02/2009 e Legislação do ICMS-BA (Lei nº 7.014/1996)',
      t: 'Na auditoria fiscal eletrônica do ICMS, o Auditor Fiscal confronta os registros da Escrituração Fiscal Digital (como o Bloco C - Documentos Fiscais de Mercadorias, Registros C100 e C170, e o Bloco H - Inventário Físico) com a base nacional de arquivos XML das Notas Fiscais Eletrônicas (NF-e) e Conhecimentos de Transporte Eletrônicos (CT-e) para detectar omissão de entradas ou saídas e aproveitamento indevido de créditos.',
      f: 'A transmissão do arquivo digital da EFD-ICMS/IPI pelo contribuinte homologa automaticamente todos os créditos fiscais escriturados e impede a revisão de ofício pela SEFAZ-BA.',
      exp: 'A EFD-ICMS/IPI tem natureza de declaração do sujeito passivo, sujeita à auditoria fiscal e revisão de ofício dentro do prazo decadencial de 5 anos (arts. 149 e 150 do CTN).'
    },
    {
      sub: 'Auditoria da Conta Caixa: Saldo Credor ("Estouro de Caixa") e Suprimento Não Comprovado',
      ref: 'Art. 12, § 2º do DL nº 1.598/1977 e Lei Estadual BA nº 7.014/1996',
      t: 'A constatação de saldo credor na conta Caixa (ou equivalentes de caixa sem cobertura de contrato de limite bancário) após a reconstituição cronológica do fluxo diário, bem como a falta de comprovação da origem e da efetiva entrega de recursos aportados a título de suprimento de caixa por sócios, caracteriza presunção legal relativa (juris tantum) de omissão de receitas e de saídas de mercadorias desacobertadas de documento fiscal.',
      f: 'O saldo credor na conta Caixa é situação contábil normal derivada da natureza credora das contas de disponibilidades no ativo circulante.',
      exp: 'A conta Caixa tem natureza DEVEDORA e representa numerário físico; logo, jamais pode ter saldo negativo (credor). Se os pagamentos superam os ingressos registrados ("estouro de caixa"), presume-se que foram pagos com receitas omitidas ("caixa dois").'
    },
    {
      sub: 'Reconstituição do Fluxo de Caixa e Expurgo de Cheques/Bancos',
      ref: 'Técnicas de Auditoria Fiscal de Disponibilidades',
      t: 'Quando a empresa auditada mantém escrituração englobada na rubrica "Caixa e Bancos", o auditor fiscal deve segregar as movimentações bancárias (conciliáveis por extratos oficiais) da movimentação física em espécie da conta Caixa antes de apurar eventual saldo credor de caixa por omissão de receitas.',
      f: 'Para caracterizar o estouro de caixa fiscal, basta verificar o saldo final da conta em 31 de dezembro, sendo proibido ao auditor reconstituir os saldos diários ao longo do ano.',
      exp: 'O estouro de caixa pode ser mascarado ao final do mês ou do ano com lançamentos fictícios; por isso a auditoria fiscal reconstitui o fluxo diário ou periódico da conta Caixa isolada das contas bancárias.'
    },
    {
      sub: 'Roteiro de Auditoria de Estoques: Levantamento Quantitativo por Espécie',
      ref: 'Auditoria Fiscal de Mercadorias e Equação Básica de Estoques',
      t: 'No levantamento quantitativo de estoques em exercício fechado (EI + Compras - Saídas = EF), se o Estoque Final Físico/Inventariado for MAIOR que o estoque escritural apurado (EF > EI + C - S), resta configurada omissão de entradas (compras sem nota fiscal, geradas com recursos de omissão anterior); já se o Estoque Final Físico for MENOR (EF < EI + C - S), configura-se omissão de saídas (vendas sem emissão de nota fiscal).',
      f: 'Quando o estoque físico final encontrado na contagem é inferior ao saldo que deveria existir segundo as notas fiscais de entrada e saída, configura-se excesso de compras tributadas.',
      exp: 'Raciocínio fundamental do Auditor Fiscal: Se deveria haver 1.000 unidades (EI + Compras - Vendas com nota = 1.000), mas no estoque final só existem 600 unidades, faltam 400 unidades que SAÍRAM SEM NOTA FISCAL (omissão de saídas)!'
    },
    {
      sub: 'Glosa de Créditos Fiscais de ICMS: Documentos Inidôneos e Mercadorias de Uso e Consumo',
      ref: 'LC nº 87/1996 (arts. 20 e 33) e Súmula 509 do STJ',
      t: 'A apropriação de créditos de ICMS sobre mercadorias destinadas ao uso ou consumo do estabelecimento permanece vedada até 1º de janeiro de 2033, e o crédito destacado em nota fiscal declarada inidônea deve ser glosado pelo Fisco, salvo se o comerciante adquirente de boa-fé demonstrar a veracidade da operação de compra e venda (comprovante de pagamento bancário e entrada física da mercadoria - Súmula 509 do STJ).',
      f: 'A declaração de inidoneidade de uma empresa fornecedora impede em caráter absoluto o aproveitamento do crédito de ICMS pelo comprador, mesmo que comprove a boa-fé e o pagamento bancário.',
      exp: 'Súmula 509 do STJ: É lícito ao comerciante de boa-fé aproveitar os créditos de ICMS decorrentes de nota fiscal posteriormente declarada inidônea, quando demonstrada a veracidade da compra e venda.'
    },
    {
      sub: 'Auditoria do Ativo Imobilizado e Controle de Crédito de ICMS (CIAP - Bloco G)',
      ref: 'Art. 20, § 5º da LC nº 87/1996 e Bloco G da EFD',
      t: 'Os créditos de ICMS decorrentes da entrada de bens destinados ao ativo permanente vinculados à atividade operacional são apropriados à razão de 1/48 (um quarenta e oito avos) por mês no Controle de Crédito de ICMS do Ativo Permanente (CIAP - Bloco G do SPED Fiscal), na proporção das saídas tributadas e de exportação sobre o total das saídas do período, sendo vedado o crédito sobre bens alheios à atividade do estabelecimento.',
      f: 'Na aquisição de máquinas para o ativo imobilizado industrial, o contribuinte pode creditar-se integralmente de 100% do ICMS no próprio mês da compra, independentemente de realizar saídas isentas.',
      exp: 'LC 87/96, art. 20, § 5º: O crédito do ativo permanente é fracionado em 48 meses (1/48 ao mês), multiplicado pelo coeficiente de saídas tributadas + exportações dividido pelo total de saídas do mês, extinguindo-se o saldo remanescente ao final do 48º mês ou em caso de alienação antes desse prazo.'
    }
  ],

  // Aula 15 - Auditoria Fiscal e Tributária (Parte 2: Auditoria do Passivo, PL, DRE e Cruzamentos Fiscais)
  15: [
    {
      sub: 'Auditoria do Passivo Circulante: Passivo Fictício e Passivo Não Comprovado',
      ref: 'Art. 281 do RIR e Lei Estadual BA nº 7.014/1996',
      t: 'Caracteriza omissão de receitas (e presunção de operações tributáveis desacobertadas) a manutenção no passivo de obrigações já pagas (passivo fictício por omissão do registro da baixa) ou a manutenção de obrigações cuja exigibilidade não seja comprovada por documentação hábil e idônea.',
      f: 'A manutenção de duplicatas já quitadas em aberto na conta Fornecedores do Passivo Circulante reduz artificialmente as dívidas da empresa e gera crédito tributário a favor do contribuinte.',
      exp: 'Quando a empresa paga um fornecedor com recursos de "caixa dois" (vendas sem nota), ela não pode dar baixa debitando Fornecedores e creditando Caixa (pois faltaria saldo no Caixa oficial). Assim, a obrigação já paga continua figurando no Passivo ("passivo fictício"), provando a omissão de receitas!'
    },
    {
      sub: 'Auditoria de Empréstimos de Sócios (Mútuos Passivos) e Integralização de Capital',
      ref: 'Auditoria Fiscal de Passivo e Patrimônio Líquido',
      t: 'No exame de empréstimos contraídos junto a sócios ou partes relacionadas (mútuos) e de aumentos de capital social em moeda corrente, o auditor fiscal exige a comprovação simultânea da origem/capacidade econômico-financeira do supridor (DIRPF do sócio) e da efetiva entrega/ingresso bancário dos recursos na sociedade, sob pena de presunção de omissão de receitas.',
      f: 'Para afastar a presunção de omissão de receitas em suprimento de caixa feito pelo sócio, basta a apresentação de contrato particular de mútuo registrado em cartório, dispensando-se prova da transferência bancária e da capacidade financeira do sócio.',
      exp: 'Jurisprudência administrativa e judicial pacífica (CARF/CONSEF-BA): O suprimento de caixa ou aumento de capital por sócio exige comprovação do binômio: 1) Capacidade financeira/origem lícita do sócio; E 2) Efetividade da entrega/transferência bancária.'
    },
    {
      sub: 'Cruzamento de Meios de Pagamento (TEF / Cartões / PIX - DIMP) com NF-e e NFC-e',
      ref: 'Convênio ICMS 134/2016 e Auditoria Eletrônica SEFAZ-BA',
      t: 'Por meio da Declaração de Informações de Meios de Pagamento (DIMP), as instituições financeiras e administradoras de cartões informam à SEFAZ os valores mensais recebidos pelo contribuinte via cartão de crédito, débito e PIX; se o montante informado pelas operadoras superar o faturamento declarado em NF-e/NFC-e no período, resta comprovada a omissão de saídas tributadas.',
      f: 'O Fisco Estadual depende de autorização judicial prévia individualizada para cruzar os valores declarados pelas administradoras de cartões de crédito com as notas fiscais emitidas pelo contribuinte.',
      exp: 'Nos termos do Art. 6º da LC 105/2001 (validado pelo STF no Tema 225) e do Convênio ICMS 134/2016, a administração tributária tem acesso direto às informações de meios de pagamento para fiscalização de omissão de receitas.'
    },
    {
      sub: 'Auditoria da DRE: Subfaturamento, Superfaturamento de Custos e Notas Fiscais Calçadas',
      ref: 'Fraudes Fiscais e Contábeis no Resultado',
      t: 'Denomina-se "nota fiscal calçada" a fraude em que a via que acompanha a mercadoria e é entregue ao comprador consigna o valor real da venda, enquanto a via ou registro destinado à escrituração fiscal consigna valor substancialmente inferior; na era digital, fraudes análogas ocorrem mediante subfaturamento com recebimento da diferença "por fora" ou simulação de devoluções de vendas não efetivadas.',
      f: 'O registro de compras fictícias (notas fiscais "frias" sem entrada física de mercadorias) tem por objetivo aumentar o lucro tributável e elevar o recolhimento de ICMS.',
      exp: 'A contabilização de compras fictícias ("notas frias") visa gerar crédito indevido de ICMS, inflar o CMV para reduzir artificialmente o lucro tributável (IRPJ/CSLL) e justificar a saída de caixa para distribuição disfarçada ou caixa dois.'
    },
    {
      sub: 'Auditoria da Conta Mercadorias: Conta Mista vs. Conta Desdobrada e Arbitramento',
      ref: 'Art. 148 do CTN e Auditoria de CMV',
      t: 'Quando a escrituração fiscal ou contábil do contribuinte for omissa, inidônea ou não merecer fé por vícios insanáveis que impossibilitem a apuração direta do movimento real, a autoridade fiscal está autorizada pelo Art. 148 do CTN e pela legislação estadual a realizar o arbitramento da base de cálculo mediante processo regular em que seja assegurado o contraditório.',
      f: 'O arbitramento fiscal da base de cálculo do ICMS constitui sanção punitiva discricionária que pode ser aplicada mesmo quando a escrituração contábil do contribuinte é regular e fidedigna.',
      exp: 'O arbitramento (Art. 148 do CTN) NÃO é penalidade/sanção, mas técnica excepcional e subsidiária de apuração da base de cálculo quando os documentos ou declarações do sujeito passivo forem omissos ou não merecerem fé.'
    },
    {
      sub: 'Conciliação entre EFD-ICMS/IPI, ECD (SPED Contábil) e ECF',
      ref: 'Auditoria Digital Integrada no Sistema Público de Escrituração Digital',
      t: 'Na auditoria fiscal integrada, o auditor cruza os saldos de estoques, receitas brutas, compras, ICMS a recolher e ativo imobilizado informados na EFD-ICMS/IPI com os lançamentos do Livro Diário e Razão da Escrituração Contábil Digital (ECD) e com a Escrituração Contábil Fiscal (ECF), identificando divergências entre o faturamento contábil e a receita tributada pelo ICMS.',
      f: 'As informações prestadas pelo contribuinte na Escrituração Contábil Digital (ECD) não podem ser utilizadas pela fiscalização estadual por pertencerem exclusivamente à Receita Federal.',
      exp: 'O ambiente SPED integra as administrações tributárias federal, estaduais e municipais (Art. 37, XXII da CF/88 e Art. 199 do CTN), permitindo o cruzamento direto entre ECD, ECF e EFD-ICMS/IPI.'
    }
  ],

  // Aula 16 - Estrutura Conceitual para Trabalhos de Asseguração (NBC TO)
  16: [
    {
      sub: 'Conceito e Elementos de um Trabalho de Asseguração (NBC TA Estrutura Conceitual)',
      ref: 'NBC TA Estrutura Conceitual, itens 10 e 20',
      t: 'Trabalho de asseguração é aquele no qual o auditor independente visa obter evidências apropriadas e suficientes para expressar sua conclusão de forma a aumentar o grau de confiança dos usuários previstos (outros que não a parte responsável) sobre o resultado da mensuração ou avaliação do objeto de acordo com critérios aplicáveis, exigindo a presença de cinco elementos: 1) relação entre três partes; 2) objeto apropriado; 3) critérios adequados; 4) evidências apropriadas e suficientes; e 5) relatório de asseguração por escrito.',
      f: 'Consultorias tributárias, elaboração de declarações de imposto de renda e trabalhos de procedimentos previamente acordados (NBC TSC 4400) são classificados como trabalhos de asseguração razoável.',
      exp: 'Trabalhos de procedimentos previamente acordados (NBC TSC 4400), compilação contábil (NBC TSC 4410) e consultorias NÃO são trabalhos de asseguração, pois o auditor não expressa opinião/conclusão de asseguração.'
    },
    {
      sub: 'Asseguração Razoável vs. Asseguração Limitada',
      ref: 'NBC TA Estrutura Conceitual, itens 12 e 14',
      t: 'No trabalho de asseguração razoável (como a auditoria de demonstrações contábeis), o auditor reduz o risco do trabalho a um nível aceitavelmente baixo e expressa sua conclusão de forma positiva; já no trabalho de asseguração limitada (como a revisão de informações intermediárias - NBC TR 2400/2410), o risco é maior que no de asseguração razoável, os procedimentos baseiam-se principalmente em indagações e procedimentos analíticos, e a conclusão é expressa na forma negativa ("nada chegou ao nosso conhecimento que nos leve a crer que...").',
      f: 'No trabalho de asseguração limitada, a conclusão do auditor é expressa de forma positiva idêntica à da auditoria anual das demonstrações contábeis.',
      exp: 'Distinção clássica: Asseguração Razoável (Auditoria) = forma POSITIVA ("Em nossa opinião, as demonstrações apresentam adequadamente..."); Asseguração Limitada (Revisão) = forma NEGATIVA ("Com base em nossa revisão, não temos conhecimento de nenhum fato que nos leve a acreditar que...").'
    },
    {
      sub: 'Trabalhos de Atestação vs. Trabalhos Diretos',
      ref: 'NBC TA Estrutura Conceitual, itens 12 e 13',
      t: 'No trabalho de atestação, uma parte que não o auditor mensura ou avalia o subjacente objeto de acordo com os critérios (ex: a administração elabora as demonstrações contábeis) e o auditor obtém evidência sobre essa mensuração; já no trabalho direto, o próprio auditor mensura ou avalia diretamente o subjacente objeto de acordo com os critérios aplicáveis.',
      f: 'A auditoria independente das demonstrações contábeis anuais de uma sociedade anônima é um trabalho direto no qual o auditor elabora o balanço patrimonial.',
      exp: 'A auditoria de demonstrações contábeis é um trabalho de ATESTAÇÃO (a administração mensura/elabora as demonstrações e o auditor atesta sua conformidade).'
    },
    {
      sub: 'As Três Partes de um Trabalho de Asseguração',
      ref: 'NBC TA Estrutura Conceitual, itens 25 a 38',
      t: 'Todo trabalho de asseguração envolve pelo menos três partes distintas: 1) o auditor independente; 2) a parte responsável (responsável pelo objeto subjacente); e 3) os usuários previstos (pessoas ou grupos para os quais o auditor elabora o relatório de asseguração), não podendo a parte responsável ser o único usuário previsto.',
      f: 'Em um trabalho de asseguração válido, a parte responsável pode ser simultaneamente o único usuário previsto do relatório de asseguração.',
      exp: 'Item 25: A parte responsável pode ser um dos usuários previstos, mas NUNCA o único usuário previsto!'
    },
    {
      sub: 'Características de Critérios Adequados na Asseguração',
      ref: 'NBC TA Estrutura Conceitual, item 44',
      t: 'Critérios são as referências (benchmarks) usadas para mensurar ou avaliar o subjacente objeto, e critérios adequados devem apresentar as seguintes cinco características: relevância, integridade (completude), confiabilidade, neutralidade e compreensibilidade.',
      f: 'As expectativas subjetivas e as opiniões pessoais não escritas do próprio auditor constituem critérios adequados para um trabalho de asseguração.',
      exp: 'NBC TA Estrutura Conceitual, item 46: As próprias expectativas, julgamentos e experiência individual do auditor NÃO constituem critérios adequados.'
    },
    {
      sub: 'Aceitação e Mudança nos Termos do Trabalho de Asseguração',
      ref: 'NBC TA Estrutura Conceitual, item 29',
      t: 'O auditor não deve concordar com uma mudança nos termos do trabalho de asseguração (como reduzir de asseguração razoável para asseguração limitada ou para serviço correlato) quando não houver justificativa razoável para essa mudança, especialmente se a solicitação visar evitar uma opinião modificada ou contornar limitações de escopo.',
      f: 'Sempre que o auditor identificar uma fraude relevante durante uma auditoria, deve converter o trabalho em asseguração limitada a pedido da diretoria.',
      exp: 'Mudanças de escopo sem justificativa razoável (como mudança nas circunstâncias ou mal-entendido inicial quanto à natureza do serviço) devem ser recusadas pelo auditor.'
    }
  ]
};
