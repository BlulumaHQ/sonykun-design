import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

export interface PortfolioCardProps {
  name: string;
  industry: string;
  description?: string;
  services?: string[];
  liveUrl?: string;
  caseStudySlug?: string;
  fallbackImage?: string;
  isNew?: boolean;
  /** Optional explicit long screenshot URL (overrides liveUrl auto-capture) */
  longScreenshotUrl?: string;
}

/**
 * Build a long, full-page screenshot URL via thum.io (free, no API key).
 * `width/1200` keeps it crisp; `crop/4000` produces a tall vertical screenshot
 * suitable for the scrolling preview window.
 */
const buildLongScreenshotUrl = (siteUrl?: string) => {
  if (!siteUrl) return undefined;
  const clean = siteUrl.replace(/^https?:\/\//, "");
  return `https://image.thum.io/get/width/1200/crop/4000/noanimate/maxAge/24/https://${clean}`;
};

const PortfolioCard = ({
  name,
  industry,
  description,
  services,
  liveUrl,
  caseStudySlug,
  fallbackImage,
  isNew,
  longScreenshotUrl,
}: PortfolioCardProps) => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false);

  const screenshot = longScreenshotUrl ?? buildLongScreenshotUrl(liveUrl);
  const showLongImage = !!screenshot && !imgFailed;

  // Mobile: trigger scroll animation when card enters view
  useEffect(() => {
    if (!isMobile || !cardRef.current) return;
    const el = cardRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoScroll(true);
          // stop after one full pass to keep things calm
          setTimeout(() => setAutoScroll(false), 9000);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isMobile]);

  return (
    <div
      ref={cardRef}
      className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Browser-style preview window */}
      <div className="relative bg-muted/40 border-b border-border">
        {/* Mac traffic-light bar */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary/5 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          {liveUrl && (
            <span className="ml-3 hidden sm:block text-[11px] text-muted-foreground font-mono truncate">
              {liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          )}
          {isNew && (
            <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded">
              New
            </span>
          )}
        </div>

        {/* Fixed-height scroll window */}
        <div className="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden bg-background">
          {showLongImage ? (
            <img
              src={screenshot}
              alt={`${name} full page website preview`}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgFailed(true)}
              className={`w-full h-auto block transition-transform ease-linear ${
                autoScroll
                  ? "duration-[8000ms] -translate-y-[calc(100%-100%/1)]"
                  : "group-hover:duration-[7000ms] duration-700 translate-y-0 group-hover:[transform:translateY(calc(-100%+400px))]"
              }`}
              style={{ willChange: "transform" }}
            />
          ) : fallbackImage ? (
            <img
              src={fallbackImage}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              {isZh ? "預覽載入中…" : "Preview loading…"}
            </div>
          )}

          {/* Loading shimmer */}
          {showLongImage && !imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted/60" />
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-tight">
            {name}
          </h3>
        </div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
          {industry}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
        )}
        {services && services.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {services.map((s) => (
              <span
                key={s}
                className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/10 text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {caseStudySlug && (
            <Button asChild size="sm" className="rounded-lg gap-1.5">
              <Link to={`/work/${caseStudySlug}`}>
                {isZh ? "查看案例" : "View Case Study"}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button
              asChild
              size="sm"
              variant={caseStudySlug ? "outline" : "default"}
              className="rounded-lg gap-1.5"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                {isZh ? "查看實際網站" : "View Live Website"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
