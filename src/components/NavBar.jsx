import { useState, useEffect } from 'react';
import { getCategories } from './Api';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ everyReview }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <div className="bg-light">
      <Container className="navigationBar">
        <div className="row">
          <div className="col-12">
            <Navbar className="rounded" bg="light" expand="lg">
              <Navbar.Brand className="text-center m-2" href="/">
                Home
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '40vh' }}
                  navbarScroll
                >
                  <Nav.Link href="/reviews">All Reviews</Nav.Link>
                  <NavDropdown title="Categories" id="navbarScrollingDropdown">
                    {categories.map((category) => {
                      return (
                        <NavDropdown.Item
                          key={category.slug}
                          href={`/reviews/category/${category.slug}`}
                        >
                          <p>
                            {category.slug.charAt(0).toUpperCase() +
                              category.slug.slice(1)}
                          </p>
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;

// <div>
//   <div className="pt-3 px-4 border-top border-bottom">
//     <nav className="d-flex justify-content-between">
//       <Link
//         className="p-2 link-secondary text-decoration-none"
//         to="/reviews"
//       >
//         <p>All Reviews</p>
//       </Link>
//       {categories.map((category) => {
//         return (
//           <Link
//             className="p-2 link-secondary text-decoration-none"
//             key={category.slug}
//             to={`/reviews/category/${category.slug}`}
//           >
//             <p>
//               {category.slug.charAt(0).toUpperCase() +
//                 category.slug.slice(1)}
//             </p>
//           </Link>
//         );
//       })}
//     </nav>
//   </div>
// </div>
