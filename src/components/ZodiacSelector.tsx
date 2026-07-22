import { ZodiacCard } from './ZodiacCard';
import { zodiacSigns } from '../data/zodiacSigns';
import { useTarotStore } from '../stores/tarotStore';

export const ZodiacSelector = () => {
  const { selectedZodiac, setZodiac } = useTarotStore();

  return (
    <div className="mb-12">
      <h2 
        className="text-2xl font-bold text-center mb-8"
        style={{
          fontFamily: 'Great Vibes, ShangTuDongGuan, cursive',
          color: 'var(--text-primary)',
          textShadow: 'var(--title-shadow)',
        }}
      >
        选择你的星座
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {zodiacSigns.map((zodiac) => (
          <ZodiacCard
            key={zodiac.id}
            zodiac={zodiac}
            isSelected={selectedZodiac?.id === zodiac.id}
            onClick={() => setZodiac(zodiac)}
          />
        ))}
      </div>
    </div>
  );
};