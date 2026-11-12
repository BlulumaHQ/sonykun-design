import { useMemo } from "react";
import FeedPortfolioCard from "@/components/FeedPortfolioCard";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortfolioFeed } from "@/lib/portfolioFeed";
import { selectHomepageProjects } from "@/lib/homepagePortfolio";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Homepage portfolio: 12 projects sampled from the CMS feed on each visit,
 * preferring projects starred as featured (same rotation as bluluma.com).
 */
const HomeFeaturedWork = () => {
  const { lang } = useLanguage();
  const { items, loading, error } = usePortfolioFeed();
  const projects = useMemo(() => selectHomepageProjects(items, 12), [items]);
  const grid = "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <div className="container-wide pb-14">
      {loading ? (
        <div className={grid} aria-busy="true">
          {Array.from({ length: 12 }, (_, i) => <Skeleton key={i} className="aspect-[4/5] rounded-xl" />)}
        </div>
      ) : error || projects.length === 0 ? (
        <p className="py-10 text-center text-muted-foreground">
          {lang === "zh" ? "作品暫時無法載入，請查看完整作品集。" : "Projects couldn't load right now — view the full portfolio below."}
        </p>
      ) : (
        <div className={grid}>
          {projects.map((item) => <FeedPortfolioCard key={item.id} item={item} />)}
        </div>
      )}
    </div>
  );
};

export default HomeFeaturedWork;
