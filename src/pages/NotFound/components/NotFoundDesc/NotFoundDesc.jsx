import { useTranslation } from "react-i18next";

import pagesSeo from "@/data/pagesSeo/pagesSeo";

const NotFoundDesc = () => {
  const { t } = useTranslation();

  return (
    <p className="mb-8 max-w-md text-lg text-gray-300">
      {t(pagesSeo.notFound.desc)}
    </p>
  );
};

export default NotFoundDesc;
