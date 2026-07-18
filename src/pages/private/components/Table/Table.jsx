import { useTranslation } from "react-i18next";

import { useProjectsQuery } from "@/services/hooks/useProjects/useProjects";

import TableTitle from "./components/TableTitle/TableTitle";
import Td from "./components/Td/Td";
import Th from "./components/Th/Th";
import TableSkeleton from "./TableSkeleton";

const Table = ({ isShowMoreBtn = false }) => {
  const { projects, isPending } = useProjectsQuery();

  const { t } = useTranslation();

  return (
    <div className="w-full rounded-2xl px-5 pt-7 pb-2 bg-primary-gradient">
      <TableTitle isShowMoreBtn={isShowMoreBtn} />

      <div className="overflow-x-auto">
        {isPending ? (
          <TableSkeleton />
        ) : (
          <table className="mt-7 w-full min-w-140 en:text-left fa:text-right">
            <thead className="border-b-2 border-[#56577A]">
              <tr>
                <Th>{t("components.table.cols.company")}</Th>
                <Th>{t("components.table.cols.budget")}</Th>
                <Th>{t("components.table.cols.completion")}</Th>
              </tr>
            </thead>
            <tbody className="*:border-b-2 *:border-[#56577A] *:last:border-b-0">
              {projects.map((project) => (
                <tr key={project.id} className="*:py-5 *:font-VazirMedium">
                  <Td col="TITLE" data={project} />
                  <Td col="BUDGET" data={project} />
                  <Td col="COMPLETION" data={project} />
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
