import { dateType, SeriesItem } from "@/interfaces/interfaces";
import { fetchData } from "@/utils/utils";

export const updateChartData = async (dataType: string): Promise<dateType> => {
    const series: SeriesItem[] = [];
    const date: string[] = [];

    const jsonData = (await fetchData("http://localhost:3050/volume" + dataType));

    console.log(dataType)
    jsonData.forEach(({ SoldAt: day }: any) => {
        date.unshift(day);
    });

    const qualityTypes = new Set(["Normal", "Rare", "Epic", "Unique", "Legendary"]);

    qualityTypes.forEach(type => {
        const typeData: number[] = jsonData.map((data: any) => {
            if (data.Quality === type) {
                return Math.floor(data.KrwPrice);
            } else {
                return null;
            }
        });
        series.push({ name: type, data: typeData.reverse() });
    });

    const apexData = series;


    return { date, apexData };
};