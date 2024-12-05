import React, { useState, useEffect } from 'react';

const CommentSection = ({ itemId, itemType }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/api/comments?itemId=${itemId}&itemType=${itemType}`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [itemId, itemType]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, itemType, content: newComment }),
    });

    if (response.ok) {
      const addedComment = await response.json();
      setComments([...comments, addedComment]);
      setNewComment('');
    } else {
      alert('Failed to add comment');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
