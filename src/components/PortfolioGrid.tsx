import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/projects";

// Show 6 recent portfolio projects on the homepage
const homepageProjects = projects.slice(0, 6);

const PortfolioGrid = () => {
  return (
    <div className="container-wide pb-4">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
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
    </div>
  );
};

export default PortfolioGrid;
