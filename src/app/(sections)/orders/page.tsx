export default function Orders() {
  return (
    <main>
      <div className="border shadow-sm rounded-lg p-2">
        <div className="min-w-[700px] pb-4 rounded-xl header product-rows grid gap-y-4 gap-x-2 md:gap-x-0 grid-cols-[auto_3fr_1fr_1fr_1fr] justify-center items-center text-center overflow-x-auto">
          <div className="w-[100px]">Order</div>
          <div className="min-w-[150px]">Customer</div>
          <div className="hidden md:table-cell">Date</div>
          <div className="text-right">Total</div>
          <div className="hidden sm:table-cell">Actions</div>
          <div className="font-medium">#3210</div>
          <div>Olivia Martin</div>
          <div className="hidden md:table-cell">February 20, 2024</div>
          <div className="text-right">$42.25</div>
          <div className="hidden sm:table-cell">Shipped</div>
          <div className="font-medium">#3209</div>
          <div>Ava Johnson</div>
          <div className="hidden md:table-cell">January 5, 2024</div>
          <div className="text-right">$74.99</div>
          <div className="hidden sm:table-cell">Paid</div>
          <div className="font-medium">#3204</div>
          <div>Michael Johnson</div>
          <div className="hidden md:table-cell">August 3, 2023</div>
          <div className="text-right">$64.75</div>
          <div className="hidden sm:table-cell">Unfulfilled</div>
          <div className="font-medium">#3203</div>
          <div>Lisa Anderson</div>
          <div className="hidden md:table-cell">July 15, 2023</div>
          <div className="text-right">$34.50</div>
          <div className="hidden sm:table-cell">Shipped</div>
          <div className="font-medium">#3202</div>
          <div>Samantha Green</div>
          <div className="hidden md:table-cell">June 5, 2023</div>
          <div className="text-right">$89.99</div>
          <div className="hidden sm:table-cell">Paid</div>
          <div className="font-medium">#3201</div>
          <div>Adam Barlow</div>
          <div className="hidden md:table-cell">May 20, 2023</div>
          <div className="text-right">$24.99</div>
          <div className="hidden sm:table-cell">Unfulfilled</div>
          <div className="font-medium">#3207</div>
          <div>Sophia Anderson</div>
          <div className="hidden md:table-cell">November 2, 2022</div>
          <div className="text-right">$99.99</div>
          <div className="hidden sm:table-cell">Paid</div>
          <div className="font-medium">#3206</div>
          <div>Daniel Smith</div>
          <div className="hidden md:table-cell">October 7, 2022</div>
          <div className="text-right">$67.50</div>
          <div className="hidden sm:table-cell">Shipped</div>
        </div>
      </div>
    </main>
  );
}
