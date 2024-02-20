// data.ts
import { dateType, SeriesTypeItem } from "@/interfaces/interfaces";
import { fetchData } from "@/utils/utils";


export const updateChartData = async (dataType: string): Promise<dateType> => {
  const series: SeriesTypeItem[] = [];
  const date: string[] = [];
  const jsonData = await fetchData("https://99-planet.com/volume/" + dataType);
  const lastTenDaysData = jsonData.slice(0, 7);

  const qualityTypes: Set<string> = new Set();

  if (lastTenDaysData) {
    lastTenDaysData.forEach(({ date: day, typeTotalPrice }: any) => {
      date.unshift(day.slice(5));
      typeTotalPrice.forEach((type: any) => {
        qualityTypes.add(type.quality);
      });
    });

    qualityTypes.forEach(type => {
      const typeData: number[] = lastTenDaysData.map((data: any) => {
        const found = data.typeTotalPrice.find((item: any) => item.quality === type);
        return found ? found.count : 0;
      });
      series.push({ name: type, type: "bar", data: typeData.reverse(), dataLabel: { enabled: true } });
    });
  }

  const apexData = series;

  return { date, apexData };
};
