import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { motion } from "framer-motion";
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
    () => projects.filter((p) => p.featured).slice(0, 3),
    []
  );

  const sortedProjects = useMemo(
    () => [...projects].sort((a, b) => b.year - a.year),
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? sortedProjects
        : sortedProjects.filter((p) => p.category.includes(activeFilter)),
    [activeFilter, sortedProjects]
  );

  const filters: ("All" | ProjectCategory)[] = ["All", ...projectCategories];

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <ScrollReveal>
              <h1 className="heading-hero mb-4">{t(translations.work.title, lang)}</h1>
              <p className="text-body mb-12">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-16">
              {featuredProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.08}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group relative overflow-hidden cursor-pointer block aspect-[16/10]"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                      whileHover={{ scale: 1.05, rotate: 0.5 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-end p-5">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-lg font-bold text-primary-foreground mb-0.5">
                          {project.name}
                        </h3>
                        <p className="text-xs text-primary-foreground/70 line-clamp-1">
                          {project.industry} — {project.services.join(", ")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.06}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group relative overflow-hidden cursor-pointer block aspect-[16/10]"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                      whileHover={{ scale: 1.05, rotate: 0.5 }}
                      transition={{ duration: 0.7 }}
                    />
                    {/* NEW badge for current year projects */}
                    {project.year >= CURRENT_YEAR && (
                      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md z-10">
                        New
                      </span>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-end p-5">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-display text-xl font-bold text-primary-foreground mb-0.5">
                          {project.name}
                        </h3>
                        <p className="text-xs text-primary-foreground/70 line-clamp-1">
                          {project.industry} — {project.services.join(", ")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
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
