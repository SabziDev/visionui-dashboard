import ReactSkeleton from "react-loading-skeleton";

const Skeleton = ({ borderRadius, className = "" }) => {
  return (
    <ReactSkeleton
      borderRadius={borderRadius}
      containerClassName={className}
      className="size-full"
    />
  );
};

export default Skeleton;
