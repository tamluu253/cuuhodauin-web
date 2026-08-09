const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const articlesDir = path.join(__dirname, '..', 'content/articles');

function detectPrinthead(title, content) {
  const text = (title + ' ' + content).toLowerCase();
  if (text.includes('ricoh') || text.includes('gen5') || text.includes('gen6') || text.includes('gh2220')) {
    return 'Ricoh';
  }
  if (text.includes('kyocera') || text.includes('kj4a') || text.includes('kj4b')) {
    return 'Kyocera';
  }
  if (text.includes('konica') || text.includes('1024i') || text.includes('512i') || text.includes('km1024')) {
    return 'Konica';
  }
  if (text.includes('epson') || text.includes('i3200') || text.includes('dx5') || text.includes('dx7') || text.includes('xp600') || text.includes('tx800') || text.includes('f1080')) {
    return 'Epson';
  }
  if (text.includes('cij') || text.includes('videojet') || text.includes('domino') || text.includes('linx') || text.includes('markem')) {
    return 'CIJ';
  }
  if (text.includes('tij') || text.includes('hp45') || text.includes('hp 45') || text.includes('cartridge')) {
    return 'TIJ';
  }
  if (text.includes('spt') || text.includes('seiko') || text.includes('510') || text.includes('1020')) {
    return 'Seiko SPT';
  }
  return 'Khác';
}

function cleanTitle(title) {
  if (!title) return title;
  return title.replace(/^\[Tuần\s*\d+\s*[–-]\s*Thứ\s*\d+\]\s*/i, '').trim();
}

function processArticles() {
  if (!fs.existsSync(articlesDir)) {
    console.error('Articles directory not found');
    return;
  }

  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
  console.log(`Processing ${files.length} markdown articles...`);

  let updatedCount = 0;

  files.forEach(file => {
    const filePath = path.join(articlesDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(rawContent);

    let title = parsed.data.title || '';
    const cleanedTitle = cleanTitle(title);

    const printhead = detectPrinthead(cleanedTitle, parsed.content);

    let content = parsed.content.trim();

    // Clean address lines inside content block
    content = content.replace(/Phường\s*4,\s*Quận\s*8/g, 'Phường Chánh Hưng');
    content = content.replace(/Quận\s*1,\s*TP\.\s*Hồ\s*Chí\s*Minh/g, 'Phường Bến Thành, TP. Hồ Chí Minh');
    content = content.replace(/Phường Bến Thành,\s*Phường Bến Thành/g, 'Phường Bến Thành');

    // Remove duplicated leading H1 title in content if present
    const lines = content.split('\n');
    if (lines.length > 0 && lines[0].trim().startsWith('# ')) {
      lines.shift(); // Remove the leading H1 line from markdown body
      content = lines.join('\n').trim();
    }

    parsed.data.title = cleanedTitle;
    parsed.data.printhead = printhead;

    const newContent = matter.stringify(content, parsed.data);
    fs.writeFileSync(filePath, newContent, 'utf8');
    updatedCount++;
  });

  console.log(`Successfully cleaned titles and updated metadata for ${updatedCount} articles.`);
}

processArticles();
