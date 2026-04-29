const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\jefhi\\Documents\\Documentos\\Projetos\\anamachado-studio\\src\\components\\sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  if (content.includes('className="py-24 px-container-padding')) {
    content = content.replace(/className="py-24 px-container-padding/g, 'className="py-16 md:py-24 px-container-padding');
    changed = true;
  }
  if (content.includes('className="py-24 bg-surface-container-lowest')) {
    content = content.replace(/className="py-24 bg-surface-container-lowest/g, 'className="py-16 md:py-24 bg-surface-container-lowest');
    changed = true;
  }
  if (content.includes('className="py-24 bg-[#F9F7F5]')) {
    content = content.replace(/className="py-24 bg-\\[#F9F7F5\\]/g, 'className="py-16 md:py-24 bg-[#F9F7F5]');
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Updated padding in ' + file);
  }
}
