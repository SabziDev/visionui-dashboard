import clsx from "clsx";
import ScrollContainer from "react-indiana-drag-scroll";

const Skelton = ({ children, className }) => {
  return (
    <ScrollContainer
      className={clsx([
        "flex-items-center animate-pulse justify-between rounded-xl p-4 bg-linear *:shrink-0 *:rounded-sm *:bg-gray-600 xl:*:max-w-90",
        ,
        className,
      ])}
    >
      {children}
    </ScrollContainer>
  );
};

export default Skelton;
