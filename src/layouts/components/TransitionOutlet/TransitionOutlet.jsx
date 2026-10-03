import { AnimatePresence, motion } from "motion/react";
import { useLocation, useOutlet } from "react-router";

const VARIANTS = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(2px)" },
};
const TRANSITION = {
  duration: 0.25,
  ease: "easeOut",
};

const AnimatedOutlet = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={TRANSITION}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
