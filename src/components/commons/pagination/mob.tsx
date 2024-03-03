"use client";

import { PaginationProps } from "@/store/interface";
import React from "react";

export const MobPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="join">
      <button
        className="join-item btn btn-sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        «
      </button>
      <button className={`join-item btn btn-sm`}>
        Page {currentPage === 0 ? 1 : currentPage}
      </button>
      <button
        className="join-item btn btn-sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        »
      </button>
    </div>
  );
};
