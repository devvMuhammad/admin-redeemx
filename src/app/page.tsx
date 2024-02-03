import Infos from "@/components/dashboard/Infos";
import LineChart from "@/components/dashboard/LineChart";
import PieChart from "@/components/dashboard/PieChart";
import TopProducts from "@/components/dashboard/TopProduct";

export default function Home() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[auto_1fr] overflow-y-auto">
      <div>
        <Infos />
      </div>
      <div>
        <PieChart />
      </div>
      <LineChart />
      <TopProducts />
    </section>
  );
}
