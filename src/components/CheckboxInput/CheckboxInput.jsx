import { useTranslation } from "react-i18next";

import Skeleton from "@/components/Skeleton/Skeleton";

const CheckboxInput = ({
  id = "",
  title = "",
  register,
  checked = false,
  isPending,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <label htmlFor={id} className="flex-center cursor-pointer gap-x-2.5">
      {isPending ? (
        <Skeleton borderRadius={4} className="w-50" />
      ) : (
        <>
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="peer sr-only"
            {...(register && { ...register(id) })}
          />
          <div className="flex-items-center h-5 w-10 shrink-0 justify-between rounded-full bg-blue px-1 opacity-50 transition-all peer-checked:ps-5.5 peer-checked:opacity-100 en:ltr fa:rtl">
            <span className="size-3.5 rounded-full bg-white" />
          </div>
          <span className="line-clamp-2 text-sm">{t(title)}</span>
        </>
      )}
    </label>
  );
};

export default CheckboxInput;
