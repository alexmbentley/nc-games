import { useState } from 'react';
import { useEffect } from 'react';
import { getReviews } from './Api';
import ReviewCard from './ReviewCard';
import { useParams } from 'react-router-dom';

const AllReviews = () => {
  const param = useParams();
  const [everyReview, setEveryReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    getReviews(param, sortBy, orderBy).then(({ data }) => {
      setEveryReview(data.reviews);
      setIsLoading(false);
    });
  }, [param, sortBy, orderBy]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="pageTitle">Reviews</h2>
      <label>
        <label>
          Sort By:
          <select
            className="sortDrop"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            value={sortBy}
          >
            <option value="created_at">Date</option>
            <option value="title">Title</option>
            <option value="owner">User</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        Order:
        <select
          className="sortDrop"
          onChange={(e) => {
            setOrderBy(e.target.value);
          }}
          value={orderBy}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

      {everyReview.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
};

export default AllReviews;
