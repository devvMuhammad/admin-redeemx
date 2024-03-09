export type Product = {
  name: string;
  imageUrl?: string | null;
  category: string;
  price: number;
  status: "Active" | "Out of Stock";
  revenue: number;
};

/*
things to do today
- setup prisma with elephantsql
- use introspection and migration
- query the data from the database and display it
*/

export const dummyProducts: Product[] = [
  {
    name: 'TechMaster EliteBook X360 G8 UltraSlim Intel Core i7 16GB RAM 512GB SSD 14" FHD Touchscreen Windows 11 Pro Laptop',
    category: "Laptops",
    price: 1899.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'QuantumMax VelocityX Pro Plus Ryzen 9 32GB RAM 1TB NVMe SSD 15.6" 4K OLED HDR10+ RTX 3080 Max-Q Windows 11 Gaming Laptop',
    category: "Laptops",
    price: 2799.99,
    status: "Out of Stock",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'InfinityTech ProBook Z2 Workstation Intel Xeon 64GB ECC RAM 2TB PCIe Gen4 SSD 17.3" 4K HDR DreamColor Windows 11 Pro Laptop',
    category: "Laptops",
    price: 3299.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  // Additional products
  {
    name: 'SuperTech UltraThin Core i5 8GB RAM 256GB SSD 13.3" FHD Windows 11 Laptop',
    category: "Laptops",
    price: 1099.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: "GigaSpeed Gaming PC Ryzen 7 16GB RAM 1TB HDD + 512GB SSD RTX 3060 Windows 11 Desktop",
    category: "Desktops",
    price: 1899.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'SmartOffice Pro All-in-One Intel Core i5 8GB RAM 512GB SSD 23.8" FHD Windows 11 Desktop',
    category: "Desktops",
    price: 1299.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'EcoFriendly Notebook AMD Ryzen 5 12GB RAM 256GB SSD 14" HD Windows 11 Laptop',
    category: "Laptops",
    price: 899.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'MaxPower Workstation Intel Xeon 128GB ECC RAM 4TB PCIe Gen4 SSD 27" 5K HDR Windows 11 Pro Desktop',
    category: "Desktops",
    price: 4999.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'MediaMaster Plus Ryzen 7 24GB RAM 512GB SSD 17.3" FHD Windows 11 Laptop',
    category: "Laptops",
    price: 1599.99,
    status: "Active",
    revenue: 0,
    imageUrl: "dummy-url",
  },
  {
    name: 'MediaMaster Plus Ryzen 7 24GB RAM 512GB SSD 17.3" FHD Windows 11 Laptop',
    category: "Laptops",
    price: 1599.99,
    status: "Out of Stock",
    revenue: 0,
    imageUrl: "dummy-url",
  },
];
