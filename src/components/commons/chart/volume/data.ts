// data.ts
import { dateType, SeriesItem } from "@/interfaces/interfaces";
import { fetchData } from "@/utils/utils";


export const updateChartData = async (dataType: string): Promise<dateType> => {
  const series: SeriesItem[] = [];
  const date: string[] = [];
  const jsonData = await fetchData("http://58.143.19.231:8080/volume/" + dataType);
  const lastTenDaysData = jsonData.slice(0, 7);

  if (lastTenDaysData) {
    const dataArrays: Map<string, number[]> = new Map();
    lastTenDaysData.forEach(({ date: day, typeTotalPrice }: any) => {
      date.unshift(day.slice(5));
      const dayIndex = date.length - 1;
      typeTotalPrice.forEach(({ quality, totalKrwPrice }: any) => {
        let dataArray: number[];
        if (!dataArrays.has(quality)) {
          dataArray = Array(7).fill(null);
          dataArrays.set(quality, dataArray);
        } else {
          dataArray = dataArrays.get(quality)!;
        }
        dataArray[6 - dayIndex] = Math.floor(totalKrwPrice);
      });
    });
    dataArrays.forEach((dataArray, quality) => {
      series.push({ name: quality, data: dataArray });
    });
  }

  const apexData = series;

  return { date, apexData };
};
