import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BulletinBoard from './pages/BulletinBoard';
import NewPost from './pages/NewPost';
import PostDetail from './pages/PostDetail';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPostId = posts.length > 0 ? posts[0].id + 1 : 1;
    const newPost = {
      id: newPostId,
      title,
      content,
      date: new Date().toISOString().split('T')[0], // 'YYYY-MM-DD' 형식
      views: 0
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BulletinBoard posts={posts} />} />
        <Route path="/new-post" element={<NewPost onAddPost={addPost} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
};

export default App;
