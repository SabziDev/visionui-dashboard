import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

const Billing = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.billing.title")}</title>
        <meta name="description" content={t("pagesMeta.billing.desc")} />
      </Head>

      <h1>Home</h1>
    </>
  );
};

export default Billing;
