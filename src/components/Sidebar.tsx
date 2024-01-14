"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";

type Links = {
  name: String;
  link: String & Key;
}[];

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);
  const Links: Links = [
    { name: "Dashboard", link: "dashboard" },
    { name: "Inventory", link: "inventory" },
    { name: "Orders", link: "orders" },
    { name: "Analytics", link: "analytics" },
    { name: "Settings", link: "settings" },
  ];

  return (
    <div className="py-8 flex flex-col gap-10 items-center border-r border-solid border-white">
      {/* HEADING */}
      <h1 className="font-bold text-4xl tracking-wide">RedeemX</h1>
      {/* LINKS */}
      <div className="flex flex-col gap-2 ">
        {Links.map(({ name, link }) => (
          <Link
            key={link}
            href={`/${link}`}
            className={`text-xl font-bold px-8 rounded-md py-2 transition-all duration-200 ease-linear ${
              pathname === `/${link}` && "bg-gray-400"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
