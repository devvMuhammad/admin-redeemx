"use client";
import { usePathname } from "next/navigation";
import Heading from "../ui/Heading";

export default function SectionName() {
  const pathname = usePathname();
  const name = pathname == "/" ? "/dashboard" : pathname;
  return (
    <Heading className="text-lg md:text-2xl font-bold">
      {name[1].toUpperCase() + name.slice(2)}
    </Heading>
  );
}
