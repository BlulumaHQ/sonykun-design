import { Eye, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Upgrade Your Website?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Get a live website preview before making any payment. See the design first, then decide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="h-13 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90 rounded-xl"
          >
            <Eye className="w-5 h-5 mr-2" />
            Get Free Preview
          </Button>
          <a href="tel:7786535353">
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call / Text Sony
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
