import React from 'react';
import styles from './coordonnees.module.css';


const Coordonnees = () => {
    return (
            <div className={styles.Coordonnees}>
              <article className={styles.adresse}>
                    <h5>9 rue Paul Gauguin</h5>
                    <p>Pontoise-France</p>
              </article>
              <article className={styles.contact}>
                  <h5>Nous Contacter</h5>
                  <p> 01 30 32 86 30</p>
              </article>
            </div>
    );
}


export default Coordonnees;
