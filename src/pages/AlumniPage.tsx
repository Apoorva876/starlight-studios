import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import AlumniSection from "@/components/AlumniSection";
import Footer from "@/components/Footer";

const AlumniPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <AlumniSection />
    </main>
    <Footer />
  </div>
);

export default AlumniPage;
