import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Td = ({ col, data }) => {
  const { t } = useTranslation();

  if (col === "TITLE") {
    return (
      <td>
        <div className="flex-items-center gap-4">
          <img src={data.imgSrc} alt={data.title} className="size-5" />
          <span className="text-sm">{t(data.title)}</span>
        </div>
      </td>
    );
  }

  if (col === "BUDGET") {
    return (
      <td className="text-sm">
        {data.budget
          ? `$${data.budget.toLocaleString()}`
          : t("components.table.notSet")}
      </td>
    );
  }

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
};

export default Td;
