import { create } from 'zustand';
import { TarotCard } from '../data/tarotCards';
import { ZodiacSign } from '../data/zodiacSigns';

interface TarotStore {
  selectedZodiac: ZodiacSign | null;
  drawnCard: TarotCard | null;
  interpretation: string;
  isDrawing: boolean;
  hasDrawn: boolean;
  setZodiac: (zodiac: ZodiacSign) => void;
  drawCard: (card: TarotCard, interpretation: string) => void;
  startDrawing: () => void;
  reset: () => void;
}

export const useTarotStore = create<TarotStore>((set) => ({
  selectedZodiac: null,
  drawnCard: null,
  interpretation: '',
  isDrawing: false,
  hasDrawn: false,
  setZodiac: (zodiac) => set({ selectedZodiac: zodiac }),
  drawCard: (card, interpretation) => set({ 
    drawnCard: card, 
    interpretation, 
    isDrawing: false, 
    hasDrawn: true 
  }),
  startDrawing: () => set({ isDrawing: true }),
  reset: () => set({ 
    drawnCard: null, 
    interpretation: '', 
    isDrawing: false, 
    hasDrawn: false 
  }),
}));
