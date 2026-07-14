import ScrollContainer from "react-indiana-drag-scroll";

import ReferralTracking from "./components/ReferralTracking/ReferralTracking";
import SatisfactionRate from "./components/SatisfactionRate/SatisfactionRate";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";

const Overview = () => {
  return (
    <div className="flex flex-col justify-between gap-6 md:items-center 2xl:flex-row en:ltr fa:rtl">
      <WelcomeCard />

      <ScrollContainer className="flex-items-center gap-6 sm:justify-center">
        <SatisfactionRate value={75} />
        <ReferralTracking value={93} />
      </ScrollContainer>
    </div>
  );
};

export default Overview;
