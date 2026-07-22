import stats from "@public/data/stats/stats";
import { Bar, BarChart, ResponsiveContainer, YAxis } from "recharts";

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
