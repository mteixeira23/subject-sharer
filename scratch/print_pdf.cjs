const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../curso_masterclass_antigravity.html');
const pdfPath = path.join(__dirname, '../curso_masterclass_antigravity.pdf');

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
  console.log(`Found browser at: ${browserPath}`);
  const cmd = `"${browserPath}" --headless --disable-gpu --print-to-pdf="${pdfPath}" "${htmlPath}"`;
  console.log("Running command:", cmd);
  try {
    execSync(cmd);
    console.log(`PDF successfully generated at: ${pdfPath}`);
  } catch (err) {
    console.error("Error printing PDF:", err.message);
  }
} else {
  console.log("No Edge/Chrome binary found for headless PDF printing.");
}
