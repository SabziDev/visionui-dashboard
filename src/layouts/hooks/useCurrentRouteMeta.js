import { useMatches } from "react-router";

const useCurrentRouteMeta = (metaKey) => {
  const urlMatches = useMatches();
  const currentUrlMatch = urlMatches.at(-1);

  return currentUrlMatch.handle?.[metaKey] ?? {};
};

export default useCurrentRouteMeta;
