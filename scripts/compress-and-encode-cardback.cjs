const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = path.join(__dirname, '../public/images/pattern_bright_silver.png');
const tempOutputPath = path.join(__dirname, '../public/images/cardback-compressed.webp');

async function run() {
  const inputBuffer = fs.readFileSync(inputPath);
  console.log('Original size:', (inputBuffer.length / 1024).toFixed(1), 'KB');

  await sharp(inputPath)
    .resize({ width: 300, height: 400, fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(tempOutputPath);

  const outputBuffer = fs.readFileSync(tempOutputPath);
  console.log('Compressed size:', (outputBuffer.length / 1024).toFixed(1), 'KB');

  const base64 = outputBuffer.toString('base64');
  console.log('Base64 length:', base64.length);

  const outputPath = path.join(__dirname, '../src/assets/cardBack.ts');
  const content = `export const cardBackPattern = 'data:image/webp;base64,${base64}';\n`;
  fs.writeFileSync(outputPath, content);

  fs.unlinkSync(tempOutputPath);
  console.log('Done! Saved to', outputPath);
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
