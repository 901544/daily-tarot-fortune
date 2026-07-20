import { ZodiacSign } from '../data/zodiacSigns';

const fireVinePaths = `
  <defs>
    <linearGradient id="fireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D4AF37" />
      <stop offset="50%" stopColor="#F4D03F" />
      <stop offset="100%" stopColor="#FF8C00" />
    </linearGradient>
  </defs>
  <path d="M0,25 Q15,5 35,15 Q55,25 75,10 Q95,0 112,20 Q110,40 95,45 Q75,50 60,40 Q40,30 20,40 Q5,45 0,30" fill="none" stroke="url(#fireGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M0,70 Q15,50 35,60 Q55,70 75,55 Q95,40 112,65 Q110,85 95,80 Q75,75 60,85 Q40,95 20,85 Q5,80 0,65" fill="none" stroke="url(#fireGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M0,115 Q15,95 35,105 Q55,115 75,100 Q95,85 112,110 Q110,130 95,125 Q75,120 60,130 Q40,140 20,130 Q5,125 0,110" fill="none" stroke="url(#fireGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  <polygon points="15,18 20,5 25,18" fill="url(#fireGrad)" opacity="0.6"/>
  <polygon points="55,20 60,7 65,20" fill="url(#fireGrad)" opacity="0.6"/>
  <polygon points="95,22 100,9 105,22" fill="url(#fireGrad)" opacity="0.6"/>
  <polygon points="15,68 20,55 25,68" fill="url(#fireGrad)" opacity="0.6"/>
  <polygon points="55,70 60,57 65,70" fill="url(#fireGrad)" opacity="0.6"/>
  <polygon points="95,72 100,59 105,72" fill="url(#fireGrad)" opacity="0.6"/>
`;

const earthVinePaths = `
  <defs>
    <linearGradient id="earthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D4AF37" />
      <stop offset="50%" stopColor="#F4D03F" />
      <stop offset="100%" stopColor="#B8860B" />
    </linearGradient>
  </defs>
  <path d="M0,20 C15,10 35,15 55,10 C75,5 95,10 112,20" fill="none" stroke="url(#earthGrad)" strokeWidth="1.5"/>
  <path d="M0,60 C15,50 35,55 55,50 C75,45 95,50 112,60" fill="none" stroke="url(#earthGrad)" strokeWidth="1.5"/>
  <path d="M0,100 C15,90 35,95 55,90 C75,85 95,90 112,100" fill="none" stroke="url(#earthGrad)" strokeWidth="1.5"/>
  <ellipse cx="20" cy="12" rx="8" ry="5" fill="url(#earthGrad)" opacity="0.5" transform="rotate(-30 20 12)"/>
  <ellipse cx="60" cy="10" rx="8" ry="5" fill="url(#earthGrad)" opacity="0.5" transform="rotate(10 60 10)"/>
  <ellipse cx="100" cy="12" rx="8" ry="5" fill="url(#earthGrad)" opacity="0.5" transform="rotate(-20 100 12)"/>
  <ellipse cx="20" cy="52" rx="8" ry="5" fill="url(#earthGrad)" opacity="0.5" transform="rotate(20 20 52)"/>
  <ellipse cx="60" cy="50" rx="8" ry="5" fill="url(#earthGrad)" opacity="0.5" transform="rotate(-10 60 50)"/>
  <ellipse cx="100" cy="52" rx="8" ry="5" fill="url(#earthGrad)" opacity="0.5" transform="rotate(30 100 52)"/>
  <circle cx="30" cy="90" r="4" fill="url(#earthGrad)" opacity="0.6"/>
  <circle cx="70" cy="88" r="4" fill="url(#earthGrad)" opacity="0.6"/>
  <circle cx="105" cy="90" r="4" fill="url(#earthGrad)" opacity="0.6"/>
`;

const airVinePaths = `
  <defs>
    <linearGradient id="airGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D4AF37" />
      <stop offset="50%" stopColor="#F4D03F" />
      <stop offset="100%" stopColor="#C0C0C0" />
    </linearGradient>
  </defs>
  <path d="M0,25 Q20,5 40,20 Q60,35 80,20 Q100,5 112,25" fill="none" stroke="url(#airGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M0,65 Q20,45 40,60 Q60,75 80,60 Q100,45 112,65" fill="none" stroke="url(#airGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M0,105 Q20,85 40,100 Q60,115 80,100 Q100,85 112,105" fill="none" stroke="url(#airGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M25,25 L20,15 L28,18 L23,8 L30,18 L25,25" fill="url(#airGrad)" opacity="0.4"/>
  <path d="M65,25 L60,15 L68,18 L63,8 L70,18 L65,25" fill="url(#airGrad)" opacity="0.4"/>
  <path d="M105,25 L100,15 L108,18 L103,8 L110,18 L105,25" fill="url(#airGrad)" opacity="0.4"/>
  <path d="M25,65 L20,55 L28,58 L23,48 L30,58 L25,65" fill="url(#airGrad)" opacity="0.4"/>
  <path d="M65,65 L60,55 L68,58 L63,48 L70,58 L65,65" fill="url(#airGrad)" opacity="0.4"/>
  <path d="M105,65 L100,55 L108,58 L103,48 L110,58 L105,65" fill="url(#airGrad)" opacity="0.4"/>
`;

const waterVinePaths = `
  <defs>
    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#D4AF37" />
      <stop offset="50%" stopColor="#F4D03F" />
      <stop offset="100%" stopColor="#4169E1" />
    </linearGradient>
  </defs>
  <path d="M0,20 Q10,10 20,15 Q30,20 40,15 Q50,10 60,15 Q70,20 80,15 Q90,10 100,15 Q110,20 112,25" fill="none" stroke="url(#waterGrad)" strokeWidth="1.5"/>
  <path d="M0,60 Q10,50 20,55 Q30,60 40,55 Q50,50 60,55 Q70,60 80,55 Q90,50 100,55 Q110,60 112,65" fill="none" stroke="url(#waterGrad)" strokeWidth="1.5"/>
  <path d="M0,100 Q10,90 20,95 Q30,100 40,95 Q50,90 60,95 Q70,100 80,95 Q90,90 100,95 Q110,100 112,105" fill="none" stroke="url(#waterGrad)" strokeWidth="1.5"/>
  <path d="M0,35 Q15,30 25,35 Q35,40 45,35 Q55,30 65,35 Q75,40 85,35 Q95,30 105,35 Q112,38 112,40" fill="none" stroke="url(#waterGrad)" strokeWidth="1"/>
  <path d="M0,75 Q15,70 25,75 Q35,80 45,75 Q55,70 65,75 Q75,80 85,75 Q95,70 105,75 Q112,78 112,80" fill="none" stroke="url(#waterGrad)" strokeWidth="1"/>
  <path d="M0,115 Q15,110 25,115 Q35,120 45,115 Q55,110 65,115 Q75,120 85,115 Q95,110 105,115 Q112,118 112,120" fill="none" stroke="url(#waterGrad)" strokeWidth="1"/>
  <circle cx="15" cy="22" r="3" fill="url(#waterGrad)" opacity="0.5"/>
  <circle cx="55" cy="20" r="3" fill="url(#waterGrad)" opacity="0.5"/>
  <circle cx="95" cy="22" r="3" fill="url(#waterGrad)" opacity="0.5"/>
  <circle cx="15" cy="62" r="3" fill="url(#waterGrad)" opacity="0.5"/>
  <circle cx="55" cy="60" r="3" fill="url(#waterGrad)" opacity="0.5"/>
  <circle cx="95" cy="62" r="3" fill="url(#waterGrad)" opacity="0.5"/>
`;

const vineMap: Record<string, string> = {
  aries: fireVinePaths,
  leo: fireVinePaths,
  sagittarius: fireVinePaths,
  taurus: earthVinePaths,
  virgo: earthVinePaths,
  capricorn: earthVinePaths,
  gemini: airVinePaths,
  libra: airVinePaths,
  aquarius: airVinePaths,
  cancer: waterVinePaths,
  scorpio: waterVinePaths,
  pisces: waterVinePaths,
};

export const getZodiacVineSvg = (zodiac: ZodiacSign): string => {
  return vineMap[zodiac.id] || fireVinePaths;
};

export const getZodiacElementColor = (element: string): string => {
  const colorMap: Record<string, string> = {
    fire: '#FF8C00',
    water: '#4169E1',
    air: '#C0C0C0',
    earth: '#B8860B',
  };
  return colorMap[element] || '#D4AF37';
};