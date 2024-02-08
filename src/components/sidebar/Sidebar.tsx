"use client";
import {
  BarChartBigIcon,
  CircleDollarSignIcon,
  LayoutDashboardIcon,
  LucideUserRoundCog,
  PackageSearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";
import Heading from "../ui/Heading";

type Link = {
  name: string;
  link: string & Key;
  icon: React.JSX.Element;
};

export default function Sidebar() {
  const pathname = usePathname();
  const Links: Link[] = [
    { name: "Dashboard", link: "", icon: <LayoutDashboardIcon /> },
    { name: "Inventory", link: "inventory", icon: <PackageSearchIcon /> },
    { name: "Orders", link: "orders", icon: <CircleDollarSignIcon /> },
    { name: "Analytics", link: "analytics", icon: <BarChartBigIcon /> },
    { name: "Settings", link: "settings", icon: <LucideUserRoundCog /> },
  ];

  return (
    <div className="hidden lg:flex py-8 flex-col gap-10 items-center border-r border-solid border-slate-400">
      {/* HEADING */}
      {/* <h1 className="font-extrabold text-4xl tracking-tighter">RedeemX</h1> */}
      <Heading>RedeemX</Heading>
      {/* LINKS */}
      <div className="flex flex-col gap-2 ">
        {/* <div className="flex gap-2 justify-between"> */}
        {Links.map(({ name, link, icon }) => (
          <Link
            key={link}
            href={`/${link}`}
            className={`flex gap-4 px-6 rounded-md py-2 hover:bg-slate-400 transition-all duration-200 ease-in-out ${
              pathname === `/${link}` && "bg-slate-400"
            }`}
          >
            {icon}
            {name}
          </Link>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
