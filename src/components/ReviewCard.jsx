import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
  return (
    <div className="card">
      <img
        src={review.review_img_url}
        alt={review.title}
        className="card-img-top"
      />
      <div className="text-start card-body">
        <h5 className="card-title">{review.title}</h5>
        <p>User: {review.owner}</p>

        <p className="card-text">{review.review_body}</p>
        <p>Posted on: {review.created_at.substring(0, 10)}</p>
        <a
          href={`/reviews/id/${review.review_id}`}
          className="btn btn-outline-success btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
