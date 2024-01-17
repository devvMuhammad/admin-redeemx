"use client";
import { ChartData } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Heading from "../ui/Heading";

ChartJS.register(ArcElement, Tooltip, Legend);

const data: ChartData<"doughnut", number[], unknown> = {
  labels: ["Laptop", "Gift Cards", "Mobiles", "Accessories"],
  // consists of array of object, with each object representing a data
  datasets: [
    {
      label: "Quantity Sold",
      data: [20, 10, 3, 2],
      backgroundColor: ["#76c893", "#705831", "#440f3b", "#700c0c"],
      borderColor: "black",
    },
  ],
};

export default function PieChart() {
  return (
    <div className="space-y-2">
      {/* <h1 className="font-bold tracking-tight text-center pl-4">
        Sales by category
      </h1> */}
      <Heading className="text-2xl pl-8">Sales By Category</Heading>
      <Doughnut
        className="max-h-[425px]"
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