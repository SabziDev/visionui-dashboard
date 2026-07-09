import clsx from "clsx";
import { NavLink } from "react-router";

const SidebarNavItem = ({ children, to, Icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx([
            "flex-items-center w-60 gap-4 rounded-2xl px-4 py-2.5 font-VazirMedium",
            isActive && "bg-[#1A1F37]",
          ])
        }
      >
        {({ isActive }) => (
          <>
            <span
              className={clsx([
                "flex-center rounded-xl p-2",
                isActive ? "bg-blue text-white" : "bg-[#1A1F37] text-blue",
              ])}
            >
              <Icon className="size-6" />
            </span>
            <span>{children}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
