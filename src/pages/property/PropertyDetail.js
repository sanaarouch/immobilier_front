import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaArrowLeft, FaHeart } from 'react-icons/fa';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Données détaillées des propriétés
  const propertiesData = {
    1: {
      id: 1,
      title: "Appartement moderne",
      price: 400000,
      location: "Paris 15ème",
      address: "25 Rue de Vaugirard, 75015 Paris",
      description: "Magnifique appartement de 95m² entièrement rénové avec goût. Situé au 3ème étage d'un immeuble haussmannien avec ascenseur, cet appartement lumineux offre une vue dégagée sur un jardin privatif. La rénovation récente allie modernité et charme de l'ancien avec des matériaux de qualité.",
      surface: 95,
      rooms: 3,
      bedrooms: 2,
      bathrooms: 1,
      floor: 3,
      elevator: true,
      balcony: true,
      parking: false,
      energyClass: "C",
      yearBuilt: 1920,
      yearRenovated: 2023,
      charges: 150,
      propertyTax: 1200,
      features: [
        "Parquet massif",
        "Cuisine équipée",
        "Double vitrage",
        "Chauffage individuel gaz",
        "Cave",
        "Gardien",
        "Fibre optique"
      ],
      images: [
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      agent: {
        name: "Marie Dubois",
        phone: "01 42 75 89 63",
        email: "marie.dubois@immobilier.com"
      }
    },
    2: {
      id: 2,
      title: "Studio lumineux",
      price: 85000,
      location: "Nice Centre",
      address: "12 Avenue Jean Médecin, 06000 Nice",
      description: "Charmant studio de 21m² parfaitement optimisé et entièrement rénové. Situé en plein cœur de Nice, à deux pas de la Place Masséna et de la Promenade des Anglais. Idéal pour un premier achat ou un investissement locatif. L'espace a été pensé pour maximiser le confort avec des rangements intégrés et une kitchenette moderne.",
      surface: 21,
      rooms: 1,
      bedrooms: 0,
      bathrooms: 1,
      floor: 2,
      elevator: false,
      balcony: false,
      parking: false,
      energyClass: "D",
      yearBuilt: 1960,
      yearRenovated: 2024,
      charges: 80,
      propertyTax: 400,
      features: [
        "Kitchenette équipée",
        "Salle d'eau avec douche",
        "Rangements optimisés",
        "Double vitrage",
        "Climatisation réversible",
        "Internet haut débit",
        "Proche transports"
      ],
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2029541/pexels-photo-2029541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      agent: {
        name: "Pierre Martin",
        phone: "04 93 87 65 43",
        email: "pierre.martin@immobilier.com"
      }
    },
    3: {
      id: 3,
      title: "Villa avec piscine",
      price: 800000,
      location: "Cannes",
      address: "15 Boulevard de la Croisette, 06400 Cannes",
      description: "Exceptionnelle villa contemporaine de 150m² avec piscine chauffée et accès direct à la plage. Cette propriété d'exception offre un cadre de vie unique avec ses 4 chambres, ses espaces de vie généreux et sa terrasse panoramique face à la mer. La villa dispose d'un jardin paysager de 500m² avec piscine à débordement et pool house. Prestations haut de gamme dans un environnement privilégié.",
      surface: 150,
      rooms: 5,
      bedrooms: 4,
      bathrooms: 3,
      floor: 0,
      elevator: false,
      balcony: true,
      parking: true,
      energyClass: "B",
      yearBuilt: 2018,
      yearRenovated: null,
      charges: 300,
      propertyTax: 3500,
      gardenSize: 500,
      poolSize: "8x4m",
      features: [
        "Piscine chauffée à débordement",
        "Pool house avec cuisine d'été",
        "Terrasse panoramique 80m²",
        "Jardin paysager 500m²",
        "Garage 2 voitures",
        "Système domotique",
        "Climatisation dans toutes les pièces",
        "Accès direct plage privée",
        "Système d'alarme",
        "Portail automatique"
      ],
      images: [
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      agent: {
        name: "Sophie Leroy",
        phone: "04 93 99 88 77",
        email: "sophie.leroy@immobilier.com"
      }
    }
  };

  useEffect(() => {
    const propertyId = parseInt(id);
    const propertyData = propertiesData[propertyId];
    
    if (propertyData) {
      setProperty(propertyData);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </Container>
    );
  }

  if (!property) {
    return (
      <Container className="text-center mt-5">
        <h2>Propriété non trouvée</h2>
        <Button variant="primary" onClick={() => navigate('/')}>
          Retour à l'accueil
        </Button>
      </Container>
    );
  }

  return (
    <div className="property-detail">
      <Container className="py-4">
        {/* Bouton retour */}
        <Button 
          variant="outline-primary" 
          className="mb-4"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft className="me-2" />
          Retour aux annonces
        </Button>

        <Row>
          {/* Galerie d'images */}
          <Col lg={8}>
            <Card className="mb-4">
              <Carousel>
                {property.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`${property.title} - Photo ${index + 1}`}
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card>

            {/* Description détaillée */}
            <Card className="mb-4">
              <Card.Body>
                <h4>Description</h4>
                <p className="text-muted">{property.description}</p>
                
                <h5 className="mt-4">Caractéristiques</h5>
                <Row>
                  {property.features.map((feature, index) => (
                    <Col md={6} key={index} className="mb-2">
                      <Badge bg="light" text="dark" className="me-2">✓</Badge>
                      {feature}
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Informations principales */}
          <Col lg={4}>
            <Card className="mb-4 sticky-top" style={{ top: '20px' }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h3 className="text-primary mb-0">
                    {property.price.toLocaleString('fr-FR')} €
                  </h3>
                  <Button variant="outline-danger" size="sm">
                    <FaHeart />
                  </Button>
                </div>
                
                <h4>{property.title}</h4>
                <p className="text-muted mb-3">
                  <FaMapMarkerAlt className="me-1" />
                  {property.address}
                </p>

                {/* Caractéristiques principales */}
                <Row className="mb-3">
                  <Col xs={4} className="text-center">
                    <div className="feature-box">
                      <FaRuler className="text-primary mb-1" />
                      <div className="fw-bold">{property.surface}m²</div>
                      <small className="text-muted">Surface</small>
                    </div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div className="feature-box">
                      <FaBed className="text-primary mb-1" />
                      <div className="fw-bold">{property.bedrooms}</div>
                      <small className="text-muted">Chambres</small>
                    </div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div className="feature-box">
                      <FaBath className="text-primary mb-1" />
                      <div className="fw-bold">{property.bathrooms}</div>
                      <small className="text-muted">Salles de bain</small>
                    </div>
                  </Col>
                </Row>

                {/* Informations complémentaires */}
                <div className="mb-3">
                  <small className="text-muted d-block">Étage: {property.floor === 0 ? 'RDC' : `${property.floor}ème`}</small>
                  <small className="text-muted d-block">Classe énergétique: {property.energyClass}</small>
                  <small className="text-muted d-block">Charges: {property.charges}€/mois</small>
                  <small className="text-muted d-block">Taxe foncière: {property.propertyTax}€/an</small>
                  {property.gardenSize && (
                    <small className="text-muted d-block">Jardin: {property.gardenSize}m²</small>
                  )}
                  {property.poolSize && (
                    <small className="text-muted d-block">Piscine: {property.poolSize}</small>
                  )}
                </div>

                <hr />

                {/* Contact agent */}
                <h6>Votre conseiller</h6>
                <div className="mb-3">
                  <div className="fw-bold">{property.agent.name}</div>
                  <small className="text-muted d-block">{property.agent.phone}</small>
                  <small className="text-muted d-block">{property.agent.email}</small>
                </div>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Contacter l'agent
                  </Button>
                  <Button variant="outline-primary">
                    Demander une visite
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyDetail;