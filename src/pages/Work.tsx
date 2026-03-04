import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-hero mb-20">Work</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className="project-card aspect-[4/3]"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="project-card-overlay">
                    <div className="project-card-info">
                      <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-primary-foreground/70">
                        {project.industry} — {project.services.join(", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Work;
