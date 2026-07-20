import { TarotCard } from '../data/tarotCards';
import { ZodiacSign } from '../data/zodiacSigns';

const elementMessages: Record<string, string[]> = {
  fire: ['热情与行动力将成为你的助力', '你的活力正被宇宙点燃', '勇敢展现你的热情本色'],
  water: ['内心的情感将指引你前行', '温柔的力量正在觉醒', '倾听内心深处的声音'],
  air: ['清晰的思路将助你突破', '智慧与沟通是今日关键词', '保持开放的思维与好奇心'],
  earth: ['脚踏实地将带来收获', '稳定与耐心是成功的基石', '珍惜当下拥有的一切'],
  arcana: ['命运正在为你打开新的篇章', '宇宙的智慧将照耀你的道路', '重要的转变即将发生'],
};

const dailyMessages: Record<string, string[]> = {
  love: ['用心感受身边的温暖', '给予与接受同样重要', '温柔对待自己与他人'],
  career: ['保持专注，机会就在前方', '相信自己的判断与能力', '与他人携手共进'],
  wealth: ['理性规划，稳健前行', '珍惜每一份收获', '慷慨分享带来更多喜悦'],
  health: ['照顾好身体，滋养心灵', '适度休息让能量更充沛', '保持积极乐观的心态'],
};

const cautionMessages: Record<string, string[]> = {
  fire: ['注意避免急躁冲动', '保持适度的耐心', '给情绪一些缓冲空间'],
  water: ['学会设定界限保护自己', '不过度沉溺于情绪', '理性与感性的平衡'],
  air: ['避免过度思虑消耗精力', '行动比空想更重要', '适时放下，享受当下'],
  earth: ['不要过于固执保守', '尝试接受新的可能性', '给自己一些弹性空间'],
  arcana: ['顺应变化，顺其自然', '相信直觉的指引', '保持内心的平静'],
};

export const generateInterpretation = (card: TarotCard, zodiac: ZodiacSign): string => {
  const cardElement = card.element;
  
  const elementMsgList = elementMessages[cardElement];
  const elementMsg = elementMsgList[Math.floor(Math.random() * elementMsgList.length)];
  
  const topics = Object.keys(dailyMessages);
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const randomMessage = dailyMessages[randomTopic][Math.floor(Math.random() * dailyMessages[randomTopic].length)];
  
  const keyword = card.keywords[Math.floor(Math.random() * card.keywords.length)];
  
  const cautionList = cautionMessages[cardElement];
  const cautionMsg = cautionList[Math.floor(Math.random() * cautionList.length)];
  
  let interpretation = `${elementMsg}。${card.name}象征${keyword}，${card.interpretation}。${randomMessage}。${cautionMsg}。`;
  
  if (interpretation.length > 200) {
    interpretation = interpretation.substring(0, 197) + '...';
  }

  return interpretation;
};