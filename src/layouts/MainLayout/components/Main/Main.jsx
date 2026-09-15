import { Outlet } from "react-router";

import TransitionOutlet from "@/layouts/components/TransitionOutlet/TransitionOutlet";

const Main = () => {
  return (
    <main id="main-root" className="mt-7.5">
      <TransitionOutlet>
        <div id="main-root__container" className="container *:not-first:mt-6">
          <Outlet />
        </div>
      </TransitionOutlet>
    </main>
  );
};

export default Main;
