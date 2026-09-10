import { Outlet } from "react-router";

import TransitionOutlet from "@/layouts/components/TransitionOutlet/TransitionOutlet";

const Main = () => {
  return (
    <TransitionOutlet>
      <main id="main-root" className="mt-7.5">
        <div id="main-root__container" className="container *:not-first:mt-6">
          <Outlet />
        </div>
      </main>
    </TransitionOutlet>
  );
};

export default Main;
