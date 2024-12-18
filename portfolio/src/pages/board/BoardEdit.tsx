import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { Post } from '../../types';

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [error, setError] = useState<string>('');

  // 임시 데이터 로드 (나중에 API로 대체)
  useEffect(() => {
    const post: Post = {
      id: Number(id),
      title: "最初の投稿",
      content: "ここに内容が入ります。",
      author: {
        id: 1,
        username: "User1"
      },
      createdAt: "2024-01-01",
      viewCount: 1
    };

    setFormData({
      title: post.title,
      content: post.content
    });
  }, [id]);

  // 로그인 체크
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: API 연동 후 실제 수정 로직 구현
      console.log('Update post:', id, formData);
      navigate(`/board/${id}`);
    } catch (err) {
      setError('更新に失敗しました。もう一度お試しください。');
    }
  };

  return (
    <main className="board-page">
      <div className="container">
        <h2 className="section-title">投稿編集</h2>
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
            <button 
              type="button" 
              className="button button-secondary" 
              onClick={() => navigate(`/board/${id}`)}
            >
              キャンセル
            </button>
            <button type="submit" className="button">
              更新する
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default BoardEdit;