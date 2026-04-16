import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "li" | "span";
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  y = 30,
  duration = 0.6,
  as = "div",
}: FadeInProps) => {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export const Stagger = ({ children, className }: StaggerProps) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: StaggerProps) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);

export default FadeIn;
