import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-hero mb-6">Contact</h1>
            <p className="text-body text-lg max-w-xl mb-0">
              If you would like to discuss a project or request a quote, please
              send a message.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
