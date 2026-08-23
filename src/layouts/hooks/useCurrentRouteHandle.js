import { useMatches } from "react-router";

const useCurrentRouteHandle = (key) => {
  const urlMatches = useMatches();
  const currentUrlMatch = urlMatches.at(-1);

  return currentUrlMatch.handle?.[key];
};

export default useCurrentRouteHandle;
