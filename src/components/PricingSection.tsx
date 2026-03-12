import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
    features: [
      "Single page website",
      "Mobile friendly",
      "Contact form",
      "Free hosting available",
    ],
  },
  {
    title: "Business Website",
    price: "$750",
    features: [
      "Up to 7 pages",
      "Mobile optimized",
      "SEO friendly structure",
      "Free hosting available",
    ],
    highlighted: true,
  },
  {
    title: "Premium Website",
    price: "$1,250",
    features: [
      "Advanced layout design",
      "Custom styling",
      "Up to 10 pages",
    ],
  },
  {
    title: "Ecommerce Basic",
    price: "$1,650",
    features: [
      "Online store",
      "Payment integration",
      "Up to 10 products",
    ],
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section mb-4 text-center">Clear and Simple Pricing</h2>
        <p className="text-body text-center mb-12 max-w-xl mx-auto">
          No surprises. Choose the package that fits your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 max-w-5xl mx-auto">
          {websitePlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => {
              navigate("/pricing");
              setTimeout(() => window.scrollTo({ top: 0 }), 50);
            }}
            className="h-13 px-10 text-base font-semibold btn-cta rounded-xl"
          >
            View Full Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
