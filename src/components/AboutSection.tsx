import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Atom, FlaskConical, Telescope, Cpu } from "lucide-react";

const features = [
  { icon: Atom, label: "Research" },
  { icon: FlaskConical, label: "Innovation" },
  { icon: Telescope, label: "Discovery" },
  { icon: Cpu, label: "Technology" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Where Science Meets{" "}
              <span className="text-primary glow-text">Innovation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
             The Science Association of Malnad College of Engineering, Hassan is 
             a student-led academic organization dedicated to promoting scientific 
             knowledge and technological awareness.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
             We provide a platform for students to explore science beyond classrooms through 
             learning-focused activities, discussions, and technical exposure.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors"
                >
                  <f.icon size={24} className="text-primary" />
                  <span className="text-xs font-medium text-muted-foreground tracking-wider">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="card-space p-8 rounded-2xl border border-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Members" },
                  { value: "10+", label: "Events Conducted" },
                  { value: "15+", label: "Years of Legacy" },
                  { value: "0+", label: "Awards Won" },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center p-4">
                    <p className="font-heading text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
