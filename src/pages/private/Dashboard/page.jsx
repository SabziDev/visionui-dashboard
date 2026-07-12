import { useTranslation } from "react-i18next";
import { FaRegFaceLaugh } from "react-icons/fa6";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

import Head from "@/pages/components/Head";

import ToadyStats from "./components/ToadyStats/ToadyStats";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.dashboard.title")}</title>
        <meta name="description" content={t("pagesMeta.dashboard.desc")} />
      </Head>

      <ToadyStats />

      <div className="relative size-53">
        <RadialBarChart
          width={220}
          height={220}
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="100%"
          barSize={12}
          data={[{ value: 85 }]}
          startAngle={270}
          endAngle={-90}
        >
          <defs>
            <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0075FF" stopOpacity={1} />
              <stop offset="100%" stopColor="#060b26" stopOpacity={1} />
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
            fill="url(#progressGradient)"
            background={{ fill: "#22234b" }}
          />
        </RadialBarChart>

        <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-blue p-3 rounded-full">
          <FaRegFaceLaugh className="size-6" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
