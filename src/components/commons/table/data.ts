import { fetchData } from "@/utils/utils";

export const updateTableData = async () => {
  const jsonData = await fetchData("http://58.143.19.231:8080/volume/last-sale-shoe");
  return jsonData

};
