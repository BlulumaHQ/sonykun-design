import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import SiteHead from "./SiteHead";
import Index from "@/pages/Index";
import Work, { LegacyPortfolioRedirect } from "@/pages/Work";
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
    <>
    <SiteHead />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={wrap(<Index />)} />
        <Route path="/work" element={<LegacyPortfolioRedirect />} />
        <Route path="/work/:slug" element={<LegacyPortfolioRedirect />} />
        <Route path="/portfolio" element={wrap(<Work />)} />
        <Route path="/portfolio/:category" element={wrap(<Work />)} />
        <Route path="/portfolio/:category/page/:page" element={wrap(<Work />)} />
        <Route path="/portfolio/page/:page" element={wrap(<Work />)} />
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
    </>
  );
};

export default AnimatedRoutes;
