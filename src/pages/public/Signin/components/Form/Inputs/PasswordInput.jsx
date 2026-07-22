import clsx from "clsx";
import { useTranslation } from "react-i18next";

const PasswordInput = ({ register, inputErrors, copyTextToClipboard }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-5 w-full min-w-70 max-w-87.5">
      <input
        type="password"
        placeholder={t("pages.public.signin.form.inputs.password.placeholder")}
        className={clsx([
          "mb-2.5 w-full rounded-[20px] border-2 px-5 py-4",
          inputErrors.password ? "border-red-500 ring-red-500" : "border-blue",
        ])}
        {...register("password")}
      />
      {inputErrors.password && (
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
    </div>
  );
};

export default PasswordInput;
