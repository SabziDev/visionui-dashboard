import { useTranslation } from "react-i18next";

const WelcomeCardContent = ({ adminName }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <span className="text-gray-400">
        {t("pages.private.dashboard.welcomeCard.welcomeBack")}
      </span>
      <span className="mb-2.5 font-VazirBold text-[28px]">{adminName}</span>
      <span className="max-w-46.5 text-gray-400">
        {t("pages.private.dashboard.welcomeCard.greeting")}
      </span>
    </div>
  );
};

export default WelcomeCardContent;
