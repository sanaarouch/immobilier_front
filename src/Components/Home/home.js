import React, { Component } from 'react';
import styles from './Home.module.css';
import * as img from "../../styles.css/clef_main.jpg";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiTwotonePhone } from 'react-icons/ai';


export class home extends Component {
    render() {
        
        return (
            <div className={styles.home}>
                <h1> Parc Immobilier sur Mesure </h1>
                <br />
                <h3> Construire, acheter, vendre ?  </h3>
                <br />
                <img src={img} alt="clef en mains" height='280px' width='450px'/> 
                <br />
                <br />
                <Button variant="primary"onClick={this.onButtonClickHandler}>Nous Contacter 
                <AiTwotonePhone /> 
                </Button>
                
            </div>  

        )
       
    }
}

export default home;
