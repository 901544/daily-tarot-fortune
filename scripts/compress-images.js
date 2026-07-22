const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const tarotDir = path.join(__dirname, '../public/images/tarot');
const outputDir = path.join(__dirname, '../public/images/tarot-compressed');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(tarotDir);
let totalOriginalSize = 0;
let totalCompressedSize = 0;

async function processFile(file) {
  const inputPath = path.join(tarotDir, file);
  const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
  
  const stats = fs.statSync(inputPath);
  totalOriginalSize += stats.size;
  
  await sharp(inputPath)
    .resize({ width: 400, height: 600, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 80, lossless: false })
    .toFile(outputPath);
  
  const outputStats = fs.statSync(outputPath);
  totalCompressedSize += outputStats.size;
  
  const savedPercent = ((stats.size - outputStats.size) / stats.size * 100).toFixed(1);
  console.log(`${file}: ${(stats.size / 1024).toFixed(1)}KB -> ${(outputStats.size / 1024).toFixed(1)}KB (-${savedPercent}%)`);
}

async function run() {
  console.log('Compressing tarot card images...\n');
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      await processFile(file);
    }
  }
  
  console.log(`\nTotal: ${(totalOriginalSize / 1024).toFixed(1)}KB -> ${(totalCompressedSize / 1024).toFixed(1)}KB (-${((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1)}%)`);
  
  console.log('\nCopying compressed files to tarot directory...');
  const compressedFiles = fs.readdirSync(outputDir);
  compressedFiles.forEach(file => {
    fs.copyFileSync(path.join(outputDir, file), path.join(tarotDir, file));
  });
  
  console.log('Done!');
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
