import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-section mb-4">Project Not Found</h1>
            <Link to="/work" className="nav-link border-b border-secondary pb-1">
              Back to Work
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <section className="w-full aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
          <img
            src={project.image}
            alt={project.alt || project.name}
            className="w-full h-full object-cover"
          />
        </section>

        {/* Project Overview */}
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-hero mb-12">{project.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Client
                </h4>
                <p className="text-lg font-medium text-foreground">{project.name}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Industry
                </h4>
                <p className="text-lg font-medium text-foreground">{project.industry}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Services
                </h4>
                <p className="text-lg font-medium text-foreground">
                  {project.services.join(", ")}
                </p>
              </div>
            </div>

            {project.description && (
              <p className="text-subtitle max-w-2xl mb-16">{project.description}</p>
            )}

            {/* Sections */}
            <div className="space-y-20">
              {project.services.includes("Brand Identity") && (
                <div>
                  <h2 className="heading-subsection mb-6">Brand Identity</h2>
                  <p className="text-body text-lg max-w-2xl">
                    Overview of brand design work including logo development, visual identity system, and brand applications.
                  </p>
                </div>
              )}

              {(project.services.includes("Website Design") || project.services.includes("Ecommerce")) && (
                <div>
                  <h2 className="heading-subsection mb-6">Website</h2>
                  <p className="text-body text-lg max-w-2xl">
                    Overview of website design and development including layout, user experience, and responsive implementation.
                  </p>
                </div>
              )}

              {project.services.includes("Marketing Graphics") && (
                <div>
                  <h2 className="heading-subsection mb-6">Marketing Graphics</h2>
                  <p className="text-body text-lg max-w-2xl">
                    Marketing materials including posters, brochures, flyers, and social media graphics.
                  </p>
                </div>
              )}

              {/* Gallery */}
              <div>
                <h2 className="heading-subsection mb-8">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.alt || project.name} — gallery view`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-20 pt-12 border-t border-border">
              <Link
                to="/work"
                className="nav-link text-base border-b border-secondary pb-1 hover:border-foreground hover:text-foreground transition-colors"
              >
                ← Back to Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
