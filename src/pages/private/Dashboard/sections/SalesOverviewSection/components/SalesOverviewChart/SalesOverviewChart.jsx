import { useTranslation } from "react-i18next";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartTooltip from "./ChartTooltip/ChartTooltip";
import SalesOverviewChartSkelton from "./SalesOverviewChartSkelton";

const SalesOverviewChart = ({ data, isPending }) => {
  const { t } = useTranslation();

  if (isPending) return <SalesOverviewChartSkelton />;

  const months = t("pages.private.dashboard.salesOverview.chartMonths", {
    returnObjects: true,
  });

  const finalData = data.map((item, i) => ({
    ...item,
    month: months[i],
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={finalData}>
        <defs>
          <linearGradient id="blueArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0075ff" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#0075ff" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="greenArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2CD9FF" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#2CD9FF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          horizontal
          vertical={false}
          stroke="#56577A"
          strokeDasharray="4 4"
        />

        <XAxis dataKey="month" />

        <YAxis tickFormatter={(value) => value.toLocaleString()} />

        <Tooltip
          formatter={(value, name) => [value.toLocaleString(), name]}
          content={({ active, payload, label }) => (
            <ChartTooltip active={active} payload={payload} label={label} />
          )}
        />

        <Area
          type="monotone"
          name={t("pages.private.dashboard.salesOverview.tooltip.currentYear")}
          dataKey="currentYear"
          stroke="#0075FF"
          strokeWidth={3}
          fill="url(#blueArea)"
        />

        <Area
          type="monotone"
          name={t("pages.private.dashboard.salesOverview.tooltip.lastYear")}
          dataKey="lastYear"
          stroke="#2CD9FF"
          strokeWidth={3}
          fill="url(#greenArea)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesOverviewChart;
