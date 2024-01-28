import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";

type InfoCardProps = {
  info: string;
  mainNumber: number;
  percentage: number;
  weekDetail: number;
  icon: React.JSX.Element;
};

export default function InfoCard({
  info,
  mainNumber,
  percentage,
  weekDetail,
  icon,
}: InfoCardProps) {
  return (
    <div className="p-5 border border-white rounded-3xl">
      <div className="hidden md:flex justify-between items-center">
        <div className="bg-gray-700 p-3 rounded-xl">{icon}</div>
        {/* <Badge>{`+${percentage}%`}</Badge> */}
        <Badge className="text-sm font-bold">
          <ArrowUpRightIcon className="text-green-500" />
          {percentage}%
        </Badge>
      </div>
      <p className="md:mt-8 mb-1 overflow-y-hidden text-nowrap">{info}</p>
      <div className="flex flex-col items-start gap-2 md:flex-row md:flex-grow md:items-center md:gap-4">
        <h1 className="font-bold text-xl md:text-3xl">
          {info === "Total Sales" && "$"}
          {mainNumber}
        </h1>
        <p className="overflow-y-hidden text-nowrap">
          +<span className="text-lg ">{weekDetail}</span> this week
        </p>
      </div>
    </div>
  );
}
