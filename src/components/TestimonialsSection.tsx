import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Working with Sony was very straightforward. We needed a simple professional website and he delivered exactly what we were looking for.",
    name: "Dr. Lee",
    company: "Friendly Dental",
    url: "https://friendlydental.ca/",
  },
  {
    quote:
      "Our old website looked outdated and Sony helped modernize it quickly. The new site looks far more professional.",
    name: "Kevin Chen",
    company: "KChen Construction",
    url: "https://one-park-home.bluluma.com/",
  },
  {
    quote:
      "I appreciated the transparency about pricing. There were no hidden costs and the process was smooth.",
    name: "Michael Tran",
    company: "Small Business Owner",
    url: null,
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="heading-section mb-10 text-center">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-7 border border-border flex flex-col"
            >
              <Stars />
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mb-4">
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
              {t.url && (
                <a href={t.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="rounded-lg gap-2 btn-cta w-full"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
