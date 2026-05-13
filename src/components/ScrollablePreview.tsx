import { ReactNode } from "react";

interface ScrollablePreviewProps {
  src: string;
  alt: string;
  /** "square" (default) or "wide" (16/10) for hero areas */
  shape?: "square" | "wide";
  className?: string;
  children?: ReactNode;
}

/**
 * Square (or wide) scrollable preview window. Always shows the full image
 * inside a fixed-aspect viewport that the user can manually scroll.
 * No hover overlays, no auto-scroll.
 */
const ScrollablePreview = ({
  src,
  alt,
  shape = "square",
  className = "",
  children,
}: ScrollablePreviewProps) => (
  <div
    className={`portfolio-preview-box ${shape === "wide" ? "portfolio-preview-box--wide" : ""} bg-background border border-border ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" draggable={false} />
    {children}
  </div>
);

export default ScrollablePreview;
