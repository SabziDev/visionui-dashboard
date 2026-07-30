import { useTranslation } from "react-i18next";

const ProjectsCardImg = ({ title, imgSrc }) => {
  const { t } = useTranslation();

  return (
    <div className="h-50 w-full overflow-hidden rounded-xl">
      <img src={imgSrc} alt={t(title)} className="size-full" />
    </div>
  );
};

export default ProjectsCardImg;
