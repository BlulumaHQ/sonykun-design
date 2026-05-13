import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/PortfolioCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";

// Show a small curated set on the homepage (first 3 featured case studies)
const homepageProjects = projects.filter((p) => p.featured && p.caseStudy).slice(0, 3);

const PortfolioGrid = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{isZh ? "近期作品" : "Selected Projects"}</span>
          <h2 className="heading-section">
            {isZh ? "近期網站專案" : "Recent Website Projects"}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {homepageProjects.map((project) => (
            <motion.div
              key={project.slug}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <PortfolioCard
                name={project.name}
                industry={project.industry}
                description={project.description}
                services={project.services}
                liveUrl={project.liveUrl}
                caseStudySlug={project.caseStudy ? project.slug : undefined}
                fallbackImage={project.image}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/work">
            <Button size="lg" variant="outline" className="h-12 px-10 text-base font-medium rounded-xl">
              {isZh ? "查看所有作品" : "View All Work"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
