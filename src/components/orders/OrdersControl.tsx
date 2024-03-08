import { Inter } from "next/font/google";
import CategorySelect from "../ui/CategorySelect";
import SearchInput from "../ui/SearchInput";
import OrdersSort from "./OrdersSort";
import PriceFilter from "../ui/amount-range";
// import NewProduct from "./add/NewProduct";

const inter = Inter({ weight: ["400", "600"], style: "normal" });

/*
  filters in the order product
  - sort select option (done)
  - search by name on the left
  - price range control just like in the redeeemX project
*/

export default function OrdersControl() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <SearchInput />
      <div className="w-full flex gap-4 items-center">
        <PriceFilter />
        <OrdersSort />
      </div>
    </div>
  );
}
