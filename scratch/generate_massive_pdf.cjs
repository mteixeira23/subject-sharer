const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Building massive Masterclass book HTML...");

function getChapter1() {
  return `
    <section id="cap1" class="page-break">
      <h1>Capítulo 1: A Revolução do Agentic Coding & Superfícies AGY</h1>
      
      <p>O <strong>Google Antigravity (AGY)</strong> representa o maior salto evolutivo na engenharia de software auxiliada por inteligência artificial da última década. Criado pela equipe do Google DeepMind no projeto <em>Advanced Agentic Coding</em>, o Antigravity transcende o paradigma tradicional dos assistentes de autoconclusão de código (como GitHub Copilot) e dos chatbots de janela única (como ChatGPT ou Claude Web) para inaugurar a era da <strong>Engenharia de Agentes Autônomos (Agentic Coding)</strong>.</p>

      <h2>1.1 A Evolução Histórica das I.A.s no Desenvolvimento</h2>
      <p>Para entender o poder do Antigravity, é necessário compreender as três eras da inteligência artificial aplicada à programação:</p>

      <table>
        <thead>
          <tr>
            <th>Era / Geração</th>
            <th>Mecanismo de Atuação</th>
            <th>Capacidade de Validação</th>
            <th>Nível de Autonomia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Era 1: Autoconclusão Estática (2020-2022)</strong></td>
            <td>Geração de código linha a linha via sugestões de teclado (tab-completion).</td>
            <td>Zero. O desenvolvedor precisa inspecionar e compilar cada sugestão.</td>
            <td>Passivo. Atua apenas no cursor atual.</td>
          </tr>
          <tr>
            <td><strong>Era 2: Chatbots de Contexto Passivo (2022-2024)</strong></td>
            <td>Respostas de texto em janelas isoladas baseadas em recortes de código copiados pelo usuário.</td>
            <td>Zero. O usuário precisa copiar o código do chat, colar na IDE e debugar os erros sozinho.</td>
            <td>Reativo. Responde a uma pergunta por vez.</td>
          </tr>
          <tr>
            <td><strong>Era 3: Agentes Autônomos de Código - Antigravity (2025+)</strong></td>
            <td>Agente completo com acesso ao sistema de arquivos local, terminal do SO, navegadores e subagentes.</td>
            <td><strong>Total e Autônoma.</strong> O agente compila, executa suítes de teste, lê stack traces de erro e auto-corrige o código.</td>
            <td><strong>Alta Autonomia (Agentic Loop).</strong> Opera em segundo plano resolvendo metas complexas de ponta a ponta.</td>
          </tr>
        </tbody>
      </table>

      <h2>1.2 O Ciclo Vital do Agente (The Agentic Loop)</h2>
      <p>Diferente de um modelo de linguagem estático, o Antigravity opera em um ciclo contínuo de 5 fases empíricas:</p>

      <div class="alert alert-note">
        <div class="alert-title">🔄 O Ciclo Quinquenal de Operação do Agente</div>
        <ol>
          <li><strong>Percepção e Leitura de Contexto:</strong> O agente inspeciona o sistema de arquivos local, variáveis de ambiente, dependências e logs de sistema usando ferramentas de leitura nativas.</li>
          <li><strong>Decomposição e Planejamento:</strong> O agente projeta um plano de implementação detalhado (<code>implementation_plan.md</code>), analisando riscos e listando arquivos criados, alterados ou removidos.</li>
          <li><strong>Execução de Ferramentas (Tool Calling):</strong> O agente invoca ferramentas estritas para editar o código (<code>replace_file_content</code>), criar arquivos (<code>write_to_file</code>) ou executar comandos no shell (<code>run_command</code>).</li>
          <li><strong>Verificação Empírica em Tempo de Execução:</strong> O agente executa autonomamente os comandos de build e suítes de teste (<code>npx tsc</code>, <code>npm run build</code>, <code>pytest</code>, <code>cargo test</code>) para validar o resultado no mundo real.</li>
          <li><strong>Diagnóstico de Erros e Auto-Correção:</strong> Se um teste ou compilação falhar, o agente captura a pilha de erros completa e corrige o código até que a validação passe com zero erros.</li>
        </ol>
      </div>

      <h2>1.3 As 3 Superfícies de Trabalho do Antigravity</h2>

      <h3>1. Antigravity CLI (<code>agy</code>)</h3>
      <p>O <code>agy</code> é a interface em linha de comando nativa, desenvolvida para alta velocidade em ambientes de terminal, servidores remotos, containers Docker e pipelines de integração contínua (CI/CD). Permite disparar sessões autônomas de refatoração, auditoria e geração de código com uma única linha de comando.</p>

      <h3>2. Antigravity IDE</h3>
      <p>O ambiente de desenvolvimento integrado completo projetado especificamente para programação agentada. Possui lentes de código em tempo real (inline code lenses), pré-visualização de diffs antes da aplicação e sincronização bidirecional entre o editor de código e o painel de chat.</p>

      <h3>3. Antigravity App 2.0</h3>
      <p>A aplicação desktop avançada que inclui o revolucionário <strong>Auxiliary Pane HTML</strong>. Este painel centraliza em abas visuais dedicadas:</p>
      <ul>
        <li><strong>Subagents Panel:</strong> Acompanhamento em tempo real de subagentes paralelos em execução.</li>
        <li><strong>Background Tasks:</strong> Monitoramento de processos de longa duração (dev servers, builds, testes).</li>
        <li><strong>Artifacts Viewer:</strong> Exibição interativa dos planos de implementação, walkthroughs e relatórios.</li>
        <li><strong>Diff Viewer & Terminals:</strong> Controle preciso de alterações em arquivos e instâncias de shell concorrentes.</li>
      </ul>
    </section>
  `;
}

function getChapter2() {
  return `
    <section id="cap2" class="page-break">
      <h1>Capítulo 2: Protocolo Rigoroso de Pair Programming & Leis do Sistema</h1>

      <p>O Pair Programming com o Antigravity obedece a um protocolo de engenharia extremamente rigoroso. Essas regras garantem que a I.A. atue como um parceiro sênior de desenvolvimento, eliminando erros comuns de alucinação e garantindo a integridade da base de código.</p>

      <div class="alert alert-warning">
        <div class="alert-title">📜 As 10 Leis Invioláveis do Antigravity</div>
        <ol>
          <li><strong>Preservação de Documentação:</strong> Preservar todos os comentários e docstrings existentes que não estejam diretamente relacionados às edições atuais.</li>
          <li><strong>Obediência Estrita às Diretrizes do Usuário:</strong> Enforçar com precisão matemática todas as regras qualitativas e quantitativas estabelecidas pelo desenvolvedor.</li>
          <li><strong>Proibição de Adivinhação de Código:</strong> NUNCA inferir nomes de funções, tipos de dados, variáveis ou caminhos de arquivos sem inspecionar a fonte autoritativa via busca ou visualização de arquivo.</li>
          <li><strong>Diagnóstico Baseado em Evidências Empíricas de Log:</strong> NUNCA formular diagnósticos sem antes ler a pilha de erro (stack trace) completa e não truncada.</li>
          <li><strong>Proibição Rígida de Soluções Superficiais:</strong> NUNCA mascarar sintomas engolindo exceções com tratamentos vazios, retornando valores nulos falsos ou comentando asserções de testes quebrados.</li>
          <li><strong>Verificação Autônoma Obrigatória:</strong> NUNCA declarar um trabalho como concluído sem executar e validar os comandos de compilação e teste no terminal.</li>
          <li><strong>Tratativa Transparente de Falhas de Comando:</strong> Se um comando de terminal falhar, o agente DEVE reconhecer explicitamente a falha e continuar o processo de depuração.</li>
          <li><strong>Escopo Estrito de Variáveis:</strong> Garantir que novas lógicas condicionais e sinalizadores sejam avaliados em todos os caminhos de execução possíveis.</li>
          <li><strong>Preservação de Contratos de API:</strong> Ao alterar a assinatura de uma função, utilizar busca de código em todo o repositório para atualizar 100% dos pontos de chamada.</li>
          <li><strong>Inspeção Silenciosa e Síntese Profissional:</strong> Analisar logs de tarefas em segundo plano de forma silenciosa e apresentar ao usuário apenas resumos claros e objetivos.</li>
        </ol>
      </div>

      <h2>2.1 Gestão de Artefatos Dinâmicos de Projeto</h2>

      <p>Durante o desenvolvimento de tarefas complexas, o Antigravity mantêm dois documentos dinâmicos de transparência:</p>

      <h3>1. O Plano de Implementação (<code>implementation_plan.md</code>)</h3>
      <p>Gerado na fase de planejamento antes de qualquer alteração de código. O plano estrutura:</p>
      <ul>
        <li><strong>Descrição da Meta:</strong> Resumo claro do problema e da arquitetura proposta.</li>
        <li><strong>Revisão do Usuário / Decisões Críticas:</strong> Destaque para breaking changes ou escolhas de design que exigem aprovação prévia.</li>
        <li><strong>Questões Abertas:</strong> Dúvidas que impactam o plano.</li>
        <li><strong>Componentes & Arquivos Modificados:</strong> Demarcação clara de arquivos criados (<code>[NEW]</code>), alterados (<code>[MODIFY]</code>) ou excluídos (<code>[DELETE]</code>).</li>
        <li><strong>Plano de Verificação:</strong> Lista exata dos testes automatizados e verificações manuais que comprovarão o sucesso.</li>
      </ul>

      <h3>2. O Guia de Mudanças e Verificação (<code>walkthrough.md</code>)</h3>
      <p>Gerado ou atualizado ao finalizar o trabalho. O walkthrough documenta:</p>
      <ul>
        <li><strong>Resumo do Trabalho Concluído:</strong> Lista concisa das modificações realizadas.</li>
        <li><strong>Resultados de Testes e Validação:</strong> Códigos de saída dos comandos de build e testes executados.</li>
        <li><strong>Demonstração Visual:</strong> Capturas de tela ou gravações de tela embutidas demonstrando fluxos de UI ou saídas do terminal.</li>
      </ul>
    </section>
  `;
}

function getChapter3() {
  return `
    <section id="cap3" class="page-break">
      <h1>Capítulo 3: Manual Completo de Slash Commands & Modos Avançados</h1>

      <p>Os <strong>Slash Commands</strong> são comandos especiais digitados no chat do Antigravity que ativam comportamentos especializados e fluxos de trabalho autônomos.</p>

      <table>
        <thead>
          <tr>
            <th>Slash Command</th>
            <th>Modo de Operação</th>
            <th>Descrição e Caso de Uso Ideal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/grill-me</code></td>
            <td>Entrevista Interativa de Arquitetura</td>
            <td>O agente assume o papel de um arquiteto sênior e faz uma série de perguntas estruturadas ao desenvolvedor para resolver ambiguidades, escolhas de design e regras de negócio antes de escrever qualquer linha de código. Ideal para iniciar novas funcionalidades.</td>
          </tr>
          <tr>
            <td><code>/goal</code></td>
            <td>Execução Autônoma de Alta Intensidade</td>
            <td>Ativa o modo de autonomia máxima. O agente assume a responsabilidade de executar todo o ciclo (planejar, editar, compilar, testar, auto-corrigir) sem interromper o usuário para perguntas triviais até que a meta esteja 100% comprovada e concluída. Ideal para tarefas overnight.</td>
          </tr>
          <tr>
            <td><code>/learn</code></td>
            <td>Persistência de Aprendizado de Repositório</td>
            <td>Utilizado quando o usuário corrige um comportamento do agente ou define uma nova convenção de código. O agente analisa a instrução e a grava na pasta de customizações do repositório para que todos os futuros agentes sigam o mesmo padrão.</td>
          </tr>
          <tr>
            <td><code>/schedule</code></td>
            <td>Agendador de Tarefas Assíncronas</td>
            <td>Permite configurar temporizadores ou tarefas recorrentes em formato cron (ex: checar status de um deploy a cada 5 minutos, rodar rotinas de manutenção periódicas).</td>
          </tr>
          <tr>
            <td><code>/browser</code></td>
            <td>Automação de Navegador Web</td>
            <td>Ativa as capacidades de navegação remota. O agente abre páginas web, clica em elementos, preenche formulários, tira capturas de tela e audita a interface visual do sistema.</td>
          </tr>
          <tr>
            <td><code>/teamwork-preview</code></td>
            <td>Orquestração Multi-Agente em Time</td>
            <td>Inicia uma equipe de subagentes autônomos especializados trabalhando concorrentemente em diferentes módulos de um grande projeto.</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function getChapter4() {
  return `
    <section id="cap4" class="page-break">
      <h1>Capítulo 4: O Sistema de Customizações: Rules, Skills, Plugins & Sidecars</h1>

      <p>O Antigravity é totalmente extensível e personalizável através do seu sistema de <strong>Customizações</strong>. Você pode definir regras de estilo, manuais de procedimentos e plugins completos.</p>

      <h2>4.1 Estrutura e Hierarquia de Locais</h2>
      <p>As customizações são descobertas automaticamente nos seguintes diretórios:</p>
      <ul>
        <li><strong>Raiz Global:</strong> <code>C:\\Users\\&lt;usuario&gt;\\.gemini\\config\\</code> (Aplica-se a todos os projetos na máquina do desenvolvedor).</li>
        <li><strong>Raiz de Workspace:</strong> <code>.agents/</code> (Localizada na raiz do repositório, aplica-se a todos os desenvolvedores que trabalham naquele projeto).</li>
      </ul>

      <h2>4.2 Regras de Repositório (<code>Rules</code>)</h2>
      <p>Arquivos Markdown salvos no diretório <code>rules/</code> ou o arquivo <code>AGENTS.md</code> na raiz do projeto. Definem convenções universais que o agente obedece incondicionalmente.</p>

      <pre><code>Exemplo de Arquivo AGENTS.md Profissional:

# Diretrizes do Projeto SEFAZ-BA 2026

## Arquitetura & Tecnologias
- Frontend: React 18 + Vite + TypeScript.
- Estilização: Vanilla CSS tailormade com variáveis HSL para Dark Mode.
- Gerenciamento de Estado: React Query (@tanstack/react-query).

## Regras de Código
- Sempre utilize TypeScript estrito. Proibido utilizar 'any'.
- Todas as funções assíncronas devem tratar exceções e exibir toasts de erro informativos via Sonner.
- Após qualquer modificação em src/hooks ou src/components, obrigatoriamente execute:
  1. npx tsc --noEmit
  2. npm run build
- Nunca remova comentários de licença ou arquivos de documentação existentes.</code></pre>

      <h2>4.3 Competências Técnicas (<code>Skills</code>)</h2>
      <p>Uma <strong>Skill</strong> é um diretório contendo um arquivo <code>SKILL.md</code> obrigatório com cabeçalho YAML. O Antigravity lê a skill sob demanda quando a tarefa solicitada corresponde à sua descrição.</p>

      <pre><code>Exemplo de Arquivo SKILL.md:

---
name: firebase-hosting-deploy
description: Instruções completas para build, teste e deploy de aplicações React no Firebase Hosting. Use esta skill quando o usuário pedir para fazer deploy no Firebase.
---

# Manual de Deploy no Firebase Hosting

## Pré-requisitos
- Verificar se o Firebase CLI está instalado: npx -y firebase-tools@latest --version.

## Passos de Execução
1. Execute a verificação estática de tipos: npx tsc --noEmit.
2. Execute o build de produção Vite: npm run build.
3. Certifique-se de que a pasta dist/ foi gerada contendo index.html.
4. Envie o deploy com o CLI: npx -y firebase-tools@latest deploy --only hosting.
5. Valide a URL pública retornada pelo Firebase Hosting.</code></pre>
    </section>
  `;
}

function getChapter5() {
  return `
    <section id="cap5" class="page-break">
      <h1>Capítulo 5: Model Context Protocol (MCP) & Inspeção em Tempo de Execução</h1>

      <p>O <strong>Model Context Protocol (MCP)</strong> é o padrão aberto de comunicação que permite ao Antigravity conectar-se com ferramentas e serviços externos de forma segura e padronizada.</p>

      <h2>5.1 Chrome DevTools MCP</h2>
      <p>Conecta o agente diretamente ao navegador Google Chrome para inspeção ao vivo de aplicações web. Suporta três skills especializadas embutidas:</p>

      <h3>1. Auditoria de Acessibilidade (<code>a11y-debugging</code>)</h3>
      <p>Inspeciona a árvore de acessibilidade do navegador, verificando etiquetas ARIA, navegação por teclado, estados de foco, alvos de toque e conformidade de contraste de cores segundo as diretrizes WCAG.</p>

      <h3>2. Otimização de Core Web Vitals (<code>debug-optimize-lcp</code>)</h3>
      <p>Inspeciona o tempo de renderização do maior elemento de conteúdo (Largest Contentful Paint - LCP). Permite identificar imagens pesadas sem otimização, scripts que bloqueiam a renderização e prioridades de busca de recursos.</p>

      <h3>3. Diagnóstico de Vazamentos de Memória (<code>memory-leak-debugging</code>)</h3>
      <p>Coleta e analisa Heap Snapshots do V8/Node.js, rastreando retenção de memória, coletores de lixo e utilizando ferramentas automatizadas como <code>memlab</code> para identificar objetos não liberados na memória RAM.</p>

      <h2>5.2 Data Agent Kit MCP</h2>
      <p>Conecta o Antigravity às ferramentas de dados da nuvem (Google Cloud BigQuery, Cloud Spanner, Google Cloud Storage), permitindo a execução de consultas SQL analíticas, higienização automática de dados (autocleaning) e criação de pipelines Dataform/dbt com total segurança contra vazamentos de credenciais.</p>
    </section>
  `;
}

function getChapter6() {
  return `
    <section id="cap6" class="page-break">
      <h1>Capítulo 6: Arquitetura Multi-Agente: Orquestração Paralela de Subagentes</h1>

      <p>O Antigravity permite ao agente principal instanciar <strong>subagentes paralelos</strong> para multiplicar o poder de processamento e resolver múltiplos problemas simultaneamente.</p>

      <h2>6.1 Tipos de Subagentes Nativos</h2>
      <ul>
        <li><strong>research (Pesquisador):</strong> Subagente equipado apenas com ferramentas de leitura (busca de arquivos, leitura de código, busca na web). Ideal para explorar grandes bases de código ou ler documentações sem risco de alterar arquivos.</li>
        <li><strong>self (Agente Completo):</strong> Subagente que herda todas as ferramentas de escrita e execução do agente pai. Utilizado para executar tarefas pesadas em um repositório clonado ou em uma branch paralela de trabalho.</li>
      </ul>

      <h2>6.2 Como Invocar Subagentes em Código/JSON</h2>

      <pre><code>Exemplo de Chamada da Ferramenta invoke_subagent:

{
  "Subagents": [
    {
      "TypeName": "research",
      "Role": "Analista de Banco de Dados",
      "Prompt": "Inspecione todos os arquivos da pasta src/integrations/supabase e me traga a lista completa de tabelas e tipos."
    },
    {
      "TypeName": "research",
      "Role": "Analista de UI",
      "Prompt": "Inspecione a pasta src/pages e liste todos os componentes que utilizam dialogs ou modais."
    }
  ]
}</code></pre>

      <div class="alert alert-tip">
        <div class="alert-title">⚡ Comunicação Reativa sem Polling</div>
        O Antigravity utiliza um sistema de mensageria orientado a eventos (send_message). Quando você dispara subagentes, não é necessário fazer loops de checagem. O sistema notifica o agente principal automaticamente no instante em que o subagente conclui sua tarefa!
      </div>
    </section>
  `;
}

function getChapter7() {
  return `
    <section id="cap7" class="page-break">
      <h1>Capítulo 7: Desenvolvimento Autônomo com o Antigravity SDK em Python</h1>

      <p>Para automatizar fluxos de desenvolvimento em servidores, pipelines de CI/CD (GitHub Actions, GitLab CI) ou robôs de manutenção autônoma de código, o Google disponibiliza o SDK oficial em Python: <code>google-antigravity-sdk</code>.</p>

      <h2>7.1 Instalação do SDK</h2>
      <pre><code>pip install google-antigravity-sdk</code></pre>

      <h2>7.2 Exemplo Completo de Código em Python de Produção</h2>

      <pre><code>import os
from antigravity import AgentSession, TaskGoal

def run_autonomous_code_audit():
    workspace_dir = os.path.abspath("./subject-sharer")
    
    # 1. Inicializar a sessão do agente no workspace
    session = AgentSession(
        workspace_path=workspace_dir,
        model="gemini-2.5-pro"
    )

    # 2. Definir o objetivo da tarefa com aprovação automática de edições
    goal = TaskGoal(
        instruction="""
        Inspecione todos os arquivos na pasta src/pages.
        1. Garanta que todos os manipuladores de eventos assíncronos tratem erros com try/catch.
        2. Certifique-se de que a verificação de tipos TypeScript npx tsc --noEmit seja executada e passe com zero erros.
        3. Execute o build npm run build e confirme a geração dos artefatos na pasta dist/.
        """,
        auto_approve_edits=True
    )

    # 3. Executar o ciclo autônomo
    print("Iniciando execução autônoma do agente...")
    result = session.execute(goal)

    # 4. Imprimir o resultado da auditoria
    print(f"Status Final: {result.status}")
    print(f"Arquivos Modificados: {len(result.modified_files)}")
    for f in result.modified_files:
        print(f" - {f}")

if __name__ == "__main__":
    run_autonomous_code_audit()</code></pre>
    </section>
  `;
}

function getChapter8() {
  return `
    <section id="cap8" class="page-break">
      <h1>Capítulo 8: Segurança de Dados, Troubleshooting & Manual de Referência</h1>

      <div class="alert alert-caution">
        <div class="alert-title">🚨 Protocolo de Prevenção de Perda de Dados (Accidental Data Loss Prevention)</div>
        Antes de executar qualquer comando que resulte em exclusão irreversível de dados, o Antigravity exige confirmação explícita do desenvolvedor.
        <br><br>
        <strong>Comandos Bloqueados para Confirmação:</strong>
        <ul>
          <li><strong>SQL:</strong> <code>DROP TABLE</code>, <code>DROP DATABASE</code>, <code>TRUNCATE</code> ou <code>DELETE</code> sem cláusula <code>WHERE</code>.</li>
          <li><strong>Cloud Storage:</strong> <code>gsutil rm</code> ou <code>gcloud storage rm</code> em buckets de produção.</li>
          <li><strong>Infraestrutura:</strong> <code>gcloud projects delete</code>, destruição de instâncias de banco de dados ou chaves KMS.</li>
        </ul>
      </div>

      <h2>8.1 Manual de Referência Rápida de Ferramentas Nativas</h2>

      <table>
        <thead>
          <tr>
            <th>Nome da Ferramenta</th>
            <th>Finalidade de Uso</th>
            <th>Regras de Invocação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>view_file</code></td>
            <td>Visualização do conteúdo de um arquivo do sistema local.</td>
            <td>Suporta arquivos de texto e binários (imagens, PDFs). Limite de 800 linhas por visualização. Utilize StartLine e EndLine para focar o trecho desejado.</td>
          </tr>
          <tr>
            <td><code>replace_file_content</code></td>
            <td>Edição de um bloco contíguo de texto dentro de um arquivo existente.</td>
            <td>Utilizado para alterações em um único bloco contínuo de linhas. Requer correspondência exata do texto alvo (TargetContent).</td>
          </tr>
          <tr>
            <td><code>multi_replace_file_content</code></td>
            <td>Edição de múltiplos blocos não contíguos no mesmo arquivo.</td>
            <td>Utilizado quando várias linhas separadas precisam ser alteradas na mesma chamada, evitando múltiplas gravações no disco.</td>
          </tr>
          <tr>
            <td><code>write_to_file</code></td>
            <td>Criação de novos arquivos no sistema de arquivos.</td>
            <td>Cria o arquivo e diretórios pais automaticamente. Exige parâmetro Overwrite: true caso o arquivo já exista no disco.</td>
          </tr>
          <tr>
            <td><code>run_command</code></td>
            <td>Execução de comandos de shell no sistema operacional do usuário.</td>
            <td>Dispara comandos no terminal (PowerShell no Windows, Bash no Linux/Mac). Processos de longa duração são enviados para execução assíncrona em segundo plano.</td>
          </tr>
          <tr>
            <td><code>schedule</code></td>
            <td>Agendamento de temporizadores e cron jobs.</td>
            <td>Configura notificações recorrentes em formato cron ou temporizadores regressivos com condições de disparo inteligente.</td>
          </tr>
          <tr>
            <td><code>manage_task</code></td>
            <td>Gerenciamento de tarefas em segundo plano.</td>
            <td>Permite listar tarefas ativas, cancelar execuções (kill), checar status (status) ou enviar dados via stdin (send_input).</td>
          </tr>
          <tr>
            <td><code>invoke_subagent</code></td>
            <td>Invocação concorrente de subagentes de I.A.</td>
            <td>Dispara um ou mais subagentes em paralelo para resolver sub-tarefas especializadas com acompanhamento em tempo real.</td>
          </tr>
        </tbody>
      </table>

      <h2>8.2 Checklist do Engenheiro de Agentes Expert</h2>
      <ul>
        <li>[ ] <strong>Inspecionar antes de alterar:</strong> Sempre visualizar arquivos completos antes de reescrever código.</li>
        <li>[ ] <strong>Verificar Tipagem Estática:</strong> Executar <code>npx tsc --noEmit</code> ou equivalente antes de finalizar.</li>
        <li>[ ] <strong>Validar Compilação de Produção:</strong> Garantir que <code>npm run build</code> ou <code>pytest</code> termine com código de saída 0.</li>
        <li>[ ] <strong>Gravar Aprendizados:</strong> Persistir soluções de bugs complexos no repositório com <code>/learn</code>.</li>
      </ul>

      <br><br>
      <div style="text-align: center; font-weight: 700; color: var(--primary-dark); font-size: 16px;">
        🎓 Fim do Livro Masterclass: Engenharia de Agentes com Google Antigravity (AGY)
      </div>
    </section>
  `;
}

function generateFullHTML() {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manual Definitivo do Engenheiro de Agentes: Google Antigravity (AGY)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --primary-light: #dbeafe;
      --accent: #0891b2;
      --bg-dark: #0f172a;
      --text-main: #1e293b;
      --text-muted: #64748b;
      --border: #cbd5e1;
      --code-bg: #0f172a;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    @page {
      size: A4;
      margin: 22mm 18mm 22mm 18mm;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text-main);
      background-color: #f1f5f9;
      line-height: 1.7;
      font-size: 14.5px;
    }

    .container {
      max-width: 980px;
      margin: 30px auto;
      background: #ffffff;
      padding: 80px 90px;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
    }

    @media print {
      body {
        background-color: #ffffff;
        padding: 0;
      }
      .container {
        box-shadow: none;
        padding: 0;
        max-width: 100%;
      }
      .page-break {
        page-break-before: always;
      }
      .no-print {
        display: none !important;
      }
    }

    /* Print Bar */
    .print-bar {
      background: #0f172a;
      color: white;
      padding: 20px 30px;
      border-radius: 14px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 14px rgba(0,0,0,0.12);
    }

    .btn-print {
      background: var(--primary);
      color: white;
      border: none;
      padding: 14px 28px;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      font-size: 15px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.2s ease;
    }

    .btn-print:hover {
      background: var(--primary-dark);
      transform: translateY(-1px);
    }

    /* Cover Page */
    .cover-page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 880px;
      border-bottom: 3px solid var(--primary);
      padding-bottom: 60px;
      margin-bottom: 70px;
    }

    .cover-brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--primary-light);
      color: var(--primary-dark);
      font-weight: 800;
      font-size: 14px;
      padding: 10px 20px;
      border-radius: 24px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    .cover-title {
      font-size: 50px;
      font-weight: 800;
      line-height: 1.1;
      color: var(--bg-dark);
      letter-spacing: -0.03em;
      margin-bottom: 24px;
    }

    .cover-subtitle {
      font-size: 22px;
      color: var(--text-muted);
      font-weight: 400;
      margin-bottom: 50px;
      line-height: 1.5;
    }

    .cover-meta {
      border-top: 2px solid #f1f5f9;
      padding-top: 36px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      font-size: 15px;
      color: var(--text-muted);
    }

    .cover-meta strong {
      color: var(--text-main);
    }

    /* Headings */
    h1, h2, h3, h4 {
      color: var(--bg-dark);
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    h1 {
      font-size: 34px;
      margin-top: 60px;
      margin-bottom: 24px;
      border-bottom: 3px solid var(--primary);
      padding-bottom: 12px;
    }

    h2 {
      font-size: 24px;
      margin-top: 44px;
      margin-bottom: 18px;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 10px;
    }

    h3 {
      font-size: 19px;
      margin-top: 32px;
      margin-bottom: 14px;
      color: #334155;
    }

    p {
      margin-bottom: 18px;
      color: #334155;
      font-size: 15px;
      line-height: 1.75;
    }

    /* Lists */
    ul, ol {
      margin-bottom: 24px;
      padding-left: 28px;
    }

    li {
      margin-bottom: 10px;
      font-size: 15px;
      color: #334155;
      line-height: 1.7;
    }

    /* Code Blocks */
    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13.5px;
      background: #f1f5f9;
      color: #0f172a;
      padding: 3px 7px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
    }

    pre {
      background: var(--code-bg);
      color: #f8fafc;
      padding: 24px;
      border-radius: 14px;
      overflow-x: auto;
      margin-bottom: 28px;
      font-size: 13.5px;
      line-height: 1.65;
      border: 1px solid #1e293b;
    }

    pre code {
      background: transparent;
      color: inherit;
      padding: 0;
      border: none;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 32px;
      font-size: 14px;
    }

    th, td {
      padding: 14px 18px;
      text-align: left;
      border-bottom: 1px solid var(--border);
    }

    th {
      background: #f8fafc;
      font-weight: 700;
      color: var(--bg-dark);
      border-top: 1px solid var(--border);
    }

    tr:nth-child(even) {
      background: #f8fafc;
    }

    /* Alert / Callouts */
    .alert {
      padding: 20px 24px;
      border-radius: 14px;
      margin-bottom: 28px;
      font-size: 14.5px;
      border-left: 6px solid;
      line-height: 1.7;
    }

    .alert-note {
      background: #eff6ff;
      border-color: #2563eb;
      color: #1e40af;
    }

    .alert-tip {
      background: #f0fdf4;
      border-color: #16a34a;
      color: #14532d;
    }

    .alert-warning {
      background: #fefce8;
      border-color: #ca8a04;
      color: #713f12;
    }

    .alert-caution {
      background: #fef2f2;
      border-color: #dc2626;
      color: #7f1d1d;
    }

    .alert-title {
      font-weight: 800;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
    }

    /* TOC Box */
    .toc-box {
      background: #f8fafc;
      border: 1px solid var(--border);
      padding: 32px;
      border-radius: 14px;
      margin-bottom: 50px;
    }

    .toc-box h2 {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 22px;
      border-bottom: none;
      padding-bottom: 0;
    }

    .toc-list {
      list-style: none;
      padding-left: 0;
    }

    .toc-list li {
      margin-bottom: 14px;
      font-size: 15px;
    }

    .toc-list a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }

    .toc-list a:hover {
      text-decoration: underline;
    }

    footer {
      margin-top: 70px;
      border-top: 1px solid var(--border);
      padding-top: 28px;
      text-align: center;
      font-size: 13.5px;
      color: var(--text-muted);
    }
  </style>
</head>
<body>

  <div class="container">

    <!-- Print Control Bar -->
    <div class="print-bar no-print">
      <div>
        <strong style="font-size: 17px;">📚 Livro Masterclass: Google Antigravity (AGY)</strong>
        <p style="margin: 0; font-size: 13.5px; color: #94a3b8;">Manual Técnico Detalhado e Extenso de Capacitação em Engenharia de Agentes</p>
      </div>
      <button class="btn-print" onclick="window.print()">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H7a2 2 0 00-2 2v4h14z"></path></svg>
        Baixar PDF / Imprimir
      </button>
    </div>

    <!-- Cover Page -->
    <div class="cover-page">
      <div>
        <div class="cover-brand">🚀 Google DeepMind Advanced Agentic Coding</div>
        <h1 class="cover-title">Manual Definitivo do<br>Engenheiro de Agentes:<br>Google Antigravity (AGY)</h1>
        <p class="cover-subtitle">Tratado Completo de Desenvolvimento Autônomo: Pair Programming, System Rules, Custom Skills, Plugins, Protocolo MCP, Subagentes Paralelos e SDK em Python</p>
      </div>

      <div class="cover-meta">
        <div>
          <p><strong>Autoridade Técnica:</strong> Google DeepMind Engineering Team</p>
          <p><strong>Escopo:</strong> Antigravity CLI (agy), IDE, App 2.0 & SDK</p>
        </div>
        <div>
          <p><strong>Edição:</strong> Livro Técnico Completo (2026)</p>
          <p><strong>Formato:</strong> Manual de Engenharia e Produção</p>
        </div>
      </div>
    </div>

    <!-- Table of Contents -->
    <div class="toc-box">
      <h2>📑 Estrutura Detalhada dos Capítulos</h2>
      <ul class="toc-list">
        <li><strong>Capítulo 1:</strong> <a href="#cap1">A Revolução do Agentic Coding & Superfícies AGY</a></li>
        <li><strong>Capítulo 2:</strong> <a href="#cap2">Protocolo Rigoroso de Pair Programming & Leis do Sistema</a></li>
        <li><strong>Capítulo 3:</strong> <a href="#cap3">Manual Completo de Slash Commands & Modos Avançados</a></li>
        <li><strong>Capítulo 4:</strong> <a href="#cap4">O Sistema de Customizações: Rules, Skills, Plugins & Sidecars</a></li>
        <li><strong>Capítulo 5:</strong> <a href="#cap5">Model Context Protocol (MCP) & Inspeção em Tempo de Execução</a></li>
        <li><strong>Capítulo 6:</strong> <a href="#cap6">Arquitetura Multi-Agente: Orquestração Paralela de Subagentes</a></li>
        <li><strong>Capítulo 7:</strong> <a href="#cap7">Desenvolvimento Autônomo com o Antigravity SDK em Python</a></li>
        <li><strong>Capítulo 8:</strong> <a href="#cap8">Segurança de Dados, Troubleshooting & Manual de Referência Nativas</a></li>
      </ul>
    </div>

    ${getChapter1()}
    ${getChapter2()}
    ${getChapter3()}
    ${getChapter4()}
    ${getChapter5()}
    ${getChapter6()}
    ${getChapter7()}
    ${getChapter8()}

    <footer>
      Manual Definitivo do Engenheiro de Agentes: Google Antigravity (AGY) • Google DeepMind Team
    </footer>

  </div>

</body>
</html>
`;
}

const fullHtml = generateFullHTML();
const htmlFilePath = path.join(__dirname, '../curso_masterclass_antigravity_extenso.html');
const pdfFilePath = 'C:\\Users\\marcos.teixeira\\Desktop\\curso_masterclass_antigravity.pdf';

fs.writeFileSync(htmlFilePath, fullHtml, 'utf8');
console.log("Full HTML generated at:", htmlFilePath);

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = null;
for (const p of edgePaths) {
  if (fs.existsSync(p)) {
    browserPath = p;
    break;
  }
}

if (browserPath) {
  console.log(`Printing PDF using browser at: ${browserPath}...`);
  const cmd = `"${browserPath}" --headless --disable-gpu --print-to-pdf="${pdfFilePath}" "${htmlFilePath}"`;
  try {
    execSync(cmd);
    const stats = fs.statSync(pdfFilePath);
    console.log(`SUCCESS! Masterclass PDF generated on Desktop: ${pdfFilePath} (${stats.size} bytes)`);
  } catch (err) {
    console.error("Error generating PDF:", err.message);
  }
} else {
  console.error("Browser not found.");
}
