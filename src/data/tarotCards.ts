export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  type: 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';
  element: 'fire' | 'water' | 'air' | 'earth' | 'arcana';
  color: string;
  number?: number;
  keywords: string[];
  interpretation: string;
}

export const tarotCards: TarotCard[] = [
  { id: 1, name: '愚者', nameEn: 'The Fool', type: 'major', element: 'arcana', color: '#FFD700', keywords: ['新开始', '冒险', '纯真'], interpretation: '新的开始与无限可能，勇敢迈出第一步。' },
  { id: 2, name: '魔术师', nameEn: 'The Magician', type: 'major', element: 'arcana', color: '#FF6B6B', keywords: ['创造力', '技能', '意志'], interpretation: '运用你的能力和资源，创造想要的现实。' },
  { id: 3, name: '女祭司', nameEn: 'The High Priestess', type: 'major', element: 'arcana', color: '#9B59B6', keywords: ['直觉', '智慧', '神秘'], interpretation: '倾听内心的声音，探索深层的智慧。' },
  { id: 4, name: '皇后', nameEn: 'The Empress', type: 'major', element: 'arcana', color: '#E91E63', keywords: ['丰饶', '母性', '美'], interpretation: '享受生活的丰盈，展现你的魅力与创造力。' },
  { id: 5, name: '皇帝', nameEn: 'The Emperor', type: 'major', element: 'arcana', color: '#2196F3', keywords: ['权威', '稳定', '父亲'], interpretation: '建立秩序和稳定，展现你的领导能力。' },
  { id: 6, name: '教皇', nameEn: 'The Hierophant', type: 'major', element: 'arcana', color: '#00BCD4', keywords: ['传统', '信仰', '教导'], interpretation: '遵循传统智慧，寻求导师的指引。' },
  { id: 7, name: '恋人', nameEn: 'The Lovers', type: 'major', element: 'arcana', color: '#FF4081', keywords: ['爱情', '选择', '和谐'], interpretation: '重要的选择时刻，倾听内心的真爱之声。' },
  { id: 8, name: '战车', nameEn: 'The Chariot', type: 'major', element: 'arcana', color: '#FF9800', keywords: ['胜利', '意志', '前进'], interpretation: '坚定信念，克服障碍，驶向成功。' },
  { id: 9, name: '力量', nameEn: 'Strength', type: 'major', element: 'arcana', color: '#8BC34A', keywords: ['勇气', '耐心', '内在力量'], interpretation: '展现内在的勇气和温柔的力量。' },
  { id: 10, name: '隐士', nameEn: 'The Hermit', type: 'major', element: 'arcana', color: '#795548', keywords: ['独处', '内省', '指引'], interpretation: '需要独处反思，寻找内心的指引。' },
  { id: 11, name: '命运之轮', nameEn: 'Wheel of Fortune', type: 'major', element: 'arcana', color: '#FF5722', keywords: ['转变', '命运', '周期'], interpretation: '命运的转折点，顺应自然的循环。' },
  { id: 12, name: '正义', nameEn: 'Justice', type: 'major', element: 'arcana', color: '#607D8B', keywords: ['公平', '真理', '法律'], interpretation: '公正的时刻，真相终将显现。' },
  { id: 13, name: '倒吊人', nameEn: 'The Hanged Man', type: 'major', element: 'arcana', color: '#9C27B0', keywords: ['牺牲', '等待', '新视角'], interpretation: '放下执念，以新的视角看待问题。' },
  { id: 14, name: '死神', nameEn: 'Death', type: 'major', element: 'arcana', color: '#333333', keywords: ['结束', '转变', '重生'], interpretation: '旧的结束是新的开始，拥抱转变。' },
  { id: 15, name: '节制', nameEn: 'Temperance', type: 'major', element: 'arcana', color: '#00E676', keywords: ['平衡', '耐心', '调和'], interpretation: '保持平衡与节制，循序渐进。' },
  { id: 16, name: '恶魔', nameEn: 'The Devil', type: 'major', element: 'arcana', color: '#E91E63', keywords: ['束缚', '诱惑', '阴影'], interpretation: '面对内心的恐惧和束缚，找回自由。' },
  { id: 17, name: '塔', nameEn: 'The Tower', type: 'major', element: 'arcana', color: '#F44336', keywords: ['突变', '崩塌', '觉醒'], interpretation: '突如其来的变化，摧毁旧有结构带来新生。' },
  { id: 18, name: '星星', nameEn: 'The Star', type: 'major', element: 'arcana', color: '#00BCD4', keywords: ['希望', '灵感', '疗愈'], interpretation: '充满希望的时刻，相信美好的未来。' },
  { id: 19, name: '月亮', nameEn: 'The Moon', type: 'major', element: 'arcana', color: '#607D8B', keywords: ['幻觉', '潜意识', '直觉'], interpretation: '探索潜意识，辨别幻象与真相。' },
  { id: 20, name: '太阳', nameEn: 'The Sun', type: 'major', element: 'arcana', color: '#FFEB3B', keywords: ['快乐', '成功', '活力'], interpretation: '光明与喜悦，成功就在眼前。' },
  { id: 21, name: '审判', nameEn: 'Judgement', type: 'major', element: 'arcana', color: '#FFC107', keywords: ['重生', '召唤', '觉醒'], interpretation: '觉醒的时刻，听从内心的召唤。' },
  { id: 22, name: '世界', nameEn: 'The World', type: 'major', element: 'arcana', color: '#3F51B5', keywords: ['完成', '整合', '旅程'], interpretation: '圆满的完成，新的旅程即将开始。' },
  { id: 23, name: '权杖Ace', nameEn: 'Ace of Wands', type: 'wands', element: 'fire', color: '#F44336', number: 1, keywords: ['创意', '热情', '新起点'], interpretation: '热情的新开始，充满创造力的火花。' },
  { id: 24, name: '权杖2', nameEn: 'Two of Wands', type: 'wands', element: 'fire', color: '#E53935', number: 2, keywords: ['远见', '规划', '掌控'], interpretation: '展望未来，制定计划，掌控全局。' },
  { id: 25, name: '权杖3', nameEn: 'Three of Wands', type: 'wands', element: 'fire', color: '#D32F2F', number: 3, keywords: ['远见', '扩张', '成功'], interpretation: '远见卓识，扩张版图，收获成功。' },
  { id: 26, name: '权杖4', nameEn: 'Four of Wands', type: 'wands', element: 'fire', color: '#C62828', number: 4, keywords: ['庆祝', '稳定', '和谐'], interpretation: '庆祝成功，享受稳定与和谐。' },
  { id: 27, name: '权杖5', nameEn: 'Five of Wands', type: 'wands', element: 'fire', color: '#B71C1C', number: 5, keywords: ['冲突', '竞争', '挑战'], interpretation: '面对竞争与冲突，保持冷静应对。' },
  { id: 28, name: '权杖6', nameEn: 'Six of Wands', type: 'wands', element: 'fire', color: '#FF5722', number: 6, keywords: ['胜利', '认可', '荣耀'], interpretation: '获得胜利与认可，享受荣耀时刻。' },
  { id: 29, name: '权杖7', nameEn: 'Seven of Wands', type: 'wands', element: 'fire', color: '#FF6F00', number: 7, keywords: ['防御', '坚持', '勇气'], interpretation: '坚持立场，勇敢防御挑战。' },
  { id: 30, name: '权杖8', nameEn: 'Eight of Wands', type: 'wands', element: 'fire', color: '#FF8F00', number: 8, keywords: ['快速行动', '消息', '进展'], interpretation: '快速行动，迎来好消息。' },
  { id: 31, name: '权杖9', nameEn: 'Nine of Wands', type: 'wands', element: 'fire', color: '#FFA000', number: 9, keywords: ['警惕', '准备', '勇气'], interpretation: '保持警惕，做好准备迎接挑战。' },
  { id: 32, name: '权杖10', nameEn: 'Ten of Wands', type: 'wands', element: 'fire', color: '#FFB300', number: 10, keywords: ['负担', '责任', '压力'], interpretation: '承担责任，但不要过度负担自己。' },
  { id: 33, name: '权杖侍从', nameEn: 'Page of Wands', type: 'wands', element: 'fire', color: '#FFC107', number: 11, keywords: ['好奇心', '热情', '新想法'], interpretation: '充满好奇心，探索新的可能性。' },
  { id: 34, name: '权杖骑士', nameEn: 'Knight of Wands', type: 'wands', element: 'fire', color: '#FFD54F', number: 12, keywords: ['行动力', '热情', '冒险'], interpretation: '充满行动力，勇敢追求目标。' },
  { id: 35, name: '权杖王后', nameEn: 'Queen of Wands', type: 'wands', element: 'fire', color: '#FFEB3B', number: 13, keywords: ['自信', '热情', '领导力'], interpretation: '展现自信与领导力，散发热情光芒。' },
  { id: 36, name: '权杖国王', nameEn: 'King of Wands', type: 'wands', element: 'fire', color: '#FFF176', number: 14, keywords: ['权威', '远见', '成功'], interpretation: '展现权威与远见，引领团队走向成功。' },
  { id: 37, name: '圣杯Ace', nameEn: 'Ace of Cups', type: 'cups', element: 'water', color: '#2196F3', number: 1, keywords: ['爱情', '情感', '新开始'], interpretation: '情感的新开始，爱与和谐的降临。' },
  { id: 38, name: '圣杯2', nameEn: 'Two of Cups', type: 'cups', element: 'water', color: '#1976D2', number: 2, keywords: ['合作', '爱情', '和谐'], interpretation: '建立深厚的情感连接，合作共赢。' },
  { id: 39, name: '圣杯3', nameEn: 'Three of Cups', type: 'cups', element: 'water', color: '#1565C0', number: 3, keywords: ['友谊', '庆祝', '喜悦'], interpretation: '与朋友共享喜悦，庆祝美好时刻。' },
  { id: 40, name: '圣杯4', nameEn: 'Four of Cups', type: 'cups', element: 'water', color: '#0D47A1', number: 4, keywords: ['不满', '反思', '选择'], interpretation: '反思现状，做出明智的选择。' },
  { id: 41, name: '圣杯5', nameEn: 'Five of Cups', type: 'cups', element: 'water', color: '#3F51B5', number: 5, keywords: ['失落', '悲伤', '接受'], interpretation: '面对失落，学会接受并继续前行。' },
  { id: 42, name: '圣杯6', nameEn: 'Six of Cups', type: 'cups', element: 'water', color: '#3949AB', number: 6, keywords: ['回忆', '关怀', '纯真'], interpretation: '珍惜美好回忆，传递温暖与关怀。' },
  { id: 43, name: '圣杯7', nameEn: 'Seven of Cups', type: 'cups', element: 'water', color: '#303F9F', number: 7, keywords: ['幻想', '选择', '欲望'], interpretation: '辨别幻想与现实，做出理性选择。' },
  { id: 44, name: '圣杯8', nameEn: 'Eight of Cups', type: 'cups', element: 'water', color: '#283593', number: 8, keywords: ['离开', '寻找', '成长'], interpretation: '勇于离开舒适区，寻找真正的成长。' },
  { id: 45, name: '圣杯9', nameEn: 'Nine of Cups', type: 'cups', element: 'water', color: '#1E88E5', number: 9, keywords: ['满足', '愿望', '成功'], interpretation: '愿望成真，享受满足与喜悦。' },
  { id: 46, name: '圣杯10', nameEn: 'Ten of Cups', type: 'cups', element: 'water', color: '#1565C0', number: 10, keywords: ['家庭', '幸福', '圆满'], interpretation: '家庭和睦，幸福美满的时刻。' },
  { id: 47, name: '圣杯侍从', nameEn: 'Page of Cups', type: 'cups', element: 'water', color: '#0288D1', number: 11, keywords: ['敏感', '创意', '直觉'], interpretation: '展现敏感与直觉，探索内心世界。' },
  { id: 48, name: '圣杯骑士', nameEn: 'Knight of Cups', type: 'cups', element: 'water', color: '#03A9F4', number: 12, keywords: ['浪漫', '情感', '追求'], interpretation: '浪漫的追求者，充满情感的表达。' },
  { id: 49, name: '圣杯王后', nameEn: 'Queen of Cups', type: 'cups', element: 'water', color: '#4FC3F7', number: 13, keywords: ['慈悲', '直觉', '智慧'], interpretation: '展现慈悲与智慧，倾听内心的声音。' },
  { id: 50, name: '圣杯国王', nameEn: 'King of Cups', type: 'cups', element: 'water', color: '#81D4FA', number: 14, keywords: ['理智', '情感', '平衡'], interpretation: '保持情感与理智的平衡，展现成熟魅力。' },
  { id: 51, name: '宝剑Ace', nameEn: 'Ace of Swords', type: 'swords', element: 'air', color: '#9C27B0', number: 1, keywords: ['真理', '思想', '清晰'], interpretation: '获得清晰的思路，揭示真相。' },
  { id: 52, name: '宝剑2', nameEn: 'Two of Swords', type: 'swords', element: 'air', color: '#7B1FA2', number: 2, keywords: ['犹豫', '平衡', '抉择'], interpretation: '面对艰难抉择，保持内心的平衡。' },
  { id: 53, name: '宝剑3', nameEn: 'Three of Swords', type: 'swords', element: 'air', color: '#6A1B9A', number: 3, keywords: ['心碎', '悲伤', '疗愈'], interpretation: '经历心碎，学会疗愈与成长。' },
  { id: 54, name: '宝剑4', nameEn: 'Four of Swords', type: 'swords', element: 'air', color: '#4A148C', number: 4, keywords: ['休息', '冥想', '恢复'], interpretation: '需要休息和冥想，恢复精力。' },
  { id: 55, name: '宝剑5', nameEn: 'Five of Swords', type: 'swords', element: 'air', color: '#4527A0', number: 5, keywords: ['冲突', '胜利', '代价'], interpretation: '赢得胜利但付出代价，反思冲突的意义。' },
  { id: 56, name: '宝剑6', nameEn: 'Six of Swords', type: 'swords', element: 'air', color: '#311B92', number: 6, keywords: ['过渡', '疗愈', '希望'], interpretation: '度过困难时期，迎接新的希望。' },
  { id: 57, name: '宝剑7', nameEn: 'Seven of Swords', type: 'swords', element: 'air', color: '#651FFF', number: 7, keywords: ['策略', '隐秘', '欺骗'], interpretation: '运用策略解决问题，但要保持诚信。' },
  { id: 58, name: '宝剑8', nameEn: 'Eight of Swords', type: 'swords', element: 'air', color: '#536DFE', number: 8, keywords: ['限制', '恐惧', '释放'], interpretation: '打破自我限制，释放内心的恐惧。' },
  { id: 59, name: '宝剑9', nameEn: 'Nine of Swords', type: 'swords', element: 'air', color: '#448AFF', number: 9, keywords: ['焦虑', '噩梦', '释放'], interpretation: '面对焦虑与恐惧，寻找释放的方法。' },
  { id: 60, name: '宝剑10', nameEn: 'Ten of Swords', type: 'swords', element: 'air', color: '#40C4FF', number: 10, keywords: ['痛苦', '结束', '新开始'], interpretation: '痛苦的结束，新的开始即将到来。' },
  { id: 61, name: '宝剑侍从', nameEn: 'Page of Swords', type: 'swords', element: 'air', color: '#80D8FF', number: 11, keywords: ['好奇心', '学习', '机智'], interpretation: '保持好奇心，积极学习新知识。' },
  { id: 62, name: '宝剑骑士', nameEn: 'Knight of Swords', type: 'swords', element: 'air', color: '#B3E5FC', number: 12, keywords: ['敏捷', '果断', '沟通'], interpretation: '思维敏捷，果断行动，善于沟通。' },
  { id: 63, name: '宝剑王后', nameEn: 'Queen of Swords', type: 'swords', element: 'air', color: '#E1F5FE', number: 13, keywords: ['理智', '独立', '智慧'], interpretation: '展现理智与独立，运用智慧解决问题。' },
  { id: 64, name: '宝剑国王', nameEn: 'King of Swords', type: 'swords', element: 'air', color: '#FFFFFF', number: 14, keywords: ['权威', '公正', '智慧'], interpretation: '展现权威与公正，运用智慧领导。' },
  { id: 65, name: '星币Ace', nameEn: 'Ace of Pentacles', type: 'pentacles', element: 'earth', color: '#4CAF50', number: 1, keywords: ['财富', '机会', '新开始'], interpretation: '财富与机会的新开始，脚踏实地。' },
  { id: 66, name: '星币2', nameEn: 'Two of Pentacles', type: 'pentacles', element: 'earth', color: '#388E3C', number: 2, keywords: ['平衡', '多重任务', '管理'], interpretation: '学会平衡，高效管理多重任务。' },
  { id: 67, name: '星币3', nameEn: 'Three of Pentacles', type: 'pentacles', element: 'earth', color: '#2E7D32', number: 3, keywords: ['合作', '技能', '团队'], interpretation: '与团队合作，发挥专业技能。' },
  { id: 68, name: '星币4', nameEn: 'Four of Pentacles', type: 'pentacles', element: 'earth', color: '#1B5E20', number: 4, keywords: ['保守', '安全', '占有'], interpretation: '保持谨慎，守护已有成果。' },
  { id: 69, name: '星币5', nameEn: 'Five of Pentacles', type: 'pentacles', element: 'earth', color: '#8BC34A', number: 5, keywords: ['匮乏', '担忧', '求助'], interpretation: '面对困难，不要害怕寻求帮助。' },
  { id: 70, name: '星币6', nameEn: 'Six of Pentacles', type: 'pentacles', element: 'earth', color: '#CDDC39', number: 6, keywords: ['给予', '接受', '平衡'], interpretation: '学会给予与接受，保持平衡。' },
  { id: 71, name: '星币7', nameEn: 'Seven of Pentacles', type: 'pentacles', element: 'earth', color: '#C0CA33', number: 7, keywords: ['评估', '反思', '进展'], interpretation: '评估进展，反思下一步行动。' },
  { id: 72, name: '星币8', nameEn: 'Eight of Pentacles', type: 'pentacles', element: 'earth', color: '#AFB42B', number: 8, keywords: ['专注', '技艺', '精进'], interpretation: '专注于技艺，不断精进。' },
  { id: 73, name: '星币9', nameEn: 'Nine of Pentacles', type: 'pentacles', element: 'earth', color: '#9E9D24', number: 9, keywords: ['富足', '独立', '享受'], interpretation: '享受富足的成果，保持独立。' },
  { id: 74, name: '星币10', nameEn: 'Ten of Pentacles', type: 'pentacles', element: 'earth', color: '#827717', number: 10, keywords: ['传承', '财富', '家庭'], interpretation: '建立财富传承，家庭和睦。' },
  { id: 75, name: '星币侍从', nameEn: 'Page of Pentacles', type: 'pentacles', element: 'earth', color: '#689F38', number: 11, keywords: ['勤奋', '学习', '耐心'], interpretation: '勤奋学习，保持耐心。' },
  { id: 76, name: '星币骑士', nameEn: 'Knight of Pentacles', type: 'pentacles', element: 'earth', color: '#558B2F', number: 12, keywords: ['可靠', '勤奋', '稳定'], interpretation: '可靠勤奋，追求稳定与成功。' },
  { id: 77, name: '星币王后', nameEn: 'Queen of Pentacles', type: 'pentacles', element: 'earth', color: '#33691E', number: 13, keywords: ['丰饶', '关怀', '务实'], interpretation: '展现丰饶与关怀，务实解决问题。' },
  { id: 78, name: '星币国王', nameEn: 'King of Pentacles', type: 'pentacles', element: 'earth', color: '#1B5E20', number: 14, keywords: ['成功', '权威', '慷慨'], interpretation: '获得成功与权威，慷慨分享。' },
];

export const getCardById = (id: number): TarotCard | undefined => {
  return tarotCards.find(card => card.id === id);
};

export const drawRandomCard = (): TarotCard => {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[randomIndex];
};
