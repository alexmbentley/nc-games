import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import getReviews from './Api';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
  const [everyReview, setEveryReview] = useState([]);
  useEffect(() => {
    axios
      .get(`https://alexs-backend-project.herokuapp.com/api/reviews`)
      .then(({ data }) => {
        setEveryReview(data.reviews);
        console.log(data.reviews, '<<< data');
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
