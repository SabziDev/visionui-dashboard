import { useState } from "react";
import { useOutlet } from "react-router";

import AnimatedOutlet from "../components/AnimatedOutlet/AnimatedOutlet";
import LayoutBase from "../components/LayoutBase";
import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import Bg from "./components/Bg/Bg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const MainLayout = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const outlet = useOutlet();

  const { isPage404, isHideLayout } = useCurrentPageStatus();

  return (
    <>
      <LayoutBase />
      <Bg />

      <div className="flex">
        <Sidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
        />

        <div className="mt-5.5 w-full overflow-hidden ltr ltr:ml-0 lg:ltr:ml-65 2xl:ltr:ml-70 rtl:mr-0 lg:rtl:mr-65 2xl:rtl:mr-70">
          {!isHideLayout && <Header onShowSidebar={setIsShowSidebar} />}

          <main id="main-root" className="mt-7.5">
            {isPage404 ? (
              outlet
            ) : (
              <div className="container *:mt-6">
                <AnimatedOutlet>{outlet}</AnimatedOutlet>
              </div>
            )}
          </main>

          {!isHideLayout && <Footer />}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
