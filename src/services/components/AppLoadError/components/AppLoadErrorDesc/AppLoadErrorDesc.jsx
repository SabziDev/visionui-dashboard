import { useTranslation } from "react-i18next";

const AppLoadErrorDesc = () => {
  const { t } = useTranslation();

  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {t("components.appLoadError.desc")}
    </p>
  );
};

export default AppLoadErrorDesc;
