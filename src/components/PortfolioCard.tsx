import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export interface PortfolioPreviewTab {
  id: string;
  label: string;
  imageUrl?: string;
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
  longScreenshotUrl?: string;
  tabs?: PortfolioPreviewTab[];
  /** Reserved for future variants. Card height is consistent regardless. */
  compact?: boolean;
}

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

  useEffect(() => {
    if (viewportRef.current) viewportRef.current.scrollTop = 0;
    setImgLoaded(false);
    setImgFailed(false);
  }, [activeTabId, screenshot]);

  return (
    <article className="portfolio-card rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      {isNew && (
        <div className="flex items-center px-4 py-2 border-b border-border">
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded">
            New
          </span>
        </div>
      )}

      {/* Optional tab bar */}
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

      {/* Square, manually scrollable preview */}
      <div
        ref={viewportRef}
        className="portfolio-preview-box relative bg-background border-b border-border"
      >
        {showLongImage ? (
          <img
            src={screenshot}
            alt={`${name} full page website preview`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
            draggable={false}
          />
        ) : fallbackImage ? (
          <img src={fallbackImage} alt={name} loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            {isZh ? "預覽即將上線" : "Screenshot coming soon"}
          </div>
        )}

        {showLongImage && !imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted/60 pointer-events-none" />
        )}

      </div>

      {/* Meta */}
      <div className="portfolio-card-content p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-tight mb-2">
          {name}
        </h3>
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

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {caseStudySlug && (
            <Button asChild size="sm" className="rounded-lg gap-1.5">
              <Link to={`/case-study/${caseStudySlug}`}>
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
    </article>
  );
};

export default PortfolioCard;
