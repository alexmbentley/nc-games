import { getSingleReview } from './Api';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { useParams } from 'react-router';
import SingleReviewCard from './SingleReviewCard';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  let catRev = [];

  useEffect(() => {
    getSingleReview(id)
      .then(({ data }) => {
        console.log(data, '<<this is data');
        setSingleReview([data.Review]);

        setIsLoading(false);
      })
      .catch((error) => {
        if (error) {
          setIsLoading(false);
          setIsError(true);
        }
      });
  }, [id]);
  console.log(singleReview, 'single review after zpush');
  if (singleReview.length !== 0)
    return (
      <div>
        <h2 className="pageTitle">Review</h2>
        {singleReview.map((review) => (
          <SingleReviewCard key={review.review_id} review={review} />
        ))}
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
