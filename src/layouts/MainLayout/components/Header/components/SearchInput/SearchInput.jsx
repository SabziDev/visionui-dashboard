import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  const { t } = useTranslation();

  return (
    <label
      htmlFor="search"
      className="flex-items-center h-12 w-60 justify-start gap-x-2 rounded-2xl border border-slate-500/50 px-3 py-3.5"
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
