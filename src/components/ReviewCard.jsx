const ReviewCard = ({ review }) => {
  return (
    <div className="reviewCard">
      <h3 className="reviewTitle">{review.title}</h3>
      <p>User: {review.owner}</p>
      <img
        className="reviewImage"
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <p>{review.review_body}</p>
    </div>
  );
};

export default ReviewCard;
