import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import littleMountainDental from "@/assets/projects/little-mountain-dental.jpg";
import oneParkHome from "@/assets/projects/one-park-home.jpg";

const portfolioItems = [
  {
    name: "Friendly Dental",
    description: "Modern dental clinic website with online booking",
    image: friendlyDental,
    url: "https://friendlydental.ca/",
  },
  {
    name: "BTN Real Estate Services",
    description: "Professional real estate services website",
    image: btnRealEstate,
    url: "https://btn.bluluma.com/",
  },
  {
    name: "KChen Construction Management",
    description: "Construction management company website",
    image: oneParkHome,
    url: "https://one-park-home.bluluma.com/",
  },
  {
    name: "Little Mountain Dental",
    description: "Family dental practice website",
    image: littleMountainDental,
    url: "http://littlemountain.bluluma.com/",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section mb-10 text-center">Recent Website Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portfolioItems.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} website design`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <Button
                  size="sm"
                  className="rounded-lg gap-2 pointer-events-none btn-cta"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
