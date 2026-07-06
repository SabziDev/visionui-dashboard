import clsx from "clsx";

const BgImg = ({ className = "" }) => {
  return (
    <img
      src="/images/pictures/pages/signin/sandro-katalina.png"
      alt="bg-brand"
      className={clsx(["absolute inset-0 size-full object-cover", className])}
    />
  );
};

export default BgImg;
