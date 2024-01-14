import Link from "next/link";
import { Key } from "react";

type Links = {
  name: String;
  link: String & Key;
}[];

export default function Sidebar() {
  const Links: Links = [
    { name: "Overview", link: "overview" },
    { name: "Products", link: "products" },
    { name: "Graphs", link: "graphs" },
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
            className="text-xl font-bold bg-gray-400 px-8 rounded-md py-2"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
