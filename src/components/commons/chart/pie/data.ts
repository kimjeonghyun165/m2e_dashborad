import { fetchData } from "@/utils/utils";

export const updateChartData = async (option: string) => {
    let series: number[] = [0, 0, 0, 0, 0]; // 초기값을 0으로 설정

    if (option === "Last day") {
        const jsonData = await fetchData("https://99-planet.com/volume/daily-total-krw-price");
        const data = jsonData.slice(0, 1);
        const typeTotalPrice = data[0].typeTotalPrice;
        typeTotalPrice.forEach((type: any, index: number) => {
            if (type && type.count) {
                series[index] = type.count;
            }
        });
    }
    else if (option === "Last week") {
        const jsonData = await fetchData("https://99-planet.com/volume/daily-total-krw-price");
        const data = jsonData.slice(0, 7);

        data.forEach((entry: any) => {
            entry.typeTotalPrice.forEach((type: any) => {
                const quality = type.quality;
                const count = type.count;
                switch (quality) {
                    case "Normal":
                        series[0] += count;
                        break;
                    case "Rare":
                        series[1] += count;
                        break;
                    case "Epic":
                        series[2] += count;
                        break;
                    case "Unique":
                        series[3] += count;
                        break;
                    case "Legendary":
                        series[4] += count;
                        break;
                    default:
                        break;
                }
            });
        });
    }
    else if (option === "Last 6 months") {
        const jsonData = await fetchData("https://99-planet.com/volume/month-total-krw-price");

        const data = jsonData.slice(0, 6);

        data.forEach((entry: any) => {
            entry.typeTotalPrice.forEach((type: any) => {
                const quality = type.quality;
                const count = type.count;
                switch (quality) {
                    case "Normal":
                        series[0] += count;
                        break;
                    case "Rare":
                        series[1] += count;
                        break;
                    case "Epic":
                        series[2] += count;
                        break;
                    case "Unique":
                        series[3] += count;
                        break;
                    case "Legendary":
                        series[4] += count;
                        break;
                    default:
                        break;
                }
            });
        });
    }
    return series;
};
