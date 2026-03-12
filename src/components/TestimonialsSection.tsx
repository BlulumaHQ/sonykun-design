import { useState } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
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
      "Our old website looked outdated and Sony helped modernize it quickly. The new site looks far more professional and our patients find it much easier to use.",
    name: "Kevin Chen",
    company: "KChen Construction",
    url: "https://one-park-home.bluluma.com/",
  },
  {
    quote:
      "I appreciated the transparency about pricing. There were no hidden costs and the process was smooth from start to finish.",
    name: "Michael Tran",
    company: "Small Business Owner",
    url: null,
  },
  {
    quote:
      "Sony redesigned our clinic website and it now looks clean and modern. Patients have commented that the site is easier to navigate.",
    name: "Dr. Sarah Kim",
    company: "Little Mountain Dental",
    url: "http://littlemountain.bluluma.com/",
  },
  {
    quote:
      "We needed a website that looked trustworthy for our real estate clients. Sony understood the assignment and delivered a polished result on time.",
    name: "Brian Nguyen",
    company: "BTN Real Estate Services",
    url: "https://btn.bluluma.com/",
  },
  {
    quote:
      "The free hosting option was a big plus for us. We got a professional website without worrying about ongoing monthly fees.",
    name: "Amy Wong",
    company: "Local Retail Business",
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
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const currentItems = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="heading-section mb-10 text-center">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {currentItems.map((item) => (
            <div
              key={item.name}
              className="bg-background rounded-2xl p-7 border border-border flex flex-col"
            >
              <Stars />
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                "{item.quote}"
              </blockquote>
              <div className="mb-4">
                <p className="font-display font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
              {item.url && (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
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

        {/* Pagination dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === page ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
