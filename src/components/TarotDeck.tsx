import { motion, AnimatePresence } from 'framer-motion';
import { useTarotStore } from '../stores/tarotStore';
import { drawRandomCard } from '../data/tarotCards';
import { generateInterpretationAI } from '../utils/interpreter';
import { CardTable } from './CardTable';
import { TarotCardFront } from './TarotCardFront';
import { cardBackPattern } from '../assets/cardBack';

export const TarotDeck = () => {
  const { selectedZodiac, drawnCard, isReversed, isDrawing, drawCard, startDrawing, reset } = useTarotStore();

  const handleDrawCard = async () => {
    if (!selectedZodiac || isDrawing || drawnCard) return;
    
    reset();
    startDrawing();
    
    const result = drawRandomCard();
    const interpretationPromise = generateInterpretationAI(result.card, selectedZodiac, result.isReversed);
    
    setTimeout(async () => {
      const interpretation = await interpretationPromise;
      drawCard(result.card, result.isReversed, interpretation);
    }, 800);
  };

  return (
    <div className="relative flex flex-col items-center">
      <CardTable />
      
      <AnimatePresence mode="wait">
        {!drawnCard ? (
          <motion.div
            key="deck"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative z-10"
          >
            <motion.div 
              className={`relative w-[170px] h-[260px] cursor-pointer ${
                selectedZodiac ? '' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={handleDrawCard}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                const offset = index - 1;
                const baseOffset = offset * 4;
                const hoverOffset = offset * 6;
                return (
                  <motion.div
                    key={index}
                    className="absolute w-[120px] h-[212px] rounded-lg"
                    style={{
                      bottom: `${offset * 2}px`,
                      right: `${offset * 2}px`,
                      opacity: 1 - offset * 0.025,
                    }}
                    animate={{
                      x: -baseOffset,
                      y: -baseOffset,
                    }}
                    whileHover={selectedZodiac ? {
                      x: -hoverOffset,
                      y: -hoverOffset,
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-full h-full rounded-lg relative overflow-hidden"
                      style={{
                        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          padding: '3px',
                          background: 'linear-gradient(135deg, #FFFFFF 0%, #E8E8E8 25%, #C0C0C0 50%, #A8A8A8 75%, #808080 100%)',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      
                      <div
                        className="absolute inset-[3px] rounded-md"
                        style={{
                          border: '1px solid rgba(212, 175, 55, 0.6)',
                        }}
                      />
                      
                      <div
                        className="absolute inset-[4px] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-md"
                        style={{
                          backgroundImage: `url(${cardBackPattern})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {isDrawing && (
                <motion.div
                  className="absolute bottom-0 right-0 w-[120px] h-[212px] rounded-lg flex items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    background: 'rgba(0,0,0,0.8)',
                  }}
                >
                  <motion.div
                    className="text-yellow-500 text-xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ✦
                  </motion.div>
                </motion.div>
              )}
            </motion.div>

            <p className="text-center mt-4 text-purple-200 text-sm">
              {selectedZodiac ? '点击牌堆抽取今日运势' : '请先选择你的星座'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="drawn-card"
            initial={{ opacity: 0, y: -100, rotate: -180 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="relative z-10"
          >
            <TarotCardFront card={drawnCard} isReversed={isReversed} />
            
            <motion.button
              className="mt-6 px-6 py-2 rounded-lg text-white font-medium"
              style={{
                background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
                boxShadow: '0 4px 15px rgba(155, 89, 182, 0.4)',
              }}
              onClick={reset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              重新抽牌
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
