const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceJpg = 'C:\\Users\\TL\\.gemini\\antigravity\\brain\\aa4d2001-b38c-44f0-a867-46b2ad025fd2\\vnpis_rescue_favicon_1787443488863.jpg';

async function generateFavicons() {
  console.log('Processing favicon images from:', sourceJpg);
  
  if (!fs.existsSync(sourceJpg)) {
    throw new Error('Source image not found: ' + sourceJpg);
  }

  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  // Ensure directories exist
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

  // 1. 512x512 Icon
  await sharp(sourceJpg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon.png'));
  
  await sharp(sourceJpg)
    .resize(512, 512)
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // 2. 180x180 Apple Touch Icon
  await sharp(sourceJpg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  await sharp(sourceJpg)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // 3. 32x32 Favicon PNG & ICO
  await sharp(sourceJpg)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  await sharp(sourceJpg)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  await sharp(sourceJpg)
    .resize(32, 32)
    .png()
    .toFile(path.join(appDir, 'favicon.ico'));

  // 4. 16x16 Favicon PNG
  await sharp(sourceJpg)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  console.log('Successfully generated all favicon assets!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
