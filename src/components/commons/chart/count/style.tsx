import { Props } from "@/interfaces/interfaces";
import { Dropdown } from "../../dropDown/dropDown";

const ChartHeader = ({ fetchOption }: Props) => {
  const handleOptionSelect = (option: any) => {
    fetchOption(option);
  };
  return (
    <div className="flex justify-between mb-5">
      <div className="flex items-center">
        <h4 className="text-center text-sm md:text-xl font-medium text-gray-900 dark:text-white pt-4 pb-4">
          Volume&nbsp;&nbsp;
        </h4>
        <p className="text-xs md:text-sm text-gray-500">(거래량/회)</p>
      </div>
      <Dropdown
        onSelectOption={handleOptionSelect}
        options={["Last week", "Last 7 months"]}
        style="end"
      />
    </div>
  );
};

export default ChartHeader;
