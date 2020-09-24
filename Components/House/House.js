import React, { Component } from 'react';
import styles from './House.module.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import { CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as img from "../../styles.css/appart1.jpg";
import * as img2 from "../../styles.css/appart2.jpg";
import * as img3 from "../../styles.css/appart3.jpg";
import * as img4 from "../../styles.css/appart4.jpg";
import * as img5 from "../../styles.css/maison5.jpg";
import * as img6 from "../../styles.css/maison6.jpg";



export class House extends Component {
    render() {
        return (
           
            <section className={styles.house}>
                
                    <CardColumns>
                        
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} height='280px' width='450px'/>
                                    <Card.Body>
                                        <Card.Title>400 000 €    4 211 €/m²
                                            <br />Appartement 95 m²
                                            <br />3 pièces - 2 chambres
                                        </Card.Title>
                                    <Card.Text>
                                    Dans le quartier des musiciens, appartement 3 pièces de 95,45 m², composé d'un grand séjour, d'une cuisine séparée, d'une chambre maître  avec salle de bain avec WC, d'une seconde chambre, d'une salle de douche avec WC, et d'un bureau. Trois balcons exposés au sud, parquet au sol.Soumis au statut de la copropriété. <br /> Charges courantes annuelles : 1405 € /an
                                    </Card.Text>
                                    <Button variant="primary">Nous Contacter</Button>
                                    </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img2} height='280px' width='450px'/>
                                <Card.Body>
                                    <Card.Title>262 500 €    3 989 €/m²
                                            <br />Appartement 65,81 m²
                                            <br /> 3 pièces - 2 chambres
                                    </Card.Title>
                                    <Card.Text>
                                    Au 4 ème et avant dernier étage, appartement 3 pièces de 65.81 m², <br /> vaste séjour avec cuisine américaine meublée et équipée, deux balcons, cellier,<br />  wc séparé, salle de douche, deux chambres. Double vitrage aluminium.<br />  En parfait état.
                                    Biens soumis au statut de la copropriété.
                                    <br /> Charges courantes annuelles : 1800 € /an.
                                    </Card.Text>
                                    <Button variant="primary">Nous Contacter</Button>
                                </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img3} height='280px' width='450px'/>
                                <Card.Body>
                                    <Card.Title>85 000€    4 092 €/m²
                                    <br />Appartement 20,77 m²
                                    <br /> 1 pièce
                                    </Card.Title>
                                    <Card.Text>
                                    A quelques pas du célèbre boulevard Victor Hugo, dans splendide immeuble" Art déco"<br/> <br/>
                                    Chambre/Studio situé en entresol de 21m² en parfait état , vendu meublé.<br/><br/>
                                    Spécial Investisseur ! A visiter sans tarder Bien soumis au statut de la copropriété, Pas de Procedure en cours à notre connaissance
                                    </Card.Text>
                                    <Button variant="primary">Nous Contacter</Button>
                                </Card.Body>
                        </Card>
                    </CardColumns>
                    <CardColumns>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img5} height='280px' width='450px'/>
                                <Card.Body>
                                    <Card.Title>663 500 €    6 635 €/m²
                                    <br />Maison 100 m²
                                    <br />4 pièces - 3 chambres
                                    </Card.Title>
                                    <Card.Text>
                                        Entrée avec placard <br/>Wc indépendant<br />Cuisine ouverte<br/>Salon / séjour
                                        <br/> 3 chambres <br/> 1 salle de bain <br/> Garage intégré<br/><br/>
                                        Prix hors terrassement et permis
                                        Renseignements sur demande
                                        Honoraires à la charge du vendeur
                                    </Card.Text>
                                    <Button variant="primary">Nous Contacter</Button>
                                </Card.Body>
                            </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img6} height='280px' width='450px'/>
                                <Card.Body>
                                    <Card.Title>349 000€    4 295 €/m²
                                    <br />Appartement 81,26 m²
                                    <br /> 4 pièces 
                                    </Card.Title>
                                    <Card.Text>
                                    Situé proche de l'avenue Jean Médecin et des plages, appartement 3 pièces dernier étage avec vue dégagée,
                                    Entrée avec placards,
                                    Salon avec accès terrasse, cuisine indépendante italienne et équipée,
                                    Deux chambres dont une avec accès terrasse et l'autre accès balcon,
                                    Salle de douche, WC indépendants.
                                    Cave.
                                    
                                    </Card.Text>
                                    <Button variant="primary">Nous Contacter</Button>
                                </Card.Body> 
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img4} height='280px' width='450px'/>
                                <Card.Body>
                                    <Card.Title>800 000€   
                                            <br />Maison 150 m²
                                            <br /> 4 Chambres
                                    </Card.Title>
                                    <Card.Text>
                                    Villa les pieds dans l'eau. Accès unique à la plage avec un ponton-solarium privé à 5 m de la mer.
                                    D'une surface de 150 m²,un séjour avec cuisine ouverte, de 4 chambres avce salle de bains et wc. Toutes les pièces donnent sur la terrasse panoramique, une piscine à contre-courant chauffée complète le tout. Climatisation totale. 
                                    Situation exceptionnelle.
                                    </Card.Text>
                                    <Button variant="primary">Nous Contacter</Button>
                                </Card.Body>
                        </Card>
                    </CardColumns>
            </section>      
        )
    }
}
export default House;