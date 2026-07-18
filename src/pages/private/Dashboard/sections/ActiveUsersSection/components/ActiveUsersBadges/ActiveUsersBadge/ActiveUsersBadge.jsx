import { IoIosRocket } from "react-icons/io";
import { IoBuild, IoCartSharp, IoWallet } from "react-icons/io5";

import ActiveUsersBadgeProgressBar from "./ActiveUsersBadgeProgressBar/ActiveUsersBadgeProgressBar";
import ActiveUsersBadgeTitle from "./ActiveUsersBadgeTitle/ActiveUsersBadgeTitle";

const ActiveUsersBadge = ({ data }) => {
  const ICONS = {
    USERS: IoWallet,
    CLICKS: IoIosRocket,
    SALES: IoCartSharp,
    ITEMS: IoBuild,
  };
  const Icon = ICONS[data.type];

  return (
    <div className="flex-justify-center flex-col gap-1">
      <ActiveUsersBadgeTitle title={data.type.toLowerCase()} Icon={Icon} />

      <span className="font-VazirBold text-lg">{data.value}</span>

      <ActiveUsersBadgeProgressBar percentProgress={data.percentProgress} />
    </div>
  );
};

export default ActiveUsersBadge;
