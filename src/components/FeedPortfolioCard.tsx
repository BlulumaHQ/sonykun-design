import { Link } from "react-router-dom";
import type { FeedItem } from "@/lib/portfolioFeed";
import PortfolioScreenshotViewport from "@/components/PortfolioScreenshotViewport";
import { useLanguage } from "@/i18n/LanguageContext";
import { serviceLabel } from "@/lib/feedLabels";

const FeedPortfolioCard = ({ item }: { item: FeedItem }) => {
  const { lang } = useLanguage();
  const services = (item.services ?? []).map((sv) => serviceLabel(sv, lang));
  return (
    <Link to={`/portfolio/${item.slug}`} className="feed-portfolio-card flex cursor-pointer flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
      <PortfolioScreenshotViewport src={item.homepage_full_url || item.featured_image_url} alt={`${item.title} homepage`} />
      <div className="mt-4 flex min-w-0 items-center justify-between gap-3 text-base font-semibold text-foreground">
        <span className="truncate">{item.title}</span><span className="feed-portfolio-arrow shrink-0" aria-hidden="true">→</span>
      </div>
      {services.length > 0 && <p className="mt-1 text-xs text-muted-foreground">{services.join(" · ")}</p>}
    </Link>
  );
};

export default FeedPortfolioCard;