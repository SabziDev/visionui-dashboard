import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import useCounter from "@/pages/private/hooks/useCounter/useCounter";

import SatisfactionRateChart from "./SatisfactionRateChart/SatisfactionRateChart";

const SatisfactionRate = ({ value }) => {
  const counter = useCounter(value, 800);

  return (
    <div className="relative flex h-88 w-87.5 flex-col gap-y-2 rounded-2xl px-7 py-6.5 bg-primary-gradient">
      <SectionTitle
        title="pages.private.dashboard.satisfactionRate.title"
        desc={{ value: "pages.private.dashboard.satisfactionRate.desc" }}
      />

      <SatisfactionRateChart value={value} counter={counter} />
    </div>
  );
};

export default SatisfactionRate;
