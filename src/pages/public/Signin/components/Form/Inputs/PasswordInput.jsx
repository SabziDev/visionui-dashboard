import clsx from "clsx";

const PasswordInput = ({ register, errors, copyTextToClipboard }) => {
  return (
    <>
      <input
        type="password"
        placeholder="Your password..."
        className={clsx([
          "mt-6 mb-2 w-87.5 rounded-[20px] border-2 px-5 py-4 placeholder:text-gray-400",
          errors.password ? "border-red-500 ring-red-500" : "border-blue",
        ])}
        {...register("password")}
      />
      {errors.password && (
        <span className="text-red-500">
          Please use{" "}
          <span
            onClick={() => copyTextToClipboard("admin")}
            className="cursor-copy text-blue"
          >
            admin
          </span>{" "}
          to sign in.
        </span>
      )}
    </>
  );
};

export default PasswordInput;
