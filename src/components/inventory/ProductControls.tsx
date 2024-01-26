import SearchInput from "../ui/SearchInput";
import { Input } from "../ui/input";

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
      <SearchInput />
    </div>
  );
}
