import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useLanguage } from "@/i18n/LanguageContext";

const ThankYou = () => {
  const { lang } = useLanguage();

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-[680px] mx-auto px-6 text-center py-20">
          <h1 className="heading-section mb-6">
            {lang === "zh" ? "謝謝您" : "Thank You"}
          </h1>
          <p className="text-body mb-4">
            {lang === "zh"
              ? "您的訊息已收到。"
              : "Your message has been received."}
          </p>
          <p className="text-body mb-10">
            {lang === "zh"
              ? "我會盡快審閱您的需求並回覆您。"
              : "I will review your inquiry and get back to you as soon as possible."}
          </p>
          <Link to="/">
            <Button size="lg" className="h-12 px-10 text-base font-medium magnetic-btn rounded-xl">
              {lang === "zh" ? "返回首頁" : "Back to Home"}
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
