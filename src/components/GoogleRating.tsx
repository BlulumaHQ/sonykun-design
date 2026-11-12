import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Google review summary for the hero. Fill these in from the Google Business Profile;
 * the badge stays hidden until rating and count are set (never show made-up numbers).
 */
export const GOOGLE_REVIEWS: { rating: number | null; count: number | null; url: string | null } = {
  rating: null, // e.g. 4.9
  count: null, // e.g. 38
  url: null, // link to the Google reviews page
};

const GoogleRating = ({ className = "" }: { className?: string }) => {
  const { lang } = useLanguage();
  const { rating, count, url } = GOOGLE_REVIEWS;
  if (!rating || !count) return null;
  const label = lang === "zh" ? `Google 評價 ${rating.toFixed(1)} 分・${count} 則評論` : `${rating.toFixed(1)} on Google · ${count} reviews`;
  const content = (
    <>
      <span className="flex text-amber-500" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="h-4 w-4" fill={i < Math.round(rating) ? "currentColor" : "none"} />
        ))}
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </>
  );
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 hover:opacity-80 ${className}`}>{content}</a>
  ) : (
    <div className={`inline-flex items-center gap-2 ${className}`}>{content}</div>
  );
};

export default GoogleRating;
