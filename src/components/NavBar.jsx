import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <section className="navBar">
        <Link to="/reviews">
          <p>All Reviews</p>
        </Link>
      </section>
      <section className="navBar">
        <Link to="/reviews/category/dexterity">
          <p>Dexterity</p>
        </Link>
        <Link to="/reviews/category/strategy">
          <p>Strategy</p>
        </Link>
        <Link to="/reviews/category/hidden-roles">
          <p>Hidden Roles</p>
        </Link>
        <Link to="/reviews/category/push-your-luck">
          <p>Push Your Luck</p>
        </Link>
        <Link to="/reviews/category/roll-and-write">
          <p>Roll and Write</p>
        </Link>
        <Link to="/reviews/category/deck-building">
          <p>Deck Building</p>
        </Link>
        <Link to="/reviews/category/engine-building">
          <p>Engine Building</p>
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
