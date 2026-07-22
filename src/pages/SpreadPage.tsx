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
    cardCount: 10,
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
            className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
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
            className="text-5xl font-bold mb-4"
            style={{
              fontFamily: 'ShangTuDongGuan, sans-serif',
              background: 'linear-gradient(135deg, #E8D5B7 0%, #F5E6C8 50%, #E8D5B7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(232, 213, 183, 0.3)',
            }}
          >
            🃏 牌阵解牌
          </h1>
          <p className="text-purple-300">选择一种牌阵，开始你的解读之旅</p>
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
                className="relative rounded-xl p-6 flex items-center gap-6 transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(45, 27, 78, 0.7) 0%, rgba(26, 15, 46, 0.85) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-3xl rounded-lg"
                  style={{ background: 'rgba(212, 175, 55, 0.1)' }}
                >
                  {spread.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold text-white">{spread.title}</h2>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(155, 89, 182, 0.3)',
                        color: 'rgba(232, 213, 183, 0.8)',
                      }}
                    >
                      {spread.cardCount} 张牌
                    </span>
                  </div>
                  <p
                    className="text-xs mb-2"
                    style={{
                      fontFamily: 'ShangTuDongGuan, sans-serif',
                      color: 'rgba(232, 213, 183, 0.6)',
                    }}
                  >
                    {spread.subtitle}
                  </p>
                  <p className="text-purple-300 text-sm">{spread.description}</p>
                </div>

                <div className="flex-shrink-0 text-purple-500 group-hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          className="mt-16 text-center text-purple-400 text-sm"
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
