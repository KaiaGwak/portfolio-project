import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { language, setLanguage, theme, setTheme } = useApp();
  const { user, logout } = useAuth();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
  };

  return (
    <header>
      <nav className="nav container">
        <h1 className="nav__logo">Portfolio</h1>
        <div className="nav__menu-container">
          <ul className="nav__menu">
            <li><Link to="/" data-lang="home">{language === 'ja' ? 'ホーム' : 'Home'}</Link></li>
            <li><Link to="/#projects" data-lang="projects">{language === 'ja' ? 'プロジェクト' : 'Projects'}</Link></li>
            <li><Link to="/#about" data-lang="about">{language === 'ja' ? '概要' : 'About'}</Link></li>
          </ul>
          <div className="nav__controls">
            <select 
              className="lang-switch"
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'ja' | 'en')}
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            {user ? (
              <div className="user-menu">
                <span className="username">{user.username}</span>
                <button onClick={logout} className="logout-btn">
                  {language === 'ja' ? 'ログアウト' : 'Logout'}
                </button>
              </div>
            ) : (
              <Link to="/login" className="login-btn">
                {language === 'ja' ? 'ログイン' : 'Login'}
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;