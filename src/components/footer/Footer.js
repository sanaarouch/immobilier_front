import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer text-light mt-5">
      <Container>
        <div className="footer-content">
          <Row className="g-2">
            <Col lg={4} md={6}>
              <div className="footer-brand">
                <h4 className="fw-bold">
                  <FaBuilding className="me-2 text-primary" />
                  Immobilier Sur Mesure
                </h4>
                <p className="text-muted">
                  Votre partenaire immobilier de confiance.
                </p>
                <div className="social-links">
                  <Button variant="outline-primary" size="sm" className="social-btn me-2">
                    <FaFacebookF />
                  </Button>
                  <Button variant="outline-primary" size="sm" className="social-btn me-2">
                    <FaTwitter />
                  </Button>
                  <Button variant="outline-primary" size="sm" className="social-btn me-2">
                    <FaLinkedinIn />
                  </Button>
                  <Button variant="outline-primary" size="sm" className="social-btn">
                    <FaInstagram />
                  </Button>
                </div>
              </div>
            </Col>
            
            <Col lg={3} md={6}>
              <h6 className="fw-bold mb-2 text-primary">Navigation</h6>
              <ul className="list-unstyled footer-links">
                <li><a href="/" className="text-muted">Accueil</a></li>
                <li><a href="/properties" className="text-muted">Propriétés</a></li>
                <li><a href="/contact" className="text-muted">Contact</a></li>
              </ul>
            </Col>
            
            <Col lg={2} md={6}>
              <h6 className="fw-bold mb-2 text-primary">Services</h6>
              <ul className="list-unstyled footer-links">
                <li><a href="#" className="text-muted">Achat</a></li>
                <li><a href="#" className="text-muted">Vente</a></li>
                <li><a href="#" className="text-muted">Location</a></li>
              </ul>
            </Col>
            
            <Col lg={3} md={6}>
              <h6 className="fw-bold mb-2 text-primary">Contact</h6>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="text-primary me-2" />
                  <span className="text-muted">Paris 75008</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="text-primary me-2" />
                  <a href="tel:0123456789" className="text-muted">01 23 45 67 89</a>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="text-primary me-2" />
                  <a href="mailto:contact@immobilier.com" className="text-muted">contact@immobilier.com</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-muted">
                &copy; 2024 Immobilier Sur Mesure. Tous droits réservés.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="text-muted">
                Fait avec <FaHeart className="text-danger" /> par notre équipe
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;