import { motion } from "framer-motion";

export default function Button({ 
  children, 
  onClick, 
  href, 
  className = "", 
  bgColor,
  icon: Icon,
  type = "button",
  ...props 
}) {
  const finalBgColor = bgColor || (className.includes('bg-') ? '' : 'bg-[var(--accent)]');
  const baseClasses = `brutalist-button ${finalBgColor} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon className="h-5 w-5 pointer-events-none" style={{ color: 'inherit' }} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
