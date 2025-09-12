import { motion } from "motion/react";

const AnimateComponent = ({
  children,
  inactive,
  active,
}: {
  children: React.ReactNode;
  inactive: {
    y?: number;
    opacity?: number;
    x?: number;
  };
  active: {
    y?: number;
    opacity?: number;
    x?: number;
    transition?: { duration: number };
  };
}) => {
  const variants = {
    inactive, // Directly use the provided inactive object
    active, // Directly use the provided active object
  };

  return (
    <motion.div
      variants={variants}
      initial="inactive"
      animate="active"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponent;
