const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Adding Executive Strategy & Magic Questions to Client Interview PDF...");

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Roteiro Completo de Reunião & Estratégia de Campo: Fundação Doutor Jesus - BA</title>
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

    .magic-box {
      background: #f0fdf4;
      border: 2px solid #16a34a;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 32px;
    }

    .magic-box h3 {
      color: #14532d;
      font-size: 18px;
      margin-bottom: 14px;
      font-weight: 800;
    }

    .scenario-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 32px;
    }

    .scenario-box h3 {
      color: #1e40af;
      font-size: 17px;
      margin-bottom: 12px;
      font-weight: 800;
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
      padding: 16px;
      min-height: 70px;
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
        <strong style="font-size: 16px;">📋 Roteiro de Reunião & Estratégia de Campo - Fundação Doutor Jesus (BA)</strong>
        <p style="margin: 0; font-size: 13px; color: #94a3b8;">Levantamento de Requisitos Completo + Perguntas Mágicas</p>
      </div>
      <button class="btn-print" onclick="window.print()">
        🖨️ Imprimir / Salvar PDF
      </button>
    </div>

    <div class="header-box">
      <span class="badge">Guia Definitivo de Consultoria & Requisitos</span>
      <h1>Roteiro de Campo para Reunião:<br>Fundação Doutor Jesus (Bahia)</h1>
      <p class="subtitle">Estratégia de Condução, As 2 Perguntas Mágicas, Cenários de Atuação e Roteiro de 12 Módulos Operacionais</p>
    </div>

    <!-- ESTRATÉGIA DE ABERTURA -->
    <div class="magic-box">
      <h3>🔑 As 2 Perguntas Mágicas que Descobrem Tudo</h3>
      <p style="margin-bottom: 14px; color: #166534;">Assim que a reunião começar e vocês se apresentarem, faça estas duas perguntas simples para descobrir a dor real do cliente:</p>
      
      <div style="background: white; padding: 14px 18px; border-radius: 8px; margin-bottom: 12px; border-left: 4px solid #16a34a;">
        <strong>🥇 1. A Pergunta do Problema Principal:</strong>
        <p style="font-size: 15px; color: #0f172a; margin: 6px 0; font-weight: 600;">"Se vocês pudessem resolver APENAS UM problema operacional hoje que mais dá dor de cabeça ou perda de tempo, qual seria?"</p>
        <small style="color: #64748b;"><em>Por que funciona: Eles vão te dizer imediatamente a maior dor da instituição (ex: "Controlar quem está aqui dentro", "Saber se o acolhido tomou o remédio" ou "Controlar estoque de doações").</em></small>
      </div>

      <div style="background: white; padding: 14px 18px; border-radius: 8px; border-left: 4px solid #16a34a;">
        <strong>🥈 2. A Pergunta do Processo Atual:</strong>
        <p style="font-size: 15px; color: #0f172a; margin: 6px 0; font-weight: 600;">"Como vocês fazem esse controle hoje? É na ficha de papel, em planilhas do Excel ou de cabeça?"</p>
        <small style="color: #64748b;"><em>Por que funciona: Isso te mostra exatamente o processo atual que você precisará digitalizar no sistema.</em></small>
      </div>
    </div>

    <div class="scenario-box">
      <h3>🧭 Os 3 Cenários Mais Prováveis que Eles Podem Pedir</h3>
      <p style="margin-bottom: 12px; color: #1e3a8a;">Dependendo de quem estiver na reunião com você, eles vão focar em um destes 3 caminhos:</p>

      <ul>
        <li><strong>Cenário A (Controle de Presença & Alojamento):</strong> <em>"Precisamos saber quem entra, quem sai e onde cada um dorme."</em> &rarr; <strong>Solução:</strong> Sistema de Cadastro Único + Gestão de Leitos/Alojamento.</li>
        <li><strong>Cenário B (Prontuário Multidisciplinar & Saúde):</strong> <em>"Precisamos organizar os atendimentos de psicólogos, assistentes sociais e remédios."</em> &rarr; <strong>Solução:</strong> Prontuário Eletrônico Sigiloso + Controle de Enfermagem.</li>
        <li><strong>Cenário C (Doações & Logística):</strong> <em>"Precisamos controlar as doações de alimentos/roupas que chegam e o estoque da cozinha."</em> &rarr; <strong>Solução:</strong> Gestão de Doações & Estoque de Almoxarifado.</li>
      </ul>
    </div>

    <div class="question-card" style="border-left-color: #0284c7; background: #f0f9ff;">
      <h3 style="color: #0369a1;">📝 O Seu Roteiro de 3 Passos para Amanhã</h3>
      <ol style="padding-left: 20px; color: #334155;">
        <li style="margin-bottom: 8px;"><strong>Passo 1 (Escutar 80% do tempo):</strong> Deixe eles falarem sobre a rotina da fundação. Vá folheando os 12 módulos deste PDF e marcando os pontos que eles mencionarem.</li>
        <li style="margin-bottom: 8px;"><strong>Passo 2 (Confirmar o que escutou):</strong> No final da reunião, faça um resumo: <em>"Entendi! Pelo que conversamos, a prioridade máxima de vocês hoje é [Inserir a dor principal deles], correto?"</em></li>
        <li style="margin-bottom: 8px;"><strong>Passo 3 (Definir o Próximo Passo):</strong> Finalize com profissionalismo: <em>"Perfeito! Vou estruturar essas informações e, nos próximos dias, trago um plano de desenvolvimento em etapas para começarmos o sistema pela prioridade de vocês."</em></li>
      </ol>
    </div>

    <section class="page-break">
      <!-- MÓDULOS DE PERGUNTAS -->
      <h2>1. Entrada, Cadastro & Prontuário do Acolhido</h2>
      <div class="question-card">
        <h3>1.1 Cadastro Único & Ficha Biográfica</h3>
        <ul class="check-list">
          <li>Documentos exigidos no ingresso (RG, CPF, Cartão SUS, Comprovante de Residência)?</li>
          <li>O acolhido chega por demanda espontânea, encaminhamento judicial, resgate ou indicação familiar?</li>
          <li>Como é feito o registro da foto do acolhido e a emissão do crachá/carteirinha interna?</li>
          <li>Como relacionar reingressos ou passagens anteriores do acolhido pela fundação?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>2. Alojamento, Setores & Rotina Diária</h2>
      <div class="question-card">
        <h3>2.1 Mapeamento Físico & Chamada Diária</h3>
        <ul class="check-list">
          <li>Como é feita a divisão de alas (Masculino, Feminino, Idosos, Triagem/Quarentena)?</li>
          <li>O sistema precisa mapear Pavilhão &rarr; Quarto &rarr; Leito/Cama exato?</li>
          <li>Como é feito o controle de presença diário nos cultos, refeições e oficinas?</li>
          <li>Como registrar movimentações internas de quarto ou mudança de fase da internação?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>
    </section>

    <!-- MÓDULO 3 E 4 -->
    <section class="page-break">
      <h2>3. Atendimento Multidisciplinar & Saúde</h2>
      <div class="question-card">
        <h3>3.1 Prontuário Médico, Psicológico e Social</h3>
        <ul class="check-list">
          <li>Quais são as áreas médicas/sociais ativas (Assistente Social, Psicólogo, Clínico Geral, Enfermagem)?</li>
          <li>Os prontuários psicológicos/sociais devem ter sigilo restrito apenas à equipe técnica?</li>
          <li>Como é feito o controle da medicação diária assistida por enfermagem?</li>
          <li>Como é feita a gestão de estoque da farmácia interna e receita de medicamentos contínuos?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>4. Cursos Profissionalizantes, Oficinas & Reinserção</h2>
      <div class="question-card">
        <h3>4.1 Capacitação & Emissão de Certificados</h3>
        <ul class="check-list">
          <li>Quais oficinas são oferecidas (Mecânica, Marcenaria, Padaria, Agricultura, Barbearia, Informática)?</li>
          <li>Como é avaliada a frequência e desempenho do acolhido nas oficinas?</li>
          <li>O sistema precisa emitir certificados de conclusão e histórico de capacitação?</li>
          <li>Como é feito o acompanhamento de pós-alta para inserção no mercado de trabalho?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>
    </section>

    <!-- MÓDULO 5 E 6 -->
    <section class="page-break">
      <h2>5. Logística, Alimentação & Almoxarifado</h2>
      <div class="question-card">
        <h3>5.1 Gestão de Estoque & Cozinha</h3>
        <ul class="check-list">
          <li>Como são cadastradas as doações de alimentos, roupas, colchões e limpeza?</li>
          <li>Como é feita a baixa de estoque na cozinha para produção diária de refeições?</li>
          <li>Como é controlada a distribuição de kits de higiene pessoal aos acolhidos?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>6. Gestão Jurídica & Processos Judiciais</h2>
      <div class="question-card">
        <h3>6.1 Acompanhamento de Medidas Cautelares & Justiça</h3>
        <ul class="check-list">
          <li>Como é feito o controle dos acolhidos encaminhados pela Justiça / Varas de Execução Penal?</li>
          <li>O sistema precisa gerar Relatórios Periódicos de Evolução em PDF para enviar aos juízes?</li>
          <li>Como emitir alertas de vencimento de prazos de internação judicialmente estipulados?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>
    </section>

    <!-- MÓDULO 7 A 12 -->
    <section class="page-break">
      <h2>7. Transportes, Frota & Agendamento Externo</h2>
      <div class="question-card">
        <h3>7.1 Logística de Veículos da Fundação</h3>
        <ul class="check-list">
          <li>Como é gerida a frota de veículos (ônibus, vans, ambulâncias, carros de apoio)?</li>
          <li>Como agendar saídas externas para consultas médicas hospitalares, audiências no Fórum ou emissão de RG no SAC?</li>
          <li>Existe necessidade de controle de combustível e manutenção preventiva dos veículos?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>8. Visitas Familiares, Comunicação & Ouvidoria</h2>
      <div class="question-card">
        <h3>8.1 Controle de Visitantes Autorizados</h3>
        <ul class="check-list">
          <li>Como é feito o cadastro prévio de parentes autorizados para os dias de visitação?</li>
          <li>Como registrar chamadas telefônicas/vídeo autorizadas entre o acolhido e a família?</li>
          <li>Como registrar autorizações formais de saída temporária (visitas de fim de ano / feriados)?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>9. Voluntariado, Recursos Humanos & Plantão</h2>
      <div class="question-card">
        <h3>9.1 Escala de Monitores & Voluntários</h3>
        <ul class="check-list">
          <li>Como é gerido o cadastro de voluntários (médicos, professores) e seus horários?</li>
          <li>Como organizar a escala de plantão dos monitores e coordenadores de pavilhão (turnos 12x36/24h)?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>10. Captação de Recursos, Doador & Convênios</h2>
      <div class="question-card">
        <h3>10.1 Gestão Financeira & Transparência</h3>
        <ul class="check-list">
          <li>Como é gerido o cadastro de doadores recorrentes (Carnês, PIX, Boletos)?</li>
          <li>Como é feita a prestação de contas de Convênios Públicos (Governo da Bahia / SEADES / Prefeituras)?</li>
          <li>O sistema precisa emitir Recibos de Doação e relatórios de transparência para fiscalização?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>11. Central de Ocorrências & Eventos Críticos</h2>
      <div class="question-card">
        <h3>11.1 Registro de Incidentes Disciplinares / Médicos</h3>
        <ul class="check-list">
          <li>Como registrar ocorrências disciplinares ou intercorrências de saúde (ex: crise de abstinência, encaminhamento de emergência)?</li>
          <li>Como funciona a transmissão de recados e avisos críticos entre os turnos de monitores?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <h2>12. Infraestrutura, Conectividade & Permissões</h2>
      <div class="question-card">
        <h3>12.1 Perfis de Acesso (RBAC) & Modo Off-line</h3>
        <ul class="check-list">
          <li>A internet no local é estável ou o sistema deve funcionar off-line em caso de queda de rede?</li>
          <li>Quais serão os perfis de acesso (Admin, Recepção, Serviço Social, Psicologia, Enfermagem, Monitor, Financeiro)?</li>
        </ul>
        <div class="notes-box"><em>Anotações...</em></div>
      </div>

      <div class="tip-box">
        💡 <strong>Dica Ouro para o Desenvolvedor:</strong> Este roteiro cobre 100% das operações. Não tente apresentar tudo de uma vez. Use a seção de abertura para fazer As 2 Perguntas Mágicas e deixe o cliente indicar a prioridade!
      </div>
    </section>

    <footer>
      Roteiro Completo de Levantamento de Requisitos (12 Módulos + Estratégia) • Fundação Doutor Jesus (BA)
    </footer>

  </div>

</body>
</html>
`;

const htmlFilePath = path.join(__dirname, '../roteiro_reuniao_fundacao_doutor_jesus.html');
const pdfFilePath = 'C:\\Users\\marcos.teixeira\\Desktop\\roteiro_reuniao_fundacao_doutor_jesus.pdf';

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log("Final Strategy & Interview HTML generated at:", htmlFilePath);

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
  console.log(`Printing Final Strategy PDF using browser at: ${browserPath}...`);
  const cmd = `"${browserPath}" --headless --disable-gpu --print-to-pdf="${pdfFilePath}" "${htmlFilePath}"`;
  try {
    execSync(cmd);
    const stats = fs.statSync(pdfFilePath);
    console.log(`SUCCESS! Final Strategy PDF generated on Desktop: ${pdfFilePath} (${stats.size} bytes)`);
  } catch (err) {
    console.error("Error generating PDF:", err.message);
  }
} else {
  console.error("Browser not found.");
}
