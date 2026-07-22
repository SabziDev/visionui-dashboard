import { IoIosFlash } from "react-icons/io";
import { MdOutlineElectricCar } from "react-icons/md";

const stats = {
  satisfactionRate: 75,
  referralTracking: 93,
  activeUsers: [
    { value: 330 },
    { value: 230 },
    { value: 120 },
    { value: 290 },
    { value: 510 },
    { value: 420 },
    { value: 480 },
    { value: 290 },
    { value: 160 },
  ],

  carInfoCurrentLoad: 68,
  carInfoCards: [
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
  ],
};

export default stats;
