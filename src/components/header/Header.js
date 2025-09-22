import React from 'react';
import { Navbar, Nav, Container, Button, Badge, Row, Col } from 'react-bootstrap';
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
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-header">
      <Container>
        <Row className="w-100 align-items-center">
          {/* Brand Section */}
          <Col lg={3} md={4} className="d-flex align-items-center">
            <LinkContainer to="/">
              <Navbar.Brand className="d-flex align-items-center mb-0">
                <FaBuilding className="text-primary me-2" size={20} />
                <div>
                  <div className="brand-title">Immobilier Sur Mesure</div>
                  <div className="brand-subtitle">Votre partenaire immobilier de confiance</div>
                </div>
              </Navbar.Brand>
            </LinkContainer>
          </Col>
          
          {/* Navigation */}
          <Col lg={4} md={4} className="d-none d-md-block">
            <Nav className="justify-content-center">
              <LinkContainer to="/">
                <Nav.Link className="nav-link-compact">
                  <FaHome className="me-1" size={14} />
                  Accueil
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/properties">
                <Nav.Link className="nav-link-compact">
                  <FaBuilding className="me-1" size={14} />
                  Propriétés
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-link-compact">
                  <FaEnvelope className="me-1" size={14} />
                  Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          
          {/* Section Authentification */}
          <Col lg={5} md={4} className="d-flex justify-content-end align-items-center">
            {isAuthenticated ? (
              <div className="d-flex align-items-center">
                <div className="user-info me-3">
                  <FaUser className="text-primary me-1" size={14} />
                  <span className="text-white small">
                    {user?.name || user?.email?.split('@')[0]}
                  </span>
                </div>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={handleLogout}
                  className="btn-compact"
                >
                  <FaSignOutAlt className="me-1" size={12} />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <LinkContainer to="/login">
                  <Button variant="outline-light" size="sm" className="btn-compact">
                    <FaSignInAlt className="me-1" size={12} />
                    Connexion
                  </Button>
                </LinkContainer>
                <LinkContainer to="/inscription">
                  <Button variant="primary" size="sm" className="btn-compact">
                    <FaUserPlus className="me-1" size={12} />
                    Inscription
                  </Button>
                </LinkContainer>
              </div>
            )}
          </Col>
        </Row>
        
        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="mobile-navbar-nav" className="d-md-none" />
        <Navbar.Collapse id="mobile-navbar-nav" className="d-md-none">
          <Nav className="w-100 text-center mt-2">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-mobile">
                <FaHome className="me-1" />
                Accueil
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/properties">
              <Nav.Link className="nav-link-mobile">
                <FaBuilding className="me-1" />
                Propriétés
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link-mobile">
                <FaEnvelope className="me-1" />
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;