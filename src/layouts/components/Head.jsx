import { useTranslation } from "react-i18next";

import useCurrentRouteMeta from "../hooks/useCurrentRouteMeta";

const Head = () => {
  const { title, desc } = useCurrentRouteMeta("seo");

  const { t } = useTranslation();

  return (
    <>
      <title>{t(title)}</title>
      <meta name="description" content={t(desc)} />
    </>
  );
};

export default Head;
