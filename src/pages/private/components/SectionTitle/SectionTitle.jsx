import { useTranslation } from "react-i18next";
import { FaCircleCheck } from "react-icons/fa6";

const SectionTitle = ({
  title = "",
  desc = null,
  isSplitDesc = false,
  isShowTick = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-4 fa:rtl">
      <h3 className="font-VazirBold text-lg">{t(title)}</h3>

      {desc && (
        <div className="flex-items-center gap-1">
          {isShowTick && <FaCircleCheck className="size-3.5 fill-green-500" />}

          <p className="mt-0.5 line-clamp-5 text-justify text-sm">
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
      )}
    </div>
  );
};

export default SectionTitle;
