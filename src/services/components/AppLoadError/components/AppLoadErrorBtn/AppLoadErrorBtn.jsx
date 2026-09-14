import { useTranslation } from "react-i18next";

const AppLoadErrorBtn = () => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="z-10 rounded-lg bg-white/90 p-3 font-medium text-black/60 shadow-xl hover:shadow-2xl active:scale-[0.96]"
    >
      {t("components.appLoadError.btn")}
    </button>
  );
};

export default AppLoadErrorBtn;
