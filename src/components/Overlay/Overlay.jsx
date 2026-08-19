import { useHotkey } from "@tanstack/react-hotkeys";
import { clsx } from "clsx";

const Overlay = ({ isShow, onClose, className = "" }) => {
  useHotkey("Escape", onClose, {
    enabled: isShow,
  });

  return (
    <div
      onClick={onClose}
      className={clsx([
        "fixed inset-0 z-100 h-screen bg-black/60 backdrop-blur-sm transition-opacity duration-250",
        isShow ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      ])}
    />
  );
};

export default Overlay;
