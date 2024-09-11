import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/PostDetail.css'; 

const PostDetail = ({ posts, setPosts }) => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const post = posts.find(p => p.id === postId);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    if (post) {
      const visitKey = `visit_count_${postId}`;

      // 현재 방문 횟수 가져오기, 없으면 0으로 설정
      let visitInfo = JSON.parse(localStorage.getItem(visitKey)) || { count: 0, lastVisited: null };

      // 현재 시간
      const now = new Date().getTime();

      if (!visitInfo.lastVisited || (now - visitInfo.lastVisited > 1000)) {
        // 방문한 지 1초 이상 지난 경우
        const newCount = visitInfo.count + 1;
        setVisitCount(newCount);

        // 조회수 업데이트
        const updatedPosts = posts.map(p =>
          p.id === postId ? { ...p, views: newCount } : p
        );
        setPosts(updatedPosts);

        // 방문 정보 업데이트
        localStorage.setItem(visitKey, JSON.stringify({ count: newCount, lastVisited: now }));
      } else {
        // 마지막 방문 이후 1초 이내에 다시 방문한 경우
        setVisitCount(visitInfo.count);
      }
    }
  }, [postId, posts, setPosts, post]);

  if (!post) {
    return <div>글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="post-detail-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>등록일: {post.date}</p>
      <p>조회수: {visitCount}</p>
    </div>
  );
};

export default PostDetail;
