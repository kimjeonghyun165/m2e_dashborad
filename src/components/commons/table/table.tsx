import { TableChild } from "./child";

export function Table() {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white pt-2">
            Transactions
          </h4>
          <p className="mt-1 text-xs">This is a list of latest transactions</p>
        </div>
      </div>
      <TableChild />
    </div>
  );
}
