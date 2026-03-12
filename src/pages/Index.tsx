import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TransparentPricing from "@/components/TransparentPricing";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import FloatingContactButton from "@/components/FloatingContactButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TransparentPricing />
        <PortfolioGrid />
        <TestimonialsSection />
        <PricingSection />
        <div id="contact-section">
          <ContactSection source="sonykun home form" />
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </>
  );
};

export default Index;
