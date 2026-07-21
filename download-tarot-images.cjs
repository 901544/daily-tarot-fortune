const fs = require('fs');
const path = require('path');
const https = require('https');

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/@cometpisces/tarot-kit-images@0.2.0/images';

const majorArcana = [
  '00-TheFool.png', '01-TheMagician.png', '02-TheHighPriestess.png',
  '03-TheEmpress.png', '04-TheEmperor.png', '05-TheHierophant.png',
  '06-TheLovers.png', '07-TheChariot.png', '08-Strength.png',
  '09-TheHermit.png', '10-WheelOfFortune.png', '11-Justice.png',
  '12-TheHangedMan.png', '13-Death.png', '14-Temperance.png',
  '15-TheDevil.png', '16-TheTower.png', '17-TheStar.png',
  '18-TheMoon.png', '19-TheSun.png', '20-Judgement.png',
  '21-TheWorld.png'
];

const suits = ['Wands', 'Cups', 'Swords', 'Pentacles'];

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const main = async () => {
  const destDir = path.join(__dirname, 'src', 'images', 'tarot');
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }
  
  const allFiles = [
    ...majorArcana,
    ...suits.flatMap(suit => Array.from({ length: 14 }, (_, i) => `${suit}${(i + 1).toString().padStart(2, '0')}.png`))
  ];
  
  let successCount = 0;
  let failCount = 0;
  
  for (const filename of allFiles) {
    const url = `${CDN_BASE}/${filename}`;
    const dest = path.join(destDir, filename);
    
    try {
      await downloadImage(url, dest);
      successCount++;
      console.log(`Downloaded: ${filename} (${successCount}/${allFiles.length})`);
    } catch (err) {
      failCount++;
      console.log(`Failed to download: ${filename} - ${err.message}`);
    }
  }
  
  console.log(`\nDownload complete: ${successCount} success, ${failCount} failed`);
};

main().catch(console.error);
