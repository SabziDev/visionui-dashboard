import { IoClose } from "react-icons/io5";

const PWAInstallPopupCloseBtn = ({ handleClose }) => {
  return (
    <button
      type="button"
      onClick={handleClose}
      className="absolute inset-e-0.5 top-0.5 text-white/60 transition-colors hover:text-white"
    >
      <IoClose className="size-5" />
    </button>
  );
};

export default PWAInstallPopupCloseBtn;
