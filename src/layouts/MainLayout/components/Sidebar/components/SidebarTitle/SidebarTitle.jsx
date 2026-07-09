import clsx from "clsx";
import { useTranslation } from "react-i18next";

const SidebarTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h1
        className={clsx([
          "mb-5 from-[#E0E1E2]/90 via-[#E0E1E2]/70 to-[#E0E1E2]/0 bg-clip-text text-center font-VazirBold tracking-ultra-wide text-transparent",
          "ltr:bg-linear-to-r rtl:bg-linear-to-l",
        ])}
      >
        {t("layouts.sidebar.title")}
      </h1>
      <span className="block h-px w-full bg-linear-to-r from-[#E0E1E2]/0 via-[#E0E1E2] to-[#E0E1E2]/16" />
    </div>
  );
};

export default SidebarTitle;
