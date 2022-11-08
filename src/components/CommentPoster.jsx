import { useState } from 'react';
import { postComment } from './Api';

const CommentPoster = ({ reviewId, setComments, user }) => {
  const [formBody, setFormBody] = useState('');
  const [commentReturn, setCommentReturn] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [commentComplete, setCommentComplete] = useState('Add a comment...');
  const textDisabled = formBody.length === 0;

  const handleSubmit = (e) => {
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
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 card my-2">
          <form onSubmit={handleSubmit}>
            <label className="m-1">{commentComplete}</label>
            <textarea
              rows="3"
              value={formBody}
              onChange={(event) => setFormBody(event.target.value)}
              className=" commentBox"
              type="text"
              name="comment"
            />
            <button
              className="m-1 btn btn-light"
              disabled={textDisabled || isLoading}
              type="sumbit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentPoster;
