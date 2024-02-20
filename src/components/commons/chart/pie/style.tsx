import { Dropdown } from "../../dropDown/dropDown";

interface Props {
  fetchOption: (option: string) => void;
}

const ChartHeader = () => {
  return (
    <div className="flex justify-between mb-5">
      <div className="flex items-center">
        <h4 className="text-center text-sm md:text-xl font-medium text-gray-900 dark:text-white pt-4 pb-4">
          Count&nbsp;&nbsp;
        </h4>
        <p className="text-xs md:text-sm text-gray-500">(누적거래량/회)</p>
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
