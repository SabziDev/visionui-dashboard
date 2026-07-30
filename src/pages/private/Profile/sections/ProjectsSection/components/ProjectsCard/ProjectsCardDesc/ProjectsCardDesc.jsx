import { useTranslation } from "react-i18next";

const ProjectsCardDesc = ({ desc }) => {
  const { t } = useTranslation();

  return (
    <p className="mt-1.75 mb-4.5 line-clamp-3 h-10 text-sm text-gray-400">
      {t(desc)}
    </p>
  );
};

export default ProjectsCardDesc;
