import { useTranslation } from "react-i18next";

import useCounter from "@/hooks/useCounter/useCounter";

import ReferralTrackingChart from "./ReferralTrackingChart/ReferralTrackingChart";

const ReferralTracking = ({ value }) => {
  const counter = useCounter(145, 800);

  const { t } = useTranslation();

  return (
    <div className="relative flex h-88 w-87.5 flex-col gap-y-2 rounded-2xl px-7 py-6.5 primary-gradient 2xl:w-full">
      <div className="flex-justify-center flex-col">
        <span className="font-VazirBold text-lg">
          {t("pages.private.dashboard.referralTracking.title")}
        </span>
        <span className="font-VazirMedium text-sm text-gray-400">
          {t("pages.private.dashboard.referralTracking.desc")}
        </span>
      </div>

      <ReferralTrackingChart value={value} counter={counter} />
    </div>
  );
};

export default ReferralTracking;
