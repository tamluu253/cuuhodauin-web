const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content/articles');

// Định nghĩa thư viện từ khóa và link tương ứng (Ưu tiên từ khóa dài trước)
const linkMap = [
  { keyword: 'máy in tampon 1 màu', link: '/products/pad-printers/hj' },
  { keyword: 'máy in tampon tự động', link: '/products/pad-printers/mc' },
  { keyword: 'máy in tampon meichao', link: '/products/pad-printers/mc' },
  { keyword: 'máy in tampon hj', link: '/products/pad-printers/hj' },
  { keyword: 'máy in tampon', link: '/products/pad-printers' },
  { keyword: 'máy in lụa', link: '/products/screen-printers' },
  { keyword: 'mực in tagless', link: '/products/consumables/inks' },
  { keyword: 'mực afford', link: '/products/consumables/inks' },
  { keyword: 'vnpis', link: '/' }
];

function addInternalLinks() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  let totalLinksAdded = 0;

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Tách phần Frontmatter (YAML) và nội dung chính để không replace nhầm vào title/desc
    const parts = content.split('---');
    if (parts.length < 3) return; // Không có frontmatter hợp lệ
    
    let frontmatter = parts.slice(0, 2).join('---') + '---';
    let body = parts.slice(2).join('---');
    
    let modified = false;

    for (const item of linkMap) {
      // Chỉ tự động chèn nếu trong bài CHƯA CÓ link này để tránh chèn đè hoặc chèn quá nhiều
      if (!body.includes(item.link)) {
        // Regex tìm từ khóa: không phân biệt hoa thường, phải là từ độc lập (\b)
        // Lưu ý: Rất khó để regex hoàn hảo bỏ qua markdown links. 
        // Thay vì dùng regex phức tạp, ta sẽ dùng hàm replace với điều kiện
        const regex = new RegExp(`(?<!\\[[^\\]]*)\\b(${item.keyword})\\b(?![^\\[]*\\]\\()`, 'i');
        
        if (regex.test(body)) {
          body = body.replace(regex, `[**$1**](${item.link})`);
          modified = true;
          totalLinksAdded++;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, frontmatter + body, 'utf8');
      console.log(`Đã tối ưu internal link cho file: ${file}`);
    }
  });

  console.log(`Hoàn tất! Đã tự động chèn tổng cộng ${totalLinksAdded} internal links.`);
}

addInternalLinks();
