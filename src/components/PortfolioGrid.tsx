import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import friendlyDental from "@/assets/projects/friendly-dental.jpg";
import btnRealEstate from "@/assets/projects/btn-real-estate.jpg";
import littleMountainDental from "@/assets/projects/little-mountain-dental.jpg";
import oneParkHome from "@/assets/projects/one-park-home.jpg";

const portfolioItems = [
  {
    name: "Friendly Dental",
    image: friendlyDental,
    url: "https://friendlydental.ca/",
  },
  {
    name: "BTN Real Estate Services",
    image: btnRealEstate,
    url: "https://btn.bluluma.com/",
  },
  {
    name: "One Park Home",
    image: oneParkHome,
    url: "https://one-park-home.bluluma.com/",
  },
  {
    name: "Little Mountain Dental",
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
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-lg gap-2 pointer-events-none"
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
