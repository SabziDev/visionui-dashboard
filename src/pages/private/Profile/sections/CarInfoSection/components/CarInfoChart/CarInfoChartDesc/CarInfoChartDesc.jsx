import { useTranslation } from "react-i18next";

const CarInfoChartDesc = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-4 flex flex-col justify-between">
      <span className="mx-auto font-VazirBold text-lg">{`0${t("words.h")} 58${t("words.min")}`}</span>
      <span className="mx-auto text-sm text-gray-500">
        {t("pages.private.profile.carInfo.fullCharge")}
      </span>
    </div>
  );
};

export default CarInfoChartDesc;
