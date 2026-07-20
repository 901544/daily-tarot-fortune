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
    navigate('/');
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
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回选择星座</span>
          </button>
        </motion.div>

        <header className="text-center mb-8">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: 'Dancing Script, cursive',
              background: 'linear-gradient(135deg, #E8D5B7 0%, #F5E6C8 50%, #E8D5B7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(232, 213, 183, 0.3)',
            }}
          >
            ✨ Daily Tarot ✨
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">{selectedZodiac.symbol}</span>
            <span className="text-purple-200 text-lg">{selectedZodiac.name}</span>
          </div>
        </header>

        <main>
          <TarotDeck />
          <InterpretationResult />
        </main>

        <footer className="mt-16 text-center text-purple-400 text-sm">
          <p>塔罗牌仅供娱乐，请以积极心态面对每一天</p>
          <p className="mt-2 text-purple-500/60">~ 愿星辰指引你的道路 ~</p>
        </footer>
      </div>
    </div>
  );
}