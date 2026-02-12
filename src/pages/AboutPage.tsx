import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import bgAbout from "@/assets/bg-about.png";

const AboutPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={bgAbout} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
    </div>
    <StarField />
    <Navbar />
    <main className="pt-20 relative z-10">
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
