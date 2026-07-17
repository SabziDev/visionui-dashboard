import { zodResolver } from "@hookform/resolvers/zod";
import { use } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import AuthContext from "@/contexts/Auth";
import { useAdminsQuery } from "@/services/hooks/useAdmins/useAdmins";
import loginSchema from "@/validators/loginValidator";

const useAuthForm = () => {
  const { setAdminId } = use(AuthContext);

  const { admin } = useAdminsQuery();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors: inputErrors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",

      rememberMe: true,
    },

    resolver: zodResolver(loginSchema),
  });

  const { t } = useTranslation();

  const submitForm = async (data) => {
    const toastId = toast.loading(t("pages.public.signin.loggingToast"));

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      if (data.rememberMe) {
        const SIX_MONTHS = 60 * 60 * 24 * 30 * 6;
        setAdminId({
          value: admin.id,
          maxAge: SIX_MONTHS,
        });
      } else {
        setAdminId({
          value: admin.id,
        });
      }

      toast.success(t("pages.public.signin.loggingToast"), {
        id: toastId,
      });
      await new Promise(() => {
        null;
      });
    } catch {
      toast.error(t("pages.public.signin.loggingToast"), {
        id: toastId,
      });
      await new Promise(() => {
        null;
      });
    }
  };

  return {
    register,
    handleSubmit,
    submitForm,
    isSubmitting,
    inputErrors,
  };
};

export default useAuthForm;
