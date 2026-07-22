/* eslint-disable @eslint-react/no-array-index-key */

import { useTranslation } from "react-i18next";

import Td from "./components/Td/Td";
import Th from "./components/Th/Th";
import TableSkeleton from "./TableSkeleton";

const Table = ({ data, colsTitles, colsData, isPending }) => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto">
      {isPending ? (
        <TableSkeleton />
      ) : (
        <table className="w-full min-w-140 en:text-left fa:text-right">
          <thead className="border-b-2 border-[#56577A]">
            <tr>
              {colsTitles.map((colsTitle, i) => (
                <Th key={i}>{t(colsTitle)}</Th>
              ))}
            </tr>
          </thead>
          <tbody className="*:border-b-2 *:border-[#56577A] *:last:border-b-0">
            {data.map((item) => (
              <tr key={item.id} className="*:py-5 *:font-VazirMedium">
                {colsData.map((col, i) => (
                  <Td key={i} data={item} col={col} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
