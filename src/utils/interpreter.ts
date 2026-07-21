import { TarotCard } from '../data/tarotCards';
import { ZodiacSign } from '../data/zodiacSigns';

const elementMessages: Record<string, string[]> = {
  fire: ['热情与行动力将成为你的助力，今天适合主动出击', '你的活力正被宇宙点燃，勇敢追求心中所想', '勇敢展现你的热情本色，让光芒照亮前行的道路'],
  water: ['内心的情感将指引你前行，倾听直觉的声音', '温柔的力量正在觉醒，用爱与关怀对待自己', '倾听内心深处的声音，那里藏着最真实的答案'],
  air: ['清晰的思路将助你突破，今日适合思考与计划', '智慧与沟通是今日关键词，善于表达你的想法', '保持开放的思维与好奇心，新的机遇正在等待'],
  earth: ['脚踏实地将带来收获，耐心耕耘必有回报', '稳定与耐心是成功的基石，一步一个脚印', '珍惜当下拥有的一切，感恩生活中的每一份美好'],
  arcana: ['命运正在为你打开新的篇章，重要时刻即将到来', '宇宙的智慧将照耀你的道路，相信命运的指引', '重要的转变即将发生，保持内心的平静与坚定'],
};

const reversedElementMessages: Record<string, string[]> = {
  fire: ['热情需要收敛，行动前多思考，避免冲动行事', '冲动可能带来风险，保持冷静，三思而后行', '能量需要引导而非释放，学会控制与等待'],
  water: ['情感需要梳理，避免过度沉溺，保持理性', '内心的声音需要更加清晰，不要被情绪左右', '学会保护自己的情感边界，给自己一些空间'],
  air: ['思绪需要整理，避免混乱，集中注意力', '沟通需要更加谨慎，言多必失', '过于理性可能忽略直觉，平衡思维与感受'],
  earth: ['需要更加灵活，不要过于固执，接受变化', '踏实的同时也要保持开放，不要固步自封', '关注物质的同时也要关注精神，保持平衡'],
  arcana: ['命运的转变需要谨慎对待，不要急于行动', '宇宙的信号需要仔细解读，不要妄下判断', '转变的时机尚未成熟，耐心等待合适的时刻'],
};

const topicMessages: Record<string, { title: string; content: string[] }> = {
  love: {
    title: '爱情',
    content: [
      '用心感受身边的温暖，爱是相互的给予与陪伴',
      '给予与接受同样重要，学会表达你的爱意',
      '温柔对待自己与他人，爱的能量会回流',
      '敞开心扉，让爱自然流动，不要害怕受伤',
      '珍惜眼前人，每一个相遇都是缘分的安排',
      '保持真诚与善意，爱情需要用心经营',
      '给自己和对方一些空间，距离产生美感',
      '相信直觉，它会告诉你正确的方向',
    ],
  },
  career: {
    title: '事业',
    content: [
      '保持专注，机会就在前方，准备好迎接挑战',
      '相信自己的判断与能力，你比想象中更强大',
      '与他人携手共进，团队合作创造更大价值',
      '主动争取，机会不会自己找上门来',
      '保持学习的心态，不断提升自己的能力',
      '耐心等待，成功需要时间的积累',
      '设定明确的目标，一步一步实现梦想',
      '保持专业态度，细节决定成败',
    ],
  },
  wealth: {
    title: '财富',
    content: [
      '理性规划，稳健前行，不要盲目跟风',
      '珍惜每一份收获，积少成多，聚沙成塔',
      '慷慨分享带来更多喜悦，施比受更有福',
      '学会理财，让钱为你工作',
      '把握机会，但不要冒险投机',
      '量入为出，保持财务的平衡',
      '投资自己是最好的投资',
      '保持积极的财富心态，吸引更多好运',
    ],
  },
  health: {
    title: '健康',
    content: [
      '照顾好身体，滋养心灵，健康是一切的基础',
      '适度休息让能量更充沛，不要过度消耗自己',
      '保持积极乐观的心态，笑口常开',
      '规律作息，饮食均衡，关爱自己的身体',
      '适度运动，让身体充满活力',
      '学会放松，减轻压力，享受生活',
      '关注心理健康，及时调整情绪',
      '保持良好的生活习惯，预防胜于治疗',
    ],
  },
};

const cautionMessages: Record<string, string[]> = {
  fire: ['注意避免急躁冲动，给情绪一些缓冲空间', '保持适度的耐心，欲速则不达', '不要因为一时冲动而做出后悔的决定'],
  water: ['学会设定界限保护自己，不过度沉溺于情绪', '理性与感性的平衡是关键，不要被情绪淹没', '照顾好自己的情绪健康，及时疏导'],
  air: ['避免过度思虑消耗精力，行动比空想更重要', '适时放下，享受当下，不要想太多', '保持专注，不要被琐碎的思绪干扰'],
  earth: ['不要过于固执保守，尝试接受新的可能性', '给自己一些弹性空间，不要过于紧绷', '保持开放的心态，接受变化带来的机会'],
  arcana: ['顺应变化，顺其自然，不要强行抗拒', '相信直觉的指引，但也要理性思考', '保持内心的平静，以不变应万变'],
};

export const generateInterpretation = (card: TarotCard, zodiac: ZodiacSign, isReversed: boolean): string => {
  const cardElement = card.element;
  
  const elementMsgList = isReversed ? reversedElementMessages[cardElement] : elementMessages[cardElement];
  const elementMsg = elementMsgList[Math.floor(Math.random() * elementMsgList.length)];
  
  const topics = Object.keys(topicMessages);
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const topicData = topicMessages[randomTopic];
  const randomMessage = topicData.content[Math.floor(Math.random() * topicData.content.length)];
  
  const keyword = card.keywords[Math.floor(Math.random() * card.keywords.length)];
  
  const cautionList = cautionMessages[cardElement];
  const cautionMsg = cautionList[Math.floor(Math.random() * cautionList.length)];
  
  const cardInterpretation = isReversed ? card.reversedInterpretation : card.interpretation;
  const reversedText = isReversed ? '（逆位）' : '';
  
  let interpretation = `${elementMsg}。${card.name}${reversedText}象征${keyword}，${cardInterpretation}。【${topicData.title}方面】${randomMessage}。${cautionMsg}。`;
  
  if (interpretation.length > 300) {
    interpretation = interpretation.substring(0, 297) + '...';
  }

  return interpretation;
};
