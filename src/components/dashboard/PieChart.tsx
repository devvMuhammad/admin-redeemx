"use client";
import { ChartData } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const data: ChartData<"pie", number[], unknown> = {
  labels: ["Laptop", "Gift Cards", "Mobiles", "Accessories"],
  // consists of array of object, with each object representing a data
  datasets: [
    {
      label: "Quantity Sold",
      data: [20, 10, 3, 2],
      backgroundColor: ["#fff"],
      borderColor: "black",
    },
  ],
};

export default function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="flex items-center justify-center">
      <Pie className="fixed" data={data} />
    </div>
  );
}
