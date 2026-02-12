import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const GalleryPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <GallerySection />
      <div className="section-divider" />
      <SponsorsSection />
      <div className="section-divider" />
      <TestimonialsSection />
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
