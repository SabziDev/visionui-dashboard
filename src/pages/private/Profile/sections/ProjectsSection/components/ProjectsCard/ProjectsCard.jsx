import { useTranslation } from "react-i18next";

const ProjectsCard = ({ title, desc, name, imgSrc }) => {
  const { t } = useTranslation();

  return (
    <article className="w-full max-w-92.5 shrink-0">
      <div className="h-50 w-full overflow-hidden rounded-xl">
        <img src={imgSrc} alt={t(title)} className="size-full" />
      </div>
      <div>
        <span className="font-VazirMedium text-xs/0 text-gray-400">
          {t(name)}
        </span>
        <h3 className="font-VazirBold text-lg/4">{t(title)}</h3>
        <p className="mt-1.75 mb-4.5 line-clamp-3 text-sm text-gray-400">
          {t(desc)}
        </p>
        <button
          type="button"
          className="rounded-xl border border-white px-7.5 py-2.25 font-VazirBold text-xs transition duration-350 hover:bg-white hover:text-navy"
        >
          {t("pages.private.profile.projects.projectsData.btn")}
        </button>
      </div>
    </article>
  );
};

export default ProjectsCard;
