import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchProperties } from '../../store/actions/propertyActions';
import SearchModal from '../../components/search/SearchModal';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { properties, loading, error } = useSelector(state => state.properties);
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [filteredProperties, setFilteredProperties] = React.useState([]);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  const handleSearch = (criteria) => {
    let filtered = [...properties];

    // Filtrer par localisation
    if (criteria.location) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(criteria.location.toLowerCase())
      );
    }

    // Filtrer par prix
    if (criteria.priceMin) {
      filtered = filtered.filter(property => property.price >= parseInt(criteria.priceMin));
    }
    if (criteria.priceMax) {
      filtered = filtered.filter(property => property.price <= parseInt(criteria.priceMax));
    }

    // Filtrer par surface
    if (criteria.surface) {
      filtered = filtered.filter(property => property.surface >= parseInt(criteria.surface));
    }

    // Filtrer par nombre de pièces
    if (criteria.rooms) {
      const rooms = parseInt(criteria.rooms);
      if (rooms === 5) {
        filtered = filtered.filter(property => property.rooms >= 5);
      } else {
        filtered = filtered.filter(property => property.rooms === rooms);
      }
    }

    // Filtrer par nombre de chambres
    if (criteria.bedrooms) {
      const bedrooms = parseInt(criteria.bedrooms);
      if (bedrooms === 4) {
        filtered = filtered.filter(property => property.bedrooms >= 4);
      } else {
        filtered = filtered.filter(property => property.bedrooms === bedrooms);
      }
    }

    setFilteredProperties(filtered);
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </Container>
    );
  }

  if (error && properties.length === 0) {
    return (
      <Container className="text-center mt-5">
        <div className="alert alert-danger" role="alert">
          <h4>Problème de connexion à l'API</h4>
          <p>Erreur: {error}</p>
          <p>Vérifiez que votre serveur backend fonctionne sur <code>http://localhost:3001</code></p>
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
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setShowSearchModal(true)}
              >
                Commencer la recherche
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">
              {filteredProperties.length === properties.length 
                ? 'Nos dernières propriétés' 
                : `${filteredProperties.length} propriété(s) trouvée(s)`
              }
            </h2>
          </Col>
        </Row>
        <Row>
          {filteredProperties.length === 0 ? (
            <Col className="text-center">
              <p>Aucune propriété ne correspond à vos critères de recherche.</p>
              <Button variant="outline-primary" onClick={() => setShowSearchModal(true)}>
                Modifier la recherche
              </Button>
            </Col>
          ) : (
            filteredProperties.map(property => (
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
                  {property.description && (
                    <Card.Text className="text-truncate">
                      {property.description}
                    </Card.Text>
                  )}
                  <div className="mt-auto">
                    <h5 className="text-primary mb-3">
                      {typeof property.price === 'number' 
                        ? `${property.price.toLocaleString('fr-FR')} €`
                        : property.price
                      }
                    </h5>
                    <Button 
                      variant="outline-primary" 
                      className="w-100"
                      onClick={() => navigate(`/property/${property.id}`)}
                    >
                      Voir les détails
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            ))
          )}
        </Row>
      </Container>

      <SearchModal
        show={showSearchModal}
        onHide={() => setShowSearchModal(false)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Home;