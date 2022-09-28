import { getComments, getSingleReview } from './Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import SingleReviewCard from './SingleReviewCard';
import CommentCard from './CommentCard';
import CommentPoster from './CommentPoster';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
    getComments(id).then(({ data }) => {
      setComments(data);
      console.log(comments, '<<< comments');
      setIsLoading(false);
    });
  }, [id]);

  if (Object.hasOwn(singleReview, 'review_id'))
    return (
      <div>
        <h2 className="pageTitle">Review</h2>
        <SingleReviewCard key={singleReview.review_id} review={singleReview} />
        <CommentPoster
          key={singleReview.votes}
          reviewId={singleReview.review_id}
          comments={comments}
        />
        {Array.isArray(comments) ? (
          <div>
            {console.log(comments, '<<< inside comments')}
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
        ) : (
          <>
            <p className="commentCard">No Comments for this post</p>
          </>
        )}
      </div>
    );

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return (
      <div>
        <h2 className="pageTitle">ID does not exist</h2>
      </div>
    );
};

export default SingleReview;
