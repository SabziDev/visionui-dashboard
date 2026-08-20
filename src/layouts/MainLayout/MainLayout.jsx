import { useEffect } from "react";

import useToggle from "@/hooks/useToggle";

import LayoutBase from "../components/LayoutBase";
import Bg from "./components/Bg/Bg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const MainLayout = () => {
  const [isShowSidebar, toggleSidebar] = useToggle(false);

  useEffect(() => {
    if (isShowSidebar) document.body.classList.add("max-lg:overflow-hidden");

    return () => document.body.classList.remove("max-lg:overflow-hidden");
  }, [isShowSidebar]);

  return (
    <>
      <LayoutBase />
      <Bg />

      <div className="flex">
        <Sidebar isShowSidebar={isShowSidebar} toggleSidebar={toggleSidebar} />

        <div className="mt-5.5 w-full overflow-hidden ltr en:ml-0 lg:en:ml-65 2xl:en:ml-70 fa:mr-0 lg:fa:mr-65 2xl:fa:mr-70">
          <Header onShowSidebar={toggleSidebar} />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
