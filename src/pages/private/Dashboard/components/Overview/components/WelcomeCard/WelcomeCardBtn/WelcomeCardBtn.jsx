import { useTranslation } from "react-i18next";
import { IoArrowForwardOutline } from "react-icons/io5";

const WelcomeCardBtn = () => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="flex-items-center gap-1 underline decoration-transparent decoration-dashed underline-offset-2 transition hover:decoration-white"
    >
      <span className="font-VazirMedium text-xs">
        {t("pages.private.dashboard.welcomeCard.btn")}
      </span>
      <IoArrowForwardOutline className="fa:rotate-180" />
    </button>
  );
};

export default WelcomeCardBtn;
