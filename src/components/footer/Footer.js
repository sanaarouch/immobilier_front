import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaBuilding } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="align-items-center py-3">
          {/* Brand Section */}
          <Col lg={4} md={6} className="mb-2 mb-lg-0">
            <div className="d-flex align-items-center">
              <FaBuilding className="text-primary me-2" size={20} />
              <h5 className="mb-0 text-white fw-bold">Immobilier Sur Mesure</h5>
            </div>
            <p className="text-light-gray mb-0 small">Votre partenaire immobilier de confiance</p>
          </Col>
          
          {/* Quick Links */}
          <Col lg={3} md={6} className="mb-2 mb-lg-0">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="/" className="footer-link me-3">Accueil</a>
              <a href="/properties" className="footer-link me-3">Propriétés</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </Col>
          
          {/* Contact Info */}
          <Col lg={3} md={6} className="mb-2 mb-lg-0">
            <div className="contact-compact">
              <div className="d-flex align-items-center mb-1">
                <FaPhone className="text-primary me-2" size={12} />
                <a href="tel:0123456789" className="footer-link small">01 23 45 67 89</a>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="text-primary me-2" size={12} />
                <a href="mailto:contact@immobilier.com" className="footer-link small">contact@immobilier.com</a>
              </div>
            </div>
          </Col>
          
          {/* Social Links */}
          <Col lg={2} md={6}>
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="javascript:void(0)" className="social-link" aria-label="Facebook">
                <FaFacebookF size={14} />
              </a>
              <a href="javascript:void(0)" className="social-link" aria-label="Twitter">
                <FaTwitter size={14} />
              </a>
              <a href="javascript:void(0)" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn size={14} />
              </a>
              <a href="javascript:void(0)" className="social-link" aria-label="Instagram">
                <FaInstagram size={14} />
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-light-gray copyright">
              © 2024 Immobilier Sur Mesure. Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;