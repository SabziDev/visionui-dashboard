import { FaRegFaceLaugh } from "react-icons/fa6";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

import SatisfactionRateChartDesc from "./SatisfactionRateChartDesc/SatisfactionRateChartDesc";

const SatisfactionRateChart = ({ value, counter }) => {
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
              id="satisfactionRateGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#0075FF" stopOpacity={1} />
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
            fill="url(#satisfactionRateGradient)"
            background={{ fill: "#22234b" }}
          />
        </RadialBarChart>

        <span className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full bg-blue p-3">
          <FaRegFaceLaugh className="size-6" />
        </span>
      </div>

      <SatisfactionRateChartDesc counter={counter} />
    </div>
  );
};

export default SatisfactionRateChart;
