'use client';

import RoundedButton from "./rounded_button";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import { AreaChart } from "@mui/icons-material";


// Registra los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChartCard() {
  const chartRef = useRef<any>(null);
  
  // Datos de ejemplo para el gráfico
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Entradas',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(99, 102, 241, 0.8)', // color morado
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Salidas',
        data: [8, 15, 7, 12, 9, 11],
        backgroundColor: 'rgba(16, 185, 129, 0.8)', // color verde
        borderRadius: 6,
        borderSkipped: false,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff', // texto blanco para la leyenda
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF', // color gris para los ticks del eje X
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // líneas de grid sutiles
        },
        ticks: {
          color: '#9CA3AF', // color gris para los ticks del eje Y
        }
      },
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
          <RoundedButton IconComponent={AreaChart} />
          <h2 className="text-white font-medium">Gráfico de entradas y salidas</h2>
        </div>
      </div>
      
      <div className="w-full h-full"> {/* Contenedor con altura fija para el gráfico */}
        <Bar 
          ref={chartRef}
          data={data} 
          options={options} 
        />
      </div>
    </div>
  );
}