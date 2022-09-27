import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="navBar">
      <Link to="/reviews">
        <p>All Reviews</p>
      </Link>
    </section>
  );
};

export default NavBar;
