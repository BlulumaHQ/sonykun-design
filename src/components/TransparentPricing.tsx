import { Shield, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const TransparentPricing = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="heading-section mb-4">
            {isZh ? "透明定價，無隱藏費用。" : "Transparent Pricing. No Hidden Fees."}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
        >
          {/* Free Hosting */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -4 }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {isZh ? "免費託管" : "FREE Hosting"}
              </h3>
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">$0</p>
            <p className="text-muted-foreground">
              {isZh
                ? "您的網站可免費架設於我們的平台上，因此不需要支付任何每月主機費用，除非您希望我們管理您的網站並協助處理更新或小幅修改。"
                : "Your website can be hosted on our platform at no cost, so there is no required monthly hosting fee unless you want us to manage your website and handle updates or small revisions."}
            </p>
          </motion.div>

          {/* Managed Hosting */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -4 }}
            className="bg-background rounded-2xl p-8 border border-secondary/20 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Server className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {isZh ? "代管託管" : "Managed Hosting"}
              </h3>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              $12<span className="text-base font-normal text-muted-foreground">{isZh ? "/月" : "/month"}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-4">{isZh ? "或 $100/年" : "or $100/year"}</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span> {isZh ? "託管管理" : "Hosting management"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span> {isZh ? "基本維護" : "Basic maintenance"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span> {isZh ? "小幅修改支援" : "Small revision support"}
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransparentPricing;
