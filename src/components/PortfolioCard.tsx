import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export interface PortfolioPreviewTab {
  id: string;
  label: string;
  /** Long full-page screenshot URL for this tab */
  imageUrl?: string;
  /** Optional URL to open externally for this preview */
  openUrl?: string;
}

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
  /** Optional Before / Preview A / Preview B style tabs */
  tabs?: PortfolioPreviewTab[];
  /** Compact variant (slightly shorter preview) — used on homepage */
  compact?: boolean;
}

/**
 * Build a long, full-page screenshot URL via thum.io (free, no API key).
 * `width/1200` keeps it crisp; `crop/4000` produces a tall vertical screenshot
 * suitable for the manually-scrollable preview window.
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
  tabs,
  compact,
}: PortfolioCardProps) => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeTabId, setActiveTabId] = useState(tabs?.[0]?.id);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const activeTab = tabs?.find((t) => t.id === activeTabId);
  const screenshot =
    activeTab?.imageUrl ?? longScreenshotUrl ?? buildLongScreenshotUrl(liveUrl);
  const showLongImage = !!screenshot && !imgFailed;
  const previewOpenUrl = activeTab?.openUrl ?? liveUrl;

  // Reset scroll position to top whenever the active tab / image changes
  useEffect(() => {
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
    setImgLoaded(false);
    setImgFailed(false);
  }, [activeTabId, screenshot]);

  return (
    <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-xl">
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

        {/* Optional Before / Preview A / Preview B tab bar */}
        {tabs && tabs.length > 1 && (
          <div className="flex items-center gap-1 px-3 py-2 bg-background border-b border-border overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeTabId === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/10 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Manually scrollable, fixed-height preview viewport */}
        <div
          ref={viewportRef}
          className={`portfolio-scroll-viewport relative bg-background ${
            compact ? "h-[420px] md:h-[440px]" : "h-[460px] md:h-[500px]"
          }`}
        >
          {showLongImage ? (
            <img
              src={screenshot}
              alt={`${name} full page website preview`}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgFailed(true)}
              className="w-full h-auto block select-none"
              draggable={false}
            />
          ) : fallbackImage ? (
            <img
              src={fallbackImage}
              alt={name}
              loading="lazy"
              className="w-full h-auto block"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              {isZh ? "預覽即將上線" : "Screenshot coming soon."}
            </div>
          )}

          {/* Loading shimmer */}
          {showLongImage && !imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-muted/60 pointer-events-none" />
          )}

          {/* Subtle scroll hint, fades on hover */}
          {showLongImage && imgLoaded && (
            <div className="pointer-events-none absolute bottom-3 right-3 hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium text-foreground/70 bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-border opacity-90 group-hover:opacity-0 transition-opacity">
              <MousePointer2 className="w-3 h-3" />
              {isZh ? "可滾動預覽" : "Scroll preview"}
            </div>
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
          {previewOpenUrl && (
            <Button
              asChild
              size="sm"
              variant={caseStudySlug ? "outline" : "default"}
              className="rounded-lg gap-1.5"
            >
              <a href={previewOpenUrl} target="_blank" rel="noopener noreferrer">
                {activeTab
                  ? isZh
                    ? `開啟${activeTab.label}`
                    : `Open ${activeTab.label}`
                  : isZh
                    ? "查看實際網站"
                    : "View Live Website"}
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
