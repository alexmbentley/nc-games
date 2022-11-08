import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSingleReview } from './Api';
import HomeReview from './HomeReview';

const Home = () => {
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleReview(3)
      .then(({ data }) => {
        setSingleReview(data.Review);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (Object.hasOwn(singleReview, 'review_id'))
    return (
      <div className="container">
        <div className="row">
          <h2 className="mt-2">Welcome to NC Game reviews!</h2>
          <p>Created by Alex Bentley</p>
          <div className="col-md-8 col-sx-12 card mt-3">
            <HomeReview key={singleReview.review_id} review={singleReview} />
          </div>
          <div className="col-1"></div>
          <div className="col-md-3 col-sx-12 card mt-3">
            <h3 className="text-decoration-underline m-3">Categories</h3>

            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/strategy"
            >
              Stratgey
            </Link>
            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/hidden-roles"
            >
              Hidden roles
            </Link>
            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/dexterity"
            >
              Dexterity
            </Link>
            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/push-your-luck"
            >
              Push your luck
            </Link>
            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/roll-and-write"
            >
              Roll and write
            </Link>
            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/deck-building"
            >
              Deck building
            </Link>
            <Link
              className="text-center border rounded width:100% m-1"
              to="/reviews/category/engine-building"
            >
              Roll and write
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home;
