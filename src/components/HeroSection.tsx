import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const words = ["Branding", "Websites", "Marketing Design"];

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-24">
      <div className="container-wide">
        <div className="max-w-5xl">
          <h1 className="heading-hero mb-6">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className={`block ${i === 2 ? "text-secondary" : ""}`}
                initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 1.9 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-subtitle max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            Personal portfolio of Sony Lin, a Vancouver-based designer
            specializing in branding, website design, and marketing materials.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <Button asChild size="lg" className="h-14 px-10 text-base font-medium magnetic-btn">
              <Link to="/work">View Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-base font-medium border-foreground text-foreground hover:bg-foreground hover:text-background magnetic-btn">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
