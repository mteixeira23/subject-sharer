const fs = require('fs');
const path = require('path');

function searchAll(dir, searchStr) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      searchAll(fullPath, searchStr);
    } else {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(searchStr)) {
          console.log(`FOUND "${searchStr}" in ${fullPath}`);
          const lines = content.split('\n');
          lines.forEach((line, idx) => {
            if (line.includes(searchStr)) {
              console.log(`  L${idx + 1}: ${line.trim()}`);
            }
          });
        }
      } catch (e) {}
    }
  }
}

const root = path.join(__dirname, '..');
console.log("Searching in root:", root);
searchAll(root, 'Legislação Tributária da Bahia');
searchAll(root, 'Contabilidade de Custos');
searchAll(root, 'Matemática e RLM');
