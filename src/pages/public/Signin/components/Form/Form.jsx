import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import CheckboxInput from "@/components/CheckboxInput/CheckboxInput";

import useAuthForm from "../../hooks/useAuthForm/useAuthForm";
import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

const Form = () => {
  const { register, handleSubmit, submitForm, isSubmitting, inputErrors } =
    useAuthForm();

  const { t } = useTranslation();

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    toast.success(t("pages.public.signin.copyToast"), {
      position: "top-left",
    });
  };

  return (
    <div className="flex-justify-center flex-col items-start">
      <span className="font-VazirBold text-3xl">
        {t("pages.public.signin.form.title")}
      </span>
      <p className="mt-1.5 font-VazirMedium text-sm text-gray-400">
        {t("pages.public.signin.form.desc")}
      </p>

      <form
        noValidate
        onSubmit={handleSubmit(submitForm)}
        className="mt-10 flex-justify-center flex-col items-start"
      >
        <EmailInput
          register={register}
          inputErrors={inputErrors}
          copyTextToClipboard={copyTextToClipboard}
        />

        <PasswordInput
          register={register}
          inputErrors={inputErrors}
          copyTextToClipboard={copyTextToClipboard}
        />

        <CheckboxInput
          id="rememberMe"
          title="pages.public.signin.form.inputs.rememberMe.label"
          register={register}
        />

        <SubmitBtn isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default Form;
