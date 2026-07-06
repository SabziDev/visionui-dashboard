import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

const Tables = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.tables.title")}</title>
        <meta name="description" content={t("pagesMeta.tables.desc")} />
      </Head>

      <h1>Home</h1>
    </>
  );
};

export default Tables;
