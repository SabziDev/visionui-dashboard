import Skeleton from "react-loading-skeleton";

const OverviewProfile = ({ data, isPending }) => {
  return (
    <div className="flex-center gap-4">
      <img
        src="/images/pictures/pages/private/profile/user.webp"
        alt="user avatar"
        className="size-14 rounded-xl sm:size-20 sm:rounded-2xl fa:scale-x-[-1]"
      />
      <div className="flex-start flex-col gap-1.5">
        <span className="font-VazirBold text-lg tracking-wide">
          {isPending ? (
            <Skeleton borderRadius={4} className="inline-block h-6 w-28.75!" />
          ) : (
            data.profile.fullName
          )}
        </span>
        <span className="text-sm/1 text-gray-400">
          {isPending ? (
            <Skeleton borderRadius={4} className="inline-block h-5 w-36.25!" />
          ) : (
            data.profile.email
          )}
        </span>
      </div>
    </div>
  );
};

export default OverviewProfile;
