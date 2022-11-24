import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header py-3">
      <div>
        <Link className="text-decoration-none " to="/">
          <h1 className="headerText">
            <span className="text-white">NC</span> Game Reviews
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
