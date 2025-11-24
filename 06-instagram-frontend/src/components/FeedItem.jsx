import React, { useState } from 'react'
import './FeedItem.css'

function FeedItem({ post }) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [showAllComments, setShowAllComments] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  const displayComments = showAllComments 
    ? post.comments 
    : post.comments.slice(0, 2)

  return (
    <article className="feed-item">
      <div className="feed-item-header">
        <div className="user-info">
          <img 
            src={post.profileImage} 
            alt={post.username}
            className="profile-image"
          />
          <span className="username">{post.username}</span>
        </div>
        <svg 
          className="more-icon" 
          aria-label="옵션 더 보기" 
          fill="currentColor" 
          height="24" 
          role="img" 
          viewBox="0 0 24 24" 
          width="24"
        >
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </div>
      
      <div className="feed-item-image-container">
        <img 
          src={post.image} 
          alt={post.caption}
          className="feed-item-image"
        />
      </div>
      
      <div className="feed-item-actions">
        <div className="action-buttons">
          <button 
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={handleLike}
            aria-label="좋아요"
          >
            {liked ? (
              <svg aria-label="좋아요 취소" fill="#ed4956" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477.309-2.143.309-2.62 0-.438-.283-1.791-1.509-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766A4.17 4.17 0 0 1 18.11 2.1a4.89 4.89 0 0 1 .778 2.219 3.7 3.7 0 0 1 .506 1.125 3.47 3.47 0 0 1 .405.867q.101.18.197.374c.067.129.12.26.16.4a4.99 4.99 0 0 1 .219 2.031Z"></path>
              </svg>
            ) : (
              <svg aria-label="좋아요" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477.309-2.143.309-2.62 0-.438-.283-1.791-1.509-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766A4.17 4.17 0 0 1 18.11 2.1a4.89 4.89 0 0 1 .778 2.219 3.7 3.7 0 0 1 .506 1.125 3.47 3.47 0 0 1 .405.867q.101.18.197.374c.067.129.12.26.16.4a4.99 4.99 0 0 1 .219 2.031Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            )}
          </button>
          <svg className="action-icon" aria-label="댓글 달기" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <svg className="action-icon" aria-label="게시물 공유" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
          </svg>
          <svg className="action-icon bookmark-icon" aria-label="저장" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
          </svg>
        </div>
      </div>
      
      <div className="feed-item-content">
        <div className="likes-count">
          좋아요 <strong>{likes.toLocaleString()}</strong>개
        </div>
        
        <div className="caption">
          <span className="caption-username">{post.username}</span>
          <span className="caption-text">{post.caption}</span>
        </div>
        
        {post.comments.length > 2 && !showAllComments && (
          <button 
            className="view-comments-button"
            onClick={() => setShowAllComments(true)}
          >
            댓글 {post.comments.length - 2}개 더 보기
          </button>
        )}
        
        <div className="comments">
          {displayComments.map((comment, index) => (
            <div key={index} className="comment">
              <span className="comment-username">{comment.username}</span>
              <span className="comment-text">{comment.text}</span>
            </div>
          ))}
        </div>
        
        <div className="timestamp">{post.timestamp}</div>
        
        <div className="add-comment">
          <input 
            type="text" 
            placeholder="댓글 달기..."
            className="comment-input"
          />
          <button className="post-comment-button">게시</button>
        </div>
      </div>
    </article>
  )
}

export default FeedItem


