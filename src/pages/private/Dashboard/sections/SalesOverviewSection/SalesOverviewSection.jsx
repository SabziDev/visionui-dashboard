import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import SalesOverviewChart from "./components/SalesOverviewChart/SalesOverviewChart";

const SalesOverviewSection = () => {
  return (
    <div className="h-117 w-full max-w-230 rounded-2xl px-5.5 py-7 pb-110 bg-primary-gradient ltr">
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
