"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function LineChart() {
  return (
    <div className="p-2 border-2 border-white border-solid">
      <h1>Line Chart</h1>
      <Line
        data={{
          labels: months,

          datasets: [
            {
              label: "Sales Made",
              data: Array(12)
                .fill(0)
                .map((elm, i) => (Math.random() * 10 + 1) * 1000),
              borderColor: "#fff",
            },
          ],
        }}
        options={{
          scales: {
            x: {
              title: {
                display: true,
                text: "Months",
                color: "white",
                font: {
                  size: 18,
                  weight: "bold",
                },
              },
              border: {
                color: "white",
              },
              ticks: {
                color: "white",
                font: {
                  size: 14,
                },
              },
              beginAtZero: true,
            },
            y: {
              title: {
                display: true,
                text: "Revenue ($)",
                color: "white",
                font: {
                  size: 18,
                  weight: "bold",
                },
              },
              border: {
                color: "white",
                dash: [6],
              },
              grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: true,
                color: "grey",
                tickBorderDash: [8, 8],
              },
              ticks: {
                color: "white",
                font: {
                  size: 14,
                },
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              labels: { color: "white", font: { size: 14 } },
            },
          },
        }}
      />
    </div>
  );
}
