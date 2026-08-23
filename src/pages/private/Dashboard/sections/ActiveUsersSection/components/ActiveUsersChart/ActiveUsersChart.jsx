import { Bar, BarChart, ResponsiveContainer, YAxis } from "recharts";

import stats from "@/data/features/stats/stats";

const ActiveUsersChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={stats.activeUsers} responsive>
        <YAxis
          tick={{
            fill: "#fff",
          }}
        />

        <Bar
          dataKey="value"
          fill="#fff"
          barSize={8}
          radius={[999, 999, 999, 999]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActiveUsersChart;
