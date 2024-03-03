"use client";

import React, { useState, useEffect } from "react";
import { useStoreLink } from "@/store/store";
import { updateTableData } from "./data";
import { Pagination } from "../pagination/pagination";
import { TableHeader } from "./header";
import { TableRow } from "./row";

export const TableChild: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const { link } = useStoreLink();

  useEffect(() => {
    const fetchDataAndUpdateChart = async () => {
      try {
        const tableData = await updateTableData(link);
        setData(tableData);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDataAndUpdateChart();
  }, [link]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="relative mt-4 sm:rounded-lg bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="table table-zebra text-center table-pin-rows table-pin-cols">
            <TableHeader />
            <tbody>
              {currentItems.map((item: any, rowIndex: number) => (
                <TableRow key={rowIndex} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};
