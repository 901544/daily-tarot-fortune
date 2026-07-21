import { TarotCard } from '../data/tarotCards';

const majorArcanaMap: Record<string, string> = {
  '愚者': '00-TheFool.png',
  '魔术师': '01-TheMagician.png',
  '女祭司': '02-TheHighPriestess.png',
  '皇后': '03-TheEmpress.png',
  '皇帝': '04-TheEmperor.png',
  '教皇': '05-TheHierophant.png',
  '恋人': '06-TheLovers.png',
  '战车': '07-TheChariot.png',
  '力量': '08-Strength.png',
  '隐士': '09-TheHermit.png',
  '命运之轮': '10-WheelOfFortune.png',
  '正义': '11-Justice.png',
  '倒吊人': '12-TheHangedMan.png',
  '死神': '13-Death.png',
  '节制': '14-Temperance.png',
  '恶魔': '15-TheDevil.png',
  '塔': '16-TheTower.png',
  '星星': '17-TheStar.png',
  '月亮': '18-TheMoon.png',
  '太阳': '19-TheSun.png',
  '审判': '20-Judgement.png',
  '世界': '21-TheWorld.png',
};

const getMinorArcanaFileName = (type: string, number: number): string => {
  const typeMap: Record<string, string> = {
    wands: 'Wands',
    cups: 'Cups',
    swords: 'Swords',
    pentacles: 'Pentacles',
  };
  const prefix = typeMap[type] || type;
  const numStr = number.toString().padStart(2, '0');
  return `${prefix}${numStr}.png`;
};

export const getTarotCardImageUrl = (card: TarotCard): string => {
  if (card.type === 'major') {
    const filename = majorArcanaMap[card.name];
    if (filename) {
      return `/images/tarot/${filename.replace('.png', '.webp')}`;
    }
  } else if (card.number) {
    const filename = getMinorArcanaFileName(card.type, card.number);
    return `/images/tarot/${filename.replace('.png', '.webp')}`;
  }
  return '';
};

export const getTarotCardImageUrlFallback = (card: TarotCard): string => {
  if (card.type === 'major') {
    const filename = majorArcanaMap[card.name];
    if (filename) {
      return `/images/tarot/${filename}`;
    }
  } else if (card.number) {
    const filename = getMinorArcanaFileName(card.type, card.number);
    return `/images/tarot/${filename}`;
  }
  return '';
};
