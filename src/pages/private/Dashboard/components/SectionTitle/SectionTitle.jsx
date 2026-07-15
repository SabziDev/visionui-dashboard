const SectionTitle = ({ title, beforeDesc, afterDesc }) => {
  return (
    <div className="mb-7 fa:rtl">
      <h3 className="font-VazirBold text-lg">{title}</h3>
      <div className="text-sm">
        <span className="text-green-500">{beforeDesc}</span>
        <span className="text-gray-400">{afterDesc}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
