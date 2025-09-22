import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Immobilier Sur Mesure</h5>
            <p>Votre partenaire de confiance pour tous vos projets immobiliers.</p>
          </Col>
          <Col md={3}>
            <h6>Liens utiles</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Accueil</a></li>
              <li><a href="/properties" className="text-light">Propriétés</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Contact</h6>
            <p>
              Email: contact@immobilier.com<br />
              Téléphone: 01 23 45 67 89
            </p>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Immobilier Sur Mesure. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;