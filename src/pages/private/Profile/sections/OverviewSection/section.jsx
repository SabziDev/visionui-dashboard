import { useTranslation } from "react-i18next";
import { LuBox } from "react-icons/lu";

import { useGetAdmin } from "@/services/features/admin/hooks/useAdmin/useAdmin";

import OverviewProfile from "./components/OverviewProfile/OverviewProfile";

const OverviewSection = () => {
  const { admin, isPending } = useGetAdmin();

  const { t } = useTranslation();

  return (
    <section className="flex-items-center justify-between gradient-card fa:rtl">
      <OverviewProfile data={admin} isPending={isPending} />

      <button
        type="button"
        className="hidden gap-1 rounded-xl bg-blue px-8 py-2.5 select-none active:bg-blue/90 sm:flex-center"
      >
        <LuBox className="mb-0.5 size-5 fill-white stroke-blue" />
        <span>{t("words.overview")}</span>
      </button>
    </section>
  );
};

export default OverviewSection;
