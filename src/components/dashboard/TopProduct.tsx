import { dummyProducts } from "../inventory/DummyProducts";
import Heading from "../ui/Heading";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "600"], style: "normal" });

export default function TopProducts() {
  return (
    <div className="space-y-4 border border-gray-700 rounded-xl p-4">
      <Heading className="text-2xl border-b pb-2   border-gray-700">
        Top Products
      </Heading>
      <div className="space-y-8 overflow-y-auto ">
        {dummyProducts.map(
          ({ name, price }, i) =>
            i < 5 && (
              <div
                key={name}
                className="grid grid-cols-[40px_1fr_110px] gap-2 items-center"
              >
                <div className="bg-red-500 h-9 w-9 rounded-full"></div>
                <p
                  className={`text-sm ${inter.className} font-medium leading-none overflow-y-hidden text-nowrap ml-2`}
                >
                  {name}
                </p>
                <span
                  className={`${inter.className} font-bold text-right overflow-y-hidden text-nowrap `}
                >
                  +${price}
                </span>
              </div>
            )
        )}
      </div>
    </div>
  );
}
