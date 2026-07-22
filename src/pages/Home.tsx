import { StarryBackground } from '../components/StarryBackground';
import { FloatingGlows } from '../components/FloatingGlow';
import { ZodiacSelector } from '../components/ZodiacSelector';
import { useTarotStore } from '../stores/tarotStore';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { selectedZodiac } = useTarotStore();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedZodiac) {
      navigate('/daily/draw');
    }
  };

  return (
    <div className="relative min-h-screen py-8 px-4">
      <StarryBackground />
      <FloatingGlows />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 
            className="text-6xl font-bold mb-4"
            style={{
              fontFamily: 'ShangTuDongGuan, sans-serif',
              background: 'linear-gradient(135deg, #E8D5B7 0%, #F5E6C8 50%, #E8D5B7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(232, 213, 183, 0.3)',
            }}
          >
            ✨ Daily Tarot ✨
          </h1>
          <p 
            className="text-lg"
            style={{
              fontFamily: 'ShangTuDongGuan, sans-serif',
              background: 'linear-gradient(135deg, #E8D5B7 0%, #F5E6C8 50%, #E8D5B7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose your zodiac sign to receive today's guidance
          </p>
        </header>

        <main>
          <ZodiacSelector />
        </main>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-lg transition-all ${
              selectedZodiac 
                ? 'text-white' 
                : 'text-purple-400 cursor-not-allowed'
            }`}
            style={{
              background: selectedZodiac 
                ? 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)'
                : 'linear-gradient(135deg, #2D1B4E 0%, #1A0F2E 100%)',
              boxShadow: selectedZodiac 
                ? '0 4px 20px rgba(155, 89, 182, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)'
                : 'none',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
            onClick={handleContinue}
            disabled={!selectedZodiac}
            whileHover={selectedZodiac ? { scale: 1.05 } : {}}
            whileTap={selectedZodiac ? { scale: 0.95 } : {}}
          >
            <span>Continue</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <footer className="mt-16 text-center text-purple-400 text-sm">
          <p>塔罗牌仅供娱乐，请以积极心态面对每一天</p>
          <p className="mt-2 text-purple-500/60">~ 愿星辰指引你的道路 ~</p>
        </footer>
      </div>
    </div>
  );
}