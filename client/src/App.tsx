import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PCBDesign from "@/pages/services/PCBDesign";
import WebDesign from "@/pages/services/WebDesign";
import HardwareDevelopment from "@/pages/services/HardwareDevelopment";
import FirmwareProgramming from "@/pages/services/FirmwareProgramming";
import AppDevelopment from "@/pages/services/AppDevelopment";
import MilkAnalyzer from "@/pages/solutions/MilkAnalyzer";
import DPUAMCUSystems from "@/pages/solutions/DPUAMCUSystems";
import CaseStudies from "@/pages/CaseStudies";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";

function Router() {
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      
      {/* Design Services */}
      <Route path="/services/design/pcb-design" component={PCBDesign} />
      <Route path="/services/design/web-design" component={WebDesign} />
      
      {/* Development Services */}
      <Route path="/services/development/firmware" component={FirmwareProgramming} />
      <Route path="/services/development/hardware" component={HardwareDevelopment} />
      <Route path="/services/development/app-development" component={AppDevelopment} />
      
      {/* Backward compatibility redirects for old service routes */}
      <Route path="/services/pcb-design" component={PCBDesign} />
      <Route path="/services/hardware-development" component={HardwareDevelopment} />
      <Route path="/services/firmware-programming" component={FirmwareProgramming} />
      <Route path="/services/app-development" component={AppDevelopment} />
      
      {/* Solutions */}
      <Route path="/solutions/milk-analyzer" component={MilkAnalyzer} />
      <Route path="/solutions/dpu-amcu-systems" component={DPUAMCUSystems} />
      
      {/* Legal & Other */}
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
