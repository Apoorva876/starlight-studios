import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Contact <span className="text-primary glow-text">Us</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="btn-glow inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wider px-8 py-3 rounded-lg"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground mt-1">Malnad College of Engineering, Hassan, Karnataka 573202</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground mt-1">scienceassociation@mcehassan.ac.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground mt-1">+91 8172 245XXX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
