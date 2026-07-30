import { useTranslation } from "react-i18next";

const ProjectsCardBtn = () => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="h-9 w-32 rounded-xl border border-white pt-0.5 font-VazirBold text-xs transition duration-350 hover:bg-white hover:text-navy"
    >
      {t("pages.private.profile.projects.projectsData.btn")}
    </button>
  );
};

export default ProjectsCardBtn;
