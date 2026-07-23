import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { StarryBackground } from '../components/StarryBackground';
import { FloatingGlows } from '../components/FloatingGlow';
import { TarotCardFront } from '../components/TarotCardFront';
import { cardBackPattern } from '../assets/cardBack';
import { tarotCards, TarotCard } from '../data/tarotCards';
import { ArrowLeft } from 'lucide-react';

const spreadConfig: Record<string, { title: string; cardCount: number; positions: string[] }> = {
  'three-cards': {
    title: '经典三牌阵',
    cardCount: 3,
    positions: ['过去', '现在', '未来'],
  },
  'cross': {
    title: '十字牌阵',
    cardCount: 5,
    positions: ['问题的核心与当前状况', '阻碍因素与需要面对的挑战', '助力因素与可用的资源', '灵性指引与更高视角', '实际建议与行动方向'],
  },
  'yes-no': {
    title: 'Yes or No',
    cardCount: 1,
    positions: ['回答'],
  },
};

interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position: number;
}

function getRandomCards(count: number): DrawnCard[] {
  const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((card, i) => ({
    card,
    isReversed: Math.random() > 0.7,
    position: i,
  }));
}

export default function SpreadDrawPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const config = spreadConfig[type || 'three-cards'];

  const [question, setQuestion] = useState('');
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [allDrawn, setAllDrawn] = useState<DrawnCard[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const startDraw = () => {
    const cards = getRandomCards(config.cardCount);
    setAllDrawn(cards);
    setDrawnCards([]);
    setCurrentIndex(0);
  };

  const drawNext = () => {
    if (!allDrawn || currentIndex >= config.cardCount || isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setDrawnCards(prev => [...prev, allDrawn[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
      setIsFlipping(false);
    }, 600);
  };

  const allComplete = drawnCards.length === config.cardCount;

  const handleViewResult = () => {
    navigate('/spread/result', {
      state: {
        type,
        question,
        cards: drawnCards,
        positions: config.positions,
      },
    });
  };

  // Cross layout positions for CSS grid
  const crossGridPositions: Record<number, { gridArea: string }> = {
    0: { gridArea: 'center' },
    1: { gridArea: 'left' },
    2: { gridArea: 'right' },
    3: { gridArea: 'top' },
    4: { gridArea: 'bottom' },
  };

  const renderCard = (i: number) => {
    const drawn = drawnCards[i];
    const isNext = i === currentIndex && allDrawn && !allComplete;
    const isPending = i > currentIndex && allDrawn && !drawn;

    return (
      <div
        key={i}
        className="flex flex-col items-center gap-1"
        style={type === 'cross' ? crossGridPositions[i] : undefined}
      >
        <span className="text-xs text-center leading-tight max-w-[120px]" style={{color: 'var(--text-muted)'}}>{config.positions[i]}</span>

        <AnimatePresence mode="wait">
          {drawn ? (
            <motion.div
              key="front"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <TarotCardFront card={drawn.card} isReversed={drawn.isReversed} />
            </motion.div>
          ) : (
            <motion.div
              key="back"
              className="w-[120px] h-[212px] rounded-lg relative overflow-hidden"
              style={{
                boxShadow: isNext
                  ? '0 0 30px var(--glow-color), 0 0 40px var(--glow-color)'
                  : '0 4px 15px rgba(0,0,0,0.4)',
                border: isNext
                  ? '2px solid var(--gold-border)'
                  : '1px solid var(--card-border)',
                cursor: isNext ? 'pointer' : 'default',
                opacity: isPending ? 0.4 : 1,
                transition: 'opacity 0.3s, border 0.3s, box-shadow 0.3s',
              }}
              onClick={isNext ? drawNext : undefined}
              whileHover={isNext ? { scale: 1.05, y: -8 } : {}}
              whileTap={isNext ? { scale: 0.95 } : {}}
            >
              <div
                className="absolute inset-[3px] rounded-md"
                style={{
                  backgroundImage: `url(${cardBackPattern})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: isPending ? 'brightness(0.5)' : 'brightness(1)',
                }}
              />
              {isNext && (
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  animate={{
                    boxShadow: [
                      'inset 0 0 20px var(--glow-color)',
                      'inset 0 0 40px var(--glow-color)',
                      'inset 0 0 20px var(--glow-color)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen py-8 px-4">
      <StarryBackground />
      <FloatingGlows />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <button onClick={() => navigate('/spread')} className="flex items-center gap-2 transition-colors" style={{color: 'var(--link-color)'}}>
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回牌阵选择</span>
          </button>
        </motion.div>

        <motion.header className="text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold mb-2 theme-title" style={{
            lineHeight: '2.0',
            paddingTop: '0.3em',
            overflow: 'visible',
          }}>
            {config.title}
          </h1>
        </motion.header>

        <motion.div className="max-w-lg mx-auto mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="在此输入你想占卜的问题..."
            className="w-full px-5 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-yellow-500/50 theme-input"
          />
        </motion.div>

        {/* Card layout - cross or linear */}
        {type === 'cross' ? (
          <div
            className="mb-8 mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 140px 140px',
              gridTemplateRows: 'auto auto auto',
              gridTemplateAreas: `
                ". top ."
                "left center right"
                ". bottom ."
              `,
              gap: '12px',
              justifyItems: 'center',
              alignItems: 'center',
              maxWidth: '460px',
            }}
          >
            {renderCard(3)}
            {renderCard(1)}
            {renderCard(0)}
            {renderCard(2)}
            {renderCard(4)}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Array.from({ length: config.cardCount }).map((_, i) => renderCard(i))}
          </div>
        )}

        <div className="text-center">
          {!allDrawn && (
            <motion.button
              className="px-8 py-3 rounded-lg text-white font-medium text-lg"
              style={{
                background: 'var(--btn-primary)',
                boxShadow: 'var(--btn-primary-shadow)',
              }}
              onClick={startDraw}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              开始抽牌
            </motion.button>
          )}

          {allDrawn && !allComplete && (
            <p className="text-sm animate-pulse" style={{color: 'var(--text-muted)'}}>
              点击发光的牌抽取第 {currentIndex + 1} / {config.cardCount} 张
            </p>
          )}

          {allComplete && (
            <motion.button
              className="px-8 py-3 rounded-lg text-white font-medium text-lg"
              style={{
                background: 'var(--btn-gold)',
                boxShadow: 'var(--btn-gold-shadow)',
              }}
              onClick={handleViewResult}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              ✨ 查看解读
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
