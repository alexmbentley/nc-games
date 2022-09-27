import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import getReviews from './Api';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
  const [everyReview, setEveryReview] = useState([]);
  useEffect(() => {
    getReviews().then(({ data }) => {
      setEveryReview(data.reviews);
    });
  }, []);
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
