import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const PricingCard = ({ title, price, features, highlighted, badge }: PricingCardProps) => (
  <div
    className={`rounded-2xl p-7 border flex flex-col h-full relative ${
      highlighted
        ? "border-primary/30 bg-primary/[0.03] shadow-sm"
        : "border-border bg-background"
    }`}
  >
    {badge && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
          {badge}
        </span>
      </div>
    )}
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

const PricingSection = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  const websitePlans = [
    {
      title: isZh ? "基本網站" : "Basic Website",
      price: "$375",
      features: isZh
        ? ["單頁網站", "手機友好", "聯絡表單", "免費託管"]
        : ["Single page website", "Mobile friendly", "Contact form", "Free hosting available"],
    },
    {
      title: isZh ? "商業網站" : "Business Website",
      price: "$750",
      features: isZh
        ? ["最多 7 頁", "手機優化", "SEO 友好結構", "免費託管"]
        : ["Up to 7 pages", "Mobile optimized", "SEO friendly structure", "Free hosting available"],
      highlighted: true,
      badge: isZh ? "最受歡迎" : "Most Popular",
    },
    {
      title: isZh ? "進階網站" : "Premium Website",
      price: "$1,250",
      features: isZh
        ? ["進階版面設計", "客製樣式", "最多 10 頁"]
        : ["Advanced layout design", "Custom styling", "Up to 10 pages"],
    },
    {
      title: isZh ? "電商網站" : "Ecommerce Basic",
      price: "$1,650",
      features: isZh
        ? ["線上商店", "付款整合", "最多 10 件商品"]
        : ["Online store", "Payment integration", "Up to 10 products"],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section mb-4 text-center">
          {isZh ? "清晰簡單的定價" : "Clear and Simple Pricing"}
        </h2>
        <p className="text-body text-center mb-12 max-w-xl mx-auto">
          {isZh ? "無額外費用。選擇適合您業務的方案。" : "No surprises. Choose the package that fits your business."}
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
            {isZh ? "查看完整定價" : "View Full Pricing"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
