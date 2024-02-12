"use client";

import dynamic from "next/dynamic";
import { ChartHeader, ChartFooter } from "./style";
import ChartOptions from "./options";
import { useCallback, useEffect, useState } from "react";
import { updateChartData } from "./data";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function CountPiChart() {
  const [option, setoption] = useState("Last day");

  const handleOptionSelect = (option: string) => {
    setoption(option);
  };
  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 md:pb-4">
      <ChartHeader />
      <Chart option={option} />
      <ChartFooter fetchOption={handleOptionSelect} />
    </div>
  );
}

interface Option {
  option: string;
}

function Chart({ option }: Option) {
  const [data, setData] = useState<any[]>([]);

  const fetchDataAndUpdateChart = useCallback(async () => {
    const data = await updateChartData(option);
    setData(data);
  }, [option]);

  useEffect(() => {
    fetchDataAndUpdateChart();
  }, [option, fetchDataAndUpdateChart]);

  return (
    <ApexChart
      type="donut"
      options={ChartOptions}
      series={data}
      width="100%"
      height="100%"
    />
  );
}

export default CountPiChart;
