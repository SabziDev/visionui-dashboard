import { useTranslation } from "react-i18next";

import Icon from "@/components/Icon/Icon";

const AppLoadErrorTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-center flex-col">
      <Icon id="icon-cloud-off" className="size-17.5 fill-amber-700" />

      <span className="mb-2 text-3xl font-bold text-amber-700">
        {t("components.appLoadError.title")}
      </span>
    </div>
  );
};

export default AppLoadErrorTitle;
