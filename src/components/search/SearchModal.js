import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const SearchModal = ({ show, onHide, onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    priceMin: '',
    priceMax: '',
    surface: '',
    rooms: '',
    bedrooms: '',
    propertyType: ''
  });

  const handleChange = (e) => {
    setSearchCriteria({
      ...searchCriteria,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
    onHide();
  };

  const handleReset = () => {
    setSearchCriteria({
      location: '',
      priceMin: '',
      priceMax: '',
      surface: '',
      rooms: '',
      bedrooms: '',
      propertyType: ''
    });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Critères de recherche</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Localisation</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={searchCriteria.location}
                  onChange={handleChange}
                  placeholder="Ex: Paris, Lyon, Nice..."
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Type de bien</Form.Label>
                <Form.Select
                  name="propertyType"
                  value={searchCriteria.propertyType}
                  onChange={handleChange}
                >
                  <option value="">Tous les types</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="studio">Studio</option>
                  <option value="villa">Villa</option>
                  <option value="loft">Loft</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Prix minimum (€)</Form.Label>
                <Form.Control
                  type="number"
                  name="priceMin"
                  value={searchCriteria.priceMin}
                  onChange={handleChange}
                  placeholder="Ex: 100000"
                  min="0"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Prix maximum (€)</Form.Label>
                <Form.Control
                  type="number"
                  name="priceMax"
                  value={searchCriteria.priceMax}
                  onChange={handleChange}
                  placeholder="Ex: 500000"
                  min="0"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Surface minimum (m²)</Form.Label>
                <Form.Control
                  type="number"
                  name="surface"
                  value={searchCriteria.surface}
                  onChange={handleChange}
                  placeholder="Ex: 50"
                  min="0"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nombre de pièces</Form.Label>
                <Form.Select
                  name="rooms"
                  value={searchCriteria.rooms}
                  onChange={handleChange}
                >
                  <option value="">Indifférent</option>
                  <option value="1">1 pièce</option>
                  <option value="2">2 pièces</option>
                  <option value="3">3 pièces</option>
                  <option value="4">4 pièces</option>
                  <option value="5">5 pièces et plus</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Nombre de chambres</Form.Label>
                <Form.Select
                  name="bedrooms"
                  value={searchCriteria.bedrooms}
                  onChange={handleChange}
                >
                  <option value="">Indifférent</option>
                  <option value="0">Studio</option>
                  <option value="1">1 chambre</option>
                  <option value="2">2 chambres</option>
                  <option value="3">3 chambres</option>
                  <option value="4">4 chambres et plus</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleReset}>
          Réinitialiser
        </Button>
        <Button variant="outline-secondary" onClick={onHide}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Rechercher
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;