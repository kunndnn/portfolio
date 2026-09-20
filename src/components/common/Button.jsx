import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
  icon: Icon,
  type = "button",
  ...props
}) {
  const variantClasses = {
    primary: "button-primary",
    secondary: "button-secondary",
    ghost: "button-ghost",
  };

  const resolvedVariant = variantClasses[variant] || variantClasses.primary;
  const baseClasses = `${resolvedVariant} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
