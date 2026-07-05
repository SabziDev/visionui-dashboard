const RememberMe = ({ register }) => {
  return (
    <label
      htmlFor="remember-me"
      className="mt-6 flex-center cursor-pointer gap-x-2.5"
    >
      <input
        id="remember-me"
        type="checkbox"
        className="peer sr-only"
        {...register("rememberMe")}
      />
      <div className="flex-items-center h-5 w-9 justify-between rounded-full bg-blue px-1 opacity-50 transition-all peer-checked:pl-4.5 peer-checked:opacity-100">
        <span className="size-3.5 rounded-full bg-white" />
      </div>
      <span className="font-PlusJakartaSansMedium text-xs">Remember me</span>
    </label>
  );
};

export default RememberMe;
