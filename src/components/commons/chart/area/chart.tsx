"use client";
import dynamic from "next/dynamic";
import { ChartHeader, ChartFooter } from "./style";
import { ChartOptions } from "./options";
import { useCallback, useEffect, useState } from "react";
import { SeriesItem } from "@/interfaces/interfaces";
import { updateChartData } from "./data";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function MintAreaChart() {
  const [option, setoption] = useState("Last week");

  const handleOptionSelect = (option: string) => {
    setoption(option);
  };
  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4">
      <div className="flex justify-between mb-5">
        <Chart option={option} />
      </div>
      <ChartFooter fetchOption={handleOptionSelect} />
    </div>
  );
}

interface Option {
  option: string;
}

function Chart({ option }: Option) {
  const [chartData, setChartData] = useState<SeriesItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [rate, setRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const fetchDataAndUpdateChart = useCallback(async () => {
    const link = option === "Last week" ? "daily" : "month";
    const data = await updateChartData(link);
    setChartData(data.apexData);
    setCategories(data.date);
    setRate(data.rate);
    setTotal(data.LastTotalCount);
  }, [option]);

  useEffect(() => {
    fetchDataAndUpdateChart();
  }, [option, fetchDataAndUpdateChart]);

  const updatedOptions = {
    ...ChartOptions,
    xaxis: {
      ...ChartOptions.xaxis,
      categories: categories,
    },
  };

  return (
    <>
      <ChartHeader totalCount={total} changeRate={rate} />
      <ApexChart
        type="area"
        options={updatedOptions}
        series={chartData}
        width="100%"
        height="100%"
      />
    </>
  );
}
