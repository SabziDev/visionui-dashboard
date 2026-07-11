import { useTranslation } from "react-i18next";
import { IoHelp } from "react-icons/io5";

const SliderNeedHelp = () => {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto mt-6 h-44 w-55 rounded-2xl p-4">
      <img
        src="/images/shapes/layouts/main/sidebar/bg.png"
        alt="halo-shape"
        className="absolute inset-0 -z-1"
      />

      <div className="flex-center size-9 rounded-xl bg-white">
        <IoHelp className="flex-center size-5 rounded-full bg-blue p-0.5 text-white" />
      </div>

      <div className="mt-5">
        <span className="font-VazirBold">
          {t("layouts.sidebar.needHelp.title")}
        </span>
        <p className="font-VazirRegular text-sm">
          {t("layouts.sidebar.needHelp.desc")}
        </p>

        <button
          type="button"
          className="mt-3.5 w-full rounded-xl bg-navy/70 py-2 font-VazirBold text-xs transition-colors hover:bg-navy/80"
        >
          {t("layouts.sidebar.needHelp.btn")}
        </button>
      </div>
    </div>
  );
};

export default SliderNeedHelp;
