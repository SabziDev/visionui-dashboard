import { ScrollRestoration } from "react-router";

import NavigationProgressBar from "./NavigationProgressBar/NavigationProgressBar";

const LayoutBase = () => {
  return (
    <>
      <ScrollRestoration />
      <NavigationProgressBar />
    </>
  );
};

export default LayoutBase;
