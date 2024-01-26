import CategorySelect from "../ui/CategorySelect";
import SearchInput from "../ui/SearchInput";
import SortSelect from "../ui/SortSelect";
import { Button } from "../ui/button";

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
      <SearchInput />
      <div className="flex gap-2 items-center ">
        {/* selecting category */}
        <CategorySelect />
        {/* sorting options */}
        <SortSelect />

        <Button size="lg" className="font-bold text-lg p-4">
          Export as CV
        </Button>
        <Button size="lg" className="font-bold text-lg p-4">
          New Item
        </Button>
      </div>
    </div>
  );
}
