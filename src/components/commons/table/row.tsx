export const TableRow = ({ item }: { item: any }) => {
  return (
    <tr>
      <td>{item.TokenId}</td>
      <td>{item.Quality}</td>
      <td>{item.Type}</td>
      <td>{item.Gen}</td>
      <td>{item.Level}</td>
      <td>{item.MintingCount + "/" + item.MaxMintingCount}</td>
      <td>{item.Opt1 === undefined ? "-" : item.Opt1}</td>
      <td>{item.Opt2 === undefined ? "-" : item.Opt2}</td>
      <td>{item.Opt3 === undefined ? "-" : item.Opt3}</td>
      <td>
        {item.KrwPrice === undefined
          ? "-"
          : Math.floor(item.KrwPrice).toLocaleString("en")}
      </td>
    </tr>
  );
};
