import InfoCard from "./InfoCard";
import {
  FilesIcon,
  GalleryVerticalEndIcon,
  PersonStandingIcon,
  TruckIcon,
} from "lucide-react";

type DummyInfo = {
  info: string;
  mainNumber: number;
  percentage: number;
  weekDetail: number;
  icon: React.JSX.Element;
};

const dummyData: DummyInfo[] = [
  {
    info: "Total Sales",
    icon: <FilesIcon />,
    percentage: 2.53,
    mainNumber: 113738.21,
    weekDetail: 14.3,
  },
  {
    info: "Total Orders",
    icon: <GalleryVerticalEndIcon />,
    percentage: 2.53,
    mainNumber: 192,
    weekDetail: 14.3,
  },
  {
    info: "Visitors",
    icon: <PersonStandingIcon />,
    percentage: 3.9,
    mainNumber: 2812,
    weekDetail: 5,
  },
  {
    info: "Total Sold Products",
    icon: <TruckIcon />,
    percentage: 6.9,
    mainNumber: 112,
    weekDetail: 5.7,
  },
];

export default function Infos() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-6">
      {dummyData.map((info, index) => (
        <InfoCard key={index} {...info} />
      ))}
    </div>
  );
}
