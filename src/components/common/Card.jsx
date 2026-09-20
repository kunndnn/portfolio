import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  whileHover = { y: -2 },
  initial = { opacity: 0, y: 16 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  ...props
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={whileHover}
      transition={transition}
      className={`card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
