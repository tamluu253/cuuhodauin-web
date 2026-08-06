const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');

const filesToRename = [
  {
    old: 'dau-in-phun-cong-ngiep-dau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi-httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi.md',
    new: 'dau-in-ricoh-gen-5.md',
    slug: 'dau-in-ricoh-gen-5'
  },
  {
    old: 'dau-in-phun-cong-ngiep-dau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi-httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-6-chuyen-in-du-lieu-bien-doihtml-1.md',
    new: 'dau-in-ricoh-gen-6.md',
    slug: 'dau-in-ricoh-gen-6'
  },
  {
    old: 'mayin-phun-cong-nghiep-httpsvnpiscomdau-in-ricoh-gen5-mh5420-mh5440.md',
    new: 'dau-in-ricoh-gen5-mh5420-mh5440.md',
    slug: 'dau-in-ricoh-gen5-mh5420-mh5440'
  }
];

// First, rename the files and update their slug
for (const item of filesToRename) {
  const oldPath = path.join(contentDir, item.old);
  const newPath = path.join(contentDir, 'articles', item.new); // move to articles folder so it gets indexed properly
  
  if (fs.existsSync(oldPath)) {
    let content = fs.readFileSync(oldPath, 'utf8');
    // Replace old slug with new slug in frontmatter
    content = content.replace(/slug: .*/g, `slug: "${item.slug}"`);
    fs.writeFileSync(newPath, content, 'utf8');
    fs.unlinkSync(oldPath);
    console.log(`Renamed and moved: ${item.old} -> articles/${item.new}`);
  } else {
    // maybe it is already in articles?
    const oldPathArticles = path.join(contentDir, 'articles', item.old);
    if(fs.existsSync(oldPathArticles)) {
       let content = fs.readFileSync(oldPathArticles, 'utf8');
       content = content.replace(/slug: .*/g, `slug: "${item.slug}"`);
       fs.writeFileSync(newPath, content, 'utf8');
       fs.unlinkSync(oldPathArticles);
       console.log(`Renamed: articles/${item.old} -> articles/${item.new}`);
    }
  }
}

// Now scan all files in content and content/articles to fix broken links
function fixBrokenLinks(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixBrokenLinks(fullPath);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      // Fix Ricoh Gen 6 link
      if (content.includes('httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-6-chuyen-in-du-lieu-bien-doihtml-1.html')) {
        content = content.replace(/https:\/\/vnpis\.com\/dau-in-phun-cong-ngiep\/dau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi\/httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-6-chuyen-in-du-lieu-bien-doihtml-1\.html/g, '/blog/dau-in-ricoh-gen-6');
        modified = true;
      }
      
      // Fix Ricoh Gen 5 link if any
      if (content.includes('httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi')) {
        content = content.replace(/https:\/\/vnpis\.com\/dau-in-phun-cong-ngiep\/dau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi\/httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-5-chuyen-in-du-lieu-bien-doi\.html/g, '/blog/dau-in-ricoh-gen-5');
        // also handle without .html just in case
        content = content.replace(/https:\/\/vnpis\.com\/.*httpsvnpiscomdau-in-phun-cong-ngiepdau-in-ricoh-gen-5.*/g, '/blog/dau-in-ricoh-gen-5');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed links in: ${file}`);
      }
    }
  }
}

fixBrokenLinks(contentDir);
