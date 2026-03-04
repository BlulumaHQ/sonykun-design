import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const overIn = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, .project-card")) {
        setHovering(true);
      }
    };
    const overOut = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", overIn);
    document.addEventListener("mouseout", overOut);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", overIn);
      document.removeEventListener("mouseout", overOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 border-primary/50 mix-blend-difference"
      animate={{
        x: pos.x - (hovering ? 20 : 10),
        y: pos.y - (hovering ? 20 : 10),
        width: hovering ? 40 : 20,
        height: hovering ? 40 : 20,
        opacity: pos.x === 0 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
