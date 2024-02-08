"use client";
import { usePathname } from "next/navigation";

export default function SectionName() {
  const pathname = usePathname() == "/" ? "/dashboard" : usePathname();
  return (
    <h1 className="text-lg md:text-2xl font-bold">
      {pathname[1].toUpperCase() + pathname.slice(2)}
    </h1>
  );
}
