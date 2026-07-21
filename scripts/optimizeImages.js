import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const tarotDir = path.join(process.cwd(), 'public', 'images', 'tarot');
const outputDir = path.join(process.cwd(), 'public', 'images', 'tarot');

const files = fs.readdirSync(tarotDir).filter(file => file.endsWith('.png'));

let totalOriginal = 0;
let totalOptimized = 0;

async function processFile(file) {
  const inputPath = path.join(tarotDir, file);
  const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
  
  const stats = fs.statSync(inputPath);
  totalOriginal += stats.size;
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    const maxWidth = 600;
    const maxHeight = 900;
    
    let resizeOptions = {};
    if (metadata.width > maxWidth || metadata.height > maxHeight) {
      resizeOptions = {
        width: maxWidth,
        height: maxHeight,
        fit: sharp.fit.contain,
      };
    }
    
    await image
      .resize(resizeOptions)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    totalOptimized += outputStats.size;
    
    const reduction = ((stats.size - outputStats.size) / stats.size * 100).toFixed(1);
    console.log(`✓ ${file}: ${(stats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (-${reduction}%)`);
  } catch (error) {
    console.error(`✗ ${file}: ${error.message}`);
  }
}

async function main() {
  console.log('=== Optimizing Tarot Images ===\n');
  
  for (const file of files) {
    await processFile(file);
  }
  
  console.log('\n=== Summary ===');
  console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total reduction: ${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%`);
}

main();
