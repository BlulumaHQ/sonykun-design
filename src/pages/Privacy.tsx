import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import { useLanguage } from "@/i18n/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const lastUpdatedZh = new Date().toLocaleDateString("zh-TW", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const Privacy = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="section-padding">
          <div className="container-wide max-w-3xl mx-auto">
            <h1 className="heading-section mb-2">
              {isZh ? "隱私政策" : "Privacy Policy"}
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              {isZh ? `最後更新：${lastUpdatedZh}` : `Last updated: ${lastUpdated}`}
            </p>

            <motion.div
              className="prose prose-slate max-w-none space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "1. 簡介" : "1. Introduction"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "Sonykun Design（以下簡稱「我們」）重視您的隱私。本隱私政策說明我們在您使用我們的網站和服務時，如何收集、使用和保護您的個人資訊。"
                    : "Sonykun Design (\"we\", \"us\", or \"our\") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services."}
                </p>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "2. 我們收集的資訊" : "2. Information We Collect"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isZh ? "我們可能收集以下類型的資訊：" : "We may collect the following types of information:"}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "透過聯絡表單提交的姓名和電子郵件地址" : "Name and email address submitted through contact forms"}</li>
                  <li>{isZh ? "電話號碼（如您選擇提供）" : "Phone number (if you choose to provide it)"}</li>
                  <li>{isZh ? "專案詳情和訊息內容" : "Project details and message content"}</li>
                  <li>{isZh ? "付款資訊（透過安全的第三方支付處理器處理）" : "Payment information (processed through secure third-party payment processors)"}</li>
                  <li>{isZh ? "瀏覽器類型、IP 地址和瀏覽數據等使用資料" : "Usage data such as browser type, IP address, and browsing data"}</li>
                </ul>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "3. 我們如何使用您的資訊" : "3. How We Use Your Information"}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "回覆您的詢問和專案請求" : "To respond to your inquiries and project requests"}</li>
                  <li>{isZh ? "提供網站設計和相關服務" : "To provide website design and related services"}</li>
                  <li>{isZh ? "處理付款和管理帳單" : "To process payments and manage billing"}</li>
                  <li>{isZh ? "發送與專案相關的更新通知" : "To send project-related updates"}</li>
                  <li>{isZh ? "改善我們的網站和服務" : "To improve our website and services"}</li>
                </ul>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "4. 付款處理" : "4. Payment Processing"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "付款透過安全的第三方支付處理器（如 Stripe）處理。我們不會在我們的伺服器上儲存您的信用卡號碼或完整的付款詳細資訊。所有付款交易均經過加密和安全處理。"
                    : "Payments are processed through secure third-party payment processors such as Stripe. We do not store your credit card numbers or full payment details on our servers. All payment transactions are encrypted and handled securely."}
                </p>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "5. 第三方服務" : "5. Third-Party Services"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isZh ? "我們可能使用以下第三方服務：" : "We may use the following third-party services:"}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "Formspree — 處理聯絡表單提交" : "Formspree — for processing contact form submissions"}</li>
                  <li>{isZh ? "Stripe — 處理安全付款" : "Stripe — for processing secure payments"}</li>
                  <li>{isZh ? "網站託管服務供應商" : "Website hosting providers"}</li>
                  <li>{isZh ? "分析工具（如適用）" : "Analytics tools (if applicable)"}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  {isZh
                    ? "這些服務有各自的隱私政策，管理其對您資訊的使用方式。"
                    : "These services have their own privacy policies governing their use of your information."}
                </p>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "6. Cookies 與分析" : "6. Cookies & Analytics"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "我們的網站可能使用 cookies 和類似技術來改善您的瀏覽體驗並收集匿名使用數據。您可以透過瀏覽器設定控制 cookies。停用 cookies 可能會影響網站的部分功能。"
                    : "Our website may use cookies and similar technologies to improve your browsing experience and collect anonymous usage data. You can control cookies through your browser settings. Disabling cookies may affect some functionality of the website."}
                </p>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "7. 資料安全" : "7. Data Security"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "我們採取合理的安全措施來保護您的個人資訊免受未經授權的存取、更改或破壞。然而，沒有任何網路傳輸方式能保證 100% 安全。"
                    : "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is guaranteed to be 100% secure."}
                </p>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "8. 資料保留" : "8. Data Retention"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "我們會在為您提供服務所需的期間內保留您的個人資訊，或根據法律要求保留。您可以隨時要求刪除您的資料。"
                    : "We retain your personal information for as long as necessary to provide our services to you, or as required by law. You may request deletion of your data at any time."}
                </p>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "9. 您的權利" : "9. Your Rights"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {isZh ? "您有權：" : "You have the right to:"}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "查閱我們持有的關於您的個人資訊" : "Access the personal information we hold about you"}</li>
                  <li>{isZh ? "要求更正不準確的資料" : "Request correction of inaccurate data"}</li>
                  <li>{isZh ? "要求刪除您的個人資料" : "Request deletion of your personal data"}</li>
                  <li>{isZh ? "退出行銷通訊" : "Opt out of marketing communications"}</li>
                </ul>
              </motion.section>

              <motion.section variants={fadeUp}>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "10. 聯絡我們" : "10. Contact Us"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "如果您對本隱私政策有任何疑問，請透過以下方式聯絡我們："
                    : "If you have any questions about this Privacy Policy, please contact us:"}
                </p>
                <ul className="list-none pl-0 mt-3 space-y-1 text-muted-foreground">
                  <li>
                    Email:{" "}
                    <a href="mailto:support@sonykundesign.com" className="text-foreground hover:text-primary transition-colors">
                      support@sonykundesign.com
                    </a>
                  </li>
                  <li>
                    {isZh ? "電話" : "Phone"}:{" "}
                    <a href="tel:7786535353" className="text-foreground hover:text-primary transition-colors">
                      (778) 653-5353
                    </a>
                  </li>
                </ul>
              </motion.section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </>
  );
};

export default Privacy;
