type ProfileTableProps = {
  headers: Array<string>,
  data: Array<{ startDay: string, endDay: string, value1: string, value2: string }>,
  columnWidths: Array<number>
};
const ProfileTable = ({ headers, data, columnWidths }: ProfileTableProps) => {
  return (
    <table className="border border-white w-full text-gray-400 table-fixed">
      <colgroup>
        <col style={{ width: `${(columnWidths[0] / columnWidths.reduce((a, b) => a + b, 0)) * 100}%` }} />
        <col style={{ width: `${(columnWidths[1] / columnWidths.reduce((a, b) => a + b, 0)) * 100}%` }} />
        <col style={{ width: `${(columnWidths[2] / columnWidths.reduce((a, b) => a + b, 0)) * 100}%` }} />
      </colgroup>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border py-2 text-sm md:text-base text-white">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border py-2 text-sm md:text-base">{row.startDay}</td>
            <td className="border py-2 text-sm md:text-base">{row.endDay}</td>
            <td className="border py-2 text-sm md:text-base">
              {row.value1}
              <br/>
              {row.value2}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ProfileTable };