import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import ProjectsTable from "../Dashboard/components/ProjectsTable/ProjectsTable";
import AuthorsTable from "./sections/AuthorsTable/AuthorsTable";

const Tables = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.tables.title")}</title>
        <meta name="description" content={t("pagesMeta.tables.desc")} />
      </Head>

      <div className="space-y-6 fa:rtl">
        <AuthorsTable />
        <ProjectsTable />
      </div>
    </>
  );
};

export default Tables;
