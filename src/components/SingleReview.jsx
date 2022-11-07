import { getComments, getSingleReview } from './Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import SingleReviewCard from './SingleReviewCard';
import CommentCard from './CommentCard';
import CommentPoster from './CommentPoster';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const user = 'jessjelly';
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [comError, setComError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getSingleReview(id)
      .then(({ data }) => {
        setSingleReview(data.Review);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [id]);

  useEffect(() => {
    getComments(id)
      .then(({ data }) => {
        setComments(data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setComError(true);
      });
  }, [id]);

  if (Object.hasOwn(singleReview, 'review_id'))
    return (
      <div className="singleReviewPage">
        <h2 className="pageTitle m-3">Review</h2>
        <div className="container">
          <div className="row">
            <SingleReviewCard
              key={singleReview.review_id}
              review={singleReview}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="">
              <CommentPoster
                key={singleReview.votes}
                reviewId={singleReview.review_id}
                setComments={setComments}
                user={user}
              />

              {comments.length !== 0 ? (
                <div>
                  {comments.map((comment) => (
                    <CommentCard
                      key={comment.comment_id}
                      comment={comment}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <>
                  <p className="commentCard">No Comments for this post</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return (
      <div>
        <h2 className="pageTitle">ID does not exist</h2>
      </div>
    );

  if (comError)
    return (
      <div>
        <h2 className="pageTitle">No comments for this post</h2>
      </div>
    );
};

export default SingleReview;
