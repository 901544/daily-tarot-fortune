import { create } from 'zustand';
import { TarotCard } from '../data/tarotCards';
import { ZodiacSign } from '../data/zodiacSigns';

interface TarotStore {
  selectedZodiac: ZodiacSign | null;
  drawnCard: TarotCard | null;
  isReversed: boolean;
  interpretation: string;
  isDrawing: boolean;
  hasDrawn: boolean;
  setZodiac: (zodiac: ZodiacSign) => void;
  drawCard: (card: TarotCard, isReversed: boolean, interpretation: string) => void;
  startDrawing: () => void;
  reset: () => void;
}

export const useTarotStore = create<TarotStore>((set) => ({
  selectedZodiac: null,
  drawnCard: null,
  isReversed: false,
  interpretation: '',
  isDrawing: false,
  hasDrawn: false,
  setZodiac: (zodiac) => set({ selectedZodiac: zodiac }),
  drawCard: (card, isReversed, interpretation) => set({ 
    drawnCard: card, 
    isReversed,
    interpretation, 
    isDrawing: false, 
    hasDrawn: true 
  }),
  startDrawing: () => set({ isDrawing: true }),
  reset: () => set({ 
    drawnCard: null, 
    isReversed: false,
    interpretation: '', 
    isDrawing: false, 
    hasDrawn: false 
  }),
}));
