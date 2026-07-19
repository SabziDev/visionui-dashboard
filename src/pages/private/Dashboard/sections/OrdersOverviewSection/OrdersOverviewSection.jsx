import SectionTitle from "@/pages/private/Dashboard/components/SectionTitle/SectionTitle";

const OrdersOverviewSection = () => {
  return (
    <div className="h-115.5 w-full max-w-130 rounded-2xl px-5.5 py-7 bg-primary-gradient">
      <SectionTitle
        title="pages.private.dashboard.ordersOverview.title"
        desc={{ value: "pages.private.dashboard.ordersOverview.desc" }}
        isShowTick
      />
    </div>
  );
};

export default OrdersOverviewSection;
