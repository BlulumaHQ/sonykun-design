import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

const Work = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <ScrollReveal>
              <h1 className="heading-hero mb-12">Work</h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {projects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.06}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group relative overflow-hidden cursor-pointer block aspect-[16/10]"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                      whileHover={{ scale: 1.05, rotate: 0.5 }}
                      transition={{ duration: 0.7 }}
                    />
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
