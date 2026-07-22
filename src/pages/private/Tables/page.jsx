import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

import ProjectsTableSection from "../Dashboard/components/ProjectsTableSection/ProjectsTableSection";
import AuthorsTableSection from "./sections/AuthorsTableSection/AuthorsTableSection";

const Tables = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.tables.title")}</title>
        <meta name="description" content={t("pagesMeta.tables.desc")} />
      </Head>

      <div className="space-y-6 fa:rtl">
        <AuthorsTableSection />
        <ProjectsTableSection />
      </div>
    </>
  );
};

export default Tables;
