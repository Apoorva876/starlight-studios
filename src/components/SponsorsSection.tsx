import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sponsorTarget from "@/assets/sponsor-target.png";
import sponsorAshok from "@/assets/sponsor-ashok.png";
import sponsorDreamsville from "@/assets/sponsor-dreamsville.png";
import sponsorHometown from "@/assets/sponsor-hometown.png";

const sponsors = [
  { name: "Target Pre-University College", image: sponsorTarget },
  { name: "The Ashok Hassan", image: sponsorAshok },
  { name: "Dreamsville", image: sponsorDreamsville },
  { name: "Hometown Cafe", image: sponsorHometown },
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
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary glow-text">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            We extend our heartfelt gratitude to our generous sponsors whose unwavering support has fueled our endeavors. Their commitment has played an instrumental role in empowering our initiatives and fostering growth. With sincere appreciation, we acknowledge their invaluable contributions to our success.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center justify-center p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 transition-all duration-500 group overflow-hidden"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-auto rounded-lg object-contain max-h-60"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
