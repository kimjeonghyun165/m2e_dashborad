import { Props } from "@/interfaces/interfaces";
import { Dropdown } from "../../dropDown/dropDown";

const ChartHeader = ({ fetchOption }: Props) => {
  const handleOptionSelect = (option: any) => {
    fetchOption(option);
  };
  return (
    <div className="flex justify-between mb-5">
      <div>
        <h4 className="text-center text-lg md:text-2xl font-medium text-gray-900 dark:text-white pt-4 pb-4">
          Total Volume
        </h4>
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
