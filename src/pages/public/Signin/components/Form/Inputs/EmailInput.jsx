import clsx from "clsx";

const EmailInput = ({ register, errors, copyTextToClipboard }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Your email address..."
        className={clsx([
          "mb-2 w-87.5 rounded-[20px] border-2 px-5 py-4 placeholder:text-gray-400",
          errors.email ? "border-red-500 ring-red-500" : "border-blue",
        ])}
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-500">
          Please use{" "}
          <span
            onClick={() => copyTextToClipboard("SabziDev@gmail.com")}
            className="cursor-copy text-blue"
          >
            SabziDev@gmail.com
          </span>{" "}
          to sign in.
        </span>
      )}
    </>
  );
};

export default EmailInput;
