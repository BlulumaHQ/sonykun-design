import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Sticky bottom CTA bar (mobile only).
 * Primary: Get a free quote → /contact
 * Secondary: Call now → tel:
 */
const MobileBottomCTA = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const { pathname } = useLocation();

  // Hide on the contact page itself to avoid duplicating the form CTA.
  if (pathname.startsWith("/contact") || pathname.startsWith("/thank-you")) {
    return null;
  }

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-background/95 backdrop-blur-md border-t border-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      role="region"
      aria-label={isZh ? "聯絡操作" : "Contact actions"}
    >
      <div className="flex items-stretch gap-2 px-3 py-2.5">
        <a
          href="tel:6042621168"
          className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border bg-background text-foreground text-sm font-medium px-4 py-3 active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" strokeWidth={2} />
          <span>{isZh ? "致電" : "Call"}</span>
        </a>
        <Link
          to="/contact"
          className="flex-[1.4] flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 shadow-md hover:bg-primary-hover active:scale-[0.98] transition-all"
        >
          <span>{isZh ? "免費取得報價" : "Get Free Quote"}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomCTA;
