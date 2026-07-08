import { useOutlet } from "react-router";

import AnimatedOutlet from "../components/AnimatedOutlet/AnimatedOutlet";
import LayoutBase from "../components/LayoutBase";
import useCurrentPageStatus from "../hooks/useCurrentPageStatus";
import Bg from "./components/Bg/Bg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const MainLayout = () => {
  const outlet = useOutlet();

  const { isPage404, isHideLayout } = useCurrentPageStatus();

  return (
    <>
      <LayoutBase />
      <Bg />

      <div className="flex">
        <Sidebar />

        <div className="mt-5.5 ml-70 w-full">
          {!isHideLayout && <Header />}

          <main id="main-root" className="mt-7.5">
            {isPage404 ? (
              outlet
            ) : (
              // TODO Sections mt
              <div className="*:mt-SIZE container">
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
