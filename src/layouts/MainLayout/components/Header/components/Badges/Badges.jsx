import { use } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoNotificationsSharp, IoPerson } from "react-icons/io5";

import AuthContext from "@/contexts/Auth";

const Badges = () => {
  const { admin } = use(AuthContext);

  return (
    <>
      <div className="flex-center cursor-pointer gap-x-1 text-gray-500">
        <IoPerson className="size-5" />
        <span className="font-VazirMedium">{admin.profile.fullName}</span>
      </div>
      <div className="flex-center gap-x-4 text-gray-500 *:size-5 *:cursor-pointer">
        <IoNotificationsSharp />
        <IoMdSettings />
      </div>
    </>
  );
};

export default Badges;
