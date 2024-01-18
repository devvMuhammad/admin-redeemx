import { Inter } from "next/font/google";
import TableHeader from "./TableHeader";
import Badge from "../ui/Badge";
import ProductRow from "./ProductRow";

export type Product = {
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
  // Additional products
  {
    name: 'SuperTech UltraThin Core i5 8GB RAM 256GB SSD 13.3" FHD Windows 11 Laptop',
    category: "Laptops",
    id: "STUCI5",
    price: 1099.99,
    status: "Active",
    revenue: 0,
  },
  {
    name: "GigaSpeed Gaming PC Ryzen 7 16GB RAM 1TB HDD + 512GB SSD RTX 3060 Windows 11 Desktop",
    category: "Desktops",
    id: "GGPR716",
    price: 1899.99,
    status: "Active",
    revenue: 0,
  },
  {
    name: 'SmartOffice Pro All-in-One Intel Core i5 8GB RAM 512GB SSD 23.8" FHD Windows 11 Desktop',
    category: "Desktops",
    id: "SOPAI5",
    price: 1299.99,
    status: "Active",
    revenue: 0,
  },
  {
    name: 'EcoFriendly Notebook AMD Ryzen 5 12GB RAM 256GB SSD 14" HD Windows 11 Laptop',
    category: "Laptops",
    id: "EFNAR5",
    price: 899.99,
    status: "Active",
    revenue: 0,
  },
  {
    name: 'MaxPower Workstation Intel Xeon 128GB ECC RAM 4TB PCIe Gen4 SSD 27" 5K HDR Windows 11 Pro Desktop',
    category: "Desktops",
    id: "MPWIX",
    price: 4999.99,
    status: "Active",
    revenue: 0,
  },
  {
    name: 'MediaMaster Plus Ryzen 7 24GB RAM 512GB SSD 17.3" FHD Windows 11 Laptop',
    category: "Laptops",
    id: "MMPR724",
    price: 1599.99,
    status: "Active",
    revenue: 0,
  },
];

export default function ProductsTable() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[700px] header product-rows grid gap-y-4 grid-cols-[auto_3fr_1fr_1fr_1fr_1fr_1fr] justify-center items-center text-center overflow-x-auto ">
        <TableHeader />
        {dummyProducts.map((product, i) => (
          <ProductRow product={product} num={i + 1} key={product.id} />
        ))}
      </div>
    </div>
  );
}
