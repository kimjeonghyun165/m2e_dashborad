import { fetchData } from "@/utils/utils";

export const updateTableData = async () => {
  const jsonData = await fetchData("http://localhost:3001/volume/last-sale-shoe");
  return jsonData

};
