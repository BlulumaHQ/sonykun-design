import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-wide">
            <motion.h1
              className="heading-hero mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              About<br />Sony Lin
            </motion.h1>

            <motion.div
              className="max-w-3xl space-y-8"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            >
              {[
                "Sony Lin is a Vancouver-based designer with more than twenty years of experience in branding, website design, and marketing graphics.",
                "After graduating from Emily Carr University in 2002, he began working with businesses to develop brand identities, digital platforms, and marketing materials used across print and digital media.",
                "His work focuses on creating clean visual systems that help businesses communicate clearly and present themselves with confidence.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className={i === 0 ? "text-subtitle" : "text-body text-lg"}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
