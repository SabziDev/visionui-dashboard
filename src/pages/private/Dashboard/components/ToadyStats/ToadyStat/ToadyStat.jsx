import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosGlobe } from "react-icons/io";
import { IoCartSharp, IoDocumentTextOutline, IoWallet } from "react-icons/io5";

const ToadyStat = ({ data }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= data.value.count) {
          clearInterval(interval);

          return prev;
        }

        return prev + 200;
      });
    }, 0);

    return () => clearInterval(interval);
  }, [data.value.count]);

  const VALUE_PREFIX = {
    money: "%",
    sales: "%",
    clients: "+",
  };

  const ICONS = {
    money: IoWallet,
    users: IoIosGlobe,
    clients: IoDocumentTextOutline,
    sales: IoCartSharp,
  };
  const Icon = ICONS[data.type];

  const { t } = useTranslation();

  return (
    <div className="flex-items-center justify-between gap-4 rounded-2xl p-4 bg-linear ltr:ltr rtl:rtl">
      <div>
        <h6 className="font-VazirMedium text-sm text-nowrap text-gray-400">
          {t(`pages.private.dashboard.todayStats.${data.type}.title`)}
        </h6>

        <div className="mt-0.5 flex-center gap-1 ltr">
          <div className="font-VazirBold text-lg">
            <span>{VALUE_PREFIX[data.type] ?? null}</span>
            <span>{counter.toLocaleString()}</span>
          </div>

          <span
            className={clsx([
              "font-VazirBold text-sm",
              data.value.type === "increase"
                ? "text-green-500"
                : "text-red-500",
            ])}
          >
            {`${data.value.type === "increase" ? "+" : "-"}${data.value.change}%`}
          </span>
        </div>
      </div>

      <div className="rounded-xl bg-blue p-3 *:size-5">
        <Icon />
      </div>
    </div>
  );
};

export default ToadyStat;
