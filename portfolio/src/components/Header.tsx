import { useState } from 'react';

const Header = () => {
  const [currentLang, setCurrentLang] = useState<'ja' | 'en'>('ja');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header>
      <nav className="nav container">
        <h1 className="nav__logo">Portfolio</h1>
        <div className="nav__menu-container">
          <ul className="nav__menu">
            <li><a href="#home" data-lang="home">ホーム</a></li>
            <li><a href="#projects" data-lang="projects">プロジェクト</a></li>
            <li><a href="#about" data-lang="about">概要</a></li>
          </ul>
          <div className="nav__controls">
            <select 
              className="lang-switch"
              value={currentLang}
              onChange={(e) => setCurrentLang(e.target.value as 'ja' | 'en')}
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
