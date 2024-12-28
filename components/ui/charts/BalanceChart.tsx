'use client'
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
)

const BalanceChart = () => {
  const data = {
    labels: ['May', 'Jul', 'Sep', 'Nov', 'Jan', 'Mar'],
    datasets: [
      {
        fill: true,
        label: 'Marketing',
        data: [30000, 45000, 35000, 50000, 40000, 27000],
        borderColor: '#4CEBBB',
        backgroundColor: 'rgba(76, 235, 187, 0.1)',
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#666',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
        },
      },
    },
  }

  return <Line data={data} options={options} />
}

export default BalanceChart
