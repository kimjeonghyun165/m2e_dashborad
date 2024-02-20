import { MintAreaChart } from "@/components/commons/chart/area/chart";
import CountChart from "@/components/commons/chart/count/chart";
import CountPiChart from "@/components/commons/chart/pie/chart";
import VolumeChart from "@/components/commons/chart/volume/chart";
import { Table } from "@/components/commons/table/table";
import { Footer, Header } from "@/components/layouts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto">
        <div className="p-2 md:px-12">
          <div>
            <VolumeChart />
          </div>
          <div className="mt-4">
            <CountChart />
          </div>
          <div className="flex flex-col mt-4 gap-6 md:flex-row">
            <div className="w-full">
              <CountPiChart />
            </div>
            <div className="w-full flex flex-col">
              <div>
                <MintAreaChart />
              </div>
              <div className="mt-5">{/* <BarChart /> */}</div>
            </div>
          </div>
          <div className="mt-4">
            <Table />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
