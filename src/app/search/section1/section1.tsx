import { PriceChart } from "@/components/commons/chart/price/chart";
import Drawer from "@/components/commons/drawer/drawer";

export default function Section1() {
  return (
    <div className="pb-0">
      <div className="flex justify-end">
        <Drawer />
      </div>
      <div>
        <PriceChart />
      </div>
    </div>
  );
}
