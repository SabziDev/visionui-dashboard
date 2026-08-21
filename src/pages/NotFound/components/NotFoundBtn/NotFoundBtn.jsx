import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const NotFoundBtn = () => {
  const { t } = useTranslation();

  return (
    // TODO NotFound-Page Btn-Text
    <Link
      to="/"
      className="z-10 rounded-lg bg-white/90 p-3 font-medium text-black/60 shadow-xl hover:shadow-2xl active:scale-[0.96]"
    >
      {t("pages.notFound.btn")}
    </Link>
  );
};

export default NotFoundBtn;
