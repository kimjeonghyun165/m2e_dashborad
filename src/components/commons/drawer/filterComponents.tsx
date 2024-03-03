"use client";

import { DividerItem, FilterItem } from "@/interfaces/interfaces";
import { useStoreLink, useStoreQuality, useStoreType } from "@/store/store";
import { RangeSlider } from "../range/range";

interface RangeSliderSectionProps extends DividerItem {
  min: number;
  max: number;
}

const FilterCheckbox: React.FC<{ title: string; labelText: string }> = ({
  title,
  labelText,
}) => {
  const { selectedType, updateType, removeType } = useStoreType();
  const { selectedQuality, updateQuality, removeQuality } = useStoreQuality();

  const handleCheckboxChange = (data: string) => {
    if (title === "Type") {
      const isSelected = selectedType.includes(data);
      if (isSelected) {
        removeType(data);
      } else {
        updateType(data);
      }
    } else if (title === "Grade") {
      const isSelected = selectedQuality.includes(data);
      if (isSelected) {
        removeQuality(data);
      } else {
        updateQuality(data);
      }
    }
  };

  return (
    <label className="label cursor-pointer">
      <span className="label-text">{labelText}</span>
      <input
        type="checkbox"
        className="checkbox"
        checked={
          title === "Type"
            ? selectedType.includes(labelText)
            : selectedQuality.includes(labelText)
        }
        onChange={() => handleCheckboxChange(labelText)}
      />
    </label>
  );
};

export const Divider: React.FC<DividerItem> = ({ text }) => (
  <div className="divider">{text}</div>
);

export const FilterGroup: React.FC<FilterItem> = ({ title, items }) => (
  <div>
    <Divider text={title} />
    <div className="form-control px-4">
      {items.map((item, idx) => (
        <FilterCheckbox key={idx} title={title} labelText={item} />
      ))}
    </div>
  </div>
);

export const RangeSliderSection: React.FC<RangeSliderSectionProps> = ({
  text,
  min,
  max,
}) => (
  <div>
    <Divider text={text} />
    <RangeSlider text={text} min={min} max={max} />
  </div>
);

export const SearchBtn = () => {
  const { updateLink } = useStoreLink();

  const handleCheckboxChange = () => {
    updateLink();
  };

  return (
    <div>
      <input
        type="button"
        value="Search"
        className="btn btn-wide rounded-lg btn-primary"
        onClick={() => handleCheckboxChange()}
      />
    </div>
  );
};
