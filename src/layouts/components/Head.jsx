import { useTranslation } from "react-i18next";

import useCurrentRouteHandle from "../hooks/useCurrentRouteHandle";

const Head = () => {
  const seo = useCurrentRouteHandle("seo");

  const { t } = useTranslation();

  return (
    <>
      <title>{t(seo?.title)}</title>
      <meta name="description" content={t(seo?.desc)} />
    </>
  );
};

export default Head;
