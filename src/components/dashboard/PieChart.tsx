"use client";
import { ChartData } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Heading from "../ui/Heading";
import { useTheme } from "next-themes";

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
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "white" : "black";
  return (
    <div className="py-6 space-y-2 flex flex-col items-center justify-center">
      {/* <h1 className="font-bold tracking-tight text-center pl-4">
        Sales by category
      </h1> */}
      <Heading className="text-2xl pl-8 self-start">Sales By Category</Heading>
      <Doughnut
        className="max-h-[425px] max-w-[400px]"
        data={data}
        options={{
          plugins: {
            legend: {
              labels: { color, font: { size: 18 } },
              position: "top",
            },
          },
        }}
      />
    </div>
  );
}
