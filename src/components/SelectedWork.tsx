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
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="heading-section mb-10">
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
                to={`/work/${project.slug}`}
                className="group relative overflow-hidden cursor-pointer block aspect-[4/3] rounded-lg tilt-card"
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
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/80 bg-white/20 px-2 py-0.5 rounded mb-2">
                      View Case Study
                    </span>
                    <h3 className="font-display text-xl font-bold text-primary-foreground mb-0.5">
                      {project.name}
                    </h3>
                    <p className="text-xs text-primary-foreground/70 line-clamp-1">
                      {project.services.join(" + ")}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 glass-sweep" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link to="/work">
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
