import { useTranslation } from "react-i18next";

const ProjectsCardNumber = ({ name }) => {
  const { t } = useTranslation();

  return (
    <span className="font-VazirMedium text-xs/0 text-gray-400">{t(name)}</span>
  );
};

export default ProjectsCardNumber;
