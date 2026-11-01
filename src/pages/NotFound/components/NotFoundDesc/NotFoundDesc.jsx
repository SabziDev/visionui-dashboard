import { useTranslation } from "react-i18next";

import metadata from "@/data/metadata/metadata";

const NotFoundDesc = () => {
  const { t } = useTranslation();

  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {t(metadata.notFound.desc)}
    </p>
  );
};

export default NotFoundDesc;
