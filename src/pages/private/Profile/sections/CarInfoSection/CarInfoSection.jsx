/* eslint-disable @eslint-react/no-array-index-key */

import { IoIosFlash } from "react-icons/io";
import { MdOutlineElectricCar } from "react-icons/md";
import ScrollContainer from "react-indiana-drag-scroll";

import SectionTitle from "@/pages/private/Dashboard/components/SectionTitle/SectionTitle";
import useCounter from "@/pages/private/Dashboard/hooks/useCounter/useCounter";

import CarInfoCard from "./components/CarInfoCard/CarInfoCard";
import CarInfoChart from "./components/CarInfoChart/CarInfoChart";

const CHART_VALUE = 68;
const cards = [
  {
    title: "pages.private.profile.carInfo.batteryHealth",
    value: "76%",
    icon: {
      type: "SHAPE",
      Shape: MdOutlineElectricCar,
    },
  },
  {
    title: "pages.private.profile.carInfo.efficiency",
    value: "+20%",
    icon: {
      type: "CHART",
      src: "/images/icons/green-chart.svg",
    },
  },
  {
    title: "pages.private.profile.carInfo.consumption",
    value: "163W/km",
    icon: {
      type: "SHAPE",
      Shape: IoIosFlash,
    },
  },
  {
    title: "pages.private.profile.carInfo.thisWeek",
    value: "1.342km",
    icon: {
      type: "CHART",
      src: "/images/icons/blue-chart.svg",
    },
  },
];

const CarInfoSection = () => {
  const counter = useCounter(CHART_VALUE, 800);

  return (
    <section className="order-3 w-full rounded-2xl px-5 py-7 bg-primary-gradient sm:col-span-2 2xl:order-2 2xl:h-95 2xl:sm:col-span-1">
      <SectionTitle
        title="pages.private.profile.carInfo.title"
        desc={{ value: "pages.private.profile.carInfo.desc" }}
      />

      <div className="flex-items-center flex-col gap-12.5 sm:flex-row">
        <CarInfoChart value={CHART_VALUE} counter={counter} />

        <ScrollContainer className="flex-items-center w-full gap-2 md:flex-wrap md:justify-end xl:flex-nowrap xl:justify-start 2xl:flex-wrap fa:rtl">
          {cards.map((card, i) => (
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
