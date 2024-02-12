import { Dropdown } from "../../dropDown/dropDown";

interface Props {
  fetchOption: (option: string) => void;
}

const ChartHeader = () => {
  return (
    <div className="flex justify-between mb-5">
      <div>
        <h5 className="leading-none text-xl md:text-2xl font-medium text-gray-900 dark:text-white pb-2">
          Count
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Trade Frequency by Quality
        </p>
      </div>
    </div>
  );
};

const ChartFooter = ({ fetchOption }: Props) => {
  const handleOptionSelect = (option: any) => {
    fetchOption(option);
  };
  return (
    <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
      <div className="flex justify-between items-center pt-2">
        <Dropdown
          onSelectOption={handleOptionSelect}
          options={["Last day", "Last week", "Last 6 months"]}
          style="start"
        />
      </div>
    </div>
  );
};

export { ChartHeader, ChartFooter };
