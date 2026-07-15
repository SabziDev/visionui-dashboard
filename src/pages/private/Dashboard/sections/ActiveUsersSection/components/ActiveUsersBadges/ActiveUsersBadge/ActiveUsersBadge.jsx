import { useEffect, useRef, useState } from "react";
import { IoIosRocket } from "react-icons/io";
import { IoBuild, IoCartSharp, IoWallet } from "react-icons/io5";

const ActiveUsersBadge = ({ data }) => {
  const [width, setWidth] = useState(0);

  const badgeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setWidth(data.percentProgress);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(badgeRef.current);

    return () => observer.disconnect();
  }, [data.percentProgress]);

  const ICONS = {
    USERS: IoWallet,
    CLICKS: IoIosRocket,
    SALES: IoCartSharp,
    ITEMS: IoBuild,
  };
  const Icon = ICONS[data.type];

  return (
    <div className="flex-justify-center flex-col gap-1">
      <div className="flex-items-center gap-2.5">
        <div className="flex-center size-7 rounded-md bg-blue p-1.5 *:size-6">
          <Icon />
        </div>
        <span className="font-VazirMedium text-sm text-gray-400">
          {data.type.charAt(0) + data.type.slice(1).toLowerCase()}
        </span>
      </div>

      <span className="font-VazirBold text-lg">{data.value}</span>

      <div
        ref={badgeRef}
        className="relative h-0.75 w-25 overflow-hidden rounded-full bg-[#2D2E5F]"
      >
        <span
          className="absolute h-full bg-blue transition-[width] duration-1200"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ActiveUsersBadge;
