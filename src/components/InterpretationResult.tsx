import { motion, AnimatePresence } from 'framer-motion';
import { useTarotStore } from '../stores/tarotStore';

export const InterpretationResult = () => {
  const { drawnCard, selectedZodiac, interpretation, isReversed } = useTarotStore();

  if (!drawnCard || !selectedZodiac || !interpretation) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="mt-12 max-w-lg mx-auto px-6"
      >
        <div 
          className="rounded-xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(45, 27, 78, 0.8) 0%, rgba(26, 15, 46, 0.9) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 30px rgba(147, 51, 234, 0.2)',
          }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: drawnCard.color }}
          />
          
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="text-3xl"
              style={{ textShadow: `0 0 15px ${drawnCard.color}` }}
            >
              {selectedZodiac.symbol}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{selectedZodiac.name}</h3>
              <p className="text-purple-300 text-sm">{selectedZodiac.dateRange}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-yellow-500 font-medium text-sm mb-2">
              今日抽到：{drawnCard.name}
              {isReversed && <span className="ml-2 text-red-400">（逆位）</span>}
            </h4>
            <div className="flex gap-2 flex-wrap">
              {drawnCard.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${drawnCard.color}30`,
                    color: drawnCard.color,
                  }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="text-purple-200 text-left leading-relaxed">
              <p className="text-lg">{interpretation}</p>
            </div>
          </div>

          <div 
            className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E${encodeURIComponent(selectedZodiac.symbol)}%3C/text%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
