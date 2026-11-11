import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioScreenshotViewport from "@/components/PortfolioScreenshotViewport";
import { Button } from "@/components/ui/button";
import { categorySlug, usePortfolioFeed, type FeedItem } from "@/lib/portfolioFeed";
import { useLanguage } from "@/i18n/LanguageContext";

export const PortfolioProjectContent = ({ item }: { item: FeedItem }) => {
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const pages = (item.gallery ?? []).filter((image) => image.type === "page_screenshot");
  const mobiles = (item.gallery ?? []).filter((image) => image.type === "mobile_screenshot");
  useEffect(() => {
    const previous = document.title;
    document.title = `${item.title} | Sonykun Design Portfolio`;
    return () => { document.title = previous; };
  }, [item.title]);
  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <nav aria-label={zh ? "麵包屑導覽" : "Breadcrumb"} className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/">{zh ? "首頁" : "Home"}</Link><span aria-hidden="true">›</span>
            <Link to="/portfolio">{zh ? "作品集" : "Portfolio"}</Link>
            {item.category && <><span aria-hidden="true">›</span><Link to={`/portfolio/${categorySlug(item.category)}`}>{item.category}</Link></>}
            <span aria-hidden="true">›</span><span aria-current="page">{item.title}</span>
          </nav>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr,1.3fr]">
            <div className="min-w-0">
              <h1 className="heading-hero mb-6">{item.title}</h1>
              <div className="mb-8 flex flex-wrap gap-2">{(item.services ?? []).map((service) => <span key={service} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{service}</span>)}</div>
              {item.live_url && <Button asChild><a href={item.live_url} target="_blank" rel="noopener noreferrer">{zh ? "瀏覽網站" : "Visit Website"}<ExternalLink /></a></Button>}
            </div>
            {item.featured_image_url && <img src={item.featured_image_url} alt={item.title} decoding="async" className="block h-auto w-full rounded-xl border border-border shadow-md" />}
          </div>
        </div>
      </section>
      {pages.length > 0 && <section className="section-padding"><div className="container-wide">
        <h2 className="heading-section mb-8">{zh ? "頁面" : "Pages"}</h2>
        <div className="columns-1 gap-6 md:columns-2">{pages.map((image, index) => <figure key={`${image.url}-${index}`} className="mb-6 break-inside-avoid">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm"><img src={image.url} alt={image.caption || item.title} loading="lazy" decoding="async" className="block h-auto w-full" /></div>
          {image.caption && <figcaption className="mt-2 text-sm text-muted-foreground">{image.caption}</figcaption>}
        </figure>)}</div>
      </div></section>}
      {mobiles.length > 0 && <section className="section-padding"><div className="container-wide">
        <h2 className="heading-section text-center">{zh ? "手機版" : "Mobile"}</h2>
        {mobiles.map((mobile, index) => <div key={`${mobile.url}-${index}`} className="mx-auto mt-8 w-[280px] max-w-full rounded-[2.5rem] border-[10px] border-foreground bg-foreground shadow-xl"><PortfolioScreenshotViewport variant="phone" src={mobile.url} alt={`${item.title} ${zh ? "手機版" : "mobile"}`} /></div>)}
      </div></section>}
    </>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const { items, loading, error } = usePortfolioFeed();
  const { lang } = useLanguage();
  const item = items.find((entry) => entry.slug === slug);
  if (!loading && !error && !item) return <Navigate to="/portfolio" replace />;
  return <><Header /><main className="pt-28">{item ? <PortfolioProjectContent item={item} /> : <div className="container-wide section-padding" role="status">{error ? (lang === "zh" ? "無法載入作品，請稍後再試。" : "Unable to load portfolio. Please try again later.") : (lang === "zh" ? "載入中…" : "Loading…")}</div>}</main><Footer /></>;
};
export default ProjectDetail;
