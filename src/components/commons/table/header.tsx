import { headers } from "@/constants/table";

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        {headers.map((header, index: number) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};
