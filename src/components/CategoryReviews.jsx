import { getCatReviews } from './Api';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { useParams } from 'react-router';

const CategoryReviews = () => {
  const [catReviews, setCatReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    getCatReviews(category)
      .then(({ data }) => {
        setCatReviews(data.reviews);
        setIsLoading(false);
        console.log(catReviews);
      })
      .catch((error) => {
        if (error) {
          setIsLoading(false);
          setIsError(true);
        }
      });
  }, [category]);

  if (catReviews.length !== 0)
    return (
      <div>
        <h2 className="pageTitle">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        {catReviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    );

  if (isLoading) return <p>Loading...</p>;

  if (isError)
    return (
      <div>
        <h2 className="pageTitle">Category does not exist</h2>
      </div>
    );
};

export default CategoryReviews;
