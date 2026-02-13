import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Mic, Award, FlaskConical, Telescope, Gamepad2, BookOpen, Users } from "lucide-react";

const events = [
  {
    icon: Wrench,
    category: "Technical",
    title: "OTH",
    desc: "Technical hardware projects & innovation challenge.",
    color: "primary" as const,
  },
  {
    icon: Mic,
    category: "Talks",
    title: "SPEC Talk",
    desc: "Invited talks on cutting-edge science & technology.",
    color: "secondary" as const,
  },
  {
    icon: Award,
    category: "Competition",
    title: "Smart",
    desc: "Interschool science & talent competition.",
    color: "primary" as const,
  },
  {
    icon: FlaskConical,
    category: "Exhibition",
    title: "Science Expo",
    desc: "A hands-on science exhibition showcasing school & college projects.",
    color: "secondary" as const,
  },
  {
    icon: Telescope,
    category: "Astronomy",
    title: "Sky Watch",
    desc: "Stargazing night with telescopes to observe celestial bodies.",
    color: "primary" as const,
  },
  {
    icon: Gamepad2,
    category: "Fun",
    title: "Gest Play",
    desc: "Virtual racing simulation competition in driving simulators.",
    color: "secondary" as const,
  },
  {
    icon: BookOpen,
    category: "Records",
    title: "Malnad Book of Records",
    desc: "Showcase your extraordinary talents through record-breaking attempts.",
    color: "primary" as const,
  },
  {
    icon: Users,
    category: "Inter Branch",
    title: "Inter Branch Events",
    desc: "Fun competitions between academic branches within the college.",
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
            <span className="text-primary glow-text">SCIENTIA</span>
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
