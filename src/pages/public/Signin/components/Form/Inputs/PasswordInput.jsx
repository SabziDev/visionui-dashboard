import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { i18n } from "@/i18n";

const PasswordInput = ({ register, errors, copyTextToClipboard }) => {
  const { t } = useTranslation();

  return (
    <>
      <input
        type="password"
        placeholder={t("pages.public.signin.form.inputs.password.placeholder")}
        className={clsx([
          "mt-6 mb-2 w-87.5 rounded-[20px] border-2 px-5 py-4",
          errors.password ? "border-red-500 ring-red-500" : "border-blue",
          i18n.language === "fa" && "text-left placeholder:text-right",
        ])}
        {...register("password")}
      />
      {errors.password && (
        <div className="w-full text-red-500">
          {t("pages.public.signin.form.inputs.errMessage.0")}
          <span
            onClick={() => copyTextToClipboard("admin")}
            className="cursor-copy text-blue"
          >
            admin
          </span>
          {t("pages.public.signin.form.inputs.errMessage.1")}
        </div>
      )}
    </>
  );
};

export default PasswordInput;
