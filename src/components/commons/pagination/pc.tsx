"use client";
export function PcPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}) {
  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, i) => {
        return (
          <input
            key={i}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={String(i + 1)}
            checked={i + 1 === currentPage}
            onChange={() => onPageChange(i + 1)}
          />
        );
      })}
    </div>
  );
}
