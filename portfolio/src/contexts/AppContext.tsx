import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ja' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // 여기에 있어야 합니다
  const [language, setLanguage] = useState<Language>('ja');
  const [theme, setTheme] = useState<Theme>('light');  // 이 부분!

  const value = {
    language,
    setLanguage,
    theme,
    setTheme
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}