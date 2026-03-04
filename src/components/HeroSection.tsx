import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const words = ["Branding", "Websites", "Marketing Design"];

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-32 md:pt-36">
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
          
          {/* Animated accent bar */}
          <motion.div
            className="w-16 h-1 mb-6"
            style={{ backgroundColor: "hsl(var(--secondary))" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 2.3, ease: "easeOut" }}
          />

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

      {/* Animated geometric accents */}
      <motion.div
        className="hidden md:block absolute right-20 top-48 w-24 h-24 border border-secondary/10"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1.5, delay: 2.8 }}
        style={{ transform: "rotate(45deg)" }}
      />
      <motion.div
        className="hidden md:block absolute right-36 top-72 w-3 h-3 rounded-full"
        style={{ backgroundColor: "hsl(var(--secondary) / 0.3)" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
      />
    </section>
  );
};

export default HeroSection;
