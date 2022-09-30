import { useState } from 'react';
import { getComments, postComment } from './Api';
import CommentCard from './CommentCard';

const CommentPoster = ({ reviewId, setComments, user }) => {
  const [formBody, setFormBody] = useState('');
  const [commentReturn, setCommentReturn] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [commentComplete, setCommentComplete] = useState('Add a comment...');
  const textDisabled = formBody.length === 0;

  let m = new Date();
  const dateString =
    m.getUTCFullYear() +
    '-' +
    (m.getUTCMonth() + 1) +
    '-' +
    m.getUTCDate() +
    ' ' +
    m.getUTCHours() +
    ':' +
    m.getUTCMinutes() +
    ':' +
    m.getUTCSeconds();

  let testObj = {
    author: user,
    body: formBody,
    comment_id: 99999,
    created_at: dateString,
    review_id: 99999,
    votes: 0,
  };
  const handleSubmit = (e, props) => {
    e.preventDefault();
    setIsLoading(true);
    setCommentComplete('Comment sending...');
    let commentObj = { username: user, body: formBody };
    postComment(reviewId, commentObj)
      .then(({ data }) => {
        setComments((currentComments) => {
          return [data.comment, ...currentComments];
        });
        setCommentReturn(data.comment);
        setIsLoading(false);
        setCommentComplete('Comment posted!');
        setFormBody('');
        return commentReturn;
      })
      .catch((error) => {
        setIsLoading(false);
        setCommentComplete(
          'Error posting comment. Please refresh page and try again.'
        );
        setCommentComplete(false);
        setComments((comments) => {
          let newComment = [...comments];
          newComment.shift();
          return newComment;
        });
      });
  };

  return (
    <div className="commentPoster">
      <form onSubmit={handleSubmit}>
        <label>
          {commentComplete}
          <textarea
            value={formBody}
            onChange={(event) => setFormBody(event.target.value)}
            className="commentBox"
            type="text"
            name="comment"
          />
        </label>
        <button disabled={textDisabled || isLoading} type="sumbit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentPoster;
