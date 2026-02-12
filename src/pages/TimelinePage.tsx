import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";
import bgJourney from "@/assets/bg-journey.png";

const TimelinePage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={bgJourney} alt="" className="w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
    </div>
    <StarField />
    <Navbar />
    <main className="pt-20 relative z-10">
      <TimelineSection />
    </main>
    <Footer />
  </div>
);

export default TimelinePage;
