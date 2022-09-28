const CommentCard = ({ comment }) => {
  return (
    <div className="commentCard">
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>Posted on: {comment.created_at.substring(0, 10)}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
