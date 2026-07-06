import { useTranslation } from "react-i18next";

import Head from "@/pages/components/Head";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("pagesMeta.profile.title")}</title>
        <meta name="description" content={t("pagesMeta.profile.desc")} />
      </Head>

      <h1>Home</h1>
    </>
  );
};

export default Profile;
