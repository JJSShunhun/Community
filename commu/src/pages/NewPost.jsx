import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/NewPost.css';  

const NewPost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddPost(title, content); 
      navigate('/'); 
    }
  };

  return (
    <div className="new-post-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default NewPost;