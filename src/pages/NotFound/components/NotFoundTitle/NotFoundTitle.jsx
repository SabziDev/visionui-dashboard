import { useTranslation } from "react-i18next";

import pagesMeta from "@/data/pages-meta/pages-meta";

const NotFoundTitle = () => {
  const { t } = useTranslation();

  return (
    <h2 className="mb-2 text-3xl font-bold text-white">
      {t(pagesMeta.notFound.title)}
    </h2>
  );
};

export default NotFoundTitle;
