import { useEffect } from "react";
import { useOutlet } from "react-router";

import useToggle from "@/hooks/useToggle";

import LayoutBase from "../components/LayoutBase";
import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import Bg from "./components/Bg/Bg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const MainLayout = () => {
  const outlet = useOutlet();
  const { isHideLayout } = useCurrentPageStatus();

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
          {!isHideLayout && <Header onShowSidebar={toggleSidebar} />}

          <main id="main-root" className="mt-7.5">
            <div
              id="main-root__container"
              className="container *:not-first:mt-6"
            >
              {outlet}
            </div>
          </main>

          {!isHideLayout && <Footer />}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
