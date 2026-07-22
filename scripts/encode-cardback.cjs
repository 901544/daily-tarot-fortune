const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, '../src/images/paisley_bright_silver.png');
const imageBuffer = fs.readFileSync(imagePath);
const base64 = imageBuffer.toString('base64');

console.log('File size:', imageBuffer.length, 'bytes');
console.log('Base64 length:', base64.length);

const outputPath = path.join(__dirname, '../src/assets/cardBack.ts');
const content = `export const cardBackPattern = 'data:image/png;base64,${base64}';\n`;
fs.writeFileSync(outputPath, content);

console.log('Done! Saved to', outputPath);
