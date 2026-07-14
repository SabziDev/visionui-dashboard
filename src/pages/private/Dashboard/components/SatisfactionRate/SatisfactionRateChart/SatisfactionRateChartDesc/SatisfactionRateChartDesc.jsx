import { useTranslation } from "react-i18next";

const SatisfactionRateChartDesc = ({ counter }) => {
  const { t } = useTranslation();

  return (
    <div className="absolute inset-x-0 bottom-8 mx-auto flex w-52 justify-between rounded-2xl bg-navy px-6 py-3 md:w-72 2xl:w-52">
      <span className="text-sm text-gray-400">0%</span>
      <div className="flex-center flex-col">
        <span className="font-VazirBold text-3xl">{counter}</span>
        <span className="text-sm text-gray-400">
          {t("pages.private.dashboard.satisfactionRate.btn")}
        </span>
      </div>
      <span className="text-sm text-gray-400">100%</span>
    </div>
  );
};

export default SatisfactionRateChartDesc;
