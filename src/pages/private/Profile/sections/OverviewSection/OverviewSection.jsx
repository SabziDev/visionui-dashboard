import { useTranslation } from "react-i18next";
import { LuBox } from "react-icons/lu";

import { useAdminQuery } from "@/services/hooks/useAdmin/useAdmin";

import OverviewProfile from "./components/OverviewProfile/OverviewProfile";

const OverviewSection = () => {
  const { admin, isPending } = useAdminQuery();

  const { t } = useTranslation();

  return (
    <section className="flex-items-center justify-between section-card fa:rtl">
      <OverviewProfile data={admin} isPending={isPending} />

      <div className="hidden gap-1 rounded-xl bg-blue px-8 py-2.5 select-none sm:flex-center">
        <LuBox className="mb-0.5 size-5 fill-white stroke-blue" />
        <span>{t("words.overview")}</span>
      </div>
    </section>
  );
};

export default OverviewSection;
