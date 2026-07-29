import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

const CreditCardTitle = () => {
  return (
    <div className="relative flex-items-center justify-between">
      <SectionTitle title="Vision UI" />
      <div className="mb-4">
        <span className="inline-block size-8 rounded-full bg-white/40" />
        <span className="inline-block size-8 -translate-x-4 rounded-full bg-white/40" />
      </div>
    </div>
  );
};

export default CreditCardTitle;
