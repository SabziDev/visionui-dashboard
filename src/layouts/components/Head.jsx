import { useTranslation } from "react-i18next";

import useCurrentRouteHandle from "../hooks/useCurrentRouteHandle";

const Head = () => {
  const { title, desc } = useCurrentRouteHandle("seo");

  const { t } = useTranslation();

  return (
    <>
      <title>{t(title)}</title>
      <meta name="description" content={t(desc)} />
    </>
  );
};

export default Head;
