import { useTranslation } from "react-i18next";

const ProjectsCardTitle = ({ title }) => {
  const { t } = useTranslation();

  return <h3 className="font-VazirBold text-lg/4">{t(title)}</h3>;
};

export default ProjectsCardTitle;
