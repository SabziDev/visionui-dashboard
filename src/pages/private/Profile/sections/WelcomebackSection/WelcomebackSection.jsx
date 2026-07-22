import { useAdminQuery } from "@/services/hooks/useAdmin/useAdmin";

import WelcomebackBg from "./components/WelcomebackBg/WelcomebackBg";
import WelcomebackBtn from "./components/WelcomebackBtn/WelcomebackBtn";
import WelcomebackContent from "./components/WelcomebackContent/WelcomebackContent";

const WelcomebackSection = () => {
  const { admin, isPending } = useAdminQuery();

  return (
    <section className="relative flex h-45 flex-col justify-between overflow-hidden section-card [grid-area:welcome] sm:h-95 2xl:max-w-92.5">
      <WelcomebackContent data={admin} isPending={isPending} />
      <WelcomebackBtn />

      <WelcomebackBg />
    </section>
  );
};

export default WelcomebackSection;
