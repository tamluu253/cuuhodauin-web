const fs = require('fs');
const path = require('path');

const headerContent = fs.readFileSync('src/components/Header.tsx', 'utf8');
const hrefs = [];
const regex = /href:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(headerContent)) !== null) {
  if (match[1].startsWith('/') && match[1] !== '/' && match[1] !== '/blog' && match[1] !== '/about') {
    hrefs.push(match[1]);
  }
}

hrefs.forEach(href => {
  const pagePath = path.join('src/app', href, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.log('Creating: ' + pagePath);
    const title = href.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const content = `import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: '${title} | VNPIS Industrial Solutions',
  description: 'Enterprise solutions for ${title} by VNPIS.',
};

export default function Page() {
  return (
    <LandingPage 
      title="${title}" 
      category="VNPIS Solutions"
    />
  );
}
`;
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    fs.writeFileSync(pagePath, content);
  }
});
