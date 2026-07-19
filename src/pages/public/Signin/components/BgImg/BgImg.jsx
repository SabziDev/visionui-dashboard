import clsx from "clsx";

const BgImg = ({ className = "" }) => {
  return (
    <img
      src="/images/pictures/pages/public/signin/sandro-katalina.webp"
      alt="bg-brand"
      loading="lazy"
      className={clsx(["absolute inset-0 size-full object-cover", className])}
    />
  );
};

export default BgImg;
