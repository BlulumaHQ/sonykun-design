import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedPortfolioCard from "@/components/FeedPortfolioCard";
import { PortfolioProjectContent } from "@/pages/ProjectDetail";
import { Button } from "@/components/ui/button";
import { feedCategories, paginatePortfolio, resolvePortfolioPath, usePortfolioFeed } from "@/lib/portfolioFeed";
import { useLanguage } from "@/i18n/LanguageContext";

const Work = () => {
  const { category: segment, page: pageParam } = useParams();
  const { items, loading, error } = usePortfolioFeed();
  const { lang } = useLanguage();
  const zh = lang === "zh";
  const resolved = resolvePortfolioPath(items, segment);
  const categories = feedCategories(items);
  const category = resolved.kind === "list" ? resolved.category : null;
  const filtered = category ? items.filter((item) => item.category === category.name) : items;
  const pagination = paginatePortfolio(filtered, pageParam);
  const base = category ? `/portfolio/${category.slug}` : "/portfolio";
  const pageUrl = (page: number) => page === 1 ? base : `${base}/page/${page}`;
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [segment, pageParam]);
  const rowClass = (active: boolean) => `flex items-center justify-between gap-3 border-l-2 py-2.5 pl-4 pr-3 text-sm ${active ? "border-primary bg-primary/5 font-medium text-foreground" : "border-transparent text-muted-foreground hover:border-border"}`;
  const invalid = resolved.kind === "not-found" || (resolved.kind === "detail" && pageParam !== undefined) || !pagination.valid;
  return (
    <>
      <Header />
      <main className="pt-28">
        {loading || error ? <section className="section-padding"><div className="container-wide" role="status">{error ? (zh ? "無法載入作品，請稍後再試。" : "Unable to load portfolio. Please try again later.") : (zh ? "載入作品中…" : "Loading portfolio…")}</div></section>
          : resolved.kind === "detail" && !invalid ? <PortfolioProjectContent item={resolved.item} />
          : invalid ? <section className="section-padding"><div className="container-wide"><h1 className="heading-section mb-6">{zh ? "找不到此作品或分類" : "Portfolio not found"}</h1><Button asChild variant="outline"><Link to="/portfolio">{zh ? "全部作品" : "All Projects"}</Link></Button></div></section>
          : <>
            <section className="section-padding"><div className="container-wide">
              <nav aria-label={zh ? "麵包屑導覽" : "Breadcrumb"} className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link to="/">{zh ? "首頁" : "Home"}</Link><span aria-hidden="true">›</span><Link to="/portfolio">{zh ? "作品集" : "Portfolio"}</Link>
                {category && <><span aria-hidden="true">›</span><span aria-current="page">{category.name}</span></>}
              </nav>
              <h1 className="heading-hero mb-6">{category ? (zh ? `${category.name} 作品集` : `${category.name} Portfolio`) : (zh ? "所有網站作品" : "All Portfolio Projects")}</h1>
              <p className="text-body max-w-2xl">{zh ? "依產業瀏覽 Sonykun Design 的所有客戶網站。" : "Browse every Sonykun Design client website by industry."}</p>
            </div></section>
            <section className="section-padding pt-0"><div className="mx-auto w-full max-w-[1880px] px-6 sm:px-8 md:px-12 lg:px-20">
              <div className="grid gap-10 lg:grid-cols-[280px,1fr]">
                <aside className="lg:sticky lg:top-[110px] lg:self-start">
                  <p className="mb-4 text-xs uppercase text-muted-foreground">{zh ? "作品集" : "Portfolio"}</p>
                  <nav aria-label={zh ? "作品分類" : "Portfolio categories"}>
                    <Link to="/portfolio" aria-current={!category ? "page" : undefined} className={rowClass(!category)}><span>{zh ? "全部作品" : "All Projects"}</span><span>{items.length}</span></Link>
                    {categories.map((entry) => <Link key={entry.slug} to={`/portfolio/${entry.slug}`} aria-current={category?.slug === entry.slug ? "page" : undefined} className={rowClass(category?.slug === entry.slug)}><span>{entry.name}</span><span>{entry.count}</span></Link>)}
                  </nav>
                </aside>
                <div className="min-w-0">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{pagination.items.map((item) => <FeedPortfolioCard key={item.id} item={item} />)}</div>
                  {filtered.length === 0 && <p className="py-12 text-muted-foreground">{zh ? "目前沒有作品。" : "No projects yet."}</p>}
                  {pagination.totalPages > 1 && <nav aria-label={zh ? "分頁" : "Pagination"} className="mt-12 flex flex-wrap justify-center gap-2">
                    <Button asChild variant="outline" disabled={pagination.page === 1}>{pagination.page > 1 ? <Link to={pageUrl(pagination.page - 1)}>{zh ? "上一頁" : "Previous"}</Link> : <span aria-disabled="true">{zh ? "上一頁" : "Previous"}</span>}</Button>
                    {Array.from({ length: pagination.totalPages }, (_, index) => index + 1).map((number) => <Button key={number} asChild size="icon" variant={pagination.page === number ? "default" : "outline"}><Link to={pageUrl(number)} aria-current={pagination.page === number ? "page" : undefined}>{number}</Link></Button>)}
                    <Button asChild variant="outline" disabled={pagination.page === pagination.totalPages}>{pagination.page < pagination.totalPages ? <Link to={pageUrl(pagination.page + 1)}>{zh ? "下一頁" : "Next"}</Link> : <span aria-disabled="true">{zh ? "下一頁" : "Next"}</span>}</Button>
                  </nav>}
                </div>
              </div>
            </div></section>
          </>}
      </main>
      <Footer />
    </>
  );
};

export const LegacyPortfolioRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={slug ? `/portfolio/${slug}` : "/portfolio"} replace />;
};
export default Work;
