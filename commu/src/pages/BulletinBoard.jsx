import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/BulletinBoard.css';  

const BulletinBoard = ({ posts }) => {
  return (
    <div className="board-container">
      <table className="post-table">
        <thead>
          <tr>
            <th className="column-id">글번호</th>
            <th className="column-title">제목</th>
            <th className="column-date">등록일</th>
            <th className="column-views">조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link className="post-link" to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="write-btn">
        <Link to="/new-post" style={{ color: 'inherit', textDecoration: 'none' }}>
          글쓰기
        </Link>
      </button>
    </div>
  );
};

export default BulletinBoard;


