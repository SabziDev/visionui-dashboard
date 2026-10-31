import { useTranslation } from "react-i18next";

import pagesSeo from "@/data/pagesSeo/pagesSeo";

const NotFoundTitle = () => {
  const { t } = useTranslation();

  return (
    <h1 className="mb-2 text-3xl font-bold text-white">
      {t(pagesSeo.notFound.title)}
    </h1>
  );
};

export default NotFoundTitle;
