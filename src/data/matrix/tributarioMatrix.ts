import { SubjectLessonMatrix } from './types';

// Direito Tributário - 19 Aulas (0..18)
export const TRIBUTARIO_LESSON_MATRIX: SubjectLessonMatrix = {
  // Aula 00 - Conceito de Tributo e Espécies Tributárias
  0: [
    {
      sub: 'Conceito Legal de Tributo (Art. 3º do CTN)',
      ref: 'CTN, Art. 3º',
      t: 'Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.',
      f: 'O conceito legal de tributo admite a cobrança discricionária pela autoridade fazendária e abrange as multas punitivas por infração fiscal.',
      exp: 'O Art. 3º do CTN veda que o tributo seja sanção de ato ilícito (distinguindo-o da multa) e exige atividade administrativa plenamente vinculada.'
    },
    {
      sub: 'Natureza Jurídica Específica do Tributo (Art. 4º do CTN)',
      ref: 'CTN, Art. 4º',
      t: 'A natureza jurídica específica do tributo é determinada pelo fato gerador da respectiva obrigação, sendo irrelevantes para qualificá-la a denominação e demais características formais adotadas pela lei ou a destinação legal do produto da sua arrecadação.',
      f: 'A denominação formal dada pela lei ordinária e a destinação orçamentária da receita definem isoladamente se um tributo é imposto ou taxa no CTN.',
      exp: 'Para o CTN (Art. 4º), analisa-se o fato gerador (vinculado ou não vinculado a atividade estatal), sendo irrelevantes o nomen iuris e a destinação.'
    },
    {
      sub: 'Teoria Pentapartida das Espécies Tributárias no STF',
      ref: 'CF/88, Arts. 145, 148 e 149 e Jurisprudência do STF (RE 138.284)',
      t: 'O Supremo Tribunal Federal adota a classificação pentapartida (quinquipartida), reconhecendo cinco espécies tributárias autônomas: impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.',
      f: 'A jurisprudência do STF restringe as espécies tributárias exclusivamente a impostos e taxas, classificando os empréstimos compulsórios como contratos administrativos.',
      exp: 'O STF consagrou as 5 espécies: 3 no art. 145 (impostos, taxas, contribuições de melhoria), empréstimos compulsórios (art. 148) e contribuições especiais (art. 149 e 149-A).'
    },
    {
      sub: 'Taxas de Polícia e de Serviço Público (Art. 145, II da CF/88 e Arts. 77 a 80 do CTN)',
      ref: 'CF/88, Art. 145, II e § 2º; CTN, Arts. 77 a 79; Súmula Vinculante 19 e 29 do STF',
      t: 'As taxas têm como fato gerador o exercício regular do poder de polícia ou a utilização, efetiva ou potencial, de serviço público específico e divisível, prestado ao contribuinte ou posto à sua disposição, não podendo ter base de cálculo própria de impostos.',
      f: 'Os serviços públicos gerais e indivisíveis (uti universi), como segurança pública ostensiva e iluminação pública, podem ser remunerados mediante taxa.',
      exp: 'Serviços uti universi não admitem taxa (segurança pública é custeada por impostos e iluminação pública por COSIP - Art. 149-A da CF/88; Súmula Vinculante 41).'
    },
    {
      sub: 'Contribuição de Melhoria, Empréstimos Compulsórios e COSIP',
      ref: 'CF/88, Arts. 145, III, 148 e 149-A; CTN, Arts. 81 e 82',
      t: 'A contribuição de melhoria decorre de obra pública da qual resulte valorização imobiliária, tendo como limite total a despesa realizada e como limite individual o acréscimo de valor que da obra resultar para cada imóvel beneficiado; já os empréstimos compulsórios são de competência exclusiva da União mediante lei complementar.',
      f: 'Os Estados podem instituir empréstimos compulsórios por medida provisória para custear obras viárias sem necessidade de valorização imobiliária.',
      exp: 'Empréstimos compulsórios são exclusivos da União e exigem Lei Complementar (Art. 148, CF), vedada medida provisória (Art. 62, § 1º, III, CF).'
    }
  ],

  // Aula 01 - Competência Tributária e Capacidade Tributária
  1: [
    {
      sub: 'Conceito e Atributos da Competência Tributária',
      ref: 'CF/88, Arts. 145 a 156 e CTN, Arts. 6º a 8º',
      t: 'A competência tributária é a aptidão política outorgada pela Constituição Federal aos entes federativos para instituir tributos mediante lei, caracterizando-se pela indelegabilidade, intransferibilidade, irrenunciabilidade, incaducabilidade e facultatividade de exercício (salvo no IBS/CBS e ICMS quanto a benefícios).',
      f: 'O não exercício da competência tributária por um Estado durante dez anos transfere automaticamente essa competência legislativa para a União.',
      exp: 'Art. 7º e 8º do CTN: A competência tributária é indelegável, e o seu não exercício não a defere a pessoa jurídica de direito público diversa.'
    },
    {
      sub: 'Capacidade Tributária Ativa e Parafiscalidade',
      ref: 'CTN, Art. 7º, caput e § 3º',
      t: 'Embora a competência legislativa tributária seja indelegável, as funções administrativas de arrecadar ou fiscalizar tributos, ou de executar leis, serviços, atos ou decisões administrativas em matéria tributária (capacidade tributária ativa), podem ser delegadas a outra pessoa jurídica de direito público.',
      f: 'O encargo ou a função de mero agente arrecadador bancário de tributos configura delegação plena de competência legislativa tributária a banco privado.',
      exp: 'Art. 7º, § 3º do CTN: Não constitui delegação de competência o cometimento, a pessoas de direito privado, do encargo ou da função de arrecadar tributos.'
    },
    {
      sub: 'Classificação da Competência Tributária: Privativa, Comum, Residual e Extraordinária',
      ref: 'CF/88, Arts. 145, 153, 154, 155 e 156',
      t: 'A competência para instituir impostos nominais é privativa de cada ente federado; a competência para taxas e contribuições de melhoria é comum; e as competências residual (novos impostos e contribuições sociais por lei complementar) e extraordinária (imposto de guerra) pertencem exclusivamente à União.',
      f: 'Os Estados-membros possuem competência tributária residual para criar novos impostos não cumulativos sobre fatos geradores não previstos na Constituição.',
      exp: 'Art. 154, I e II e Art. 195, § 4º da CF/88: A competência residual e a extraordinária pertencem exclusivamente à União.'
    },
    {
      sub: 'Requisitos da Competência Residual da União (Art. 154, I da CF/88)',
      ref: 'CF/88, Art. 154, I',
      t: 'A União poderá instituir, mediante lei complementar, impostos não previstos na Constituição, desde que sejam não cumulativos e não tenham fato gerador ou base de cálculo próprios dos impostos já discriminados no texto constitucional.',
      f: 'O imposto residual da União pode ser instituído por lei ordinária e possuir incidência cumulativa em cascata.',
      exp: 'O Art. 154, I da CF/88 exige cumulativamente: 1) Lei Complementar; 2) Não cumulatividade; e 3) Fato gerador e base de cálculo novos.'
    },
    {
      sub: 'Bis in Idem vs. Bitributação no Sistema Constitucional',
      ref: 'Doutrina e Jurisprudência do STF',
      t: 'Ocorre bis in idem quando o mesmo ente político tributa mais de uma vez o mesmo fato gerador (admitido quando autorizado pela CF, como IRPJ e CSLL sobre o lucro); já a bitributação ocorre quando dois entes políticos distintos exigem tributo sobre o mesmo fato gerador, sendo em regra inconstitucional por invasão de competência (salvo no imposto extraordinário de guerra e na bitributação internacional).',
      f: 'A bitributação interna entre dois Estados sobre o mesmo fato gerador é amplamente permitida pela Constituição Federal sem qualquer restrição.',
      exp: 'A rígida partilha constitucional de competências veda a bitributação interna, ressalvado o imposto extraordinário de guerra da União (Art. 154, II, CF).'
    }
  ],

  // Aula 02 - Limitações ao Poder de Tributar: Princípios Tributários I
  2: [
    {
      sub: 'Princípio da Estrita Legalidade Tributária e Exceções quanto às Alíquotas',
      ref: 'CF/88, Art. 150, I, Art. 153, § 1º, Art. 155, § 4º, IV e Art. 177, § 4º; CTN, Art. 97',
      t: 'É vedado exigir ou aumentar tributo sem lei que o estabeleça, sendo facultado ao Poder Executivo, atendidas as condições e os limites estabelecidos em lei, alterar as alíquotas do II, IE, IPI e IOF, bem como reduzir e restabelecer a alíquota da CIDE-Combustíveis e definir alíquotas do ICMS-Monofásico sobre combustíveis via CONFAZ.',
      f: 'A atualização do valor monetário da base de cálculo do tributo dentro dos índices oficiais de inflação e a fixação do prazo de vencimento do tributo exigem lei complementar.',
      exp: 'Súmula 160 do STJ e Art. 97, § 2º do CTN: A mera correção monetária da base de cálculo até o limite da inflação oficial não constitui majoração de tributo e pode ser feita por decreto, assim como o prazo de pagamento (STF).'
    },
    {
      sub: 'Princípio da Irretroatividade Tributária',
      ref: 'CF/88, Art. 150, III, "a"',
      t: 'É vedado à União, aos Estados, ao Distrito Federal e aos Municípios cobrar tributos em relação a fatos geradores ocorridos antes do início da vigência da lei que os houver instituído ou aumentado.',
      f: 'Os impostos regulatórios extrafiscais (II, IE, IPI e IOF) constituem exceções ao princípio da irretroatividade, podendo alcançar fatos geradores do ano anterior.',
      exp: 'O princípio da irretroatividade da lei instituidora ou majoradora de tributo NÃO comporta exceções para nenhum tributo (nem mesmo II, IE, IPI ou IOF).'
    },
    {
      sub: 'Princípio da Anterioridade Anual (de Exercício) e Nonagesimal (Noventena)',
      ref: 'CF/88, Art. 150, III, "b" e "c" e § 1º',
      t: 'Em regra, o tributo instituído ou majorado só pode ser cobrado no exercício financeiro seguinte ao da publicação da lei (anterioridade anual) e após decorridos noventa dias dessa publicação (noventena), prevalecendo a data que for posterior.',
      f: 'A revogação de isenção de imposto sobre o patrimônio submete-se obrigatoriamente a uma espera de três exercícios financeiros completos.',
      exp: 'Regra geral: aplicam-se cumulativamente a anterioridade de exercício (1º de janeiro do ano seguinte) e a noventena (90 dias da publicação).'
    },
    {
      sub: 'Exceções às Anterioridades Anual e Nonagesimal (Art. 150, § 1º da CF/88)',
      ref: 'CF/88, Art. 150, § 1º, Art. 155, § 4º, IV, "c" e Art. 177, § 4º, I, "b"',
      t: 'Não se submetem nem à anterioridade anual nem à noventena (cobrança imediata): II, IE, IOF, Imposto Extraordinário de Guerra e Empréstimo Compulsório de calamidade/guerra; submetem-se apenas à noventena (exceções à anual): IPI, Contribuições da Seguridade Social (Art. 195, § 6º), restabelecimento de CIDE-Combustíveis e ICMS-Combustíveis; e submetem-se apenas à anterioridade anual (exceções à noventena): IR e fixação da base de cálculo do IPVA e do IPTU.',
      f: 'O Imposto de Renda (IR) e a fixação da base de cálculo do IPTU e do IPVA submetem-se à anterioridade nonagesimal (noventena), mas estão dispensados da anterioridade anual.',
      exp: 'Pegadinha clássica: IR, Base de Cálculo do IPVA e Base de Cálculo do IPTU respeitam a anterioridade ANUAL (1º de janeiro), mas são exceções à NOVENTENA (podem ser publicados em 31 de dezembro para valer em 1º de janeiro!). Já a ALÍQUOTA do IPVA e do IPTU respeita ambas!'
    },
    {
      sub: 'Medida Provisória em Matéria de Impostos (Art. 62, § 2º da CF/88)',
      ref: 'CF/88, Art. 62, § 1º, III e § 2º',
      t: 'Medida provisória que implique instituição ou majoração de impostos, exceto os previstos nos arts. 153, I, II, IV, V (II, IE, IPI, IOF) e 154, II (IEG), só produzirá efeitos no exercício financeiro seguinte se houver sido convertida em lei até o último dia daquele em que foi editada.',
      f: 'Medida provisória pode instituir tributos reservados à lei complementar e cobrar impostos estaduais no ano seguinte mesmo sem conversão em lei.',
      exp: 'Art. 62, § 2º da CF/88: Para IMPOSTOS (salvo II, IE, IPI, IOF e IEG), a anterioridade anual exige que a MP seja CONVERTIDA EM LEI até 31 de dezembro do ano de sua edição!'
    }
  ],

  // Aula 03 - Limitações ao Poder de Tributar: Princípios Tributários II
  3: [
    {
      sub: 'Princípio da Isonomia Tributária e Cláusula Pecunia Non Olet',
      ref: 'CF/88, Art. 150, II e CTN, Art. 118',
      t: 'É vedado instituir tratamento desigual entre contribuintes que se encontrem em situação equivalente, proibida qualquer distinção em razão de ocupação profissional ou função por eles exercida, independentemente da denominação jurídica dos rendimentos, títulos ou direitos, vigorando ainda o princípio do pecunia non olet (interpretação objetiva do fato gerador).',
      f: 'Rendimentos auferidos em atividade ilícita ou contravenção penal são imunes ao Imposto de Renda por violarem a moralidade administrativa.',
      exp: 'CTN, Art. 118 e STF (HC 77.530): A definição legal do fato gerador é interpretada abstraindo-se da validade jurídica dos atos efetivamente praticados (pecunia non olet: o dinheiro não tem cheiro).'
    },
    {
      sub: 'Princípio da Capacidade Contributiva e Progressividade Fiscal vs. Extrafiscal',
      ref: 'CF/88, Art. 145, § 1º e Jurisprudência do STF',
      t: 'Sempre que possível, os impostos terão caráter pessoal e serão graduados segundo a capacidade econômica do contribuinte, admitindo o STF a progressividade de alíquotas inclusive em impostos reais como o ITCMD (RE 562.045), além das hipóteses expressas do IR, IPTU (fiscal e extrafiscal) e ITR.',
      f: 'O Supremo Tribunal Federal proíbe em caráter absoluto a adoção de alíquotas progressivas para o ITCMD estadual.',
      exp: 'No RE 562.045 (e agora expressamente com a EC 132/2023 no Art. 155, § 1º, VI da CF/88), o ITCMD é progressivo em razão do valor do quinhão, do legado ou da doação!'
    },
    {
      sub: 'Princípio do Não Confisco (Vedação ao Efeito de Confisco)',
      ref: 'CF/88, Art. 150, IV e Jurisprudência do STF (RE 833.106)',
      t: 'É vedado utilizar tributo com efeito de confisco, tendo o STF pacificado que o princípio do não confisco estende-se também às multas tributárias punitivas (considerando confiscatória, em regra, a multa punitiva que ultrapasse 100% do valor do tributo devido).',
      f: 'O princípio da vedação ao confisco aplica-se exclusivamente aos impostos sobre o patrimônio, não alcançando as multas fiscais punitivas.',
      exp: 'Embora multa não seja tributo, o STF aplica a vedação ao confisco (Art. 150, IV, CF) às multas fiscais desproporcionais.'
    },
    {
      sub: 'Liberdade de Tráfego e Ressalva do Pedágio e do ICMS em Postos Fiscais',
      ref: 'CF/88, Art. 150, V e ADI 800 do STF',
      t: 'É vedado estabelecer limitações ao tráfego de pessoas ou bens, por meio de tributos interestaduais ou intermunicipais, ressalvada a cobrança de pedágio pela utilização de vias conservadas pelo Poder Público (que o STF qualificou como tarifa/preço público nas rodovias concedidas) e a cobrança normal do ICMS nas operações interestaduais.',
      f: 'O princípio da liberdade de tráfego proíbe a incidência do ICMS nas operações de circulação interestadual de mercadorias entre contribuintes.',
      exp: 'Art. 150, V da CF/88 veda tributo cujo fato gerador seja a mera transposição de fronteira estadual/municipal, mas preserva o ICMS interestadual e o pedágio.'
    },
    {
      sub: 'Princípio da Uniformidade Geográfica, Não Discriminação de Procedência e Vedação de Isenção Heterônoma',
      ref: 'CF/88, Arts. 151, I, II e III e 152',
      t: 'É vedado à União instituir tributo que não seja uniforme em todo o território nacional (admitida a concessão de incentivos fiscais regionais) e instituir isenções de tributos da competência dos Estados, do DF ou dos Municípios (vedação à isenção heterônoma, salvo nos tratados internacionais firmados pelo Presidente da República como Chefe de Estado); e é vedado aos Estados, DF e Municípios estabelecer diferença tributária entre bens e serviços em razão de sua procedência ou destino.',
      f: 'O Estado da Bahia pode fixar alíquota interna de ICMS mais elevada para produtos fabricados em outros Estados da Federação visando proteger a indústria local.',
      exp: 'O Art. 152 da CF/88 proíbe terminantemente que Estados, DF e Municípios estabeleçam diferença tributária em razão da procedência ou destino dos bens e serviços.'
    }
  ],

  // Aula 04 - Imunidades Tributárias (Art. 150, VI da CF/88)
  4: [
    {
      sub: 'Distinção entre Imunidade, Isenção e Não Incidência',
      ref: 'CF/88, Art. 150, VI e CTN, Art. 175',
      t: 'A imunidade tributária é uma limitação constitucional ao poder de tributar (norma negativa de competência de sede exclusivamente constitucional), ao passo que a isenção atua no plano infraconstitucional dispensando o pagamento do tributo mediante lei específica do ente competente.',
      f: 'As imunidades previstas no Art. 150, VI da CF/88 afastam a cobrança de todas as espécies tributárias, inclusive taxas de coleta de lixo domiciliar e contribuições de melhoria.',
      exp: 'As imunidades do Art. 150, VI da CF/88 restringem-se à espécie tributária IMPOSTOS (não eximindo o ente imune de taxas, contribuições de melhoria ou obrigações acessórias).'
    },
    {
      sub: 'Imunidade Recíproca e Extensão às Autarquias, Fundações e Estatais Prestadoras de Serviço Público',
      ref: 'CF/88, Art. 150, VI, "a" e §§ 2º e 3º; STF (Temas 385, 437, 508 e 1140)',
      t: 'A imunidade recíproca veda a instituição de impostos sobre o patrimônio, renda ou serviços uns dos outros, sendo extensiva às autarquias e fundações públicas (no que vinculado às suas finalidades essenciais) e às empresas públicas e sociedades de economia mista prestadoras de serviço público obrigatório e exclusivo sem intuito concorrencial ou distribuição de lucros a acionistas privados.',
      f: 'Imóvel pertencente à União ou a Estado-membro cedido a empresa privada com fins lucrativos para exploração comercial em regime de concorrência mantém a imunidade de IPTU.',
      exp: 'Temas 385 e 437 do STF: A imunidade recíproca NÃO se aplica a imóvel público cedido a empresa privada exploradora de atividade econômica com fins lucrativos.'
    },
    {
      sub: 'Imunidade Religiosa (Templos de Qualquer Culto)',
      ref: 'CF/88, Art. 150, VI, "b", § 4º e § 1º-A (EC 116/2022); Súmula Vinculante 52 do STF',
      t: 'A imunidade dos templos e entidades religiosas (inclusive suas organizações assistenciais e beneficentes) compreende o patrimônio, a renda e os serviços relacionados com as suas finalidades essenciais, alcançando inclusive o imóvel de propriedade da entidade alugado a terceiros (desde que a renda seja aplicada nas finalidades essenciais - SV 52) e o IPTU de imóvel locado onde funcione o templo (§ 1º-A).',
      f: 'A imunidade religiosa restringe-se fisicamente ao salão principal de orações, incidindo IPTU sobre a casa paroquial, estacionamento gratuito de fiéis e cemitérios religiosos sem fins lucrativos.',
      exp: 'O STF e a EC 116/2022 + EC 132/2023 conferem interpretação teleológica ampla à imunidade religiosa, protegendo todo patrimônio e renda afetados às finalidades essenciais.'
    },
    {
      sub: 'Imunidade Subjetiva de Partidos, Sindicatos de Trabalhadores, Educação e Assistência Social',
      ref: 'CF/88, Art. 150, VI, "c" e § 4º; CTN, Art. 14; Súmula Vinculante 52 do STF',
      t: 'São imunes a impostos sobre patrimônio, renda ou serviços os partidos políticos (inclusive suas fundações), as entidades sindicais dos trabalhadores e as instituições de educação e de assistência social, sem fins lucrativos, atendidos os requisitos da lei complementar (Art. 14 do CTN: não distribuir patrimônio ou renda, aplicar integralmente seus recursos no País e manter escrituração regular).',
      f: 'As entidades sindicais patronais (sindicatos de empregadores) gozam da imunidade tributária subjetiva prevista no Art. 150, VI, "c" da Constituição Federal.',
      exp: 'Atenção: O Art. 150, VI, "c" da CF/88 contempla apenas as entidades sindicais DOS TRABALHADORES (sindicatos patronais não têm essa imunidade!).'
    },
    {
      sub: 'Imunidade Cultural (Livros, Jornais, Periódicos e Papel) e Fonográfica',
      ref: 'CF/88, Art. 150, VI, "d" e "e"; Súmula Vinculante 57 e Súmula 657 do STF',
      t: 'A imunidade objetiva de livros, jornais, periódicos e o papel destinado a sua impressão abrange também os livros eletrônicos (e-books), os suportes exclusivamente utilizados para lê-los (e-readers - SV 57), os álbuns de figurinhas, as listas telefônicas e os filmes e papéis fotográficos (Súmula 657), não alcançando, porém, a tinta de impressão, o maquinário do parque gráfico nem o IRPJ/CSLL da editora.',
      f: 'A imunidade cultural do livro é de natureza subjetiva e isenta a editora comercial do pagamento de Imposto de Renda (IRPJ) sobre o lucro líquido anual.',
      exp: 'A imunidade do art. 150, VI, "d" é OBJETIVA (protege o bem livro/jornal/periódico contra ICMS, IPI e II), não eximindo a editora dos impostos pessoais sobre a renda ou patrimônio.'
    }
  ],

  // Aula 05 - Fontes do Direito Tributário e Legislação Tributária
  5: [
    {
      sub: 'Papel da Lei Complementar em Matéria Tributária (Art. 146 da CF/88)',
      ref: 'CF/88, Art. 146, I, II e III e Art. 146-A',
      t: 'Cabe à lei complementar dispor sobre conflitos de competência em matéria tributária, regular as limitações constitucionais ao poder de tributar e estabelecer normas gerais sobre definição de tributos e de suas espécies, fatos geradores, bases de cálculo e contribuintes dos impostos discriminados na Constituição, além de obrigação, lançamento, crédito, prescrição, decadência e tratamento diferenciado à microempresa (Simples Nacional).',
      f: 'A definição da alíquota efetiva de todos os impostos estaduais e municipais deve ser feita obrigatoriamente por lei complementar federal.',
      exp: 'O Art. 146, III, "a" da CF/88 exige lei complementar para definir fatos geradores, bases de cálculo e contribuintes dos impostos (não as alíquotas, que cabem à lei ordinária de cada ente, salvo tetos/mínimos do Senado).'
    },
    {
      sub: 'Conceito de Legislação Tributária e Normas Complementares (Arts. 96 e 100 do CTN)',
      ref: 'CTN, Arts. 96 e 100, parágrafo único',
      t: 'A expressão "legislação tributária" compreende as leis, os tratados e as convenções internacionais, os decretos e as normas complementares (atos normativos, decisões com eficácia normativa, práticas reiteradas e convênios), sendo que a observância das normas complementares exclui a imposição de penalidades, a cobrança de juros de mora e a atualização do valor monetário da base de cálculo do tributo.',
      f: 'O contribuinte que age em estrita conformidade com instrução normativa posteriormente revogada fica dispensado do pagamento do próprio tributo principal.',
      exp: 'CTN, Art. 100, parágrafo único: A observância das normas complementares NÃO dispensa o pagamento do tributo principal, mas exclui multas, juros de mora e correção monetária da base de cálculo!'
    },
    {
      sub: 'Tratados e Convenções Internacionais (Art. 98 do CTN)',
      ref: 'CTN, Art. 98 e Jurisprudência do STF',
      t: 'Os tratados e as convenções internacionais revogam ou modificam a legislação tributária interna, e serão observados pela que lhes sobrevenha (prevalência pela especialidade das normas internacionais contra a bitributação e acordos do GATT/Mercosul).',
      f: 'Um tratado internacional sobre matéria tributária jamais pode conceder benefício fiscal que alcance o ICMS estadual nas importações de países signatários do GATT.',
      exp: 'Súmula 575 do STF e Súmula 20 do STJ: A mercadoria importada de país signatário do GATT, ou membro da ALALC/Mercosul, goza da mesma isenção de ICMS concedida a similar nacional.'
    },
    {
      sub: 'Vigência e Aplicação da Legislação Tributária no Tempo (Arts. 101 a 106 do CTN)',
      ref: 'CTN, Arts. 105 e 106 (Retroatividade Benigna)',
      t: 'A legislação tributária aplica-se imediatamente aos fatos geradores futuros e aos pendentes, retroagindo a ato ou fato pretérito apenas quando seja expressamente interpretativa (excluída a aplicação de penalidade) ou, tratando-se de ato não definitivamente julgado, quando deixe de defini-lo como infração, deixe de tratá-lo como contrário a qualquer exigência de ação ou omissão (desde que sem fraude e sem falta de pagamento de tributo) ou lhe comine penalidade menos severa que a prevista na lei vigente ao tempo da sua prática.',
      f: 'Se uma nova lei estadual reduzir a alíquota do ICMS de 20,5% para 18%, essa redução retroage automaticamente aos fatos geradores ocorridos no ano anterior que ainda não tenham sido pagos.',
      exp: 'A retroatividade benigna do Art. 106, II do CTN aplica-se EXCLUSIVAMENTE a infrações e penalidades (multas) em atos não definitivamente julgados, NUNCA à alíquota do tributo!'
    },
    {
      sub: 'Integração, Interpretação Literal e In Dubio Pro Contribuinte (Arts. 108, 111 e 112 do CTN)',
      ref: 'CTN, Arts. 108, 111 e 112',
      t: 'Na ausência de disposição expressa, utiliza-se a integração na ordem de analogia, princípios gerais de direito tributário, princípios gerais de direito público e equidade (não podendo da analogia resultar exigência de tributo não previsto em lei, nem da equidade a dispensa de tributo devido); ademais, interpreta-se literalmente a legislação que disponha sobre suspensão ou exclusão do crédito, outorga de isenção e dispensa de obrigações acessórias.',
      f: 'O emprego da equidade autoriza o auditor fiscal a dispensar o pagamento de tributo legalmente devido por contribuinte em dificuldade financeira.',
      exp: 'Art. 108, §§ 1º e 2º do CTN: Da analogia nunca resulta cobrança de tributo sem lei; da equidade nunca resulta dispensa do pagamento de tributo devido. E o Art. 111 exige interpretação literal para isenção, suspensão, exclusão e dispensa de obrigações acessórias.'
    }
  ],

  // Aula 06 - Obrigação Tributária e Responsabilidade Tributária
  6: [
    {
      sub: 'Obrigação Tributária Principal vs. Acessória (Art. 113 do CTN)',
      ref: 'CTN, Art. 113, §§ 1º, 2º e 3º',
      t: 'A obrigação principal surge com a ocorrência do fato gerador, tem por objeto o pagamento de tributo ou penalidade pecuniária e extingue-se juntamente com o crédito dela decorrente; a obrigação acessória decorre da legislação tributária, tem por objeto prestações positivas ou negativas no interesse da arrecadação ou fiscalização, e, pelo simples fato de sua inobservância, converte-se em obrigação principal relativamente à penalidade pecuniária.',
      f: 'O pagamento de multa pecuniária por atraso na entrega da EFD-ICMS/IPI constitui obrigação tributária acessória nos termos do Art. 113 do CTN.',
      exp: 'No CTN, toda prestação de dar dinheiro (tributo OU multa pecuniária) é obrigação PRINCIPAL (Art. 113, § 1º); já os deveres instrumentais (emitir NF-e, escriturar livros) são obrigações acessórias.'
    },
    {
      sub: 'Solidariedade Tributária Passiva e seus Efeitos (Arts. 124 e 125 do CTN)',
      ref: 'CTN, Arts. 124 e 125',
      t: 'São solidariamente obrigadas as pessoas que tenham interesse comum na situação que constitua o fato gerador da obrigação principal e as expressamente designadas por lei, não comportando a solidariedade tributária benefício de ordem; ademais, a isenção ou remissão de crédito exonera todos os obrigados, salvo se outorgada pessoalmente a um deles, subsistindo, nesse caso, a solidariedade quanto aos demais pelo saldo.',
      f: 'Na solidariedade tributária passiva, o devedor secundário pode invocar o benefício de ordem para exigir que o Fisco execute primeiro os bens do devedor principal.',
      exp: 'Art. 124, parágrafo único do CTN: A solidariedade referida neste artigo NÃO comporta benefício de ordem.'
    },
    {
      sub: 'Responsabilidade dos Sucessores: Imóveis, Bens Móveis, Espólio e Sucessão Empresarial (Arts. 130 a 133 do CTN)',
      ref: 'CTN, Arts. 130 a 133',
      t: 'Os créditos tributários relativos a impostos sobre a propriedade imobiliária, taxas de serviços referentes a tais bens ou contribuições de melhoria sub-rogam-se na pessoa dos respectivos adquirentes, salvo quando conste do título a prova de sua quitação ou no caso de arrematação em hasta pública (em que a sub-rogação ocorre sobre o respectivo preço); na sucessão empresarial (Art. 133), o adquirente de fundo de comércio que continua a exploração responde integralmente se o alienante cessar a exploração, ou subsidiariamente se o alienante prosseguir na exploração ou iniciar nova atividade em até 6 meses.',
      f: 'Quem arremata um imóvel em leilão judicial (hasta pública) responde pessoalmente com seu patrimônio pelas dívidas anteriores de IPTU que superarem o preço da arrematação.',
      exp: 'Art. 130, parágrafo único do CTN: No caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo PREÇO (o arrematante recebe o imóvel livre de ônus tributários pretéritos!).'
    },
    {
      sub: 'Responsabilidade de Terceiros e Redirecionamento ao Sócio-Gerente (Arts. 134 e 135 do CTN)',
      ref: 'CTN, Arts. 134 e 135; Súmulas 430 e 435 do STJ',
      t: 'Os diretores, gerentes ou representantes de pessoas jurídicas de direito privado são pessoalmente responsáveis pelos créditos correspondentes a obrigações tributárias resultantes de atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos (Art. 135, III), sendo que o simples inadimplemento do tributo não gera, por si só, a responsabilidade solidária do sócio-gerente (Súmula 430 STJ), mas a dissolução irregular da sociedade presume-se quando deixa de funcionar no domicílio fiscal sem comunicação (Súmula 435 STJ).',
      f: 'O mero atraso ou falta de recolhimento do ICMS declarado em guia própria pela sociedade empresária autoriza o redirecionamento automático da execução fiscal contra todos os sócios cotistas.',
      exp: 'Súmula 430 do STJ: O inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade solidária do sócio-gerente.'
    },
    {
      sub: 'Responsabilidade por Infrações e Denúncia Espontânea (Arts. 136 a 138 do CTN)',
      ref: 'CTN, Arts. 136 a 138 e Súmula 360 do STJ',
      t: 'Salvo disposição de lei em contrário, a responsabilidade por infrações da legislação tributária independe da intenção do agente (responsabilidade objetiva); contudo, a responsabilidade é excluída pela denúncia espontânea da infração, acompanhada, se for o caso, do pagamento do tributo devido e dos juros de mora, antes do início de qualquer procedimento administrativo ou medida de fiscalização, não se aplicando o benefício aos tributos sujeitos a lançamento por homologação regularmente declarados pelo contribuinte e pagos a destempo (Súmula 360 STJ).',
      f: 'O instituto da denúncia espontânea (Art. 138 do CTN) aplica-se ao parcelamento tributário e aos débitos já declarados em EFD ou DCTF pagos em atraso antes da autuação.',
      exp: 'Art. 155-A, § 1º do CTN e Súmula 360 do STJ: Não há denúncia espontânea no parcelamento (exige pagamento integral à vista) nem quando o contribuinte declara o débito e simplesmente atrasa o pagamento (multa moratória é devida).'
    }
  ],

  // Aula 07 - Fato Gerador e Sujeitos da Obrigação Tributária
  7: [
    {
      sub: 'Fato Gerador da Obrigação Principal vs. Acessória e Momento da Ocorrência (Arts. 114 a 117 do CTN)',
      ref: 'CTN, Arts. 114 a 117',
      t: 'Salvo disposição de lei em contrário, considera-se ocorrido o fato gerador e existentes os seus efeitos: tratando-se de situação de fato, desde o momento em que se verifiquem as circunstâncias materiais necessárias a que produza os efeitos que normalmente lhe são próprios; e tratando-se de situação jurídica, desde o momento em que esteja definitivamente constituída nos termos de direito aplicável.',
      f: 'Nos negócios jurídicos celebrados sob condição suspensiva, o fato gerador considera-se ocorrido no ato da assinatura do contrato, antes mesmo do implemento da condição.',
      exp: 'Art. 117 do CTN: Nos atos ou negócios jurídicos condicionais, reputam-se perfeitos e acabados: I - sendo suspensiva a condição, desde o momento de seu IMPLEMENTO; II - sendo resolutória a condição, desde o momento da prática do ato ou celebração do negócio.'
    },
    {
      sub: 'Norma Geral Antielisiva (Art. 116, Parágrafo Único do CTN)',
      ref: 'CTN, Art. 116, parágrafo único e ADI 2.446 do STF',
      t: 'A autoridade administrativa poderá desconsiderar atos ou negócios jurídicos praticados com a finalidade de dissimular a ocorrência do fato gerador do tributo ou a natureza dos elementos constitutivos da obrigação tributária, observados os procedimentos a serem estabelecidos em lei ordinária.',
      f: 'O Supremo Tribunal Federal declarou inconstitucional o parágrafo único do Art. 116 do CTN por violar a liberdade de planejamento tributário.',
      exp: 'Na ADI 2.446, o STF declarou CONSTITUCIONAL o parágrafo único do Art. 116 do CTN, destacando que ele combate a evasão/dissimulação fiscal sem proibir o planejamento tributário lícito (elisão fiscal).'
    },
    {
      sub: 'Sujeito Ativo e Sujeito Passivo da Obrigação Tributária (Arts. 119 a 123 do CTN)',
      ref: 'CTN, Arts. 119 a 123',
      t: 'Sujeito passivo da obrigação principal é a pessoa obrigada ao pagamento de tributo ou penalidade pecuniária, dividindo-se em contribuinte (quando tenha relação pessoal e direta com a situação que constitua o respectivo fato gerador) e responsável (quando, sem revestir a condição de contribuinte, sua obrigação decorra de disposição expressa de lei), sendo as convenções particulares inoponíveis à Fazenda Pública salvo disposição legal em contrário.',
      f: 'A cláusula de contrato de locação imobiliária que transfere ao inquilino o dever de pagar o IPTU exime o proprietário perante o Fisco Municipal.',
      exp: 'Art. 123 do CTN: Salvo disposições de lei em contrário, as convenções particulares, relativas à responsabilidade pelo pagamento de tributos, não podem ser opostas à Fazenda Pública para modificar a definição legal do sujeito passivo.'
    },
    {
      sub: 'Capacidade Tributária Passiva (Art. 126 do CTN)',
      ref: 'CTN, Art. 126, I, II e III',
      t: 'A capacidade tributária passiva independe da capacidade civil das pessoas naturais, de achar-se a pessoa natural sujeita a medidas que importem privação ou limitação do exercício de atividades civis, comerciais ou profissionais, e de estar a pessoa jurídica regularmente constituída, bastando que configure uma unidade econômica ou profissional.',
      f: 'Um menor absolutamente incapaz de três anos de idade e uma sociedade em comum não registrada na Junta Comercial não podem ser sujeitos passivos de obrigações tributárias.',
      exp: 'Art. 126 do CTN: A capacidade tributária passiva é plena e independe da capacidade civil (menor ou interdito) ou da regularidade formal do registro da pessoa jurídica (sociedade de fato).'
    },
    {
      sub: 'Domicílio Tributário e Eleição pelo Contribuinte (Art. 127 do CTN)',
      ref: 'CTN, Art. 127, §§ 1º e 2º',
      t: 'Em regra, o sujeito passivo tem o direito de eleger o seu domicílio tributário; na falta de eleição, considera-se domicílio a residência habitual da pessoa natural ou a sede/lugar dos atos de cada estabelecimento da pessoa jurídica, podendo a autoridade administrativa recusar o domicílio eleito quando impossibilite ou dificulte a arrecadação ou a fiscalização do tributo.',
      f: 'O domicílio tributário é sempre imposto unilateralmente pela Fazenda Pública, sendo vedada a sua escolha pelo contribuinte.',
      exp: 'Art. 127 do CTN: A regra primária é o domicílio de ELEIÇÃO pelo sujeito passivo; apenas na falta de eleição ou em caso de recusa motivada por dificuldade à fiscalização aplicam-se as regras supletivas.'
    }
  ],

  // Aula 08 - Lançamento Tributário e Crédito Tributário
  8: [
    {
      sub: 'Conceito e Natureza Jurídica do Lançamento Tributário (Art. 142 do CTN)',
      ref: 'CTN, Art. 142',
      t: 'Compete privativamente à autoridade administrativa constituir o crédito tributário pelo lançamento, assim entendido o procedimento administrativo tendente a verificar a ocorrência do fato gerador da obrigação correspondente, determinar a matéria tributável, calcular o montante do tributo devido, identificar o sujeito passivo e, sendo caso, propor a aplicação da penalidade cabível, sendo atividade vinculada e obrigatória sob pena de responsabilidade funcional.',
      f: 'O lançamento tributário possui natureza exclusivamente constitutiva da obrigação tributária e submete-se ao juízo de conveniência e oportunidade da autoridade fiscal.',
      exp: 'O lançamento tem natureza mista: declaratória da obrigação tributária (que nasceu com o fato gerador) e constitutiva do crédito tributário (tornando-o líquido, certo e exigível).'
    },
    {
      sub: 'Lei Aplicável ao Lançamento: Material vs. Formal (Art. 144 do CTN)',
      ref: 'CTN, Art. 144, caput e § 1º e Súmula 436 do STJ',
      t: 'O lançamento reporta-se à data da ocorrência do fato gerador da obrigação e rege-se pela lei então vigente, ainda que posteriormente modificada ou revogada; contudo, aplica-se ao lançamento a legislação que, posteriormente à ocorrência do fato gerador, tenha instituído novos critérios de apuração ou processos de fiscalização, ampliado os poderes de investigação das autoridades ou outorgado ao crédito maiores garantias ou privilégios (salvo para atribuir responsabilidade a terceiros).',
      f: 'A lei processual nova que cria hipótese de responsabilidade tributária de terceiros retroage para alcançar fatos geradores anteriores à sua vigência.',
      exp: 'Art. 144, § 1º do CTN: Normas formais/procedimentais de fiscalização e garantias aplicam-se de imediato a fatos geradores pretéritos, EXCETO para o efeito de atribuir responsabilidade tributária a terceiros!'
    },
    {
      sub: 'Alterabilidade do Lançamento Regularmente Notificado (Art. 145 e 146 do CTN)',
      ref: 'CTN, Arts. 145 e 146 e Súmula 227 do TFR',
      t: 'O lançamento regularmente notificado ao sujeito passivo só pode ser alterado em virtude de impugnação do sujeito passivo, recurso de ofício ou iniciativa de ofício da autoridade administrativa nas hipóteses do art. 149; ademais, a modificação introduzida, de ofício ou em consequência de decisão administrativa ou judicial, nos critérios jurídicos adotados no exercício do lançamento somente pode ser efetivada, em relação a um mesmo sujeito passivo, quanto a fato gerador ocorrido posteriormente à sua introdução (vedação à revisão por erro de direito).',
      f: 'A mudança de interpretação jurídica da Secretaria da Fazenda autoriza a revisão de ofício dos lançamentos dos últimos cinco anos para cobrar diferenças do contribuinte.',
      exp: 'Art. 146 do CTN: Admite-se a revisão de ofício por erro de FATO (ex: erro na metragem física do imóvel), mas é VEDADA a revisão retroativa por erro de DIREITO / mudança de critério jurídico!'
    },
    {
      sub: 'Modalidades de Lançamento: Direto (de Ofício), por Declaração (Misto) e por Homologação',
      ref: 'CTN, Arts. 147, 149 e 150',
      t: 'O lançamento é de ofício (direto) quando feito pela autoridade sem auxílio inicial do contribuinte (ex: IPTU, IPVA e autos de infração); por declaração (misto) quando efetuado com base na declaração do sujeito passivo sobre matéria de fato (ex: ITBI/ITCMD conforme legislação local); e por homologação quando o contribuinte apura e antecipa o pagamento sem prévio exame da autoridade (ex: ICMS, IPI, IR, PIS/COFINS e ISS).',
      f: 'No lançamento por declaração (Art. 147 do CTN), a retificação da declaração por iniciativa do próprio declarante visando reduzir ou excluir tributo é permitida a qualquer tempo, mesmo após a notificação do lançamento.',
      exp: 'Art. 147, § 1º do CTN: A retificação da declaração por iniciativa do próprio declarante, quando vise a reduzir ou a excluir tributo, SÓ é admissível mediante comprovação do erro em que se funde, e ANTES de notificado o lançamento!'
    },
    {
      sub: 'Constituição do Crédito por Declaração do Contribuinte (Súmula 436 do STJ)',
      ref: 'Súmula 436 do STJ',
      t: 'A entrega de declaração pelo contribuinte reconhecendo débito fiscal (como DCTF, GIA ou EFD-ICMS/IPI) constitui o crédito tributário, dispensada qualquer outra providência por parte do fisco para inscrevê-lo em dívida ativa caso não seja pago.',
      f: 'Quando o contribuinte declara o ICMS devido na EFD mas não realiza o pagamento, o Fisco é obrigado a lavrar auto de infração formal antes de inscrever o valor em dívida ativa.',
      exp: 'Súmula 436 do STJ: A própria declaração do contribuinte constitui o crédito tributário confessado, fluindo a partir do vencimento (ou da entrega, se posterior) o prazo prescricional de cobrança.'
    }
  ],

  // Aula 09 - Suspensão da Exigibilidade do Crédito Tributário
  9: [
    {
      sub: 'Rol Taxativo das Causas de Suspensão da Exigibilidade (Art. 151 do CTN)',
      ref: 'CTN, Art. 151, I a VI e Parágrafo Único',
      t: 'Suspendem a exigibilidade do crédito tributário exclusivamente: I - a moratória; II - o depósito do seu montante integral; III - as reclamações e os recursos, nos termos das leis reguladoras do processo tributário administrativo; IV - a concessão de medida liminar em mandado de segurança; V - a concessão de medida liminar ou de tutela antecipada, em outras espécies de ação judicial; e VI - o parcelamento; mantendo-se a obrigatoriedade do cumprimento das obrigações acessórias.',
      f: 'A suspensão da exigibilidade do crédito tributário dispensa o contribuinte do cumprimento das obrigações acessórias dependentes da obrigação principal.',
      exp: 'Art. 151, parágrafo único do CTN: A suspensão da exigibilidade do crédito principal NÃO dispensa o cumprimento das obrigações acessórias.'
    },
    {
      sub: 'Moratória: Caráter Geral vs. Individual (Arts. 152 a 155 do CTN)',
      ref: 'CTN, Arts. 152 a 155',
      t: 'A moratória consiste na dilação legal do prazo de pagamento do crédito tributário, podendo ser concedida em caráter geral (pela pessoa jurídica de direito público competente para instituir o tributo, ou pela União quando simultaneamente conceda quanto aos tributos federais e às obrigações de direito privado) ou em caráter individual (por despacho da autoridade administrativa, desde que autorizada por lei), não gerando direito adquirido.',
      f: 'A moratória em caráter individual gera direito adquirido incondicional e não pode ser revogada de ofício, ainda que o beneficiário tenha agido com dolo ou simulação.',
      exp: 'Art. 155 do CTN: A concessão da moratória em caráter individual NÃO gera direito adquirido e será revogada de ofício sempre que se apure que o beneficiado não satisfazia ou deixou de satisfazer as condições.'
    },
    {
      sub: 'Depósito do Montante Integral (Súmula 112 do STJ)',
      ref: 'CTN, Art. 151, II e Súmula 112 do STJ',
      t: 'O depósito somente suspende a exigibilidade do crédito tributário se for integral e em dinheiro (Súmula 112 do STJ), constituindo faculdade do contribuinte que impede a fluência de juros de mora e correção monetária e veda a inscrição em dívida ativa ou o ajuizamento de execução fiscal.',
      f: 'O oferecimento de fiança bancária ou de seguro-garantia em processo administrativo suspende a exigibilidade do crédito tributário nos termos do Art. 151, II do CTN.',
      exp: 'Para o STJ (Tema 378 e Súmula 112), fiança bancária e seguro-garantia garantem a execução fiscal para fins de embargos e certidão (Art. 206), mas NÃO suspendem a exigibilidade do crédito pelo Art. 151, II do CTN.'
    },
    {
      sub: 'Exigência de Depósito Prévio para Recurso Administrativo (Súmula Vinculante 21)',
      ref: 'Súmula Vinculante 21 do STF',
      t: 'É inconstitucional a exigência de depósito ou arrolamento prévios de dinheiro ou bens para admissibilidade de recurso administrativo fiscal, de modo que a simples interposição tempestiva da impugnação ou recurso suspende a exigibilidade do crédito nos termos do Art. 151, III do CTN.',
      f: 'A legislação estadual pode condicionar o recebimento de recurso administrativo ao depósito prévio de 30% do valor do auto de infração.',
      exp: 'Súmula Vinculante 21 do STF: É inconstitucional a exigência de depósito ou arrolamento prévios de dinheiro ou bens para admissibilidade de recurso administrativo.'
    },
    {
      sub: 'Parcelamento Tributário (Art. 155-A do CTN)',
      ref: 'CTN, Art. 155-A, §§ 1º a 4º',
      t: 'O parcelamento será concedido na forma e condição estabelecidas em lei específica; salvo disposição de lei em contrário, os créditos tributários referentes a penalidades pecuniárias não são excluídos pelo parcelamento (incidindo juros e multas), aplicando-se subsidiariamente ao parcelamento as disposições relativas à moratória.',
      f: 'A adesão do contribuinte ao parcelamento tributário exclui automaticamente as multas de mora e de ofício por configurar denúncia espontânea.',
      exp: 'Art. 155-A, § 1º do CTN e Súmula 208 do TFR: Salvo disposição de lei em contrário, o parcelamento NÃO exclui a incidência de juros e multas.'
    }
  ],

  // Aula 10 - Extinção do Crédito Tributário: Decadência e Prescrição
  10: [
    {
      sub: 'Modalidades de Extinção do Crédito Tributário (Art. 156 do CTN)',
      ref: 'CTN, Art. 156, I a XI',
      t: 'Extinguem o crédito tributário: o pagamento, a compensação, a transação, a remissão, a prescrição e a decadência, a conversão de depósito em renda, o pagamento antecipado e a homologação do lançamento, a consignação em pagamento julgada procedente, a decisão administrativa irreformável, a decisão judicial passada em julgado e a dação em pagamento em bens imóveis.',
      f: 'A dação em pagamento em bens móveis e mercadorias de estoque é modalidade expressa de extinção do crédito tributário no Art. 156, XI do CTN.',
      exp: 'O Art. 156, XI do CTN prevê expressamente a dação em pagamento em bens IMÓVEIS, na forma e condições estabelecidas em lei.'
    },
    {
      sub: 'Pagamento Indevido e Restituição de Tributos Indiretos (Arts. 165 a 168 do CTN)',
      ref: 'CTN, Arts. 165 a 168 e Súmula 546 do STF',
      t: 'O sujeito passivo tem direito, independentemente de prévio protesto, à restituição total ou parcial do tributo pago indevidamente no prazo de 5 anos contados da data da extinção do crédito; tratando-se de tributos que comportem, por sua natureza, transferência do respectivo encargo financeiro (como o ICMS - tributos indiretos), a restituição somente será feita a quem prove haver assumido o referido encargo, ou, no caso de tê-lo transferido a terceiro, estar por este expressamente autorizado a recebê-la (Art. 166 do CTN).',
      f: 'Na repetição de indébito de ICMS, o contribuinte de direito pode pleitear a restituição sem comprovar que suportou o encargo econômico ou que possui autorização do contribuinte de fato.',
      exp: 'Art. 166 do CTN: Nos tributos indiretos (ICMS, IPI), a restituição exige prova da não repercussão econômica ao preço ou autorização expressa do contribuinte de fato.'
    },
    {
      sub: 'Compensação, Transação e Remissão (Arts. 170 a 172 do CTN)',
      ref: 'CTN, Arts. 170, 170-A, 171 e 172; Súmulas 212 e 213 do STJ',
      t: 'A compensação depende de lei autorizativa e de créditos líquidos e certos, sendo vedada a compensação mediante o aproveitamento de tributo, objeto de contestação judicial pelo sujeito passivo, antes do trânsito em julgado da respectiva decisão judicial (Art. 170-A); a transação só cabe para litígio já instaurado (terminativo de litígio); e a remissão é o perdão total ou parcial do crédito tributário concedido por lei.',
      f: 'É cabível a concessão de medida liminar para autorizar a compensação imediata de créditos tributários antes do trânsito em julgado da ação judicial.',
      exp: 'Art. 170-A do CTN e Súmula 212 do STJ: A compensação de créditos tributários não pode ser deferida em ação cautelar ou por medida liminar cautelar ou antecipatória antes do trânsito em julgado.'
    },
    {
      sub: 'Decadência Tributária: Regra Geral (Art. 173, I) vs. Lançamento por Homologação (Art. 150, § 4º)',
      ref: 'CTN, Art. 150, § 4º e Art. 173, I e II; Súmula 555 do STJ',
      t: 'O direito de a Fazenda Pública constituir o crédito tributário extingue-se após 5 anos: nos tributos sujeitos a lançamento por homologação em que houve pagamento antecipado parcial (sem dolo, fraude ou simulação), o prazo conta-se da ocorrência do fato gerador (Art. 150, § 4º); já quando não há qualquer pagamento antecipado, ou há dolo, fraude ou simulação, ou nos tributos lançados de ofício, o prazo conta-se do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado (Art. 173, I).',
      f: 'Quando o lançamento é anulado por vício formal, o Fisco perde definitivamente o direito de realizar novo lançamento, não se reabrindo prazo decadencial.',
      exp: 'Art. 173, II do CTN: O prazo decadencial de 5 anos conta-se da data em que se tornar definitiva a decisão que houver anulado, por vício FORMAL, o lançamento anteriormente efetuado.'
    },
    {
      sub: 'Prescrição da Ação de Cobrança e Causas de Interrupção (Art. 174 do CTN)',
      ref: 'CTN, Art. 174, parágrafo único (LC 118/2005) e Súmula Vinculante 8 do STF',
      t: 'A ação para a cobrança do crédito tributário prescreve em cinco anos, contados da data da sua constituição definitiva, interrompendo-se a prescrição pelo despacho do juiz que ordenar a citação em execução fiscal, pelo protesto judicial, por qualquer ato judicial que constitua em mora o devedor ou por qualquer ato inequívoco ainda que extrajudicial que importe em reconhecimento do débito pelo devedor (como o pedido de parcelamento).',
      f: 'A prescrição tributária interrompe-se apenas com a efetiva citação pessoal do executado por oficial de justiça, não bastando o despacho do juiz que ordena a citação.',
      exp: 'Desde a LC 118/2005 (Art. 174, parágrafo único, I do CTN), o simples DESPACHO DO JUIZ que ordenar a citação em execução fiscal interrompe a prescrição, retroagindo à data da propositura da ação (Tema 169 do STJ).'
    }
  ],

  // Aula 11 - Exclusão do Crédito Tributário: Isenção e Anistia
  11: [
    {
      sub: 'Hipóteses Taxativas de Exclusão do Crédito Tributário (Art. 175 do CTN)',
      ref: 'CTN, Art. 175, I, II e Parágrafo Único',
      t: 'Excluem o crédito tributário exclusivamente a isenção e a anistia, sendo que a exclusão do crédito tributário não dispensa o cumprimento das obrigações acessórias dependentes da obrigação principal cujo crédito seja excluído, ou dela consequente.',
      f: 'A remissão e a imunidade tributária constituem modalidades de exclusão do crédito tributário previstas no Art. 175 do CTN.',
      exp: 'Mnemônico: Exclusão = ANIS (Anistia e Isenção). Remissão é modalidade de EXTINÇÃO (Art. 156, IV), e Imunidade é não incidência constitucional.'
    },
    {
      sub: 'Isenção Tributária: Conceito e Tributos Alcançados (Arts. 176 e 177 do CTN)',
      ref: 'CTN, Arts. 176 e 177',
      t: 'A isenção, ainda quando prevista em contrato, é sempre decorrente de lei que especifique as condições e requisitos exigidos para a sua concessão, e, salvo disposição de lei em contrário, não é extensiva às taxas e às contribuições de melhoria nem aos tributos instituídos posteriormente à sua concessão.',
      f: 'A concessão de uma isenção geral de impostos estaduais abrange automaticamente as taxas de polícia e os tributos que vierem a ser criados nos anos seguintes.',
      exp: 'Art. 177 do CTN: Salvo disposição de lei em contrário, a isenção NÃO é extensiva às taxas, às contribuições de melhoria e aos tributos instituídos posteriormente à sua concessão.'
    },
    {
      sub: 'Revogabilidade da Isenção vs. Isenção Onerosa e por Prazo Certo (Art. 178 do CTN)',
      ref: 'CTN, Art. 178 e Súmula 544 do STF',
      t: 'A isenção pode ser revogada ou modificada por lei a qualquer tempo, salvo se concedida por prazo certo E em função de determinadas condições (requisitos cumulativos), caso em que gera direito adquirido para os contribuintes que cumpriram os encargos (Súmula 544 do STF).',
      f: 'Para que uma isenção tributária seja irrevogável, basta que a lei concessiva fixe um prazo determinado de cinco anos, mesmo sem impor qualquer condição onerosa ao contribuinte.',
      exp: 'Art. 178 do CTN e Súmula 544 do STF: A irrevogabilidade da isenção exige a presença CUMULATIVA dos dois requisitos: 1) prazo certo; E 2) condições onerosas!'
    },
    {
      sub: 'Anistia Fiscal: Conceito e Limites Temporais (Arts. 180 a 182 do CTN)',
      ref: 'CTN, Arts. 180 a 182',
      t: 'A anistia abrange exclusivamente as infrações cometidas anteriormente à vigência da lei que a concede (dispensando o lançamento da penalidade pecuniária), não se aplicando aos atos qualificados em lei como crimes ou contravenções e aos que, mesmo sem essa qualificação, sejam praticados com dolo, fraude ou simulação pelo sujeito passivo ou terceiro, nem às infrações resultantes de conluio.',
      f: 'A anistia fiscal extingue o crédito do imposto principal e perdoa infrações futuras que vierem a ser praticadas com fraude ou conluio no semestre seguinte.',
      exp: 'Distinção clássica: Isenção exclui o TRIBUTO; Anistia exclui a PENALIDADE (multa) relativa a infrações anteriores à lei (Art. 180 do CTN); Remissão extingue todo o crédito já constituído.'
    },
    {
      sub: 'Isenção e Anistia de Caráter Individual (Arts. 179 e 182 do CTN)',
      ref: 'CTN, Arts. 179 e 182',
      t: 'Quando não concedidas em caráter geral, a isenção e a anistia são efetivadas, em cada caso, por despacho da autoridade administrativa, em requerimento com o qual o interessado faça prova do preenchimento das condições e do cumprimento dos requisitos previstos em lei, não gerando o despacho direito adquirido.',
      f: 'O despacho administrativo que reconhece a anistia em caráter individual faz coisa julgada material irreversível, mesmo se descoberta falsidade documental posterior.',
      exp: 'Arts. 179, § 2º e 182, parágrafo único do CTN: O despacho não gera direito adquirido, aplicando-se a regra de revogação de ofício do art. 155.'
    }
  ],

  // Aula 12 - Garantias e Privilégios do Crédito Tributário
  12: [
    {
      sub: 'Natureza Exemplificativa das Garantias e Responsabilidade Patrimonial (Arts. 183 e 184 do CTN)',
      ref: 'CTN, Arts. 183 e 184',
      t: 'A enumeração das garantias atribuídas no CTN ao crédito tributário não exclui outras que sejam expressamente previstas em lei (rol exemplificativo), respondendo pelo pagamento do crédito tributário a totalidade dos bens e das rendas do sujeito passivo, inclusive os gravados por ônus real ou cláusula de inalienabilidade ou impenhorabilidade, excetuados unicamente os bens e rendas que a lei declare absolutamente impenhoráveis.',
      f: 'Os imóveis gravados por cláusula testamentária de inalienabilidade ou por hipoteca bancária não podem ser penhorados para pagamento de créditos tributários.',
      exp: 'Art. 184 do CTN: A hipoteca e a cláusula de inalienabilidade/impenhorabilidade voluntária NÃO impedem a penhora fiscal; apenas os bens declarados por LEI absolutamente impenhoráveis (salvo exceção do bem de família para IPTU do próprio imóvel) são protegidos.'
    },
    {
      sub: 'Presunção Absoluta de Fraude à Execução Fiscal (Art. 185 do CTN)',
      ref: 'CTN, Art. 185 (LC 118/2005) e Tema 290 do STJ',
      t: 'Presume-se fraudulenta a alienação ou oneração de bens ou rendas, ou seu começo, por sujeito passivo em débito para com a Fazenda Pública, por crédito tributário regularmente inscrito como dívida ativa, salvo na hipótese de terem sido reservados, pelo devedor, bens ou rendas suficientes ao total pagamento da dívida inscrita.',
      f: 'A presunção de fraude à execução fiscal prevista no Art. 185 do CTN exige a prévia citação válida do devedor na execução fiscal e o registro da penhora na matrícula do imóvel.',
      exp: 'Desde a LC 118/2005 (Tema 290 do STJ), o marco da fraude fiscal no Art. 185 do CTN é a simples INSCRIÇÃO EM DÍVIDA ATIVA (dispensando a citação ou averbação de penhora, inaplicável a Súmula 375 do STJ às execuções fiscais!).'
    },
    {
      sub: 'Indisponibilidade Universal de Bens e Direitos (Art. 185-A do CTN)',
      ref: 'CTN, Art. 185-A e Súmula 560 do STJ',
      t: 'Na hipótese de o devedor tributário, devidamente citado, não pagar nem apresentar bens à penhora no prazo legal e não forem encontrados bens penhoráveis, o juiz determinará a indisponibilidade de seus bens e direitos, comunicando a decisão, preferencialmente por meio eletrônico, aos órgãos e entidades que promovem registros de transferência de bens, limitada a indisponibilidade ao valor total exigível.',
      f: 'O juiz pode decretar a indisponibilidade universal de bens do Art. 185-A do CTN antes mesmo da citação do executado e sem prévia tentativa de penhora de ativos financeiros.',
      exp: 'Súmula 560 do STJ: A decretação da indisponibilidade de bens e direitos, na forma do art. 185-A do CTN, pressupõe o exaurimento das diligências na busca por bens penhoráveis.'
    },
    {
      sub: 'Ordem de Preferência do Crédito Tributário no Concurso Geral e na Falência (Arts. 186 a 188 do CTN)',
      ref: 'CTN, Arts. 186 e 188 (LC 118/2005) e Lei nº 11.101/2005',
      t: 'Fora da falência, o crédito tributário prefere a qualquer outro, ressalvados os créditos decorrentes da legislação do trabalho ou do acidente de trabalho; na falência, o crédito tributário não prefere aos créditos extraconcursais, às importâncias passíveis de restituição, aos créditos trabalhistas (limitados a 150 salários-mínimos por credor) e aos créditos com garantia real até o limite do valor do bem gravado, sendo a multa tributária subquirografária.',
      f: 'Na falência da sociedade empresária, as multas tributárias punitivas preferem aos créditos trabalhistas e aos créditos bancários com garantia real.',
      exp: 'Art. 186, parágrafo único do CTN: Na falência, o crédito tributário fica atrás dos extraconcursais, restituições, trabalhistas (até 150 SM) e garantia real, e as multas tributárias ficam abaixo até dos créditos quirografários!'
    },
    {
      sub: 'Concurso de Preferência entre Entes Federados (Art. 187, Parágrafo Único do CTN e ADPF 357)',
      ref: 'ADPF 357 do STF e Súmula 563 do STF (superada)',
      t: 'O Supremo Tribunal Federal, no julgamento da ADPF 357, declarou que o parágrafo único do Art. 187 do CTN (que estabelecia ordem hierárquica de preferência entre União, Estados e Municípios na cobrança de créditos tributários) não foi recepcionado pela Constituição Federal de 1988, por violar a isonomia federativa e a vedação de preferências entre entes (Art. 19, III da CF/88).',
      f: 'O Supremo Tribunal Federal reafirmou na ADPF 357 que os créditos tributários da União têm preferência absoluta sobre os créditos estaduais de ICMS.',
      exp: 'Decisão histórica do STF (ADPF 357/2021): Não há hierarquia entre União, Estados, DF e Municípios; o parágrafo único do art. 187 do CTN e do art. 29 da LEF NÃO foram recepcionados pela CF/88 (cancelamento da Súmula 563 do STF).'
    }
  ],

  // Aula 13 - Administração Tributária e Fiscalização
  13: [
    {
      sub: 'Competência de Fiscalização e Lavratura do Termo de Início (Arts. 194 a 196 do CTN)',
      ref: 'CTN, Arts. 194 a 196 e Súmula 439 do STF',
      t: 'A legislação tributária reguladora da fiscalização aplica-se a todas as pessoas naturais ou jurídicas, contribuintes ou não, inclusive às que gozem de imunidade tributária ou de isenção de caráter pessoal, sendo inválido qualquer dispositivo legal que exclua ou limite o direito de examinar mercadorias, livros, arquivos e documentos comerciais ou fiscais; ademais, a autoridade lavrará os termos necessários para que se documente o início do procedimento, fixando prazo máximo para a conclusão.',
      f: 'As entidades imunes de educação e assistência social sem fins lucrativos estão isentas de fiscalização tributária e desobrigadas de exibir seus livros contábeis ao Fisco.',
      exp: 'Art. 194, parágrafo único do CTN: A competência de fiscalização alcança todas as pessoas, INCLUSIVE as que gozem de imunidade ou isenção!'
    },
    {
      sub: 'Dever de Prestar Informações por Terceiros e Limite do Segredo Profissional (Art. 197 do CTN)',
      ref: 'CTN, Art. 197, caput e Parágrafo Único',
      t: 'Mediante intimação escrita, são obrigados a prestar à autoridade administrativa todas as informações de que disponham com relação aos bens, negócios ou atividades de terceiros: os tabeliães, escrivães, bancos, empresas de administração de bens, corretores, leiloeiros, inventariantes e síndicos; contudo, essa obrigação não abrange a prestação de informações quanto a fatos sobre os quais o informante esteja legalmente obrigado a observar segredo em razão de cargo, ofício, função, ministério, atividade ou profissão.',
      f: 'Os advogados e sacerdotes são obrigados a revelar ao auditor fiscal, mediante simples intimação administrativa, os fatos confidenciais que conheceram sob sigilo profissional.',
      exp: 'Art. 197, parágrafo único do CTN resguarda expressamente o sigilo profissional legalmente protegido (ex: advogado, médico, ministro religioso).'
    },
    {
      sub: 'Sigilo Fiscal e Exceções Legais à Vedação de Divulgação (Art. 198 do CTN)',
      ref: 'CTN, Art. 198, §§ 1º a 3º',
      t: 'É vedada a divulgação, por parte da Fazenda Pública ou de seus servidores, de informação obtida em razão do ofício sobre a situação econômica ou financeira do sujeito passivo; excetuam-se a requisição de autoridade judiciária e as solicitações de autoridade administrativa para investigar infração administrativa (com processo instaurado), além de não ser vedada a divulgação de informações relativas a representações fiscais para fins penais, inscrições na Dívida Ativa, parcelamento ou moratória, e incentivo, renúncia, benefício ou imunidade tributária de pessoa jurídica.',
      f: 'A divulgação pela Fazenda Pública da lista de devedores inscritos em Dívida Ativa e de empresas beneficiárias de incentivos fiscais viola o sigilo fiscal do Art. 198 do CTN.',
      exp: 'Art. 198, § 3º do CTN (com a LC 187/2021): NÃO é vedada a divulgação de inscrições na Dívida Ativa, parcelamento/moratória, representações fiscais para fins penais e incentivos/benefícios/imunidades de pessoa jurídica!'
    },
    {
      sub: 'Acesso Direto do Fisco a Dados Bancários (Art. 6º da LC 105/2001 e Tema 225 do STF)',
      ref: 'LC nº 105/2001, Art. 6º e STF (RE 601.314 - Tema 225)',
      t: 'As autoridades e os agentes fiscais tributários da União, dos Estados, do Distrito Federal e dos Municípios somente poderão examinar documentos, livros e registros de instituições financeiras, inclusive os referentes a contas de depósitos e aplicações financeiras, quando houver processo administrativo instaurado ou procedimento fiscal em curso e tais exames sejam considerados indispensáveis pela autoridade administrativa competente, prescindindo de prévia autorização judicial.',
      f: 'O Supremo Tribunal Federal exige mandado judicial prévio para que a Secretaria da Fazenda Estadual requisite extratos bancários em procedimento fiscal instaurado.',
      exp: 'Tema 225 do STF: O art. 6º da LC 105/2001 é constitucional, pois transfere o dever de sigilo do banco para o Fisco sem violar a intimidade.'
    },
    {
      sub: 'Assistência Mútua entre Fazendas Públicas e Requisição de Força Policial (Arts. 199 e 200 do CTN)',
      ref: 'CTN, Arts. 199 e 200',
      t: 'A Fazenda Pública da União e as dos Estados, do DF e dos Municípios prestar-se-ão mutuamente assistência para a fiscalização dos tributos respectivos e permuta de informações, na forma estabelecida em lei ou convênio; e as autoridades administrativas federais poderão requisitar o auxílio da força pública federal, estadual ou municipal, quando vítimas de embaraço ou desacato no exercício de suas funções, ou quando necessário à efetivação de medida prevista na legislação tributária, ainda que não se configure fato definido em lei como crime ou contravenção.',
      f: 'A requisição de auxílio de força policial pela autoridade fiscal só é permitida se o contribuinte já tiver sido condenado criminalmente por desacato com trânsito em julgado.',
      exp: 'Art. 200 do CTN: O auxílio da força pública pode ser requisitado na presença de embaraço à fiscalização ou desacato, AINDA QUE não se configure crime ou contravenção.'
    }
  ],

  // Aula 14 - Dívida Ativa e Certidões Negativas
  14: [
    {
      sub: 'Inscrição em Dívida Ativa e Requisitos do Termo de Inscrição (Arts. 201 e 202 do CTN)',
      ref: 'CTN, Arts. 201 e 202 e Lei nº 6.830/1980 (LEF)',
      t: 'Constitui dívida ativa tributária a proveniente de crédito dessa natureza, regularmente inscrita na repartição administrativa competente, depois de esgotado o prazo fixado, para pagamento, pela lei ou por decisão final proferida em processo regular, devendo o termo de inscrição indicar obrigatoriamente o nome do devedor, a quantia devida e a maneira de calcular os juros, a origem e natureza do crédito com menção à disposição da lei, a data da inscrição e o número do processo administrativo.',
      f: 'A inscrição de um débito em dívida ativa suspende a fluência dos juros de mora e impede a emissão de Certidão de Dívida Ativa (CDA) pelo prazo de dois anos.',
      exp: 'Art. 201, parágrafo único do CTN: A fluência de juros de mora não exclui, para os efeitos deste artigo, a liquidez do crédito.'
    },
    {
      sub: 'Presunção Relativa de Certeza e Liquidez da Dívida Ativa (Art. 204 do CTN)',
      ref: 'CTN, Art. 204, caput e Parágrafo Único',
      t: 'A dívida regularmente inscrita goza da presunção de certeza e liquidez e tem o efeito de prova pré-constituída, sendo tal presunção relativa (juris tantum) e podendo ser ilidida por prova inequívoca, a cargo do sujeito passivo ou do terceiro a que aproveite.',
      f: 'A Certidão de Dívida Ativa (CDA) goza de presunção absoluta (juris et de jure) de certeza e liquidez, não admitindo prova em contrário pelo executado.',
      exp: 'Art. 204, parágrafo único do CTN: A presunção de certeza e liquidez da CDA é RELATIVA e pode ser afastada por prova inequívoca produzida pelo sujeito passivo.'
    },
    {
      sub: 'Nulidade da Inscrição e Substituição da CDA até a Sentença (Art. 203 do CTN e Súmula 392 do STJ)',
      ref: 'CTN, Art. 203 e Súmula 392 do STJ',
      t: 'A omissão de quaisquer dos requisitos obrigatórios do termo de inscrição, ou o erro a eles relativo, são causas de nulidade da inscrição e do processo de cobrança dela decorrente, mas a nulidade poderá ser sanada até a decisão de primeira instância, mediante substituição da certidão nula, devolvido ao sujeito passivo, acusado ou interessado o prazo para defesa, que somente poderá versar sobre a parte modificada, vedada porém a substituição da CDA para alterar o sujeito passivo da execução (Súmula 392 STJ).',
      f: 'A Fazenda Pública pode substituir a Certidão de Dívida Ativa até o julgamento no Superior Tribunal de Justiça para trocar o CNPJ do executado.',
      exp: 'Súmula 392 do STJ: A Fazenda Pública pode substituir a Certidão de Dívida Ativa (CDA) até a prolação da sentença de embargos, quando se tratar de correção de erro material ou formal, vedada a modificação do sujeito passivo da execução.'
    },
    {
      sub: 'Certidão Negativa (CND) vs. Certidão Positiva com Efeitos de Negativa (CPEN)',
      ref: 'CTN, Arts. 205 e 206',
      t: 'A certidão negativa será sempre expedida nos termos em que tenha sido requerida e será fornecida dentro de 10 (dez) dias da data da entrada do requerimento na repartição; e tem os mesmos efeitos da certidão negativa a certidão de que conste a existência de créditos não vencidos, em curso de cobrança executiva em que tenha sido efetivada a penhora, ou cuja exigibilidade esteja suspensa (CPEN).',
      f: 'O prazo legal previsto no Art. 205 do CTN para a expedição de certidão negativa de débitos tributários é de 60 (sessenta) dias úteis.',
      exp: 'Art. 205, parágrafo único do CTN: O prazo para expedição da certidão negativa é de 10 (dez) dias!'
    },
    {
      sub: 'Dispensa de Certidão Negativa e Responsabilidade Funcional (Arts. 207 e 208 do CTN)',
      ref: 'CTN, Arts. 207 e 208',
      t: 'Independentemente de disposição legal permissiva, será dispensada a prova de quitação de tributos, ou o seu suprimento, quando se tratar de prática de ato indispensável para evitar a caducidade de direito, respondendo, porém, todos os participantes no ato pelo tributo porventura devido, juros de mora e penalidades cabíveis, exceto as relativas a infrações cuja responsabilidade seja pessoal ao infrator; ademais, a certidão negativa expedida com dolo ou fraude responsabiliza pessoalmente o funcionário que a expedir pelo crédito tributário e juros de mora.',
      f: 'O servidor público que expedir certidão negativa mediante erro escusável sem dolo ou fraude responde criminalmente e com seus bens pessoais pelo valor integral da dívida.',
      exp: 'Art. 208 do CTN: A responsabilidade pessoal do funcionário pelo crédito tributário e juros exige que a certidão negativa tenha sido expedida com DOLO ou FRAUDE.'
    }
  ],

  // Aula 15 - Processo Administrativo Tributário (PAT / PAF)
  15: [
    {
      sub: 'Princípios Norteadores do Processo Administrativo Tributário (PAT-BA - Decreto nº 7.629/1999)',
      ref: 'CF/88, Art. 5º, LV e Regulamento do Processo Administrativo Fiscal da Bahia (RPAF-BA)',
      t: 'O Processo Administrativo Tributário rege-se pelos princípios da legalidade objetiva, da verdade material (podendo o órgão julgador determinar diligências e perícias de ofício para descobrir a realidade fática), da oficialidade, do informalismo moderado e da ampla defesa e contraditório.',
      f: 'No Processo Administrativo Tributário vigora o princípio da verdade estritamente formal, sendo proibido ao Conselho de Fazenda (CONSEF) converter o julgamento em diligência fiscal.',
      exp: 'O princípio da verdade material é a pedra angular do PAT: a Administração busca conhecer a realidade efetiva do fato gerador, podendo determinar diligências e perícias contábeis.'
    },
    {
      sub: 'Fase Oficiosa (Unilateral) vs. Fase Contenciosa (Litigiosa) do PAT',
      ref: 'CTN, Art. 145, I e Art. 151, III; RPAF-BA',
      t: 'A fase oficiosa ou inquisitória inicia-se com o primeiro ato de ofício escrito praticado por servidor competente cientificado o sujeito passivo (retirando a espontaneidade) e culmina no lançamento; já a fase contenciosa (litigiosa) instaura-se exclusivamente com a apresentação tempestiva da impugnação (defesa) pelo sujeito passivo, a qual suspende a exigibilidade do crédito tributário nos termos do Art. 151, III do CTN.',
      f: 'A simples lavratura do Termo de Início de Fiscalização já instaura a fase contenciosa do processo administrativo tributário.',
      exp: 'A fase contenciosa só nasce com a IMPUGNAÇÃO (defesa administrativa) tempestiva apresentada pelo autuado contra o Auto de Infração ou Notificação Fiscal.'
    },
    {
      sub: 'Estrutura de Julgamento no CONSEF-BA (Juntas de Julgamento Fiscal e Câmaras de Julgamento)',
      ref: 'Lei Estadual BA nº 7.014/1996 e Decreto BA nº 7.629/1999 (RPAF-BA)',
      t: 'No Estado da Bahia, o julgamento do contencioso administrativo fiscal compete ao Conselho de Fazenda Estadual (CONSEF), órgão paritário integrado por representantes da Fazenda Estadual e dos contribuintes, estruturado em primeira instância nas Juntas de Julgamento Fiscal (JJF) e em segunda instância nas Câmaras de Julgamento (CJF) e Câmara Superior.',
      f: 'O julgamento em segunda instância administrativa no CONSEF-BA é realizado monocraticamente pelo Governador do Estado, sem participação de representantes dos contribuintes.',
      exp: 'O CONSEF-BA é órgão colegiado paritário (representantes do Fisco e das entidades empresariais/contribuintes), com 1ª instância nas JJFs e 2ª instância nas Câmaras de Julgamento.'
    },
    {
      sub: 'Recurso Voluntário vs. Recurso de Ofício no PAT',
      ref: 'RPAF-BA e Legislação do Contencioso Fiscal',
      t: 'Contra a decisão de primeira instância (JJF) parcial ou totalmente desfavorável ao contribuinte cabe Recurso Voluntário; já quando a decisão de primeira instância exonerar total ou parcialmente o sujeito passivo do pagamento de tributo ou multa em montante superior ao limite de alçada regulamentar, o próprio órgão julgador recorre obrigatoriamente mediante Recurso de Ofício para a segunda instância.',
      f: 'A decisão de primeira instância administrativa que anula auto de infração bilionário transita em julgado imediatamente, sendo vedado o reexame necessário (recurso de ofício).',
      exp: 'Acima do valor de alçada legal, a decisão de 1ª instância contrária à Fazenda Pública sujeita-se obrigatoriamente ao Recurso de Ofício (reexame necessário) para a 2ª instância (Câmara de Julgamento).'
    },
    {
      sub: 'Efeitos da Decisão Administrativa Definitiva e Concomitância com Ação Judicial',
      ref: 'CTN, Art. 156, IX e Lei nº 6.830/1980, Art. 38, parágrafo único',
      t: 'A decisão administrativa definitiva favorável ao contribuinte extingue o crédito tributário (Art. 156, IX do CTN), fazendo "coisa julgada administrativa" contra o Fisco; por outro lado, a propositura pelo contribuinte de ação judicial (mandado de segurança, ação anulatória ou declaratória) com o mesmo objeto importa em renúncia ao poder de recorrer na esfera administrativa e desistência do recurso acaso interposto.',
      f: 'Pelo princípio da inafastabilidade da jurisdição, a Fazenda Pública pode propor ação judicial para anular decisão administrativa final proferida por seu próprio Conselho de Contribuintes a favor do sujeito passivo.',
      exp: 'Princípio da unicidade de jurisdição: o contribuinte pode ir ao Judiciário se perder no administrativo, mas se judicializar antes importa renúncia à esfera administrativa; já a Fazenda Pública fica vinculada à decisão final de seu próprio órgão julgador administrativo (salvo nulidade por fraude/corrupção).'
    }
  ],

  // Aula 16 - Processo Judicial Tributário (Execução Fiscal, Anulatória, MS)
  16: [
    {
      sub: 'Execução Fiscal (Lei nº 6.830/1980 - LEF) e Exceção de Pré-Executividade',
      ref: 'Lei nº 6.830/1980 (LEF) e Súmula 393 do STJ',
      t: 'Na execução fiscal, o executado é citado para, no prazo de 5 (cinco) dias, pagar a dívida com os juros e multa de mora e encargos indicados na CDA, ou garantir a execução; os Embargos à Execução Fiscal exigem garantia prévia do juízo e têm prazo de 30 dias, porém a Exceção de Pré-Executividade é admissível na execução fiscal independentemente de garantia do juízo relativamente às matérias conhecíveis de ofício que não demandem dilação probatória (Súmula 393 STJ).',
      f: 'A apresentação de Exceção de Pré-Executividade na execução fiscal exige depósito prévio em dinheiro e permite a realização de perícia contábil complexa.',
      exp: 'Súmula 393 do STJ: A exceção de pré-executividade é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que NÃO demandem dilação probatória (dispensando garantia do juízo).'
    },
    {
      sub: 'Ação Anulatória de Débito Fiscal vs. Ação Declaratória de Inexistência de Relação Jurídico-Tributária',
      ref: 'Lei nº 6.830/1980, Art. 38 e Súmula 247 do TFR',
      t: 'A Ação Declaratória é cabível antes do lançamento tributário para declarar a inexistência de relação jurídico-tributária (ou mesmo após, embora não desconstitua o lançamento sem pedido anulatório), enquanto a Ação Anulatória visa desconstituir o lançamento já realizado, sendo que a propositura da ação anulatória independe de depósito prévio do valor do débito (o depósito apenas suspende a exigibilidade se o autor quiser evitar a execução fiscal).',
      f: 'O depósito prévio integral em dinheiro é requisito processual obrigatório para que o contribuinte possa protocolar uma Ação Anulatória de Débito Fiscal no Poder Judiciário.',
      exp: 'Súmula Vinculante 28 do STF e jurisprudência do STJ: Não constitui pressuposto de admissibilidade da ação anulatória o depósito prévio do débito (o depósito apenas suspende a exigibilidade pelo art. 151, II do CTN).'
    },
    {
      sub: 'Mandado de Segurança em Matéria Tributária (Súmulas 213 e 460 do STJ e Súmula 266 do STF)',
      ref: 'Lei nº 12.016/2009 e Súmulas 213 e 460 do STJ',
      t: 'Não cabe mandado de segurança contra lei em tese (Súmula 266 STF), mas é cabível mandado de segurança preventivo diante de justo receio de cobrança fiscal inconstitucional, bem como para declarar o direito à compensação tributária (Súmula 213 STJ, cujo pedido de declaração não se sujeita a prazo decadencial de 120 dias por ser preventivo), embora não seja cabível para convalidar a compensação já realizada por conta própria pelo contribuinte (Súmula 460 STJ).',
      f: 'O mandado de segurança substitui a ação de cobrança e permite a condenação da Fazenda Pública à restituição em espécie de tributos pagos nos cinco anos anteriores à impetração.',
      exp: 'Súmulas 269 e 271 do STF: O mandado de segurança não é substitutivo de ação de cobrança e não produz efeitos patrimoniais em relação a período pretérito!'
    },
    {
      sub: 'Ação de Consignação em Pagamento Tributária (Art. 164 do CTN)',
      ref: 'CTN, Art. 164, I, II e III',
      t: 'A importância de crédito tributário pode ser consignada judicialmente pelo sujeito passivo nos casos de: I - recusa de recebimento, ou subordinação deste ao pagamento de outro tributo ou de penalidade, ou ao cumprimento de obrigação acessória; II - subordinação do recebimento ao cumprimento de exigências administrativas sem fundamento legal; e III - exigência, por mais de uma pessoa jurídica de direito público, de tributo idêntico sobre um mesmo fato gerador (bitributação).',
      f: 'A ação de consignação em pagamento no direito tributário permite ao contribuinte depositar títulos da dívida agrária ou bens imóveis para obter parcelamento em 120 meses.',
      exp: 'Art. 164, § 1º do CTN: A consignação só pode versar sobre o crédito que o consignante se propõe a pagar (em moeda corrente), extinguindo o crédito se julgada procedente (§ 2º).'
    },
    {
      sub: 'Medida Cautelar Fiscal (Lei nº 8.397/1992)',
      ref: 'Lei nº 8.397/1992, Arts. 1º a 4º',
      t: 'A Medida Cautelar Fiscal pode ser requerida pela Fazenda Pública contra o sujeito passivo de crédito tributário ou não tributário, após a constituição do crédito (ou excepcionalmente antes da constituição se o devedor alienar bens sem proceder à devida comunicação ao órgão da Fazenda Pública ou tiver sua inscrição declarada inapta), produzindo de imediato a indisponibilidade dos bens do requerido até o limite da satisfação da obrigação.',
      f: 'A medida cautelar fiscal é ação privativa do contribuinte para bloquear a conta única do Tesouro Estadual em caso de atraso na restituição de ICMS.',
      exp: 'A Medida Cautelar Fiscal (Lei 8.397/92) é instrumento processual privativo da FAZENDA PÚBLICA para tornar indisponíveis os bens do devedor que dilapida seu patrimônio ou põe seus bens em nome de terceiros.'
    }
  ],

  // Aula 17 - Impostos de Competência dos Estados (ICMS, IPVA, ITCMD)
  17: [
    {
      sub: 'ITCMD: Competência Territorial, Bens no Exterior e Progressividade (EC 132/2023)',
      ref: 'CF/88, Art. 155, I e § 1º (com redação da EC 132/2023) e Lei BA nº 4.826/1989',
      t: 'O ITCMD compete, relativamente a bens imóveis, ao Estado da situação do bem; relativamente a bens móveis, títulos e créditos, na transmissão causa mortis compete ao Estado onde era domiciliado o de cujus (redação da EC 132/2023, superando o antigo local do inventário) e na doação ao domicílio do doador; ademais, o imposto é obrigatoriamente progressivo em razão do valor do quinhão, do legado ou da doação, não incidindo sobre transmissões e doações para instituições sem fins lucrativos com finalidade de relevância pública e social.',
      f: 'No ITCMD sobre bens imóveis, o imposto é devido sempre ao Estado onde os herdeiros resolverem abrir o inventário extrajudicial em cartório, independentemente da localização do imóvel.',
      exp: 'Art. 155, § 1º, I da CF/88: Para bens IMÓVEIS, o ITCMD compete sempre ao Estado da SITUAÇÃO DO BEM. E com a EC 132/2023, para bens móveis causa mortis, compete ao Estado onde era DOMICILIADO o de cujus.'
    },
    {
      sub: 'IPVA: Alíquotas Mínimas, Diferenciação e Ampliação para Veículos Aquáticos e Aéreos (EC 132/2023)',
      ref: 'CF/88, Art. 155, III e § 6º (com redação da EC 132/2023) e Lei BA nº 6.348/1991',
      t: 'O IPVA terá alíquotas mínimas fixadas pelo Senado Federal, poderá ter alíquotas diferenciadas em função do tipo, do valor, da utilização e do impacto ambiental do veículo, e, após a EC 132/2023, incide sobre a propriedade de veículos automotores terrestres, aquáticos e aéreos (ressalvadas aeronaves agrícolas e de operadores certificados para serviços aéreos a terceiros, embarcações de transporte aquaviário ou pesca e tratores/máquinas agrícolas).',
      f: 'O Senado Federal fixa as alíquotas máximas do IPVA, sendo vedado aos Estados diferenciar alíquotas de acordo com o impacto ambiental ou valor do veículo.',
      exp: 'Art. 155, § 6º da CF/88: No IPVA, o Senado fixa alíquotas MÍNIMAS (enquanto no ITCMD o Senado fixa alíquotas MÁXIMAS!).'
    },
    {
      sub: 'ICMS: Fatos Geradores, Importação por Não Contribuinte e Deslocamento entre Estabelecimentos (ADC 49)',
      ref: 'CF/88, Art. 155, II e § 2º, IX, "a"; LC nº 87/1996 e LC nº 204/2023; Súmula 166 do STJ e ADC 49 do STF',
      t: 'O ICMS incide sobre a entrada de bem ou mercadoria importados do exterior por pessoa física ou jurídica, ainda que não seja contribuinte habitual do imposto, qualquer que seja a sua finalidade, cabendo o imposto ao Estado onde estiver situado o domicílio ou o estabelecimento do destinatário; por outro lado, não se considera ocorrido o fato gerador do ICMS na saída de mercadoria de um estabelecimento para outro de mesma titularidade (ADC 49 do STF e LC 204/2023), mantendo-se o crédito.',
      f: 'A simples transferência física de mercadorias entre a matriz e a filial da mesma empresa comercial constitui fato gerador autônomo do ICMS.',
      exp: 'Na ADC 49 (positivada pela LC 204/2023 no Art. 12, § 4º da LC 87/96), o STF decidiu que o mero deslocamento de mercadorias entre estabelecimentos do MESMO titular (mesma pessoa jurídica) NÃO configura fato gerador do ICMS, assegurada a manutenção e transferência do crédito.'
    },
    {
      sub: 'ICMS: Não Cumulatividade, Efeito da Isenção/Não Incidência e DIFAL (EC 87/2015 e LC 190/2022)',
      ref: 'CF/88, Art. 155, § 2º, I, II, VII e VIII; LC nº 87/1996 e LC nº 190/2022',
      t: 'A isenção ou não incidência do ICMS, salvo determinação em contrário da legislação, não implicará crédito para compensação com o montante devido nas operações seguintes e acarretará a anulação do crédito relativo às operações anteriores; e nas operações interestaduais destinadas a consumidor final (contribuinte ou não), aplica-se a alíquota interestadual e cabe ao Estado de localização do destinatário o imposto correspondente à diferença entre a alíquota interna do Estado destinatário e a alíquota interestadual (DIFAL).',
      f: 'Nas vendas interestaduais pela internet destinadas a consumidor final pessoa física não contribuinte na Bahia, aplica-se a alíquota interna do Estado de origem, sem partilha de DIFAL para a Bahia.',
      exp: 'Pela EC 87/2015 e LC 190/2022, nas operações interestaduais para consumidor final (contribuinte ou não), 100% do DIFAL pertence ao Estado de DESTINO (sendo recolhido pelo remetente se o destinatário não for contribuinte, e pelo destinatário se for contribuinte).'
    },
    {
      sub: 'Substituição Tributária no ICMS (Para Frente) e Restituição do Excesso (Tema 201 do STF)',
      ref: 'CF/88, Art. 150, § 7º e Tema 201 do STF (RE 593.849)',
      t: 'A lei poderá atribuir a sujeito passivo de obrigação tributária a condição de responsável pelo pagamento de imposto ou contribuição cujo fato gerador deva ocorrer posteriormente (substituição tributária progressiva ou "para frente"), assegurada a imediata e preferencial restituição da quantia paga caso não se realize o fato gerador presumido ou caso a base de cálculo efetiva da operação final seja inferior à presumida (Tema 201 do STF).',
      f: 'Na substituição tributária para frente do ICMS, a base de cálculo presumida é definitiva, sendo vedada a restituição se a venda ao consumidor final ocorrer por preço inferior ao pautado.',
      exp: 'No RE 593.849 (Tema 201 da Repercussão Geral), o STF fixou que é devida a restituição da diferença do ICMS pago a mais no regime de substituição tributária para a frente se a base de cálculo efetiva da operação for inferior à presumida.'
    }
  ],

  // Aula 18 - Simples Nacional e Legislação Específica da Bahia
  18: [
    {
      sub: 'Simples Nacional (LC nº 123/2006): Conceito, Limites de Receita Bruta e Sublimite Estadual',
      ref: 'LC nº 123/2006, Arts. 3º, 12, 13 e 19',
      t: 'O Simples Nacional implica o recolhimento mensal, mediante documento único de arrecadação (DAS), de oito tributos (IRPJ, IPI, CSLL, COFINS, PIS/Pasep, CPP, ICMS e ISS), aplicando-se às Microempresas (receita bruta anual igual ou inferior a R$ 360.000,00) e Empresas de Pequeno Porte (receita bruta superior a R$ 360.000,00 e igual ou inferior a R$ 4.800.000,00), observando-se o sublimite de R$ 3.600.000,00 para efeito de recolhimento do ICMS e do ISS dentro do Simples.',
      f: 'O recolhimento unificado pelo DAS do Simples Nacional abrange todos os tributos existentes no Brasil, inclusive o Imposto de Importação, o IOF, o ITR e o FGTS dos empregados.',
      exp: 'O Art. 13, § 1º da LC 123/2006 exclui expressamente do recolhimento unificado no DAS diversos tributos e situações, como II, IE, IOF, ITR, FGTS, e o ICMS devido por substituição tributária, antecipação, importação e DIFAL.'
    },
    {
      sub: 'ICMS cobrado "Por Fora" do DAS nas Empresas do Simples Nacional',
      ref: 'LC nº 123/2006, Art. 13, § 1º, XIII',
      t: 'O recolhimento pelo Simples Nacional não exclui a incidência do ICMS devido nas operações sujeitas ao regime de substituição tributária, tributação concentrada em uma única etapa (monofásica), antecipação tributária, importação de bens do exterior, aquisição ou manutenção em estoque de mercadoria desacobertada de documento fiscal, operação desacobertada de documento fiscal e diferencial de alíquotas (DIFAL) nas compras interestaduais.',
      f: 'A empresa optante pelo Simples Nacional está isenta de recolher o ICMS por Substituição Tributária e na importação de mercadorias do exterior.',
      exp: 'Art. 13, § 1º, XIII da LC 123/2006: Nas hipóteses de ST, importação, antecipação, DIFAL e operações sem nota fiscal, o optante pelo Simples Nacional responde pelo ICMS segundo a legislação aplicável às demais pessoas jurídicas ("por fora" do DAS).'
    },
    {
      sub: 'Transferência de Crédito de ICMS por Optante do Simples Nacional (Art. 23 da LC 123/2006)',
      ref: 'LC nº 123/2006, Art. 23, §§ 1º a 4º',
      t: 'As microempresas e as empresas de pequeno porte optantes pelo Simples Nacional não farão jus à apropriação nem transferirão créditos relativos a impostos ou contribuições abrangidos pelo Simples Nacional; contudo, as pessoas jurídicas não optantes pelo Simples Nacional terão direito a crédito correspondente ao ICMS incidente sobre as suas aquisições de mercadorias de ME ou EPP optante pelo Simples Nacional, desde que destinadas à comercialização ou industrialização e observado, como limite, o ICMS efetivamente devido pelos optantes em relação a essas aquisições.',
      f: 'É absolutamente proibido que uma indústria do regime normal aproveite qualquer percentual de crédito de ICMS ao adquirir insumos de fornecedor optante pelo Simples Nacional.',
      exp: 'Art. 23, § 1º da LC 123/2006: O adquirente não optante pode se creditar do percentual de ICMS efetivamente pago pelo fornecedor do Simples no DAS, desde que destacado no campo próprio da NF-e e destinado à comercialização ou industrialização.'
    },
    {
      sub: 'Legislação do ICMS da Bahia (Lei nº 7.014/1996): Alíquotas Internas e Fundo de Combate à Pobreza (FECEP)',
      ref: 'Lei Estadual da Bahia nº 7.014/1996 (Arts. 15, 16 e 16-A)',
      t: 'Na legislação tributária do Estado da Bahia (Lei nº 7.014/1996), a alíquota interna padrão (modal) do ICMS foi fixada em 20,5%, existindo alíquotas diferenciadas (como 7% e 12% para itens específicos e 25% ou 27% para bens supérfluos/telecomunicações/bebidas alcoólicas), além do adicional de 2 pontos percentuais destinado ao Fundo Estadual de Combate e Erradicação da Pobreza (FECEP) sobre produtos e serviços específicos (Art. 82, § 1º do ADCT).',
      f: 'Na Lei nº 7.014/1996 do Estado da Bahia, o adicional de 2% do Fundo de Combate à Pobreza incide sobre os produtos da cesta básica alimentar.',
      exp: 'O adicional do FECEP (2%) incide apenas sobre produtos e serviços supérfluos especificados no Art. 16-A da Lei Estadual nº 7.014/1996 (como bebidas alcoólicas, cigarros, perfumes, embarcações de esporte e recreação), jamais sobre cesta básica.'
    },
    {
      sub: 'Antecipação Parcial e Antecipação Tributária na Lei nº 7.014/1996 da Bahia',
      ref: 'Lei Estadual da Bahia nº 7.014/1996, Art. 12-A',
      t: 'Nos termos do Art. 12-A da Lei Estadual nº 7.014/1996 (Bahia), nas aquisições interestaduais de mercadorias para fins de comercialização, será exigida a antecipação parcial do ICMS, a ser efetuada pelo próprio adquirente, independentemente do regime de apuração adotado, mediante a aplicação da alíquota interna sobre a base de cálculo prevista, deduzido o valor do imposto destacado no documento fiscal de aquisição.',
      f: 'A antecipação parcial do Art. 12-A da Lei nº 7.014/1996 encerra a fase de tributação da mercadoria, impedindo a incidência do ICMS na saída subsequente.',
      exp: 'Distinção fundamental na SEFAZ-BA: A Antecipação TOTAL (ST) encerra a fase de tributação; já a Antecipação PARCIAL (Art. 12-A da Lei 7.014/96) NÃO encerra a fase de tributação (compensa-se na apuração normal e iguala a carga interestadual à interna na entrada para comercialização).'
    }
  ]
};
