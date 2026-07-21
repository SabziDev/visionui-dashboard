import { useAdminQuery } from "@/services/hooks/useAdmin/useAdmin";

import WelcomebackBg from "./components/WelcomebackBg/WelcomebackBg";
import WelcomebackBtn from "./components/WelcomebackBtn/WelcomebackBtn";
import WelcomebackContent from "./components/WelcomebackContent/WelcomebackContent";

const WelcomebackSection = () => {
  const { admin, isPending } = useAdminQuery();

  return (
    <section className="relative order-1 flex h-45 w-full flex-col justify-between overflow-hidden rounded-2xl px-9 py-7.5 bg-primary-gradient sm:h-95 2xl:max-w-92.5">
      <WelcomebackContent data={admin} isPending={isPending} />
      <WelcomebackBtn />

      <WelcomebackBg />
    </section>
  );
};

export default WelcomebackSection;
