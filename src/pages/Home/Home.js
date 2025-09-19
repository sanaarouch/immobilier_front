import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector(state => state.properties);

  useEffect(() => {
    // Simulation de données pour commencer
    dispatch({
      type: 'FETCH_PROPERTIES_SUCCESS',
      payload: [
        {
          id: 1,
          title: 'Appartement moderne',
          price: '250000€',
          location: 'Paris',
          image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 2,
          title: 'Maison familiale',
          price: '450000€',
          location: 'Lyon',
          image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 3,
          title: 'Studio centre-ville',
          price: '180000€',
          location: 'Marseille',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    });
  }, [dispatch]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Chargement...</span>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <div className="alert alert-danger" role="alert">
          Erreur: {error}
        </div>
      </Container>
    );
  }

  return (
    <div className="home">
      <div className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 text-white mb-4">
                Trouvez votre bien immobilier idéal
              </h1>
              <p className="lead text-white mb-4">
                Découvrez notre sélection de propriétés exceptionnelles
              </p>
              <Button variant="primary" size="lg">
                Commencer la recherche
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">Nos dernières propriétés</h2>
          </Col>
        </Row>
        <Row>
          {properties.map(property => (
            <Col md={4} key={property.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={property.image} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {property.location}
                  </Card.Text>
                  <div className="mt-auto">
                    <h5 className="text-primary mb-3">{property.price}</h5>
                    <Button variant="outline-primary" className="w-100">
                      Voir les détails
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;