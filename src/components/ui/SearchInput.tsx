import { SearchIcon } from "lucide-react";
import { Input } from "./input";

export default function SearchInput() {
  return (
    <div className=" relative flex items-center">
      <label htmlFor="search" className="flex items-center">
        <SearchIcon className="absolute left-4" />
      </label>
      <Input
        id="search"
        className="border border-white pl-12 min-w-[300px] max-w-[500px] h-10"
        placeholder="Search An Item"
      />
    </div>
  );
}
