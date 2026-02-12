import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const TeamPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <TeamSection />
    </main>
    <Footer />
  </div>
);

export default TeamPage;
