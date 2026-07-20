export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  dateRange: string;
  element: 'fire' | 'water' | 'air' | 'earth';
  traits: string[];
}

export const zodiacSigns: ZodiacSign[] = [
  { id: 'aries', name: '白羊座', symbol: '♈', dateRange: '3.21-4.19', element: 'fire', traits: ['热情', '勇敢', '冲动'] },
  { id: 'taurus', name: '金牛座', symbol: '♉', dateRange: '4.20-5.20', element: 'earth', traits: ['稳重', '务实', '固执'] },
  { id: 'gemini', name: '双子座', symbol: '♊', dateRange: '5.21-6.21', element: 'air', traits: ['聪明', '灵活', '善变'] },
  { id: 'cancer', name: '巨蟹座', symbol: '♋', dateRange: '6.22-7.22', element: 'water', traits: ['温柔', '敏感', '顾家'] },
  { id: 'leo', name: '狮子座', symbol: '♌', dateRange: '7.23-8.22', element: 'fire', traits: ['自信', '慷慨', '骄傲'] },
  { id: 'virgo', name: '处女座', symbol: '♍', dateRange: '8.23-9.22', element: 'earth', traits: ['细致', '理性', '挑剔'] },
  { id: 'libra', name: '天秤座', symbol: '♎', dateRange: '9.23-10.23', element: 'air', traits: ['优雅', '公正', '犹豫'] },
  { id: 'scorpio', name: '天蝎座', symbol: '♏', dateRange: '10.24-11.22', element: 'water', traits: ['神秘', '执着', '记仇'] },
  { id: 'sagittarius', name: '射手座', symbol: '♐', dateRange: '11.23-12.21', element: 'fire', traits: ['乐观', '自由', '粗心'] },
  { id: 'capricorn', name: '摩羯座', symbol: '♑', dateRange: '12.22-1.19', element: 'earth', traits: ['踏实', '有野心', '冷漠'] },
  { id: 'aquarius', name: '水瓶座', symbol: '♒', dateRange: '1.20-2.18', element: 'air', traits: ['创新', '独立', '叛逆'] },
  { id: 'pisces', name: '双鱼座', symbol: '♓', dateRange: '2.19-3.20', element: 'water', traits: ['浪漫', '善良', '梦幻'] },
];

export const getZodiacById = (id: string): ZodiacSign | undefined => {
  return zodiacSigns.find(sign => sign.id === id);
};
