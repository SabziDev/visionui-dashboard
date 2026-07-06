import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import useCookie from "@/hooks/useCookie";
import { i18n } from "@/i18n";
import AppLoadError from "@/services/components/AppLoadError/AppLoadError";
import { useAdminsQuery } from "@/services/hooks/useAdmins/useAdmins";
import loginSchema from "@/validators/loginValidator";

import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";
import RememberMe from "./RememberMe/RememberMe";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

const delaySubmit = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const Form = () => {
  const { t } = useTranslation();

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    toast.success(t("pages.public.signin.copyToast"), {
      position: "top-left",
    });
  };

  const { admins, isError } = useAdminsQuery();
  const [, setStoredAdmin] = useCookie({
    key: "admin",
    defaultValue: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",

      rememberMe: true,
    },

    resolver: zodResolver(loginSchema),
  });

  if (isError) {
    return <AppLoadError />;
  }

  const submitForm = async (data) => {
    const toastId = toast.loading(t("pages.public.signin.loggingToast"));

    try {
      await delaySubmit(1500);

      toast.success(t("pages.public.signin.loggingToast"), {
        id: toastId,
        duration: 6000,
      });

      if (data.rememberMe) {
        await setStoredAdmin({
          value: admins[0],
          expires: Date.now() + 1000 * 60 * 60 * 24 * 30 * 6,
        });
      } else {
        await setStoredAdmin({
          value: admins[0],
        });
      }

      await new Promise(() => {
        "";
      });
    } catch {
      toast.loading(t("pages.public.signin.loggingToast"), { id: toastId });

      await new Promise(() => {
        "";
      });
    }
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
        className={clsx([
          "mt-9 flex-justify-center flex-col",
          i18n.language === "fa" ? "items-end" : "items-start",
        ])}
      >
        <EmailInput
          register={register}
          errors={errors}
          copyTextToClipboard={copyTextToClipboard}
        />

        <PasswordInput
          register={register}
          errors={errors}
          copyTextToClipboard={copyTextToClipboard}
        />

        <RememberMe register={register} />

        <SubmitBtn isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default Form;
