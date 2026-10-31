const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const dir = path.join(__dirname, '..', 'content', 'articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

let updated = 0;

function cleanText(text) {
  return text
    .replace(/\!\[.*?\]\(.*?\)/g, '') // remove images
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // unwrap links
    .replace(/[\*\_`#]/g, '') // remove markdown symbols
    .replace(/\s+/g, ' ') // normalize spaces
    .trim();
}

files.forEach(f => {
  const filePath = path.join(dir, f);
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);

  if (!parsed.data.description || parsed.data.description.trim() === '') {
    const lines = parsed.content.split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#') && !l.startsWith('!') && !l.startsWith('---'));

    let desc = '';
    for (const line of lines) {
      const cleaned = cleanText(line);
      if (cleaned.length > 50 && !cleaned.startsWith('Hotline') && !cleaned.startsWith('Mr.')) {
        desc = cleaned;
        break;
      }
    }

    if (!desc) {
      const title = parsed.data.title || 'cứu hộ đầu in';
      desc = `Tìm hiểu chi tiết về ${title} tại VNPIS Lab - Quy trình soi Nozzle 4K, phục hồi béc phun và cam kết No Cure - No Pay.`;
    }

    if (desc.length > 165) {
      desc = desc.substring(0, 155).trim();
      const lastSpace = desc.lastIndexOf(' ');
      if (lastSpace > 120) desc = desc.substring(0, lastSpace);
      desc += '...';
    }

    parsed.data.description = desc;
    
    const updatedContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    updated++;
  }
});

console.log('Successfully updated descriptions for', updated, 'articles.');
