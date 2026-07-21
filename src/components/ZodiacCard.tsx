import { motion } from 'framer-motion';
import { ZodiacSign } from '../data/zodiacSigns';
import { getZodiacStarMap } from '../utils/zodiacStarMaps';

interface ZodiacCardProps {
  zodiac: ZodiacSign;
  isSelected: boolean;
  onClick: () => void;
}

export const ZodiacCard = ({ zodiac, isSelected, onClick }: ZodiacCardProps) => {
  const starMapSvg = getZodiacStarMap(zodiac);
  const extraOffsetZodiacs = ['leo', 'virgo', 'scorpio', 'sagittarius', 'capricorn'];
  const extraExtraOffsetZodiacs = ['cancer', 'scorpio'];
  let translateYOffset = -10;
  if (extraOffsetZodiacs.includes(zodiac.id)) {
    translateYOffset = -13;
  }
  if (extraExtraOffsetZodiacs.includes(zodiac.id)) {
    translateYOffset -= 4;
  }

  return (
    <motion.div
      className={`relative w-28 h-36 cursor-pointer rounded-xl transition-all duration-300 ${
        isSelected ? 'ring-2 ring-purple-400' : ''
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -5 }}
      animate={{
        boxShadow: isSelected 
          ? '0 0 30px rgba(147, 51, 234, 0.6)' 
          : '0 0 0 rgba(147, 51, 234, 0)',
      }}
    >
      <div 
        className="absolute inset-0 rounded-xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
        }}
      >
        <div className="relative z-10 flex flex-col items-center h-full p-2 pt-1 pb-0">
          <div className="flex-1 w-full flex items-end justify-center max-h-24">
            <div
              dangerouslySetInnerHTML={{ __html: starMapSvg }}
              className="w-[90%] h-[90%]"
              style={{ transform: `translateY(${translateYOffset}px) scale(1.5)` }}
            />
          </div>
          
          <div style={{ transform: 'translateY(-5px)' }} className="flex flex-col items-center">
            <span className="text-white text-base font-medium">{zodiac.name}</span>
            <span className="text-purple-300 text-xs">{zodiac.dateRange}</span>
          </div>
        </div>

        {isSelected && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
            }}
          />
        )}
      </div>
    </motion.div>
  );
};