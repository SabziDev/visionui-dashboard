import { useTranslation } from "react-i18next";

import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";

const CreditCardTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-items-center justify-between">
      <SectionTitle title="pages.private.billing.creditBalance.title" />
      <div className="mb-4">
        <span className="inline-block size-8 rounded-full bg-white/40" />
        <span className="inline-block size-8 -translate-x-4 rounded-full bg-white/40" />
      </div>
    </div>
  );
};

export default CreditCardTitle;
