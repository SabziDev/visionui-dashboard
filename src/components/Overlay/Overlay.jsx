/* eslint-disable custom/add-blank-line-before-jump-statement */

import { useHotkey } from "@tanstack/react-hotkeys";
import { clsx } from "clsx";
import { useEffect } from "react";

const OVERLAY_BREAKPOINTS_CLASSES = {
  sm: {
    hide: "sm:hidden",
    lockScroll: "max-sm:overflow-hidden",
  },
  md: {
    hide: "md:hidden",
    lockScroll: "max-md:overflow-hidden",
  },
  lg: {
    hide: "lg:hidden",
    lockScroll: "max-lg:overflow-hidden",
  },
  xl: {
    hide: "xl:hidden",
    lockScroll: "max-xl:overflow-hidden",
  },
  "2xl": {
    hide: "2xl:hidden",
    lockScroll: "max-2xl:overflow-hidden",
  },
};

const Overlay = ({
  isShow,
  hideAt,
  lockScroll = false,
  onClose,
  className = "",
}) => {
  const overlayClass = hideAt ? OVERLAY_BREAKPOINTS_CLASSES[hideAt] : undefined;

  useHotkey("Escape", onClose, {
    enabled: isShow,
  });
  useEffect(() => {
    if (!lockScroll) return;

    const scrollLockClassName = overlayClass?.lockScroll ?? "overflow-hidden";

    if (isShow) document.body.classList.add(scrollLockClassName);
    return () => document.body.classList.remove(scrollLockClassName);
  }, [isShow, lockScroll, overlayClass?.lockScroll]);

  return (
    isShow && (
      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 z-100 h-screen bg-black/60 backdrop-blur-sm",
          overlayClass?.hide,
          className,
        )}
      />
    )
  );
};

export default Overlay;
