/* eslint-disable @eslint-react/no-array-index-key */

import stats from "@public/data/stats/stats";
import ScrollContainer from "react-indiana-drag-scroll";

import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import useCounter from "@/pages/private/hooks/useCounter/useCounter";

import CarInfoCard from "./components/CarInfoCard/CarInfoCard";
import CarInfoChart from "./components/CarInfoChart/CarInfoChart";

const CarInfoSection = () => {
  const counter = useCounter(stats.carInfoCurrentLoad, 800);

  return (
    <section className="section-card [grid-area:car] 2xl:h-95">
      <SectionTitle
        title="pages.private.profile.carInfo.title"
        desc={{ value: "pages.private.profile.carInfo.desc" }}
      />

      <div className="flex-items-center flex-col gap-12.5 sm:flex-row">
        <CarInfoChart value={stats.carInfoCurrentLoad} counter={counter} />

        <ScrollContainer className="flex-items-center w-full gap-2 min-[1784px]:w-full! min-[1784px]:flex-wrap! md:flex-wrap md:justify-end xl:flex-nowrap xl:justify-start 2xl:w-100 fa:rtl">
          {stats.carInfoCards.map((card, i) => (
            <CarInfoCard
              key={i}
              title={card.title}
              value={card.value}
              icon={card.icon}
            />
          ))}
        </ScrollContainer>
      </div>
    </section>
  );
};

export default CarInfoSection;
