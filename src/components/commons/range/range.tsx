"use client";

import { RangeSliderProps } from "@/interfaces/interfaces";
import { useStoreGen, useStoreLevel, useStoreMinted } from "@/store/store";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

export function RangeSlider({ text, min, max }: RangeSliderProps) {
  const [value, setValue] = useState<number[]>([min, max]);

  const { updateMaxLevel, updateMinLevel } = useStoreLevel();
  const { updateMaxGen, updateMinGen } = useStoreGen();
  const { updateMaxMinted, updateMinMinted } = useStoreMinted();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    if (text === "Level") {
      updateMaxLevel(value[1]);
      updateMinLevel(value[0]);
    } else if (text === "Gen") {
      updateMaxGen(value[1]);
      updateMinGen(value[0]);
    } else {
      updateMaxMinted(value[1]);
      updateMinMinted(value[0]);
    }
  }, [text, value]);

  return (
    <div className="px-4">
      <Slider
        getAriaLabel={() => "Temperature range"}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
