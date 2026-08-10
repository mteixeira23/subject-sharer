import { Button } from "@/components/ui/button";
import { FileDown, ArrowLeft, ChevronDown, LayoutDashboard, MessageCircle, Target, CheckSquare, BookOpen, Wallet, Heart, Settings } from "lucide-react";
import { printElement } from "@/lib/exportUtils";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import MindMap from "@/components/manual/MindMap";
import ManualSidebar from "@/components/manual/ManualSidebar";
import TipBlock from "@/components/manual/TipBlock";
import { useState } from "react";

function Section({ id, icon, title, children }: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section id={`section-${id}`} className="scroll-mt-20">
      <h2 className="flex items-center gap-2 text-xl font-bold mb-3 border-b border-border pb-2">
        {icon} {title}
      </h2>
      {children}
    </section>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border border-border rounded-lg my-3">
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium hover:bg-accent/50 rounded-lg transition-colors">
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-3 text-sm space-y-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function Manual() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 sticky top-0 z-10 bg-background py-3 border-b border-border mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold flex-1">Manual do Habitus</h1>
        <Button onClick={() => printElement("manual-content", "Manual do Habitus")}>
          <FileDown className="mr-2 h-4 w-4" /> Salvar como PDF
        </Button>
      </div>

      {/* Mind Map */}
      <div className="mb-8 p-4 rounded-xl border border-border bg-card">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Mapa do Sistema</h2>
        <MindMap />
      </div>

      {/* Layout: sidebar + content */}
      <div className="flex gap-8">
        <ManualSidebar />

        <div id="manual-content" className="prose prose-sm dark:prose-invert max-w-none space-y-10 text-foreground flex-1 min-w-0">

          {/* Intro */}
          <section>
            <h1>Manual de Uso — Habitus</h1>
            <p>O <strong>Habitus</strong> é um sistema integrado de produtividade pessoal que reúne em um único lugar o gerenciamento de tarefas, estudos, finanças, saúde e metas. Este manual descreve cada módulo e como utilizá-lo da forma mais eficiente.</p>
          </section>

          {/* 1 — Dashboard */}
          <Section id="dashboard" icon={<LayoutDashboard className="h-5 w-5 text-primary" />} title="1. Dashboard (Hub)">
            <p>O Dashboard é a tela inicial após o login. Ele oferece uma visão consolidada de todos os módulos em tempo real.</p>

            <h3>Cards de resumo</h3>
            <table>
              <thead><tr><th>Card</th><th>O que mostra</th></tr></thead>
              <tbody>
                <tr><td>Tarefas pendentes</td><td>Quantidade de tarefas não concluídas para hoje</td></tr>
                <tr><td>Estudos do dia</td><td>Eventos de estudo agendados para hoje</td></tr>
                <tr><td>Saldo financeiro</td><td>Soma dos saldos de todas as contas</td></tr>
                <tr><td>Hábitos de hoje</td><td>Hábitos completados vs. total programado</td></tr>
              </tbody>
            </table>

            <h3>Agenda Unificada</h3>
            <p>A agenda apresenta todos os compromissos em três visualizações:</p>
            <ul>
              <li><strong>Mensal</strong> — calendário com indicadores visuais por dia</li>
              <li><strong>Semanal</strong> — grade com os 7 dias da semana corrente</li>
              <li><strong>Diária</strong> — lista detalhada dos eventos do dia selecionado</li>
            </ul>

            <h3>Filtros</h3>
            <p>Use os filtros para exibir apenas eventos de um módulo específico (Tarefas, Estudos, Finanças, Saúde) ou de um turno (Manhã, Tarde, Noite).</p>

            <TipBlock>
              <strong>Dica:</strong> Clique em um dia no calendário mensal para ver os detalhes na visualização diária. Os indicadores coloridos mostram de qual módulo vem cada evento.
            </TipBlock>

            <Detail title="Detalhes dos indicadores de cor">
              <p>Cada módulo possui uma cor distinta no calendário:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><span className="font-medium">Verde</span> — Tarefas</li>
                <li><span className="font-medium">Azul</span> — Estudos</li>
                <li><span className="font-medium">Amarelo</span> — Finanças</li>
                <li><span className="font-medium">Vermelho</span> — Saúde</li>
              </ul>
            </Detail>
          </Section>

          {/* 2 — Chat */}
          <Section id="chat" icon={<MessageCircle className="h-5 w-5" style={{ color: "hsl(200, 80%, 50%)" }} />} title="2. Assistente (Chat)">
            <p>O módulo Conversa oferece um assistente de IA integrado para ajudar no planejamento, tirar dúvidas e organizar sua rotina.</p>

            <h3>Como usar</h3>
            <ol>
              <li>Acesse pelo menu lateral ou barra inferior (mobile)</li>
              <li>Digite sua mensagem ou use o botão de <strong>microfone</strong> para entrada por voz</li>
              <li>O assistente responde com base no contexto dos seus dados</li>
            </ol>

            <h3>Recursos</h3>
            <table>
              <thead><tr><th>Recurso</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>Entrada por voz</td><td>Clique no ícone de microfone para ditar sua mensagem</td></tr>
                <tr><td>Histórico</td><td>Conversas anteriores ficam salvas para consulta futura</td></tr>
                <tr><td>Markdown</td><td>As respostas suportam formatação rica (listas, negrito, código)</td></tr>
              </tbody>
            </table>

            <TipBlock>
              <strong>Dica:</strong> Peça ao assistente para resumir sua semana, sugerir horários de estudo ou criar um plano de tarefas. Quanto mais contexto você fornecer, melhor a resposta.
            </TipBlock>
          </Section>

          {/* 3 — Metas */}
          <Section id="metas" icon={<Target className="h-5 w-5" style={{ color: "hsl(280, 70%, 55%)" }} />} title="3. Metas">
            <p>O módulo Metas permite definir objetivos quantitativos e acompanhar o progresso automaticamente com base nos dados reais dos outros módulos.</p>

            <h3>Categorias disponíveis</h3>
            <table>
              <thead><tr><th>Categoria</th><th>Unidade</th><th>Fonte dos dados</th></tr></thead>
              <tbody>
                <tr><td>Tarefas</td><td>tarefas</td><td>Tarefas concluídas no módulo Tarefas</td></tr>
                <tr><td>Questões</td><td>questões</td><td>Questões resolvidas no módulo Estudos</td></tr>
                <tr><td>Tempo de Estudo</td><td>minutos</td><td>Sessões Pomodoro completadas</td></tr>
                <tr><td>Economia</td><td>R$</td><td>Receitas − Despesas no módulo Finanças</td></tr>
                <tr><td>Hábitos</td><td>dias</td><td>Dias com todos os hábitos completados</td></tr>
                <tr><td>Treinos</td><td>treinos</td><td>Sessões registradas no módulo Saúde</td></tr>
              </tbody>
            </table>

            <h3>Períodos</h3>
            <p>Cada meta pode ser <strong>Semanal</strong>, <strong>Mensal</strong> ou <strong>Anual</strong>. O progresso é calculado automaticamente.</p>

            <h3>Criar uma meta</h3>
            <ol>
              <li>Clique em <strong>"Nova Meta"</strong></li>
              <li>Selecione a categoria e o período</li>
              <li>Defina o título e o valor-alvo (ex: 50 questões por semana)</li>
              <li>Acompanhe o progresso pela barra e porcentagem exibida no card</li>
            </ol>

            <TipBlock>
              <strong>Dica:</strong> Comece com metas semanais realistas e aumente gradualmente. Metas com progresso automático ajudam a manter a motivação sem precisar registrar manualmente.
            </TipBlock>

            <Detail title="Como o progresso é calculado?">
              <p>O sistema consulta os dados reais dos módulos correspondentes dentro do período selecionado:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Semanal</strong> — segunda a domingo da semana corrente</li>
                <li><strong>Mensal</strong> — dia 1 ao último dia do mês</li>
                <li><strong>Anual</strong> — 1 de janeiro a 31 de dezembro</li>
              </ul>
              <p>A barra de progresso e a porcentagem são atualizadas sempre que você abre o módulo.</p>
            </Detail>
          </Section>

          {/* 4 — Tarefas */}
          <Section id="tarefas" icon={<CheckSquare className="h-5 w-5" style={{ color: "hsl(38, 92%, 50%)" }} />} title="4. Tarefas">
            <p>Gerencie suas atividades do dia a dia com prioridades, datas, turnos e recorrência.</p>

            <h3>Criar tarefa</h3>
            <ol>
              <li>Clique em <strong>"Nova Tarefa"</strong></li>
              <li>Preencha o título e, opcionalmente, a descrição</li>
              <li>Defina a <strong>prioridade</strong>: Alta (vermelha), Média (amarela) ou Baixa (verde)</li>
              <li>Escolha a <strong>data de vencimento</strong> (opcional)</li>
              <li>Selecione o <strong>turno</strong>: Manhã, Tarde ou Noite (opcional)</li>
            </ol>

            <h3>Campos da tarefa</h3>
            <table>
              <thead><tr><th>Campo</th><th>Obrigatório</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>Título</td><td>Sim</td><td>Nome resumido da tarefa</td></tr>
                <tr><td>Descrição</td><td>Não</td><td>Detalhes adicionais</td></tr>
                <tr><td>Prioridade</td><td>Não</td><td>Alta, Média ou Baixa</td></tr>
                <tr><td>Data</td><td>Não</td><td>Data de vencimento</td></tr>
                <tr><td>Turno</td><td>Não</td><td>Manhã, Tarde ou Noite</td></tr>
                <tr><td>Recorrência</td><td>Não</td><td>Única, Diária ou Semanal</td></tr>
              </tbody>
            </table>

            <h3>Recorrência</h3>
            <ul>
              <li><strong>Única</strong> — tarefa acontece apenas uma vez</li>
              <li><strong>Diária</strong> — repete todos os dias automaticamente</li>
              <li><strong>Semanal</strong> — selecione os dias da semana (Dom a Sáb)</li>
            </ul>

            <h3>Completar tarefa</h3>
            <p>Clique no checkbox ao lado da tarefa para marcá-la como concluída. Tarefas recorrentes registram a data de conclusão e reaparecem no próximo ciclo.</p>

            <TipBlock>
              <strong>Dica:</strong> Use prioridade Alta apenas para o que é urgente e importante. Defina turnos para organizar visualmente sua agenda no Dashboard.
            </TipBlock>

            <Detail title="Como funciona a recorrência semanal?">
              <p>Ao escolher "Semanal", você seleciona quais dias da semana a tarefa deve aparecer (ex: Segunda, Quarta e Sexta). A tarefa aparecerá na agenda apenas nesses dias e, ao completá-la, ela será marcada como feita para aquele dia específico, reaparecendo no próximo dia configurado.</p>
            </Detail>
          </Section>

          {/* 5 — Estudos */}
          <Section id="estudos" icon={<BookOpen className="h-5 w-5" style={{ color: "hsl(210, 80%, 55%)" }} />} title="5. Estudos">
            <p>Organize sua preparação para concursos e provas com disciplinas, aulas, questões, cronograma e timer Pomodoro.</p>

            <h3>Concursos e Disciplinas</h3>
            <ol>
              <li>Crie um <strong>Concurso</strong> (ex: "Concurso TRF")</li>
              <li>Adicione <strong>Disciplinas</strong> dentro do concurso (ex: "Direito Constitucional")</li>
              <li>Defina a quantidade de aulas por disciplina</li>
              <li>Cada disciplina recebe uma cor para identificação visual</li>
            </ol>

            <h3>Aulas</h3>
            <p>Cada disciplina possui aulas numeradas. Para cada aula, você pode marcar:</p>
            <table>
              <thead><tr><th>Marcação</th><th>Descrição</th></tr></thead>
              <tbody>
                <tr><td>Teoria</td><td>Conteúdo teórico estudado</td></tr>
                <tr><td>Revisão</td><td>Revisão do conteúdo feita</td></tr>
                <tr><td>Questões</td><td>Total de questões respondidas e acertos</td></tr>
              </tbody>
            </table>

            <h3>Sessões de Questões</h3>
            <p>Registre sessões de questões separadas com a quantidade resolvida e acertos. O sistema atualiza automaticamente o progresso da aula e alimenta as metas de "Questões".</p>

            <h3>Calendário de Estudos</h3>
            <p>Agende eventos de estudo (teoria, revisão ou questões) no calendário. Cada evento pode ter:</p>
            <ul>
              <li><strong>Disciplina e aula</strong> — qual conteúdo será estudado</li>
              <li><strong>Tipo</strong> — Teoria, Revisão ou Questões</li>
              <li><strong>Turno</strong> — Manhã, Tarde ou Noite</li>
            </ul>

            <h3>Pomodoro</h3>
            <table>
              <thead><tr><th>Modo</th><th>Duração padrão</th></tr></thead>
              <tbody>
                <tr><td>Foco</td><td>25 minutos</td></tr>
                <tr><td>Pausa curta</td><td>5 minutos</td></tr>
                <tr><td>Pausa longa</td><td>15 minutos (a cada 4 sessões)</td></tr>
              </tbody>
            </table>
            <p>Selecione a disciplina e aula antes de iniciar. O tempo é contabilizado nas metas de "Tempo de Estudo".</p>

            <TipBlock>
              <strong>Dica:</strong> Use o Pomodoro para sessões curtas e focadas. O sistema registra automaticamente o tempo, então você não precisa se preocupar em anotar quanto estudou.
            </TipBlock>

            <Detail title="O que são Ciclos?">
              <p>Ao concluir todas as aulas de uma disciplina (teoria, revisão e questões), você pode avançar para o próximo <strong>ciclo</strong>. Isso reinicia o progresso das aulas, permitindo que você revise o conteúdo do início com um contador de ciclo incrementado. É ideal para revisão espaçada antes de provas.</p>
            </Detail>
          </Section>

          {/* 6 — Finanças */}
          <Section id="financas" icon={<Wallet className="h-5 w-5" style={{ color: "hsl(142, 71%, 45%)" }} />} title="6. Finanças">
            <p>Controle suas receitas, despesas, contas bancárias e obrigações financeiras em um só lugar.</p>

            <h3>Contas</h3>
            <table>
              <thead><tr><th>Tipo de conta</th><th>Uso</th></tr></thead>
              <tbody>
                <tr><td>Conta Bancária</td><td>Bancos e contas digitais</td></tr>
                <tr><td>Caixa</td><td>Dinheiro em espécie</td></tr>
                <tr><td>Investimento</td><td>Aplicações financeiras</td></tr>
              </tbody>
            </table>
            <p>Registre o saldo de cada conta usando o botão <strong>"Registrar Saldo"</strong>. O saldo total é exibido no card do Dashboard.</p>

            <h3>Transações</h3>
            <ol>
              <li>Clique em <strong>"Nova Transação"</strong></li>
              <li>Selecione o tipo: <strong>Receita</strong> ou <strong>Despesa</strong></li>
              <li>Escolha a categoria</li>
              <li>Informe o valor, descrição e data</li>
              <li>Opcionalmente, vincule a uma conta</li>
            </ol>

            <h3>Categorias de transação</h3>
            <table>
              <thead><tr><th>Categoria</th></tr></thead>
              <tbody>
                <tr><td>Alimentação</td></tr>
                <tr><td>Moradia</td></tr>
                <tr><td>Transporte</td></tr>
                <tr><td>Lazer</td></tr>
                <tr><td>Saúde</td></tr>
                <tr><td>Educação</td></tr>
                <tr><td>Outros</td></tr>
              </tbody>
            </table>

            <h3>Contas a Pagar / Receber</h3>
            <ul>
              <li>Registre obrigações financeiras com data de vencimento</li>
              <li><strong>Recorrência</strong> — contas podem ser únicas ou mensais</li>
              <li><strong>Marcar como paga</strong> — ao pagar, uma transação é gerada automaticamente</li>
            </ul>

            <h3>Modelos de Contas</h3>
            <p>Crie modelos (templates) para contas recorrentes, agilizando o cadastro de novas obrigações a cada mês.</p>

            <h3>Importação</h3>
            <p>Importe transações a partir de arquivos <strong>CSV</strong> ou <strong>OFX</strong> do seu banco. O sistema mapeia automaticamente os campos para o formato interno.</p>

            <h3>Gráficos</h3>
            <ul>
              <li><strong>Gráfico por categoria</strong> — distribuição de despesas por categoria (pizza/barra)</li>
              <li><strong>Tendência acumulada</strong> — evolução de receitas e despesas ao longo do tempo</li>
            </ul>

            <TipBlock>
              <strong>Dica:</strong> Use os modelos de contas para cadastrar rapidamente suas contas fixas mensais (aluguel, internet, etc.). Ao marcar como paga, a transação é criada automaticamente.
            </TipBlock>

            <Detail title="Como importar arquivos OFX/CSV?">
              <p>1. Baixe o extrato do seu banco no formato OFX ou CSV.</p>
              <p>2. No módulo Finanças, clique no botão de importação.</p>
              <p>3. Selecione o arquivo e a conta de destino.</p>
              <p>4. O sistema irá listar as transações encontradas para que você revise antes de confirmar.</p>
              <p>5. Transações duplicadas (mesma data, valor e descrição) são identificadas automaticamente.</p>
            </Detail>
          </Section>

          {/* 7 — Saúde */}
          <Section id="saude" icon={<Heart className="h-5 w-5" style={{ color: "hsl(0, 84%, 60%)" }} />} title="7. Saúde">
            <p>O módulo Saúde é dividido em duas abas: <strong>Hábitos</strong> e <strong>Atividade Física</strong>.</p>

            {/* 7.1 Hábitos */}
            <div id="section-saude-habitos" className="scroll-mt-20">
              <h3>7.1 Hábitos</h3>
              <p>Crie hábitos diários ou semanais e acompanhe seu progresso com um checklist diário.</p>

              <h4>Criar hábito</h4>
              <ol>
                <li>Clique em <strong>"Novo Hábito"</strong></li>
                <li>Defina o nome e selecione um ícone/emoji</li>
                <li>Escolha a recorrência:
                  <ul>
                    <li><strong>Diário</strong> — aparece todos os dias</li>
                    <li><strong>Semanal</strong> — selecione os dias específicos</li>
                  </ul>
                </li>
                <li>Opcionalmente, defina o turno (Manhã, Tarde, Noite)</li>
              </ol>

              <h4>Campos do hábito</h4>
              <table>
                <thead><tr><th>Campo</th><th>Obrigatório</th><th>Descrição</th></tr></thead>
                <tbody>
                  <tr><td>Nome</td><td>Sim</td><td>Nome do hábito (ex: "Beber 2L de água")</td></tr>
                  <tr><td>Ícone</td><td>Não</td><td>Emoji para identificação visual</td></tr>
                  <tr><td>Recorrência</td><td>Sim</td><td>Diário ou Semanal</td></tr>
                  <tr><td>Dias</td><td>Se semanal</td><td>Quais dias da semana</td></tr>
                  <tr><td>Turno</td><td>Não</td><td>Manhã, Tarde ou Noite</td></tr>
                </tbody>
              </table>

              <h4>Completar hábitos</h4>
              <p>Na tela de hábitos, marque o checkbox de cada hábito completado no dia. Um indicador mostra o progresso diário (ex: 3/5 hábitos).</p>

              <h4>Streak (Sequência)</h4>
              <p>O sistema exibe sua sequência de dias consecutivos com todos os hábitos completados. Manter o streak é uma ótima motivação!</p>

              <TipBlock>
                <strong>Dica:</strong> Comece com poucos hábitos (3-5) e vá adicionando conforme se sente confortável. Use turnos para distribuir os hábitos ao longo do dia.
              </TipBlock>
            </div>

            {/* 7.2 Atividade Física */}
            <div id="section-saude-atividade" className="scroll-mt-20 mt-6">
              <h3>7.2 Atividade Física</h3>
              <p>Gerencie seus treinos com tipos personalizados e rotina semanal.</p>

              <h4>Tipos de Treino</h4>
              <ol>
                <li>Crie tipos como "Peito e Tríceps", "Pernas", "Cardio"</li>
                <li>Para cada tipo, adicione exercícios com séries, repetições e carga (kg)</li>
                <li>Cada tipo recebe uma cor para identificação visual no calendário</li>
              </ol>

              <h4>Campos do exercício</h4>
              <table>
                <thead><tr><th>Campo</th><th>Descrição</th></tr></thead>
                <tbody>
                  <tr><td>Nome</td><td>Nome do exercício (ex: "Supino Reto")</td></tr>
                  <tr><td>Séries</td><td>Quantidade de séries</td></tr>
                  <tr><td>Repetições</td><td>Quantidade de repetições por série</td></tr>
                  <tr><td>Carga (kg)</td><td>Peso utilizado</td></tr>
                </tbody>
              </table>

              <h4>Rotina Semanal</h4>
              <p>Configure quais tipos de treino acontecem em cada dia da semana. Defina também a <strong>meta semanal</strong> de treinos.</p>

              <h4>Registrar Treino</h4>
              <ol>
                <li>Clique em <strong>"Registrar Treino"</strong></li>
                <li>Os exercícios do tipo configurado são preenchidos automaticamente</li>
                <li>Ajuste séries, repetições e carga conforme executado</li>
                <li>Adicione notas opcionais (ex: "Aumentei carga no supino")</li>
              </ol>

              <h4>Calendário e Frequência</h4>
              <p>Visualize no calendário quais dias você treinou, com a cor do tipo de treino. Acompanhe a frequência semanal e compare com sua meta.</p>

              <TipBlock>
                <strong>Dica:</strong> Ao registrar um treino, os exercícios vêm preenchidos com os valores do tipo de treino. Ajuste apenas o que mudou naquela sessão para agilizar o registro.
              </TipBlock>
            </div>
          </Section>

          {/* 8 — Configurações */}
          <Section id="config" icon={<Settings className="h-5 w-5 text-muted-foreground" />} title="8. Configurações">
            <h3>Perfil</h3>
            <ul>
              <li>Alterar o <strong>nome de exibição</strong></li>
              <li>Ver o e-mail da conta</li>
              <li>Gerenciar assinatura</li>
              <li>Fazer logout</li>
            </ul>

            <h3>Notificações</h3>
            <table>
              <thead><tr><th>Tipo</th><th>Configuração</th></tr></thead>
              <tbody>
                <tr><td>Tarefas</td><td>Horário do lembrete diário + ativar/desativar</td></tr>
                <tr><td>Estudos</td><td>Horário do lembrete diário + ativar/desativar</td></tr>
                <tr><td>Hábitos</td><td>Horário do lembrete diário + ativar/desativar</td></tr>
              </tbody>
            </table>

            <h3>Tema</h3>
            <p>Alterne entre o modo <strong>Claro</strong> e <strong>Escuro</strong> usando o botão de tema no menu lateral.</p>

            <TipBlock>
              <strong>Dica:</strong> Configure lembretes para os horários em que você costuma usar o sistema. Assim, o Habitus se torna parte natural da sua rotina.
            </TipBlock>
          </Section>

          <hr />
          <p className="text-center text-sm text-muted-foreground">
            Habitus — Manual de Uso v2.0 — {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
}
