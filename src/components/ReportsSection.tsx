import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download } from "lucide-react";

const reports = [
  { title: "SA Club Report", link: "#" },
  { title: "NENAPINA DONI - Alumni meet 2023", link: "#" },
];

const ReportsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Documentation</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            <span className="text-primary glow-text">Reports</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between gap-4 p-4 rounded-xl border border-border card-space hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <FileText size={20} />
                </div>
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {report.title}
                </span>
              </div>
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                title="Download PDF"
              >
                <Download size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
