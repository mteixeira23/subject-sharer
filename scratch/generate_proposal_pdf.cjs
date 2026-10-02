const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Building Commercial Proposal & Value Package PDF (R$ 7.000/mês)...");

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proposta Comercial & Pacote de Valor: Fundação Doutor Jesus (R$ 7.000,00/mês)</title>
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
      font-size: 34px;
      font-weight: 800;
      color: var(--bg-dark);
      line-height: 1.2;
      margin-bottom: 12px;
    }

    .subtitle {
      font-size: 16.5px;
      color: var(--text-muted);
    }

    .price-tag {
      background: #f0fdf4;
      border: 2px solid #16a34a;
      border-radius: 14px;
      padding: 24px 30px;
      margin-bottom: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price-val {
      font-size: 34px;
      font-weight: 800;
      color: #14532d;
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

    .pillar-card {
      background: #f8fafc;
      border: 1px solid var(--border);
      border-left: 6px solid var(--primary);
      padding: 22px 26px;
      border-radius: 12px;
      margin-bottom: 24px;
    }

    .pillar-card h3 {
      font-size: 18px;
      color: #0f172a;
      margin-bottom: 10px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pillar-card p {
      color: #475569;
      font-size: 14.5px;
      margin-bottom: 14px;
      line-height: 1.7;
    }

    .deliverables-list {
      list-style: none;
      padding-left: 0;
    }

    .deliverables-list li {
      position: relative;
      padding-left: 26px;
      margin-bottom: 10px;
      color: #334155;
      font-size: 14px;
      line-height: 1.6;
    }

    .deliverables-list li::before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 0;
      color: var(--primary);
      font-weight: bold;
      font-size: 15px;
    }

    .script-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 24px;
      margin-top: 40px;
    }

    .script-box h3 {
      color: #1e40af;
      font-size: 18px;
      margin-bottom: 14px;
      font-weight: 800;
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
        <strong style="font-size: 16px;">💎 Embalagem de Valor Comercial (R$ 7.000,00/mês)</strong>
        <p style="margin: 0; font-size: 13px; color: #94a3b8;">Proposta de Parceria & Tecnologia Contínua • Fundação Doutor Jesus (BA)</p>
      </div>
      <button class="btn-print" onclick="window.print()">
        🖨️ Imprimir / Salvar PDF
      </button>
    </div>

    <div class="header-box">
      <span class="badge">Estratégia de Precificação & Alto Valor</span>
      <h1>Como Apresentar e Embalar a Proposta de R$ 7.000,00 / Mês</h1>
      <p class="subtitle">Guia Exaustivo de Argumentação Comercial, Os 6 Pilares de Valor Inclusos e Roteiro de Apresentação para a Diretoria</p>
    </div>

    <div class="price-tag">
      <div>
        <span style="text-transform: uppercase; font-weight: 800; font-size: 13px; color: #166534; letter-spacing: 0.05em;">Modelo de Parceria Tecnológica Contínua</span>
        <h2 style="margin: 0; border: none; padding: 0; color: #14532d; font-size: 24px;">Investimento Mensal do Cliente</h2>
      </div>
      <div class="price-val">R$ 7.000,00 <span style="font-size: 16px; color: #15803d; font-weight: 600;">/ mês</span></div>
    </div>

    <h2>Os 6 Pilares Inclusos no Serviço de R$ 7.000,00/mês</h2>

    <!-- PILAR 1 -->
    <div class="pillar-card">
      <h3>🚀 Pilar 1: Desenvolvimento Evolutivo por Etapas (Software Vivo)</h3>
      <p>O cliente não compra um programa "fechado em uma caixa". Ele contrata uma fábrica de software contínua que constrói a plataforma módulo a módulo segundo a necessidade da fundação.</p>
      <ul class="deliverables-list">
        <li><strong>Meses 1 e 2 (Fase MVP):</strong> Lançamento do Cadastro Único de Acolhidos, Triagem Biográfica, Mapeamento de Pavilhões, Leitos e Chamada Diária.</li>
        <li><strong>Meses 3 e 4 (Fase Saúde & Social):</strong> Prontuário Multidisciplinar Sigiloso (Psicologia, Serviço Social, Enfermagem e Controle de Medicação Assistida).</li>
        <li><strong>Meses 5 e 6 (Fase Logística & Doações):</strong> Controle de Almoxarifado, Baixa de Estoque na Cozinha e Recebimento de Doações.</li>
        <li><strong>Meses 7 a 12 (Fase Avançada):</strong> Gestão Jurídica (Varas de Execução Penal), Controle de Frota/Transportes, Visitas Familiares e Portal do Doador.</li>
      </ul>
    </div>

    <!-- PILAR 2 -->
    <div class="pillar-card" style="border-left-color: #0284c7;">
      <h3 style="color: #0369a1;">☁️ Pilar 2: Toda a Infraestrutura em Nuvem & Backups Diários Inclusos</h3>
      <p>A Fundação Doutor Jesus não gastará nada com servidores dedicados, licenças de banco de dados ou contratação de Data Center.</p>
      <ul class="deliverables-list">
        <li><strong>Servidor de Banco de Dados de Alta Velocidade (Supabase Pro):</strong> Capacidade para milhões de registros e 100 GB de fotos/PDFs 100% pago por você.</li>
        <li><strong>Backups Automáticos Diários em Nuvem:</strong> Garantia de proteção total contra perda de dados ou falhas operacionais.</li>
        <li><strong>Disponibilidade 24 horas por dia (SLA 99.9%):</strong> Servidores redundantes com acesso instantâneo via PC, notebooks e celulares.</li>
      </ul>
    </div>

    <section class="page-break">
      <!-- PILAR 3 -->
      <div class="pillar-card" style="border-left-color: #ca8a04;">
        <h3 style="color: #854d0e;">📞 Pilar 3: Suporte Técnico Prioritário & Plantão Operacional</h3>
        <p>Garantia de que os monitores, assistentes sociais e recepcionistas terão atendimento rápido em caso de dúvidas.</p>
        <ul class="deliverables-list">
          <li><strong>Atendimento Direto via WhatsApp & E-mail:</strong> Canal exclusivo para a equipe tirar dúvidas durante o expediente.</li>
          <li><strong>Tempo de Resposta Prioritário (SLA de até 2 horas):</strong> Solução rápida para dificuldades de acesso ou dúvidas de uso.</li>
          <li><strong>Depuração Proativa de Erros em Segundo Plano:</strong> Monitoramento proativo para corrigir eventuais falhas antes que a equipe perceba.</li>
        </ul>
      </div>

      <!-- PILAR 4 -->
      <div class="pillar-card" style="border-left-color: #7c3aed;">
        <h3 style="color: #5b21b6;">🎓 Pilar 4: Treinamento, Onboarding & Capacitação de Equipes</h3>
        <p>Garantia de que o sistema será efetivamente utilizado por 100% dos funcionários e monitores de pavilhão.</p>
        <ul class="deliverables-list">
          <li><strong>Sessões de Treinamento (Presenciais / Online):</strong> Capacitação prática para monitores, assistentes sociais, enfermeiros e equipe administrativa.</li>
          <li><strong>Manuais Rápidos em PDF:</strong> Guias ilustrados de "como fazer" para cada função do sistema.</li>
          <li><strong>Capacitação de Novos Funcionários:</strong> Treinamento de novos contratados durante toda a vigência do contrato.</li>
        </ul>
      </div>

      <!-- PILAR 5 -->
      <div class="pillar-card" style="border-left-color: #059669;">
        <h3 style="color: #065f46;">📊 Pilar 5: Fábrica de Relatórios para a Justiça & Prestação de Contas</h3>
        <p>Facilidade para prestar contas a Juízes, Promotores, Governo do Estado (SEADES) e doadores.</p>
        <ul class="deliverables-list">
          <li><strong>Relatórios em PDF com 1 Clique:</strong> Geração instantânea de pareceres de evolução para Varas de Execução Penal.</li>
          <li><strong>Customização de Layouts de Relatório:</strong> Ajustes imediatos nos modelos de relatório sempre que um órgão público solicitar um novo formato.</li>
        </ul>
      </div>

      <!-- PILAR 6 -->
      <div class="pillar-card" style="border-left-color: #dc2626;">
        <h3 style="color: #991b1b;">🛡️ Pilar 6: Segurança, Atualizações Contínuas & LGPD</h3>
        <p>Tranquilidade jurídica e proteção cibernética permanente para a fundação.</p>
        <ul class="deliverables-list">
          <li><strong>Conformidade com a LGPD:</strong> Proteção estrita de dados sensíveis de saúde e prontuários sociais.</li>
          <li><strong>Atualizações Tecnológicas Periódicas:</strong> O sistema nunca fica veloz nem ultrapassado; novas atualizações de segurança são aplicadas continuamente.</li>
        </ul>
      </div>

      <!-- SCRIPT COMERCIAL -->
      <div class="script-box">
        <h3>🗣️ O Discurso Comercial exato para apresentar R$ 7.000,00/mês:</h3>
        <p style="font-size: 15px; color: #1e3a8a; font-style: italic; line-height: 1.7;">
          "Senhores, para desenvolver um sistema sob medida dessa magnitude no mercado tradicional, a fundação precisaria fazer um investimento inicial à vista de R$ 80.000 a R$ 100.000.<br><br>
          Para viabilizar a parceria sem exigir essa verba alta de entrada, nós adotamos o modelo de **Tecnologia & Suporte Contínuo por R$ 7.000,00 por mês** (com contrato anual).<br><br>
          Esse valor mensal de R$ 7.000 já inclui **ABSOLUTAMENTE TUDO**: a criação contínua de todos os módulos por etapas, todos os custos de servidores e banco de dados em nuvem com backups diários, o treinamento de todas as equipes e o suporte técnico diário prioritário para a fundação."
        </p>
      </div>
    </section>

    <footer>
      Proposta Comercial & Pacote de Valor (R$ 7.000,00/mês) • Fundação Doutor Jesus (BA)
    </footer>

  </div>

</body>
</html>
`;

const htmlFilePath = path.join(__dirname, '../proposta_comercial_fundacao_doutor_jesus.html');
const pdfFilePath = 'C:\\Users\\marcos.teixeira\\Desktop\\proposta_comercial_fundacao_doutor_jesus.pdf';

fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log("Commercial Proposal HTML generated at:", htmlFilePath);

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
  console.log(`Printing Commercial Proposal PDF using browser at: ${browserPath}...`);
  const cmd = `"${browserPath}" --headless --disable-gpu --print-to-pdf="${pdfFilePath}" "${htmlFilePath}"`;
  try {
    execSync(cmd);
    const stats = fs.statSync(pdfFilePath);
    console.log(`SUCCESS! Commercial Proposal PDF generated on Desktop: ${pdfFilePath} (${stats.size} bytes)`);
  } catch (err) {
    console.error("Error generating PDF:", err.message);
  }
} else {
  console.error("Browser not found.");
}
