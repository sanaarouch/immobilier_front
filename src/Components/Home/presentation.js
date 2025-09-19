import React from 'react';
import styles from './presentation.module.css';

const Presentation = () => { 
    return (
            <div className={styles.presentation}>
                <p><h3>Qui Sommes Nous ?</h3></p>
                    <p>Parc immobilier sur mesure, offre depuis 20 ans la possibilité de 
                        satisfaire le besoin de chacun, en fonction de votre budget.
                        <br />Le bon compromis entre l’achat et la construction peut résider dans le fait d’acheter une maison à rénover.<br /> 
                        Pour faire votre choix entre achat et construction, regardez plus loin dans vos projets : 
                        <br />si vous pensez rester moins de 3 ans dans la ville où vous comptez vous installer, la construction n’est probablement pas la meilleure solution.
                    </p>
            </div>
    );     
}

export default Presentation;