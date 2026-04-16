import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** seconds for one full loop */
  speed?: number;
  /** pause when user hovers */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Infinite horizontal marquee. Duplicates children once and translates -50%
 * for a seamless CSS-driven loop. Children should be a flex row of items.
 */
const Marquee = ({ children, speed = 40, pauseOnHover = false, className }: MarqueeProps) => {
  return (
    <div className={`marquee-wrap ${className ?? ""} ${pauseOnHover ? "marquee-pause-hover" : ""}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
