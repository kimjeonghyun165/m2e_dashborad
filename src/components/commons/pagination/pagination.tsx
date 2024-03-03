import { useWindowSize } from "@/hooks/useSize";
import { PaginationProps } from "@/store/interface";
import { MobPagination } from "./mob";
import { PcPagination } from "./pc";

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const isMobile = useWindowSize(768);

  return (
    <div>
      {isMobile ? (
        <MobPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      ) : (
        <PcPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};
