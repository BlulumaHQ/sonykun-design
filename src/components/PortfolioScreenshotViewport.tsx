import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const PortfolioScreenshotViewport = ({ src, alt, variant = "card" }: { src?: string | null; alt: string; variant?: "card" | "phone" }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { lang } = useLanguage();
  return (
    <div className={`portfolio-screenshot portfolio-screenshot--${variant}`}>
      <div className="portfolio-screenshot-screen" onScroll={(e) => { if (e.currentTarget.scrollTop > 0) setHasScrolled(true); }}>
        {src && <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />}
      </div>
      {!hasScrolled && <span className="portfolio-scroll-hint" aria-hidden="true">↕ {lang === "zh" ? "捲動" : "Scroll"}</span>}
    </div>
  );
};

export default PortfolioScreenshotViewport;