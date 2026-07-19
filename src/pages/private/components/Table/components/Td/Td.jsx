import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Td = ({ data, col }) => {
  const { t } = useTranslation();

  if (col.type === "TITLE") {
    return (
      <td>
        {data.fullName ? (
          <div className="flex-items-center gap-3">
            <img
              src={data.imgSrc}
              alt={data.title}
              className="size-10 rounded-2xl"
            />
            <div className="flex-start flex-col">
              <span className="font-VazirMedium text-sm">
                {t(data.fullName)}
              </span>
              <span className="font-VazirMedium text-sm text-gray-400">
                {t(data.email)}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex-items-center gap-4">
            <img src={data.imgSrc} alt={data.title} className="size-5" />
            <span className="text-sm">{t(data.title)}</span>
          </div>
        )}
      </td>
    );
  }
  if (col.type === "BUDGET") {
    return (
      <td>
        {data.budget
          ? `$${data.budget.toLocaleString()}`
          : t("pages.private.components.projectsTable.notSet")}
      </td>
    );
  }
  if (col.type === "FUNCTION") {
    return (
      <td>
        <span className="block font-VazirMedium text-sm">
          {t(`${data.function}.job`)}
        </span>
        <span className="block font-VazirMedium text-sm text-gray-400">
          {t(`${data.function}.side`)}
        </span>
      </td>
    );
  }
  if (col.type === "STATUS") {
    return (
      <td>
        {data.status === "online" ? (
          <span className="inline-block w-18 rounded-lg bg-green-600 py-0.75 text-center">
            {t("pages.private.tables.authorTable.online")}
          </span>
        ) : (
          <span className="inline-block w-18 rounded-lg border border-white py-0.75 text-center">
            {t("pages.private.tables.authorTable.offline")}
          </span>
        )}
      </td>
    );
  }
  if (col.type === "COMPLETION") {
    return (
      <td>
        <div className="h-0.75 w-31 overflow-hidden rounded-full bg-[#2D2E5F]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${data.completion}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-full bg-blue"
          />
        </div>
      </td>
    );
  }

  return <td>{data.employed}</td>;
};

export default Td;
