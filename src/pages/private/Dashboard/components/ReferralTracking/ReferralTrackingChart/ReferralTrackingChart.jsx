import { useTranslation } from "react-i18next";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

import ReferralTrackingChartDesc from "./ReferralTrackingChartDesc/ReferralTrackingChartDesc";

const ReferralTrackingChart = ({ value, counter }) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto">
      <div className="relative">
        <RadialBarChart
          width={220}
          height={220}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={12}
          data={[{ value }]}
          startAngle={270}
          endAngle={-90}
        >
          <defs>
            <linearGradient
              id="referralTrackingGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#05CD99" stopOpacity={1} />
              <stop offset="100%" stopColor="#060b26" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            cornerRadius={50}
            fill="url(#referralTrackingGradient)"
            background={{ fill: "#22234b" }}
          />
        </RadialBarChart>

        <div className="absolute top-1/2 left-1/2 flex-center -translate-1/2 flex-col gap-y-1.5">
          <span className="font-VazirBold text-5xl">{value / 10}</span>
          <span className="font-VazirMedium text-sm text-gray-400">
            {t("pages.private.dashboard.referralTracking.totalScore")}
          </span>
        </div>
      </div>

      <ReferralTrackingChartDesc counter={counter} />
    </div>
  );
};

export default ReferralTrackingChart;
