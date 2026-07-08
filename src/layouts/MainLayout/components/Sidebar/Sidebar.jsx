const Sidebar = () => {
  return (
    <aside className="fixed z-100 m-2.5 mr-0 flex-items-center h-[calc(100dvh-20px)] w-70 flex-col rounded-2xl bg-navy px-4 py-9 text-center">
      <div className="w-full">
        <h1 className="mb-5 bg-linear-to-r from-[#E0E1E2]/90 via-[#E0E1E2]/70 to-[#E0E1E2]/0 bg-clip-text font-VazirMedium tracking-ultra-wide text-transparent">
          VISION UI PANEL
        </h1>
        <span className="block h-px w-full bg-linear-to-r from-[#E0E1E2]/0 via-[#E0E1E2] to-[#E0E1E2]/16" />
      </div>
    </aside>
  );
};

export default Sidebar;
