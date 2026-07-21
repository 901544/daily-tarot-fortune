import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputPath = path.join(process.cwd(), 'public', 'images', 'pattern_bright_silver.png');
const outputPath = path.join(process.cwd(), 'public', 'images', 'pattern_bright_silver.webp');

async function main() {
  const stats = fs.statSync(inputPath);
  console.log(`Original: ${(stats.size / 1024).toFixed(1)} KB`);
  
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
  
  const outputStats = fs.statSync(outputPath);
  const reduction = ((stats.size - outputStats.size) / stats.size * 100).toFixed(1);
  console.log(`Optimized: ${(outputStats.size / 1024).toFixed(1)} KB (-${reduction}%)`);
}

main();