import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const STORAGE_KEY = 'app_theme';
const BODY_LIGHT_CLASS = 'theme-light';
const BODY_DARK_CLASS = 'theme-dark';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = { children: ReactNode };

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const fromStorage = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
      return fromStorage ?? 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    const body = document.body;
    body.classList.remove(theme === 'light' ? BODY_DARK_CLASS : BODY_LIGHT_CLASS);
    body.classList.add(theme === 'light' ? BODY_LIGHT_CLASS : BODY_DARK_CLASS);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}

export { ThemeContext };


