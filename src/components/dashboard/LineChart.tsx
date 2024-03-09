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
import Heading from "../ui/Heading";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";
  return (
    <div className=" h-[400px] mb-4 md:mb-0 p-2 border-solid">
      <Heading className="text-2xl">Revenue Over Time</Heading>
      <Line
        data={{
          labels: months,
          datasets: [
            {
              label: "Sales",
              data: Array(12)
                .fill(0)
                .map(() => (Math.random() * 10 + 1) * 1000),
              borderColor: color,
              pointBackgroundColor: "black",
              pointBorderColor: color,
              pointRadius: 4,
            },
          ],
        }}
        options={{
          animation: false,
          responsive: true,
          // responsive: false,
          maintainAspectRatio: false,
          aspectRatio: 1.5,
          scales: {
            x: {
              title: {
                display: true,
                text: "Months",
                color: color,
                font: {
                  size: 18,
                  weight: "bold",
                },
              },
              border: {
                color: color,
              },
              ticks: {
                color: color,
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
                color: color,
                font: {
                  size: 18,
                  weight: "bold",
                },
              },
              border: {
                color: color,
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
                color: color,
                font: {
                  size: 14,
                },
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              labels: { color: color, font: { size: 14 } },
            },
          },
        }}
      />
    </div>
  );
}
