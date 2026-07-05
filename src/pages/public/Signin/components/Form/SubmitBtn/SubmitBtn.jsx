import clsx from "clsx";

const SubmitBtn = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx([
        "mt-9 rounded-xl bg-blue px-38.75 py-4 font-PlusJakartaSansBold text-[10px] active:scale-98 active:bg-blue/90",
        isSubmitting && "pointer-events-none opacity-50 select-none",
      ])}
    >
      SIGN IN
    </button>
  );
};

export default SubmitBtn;
