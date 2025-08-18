import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import Image from 'react-bootstrap/Image';
import '../css/navigation.css';
import axios from 'axios';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsAuth(false);
      setRole('');
      return;
    }

    const userData = localStorage.getItem('user');
    let storedUser = null;

    if (userData && userData !== 'undefined') {
      try {
        storedUser = JSON.parse(userData);
        setRole(storedUser.role);
        setIsAuth(true);
      } catch (err) {
        console.error("Invalid user data:", err);
        localStorage.removeItem('user');
      }
    } else {
      axios.get('http://localhost:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => {
          setRole(res.data.role);
          setIsAuth(true);
          localStorage.setItem('user', JSON.stringify(res.data));
        })
        .catch(err => {
          console.error('Failed to fetch profile', err);
          setIsAuth(false);
          setRole('');
          localStorage.removeItem('user');
        });
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuth(false);
    setRole('');
    navigate('/login');
  };

  // Normalize role to avoid case mismatch
  const normalizedRole = role?.toLowerCase();

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm" sticky="top">
      <Container>
        <Image src="/logo_black.png" height="30px" width="30px" alt="PetHouse Logo" />
        <Navbar.Brand as={Link} to="/" style={{ fontSize: '20px', fontWeight: 'bold' }}>
          PetHouse
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navibar">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Shop" id="shop-nav-dropdown">
              <NavDropdown.Item as={Link} to="/pet">Pet</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/things">Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/food">Food</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <img src="/icons8-cart.gif" alt="Cart" height="30px" width="30px" />
            </Nav.Link>
          </Nav>
          <Nav>
            {isAuth && (
              <NavDropdown
                title={<MdAccountCircle size={25} color="black" />}
                id="profile-dropdown">
                {normalizedRole === 'admin' ? (
                  <NavDropdown.Item as={Link} to="/admin-dashboard">
                    Admin Dashboard
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/customer-dashboard">
                    Customer Dashboard
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
