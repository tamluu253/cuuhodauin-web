const fs = require('fs');
const path = require('path');

const routes = [
  { path: 'solutions', title: 'Giải Pháp', category: 'VNPIS Solutions' },
  { path: 'solutions/variable-data-printing', title: 'Variable Data Printing', category: 'Giải Pháp' },
  { path: 'solutions/uv-single-pass-printing', title: 'UV Single Pass Printing', category: 'Giải Pháp' },
  { path: 'solutions/pad-printing', title: 'Pad Printing', category: 'Giải Pháp' },
  { path: 'solutions/screen-printing', title: 'Screen Printing', category: 'Giải Pháp' },
  { path: 'solutions/industrial-coding', title: 'Industrial Coding', category: 'Giải Pháp' },
  { path: 'products/cij-printers', title: 'CIJ Printers', category: 'Máy In' },
  { path: 'products/industrial-ink', title: 'Industrial Ink', category: 'Vật Tư' },
  { path: 'products/consumables', title: 'Printing Consumables', category: 'Vật Tư' },
  { path: 'services/screen-printing-service', title: 'Screen Printing Service', category: 'Dịch Vụ' },
  { path: 'services/machine-rental', title: 'Machine Rental', category: 'Dịch Vụ' },
  { path: 'services/machine-repair', title: 'Machine Repair', category: 'Dịch Vụ' },
  { path: 'services/color-management', title: 'Color Management', category: 'Dịch Vụ' },
  { path: 'videos', title: 'Video', category: 'Kiến Thức' },
  { path: 'faq', title: 'Câu Hỏi Thường Gặp', category: 'Kiến Thức' },
];

const basePath = path.join(__dirname, '..', 'src', 'app');

routes.forEach(route => {
  const dir = path.join(basePath, route.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const file = path.join(dir, 'page.tsx');
  if (!fs.existsSync(file)) {
    const content = `import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: '${route.title} | VNPIS',
  description: '${route.title} by VNPIS Industrial Solutions.',
};

export default function Page() {
  return (
    <LandingPage 
      title="${route.title}" 
      category="${route.category}"
    />
  );
}
`;
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Created: ${route.path}/page.tsx`);
  } else {
    console.log(`Exists: ${route.path}/page.tsx`);
  }
});
