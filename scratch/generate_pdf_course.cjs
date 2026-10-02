const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Livro Masterclass: Engenharia de Agentes com Google Antigravity (AGY)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
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
      margin: 20mm 15mm 20mm 15mm;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text-main);
      background-color: #f1f5f9;
      line-height: 1.65;
      font-size: 14px;
    }

    .container {
      max-width: 960px;
      margin: 30px auto;
      background: #ffffff;
      padding: 70px 80px;
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
      padding: 18px 26px;
      border-radius: 12px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .btn-print {
      background: var(--primary);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 15px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
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
      min-height: 840px;
      border-bottom: 2px solid var(--border);
      padding-bottom: 50px;
      margin-bottom: 60px;
    }

    .cover-brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--primary-light);
      color: var(--primary-dark);
      font-weight: 700;
      font-size: 13px;
      padding: 8px 16px;
      border-radius: 20px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    .cover-title {
      font-size: 46px;
      font-weight: 800;
      line-height: 1.12;
      color: var(--bg-dark);
      letter-spacing: -0.03em;
      margin-bottom: 20px;
    }

    .cover-subtitle {
      font-size: 20px;
      color: var(--text-muted);
      font-weight: 400;
      margin-bottom: 40px;
      line-height: 1.5;
    }

    .cover-meta {
      border-top: 2px solid #f1f5f9;
      padding-top: 30px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      font-size: 14px;
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
      font-size: 32px;
      margin-top: 50px;
      margin-bottom: 20px;
      border-bottom: 3px solid var(--primary);
      padding-bottom: 10px;
    }

    h2 {
      font-size: 24px;
      margin-top: 40px;
      margin-bottom: 16px;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }

    h3 {
      font-size: 18px;
      margin-top: 28px;
      margin-bottom: 12px;
      color: #334155;
    }

    p {
      margin-bottom: 16px;
      color: #334155;
      font-size: 14.5px;
      line-height: 1.7;
    }

    /* Lists */
    ul, ol {
      margin-bottom: 20px;
      padding-left: 24px;
    }

    li {
      margin-bottom: 8px;
      font-size: 14.5px;
      color: #334155;
      line-height: 1.6;
    }

    /* Code Blocks */
    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      background: #f1f5f9;
      color: #0f172a;
      padding: 3px 6px;
      border-radius: 5px;
      border: 1px solid #e2e8f0;
    }

    pre {
      background: var(--code-bg);
      color: #f8fafc;
      padding: 20px;
      border-radius: 12px;
      overflow-x: auto;
      margin-bottom: 24px;
      font-size: 13px;
      line-height: 1.6;
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
      margin-bottom: 28px;
      font-size: 13.5px;
    }

    th, td {
      padding: 12px 16px;
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
      padding: 18px 22px;
      border-radius: 12px;
      margin-bottom: 24px;
      font-size: 14px;
      border-left: 5px solid;
      line-height: 1.6;
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
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 15px;
    }

    /* TOC Box */
    .toc-box {
      background: #f8fafc;
      border: 1px solid var(--border);
      padding: 28px;
      border-radius: 12px;
      margin-bottom: 40px;
    }

    .toc-box h2 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 20px;
      border-bottom: none;
      padding-bottom: 0;
    }

    .toc-list {
      list-style: none;
      padding-left: 0;
    }

    .toc-list li {
      margin-bottom: 12px;
      font-size: 14.5px;
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
      margin-top: 60px;
      border-top: 1px solid var(--border);
      padding-top: 24px;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
    }
  </style>
</head>
<body>

  <div class="container">

    <!-- Print Control Bar -->
    <div class="print-bar no-print">
      <div>
        <strong style="font-size: 16px;">📚 Livro Masterclass: Google Antigravity (AGY)</strong>
        <p style="margin: 0; font-size: 13px; color: #94a3b8;">Manual Técnico Detalhado de Capacitação em Engenharia de Agentes</p>
      </div>
      <button class="btn-print" onclick="window.print()">
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H7a2 2 0 00-2 2v4h14z"></path></svg>
        Baixar PDF / Imprimir
      </button>
    </div>

    <!-- Cover Page -->
    <div class="cover-page">
      <div>
        <div class="cover-brand">🚀 Google DeepMind Advanced Agentic Coding</div>
        <h1 class="cover-title">Engenharia de Agentes com<br>Google Antigravity (AGY)</h1>
        <p class="cover-subtitle">Do Zero ao Nível Expert: Pair Programming, Slash Commands, Arquitetura de Skills, Protocolo MCP, Subagentes Paralelos e SDK em Python</p>
      </div>

      <div class="cover-meta">
        <div>
          <p><strong>Autoridade Técnica:</strong> Google DeepMind Team</p>
          <p><strong>Escopo:</strong> Antigravity CLI, IDE, App 2.0 & SDK</p>
        </div>
        <div>
          <p><strong>Edição:</strong> Completa & Exaustiva (2026)</p>
          <p><strong>Formato:</strong> Manual Técnico de Treinamento</p>
        </div>
      </div>
    </div>

    <!-- Table of Contents -->
    <div class="toc-box">
      <h2>📑 Estrutura Geral do Curso Masterclass</h2>
      <ul class="toc-list">
        <li><strong>Capítulo 1:</strong> <a href="#cap1">Fundamentos da Revolução Agentic Coding & Superfícies AGY</a></li>
        <li><strong>Capítulo 2:</strong> <a href="#cap2">O Protocolo de Pair Programming & Filosofia de Desenvolvimento</a></li>
        <li><strong>Capítulo 3:</strong> <a href="#cap3">Manual Exaustivo de Slash Commands & Modos Avançados</a></li>
        <li><strong>Capítulo 4:</strong> <a href="#cap4">O Sistema de Customizações: Rules, Skills, Plugins & Sidecars</a></li>
        <li><strong>Capítulo 5:</strong> <a href="#cap5">Model Context Protocol (MCP) & Inspeção em Tempo de Execução</a></li>
        <li><strong>Capítulo 6:</strong> <a href="#cap6">Arquitetura Multi-Agente: Orquestração Paralela de Subagentes</a></li>
        <li><strong>Capítulo 7:</strong> <a href="#cap7">Desenvolvimento Autônomo com o Antigravity SDK em Python</a></li>
        <li><strong>Capítulo 8:</strong> <a href="#cap8">Troubleshooting Avançado, Prevenção de Perda de Dados & Checklist</a></li>
      </ul>
    </div>

    <!-- Capítulo 1 -->
    <section id="cap1">
      <h1>Capítulo 1: Fundamentos da Revolução Agentic Coding & Superfícies AGY</h1>
      
      <p>O <strong>Google Antigravity (AGY)</strong> representa a transição paradigmática entre a geração passiva de código (chatbots tradicionais) e a <strong>Engenharia de Agentes Autônomos (Agentic Coding)</strong>. Em vez de simplesmente responder a perguntas com trechos isolados de texto, o Antigravity opera diretamente no seu ambiente local, com capacidade de ler arquivos, modificar repositórios, executar comandos no terminal do SO, debugar erros e auditar interfaces em tempo real.</p>

      <div class="alert alert-note">
        <div class="alert-title">💡 O Conceito do Agentic Loop</div>
        O agente opera em um ciclo contínuo de 5 etapas:
        <strong>Percepção</strong> (leitura de arquivos e logs) ➔ <strong>Decisão</strong> (planejamento técnico) ➔ <strong>Execução</strong> (edição de código / ferramentas) ➔ <strong>Verificação</strong> (build / testes) ➔ <strong>Ajuste</strong> (correção de falhas).
      </div>

      <h2>1.1 As 3 Superfícies do Google Antigravity</h2>
      <table>
        <thead>
          <tr>
            <th>Superfície</th>
            <th>Descrição & Caso de Uso Principal</th>
            <th>Recursos Principais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Antigravity CLI (<code>agy</code>)</strong></td>
            <td>Interface em linha de comando ultrarrápida para terminais, servidores e scripts autônomos.</td>
            <td>Integração direta com o shell do SO, execução de tarefas assíncronas e scripts de CI/CD.</td>
          </tr>
          <tr>
            <td><strong>Antigravity IDE</strong></td>
            <td>Ambiente de desenvolvimento integrado AI-First com lentes de código em tempo real.</td>
            <td>Sugestões contextuais inline, chat lateral sincronizado com o editor e atalhos rápidos.</td>
          </tr>
          <tr>
            <td><strong>Antigravity App 2.0</strong></td>
            <td>Aplicação desktop com painel auxiliar HTML para gestão visual de agentes.</td>
            <td>Painel de Subagentes, visualizador de diffs, monitor de tarefas em segundo plano e múltiplos terminais.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <div class="page-break"></div>

    <!-- Capítulo 2 -->
    <section id="cap2">
      <h1>Capítulo 2: O Protocolo de Pair Programming & Filosofia de Desenvolvimento</h1>

      <p>O Pair Programming com o Antigravity obedece a um conjunto de regras rígidas criadas para garantir máxima confiabilidade, prevenção de regressões e código de qualidade de produção.</p>

      <div class="alert alert-warning">
        <div class="alert-title">⚠️ As 5 Leis Invioláveis do Antigravity</div>
        <ol>
          <li><strong>Nunca Adivinhe o Código:</strong> Nunca infira assinaturas de métodos, esquemas de banco ou rotas sem inspecionar o arquivo fonte original.</li>
          <li><strong>Diagnóstico Baseado em Evidências:</strong> Nunca forme uma hipótese de erro sem ler a pilha de erro completa e não truncada.</li>
          <li><strong>Proibição de Soluções Superficiais:</strong> É proibido mascarar erros com tratamentos silenciosos, retornos nulos falsos ou comentar asserções de teste quebradas.</li>
          <li><strong>Verificação Autônoma Obrigatória:</strong> Nunca declare um trabalho como concluído sem executar os comandos de build e testes (<code>npx tsc</code>, <code>npm run build</code>, <code>pytest</code>).</li>
          <li><strong>Manutenção de Contratos de API:</strong> Edições em assinaturas de funções exigem a atualização de todos os pontos de invocação no repositório.</li>
        </ol>
      </div>

      <h2>2.1 Gestão de Artefatos de Desenvolvimento</h2>
      <p>O Antigravity utiliza dois documentos dinâmicos para alinhar o progresso com o desenvolvedor:</p>
      <ul>
        <li><code>implementation_plan.md</code>: Plano de implementação detalhado com descrição de metas, análise de risco, lista de arquivos alterados/criados e plano de verificação.</li>
        <li><code>walkthrough.md</code>: Guia final demonstrando as alterações concluídas, testes executados e capturas/provas do resultado.</li>
      </ul>
    </section>

    <div class="page-break"></div>

    <!-- Capítulo 3 -->
    <section id="cap3">
      <h1>Capítulo 3: Manual Exaustivo de Slash Commands & Modos Avançados</h1>

      <p>Os <strong>Slash Commands</strong> permitem acionar fluxos de trabalho avançados diretamente no chat:</p>

      <h2>3.1 Tabela Geral de Slash Commands</h2>
      <table>
        <thead>
          <tr>
            <th>Comando</th>
            <th>Modo de Operação</th>
            <th>Quando Utilizar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/grill-me</code></td>
            <td>Entrevista Interativa de Arquitetura</td>
            <td>Use no início de grandes tarefas para definir decisões de design e ambiguidades antes de gerar código.</td>
          </tr>
          <tr>
            <td><code>/goal</code></td>
            <td>Execução Autônoma Rígida (Overnight)</td>
            <td>Use para metas longas e complexas. O agente trabalhará de forma contínua até alcançar a validação total.</td>
          </tr>
          <tr>
            <td><code>/learn</code></td>
            <td>Persistência de Aprendizado</td>
            <td>Use após corrigir o agente ou alinhar uma regra personalizada para que o padrão fique gravado para sessões futuras.</td>
          </tr>
          <tr>
            <td><code>/schedule</code></td>
            <td>Temporizadores e Cron Jobs</td>
            <td>Use para agendar lembretes ou checagens periódicas em segundo plano.</td>
          </tr>
          <tr>
            <td><code>/browser</code></td>
            <td>Navegação & Testes Visuais</td>
            <td>Use para abrir e automotivar interações no navegador web.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <div class="page-break"></div>

    <!-- Capítulo 4 -->
    <section id="cap4">
      <h1>Capítulo 4: O Sistema de Customizações: Rules, Skills, Plugins & Sidecars</h1>

      <p>A arquitetura do Antigravity pode ser estendida via <strong>Customizações</strong> salvas globalmente ou por repositório:</p>

      <pre><code>Estrutura de Locais de Customização:
1. Global Root: C:\\Users\\&lt;usuario&gt;\\.gemini\\config\\
   ├── rules\\       # Diretrizes gerais .md
   ├── skills\\      # Pastas de competências técnicas com SKILL.md
   └── plugins\\     # Bundles completos de skills e ferramentas
2. Workspace Root: .agents/ (na raiz do repositório)
   ├── rules\\
   └── skills\\</code></pre>

      <h2>4.1 Estrutura de um Arquivo SKILL.md</h2>
      <p>Toda skill exige um cabeçalho YAML contendo o nome e a descrição de quando deve ser ativada pelo agente:</p>

      <pre><code>---
name: deploy-firebase
description: Instruções completas para build, teste e deploy no Firebase Hosting.
---

# Fluxo de Deploy no Firebase Hosting

## Pré-requisitos
- Node.js instalado e dependências atualizadas.

## Passo a Passo
1. Execute a verificação de tipos: npx tsc --noEmit.
2. Gere a build de produção: npm run build.
3. Valide o diretório dist/.
4. Envie o deploy com o CLI: npx -y firebase-tools@latest deploy --only hosting.</code></pre>
    </section>

    <div class="page-break"></div>

    <!-- Capítulo 5 -->
    <section id="cap5">
      <h1>Capítulo 5: Model Context Protocol (MCP) & Inspeção em Tempo de Execução</h1>

      <p>O <strong>Model Context Protocol (MCP)</strong> é o padrão aberto que permite ao Antigravity comunicar-se com ferramentas externas de desenvolvimento:</p>

      <h2>5.1 Principais Ferramentas MCP Integradas</h2>
      <ul>
        <li><strong>Chrome DevTools MCP:</strong> Inspeciona a árvore DOM, realiza auditorias de acessibilidade (a11y - ARIA, contraste), analisa performance (LCP, INP) e coleta Snapshots de Memória para encontrar vazamentos em aplicações JavaScript.</li>
        <li><strong>Data Agent Kit MCP:</strong> Conecta-se a bancos de dados GCP (BigQuery, Spanner, GCS) para execução segura de consultas SQL, análise estatística e higienização automática de dados.</li>
      </ul>
    </section>

    <!-- Capítulo 6 -->
    <section id="cap6">
      <h1>Capítulo 6: Arquitetura Multi-Agente: Orquestração Paralela de Subagentes</h1>

      <p>O Antigravity possui suporte nativo à execução distribuída de <strong>subagentes</strong> via ferramenta <code>invoke_subagent</code>:</p>

      <pre><code>Exemplo de Chamada de Subagente em JSON:
{
  "Subagents": [
    {
      "TypeName": "research",
      "Role": "Pesquisador de Documentação",
      "Prompt": "Inspecione os arquivos da pasta src/hooks e liste todas as chamadas do Supabase."
    }
  ]
}</code></pre>

      <div class="alert alert-tip">
        <div class="alert-title">⚡ Desempenho em Paragelo</div>
        Subagentes executam em threads isoladas. Você e o agente principal podem continuar trabalhando enquanto o subagente processa pesquisas pesadas ou suítes de testes em segundo plano.
      </div>
    </section>

    <div class="page-break"></div>

    <!-- Capítulo 7 -->
    <section id="cap7">
      <h1>Capítulo 7: Desenvolvimento Autônomo com o Antigravity SDK em Python</h1>

      <p>Para automação em servidores de CI/CD ou robôs de desenvolvimento não supervisionados, utilize o SDK oficial em Python:</p>

      <pre><code>from antigravity import AgentSession, TaskGoal

# Criar sessão no repositório
session = AgentSession(workspace_path="./meu-projeto")

# Configurar meta autônoma
goal = TaskGoal(
    instruction="Auditar todos os componentes React, aplicar regras de acessibilidade e rodar a suíte de testes unitários.",
    auto_approve_edits=True
)

# Executar meta
result = session.execute(goal)

print(f"Resultado final: {result.status}")
print(f"Arquivos modificados: {len(result.modified_files)}")</code></pre>
    </section>

    <!-- Capítulo 8 -->
    <section id="cap8">
      <h1>Capítulo 8: Troubleshooting Avançado, Prevenção de Perda de Dados & Checklist</h1>

      <div class="alert alert-caution">
        <div class="alert-title">🚨 Protocolo de Prevenção de Perda de Dados</div>
        Comandos que causem destruição irreversível de dados (SQL: <code>DROP TABLE</code>, <code>TRUNCATE</code>, <code>DELETE</code> sem <code>WHERE</code>; Cloud: <code>gsutil rm</code>, <code>gcloud projects delete</code>) exigem obrigatoriamente confirmação explícita do usuário.
      </div>

      <h2>8.1 Checklist Definitivo do Desenvolvedor Expert</h2>
      <ul>
        <li>[ ] <strong>Inspecionar antes de alterar:</strong> Sempre visualizar arquivos completos antes de reescrever código.</li>
        <li>[ ] <strong>Verificar compilação:</strong> Garantir que <code>npx tsc --noEmit</code> passe com zero erros.</li>
        <li>[ ] <strong>Validar build final:</strong> Confirmar que <code>npm run build</code> ou <code>pytest</code> termine com código de saída 0.</li>
        <li>[ ] <strong>Gravar aprendizado:</strong> Persistir soluções de bugs complexos no repositório com o comando <code>/learn</code>.</li>
      </ul>
    </section>

    <footer>
      Livro Masterclass: Engenharia de Agentes com Google Antigravity (AGY) • Edição Completa para Capacitação Profissional
    </footer>

  </div>

</body>
</html>
`;

const targetPath = path.join(__dirname, '../curso_masterclass_antigravity.html');
fs.writeFileSync(targetPath, htmlContent, 'utf8');
console.log("Masterclass HTML successfully generated at:", targetPath);
