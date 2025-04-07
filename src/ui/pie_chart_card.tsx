'use client';

import RoundedButton from "./rounded_button";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import {PieChart} from '@mui/icons-material';

// Registra los componentes necesarios de Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PieChartCard() {
  const chartRef = useRef<any>(null);

  // Datos de ejemplo para el gráfico
  const data = {
    labels: ['Gravables', 'Exentos', 'Personal', 'Confiteria'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',  // indigo
          'rgba(16, 185, 129, 0.8)',  // emerald
          'rgba(245, 158, 11, 0.8)', // amber
          'rgba(239, 68, 68, 0.8)'    // red
        ],
        borderColor: '#141414',
        borderWidth: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%', // Hace que sea un gráfico de dona (ajusta este valor para cambiar el grosor)
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#ffffff', // texto blanco para la leyenda
          font: {
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        enabled: true,
        bodyColor: '#fff',
        titleColor: '#fff'
      }
    },
  };

  // Limpieza al desmontar el componente
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      style={{ padding: "16px", backgroundColor: "#141414"}} 
      className="flex flex-col gap-4 justify-between items-center h-full rounded-3xl"
    >
      <div className="flex justify-between items-center w-full">
      <div className="flex gap-2 justify-center items-center">
          <RoundedButton IconComponent={PieChart} />
          <h2 className="text-white font-medium">Productos según departamento</h2>
        </div>
      </div>
      
      <div className="w-full h-full"> {/* Contenedor para el gráfico */}
        <Doughnut 
          ref={chartRef}
          data={data} 
          options={options} 
        />
      </div>
    </div>
  );
}