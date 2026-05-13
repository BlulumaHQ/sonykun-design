import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export interface PortfolioCardProps {
  name: string;
  industry?: string;
  services?: string[];
  liveUrl?: string;
  /** Optional: explicit long screenshot URL. Falls back to thum.io capture from liveUrl. */
  longScreenshotUrl?: string;
  /** Optional poster shown only if no screenshot is available. */
  fallbackImage?: string;
  /** Ignored — kept for backward compatibility. Card never shows description. */
  description?: string;
  /** Ignored — Portfolio cards never show case-study links or "New" badges. */
  caseStudySlug?: string;
  isNew?: boolean;
}

const buildLongScreenshotUrl = (siteUrl?: string) => {
  if (!siteUrl) return undefined;
  const clean = siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  // thum.io full-page desktop capture (top-to-bottom, real site length).
  return `https://image.thum.io/get/width/1200/fullpage/noanimate/maxAge/24/https://${clean}`;
};

/**
 * PortfolioCard — locked structure.
 * Contents (in order, ONLY these):
 *   1. Square scrollable website screenshot preview
 *   2. Project / company name
 *   3. Service tags
 *   4. CTA button (View Live Website)
 *
 * Forbidden: description paragraph, hover overlays, dark overlay, image zoom,
 *            "New" badge, "Case Study" badge, auto-scroll animation, browser chrome.
 */
const PortfolioCard = ({
  name,
  services,
  liveUrl,
  longScreenshotUrl,
  fallbackImage,
}: PortfolioCardProps) => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const screenshot = longScreenshotUrl ?? buildLongScreenshotUrl(liveUrl);
  const [imgFailed, setImgFailed] = useState(false);
  const showLong = !!screenshot && !imgFailed;

  return (
    <article className="portfolio-card border border-border bg-card overflow-hidden rounded-2xl shadow-sm">
      {/* Square, manually scrollable preview — square corners on inner viewport so scrollbar isn't clipped */}
      <div className="portfolio-preview-box bg-background border-b border-border">
        {showLong ? (
          <img
            src={screenshot}
            alt={`${name} full page website preview`}
            loading="lazy"
            draggable={false}
            onError={() => setImgFailed(true)}
          />
        ) : fallbackImage ? (
          <img src={fallbackImage} alt={name} loading="lazy" draggable={false} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            {isZh ? "預覽即將上線" : "Screenshot coming soon"}
          </div>
        )}
      </div>

      {/* Meta — name, tags, CTA only */}
      <div className="portfolio-card-content p-5 md:p-6">
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-tight mb-3">
          {name}
        </h3>

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

        {liveUrl && (
          <div className="mt-auto pt-1">
            <Button asChild size="sm" className="rounded-lg gap-1.5">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                {isZh ? "查看實際網站" : "View Live Website"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
