import { Toaster } from "@/core/ui/toaster";
import { Toaster as Sonner } from "@/core/ui/sonner";
import { TooltipProvider } from "@/core/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./views/Home";
import AllProjects from "./views/AllProjects";
import NotFound from "./views/NotFound";
import ThemeToggle from "./core/theme/ThemeToggle";
import ScrollToTop from "./core/utils/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
