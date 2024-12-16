import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(formData.email, formData.password);
      navigate('/'); // 로그인 성공 시 홈으로 이동
    } catch (err) {
      setError('ログインに失敗しました。もう一度お試しください。');
    }
  };

  return (
    <main className="auth-page">
      <div className="container">
        <h2 className="section-title">ログイン</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="button">ログイン</button>
          <p className="auth-link">
            アカウントをお持ちでない方は
            <a href="/register">新規登録</a>
            へ
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;