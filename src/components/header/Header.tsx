import { BellDotIcon } from "lucide-react";
import SectionName from "./SectionName";

export default function Header() {
  const date: String = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <nav className="flex justify-between mt-3 border-b border-b-zinc-800 px-3 py-1">
      <div className="flex flex-col gap-2">
        <SectionName />
        <p className="text-sm md:text-lg text-grey">{date}</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer w-10 h-10 flex items-center justify-center p-1 border rounded-full hover:bg-white hover:text-black">
          <BellDotIcon className="h-5 w-5" />
        </div>
        <div className="cursor-pointer w-10 h-10 bg-white rounded-full"></div>
        {/* <div>
          <p className="font-bold">Muhammad Amjad</p>
          <p className="text-sm text-grey">Admin Store</p>
        </div> */}
      </div>
    </nav>
  );
}
