import { Props } from "@/interfaces/interfaces";
import { Dropdown } from "../../dropDown/dropDown";

interface Data {
  totalCount: number;
  changeRate: number;
}

export const ChartHeader = ({ totalCount, changeRate }: Data) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Minting Shoes
        </p>
        <h5 className="text-base font-semibold text-gray-900 dark:text-white">
          {totalCount}회
        </h5>
      </div>
      <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-center">
        {changeRate > 0 ? (
          <div className="text-green-500 dark:text-green-500 ">
            +{changeRate}%
          </div>
        ) : changeRate < 0 ? (
          <div className="text-red-500 dark:text-red-500 "> {changeRate}%</div>
        ) : (
          <div className="text-gray-500 dark:text-gray-500 "> 0%</div>
        )}
      </div>
    </div>
  );
};

export const ChartFooter = ({ fetchOption }: Props) => {
  const handleOptionSelect = (option: any) => {
    fetchOption(option);
  };
  return (
    <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
      <div className="flex justify-between items-center pt-2">
        <Dropdown
          onSelectOption={handleOptionSelect}
          options={["Last week", "Last 6 months"]}
          style="start"
        />
      </div>
    </div>
  );
};
