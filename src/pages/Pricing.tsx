import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Check, Shield, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard = ({ title, price, features, highlighted }: PricingCardProps) => (
  <div
    className={`rounded-2xl p-7 border flex flex-col h-full ${
      highlighted
        ? "border-secondary/30 bg-secondary/[0.03] shadow-sm"
        : "border-border bg-background"
    }`}
  >
    <h3 className="font-display text-lg font-bold text-foreground mb-1">{title}</h3>
    <p className="text-3xl font-bold text-foreground mb-5">{price}</p>
    <ul className="space-y-3 flex-1">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
          <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

const websitePlans = [
  {
    title: "Basic Website",
    price: "$375",
    features: ["Single page website", "Mobile friendly", "Contact form", "Free hosting available"],
  },
  {
    title: "Business Website",
    price: "$750",
    features: ["Up to 7 pages", "Mobile optimized", "SEO friendly structure", "Free hosting available"],
    highlighted: true,
  },
  {
    title: "Premium Website",
    price: "$1,250",
    features: ["Advanced layout design", "Custom styling", "Up to 10 pages"],
  },
  {
    title: "Ecommerce Basic",
    price: "$1,650",
    features: ["Online store", "Payment integration", "Up to 10 products"],
  },
];

const logoPlans = [
  {
    title: "Logo Basic",
    price: "$375",
    features: ["3 concepts", "3 revision rounds", "Vector files included"],
  },
  {
    title: "Logo Growth",
    price: "$650",
    features: ["Logo design", "Color palette", "Typography recommendation", "Mini brand guide"],
    highlighted: true,
  },
  {
    title: "Logo Premium",
    price: "$1,275",
    features: ["Full brand identity system", "Logo suite", "Color system", "Typography system", "Brand guideline"],
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact-section";
  };

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Website Packages */}
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-section mb-4 text-center">Full Pricing</h1>
            <p className="text-body text-center mb-12 max-w-xl mx-auto">
              Transparent pricing for every service we offer.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Website Design
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 max-w-5xl mx-auto">
              {websitePlans.map((plan) => (
                <PricingCard key={plan.title} {...plan} />
              ))}
            </div>

            {/* Logo Packages */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Logo Design
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16 max-w-4xl mx-auto">
              {logoPlans.map((plan) => (
                <PricingCard key={plan.title} {...plan} />
              ))}
            </div>

            {/* Hosting */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Hosting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">FREE Hosting</h3>
                </div>
                <p className="text-3xl font-bold text-foreground mb-2">$0</p>
                <p className="text-muted-foreground">
                  Your website will be hosted on our platform at no cost.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-8 border border-secondary/20 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Server className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">Managed Hosting</h3>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">
                  $12<span className="text-base font-normal text-muted-foreground">/month</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">or $100/year</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hosting management</li>
                  <li>• Basic maintenance</li>
                  <li>• Small revision support</li>
                </ul>
              </div>
            </div>

            {/* Add-ons */}
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Add-ons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12">
              <div className="rounded-2xl p-7 border border-border bg-background">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Copywriting</h3>
                <p className="text-3xl font-bold text-foreground mb-3">$65<span className="text-base font-normal text-muted-foreground"> / page</span></p>
                <p className="text-muted-foreground">Professional copy for your website pages.</p>
              </div>
              <div className="rounded-2xl p-7 border border-border bg-background">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Vector Logo Fix</h3>
                <p className="text-3xl font-bold text-foreground mb-3">$100</p>
                <p className="text-muted-foreground">Convert your existing logo to high-quality vector format.</p>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-13 px-10 text-base font-semibold btn-cta rounded-xl"
              >
                <Eye className="w-5 h-5 mr-2" />
                Get Your Free Website Preview
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </>
  );
};

export default Pricing;
