const SingleReviewCard = ({ review }) => {
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
    </div>
  );
};

export default SingleReviewCard;
