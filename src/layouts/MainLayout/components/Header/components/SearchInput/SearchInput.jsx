import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  const { t } = useTranslation();

  return (
    <label
      htmlFor="search"
      className="hidden h-12 w-60 rounded-2xl border border-slate-500/50 px-3 py-3.5 md:flex-items-center md:justify-start md:gap-x-2"
    >
      <IoSearch className="size-5 cursor-pointer" />
      <input
        id="search"
        type="search"
        placeholder={t("layouts.header.searchInput.placeholder")}
        className="ring-0"
      />
    </label>
  );
};

export default SearchInput;
