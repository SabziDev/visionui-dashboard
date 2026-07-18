import { useTranslation } from "react-i18next";

const ActiveUsersBadgeTitle = ({ title = "", Icon }) => {
  const { t } = useTranslation();

  return (
    <div className="flex-items-center gap-2.5">
      <div className="flex-center size-7 rounded-md bg-blue p-1.5 *:size-6">
        <Icon />
      </div>
      <span className="font-VazirMedium text-sm text-gray-400">
        {t(`pages.private.dashboard.activeUsers.badges.${title}`)}
      </span>
    </div>
  );
};

export default ActiveUsersBadgeTitle;
