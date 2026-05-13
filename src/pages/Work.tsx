import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const CURRENT_YEAR = 2026;

const Work = () => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured && p.caseStudy),
    []
  );

  // Standard client projects (not wordpress)
  const clientProjects = useMemo(
    () =>
      [...projects]
        .filter((p) => p.type === "client")
        .sort((a, b) => b.year - a.year),
    []
  );

  // WordPress projects at the bottom
  const wordpressProjects = useMemo(
    () => projects.filter((p) => p.type === "wordpress"),
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? clientProjects
        : clientProjects.filter((p) => p.category.includes(activeFilter)),
    [activeFilter, clientProjects]
  );

  const filters: ("All" | ProjectCategory)[] = ["All", ...projectCategories];

  const renderProjectCard = (project: typeof projects[0], i: number, showBadge = true) => (
    <ScrollReveal key={project.slug} delay={i * 0.06}>
      <PortfolioCard
        name={project.name}
        industry={project.industry}
        description={project.description}
        services={project.services}
        liveUrl={project.liveUrl}
        caseStudySlug={project.caseStudy ? project.slug : undefined}
        fallbackImage={project.image}
        isNew={showBadge && project.year >= CURRENT_YEAR}
      />
    </ScrollReveal>
  );

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <ScrollReveal>
              <span className="eyebrow">{lang === "zh" ? "作品集" : "Selected Work"}</span>
              <h1 className="heading-hero mb-6">{t(translations.work.title, lang)}</h1>
              <p className="text-body mb-16 max-w-2xl">
                {lang === "zh"
                  ? "以下為精選的設計與網站專案作品。"
                  : "A curated selection of selected design and web projects."}
              </p>
            </ScrollReveal>

            {/* Featured Case Studies */}
            <ScrollReveal>
              <h2 className="text-lg font-display font-semibold mb-6 text-foreground">
                {lang === "zh" ? "精選案例" : "Featured Case Studies"}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {featuredProjects.map((project, i) => renderProjectCard(project, i))}
            </div>

            {/* Filters */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-8">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeFilter === filter
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/10 text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                    }`}
                  >
                    {filter === "All" ? (lang === "zh" ? "全部" : "All") : filter}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Full Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {filteredProjects.map((project, i) => renderProjectCard(project, i))}
            </div>

            {/* WordPress Projects */}
            {(activeFilter === "All" || activeFilter === "Web Design") && wordpressProjects.length > 0 && (
              <>
                <ScrollReveal>
                  <h2 className="text-lg font-display font-semibold mt-16 mb-6 text-foreground">
                    {lang === "zh" ? "WordPress 專案" : "WordPress Projects"}
                  </h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {wordpressProjects.map((project, i) => renderProjectCard(project, i, false))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Work;
