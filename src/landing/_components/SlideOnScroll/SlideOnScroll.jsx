import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SlideOnScroll = ({ children, direction = "left", className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "right":
        return { x: 100, opacity: 0 };
      case "bottom":
        return { y: 100, opacity: 0 };
      case "left":
      default:
        return { x: -100, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
