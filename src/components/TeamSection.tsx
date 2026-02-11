import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Adithya Rao", role: "President", initials: "AR" },
  { name: "Priya Sharma", role: "Vice President", initials: "PS" },
  { name: "Karthik Hegde", role: "Technical Head", initials: "KH" },
  { name: "Sneha Kulkarni", role: "Event Coordinator", initials: "SK" },
  { name: "Rahul Gowda", role: "Design Lead", initials: "RG" },
  { name: "Meghana Shetty", role: "Research Head", initials: "MS" },
  { name: "Varun Nayak", role: "PR & Outreach", initials: "VN" },
  { name: "Anjali Patil", role: "Media Head", initials: "AP" },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Our Team</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            The <span className="text-primary glow-text">Crew</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-space p-6 rounded-xl border border-border text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 border border-border group-hover:border-primary/40 transition-colors">
                <span className="font-heading text-lg font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
