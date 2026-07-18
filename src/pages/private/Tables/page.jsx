import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import Table from "../components/Table/Table";

const Tables = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.tables.title")}</title>
        <meta name="description" content={t("pagesMeta.tables.desc")} />
      </Head>

      <Table />
    </>
  );
};

export default Tables;
