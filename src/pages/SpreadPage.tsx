import { StarryBackground } from '../components/StarryBackground';
import { FloatingGlows } from '../components/FloatingGlow';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const spreadTypes = [
  {
    id: 'three-cards',
    title: '经典三牌阵',
    subtitle: 'Past · Present · Future',
    description: '抽取三张牌，分别代表过去、现在和未来，全面解读事态发展脉络。',
    icon: '🂠🂠🂠',
    cardCount: 3,
    path: '/spread/three-cards',
  },
  {
    id: 'cross',
    title: '十字牌阵',
    subtitle: 'Celtic Cross',
    description: '经典的凯尔特十字牌阵，从多个维度深入剖析问题，揭示隐藏的真相。',
    icon: '✚',
    cardCount: 5,
    path: '/spread/cross',
  },
  {
    id: 'yes-no',
    title: 'Yes or No',
    subtitle: 'Single Card',
    description: '心中默念一个是或否的问题，抽取一张牌，获得宇宙的直接回答。',
    icon: '🎴',
    cardCount: 1,
    path: '/spread/yes-no',
  },
];

export default function SpreadPage() {
  const navigate = useNavigate();

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
            className="flex items-center gap-2 transition-colors"
            style={{color: 'var(--link-color)'}}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">返回首页</span>
          </button>
        </motion.div>

        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl font-bold mb-4 theme-title"
            style={{
              fontFamily: 'Great Vibes, ShangTuDongGuan, cursive',
            }}
          >
            <span style={{WebkitTextFillColor:'initial'}}>✨</span> 牌阵解牌
          </h1>
          <p style={{color: 'var(--text-secondary)'}}>选择一种牌阵，开始你的解读之旅</p>
        </motion.header>

        <div className="space-y-6">
          {spreadTypes.map((spread, index) => (
            <motion.div
              key={spread.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer group"
              onClick={() => navigate(spread.path)}
            >
              <div
                className="relative rounded-xl p-6 flex items-center gap-6 transition-all duration-300 theme-card"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-3xl rounded-lg"
                  style={{ background: 'var(--gold-accent)' }}
                >
                  {spread.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold" style={{
                      color: 'var(--text-primary)',
                      ...(spread.id === 'yes-no' ? {fontFamily: "Cinzel Decorative, serif"} : {})
                    }}>{spread.title}</h2>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: 'var(--badge-bg)',
                        color: 'var(--badge-text)',
                      }}
                    >
                      {spread.cardCount} 张牌
                    </span>
                  </div>
                  <p
                    className="text-xs mb-2"
                    style={{
                      fontFamily: 'Great Vibes, ShangTuDongGuan, cursive',
                      color: 'var(--highlight-text)',
                    }}
                  >
                    {spread.subtitle}
                  </p>
                  <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{spread.description}</p>
                </div>

                <div className="flex-shrink-0 transition-colors" style={{color: 'var(--text-muted)'}}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold-accent) 0%, transparent 50%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="mt-16 text-center text-sm"
          style={{color: 'var(--footer-color)'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>心中默念你的问题，让牌为你指引方向</p>
        </motion.footer>
      </div>
    </div>
  );
}
