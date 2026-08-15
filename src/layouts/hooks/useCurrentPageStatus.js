import { useMatches } from "react-router";

const useCurrentPageStatus = () => {
  const urlMatches = useMatches();
  const currentUrlMatch = urlMatches.at(-1);

  const isHideLayout = currentUrlMatch.handle?.isHideLayout;

  return { isHideLayout };
};

export default useCurrentPageStatus;
