import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Parc Immobilier sur Mesure</h5>
            <p>Votre partenaire immobilier de confiance depuis 20 ans.</p>
          </Col>
          <Col md={3}>
            <h6>Contact</h6>
            <p>
              9 rue Paul Gauguin<br />
              Pontoise, France<br />
              01 30 32 86 30
            </p>
          </Col>
          <Col md={3}>
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li>Achat</li>
              <li>Vente</li>
              <li>Construction</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Parc Immobilier sur Mesure. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;