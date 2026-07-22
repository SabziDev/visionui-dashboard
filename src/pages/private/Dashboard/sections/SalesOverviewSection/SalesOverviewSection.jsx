import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

import SalesOverviewChart from "./components/SalesOverviewChart/SalesOverviewChart";

const SalesOverviewSection = () => {
  return (
    <div className="h-117 w-full max-w-230 section-card pb-110 ltr">
      <SectionTitle
        title="pages.private.dashboard.salesOverview.title"
        desc={{
          beforeValue: "pages.private.dashboard.salesOverview.desc.0",
          afterValue: "pages.private.dashboard.salesOverview.desc.1",
        }}
        isSplitDesc
      />

      <SalesOverviewChart />
    </div>
  );
};

export default SalesOverviewSection;
