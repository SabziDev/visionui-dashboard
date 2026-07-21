import { useTranslation } from "react-i18next";
import { IoIosFlash } from "react-icons/io";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

import CarInfoChartDesc from "./CarInfoChartDesc/CarInfoChartDesc";

const CarInfoChart = ({ value, counter }) => {
  const { t } = useTranslation();

  return (
    <div className="w-max">
      <div className="relative">
        <RadialBarChart
          data={[{ value }]}
          width={170}
          height={170}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={12}
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

        <div className="absolute top-1/2 left-1/2 flex-center -translate-1/2 flex-col gap-y-1.5 pb-4">
          <IoIosFlash className="mb-2 size-6 fill-[#09AD8F]" />
          <span className="font-VazirBold text-4xl/6">{counter}%</span>
          <span className="font-VazirMedium text-sm text-gray-400">
            {t("pages.private.profile.carInfo.currentLoad")}
          </span>
        </div>
      </div>

      <CarInfoChartDesc counter={counter} />
    </div>
  );
};

export default CarInfoChart;
