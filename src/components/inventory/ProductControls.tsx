import CategorySelect from "../ui/CategorySelect";
import SearchInput from "../ui/SearchInput";

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
    <div className="flex ">
      {/* Search input */}
      <SearchInput />
      {/* selecting category */}
      <CategorySelect />
    </div>
  );
}
