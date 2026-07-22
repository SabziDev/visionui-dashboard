import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

const OrdersOverviewSection = () => {
  return (
    <div className="h-115.5 w-full max-w-130 section-card">
      <SectionTitle
        title="pages.private.dashboard.ordersOverview.title"
        desc={{ value: "pages.private.dashboard.ordersOverview.desc" }}
        isShowTick
      />
    </div>
  );
};

export default OrdersOverviewSection;
