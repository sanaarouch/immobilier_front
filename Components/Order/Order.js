import React from 'react';
import {Line} from 'react-chartjs-2';
import styles from './Order.module.css';

const state = {
  labels: ['Janvier', 'Fevrier', 'Mars',
           'Avril', 'Mai'],
  datasets: [
    {
      label: 'Achats',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#CC6A6A',
      borderColor: '#CC6A6A',
      borderWidth: 3,
      data: [35, 59, 55, 55, 56]
    },
    {
        label: 'Ventes',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#CBD250',
        borderColor: '#CBD250',
        borderWidth: 3,
        data: [40, 57, 50, 50, 52]
    },
    {
        label: 'Constructions',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#CC6ACC',
        borderColor: '#CC6ACC',
        borderWidth: 3,
        data: [50, 45, 48, 45, 38]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <section className={styles.Order}>
          <div>
            <Line
              data={state}
              options={{
                title:{
                  display:true,
                  text:'Emissions des Ordres clients',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          <br />
          </div>
      </section>
     
    );
  }
}