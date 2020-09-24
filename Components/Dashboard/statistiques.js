import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './statistiques.module.css';

const state = {
  labels: ['Janvier', 'Fevrier', 'Mars',
           'Avril', 'Mai'],
  datasets: [
    {
      label: 'Achats',
      backgroundColor: '#3FBFBF',
      borderColor: '#3FBFBF',
      borderWidth: 2,
      data: [35, 59, 55, 55, 56]
    },
    {
      label: 'Constructions',
      backgroundColor: '#CC6ACC',
      borderColor: '#CC6ACC',
      borderWidth: 2,
      data: [50, 45, 48, 45, 38]
    },
    {
      label: 'Ventes',
      backgroundColor: '#CBD250',
      borderColor: '#CBD250',
      borderWidth: 2,
      data: [40, 57, 50, 50, 52]
    }
  ]
}

const Statistiques = () => { 
  return (

      <div className={styles.Statistiques}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Evolution par mois ',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  );
}

  export default Statistiques;

