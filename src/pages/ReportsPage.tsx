import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import ReportsSection from "@/components/ReportsSection";
import Footer from "@/components/Footer";

const ReportsPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <ReportsSection />
    </main>
    <Footer />
  </div>
);

export default ReportsPage;
