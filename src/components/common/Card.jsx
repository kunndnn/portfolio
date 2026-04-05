import { motion } from "framer-motion";

export default function Card({ 
  children, 
  className = "", 
  whileHover = { scale: 1.02, rotate: 0 }, 
  initial = { opacity: 0, y: 10 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.4 },
  textColor,
  ...props 
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      whileHover={whileHover}
      transition={transition}
      className={`brutalist-card ${className}`}
      style={{ color: textColor, ...props.style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
