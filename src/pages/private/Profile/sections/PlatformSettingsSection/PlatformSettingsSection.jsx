import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import { useAdminQuery } from "@/services/hooks/useAdmin/useAdmin";

import SettingsGroup from "./components/SettingsGroup/SettingsGroup";

const PlatformSettingsSection = () => {
  const { admin, isPending } = useAdminQuery();

  return (
    <section className="section-card fa:rtl">
      <SectionTitle title="pages.private.profile.platformSettings.title" />

      <div className="mt-auto h-full space-y-5">
        <SettingsGroup
          data={admin}
          title="pages.private.profile.platformSettings.account"
          settingsSection="account"
          isPending={isPending}
        />
        <SettingsGroup
          data={admin}
          title="pages.private.profile.platformSettings.application"
          settingsSection="application"
          isPending={isPending}
        />
      </div>
    </section>
  );
};

export default PlatformSettingsSection;
