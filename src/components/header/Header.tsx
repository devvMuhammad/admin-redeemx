import { BellDotIcon } from "lucide-react";
import SectionName from "./SectionName";
import UserProfile from "../ui/user-profile";
import { formatDate } from "@/lib/utils";

export default function Header() {
  const date: String = formatDate(new Date());
  return (
    <nav className="flex justify-between mt-3 border-b border-b-gray-200 dark:border-zinc-800 px-3 py-1">
      <div className="flex flex-col gap-2">
        <SectionName />
        <p className="text-sm md:text-lg dark:text-neutral-400">{date}</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer w-10 h-10 flex items-center justify-center p-1 border rounded-full hover:bg-white hover:text-black">
          <BellDotIcon />
        </div>
        <UserProfile />
      </div>
    </nav>
  );
}
