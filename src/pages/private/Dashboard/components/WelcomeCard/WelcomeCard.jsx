import { useAdminsQuery } from "@/services/hooks/useAdmins/useAdmins";

import WelcomeCardBg from "./WelcomeCardBg/WelcomeCardBg";
import WelcomeCardBtn from "./WelcomeCardBtn/WelcomeCardBtn";
import WelcomeCardContent from "./WelcomeCardContent/WelcomeCardContent";

const WelcomeCard = () => {
  const { admin } = useAdminsQuery();

  return (
    <div className="relative h-55 w-full max-w-220 overflow-hidden rounded-2xl px-4 py-4.5 sm:h-75 sm:px-7.5 sm:py-9 md:h-88 2xl:max-w-1/2 en:ltr fa:rtl">
      <div className="relative z-10 flex h-full flex-col justify-between">
        <WelcomeCardContent adminName={admin.profile.fullName} />
        <WelcomeCardBtn />
      </div>

      <WelcomeCardBg />
    </div>
  );
};

export default WelcomeCard;
