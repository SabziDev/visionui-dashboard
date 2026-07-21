import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";

const WelcomebackContent = ({ data, isPending }) => {
  const { t } = useTranslation();

  return (
    <div className="z-10">
      <h3 className="mb-1 font-VazirBold text-3xl">
        {t("pages.private.profile.welocmeback.title")}
      </h3>
      <p className="flex-items-center text-sm text-gray-400">
        {t("pages.private.profile.welocmeback.desc")}
        {isPending ? (
          <Skeleton
            borderRadius={4}
            className="ml-1.5 inline-block h-4 w-24!"
          />
        ) : (
          `${data.profile.fullName} !`
        )}
      </p>
    </div>
  );
};

export default WelcomebackContent;
