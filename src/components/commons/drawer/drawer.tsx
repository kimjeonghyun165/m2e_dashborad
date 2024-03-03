import { dividers, filters } from "@/constants/filter";
import { FilterGroup, RangeSliderSection, SearchBtn } from "./filterComponents";

const Drawer: React.FC = () => {
  return (
    <div className="drawer drawer-end z-30">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mb-2 flex-justify">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm">
          조건설정
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4">
          {filters.map((filter, index) => (
            <FilterGroup
              key={index}
              title={filter.title}
              items={filter.items}
            />
          ))}
          {dividers.map((divider, index) => (
            <RangeSliderSection
              key={index}
              text={divider.text}
              min={divider.min}
              max={divider.max}
            />
          ))}
          <div className="flex justify-center mt-4">
            <SearchBtn />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
