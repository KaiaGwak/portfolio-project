import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { Post } from '../../types';

const BoardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  // 임시 데이터 (나중에 API로 대체)
  const [post] = useState<Post>({
    id: Number(id),
    title: "最初の投稿",
    content: "ここに内容が入ります。\n長い文章が入る予定です。",
    author: {
      id: 1,
      username: "User1"
    },
    createdAt: "2024-01-01",
    viewCount: 1
  });

  const handleDelete = async () => {
    if (window.confirm('本当に削除しますか？')) {
      try {
        // TODO: API 연동 후 실제 삭제 로직 구현
        console.log('Delete post:', id);
        navigate('/board');
      } catch (err) {
        console.error('Failed to delete post:', err);
      }
    }
  };

  return (
    <main className="board-page">
      <div className="container">
        <article className="board-detail">
          <header className="board-detail-header">
            <h2 className="board-title">{post.title}</h2>
            <div className="board-meta">
              <span>作成者: {post.author.username}</span>
              <span>作成日: {post.createdAt}</span>
              <span>閲覧数: {post.viewCount}</span>
            </div>
          </header>

          <div className="board-content">
            {post.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <footer className="board-detail-footer">
            <div className="board-actions">
              <Link to="/board" className="button button-secondary">
                戻る
              </Link>
              {user && user.id === post.author.id && (
                <div className="author-actions">
                  <Link to={`/board/edit/${post.id}`} className="button">
                    編集
                  </Link>
                  <button onClick={handleDelete} className="button button-danger">
                    削除
                  </button>
                </div>
              )}
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
};

export default BoardDetail;