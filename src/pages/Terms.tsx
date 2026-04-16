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

const Terms = () => {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="section-padding">
          <div className="container-wide max-w-3xl mx-auto">
            <h1 className="heading-section mb-2">
              {isZh ? "服務條款" : "Terms of Service"}
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
              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "1. 服務概述" : "1. Overview of Services"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "Sonykun Design 提供網站設計、品牌識別設計、Logo 設計、電商網站建置，以及相關的數位設計服務。使用我們的網站或委託我們的服務，即表示您同意遵守本服務條款。"
                    : "Sonykun Design provides website design, brand identity design, logo design, ecommerce website development, and related digital design services. By using our website or engaging our services, you agree to these Terms of Service."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "2. 專案條款與流程" : "2. Project Terms & Process"}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "所有專案在正式開始前需確認範圍和報價" : "All projects require a confirmed scope and quote before work begins"}</li>
                  <li>{isZh ? "客戶將在付款前收到網站的即時預覽" : "Clients will receive a live website preview before payment"}</li>
                  <li>{isZh ? "修改輪次視所選方案而定" : "Revision rounds are based on the selected package"}</li>
                  <li>{isZh ? "專案時間取決於範圍和客戶的回覆速度" : "Project timelines depend on scope and client responsiveness"}</li>
                  <li>{isZh ? "客戶須負責在約定的時間內提供所有必要內容（文字、圖片等）" : "Clients are responsible for providing all necessary content (text, images, etc.) within the agreed timeframe"}</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "3. 定價與付款" : "3. Pricing & Payment"}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "價格如本網站定價頁面所列" : "Prices are as listed on our pricing page"}</li>
                  <li>{isZh ? "客戶在預覽和批准設計後才需付款" : "Payment is due after the client previews and approves the design"}</li>
                  <li>{isZh ? "付款可透過安全的第三方處理器（如 Stripe）進行" : "Payments may be processed through secure third-party processors such as Stripe"}</li>
                  <li>{isZh ? "所有價格均以加幣（CAD）計算，除非另有說明" : "All prices are in Canadian Dollars (CAD) unless otherwise stated"}</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "4. 退款政策" : "4. Refund Policy"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "由於我們提供付款前的即時預覽，客戶可以在付款前查看設計。因此，一旦付款完成，通常不提供退款。如果您對交付的作品有任何疑慮，請在付款前與我們聯繫。"
                    : "Because we offer a live preview before payment, clients can review the design before committing. As a result, refunds are generally not available once payment is made. If you have any concerns about the deliverables, please contact us before making payment."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "5. 託管服務" : "5. Hosting"}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "我們的平台提供免費網站託管" : "Free website hosting is available on our platform"}</li>
                  <li>{isZh ? "代管託管每月 $12 或每年 $100，包含基本維護和小幅修改支援" : "Managed hosting is available at $12/month or $100/year and includes basic maintenance and small revision support"}</li>
                  <li>{isZh ? "客戶可以選擇將網站託管在自己的供應商上" : "Clients may choose to host their website with their own provider"}</li>
                  <li>{isZh ? "Sonykun Design 保留在未付費代管託管到期後停止託管服務的權利" : "Sonykun Design reserves the right to discontinue hosting for unpaid managed hosting accounts"}</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "6. 智慧財產權" : "6. Intellectual Property"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "在收到全額付款後，客戶將獲得已完成設計作品的完整所有權和使用權。在收到全額付款之前，所有設計作品的所有權屬於 Sonykun Design。"
                    : "Upon receipt of full payment, the client receives full ownership and usage rights to the completed design work. Until full payment is received, all design work remains the property of Sonykun Design."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "7. 客戶責任" : "7. Client Responsibilities"}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{isZh ? "提供準確且合法的內容用於網站" : "Providing accurate and lawful content for the website"}</li>
                  <li>{isZh ? "及時審核和提供反饋" : "Reviewing and providing feedback in a timely manner"}</li>
                  <li>{isZh ? "確保提供的材料不侵犯第三方權利" : "Ensuring that provided materials do not infringe on third-party rights"}</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "8. 責任限制" : "8. Limitation of Liability"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "Sonykun Design 對因使用我們的服務或網站而產生的任何間接、附帶或後果性損害不承擔責任。我們的最大責任僅限於客戶為特定服務支付的金額。"
                    : "Sonykun Design shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our maximum liability is limited to the amount paid by the client for the specific service."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "9. 條款修改" : "9. Changes to Terms"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "我們保留隨時修改本服務條款的權利。變更將在本頁面上公佈後生效。繼續使用我們的服務即表示您接受更新後的條款。"
                    : "We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted on this page. Continued use of our services constitutes acceptance of the updated terms."}
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-bold text-foreground mb-3">
                  {isZh ? "10. 聯絡我們" : "10. Contact Us"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isZh
                    ? "如果您對本服務條款有任何疑問，請聯絡我們："
                    : "If you have any questions about these Terms of Service, please contact us:"}
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
              </section>
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

export default Terms;
