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
import ElectricalServices from "./pages/ElectricalServices";
import ElectricalMaintenanceServices from "./pages/ElectricalMaintenanceServices";
import PlumbingMaintenance from "./pages/PlumbingMaintenance";
import CommercialMaintenance from "./pages/CommercialMaintenance";
import PaintingServices from "./pages/PaintingServices";
import PaintingInteriorWorks from "./pages/PaintingInteriorWorks";
import CleaningServices from "./pages/CleaningServices";
import FireSafetyServices from "./pages/FireSafetyServices";
import FacilityMaintenance from "./pages/FacilityMaintenance";
import DigitalMarketing from "./pages/DigitalMarketing";
import GraphicDesignBranding from "./pages/GraphicDesignBranding";
import WebDevelopment from "./pages/WebDevelopment";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import PlumbingServices from "./pages/PlumbingServices";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/structure-cabling" element={<StructureCabling />} />
          <Route path="/network-consulting" element={<NetworkConsulting />} />
          <Route path="/cctv-wifi-access" element={<CCTVWifiAccess />} />
          <Route path="/annual-maintenance" element={<AnnualMaintenance />} />
          <Route path="/maintenance-services" element={<MaintenanceServices />} />
          <Route path="/ac-maintenance" element={<ACMaintenance />} />
          <Route path="/electrical-services" element={<ElectricalServices />} />
          <Route path="/electrical-maintenance-services" element={<ElectricalMaintenanceServices />} />
          <Route path="/plumbing-maintenance" element={<PlumbingMaintenance />} />
          <Route path="/commercial-maintenance" element={<CommercialMaintenance />} />
          <Route path="/painting-services" element={<PaintingServices />} />
          <Route path="/painting-interior-works" element={<PaintingInteriorWorks />} />
          <Route path="/cleaning-services" element={<CleaningServices />} />
          <Route path="/fire-safety-services" element={<FireSafetyServices />} />
          <Route path="/facility-maintenance" element={<FacilityMaintenance />} />
          <Route path="/plumbing-services" element={<PlumbingServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/graphic-design-branding" element={<GraphicDesignBranding />} />
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
