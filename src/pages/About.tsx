import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-wide">
            <h1 className="heading-hero mb-16">
              About<br />Sony Lin
            </h1>

            <div className="max-w-3xl space-y-8">
              <p className="text-subtitle">
                Sony Lin is a Vancouver-based designer with more than twenty
                years of experience in branding, website design, and marketing
                graphics.
              </p>
              <p className="text-body text-lg">
                After graduating from Emily Carr University in 2002, he began
                working with businesses to develop brand identities, digital
                platforms, and marketing materials used across print and digital
                media.
              </p>
              <p className="text-body text-lg">
                His work focuses on creating clean visual systems that help
                businesses communicate clearly and present themselves with
                confidence.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
