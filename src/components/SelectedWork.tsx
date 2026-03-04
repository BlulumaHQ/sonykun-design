import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const SelectedWork = () => {
  const featured = projects.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section mb-16">
          Selected<br />Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`project-card ${i === 0 || i === 3 ? "md:aspect-[4/3]" : "md:aspect-square"} aspect-[4/3]`}
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

        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="nav-link text-base border-b border-secondary pb-1 hover:border-foreground hover:text-foreground transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
