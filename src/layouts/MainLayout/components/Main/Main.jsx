import { Outlet } from "react-router";

const Main = () => {
  return (
    <main id="main-root" className="mt-7.5">
      <div id="main-root__container" className="container *:not-first:mt-6">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
