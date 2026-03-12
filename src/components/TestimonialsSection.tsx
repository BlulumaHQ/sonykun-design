import { useState } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonialData = {
  en: [
    {
      quote: "Working with Sony was very straightforward. We needed a simple professional website and he delivered exactly what we were looking for.",
      name: "Dr. Lee",
      company: "Friendly Dental",
      url: "https://friendlydental.ca/",
    },
    {
      quote: "Our old website looked outdated and Sony helped modernize it quickly. The new site looks far more professional and our patients find it much easier to use.",
      name: "Kevin Chen",
      company: "KChen Construction",
      url: "https://one-park-home.bluluma.com/",
    },
    {
      quote: "I appreciated the transparency about pricing. There were no hidden costs and the process was smooth from start to finish.",
      name: "Michael Tran",
      company: "Small Business Owner",
      url: null,
    },
    {
      quote: "Sony redesigned our clinic website and it now looks clean and modern. Patients have commented that the site is easier to navigate.",
      name: "Dr. Sarah Kim",
      company: "Little Mountain Dental",
      url: "http://littlemountain.bluluma.com/",
    },
    {
      quote: "We needed a website that looked trustworthy for our real estate clients. Sony understood the assignment and delivered a polished result on time.",
      name: "Brian Nguyen",
      company: "BTN Real Estate Services",
      url: "https://btn.bluluma.com/",
    },
    {
      quote: "The free hosting option was a big plus for us. We got a professional website without worrying about ongoing monthly fees.",
      name: "Amy Wong",
      company: "Local Retail Business",
      url: null,
    },
  ],
  zh: [
    {
      quote: "與 Sony 合作非常順利。我們需要一個簡單專業的網站，他完全做到了我們期望的效果。",
      name: "Dr. Lee",
      company: "Friendly Dental",
      url: "https://friendlydental.ca/",
    },
    {
      quote: "我們的舊網站看起來很過時，Sony 很快就幫我們完成了現代化。新網站看起來專業多了，病人也覺得更容易使用。",
      name: "Kevin Chen",
      company: "KChen Construction",
      url: "https://one-park-home.bluluma.com/",
    },
    {
      quote: "我很欣賞定價方面的透明度。沒有任何隱藏費用，整個過程從頭到尾都很順利。",
      name: "Michael Tran",
      company: "小型企業主",
      url: null,
    },
    {
      quote: "Sony 重新設計了我們診所的網站，現在看起來乾淨又現代。病人們都說網站更容易瀏覽了。",
      name: "Dr. Sarah Kim",
      company: "Little Mountain Dental",
      url: "http://littlemountain.bluluma.com/",
    },
    {
      quote: "我們需要一個看起來值得信賴的房地產網站。Sony 理解了我們的需求，按時交付了出色的成果。",
      name: "Brian Nguyen",
      company: "BTN Real Estate Services",
      url: "https://btn.bluluma.com/",
    },
    {
      quote: "免費託管對我們來說是一大優勢。我們獲得了一個專業的網站，不用擔心每月的持續費用。",
      name: "Amy Wong",
      company: "本地零售企業",
      url: null,
    },
  ],
};

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  const testimonials = testimonialData[lang];
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const currentItems = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="heading-section mb-10 text-center">
          {isZh ? "客戶評價" : "What Our Clients Say"}
        </h2>

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
                    {isZh ? "查看網站" : "Visit Website"}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30"
            aria-label={isZh ? "上一頁" : "Previous testimonials"}
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
                aria-label={`${isZh ? "前往第" : "Go to slide "}${i + 1}${isZh ? "頁" : ""}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30"
            aria-label={isZh ? "下一頁" : "Next testimonials"}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
