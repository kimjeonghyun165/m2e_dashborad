import { fetchData } from "@/utils/utils";

export const updatePriceData = async (link: string) => {

    const jsonData = (await fetchData("https://99-planet.com/volume" + link));

    let totalKrwPrice = 0;
    let totalKlayPrice = 0;
    let maxPrice = Number.MIN_SAFE_INTEGER;
    let minPrice = Number.MAX_SAFE_INTEGER;

    let maxKlayPrice = Number.MIN_SAFE_INTEGER;
    let minKlayPrice = Number.MAX_SAFE_INTEGER;

    jsonData.forEach((item: any) => {
        const krwPrice = item.KrwPrice;
        const klayPrice = item.KlayPrice
        totalKrwPrice += krwPrice;
        totalKlayPrice += klayPrice;

        if (krwPrice > maxPrice) {
            maxPrice = krwPrice;
        }
        if (krwPrice < minPrice) {
            minPrice = krwPrice;
        }
        if (klayPrice > maxKlayPrice) {
            maxKlayPrice = klayPrice;
        }
        if (krwPrice < minKlayPrice) {
            minKlayPrice = klayPrice;
        }
    });

    const averagePrice = totalKrwPrice / jsonData.length
    const averageKlayPrice = totalKlayPrice / jsonData.length
    return { minPrice, maxPrice, averagePrice, minKlayPrice, maxKlayPrice, averageKlayPrice }

}