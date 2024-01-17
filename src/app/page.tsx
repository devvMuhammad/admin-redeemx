import Infos from "@/components/dashboard/Infos";
import PieChart from "@/components/dashboard/PieChart";

export default function Home() {
  return (
    <section className="grid grid-cols-[auto_1fr] overflow-y-auto">
      <div className="grid-rows-1">
        <Infos />
      </div>
      <div className="grid-rows-1">
        <PieChart />
      </div>
    </section>
  );
}
