import Infos from "@/components/dashboard/Infos";
import PieChart from "@/components/dashboard/PieChart";

export default function Home() {
  return (
    <section className="grid grid-cols-[auto_1fr]">
      <Infos />
      <PieChart />
    </section>
  );
}
