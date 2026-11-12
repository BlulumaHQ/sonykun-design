import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ZH_PREFIX, langFromPath } from "@/lib/locale";

const basename = typeof window !== "undefined" && langFromPath(window.location.pathname) === "zh" ? ZH_PREFIX : undefined;
import AnimatedRoutes from "@/components/AnimatedRoutes";
import MobileBottomCTA from "@/components/MobileBottomCTA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <AnimatedRoutes />
          <MobileBottomCTA />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
