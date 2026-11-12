import { useMemo } from "react";
import { usePortfolioFeed } from "@/lib/portfolioFeed";
import { selectHomepageProjects } from "@/lib/homepagePortfolio";

/**
 * Editorial dark image strip — full-width seamless infinite marquee of real client
 * websites (CMS screenshots), sampled per visit. Sits below the hero.
 */
const ImageMarquee = () => {
  const { items } = usePortfolioFeed();
  const images = useMemo(
    () =>
      selectHomepageProjects(items.filter((i) => i.featured_image_url), 12).map((i) => ({
        src: i.featured_image_url as string,
        alt: `${i.title} website`,
      })),
    [items],
  );
  const tile = "h-[160px] md:h-[200px] w-[260px] md:w-[320px] flex-shrink-0 mx-2 overflow-hidden bg-white/5";

  return (
    <section className="bg-charcoal py-0 overflow-hidden" aria-hidden="true">
      <div className="marquee-wrap">
        <div className="marquee-track" style={{ animationDuration: "60s" }}>
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {images.length === 0
                ? Array.from({ length: 8 }, (_, i) => <div key={i} className={tile} />)
                : images.map((img, i) => (
                    <div key={`${copy}-${i}`} className={tile}>
                      <img
                        src={img.src}
                        alt={copy === 0 ? img.alt : ""}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top opacity-85 hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
