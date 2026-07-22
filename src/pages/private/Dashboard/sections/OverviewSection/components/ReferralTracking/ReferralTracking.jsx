import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import useCounter from "@/pages/private/hooks/useCounter/useCounter";

import ReferralTrackingChart from "./ReferralTrackingChart/ReferralTrackingChart";

const ReferralTracking = ({ value }) => {
  const counter = useCounter(value + 52, 800);

  return (
    <div className="relative flex h-88 w-87.5 flex-col gap-y-2 rounded-2xl px-7 py-6.5 bg-primary-gradient 2xl:w-full">
      <SectionTitle
        title="pages.private.dashboard.referralTracking.title"
        desc={{ value: "pages.private.dashboard.referralTracking.desc" }}
      />

      <ReferralTrackingChart value={value} counter={counter} />
    </div>
  );
};

export default ReferralTracking;
