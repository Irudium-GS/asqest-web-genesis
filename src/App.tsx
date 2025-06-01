
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import StructureCabling from "./pages/StructureCabling";
import NetworkConsulting from "./pages/NetworkConsulting";
import CCTVWifiAccess from "./pages/CCTVWifiAccess";
import AnnualMaintenance from "./pages/AnnualMaintenance";
import MaintenanceServices from "./pages/MaintenanceServices";
import ACMaintenance from "./pages/ACMaintenance";
import ElectricalMaintenance from "./pages/ElectricalMaintenance";
import CommercialMaintenance from "./pages/CommercialMaintenance";
import PaintingServices from "./pages/PaintingServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/structure-cabling" element={<StructureCabling />} />
          <Route path="/network-consulting" element={<NetworkConsulting />} />
          <Route path="/cctv-wifi-access" element={<CCTVWifiAccess />} />
          <Route path="/annual-maintenance" element={<AnnualMaintenance />} />
          <Route path="/maintenance-services" element={<MaintenanceServices />} />
          <Route path="/ac-maintenance" element={<ACMaintenance />} />
          <Route path="/electrical-maintenance" element={<ElectricalMaintenance />} />
          <Route path="/commercial-maintenance" element={<CommercialMaintenance />} />
          <Route path="/painting-services" element={<PaintingServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
