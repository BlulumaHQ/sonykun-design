import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

const Contact = () => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-28">
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
