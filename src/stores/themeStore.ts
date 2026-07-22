import { create } from 'zustand';

type Theme = 'purple' | 'ivory';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem('tarot-theme') as Theme) || 'purple',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'purple' ? 'ivory' : 'purple';
    localStorage.setItem('tarot-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    return { theme: newTheme };
  }),
  setTheme: (theme: Theme) => set(() => {
    localStorage.setItem('tarot-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    return { theme };
  }),
}));
