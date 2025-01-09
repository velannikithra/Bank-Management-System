import React, { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { ChartConfiguration } from 'chart.js';

// Register all chart components (this includes CategoryScale and LinearScale)
Chart.register(...registerables);

const TradingChart: React.FC = () => {
  useEffect(() => {
    const ctx = document.getElementById("tradingChart") as HTMLCanvasElement;

    // Define the chart data structure with correct types
    const config: ChartConfiguration<'bar' | 'line', number[], string> = {
      type: 'bar', // Primary chart type
      data: {
        labels: ['2024-01', '2024-02', '2024-03', '2024-04', '2024-05'],
        datasets: [
          {
            label: 'Deposits ($)',
            data: [5000, 7000, 8000, 10000, 9500],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            type: 'bar', // Explicitly specify the dataset type
          },
          {
            label: 'Withdrawals ($)',
            data: [3000, 4000, 4500, 6000, 5000],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            type: 'bar',
          },
          {
            label: 'Customer Count',
            data: [200, 220, 250, 270, 300],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            type: 'line',
            yAxisID: 'y1',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Trading Activity: Deposits, Withdrawals, and Customer Count',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            type: 'category',
          },
          y: {
            type: 'linear',
            beginAtZero: true,
            title: {
              display: true,
              text: 'Amount ($)',
            },
          },
          y1: {
            type: 'linear',
            position: 'right',
            beginAtZero: true,
            title: {
              display: true,
              text: 'Customers',
            },
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      },
    };
    
    // Create the chart using the canvas context and configuration
    if (ctx) {
      new Chart(ctx, config);
    }
  }, []); // Empty dependency array to ensure the chart is only created once on mount

  return <canvas id="tradingChart" width="400" height="200"></canvas>;
};

export default TradingChart;
