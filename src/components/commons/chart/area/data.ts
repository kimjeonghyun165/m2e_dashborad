// data.ts
import { dateType_B, SeriesItem } from "@/interfaces/interfaces";
import { calculatePercentageChange, fetchData } from "@/utils/utils";

export const updateChartData = async (dataType: string): Promise<dateType_B> => {
    const series: SeriesItem[] = [];
    const date: string[] = [];
    const jsonData = await fetchData("http://localhost:3001/minting/" + dataType + "-minting-info");


    const lastTenDaysData = dataType === "daily" ? jsonData.slice(1, 8) : jsonData.slice(1, 7)

    const totalCounts: number[] = (lastTenDaysData.map((data: any) => data.totalCount)).reverse();
    series.push({ name: "Total", data: totalCounts })
    const LastTotalCount: number = await lastTenDaysData[0].totalCount
    const rate = calculatePercentageChange(totalCounts[lastTenDaysData.length - 2], totalCounts[lastTenDaysData.length - 1])


    const qualityTypes: Set<string> = new Set();

    if (lastTenDaysData) {
        lastTenDaysData.forEach((data: any) => {
            date.unshift(data.date)
            data.typeTotalCount.forEach((type: any) => {
                qualityTypes.add(type.quality);
            });
        });

        qualityTypes.forEach(type => {
            const typeData: number[] = lastTenDaysData.map((data: any) => {
                const found = data.typeTotalCount.find((item: any) => item.quality === type);
                return found ? found.count : 0;
            });
            series.push({ name: type, data: typeData.reverse() });
        });
    }

    const apexData = series;

    return { rate, LastTotalCount, date, apexData };
};
