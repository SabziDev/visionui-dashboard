import { useTranslation } from "react-i18next";

const CarInfoCard = ({ title, value, icon }) => {
  const { t } = useTranslation();

  return (
    <div className="flex-items-center min-w-55 justify-between rounded-2xl p-3.5 bg-primary-gradient ltr">
      <div className="flex flex-col gap-1">
        <span className="mt-0.75 font-VazirMedium text-xs text-gray-400">
          {t(title)}
        </span>
        <span className="font-VazirBold text-2xl">{value}</span>
      </div>

      {icon.type === "CHART" ? (
        <img src={icon.src} alt="chart" />
      ) : (
        <div className="flex-center rounded-xl bg-blue p-3">
          <icon.Shape className="size-7" />
        </div>
      )}
    </div>
  );
};

export default CarInfoCard;
