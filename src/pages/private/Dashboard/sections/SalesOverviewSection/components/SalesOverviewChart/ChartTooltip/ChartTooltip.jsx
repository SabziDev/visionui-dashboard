const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-[#56577A] bg-[#060B28] p-4 shadow-lg fa:rtl">
      <p className="mb-2 text-sm text-gray-400">{label}</p>

      {payload.map((item) => (
        <div
          key={item.dataKey}
          className="flex-items-center justify-between gap-6"
        >
          <span style={{ color: item.color }}>{item.name}</span>

          <span className="font-bold">
            {Number(item.value).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChartTooltip;
