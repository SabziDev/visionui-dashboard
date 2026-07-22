import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";

const ProfileInfoItem = ({ data, title, isPending }) => {
  const { t } = useTranslation();

  return (
    <div className="truncate">
      <span className="text-gray-400">{t(title)}</span>
      <span className="inline-block font-VazirBold text-[17px] ltr">
        {isPending ? (
          <Skeleton
            borderRadius={4}
            className="flex-center inline-block h-6 w-28.75!"
          />
        ) : (
          data
        )}
      </span>
    </div>
  );
};

export default ProfileInfoItem;
