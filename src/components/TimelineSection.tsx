import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2013", title: "Club Founded", desc: "Science Association established at Malnad College of Engineering." },
  { year: "2015", title: "First Scientia Event", desc: "Hosted our first inter-college technical symposium with 500+ participants." },
  { year: "2015", title: "Research Wing", desc: "Launched dedicated research wing with student-led projects and publications." },
  { year: "2018", title: "National Recognition", desc: "Won Best Technical Club award at a national-level tech fest." },
  { year: "2024", title: "MBR", desc: "Introduced new event named 'Malnad Book Of Records'" },
  { year: "2025", title: "A New Milestone", desc: "Gramnd success of SCIENTIA with huge crowd of 500+ participants" },
];

const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Our Journey</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Milestones in <span className="text-secondary glow-text-purple">Space & Time</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50" />

          {milestones.map((m, i) => (
            <motion.div
              key={`${m.year}-${i}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-border z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="font-heading text-primary text-sm font-bold tracking-wider">{m.year}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
