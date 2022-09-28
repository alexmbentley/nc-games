import { useState } from 'react';
import { addVote } from './Api';

const SingleReviewCard = ({ review }) => {
  const [votes, setVotes] = useState(0);
  const [revId, setRevId] = useState(review.review_id);
  const [isError, setIsError] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(false);
  const votesObj = { inc_votes: 1 };

  const sendVote = (event) => {
    if (votes === 0) {
      setIsError(null);
      setVotes(votes + 1);
      setButtonStatus(true);
      addVote(revId, votesObj).catch((err) => {
        setVotes(0);
        setButtonStatus(false);
        setIsError('Something went wrong');
      });
    }
  };

  return (
    <div className="reviewCard">
      <h3 className="reviewTitle">{review.title}</h3>
      <p>User: {review.owner}</p>
      <img
        className="reviewImage"
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <p>Game Designer: {review.designer}</p>
      <p>Category: {review.category}</p>
      <p>Posted on: {review.created_at.substring(0, 10)}</p>
      <p>{review.review_body}</p>
      <p>Votes: {review.votes + votes}</p>
      <p>{isError}</p>
      <button disabled={buttonStatus} onClick={sendVote}>
        Upvote
      </button>
    </div>
  );
};

export default SingleReviewCard;
