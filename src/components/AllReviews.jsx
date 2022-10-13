import { useState } from 'react';
import { useEffect } from 'react';
import { getReviews } from './Api';
import ReviewCard from './ReviewCard';
import { useParams } from 'react-router-dom';

const AllReviews = () => {
  const param = useParams();
  const [everyReview, setEveryReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [orderBy, setOrderBy] = useState('asc');

  useEffect(() => {
    getReviews(param, sortBy, orderBy)
      .then(({ data }) => {
        setIsError(false);
        setEveryReview(data.reviews);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [param, sortBy, orderBy]);

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Category does not exist</h3>;

  return (
    <div className="cardPage">
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
      <div className="grid-container">
        {everyReview.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
