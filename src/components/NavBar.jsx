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
          <p>All Reviews</p>
        </Link>
      </section>
      <section className="navBar">
        {categories.map((category) => {
          return (
            <Link key={category.slug} to={`/reviews/category/${category.slug}`}>
              <p>{category.slug}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default NavBar;
