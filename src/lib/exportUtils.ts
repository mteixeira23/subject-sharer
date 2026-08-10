// ── CSV Export ────────────────────────────────────────────────────────────────

export function downloadCSV(filename: string, headers: string[], rows: (string | number)[][]) {
  const escape = (v: string | number) => {
    const s = String(v);
    return s.includes(',') || s.includes('"') || s.includes('\n')
      ? `"${s.replace(/"/g, '""')}"`
      : s;
  };

  const csvContent = [
    headers.map(escape).join(','),
    ...rows.map(row => row.map(escape).join(',')),
  ].join('\n');

  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  triggerDownload(blob, filename);
}

// ── Print-based PDF ──────────────────────────────────────────────────────────

export function printElement(elementId: string, title: string) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; padding: 24px; color: #1a1a1a; }
        table { border-collapse: collapse; width: 100%; margin: 12px 0; }
        th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; font-size: 13px; }
        th { background: #f5f5f5; font-weight: 600; }
        h1, h2, h3 { margin: 16px 0 8px; }
        .print-header { border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
        .print-header h1 { margin: 0; font-size: 20px; }
        .print-header p { margin: 4px 0 0; color: #666; font-size: 13px; }
        @media print { body { padding: 0; } }
      </style>
    </head>
    <body>
      <div class="print-header">
        <h1>${title}</h1>
        <p>Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
      </div>
      ${el.innerHTML}
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.onload = () => {
    printWindow.print();
  };
}

// ── Agenda Print ─────────────────────────────────────────────────────────────

export function printAgendaHTML(title: string, htmlContent: string) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <style>
        body { font-family: system-ui, -apple-system, sans-serif; padding: 24px; color: #1a1a1a; }
        table { border-collapse: collapse; width: 100%; margin: 12px 0; }
        th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; font-size: 13px; vertical-align: top; }
        th { background: #f5f5f5; font-weight: 600; }
        h1, h2, h3 { margin: 16px 0 8px; }
        .print-header { border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
        .print-header h1 { margin: 0; font-size: 20px; }
        .print-header p { margin: 4px 0 0; color: #666; font-size: 13px; }
        .event { padding: 3px 0; display: flex; align-items: center; gap: 6px; font-size: 12px; }
        .event .status { font-size: 14px; }
        .badge { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: 10px; font-weight: 600; }
        .shift-label { font-weight: 600; font-size: 11px; color: #555; margin: 8px 0 4px; text-transform: uppercase; letter-spacing: 0.5px; }
        .priority { font-size: 10px; font-weight: 500; color: #888; }
        .amount { font-weight: 600; font-size: 12px; }
        .amount.income { color: #16a34a; }
        .amount.expense { color: #dc2626; }
        .day-cell { min-width: 120px; }
        .month-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0; }
        .month-cell { border: 1px solid #ddd; min-height: 70px; padding: 4px; font-size: 11px; }
        .month-cell .day-num { font-weight: 700; font-size: 12px; margin-bottom: 2px; }
        .month-cell.outside { opacity: 0.3; }
        .weekday-header { text-align: center; font-weight: 700; font-size: 11px; padding: 6px 4px; background: #f5f5f5; border: 1px solid #ddd; text-transform: uppercase; }
        @media print { body { padding: 0; } }
      </style>
    </head>
    <body>
      <div class="print-header">
        <h1>${title}</h1>
        <p>Gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
      </div>
      ${htmlContent}
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.onload = () => { printWindow.print(); };
}

// ── Helper ───────────────────────────────────────────────────────────────────

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
