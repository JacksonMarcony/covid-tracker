import React from 'react'
import { HorizontalBar } from '@reactchartjs/react-chart.js'


  
  

const Chart = (props) => {
  const data = {
    labels: ['Confirmed', 'Infected', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: ['Cases'] ,
        data: [props.data["confirmed"] ,props.data["cases"], props.data["recovered"], props.data["deaths"]],
        backgroundColor: [
            'rgba(0, 200, 255, 0.2)',
            'rgba(0, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(255, 0, 0, 0.2)',
        ],
        borderColor: [
            'rgba(0, 200, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(255, 0, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false, 
    legend: { display: false },
    title: { display: true, text: `Current state in: ${props.data["country"]} `, fontSize: 30 },
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

  return(
  <>
  <div className="container-chart-global">
    <HorizontalBar 
      height={350}
      data={data} 
      options={options} />
  </div>
  </>
)}

export default Chart
