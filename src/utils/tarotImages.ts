import { TarotCard } from '../data/tarotCards';

const majorArcanaMap: Record<string, string> = {
  '愚者': '00-TheFool.webp',
  '魔术师': '01-TheMagician.webp',
  '女祭司': '02-TheHighPriestess.webp',
  '皇后': '03-TheEmpress.webp',
  '皇帝': '04-TheEmperor.webp',
  '教皇': '05-TheHierophant.webp',
  '恋人': '06-TheLovers.webp',
  '战车': '07-TheChariot.webp',
  '力量': '08-Strength.webp',
  '隐士': '09-TheHermit.webp',
  '命运之轮': '10-WheelOfFortune.webp',
  '正义': '11-Justice.webp',
  '倒吊人': '12-TheHangedMan.webp',
  '死神': '13-Death.webp',
  '节制': '14-Temperance.webp',
  '恶魔': '15-TheDevil.webp',
  '塔': '16-TheTower.webp',
  '星星': '17-TheStar.webp',
  '月亮': '18-TheMoon.webp',
  '太阳': '19-TheSun.webp',
  '审判': '20-Judgement.webp',
  '世界': '21-TheWorld.webp',
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
  return `${prefix}${numStr}.webp`;
};

export const getTarotCardImageUrl = (card: TarotCard): string => {
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
