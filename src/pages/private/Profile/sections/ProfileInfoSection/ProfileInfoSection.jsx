import SectionTitle from "@/pages/private/components/SectionTitle/SectionTitle";
import { useAdminQuery } from "@/services/hooks/useAdmin/useAdmin";

import ProfileInfoItem from "./components/ProfileInfoItem/ProfileInfoItem";

const ProfileInfoSection = () => {
  const { admin, isPending } = useAdminQuery();

  return (
    <section className="section-card [grid-area:profile] sm:h-95">
      <SectionTitle
        title="pages.private.profile.profileInfo.title"
        desc={{ value: admin.profile.bio }}
      />

      <span className="mb-4 block h-px w-full bg-linear-to-r from-[#E0E1E2]/0 via-[#E0E1E2] to-[#E0E1E2]/16" />

      <div className="flex flex-col justify-between gap-6 sm:gap-2 md:gap-3.5 xl:gap-6">
        <ProfileInfoItem
          data={admin.profile.fullName}
          title="pages.private.profile.profileInfo.fullName"
          isPending={isPending}
        />
        <ProfileInfoItem
          data={admin.profile.mobile}
          title="pages.private.profile.profileInfo.mobile"
          isPending={isPending}
        />
        <ProfileInfoItem
          data={admin.profile.email}
          title="pages.private.profile.profileInfo.email"
          isPending={isPending}
        />
        <ProfileInfoItem
          data={admin.profile.location}
          title="pages.private.profile.profileInfo.location"
          isPending={isPending}
        />
      </div>
    </section>
  );
};

export default ProfileInfoSection;
