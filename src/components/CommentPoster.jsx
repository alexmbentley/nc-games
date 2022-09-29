import { useState } from 'react';
import { getComments, postComment } from './Api';
import CommentCard from './CommentCard';

const CommentPoster = ({ reviewId, setComments }) => {
  const [user, setUser] = useState('jessjelly');
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

  const handleSubmit = (e, props) => {
    console.log(setComments, '<<< set comments');
    e.preventDefault();
    let commentObj = { username: user, body: formBody };
    let testObj = {
      author: user,
      body: formBody,
      comment_id: 99999,
      created_at: dateString,
      review_id: 99999,
      votes: 0,
    };
    setComments((comments) => {
      let newComment = [...comments];
      newComment.unshift(testObj);
      return newComment;
    });

    postComment(reviewId, commentObj)
      .then(({ data }) => {
        setCommentReturn(data);
        setIsLoading(false);
        setCommentComplete('Comment sent!');
        setFormBody('');
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
          <input
            value={formBody}
            onChange={(event) => setFormBody(event.target.value)}
            className="commentBox"
            type="text"
            name="comment"
          />
        </label>
        <button disabled={textDisabled} type="sumbit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentPoster;
