const fs = require('fs');
const path = require('path');

const folders = [
    "solutions/qr-code-printing",
    "solutions/variable-data-printing",
    "solutions/anti-counterfeit",
    "solutions/rfid",
    "solutions/warehouse-rfid",
    "solutions/apparel-rfid",
    "solutions/production-traceability",
    "products/uv-printers/ct11",
    "products/uv-printers/ct21",
    "products/cij-inks/domino",
    "products/cij-inks/videojet",
    "products/cij-inks/hitachi",
    "products/tij-inks",
    "products/printheads/ricoh-gen5",
    "products/printheads/ricoh-gen6",
    "products/printheads/epson-i3200",
    "products/printheads/kodak-s5",
    "products/printheads/kodak-s10",
    "products/pad-printing/machines",
    "products/pad-printing/inks",
    "products/pad-printing/pads",
    "products/pad-printing/plates",
    "products/screen-printing",
    "services/qr-printing-service",
    "services/variable-data-service",
    "services/pad-printing-service",
    "services/uv-printing-service",
    "services/consulting",
    "industries/cosmetics",
    "industries/food",
    "industries/pharmaceuticals",
    "industries/electronics",
    "industries/garment",
    "industries/packaging",
    "case-studies",
    "blog/rfid",
    "blog/uv-printing",
    "blog/qr-code",
    "blog/pad-printing",
    "blog/cij",
    "blog/printheads",
    "about",
    "contact",
    "resources/download",
    "resources/catalog",
    "resources/msds",
    "resources/software"
];

const baseDir = path.join(__dirname, 'src/app');

folders.forEach(folder => {
    const folderParts = folder.split('/');
    const rawTitle = folderParts[folderParts.length - 1];
    
    // Convert 'qr-code-printing' to 'Qr Code Printing'
    const title = rawTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const targetPath = path.join(baseDir, folder);
    const filePath = path.join(targetPath, 'page.tsx');

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
    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Fixed pages successfully.');
