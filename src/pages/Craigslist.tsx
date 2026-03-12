import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { CheckCircle, Eye, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBullets = [
  "Starting at $375",
  "Live preview before payment",
  "Free hosting included",
  "No monthly fee required",
  "20+ years experience since 2005",
];

const pricingSummary = [
  { title: "Basic Website", price: "$375", features: ["Single page", "Mobile friendly", "Contact form"] },
  { title: "Business Website", price: "$750", features: ["Up to 7 pages", "SEO friendly", "Mobile optimized"] },
  { title: "Premium Website", price: "$1,250", features: ["Custom design", "Up to 10 pages"] },
  { title: "Ecommerce", price: "$1,650", features: ["Online store", "Payment integration"] },
];

const Craigslist = () => {
  const scrollToContact = () => {
    const el = document.getElementById("craigslist-contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground mb-3">
                Affordable Website Design for Small Businesses
              </h1>
              <p className="font-display text-2xl sm:text-3xl font-bold text-secondary mb-6">
                Starting at $375
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Live preview before you pay. Free hosting included.
              </p>

              <ul className="space-y-3 mb-10 max-w-md mx-auto text-left">
                {trustBullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="h-13 px-8 text-base font-semibold btn-cta rounded-xl"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Get Your Free Website Preview
                </Button>
                <a href="tel:7786535353">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 px-8 text-base font-semibold border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl w-full sm:w-auto"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call / Text Sony
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <PortfolioGrid />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing Summary */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="heading-section mb-10 text-center">Clear and Simple Pricing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {pricingSummary.map((plan) => (
                <div key={plan.title} className="rounded-2xl p-7 border border-border bg-background flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{plan.title}</h3>
                  <p className="text-3xl font-bold text-foreground mb-5">{plan.price}</p>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Get a live website preview before making any payment.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="h-13 px-8 text-base font-semibold bg-white text-secondary hover:bg-white/90 rounded-xl"
            >
              <Eye className="w-5 h-5 mr-2" />
              Get Your Free Website Preview
            </Button>
          </div>
        </section>

        {/* Contact */}
        <div id="craigslist-contact">
          <ContactSection source="craigslist landing page" />
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </>
  );
};

export default Craigslist;
