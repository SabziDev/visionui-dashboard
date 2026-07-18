import { motion } from "framer-motion";

const ActiveUsersBadgeProgressBar = ({ percentProgress }) => {
  return (
    <div className="h-0.75 overflow-hidden rounded-full bg-[#2D2E5F]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentProgress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="h-full bg-blue"
      />
    </div>
  );
};

export default ActiveUsersBadgeProgressBar;
