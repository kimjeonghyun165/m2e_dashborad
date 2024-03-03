import { fetchData } from "@/utils/utils";

export const updateTableData = async (link: string) => {
  const jsonData = await fetchData("http://localhost:3050/volume" + link)
  return jsonData.slice(0, 100)
};
