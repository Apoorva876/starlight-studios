import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

const TimelinePage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <TimelineSection />
    </main>
    <Footer />
  </div>
);

export default TimelinePage;
