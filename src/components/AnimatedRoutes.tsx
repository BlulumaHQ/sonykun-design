import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Index from "@/pages/Index";
import Work from "@/pages/Work";
import ProjectDetail from "@/pages/ProjectDetail";
import CaseStudyIndex from "@/pages/CaseStudyIndex";
import CaseStudy from "@/pages/CaseStudy";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import Craigslist from "@/pages/Craigslist";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import ThankYou from "@/pages/ThankYou";

const wrap = (el: JSX.Element) => <PageTransition>{el}</PageTransition>;

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={wrap(<Index />)} />
        <Route path="/work" element={wrap(<Work />)} />
        <Route path="/work/:slug" element={wrap(<ProjectDetail />)} />
        <Route path="/portfolio" element={wrap(<Work />)} />
        <Route path="/portfolio/:slug" element={wrap(<ProjectDetail />)} />
        <Route path="/case-study" element={wrap(<CaseStudyIndex />)} />
        <Route path="/case-study/:slug" element={wrap(<CaseStudy />)} />
        <Route path="/services" element={wrap(<Services />)} />
        <Route path="/contact" element={wrap(<Contact />)} />
        <Route path="/pricing" element={wrap(<Pricing />)} />
        <Route path="/craigslist" element={wrap(<Craigslist />)} />
        <Route path="/privacy" element={wrap(<Privacy />)} />
        <Route path="/terms" element={wrap(<Terms />)} />
        <Route path="/thank-you" element={wrap(<ThankYou />)} />
        <Route path="*" element={wrap(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
