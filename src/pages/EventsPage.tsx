import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const EventsPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <EventsSection />
    </main>
    <Footer />
  </div>
);

export default EventsPage;
