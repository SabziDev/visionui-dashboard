import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { i18n } from "@/i18n";

const EmailInput = ({ register, errors, copyTextToClipboard }) => {
  const { t } = useTranslation();

  return (
    <>
      <input
        type="email"
        placeholder={t("pages.public.signin.form.inputs.email.placeholder")}
        className={clsx([
          "mb-2 w-87.5 rounded-[20px] border-2 px-5 py-4 placeholder:text-gray-400",
          errors.email ? "border-red-500 ring-red-500" : "border-blue",
          i18n.language === "fa" && "text-left placeholder:text-right",
        ])}
        {...register("email")}
      />
      {errors.email && (
        <div className="w-full text-red-500">
          {t("pages.public.signin.form.inputs.errMessage.0")}
          <span
            onClick={() => copyTextToClipboard("SabziDev@gmail.com")}
            className="cursor-copy text-blue"
          >
            SabziDev@gmail.com
          </span>
          {t("pages.public.signin.form.inputs.errMessage.1")}
        </div>
      )}
    </>
  );
};

export default EmailInput;
