import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { Post } from '../../types';

const BoardList = () => {
  const { user } = useAuth();
  // 임시 데이터
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "最初の投稿",
      content: "ここに内容が入ります。",
      author: {
        id: 1,
        username: "User1"
      },
      createdAt: "2024-01-01",
      viewCount: 0
    }
  ]);

  return (
    <main className="board-page">
      <div className="container">
        <div className="board-header">
          <h2 className="section-title">掲示板</h2>
          {user && (
            <Link to="/board/write" className="button">
              投稿する
            </Link>
          )}
        </div>

        <div className="board-list">
          <table className="board-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>タイトル</th>
                <th>作成者</th>
                <th>作成日</th>
                <th>閲覧数</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/board/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.author.username}</td>
                  <td>{post.createdAt}</td>
                  <td>{post.viewCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default BoardList;