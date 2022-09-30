import { useState } from 'react';
import { deleteComment } from './Api';

const CommentCard = ({ comment, user }) => {
  const [commentDeleted, setCommentDeleted] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.comment_id).then(({ data }) => {
      setCommentDeleted(true);
    });
  };

  if (user === comment.author) {
    return (
      <div className="commentCard">
        {commentDeleted ? (
          <h4>Comment Deleted</h4>
        ) : (
          <>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p>Posted on: {comment.created_at.substring(0, 10)}</p>
            <p>Votes: {comment.votes}</p>
            <button
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="commentCard">
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
        <p>Posted on: {comment.created_at.substring(0, 10)}</p>
        <p>Votes: {comment.votes}</p>
      </div>
    );
  }
};

export default CommentCard;
