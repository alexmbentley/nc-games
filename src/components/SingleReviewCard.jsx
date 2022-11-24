const SingleReviewCard = ({ review }) => {
  return (
    <div>
      <div className="col-12  shadow card my-2">
        <div className="row">
          <div className="col-md-7 col-xs-6 px-3">
            <div className="">
              <h3 className="mx-1 my-3 text-start">{review.title}</h3>
              <div className="card mb-3">
                <p className="m-1 text-start">User: {review.owner}</p>
                <p className="m-1 text-start">
                  Game Designer: {review.designer}
                </p>
                <p className="m-1 text-start">Category: {review.category}</p>
                <p className="m-1 text-start">
                  Posted on: {review.created_at.substring(0, 10)}
                </p>
                <p className="m-1 mb-3 text-start">{review.review_body}</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img
              className="singleReviewImage"
              src={review.review_img_url}
              alt={review.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewCard;
