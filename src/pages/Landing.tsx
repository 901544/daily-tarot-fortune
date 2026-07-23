import { StarryBackground } from '../components/StarryBackground';
import { FloatingGlows } from '../components/FloatingGlow';
import { motion } from 'framer-motion';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'spread',
      title: '牌阵解牌',
      subtitle: 'Spread Reading',
      description: '选择牌阵，深入解读你的问题',
      icon: '🃏',
      path: '/spread',
    },
    {
      id: 'daily',
      title: '每日运势',
      subtitle: 'Daily Fortune',
      description: '结合星座，抽取今日塔罗指引',
      icon: '✨',
      path: '/daily',
    },
  ];

  return (
    <div className="relative min-h-screen py-8 px-4 flex flex-col">
      <StarryBackground />
      <FloatingGlows />

      <div className="relative z-10 max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        <div className="absolute top-0 right-0"><ThemeSwitcher /></div>
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl font-bold mb-4 theme-title"
            style={{
              fontFamily: 'Great Vibes, Huiwen Mincho, Microsoft YaHei, sans-serif',
            }}
          >
            <span className="silver-emoji">✦</span> Daily Tarot <span className="silver-emoji">✦</span>
          </h1>
          <p
            className="text-lg theme-title"
            style={{
              fontFamily: 'Great Vibes, Huiwen Mincho, Microsoft YaHei, sans-serif',
              lineHeight: '2.0',
              paddingTop: '0.3em',
              overflow: 'visible',
            }}
          >
            Let the cards guide your path
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(mod.path)}
              className="cursor-pointer group"
            >
              <div
                className="relative rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 theme-card"
              >
                {/* 顶部光效 */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg, transparent, var(--gold-glow), transparent)' }}
                />

                <span className="text-6xl mb-6">{mod.icon}</span>

                <h2 className="text-2xl font-bold mb-1" style={{color: 'var(--text-primary)'}}>{mod.title}</h2>
                <p
                  className="text-sm mb-4"
                  style={{
                    fontFamily: 'Great Vibes, Huiwen Mincho, Microsoft YaHei, sans-serif',
                    color: 'var(--highlight-text)',
                  }}
                >
                  {mod.subtitle}
                </p>
                <p className="text-sm" style={{color: 'var(--text-secondary)'}}>{mod.description}</p>

                {/* 底部箭头 */}
                <div className="mt-6 transition-colors" style={{color: 'var(--text-muted)'}}>
                  <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
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
          <p>塔罗牌仅供娱乐，请以积极心态面对每一天</p>
          <p className="mt-2" style={{opacity: 0.6}}>~ 愿星辰指引你的道路 ~</p>
        </motion.footer>
      </div>
    </div>
  );
}
