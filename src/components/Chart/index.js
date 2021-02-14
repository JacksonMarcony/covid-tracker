import React from 'react'
import { HorizontalBar } from '@reactchartjs/react-chart.js'

const data = {
    labels: ['Confirmados', 'Infectados', 'Curados', 'Mortes'],
    datasets: [
      {
        label: ['Confirmados', 'Infectados', 'Curados', 'Mortes'] ,
        data: [9713909 ,794935, 8682773, 236201],
        backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(0, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(255, 0, 0, 0.2)',
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(255, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    legend: { display: false },
    title: { display: true, text: `Estado atual do Covid: Brasil `, fontSize: 30 },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

const Chart = () => {
  return(
  <>
    <HorizontalBar 
      width={500}
	    height={100}
      data={data} 
      options={options} />
  </>
)}

export default Chart
