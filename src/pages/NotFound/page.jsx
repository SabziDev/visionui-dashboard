import Head from "@/layouts/components/Head";

import NotFoundBackgroundPattern from "./components/NotFoundBackgroundPattern/NotFoundBackgroundPattern";
import NotFoundBtn from "./components/NotFoundBtn/NotFoundBtn";
import NotFoundCode from "./components/NotFoundCode/NotFoundCode";
import NotFoundDesc from "./components/NotFoundDesc/NotFoundDesc";
import NotFoundTitle from "./components/NotFoundTitle/NotFoundTitle";

const NotFound = () => (
  <>
    <Head />

    <div
      className="fixed inset-0 z-9999 flex-center flex-col overflow-hidden px-4 text-center select-none"
      style={{
        background:
          "radial-gradient(circle at top right, #000041, #004162, #89a0ae)",
      }}
    >
      <NotFoundBackgroundPattern />

      <NotFoundCode />

      <NotFoundTitle />
      <NotFoundDesc />
      <NotFoundBtn />
    </div>
  </>
);

export default NotFound;
