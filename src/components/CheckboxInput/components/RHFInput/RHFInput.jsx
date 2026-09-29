import { useTranslation } from "react-i18next";

const RHFInput = ({ children, name, register }) => {
  const { t } = useTranslation();

  return (
    <>
      <input
        id={name}
        type="checkbox"
        className="peer sr-only"
        {...register(name)}
      />
      <div className="flex-items-center h-5 w-10 shrink-0 justify-between rounded-full bg-blue px-1 opacity-50 transition-all peer-checked:ps-5.5 peer-checked:opacity-100 en:ltr fa:rtl">
        <span className="size-3.5 rounded-full bg-white" />
      </div>
      <span className="line-clamp-2 text-sm">{t(children)}</span>
    </>
  );
};

export default RHFInput;
