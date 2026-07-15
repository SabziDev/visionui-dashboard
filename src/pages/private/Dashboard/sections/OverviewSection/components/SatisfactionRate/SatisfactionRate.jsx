import { useTranslation } from "react-i18next";

import useCounter from "@/hooks/useCounter/useCounter";

import SatisfactionRateChart from "./SatisfactionRateChart/SatisfactionRateChart";

const SatisfactionRate = ({ value }) => {
  const counter = useCounter(value, 800);

  const { t } = useTranslation();

  return (
    <div className="relative flex h-88 w-87.5 flex-col gap-y-2 rounded-2xl px-7 py-6.5 primary-gradient">
      <div className="flex-justify-center flex-col">
        <span className="font-VazirBold text-lg">
          {t("pages.private.dashboard.satisfactionRate.title")}
        </span>
        <span className="font-VazirMedium text-sm text-gray-400">
          {t("pages.private.dashboard.satisfactionRate.desc")}
        </span>
      </div>

      <SatisfactionRateChart value={value} counter={counter} />
    </div>
  );
};

export default SatisfactionRate;
