import clsx from "clsx";
import { BeatLoader } from "react-spinners";

const SubmitBtn = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx([
        "mt-9 w-87.5 rounded-xl bg-blue py-4 font-PlusJakartaSansBold text-[10px] active:scale-98 active:bg-blue/90",
        isSubmitting && "pointer-events-none opacity-50 select-none",
      ])}
    >
      {isSubmitting ? (
        <BeatLoader size={10} speedMultiplier={0.8} color="#060b26" />
      ) : (
        "SIGN IN"
      )}
    </button>
  );
};

export default SubmitBtn;
