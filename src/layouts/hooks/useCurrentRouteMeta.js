import { useMatches } from "react-router";

const useCurrentRouteMeta = (handleKey) => {
  const urlMatches = useMatches();
  const currentUrlMatch = urlMatches.at(-1);

  return currentUrlMatch.handle?.[handleKey] ?? {};
};

export default useCurrentRouteMeta;
