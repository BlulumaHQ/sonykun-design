import { useMemo } from "react";
import { Link } from "react-router-dom";
import { usePortfolioFeed } from "@/lib/portfolioFeed";
import { selectHomepageProjects } from "@/lib/homepagePortfolio";

/** Three real client sites (CMS screenshots) in browser frames, shown beside the hero on large screens. */
const HeroCollage = () => {
  const { items, loading } = usePortfolioFeed();
  const picks = useMemo(
    () => selectHomepageProjects(items.filter((i) => i.featured_image_url || i.homepage_full_url), 3),
    [items],
  );
  const frames = ["hero-frame hero-frame--main", "hero-frame hero-frame--top", "hero-frame hero-frame--bottom"];
  return (
    <div className="hero-collage" aria-hidden={loading || undefined}>
      {frames.map((cls, i) => {
        const item = picks[i];
        const src = item?.featured_image_url || item?.homepage_full_url;
        return (
          <div key={cls} className={cls}>
            <div className="hero-frame-bar"><span /><span /><span /></div>
            {item && src ? (
              <Link to={`/portfolio/${item.slug}`} className="hero-frame-screen" tabIndex={-1}>
                <img src={src} alt={`${item.title} website`} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
              </Link>
            ) : (
              <div className="hero-frame-screen hero-frame-screen--empty" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeroCollage;
