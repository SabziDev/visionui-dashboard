import { IoHome, IoPerson, IoStatsChartSharp } from "react-icons/io5";

const sidebar = [
  { to: "/", Icon: IoHome, text: "layouts.sidebar.menu.dashboard" },
  {
    to: "/tables",
    Icon: IoStatsChartSharp,
    text: "layouts.sidebar.menu.tables",
  },
  { to: "/profile", Icon: IoPerson, text: "layouts.sidebar.menu.profile" },
];

export default sidebar;
