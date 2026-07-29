import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import BillingInformationSection from "./sections/BillingInformationSection/BillingInformationSection";
import InvoicesSection from "./sections/InvoicesSection/InvoicesSection";
import PaymentSection from "./sections/PaymentSection/PaymentSection";
import YourTransactionsSection from "./sections/YourTransactionsSection/YourTransactionsSection";

const Billing = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.billing.title")}</title>
        <meta name="description" content={t("pagesMeta.billing.desc")} />
      </Head>

      <div className="flex-center flex-col gap-6 xl:flex-row">
        <PaymentSection />
        <InvoicesSection />
      </div>
      <div className="flex-center flex-col gap-6 xl:flex-row">
        <BillingInformationSection />
        <YourTransactionsSection />
      </div>
    </>
  );
};

export default Billing;
