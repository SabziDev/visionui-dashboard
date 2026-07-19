import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

const SectionTitle = ({
  title,
  desc,
  isSplitDesc = false,
  isShowTick = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-7 fa:rtl">
      <h3 className="font-VazirBold text-lg">{t(title)}</h3>

      {desc &&
        (isShowTick ? (
          <div className="flex-items-center gap-1">
            <FaCircleCheck className="size-3.5 fill-green-500" />
            <p className="mt-0.5 text-sm">
              {isSplitDesc ? (
                <>
                  <span className="text-green-500">{t(desc.beforeValue)}</span>
                  <span className="text-gray-400">{t(desc.afterValue)}</span>
                </>
              ) : (
                <span className="text-gray-400">{t(desc.value)}</span>
              )}
            </p>
          </div>
        ) : (
          <p className="text-sm">
            {isSplitDesc ? (
              <>
                <span className="text-green-500">{t(desc.beforeValue)}</span>
                <span className="text-gray-400">{t(desc.afterValue)}</span>
              </>
            ) : (
              <span className="text-gray-400">{t(desc.value)}</span>
            )}
          </p>
        ))}
    </div>
  );
};

export default SectionTitle;
