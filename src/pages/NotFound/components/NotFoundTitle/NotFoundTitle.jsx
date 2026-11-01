import { useTranslation } from "react-i18next";

import metadata from "@/data/metadata/metadata";

const NotFoundTitle = () => {
  const { t } = useTranslation();

  return (
    <h1 className="mb-2 text-3xl font-bold text-white">
      {t(metadata.notFound.title)}
    </h1>
  );
};

export default NotFoundTitle;
