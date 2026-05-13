import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/projects";

// Show 6 most recent portfolio projects on the homepage — same component
// and structure as the full Portfolio page. No case-study grouping.
const homepageProjects = [...projects]
  .sort((a, b) => b.year - a.year)
  .slice(0, 6);

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
              services={project.services}
              liveUrl={project.liveUrl}
              fallbackImage={project.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioGrid;
