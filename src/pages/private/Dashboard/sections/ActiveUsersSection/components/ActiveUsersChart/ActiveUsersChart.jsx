import { Bar, BarChart, ResponsiveContainer, YAxis } from "recharts";

const fakeData = [
  { value: 330 },
  { value: 230 },
  { value: 120 },
  { value: 290 },
  { value: 510 },
  { value: 420 },
  { value: 480 },
  { value: 290 },
  { value: 160 },
];

const ActiveUsersChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart responsive data={fakeData}>
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
