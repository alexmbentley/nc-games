import { useState } from 'react';
import { useEffect } from 'react';
import { getReviews } from './Api';
import ReviewCard from './ReviewCard';
import { useLocation, useParams } from 'react-router-dom';

const AllReviews = () => {
  const param = useParams();
  const [everyReview, setEveryReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [orderBy, setOrderBy] = useState('desc');

  const location = useLocation();

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
      {location.pathname === '/reviews' ? (
        <h2 className="m-3">All Reviews</h2>
      ) : (
        <h2 className="m-3">
          {everyReview[0].category.charAt(0).toUpperCase() +
            everyReview[0].category.slice(1)}{' '}
          reviews
        </h2>
      )}
      <div className="mb-2">
        <label>
          <label className="p-2">
            Sort By:{' '}
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
            </select>
          </label>
          Order:{' '}
          <select
            className="sortDrop"
            onChange={(e) => {
              setOrderBy(e.target.value);
            }}
            value={orderBy}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </div>
      <div className="container">
        <div className="row">
          {everyReview.map((review) => (
            <div key={review.review_id} className="col-lg-4  mb-4">
              <ReviewCard key={review.review_id} review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
