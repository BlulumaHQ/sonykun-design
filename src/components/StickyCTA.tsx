import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageSquare } from "lucide-react";

const StickyCTA = () => {
  const { lang } = useLanguage();
  const label = lang === "zh" ? "免費諮詢" : "Book a Free Consultation";

  return (
    <motion.div
      className="fixed right-4 md:right-6 z-50"
      style={{ top: "60%" }}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
    >
      <Link
        to="/contact"
        className="group flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm font-medium"
      >
        <MessageSquare className="w-4 h-4 shrink-0" />
        <span className="hidden md:inline">{label}</span>
        <span className="md:hidden">{lang === "zh" ? "諮詢" : "Contact"}</span>
      </Link>
    </motion.div>
  );
};

export default StickyCTA;
