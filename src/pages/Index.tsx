import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarField />
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <EventsSection />
        <div className="section-divider" />
        <TimelineSection />
        <div className="section-divider" />
        <TeamSection />
        <div className="section-divider" />
        <GallerySection />
        <div className="section-divider" />
        <SponsorsSection />
        <div className="section-divider" />
        <TestimonialsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
