"use client";
import { ChartData } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

const data: ChartData<"doughnut", number[], unknown> = {
  labels: ["Laptop", "Gift Cards", "Mobiles", "Accessories"],
  // consists of array of object, with each object representing a data
  datasets: [
    {
      label: "Quantity Sold",
      data: [20, 10, 3, 2],
      backgroundColor: ["#00607a", "#705831", "#440f3b", "#700c0c"],
      borderColor: "black",
    },
  ],
};

export default function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="flex items-center justify-center">
      <Doughnut
        className="fixed"
        data={data}
        options={{
          plugins: {
            legend: {
              labels: { color: "white", font: { size: 16 } },
              position: "top",
            },
          },
        }}
      />
    </div>
  );
}
