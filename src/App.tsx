
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Index from "./pages/Index";
import About from "./pages/About";
import DeepCleaning from "./pages/DeepCleaning";
import Housekeeping from "./pages/Housekeeping";
import ATMMaintenance from "./pages/ATMMaintenance";
import AMCCorporates from "./pages/AMCCorporates";
import PostConstruction from "./pages/PostConstruction";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { QuoteModalProvider } from "./contexts/QuoteModalContext";
import QuoteModal from "./components/QuoteModal";
import { useQuoteModal } from "./contexts/QuoteModalContext";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOpen, closeQuoteModal } = useQuoteModal();
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/deep-cleaning" element={<DeepCleaning />} />
        <Route path="/housekeeping-workforce" element={<Housekeeping />} />
        <Route path="/housekeeping" element={<Navigate to="/housekeeping-workforce" replace />} />
        <Route path="/atm-maintenance" element={<ATMMaintenance />} />
        <Route path="/amc-corporates" element={<AMCCorporates />} />
        <Route path="/post-construction" element={<PostConstruction />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <QuoteModal open={isOpen} onOpenChange={closeQuoteModal} />
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <QuoteModalProvider>
            <AppContent />
          </QuoteModalProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
