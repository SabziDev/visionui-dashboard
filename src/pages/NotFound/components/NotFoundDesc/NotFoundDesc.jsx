import { useTranslation } from "react-i18next";

const NotFoundDesc = () => {
  const { t } = useTranslation();

  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {t("pagesMeta.notFound.desc")}
    </p>
  );
};

export default NotFoundDesc;
