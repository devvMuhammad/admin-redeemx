import { Inter } from "next/font/google";
import TableHeader from "./TableHeader";
import Badge from "../ui/Badge";

type Product = {
  name: string;
  category: string;
  id: string;
  price: number;
  status: "Active" | "Out of Stock";
  revenue: number;
};

const dummyProducts: Product[] = [
  {
    name: 'TechMaster EliteBook X360 G8 UltraSlim Intel Core i7 16GB RAM 512GB SSD 14" FHD Touchscreen Windows 11 Pro Laptop',
    category: "Laptops",
    id: "TMEBX36",
    price: 1899.99,
    status: "Active",
    revenue: 0,
  },
  {
    name: 'QuantumMax VelocityX Pro Plus Ryzen 9 32GB RAM 1TB NVMe SSD 15.6" 4K OLED HDR10+ RTX 3080 Max-Q Windows 11 Gaming Laptop',
    category: "Laptops",
    id: "QMVXPP",
    price: 2799.99,
    status: "Out of Stock",
    revenue: 0,
  },
  {
    name: 'InfinityTech ProBook Z2 Workstation Intel Xeon 64GB ECC RAM 2TB PCIe Gen4 SSD 17.3" 4K HDR DreamColor Windows 11 Pro Laptop',
    category: "Laptops",
    id: "ITPBZ",
    price: 3299.99,
    status: "Active",
    revenue: 0,
  },
];

const inter = Inter({ weight: "400", style: "normal" });

export default function ProductsTable() {
  // <div className="bg-yellow-500 grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr] justify-center items-center text-center ">
  return (
    // <div className="bg-yellow-500 grid">
    // div
    <div className="overflow-x-auto">
      <div className="min-w-[700px] header product-rows grid grid-rows-4 grid-cols-[auto_3fr_1fr_1fr_1fr_1fr_1fr] justify-center items-center text-center overflow-x-auto ">
        <TableHeader />
        {/* </div> */}
        {dummyProducts.map((product, i) => (
          <>
            <p className={`${inter.className}`}>{i + 1}</p>
            <p className={`${inter.className}`}>{product.name}</p>
            <p className={`${inter.className}`}>{product.category}</p>
            <p className={`${inter.className}`}>{product.id}</p>
            <p className={`${inter.className}`}>${product.price.toFixed(2)}</p>
            <div className={`${inter.className}`}>
              <Badge
                className={`border-none text-white ${
                  product.status === "Active" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {product.status}
              </Badge>
            </div>
            {/* </p> */}
            <p className={`${inter.className}`}>{product.revenue.toFixed(2)}</p>
          </>
          // </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
