import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { FaHome, FaBuilding, FaEnvelope, FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar shadow-sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold fs-4 text-gradient">
            <FaBuilding className="me-2" />
            Immobilier Sur Mesure
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-4">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">
                <FaHome className="me-1" />
                Accueil
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/properties">
              <Nav.Link className="nav-link-custom">
                <FaBuilding className="me-1" />
                Propriétés
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link-custom">
                <FaEnvelope className="me-1" />
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
          
          <Nav className="align-items-center">
            {isAuthenticated ? (
              <div className="d-flex align-items-center">
                <Nav.Link disabled className="text-light me-3">
                  <FaUser className="me-1" />
                  <span className="d-none d-md-inline">Bonjour </span>
                  <Badge bg="primary" className="ms-1">
                    {user?.name || user?.email?.split('@')[0]}
                  </Badge>
                </Nav.Link>
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={handleLogout}
                  className="btn-logout"
                >
                  <FaSignOutAlt className="me-1" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <LinkContainer to="/login">
                  <Button variant="outline-light" size="sm" className="btn-auth">
                    <FaSignInAlt className="me-1" />
                    Connexion
                  </Button>
                </LinkContainer>
                <LinkContainer to="/inscription">
                  <Button variant="primary" size="sm" className="btn-auth">
                    <FaUserPlus className="me-1" />
                    Inscription
                  </Button>
                </LinkContainer>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;