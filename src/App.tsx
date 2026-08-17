import SpaceBackground from "./components/SpaceBackground";
import CustomCursor from "./components/CustomCursor";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import TimelinePage from "./pages/TimelinePage";
import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import AlumniPage from "./pages/AlumniPage";
import ReportsPage from "./pages/ReportsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <>
    {/* 🌌 Background */}
    <SpaceBackground />
    <CustomCursor />

    {/* 🧩 App Content */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/journey" element={<TimelinePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/alumni" element={<AlumniPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;