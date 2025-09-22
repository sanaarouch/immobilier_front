import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyInterest: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    console.log('Formulaire envoyé:', formData);
    setShowAlert(true);
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      propertyInterest: ''
    });

    // Masquer l'alerte après 5 secondes
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="contact-page">
      <Container className="py-5">
        <Row className="mb-5">
          <Col className="text-center">
            <h1>Contactez-nous</h1>
            <p className="lead text-muted">
              Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet immobilier
            </p>
          </Col>
        </Row>

        {showAlert && (
          <Alert variant="success" className="mb-4">
            <strong>Message envoyé avec succès !</strong> Nous vous recontacterons dans les plus brefs délais.
          </Alert>
        )}

        <Row>
          {/* Formulaire de contact */}
          <Col lg={8} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="mb-4">Envoyez-nous un message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nom complet *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom et prénom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="01 23 45 67 89"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Bien qui vous intéresse</Form.Label>
                        <Form.Select
                          name="propertyInterest"
                          value={formData.propertyInterest}
                          onChange={handleChange}
                        >
                          <option value="">Sélectionnez un bien</option>
                          <option value="appartement-moderne">Appartement moderne - Paris 15ème</option>
                          <option value="studio-lumineux">Studio lumineux - Nice Centre</option>
                          <option value="villa-piscine">Villa avec piscine - Cannes</option>
                          <option value="autre">Autre bien</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Sujet *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Objet de votre demande"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet ou posez vos questions..."
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" size="lg" className="w-100">
                    Envoyer le message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Informations de contact */}
          <Col lg={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4 className="mb-4">Nos coordonnées</h4>
                
                <div className="contact-info mb-3">
                  <FaMapMarkerAlt className="text-primary me-3" />
                  <div>
                    <strong>Adresse</strong><br />
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </div>
                </div>

                <div className="contact-info mb-3">
                  <FaPhone className="text-primary me-3" />
                  <div>
                    <strong>Téléphone</strong><br />
                    01 42 75 89 63
                  </div>
                </div>

                <div className="contact-info mb-3">
                  <FaEnvelope className="text-primary me-3" />
                  <div>
                    <strong>Email</strong><br />
                    contact@immobilier.com
                  </div>
                </div>

                <div className="contact-info">
                  <FaClock className="text-primary me-3" />
                  <div>
                    <strong>Horaires</strong><br />
                    Lun - Ven: 9h00 - 18h00<br />
                    Sam: 9h00 - 12h00<br />
                    Dim: Fermé
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Équipe */}
            <Card className="shadow-sm">
              <Card.Body>
                <h4 className="mb-4">Notre équipe</h4>
                
                <div className="team-member mb-3">
                  <strong>Marie Dubois</strong><br />
                  <small className="text-muted">Conseillère Paris</small><br />
                  <small>marie.dubois@immobilier.com</small>
                </div>

                <div className="team-member mb-3">
                  <strong>Pierre Martin</strong><br />
                  <small className="text-muted">Conseiller Nice</small><br />
                  <small>pierre.martin@immobilier.com</small>
                </div>

                <div className="team-member">
                  <strong>Sophie Leroy</strong><br />
                  <small className="text-muted">Conseillère Cannes</small><br />
                  <small>sophie.leroy@immobilier.com</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;