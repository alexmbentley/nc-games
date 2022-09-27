import { useState } from 'react';
import { useEffect } from 'react';
import { getReviews } from './Api';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
  const [everyReview, setEveryReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getReviews().then(({ data }) => {
      setEveryReview(data.reviews);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="pageTitle">All Items</h2>
      {everyReview.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
};

export default AllReviews;
