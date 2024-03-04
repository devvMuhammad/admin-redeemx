"use client";
import { usePathname } from "next/navigation";
import Heading from "../ui/Heading";

export default function SectionName() {
  const pathname = usePathname() == "/" ? "/dashboard" : usePathname();
  return (
    <Heading className="text-lg md:text-2xl font-bold">
      {pathname[1].toUpperCase() + pathname.slice(2)}
    </Heading>
  );
}
