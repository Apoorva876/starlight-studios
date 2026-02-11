import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Mic, Trophy, Rocket } from "lucide-react";

const events = [
  {
    icon: Code,
    category: "Hackathons",
    title: "CodeNova",
    desc: "24-hour national-level hackathon challenging teams to build innovative solutions.",
    color: "primary" as const,
  },
  {
    icon: Cpu,
    category: "Workshops",
    title: "TechForge",
    desc: "Hands-on workshops on AI, IoT, robotics, and emerging technologies.",
    color: "secondary" as const,
  },
  {
    icon: Mic,
    category: "Technical Talks",
    title: "InnoSpeak",
    desc: "Industry experts and researchers share cutting-edge insights and breakthroughs.",
    color: "primary" as const,
  },
  {
    icon: Trophy,
    category: "Competitions",
    title: "BrainStorm",
    desc: "Inter-college competitions in coding, circuit design, and scientific reasoning.",
    color: "secondary" as const,
  },
  {
    icon: Rocket,
    category: "Space & Innovation",
    title: "CosmicLab",
    desc: "Space tech, astronomy nights, rocket model building, and astrophysics seminars.",
    color: "primary" as const,
  },
  {
    icon: Code,
    category: "Workshops",
    title: "DevSprint",
    desc: "Full-stack development bootcamp with real-world project deployment.",
    color: "secondary" as const,
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Our Events</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Flagship <span className="text-primary glow-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-space p-6 rounded-xl border border-border group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                event.color === "primary"
                  ? "bg-primary/10 text-primary"
                  : "bg-secondary/10 text-secondary"
              }`}>
                <event.icon size={24} />
              </div>
              <p className={`text-xs font-heading tracking-[0.2em] uppercase mb-2 ${
                event.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                {event.category}
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{event.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
