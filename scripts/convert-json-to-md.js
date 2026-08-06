const fs = require('fs');
const path = require('path');

const blogPosts = require('../src/data/blog-posts.json');
const outDir = path.join(__dirname, '../content/articles');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

blogPosts.forEach((post) => {
  const content = post.content ? post.content : '';
  const date = new Date().toISOString(); // Default date since JSON doesn't have one
  
  const mdContent = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.desc.replace(/"/g, '\\"')}"
date: "${date}"
category: "${post.type}"
code: "${post.code}"
mediaExt: "${post.mediaExt}"
---

${content}
`;

  const filePath = path.join(outDir, `${post.slug}.md`);
  fs.writeFileSync(filePath, mdContent);
  console.log(`Created ${post.slug}.md`);
});

console.log('Conversion complete!');
