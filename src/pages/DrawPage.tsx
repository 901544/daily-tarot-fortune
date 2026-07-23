import { StarryBackground } from '../components/StarryBackground';
import { FloatingGlows } from '../components/FloatingGlow';
import { TarotDeck } from '../components/TarotDeck';
import { InterpretationResult } from '../components/InterpretationResult';
import { useTarotStore } from '../stores/tarotStore';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DrawPage() {
  const { selectedZodiac } = useTarotStore();
  const navigate = useNavigate();

  if (!selectedZodiac) {
    navigate('/daily');
    return null;
  }

  return (
    <div className="relative min-h-screen py-8 px-4">
      <StarryBackground />
      <FloatingGlows />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/daily')}
            className="flex items-center gap-2 transition-colors"
            style={{color: 'var(--link-color)'}}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回选择星座</span>
          </button>
        </motion.div>

        <header className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-4 theme-title"
            style={{
              fontFamily: 'Great Vibes, Huiwen Mincho, Microsoft YaHei, sans-serif',
            }}
          >
            <span className="silver-emoji">✦</span> Daily Tarot <span className="silver-emoji">✦</span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">{selectedZodiac.symbol}</span>
            <span className="text-lg silver-text" style={{color: 'var(--text-secondary)'}}>{selectedZodiac.name}</span>
          </div>
        </header>

        <main>
          <TarotDeck />
          <InterpretationResult />
        </main>

        <footer className="mt-16 text-center text-sm" style={{color: 'var(--footer-color)'}}>
          <p>塔罗牌仅供娱乐，请以积极心态面对每一天</p>
          <p className="mt-2" style={{opacity: 0.6}}>~ 愿星辰指引你的道路 ~</p>
        </footer>
      </div>
    </div>
  );
}
