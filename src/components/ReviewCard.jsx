import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
      <Link to={`/reviews/id/${review.review_id}`} key={review.review_id}>
        <h3 className="reviewTitle">{review.title}</h3>
      </Link>
      <p>User: {review.owner}</p>
      <img
        className="reviewImage"
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <p>Game Designer: {review.designer}</p>
      <p>Posted on: {review.created_at.substring(0, 10)}</p>
      <p className="reviewBody">{review.review_body}</p>
    </div>
  );
};

export default ReviewCard;
