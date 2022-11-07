import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-3">
      <div>
        <Link className="text-decoration-none text-dark" to="/">
          <h1>NC Game Reviews</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
