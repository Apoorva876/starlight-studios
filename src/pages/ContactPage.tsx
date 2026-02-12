import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <StarField />
    <Navbar />
    <main className="pt-20">
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
