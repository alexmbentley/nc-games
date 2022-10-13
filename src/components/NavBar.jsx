import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from './Api';

const NavBar = ({ everyReview }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <div>
      <section className="navBar">
        <Link to="/reviews">
          <p className="navCategories">All Reviews</p>
        </Link>
        <p className="navCategories">Categories: </p>
        {categories.map((category) => {
          return (
            <Link key={category.slug} to={`/reviews/category/${category.slug}`}>
              <p className="navCategories">
                {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)}
              </p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default NavBar;
