import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import {
  projects,
  PORTFOLIO_CATEGORIES,
  portfolioCategoryZh,
  SERVICE_CATEGORIES,
  serviceCategoryZh,
  type PortfolioCategory,
  type ServiceCategory,
} from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/i18n/LanguageContext";

type IndustryValue = "All" | PortfolioCategory;
type ServiceValue = "All" | ServiceCategory;

const Work = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const [industry, setIndustry] = useState<IndustryValue>("All");
  const [service, setService] = useState<ServiceValue>("All");

  const allProjects = useMemo(
    () => [...projects].sort((a, b) => b.year - a.year),
    []
  );

  const filtered = allProjects.filter((p) => {
    const okI = industry === "All" || p.portfolioCategory === industry;
    const okS = service === "All" || (p.serviceCategories ?? []).includes(service);
    return okI && okS;
  });

  const industries: IndustryValue[] = ["All", ...PORTFOLIO_CATEGORIES];
  const services: ServiceValue[] = ["All", ...SERVICE_CATEGORIES];
  const labelI = (k: IndustryValue) => (isZh ? portfolioCategoryZh[k] : k);
  const labelS = (k: ServiceValue) => (isZh ? serviceCategoryZh[k] : k);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 md:px-12 lg:px-16">
            <ScrollReveal>
              <span className="eyebrow">{isZh ? "作品集" : "Portfolio"}</span>
              <h1 className="heading-hero mb-6">
                {isZh ? "作品集" : "Portfolio"}
              </h1>
              <p className="text-body mb-12 max-w-2xl">
                {isZh
                  ? "依產業或服務類別瀏覽過去的客戶網站作品。每個作品可直接預覽完整網站。"
                  : "Browse client website projects by industry or service. Each card lets you scroll a full live preview."}
              </p>
            </ScrollReveal>

            {/* Mobile / tablet selectors */}
            <div className="lg:hidden mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  {isZh ? "產業分類" : "Industry"}
                </span>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value as IndustryValue)}
                  className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm"
                >
                  {industries.map((f) => (
                    <option key={f} value={f}>{labelI(f)}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  {isZh ? "服務分類" : "Service"}
                </span>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value as ServiceValue)}
                  className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm"
                >
                  {services.map((f) => (
                    <option key={f} value={f}>{labelS(f)}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* Desktop sidebar + grid */}
            <div className="lg:flex lg:gap-12 xl:gap-16">
              <aside
                className="hidden lg:block lg:w-[220px] lg:shrink-0"
                aria-label={isZh ? "篩選分類" : "Filters"}
              >
                <div className="sticky top-28 space-y-10">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                      {isZh ? "產業分類" : "Industries"}
                    </p>
                    <nav className="flex flex-col gap-0.5">
                      {industries.map((f) => {
                        const active = industry === f;
                        return (
                          <button
                            key={f}
                            onClick={() => setIndustry(f)}
                            className={`text-left text-sm leading-snug py-2 px-3 -mx-3 rounded-md transition-colors ${
                              active
                                ? "bg-primary/5 text-primary font-semibold"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                            }`}
                          >
                            {labelI(f)}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">
                      {isZh ? "服務分類" : "Services"}
                    </p>
                    <nav className="flex flex-col gap-0.5">
                      {services.map((f) => {
                        const active = service === f;
                        return (
                          <button
                            key={f}
                            onClick={() => setService(f)}
                            className={`text-left text-sm leading-snug py-2 px-3 -mx-3 rounded-md transition-colors ${
                              active
                                ? "bg-primary/5 text-primary font-semibold"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                            }`}
                          >
                            {labelS(f)}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </aside>

              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                  {filtered.map((p) => (
                    <PortfolioCard
                      key={p.slug}
                      name={p.name}
                      services={p.services}
                      liveUrl={p.liveUrl}
                      fallbackImage={p.image}
                    />
                  ))}
                </div>

                {filtered.length === 0 && (
                  <p className="text-muted-foreground text-sm py-12 text-center">
                    {isZh ? "此分類目前沒有作品。" : "No projects in this category yet."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Work;
