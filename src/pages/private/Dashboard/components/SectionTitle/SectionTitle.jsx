const SectionTitle = ({ title, beforeDesc, afterDesc }) => {
  return (
    <div className="mb-7">
      <h3 className="font-VazirBold text-lg fa:rtl">{title}</h3>
      <div className="text-sm fa:rtl">
        <span className="text-green-500">{beforeDesc}</span>
        <span className="text-gray-400">{afterDesc}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
