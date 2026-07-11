import { use } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoMenu, IoNotificationsSharp, IoPerson } from "react-icons/io5";

import AuthContext from "@/contexts/Auth";

const Badges = ({ onShowSidebar }) => {
  const { admin } = use(AuthContext);

  return (
    <>
      <div className="flex-center cursor-pointer gap-x-1 text-gray-500">
        <IoPerson className="size-5" />
        <span className="mt-1 font-VazirMedium">{admin.profile.fullName}</span>
      </div>
      <div className="flex-center gap-x-4 text-gray-500 *:cursor-pointer">
        <IoNotificationsSharp className="size-5" />
        <IoMdSettings className="hidden size-5 lg:block" />
        <IoMenu
          onClick={() => onShowSidebar((state) => !state)}
          className="size-10! lg:hidden"
        />
      </div>
    </>
  );
};

export default Badges;
