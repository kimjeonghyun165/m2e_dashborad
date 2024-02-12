"use client";

import React, { useState, memo, useEffect } from "react";
import { updateTableData } from "./data";

const headers = [
  "TokenId",
  "Quality",
  "Type",
  "Gen",
  "Level",
  "breeding",
  "Price(원)",
];

export const TableChild = memo(() => {
  const [data, setData] = useState<any[]>([]); // 초기값 빈 배열

  const fetchDataAndUpdateChart = async () => {
    const tableData = await updateTableData();
    setData(tableData); // 데이터 변경 부분만 업데이트
  };

  useEffect(() => {
    fetchDataAndUpdateChart();
  }, []);

  return (
    <table className="table table-zebra text-center">
      <thead>
        <tr>
          {headers.map((header, index: number) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, rowIndex: number) => (
          <tr key={rowIndex}>
            <td>{item._id.TokenId}</td>
            <td>{item._id.Quality}</td>
            <td>{item._id.Type}</td>
            <td>{item._id.Gen}</td>
            <td>{item._id.Level}</td>
            <td>{item._id.MintingCount + "/" + item._id.MaxMintingCount}</td>
            <td>{item._id.KrwPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

TableChild.displayName = "TableChild";
