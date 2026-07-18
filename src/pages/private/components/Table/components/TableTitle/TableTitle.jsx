import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

import TableTitleMoreBtn from "./TableTitleMoreBtn/TableTitleMoreBtn";

const TableTitle = ({ isShowMoreBtn }) => {
  const { t } = useTranslation();

  return (
    <div className="flex-items-center justify-between">
      <div className="space-y-1.5">
        <h3 className="font-VazirBold text-lg">
          {t("components.table.title")}
        </h3>

        <div className="flex-center gap-1">
          <FaCircleCheck className="size-3.5 fill-green-500" />
          <p className="mt-0.5 text-sm text-gray-400">
            {t("components.table.desc")}
          </p>
        </div>
      </div>

      {isShowMoreBtn && <TableTitleMoreBtn />}
    </div>
  );
};

export default TableTitle;
