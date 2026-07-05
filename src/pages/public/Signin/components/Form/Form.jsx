import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import useCookie from "@/hooks/useCookie";
import { useAdminsQuery } from "@/services/hooks/useAdmins/useAdmins";
import loginSchema from "@/validators/loginValidator";

import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";
import RememberMe from "./RememberMe/RememberMe";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

const copyTextToClipboard = (text) => {
  navigator.clipboard.writeText(text);

  toast.success("Text successfully copied to clipboard!", {
    position: "top-left",
  });
};

const Form = () => {
  const { admins } = useAdminsQuery();
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

  const submitForm = async (data) => {
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
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submitForm)}
      className="mt-9 flex-justify-center flex-col items-start"
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
  );
};

export default Form;
