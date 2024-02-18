import { fetchData } from "@/utils/utils";

export const updateTableData = async () => {
  const jsonData = await fetchData("https://99-planet.com/volume/last-sale-shoe");
  return jsonData

};
