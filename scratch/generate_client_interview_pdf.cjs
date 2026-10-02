const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Building Client Interview PDF for Fundação Doutor Jesus...");

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Roteiro de Reunião Inicial (Fase 1): Fundação Doutor Jesus - BA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #15803d;
      --primary-dark: #166534;
      --primary-light: #dcfce7;
      --accent: #0284c7;
      --bg-dark: #0f172a;
      --text-main: #1e293b;
      --text-muted: #64748b;
      --border: #cbd5e1;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    @page {
      size: A4;
      margin: 20mm 16mm 20mm 16mm;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text-main);
      background-color: #f8fafc;
      line-height: 1.65;
      font-size: 14px;
    }

    .container {
      max-width: 960px;
      margin: 25px auto;
      background: #ffffff;
      padding: 70px 80px;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
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

    .print-bar {
      background: #0f172a;
      color: white;
      padding: 18px 26px;
      border-radius: 12px;
      margin-bottom: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-print {
      background: var(--primary);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      font-size: 14.5px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .header-box {
      border-bottom: 3px solid var(--primary);
      padding-bottom: 30px;
      margin-bottom: 40px;
    }

    .badge {
      display: inline-block;
      background: var(--primary-light);
      color: var(--primary-dark);
      font-weight: 800;
      font-size: 13px;
      padding: 6px 16px;
      border-radius: 20px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 36px;
      font-weight: 800;
      color: var(--bg-dark);
      line-height: 1.2;
      margin-bottom: 12px;
    }

    .subtitle {
      font-size: 17px;
      color: var(--text-muted);
    }

    h2 {
      font-size: 21px;
      color: var(--bg-dark);
      margin-top: 36px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .question-card {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-left: 5px solid var(--primary);
      padding: 18px 22px;
      border-radius: 10px;
      margin-bottom: 18px;
    }

    .question-card h3 {
      font-size: 16px;
      color: #0f172a;
      margin-bottom: 8px;
      font-weight: 700;
    }

    .question-card p {
      color: #475569;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .check-list {
      list-style: none;
      padding-left: 0;
    }

    .check-list li {
      position: relative;
      padding-left: 26px;
      margin-bottom: 8px;
      color: #334155;
      font-size: 14px;
    }

    .check-list li::before {
      content: "☐";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--primary);
      font-weight: bold;
      font-size: 16px;
    }

    .notes-box {
      border: 2px dashed #cbd5e1;
      border-radius: 10px;
      padding: 20px;
      min-height: 100px;
      background: #ffffff;
      margin-top: 12px;
    }

    .tip-box {
      background: #eff6ff;
      border-left: 4px solid #0284c7;
      padding: 16px 20px;
      border-radius: 8px;
      margin-top: 30px;
      font-size: 14px;
      color: #0369a1;
    }

    footer {
      margin-top: 50px;
      border-top: 1px solid var(--border);
      padding-top: 20px;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
    }
  </style>
</head>
<body>

  <div class="container">

    <div class="print-bar no-print">
      <div>
        <strong style="font-size: 16px;">📋 Roteiro de Entrevista - Fundação Doutor Jesus (BA)</strong>
        <p style="margin: 0; font-size: 13px; color: #94a3b8;">Levantamento de Requisitos de Campo (Fase 1)</p>
      </div>
      <button class="btn-print" onclick="window.print()">
        🖨️ Imprimir / Salvar PDF
      </button>
    </div>

    <div class="header-box">
      <span class="badge">Fase 1: Início & Levantamento de Requisitos</span>
      <h1>Roteiro de Campo para Reunião:<br>Fundação Doutor Jesus (Bahia)</h1>
      <p class="subtitle">Guia de Perguntas Estratégicas para Mapeamento de Processos, Cadastros, Triagem, Atendimento Multidisciplinar, Logística e Doações</p>
    </div>

    <!-- MÓDULO 1 -->
    <h2>1. Entrada, Cadastro & Prontuário do Acolhido</h2>
    
    <div class="question-card">
      <h3>1.1 Como é o fluxo desde o primeiro contato do acolhido até a entrada oficial?</h3>
      <p><em>Objetivo: Entender os campos obrigatórios na ficha de triagem e documentos exigidos.</em></p>
      <ul class="check-list">
        <li>Quais documentos são exigidos no momento do ingresso (RG, CPF, Cartão SUS, Comprovante de Residência)?</li>
        <li>O acolhido chega por demanda espontânea, encaminhamento judicial, resgate ou indicação familiar?</li>
        <li>Como é feito o registro da foto do acolhido e a emissão da carteira/crachá de identificação interna?</li>
        <li>Existe histórico de passagens anteriores pela fundação? Como relacionar reconvocações ou reingressos?</li>
      </ul>
      <div class="notes-box"><em>Anotações do Desenvolvedor...</em></div>
    </div>

    <!-- MÓDULO 2 -->
    <h2>2. Alojamento, Setores & Rotina Diária</h2>
    
    <div class="question-card">
      <h3>2.1 Como é organizada a divisão de alojamentos e alas?</h3>
      <p><em>Objetivo: Estruturar a atribuição de leitos, controle de vagas e capacidade máxima.</em></p>
      <ul class="check-list">
        <li>Como são divididos os setores/pavilhões (Masculino, Feminino, Idosos, Triagem/Quarentena)?</li>
        <li>O sistema precisa mapear Pavilhão &rarr; Quarto &rarr; Leito/Cama específico?</li>
        <li>Como é feita a chamada diária ou controle de presença nos momentos de culto, refeições e oficinas?</li>
        <li>Como são registradas as movimentações internas (mudança de quarto ou mudança de fase da internação)?</li>
      </ul>
      <div class="notes-box"><em>Anotações do Desenvolvedor...</em></div>
    </div>

    <!-- MÓDULO 3 -->
    <section class="page-break">
      <h2>3. Atendimento Multidisciplinar & Saúde</h2>
      
      <div class="question-card">
        <h3>3.1 Quais profissionais atendem os acolhidos e como registram os prontuários?</h3>
        <p><em>Objetivo: Definir a privacidade dos prontuários (Psicológico, Social, Médico, Enfermagem).</em></p>
        <ul class="check-list">
          <li>Quais são as áreas médicas/sociais ativas (Assistente Social, Psicólogo, Clínico Geral, Psiquiatra, Enfermagem)?</li>
          <li>Os prontuários psicológicos/sociais devem ser sigilosos (restritos apenas à equipe técnica)?</li>
          <li>Como é feito o controle da medicação diária (Horários de medicação assistida por enfermagem)?</li>
          <li>Existe necessidade de receituário eletrônico ou controle de estoque de medicamentos da farmácia interna?</li>
        </ul>
        <div class="notes-box"><em>Anotações do Desenvolvedor...</em></div>
      </div>

      <!-- MÓDULO 4 -->
      <h2>4. Cursos Profissionalizantes, Oficinas & Reinserção</h2>
      
      <div class="question-card">
        <h3>4.1 Como é gerida a participação dos acolhidos nos projetos e laborterapia?</h3>
        <p><em>Objetivo: Mapear a evolução do acolhido e a emissão de certificados de conclusão de oficinas.</em></p>
        <ul class="check-list">
          <li>Quais cursos/oficinas são oferecidos (Mecânica, Marcenaria, Padaria, Agricultura, Barbearia, Informática)?</li>
          <li>Como é avaliada a frequência e o desempenho do acolhido nas oficinas?</li>
          <li>O sistema precisa emitir certificados de participação ou relatórios para a Justiça/Família?</li>
          <li>Como é feito o acompanhamento de pós-alta (reinserção no mercado de trabalho e apoio familiar)?</li>
        </ul>
        <div class="notes-box"><em>Anotações do Desenvolvedor...</em></div>
      </div>
    </section>

    <!-- MÓDULO 5 -->
    <section class="page-break">
      <h2>5. Logística, Alimentação & Estoque de Doações</h2>
      
      <div class="question-card">
        <h3>5.1 Como é controlado o recebimento e distribuição de doações?</h3>
        <p><em>Objetivo: Estruturar o controle de estoque de alimentos, roupas, produtos de higiene e almoxarifado.</em></p>

        <ul class="check-list">
          <li>Como são cadastradas as doações de alimentos, roupas, colchões e materiais de limpeza?</li>
          <li>Existe necessidade de rastrear doadores (Pessoa Física / Empresas / Parceiros) para envio de agradecimentos?</li>
          <li>Como é feita a baixa de estoque na cozinha (produção de milhares de refeições diárias)?</li>
          <li>Como é feita a entrega de kits de higiene pessoal aos acolhidos?</li>
        </ul>
        <div class="notes-box"><em>Anotações do Desenvolvedor...</em></div>
      </div>

      <!-- MÓDULO 6 -->
      <h2>6. Perfis de Acesso, Conectividade & Infraestrutura Local</h2>
      
      <div class="question-card">
        <h3>6.1 Qual é a estrutura de computadores e internet no local?</h3>
        <p><em>Objetivo: Definir se o sistema precisa de suporte off-line (PWA) e restrições de permissão.</em></p>
        <ul class="check-list">
          <li>A internet no local (Candeias/Salvador) é estável ou sofre quedas frequentes?</li>
          <li>O sistema será acessado via computadores de mesa, notebooks ou tablets/celulares de monitores de campo?</li>
          <li>Quais serão os perfis de usuário (Administrador, Recepção/Triagem, Assistente Social, Psicólogo, Enfermeiro, Monitor de Pavilhão)?</li>
          <li>Como deve ser o relatório final para prestação de contas com convênios públicos/órgãos fiscalizadores?</li>
        </ul>
        <div class="notes-box"><em>Anotações do Desenvolvedor...</em></div>
      </div>

      <div class="tip-box">
        💡 <strong>Dica Ouro para a Reunião:</strong> Leve este roteiro impresso ou no seu tablet. Concentre-se em <strong>escutar as dores diárias</strong> dos monitores e assistentes sociais. Pergunte sempre: <em>"Como vocês fazem essa ficha hoje? É no papel, no Excel ou em outro sistema?"</em>.
      </div>
    </section>

    <footer>
      Roteiro de Campo: Levantamento de Requisitos • Fundação Doutor Jesus (BA)
    </footer>

  </div>

</body>
</html>
`;

const htmlFilePath = path.join(__dirname, '../roteiro_reuniao_fundacao_doutor_jesus.html');
const pdfFilePath = 'C:\\Users\\marcos.teixeira\\Desktop\\roteiro_reuniao_fundacao_doutor_jesus.pdf';

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log("Interview HTML generated at:", htmlFilePath);

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
  console.log(`Printing Client Interview PDF using browser at: ${browserPath}...`);
  const cmd = `"${browserPath}" --headless --disable-gpu --print-to-pdf="${pdfFilePath}" "${htmlFilePath}"`;
  try {
    execSync(cmd);
    const stats = fs.statSync(pdfFilePath);
    console.log(`SUCCESS! Client Interview PDF generated on Desktop: ${pdfFilePath} (${stats.size} bytes)`);
  } catch (err) {
    console.error("Error generating PDF:", err.message);
  }
} else {
  console.error("Browser not found.");
}
