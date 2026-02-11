import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  "TechCorp India",
  "InnovateLabs",
  "CodeSpace",
  "FutureStack",
  "QuantumBridge",
  "NexGen Solutions",
  "CyberPulse",
  "DataForge",
];

const SponsorsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Partners</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-primary glow-text">Sponsors</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {sponsors.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-center p-6 rounded-xl border border-border bg-card/30 grayscale hover:grayscale-0 hover:border-primary/30 transition-all duration-500 group"
            >
              <span className="font-heading text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors tracking-wider">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
