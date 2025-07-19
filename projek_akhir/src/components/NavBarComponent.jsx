import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
    return () => window.removeEventListener('scroll', changeBackgroundColor);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${changeColor ? 'color-active' : 'bg-white'}`}
    >
      <Container>
        <Navbar.Brand href="/" className="fs-3 fw-bold text-dark">
          Kursus Kelas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => (
              <div className="nav-link" key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </div>
            ))}
          </Nav>
          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">
              Join With Us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
