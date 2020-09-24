import React, { Component } from 'react';
import styles from './dashboard.module.css';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import { Jumbotron} from 'react-bootstrap';
import api from '../../api/api';
import Statistiques from '../Dashboard/statistiques';
import { Link } from 'react-router-dom';




export class Dashboard extends Component {
    disconnect = () => {
        api.logout();
        window.location = "/";
    };
    render() {
        return (
            <section className={styles.dashboard_container}>
                <Button onClick={this.disconnect} block type="submit">
                    Se déconnecter
                </Button>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Bienvenue dans le dashboard</h1>    
                        </Container>
                    </Jumbotron>
                    <Card>
                        <Card.Header>
                            <Nav>
                                <NavItem>
                                    <h2>Statistiques</h2>
                                </NavItem>      
                            </Nav>
                        </Card.Header>
                        <Card.Body className={styles.Statistiques}>
                            <Statistiques/>  
                        </Card.Body>
                    </Card>
            <br />
            <div>
                <Card style={{ width: '18rem'}}>
                    <Card.Header><h2>Gestion</h2></Card.Header>
                        <ListGroup variant="flush">
                        <ListGroupItem><Link to="/dashboard/house">Houses</Link></ListGroupItem>
                        <ListGroupItem><Link to="/dashboard/gestion">Gestion</Link></ListGroupItem>
                        <ListGroupItem><Link to="/dashboard/users">Users</Link></ListGroupItem>
                        <ListGroupItem><Link to="/dashboard/notifications">Notifications</Link></ListGroupItem>
                        </ListGroup>
                </Card>             
            </div> 
        
        </section>                  
           
        )
    }
}

export default Dashboard;
