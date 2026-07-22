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
            className="text-6xl font-bold mb-4 theme-title"
            style={{
              fontFamily: 'Great Vibes, ShangTuDongGuan, cursive',
            }}
          >
            <span className="silver-emoji">✦</span> Daily Tarot <span className="silver-emoji">✦</span>
          </h1>
          <p 
            className="text-lg theme-title"
            style={{
              fontFamily: 'Great Vibes, ShangTuDongGuan, cursive',
              lineHeight: '2.0',
              paddingTop: '0.3em',
              overflow: 'visible',
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
                ? 'text-white theme-btn-primary' 
                : 'cursor-not-allowed'
            }`}
            style={{
              background: selectedZodiac 
                ? 'var(--btn-primary)'
                : 'var(--btn-secondary)',
              boxShadow: selectedZodiac 
                ? 'var(--btn-primary-shadow)'
                : 'none',
              border: '1px solid var(--gold-border)',
              color: selectedZodiac ? '#ffffff' : 'var(--text-muted)',
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

        <footer className="mt-16 text-center text-sm" style={{color: 'var(--footer-color)'}}>
          <p>塔罗牌仅供娱乐，请以积极心态面对每一天</p>
          <p className="mt-2" style={{opacity: 0.6}}>~ 愿星辰指引你的道路 ~</p>
        </footer>
      </div>
    </div>
  );
}
