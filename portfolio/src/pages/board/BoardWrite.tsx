import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const BoardWrite = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [error, setError] = useState<string>('');

  // 로그인 체크
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: API 연동 후 실제 게시글 작성 로직 구현
      console.log('Create post:', formData);
      navigate('/board');
    } catch (err) {
      setError('投稿に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <main className="board-page">
      <div className="container">
        <h2 className="section-title">新規投稿</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit} className="board-form">
          <div className="form-group">
            <label htmlFor="title">タイトル</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">内容</label>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              required
              className="form-textarea"
              rows={10}
            />
          </div>
          
          <div className="form-buttons">
            <button type="button" className="button button-secondary" onClick={() => navigate('/board')}>
              キャンセル
            </button>
            <button type="submit" className="button">
              投稿する
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default BoardWrite;