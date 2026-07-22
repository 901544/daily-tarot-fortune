import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { StarryBackground } from '../components/StarryBackground';
import { FloatingGlows } from '../components/FloatingGlow';
import { TarotCardFront } from '../components/TarotCardFront';
import { TarotCard } from '../data/tarotCards';
import { ArrowLeft } from 'lucide-react';

interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position: number;
}

interface ResultState {
  type: string;
  question: string;
  cards: DrawnCard[];
  positions: string[];
}

const AI_API_URL = import.meta.env.VITE_AI_API_URL || '';

export default function SpreadResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as ResultState | null;

  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!state) {
      navigate('/spread');
      return;
    }
    fetchInterpretation();
  }, []);

  const fetchInterpretation = async () => {
    if (!state) return;
    setIsLoading(true);
    setError('');

    try {
      const cardDescriptions = state.cards.map((dc, i) => ({
        position: state.positions[i],
        cardName: dc.card.name,
        cardNameEn: dc.card.nameEn,
        isReversed: dc.isReversed,
        keywords: dc.card.keywords,
        interpretation: dc.isReversed ? dc.card.reversedInterpretation : dc.card.interpretation,
      }));

      const response = await fetch(AI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'spread',
          spreadType: state.type,
          question: state.question || '请给出综合解读',
          instructions: '请根据以上牌面和问题,生成至少300字的详细解读。要求分析深入、建议具体、语言温暖有启发性。',
          cards: cardDescriptions,
        }),
      });

      const data = await response.json();

      if (response.ok && data.interpretation) {
        setInterpretation(data.interpretation.replace(/\*\*(.*?)\*\*/g, '\u300C$1\u300D').replace(/^#+\s*/gm, ''));
      } else {
        setInterpretation(generateLocalInterpretation());
      }
    } catch (err) {
      console.error('[AI解牌] 请求失败', err);
      setInterpretation(generateLocalInterpretation());
    } finally {
      setIsLoading(false);
    }
  };

  const generateLocalInterpretation = (): string => {
    if (!state) return '';
    const parts = state.cards.map((dc, i) => {
      const pos = state.positions[i];
      const rev = dc.isReversed ? '（逆位）' : '';
      return `【${pos}】${dc.card.name}${rev}：${dc.isReversed ? dc.card.reversedInterpretation : dc.card.interpretation}`;
    });
    return parts.join('\n\n');
  };

  if (!state) return null;

  return (
    <div className="relative min-h-screen py-8 px-4">
      <StarryBackground />
      <FloatingGlows />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <button onClick={() => navigate('/spread')} className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回牌阵选择</span>
          </button>
        </motion.div>

        <motion.header className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-2" style={{
            background: 'linear-gradient(135deg, #E8D5B7 0%, #F5E6C8 50%, #E8D5B7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            🔮 解读结果
          </h1>
          {state.question && (
            <p className="text-purple-300 text-sm mt-2">你的问题：「{state.question}」</p>
          )}
        </motion.header>

        {/* 抽到的牌展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={state.type === 'cross' ? 'mb-10 mx-auto' : 'flex flex-wrap justify-center gap-4 mb-10'}
          style={state.type === 'cross' ? {
            display: 'grid',
            gridTemplateColumns: '140px 140px 140px',
            gridTemplateRows: 'auto auto auto',
            gridTemplateAreas: '". top ." "left center right" ". bottom ."',
            gap: '12px',
            justifyItems: 'center',
            alignItems: 'center',
            maxWidth: '460px',
          } : undefined}
        >
          {state.type === 'cross' ? (
            <>
              {[3, 1, 0, 2, 4].map((idx) => (
                <div key={idx} className="flex flex-col items-center gap-1" style={{
                  gridArea: ['bottom', 'left', 'center', 'right', 'top'][idx]
                }}>
                  <span className="text-xs text-yellow-400 text-center leading-tight max-w-[120px]">{state.positions[idx]}</span>
                  <TarotCardFront card={state.cards[idx]?.card} isReversed={state.cards[idx]?.isReversed} />
                </div>
              ))}
            </>
          ) : (
            state.cards.map((dc, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-xs text-yellow-400">{state.positions[i]}</span>
                <TarotCardFront card={dc.card} isReversed={dc.isReversed} />
              </div>
            ))
          )}
        </motion.div>

        {/* 解读内容 */}
        <motion.div
          className="rounded-xl p-6 mb-8"
          style={{
            background: 'linear-gradient(145deg, rgba(45, 27, 78, 0.7) 0%, rgba(26, 15, 46, 0.85) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {isLoading ? (
            <div className="text-center py-8">
              <motion.div
                className="text-4xl mb-4"
                animate={{ x: [-15, 15, -15] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                🔮
              </motion.div>
              <p className="text-purple-300 animate-pulse">正在解读牌面...</p>
            </div>
          ) : (
            <div className="text-purple-100 leading-relaxed whitespace-pre-line text-base">
              {interpretation}
            </div>
          )}
        </motion.div>

        {/* 操作按钮 */}
        <div className="text-center space-x-4">
          <motion.button
            className="px-6 py-2 rounded-lg text-white font-medium"
            style={{ background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)' }}
            onClick={() => navigate(`/spread/${state.type}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            重新抽牌
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg text-white font-medium"
            style={{ background: 'linear-gradient(135deg, #2D1B4E 0%, #1A0F2E 100%)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            返回首页
          </motion.button>
        </div>
      </div>
    </div>
  );
}
