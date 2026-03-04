import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container-wide">
        <div className="max-w-5xl">
          <h1 className="heading-hero mb-8">
            <span className="block">Branding</span>
            <span className="block">Websites</span>
            <span className="block text-secondary">Marketing Design</span>
          </h1>
          <p className="text-subtitle max-w-xl mb-12">
            Personal portfolio of Sony Lin, a Vancouver-based designer
            specializing in branding, website design, and marketing materials.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-14 px-10 text-base font-medium">
              <Link to="/work">View Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-medium border-foreground text-foreground hover:bg-foreground hover:text-background">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
