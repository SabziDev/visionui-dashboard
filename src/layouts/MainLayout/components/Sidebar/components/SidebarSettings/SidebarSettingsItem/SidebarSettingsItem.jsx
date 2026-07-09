const SidebarSettingsItem = ({ children, Icon, onClick }) => {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="flex-items-center w-60 gap-4 rounded-2xl px-4 py-2.5 font-VazirMedium"
      >
        <span className="flex-center rounded-xl bg-[#1A1F37] p-2 text-blue">
          <Icon className="size-6" />
        </span>

        {children}
      </button>
    </li>
  );
};

export default SidebarSettingsItem;
