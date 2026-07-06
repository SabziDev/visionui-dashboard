import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { i18n } from "@/i18n";

const RememberMe = ({ register }) => {
  const { t } = useTranslation();

  return (
    <label
      htmlFor="remember-me"
      className={clsx([
        "mt-6 flex-center cursor-pointer gap-x-2.5",
        i18n.language === "fa" && "ltr",
      ])}
    >
      <input
        id="remember-me"
        type="checkbox"
        className="peer sr-only"
        {...register("rememberMe")}
      />
      <div className="flex-items-center h-5 w-9 justify-between rounded-full bg-blue px-1 opacity-50 transition-all peer-checked:pl-4.5 peer-checked:opacity-100">
        <span className="size-3.5 rounded-full bg-white" />
      </div>
      <span className="font-VazirMedium text-xs">
        {t("pages.public.signin.form.inputs.rememberMe.label")}
      </span>
    </label>
  );
};

export default RememberMe;
