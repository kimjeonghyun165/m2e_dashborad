`use client`;
import { useState } from "react";

interface DropdownProps {
  onSelectOption: (option: string) => void;
  options: string[];
  style: string;
}

const DropdownButton = ({
  option,
  onClick,
}: {
  option: string;
  onClick: () => void;
}) => (
  <li>
    <a onClick={onClick}>{option}</a>
  </li>
);

export function Dropdown({ onSelectOption, options, style }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div className="flex items-center">
      <div className={`dropdown dropdown-bottom dropdown-${style}`}>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm btn-ghost pr-0 text-xs md:text-sm font-normal text-gray-400"
        >
          {selectedOption}
          <svg
            className="w-2.5 m-2.5 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {options.map((option) => (
            <DropdownButton
              key={option}
              option={option}
              onClick={() => handleOptionChange(option)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
