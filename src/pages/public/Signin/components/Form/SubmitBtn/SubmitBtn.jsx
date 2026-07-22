import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { BeatLoader } from "react-spinners";

const SubmitBtn = ({ isSubmitting }) => {
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx([
        "mt-10 w-full max-w-87.5 rounded-xl bg-blue py-4 font-VazirBold text-xs active:scale-98 active:bg-blue/90 min-[500px]:min-w-87.5",
        isSubmitting && "cursor-not-allowed opacity-50 select-none",
      ])}
    >
      {isSubmitting ? (
        <BeatLoader size={10} speedMultiplier={0.8} color="#060b26" />
      ) : (
        t("pages.public.signin.form.submitBtn")
      )}
    </button>
  );
};

export default SubmitBtn;
