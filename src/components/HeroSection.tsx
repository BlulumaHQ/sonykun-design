import { Phone, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBullets = [
  "Starting at $375",
  "No monthly fee required",
  "Free hosting included",
  "20+ years of design experience",
];

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary-foreground mb-5">
            Professional Website Design Since 2005
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
            Affordable business websites with a live preview before you pay.
          </p>

          <ul className="space-y-3 mb-10">
            {trustBullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="h-13 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90 rounded-xl"
            >
              <Eye className="w-5 h-5 mr-2" />
              Get Your Free Website Preview
            </Button>
            <a href="tel:7786535353">
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call or Text Sony
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
