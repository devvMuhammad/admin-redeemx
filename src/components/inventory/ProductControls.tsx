import { Inter } from "next/font/google";
import CategorySelect from "../ui/CategorySelect";
import SearchInput from "../ui/SearchInput";
import SortSelect from "../ui/SortSelect";
import { Button } from "../ui/button";
import NewProduct from "./add/NewProduct";

const inter = Inter({ weight: ["400", "600"], style: "normal" });

export default function ProductControls() {
  /*
  should include
  - search bar
  - dropdown for selecting category
  - dropdown for sorting options
  - Export button 
  - New Product button
  */
  return (
    <div className="flex justify-between items-center">
      {/* Search input */}
      <span>These are the products in your inventory</span>
      <div className="flex gap-2 items-center ">
        {/* selecting category */}
        <CategorySelect />
        {/* sorting options */}
        <SortSelect />

        <Button className={`${inter.className} font-bold`}>Export as CV</Button>
        <NewProduct />
      </div>
    </div>
  );
}
