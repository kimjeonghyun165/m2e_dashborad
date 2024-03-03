import { Help } from "../../../../../public/svgs/help";

export const ChartHeader = () => {
  return (
    <div className="flex justify-between mb-2 md:mb-5">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center">
          <h4 className="text-center text-sm md:text-xl font-medium text-gray-900 dark:text-white pt-4 pb-4">
            Price&nbsp;&nbsp;
          </h4>
          <p className="text-xs md:text-sm text-gray-500">(바닥가/원)</p>
          <div
            className="tooltip tooltip-down text-sm ml-2"
            data-tip="최근 100개의 거래된 신발 가격"
          >
            <Help />
          </div>
        </div>
      </div>
    </div>
  );
};
