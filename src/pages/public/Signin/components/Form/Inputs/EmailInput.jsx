import clsx from "clsx";
import { useTranslation } from "react-i18next";

const EmailInput = ({ register, inputErrors, copyTextToClipboard }) => {
  const { t } = useTranslation();

  return (
    <>
      <input
        type="email"
        placeholder={t("pages.public.signin.form.inputs.email.placeholder")}
        className={clsx([
          "mb-2 w-87.5 rounded-[20px] border-2 px-5 py-4",
          inputErrors.email ? "border-red-500 ring-red-500" : "border-blue",
        ])}
        {...register("email")}
      />
      {inputErrors.email && (
        <div className="w-full text-red-500">
          {t("pages.public.signin.form.inputs.errMessage.0")}
          <span
            onClick={() => copyTextToClipboard("sabzidev@gmail.com")}
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
