import { ZodiacSign } from '../data/zodiacSigns';

interface Star {
  x: number;
  y: number;
  size: number;
}

interface Constellation {
  stars: Star[];
  lines: number[][];
}

const constellations: Record<string, Constellation> = {
  aries: {
    stars: [
      { x: 30, y: 85, size: 2 },
      { x: 45, y: 55, size: 2.5 },
      { x: 55, y: 65, size: 1.5 },
      { x: 65, y: 45, size: 2 },
      { x: 75, y: 75, size: 2 },
      { x: 85, y: 55, size: 1.5 },
      { x: 50, y: 80, size: 1.5 },
      { x: 40, y: 70, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [0, 6], [6, 7]],
  },
  taurus: {
    stars: [
      { x: 20, y: 70, size: 2 },
      { x: 40, y: 50, size: 2 },
      { x: 55, y: 60, size: 2.5 },
      { x: 70, y: 55, size: 2 },
      { x: 85, y: 65, size: 1.5 },
      { x: 60, y: 80, size: 1.5 },
      { x: 75, y: 85, size: 2 },
      { x: 50, y: 90, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [5, 7]],
  },
  gemini: {
    stars: [
      { x: 25, y: 60, size: 2 },
      { x: 35, y: 50, size: 2 },
      { x: 50, y: 55, size: 2.5 },
      { x: 65, y: 50, size: 2 },
      { x: 75, y: 60, size: 2 },
      { x: 30, y: 75, size: 1.5 },
      { x: 45, y: 70, size: 1.5 },
      { x: 55, y: 75, size: 1.5 },
      { x: 70, y: 70, size: 1.5 },
      { x: 40, y: 85, size: 1.5 },
      { x: 60, y: 85, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [8, 10]],
  },
  cancer: {
    stars: [
      { x: 35, y: 50, size: 2 },
      { x: 45, y: 60, size: 2.5 },
      { x: 55, y: 55, size: 1.5 },
      { x: 60, y: 70, size: 2 },
      { x: 40, y: 85, size: 1.5 },
      { x: 50, y: 95, size: 2 },
      { x: 30, y: 70, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 5], [5, 4], [4, 6], [6, 1]],
  },
  leo: {
    stars: [
      { x: 25, y: 75, size: 2 },
      { x: 40, y: 60, size: 1.5 },
      { x: 55, y: 55, size: 2.5 },
      { x: 70, y: 60, size: 1.5 },
      { x: 75, y: 75, size: 2 },
      { x: 50, y: 70, size: 1.5 },
      { x: 35, y: 85, size: 1.5 },
      { x: 65, y: 85, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [5, 7]],
  },
  virgo: {
    stars: [
      { x: 20, y: 70, size: 1.5 },
      { x: 35, y: 65, size: 2 },
      { x: 45, y: 55, size: 2.5 },
      { x: 55, y: 65, size: 1.5 },
      { x: 65, y: 55, size: 2 },
      { x: 75, y: 60, size: 1.5 },
      { x: 50, y: 80, size: 1.5 },
      { x: 40, y: 90, size: 1.5 },
      { x: 60, y: 90, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [6, 7], [6, 8]],
  },
  libra: {
    stars: [
      { x: 20, y: 75, size: 2 },
      { x: 35, y: 55, size: 2 },
      { x: 50, y: 60, size: 2.5 },
      { x: 65, y: 55, size: 2 },
      { x: 80, y: 75, size: 2 },
      { x: 40, y: 85, size: 1.5 },
      { x: 60, y: 85, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [2, 6], [5, 6]],
  },
  scorpio: {
    stars: [
      { x: 25, y: 80, size: 2 },
      { x: 35, y: 70, size: 1.5 },
      { x: 45, y: 65, size: 2.5 },
      { x: 55, y: 70, size: 1.5 },
      { x: 65, y: 75, size: 2 },
      { x: 75, y: 65, size: 1.5 },
      { x: 85, y: 70, size: 2 },
      { x: 30, y: 90, size: 1.5 },
      { x: 40, y: 95, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 7], [7, 8]],
  },
  sagittarius: {
    stars: [
      { x: 25, y: 70, size: 2 },
      { x: 40, y: 55, size: 1.5 },
      { x: 50, y: 65, size: 2.5 },
      { x: 60, y: 50, size: 1.5 },
      { x: 70, y: 60, size: 2 },
      { x: 75, y: 75, size: 1.5 },
      { x: 35, y: 80, size: 1.5 },
      { x: 55, y: 85, size: 1.5 },
      { x: 65, y: 80, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [6, 7], [7, 8]],
  },
  capricorn: {
    stars: [
      { x: 20, y: 85, size: 1.5 },
      { x: 35, y: 70, size: 2 },
      { x: 50, y: 60, size: 2.5 },
      { x: 65, y: 70, size: 2 },
      { x: 80, y: 55, size: 1.5 },
      { x: 70, y: 85, size: 1.5 },
      { x: 55, y: 90, size: 1.5 },
      { x: 40, y: 85, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7], [7, 1]],
  },
  aquarius: {
    stars: [
      { x: 20, y: 65, size: 2 },
      { x: 35, y: 50, size: 1.5 },
      { x: 45, y: 60, size: 2.5 },
      { x: 55, y: 45, size: 1.5 },
      { x: 65, y: 55, size: 2 },
      { x: 75, y: 70, size: 1.5 },
      { x: 30, y: 75, size: 1.5 },
      { x: 50, y: 75, size: 1.5 },
      { x: 40, y: 85, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8]],
  },
  pisces: {
    stars: [
      { x: 25, y: 70, size: 2 },
      { x: 35, y: 55, size: 1.5 },
      { x: 45, y: 65, size: 2.5 },
      { x: 55, y: 50, size: 1.5 },
      { x: 65, y: 60, size: 2 },
      { x: 75, y: 75, size: 1.5 },
      { x: 30, y: 80, size: 1.5 },
      { x: 50, y: 80, size: 1.5 },
      { x: 60, y: 85, size: 1.5 },
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [6, 7], [7, 8]],
  },
};

export const getZodiacStarMap = (zodiac: ZodiacSign): string => {
  const constellation = constellations[zodiac.id];
  if (!constellation) return '';

  const starsSvg = constellation.stars
    .map((star) => {
      return `
        <circle cx="${star.x}" cy="${star.y}" r="${star.size}" fill="#C0C0C0" opacity="0.5"/>
        <circle cx="${star.x}" cy="${star.y}" r="${star.size * 2}" fill="#C0C0C0" opacity="0.15"/>
      `;
    })
    .join('');

  const linesSvg = constellation.lines
    .map((line) => {
      const start = constellation.stars[line[0]];
      const end = constellation.stars[line[1]];
      return `<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="#C0C0C0" stroke-width="0.5" opacity="0.5"/>`;
    })
    .join('');

  return `
    <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      ${linesSvg}
      ${starsSvg}
    </svg>
  `;
};