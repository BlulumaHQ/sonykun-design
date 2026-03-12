import { Check } from "lucide-react";

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
        ? "border-primary/30 bg-primary/[0.03] shadow-sm"
        : "border-border bg-background"
    }`}
  >
    <h3 className="font-display text-lg font-bold text-foreground mb-1">{title}</h3>
    <p className="text-3xl font-bold text-foreground mb-5">{price}</p>
    <ul className="space-y-3 flex-1">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
      "SEO-friendly structure",
      "Mobile optimized",
      "Free hosting available",
    ],
    highlighted: true,
  },
  {
    title: "Premium Website",
    price: "$1,250",
    features: [
      "Custom design layout",
      "Advanced branding presentation",
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

const logoPlans = [
  {
    title: "Logo Basic",
    price: "$375",
    features: [
      "3 concepts",
      "3 revision rounds",
      "Vector files included",
    ],
  },
  {
    title: "Logo Growth",
    price: "$650",
    features: [
      "Logo design",
      "Color palette",
      "Typography recommendation",
      "Mini brand guide",
    ],
    highlighted: true,
  },
  {
    title: "Logo Premium",
    price: "$1,275",
    features: [
      "Full brand identity system",
      "Logo suite",
      "Color system",
      "Typography system",
      "Brand guideline",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section mb-4 text-center">Clear and Simple Pricing</h2>
        <p className="text-body text-center mb-12 max-w-xl mx-auto">
          No surprises. Choose the package that fits your business.
        </p>

        {/* Website Design Pricing */}
        <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
          Website Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 max-w-5xl mx-auto">
          {websitePlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Logo Design Pricing */}
        <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
          Logo Design
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {logoPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
