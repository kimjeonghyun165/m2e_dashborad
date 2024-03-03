import { fetchData } from "@/utils/utils";

export const updateTableData = async (link: string) => {
  const jsonData = await fetchData("https://99-planet.com/volume" + link)
  return jsonData.slice(0, 100)
};
