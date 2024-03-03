"use client";
import dynamic from "next/dynamic";
import { ChartHeader } from "./style";
import { ChartOptions } from "./options";
import { useCallback, useEffect, useState } from "react";
import { SeriesItem } from "@/interfaces/interfaces";
import { updateChartData } from "./data";
import { useStoreLink } from "@/store/store";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function PriceChart() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 px-2 py-4 md:p-6">
      <ChartHeader />
      <Chart />
    </div>
  );
}

function Chart() {
  const { link } = useStoreLink();
  const [chartData, setChartData] = useState<SeriesItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDataAndUpdateChart = useCallback(async () => {
    setLoading(true);
    try {
      const data = await updateChartData(link);
      setChartData(data.apexData);
      setCategories(data.date);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [link]);

  useEffect(() => {
    fetchDataAndUpdateChart();
  }, [link, fetchDataAndUpdateChart]);

  const updatedOptions = {
    ...ChartOptions,
    xaxis: {
      ...ChartOptions.xaxis,
      categories: categories,
    },
    noData: {
      ...ChartOptions.noData,
      text: loading ? "Loading..." : "No Data present in the graph!",
    },
  };
  return (
    <>
      <ApexChart
        type="scatter"
        options={updatedOptions}
        series={chartData}
        width="100%"
        height="100%"
      />
    </>
  );
}
