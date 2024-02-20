"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import ChartOptions from "./options";
import ChartHeader from "./style";
import { SeriesItem } from "@/interfaces/interfaces";
import { updateChartData } from "./data";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function CountChart() {
  const [option, setoption] = useState("Last week");

  const handleOptionSelect = (option: string) => {
    setoption(option);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <ChartHeader fetchOption={handleOptionSelect} />
      <Chart option={option} />
    </div>
  );
}

interface Option {
  option: string;
}

function Chart({ option }: Option) {
  const [chartData, setChartData] = useState<SeriesItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchDataAndUpdateChart = useCallback(async () => {
    const link =
      option === "Last week"
        ? "daily-total-krw-price"
        : "month-total-krw-price";
    const data = await updateChartData(link);
    setChartData(data.apexData);
    setCategories(data.date);
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
    <ApexChart
      type="bar"
      options={updatedOptions}
      series={chartData}
      width="100%"
      height="100%"
    />
  );
}

export default CountChart;
