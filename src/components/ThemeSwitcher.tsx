import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../stores/themeStore';

const themes = [
  { id: 'purple' as const, name: '暮月星穹', desc: 'Twilight Cosmos', icon: '🌙' },
  { id: 'ivory' as const, name: '象牙圣殿', desc: 'Ivory Temple', icon: '🏛️' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
        }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{theme === 'purple' ? '🌙' : '🏛️'}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute right-0 top-12 z-50 rounded-xl p-3 min-w-[180px]"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <p className="text-xs mb-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>选择主题</p>
            {themes.map((t) => (
              <motion.button
                key={t.id}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                style={{
                  background: theme === t.id ? 'var(--accent)' : 'transparent',
                  color: 'var(--text-primary)',
                }}
                onClick={() => { setTheme(t.id); setIsOpen(false); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{t.icon}</span>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs opacity-50">{t.desc}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
