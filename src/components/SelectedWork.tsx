import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { Button } from "@/components/ui/button";

// Only show featured case study projects on homepage
const featuredProjects = projects.filter((p) => p.featured && p.caseStudy);

const SelectedWork = () => {
  const { lang } = useLanguage();
  const titleParts = translations.selectedWork.title[lang].split("\n");

  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <span className="eyebrow">Selected Work</span>
          <h2 className="heading-section mb-12">
            {titleParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < titleParts.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <Link
                to={`/case-study/${project.slug}`}
                className="block rounded-lg overflow-hidden border border-border bg-card transition-shadow duration-300 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted/40">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {lang === "zh" ? "查看案例" : "View Case Study"}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {project.services.join(" + ")}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link to="/case-study">
              <Button size="lg" variant="outline" className="h-12 px-10 text-base font-medium rounded-xl">
                {t(translations.selectedWork.viewAll, lang)}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SelectedWork;
