import Infos from "@/components/dashboard/Infos";
import LineChart from "@/components/dashboard/LineChart";
import PieChart from "@/components/dashboard/PieChart";

export default function Home() {
  return (
    <section className="grid grid-cols-[auto_1fr] overflow-y-auto">
      <div>
        <Infos />
      </div>
      <div>
        <PieChart />
      </div>
      {/* <div> */}
      {/* <div> */}
      <LineChart />
      {/* </div> */}
    </section>
  );
}
