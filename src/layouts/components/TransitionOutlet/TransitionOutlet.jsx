/* eslint-disable custom/add-blank-line-before-jump-statement */

import { useEffect, useRef, useState, ViewTransition } from "react";
import { useLocation } from "react-router";

const TransitionOutlet = ({ children }) => {
  const { pathname } = useLocation();

  const previousPathnameRef = useRef(pathname);
  const [isRouteChanged, setIsRouteChanged] = useState(false);

  useEffect(() => {
    const hasChanged = previousPathnameRef.current !== pathname;

    setIsRouteChanged(hasChanged);
    previousPathnameRef.current = pathname;
  }, [pathname]);

  if (!isRouteChanged) return children;
  return <ViewTransition name="page-content">{children}</ViewTransition>;
};

export default TransitionOutlet;
